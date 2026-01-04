 "use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  buttonAnimation,
  containerAnimation,
  defaultViewport,
  titleAnimation,
} from "@/lib/motion/motion";

export function SectionLast() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      variants={containerAnimation}
      className="relative w-full overflow-hidden bg-black text-white"
    >
      <div
        className={cn(
          "absolute inset-0 z-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 py-16 sm:py-24 lg:py-32">
          <motion.h2
            variants={titleAnimation}
            className="text-balance text-center font-cal-sans tracking-tight leading-[1.05] text-[32px] sm:text-[44px] lg:text-[56px] max-w-3xl"
          >
            For Learning, Assessment, and Education—Available Today.
          </motion.h2>

          <motion.div variants={buttonAnimation} className="w-full sm:w-auto">
            <Link href="/sign-up" className="block w-full sm:w-auto">
              <Button className="w-full sm:w-auto rounded-full px-8 h-14 text-[16px] bg-[rgb(0,230,153)] text-black hover:bg-[rgb(0,230,153)]/90 transition-colors">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
