"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { products } from "@/lib/data";
import { EASE_PREMIUM } from "@/lib/motion";

const nodePositions = [
  { x: 83, y: 16, path: "M50 50 C 64 37, 74 24, 83 16", delay: 0.1 },
  { x: 15, y: 20, path: "M50 50 C 36 39, 24 28, 15 20", delay: 0.25 },
  { x: 88, y: 62, path: "M50 50 C 68 53, 79 58, 88 62", delay: 0.4 },
  { x: 11, y: 64, path: "M50 50 C 32 54, 20 59, 11 64", delay: 0.55 },
  { x: 50, y: 93, path: "M50 50 C 50 68, 50 82, 50 93", delay: 0.7 },
];

const nodes = products.slice(0, nodePositions.length).map((product, i) => ({
  ...product,
  ...nodePositions[i],
}));

export function HeroNetwork() {
  const gradId = useId();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px] sm:max-w-[520px]">
      <div className="absolute inset-6 rounded-full bg-linear-to-br from-violet/25 via-transparent to-cyan/20 blur-3xl" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient
            id={`${gradId}-line`}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="100"
            y2="100"
          >
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {nodes.map((node, i) => (
          <g key={node.slug}>
            <motion.path
              d={node.path}
              stroke={`url(#${gradId}-line)`}
              strokeWidth={0.45}
              strokeLinecap="round"
              fill="none"
              opacity={0.55}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.55 }}
              transition={{ duration: 1.1, delay: node.delay, ease: EASE_PREMIUM }}
            />
            <path
              d={node.path}
              stroke={`url(#${gradId}-line)`}
              strokeWidth={0.6}
              strokeLinecap="round"
              strokeDasharray="4 7"
              fill="none"
              opacity={0.65}
              className="animate-dash"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          </g>
        ))}
      </svg>

      {/* Core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15 animate-spin-slow" />
        <div className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8 animate-spin-reverse-slow" />
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM }}
          className="relative flex size-16 items-center justify-center rounded-2xl glass-dark shadow-[0_0_60px_-8px_rgba(139,92,246,0.65)]"
        >
          <span
            className="absolute inset-0 -z-10 rounded-2xl blur-lg"
            style={{ backgroundImage: "var(--gradient-brand)", opacity: 0.6 }}
          />
          <span className="text-xs font-semibold tracking-wide text-white">AI</span>
        </motion.div>
      </div>

      {nodes.map((node) => (
        <div
          key={node.slug}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: node.delay + 0.3, ease: EASE_PREMIUM }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5 + node.delay * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay,
              }}
              className="glass-dark flex w-33 items-center gap-2.5 rounded-xl px-3 py-2.5 sm:w-38"
            >
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br ${node.gradient}`}
              >
                <node.icon className="size-3.5 text-white" />
              </span>
              <span className="text-[11px] font-medium leading-tight text-white sm:text-xs">
                {node.name}
              </span>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
