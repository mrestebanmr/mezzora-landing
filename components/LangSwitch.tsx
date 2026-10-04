import Flag from "./Flag";
import { locales, type Locale } from "@/lib/i18n";

// En móvil solo se ve la bandera del otro idioma (un toque = cambiar);
// desde sm se muestran ambas con el idioma activo marcado.
export default function LangSwitch({ current, label }: { current: Locale; label: string }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-xl border border-white/10 bg-white/[0.03] p-0.5"
    >
      {locales.map((l) => {
        const active = l.code === current;
        return (
          <a
            key={l.code}
            href={l.href}
            hrefLang={l.code}
            lang={l.code}
            aria-label={l.label}
            aria-current={active ? "page" : undefined}
            className={`items-center gap-1.5 rounded-[10px] px-2 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider transition-all ${
              active
                ? "hidden bg-white/10 sm:flex text-text-primary shadow-[inset_0_0_0_1px_rgba(0,200,83,0.45)]"
                : "flex text-text-secondary sm:opacity-60 hover:bg-white/5 hover:text-text-primary hover:opacity-100"
            }`}
          >
            <Flag code={l.code} className="h-3 w-[18px] rounded-[2px] ring-1 ring-white/15" />
            <span className="hidden sm:inline">{l.code}</span>
          </a>
        );
      })}
    </div>
  );
}
