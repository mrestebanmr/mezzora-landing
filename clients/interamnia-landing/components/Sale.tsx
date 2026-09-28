import Image from "next/image";
import Reveal from "./Reveal";
import { sale } from "@/lib/content";

export default function Sale() {
  return (
    <section className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <h2 className="font-display text-6xl md:text-9xl">
            Quattro sale.
            <br />
            <span className="text-blue-bright">Quattro pianeti.</span>
          </h2>
          <p className="max-w-sm text-white/65 md:text-lg">
            Ogni spazio del Club ha un nome e una missione. Scegli il tuo pianeta, o conquistali tutti.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sale.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1}>
              <article className="group relative aspect-[3/4] overflow-hidden bg-ink-2">
                <Image
                  src={s.image}
                  alt={`Sala ${s.name} — ${s.role}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-70 grayscale transition duration-700 group-hover:scale-110 group-hover:opacity-90 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <span className="absolute right-5 top-4 font-display text-6xl text-white/15">
                  0{i + 1}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-sun">{s.role}</p>
                  <h3 className="mt-2 font-display text-5xl">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{s.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
