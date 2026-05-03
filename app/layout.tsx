import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
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
    <html lang="it" className={`${manrope.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
