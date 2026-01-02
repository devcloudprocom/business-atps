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

  // UX: si on passe de mobile -> desktop pendant que le menu est ouvert, on referme
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsSheetOpen(false); // md breakpoint
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="fixed inset-x-0 top-0 mt-6 w-full min-h-16 flex items-center justify-center z-50 px-6"
    >
      <motion.div
        layout
        animate={{
          backgroundColor: isSheetOpen
            ? "rgba(255, 255, 255, 1)"
            : scrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.1)",
          borderColor: isSheetOpen
            ? "rgba(0, 0, 0, 0.08)"
            : scrolled
            ? "rgba(0, 0, 0, 0.1)"
            : "rgba(255, 255, 255, 0.5)",
          boxShadow: isSheetOpen
            ? "0 18px 55px rgba(0, 0, 0, 0.16)"
            : scrolled
              ? "0 10px 30px rgba(0, 0, 0, 0.10)"
              : "0 12px 32px rgba(0, 0, 0, 0.06)",
          // Keep scroll-shrink behavior, but don't constrain the card when the mobile menu is open
          maxWidth: isSheetOpen ? "28rem" : scrolled ? "48rem" : "80rem",
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`relative w-full mx-auto bg-white/10 border border-white/50 backdrop-blur-md rounded-2xl ${
          isSheetOpen ? "px-4 py-4" : scrolled ? "px-3 py-2" : "px-4 py-3"
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
                  className={`font-medium leading-[32px] sm:leading-[40px] ${
                    isSheetOpen
                      ? "text-2xl"
                      : scrolled
                        ? "text-lg sm:text-xl"
                        : "text-xl sm:text-[28px]"
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
                  className="bg-[#12071f]! hover:bg-[#12071f]/90! text-white! text-[14px] sm:text-[16px] leading-[26px] font-medium before:content-none after:content-none before:hidden after:hidden"
                >
                  <Link
                    className={`text-white transition-colors ${
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
                size="icon"
                className="bg-transparent border-none shadow-none rounded-full"
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

        {/* Mobile dropdown (expands inside the same card to match the reference UI) */}
        <AnimatePresence initial={false}>
          {isSheetOpen && (
            <motion.div
              className="md:hidden overflow-hidden mt-7"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileDropdownVariants}
            >
              <div className="py-5! mt-5!">
                <div className="flex flex-col gap-3">
                  {NAVBAR_LINKS.map((link, index) => (
                    <motion.div
                      key={link.label}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={mobileItemVariants}
                      className="py-5! mt-5!"
                    >
                      <Link
                        href={link.href}
                        className="text-[18px] py-5! mt-5! leading-[28px] font-medium text-gray-500 hover:text-gray-900 block transition-colors"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        {link.label === "FAQ"
                          ? "Faq"
                          : link.label === "Testimonials"
                            ? "Testimonial"
                            : link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-8">
                  <Button
                    asChild
                    className="w-fit px-8! bg-[#12071f]! hover:bg-[#12071f]/90! text-white! text-[16px] leading-[26px] font-medium before:content-none after:content-none before:hidden after:hidden"
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