import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { buttonsAnimation } from "@/lib/motion/motion";
import Link from "next/link";

export function ButtonDemo() {
  return (
    <motion.div
      variants={buttonsAnimation}
      className="mt-8 flex max-md:items-center max-md:justify-center md:flex-wrap gap-4"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href="/Contact">
          <Button className="h-12 rounded-lg bg-[#1c1033] px-10 max-md:px-4 text-base font-medium text-white shadow-sm hover:bg-[#2d1b4e]">
            Get Started
          </Button>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="outline"
          className="h-12 rounded-lg border-white/70 bg-white/40 px-10 max-md:px-4 text-base font-medium text-black shadow-sm backdrop-blur-xl hover:bg-white/55"
        >
          Book a Demo
        </Button>
      </motion.div>
    </motion.div>
  );
}
