"use client";

import { BLOG_DETAILS } from "@/constants/constants";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

export const BlogDetails = ({ id }: { id: string }) => {
  const shouldReduceMotion = useReducedMotion();

  const blog = BLOG_DETAILS.find((b) => b.id === id);

  const viewport = useMemo(() => ({ once: true, amount: 0.2 }), []);

  const pageVariants = useMemo(
    () => ({
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.35,
          ease: "easeOut" as const,
          staggerChildren: 0.12,
          delayChildren: 0.08,
        },
      },
    }),
    [shouldReduceMotion],
  );

  const fadeUp = useMemo(
    () => ({
      initial: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.55,
          ease: "easeOut" as const,
        },
      },
    }),
    [shouldReduceMotion],
  );

  const imageVariants = useMemo(
    () => ({
      initial: {
        opacity: 0,
        y: shouldReduceMotion ? 0 : 12,
        scale: shouldReduceMotion ? 1 : 0.985,
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.65,
          ease: "easeOut" as const,
        },
      },
    }),
    [shouldReduceMotion],
  );

  const listContainer = useMemo(
    () => ({
      initial: {},
      animate: {
        transition: {
          staggerChildren: 0.08,
        },
      },
    }),
    [],
  );

  const listItem = useMemo(
    () => ({
      initial: { opacity: 0, x: shouldReduceMotion ? 0 : -10 },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.45,
          ease: "easeOut" as const,
        },
      },
    }),
    [shouldReduceMotion],
  );

  if (!blog) {
    return (
      <motion.section
        initial="initial"
        animate="animate"
        variants={pageVariants}
        className="bg-gray-500/5 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-50 lg:pb-30"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center max-w-3xl justify-center gap-3 text-center">
              <motion.div
                variants={fadeUp}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03, rotate: 2 }}
                className="inline-flex items-center gap-2 bg-white backdrop-blur-sm rounded-full px-4 py-1.5 border shadow-lg border-purple-500"
              >
                <span className="text-[14px] leading-[16px] tracking-wide font-medium text-black">
                  BLOG
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-[26px] leading-[30px] sm:text-[28px] sm:leading-[32px] md:text-[36px] md:leading-[40px] font-medium px-4"
              >
                Blog not found
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-[14px] leading-[20px] tracking-wide font-medium text-gray-500"
              >
                The blog post you requested doesn&apos;t exist.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="bg-gray-500/5 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-50 lg:pb-30"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-12 sm:gap-16 lg:gap-20">
          {/* Hero */}
          <div className="flex flex-col items-center max-w-3xl justify-center gap-3 sm:gap-4 w-full">
            <motion.div
              variants={fadeUp}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03, rotate: 2 }}
              className="inline-flex items-center gap-2 bg-white backdrop-blur-sm rounded-full px-4 py-1.5 border shadow-lg border-purple-500"
            >
              <span className="text-[14px] leading-[16px] tracking-wide font-medium text-black uppercase">
                {blog.category}
              </span>
            </motion.div>

            <div className="flex flex-col items-center justify-center gap-5">
              <div className="flex flex-col items-center justify-center gap-1 text-center">
                <motion.h1
                  variants={fadeUp}
                  className="text-[30px] leading-[34px] sm:text-[40px] sm:leading-[44px] md:text-[50px] md:leading-[55px] lg:text-[60px] lg:leading-[60px] font-medium text-center px-4 max-w-2xl"
                >
                  {blog.title}
                </motion.h1>
              </div>

              <motion.div
                variants={fadeUp}
                className="text-[16px] leading-[26px] tracking-wide font-normal text-gray-500"
              >
                {blog.date}
              </motion.div>

              <motion.div
                variants={imageVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.01,
                        transition: { duration: 0.25, ease: "easeOut" as const },
                      }
                }
                className="w-full max-w-3xl"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={800}
                  height={800}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 768px, 768px"
                  className="rounded-2xl w-full h-auto"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col items-center max-w-3xl justify-center gap-10 sm:gap-12 lg:gap-15 w-full">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              variants={pageVariants}
              className="flex flex-col text-[16px] leading-[26px] tracking-wide font-normal gap-8"
            >
              <motion.p variants={fadeUp}>
                Using SaaS for financial management brings a range of benefits. From real-time data
                insights to enhanced security and easy scalability, SaaS tools are designed to
                support financial accuracy and business agility. Here are a few specific benefits.
              </motion.p>

              <motion.p variants={fadeUp}>
                Cost Efficiency: "No large upfront costs and lower maintenance expenses."
                <br />
                Accessibility: "Access your data anytime, anywhere with cloud-based systems."
                <br />
                Flexibility: "Choose from scalable pricing plans that grow with your needs."
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              variants={pageVariants}
              className="flex flex-col items-start gap-4 w-full"
            >
              <motion.h2
                variants={fadeUp}
                className="text-[26px] leading-[30px] sm:text-[32px] sm:leading-[36px] md:text-[40px] md:leading-[44px] lg:text-[44px] lg:leading-[53px] font-medium"
              >
                Key Benefits of SaaS for Businesses
              </motion.h2>

              <div className="flex flex-col gap-2">
                <motion.div variants={fadeUp} className="flex flex-col items-start gap-1">
                  <h1 className="text-[16px] leading-[26px] tracking-wide font-bold">Cost Efficiency:</h1>
                  <p className="text-[16px] leading-[26px] tracking-wide font-normal">
                    "SaaS typically operates on a subscription model, allowing businesses to avoid
                    large upfront costs. This flexibility makes high-quality software accessible to
                    startups, mid-size companies, and large enterprises alike."
                  </p>
                </motion.div>

                <motion.ul
                  variants={listContainer}
                  className="list-disc list-inside flex flex-col items-start gap-2"
                >
                  <motion.li variants={listItem} className="text-[16px] leading-[26px] tracking-wide font-bold">
                    Scalability on Demand: <br />
                    <span className="text-[16px] leading-[26px] tracking-wide font-normal">
                      "As your business grows, so can your SaaS services. SaaS platforms make it
                      easy to add or reduce services as needed, so you’re only paying for what you
                      use. Scaling is fast, often just a few clicks, allowing you to stay agile."
                    </span>
                  </motion.li>

                  <motion.li variants={listItem} className="text-[16px] leading-[26px] tracking-wide font-bold">
                    Access from Anywhere: <br />
                    <span className="text-[16px] leading-[26px] tracking-wide font-normal">
                      "SaaS solutions are cloud-based, meaning employees can access software from
                      any location with internet connectivity. This mobility supports remote work,
                      real-time collaboration, and fast data access across global teams."
                    </span>
                  </motion.li>

                  <motion.li variants={listItem} className="text-[16px] leading-[26px] tracking-wide font-bold">
                    Automatic Updates and Security: <br />
                    <span className="text-[16px] leading-[26px] tracking-wide font-normal">
                      "With SaaS, updates are handled automatically by the provider, ensuring you
                      always have access to the latest features and security improvements without
                      any hassle."
                    </span>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              variants={pageVariants}
              className="flex flex-col items-start gap-4 w-full"
            >
              <motion.h2
                variants={fadeUp}
                className="text-[26px] leading-[30px] sm:text-[32px] sm:leading-[36px] md:text-[40px] md:leading-[44px] lg:text-[44px] lg:leading-[53px] font-medium"
              >
                Choosing the Right SaaS Solution for Your Business
              </motion.h2>

              <div className="flex flex-col gap-2">
                <motion.div variants={fadeUp}>
                  <h1 className="text-[16px] leading-[26px] tracking-wide font-bold">Compatibility:</h1>
                  <p className="text-[16px] leading-[26px] tracking-wide font-normal">
                    "Ensure that the SaaS software integrates with your existing systems, such as
                    your CRM, payment processing, and accounting software, for smooth operations."
                  </p>
                </motion.div>

                <motion.ul
                  variants={listContainer}
                  className="list-disc list-inside flex flex-col items-start gap-2"
                >
                  <motion.li variants={listItem} className="text-[16px] leading-[26px] tracking-wide font-bold">
                    Scalability: <br />
                    <span className="text-[16px] leading-[26px] tracking-wide font-normal">
                      "Look for a solution that can grow with your business. A good SaaS platform
                      should accommodate your business as it scales, supporting additional users,
                      locations, and services as needed."
                    </span>
                  </motion.li>

                  <motion.li variants={listItem} className="text-[16px] leading-[26px] tracking-wide font-bold">
                    User Experience: <br />
                    <span className="text-[16px] leading-[26px] tracking-wide font-normal">
                      "The ideal SaaS product should have a user-friendly interface, minimizing
                      the need for intensive training and promoting quick adoption among your
                      team."
                    </span>
                  </motion.li>

                  <motion.li variants={listItem} className="text-[16px] leading-[26px] tracking-wide font-bold">
                    Customer Support and Security: <br />
                    <span className="text-[16px] leading-[26px] tracking-wide font-normal">
                      "Evaluate the SaaS provider’s customer support and data security measures.
                      Quality support and secure data practices are essential for long-term success
                      and reliability."
                    </span>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};