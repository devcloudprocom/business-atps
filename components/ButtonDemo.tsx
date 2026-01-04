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
          <Button className="h-12 rounded-full bg-[rgb(0,230,153)] px-10 max-md:px-4 text-base font-medium text-black shadow-sm hover:bg-[rgb(0,230,153)]/90">
            Get Started
          </Button>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="outline"
          className="h-12 rounded-full border-white/20 bg-transparent px-10 max-md:px-4 text-base font-medium text-white shadow-sm backdrop-blur-xl hover:bg-white/5 hover:border-[rgb(0,230,153)]/60"
        >
          Book a Demo
        </Button>
      </motion.div>
    </motion.div>
  );
}
