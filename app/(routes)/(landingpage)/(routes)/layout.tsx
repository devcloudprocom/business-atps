"use client";

import { Footer } from "@/components/shared/Footer";
import { NavbarFloating } from "@/components/shared/NavbarFloating";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-foreground">
      <NavbarFloating />
      {children}
      <Footer />
    </div>
  );
}
