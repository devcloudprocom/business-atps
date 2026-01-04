import HeroSection from "@/components/sections/HeroSection";
import { ProvisioningSection } from "@/components/sections/ProvisioningSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { AIGlobeSection } from "@/components/sections/AIGlobeSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SectionLast } from "@/components/sections/SectionLast";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <HeroSection />
      <ProvisioningSection />
      <AboutSection />
      <AIGlobeSection />
      <TestimonialsSection />
      <SectionLast />
    </div>
  );
}
