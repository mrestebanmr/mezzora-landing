import Image from "next/image";
import Reveal from "./Reveal";
import { pillars } from "@/lib/content";

export default function Pillars() {
  return (
    <section className="bg-ink">
      {pillars.map((p, i) => (
        <article
          id={p.id}
          key={p.id}
          className="group relative flex min-h-[85svh] items-end overflow-hidden md:min-h-screen"
        >
          <Image
            src={p.image}
            alt={p.alt}
            fill
            sizes="100vw"
            className="object-cover transition duration-[2s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div
            className={`relative mx-auto flex w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24 ${
              i % 2 === 1 ? "md:justify-end" : ""
            }`}
          >
            <Reveal className="max-w-2xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-sun">{p.kicker}</p>
              <h3 className="font-display text-6xl text-white md:text-9xl">{p.title}</h3>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">{p.text}</p>
            </Reveal>
          </div>
        </article>
      ))}
    </section>
  );
}
