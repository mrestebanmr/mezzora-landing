import { ticker } from "@/lib/content";

export default function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="overflow-hidden bg-sun py-4 text-ink md:py-5" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-2xl md:text-4xl">
            {t}
            <span className="inline-block h-3 w-3 rotate-45 bg-navy md:h-4 md:w-4" />
          </span>
        ))}
      </div>
    </div>
  );
}
