"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PLANS } from "@/constants/constants";
import { Sparkle, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  badgeAnimation,
  cardAnimation,
  cardsContainerAnimation,
  containerAnimation,
  defaultViewport,
  descriptionAnimation,
  featureItemAnimation,
  featuresContainerAnimation,
  headerAnimation,
  popularBadgeAnimation,
  sparkleIconAnimation,
  starIconAnimation,
  titleAnimation,
  toggleAnimation,
} from "@/lib/motion/motion";

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      variants={containerAnimation}
      id="pricing"
      className="bg-[#faf9fb] py-20 md:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto max-md:px-4">
        {/* Section Header */}
        <motion.div variants={headerAnimation} className="text-center mb-12">
          <motion.div
            variants={badgeAnimation}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-4 shadow-xl border border-purple-500"
          >
            <span className="text-sm font-medium text-gray-700">PRICING</span>
          </motion.div>

          <motion.h2
            variants={titleAnimation}
            className="text-4xl md:text-[60px] leading-tight md:leading-[60px] font-medium mb-4"
          >
            Simple, Flexible Pricing
          </motion.h2>

          <motion.p
            variants={descriptionAnimation}
            className="text-gray-600 text-[16px] leading-[26px] font-normal max-w-xl mx-auto mb-8"
          >
            Pricing plans for businesses at every stage of growth.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            variants={toggleAnimation}
            className="inline-flex items-center bg-gray-100 rounded-sm p-1"
          >
            <motion.button
              type="button"
              onClick={() => setBillingPeriod("monthly")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 rounded-sm text-[14px] sm:text-[16px] leading-[26px] font-medium transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-white shadow-sm"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </motion.button>

            <motion.button
              type="button"
              onClick={() => setBillingPeriod("yearly")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 rounded-sm text-[14px] sm:text-[16px] leading-[26px] font-medium transition-colors ${
                billingPeriod === "yearly"
                  ? "bg-white shadow-sm"
                  : "text-gray-600"
              }`}
            >
              Yearly
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={cardsContainerAnimation}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardAnimation}
              custom={index}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className={`bg-white rounded-xl p-2 overflow-hidden border border-gray-200 relative ${
                plan.popular
                  ? "border-2 border-[#1c1033]"
                  : "border border-gray-100"
              }`}
            >
              {/* Plan Header */}
              <div
                className={`flex flex-col items-start px-2 py-2 gap-2 mb-4 ${
                  plan.popular ? "px-3 py-2 rounded-lg bg-gray-100" : ""
                }`}
              >
                {/*<div
                  className={`absolute -z-1 h-[220px] w-[220px] -top-20 -right-10 rounded-full bg-gradient-to-r from-[#ffe7d4] via-[#E6A0D5] to-[#D896EC] blur-lg 
                 ${plan.popular ? "opacity-100" : "opacity-0"}`}
                />*/}
                <div className="flex items-center z-99 gap-2">
                  <motion.div variants={starIconAnimation}>
                    <Star
                      className={`${
                        plan.popular
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-500 fill-gray-500"
                      } w-5 h-5`}
                    />
                  </motion.div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-[24px] leading-[32px]">
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <motion.div variants={popularBadgeAnimation} className="">
                        <span className="bg-[#1c1033] text-white text-xs font-medium px-3 py-1 rounded-full">
                          Popular
                        </span>
                      </motion.div>
                    )}
                  </div>
                </div>
                <p className="text-[#1b0c25] text-[16px] leading-[26px] font-normal mb-6">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 px-2">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.span
                    key={`${plan.name}-${billingPeriod}`}
                    initial={{ opacity: 0.85, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0.85, y: -2 }}
                    transition={{ duration: 0.12, ease: "easeOut" }}
                    className="inline-block text-3xl sm:text-[44px] leading-[52px] font-medium"
                  >
                    {plan.price[billingPeriod]}
                  </motion.span>
                </AnimatePresence>
                {plan.price[billingPeriod] !== "Free" && (
                  <span className="text-gray-500 text-sm">
                    /month, per user
                  </span>
                )}
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-2"
              >
                <Button
                  className={`w-full py-6 rounded-md text-base font-medium mb-6 ${
                    plan.popular
                      ? "bg-[#1c1033] hover:bg-[#2d1b4e] text-white"
                      : "bg-white hover:bg-gray-50 text-black border border-gray-200"
                  }`}
                >
                  Get Started
                </Button>
              </motion.div>

              {/* Features */}
              <div>
                <p className="text-[16px] leading-[26px] font-normal text-gray-500 mb-4 px-2">
                  What&apos;s Included
                </p>
                <motion.ul
                  variants={featuresContainerAnimation}
                  className="space-y-3 px-2"
                >
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      variants={featureItemAnimation}
                      custom={featureIndex}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-[16px] leading-[26px] font-normal"
                    >
                      <motion.div
                        variants={sparkleIconAnimation}
                        whileHover="hover"
                      >
                        <Sparkle className="w-5 h-5 text-black fill-black" />
                      </motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
