import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { abbonamenti, waLink } from "@/lib/content";

export default function Abbonamenti() {
  return (
    <section id="abbonamenti" className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 md:mb-20">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-sun">Abbonamenti</p>
          <h2 className="font-display text-6xl md:text-9xl">
            Scegli il tuo
            <br />
            <span className="text-outline">ritmo.</span>
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {abbonamenti.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.08}>
              <article
                className={`relative flex h-full flex-col p-7 md:p-8 ${
                  a.featured ? "bg-sun text-ink" : "border border-white/15 bg-ink-2"
                }`}
              >
                <p
                  className={`text-xs font-bold uppercase tracking-[0.25em] ${
                    a.featured ? "text-navy" : "text-blue-bright"
                  }`}
                >
                  {a.kicker}
                </p>
                <h3 className="mt-4 font-display text-5xl">{a.name}</h3>
                <p className={`mt-4 text-sm leading-relaxed ${a.featured ? "text-ink/75" : "text-white/65"}`}>
                  {a.text}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {a.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium">
                      <Check size={16} className={a.featured ? "text-navy" : "text-sun"} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Ciao! Vorrei informazioni sull'abbonamento ${a.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] transition ${
                    a.featured
                      ? "bg-ink text-white hover:bg-navy"
                      : "border border-white/25 hover:border-white hover:bg-white hover:text-ink"
                  }`}
                >
                  Richiedi info
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
