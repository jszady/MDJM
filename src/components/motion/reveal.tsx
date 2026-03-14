"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
  distance?: number;
  blur?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
  distance = 32,
  blur = false
}: RevealProps) {
  const hidden =
    direction === "left"
      ? { opacity: 0, x: -distance }
      : direction === "right"
        ? { opacity: 0, x: distance }
        : { opacity: 0, y: distance };

  return (
    <motion.div
      className={className}
      initial={{ ...hidden, filter: blur ? "blur(8px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
