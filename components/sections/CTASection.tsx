"use client";

import {
  badgeAnimation,
  containerAnimation,
  defaultViewport,
  titleAnimation,
} from "@/lib/motion/motion";
import { motion } from "framer-motion";
import { ButtonDemo } from "../ButtonDemo";

export function CTASection() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      variants={containerAnimation}
      id="contact"
      className="pt-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={badgeAnimation}
          className="inline-flex items-center gap-2 bg-white backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-purple-500"
        >
          <span className="text-[14px] leading-[16px] tracking-wide font-medium text-black">
            JOIN THE AI REVOLUTION
          </span>
        </motion.div>

        <motion.h2
          variants={titleAnimation}
          className="text-4xl sm:text-5xl md:text-[76px] leading-tight md:leading-[76px] font-medium mb-8 max-w-3xl text-white"
        >
          Ready to start your AI journey with us?
        </motion.h2>

        <ButtonDemo />
      </div>
    </motion.section>
  );
}
