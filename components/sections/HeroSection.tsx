"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { motion, useReducedMotion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  containerAnimation,
} from "@/lib/motion/motion";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative w-full min-h-svh flex items-center justify-center px-4 sm:px-6 pt-24 md:pt-0"
      initial={reduceMotion ? undefined : "initial"}
      animate={reduceMotion ? undefined : "animate"}
      variants={reduceMotion ? undefined : staggerContainer}
    >
      <motion.div
        className={cn(
          "absolute inset-0 z-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
        variants={reduceMotion ? undefined : containerAnimation}
      />
      {/* Radial gradient for the container to give a faded look */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"
        variants={reduceMotion ? undefined : containerAnimation}
      ></motion.div>

      <motion.div
        className="flex w-full max-w-5xl flex-col items-center justify-center gap-8 sm:gap-10 z-10"
        variants={reduceMotion ? undefined : staggerContainer}
      >
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={reduceMotion ? undefined : staggerContainer}
        >
          <motion.h1
            variants={reduceMotion ? undefined : staggerItem}
            className="text-[40px] leading-[44px] sm:text-[56px] sm:leading-[64px] lg:text-[72px] lg:leading-[80px] max-w-3xl font-cal-sans text-center"
          >
            Ship faster with ATPS
          </motion.h1>
          <motion.p
            variants={reduceMotion ? undefined : staggerItem}
            className="mt-3 text-[16px] sm:text-[18px] text-muted-foreground text-center leading-[26px] sm:leading-[32px] font-normal max-w-2xl"
          >
            ATPS helps educational institutions create, manage, and deliver
            online learning, exams, and assessments effortlessly. Unlock
            actionable insights and automate evaluation and supervision
            processes with ease.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-2"
          variants={reduceMotion ? undefined : staggerContainer}
        >
          <motion.div
            variants={reduceMotion ? undefined : staggerItem}
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            <Button className="w-full sm:w-auto bg-[rgb(0,230,153)] hover:bg-[rgb(0,230,153)]/90 h-14 px-8 text-black text-[16px] leading-[24px] font-medium rounded-full">
              Start for Free
            </Button>
          </motion.div>
          <motion.div
            variants={reduceMotion ? undefined : staggerItem}
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            <Button className="w-full sm:w-auto bg-transparent hover:bg-transparent text-white text-[16px] leading-[24px] font-medium rounded-full h-14 px-8 sm:h-9 sm:px-4 sm:py-2">
              Talk to Us ⟶
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
