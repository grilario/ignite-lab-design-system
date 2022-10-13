import type { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface TextProps {
  size?: "small" | "medium" | "large";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({
  size = "medium",
  children,
  asChild,
  className,
}: TextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx(
        "text-gray-100 font-sans",
        {
          "text-xs": size === "small",
          "text-sm": size === "medium",
          "text-md": size === "large",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}
