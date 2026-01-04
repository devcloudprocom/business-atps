import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dark bg-background text-foreground min-h-screen">
      <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-3">
        {/* Section gauche : branding (comme Neon) - cachée sur mobile */}
        <div className="hidden lg:flex relative overflow-hidden bg-linear-to-br from-black via-[#0000] to-[#0000] items-center justify-center border">
          <div className="absolute inset-0 bg-linear-to-t from-transparent via-transparent to-gray-600/20" />
          <div className="absolute -left-24 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
          {/* Bande image (haut -> bas), à la place du logo */}
          <div className="absolute inset-y-0 left-0 w-28 overflow-hidden border-r border-white/10">
            <Image
              src="/assets/pic.png"
              alt="Logo"
              fill
              priority
              className="object-cover object-center"
              sizes="112px"
            />
          </div>

          <div className="relative z-10 flex flex-col items-start justify-start gap-4 pl-32 pr-12 text-start">
            <h1 className="text-4xl md:text-5xl font-cal-sans text-white/90 leading-tight">
              Set up your
              <br />
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
            <div className="w-full max-w-md">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
