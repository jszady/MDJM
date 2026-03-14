import Link from "next/link";

import { caseStudies } from "@/data/case-studies";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/motion/reveal";

type CaseStudyGridProps = {
  limit?: number;
};

export function CaseStudyGrid({ limit }: CaseStudyGridProps) {
  const items = typeof limit === "number" ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <SectionShell>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected projects designed to lift perception and drive action."
          description="Each case study is a placeholder structure ready to swap for real visuals, numbers, and deeper delivery details."
        />
        <Link href="/work" className="text-sm font-semibold text-white transition hover:text-cyan-300">
          View all work
        </Link>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {items.map((study, index) => (
          <Reveal key={study.slug} delay={index * 0.08}>
            <Link
              href="/work"
              className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
            >
              <div
                className={`relative h-56 overflow-hidden bg-gradient-to-br ${study.accent} p-6`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.45),_transparent_40%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
                    {study.category}
                  </span>
                  <div className="rounded-[1.5rem] border border-white/15 bg-slate-950/50 p-4 backdrop-blur-sm">
                    <p className="text-sm text-white/70">Placeholder thumbnail / motion preview</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white transition group-hover:text-cyan-300">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{study.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {study.results.map((result) => (
                    <span
                      key={result}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
