"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, easeOut, easeIn } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NAVBAR_LINKS } from "@/constants/constants";
import {
  buttonVariants,
  containerVariants,
  logoVariants,
  mobileItemVariants,
  navItemVariants,
} from "@/lib/motion/motion";

const mobileDropdownVariants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.35, ease: easeOut },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: easeIn },
  },
};

const getNavbarStyle = (
  scrolled: boolean,
  isOpen: boolean,
  isMobile: boolean
) => {
  if (isMobile) {
    return {
      backgroundColor: "rgba(255,255,255,0.9)",
      borderColor: "rgba(255,255,255,0.2)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
      padding: "0.75rem 1rem",
      maxWidth: "100%",
      backdropFilter: "blur(12px)",
    };
  }

  if (isOpen) {
    return {
      backgroundColor: "rgba(255,255,255,1)",
      borderColor: "rgba(0,0,0,0.08)",
      boxShadow: "0 18px 55px rgba(0,0,0,0.16)",
      padding: "1rem",
      maxWidth: "28rem",
    };
  }

  if (scrolled) {
    return {
      backgroundColor: "rgba(255,255,255,0.95)",
      borderColor: "rgba(0,0,0,0.0)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
      padding: "0.5rem 0.75rem",
      maxWidth: "48rem",
    };
  }

  return {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderColor: "rgba(255,255,255,0.2)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
    padding: "0.75rem 1rem",
    maxWidth: "80rem",
  };
};

export default function NavbarFloating() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* Detect mobile */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* Scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close on ESC */
  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen]);

  /* Close menu on desktop resize */
  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  const navbarStyle = getNavbarStyle(scrolled, isOpen, isMobile);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="fixed inset-x-0 top-0 z-50 mt-6 flex justify-center px-6"
    >
      <motion.div
        layout={!isMobile}
        animate={navbarStyle}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="w-full rounded-2xl border backdrop-blur-md"
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between gap-4">
          {/* LOGO */}
          <motion.div variants={logoVariants} className="shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <motion.span
                className={`font-medium ${
                  isMobile
                    ? "text-xl"
                    : scrolled
                    ? "text-lg sm:text-xl"
                    : "text-xl sm:text-3xl"
                }`}
              >
                ATPS
              </motion.span>
            </Link>
          </motion.div>

          {/* DESKTOP NAV */}
          <nav
            className={`hidden md:flex items-center gap-6 ${
              scrolled ? "flex-1 justify-center max-w-[60%]" : "ml-auto"
            }`}
          >
            {NAVBAR_LINKS.map((link, i) => (
              <motion.div key={link.href} custom={i} variants={navItemVariants}>
                <Link
                  href={link.href}
                  className="text-sm sm:text-base font-medium text-gray-600 hover:text-gray-900 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-blue-500 w-0 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <motion.div variants={buttonVariants} whileHover="hover">
                <Button asChild className="bg-[#12071f] text-white">
                  <Link href="/Contact">Contact</Link>
                </Button>
              </motion.div>
            </div>

            {/* MOBILE TOGGLE */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden p-2 rounded-full hover:bg-black/5"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobile && isOpen && (
            <motion.div
              variants={mobileDropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-6 mt-4">
                {NAVBAR_LINKS.map((link, i) => (
                  <motion.div key={link.href} custom={i} variants={mobileItemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-lg font-medium text-gray-700 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="pt-8">
                <Button
                  asChild
                  className="w-fit px-8! p-5 rounded-xl bg-[#12071f]! hover:bg-[#12071f]/90! text-white! text-[16px] leading-6.5 font-medium before:content-none after:content-none before:hidden after:hidden"
                >
                  <Link href="/Contact">
                    Contact
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
