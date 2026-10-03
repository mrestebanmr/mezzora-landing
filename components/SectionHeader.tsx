type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ eyebrow, title, subtitle, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <div data-reveal className={centered ? "mx-auto text-center" : ""}>
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`mt-5 max-w-[820px] font-heading text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] text-text-primary md:text-[48px] lg:text-[60px] ${
          centered ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-[640px] text-lg leading-relaxed text-text-secondary md:text-xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
