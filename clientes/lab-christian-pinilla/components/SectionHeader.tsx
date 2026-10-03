type Props = { eyebrow: string; title: string; intro?: string; tone?: "dark" | "light" };

export default function SectionHeader({ eyebrow, title, intro, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <div className="max-w-2xl">
      <p data-reveal className={`eyebrow ${dark ? "text-terracotta" : "text-terracotta-strong"}`}>{eyebrow}</p>
      <h2 data-reveal className="font-display mt-5 text-4xl leading-[1.08] font-medium text-balance md:text-5xl">{title}</h2>
      {intro && (
        <p data-reveal className={`mt-5 text-base leading-relaxed md:text-lg ${dark ? "text-porcelain/70" : "text-ink-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
