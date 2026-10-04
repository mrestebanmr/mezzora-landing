import { Clock, Workflow, TrendingDown } from "lucide-react";
import SectionHeader from "./SectionHeader";
import type { Dict } from "@/lib/i18n";

const icons = [Clock, Workflow, TrendingDown];

export default function Problem({ t }: { t: Dict }) {
  const p = t.problem;
  return (
    <section id="problema" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow={p.eyebrow}
          title={
            <>
              {p.title} <span className="text-white/40">{p.titleMuted}</span>
            </>
          }
          subtitle={p.subtitle}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {p.items.map((point, i) => {
            const Icon = icons[i];
            return (
              <article
                key={point.title}
                data-reveal
                style={{ "--d": i } as React.CSSProperties}
                className="spotlight glass rounded-2xl p-7 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[11px] tracking-widest text-text-secondary/70">
                    ERR_0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 font-heading text-xl font-bold tracking-tight text-text-primary md:text-2xl">
                  {point.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
