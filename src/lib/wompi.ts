import { createHash } from "crypto";

export const AMOUNT_COP = 20_000_000; // $200,000 en centavos
export const CURRENCY = "COP";

export function buildCheckoutUrl(reference: string, email: string): string {
  const integrity = createHash("sha256")
    .update(`${reference}${AMOUNT_COP}${CURRENCY}${process.env.WOMPI_INTEGRITY_SECRET}`)
    .digest("hex");

  const base = "https://checkout.wompi.co/p/";
  const params = new URLSearchParams({
    "public-key": process.env.WOMPI_PUBLIC_KEY!,
    currency: CURRENCY,
    "amount-in-cents": String(AMOUNT_COP),
    reference,
    "redirect-url": `${process.env.NEXT_PUBLIC_BASE_URL}/gracias`,
    "customer-data:email": email,
    "signature:integrity": integrity,
  });

  return `${base}?${params.toString()}`;
}

export function buildReference(hardwareId: string): string {
  const ts = Date.now().toString(36).slice(-6).toUpperCase();
  return `MNEG-${hardwareId}-${ts}`;
}

export function parseHardwareId(reference: string): string | null {
  // formato: MNEG-{16chars}-{6chars}
  const parts = reference.split("-");
  if (parts.length < 3 || parts[0] !== "MNEG") return null;
  const hw = parts[1];
  return hw.length === 16 ? hw : null;
}

export function verifyWebhookSignature(payload: Record<string, unknown>, checksum: string): boolean {
  const tx = (payload as { data: { transaction: Record<string, unknown> } }).data?.transaction;
  if (!tx) return false;

  const str = `${tx.id}${tx.status}${tx.amount_in_cents}${tx.currency}${process.env.WOMPI_EVENTS_SECRET}`;
  const expected = createHash("sha256").update(str).digest("hex");
  return expected === checksum;
}
