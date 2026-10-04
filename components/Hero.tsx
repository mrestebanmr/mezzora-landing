import { MessageCircle, Sparkles, CalendarCheck, Database, ArrowRight } from "lucide-react";
import { CALENDLY, whatsappLink, type Dict } from "@/lib/i18n";

const icons = [MessageCircle, Sparkles, CalendarCheck, Database];

function FlowConsole({ c }: { c: Dict["hero"]["console"] }) {
  return (
    <div className="glass relative rounded-2xl p-1.5 shadow-[0_40px_120px_-30px_rgba(0,200,83,0.35)]">
      <div className="rounded-xl border border-white/5 bg-black/50">
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="min-w-0 truncate px-3 font-mono text-[11px] text-text-secondary">
            {c.path}
          </span>
          <span className="flex shrink-0 items-center gap-2 font-mono text-[11px] text-accent">
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
          {c.steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <li
                key={s.tag}
                className="flow-step relative flex items-start gap-3 rounded-xl border border-white/10 bg-bg-secondary/80 p-3"
                style={{ "--i": i } as React.CSSProperties}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] tracking-widest text-accent/80">{s.tag}</span>
                  <p className="text-sm font-semibold text-text-primary">{s.title}</p>
                  <p className="truncate font-mono text-xs text-text-secondary">{s.detail}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="flex items-center justify-between border-t border-white/5 px-4 py-3 font-mono text-[11px] text-text-secondary">
          <span className="caret">{c.footer}</span>
          <span className="text-accent">24/7</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ t }: { t: Dict }) {
  const h = t.hero;
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-14 px-6 pb-20 pt-32 md:pt-40 lg:grid-cols-[1.15fr_1fr]">
        <div className="min-w-0">
          <div
            data-reveal
            className="glass inline-flex items-center gap-2.5 whitespace-nowrap rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary md:text-[11px] md:tracking-[0.14em]"
          >
            <span className="pulse-dot" />
            {h.badge}
          </div>

          <h1
            data-reveal
            style={{ "--d": 1 } as React.CSSProperties}
            className="mt-6 font-heading text-[42px] font-extrabold leading-[1.02] tracking-[-0.035em] text-text-primary md:text-[64px] lg:text-[76px]"
          >
            {h.title} <span className="text-gradient">{h.titleAccent}</span>
          </h1>

          <p
            data-reveal
            style={{ "--d": 2 } as React.CSSProperties}
            className="mt-6 max-w-[580px] text-lg leading-relaxed text-text-secondary md:text-xl"
          >
            {h.subtitle}
          </p>

          <div
            data-reveal
            style={{ "--d": 3 } as React.CSSProperties}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold"
            >
              {h.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={whatsappLink(t)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center justify-center rounded-xl px-7 py-4 text-base font-semibold"
            >
              {h.ctaSecondary}
            </a>
          </div>

          <dl
            data-reveal
            style={{ "--d": 4 } as React.CSSProperties}
            className="mt-12 grid max-w-[560px] grid-cols-3 divide-x divide-white/10 border-y border-white/10"
          >
            {h.stats.map((s) => (
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

        <div data-reveal className="min-w-0" style={{ "--d": 3 } as React.CSSProperties}>
          <FlowConsole c={h.console} />
        </div>
      </div>
    </section>
  );
}
