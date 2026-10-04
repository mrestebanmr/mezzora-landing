"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";
import type { Dict } from "@/lib/i18n";

export default function FAQ({ t }: { t: Dict["faq"] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeader
            eyebrow={t.eyebrow}
            title={t.title}
            subtitle={t.subtitle}
          />
        </div>

        <div className="space-y-3">
          {t.items.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                data-reveal
                style={{ "--d": i } as React.CSSProperties}
                className={`glass rounded-2xl transition-colors ${isOpen ? "border-accent/40" : ""}`}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left text-base font-semibold text-text-primary transition-colors hover:text-accent md:text-lg"
                  >
                    {faq.q}
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-accent bg-accent text-black"
                          : "border-white/15 text-text-secondary"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className="faq-panel"
                  data-open={isOpen}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-base leading-relaxed text-text-secondary">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
