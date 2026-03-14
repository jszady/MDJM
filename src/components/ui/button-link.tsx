"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  arrow?: boolean;
};

const variants = {
  primary:
    "border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(237,233,254,0.96))] text-slate-950 shadow-[0_12px_50px_rgba(255,255,255,0.12),0_0_40px_rgba(167,139,250,0.18)] hover:shadow-[0_16px_60px_rgba(255,255,255,0.15),0_0_54px_rgba(167,139,250,0.22)]",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:border-fuchsia-400/55 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(236,72,153,0.08)]",
  ghost: "text-white/80 hover:text-white"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  arrow = false
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition duration-500 ease-out",
    variants[variant],
    className
  );
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.985 }}>
      {isExternal ? (
        <a href={href} className={classes}>
          <span>{children}</span>
          {arrow ? (
            <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.25 }}>
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          ) : null}
        </a>
      ) : (
        <Link href={href} className={classes}>
          <span>{children}</span>
          {arrow ? (
            <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.25 }}>
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          ) : null}
        </Link>
      )}
    </motion.div>
  );
}
