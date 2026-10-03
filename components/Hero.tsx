import { MessageCircle, Sparkles, CalendarCheck, Database, ArrowRight } from "lucide-react";

const WHATSAPP =
  "https://wa.me/393279873102?text=Ciao%20Esteban%2C%20ho%20visto%20Mezzora%20e%20vorrei%20saperne%20di%20più";

const stats = [
  { value: 15, prefix: "+", suffix: "h", label: "risparmiate al mese per cliente" },
  { value: 3, prefix: "", suffix: "", label: "verticali specializzati" },
  { value: 14, prefix: "", suffix: "gg", label: "per il primo sistema attivo" },
];

const flow = [
  {
    icon: MessageCircle,
    tag: "TRIGGER",
    title: "Nuovo messaggio WhatsApp",
    detail: "“Ciao! Posso prenotare una prova?”",
  },
  {
    icon: Sparkles,
    tag: "IA",
    title: "Intento riconosciuto",
    detail: "prenotazione · lingua: IT",
  },
  {
    icon: CalendarCheck,
    tag: "AZIONE",
    title: "Slot confermato",
    detail: "giovedì 18:30 · promemoria inviato",
  },
  {
    icon: Database,
    tag: "CRM",
    title: "Lead registrato",
    detail: "follow-up automatico tra 24h",
  },
];

function FlowConsole() {
  return (
    <div className="glass relative rounded-2xl p-1.5 shadow-[0_40px_120px_-30px_rgba(0,200,83,0.35)]">
      <div className="rounded-xl border border-white/5 bg-black/50">
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[11px] text-text-secondary">
            mezzora / flusso: prova-gratuita
          </span>
          <span className="flex items-center gap-2 font-mono text-[11px] text-accent">
            <span className="pulse-dot" /> LIVE
          </span>
        </div>

        <ol className="relative space-y-3 p-4 md:p-5">
          <svg
            className="absolute left-[38px] top-10 h-[calc(100%-80px)] w-px overflow-visible md:left-[42px]"
            aria-hidden="true"
          >
            <line x1="0" y1="0" x2="0" y2="100%" stroke="#00C853" strokeOpacity="0.5" className="flow-line" />
          </svg>
          {flow.map((s, i) => (
            <li
              key={s.title}
              className="flow-step relative flex items-start gap-3 rounded-xl border border-white/10 bg-bg-secondary/80 p-3"
              style={{ "--i": i } as React.CSSProperties}
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                <s.icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <span className="font-mono text-[10px] tracking-widest text-accent/80">{s.tag}</span>
                <p className="text-sm font-semibold text-text-primary">{s.title}</p>
                <p className="truncate font-mono text-xs text-text-secondary">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="flex items-center justify-between border-t border-white/5 px-4 py-3 font-mono text-[11px] text-text-secondary">
          <span className="caret">eseguito senza intervento manuale</span>
          <span className="text-accent">24/7</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-14 px-6 pb-20 pt-32 md:pt-40 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <div
            data-reveal
            className="glass inline-flex items-center gap-2.5 whitespace-nowrap rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary md:text-[11px] md:tracking-[0.14em]"
          >
            <span className="pulse-dot" />
            Automazione IA · per imprese italiane
          </div>

          <h1
            data-reveal
            style={{ "--d": 1 } as React.CSSProperties}
            className="mt-6 font-heading text-[42px] font-extrabold leading-[1.02] tracking-[-0.035em] text-text-primary md:text-[64px] lg:text-[76px]"
          >
            Automatizziamo ciò che ti ruba tempo.{" "}
            <span className="text-gradient">Senza snaturare il tuo business.</span>
          </h1>

          <p
            data-reveal
            style={{ "--d": 2 } as React.CSSProperties}
            className="mt-6 max-w-[580px] text-lg leading-relaxed text-text-secondary md:text-xl"
          >
            Mezzora è l&apos;agenzia italiana che usa l&apos;IA per eliminare le
            attività ripetitive del tuo business — palestre, ristoranti, locali,
            e-commerce. Ti restituiamo ore, non complicazioni.
          </p>

          <div
            data-reveal
            style={{ "--d": 3 } as React.CSSProperties}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="https://calendly.com/mezzora"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold"
            >
              Prenota una call di 20 minuti
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center justify-center rounded-xl px-7 py-4 text-base font-semibold"
            >
              Scrivimi su WhatsApp
            </a>
          </div>

          <dl
            data-reveal
            style={{ "--d": 4 } as React.CSSProperties}
            className="mt-12 grid max-w-[560px] grid-cols-3 divide-x divide-white/10 border-y border-white/10"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-5 first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
                  <span className="text-accent">{s.prefix}</span>
                  <span data-count={s.value} suppressHydrationWarning>
                    {s.value}
                  </span>
                  <span className="ml-0.5 text-xl text-accent md:text-2xl">{s.suffix}</span>
                </dd>
                <p className="mt-1 text-xs leading-snug text-text-secondary md:text-sm">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div data-reveal style={{ "--d": 3 } as React.CSSProperties}>
          <FlowConsole />
        </div>
      </div>
    </section>
  );
}
