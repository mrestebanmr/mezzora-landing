export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <span className="text-2xl font-black lowercase tracking-tight text-accent font-heading">
          mezzora
        </span>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Contatti
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              <li>
                <a
                  href="https://wa.me/393279873102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition-colors hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:esteban@mezzora.io"
                  className="cursor-pointer transition-colors hover:text-accent"
                >
                  esteban@mezzora.io
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Risorse
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              <li>
                <a
                  href="https://calendly.com/mezzora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition-colors hover:text-accent"
                >
                  Prenota call
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Sede
            </h4>
            <p className="mt-3 text-sm text-text-secondary">
              Teramo, Italia
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-text-secondary">
            P.IVA in fase di costituzione
          </p>
          <p className="mt-2 text-xs text-text-secondary">
            © 2026 Mezzora · Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  );
}
