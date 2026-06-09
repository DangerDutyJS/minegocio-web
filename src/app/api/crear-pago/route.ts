import { NextRequest, NextResponse } from "next/server";
import { buildCheckoutUrl, buildReference } from "@/lib/wompi";

export async function POST(req: NextRequest) {
  const { hardwareId, email } = await req.json();

  if (!hardwareId || hardwareId.length !== 16) {
    return NextResponse.json({ error: "ID de equipo inválido" }, { status: 400 });
  }
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  const reference = buildReference(hardwareId);
  const url = buildCheckoutUrl(reference, email);

  return NextResponse.json({ url });
}
