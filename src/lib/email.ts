import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function enviarLicencia(to: string, hardwareId: string, licencia: string) {
  await resend.emails.send({
    from: "MiNegocio <licencias@minegocio.co>",
    to,
    subject: "Tu licencia de MiNegocio está lista 🎉",
    html: `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0F0F0F;font-family:Inter,system-ui,sans-serif;color:#e2e8f0;">
  <div style="max-width:520px;margin:40px auto;padding:0 16px;">

    <div style="text-align:center;margin-bottom:32px;">
      <div style="display:inline-block;background:linear-gradient(135deg,#3b82f6,#1d4ed8);border-radius:16px;padding:14px 20px;font-size:28px;margin-bottom:12px;">🏪</div>
      <h1 style="margin:0;font-size:24px;font-weight:700;color:#f1f5f9;">¡Gracias por tu compra!</h1>
      <p style="margin:8px 0 0;color:#94a3b8;font-size:14px;">Tu licencia de MiNegocio ha sido activada</p>
    </div>

    <div style="background:#1A1A1A;border:1px solid #333;border-radius:16px;padding:28px;margin-bottom:20px;">
      <p style="margin:0 0 12px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#3b82f6;">Tu clave de licencia</p>
      <div style="background:#0F0F0F;border:1px solid #1e3a5f;border-radius:10px;padding:16px;text-align:center;">
        <span style="font-family:'Courier New',monospace;font-size:22px;font-weight:700;color:#34d399;letter-spacing:3px;">${licencia}</span>
      </div>
      <p style="margin:12px 0 0;font-size:12px;color:#475569;">ID de equipo: <span style="font-family:monospace;color:#94a3b8;">${hardwareId}</span></p>
    </div>

    <div style="background:#1A1A1A;border:1px solid #333;border-radius:16px;padding:24px;margin-bottom:20px;">
      <p style="margin:0 0 14px;font-size:13px;font-weight:600;color:#f1f5f9;">¿Cómo activar?</p>
      <div style="font-size:13px;color:#94a3b8;line-height:1.8;">
        <div>① Abre MiNegocio en tu PC</div>
        <div>② En la pantalla de activación, haz clic en <strong style="color:#cbd5e1;">Tengo una licencia</strong></div>
        <div>③ Pega la clave de arriba y confirma</div>
        <div>④ ¡Listo! Tu software está activado de forma vitalicia</div>
      </div>
    </div>

    <div style="background:#2d1e00;border:1px solid #78350f;border-radius:12px;padding:16px;margin-bottom:28px;">
      <p style="margin:0;font-size:12px;color:#fbbf24;">⚠ Esta licencia está vinculada únicamente a tu equipo. Si cambias de PC, contacta soporte.</p>
    </div>

    <p style="text-align:center;font-size:12px;color:#334155;margin:0;">MiNegocio — Software de gestión comercial</p>
  </div>
</body>
</html>`,
  });
}
