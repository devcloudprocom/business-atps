"use client";

import { Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  backgroundAnimation,
  badgeAnimation,
  descriptionAnimation,
  titleAnimation,
} from "@/lib/motion/motion";
import { HeroMackup } from "../HeroMackup";
import { ButtonDemo } from "../ButtonDemo";
export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.section
      initial="initial"
      animate={isMounted ? "animate" : "initial"}
      className="relative w-full min-h-svh overflow-hidden"
    >
      <motion.div
        variants={backgroundAnimation}
        className="relative flex items-center justify-center mx-auto bg-[url('/assets/bg_pic.png')] bg-cover bg-center mt-4 mr-4 ml-4 rounded-2xl mx-4 pt-24 sm:pt-28 lg:pt-32"
      >
        <div className="w-full max-w-7xl max-md:px-4 mx-auto pt-8 sm:pt-10">
          {/* Badge */}
          <motion.div
            variants={badgeAnimation}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-1.5 shadow-sm backdrop-blur-md"
          >
            <div>
              <Sparkle className="h-[12px] w-[12px] fill-pink-500 text-pink-500" />
            </div>
            <span className="text-[14px] font-medium leading-[16px] tracking-wide text-black/80">
              BUSINESS &amp; SOLUTION
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={titleAnimation}
            className="mt-7 text-balance text-4xl font-medium leading-[1.06] text-[#1b0c25] md:text-5xl lg:text-[76px] lg:leading-[1.02]"
          >
            The AI-powered Customer Service Platform
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={descriptionAnimation}
            className="mt-6 max-w-2xl text-[16px] font-normal leading-6 text-[#1b0c25]/80 md:text-[18px] md:leading-7"
          >
            ATPS helps you connect, manage, and optimize your AI tools
            effortlessly. Unlock powerful insights and automate complex
            processes with ease.
          </motion.p>

          {/* Buttons */}
          <ButtonDemo />
          <HeroMackup />
        </div>
      </motion.div>
    </motion.section>
  );
}
