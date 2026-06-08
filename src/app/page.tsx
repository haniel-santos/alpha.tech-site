import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowWeHelp from "@/components/HowWeHelp";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Differentiators from "@/components/Differentiators";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowWeHelp />
        <HowItWorks />
        <About />
        <Differentiators />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
