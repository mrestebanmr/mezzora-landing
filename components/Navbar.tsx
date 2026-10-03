const links = [
  { href: "#problema", label: "Problema" },
  { href: "#soluzione", label: "Soluzione" },
  { href: "#settori", label: "Settori" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-4">
      <nav className="nav-shell mx-auto flex max-w-[1200px] items-center justify-between rounded-2xl px-4 py-2.5 md:px-5">
        <a href="#top" className="flex items-center gap-2" aria-label="Mezzora — torna su">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent font-heading text-base font-black text-black">
            m
          </span>
          <span className="font-heading text-xl font-black lowercase tracking-tight text-text-primary">
            mezzora
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
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

        <a
          href="https://calendly.com/mezzora"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary rounded-xl px-4 py-2 text-sm font-semibold"
        >
          Prenota call
        </a>
      </nav>
    </header>
  );
}
