import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import MobileBar from "@/components/MobileBar";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import ShadeGuide from "@/components/ShadeGuide";
import Ticker from "@/components/Ticker";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Manifesto />
        <Services />
        <Works />
        <Process />
        <ShadeGuide />
        <ContactForm />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
