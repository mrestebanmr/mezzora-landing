import { ArrowRight } from "lucide-react";
import { contact, defaultMessage, primaryContactUrl } from "@/lib/content";
import { InstagramIcon, WhatsappIcon } from "./Icons";

type Props = {
  label: string;
  variant?: "solid" | "light";
  className?: string;
};

/** CTA de conversión: WhatsApp si hay número, si no el DM de Instagram. */
export default function ContactButton({ label, variant = "solid", className = "" }: Props) {
  const Icon = contact.whatsapp ? WhatsappIcon : InstagramIcon;
  const styles =
    variant === "solid"
      ? "bg-terracotta-strong text-porcelain hover:bg-graphite"
      : "bg-porcelain text-graphite hover:bg-white";
  return (
    <a
      href={primaryContactUrl(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${styles} ${className}`}
    >
      <Icon className="h-4 w-4" />
      {label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </a>
  );
}
