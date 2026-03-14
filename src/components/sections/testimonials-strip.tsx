"use client";

import { motion } from "framer-motion";

import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function TestimonialsStrip() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Client Perspective"
        title="Built to look sharper. Built to perform harder."
        description="Placeholder testimonials show the tone and structure for social proof while real client reviews are gathered."
        align="center"
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-left shadow-[0_20px_70px_rgba(5,10,30,0.35)]"
          >
            <p className="text-base leading-8 text-slate-200">“{item.quote}”</p>
            <footer className="mt-8">
              <p className="font-semibold text-white">{item.name}</p>
              <p className="text-sm text-slate-400">{item.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </SectionShell>
  );
}
