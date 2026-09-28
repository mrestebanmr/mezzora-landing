import Image from "next/image";
import Reveal from "./Reveal";
import { spa, waLink } from "@/lib/content";

export default function Spa() {
  return (
    <section id="spa" className="relative overflow-hidden bg-[#120d09] py-24 md:py-36">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="/images/spa-idromassaggio.jpg"
          alt="Idromassaggio della Day Spa"
          fill
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120d09] via-[#120d09]/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-sun">Beauty & Day Spa</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl">
            Il recupero
            <br />
            <span className="text-[#e8b86a]">è allenamento.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/70">
            Un percorso pensato per completare ogni tipo di allenamento. Materiali preziosi,
            luce, vapore e acqua: l&apos;equilibrio tra sentirsi bene dentro e fuori.
          </p>
        </Reveal>

        <div className="relative mt-10 aspect-[4/3] overflow-hidden lg:hidden">
          <Image src="/images/spa-idromassaggio.jpg" alt="Idromassaggio della Day Spa" fill sizes="100vw" className="object-cover" />
        </div>

        <div className="mt-14 grid max-w-xl gap-px bg-white/10 sm:grid-cols-2 md:mt-20">
          {spa.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05} className="bg-[#120d09] p-6">
              <h3 className="font-display text-3xl">{s.name}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e8b86a]">
                {s.temp}
                {s.time !== "—" && ` · ${s.time}`}
              </p>
              <p className="mt-3 text-sm text-white/60">{s.note}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <a
            href={waLink("Ciao! Vorrei prenotare un ingresso alla Day Spa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e8b86a] px-8 py-5 text-center text-sm font-bold uppercase tracking-[0.14em] text-[#120d09] transition hover:bg-white"
          >
            Prenota la tua Spa
          </a>
          <a
            href={waLink("Ciao! Vorrei informazioni sui Voucher regalo della Spa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/25 px-8 py-5 text-center text-sm font-bold uppercase tracking-[0.14em] transition hover:border-white"
          >
            Regala un Voucher
          </a>
        </div>
      </div>
    </section>
  );
}
