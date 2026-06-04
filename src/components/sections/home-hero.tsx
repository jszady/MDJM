"use client";

import { motion, useReducedMotion } from "framer-motion";

import { HeroVisual } from "@/components/visuals/hero-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";

const headlineWords = ["Build", "the", "presence", "people", "remember."];
const easeOut = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell className="pb-14 pt-14 sm:pt-20 lg:pt-20">
      <div className="section-surface rounded-[2.6rem] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        {/* Background: gradient + grid drift (CSS) — slower than foreground */}
        <div className="hero-depth-gradient absolute inset-[-8%]" />
        <div className="hero-depth-grid absolute inset-0" />

        {/* Floating orbs — varied long durations (14–24s) */}
        <motion.div
          className="absolute left-10 top-10 h-40 w-40 rounded-full bg-fuchsia-400/10 blur-[100px]"
          animate={{ x: [0, 18, 0], y: [0, -14, 0], opacity: [0.4, 0.62, 0.42] }}
          transition={{ duration: reduceMotion ? 0 : 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-12 h-44 w-44 rounded-full bg-cyan-400/9 blur-[100px]"
          animate={{ x: [0, -16, 0], y: [0, 12, 0], opacity: [0.36, 0.56, 0.38] }}
          transition={{ duration: reduceMotion ? 0 : 19, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Abstract shapes — different timing loops (13–24s) */}
        <motion.div
          className="hero-depth-particle absolute left-[14%] top-[22%] h-20 w-20 rounded-full border border-white/6 bg-white/[0.018] backdrop-blur-[1px]"
          animate={{ y: [0, -12, 0], x: [0, 8, 0], rotate: [0, 8, 0] }}
          transition={{ duration: reduceMotion ? 0 : 17, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-depth-particle absolute right-[18%] top-[32%] h-14 w-14 rounded-[1.5rem] border border-cyan-300/10 bg-cyan-300/[0.03]"
          animate={{ y: [0, 10, 0], x: [0, -6, 0], rotate: [0, -10, 0] }}
          transition={{ duration: reduceMotion ? 0 : 23, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-depth-particle absolute bottom-[18%] left-[22%] h-10 w-28 rounded-full border border-fuchsia-300/10 bg-fuchsia-300/[0.025]"
          animate={{ x: [0, 12, 0], y: [0, -8, 0], opacity: [0.28, 0.48, 0.28] }}
          transition={{ duration: reduceMotion ? 0 : 21, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-depth-particle absolute left-[56%] top-[16%] h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-fuchsia-300/40 to-transparent"
          animate={{ opacity: [0.12, 0.3, 0.12], scaleX: [0.92, 1.08, 0.92] }}
          transition={{ duration: reduceMotion ? 0 : 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dot particles — staggered, non-synced (9–18s) */}
        {[
          { pos: "left-[18%] top-[14%]", dur: 15, del: 0 },
          { pos: "left-[48%] top-[12%]", dur: 11, del: 1.2 },
          { pos: "right-[16%] top-[24%]", dur: 18, del: 0.8 },
          { pos: "left-[12%] bottom-[20%]", dur: 13, del: 1.8 },
          { pos: "right-[24%] bottom-[18%]", dur: 16, del: 0.4 }
        ].map(({ pos, dur, del }, index) => (
          <motion.span
            key={pos}
            className={`hero-depth-particle absolute ${pos} h-1.5 w-1.5 rounded-full bg-white/30`}
            animate={{ y: [0, -8 - index, 0], opacity: [0.08, 0.28, 0.08] }}
            transition={{
              duration: reduceMotion ? 0 : dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: del
            }}
          />
        ))}

        <div className="relative grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="max-w-3xl">
            {/* 1. Eyebrow — quick, understated */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.38, ease: easeOut }}
              className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-cyan-200/90 soft-outline"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
              Premium Web + Growth Agency
            </motion.div>

            {/* 2. Supporting tagline — after eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.1, ease: easeOut }}
              className="mt-7 max-w-xl text-sm uppercase tracking-[0.28em] text-slate-400"
            >
              MJDM builds bold websites, sharper social systems, and stronger online presence for businesses that need to look current and convert harder.
            </motion.p>

            {/* 3. Headline — staged by word, fade + upward + blur reduction */}
            <h1 className="mt-7 flex flex-wrap gap-x-3 gap-y-1 text-white">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.58 + (index % 3) * 0.08,
                    delay: reduceMotion ? 0 : 0.2 + index * 0.11,
                    ease: easeOut
                  }}
                  className={`heading-xl glow-text ${word === "presence" ? "gradient-text" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* 4. Supporting paragraph — after headline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.6, delay: reduceMotion ? 0 : 0.85, ease: easeOut }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              We design high-conversion websites, build premium digital experiences, and run the
              content, SEO, and social systems that keep brands visible after launch.
            </motion.p>

            {/* 5. CTAs — staggered, subtle entrance */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.48, delay: reduceMotion ? 0 : 1.02, ease: easeOut }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.4, delay: reduceMotion ? 0 : 1.08, ease: easeOut }}
              >
                <ButtonLink href="/contact" arrow className="px-6 py-3.5">
                  Start Your Project
                </ButtonLink>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.4, delay: reduceMotion ? 0 : 1.18, ease: easeOut }}
              >
                <ButtonLink href="/services" variant="secondary" className="px-6 py-3.5">
                  Explore Services
                </ButtonLink>
              </motion.div>
            </motion.div>

            {/* 6. Feature cards — staggered */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.07, delayChildren: reduceMotion ? 0 : 1.22 }
                }
              }}
              className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-[1.1fr_0.9fr_0.9fr]"
            >
              {[
                {
                  kicker: "Web",
                  title: "Bold, conversion-focused websites",
                  body: "Modern design systems built to earn trust fast."
                },
                {
                  kicker: "Growth",
                  title: "SEO + momentum",
                  body: "Visibility that compounds after launch."
                },
                {
                  kicker: "Social",
                  title: "Content that stays active",
                  body: "Consistent execution across channels."
                }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: reduceMotion ? 0.01 : 0.48,
                        ease: easeOut
                      }
                    }
                  }}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.035] px-4 py-4 soft-outline"
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-cyan-200/80">
                    {item.kicker}
                  </p>
                  <p className="mt-3 text-sm font-medium text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <HeroVisual reduceMotion={!!reduceMotion} />
        </div>
      </div>
    </SectionShell>
  );
}
