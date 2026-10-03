import { manifesto } from "@/lib/content";

export default function Manifesto() {
  return (
    <section className="bg-graphite py-24 text-porcelain md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <p data-reveal className="eyebrow text-terracotta">{manifesto.eyebrow}</p>
            <h2 data-reveal className="font-display mt-6 text-4xl leading-[1.08] font-medium text-balance md:text-[3.4rem]">
              {manifesto.title}
            </h2>
          </div>
          <div className="space-y-5 self-end text-base leading-relaxed text-porcelain/75 md:text-lg">
            {manifesto.body.map((p, i) => (
              <p key={i} data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>{p}</p>
            ))}
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-porcelain/10 md:grid-cols-4">
          {manifesto.stats.map((s, i) => (
            <div key={s.label} data-reveal style={{ "--d": `${i * 90}ms` } as React.CSSProperties} className="bg-graphite p-6 md:p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="font-display text-5xl font-medium text-porcelain md:text-6xl">
                  {s.prefix}
                  <span data-count={s.value}>{s.value}</span>
                  {s.suffix}
                </span>
                <span className="mt-3 block text-sm leading-snug text-porcelain/65">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
