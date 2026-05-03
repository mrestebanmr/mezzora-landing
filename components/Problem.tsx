"use client";

import { motion } from "framer-motion";
import { Clock, Workflow, TrendingDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const painPoints = [
  {
    icon: Clock,
    title: "Ore perse ogni giorno",
    description:
      "Risposte, follow-up, aggiornamenti manuali. Attività che si ripetono, giorno dopo giorno.",
  },
  {
    icon: Workflow,
    title: "Processi lenti e disorganizzati",
    description:
      "Informazioni sparse, strumenti che non comunicano, errori umani che costano caro.",
  },
  {
    icon: TrendingDown,
    title: "Opportunità che sfuggono",
    description:
      "Senza sistemi, perdi clienti potenziali mentre sei occupato con il lavoro operativo.",
  },
];

export default function Problem() {
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
            IL PROBLEMA
          </span>
          <h2 className="mt-4 font-heading text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-primary md:text-[48px] lg:text-[56px]">
            Stai perdendo tempo ogni giorno.
          </h2>
          <p className="mt-4 max-w-[700px] text-lg leading-relaxed text-text-secondary md:text-xl">
            La maggior parte dei titolari di piccole imprese spende ore preziose
            in attività ripetitive che non generano valore. È normale — ma non è
            inevitabile.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              className="group rounded-2xl border border-border bg-bg-primary p-8 transition-colors duration-300 hover:border-accent/50"
            >
              <point.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 font-heading text-xl font-bold text-text-primary md:text-2xl">
                {point.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-text-secondary">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
