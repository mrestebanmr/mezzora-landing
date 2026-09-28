import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { club } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="grain relative flex min-h-[100svh] items-end overflow-hidden">
      <Image
        src="/images/hero-sala-cardio.jpg"
        alt="Sala cardio del Club Interamnia con soci in allenamento"
        fill
        preload
        sizes="100vw"
        className="object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-sun md:mb-12 md:text-sm">
          <span className="h-px w-10 bg-sun" />
          {club.city} · Fitness · Piscina · Day Spa
        </p>
        <h1 className="font-display text-[19vw] text-white sm:text-[15vw] lg:text-[11.5rem]">
          Non è
          <br />
          <span className="text-outline">solo</span> palestra.
        </h1>
        <div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-white/80 md:text-xl">
            Sala attrezzi, 100+ corsi, piscina e Day Spa sotto lo stesso tetto.
            Il club di riferimento a Teramo, pensato per chi vuole di più.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#testday"
              className="group flex items-center justify-center gap-3 bg-sun px-8 py-5 text-sm font-bold uppercase tracking-[0.14em] text-ink transition hover:bg-white"
            >
              Prenota il Test Day
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#club"
              className="flex items-center justify-center gap-3 border border-white/30 px-8 py-5 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white hover:text-ink"
            >
              Scopri il Club
            </a>
          </div>
        </div>
      </div>

      <a
        href="#club"
        aria-label="Scorri"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/50 transition hover:text-white md:block"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}
