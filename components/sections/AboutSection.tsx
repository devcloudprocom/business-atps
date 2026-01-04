/* eslint-disable react/no-unescaped-entities */
"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BookHeart,
  CheckCircle,
  DollarSignIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUp from "../CountUp";
import { defaultViewport } from "@/lib/motion/motion";

type Leader = {
  name: string;
  role: string;
  image: string;
};

const leadership: Leader[] = [
  { name: "Nikita Shamgunov", role: "CEO", image: "/assets/user.png" },
  {
    name: "Heikki Linnakangas",
    role: "Co-Founder",
    image: "/assets/user_b.png",
  },
  { name: "Stas Kelvich", role: "Co-Founder", image: "/assets/user_g.png" },
  {
    name: "James Broadhead",
    role: "VP Engineering",
    image: "/assets/user.png",
  },
  { name: "Bryan Clark", role: "VP Product", image: "/assets/user_b.png" },
  {
    name: "Arjunan Rajasewran",
    role: "Head of Revenue",
    image: "/assets/user_g.png",
  },
  { name: "Luke Flanagan", role: "VP Finance", image: "/assets/user.png" },
];

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  const sectionStagger = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  } as const;

  const fadeUp = {
    initial: { opacity: 0, y: 18 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  } as const;

  const fadeInRight = {
    initial: { opacity: 0, x: 18 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  } as const;

  const gridStagger = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.06,
      },
    },
  } as const;

  const gridItem = {
    initial: { opacity: 0, y: 14 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  } as const;

  return (
    <motion.section
      id="about"
      className="relative bg-linear-to-b from-black via-black to-black text-white w-full"
    >
      {/* subtle top fade */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black via-black to-black" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-0 pt-20 pb-20 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28">
        {/* HERO */}
        <motion.div
          className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16"
          initial={reduceMotion ? undefined : "initial"}
          whileInView={reduceMotion ? undefined : "animate"}
          viewport={defaultViewport}
          variants={reduceMotion ? undefined : sectionStagger}
        >
          <motion.div variants={reduceMotion ? undefined : sectionStagger}>
            <motion.h2
              variants={reduceMotion ? undefined : fadeUp}
              className="text-[42px] leading-[1.05] sm:text-[54px] md:text-[64px] font-cal-sans tracking-tight"
            >
              <span className="block">ATPS is the</span>
              <span className="block">Postgres layer</span>
              <span className="block">for the internet</span>
            </motion.h2>

            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                asChild
                className="h-11 rounded-full bg-[rgb(0,230,153)] px-6 text-[14px] font-medium text-black hover:bg-[rgb(0,230,153)]/90"
              >
                <Link href="/sign-up">Create an Account</Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="h-11 justify-start rounded-full bg-transparent px-3 text-[14px] font-medium text-white hover:bg-white/5"
              >
                <Link href="/Contact" className="inline-flex items-center gap-1">
                  View Open Positions <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={reduceMotion ? undefined : fadeInRight}
            className="max-w-md md:justify-self-end"
          >
            <p className="text-[14px] leading-5 sm:text-[18px] sm:leading-5 text-white/70">
              <span className="text-white/80">Our mission:</span> Deliver a
              secure and intelligent E-Learning platform designed to help
              educational institutions create, manage, and conduct online
              learning and assessments faster and more reliably than ever.
            </p>
            <p className="mt-4 sm:mt-5 text-[14px] leading-5 sm:text-[18px] sm:leading-5 text-white/60">
              ATPS is built on a scalable, cloud-based architecture that ensures
              secure online exams, proctored assessments, and interactive
              quizzes—providing high performance, reliability, and scalability
              to make digital education as accessible and dependable as modern
              cloud services.
            </p>
          </motion.div>
        </motion.div>

        {/* WHERE WE'RE HEADED */}
        <motion.div
          variants={reduceMotion ? undefined : sectionStagger}
          className="mt-16 sm:mt-20 md:mt-24"
          initial={reduceMotion ? undefined : "initial"}
          whileInView={reduceMotion ? undefined : "animate"}
          viewport={defaultViewport}
        >
          <div className="mx-auto max-w-3xl">
            <motion.h3
              variants={reduceMotion ? undefined : fadeUp}
              className="text-center text-[40px] font-cal-sans leading-[1.1] sm:text-[64px] tracking-tight"
            >
              Where we're headed
            </motion.h3>

            <motion.div
              variants={reduceMotion ? undefined : sectionStagger}
              className="mt-6 sm:mt-8 space-y-5 sm:space-y-6 text-[16px] leading-6 sm:text-[20px] sm:leading-[28px] text-white/60"
            >
              <motion.p variants={reduceMotion ? undefined : fadeUp}>
                ATPS is an EdTech-driven platform. In 2025, ATPS was designed to
                support the future of digital education, online assessments, and
                secure examinations. Our mission remains clear: deliver a
                reliable and intelligent E-Learning system for institutions,
                educators, and learners—built to scale with modern educational
                needs.
              </motion.p>

              <motion.div variants={reduceMotion ? undefined : fadeUp}>
                <p className="font-cal-sans text-white/85">
                  The same core platform behind ATPS powers our learning
                  ecosystem:
                </p>
                <p className="mt-1">
                  A secure, cloud-based E-Learning and examination platform
                  designed for the digital education era.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={reduceMotion ? undefined : gridStagger}
              className="mt-10 flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-end sm:gap-12"
            >
              <motion.div variants={reduceMotion ? undefined : gridItem} className="text-center">
                <div className="text-[34px] sm:text-[44px] leading-none font-cal-sans tracking-tight text-sky-200">
                  <CountUp to={40000} />
                </div>
                <div className="mt-2 text-[10px] tracking-wide text-white/40">
                  ASSESSMENTS CREATED MONTHLY
                </div>
              </motion.div>
              <motion.div variants={reduceMotion ? undefined : gridItem} className="text-center">
                <div className="text-[34px] sm:text-[44px] leading-none font-cal-sans tracking-tight text-sky-200">
                  <CountUp to={80} />%
                </div>
                <div className="mt-2 text-[10px] tracking-wide text-white/40">
                  OF EXAMS DELIVERED ONLINE AND MONITORED DIGITALLY
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* LEADERSHIP */}
        <motion.div
          variants={reduceMotion ? undefined : sectionStagger}
          className="mt-16 sm:mt-20 md:mt-28"
          initial={reduceMotion ? undefined : "initial"}
          whileInView={reduceMotion ? undefined : "animate"}
          viewport={defaultViewport}
        >
          <div className="mx-auto max-w-7xl">
            <motion.h3
              variants={reduceMotion ? undefined : fadeUp}
              className="text-[40px] leading-[1.1] sm:text-[64px] font-cal-sans tracking-tight"
            >
              Leadership
            </motion.h3>
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-4 max-w-xl text-[16px] leading-6 sm:text-[20px] sm:leading-[28px] text-white/60"
            >
              It’s all about people. We are a team of educators, engineers, and
              EdTech innovators committed to transforming digital learning and
              online assessment. We believe that in a rapidly evolving
              educational landscape, secure and accessible E-Learning is here to
              stay.
            </motion.p>

            <motion.div
              variants={reduceMotion ? undefined : gridStagger}
              className="mt-8 sm:mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 sm:gap-y-10 sm:grid-cols-4"
            >
              {leadership.map((p) => (
                <motion.div
                  key={p.name}
                  variants={reduceMotion ? undefined : gridItem}
                  className="min-w-0"
                >
                  <div className="relative h-20 w-20 overflow-hidden rounded-sm bg-white">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="80px"
                      className="object-cover grayscale contrast-125 brightness-110"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="text-[12px] font-medium text-white/90 leading-4">
                      {p.name}
                    </div>
                    <div className="mt-1 text-[10px] text-white/45 leading-4">
                      {p.role}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* DEVELOPERS */}
        <motion.div
          variants={reduceMotion ? undefined : sectionStagger}
          className="mt-16 sm:mt-20 md:mt-28"
          initial={reduceMotion ? undefined : "initial"}
          whileInView={reduceMotion ? undefined : "animate"}
          viewport={defaultViewport}
        >
          <div className="mx-auto max-w-7xl">
            <motion.h3
              variants={reduceMotion ? undefined : fadeUp}
              className="text-center text-[28px] leading-[1.1] sm:text-[44px] font-cal-sans tracking-tight"
            >
              Developers are at the
              <br />
              center of everything we do
            </motion.h3>

            <motion.div
              variants={reduceMotion ? undefined : gridStagger}
              className="mt-10 sm:mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-4"
            >
              <ValueCard
                title="Just Learn"
                icon={<BookOpen className="h-4 w-4 text-[rgb(0,230,153)]" />}
                description="Achieve this by preserving academic integrity while delivering a seamless digital learning and assessment experience."
              />
              <ValueCard
                title="Easy"
                icon={<BookHeart className="h-4 w-4 text-[rgb(0,230,153)]" />}
                description="Simplify the lives of educators and students by providing an intuitive, cloud-based platform for learning, quizzes, and online exams."
              />
              <ValueCard
                title="Reliable"
                icon={<CheckCircle className="h-4 w-4 text-[rgb(0,230,153)]" />}
                description="Use secure monitoring, real-time supervision, and robust infrastructure to ensure fair, uninterrupted, and trustworthy examinations."
              />
              <ValueCard
                title="Cost Efficient"
                icon={
                  <DollarSignIcon className="h-4 w-4 text-[rgb(0,230,153)]" />
                }
                description="Deliver a scalable and affordable E-Learning solution that offers excellent performance without increasing institutional costs."
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  const reduceMotion = useReducedMotion();

  const item = {
    initial: { opacity: 0, y: 14 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  } as const;

  return (
    <motion.div
      className="min-w-0"
      variants={reduceMotion ? undefined : item}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/0">
          {icon}
        </span>
      </div>
      <div className="text-[16px] sm:text-[20px] font-semibold text-white/90">{title}</div>
      <div className="mt-2 text-[14px] leading-6 sm:text-[18px] sm:leading-[28px] text-white/45">
        {description}
      </div>
    </motion.div>
  );
}
