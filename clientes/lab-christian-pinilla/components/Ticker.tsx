import { ticker } from "@/lib/content";

export default function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="overflow-hidden bg-terracotta-strong py-4 text-porcelain" aria-label={ticker.join(", ")}>
      <div className="marquee" aria-hidden="true">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 text-sm font-medium tracking-[0.18em] whitespace-nowrap uppercase">
            {t}
            <span className="h-1 w-1 rounded-full bg-porcelain/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
