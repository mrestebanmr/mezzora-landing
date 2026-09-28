import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Manifesto from "@/components/Manifesto";
import Pillars from "@/components/Pillars";
import Sale from "@/components/Sale";
import Corsi from "@/components/Corsi";
import Personal from "@/components/Personal";
import Spa from "@/components/Spa";
import Padel from "@/components/Padel";
import Abbonamenti from "@/components/Abbonamenti";
import TestDay from "@/components/TestDay";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Manifesto />
        <Pillars />
        <Sale />
        <Corsi />
        <Personal />
        <Spa />
        <Padel />
        <Abbonamenti />
        <TestDay />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
