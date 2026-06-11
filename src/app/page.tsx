import Link from "next/link";

const DOWNLOAD_URL =
  "https://github.com/DangerDutyJS/minegocio/releases/download/v11.1.0/MiNegocio-Setup-11.1.0.exe";

const features = [
  { n: "01", title: "Punto de venta", desc: "Registra ventas rápido, aplica descuentos y maneja múltiples métodos de pago." },
  { n: "02", title: "Inventario", desc: "Controla entradas, salidas y stock en tiempo real. Alertas de stock bajo." },
  { n: "03", title: "Clientes y créditos", desc: "Fiados con control de cartera, cuotas e historial completo de pagos." },
  { n: "04", title: "Bancos y gastos", desc: "Registra movimientos bancarios, gastos operativos y billetera digital." },
  { n: "05", title: "Reportes", desc: "Ventas diarias, mensuales, balance general, estado de resultados e IVA." },
  { n: "06", title: "Empleados y nómina", desc: "Gestiona tu equipo, asigna permisos por rol y controla turnos." },
  { n: "07", title: "Acceso remoto", desc: "Consulta tu negocio desde el celular vía PWA. Funciona en iOS y Android." },
  { n: "08", title: "Respaldo automático", desc: "Backup diario de tu base de datos. Tus datos siempre protegidos." },
];

const steps = [
  { n: "01", t: "Descarga", d: "Instala MiNegocio gratis y úsalo 7 días sin restricciones" },
  { n: "02", t: "Copia tu ID", d: "La app muestra tu ID de equipo en la pantalla de activación" },
  { n: "03", t: "Paga", d: "Ingresa tu ID y email, paga con tarjeta, PSE o Nequi" },
  { n: "04", t: "Activa", d: "Recibe la clave por email e ingrésala en la app. Listo." },
];

