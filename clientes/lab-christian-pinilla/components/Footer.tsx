import { brand, contact, footer, instagramUrl } from "@/lib/content";
import { InstagramIcon } from "./Icons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-porcelain/10 bg-graphite pt-14 pb-28 text-porcelain md:pb-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <Logo tone="light" />
          <p className="font-display mt-6 text-xl text-porcelain/80 italic">{footer.tagline}</p>
        </div>
        <div className="space-y-2 text-sm text-porcelain/65 md:text-right">
          <p>{contact.address}</p>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-porcelain">
            <InstagramIcon className="h-4 w-4" />@{contact.instagram}
          </a>
          <p className="pt-4 text-xs text-porcelain/45">
            © {new Date().getFullYear()} {brand.name} · {brand.descriptor} · {footer.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
