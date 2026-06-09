import { NextRequest, NextResponse } from "next/server";
import { verifyWebhookSignature, parseHardwareId } from "@/lib/wompi";
import { generarLicencia } from "@/lib/license";
import { enviarLicencia } from "@/lib/email";

export async function POST(req: NextRequest) {
  const payload = await req.json();

  const checksum = payload?.signature?.checksum;
  if (!checksum || !verifyWebhookSignature(payload, checksum)) {
    return NextResponse.json({ error: "Firma inválida" }, { status: 401 });
  }

  const tx = payload?.data?.transaction;
  if (!tx || tx.status !== "APPROVED") {
    return NextResponse.json({ ok: true }); // ignorar no-aprobados
  }

  const hardwareId = parseHardwareId(tx.reference);
  if (!hardwareId) {
    console.error("Referencia sin hardware ID:", tx.reference);
    return NextResponse.json({ error: "Referencia inválida" }, { status: 400 });
  }

  const email = tx.customer_email;
  if (!email) {
    console.error("Sin email en transacción:", tx.id);
    return NextResponse.json({ error: "Sin email" }, { status: 400 });
  }

  const licencia = generarLicencia(hardwareId);

  try {
    await enviarLicencia(email, hardwareId, licencia);
  } catch (err) {
    console.error("Error enviando email:", err);
    // no retornar error — el pago ya fue procesado
  }

  console.log(`Licencia generada: ${licencia} → ${email} (hw: ${hardwareId})`);
  return NextResponse.json({ ok: true });
}
