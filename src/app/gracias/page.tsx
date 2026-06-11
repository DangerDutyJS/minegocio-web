import Link from "next/link";

const steps = [
  {
    n: "01",
    t: "Revisa tu email",
    d: "Busca un mensaje de MiNegocio en tu bandeja de entrada o en la carpeta de spam.",
  },
  {
    n: "02",
    t: "Copia la clave",
    d: "Encontrarás una clave con formato MNEG-XXXX-XXXX-XXXX-XXXX en el cuerpo del mensaje.",
    mono: true,
  },
  {
    n: "03",
    t: "Activa en la app",
    d: 'Abre MiNegocio → pantalla de activación → pega la clave y confirma.',
  },
];

export default function GraciasPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0D0B08" }}>

      {/* NAV */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-xl italic font-semibold text-gold tracking-tight">
            MiNegocio
          </Link>
          <Link
            href="/"
            className="text-warm-muted hover:text-warm text-sm transition-colors flex items-center gap-1.5"
          >
            <span style={{ color: "var(--warm-dim)" }}>←</span> Volver al inicio
          </Link>
        </div>
      </nav>

      <main className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-lg w-full py-20 animate-enter">

          {/* Ghost checkmark */}
          <div
            className="font-display leading-none mb-6 select-none"
            aria-hidden
            style={{ fontSize: "7rem", color: "rgba(200,145,26,0.15)" }}
          >
            ✓
          </div>

          <span className="badge-gold mb-7 inline-block">Pago confirmado</span>

          <h1 className="font-display text-5xl sm:text-6xl font-semibold text-warm leading-[0.93] mb-6">
            Tu licencia<br />
            <span className="text-gold">está en camino.</span>
          </h1>

          <p className="text-warm-muted text-base leading-relaxed mb-12">
            La clave de activación llegará a tu email en los próximos minutos.
          </p>

          {/* Steps */}
          <div className="price-card p-8 mb-4">
            <p className="field-label mb-7">Próximos pasos</p>
            <div className="space-y-7">
              {steps.map((step) => (
                <div key={step.n} className="flex gap-5">
                  <span
                    className="font-display text-xs font-semibold tabular-nums tracking-widest flex-shrink-0 pt-0.5"
                    style={{ color: "var(--gold)" }}
                  >
                    {step.n}
                  </span>
                  <div>
                    <div className="text-warm text-sm font-semibold mb-1">{step.t}</div>
                    {step.mono ? (
                      <p className="text-warm-muted text-xs leading-relaxed">
                        Encontrarás una clave con formato{" "}
                        <span
                          className="font-mono"
                          style={{ color: "rgba(74,222,128,0.75)" }}
                        >
                          MNEG-XXXX-XXXX-XXXX-XXXX
                        </span>{" "}
                        en el cuerpo del mensaje.
                      </p>
                    ) : (
                      <p className="text-warm-muted text-xs leading-relaxed">{step.d}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp fallback */}
          <div
            className="rounded-xl px-5 py-4 mb-10"
            style={{
              background: "rgba(200,145,26,0.07)",
              border: "1px solid rgba(200,145,26,0.20)",
            }}
          >
            <p className="text-xs leading-relaxed" style={{ color: "rgba(200,145,26,0.75)" }}>
              Si no recibes el email en 10 minutos, escríbenos por WhatsApp con
              tu número de transacción Wompi y lo resolvemos de inmediato.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
