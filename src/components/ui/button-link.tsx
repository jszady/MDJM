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
    "group border border-violet-400/30 bg-[linear-gradient(135deg,rgba(139,92,246,0.95),rgba(217,70,239,0.9))] text-white shadow-[0_0_30px_rgba(139,92,246,0.35),0_0_60px_rgba(236,72,153,0.12)] transition-all duration-500 ease-out hover:shadow-[0_0_40px_rgba(139,92,246,0.45),0_0_80px_rgba(236,72,153,0.2)] hover:border-violet-300/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
  primaryNav:
    "group border border-violet-300/40 bg-[linear-gradient(135deg,rgba(139,92,246,0.98),rgba(217,70,239,0.95))] text-white shadow-[0_0_36px_rgba(139,92,246,0.45),0_0_70px_rgba(236,72,153,0.18)] transition-all duration-500 ease-out hover:shadow-[0_0_48px_rgba(139,92,246,0.55),0_0_90px_rgba(236,72,153,0.25)] hover:border-violet-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
  secondary:
    "group border border-cyan-400/50 bg-white/[0.03] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-500 ease-out hover:border-cyan-300/70 hover:bg-white/[0.06] hover:shadow-[0_0_24px_rgba(103,232,249,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
  ghost: "group text-white/80 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
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

  const hoverLift = variant === "primaryNav" ? -4 : -3;

  return (
    <motion.div whileHover={{ y: hoverLift }} whileTap={{ scale: 0.985 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
      {isExternal ? (
        <a href={href} className={classes}>
          <span>{children}</span>
          {arrow ? (
            <motion.span
              whileHover={{ x: 3 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex transition duration-300 group-hover:brightness-110"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          ) : null}
        </a>
      ) : (
        <Link href={href} className={classes}>
          <span>{children}</span>
          {arrow ? (
            <motion.span
              whileHover={{ x: 3 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex transition duration-300 group-hover:brightness-110"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          ) : null}
        </Link>
      )}
    </motion.div>
  );
}
