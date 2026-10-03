const items = [
  "WhatsApp",
  "Prenotazioni",
  "Calendari",
  "CRM",
  "E-commerce",
  "Pagamenti",
  "Email",
  "Gestionali",
  "Dati in UE",
  "GDPR",
];

export default function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-white/[0.06] bg-black/30 py-5 backdrop-blur-sm">
      <p className="mx-auto mb-4 max-w-[1200px] px-6 font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary">
        Si integra con gli strumenti che usi già
      </p>
      <div className="marquee overflow-hidden" aria-hidden="true">
        <div className="marquee__track">
          {row.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 px-6 font-heading text-xl font-bold tracking-tight text-white/45 md:text-2xl"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
