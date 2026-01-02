import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dark bg-background text-foreground min-h-screen">
      <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-3">
        
        {/* Section gauche : branding (comme Neon) - cachée sur mobile */}
        <div className="hidden lg:flex relative bg-linear-to-br from-black via-[#0000] to-[#0000] items-center justify-center border">
          <div className="absolute inset-0 bg-linear-to-t from-transparent via-transparent to-gray-600/20" />
          
          <div className="relative z-10 flex flex-col items-start justify-start gap-8 px-12 text-start">
            <h1 className="text-4xl md:text-5xl font-bold text-white/90 leading-tight">
              Set up your<br />
              platform in seconds.
            </h1>
            <p className="text-lg text-white/70 max-w-md">
              Fast, secure and scalable access to ATPS.
            </p>
          </div>
        </div>

        {/* Section droite : formulaire + bouton Home */}
        <div className="bg-[#131313] flex flex-col lg:col-span-2 min-h-screen">
          <div className="p-6 lg:p-10">
            <Link href="/">
              <Button
                variant="outline"
                className="bg-transparent border-border text-foreground hover:bg-white/5 flex items-center gap-2"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Home
              </Button>
            </Link>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center px-6 lg:px-20">
            <div className="w-full max-w-md">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}