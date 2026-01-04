"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, CalendarDays, Cpu, Link2, Sparkles } from "lucide-react";
import { PLANS } from "@/constants/constants";
import {
  cardAnimation,
  cardContentAnimation,
  cardsContainerAnimation,
  defaultViewport,
  featureItemAnimation,
  featuresContainerAnimation,
  headerContainerAnimation,
  priceAnimation,
  subtitleAnimation,
  titleAnimation,
} from "@/lib/motion/motion";

const QUOTA_ICONS = [Sparkles, Cpu, CalendarDays, Link2] as const;

export default function PricingAnimated() {
  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center text-center px-4 sm:px-0"
        variants={headerContainerAnimation}
        initial="initial"
        whileInView="animate"
        viewport={defaultViewport}
      >
        <motion.h1
          className="text-[40px] leading-[48px] sm:text-[64px] sm:leading-[72px] font-cal-sans"
          variants={titleAnimation}
        >
          ATPS Pricing
        </motion.h1>
        <motion.p
          className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[28px] font-normal text-muted-foreground"
          variants={subtitleAnimation}
        >
          Choose the plan that&apos;s right for you. No hidden fees.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex w-full justify-center gap-5 flex-col sm:flex-row sm:flex-wrap items-center sm:items-stretch px-4 sm:px-0"
        variants={cardsContainerAnimation}
        initial="initial"
        whileInView="animate"
        viewport={defaultViewport}
      >
        {PLANS.map((plan) => {
          const isPopular = plan.popular;
          const isFree = plan.price.monthly === "Free";

          const quotaItems = plan.features.slice(0, 4);
          const featureItems = plan.features.slice(4);

          const wrapperClassName = isPopular
            ? "flex flex-col gap-5 border-[rgb(0,230,153)] border max-w-[300px] w-full rounded-lg p-5"
            : "flex flex-col gap-5 bg-[rgba(255,255,255,0.05)] rounded-lg p-5 max-w-[300px] w-full";

          const buttonClassName = isPopular
            ? "rounded-full text-[16px] h-[50px] bg-[rgb(0,230,153)] text-black hover:bg-[rgb(0,230,153)]/90"
            : "rounded-full text-[16px] h-[50px]";

          const iconClassName = isPopular
            ? "w-4 h-4 text-[rgb(0,230,153)]"
            : "w-4 h-4";

          const checkClassName = isPopular
            ? "w-4 h-4 text-[rgb(0,230,153)]"
            : "w-4 h-4";

          return (
            <motion.div
              key={plan.name}
              className={wrapperClassName}
              variants={cardAnimation}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <motion.div className="flex flex-col gap-10" variants={cardContentAnimation}>
                <p className="text-[18px] leading-[18px] font-medium">
                  {plan.name}
                </p>
                <div className="flex items-end">
                  <motion.h1
                    className="text-[30px] leading-[36px] font-medium"
                    variants={priceAnimation}
                  >
                    {plan.price.monthly}
                  </motion.h1>
                  <p className="text-muted-foreground">
                    {isFree ? "" : "/month, per user"}
                  </p>
                </div>
              </motion.div>

              <Button className={buttonClassName}>Get Started</Button>

              <p className="text-[16px] text-muted-foreground leading-[16px]">
                {plan.description}
              </p>

              <Separator />

              <motion.div
                className="flex flex-col gap-2"
                variants={featuresContainerAnimation}
              >
                {quotaItems.map((text, idx) => {
                  const Icon = QUOTA_ICONS[idx] ?? Sparkles;
                  return (
                    <motion.p
                      key={`${plan.name}-quota-${text}`}
                      className="flex gap-2 text-[15px] items-center"
                      variants={featureItemAnimation}
                    >
                      <Icon className={iconClassName} />
                      {text}
                    </motion.p>
                  );
                })}
              </motion.div>

              <Separator />

              <motion.div
                className="flex flex-col gap-2"
                variants={featuresContainerAnimation}
              >
                <p>What&apos;s Included</p>
                <motion.ul className="flex flex-col gap-2" variants={featuresContainerAnimation}>
                  {featureItems.map((text) => (
                    <motion.li
                      key={`${plan.name}-feature-${text}`}
                      className="flex items-center gap-2 text-[15px]"
                      variants={featureItemAnimation}
                    >
                      <Check className={checkClassName} />
                      {text}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          );
        })}

        <motion.div
          className="flex max-w-3xl p-5 border border-white/10 rounded-lg bg-[rgba(255,255,255,0.05)] mx-auto mt-10 items-center md:flex-row flex-col justify-center gap-5"
          variants={cardAnimation}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-[24px] leading-[24px] font-medium">
              Agent Plan
            </h1>
            <p className="text-[16px] leading-[24px] font-normal text-muted-foreground">
              Get customized resource limits and usage credits with our Education
              Plan, designed for institutions and platforms delivering large-scale
              online learning, quizzes, and proctored examinations.
            </p>
          </div>
          <Button className="rounded-full px-6 py-3 text-[16px] h-[50px] w-[150px] bg-[rgb(0,230,153)] text-black hover:bg-[rgb(0,230,153)]/90">
            Apply Here
          </Button>
        </motion.div>
      </motion.div>
    </>
  );
}

