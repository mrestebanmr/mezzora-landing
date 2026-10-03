import { Crown, Gem, Layers, ScanLine } from "lucide-react";
import { services } from "@/lib/content";
import SectionHeader from "./SectionHeader";

const icons = { cadcam: ScanLine, carillas: Layers, fija: Crown, zirconio: Gem } as const;

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={services.eyebrow} title={services.title} intro={services.intro} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.items.map((s, i) => {
            const Icon = icons[s.key as keyof typeof icons];
            return (
              <article
                key={s.key}
                data-reveal
                style={{ "--d": `${(i % 2) * 100}ms` } as React.CSSProperties}
                className="group rounded-3xl border border-graphite/10 bg-white/60 p-8 transition-colors hover:border-terracotta/40 hover:bg-white md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-porcelain-deep text-terracotta-strong">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm text-sand">0{i + 1}</span>
                </div>
                <h3 className="font-display mt-8 text-2xl font-medium md:text-[1.7rem]">{s.name}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{s.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