const perks = [
  "Todos los módulos incluidos",
  "Actualizaciones de por vida",
  "Soporte por WhatsApp",
  "Acceso remoto vía PWA móvil",
  "Sin límite de productos o clientes",
  "Backup automático diario",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-xl italic font-semibold text-gold tracking-tight">
            MiNegocio
          </span>
          <div className="flex items-center gap-5">
            <a
              href={DOWNLOAD_URL}
              className="text-warm-muted hover:text-warm text-sm transition-colors hidden sm:block"
            >
              Descargar gratis
            </a>
            <Link href="/comprar" className="btn-primary text-sm !py-2.5 !px-5">
              Comprar licencia
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-44 pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-enter" style={{ animationDelay: "0ms" }}>
            <span className="badge-gold">
              Licencia vitalicia · paga una vez, úsalo siempre
            </span>
          </div>

          <h1
            className="font-display text-[clamp(3rem,8vw,6.5rem)] font-semibold text-warm leading-[0.92] mt-8 mb-8 animate-enter"
            style={{ animationDelay: "90ms" }}
          >
            Gestión completa<br />
            <span className="text-gold">para tu tienda,</span><br />
            sin complicaciones.
          </h1>

          <p
            className="text-warm-muted text-lg sm:text-xl max-w-lg leading-relaxed mb-12 animate-enter"
            style={{ animationDelay: "180ms" }}
          >
            Caja registradora, inventario, créditos, reportes y acceso remoto
            desde el celular. Una sola aplicación para Windows.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-16 animate-enter"
            style={{ animationDelay: "270ms" }}
          >
            <a href={DOWNLOAD_URL} className="btn-primary">
              Descargar gratis — 7 días de prueba
            </a>
            <Link href="/comprar" className="btn-outline">
              Comprar licencia · $200.000
            </Link>
          </div>

          <div
            className="flex flex-wrap gap-x-7 gap-y-2 text-xs text-warm-dim animate-enter"
            style={{ animationDelay: "360ms" }}
          >
            {["8 módulos completos", "Windows 10/11 · 64-bit", "Sin suscripción mensual", "Soporte por WhatsApp"].map(
              (item, i, arr) => (
                <span key={item} className="flex items-center gap-7">
                  {item}
                  {i < arr.length - 1 && <span className="text-warm-dim opacity-40">·</span>}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="border-y border-surface-border py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          {[
            { v: "8", l: "módulos incluidos" },
            { v: "7", l: "días de prueba gratis" },
            { v: "$200K", l: "pago único, vitalicio" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl sm:text-4xl font-semibold text-gold tabular-nums">
                {s.v}
              </div>
              <div className="text-warm-muted text-xs sm:text-sm mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between border-b border-surface-border pb-6 mb-0">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-warm leading-tight">
              Todo lo que necesita<br />
              <span className="text-gold">tu negocio.</span>
            </h2>
            <span className="text-warm-dim text-xs hidden sm:block pb-1">08 módulos</span>
          </div>

          <div className="feature-grid border-l border-surface-border">
            {features.map((f) => (
              <div key={f.n} className="p-7">
                <div className="font-display text-xs font-semibold text-gold mb-5 tabular-nums tracking-widest">
                  {f.n}
                </div>
                <h3 className="text-warm font-semibold text-sm mb-2">{f.title}</h3>
                <p className="text-warm-muted text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section
        className="py-24 px-6 border-t border-surface-border"
        style={{ background: "var(--surface-alt)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge-gold mb-7 inline-block">Un solo pago · Sin sorpresas</span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-warm mb-5 leading-tight">
              Licencia vitalicia.<br />
              <span className="text-gold">Paga una vez.</span>
            </h2>
            <p className="text-warm-muted text-base mb-10 leading-relaxed max-w-sm">
              Sin cuotas mensuales, sin renovaciones. Paga una vez
              y MiNegocio es tuyo para siempre.
            </p>
            <Link href="/comprar" className="btn-primary">
              Comprar ahora — $200.000 COP
            </Link>
          </div>

          <div className="price-card p-8 lg:p-10">
            <div className="font-display text-6xl sm:text-7xl font-bold text-warm mb-1 tabular-nums">
              $200.000
            </div>
            <div
              className="text-xs font-semibold mb-10 tracking-widest uppercase"
              style={{ color: "var(--gold)" }}
            >
              COP · pago único · vitalicio
            </div>
            <ul className="space-y-4">
              {perks.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-warm-muted">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                    style={{
                      background: "rgba(200,145,26,0.10)",
                      border: "1px solid rgba(200,145,26,0.25)",
                      color: "var(--gold)",
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6 border-t border-surface-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-warm mb-20 text-center leading-tight">
            Activación en{" "}
            <span className="text-gold">4 pasos simples.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-surface-border">
            {steps.map((s) => (
              <div
                key={s.n}
                className="p-8 border-b border-r border-surface-border last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-child(n+5)]:border-b-0 sm:[&:nth-child(n+3)]:border-b-0 lg:[&:nth-child(n+3)]:border-b"
              >
                <div
                  className="font-display text-5xl font-bold tabular-nums mb-6"
                  style={{ color: "rgba(200,145,26,0.18)" }}
                >
                  {s.n}
                </div>
                <h3 className="text-warm font-semibold mb-2">{s.t}</h3>
                <p className="text-warm-muted text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-28 px-6 border-t border-surface-border"
        style={{ background: "var(--surface-alt)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-warm mb-6 leading-tight">
            Empieza gratis hoy.<br />
            <span className="text-gold">Sin tarjeta requerida.</span>
          </h2>
          <p className="text-warm-muted text-base mb-12 max-w-md mx-auto leading-relaxed">
            Descarga MiNegocio, úsalo 7 días completos sin restricciones,
            y activa tu licencia cuando estés listo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={DOWNLOAD_URL} className="btn-primary">
              Descargar gratis
            </a>
            <Link href="/comprar" className="btn-outline">
              Comprar licencia · $200.000
            </Link>
          </div>
          <p className="text-warm-dim text-xs mt-8">
            Windows 10/11 · 64-bit · Sin suscripción
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-surface-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-dim">
          <span className="font-display italic text-gold text-base">MiNegocio</span>
          <span>Software de gestión comercial · Colombia</span>
          <Link href="/privacidad" className="hover:text-warm-muted transition-colors">
            Política de privacidad
          </Link>
        </div>
      </footer>

    </main>
  );
}
