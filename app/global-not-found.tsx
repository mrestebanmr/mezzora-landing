import type { Metadata } from "next";
import Link from "next/link";
import Aurora from "@/components/Aurora";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 — Mezzora",
};

export default function GlobalNotFound() {
  return (
    <html lang="it" className={fontVariables}>
      <body className="antialiased">
        <Aurora />
        <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
          <span className="eyebrow">Errore 404 · Error 404</span>
          <h1 className="mt-5 font-heading text-[40px] font-extrabold leading-[1.05] tracking-[-0.03em] md:text-[56px]">
            Pagina non trovata.
            <br />
            <span className="text-gradient">Página no encontrada.</span>
          </h1>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn-primary rounded-xl px-7 py-3.5 font-semibold">
              Torna alla home
            </Link>
            <Link href="/es" className="btn-ghost rounded-xl px-7 py-3.5 font-semibold">
              Volver al inicio
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
