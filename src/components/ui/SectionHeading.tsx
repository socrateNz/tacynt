import clsx from "clsx";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase",
        tone === "dark"
          ? "border-line-dark bg-white/5 text-slate-dark"
          : "border-line-strong bg-white text-slate",
        className
      )}
    >
      <span
        className="size-1.5 rounded-full"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={clsx(
            "text-4xl sm:text-5xl font-semibold tracking-[-0.02em] leading-[1.08]",
            tone === "dark" ? "text-white" : "text-ink",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={clsx(
              "max-w-xl text-base sm:text-lg leading-relaxed",
              tone === "dark" ? "text-slate-dark" : "text-slate",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
