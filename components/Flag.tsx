import type { Locale } from "@/lib/i18n";

// Banderas en SVG inline: los emoji de bandera no se ven en Windows.
export default function Flag({ code, className = "" }: { code: Locale; className?: string }) {
  if (code === "it") {
    return (
      <svg viewBox="0 0 3 2" className={className} aria-hidden="true">
        <rect width="1" height="2" fill="#009246" />
        <rect x="1" width="1" height="2" fill="#F1F2F1" />
        <rect x="2" width="1" height="2" fill="#CE2B37" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 3 2" className={className} aria-hidden="true">
      <rect width="3" height="2" fill="#AA151B" />
      <rect y="0.5" width="3" height="1" fill="#F1BF00" />
    </svg>
  );
}
