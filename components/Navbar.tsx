"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg-primary/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between py-4">
        <span className="text-accent font-heading text-2xl font-black lowercase tracking-tight">
          mezzora
        </span>
        <a
          href="https://calendly.com/mezzora"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-accent-hover"
        >
          Prenota call
        </a>
      </div>
    </nav>
  );
}
