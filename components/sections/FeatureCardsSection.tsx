"use client";

import { FEATURES } from "@/constants/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  badgeAnimation,
  containerAnimation,
  defaultViewport,
  headerContainerAnimation,
  titleAnimation,
  descriptionAnimation,
  gridContainerAnimation,
  cardAnimation,
  imageAnimation,
  textAnimation,
} from "@/lib/motion/motion";

export function FeatureCardsSection() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      variants={containerAnimation}
      className="bg-[#faf9fb] pt-20 md:pt-28 lg:pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto max-md:px-4">
        {/* Header */}
        <motion.div
          variants={headerContainerAnimation}
          className="text-center mb-16"
        >
          <motion.div
            variants={badgeAnimation}
            className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-4 shadow-xl border border-purple-500"
          >
            <span className="text-sm font-medium text-gray-700">
              BUSINESS & SOLUTION
            </span>
          </motion.div>

          <motion.h2
            variants={titleAnimation}
            className="text-4xl md:text-[60px] font-medium leading-tight max-w-4xl mx-auto mb-4"
          >
            The AI-powered customer service platform
          </motion.h2>

          <motion.p
            variants={descriptionAnimation}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            ATPS helps you connect, manage, and optimize your AI tools
            effortlessly.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={gridContainerAnimation}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardAnimation}
              custom={index}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.3,
                  ease: "easeOut" as const,
                },
              }}
              className={`bg-white rounded-2xl p-6 border border-gray-100 transition ${feature.col}`}
            >
              <motion.div
                variants={imageAnimation}
                whileHover={{
                  scale: 1.03,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut" as const,
                  },
                }}
                className={`${feature.gradient} rounded-xl h-80 mb-6 relative overflow-hidden`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div variants={textAnimation}>
                <h3 className="text-2xl font-medium mb-2">{feature.title}</h3>

                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
