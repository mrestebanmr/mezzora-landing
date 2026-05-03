"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function CTA() {
  return (
    <section className="bg-bg-secondary py-20 md:py-30">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            INIZIA OGGI
          </span>
          <h2 className="mx-auto mt-4 max-w-[800px] font-heading text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-primary md:text-[48px] lg:text-[60px]">
            Inizia a lavorare meno. Guadagnare di più.
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-lg leading-relaxed text-text-secondary md:text-xl">
            Una call di 20 minuti è sufficiente per capire se possiamo aiutarti.
            Nessun impegno, nessuna pressione.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://calendly.com/mezzora"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-accent-hover"
            >
              Prenota una call gratuita
            </a>
            <a
              href="https://wa.me/393279873102?text=Ciao%20Esteban%2C%20ho%20visto%20Mezzora%20e%20vorrei%20saperne%20di%20più"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-accent px-8 py-4 text-base font-semibold text-accent transition-colors hover:bg-accent/10"
            >
              Scrivimi su WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-text-secondary">
            Risposta garantita entro 24 ore · Nessun costo nascosto
          </p>
        </motion.div>
      </div>
    </section>
  );
}
