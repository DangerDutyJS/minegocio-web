import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiNegocio — Software de gestión comercial",
  description: "Controla tu tienda: caja, inventario, créditos, reportes y más. Licencia vitalicia por $200.000.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
