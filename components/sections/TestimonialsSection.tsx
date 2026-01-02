"use client";

import { STATS, TESTIMONIALS } from "@/constants/constants";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  badgeAnimation,
  carouselAnimation,
  containerAnimation,
  counterAnimation,
  defaultViewport,
  headerAnimation,
  navButtonAnimation,
  statItemAnimation,
  statsContainerAnimation,
  testimonialSlideAnimation,
  titleAnimation,
} from "@/lib/motion/motion";
import CountUp from "../CountUp";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto slide
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      variants={containerAnimation}
      id="testimonial"
      className="bg-[url('/assets/bg_pic.png')] bg-cover bg-center mr-4 ml-4 rounded-2xl py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto max-md:px-4 py-12 md:py-16 relative z-10">
        {/* Section Header */}
        <motion.div variants={headerAnimation} className="text-center mb-12">
          <motion.div
            variants={badgeAnimation}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-4 shadow-xl border border-purple-500"
          >
            <span className="text-[14px] leading-[16px] tracking-wide font-medium text-gray-700">
              WALL OF LOVE
            </span>
          </motion.div>

          <motion.h2
            variants={titleAnimation}
            className="text-4xl md:text-[60px] font-medium leading-[60px] mb-4"
          >
            What they&apos;re Saying
          </motion.h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          variants={carouselAnimation}
          className="relative max-w-2xl mx-auto mb-12"
        >
          <div className="bg-white/80 rounded-2xl p-6 sm:p-10 shadow-card overflow-hidden">
            <AnimatePresence mode="wait" custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={testimonialSlideAnimation}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col gap-6"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut" as const,
                      delay: 0.1,
                    },
                  }}
                  className="text-base sm:text-lg lg:text-[24px] leading-[32px] font-medium text-gray-800"
                >
                  &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut" as const,
                      delay: 0.2,
                    },
                  }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-full overflow-hidden bg-gray-200"
                  >
                    <Image
                      src={TESTIMONIALS[currentIndex].image}
                      alt={TESTIMONIALS[currentIndex].name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>

                  <div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: 0.3 },
                      }}
                      className="font-medium text-[16px] leading-[26px]"
                    >
                      {TESTIMONIALS[currentIndex].name}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: 0.4 },
                      }}
                      className="text-gray-500 text-[16px] leading-[26px] font-normal"
                    >
                      {TESTIMONIALS[currentIndex].role}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            variants={navButtonAnimation}
            whileHover="hover"
            whileTap="tap"
            type="button"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <motion.svg
              animate={{ x: [-2, 0, -2] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </motion.svg>
          </motion.button>

          <motion.button
            variants={navButtonAnimation}
            whileHover="hover"
            whileTap="tap"
            type="button"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <motion.svg
              animate={{ x: [0, 2, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </motion.svg>
          </motion.button>

          {/* Dots indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.6 },
            }}
            className="flex justify-center gap-2 mt-6"
          >
            {TESTIMONIALS.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-purple-600" : "bg-gray-300"
                }`}
                whileHover={{ scale: 1.5 }}
                animate={{
                  scale: index === currentIndex ? 1.2 : 1,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={statsContainerAnimation}
          className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-12"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statItemAnimation}
              custom={index}
              whileHover="hover"
              className="text-center"
            >
              <motion.p
                variants={counterAnimation(stat.value)}
                className="text-3xl sm:text-[44px] leading-[52px] font-medium mb-2"
              >
                <CountUp
                  to={parseInt(stat.value.replace(/,/g, ""))}
                  duration={2}
                  delay={0}
                  separator=","
                />
                {stat.sign}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.5 + index * 0.1 },
                }}
                className="text-gray-600 text-[16px] leading-[26px] font-normal"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
