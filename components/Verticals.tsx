"use client";

import { motion } from "framer-motion";
import { Dumbbell, UtensilsCrossed, ShoppingBag, Building2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const verticals = [
  {
    icon: Dumbbell,
    pill: "FITNESS & SPORT",
    title: "Palestre",
    description:
      "Gestione iscritti, prenotazioni classi, promemoria pagamenti e riattivazione membri inattivi.",
  },
  {
    icon: UtensilsCrossed,
    pill: "RISTORAZIONE",
    title: "Ristoranti & Locali",
    description:
      "Conferma prenotazioni, gestione liste d'attesa, comunicazioni clienti e raccolta feedback.",
  },
  {
    icon: ShoppingBag,
    pill: "VENDITA ONLINE",
    title: "E-commerce",
    description:
      "Gestione ordini, assistenza clienti, recupero carrelli abbandonati e aggiornamenti in tempo reale.",
  },
  {
    icon: Building2,
    pill: "PMI",
    title: "Piccole imprese",
    description:
      "Eliminiamo il lavoro manuale quotidiano: preventivi, follow-up, fatturazione e comunicazione clienti.",
  },
];

export default function Verticals() {
  return (
    <section className="bg-bg-secondary py-20 md:py-30">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            PER CHI È MEZZORA
          </span>
          <h2 className="mt-4 font-heading text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-primary md:text-[48px] lg:text-[56px]">
            Settori che trasformiamo.
          </h2>
          <p className="mt-4 max-w-[700px] text-lg leading-relaxed text-text-secondary md:text-xl">
            Lavoriamo con attività italiane che vogliono crescere senza
            impazzire.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {verticals.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="group rounded-2xl border border-border bg-bg-primary p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
            >
              <v.icon className="h-10 w-10 text-accent" />
              <span className="mt-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                {v.pill}
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold text-text-primary md:text-2xl">
                {v.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-text-secondary">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
