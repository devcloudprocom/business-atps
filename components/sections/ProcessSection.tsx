"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { STEPS } from "@/constants/constants";
import { motion } from "framer-motion";
import {
  badgeAnimation,
  buttonsAnimation,
  containerAnimation,
  defaultViewport,
  descriptionAnimation,
  headerAnimation,
  imageAnimation,
  stepContentAnimation,
  stepImageAnimation,
  stepItemAnimation,
  stepsContainerAnimation,
  titleAnimation,
  topGridAnimation,
} from "@/lib/motion/motion";

export function ProcessSection() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      variants={containerAnimation}
      className="bg-[#faf9fb] pt-20 md:pt-28 lg:pt-32 pb-20"
    >
      <div className="max-w-7xl flex flex-col gap-6 mx-auto max-md:px-4">
        {/* Top Grid */}
        <motion.div
          variants={topGridAnimation}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Left Content */}
          <motion.div
            variants={headerAnimation}
            className="col-span-2 flex flex-col gap-6 bg-white p-6 sm:p-10 rounded-2xl border border-gray-200"
          >
            <div className="mb-3 ">
              <motion.div
                variants={badgeAnimation}
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-2 shadow-xl border border-purple-500"
              >
                <span className="text-[14px] leading-[16px] tracking-wide font-medium text-gray-700">
                  HOT IT WORKS
                </span>
              </motion.div>

              <motion.h2
                variants={titleAnimation}
                className="text-4xl md:text-[60px] leading-tight md:leading-[60px] max-w-lg font-medium mb-4"
              >
                A Simple 3-Step Process
              </motion.h2>

              <motion.p
                variants={descriptionAnimation}
                className="text-gray-600 text-[16px] leading-[26px] font-normal max-w-xl"
              >
                Get started quickly and effortlessly with ATPS&apos;s
                streamlined 3-step process designed to optimize your data
                workflow.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={buttonsAnimation}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="h-12 rounded-lg bg-[#1c1033] px-10 text-base font-medium text-white shadow-sm hover:bg-[#2d1b4e]">
                  Get Started
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="h-12 rounded-lg border-white/70 bg-white/40 px-10 text-base font-medium text-black shadow-sm backdrop-blur-xl hover:bg-white/55"
                >
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageAnimation}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.4 },
            }}
            className="col-span-1 rounded-2xl p-2 bg-white flex items-center justify-center border border-gray-200"
          >
            <Image
              src="/assets/ia_p.avif"
              alt="Process"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={stepsContainerAnimation}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              variants={stepItemAnimation}
              custom={index}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl p-2 border border-gray-200"
            >
              <motion.div
                variants={stepImageAnimation}
                className={`h-[280px] w-full rounded-xl bg-linear-to-br ${step.gradient} mb-4 overflow-hidden relative`}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={500}
                  height={200}
                  className="object-cover"
                />
              </motion.div>

              <motion.div variants={stepContentAnimation} className="p-6">
                <h3 className="font-medium text-[24px] leading-[32px] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-[16px] leading-[26px] font-normal">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
