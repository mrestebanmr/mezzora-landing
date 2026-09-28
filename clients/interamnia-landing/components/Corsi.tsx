"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { club, corsi } from "@/lib/content";

export default function Corsi() {
  const [active, setActive] = useState(0);
  const current = corsi[active];

  return (
    <section id="corsi" className="bg-navy py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-sun">Corsi</p>
          <h2 className="font-display text-6xl md:text-9xl">
            100+ modi
            <br />
            di sudare.
          </h2>
        </Reveal>

        <div className="mt-14 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] md:mt-20" role="tablist">
          {corsi.map((c, i) => (
            <button
              key={c.group}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`shrink-0 border px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] transition md:text-sm ${
                i === active
                  ? "border-sun bg-sun text-ink"
                  : "border-white/25 text-white/80 hover:border-white hover:text-white"
              }`}
            >
              {c.group}
            </button>
          ))}
        </div>

        <ul key={current.group} className="mt-10 border-t border-white/15" role="tabpanel">
          {current.items.map((item, i) => (
            <li
              key={item}
              className="group flex items-baseline justify-between border-b border-white/15 py-4 transition hover:bg-white/5 md:py-5"
              style={{ animation: `fadeUp .5s ${i * 0.04}s both` }}
            >
              <span className="font-display text-3xl transition group-hover:translate-x-2 group-hover:text-sun md:text-5xl">
                {item}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>

        <a
          href={club.orariUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 inline-flex items-center gap-3 border-b-2 border-sun pb-2 text-sm font-bold uppercase tracking-[0.16em]"
        >
          Consulta l&apos;orario completo
          <ArrowUpRight size={18} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
