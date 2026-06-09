import Link from "next/link";

const features = [
  { icon: "🧾", title: "Punto de venta", desc: "Registra ventas rápido, aplica descuentos, maneja varios métodos de pago." },
  { icon: "📦", title: "Inventario", desc: "Controla entradas, salidas y stock en tiempo real. Alertas de stock bajo." },
  { icon: "👥", title: "Clientes y créditos", desc: "Fiados con control de cartera, cuotas y historial de pagos." },
  { icon: "🏦", title: "Bancos y gastos", desc: "Registra movimientos bancarios, gastos operativos y billetera." },
  { icon: "📊", title: "Reportes", desc: "Ventas diarias, mensuales, balance general, estado de resultados e IVA." },
  { icon: "👷", title: "Empleados y nómina", desc: "Gestiona tu equipo, asigna permisos y controla turnos." },
  { icon: "🌐", title: "Acceso remoto", desc: "Consulta tu negocio desde el celular via PWA. Funciona en iPhone y Android." },
  { icon: "🔒", title: "Respaldo automático", desc: "Backup diario de tu base de datos. Tus datos siempre seguros." },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-onyx/80 backdrop-blur border-b border-[#222]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-bold text-white text-lg">🏪 MiNegocio</span>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/DangerDutyJS/minegocio/releases/latest/download/MiNegocio-Setup-10.0.0.exe"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Descargar gratis
            </a>
            <Link href="/comprar" className="btn-primary text-sm py-2 px-4">
              Comprar licencia
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            Licencia vitalicia — paga una vez, úsalo para siempre
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Controla tu negocio<br />
            <span className="text-blue-400">sin complicaciones</span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Caja registradora, inventario, créditos, reportes y acceso remoto desde el celular. Todo en una sola aplicación para Windows.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://github.com/DangerDutyJS/minegocio/releases/latest/download/MiNegocio-Setup-10.0.0.exe"
              className="btn-primary text-base"
            >
              ⬇ Descargar gratis (7 días de prueba)
            </a>
            <Link href="/comprar" className="btn-outline text-base">
              Comprar licencia — $200.000
            </Link>
          </div>
          <p className="text-slate-600 text-xs mt-4">Windows 10/11 · 64-bit · Sin suscripción</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">Todo lo que necesita tu tienda</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.title} className="card p-5">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-white text-sm mb-1">{f.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIO */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="card p-8">
            <div className="text-4xl mb-4">🔑</div>
            <h2 className="text-2xl font-bold text-white mb-1">Licencia vitalicia</h2>
            <p className="text-slate-500 text-sm mb-6">Un solo pago, sin mensualidades</p>
            <div className="text-5xl font-bold text-white mb-1">$200.000</div>
            <div className="text-slate-500 text-sm mb-8">COP · un solo pago</div>
            <ul className="text-left text-sm text-slate-400 space-y-2 mb-8">
              {["Todos los módulos incluidos", "Actualizaciones incluidas", "Soporte por WhatsApp", "Acceso remoto (PWA móvil)", "Sin límite de productos o clientes"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/comprar" className="btn-primary w-full block text-center">
              Comprar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">¿Cómo funciona?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
            {[
              { n: "1", t: "Descarga", d: "Instala MiNegocio gratis y úsalo 7 días de prueba" },
              { n: "2", t: "Copia tu ID", d: "La app muestra tu ID de equipo en la pantalla de activación" },
              { n: "3", t: "Paga", d: "Ingresa tu ID y email, paga con tarjeta, PSE o Nequi" },
              { n: "4", t: "Activa", d: "Recibe la clave por email e ingrésala en la app" },
            ].map((step) => (
              <div key={step.n} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center mb-3">
                  {step.n}
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{step.t}</h3>
                <p className="text-slate-500 text-xs">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1a1a1a] py-8 px-6 text-center text-slate-600 text-xs">
        <p>MiNegocio · Software de gestión comercial para Colombia</p>
      </footer>
    </main>
  );
}
