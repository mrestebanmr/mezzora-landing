import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Verticals from "@/components/Verticals";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Problem />
        <Solution />
        <Verticals />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
