import type { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface HeadingProps {
  size?: "small" | "medium" | "large";
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({ size = "medium", children, asChild }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-lg": (size === "small"),
        "text-xl": (size === "medium"),
        "text-2xl": (size === "large"),
      })}
    >
      {children}
    </Comp>
  );
}
