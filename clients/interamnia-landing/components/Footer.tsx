import Image from "next/image";
import { club } from "@/lib/content";

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center border border-white/20 text-white/70 transition hover:border-sun hover:text-sun"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer id="contatti" className="border-t border-white/10 bg-ink pb-28 pt-20 md:pb-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="font-display text-[16vw] leading-[0.85] text-white/[0.06] lg:text-[11rem]">
          Interamnia
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/images/logo-white.png" alt={club.name} width={800} height={418} className="h-16 w-auto" />
            <p className="mt-6 text-sm leading-relaxed text-white/55">
              Palestra, piscina e Day Spa a {club.city}.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-sun">Dove siamo</h3>
            <a href={club.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
              {club.address}
            </a>
            <div className="mt-5 flex flex-col gap-2 text-white/80">
              <a href={club.phoneHref} className="hover:text-white">{club.phone}</a>
              <a href={`https://wa.me/${club.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp {club.whatsappLabel}
              </a>
              <a href={`mailto:${club.email}`} className="hover:text-white">{club.email}</a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-sun">Orari</h3>
            <dl className="flex flex-col gap-2 text-sm">
              {club.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <dt className="text-white/55">{h.days}</dt>
                  <dd className="font-semibold">{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-white/40">{club.hoursNote}</p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-sun">Seguici</h3>
            <div className="flex gap-2">
              <Social href={club.socials.instagram} label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
              </Social>
              <Social href={club.socials.facebook} label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9V7c0-.9.6-1 1-1h2V2h-3c-3 0-4 2-4 4.5V9H8v4h2v9h4v-9h3l.5-4H14z" /></svg>
              </Social>
              <Social href={club.socials.youtube} label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9l5.7 3.1-5.7 3.1z" /></svg>
              </Social>
            </div>
            <a
              href={club.areaPersonaleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.14em] text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              Area personale →
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/35 md:flex-row md:justify-between">
          <p>{club.legal}</p>
          <p>
            <a href="https://www.interamniaclub.it/privacy/" className="hover:text-white">Privacy</a>
            {" · "}
            <a href="https://www.interamniaclub.it/cookie/" className="hover:text-white">Cookie</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
