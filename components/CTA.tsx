import { ArrowRight } from "lucide-react";

const WHATSAPP =
  "https://wa.me/393279873102?text=Ciao%20Esteban%2C%20ho%20visto%20Mezzora%20e%20vorrei%20saperne%20di%20più";

export default function CTA() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div
          data-reveal
          className="beam-border relative overflow-hidden rounded-3xl bg-bg-secondary/70 px-6 py-16 text-center backdrop-blur-xl md:px-16 md:py-24"
        >
          {/* Glow propio de la tarjeta */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-[120px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(circle,rgba(0,200,83,0.18)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top,#000,transparent_70%)]"
            aria-hidden="true"
          />

          <span className="eyebrow">Inizia oggi</span>
          <h2 className="mx-auto mt-5 max-w-[820px] font-heading text-[36px] font-extrabold leading-[1.02] tracking-[-0.035em] text-text-primary md:text-[56px] lg:text-[68px]">
            Inizia a lavorare meno. <span className="text-gradient">Guadagnare di più.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-lg leading-relaxed text-text-secondary md:text-xl">
            Una call di 20 minuti è sufficiente per capire se possiamo aiutarti.
            Nessun impegno, nessuna pressione.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://calendly.com/mezzora"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold"
            >
              Prenota una call gratuita
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold"
            >
              Scrivimi su WhatsApp
            </a>
          </div>

          <p className="mt-7 font-mono text-xs text-text-secondary">
            Risposta garantita entro 24 ore · Nessun costo nascosto
          </p>
        </div>
      </div>
    </section>
  );
}
