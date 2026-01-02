"use client";

import { motion } from "framer-motion";
import { Info, Mail } from "lucide-react";
import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export function ContactSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="pt-50 bg-gray-500/5 pb-30">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="flex flex-col items-center justify-center gap-15"
      >
        {/* Header */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col items-center justify-center gap-1"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-white backdrop-blur-sm rounded-full px-4 py-1.5 border shadow-lg border-purple-500"
          >
            <span className="text-[14px] leading-[16px] tracking-wide font-medium text-black">CONTACT</span>
          </motion.div>
          <motion.h1 
            variants={fadeInUp}
            className="text-[40px] leading-[44px] md:text-[50px] md:leading-[55px] lg:text-[60px] lg:leading-[60px] font-medium text-center px-4 text-foreground"
          >
            Get in touch with our team
          </motion.h1>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl bg-white p-6 md:p-10 rounded-xl md:rounded-2xl w-full px-4 md:px-8"
        >
          {/* Left Column */}
          <div className="flex flex-col items-start justify-center gap-30 w-full lg:w-1/2">
            {/* Contact Info */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col items-start justify-center gap-6 w-full"
            >
              <p className="text-[18px] leading-[28px] font-medium">Feel free to reach out - we'd love to connect.</p>
              
              <div className="flex flex-col md:flex-row items-start gap-6 w-full">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-2"
                >
                  <Mail className="size-6 text-purple-400" />
                  <div className="flex items-start flex-col justify-between gap-2">
                    <p className="text-[16px] leading-[24px] font-medium">Email us</p>
                    <a href="mailto:info@atps.com" className="hover:underline">info@atps.com</a>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-2"
                >
                  <Info className="size-6 text-purple-400" />
                  <div className="flex items-start flex-col justify-between gap-2">
                    <p className="text-[16px] leading-[24px] font-medium">Get support</p>
                    <a href="mailto:support@atps.com" className="hover:underline">Chat with us</a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col items-start justify-center gap-6 w-full"
            >
              <h1 className="text-[20px] leading-[28px] md:text-[22px] md:leading-[30px] lg:text-[24px] lg:leading-[32px] font-medium max-w-lg">
                "ATPS has revolutionized the way we process data. The seamless integration and advanced analytics tools have saved us countless hours and improved our decision-making."
              </h1>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4"
              >
                <Image src="/assets/user_b.png" alt="Testimonial" width={50} height={50} />
                <div className="flex items-start flex-col justify-between">
                  <p className="text-[16px] leading-[24px] font-medium">John Doe</p>
                  <p className="text-[16px] leading-[24px] text-gray-500 font-normal">CEO, Company</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div 
            variants={fadeInUp}
            className="flex h-full w-full lg:w-6xl"
          >
            <form className="w-full p-6 md:p-8 rounded-2xl bg-gray-500/5">
              <motion.div 
                variants={staggerChildren}
                className="flex items-center flex-col justify-center gap-4"
              >
                {/* Name Row */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-start flex-col justify-between gap-2 w-full md:w-1/2"
                  >
                    <Label className="text-[16px] leading-[24px] font-medium">First Name</Label>
                    <Input
                      type="text"
                      placeholder="First Name"
                      className="placeholder:text-[16px] placeholder:leading-[24px] placeholder:font-normal text-[16px] leading-[24px] font-medium w-full h-12 bg-white border-none outline-none focus-visible:border-purple-500 focus-visible:ring-1 focus-visible:ring-purple-500/50 focus-visible:ring-offset-0"
                    />
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-start flex-col justify-between gap-2 w-full md:w-1/2"
                  >
                    <Label className="text-[16px] leading-[24px] font-medium">Last Name</Label>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      className="placeholder:text-[16px] placeholder:leading-[24px] placeholder:font-normal text-[16px] leading-[24px] font-medium w-full h-12 bg-white border-none outline-none focus-visible:border-purple-500 focus-visible:ring-1 focus-visible:ring-purple-500/50 focus-visible:ring-offset-0"
                    />
                  </motion.div>
                </div>

                {/* Contact Row */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-start flex-col justify-between gap-2 w-full md:w-1/2"
                  >
                    <Label className="text-[16px] leading-[24px] font-medium">Email</Label>
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="placeholder:text-[16px] placeholder:leading-[24px] placeholder:font-normal text-[16px] leading-[24px] font-medium w-full h-12 bg-white border-none outline-none focus-visible:border-purple-500 focus-visible:ring-1 focus-visible:ring-purple-500/50 focus-visible:ring-offset-0"
                    />
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-start flex-col justify-between gap-2 w-full md:w-1/2"
                  >
                    <Label className="text-[16px] leading-[24px] font-medium">Phone Number</Label>
                    <Input
                      type="tel"
                      placeholder="Your phone"
                      className="placeholder:text-[16px] placeholder:leading-[24px] placeholder:font-normal text-[16px] leading-[24px] font-medium w-full h-12 bg-white border-none outline-none focus-visible:border-purple-500 focus-visible:ring-1 focus-visible:ring-purple-500/50 focus-visible:ring-offset-0"
                    />
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div 
                  variants={fadeInUp}
                  className="w-full flex items-start flex-col justify-between gap-2"
                >
                  <Label className="text-[16px] leading-[24px] font-medium">Message</Label>
                  <Textarea
                    placeholder="Write your message"
                    className="placeholder:text-[16px] placeholder:leading-[24px] placeholder:font-normal text-[16px] leading-[24px] font-medium w-full h-50 bg-white border-none outline-none focus-visible:border-purple-500 focus-visible:ring-1 focus-visible:ring-purple-500/50 focus-visible:ring-offset-0"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-3 w-full"
                >
                  <Button className="w-full h-12 text-[16px] leading-[24px] font-medium">Submit</Button>
                </motion.div>

                {/* Privacy Policy */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-center justify-center gap-2"
                >
                  <p className="text-[14px] leading-[20px] font-normal">
                    By submitting this form you agree to our friendly{" "}
                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                  </p>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}