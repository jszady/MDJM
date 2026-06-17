"use client";

import { motion, useReducedMotion } from "framer-motion";

import { HeroVisual } from "@/components/visuals/hero-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell className="pb-10 pt-10 sm:pb-14 sm:pt-14 lg:pt-20">
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
            className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:leading-8"
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
            <ButtonLink href="/services" variant="secondary" className="w-full justify-center sm:w-auto">
              Explore Services
            </ButtonLink>
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <HeroVisual reduceMotion={!!reduceMotion} />
        </div>
      </div>
    </SectionShell>
  );
}
