"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FAQS } from "@/constants/constants";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  buttonAnimation,
  defaultViewport,
  faqItemAnimation,
  faqsContainerAnimation,
  subtitleAnimation,
  titleAnimation,
} from "@/lib/motion/motion";

export function FAQSection() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 px-4 sm:px-6 lg:px-0">
        <motion.h1
          className="text-[32px] leading-[38px] sm:text-[50px] sm:leading-[56px] max-w-lg font-medium font-cal-sans text-center lg:text-left"
          initial={titleAnimation.initial}
          whileInView={titleAnimation.animate}
          viewport={defaultViewport}
        >
          Your question, answered.
        </motion.h1>
        <div className="flex flex-col w-full max-w-2xl gap-4">
          <motion.div
            className="w-full"
            variants={{
              initial: faqsContainerAnimation.initial,
              animate: faqsContainerAnimation.animate,
            }}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
          >
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {FAQS.map((faq, index) => {
                const value = `item-${index + 1}`;
                return (
                  <motion.div
                    key={value}
                    variants={{
                      initial: faqItemAnimation.initial,
                      animate: faqItemAnimation.animate,
                    }}
                  >
                    <AccordionItem value={value}>
                      <AccordionTrigger className="text-[20px] leading-[26px] sm:text-[26px] sm:leading-[32px] font-normal hover:text-[rgb(0,230,153)]">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[16px] leading-[24px] font-normal">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>
          </motion.div>
        </div>
      </div>
      <div className="relative w-full flex justify-between items-center flex-col gap-4 py-20 sm:py-50 mt-10">
        <div
          className={cn(
            "absolute inset-0 z-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="z-10 w-full flex justify-center items-center flex-col gap-10 text-center">
          <div className="flex flex-col gap-2">
            <motion.h1
              className="text-[32px] leading-[38px] sm:text-[50px] sm:leading-[56px] max-w-lg font-medium font-cal-sans"
              initial={titleAnimation.initial}
              whileInView={titleAnimation.animate}
              viewport={defaultViewport}
            >
              Still have questions?
            </motion.h1>
            <motion.p
              className="text-[16px] leading-[24px] font-normal text-muted-foreground"
              initial={subtitleAnimation.initial}
              whileInView={subtitleAnimation.animate}
              viewport={defaultViewport}
            >
              Contact us for more information.
            </motion.p>
          </div>
          <Link href="/contact">
            <motion.div
              initial={buttonAnimation.initial}
              whileInView={buttonAnimation.animate}
              viewport={defaultViewport}
            >
              <Button className="rounded-full text-[16px] h-[50px] bg-[rgb(0,230,153)] text-black hover:bg-[rgb(0,230,153)]/90">
                Contact Us
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
