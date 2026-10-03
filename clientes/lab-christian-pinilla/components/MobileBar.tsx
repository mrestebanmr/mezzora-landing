import { instagramUrl, nav } from "@/lib/content";
import ContactButton from "./ContactButton";
import { InstagramIcon } from "./Icons";

/** Barra fija en móvil: la CTA siempre a un toque. */
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-3 border-t border-graphite/10 bg-porcelain/95 p-3 backdrop-blur md:hidden">
      <ContactButton label={nav.cta} className="flex-1" />
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver Instagram del laboratorio"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-graphite/20"
      >
        <InstagramIcon className="h-5 w-5" />
      </a>
    </div>
  );
}
