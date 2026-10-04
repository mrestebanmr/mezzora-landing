import LangSwitch from "./LangSwitch";
import { CALENDLY, type Dict, type Locale } from "@/lib/i18n";

export default function Navbar({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-4">
      <nav className="nav-shell mx-auto flex max-w-[1200px] items-center justify-between gap-3 rounded-2xl px-4 py-2.5 md:px-5">
        <a href="#top" className="flex items-center gap-2" aria-label={t.nav.home}>
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent font-heading text-base font-black text-black">
            m
          </span>
          <span className="font-heading text-xl font-black lowercase tracking-tight text-text-primary">
            mezzora
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangSwitch current={locale} label={t.nav.langLabel} />
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap rounded-xl px-3 py-2 text-[13px] sm:px-4 sm:text-sm font-semibold"
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
