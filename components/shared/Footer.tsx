"use client";

import Link from "next/link";
import Image from "next/image";
import { CTASection } from "../sections/CTASection";
import { SOCIAL_LINKS, USEFUL_LINKS } from "@/constants/constants";
import { motion } from "framer-motion";
import { backgroundTextAnimation, bottomBarAnimation, companyInfoAnimation, containerAnimation, ctaAnimation, defaultViewport, descriptionAnimation, footerContentAnimation, linkItemAnimation, logoAnimation, socialItemAnimation, socialLinksAnimation, usefulLinksAnimation } from "@/lib/motion/motion";

export function Footer() {
  return (
    <motion.footer
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      variants={containerAnimation}
      className="gradient-footer mr-4 ml-4 mb-10 rounded-2xl py-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto max-md:px-4 border-b border-white/10 pb-20">
        <motion.div variants={ctaAnimation}>
          <CTASection />
        </motion.div>
      </div>

      <div className="absolute z-0 h-150 w-150 -top-50 -left-10 rounded-full bg-[#D896EC]/20 blur-3xl" />
      <div className="absolute z-0 h-150 w-150 -bottom-50 -right-10 rounded-full bg-[#D896EC]/20 blur-3xl" />

      {/* Background Text animé */}
      <motion.div
        variants={backgroundTextAnimation}
        className="absolute left-1/2 bottom-0 flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <span className="text-[15vw] font-normal text-white/5 whitespace-nowrap">
          ATPS
        </span>
      </motion.div>

      <motion.div
        variants={footerContentAnimation}
        className="max-w-7xl mx-auto max-md:px-4 relative z-10 pt-20 md:pt-24"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-10">
          {/* Logo & Description */}
          <div>
            <motion.div
              variants={logoAnimation}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-2xl sm:text-[32px] leading-[32px] font-medium text-white">ATPS</span>
            </motion.div>

            <motion.p
              variants={descriptionAnimation}
              className="text-white/60 text-[16px] leading-[24px] font-normal mb-6"
            >
              Manage ATPS effortlessly
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={socialLinksAnimation}
              className="flex flex-wrap gap-3"
            >
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={social.name}
                  variants={socialItemAnimation}
                  custom={index}
                  whileHover="hover"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 text-white rounded-full border border-white/20 flex items-center justify-center transition-colors"
                >
                  <social.icon className="text-white" size={16} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Use Link & Company Info */}
          <motion.div
            variants={usefulLinksAnimation}
            className="flex flex-col sm:flex-row gap-10 sm:gap-20"
          >
            <div>
              <h4 className="text-[16px] leading-[24px] font-medium text-white mb-4">Use Link</h4>
              <nav className="flex flex-col gap-2">
                {USEFUL_LINKS.map((link, index) => (
                  <motion.div
                    key={link.label}
                    variants={linkItemAnimation}
                    custom={index}
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-[16px] leading-[24px] font-normal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Company */}
            <motion.div variants={companyInfoAnimation}>
              <h4 className="text-[16px] leading-[24px] font-medium text-white mb-4">Company</h4>
              <p className="text-white/60 text-[16px] leading-[24px] font-normal">
                105 North 1st Street, #28,<br />
                San Jose, CA 94748
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={bottomBarAnimation}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="text-white/40 text-[16px] leading-[24px] font-medium"
          >
            2025 Design & Developed by{" "}
            <motion.a
              whileHover={{ color: "#ffffff" }}
              href="https://x.com/hello_amani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white"
            >
              Amani
            </motion.a>
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/privacy-policy" className="text-white/40 hover:text-white text-[16px] leading-[24px] font-medium">
              Privacy Policy
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}