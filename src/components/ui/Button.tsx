import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-2/60";

const sizes = {
  md: "px-5 py-2.5",
  lg: "px-6 py-3.5 text-[15px]",
};

const variants: Record<Variant, string> = {
  primary:
    "text-white shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_10px_30px_-8px_rgba(109,40,217,0.55)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_16px_40px_-10px_rgba(109,40,217,0.7)] hover:-translate-y-0.5",
  secondary:
    "bg-white/90 text-ink border border-line-strong hover:border-ink/30 hover:-translate-y-0.5 hover:bg-white",
  ghost:
    "text-current border border-line-dark bg-white/[0.03] hover:bg-white/[0.08] hover:-translate-y-0.5",
  outline:
    "border border-gray-400 hover:border-gray-600 hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  icon = true,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  icon?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = clsx(base, sizes[size], variants[variant], variant === "primary" && "btn-sheen", className);
  const style = variant === "primary" ? { backgroundImage: "var(--gradient-brand)" } : undefined;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx(classes, "group")} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={clsx(classes, "group")} style={style}>
      {content}
    </button>
  );
}
