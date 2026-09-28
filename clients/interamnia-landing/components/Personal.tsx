import Reveal from "./Reveal";
import { personal, waLink } from "@/lib/content";

export default function Personal() {
  return (
    <section id="personal" className="bg-bone py-24 text-ink md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <Reveal>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-navy">Personal Training</p>
            <h2 className="font-display text-6xl md:text-9xl">
              Il tuo
              <br />
              <span className="text-navy">{personal.title}</span>
            </h2>
            <p className="mt-8 max-w-md text-lg text-ink/70">{personal.subtitle}</p>
            <a
              href={waLink("Ciao! Vorrei informazioni sul PT Pack.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-ink px-8 py-5 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-navy"
            >
              Prenota una seduta
            </a>
          </Reveal>

          <ol className="flex flex-col">
            {personal.steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <li className="grid grid-cols-[auto_1fr] gap-6 border-t border-ink/15 py-8">
                  <span className="font-display text-5xl text-sun [-webkit-text-stroke:1px_var(--color-navy)]">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide">{s.title}</h3>
                    <p className="mt-2 text-ink/65">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px bg-ink/15 md:mt-28 lg:grid-cols-4">
          {personal.modes.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08} className="bg-bone">
              <div className="group flex h-full flex-col justify-between gap-10 p-6 transition hover:bg-navy hover:text-white md:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy transition group-hover:text-sun">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-3xl md:text-5xl">{m.name}</h3>
                  <p className="mt-2 text-sm opacity-70">{m.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
