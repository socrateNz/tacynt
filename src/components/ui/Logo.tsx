"use client";

import { useId } from "react";
import clsx from "clsx";

export function Logomark({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={clsx("size-8", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-bar`} x1="4" y1="4" x2="28" y2="12" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2a3494" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id={`${id}-node`} x1="11.5" y1="21" x2="20.5" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect x="4" y="5" width="24" height="6.4" rx="3.2" fill={`url(#${id}-bar)`} />
      <rect x="12.9" y="5" width="6.2" height="16.5" rx="3.1" fill="#6d28d9" />
      <circle cx="16" cy="25.5" r="4.5" fill={`url(#${id}-node)`} />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  textClassName,
  tone = "dark",
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <Logomark className={markClassName} />
      <span
        className={clsx(
          "text-lg font-semibold tracking-[-0.01em]",
          tone === "dark" ? "text-white" : "text-ink",
          textClassName
        )}
      >
        Tacynt
      </span>
    </span>
  );
}
