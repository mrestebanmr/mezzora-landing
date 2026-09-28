import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { club } from "@/lib/content";

export default function Padel() {
  return (
    <section className="relative overflow-hidden bg-blue">
      <div className="absolute inset-0 opacity-25 mix-blend-multiply">
        <Image src="/images/esterno.jpg" alt="" fill sizes="100vw" className="object-cover grayscale" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-5 py-20 md:flex-row md:items-center md:px-8 md:py-28">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-ink">Padel</p>
          <h2 className="font-display text-6xl md:text-8xl">
            Il campo ti aspetta.
          </h2>
          <p className="mt-4 max-w-md text-white/85">
            Campi da Padel aperti con gli stessi orari del Club. Prenota in 30 secondi su Playtomic.
          </p>
        </Reveal>
        <a
          href={club.padelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex shrink-0 items-center gap-3 bg-ink px-8 py-5 text-sm font-bold uppercase tracking-[0.14em] transition hover:bg-sun hover:text-ink"
        >
          Prenota un campo
          <ArrowUpRight size={18} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
