"use client";

import {
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
      className="relative overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-0">
        <motion.h2
          variants={titleAnimation}
          className="text-4xl sm:text-5xl font-cal-sans md:text-[76px] leading-tight md:leading-[76px] font-medium mb-8 max-w-3xl text-white"
        >
          Ready to start your AI journey with us?
        </motion.h2>

        <ButtonDemo />
      </div>
    </motion.section>
  );
}
