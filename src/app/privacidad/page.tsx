import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad — MiNegocio",
};

const sections = [
  {
    n: "01",
    title: "Responsable del tratamiento",
    content: (
      <p>
        <strong className="text-warm font-semibold">Yilmer Carrillo Díaz</strong>, desarrollador
        independiente de software, con correo de contacto{" "}
        <a
          href="mailto:yilmercarrillo74@gmail.com"
          className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
        >
          yilmercarrillo74@gmail.com
        </a>
        . Responsable del sitio web{" "}
        <strong className="text-warm font-semibold">minegocio-web.vercel.app</strong> y del
        software MiNegocio.
      </p>
    ),
  },
  {
    n: "02",
    title: "Datos que recopilamos",
    content: (
      <ul className="space-y-3">
        {[
          {
            term: "Correo electrónico",
            def: "Para enviar la clave de licencia adquirida.",
          },
          {
            term: "ID de equipo (hardware ID)",
            def: "Identificador técnico del PC del usuario, necesario para generar la licencia de software vinculada a ese equipo.",
          },
          {
            term: "Datos de pago",
            def: "Procesados directamente por Wompi (Bancolombia). No almacenamos números de tarjeta ni datos bancarios.",
          },
        ].map(({ term, def }) => (
          <li key={term} className="flex gap-3">
            <span className="text-gold flex-shrink-0 mt-0.5 text-xs">—</span>
            <span>
              <strong className="text-warm font-semibold">{term}:</strong> {def}
            </span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    n: "03",
    title: "Finalidad del tratamiento",
    content: (
      <ul className="space-y-3">
        {[
          "Generar y entregar la licencia de software al correo proporcionado.",
          "Verificar la validez de la licencia en el software MiNegocio.",
          "Atender solicitudes de soporte técnico.",
        ].map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-gold flex-shrink-0 mt-0.5 text-xs">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    n: "04",
    title: "Compartición con terceros",
    content: (
      <>
        <p className="mb-4">Los datos son compartidos únicamente con:</p>
        <ul className="space-y-3 mb-4">
          {[
            {
              term: "Wompi (Bancolombia)",
              def: "Pasarela de pago. Procesa la transacción y notifica el resultado. Sujeto a la política de privacidad de Wompi.",
            },
            {
              term: "Resend",
              def: "Servicio de envío de correos transaccionales. Utilizado exclusivamente para entregar la licencia.",
            },
          ].map(({ term, def }) => (
            <li key={term} className="flex gap-3">
              <span className="text-gold flex-shrink-0 mt-0.5 text-xs">—</span>
              <span>
                <strong className="text-warm font-semibold">{term}:</strong> {def}
              </span>
            </li>
          ))}
        </ul>
        <p>No vendemos, cedemos ni compartimos datos personales con fines publicitarios o comerciales.</p>
      </>
    ),
  },
  {
    n: "05",
    title: "Tiempo de conservación",
    content: (
      <p>
        El correo electrónico y el ID de equipo se conservan mientras la licencia esté activa,
        con el fin de poder brindar soporte. El usuario puede solicitar la eliminación de sus
        datos en cualquier momento escribiendo a{" "}
        <a
          href="mailto:yilmercarrillo74@gmail.com"
          className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
        >
          yilmercarrillo74@gmail.com
        </a>
        .
      </p>
    ),
  },
  {
    n: "06",
    title: "Derechos del usuario",
    content: (
      <>
        <p className="mb-4">
          De conformidad con la Ley 1581 de 2012 (Colombia), el usuario tiene derecho a:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Conocer, actualizar y rectificar sus datos personales.",
            "Solicitar prueba de la autorización otorgada.",
            "Ser informado sobre el uso de sus datos.",
            "Revocar la autorización y solicitar la supresión de sus datos.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-gold flex-shrink-0 mt-0.5 text-xs">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Para ejercer estos derechos escriba a{" "}
          <a
            href="mailto:yilmercarrillo74@gmail.com"
            className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
          >
            yilmercarrillo74@gmail.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    n: "07",
    title: "Seguridad",
    content: (
      <p>
        Aplicamos medidas técnicas razonables para proteger los datos recopilados.
        Las comunicaciones entre el usuario y el servidor utilizan cifrado HTTPS.
        Las claves de cifrado y secretos del sistema se almacenan en variables de
        entorno protegidas del servidor, no en el código fuente.
      </p>
    ),
  },
  {
    n: "08",
    title: "Contacto",
    content: (
      <p>
        Para cualquier consulta sobre esta política escriba a{" "}
        <a
          href="mailto:yilmercarrillo74@gmail.com"
          className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
        >
          yilmercarrillo74@gmail.com
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacidadPage() {
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

      <main className="pt-16">

        {/* HEADER */}
        <div className="border-b border-surface-border">
          <div className="max-w-3xl mx-auto px-6 pt-24 pb-14 animate-enter">
            <span className="badge-gold mb-7 inline-block">Ley 1581 de 2012 · Colombia</span>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-warm leading-tight mb-4">
              Política de<br />
              <span className="text-gold">Privacidad.</span>
            </h1>
            <p className="text-warm-muted text-sm">Última actualización: junio 2026</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto px-6 py-16 animate-enter" style={{ animationDelay: "80ms" }}>
          <div className="space-y-0">
            {sections.map((section, i) => (
              <div
                key={section.n}
                className="grid grid-cols-[3rem_1fr] gap-6 py-10 border-b border-surface-border"
                style={i === 0 ? { borderTop: "1px solid var(--surface-border)" } : {}}
              >
                {/* Number */}
                <div
                  className="font-display text-xs font-semibold tabular-nums tracking-widest pt-1"
                  style={{ color: "var(--gold)" }}
                >
                  {section.n}
                </div>

                {/* Content */}
                <div>
                  <h2 className="font-display text-xl font-semibold text-warm mb-5 leading-snug">
                    {section.title}
                  </h2>
                  <div className="text-warm-muted text-sm leading-relaxed" style={{ lineHeight: "1.75" }}>
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
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
    </div>
  );
}
