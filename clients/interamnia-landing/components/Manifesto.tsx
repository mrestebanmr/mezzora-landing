import Reveal from "./Reveal";
import { stats } from "@/lib/content";

export default function Manifesto() {
  return (
    <section id="club" className="bg-bone text-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-navy">Il Club</p>
          <h2 className="font-display max-w-5xl text-5xl leading-[0.95] md:text-8xl">
            Benessere a 360°.
            <span className="text-navy"> Ogni giorno.</span>
            <span className="text-ink/35"> Per chi non si accontenta.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 border-t border-ink/15 md:mt-28 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`border-b border-ink/15 py-8 pr-4 md:border-b-0 md:py-10 ${
                i > 0 ? "md:border-l md:pl-8" : ""
              } ${i % 2 === 1 ? "border-l pl-5 md:pl-8" : ""}`}
            >
              <p className="font-display text-6xl text-navy md:text-8xl">{s.value}</p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-ink/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
