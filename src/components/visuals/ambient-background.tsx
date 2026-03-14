"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_2%,_rgba(168,85,247,0.18),_transparent_22%),radial-gradient(circle_at_88%_10%,_rgba(34,211,238,0.14),_transparent_22%),radial-gradient(circle_at_50%_18%,_rgba(236,72,153,0.1),_transparent_18%),linear-gradient(180deg,_rgba(2,6,23,0.84),_rgba(2,6,23,0.98))]" />
      <div className="hero-grid absolute inset-0 opacity-40" />
      <motion.div
        className="absolute left-[-6rem] top-8 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-[140px]"
        animate={{ y: [0, -24, 0], x: [0, 24, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-7rem] top-[14%] h-[30rem] w-[30rem] rounded-full bg-cyan-400/12 blur-[155px]"
        animate={{ y: [0, 20, 0], x: [0, -26, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-6rem] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-500/11 blur-[170px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.65, 0.88, 0.65] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[18%] top-[22%] h-48 w-48 rounded-full border border-white/6 bg-white/[0.02] blur-[1px]"
        animate={{ y: [0, -18, 0], x: [0, 14, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[18%] top-[46%] h-28 w-28 rounded-[2rem] border border-cyan-300/12 bg-cyan-300/[0.03]"
        animate={{ y: [0, 22, 0], rotate: [0, -18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[52%] top-[16%] h-px w-52 -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-300/60 to-transparent"
        animate={{ opacity: [0.2, 0.85, 0.2], scaleX: [0.8, 1.1, 0.8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
