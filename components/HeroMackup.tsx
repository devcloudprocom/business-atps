import { motion } from "framer-motion";
import Image from "next/image";
import { mockupAnimation, floatAnimation } from "@/lib/motion/motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FEATURES_LINKS } from "@/constants/constants";
import { ChevronDownIcon, Globe, SendHorizonal } from "lucide-react";
import { SparkleIcon } from "lucide-react";

import {
  chatBubbleAnimation,
  featuresAnimation,
  sendButtonAnimation,
} from "@/lib/motion/motion";

export function HeroMackup() {
  const words = [{ text: "Yes, I want to use ATPS" }];

  return (
    <>
      {/* Mockup */}
      <motion.div variants={mockupAnimation} className="relative mt-14 z-10">
        {/* Floating cubes */}
        <motion.div
          variants={floatAnimation}
          animate={["animate", "float"]}
          className="pointer-events-none absolute -top-10 right-6 hidden sm:block"
        >
          <Image
            src="/assets/cube.png"
            alt="3D Cube"
            width={132}
            height={132}
            className="select-none"
            priority
          />
        </motion.div>
        <motion.div
          variants={floatAnimation}
          animate={["animate", "float"]}
          className="pointer-events-none absolute -bottom-10 left-0 hidden md:block"
        >
          <Image
            src="/assets/round.png"
            alt="3D Cube"
            width={540}
            height={540}
            className="select-none"
          />
        </motion.div>

        {/* Outer glass panel */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="relative flex -z-10 items-center justify-center rounded-t-[32px] border border-white/30 bg-white/20 shadow-2xl shadow-black/10 backdrop-blur-xl"
        >
          <div className="w-full">
            <div className="relative overflow-hidden">
              <div className="relative min-h-[520px] sm:min-h-[560px] w-full p-6 sm:p-10 flex items-center justify-center flex-col gap-4">
                <div className="relative h-[220px] w-full max-w-xl rounded-2xl border border-white/70 bg-white/30 shadow-sm backdrop-blur-xl">
                  <div className="absolute top-5 left-5">
                    <div className="flex items-start gap-2">
                      <Image
                        src="/assets/logo_f.png"
                        alt="Logo"
                        width={40}
                        height={40}
                      />
                      <div className="p-4 bg-white/70 text-black max-w-md rounded-sm">
                        <TextGenerateEffect
                          words="Of course! I’ll prepare a personalized campaign for your new subscribers. Would you like me to schedule it now or review it first?"
                          className="text-black"
                        />
                      </div>
                    </div>
                  </div>

                  <motion.div
                    variants={chatBubbleAnimation}
                    className="absolute bottom-5 right-5"
                  >
                    <div className="flex items-start gap-2">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-4 bg-white/70 rounded-sm"
                      >
                        <TypewriterEffectSmooth
                          words={words.map((word) => ({ text: word.text }))}
                          className="text-sm font-medium leading-[18px] font-inter text-black"
                          cursorClassName="text-sm font-medium leading-[18px] font-inter text-black"
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="h-8 w-8 overflow-hidden rounded-sm bg-white/70"
                      >
                        <Image
                          src="/assets/user.png"
                          alt="User"
                          width={40}
                          height={40}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom chat/input panel */}
                <div className="bottom-10 w-full max-w-xl rounded-[22px] border border-white/60 bg-white/70 p-5 shadow-sm">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="dark:bg-white dark:hover:bg-white/70 hover:text-black text-black rounded-full border-none shadow-none font-inter text-[12px]"
                          >
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Image
                                src="/assets/openia.svg"
                                alt="OpenAI"
                                width={16}
                                height={16}
                                className="size-4"
                              />
                            </motion.div>
                            <span className="text-sm">GPT 4.5</span>
                            <motion.div
                              animate={{ y: [0, 2, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut" as const,
                              }}
                            >
                              <ChevronDownIcon className="ml-auto size-4" />
                            </motion.div>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Gemini 2.5</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2"
                    >
                      <Button
                        variant="outline"
                        className="dark:bg-white dark:hover:bg-white/70 hover:text-black text-black rounded-full border-none shadow-none font-inter text-[12px]"
                      >
                        <Globe className="size-4" /> Search
                      </Button>
                    </motion.div>
                  </div>
                  <div className="mt-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Input
                        placeholder="Ask anything ..."
                        className="bg-transparent w-full h-14 sm:h-20 rounded-full border-none shadow-none font-inter text-[12px]"
                      />
                    </motion.div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {FEATURES_LINKS.map((link, index) => (
                        <motion.div
                          key={link.label}
                          custom={index}
                          initial="initial"
                          animate="animate"
                          variants={featuresAnimation}
                        >
                          <Button
                            variant="outline"
                            className="dark:bg-white dark:hover:bg-white/70 hover:text-black text-black rounded-full border-pink-500/10 shadow-sm hover:bg-pink-500/10 font-inter text-[12px]"
                          >
                            <div>
                              <SparkleIcon className="size-4 text-pink-500 fill-pink-500" />
                            </div>
                            {link.label}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      variants={sendButtonAnimation}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button className="bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-full h-10 w-10">
                        <SendHorizonal className="size-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
