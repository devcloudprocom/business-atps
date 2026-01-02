"use client";

import Image from "next/image";
import { BENEFITS } from "@/constants/constants";
import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import {
  badgeAnimation,
  checkIconAnimation,
  columnContainerAnimation,
  containerAnimation,
  defaultViewport,
  descriptionAnimation,
  headerContainerAnimation,
  imageAnimation,
  leftColumnItemAnimation,
  mainCardAnimation,
  rightColumnItemAnimation,
  titleAnimation,
} from "@/lib/motion/motion";
import { ButtonDemo } from "../ButtonDemo";

export function KeyBenefitsSection() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      variants={containerAnimation}
      className="bg-[rgb(250,249,251)] py-20"
    >
      <div className="max-w-7xl mx-auto max-md:px-4">
        {/* Section Header */}
        <motion.div
          variants={headerContainerAnimation}
          className="text-center mb-12"
        >
          <motion.div
            variants={badgeAnimation}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-4 shadow-xl border border-purple-500"
          >
            <span className="text-[14px] leading-[16px] tracking-wide font-medium text-gray-700">
              KEY BENEFITS
            </span>
          </motion.div>

          <motion.h2
            variants={titleAnimation}
            className="text-4xl md:text-[60px] font-medium leading-[60px] mb-4"
          >
            Why Choose ATPS
          </motion.h2>

          <motion.p
            variants={descriptionAnimation}
            className="text-gray-600 text-[18px] max-w-3xl pt-4 mx-auto"
          >
            ATPS offers powerful benefits that help you save time, improve
            decision-making, and scale your data operations effortlessly.
          </motion.p>
        </motion.div>

        {/* Main Card with Team Collaboration */}
        <motion.div
          variants={mainCardAnimation}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
          className="bg-white rounded-2xl p-6 lg:p-10 border border-gray-200 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column */}
            <motion.div
              variants={columnContainerAnimation}
              className="flex flex-col gap-8 flex-1"
            >
              {BENEFITS.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={leftColumnItemAnimation}
                  custom={index}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-start flex-col gap-3"
                >
                  <motion.div
                    variants={checkIconAnimation}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                    className="flex items-center justify-center w-10 h-10 rounded-md bg-linear-to-b from-purple-100 to-pink-100"
                  >
                    <CircleCheck className="w-6 h-6 text-white fill-black" />
                  </motion.div>
                  <h4 className="font-medium text-[18px] leading-[28px] mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-500 text-[16px] leading-[24px] font-normal">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Center Image */}
            <motion.div
              variants={imageAnimation}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.4 },
              }}
              className="flex-1 w-full h-full flex items-center justify-center"
            >
              <Image
                src="/assets/benefist.avif"
                alt="Key Benefits"
                width={700}
                height={700}
                className="rounded-2xl w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Column */}
            <motion.div
              variants={columnContainerAnimation}
              className="flex flex-col gap-8 flex-1"
            >
              {BENEFITS.slice(3, 6).map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={rightColumnItemAnimation}
                  custom={index}
                  whileHover={{
                    x: -10,
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-start flex-col gap-3"
                >
                  <motion.div
                    variants={checkIconAnimation}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                    className="flex items-center justify-center w-10 h-10 rounded-md bg-linear-to-b from-purple-100 to-pink-100"
                  >
                    <CircleCheck className="w-6 h-6 text-white fill-black" />
                  </motion.div>
                  <h4 className="font-medium text-[18px] leading-[28px] mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-500 text-[16px] leading-[24px] font-normal">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <ButtonDemo />
        </div>
      </div>
    </motion.section>
  );
}
