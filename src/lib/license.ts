import { createHmac } from "crypto";

const SECRET = process.env.LICENSE_SECRET!;

export function generarLicencia(fingerprint: string): string {
  const fp = fingerprint.trim().toUpperCase();
  const hex = createHmac("sha256", SECRET)
    .update(fp)
    .digest("hex")
    .slice(0, 16)
    .toUpperCase();
  return `MNEG-${hex.slice(0, 4)}-${hex.slice(4, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}`;
}
