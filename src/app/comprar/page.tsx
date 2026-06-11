"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const DOWNLOAD_URL =
  "https://github.com/DangerDutyJS/minegocio/releases/latest/download/MiNegocio-Setup-10.0.0.exe";

const perks = [
  "Todos los módulos incluidos",
  "Actualizaciones de por vida",
  "Soporte por WhatsApp",
  "Acceso remoto vía PWA móvil",
  "Sin límite de productos o clientes",
  "Backup automático diario",
];

const paymentMethods = ["Tarjeta crédito/débito", "PSE", "Nequi", "Bancolombia QR"];

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

      {/* CONTENT */}
      <div className="min-h-screen flex items-center pt-16">
        <div className="w-full max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── LEFT: editorial pitch ── */}
          <div className="animate-enter" style={{ animationDelay: "0ms" }}>
            <span className="badge-gold mb-8 inline-block">
              Un solo pago · Sin mensualidades
            </span>

            <h1 className="font-display text-5xl sm:text-6xl font-semibold text-warm leading-[0.93] mb-8">
              Activa tu<br />
              <span className="text-gold">licencia.</span>
            </h1>

            <div className="mb-10">
              <div className="font-display text-5xl font-bold text-warm tabular-nums">$200.000</div>
              <div
                className="text-xs font-semibold mt-1 tracking-widest uppercase"
                style={{ color: "var(--gold)" }}
              >
                COP · pago único · vitalicio
              </div>
            </div>

            <ul className="space-y-3.5 mb-10">
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

            <p className="text-xs" style={{ color: "var(--warm-dim)" }}>
              ¿Aún no has descargado la app?{" "}
              <a
                href={DOWNLOAD_URL}
                className="underline underline-offset-2 hover:text-warm-muted transition-colors"
                style={{ color: "var(--warm-dim)" }}
              >
                Descarga gratis aquí
              </a>
            </p>
          </div>

          {/* ── RIGHT: form ── */}
          <div className="animate-enter" style={{ animationDelay: "120ms" }}>
            <div className="price-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* HWID */}
                <div>
                  <label className="field-label">ID de tu equipo</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={hardwareId}
                      onChange={(e) =>
                        setHardwareId(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""))
                      }
                      maxLength={16}
                      placeholder="A1B2C3D4E5F6G7H8"
                      autoComplete="off"
                      spellCheck={false}
                      className={`input-field font-mono pr-10 ${hwidCompleto ? "input-field-valid" : ""}`}
                    />
                    {hwidCompleto && (
                      <span
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-base font-bold"
                        style={{ color: "rgba(74,222,128,0.85)" }}
                      >
                        ✓
                      </span>
                    )}
                  </div>
                  <p
                    className="text-xs mt-2"
                    style={{ color: hwidCompleto ? "rgba(74,222,128,0.7)" : "var(--warm-dim)" }}
                  >
                    {hwidCompleto
                      ? "ID detectado correctamente"
                      : 'Lo ves en la app → pantalla de activación → "ID de equipo"'}
                  </p>
                </div>

                {/* Email */}
                <div>
                  <label className="field-label">Email para recibir la licencia</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tucorreo@gmail.com"
                    className="input-field"
                  />
                </div>

                {/* Error */}
                {error && (
                  <div
                    className="text-sm px-4 py-3 rounded-xl"
                    style={{
                      background: "rgba(239,68,68,0.07)",
                      border: "1px solid rgba(239,68,68,0.25)",
                      color: "rgba(239,68,68,0.85)",
                    }}
                  >
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span
                        className="w-4 h-4 border-2 rounded-full animate-spin flex-shrink-0"
                        style={{
                          borderColor: "rgba(13,11,8,0.25)",
                          borderTopColor: "#0D0B08",
                        }}
                      />
                      Preparando pago...
                    </>
                  ) : (
                    "Pagar $200.000 con Wompi →"
                  )}
                </button>
              </form>
            </div>

            {/* Payment methods */}
            <div className="mt-5 px-1">
              <p className="field-label mb-3">Métodos de pago</p>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((m) => (
                  <span
                    key={m}
                    className="text-xs px-3 py-1.5 rounded-lg"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--surface-border)",
                      color: "var(--warm-muted)",
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <p
              className="text-center text-xs mt-6"
              style={{ color: "var(--warm-dim)" }}
            >
              Procesado de forma segura por Wompi · Bancolombia
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ComprarPage() {
  return (
    <Suspense>
      <ComprarForm />
    </Suspense>
  );
}
