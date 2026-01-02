"use client";

import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/constants/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  badgeAnimation,
  buttonAnimation,
  cardAnimation,
  cardContentAnimation,
  cardsContainerAnimation,
  categoryBadgeAnimation,
  containerAnimation,
  dateAnimation,
  defaultViewport,
  headerAnimation,
  imageAnimation,
  titleAnimation,
  titleCardAnimation,
} from "@/lib/motion/motion";
import Link from "next/link";

export function BlogSection() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      variants={containerAnimation}
      className="bg-[#faf9fb] py-20"
    >
      <div className="max-w-7xl mx-auto max-md:px-4">
        {/* Section Header */}
        <motion.div
          variants={headerAnimation}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12"
        >
          <div>
            <motion.div
              variants={badgeAnimation}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-4 shadow-xl border border-purple-500"
            >
              <span className="text-[14px] leading-[16px] tracking-wide font-medium text-gray-700">
                BLOG
              </span>
            </motion.div>

            <motion.h2
              variants={titleAnimation}
              className="text-4xl md:text-[60px] leading-tight md:leading-[60px] max-w-2xl font-medium mb-4"
            >
              Explore Our Blog And Stay Updated
            </motion.h2>
          </div>

          <motion.div
            variants={buttonAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 lg:mt-0 w-full sm:w-auto"
          >
            <Link href="/Blog">
              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50 text-black px-12 py-6 rounded-md text-[16px] leading-[24px] font-medium border-gray-200 w-full sm:w-auto"
              >
                Explore All
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          variants={cardsContainerAnimation}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
                className="relative h-[280px] overflow-hidden"
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
              <motion.div variants={cardContentAnimation} className="p-5">
                <div className="flex items-center justify-between mb-3">
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
                    className="text-black text-[14px] leading-[16px] tracking-wide font-medium uppercase"
                  >
                    {post.date}
                  </motion.span>
                </div>

                <motion.h3
                  variants={titleCardAnimation}
                  className="text-[24px] leading-[28px] font-medium mb-4"
                >
                  {post.title}
                </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
