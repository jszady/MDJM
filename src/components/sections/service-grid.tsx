"use client";

import Link from "next/link";

import { services } from "@/data/services";
import { accentBars, iconStyles } from "@/lib/theme";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/motion/reveal";

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

      <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Reveal key={service.slug} delay={index * 0.05} blur>
              <article className="theme-card service-card group flex h-full flex-col overflow-hidden rounded-xl">
                <div className={`h-1 w-full ${accentBars[index % accentBars.length]}`} />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${iconStyles[index % iconStyles.length]}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-slate-500">
                      {service.slug.replaceAll("-", " ")}
                    </p>
                    <h3 className="mt-3 text-xl font-bold leading-tight text-white sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-400">{service.short}</p>

                  <ul className="mt-5 space-y-2 text-sm text-slate-400">
                    {service.benefits.slice(0, compact ? 2 : 3).map((item) => (
                      <li key={item} className="flex gap-2.5 leading-6">
                        <span className="shrink-0 font-bold text-[#ffd700]">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors duration-200 group-hover:text-[#ffd700]"
                    >
                      Explore service
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
