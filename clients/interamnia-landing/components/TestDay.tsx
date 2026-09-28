"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { obiettivi, waLink } from "@/lib/content";

// Se impostato, ogni richiesta viene inviata anche a questo webhook (es. n8n → CRM + follow-up automatico).
const LEAD_WEBHOOK = process.env.NEXT_PUBLIC_LEAD_WEBHOOK;

const fasce = ["Mattina", "Pausa pranzo", "Pomeriggio", "Sera"];

export default function TestDay() {
  const [obiettivo, setObiettivo] = useState(obiettivi[0]);
  const [fascia, setFascia] = useState(fasce[0]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();

    if (LEAD_WEBHOOK) {
      fetch(LEAD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, telefono, obiettivo, fascia, fonte: "landing-testday" }),
        keepalive: true,
      }).catch(() => {});
    }

    const msg = `Ciao! Sono ${nome} e vorrei prenotare il mio Test Day.\nObiettivo: ${obiettivo}\nPreferisco: ${fascia}\nTelefono: ${telefono}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="testday" className="relative overflow-hidden bg-ink">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[50svh] lg:min-h-full">
          <Image
            src="/images/reception.jpg"
            alt="La reception del Club Interamnia con la scritta Benvenuti"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[20%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-ink/20 lg:to-ink" />
          <div className="absolute bottom-8 left-5 right-5 md:left-8 lg:hidden">
            <p className="font-display text-6xl">Test Day</p>
          </div>
        </div>

        <div className="relative px-5 py-16 md:px-12 md:py-24 lg:px-16">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-sun">Mai stato al Club?</p>
          <h2 className="hidden font-display text-8xl lg:block xl:text-9xl">Test Day</h2>
          <p className="mt-6 max-w-md text-lg text-white/75">
            Un ingresso a prezzo speciale con accesso a sala attrezzi, piscina e corsi del Club.
            Un giorno non ti basterà.
          </p>

          <form onSubmit={onSubmit} className="mt-10 flex max-w-lg flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Nome</span>
                <input
                  name="nome"
                  required
                  autoComplete="given-name"
                  placeholder="Mario"
                  className="border-b border-white/25 bg-transparent py-3 text-lg outline-none transition placeholder:text-white/25 focus:border-sun"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Cellulare</span>
                <input
                  name="telefono"
                  required
                  type="tel"
                  autoComplete="tel"
                  placeholder="333 112 2334"
                  className="border-b border-white/25 bg-transparent py-3 text-lg outline-none transition placeholder:text-white/25 focus:border-sun"
                />
              </label>
            </div>

            <fieldset>
              <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                Il tuo obiettivo
              </legend>
              <div className="flex flex-wrap gap-2">
                {obiettivi.map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => setObiettivo(o)}
                    aria-pressed={obiettivo === o}
                    className={`border px-4 py-2 text-sm transition ${
                      obiettivo === o ? "border-sun bg-sun font-semibold text-ink" : "border-white/20 text-white/75 hover:border-white"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                Quando preferisci venire
              </legend>
              <div className="flex flex-wrap gap-2">
                {fasce.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFascia(f)}
                    aria-pressed={fascia === f}
                    className={`border px-4 py-2 text-sm transition ${
                      fascia === f ? "border-white bg-white font-semibold text-ink" : "border-white/20 text-white/75 hover:border-white"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="flex items-start gap-3 text-sm text-white/60">
              <input type="checkbox" required className="mt-1 accent-[#ffcb05]" />
              <span>
                Ho letto l&apos;
                <a href="https://www.interamniaclub.it/privacy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  informativa privacy
                </a>{" "}
                e acconsento al trattamento dei miei dati.
              </span>
            </label>

            <button
              type="submit"
              className="group flex items-center justify-center gap-3 bg-sun px-8 py-5 text-sm font-bold uppercase tracking-[0.14em] text-ink transition hover:bg-white"
            >
              Prenota su WhatsApp
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </button>
            <p className="text-xs text-white/40">
              Offerta una tantum riservata ai non iscritti. Ti rispondiamo in giornata.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
