import { Clock, Workflow, TrendingDown } from "lucide-react";
import SectionHeader from "./SectionHeader";

const painPoints = [
  {
    icon: Clock,
    code: "ERR_01",
    title: "Ore perse ogni giorno",
    description:
      "Risposte, follow-up, aggiornamenti manuali. Attività che si ripetono, giorno dopo giorno.",
  },
  {
    icon: Workflow,
    code: "ERR_02",
    title: "Processi lenti e disorganizzati",
    description:
      "Informazioni sparse, strumenti che non comunicano, errori umani che costano caro.",
  },
  {
    icon: TrendingDown,
    code: "ERR_03",
    title: "Opportunità che sfuggono",
    description:
      "Senza sistemi, perdi clienti potenziali mentre sei occupato con il lavoro operativo.",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Il problema"
          title={
            <>
              Stai perdendo tempo <span className="text-white/40">ogni giorno.</span>
            </>
          }
          subtitle="La maggior parte dei titolari di piccole imprese spende ore preziose in attività ripetitive che non generano valore. È normale — ma non è inevitabile."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <article
              key={point.title}
              data-reveal
              style={{ "--d": i } as React.CSSProperties}
              className="spotlight glass rounded-2xl p-7 md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                  <point.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-[11px] tracking-widest text-text-secondary/70">
                  {point.code}
                </span>
              </div>
              <h3 className="mt-8 font-heading text-xl font-bold tracking-tight text-text-primary md:text-2xl">
                {point.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
