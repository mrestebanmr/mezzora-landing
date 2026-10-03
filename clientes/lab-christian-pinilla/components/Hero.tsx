import Image from "next/image";
import { hero } from "@/lib/content";
import ContactButton from "./ContactButton";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.15fr_0.85fr] md:px-8">
        <div>
          <p data-reveal className="eyebrow text-terracotta-strong">{hero.eyebrow}</p>
          <h1 data-reveal style={{ "--d": "80ms" } as React.CSSProperties} className="font-display mt-6 text-[2.6rem] leading-[1.04] font-medium text-balance sm:text-6xl lg:text-[4.4rem]">
            {hero.titleTop}
            <br />
            <em className="font-normal text-terracotta-strong">{hero.titleBottom}</em>
          </h1>
          <p data-reveal style={{ "--d": "160ms" } as React.CSSProperties} className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {hero.subtitle}
          </p>
          <div data-reveal style={{ "--d": "240ms" } as React.CSSProperties} className="mt-9 flex flex-wrap items-center gap-4">
            <ContactButton label={hero.ctaPrimary} />
            <a href="#trabajos" className="rounded-full border border-graphite/20 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-graphite">
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div data-reveal style={{ "--d": "200ms" } as React.CSSProperties} className="relative mx-auto w-full max-w-sm">
          <div className="relative rounded-[2rem] bg-graphite p-4 pb-5 shadow-[0_30px_80px_-30px_rgba(43,38,34,0.55)]">
            <Image
              src={hero.photo.src}
              alt={hero.photo.alt}
              width={hero.photo.width}
              height={hero.photo.height}
              preload
              sizes="(min-width: 768px) 352px, 90vw"
              className="h-auto w-full rounded-[1.4rem] object-cover"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {hero.badges.map((b) => (
                <span key={b} className="rounded-full border border-porcelain/15 px-3 py-1.5 text-[0.7rem] font-medium tracking-wide text-porcelain/85">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div aria-hidden="true" className="absolute -top-6 -right-6 -z-10 h-40 w-40 rounded-full bg-terracotta/15 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
