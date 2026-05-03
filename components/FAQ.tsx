"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-bg-primary py-20 md:py-30">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            DOMANDE FREQUENTI
          </span>
          <h2 className="mt-4 font-heading text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-primary md:text-[48px] lg:text-[56px]">
            Le risposte che cerchi.
          </h2>
          <p className="mt-4 max-w-[700px] text-lg leading-relaxed text-text-secondary md:text-xl">
            Tutto quello che devi sapere prima di iniziare.
          </p>
        </motion.div>

        <div className="mt-12 max-w-[800px]">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="border-b border-border"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between py-6 text-left text-lg font-semibold text-text-primary transition-colors hover:text-accent"
              >
                {faq.q}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-base leading-relaxed text-text-secondary">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
