import { nav } from "@/lib/content";
import ContactButton from "./ContactButton";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="navbar fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" aria-label="Christian Pinilla, laboratorio dental: inicio">
          <Logo />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-ink-muted transition-colors hover:text-graphite">
              {l.label}
            </a>
          ))}
          <ContactButton label={nav.cta} className="!px-5 !py-2.5" />
        </nav>
      </div>
    </header>
  );
}
