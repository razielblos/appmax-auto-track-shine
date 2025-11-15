import { Hero } from "@/components/Hero";
import { PainSection } from "@/components/PainSection";
import { SolutionSection } from "@/components/SolutionSection";
import { DifferentialSection } from "@/components/DifferentialSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Benefits } from "@/components/Benefits";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <PainSection />
      <SolutionSection />
      <DifferentialSection />
      <HowItWorks />
      <Pricing />
      <Benefits />
      <FinalCTA />
    </main>
  );
};

export default Index;
