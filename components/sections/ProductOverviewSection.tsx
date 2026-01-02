"use client";

import { PRODUCT_OVERVIEW } from "@/constants/constants";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  badgeAnimation,
  containerAnimation,
  defaultViewport,
  headerContainerAnimation,
  imageAnimation,
  listItemAnimation,
  productCardAnimation,
  productContentAnimation,
  productDescriptionAnimation,
  productsContainerAnimation,
  productTitleAnimation,
  subtitleAnimation,
  titleAnimation,
} from "@/lib/motion/motion";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    onChange();

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }

    // Older Safari fallback (deprecated API, but still needed on some devices)
    (mql as unknown as { addListener: (cb: () => void) => void }).addListener(
      onChange
    );
    return () =>
      (
        mql as unknown as { removeListener: (cb: () => void) => void }
      ).removeListener(onChange);
  }, [query]);

  return matches;
}

function ProductOverviewCard({
  product,
  index,
}: {
  product: (typeof PRODUCT_OVERVIEW)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const enableParallax = !reduceMotion && !isMobile;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      ref={cardRef}
      variants={productCardAnimation}
      custom={index}
      style={{ y: enableParallax ? cardY : 0 }}
      whileHover={{
        scale: 1.01,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      className="bg-white rounded-2xl p-4 border border-gray-100"
    >
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* Content */}
        <motion.div
          variants={productContentAnimation}
          style={{ y: enableParallax ? contentY : 0 }}
          className="flex flex-col gap-4 p-6 sm:p-8 lg:p-10"
        >
          <motion.h3
            variants={productTitleAnimation}
            className="text-3xl sm:text-[44px] font-medium leading-tight sm:leading-[52px] max-w-xl"
          >
            {product.title}
          </motion.h3>

          <motion.p
            variants={productDescriptionAnimation}
            className="text-gray-500 text-[16px] max-w-xl leading-[24px] font-normal"
          >
            {product.description}
          </motion.p>

          <motion.ul
            variants={productContentAnimation}
            className="flex flex-col gap-4"
          >
            {product.list.map((item, itemIndex) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.text}
                  variants={listItemAnimation}
                  custom={itemIndex}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="flex items-center justify-center w-9 h-9 rounded-sm bg-linear-to-b from-purple-100 to-pink-100 shrink-0"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <span className="text-[16px] sm:text-[18px] leading-[28px] font-medium">
                    {item.text}
                  </span>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageAnimation}
          style={{ y: enableParallax ? imageY : 0 }}
          whileHover={{
            scale: 1.03,
            transition: {
              duration: 0.4,
              ease: "easeOut",
            },
          }}
          className="flex w-full justify-center lg:justify-end overflow-hidden rounded-2xl max-w-[520px]"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
            priority={index === 0}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ProductOverviewSection() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      variants={containerAnimation}
      id="feature"
      className="bg-[#faf9fb] py-20 md:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto max-md:px-4">
        {/* Section Header */}
        <motion.div
          variants={headerContainerAnimation}
          className="text-center mb-12"
        >
          <motion.div
            variants={badgeAnimation}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-4 shadow-xl border border-purple-500"
          >
            <span className="text-sm font-medium text-gray-700">
              PRODUCT OVERVIEW
            </span>
          </motion.div>

          <motion.h2
            variants={titleAnimation}
            className="text-4xl md:text-[60px] font-medium leading-tight md:leading-[60px] max-w-xl mx-auto mb-4"
          >
            Explore the Power of ATPS
          </motion.h2>

          <motion.p
            variants={subtitleAnimation}
            className="text-gray-600 text-[18px] leading-[28px] max-w-3xl mx-auto"
          >
            Discover how ATPS transforms raw data into actionable insights. Our
            advanced features are designed to optimize workflows
          </motion.p>
        </motion.div>

        {/* Products List */}
        <motion.div
          variants={productsContainerAnimation}
          className="flex flex-col gap-4"
        >
          {PRODUCT_OVERVIEW.map((product, index) => (
            <ProductOverviewCard
              key={product.title}
              product={product}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
