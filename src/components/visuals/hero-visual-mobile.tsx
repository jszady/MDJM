"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeroVisualMobileProps = {
  reduceMotion?: boolean;
};

export function HeroVisualMobile({ reduceMotion: reduceMotionProp = false }: HeroVisualMobileProps) {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = reduceMotionProp || !!prefersReducedMotion;
  const dur = (d: number) => (reduceMotion ? 0 : d);

  return (
    <div
      className="rounded-2xl border border-white/10 bg-black/80 bg-[radial-gradient(circle_at_top_left,rgba(233,30,140,0.08),transparent_40%)] p-4 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <motion.span
            className="h-2 w-2 rounded-full bg-[#e91e8c]"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: dur(4), repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="h-2 w-2 rounded-full bg-[#ffd700]"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: dur(5.2), repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
          <motion.span
            className="h-2 w-2 rounded-full bg-[#2563eb]"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: dur(4.8), repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[0.6rem] uppercase tracking-widest text-slate-400">
          MJDM Live System
        </span>
      </div>

      <div className="my-3 border-t border-white/10" />

      <div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-[0.65rem] uppercase tracking-widest text-slate-400">Digital Presence</p>
          <p className="text-[0.65rem] text-white/70">+ Growth active</p>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8">
          <motion.div
            className="h-full rounded-full bg-linear-to-r from-[#e91e8c] via-[#ffd700] to-[#2563eb]"
            animate={{ width: ["35%", "82%", "55%", "35%"] }}
            transition={{ duration: dur(10), repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="my-3 border-t border-white/10" />

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-[0.6rem] uppercase tracking-widest text-slate-400">Web</p>
          <p className="mt-1 text-xs font-medium text-white">Design + Build</p>
        </div>
        <div className="rounded-xl border border-[#e91e8c]/20 bg-[#e91e8c]/5 p-3">
          <p className="text-[0.6rem] uppercase tracking-widest text-slate-400">Social</p>
          <p className="mt-1 text-xs font-medium text-white">Content + Mgmt</p>
        </div>
      </div>
    </div>
  );
}
