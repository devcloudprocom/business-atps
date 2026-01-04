import Header from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
