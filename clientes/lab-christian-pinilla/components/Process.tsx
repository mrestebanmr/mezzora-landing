import { process } from "@/lib/content";
import SectionHeader from "./SectionHeader";

export default function Process() {
  return (
    <section id="proceso" className="bg-graphite py-24 text-porcelain md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={process.eyebrow} title={process.title} tone="dark" />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-porcelain/10 md:grid-cols-4">
          {process.steps.map((s, i) => (
            <li key={s.n} data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties} className="bg-graphite p-7 md:p-8">
              <span className="font-display text-sm text-terracotta">{s.n}</span>
              <h3 className="font-display mt-6 text-2xl font-medium">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-porcelain/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
