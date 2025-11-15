import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PainSection } from "@/components/PainSection";
import { SolutionSection } from "@/components/SolutionSection";
import { DifferentialSection } from "@/components/DifferentialSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Benefits } from "@/components/Benefits";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PainSection />
      <SolutionSection />
      <DifferentialSection />
      <HowItWorks />
      <Pricing />
      <Benefits />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
