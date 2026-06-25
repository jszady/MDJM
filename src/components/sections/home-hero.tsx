"use client";

import { motion, useReducedMotion } from "framer-motion";

import { HeroVisual } from "@/components/visuals/hero-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden">
      <div aria-hidden className="hero-depth-gradient pointer-events-none absolute inset-0" />
      <div aria-hidden className="hero-depth-grid pointer-events-none absolute inset-0 opacity-50" />
      <div aria-hidden className="space-stars pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[#e91e8c]/12 blur-3xl"
        style={{ animation: "float 13s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-8 h-56 w-56 rounded-full bg-[#2563eb]/10 blur-3xl"
        style={{ animation: "float 17s ease-in-out infinite 2.5s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-[#ffd700]/8 blur-3xl"
        style={{ animation: "float 20s ease-in-out infinite 5s" }}
      />
      <SectionShell className="relative pb-10 pt-10 sm:pb-14 sm:pt-14 lg:pt-20">
      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-14">
        <div className="min-w-0 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.38, ease: easeOut }}
            className="text-xs font-bold uppercase tracking-[0.22em] text-[#ffd700] sm:tracking-[0.28em]"
          >
            Premium Web + Growth Agency
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.55, delay: reduceMotion ? 0 : 0.08, ease: easeOut }}
            className="heading-xl mt-5 text-white sm:mt-6"
          >
            Toronto Web{" "}
            <span className="gradient-text">Design & Marketing</span> Agency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.18, ease: easeOut }}
            className="mt-5 block max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:hidden sm:leading-8"
          >
            We design high-conversion websites and run the SEO, content, and social that keep
            Toronto brands visible.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.18, ease: easeOut }}
            className="mt-5 hidden max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:block sm:leading-8"
          >
            We design high-conversion websites, build premium digital experiences, and run the
            content, SEO, and social systems that keep brands visible after launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.45, delay: reduceMotion ? 0 : 0.28, ease: easeOut }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <ButtonLink href="/contact" arrow className="w-full justify-center sm:w-auto">
              Start Your Project
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary" className="w-full justify-center sm:w-auto">
              See Our Work
            </ButtonLink>
          </motion.div>

          <p className="mt-4 text-center text-xs text-slate-500 lg:hidden">
            No commitment · We reply within 24 hours
          </p>

          <div className="mt-6 lg:hidden">
            <div className="h-[2px] w-12 bg-[#e91e8c]" />
            <div className="theme-card mt-3 flex items-stretch divide-x divide-white/10 px-4 py-4">
              <div className="flex-1 text-center">
                <p className="text-xl font-bold text-white">47+</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-[#e91e8c]">Brands</p>
                <p className="text-[10px] uppercase tracking-widest text-[#e91e8c]">Launched</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-xl font-bold text-white">5★</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-[#ffd700]">Rated</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-xl font-bold text-white">24h</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-[#2563eb]">Reply</p>
                <p className="text-[10px] uppercase tracking-widest text-[#2563eb]">Time</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <HeroVisual reduceMotion={!!reduceMotion} />
        </div>
      </div>
      </SectionShell>
    </div>
  );
}
