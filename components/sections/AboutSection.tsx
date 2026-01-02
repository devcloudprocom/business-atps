"use client";

import { motion, useReducedMotion } from "framer-motion";
import { badgeAnimation, defaultViewport } from "@/lib/motion/motion";

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  const aboutTextAnimation = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.32,
        ease: "easeOut" as const,
      },
    },
  } as const;

  const aboutText =
    "ATPS is crafted to elevate how businesses showcase their AI solutions. With a focus on clean design, it helps brands engage and convert.";

  return (
    <section id="about" className="relative">
      <div className="gradient-footer mr-4 ml-4 p-10 md:p-40 relative rounded-2xl overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-purple-900/50 via-pink-900/30 to-purple-900/50" />

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            variants={badgeAnimation}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-4 shadow-xl border border-purple-500"
          >
            <span className="text-sm font-medium">ABOUT</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              variants={aboutTextAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ ...defaultViewport, amount: 0.5 }}
              className="text-4xl md:text-[60px] font-medium leading-tight md:leading-[60px] mb-4"
            >
              <span className="text-white">{aboutText}</span>
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}
