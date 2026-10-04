import type { Dict } from "@/lib/i18n";

export default function Ticker({ t }: { t: Dict }) {
  const row = [...t.ticker.items, ...t.ticker.items];
  return (
    <div className="relative border-y border-white/[0.06] bg-black/30 py-5 backdrop-blur-sm">
      <p className="mx-auto mb-4 max-w-[1200px] px-6 font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary">
        {t.ticker.title}
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
