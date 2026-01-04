"use client";

import Link from "next/link";
import { BadgeCheck, Globe, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { GlowingEffect } from "../ui/glowing-effect";
import { defaultViewport } from "@/lib/motion/motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function ContactSection() {
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

  const rowStagger = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  } as const;

  const rowItem = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  } as const;

  return (
    <motion.section
      className="relative w-full overflow-hidden bg-black text-white"
      initial={reduceMotion ? undefined : "initial"}
      whileInView={reduceMotion ? undefined : "animate"}
      viewport={defaultViewport}
      variants={reduceMotion ? undefined : sectionStagger}
    >
      {/* Background glow (match screenshot vibe) */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[620px] w-[620px] rounded-full bg-emerald-400/15 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-6 pt-48 pb-16 lg:pt-60 lg:pb-40">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <div className="flex flex-col">
            <motion.h1
              variants={reduceMotion ? undefined : fadeUp}
              className="text-[44px] leading-[48px] sm:text-[56px] sm:leading-[60px] font-cal-sans tracking-tight"
            >
              Let&apos;s Connect
            </motion.h1>
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-4 max-w-md text-[20px] leading-[24px] text-white/70"
            >
              We&apos;re happy to assist you with any questions about our
              technology, pricing plans, custom contract options, and migrations
              assistance.
            </motion.p>

            {/* Compliance row */}
            <motion.div
              variants={reduceMotion ? undefined : rowStagger}
              className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] leading-[18px] text-white/60"
            >
              <motion.div
                variants={reduceMotion ? undefined : rowItem}
                className="inline-flex items-center gap-2"
              >
                <ShieldCheck className="size-4 text-white/45" />
                <span>SOC 2</span>
                <span className="text-white/35">Certified</span>
              </motion.div>
              <motion.div
                variants={reduceMotion ? undefined : rowItem}
                className="inline-flex items-center gap-2"
              >
                <Globe className="size-4 text-white/45" />
                <span>GDPR</span>
                <span className="text-white/35">Compliant</span>
              </motion.div>
              <motion.div
                variants={reduceMotion ? undefined : rowItem}
                className="inline-flex items-center gap-2"
              >
                <BadgeCheck className="size-4 text-white/45" />
                <span>ISO 27001</span>
                <span className="text-white/35">Compliant</span>
              </motion.div>
            </motion.div>

            {/* Stats cards */}
            <motion.div
              variants={reduceMotion ? undefined : rowStagger}
              className="mt-20 flex flex-col sm:flex-row gap-5"
            >
              <motion.div
                variants={reduceMotion ? undefined : rowItem}
                className="relative w-full sm:max-w-[270px] rounded-2xl border border-white/10 bg-white/5 px-6 py-5 shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
              >
                <GlowingEffect
                  disabled={false}
                  glow
                  blur={1}
                  spread={26}
                  proximity={90}
                  borderWidth={2}
                  className="z-0"
                />
                <div className="relative z-10">
                  <p className="text-[16px] leading-[22px] text-white/75">
                    <span className="font-semibold text-white">
                      80% savings
                    </span>{" "}
                    in operational costs
                  </p>
                  <div className="mt-10 text-white/55 text-[14px] leading-[20px]">
                    invenco
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={reduceMotion ? undefined : rowItem}
                className="relative w-full sm:max-w-[270px] rounded-2xl border border-white/10 bg-white/5 px-6 py-5 shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
              >
                <GlowingEffect
                  disabled={false}
                  glow
                  blur={1}
                  spread={26}
                  proximity={90}
                  borderWidth={2}
                  className="z-0"
                />
                <div className="relative z-10">
                  <p className="text-[16px] leading-[22px] text-white/75">
                    <span className="font-semibold text-white">5x faster</span>{" "}
                    to spin up environments via branching
                  </p>
                  <div className="mt-10 text-white/55 text-[14px] leading-[20px]">
                    Mindvalley
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* slider dashes (decor) */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-8 hidden sm:flex items-center gap-3 text-white/20"
            >
              <span className="h-[2px] w-10 rounded-full bg-white/15" />
              <span className="h-[2px] w-10 rounded-full bg-white/8" />
              <span className="h-[2px] w-10 rounded-full bg-white/8" />
              <span className="h-[2px] w-10 rounded-full bg-white/8" />
            </motion.div>
          </div>

          {/* RIGHT: FORM CARD */}
          <div className="w-full">
            <motion.div
              variants={reduceMotion ? undefined : fadeInRight}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_26px_90px_rgba(0,0,0,0.65)] backdrop-blur-sm"
            >
              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-[13px] text-white/85">
                      First Name*
                    </Label>
                    <Input
                      placeholder="Marques"
                      className="h-10 bg-black/35 border-white/15 text-white placeholder:text-white/25 focus-visible:ring-white/15 focus-visible:border-white/25"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[13px] text-white/85">
                      Last Name*
                    </Label>
                    <Input
                      placeholder="Hansen"
                      className="h-10 bg-black/35 border-white/15 text-white placeholder:text-white/25 focus-visible:ring-white/15 focus-visible:border-white/25"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[13px] text-white/85">
                    Work Email*
                  </Label>
                  <Input
                    type="email"
                    placeholder="info@acme.com"
                    className="h-10 bg-black/35 border-white/15 text-white placeholder:text-white/25 focus-visible:ring-white/15 focus-visible:border-white/25"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-[13px] text-white/85">
                      Company Website
                    </Label>
                    <Input className="h-10 bg-black/35 border-white/15 text-white placeholder:text-white/25 focus-visible:ring-white/15 focus-visible:border-white/25" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[13px] text-white/85">
                      Company Size*
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full h-10 bg-black/35 border-white/15 text-white focus-visible:ring-white/15 focus-visible:border-white/25">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent className="bg-black text-white border-white/10">
                        <SelectItem value="1-10">1-10</SelectItem>
                        <SelectItem value="11-50">11-50</SelectItem>
                        <SelectItem value="51-200">51-200</SelectItem>
                        <SelectItem value="201-1000">201-1000</SelectItem>
                        <SelectItem value="1000+">1000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[13px] text-white/85">
                    Reason for Contact*
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full h-10 bg-black/35 border-white/15 text-white focus-visible:ring-white/15 focus-visible:border-white/25">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent className="bg-black text-white border-white/10">
                      <SelectItem value="pricing">Pricing</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                      <SelectItem value="migration">Migration</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-[13px] text-white/85">Message*</Label>
                  <Textarea
                    className="min-h-36 bg-black/35 border-white/15 text-white placeholder:text-white/25 focus-visible:ring-white/15 focus-visible:border-white/25 resize-none"
                    placeholder=""
                  />
                </div>

                <div className="pt-2 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[12px] leading-[18px] text-white/55 max-w-[320px]">
                    By submitting you agree to the{" "}
                    <Link
                      href="#"
                      className="text-white underline underline-offset-2"
                    >
                      Terms Service
                    </Link>{" "}
                    and acknowledge the{" "}
                    <Link
                      href="#"
                      className="text-white underline underline-offset-2"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  <Button className="h-11 w-full sm:w-40 rounded-full bg-[rgb(0,230,153)] text-black hover:bg-[rgb(0,230,153)]/90">
                    Submit
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
