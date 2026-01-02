"use client";
import { FAQS, PEOPLE } from "@/constants/constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  avatarsAnimation,
  badgeAnimation,
  contactAnimation,
  containerAnimation,
  defaultViewport,
  faqContentAnimation,
  faqItemAnimation,
  faqsContainerAnimation,
  headerAnimation,
  mainCardAnimation,
  plusMinusAnimation,
  titleAnimation,
} from "@/lib/motion/motion";
import { AnimatedTooltip } from "../ui/animated-tooltip";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      variants={containerAnimation}
      id="faq"
      className="bg-[#faf9fb] py-20"
    >
      <div className="max-w-7xl mx-auto max-md:px-4">
        {/* Main Card */}
        <motion.div
          variants={mainCardAnimation}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
          className="bg-white border border-gray-200 flex flex-col lg:flex-row justify-between items-start gap-8 rounded-xl p-6 lg:p-8"
        >
          {/* Section Header */}
          <motion.div
            variants={headerAnimation}
            className="flex flex-col gap-4 items-start justify-start"
          >
            <div>
              <motion.div
                variants={badgeAnimation}
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-4 shadow-xl border border-purple-500"
              >
                <span className="text-[14px] leading-[16px] tracking-wide font-medium text-gray-700">
                  FAQ
                </span>
              </motion.div>

              <motion.h2
                variants={titleAnimation}
                className="text-3xl sm:text-[44px] leading-tight sm:leading-[53px] max-w-lg font-medium mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
            </div>

            <motion.div
              variants={contactAnimation}
              className="flex flex-col gap-2"
            >
              <p className="text-[24px] leading-[28px] font-medium mb-2">
                Still have a question?
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <a
                  href="#contact"
                  className="text-[16px] leading-[24px] font-medium hover:underline"
                >
                  Contact us!
                </a>
                <p className="text-gray-500 text-[16px] leading-[24px] font-normal">
                  We&apos;ll be happy to help you.
                </p>
              </div>

              <motion.div
                variants={avatarsAnimation}
                className="flex gap-2 mt-4"
              >
                <AnimatedTooltip
                  items={PEOPLE.map((person, index) => ({
                    id: index,
                    ...person,
                  }))}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            variants={faqsContainerAnimation}
            className="flex flex-col gap-4 w-full lg:w-[700px]"
          >
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  variants={faqItemAnimation}
                  custom={index}
                  whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.2 },
                  }}
                  className={`bg-gray-400/10 p-4 rounded-lg transition-all ${
                    isOpen ? "bg-gray-400/20" : ""
                  }`}
                >
                  {/* Question */}
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="text-[18px] sm:text-[24px] leading-tight sm:leading-[29px] font-medium">
                      {faq.question}
                    </h3>

                    <motion.span
                      animate={isOpen ? "expanded" : "collapsed"}
                      variants={plusMinusAnimation}
                      className="text-2xl font-medium text-black w-6 h-6 flex items-center justify-center"
                    >
                      {isOpen ? "−" : "+"}
                    </motion.span>
                  </motion.button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        variants={faqContentAnimation}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="mt-2 text-[16px] leading-[24px] font-normal text-gray-500"
                        >
                          {faq.answer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
