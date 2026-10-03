import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { instagramUrl, works } from "@/lib/content";
import { InstagramIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

export default function Works() {
  return (
    <section id="trabajos" className="bg-porcelain-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader eyebrow={works.eyebrow} title={works.title} intro={works.intro} />
          <a
            data-reveal
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-graphite/20 px-5 py-3 text-sm font-semibold transition-colors hover:border-graphite md:self-auto"
          >
            <InstagramIcon className="h-4 w-4" />
            {works.cta}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {works.photos.map((p, i) => (
            <figure key={p.src} data-reveal style={{ "--d": `${i * 110}ms` } as React.CSSProperties} className="group">
              <div className="overflow-hidden rounded-3xl bg-graphite">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink-muted">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
