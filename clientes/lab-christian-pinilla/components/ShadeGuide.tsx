"use client";

import { useState } from "react";
import { shades } from "@/lib/content";

export default function ShadeGuide() {
  const [activeId, setActiveId] = useState(shades.defaultId);
  const active = shades.list.find((s) => s.id === activeId) ?? shades.list[0];

  return (
    <section id="color" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p data-reveal className="eyebrow text-terracotta-strong">{shades.eyebrow}</p>
          <h2 data-reveal className="font-display mt-5 text-4xl leading-[1.08] font-medium text-balance md:text-5xl">
            {shades.title}
          </h2>
          <p data-reveal className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">{shades.body}</p>

          <div data-reveal className="mt-10">
            <p className="eyebrow text-sand">{shades.hint}</p>
            <div className="mt-4 space-y-3">
              {shades.groups.map((g) => (
                <div key={g.family} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <span className="shrink-0 text-xs text-ink-muted sm:w-28">
                    <span className="font-semibold text-graphite">{g.family}</span> · {g.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {shades.list
                      .filter((s) => s.id.startsWith(g.family))
                      .map((s) => {
                        const on = s.id === activeId;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            aria-pressed={on}
                            aria-label={`Tono ${s.id}`}
                            onClick={() => setActiveId(s.id)}
                            className={`flex h-11 min-w-11 items-end justify-center rounded-b-full rounded-t-lg border px-1.5 pb-1.5 text-[0.65rem] font-semibold transition-all ${
                              on ? "-translate-y-1 border-graphite shadow-md" : "border-graphite/15 hover:-translate-y-0.5"
                            }`}
                            style={{ backgroundColor: s.hex }}
                          >
                            {s.id}
                          </button>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-ink-muted">{shades.disclaimer}</p>
          </div>
        </div>

        <div data-reveal className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-[2.5rem] bg-graphite">
          <svg viewBox="0 0 200 260" className="h-[68%] w-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]" role="img" aria-label={`Corona ilustrativa en tono ${active.id}`}>
            <defs>
              <linearGradient id="incisal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0.55" stopColor="#fff" stopOpacity="0" />
                <stop offset="1" stopColor="#cfdbe3" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id="cervical" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#b98a5a" stopOpacity="0.28" />
                <stop offset="0.35" stopColor="#b98a5a" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="gloss" cx="0.35" cy="0.3" r="0.5">
                <stop offset="0" stopColor="#fff" stopOpacity="0.7" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path id="crown" className="shade-tooth" fill={active.hex} d="M72 18C88 10 112 10 128 18C146 60 160 130 163 196C165 226 152 242 128 244C110 246 90 246 72 244C48 242 35 226 37 196C40 130 54 60 72 18Z" />
            <path fill="url(#cervical)" d="M72 18C88 10 112 10 128 18C146 60 160 130 163 196C165 226 152 242 128 244C110 246 90 246 72 244C48 242 35 226 37 196C40 130 54 60 72 18Z" />
            <path fill="url(#incisal)" d="M72 18C88 10 112 10 128 18C146 60 160 130 163 196C165 226 152 242 128 244C110 246 90 246 72 244C48 242 35 226 37 196C40 130 54 60 72 18Z" />
            <ellipse cx="80" cy="110" rx="20" ry="58" fill="url(#gloss)" />
            <path d="M78 236C80 214 84 200 88 192M122 236C120 214 116 200 112 192" stroke="#fff" strokeOpacity="0.22" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
          <span className="font-display absolute bottom-6 left-7 text-5xl font-medium text-porcelain">{active.id}</span>
          <span className="absolute right-7 bottom-8 text-xs tracking-[0.2em] text-porcelain/60 uppercase">Guía clásica</span>
        </div>
      </div>
    </section>
  );
}
