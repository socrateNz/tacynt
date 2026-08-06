"use client";

import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

const outerDots = [0, 60, 120, 180, 240, 300];
const innerDots = [30, 150, 270];

const floatingShapes = [
  { className: "top-0 left-6 size-3 rounded-full bg-cyan/70", duration: 6, delay: 0, drift: 5 },
  { className: "top-8 -right-1 size-4 rounded-lg bg-violet-2/55 rotate-45", duration: 7.5, delay: 0.6, drift: -6 },
  { className: "bottom-16 -left-2 size-2.5 rounded-full bg-violet/70", duration: 5.5, delay: 1.1, drift: 6 },
  { className: "bottom-2 right-8 size-3.5 rounded-md bg-cyan-2/55 rotate-12", duration: 8, delay: 0.3, drift: -5 },
  { className: "top-1/3 -left-3 size-5 rounded-full border-2 border-cyan/70", duration: 6.8, delay: 1.6, drift: 4 },
  { className: "top-1/4 -right-4 size-4 rounded-full border-2 border-violet-2/70", duration: 7.2, delay: 0.9, drift: -4 },
  { className: "bottom-1/4 left-1/2 size-2 rounded-full bg-white/60", duration: 5, delay: 1.9, drift: 5 },
];

export function AICore() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-violet/12 via-transparent to-cyan/8 blur-2xl" />

      <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-spin-slow">
        {outerDots.map((deg) => (
          <span
            key={deg}
            className="absolute left-1/2 top-1/2 size-2 rounded-full bg-cyan/80"
            style={{
              transform: `rotate(${deg}deg) translate(0, -50%)`,
              transformOrigin: "0 0",
              top: 0,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-12 rounded-full border border-white/16 animate-spin-reverse-slow sm:inset-14">
        {innerDots.map((deg) => (
          <span
            key={deg}
            className="absolute left-1/2 top-1/2 size-1.5 rounded-full bg-violet-2/90"
            style={{
              transform: `rotate(${deg}deg) translate(0, -50%)`,
              transformOrigin: "0 0",
              top: 0,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-24 rounded-full bg-linear-to-br from-violet/18 to-cyan/14 blur-xl animate-pulse-soft sm:inset-28" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[0, 1].map((i) => (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/40"
            animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 1.5,
            }}
          />
        ))}
        <div className="relative flex size-20 items-center justify-center rounded-full glass-dark shadow-[0_0_70px_-6px_rgba(139,92,246,0.7)]">
          <span
            className="absolute inset-0 -z-10 rounded-full blur-xl"
            style={{ backgroundImage: "var(--gradient-brand)", opacity: 0.7 }}
          />
          <BrainCircuit className="size-8 text-white" />
        </div>
      </div>

      {floatingShapes.map((shape, i) => (
        <motion.span
          key={i}
          className={`absolute ${shape.className}`}
          animate={{ y: [0, -14, 0], x: [0, shape.drift, 0], opacity: [0.35, 0.9, 0.35] }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
