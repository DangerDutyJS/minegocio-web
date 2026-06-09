import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad — MiNegocio",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm mb-8 inline-flex items-center gap-1 transition-colors">
          ← Volver
        </Link>

        <h1 className="text-3xl font-bold text-white mb-2">Política de Privacidad</h1>
        <p className="text-slate-500 text-sm mb-10">Última actualización: junio 2026</p>

        <div className="space-y-8 text-slate-400 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-base mb-3">1. Responsable del tratamiento</h2>
            <p>
              <strong className="text-slate-300">Yilmer Carrillo Díaz</strong>, desarrollador independiente de software,
              con correo de contacto <strong className="text-slate-300">yilmercarrillo74@gmail.com</strong>.
              Responsable del sitio web <strong className="text-slate-300">minegocio-web.vercel.app</strong> y del
              software MiNegocio.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. Datos que recopilamos</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-slate-300">Correo electrónico:</strong> para enviar la clave de licencia adquirida.</li>
              <li><strong className="text-slate-300">ID de equipo (hardware ID):</strong> identificador técnico del PC del usuario, necesario para generar la licencia de software vinculada a ese equipo.</li>
              <li><strong className="text-slate-300">Datos de pago:</strong> procesados directamente por Wompi (Bancolombia). No almacenamos números de tarjeta ni datos bancarios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. Finalidad del tratamiento</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Generar y entregar la licencia de software al correo proporcionado.</li>
              <li>Verificar la validez de la licencia en el software MiNegocio.</li>
              <li>Atender solicitudes de soporte técnico.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">4. Compartición con terceros</h2>
            <p className="mb-2">Los datos son compartidos únicamente con:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-slate-300">Wompi (Bancolombia):</strong> pasarela de pago. Procesa la transacción y notifica el resultado. Sujeto a la política de privacidad de Wompi.</li>
              <li><strong className="text-slate-300">Resend:</strong> servicio de envío de correos transaccionales. Utilizado exclusivamente para entregar la licencia.</li>
            </ul>
            <p className="mt-2">No vendemos, cedemos ni compartimos datos personales con fines publicitarios o comerciales.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">5. Tiempo de conservación</h2>
            <p>
              El correo electrónico y el ID de equipo se conservan mientras la licencia esté activa,
              con el fin de poder brindar soporte. El usuario puede solicitar la eliminación de sus
              datos en cualquier momento escribiendo a <strong className="text-slate-300">yilmercarrillo74@gmail.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">6. Derechos del usuario</h2>
            <p>De conformidad con la Ley 1581 de 2012 (Colombia), el usuario tiene derecho a:</p>
            <ul className="space-y-1 list-disc list-inside mt-2">
              <li>Conocer, actualizar y rectificar sus datos personales.</li>
              <li>Solicitar prueba de la autorización otorgada.</li>
              <li>Ser informado sobre el uso de sus datos.</li>
              <li>Revocar la autorización y solicitar la supresión de sus datos.</li>
            </ul>
            <p className="mt-2">Para ejercer estos derechos escriba a <strong className="text-slate-300">yilmercarrillo74@gmail.com</strong>.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">7. Seguridad</h2>
            <p>
              Aplicamos medidas técnicas razonables para proteger los datos recopilados.
              Las comunicaciones entre el usuario y el servidor utilizan cifrado HTTPS.
              Las claves de cifrado y secretos del sistema se almacenan en variables de entorno
              protegidas del servidor, no en el código fuente.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">8. Contacto</h2>
            <p>
              Para cualquier consulta sobre esta política escriba a{" "}
              <a href="mailto:yilmercarrillo74@gmail.com" className="text-blue-400 hover:text-blue-300">
                yilmercarrillo74@gmail.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
