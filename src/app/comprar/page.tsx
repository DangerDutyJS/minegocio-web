"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ComprarForm() {
  const searchParams = useSearchParams();
  const [hardwareId, setHardwareId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const hwid = searchParams.get("hwid") ?? "";
    if (hwid) setHardwareId(hwid.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 16));
  }, [searchParams]);

  const hwidCompleto = hardwareId.length === 16;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!hwidCompleto) {
      setError("El ID de equipo debe tener exactamente 16 caracteres.");
      return;
    }
    if (!email.includes("@")) {
      setError("Ingresa un email válido para recibir tu licencia.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/crear-pago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hardwareId, email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al crear el pago");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm mb-8 inline-flex items-center gap-1 transition-colors">
          ← Volver
        </Link>

        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🔑</div>
          <h1 className="text-2xl font-bold text-white mb-1">Comprar licencia</h1>
          <p className="text-slate-500 text-sm">Pago único · $200.000 COP · Vitalicia</p>
        </div>

        <div className="card p-6 mb-4">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                ID de tu equipo
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={hardwareId}
                  onChange={(e) => setHardwareId(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""))}
                  maxLength={16}
                  placeholder="A1B2C3D4E5F6G7H8"
                  className={`w-full bg-onyx border rounded-xl px-4 py-3 text-white font-mono text-base outline-none transition-colors placeholder:text-slate-700 pr-10
                    ${hwidCompleto ? "border-green-600" : "border-[#333] focus:border-blue-500"}`}
                  autoComplete="off"
                  spellCheck={false}
                />
                {hwidCompleto && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-lg">✓</span>
                )}
              </div>
              {hwidCompleto ? (
                <p className="text-green-600 text-xs mt-1.5">ID detectado correctamente</p>
              ) : (
                <p className="text-slate-600 text-xs mt-1.5">
                  Lo ves en la app → pantalla de activación → "ID de equipo"
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                Email para recibir la licencia
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tucorreo@gmail.com"
                className="w-full bg-onyx border border-[#333] focus:border-blue-500 rounded-xl px-4 py-3 text-white text-base outline-none transition-colors placeholder:text-slate-700"
              />
            </div>

            {error && (
              <div className="bg-red-950/50 border border-red-800 text-red-400 text-sm px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Preparando pago...
                </>
              ) : (
                "Pagar $200.000 con Wompi →"
              )}
            </button>
          </form>
        </div>

        <div className="card p-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Métodos de pago aceptados</p>
          <div className="flex gap-2 flex-wrap">
            {["💳 Tarjeta crédito/débito", "🏦 PSE", "📱 Nequi", "📱 Bancolombia QR"].map((m) => (
              <span key={m} className="text-xs bg-coal border border-[#333] text-slate-400 px-3 py-1.5 rounded-lg">{m}</span>
            ))}
          </div>
        </div>

        <p className="text-center text-slate-700 text-xs mt-6">
          Procesado de forma segura por Wompi · Bancolombia
        </p>
      </div>
    </main>
  );
}

export default function ComprarPage() {
  return (
    <Suspense>
      <ComprarForm />
    </Suspense>
  );
}
