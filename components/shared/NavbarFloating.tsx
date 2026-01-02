"use client";

import { NAVBAR_LINKS } from "@/constants/constants";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  buttonVariants,
  containerVariants,
  logoVariants,
  mobileDropdownVariants,
  mobileItemVariants,
  navItemVariants,
} from "@/lib/motion/motion";
import { Button } from "../ui/button";

export function NavbarFloating() {
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Animation pour le scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // UX: fermeture au clavier quand le menu mobile est ouvert
  useEffect(() => {
    if (!isSheetOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSheetOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSheetOpen]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="fixed left-0 mt-4 sm:mt-6 w-full min-h-16 flex items-center justify-center z-50 px-4"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.1)",
          borderColor: scrolled
            ? "rgba(0, 0, 0, 0.1)"
            : "rgba(255, 255, 255, 0.5)",
          boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.1)" : "none",
          maxWidth: scrolled ? "48rem" : "80rem", // max-w-3xl -> 48rem, max-w-6xl -> 72rem
          height: scrolled ? "50px" : "60px",
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`relative w-full mx-auto bg-white/10 border border-white/50 backdrop-blur-md rounded-lg px-2 py-1 ${
          scrolled ? "px-2 py-1" : "px-4 py-2"
        }`}
      >
        {/* Top bar (logo + desktop nav + contact + mobile toggle) */}
        <div className="flex items-center justify-between w-full gap-4">
          <motion.div
            variants={logoVariants}
            initial="initial"
            className="relative z-20 shrink-0"
          >
            <Link className="flex items-center gap-2 relative z-20" href="/">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  className={`text-xl sm:text-[28px] font-medium leading-[32px] sm:leading-[40px] ${
                    scrolled ? "text-lg sm:text-xl" : "text-xl sm:text-[28px]"
                  }`}
                >
                  ATPS
                </motion.span>
              </AnimatePresence>
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <div
            className={`hidden md:flex items-center gap-4 ${
              scrolled
                ? "flex-1 justify-center max-w-[60%] w-full mx-auto"
                : "ml-auto mr-2"
            }`}
          >
            {NAVBAR_LINKS.map((link, index) => (
              <motion.div
                key={link.label}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link
                  className="text-[14px] sm:text-[16px] leading-[26px] font-medium text-gray-500 hover:text-gray-900 transition-colors relative group"
                  href={link.href}
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    initial={false}
                    animate={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex items-center relative z-20 shrink-0">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial="initial"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  // Fix: prevent "Contact" label from sliding out/in on hover (often caused by pseudo-elements/transform styles)
                  className="text-[14px] sm:text-[16px] leading-[26px] font-medium before:content-none after:content-none before:hidden after:hidden"
                >
                  <Link
                    className={`text-gray-500 hover:text-white transition-colors ${
                      scrolled ? "h-[35px]" : "h-[40px] w-30"
                    }`}
                    href="/Contact"
                  >
                    Contact
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial="initial"
            >
              <Button
                variant="outline"
                className="bg-transparent border-none shadow-none"
                onClick={() => setIsSheetOpen((v) => !v)}
              >
                <motion.div
                  animate={isSheetOpen ? { rotate: 90 } : { rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isSheetOpen ? (
                    <X className="size-5" />
                  ) : (
                    <MenuIcon className="size-5" />
                  )}
                </motion.div>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile dropdown (continues downward, no dialog/overlay) */}
        <AnimatePresence initial={false}>
          {isSheetOpen && (
            <motion.div
              className="relative w-full mx-auto bg-white border border-white backdrop-blur-md rounded-lg px-2 py-1"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileDropdownVariants}
            >
              <div className="pt-4 pb-3">
                <div className="flex flex-col gap-5 px-2">
                  {NAVBAR_LINKS.map((link, index) => (
                    <motion.div
                      key={link.label}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={mobileItemVariants}
                    >
                      <Link
                        href={link.href}
                        className="text-[16px] leading-[26px] font-medium text-gray-600 hover:text-gray-900 block transition-colors"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 px-2">
                  <Button
                    asChild
                    // Fix: prevent "Contact" label from sliding out/in on hover (often caused by pseudo-elements/transform styles)
                    className="w-full text-[16px] leading-[26px] font-medium before:content-none after:content-none before:hidden after:hidden"
                  >
                    <Link href="/Contact" onClick={() => setIsSheetOpen(false)}>
                      Contact
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}