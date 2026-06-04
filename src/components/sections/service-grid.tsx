"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type ServiceGridProps = {
  compact?: boolean;
  className?: string;
};

export function ServiceGrid({ compact = false, className }: ServiceGridProps) {
  return (
    <SectionShell id="services" className={className}>
      <SectionHeading
        eyebrow="Capabilities"
        title="Everything MJDM needs to move a brand forward lives under one roof."
        description="Premium websites, stronger search visibility, sharper social content, and campaign execution built to create momentum, not noise."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Reveal key={service.slug} delay={index * 0.05} blur>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="service-card group section-surface h-full rounded-[2rem] p-6"
              >
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(34,211,238,0.1),transparent_38%,rgba(217,70,239,0.1))] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.16),transparent_34%)] opacity-40 transition duration-500 group-hover:opacity-75" />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-[2rem] border border-transparent opacity-0 shadow-[0_0_0_1px_rgba(103,232,249,0.12),0_0_36px_rgba(139,92,246,0.12)] transition duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col transition duration-500 group-hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.3rem] border border-white/10 bg-slate-900/80 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.08)] transition duration-500 group-hover:border-cyan-300/45 group-hover:bg-slate-900/90 group-hover:text-white group-hover:shadow-[0_0_38px_rgba(34,211,238,0.18)]">
                      <Icon className="h-5 w-5 transition duration-500 group-hover:scale-105 group-hover:brightness-125" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-slate-400 transition duration-500 group-hover:border-fuchsia-300/30 group-hover:text-slate-200">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-6">
                    <p className="text-[0.68rem] uppercase tracking-[0.32em] text-slate-500">
                      {service.slug.replaceAll("-", " ")}
                    </p>
                    <h3 className="mt-4 text-[1.6rem] font-semibold leading-tight text-white transition duration-500 group-hover:text-cyan-200">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{service.short}</p>
                  <div className="mt-5 grid gap-3 text-sm text-slate-400">
                    {service.benefits.slice(0, compact ? 2 : 3).map((item, benefitIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0.85, x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.25, delay: benefitIndex * 0.03 }}
                        className="rounded-[1.1rem] border border-white/8 bg-slate-950/50 px-4 py-3 transition duration-500 group-hover:border-white/12 group-hover:bg-slate-950/65"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-auto pt-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white transition duration-300 group-hover:gap-3 group-hover:text-cyan-300"
                    >
                      Explore service
                      <span className="text-base">+</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
