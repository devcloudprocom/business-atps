/* eslint-disable react/no-unescaped-entities */
"use client";

import { NAVBAR_LINKS } from "@/constants/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const actionButtonMotion = reduceMotion
    ? {}
    : {
        whileHover: { scale: 1.03, y: -1 },
        whileTap: { scale: 0.98, y: 0 },
        transition: { duration: 0.18, ease: "easeOut" as const },
      };

  const headerVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const promoVariants = {
    hidden: { opacity: 0, y: -6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" as const, delay: 0.05 },
    },
  };

  const navVariants = {
    hidden: { opacity: 0, y: -6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const, delay: 0.1 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" as const },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.18, ease: "easeInOut" as const },
    },
  };

  const overlayContentVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" as const, delay: 0.05 },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: { duration: 0.18, ease: "easeInOut" as const },
    },
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const mobileMenu = useMemo(() => {
    return {
      product: NAVBAR_LINKS.filter((l) =>
        ["Features", "Pricing"].includes(l.label)
      ),
      solutions: NAVBAR_LINKS.filter((l) =>
        ["Testimonials", "FAQ"].includes(l.label)
      ),
      company: NAVBAR_LINKS.filter((l) => ["About"].includes(l.label)),
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full bg-background z-50"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center w-full justify-center">
        <motion.div
          className="w-full border-b border-white/10 text-center bg-linear-to-r from-black/80 via-blue-200/60 to-black/40 text-white p-2"
          variants={promoVariants}
        >
          <p className="text-[14px] leading-[20px] font-normal">
            Most exam access issues show up only after launch. Here’s how to
            catch them early with ATPS and isolated exam environments.
          </p>
        </motion.div>
        <motion.div
          className="flex items-center justify-between gap-2 w-full px-4 md:px-0 sm:px-15 py-5"
          variants={navVariants}
        >
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-15">
              <Link
                href="/"
                className="flex font-cal-sans items-center gap-2 text-lg md:text-xl leading-[28px] font-medium text-white"
              >
                <Image
                  src="/assets/a_logo.png"
                  alt="logo"
                  width={30}
                  height={30}
                />
                ATPS
              </Link>
              <div className="hidden md:flex items-center gap-5">
                {/* Navigation */}
                {NAVBAR_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.label}
                    className="text-white hover:text-[rgb(0,230,153)] text-[14px] leading-[24px] font-normal transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <motion.div {...actionButtonMotion}>
                <Button className="rounded-full px-6 py-3  bg-transparent border hover:bg-white/5 text-white border-gray-600">
                  <Link href="/sign-in">Log In</Link>
                </Button>
              </motion.div>
              <motion.div {...actionButtonMotion}>
                <Button className="px-6 py-3 bg-[rgb(0,230,153)] text-black hover:bg-[rgb(0,230,153)]/90 rounded-full">
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center h-11 w-11 text-white hover:bg-white/5 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </motion.div>
      </div>

      {/* MOBILE OVERLAY MENU (Neon-like) */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-60 bg-black text-white flex flex-col h-screen"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* keep the same promo bar at top */}
            <motion.div
              className="w-full border-b border-white/10 text-center bg-linear-to-r from-black/80 via-blue-200/60 to-black/40 text-white p-2 shrink-0"
              variants={overlayContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p className="text-[14px] leading-[20px] font-normal">
                Most exam access issues show up only after launch. Here’s how to
                catch them early with ATPS and isolated exam environments.
              </p>
            </motion.div>

            <motion.div
              className="flex-1 overflow-y-auto flex flex-col px-6 pt-2 pb-2"
              variants={overlayContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="font-cal-sans flex items-center gap-2 text-lg md:text-xl leading-[28px] font-medium text-white"
                >
                  <Image
                    src="/assets/a_logo.png"
                    alt="logo"
                    width={35}
                    height={35}
                  />
                  ATPS
                </Link>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="h-11 w-11 inline-flex items-center justify-center text-white/90 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Menu items */}
              <div className="mt-10 flex flex-col gap-4 border-b border-white/10">
                {NAVBAR_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.label}
                    onClick={close}
                    className="text-white text-[14px] border-b border-white/10 py-2 leading-[24px] font-normal transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Bottom actions */}
              <div className="pt-10 shrink-0">
                <div className="flex flex-col gap-4">
                  <Link href="/sign-in" onClick={close} className="w-full">
                    <motion.div {...actionButtonMotion} className="w-full">
                      <Button className="w-full rounded-full h-[50px] bg-transparent border border-white/20 text-white hover:bg-white/5">
                        Log In
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/sign-up" onClick={close} className="w-full">
                    <motion.div {...actionButtonMotion} className="w-full">
                      <Button className="w-full rounded-full h-[50px] bg-[rgb(0,230,153)] text-black hover:bg-[rgb(0,230,153)]/90">
                        Sign Up
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
