import AboutPreview from "./components/AboutPreview";
import CapabilityStrip from "./components/CapabilityStrip";
import FinalCTA from "./components/FinalCTA";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import PartnershipSection from "./components/PartnershipSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <CapabilityStrip />
      <ServicesSection />
      <AboutPreview />
      <WhyChooseUs />
      <HowItWorks />
      <PartnershipSection />
      <FinalCTA />
    </main>
  );
}