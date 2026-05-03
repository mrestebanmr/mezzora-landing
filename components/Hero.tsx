"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = duration / end;
    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      <span className="text-5xl font-extrabold text-accent md:text-6xl">
        {count}
        {end === 15 ? "+" : ""}
      </span>
      {suffix && (
        <span className="ml-1 text-2xl font-bold text-accent md:text-3xl">
          {suffix}
        </span>
      )}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-bg-primary overflow-hidden">
      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,200,83,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 py-32 md:py-40 w-full">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-text-primary md:text-[64px] lg:text-[80px]"
        >
          Automatizziamo ciò che ti ruba tempo.{" "}
          <span className="text-accent">
            Senza snaturare il tuo business.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-6 max-w-[700px] text-lg leading-relaxed text-text-secondary md:text-xl"
        >
          Mezzora è l&apos;agenzia italiana che usa l&apos;IA per eliminare le
          attività ripetitive del tuo business — palestre, ristoranti, locali,
          e-commerce. Ti restituiamo ore, non complicazioni.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-8 md:gap-16"
        >
          <div className="flex flex-col">
            <CountUp end={15} suffix="h" />
            <span className="mt-1 text-sm text-text-secondary">
              risparmiate al mese per cliente
            </span>
          </div>
          <div className="flex flex-col">
            <CountUp end={3} suffix="" />
            <span className="mt-1 text-sm text-text-secondary">
              verticali specializzati
            </span>
          </div>
          <div className="flex flex-col">
            <CountUp end={14} suffix="gg" />
            <span className="mt-1 text-sm text-text-secondary">
              per il primo sistema attivo
            </span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="https://calendly.com/mezzora"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-accent-hover"
          >
            Prenota una call di 20 minuti
          </a>
          <a
            href="https://wa.me/393279873102?text=Ciao%20Esteban%2C%20ho%20visto%20Mezzora%20e%20vorrei%20saperne%20di%20più"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-accent px-8 py-4 text-base font-semibold text-accent transition-colors hover:bg-accent/10"
          >
            Scrivimi su WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
