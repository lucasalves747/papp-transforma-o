import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import WhatIsPapp from "@/components/WhatIsPapp";
import AboutDoctor from "@/components/AboutDoctor";
import Testimonials from "@/components/Testimonials";
import WhatsIncluded from "@/components/WhatsIncluded";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <WhatIsPapp />
      <AboutDoctor />
      <Testimonials />
      <WhatsIncluded />
    </main>
  );
};

export default Index;
