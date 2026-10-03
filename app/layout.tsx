import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import Aurora from "@/components/Aurora";
import { fxScript } from "@/lib/fx-script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mezzora — Automazione intelligente per imprese italiane",
  description:
    "Eliminiamo le attività ripetitive del tuo business con automazione e IA. Per palestre, ristoranti, locali ed e-commerce italiani.",
  openGraph: {
    title: "Mezzora — Automazione intelligente per imprese italiane",
    description:
      "Eliminiamo le attività ripetitive del tuo business con automazione e IA. Per palestre, ristoranti, locali ed e-commerce italiani.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${manrope.variable} ${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
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
