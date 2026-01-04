import { FAQSection } from "@/components/sections/FAQSection";
import PricingAnimated from "./PricingAnimated";

export default function PricePage() {
  return (
    <div className="w-full pt-50 bg-background text-foreground">
      <div className="flex flex-col items-center justify-center gap-15">
        <PricingAnimated />
        <div className="w-full mx-auto pt-20">
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
