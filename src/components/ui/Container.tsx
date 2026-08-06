import { type ElementType, type ReactNode } from "react";
import clsx from "clsx";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-7xl section-x", className)}>
      {children}
    </Tag>
  );
}
