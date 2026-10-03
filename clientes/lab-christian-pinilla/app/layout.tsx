import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { fxScript } from "@/lib/fx-script";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const title = "Christian Pinilla — Laboratorio dental en Cali";
const description =
  "Diseño CAD/CAM 3D, carillas cerámicas estratificadas, prótesis fija y zirconio para odontólogos de todo el país. Ciudad Jardín, Cali.";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  // Sin indexar hasta que el cliente apruebe el sitio.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_CO",
    images: [{ url: "/brand/og.png", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F1EA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CO"
      className={`${fraunces.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: fxScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
