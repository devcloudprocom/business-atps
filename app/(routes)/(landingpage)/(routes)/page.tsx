import HeroSection from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SectionLast } from "@/components/sections/SectionLast";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <SectionLast />
    </div>
  );
}
