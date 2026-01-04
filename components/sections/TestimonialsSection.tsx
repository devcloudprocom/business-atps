"use client";

import { TESTIMONIALS } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const items = useMemo(() => {
    const fallbackCompanies = [
      "Koyeb",
      "Vercel",
      "Supabase",
      "Railway",
      "Render",
    ];
    return TESTIMONIALS.map((t, i) => ({
      ...t,
      company:
        (t as typeof t & { company?: string }).company ??
        fallbackCompanies[i % fallbackCompanies.length],
    }));
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = clamp(Math.round(v * (items.length - 1)), 0, items.length - 1);
    setActiveIndex(next);
  });

  return (
    <section
      ref={sectionRef}
      id="testimonial"
      className="relative w-full min-h-[120vh] bg-black text-white overflow-hidden"
    >
      {/* left rail background (lines + glow) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-30 hidden md:block w-[320px] lg:w-[420px]"
      >
        {/* base wash */}
        <div className="absolute inset-0 bg-linear-to-r from-white/9 via-white/4 to-transparent" />

        {/* vertical scan lines */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(255,255,255,0.10) 0 1px, transparent 1px 10px)",
          }}
        />

        {/* subtle dot texture */}
        <div
          className="absolute inset-0 opacity-[0.20]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* glow blobs */}
        <div className="absolute -left-28 bottom-6 h-80 w-80 rounded-full bg-sky-500/18 blur-3xl" />
        <div className="absolute -left-16 top-16 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

        {/* right edge separator */}
        <div className="absolute inset-y-0 right-0 w-px bg-linear-to-b from-transparent via-white/14 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-0 py-20 sm:py-28">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[44px] leading-[1.02] sm:text-[56px] font-cal-sans tracking-tight">
            Testimonials
            <br />
            from our users
          </h2>
          <div className="mt-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[12px] tracking-wide text-white/60 hover:text-white/80 transition-colors"
            >
              Dive into real education success stories{" "}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* content */}
        <div className="mt-14 ml-15 grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr] md:gap-14">
          {/* left rail: brands */}
          <div className="relative hidden md:block">
            <div className="sticky top-40">
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 text-white/90"
              >
                <div className="relative grid place-items-center h-10 w-10 rounded-full border border-white/12 bg-white/2">
                  <div className="absolute inset-0 rounded-full bg-[rgb(0,230,153)]/10 blur-md" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-[rgb(0,230,153)]" />
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.18em] text-white/45">
                    FEATURED
                  </div>
                  <div className="mt-0.5 text-[18px] font-medium tracking-wide text-white/90">
                    {items[activeIndex]?.company ?? "Koyeb"}
                  </div>
                </div>
              </motion.div>

              <div className="relative mt-10 space-y-2">
                {/* vertical label */}
                <div
                  className="pointer-events-none absolute -left-10 top-0 text-[10px] tracking-[0.32em] text-white/18"
                  style={{ writingMode: "vertical-rl" }}
                >
                  TESTIMONIALS
                </div>

                {items.map((t, i) => (
                  <div key={`${t.company}-${i}`} className="relative">
                    {i === activeIndex ? (
                      <motion.div
                        layoutId="active-brand"
                        className="absolute -inset-x-3 inset-y-0 rounded-lg bg-linear-to-r from-white/10 via-white/6 to-transparent"
                      />
                    ) : null}

                    <div
                      className={[
                        "relative flex items-center gap-3 rounded-lg px-2 py-1.5 text-[12px] tracking-wide transition-colors",
                        i === activeIndex ? "text-white/85" : "text-white/28",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "h-1.5 w-1.5 rounded-full",
                          i === activeIndex
                            ? "bg-[rgb(0,230,153)]"
                            : "bg-white/18",
                        ].join(" ")}
                      />
                      <span className="truncate">{t.company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* stack */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-x-0 -top-6 h-24 bg-linear-to-b from-black to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-24 bg-linear-to-t from-black to-transparent" />

            <div className="relative mx-auto h-[720px] max-w-2xl overflow-hidden">
              {items.map((t, i) => (
                <TestimonialCard
                  key={`${t.name}-${i}`}
                  item={t}
                  index={i}
                  activeIndex={activeIndex}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  item,
  index,
  activeIndex,
  scrollYProgress,
}: {
  item: {
    quote: string;
    name: string;
    role: string;
    image: string;
    company?: string;
  };
  index: number;
  activeIndex: number;
  scrollYProgress: import("framer-motion").MotionValue<number>;
}) {
  const distance = Math.abs(index - activeIndex);
  const opacity = distance === 0 ? 1 : distance === 1 ? 0.32 : 0.14;
  const blurPx = distance === 0 ? 0 : distance === 1 ? 3 : 6;
  const scale = distance === 0 ? 1 : 0.985;

  const baseOffset = (index - activeIndex) * 220;

  // Smooth transition between cards when activeIndex changes
  const baseY = useMotionValue(baseOffset);
  useEffect(() => {
    const controls = animate(baseY, baseOffset, {
      type: "spring",
      stiffness: 320,
      damping: 32,
      mass: 0.7,
    });
    return () => controls.stop();
  }, [baseOffset, baseY]);

  // subtle parallax drift (depth feeling)
  const parallaxY = useTransform(
    scrollYProgress,
    (v) => (v - 0.5) * index * 14
  );
  const y = useTransform(
    [baseY, parallaxY],
    ([b, p]) => (b as number) + (p as number)
  );
  const zIndex = 50 - distance;

  return (
    <motion.div
      style={{
        y,
        zIndex,
      }}
      animate={{
        opacity,
        scale,
        filter: `blur(${blurPx}px)`,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
        mass: 0.6,
        opacity: { duration: 0.22 },
        filter: { duration: 0.22 },
      }}
      className={[
        "absolute left-0 right-0 top-1/2 -translate-y-1/2 rounded-2xl border px-6 py-5 sm:px-7 sm:py-6",
        distance === 0
          ? "border-white/12 bg-white/6"
          : "border-white/6 bg-white/0",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />

      <div className="text-[14px] leading-6 sm:text-[16px] sm:leading-7 text-white/70">
        {item.quote}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-white/10">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="32px"
            className="object-cover grayscale contrast-125 brightness-110"
          />
        </div>
        <div className="min-w-0">
          <div className="text-[12px] font-medium text-white/85 leading-4 truncate">
            {item.name}
          </div>
          <div className="mt-0.5 text-[11px] text-white/45 leading-4 truncate">
            {item.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
