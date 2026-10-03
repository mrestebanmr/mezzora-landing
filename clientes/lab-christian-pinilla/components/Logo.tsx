import Image from "next/image";
import { brand } from "@/lib/content";

type Props = { tone?: "dark" | "light"; className?: string };

/** Lockup horizontal: símbolo + nombre + descriptor, como en el manual de marca. */
export default function Logo({ tone = "dark", className = "" }: Props) {
  const light = tone === "light";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src={light ? "/brand/symbol-light.png" : "/brand/symbol.png"}
        alt=""
        width={344}
        height={438}
        className="h-10 w-auto"
      />
      <span className="flex flex-col leading-none">
        <span className={`text-[0.82rem] font-semibold tracking-[0.2em] uppercase ${light ? "text-porcelain" : "text-graphite"}`}>
          {brand.name}
        </span>
        <span className={`mt-1.5 text-[0.6rem] font-medium tracking-[0.32em] uppercase ${light ? "text-terracotta" : "text-terracotta-strong"}`}>
          {brand.descriptor}
        </span>
      </span>
    </span>
  );
}
