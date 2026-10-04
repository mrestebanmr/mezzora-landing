import SectionHeader from "./SectionHeader";
import type { Dict } from "@/lib/i18n";

export default function Solution({ t }: { t: Dict }) {
  const s = t.solution;
  return (
    <section id="soluzione" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeader
            eyebrow={s.eyebrow}
            title={
              <>
                {s.title} <span className="text-gradient">{s.titleAccent}</span>
              </>
            }
            subtitle={s.subtitle}
          />
        </div>

        <div data-process className="relative">
          {/* Riel y relleno que avanza con el scroll */}
          <div className="absolute bottom-6 left-[23px] top-6 w-px bg-white/10" aria-hidden="true" />
          <div
            className="process-line absolute bottom-6 left-[23px] top-6 w-px bg-gradient-to-b from-accent-mint via-accent to-accent-deep shadow-[0_0_12px_rgba(0,200,83,0.8)]"
            aria-hidden="true"
          />

          <ol className="space-y-6 md:space-y-10">
            {s.steps.map((step, i) => (
              <li key={step.title} data-step className="relative flex gap-6">
                <span className="step-num relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 bg-bg-secondary font-mono text-sm font-medium text-text-secondary">
                  0{i + 1}
                </span>
                <div data-reveal className="glass flex-1 rounded-2xl p-6 md:p-8">
                  <h3 className="font-heading text-xl font-bold tracking-tight text-text-primary md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
