"use client";

import { FeatureCardsSection } from "@/components/sections/FeatureCardsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductOverviewSection } from "@/components/sections/ProductOverviewSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { KeyBenefitsSection } from "@/components/sections/KeyBenefitsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogSection } from "@/components/sections/BlogSection";

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <FeatureCardsSection />
      <ProductOverviewSection />
      <AboutSection />
      <KeyBenefitsSection />
      <TestimonialsSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
}
