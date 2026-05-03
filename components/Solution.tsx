"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const steps = [
  {
    num: "01",
    title: "Gestione automatica dei clienti",
    description:
      "Acquisizione, follow-up e comunicazione con i clienti gestiti in modo completamente automatico.",
  },
  {
    num: "02",
    title: "Risposte automatiche su WhatsApp",
    description:
      "Il tuo business risponde in tempo reale, anche quando sei impegnato o fuori orario.",
  },
  {
    num: "03",
    title: "Integrazione tra i tuoi strumenti",
    description:
      "Tutti i tuoi software parlano tra loro. Nessun copia-incolla, nessun dato perso.",
  },
  {
    num: "04",
    title: "Flussi senza intervento manuale",
    description:
      "Dai preventivi alle fatture, dai lead alle prenotazioni: tutto scorre senza toccare nulla.",
  },
];

export default function Solution() {
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
            LA SOLUZIONE
          </span>
          <h2 className="mt-4 font-heading text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-primary md:text-[48px] lg:text-[56px]">
            Sistemi che lavorano al posto tuo.
          </h2>
          <p className="mt-4 max-w-[700px] text-lg leading-relaxed text-text-secondary md:text-xl">
            Creiamo sistemi intelligenti che automatizzano il tuo lavoro
            operativo. Tu ti concentri su ciò che conta — il resto lo gestiamo
            noi.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="rounded-2xl border border-border bg-bg-secondary p-8"
            >
              <span className="font-heading text-4xl font-extrabold text-accent">
                {step.num}
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-text-primary md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
