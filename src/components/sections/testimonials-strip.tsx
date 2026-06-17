"use client";

import { motion } from "framer-motion";

import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const barColors = ["bg-[#e91e8c]", "bg-[#ffd700]", "bg-[#2563eb]"] as const;

export function TestimonialsStrip() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Client Perspective"
        title="Built to look sharper. Built to perform harder."
        description="What partners say about working with MJDM on web, content, and growth initiatives."
        align="center"
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="theme-card overflow-hidden rounded-xl text-left"
          >
            <div className={`h-1 w-full ${barColors[index % barColors.length]}`} />
            <div className="p-6">
              <p className="text-base leading-8 text-slate-300">"{item.quote}"</p>
              <footer className="mt-6 border-t border-white/8 pt-4">
                <p className="font-bold text-white">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </footer>
            </div>
          </motion.blockquote>
        ))}
      </div>
    </SectionShell>
  );
}
