import type { Metadata } from "next";
import Aurora from "@/components/Aurora";
import { fontVariables } from "@/lib/fonts";
import { fxScript } from "@/lib/fx-script";
import { dictionaries, locales, SITE_URL, type Locale } from "@/lib/i18n";
import "@/app/globals.css";

// Cada idioma tiene su propio root layout (app/(it) y app/(es)) para que
// <html lang> sea correcto en el HTML estático. Ambos comparten este shell.
export function buildMetadata(locale: Locale): Metadata {
  const t = dictionaries[locale];
  const path = locales.find((l) => l.code === locale)!.href;
  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l.code, l.href])),
        "x-default": "/",
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "website",
      locale: t.meta.ogLocale,
      alternateLocale: locales
        .filter((l) => l.code !== locale)
        .map((l) => dictionaries[l.code].meta.ogLocale),
      url: path,
    },
  };
}

export default function RootShell({
  lang,
  children,
}: Readonly<{
  lang: Locale;
  children: React.ReactNode;
}>) {
  return (
    <html lang={lang} className={fontVariables} suppressHydrationWarning>
      {/* Root layout del App Router: <head> es válido aquí (la regla apunta a pages/). */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: fxScript }} />
      </head>
      <body className="antialiased">
        <Aurora />
        <div className="scroll-progress" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
