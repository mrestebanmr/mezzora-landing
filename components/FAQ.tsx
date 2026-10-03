"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "Quanto tempo serve per vedere i primi risultati?",
    a: "Il sistema va in produzione entro 14-20 giorni dalla firma. I primi risultati misurabili (riduzione no-show, riattivazioni) sono visibili dal primo mese di operatività.",
  },
  {
    q: "I miei dati sono al sicuro?",
    a: "Sì. Tutti i dati restano in UE (server in Germania), siamo conformi GDPR e firmiamo un DPA con ogni cliente. Non condividiamo dati con terze parti non autorizzate.",
  },
  {
    q: "Devo cambiare i miei strumenti attuali?",
    a: "No. Mezzora si integra con il gestionale che già usi (calendari, CRM, e-commerce). Aggiungiamo intelligenza, non sostituiamo quello che funziona.",
  },
  {
    q: "Cosa succede se voglio interrompere il servizio?",
    a: "Disdetta libera con 30 giorni di preavviso. Niente penali. Ti consegniamo backup di flussi e configurazioni se vuoi continuare in autonomia.",
  },
  {
    q: "Quanto costa?",
    a: "Dipende dal verticale e dalla complessità. Generalmente: setup una tantum + canone mensile. Parliamone in una call di 20 minuti — capiamo se ha senso e ti faccio un preventivo concreto.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeader
            eyebrow="Domande frequenti"
            title="Le risposte che cerchi."
            subtitle="Tutto quello che devi sapere prima di iniziare."
          />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                data-reveal
                style={{ "--d": i } as React.CSSProperties}
                className={`glass rounded-2xl transition-colors ${isOpen ? "border-accent/40" : ""}`}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left text-base font-semibold text-text-primary transition-colors hover:text-accent md:text-lg"
                  >
                    {faq.q}
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-accent bg-accent text-black"
                          : "border-white/15 text-text-secondary"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className="faq-panel"
                  data-open={isOpen}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-base leading-relaxed text-text-secondary">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
