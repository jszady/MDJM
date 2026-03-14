"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type HeroVisualProps = {
  reduceMotion?: boolean;
};

export function HeroVisual({ reduceMotion = false }: HeroVisualProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const spring = { stiffness: 80, damping: 24 };
  const parallaxX = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), spring);
  const parallaxY = useSpring(useTransform(mouseY, [0, 1], [-4, 4]), spring);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || reduceMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const dur = (d: number) => (reduceMotion ? 0 : d);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.75, delay: reduceMotion ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto flex aspect-square w-full max-w-[38rem] items-center justify-center"
    >
      {/* Backdrop glow — slow loop */}
      <motion.div
        className="absolute inset-[6%] rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_38%)] blur-2xl"
        animate={{ scale: [1, 1.04, 1], rotate: [0, 6, 0] }}
        transition={{ duration: dur(17), repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-[10%] rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm"
        animate={{ rotate: [0, 5, 0], y: [0, -8, 0] }}
        transition={{ duration: dur(20), repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-[16%] rounded-[2.5rem] border border-cyan-300/18 bg-[linear-gradient(140deg,rgba(34,211,238,0.14),rgba(139,92,246,0.1),rgba(217,70,239,0.18))] shadow-[0_0_90px_rgba(99,102,241,0.16)]"
        animate={{ rotate: [0, -8, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: dur(15), repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[8%] h-24 w-24 rounded-full border border-fuchsia-300/20 bg-fuchsia-300/[0.03]"
        animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
        transition={{ duration: dur(11), repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[6%] h-16 w-36 rounded-full border border-cyan-300/20 bg-cyan-300/[0.04]"
        animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ duration: dur(14), repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main panel — subtle parallax */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="relative z-10 w-[80%] overflow-hidden rounded-[2.35rem] border border-white/12 bg-slate-950/82 p-5 shadow-[0_35px_120px_rgba(5,10,30,0.66)] soft-outline backdrop-blur-xl sm:p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_30%)]" />
        <div className="relative grid gap-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <motion.span
                className="h-2.5 w-2.5 rounded-full bg-fuchsia-400 shadow-[0_0_18px_rgba(232,121,249,0.9)]"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: dur(4), repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: dur(5.2), repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              />
              <motion.span
                className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.9)]"
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: dur(4.8), repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              />
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.68rem] uppercase tracking-[0.28em] text-slate-300">
              MJDM Live System
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Digital Presence</p>
              <p className="text-sm font-medium text-white/80">+ Growth active</p>
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/8">
              <motion.div
                className="h-3 rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 shadow-[0_0_24px_rgba(103,232,249,0.35)]"
                initial={{ width: "28%" }}
                animate={{ width: ["36%", "88%", "62%", "36%"] }}
                transition={{ duration: dur(12), repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="mt-6 grid gap-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/75 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Bold websites</p>
                <p className="mt-2 text-[1.75rem] font-semibold leading-none text-white">
                  High-impact launch systems
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Visibility</p>
                  <p className="mt-2 text-lg font-semibold text-white">SEO + authority</p>
                  <p className="mt-1 text-sm text-slate-400">Search momentum that compounds.</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Attention</p>
                  <p className="mt-2 text-lg font-semibold text-white">Content + paid social</p>
                  <p className="mt-1 text-sm text-slate-400">Creative built to convert interest.</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[1.35rem] border border-cyan-300/16 bg-cyan-300/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Speed</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Fast</p>
                </div>
                <div className="rounded-[1.35rem] border border-fuchsia-300/16 bg-fuchsia-300/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Conversion layer</p>
                  <p className="mt-2 text-base font-medium text-white">
                    Built to look expensive and act like a sales asset.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Web", value: "Design + build" },
              { label: "Social", value: "Content + management" },
              { label: "Growth", value: "SEO + ads" }
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
