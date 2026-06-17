"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "primaryNav" | "secondary" | "ghost";
  className?: string;
  arrow?: boolean;
};

const variants = {
  primary:
    "group bg-[#ffd700] text-black border-2 border-[#ffd700] hover:bg-[#ffe566] hover:border-[#ffe566] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  primaryNav:
    "group bg-[#e91e8c] text-white border-2 border-[#e91e8c] hover:bg-[#ff2d9b] hover:border-[#ff2d9b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e91e8c]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  secondary:
    "group bg-transparent text-white border-2 border-[#2563eb] hover:bg-[#2563eb]/10 hover:border-[#3b82f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  ghost:
    "group text-white/80 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  arrow = false
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold tracking-[0.01em] transition-colors duration-200",
    variants[variant],
    className
  );
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <motion.div whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
      {isExternal ? (
        <a href={href} className={classes}>
          <span>{children}</span>
          {arrow ? (
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          ) : null}
        </a>
      ) : (
        <Link href={href} className={classes}>
          <span>{children}</span>
          {arrow ? (
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          ) : null}
        </Link>
      )}
    </motion.div>
  );
}
