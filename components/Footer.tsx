const columns = [
  {
    title: "Contatti",
    links: [
      { label: "WhatsApp", href: "https://wa.me/393279873102", external: true },
      { label: "esteban@mezzora.io", href: "mailto:esteban@mezzora.io", external: false },
    ],
  },
  {
    title: "Risorse",
    links: [{ label: "Prenota call", href: "https://calendly.com/mezzora", external: true }],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-black/40 pt-16 backdrop-blur-sm">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="font-heading text-2xl font-black lowercase tracking-tight text-accent">
              mezzora
            </span>
            <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-text-secondary">
              Automazione intelligente per imprese italiane.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-primary">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="transition-colors hover:text-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-primary">Sede</h4>
            <p className="mt-4 text-sm text-text-secondary">Teramo, Italia</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/[0.06] pt-6 font-mono text-[11px] text-text-secondary md:flex-row md:justify-between">
          <p>P.IVA in fase di costituzione</p>
          <p>© 2026 Mezzora · Tutti i diritti riservati</p>
        </div>
      </div>

      {/* Marca gigante que se funde con el fondo */}
      <div
        className="pointer-events-none mt-6 select-none text-center font-heading text-[28vw] font-black lowercase leading-[0.75] tracking-[-0.06em] text-transparent [background-clip:text] [-webkit-background-clip:text] [background-image:linear-gradient(180deg,rgba(0,200,83,0.35),rgba(0,200,83,0)_85%)] md:text-[22vw]"
        aria-hidden="true"
      >
        mezzora
      </div>
    </footer>
  );
}
