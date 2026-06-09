import Link from "next/link";

export default function GraciasPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-5xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-white mb-3">¡Pago recibido!</h1>
        <p className="text-slate-400 mb-8">
          Tu licencia de MiNegocio está siendo generada y llegará a tu email en los próximos minutos.
        </p>

        <div className="card p-6 mb-6 text-left">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">Próximos pasos</p>
          <div className="space-y-3 text-sm text-slate-400">
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span>Revisa tu bandeja de entrada (también el spam)</span>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span>Copia la clave <span className="font-mono text-green-400">MNEG-XXXX-XXXX-XXXX-XXXX</span> del email</span>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span>Abre MiNegocio → pantalla de activación → pega la clave</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-950/40 border border-yellow-800/50 text-yellow-400 text-xs px-4 py-3 rounded-xl mb-8">
          Si no recibes el email en 10 minutos, escríbenos por WhatsApp con tu número de transacción Wompi.
        </div>

        <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
