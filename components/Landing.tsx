import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Verticals from "@/components/Verticals";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { dictionaries, type Locale } from "@/lib/i18n";

export default function Landing({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  return (
    <>
      <Navbar t={t} locale={locale} />
      <main>
        <Hero t={t} />
        <Ticker t={t} />
        <Problem t={t} />
        <Solution t={t} />
        <Verticals t={t} />
        <FAQ t={t.faq} />
        <CTA t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
