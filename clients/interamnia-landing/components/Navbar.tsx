"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { club, nav } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" aria-label={club.name} className="relative z-10 shrink-0">
          <Image
            src="/images/logo-white.png"
            alt={`${club.name} ${club.tagline}`}
            width={800}
            height={418}
            className="h-11 w-auto md:h-13"
            preload
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/75 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={club.areaPersonaleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[13px] font-semibold uppercase tracking-[0.18em] text-white/60 transition hover:text-white xl:block"
          >
            Area personale
          </a>
          <a
            href="#testday"
            className="hidden bg-sun px-5 py-3 text-[13px] font-bold uppercase tracking-[0.14em] text-ink transition hover:bg-white sm:block"
          >
            Prenota Test Day
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 p-2 lg:hidden"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-18 flex flex-col justify-between bg-ink px-6 pb-10 pt-8 md:top-20 lg:hidden">
          <nav className="flex flex-col gap-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl text-white transition hover:text-sun"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <a
              href="#testday"
              onClick={() => setOpen(false)}
              className="bg-sun py-4 text-center font-bold uppercase tracking-[0.14em] text-ink"
            >
              Prenota il tuo Test Day
            </a>
            <a
              href={club.areaPersonaleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 py-4 text-center text-sm font-semibold uppercase tracking-[0.14em]"
            >
              Area personale
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
