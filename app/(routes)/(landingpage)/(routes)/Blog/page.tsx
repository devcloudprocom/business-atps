"use client";

import { BLOG_POSTS } from "@/constants/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  badgeAnimation,
  cardAnimation,
  cardContentAnimation,
  cardsContainerAnimation,
  categoryBadgeAnimation,
  containerAnimation,
  dateAnimation,
  defaultViewport,
  imageAnimation,
  titleAnimation,
  titleCardAnimation,
} from "@/lib/motion/motion";
import Link from "next/link";

export default function Blogs() {
  return (
    <motion.main
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      variants={containerAnimation}
      className="bg-gray-500/5 pt-28 sm:pt-32 md:pt-40 lg:pt-60 pb-16 sm:pb-20 md:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 md:space-y-15">
        <div className="flex flex-col items-center justify-center gap-2">
          <motion.div
            variants={badgeAnimation}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-2 shadow-xl border border-purple-500"
          >
            <span className="text-[14px] leading-[16px] tracking-wide font-medium text-gray-700">
              BLOG
            </span>
          </motion.div>
          <motion.h1
            variants={titleAnimation}
            className="max-w-3xl mx-auto text-[30px] leading-[34px] sm:text-[40px] sm:leading-[44px] md:text-[50px] md:leading-[55px] lg:text-[60px] lg:leading-[60px] font-medium text-center"
          >
            Explore Our Blog And Stay Updated
          </motion.h1>
        </div>

        <motion.div
          variants={cardsContainerAnimation}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6"
        >
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.title}
              variants={cardAnimation}
              custom={index}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-200"
            >
              {/* Image Container */}
              <motion.div
                variants={imageAnimation}
                whileHover="hover"
                className="relative h-[220px] sm:h-[240px] lg:h-[280px] overflow-hidden"
              >
                <Link href={`/Blog/${post.id}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={500}
                    className="object-cover p-2 rounded-2xl w-full h-full"
                  />
                </Link>
              </motion.div>

              {/* Card Content */}
              <motion.div
                variants={cardContentAnimation}
                className="p-4 sm:p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <motion.div
                    variants={categoryBadgeAnimation}
                    whileHover="hover"
                    className="inline-flex items-center justify-center gap-2 bg-white rounded-full px-4 py-1.5 border border-purple-500"
                  >
                    <span className="text-[14px] leading-[16px] tracking-wide font-medium text-gray-700">
                      {post.category}
                    </span>
                  </motion.div>

                  <motion.span
                    variants={dateAnimation}
                    className="text-black text-[12px] leading-[14px] sm:text-[14px] sm:leading-[16px] tracking-wide font-medium uppercase whitespace-nowrap"
                  >
                    {post.date}
                  </motion.span>
                </div>

                <motion.h3
                  variants={titleCardAnimation}
                  className="text-[20px] leading-[24px] sm:text-[22px] sm:leading-[26px] lg:text-[24px] lg:leading-[28px] font-medium mb-3 sm:mb-4"
                >
                  {post.title}
                </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.main>
  );
}
