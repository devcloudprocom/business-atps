"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { defaultViewport } from "@/lib/motion/motion";
import { WorldMapDemo } from "../WorldMapDemo";

function GlobeLabel({
  children,
  className,
  muted = false,
}: {
  children: string;
  className: string;
  muted?: boolean;
}) {
  return (
    <button
      type="button"
      className={[
        "pointer-events-auto absolute text-[12px] tracking-wide uppercase",
        "transition-all duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(0,230,153)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        muted
          ? "text-white/30 blur-[0.6px] hover:text-white/75 hover:blur-0 hover:drop-shadow-[0_0_18px_rgba(0,230,153,0.18)] hover:-translate-y-0.5"
          : "text-white/65 hover:text-white hover:drop-shadow-[0_0_18px_rgba(96,165,250,0.22)] hover:-translate-y-0.5",
        className,
      ].join(" ")}
      aria-label={children}
    >
      {children}
    </button>
  );
}

export function AIGlobeSection() {
  const reduceMotion = useReducedMotion();

  const fade = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: "easeOut" as const },
        viewport: defaultViewport,
      };

  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      {/* background: subtle vignette + scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_60%),radial-gradient(ellipse_at_center,rgba(0,230,153,0.10),transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.8))]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.03),transparent)] bg-size-[100%_3px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-0 py-20 sm:py-28">
        <div className="flex flex-col gap-14">
          <motion.div
            {...fade}
            className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
          >
            <div className="max-w-3xl">
              <h2 className="font-cal-sans text-[44px] leading-[1.05] sm:text-[64px] tracking-tight">
                <span className="block">Unleashing</span>
                <span className="block">Cutting-Edge</span>
                <span className="block">
                  <span className="text-[rgb(0,230,153)]">ATPS</span>{" "}
                  Assessments.
                </span>
              </h2>
            </div>

            <div className="max-w-sm lg:pt-6">
              <p className="text-[12px] leading-5 text-white/65">
                ATPS streamlines exam delivery with secure proctoring, fast
                grading, and real-time analytics for institutions at any scale.
              </p>
              <Link
                href="#"
                className="mt-3 inline-flex items-center gap-2 text-[12px] font-medium text-white/85 hover:text-white"
              >
                Power your exams with ATPS <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div {...fade} className="relative">
            <div className="relative mx-auto mt-20 h-[520px] w-full">
              {/* glow behind map */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.32),transparent_62%)] blur-2xl" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,230,153,0.16),transparent_62%)] blur-2xl" />

              {/* Map (ATPS themed) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full overflow-hidden">
                  <WorldMapDemo
                    className="w-full"
                    lineColor="rgb(0,230,153)"
                    variant="dark"
                  />
                  {/* overlay: vignette + scanline feel */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.75)),linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.55))]" />
                  <div className="pointer-events-none absolute inset-0 opacity-25 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.05),transparent)] bg-size-[100%_3px]" />
                </div>
              </div>

              {/* labels */}
              <div className="absolute inset-0">
                <GlobeLabel className="left-[10%] top-[38%]" muted={false}>
                  RELIABLE
                </GlobeLabel>
                <GlobeLabel className="right-[14%] top-[41%]" muted={false}>
                  SCALABILITY
                </GlobeLabel>
                <GlobeLabel className="right-[8%] top-[54%]" muted={false}>
                  REAL-TIME PROCTORING
                </GlobeLabel>

                <GlobeLabel className="left-[4%] top-[52%]" muted>
                  HIGH COMPATIBILITY
                </GlobeLabel>

                <GlobeLabel className="left-[18%] bottom-[16%]" muted>
                  WORKS WITH LMS
                </GlobeLabel>
                <GlobeLabel className="right-[14%] bottom-[14%]" muted>
                  WORKS WITH PROCTORING TOOLS
                </GlobeLabel>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

