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
          description="Representative engagements showing how MJDM approaches web, brand, and growth challenges."
        />
        <Link href="/work" className="text-sm font-bold text-white transition-colors duration-200 hover:text-[#ffd700]">
          View all work
        </Link>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {items.map((study, index) => (
          <Reveal key={study.slug} delay={index * 0.08}>
            <div className="theme-card group relative overflow-hidden rounded-xl transition-transform duration-200 hover:-translate-y-0.5">
              <Link href="/work" className="absolute inset-0 z-0" aria-label={`View ${study.title} case study`} />
              {/* Browser chrome + screenshot */}
              <div className="overflow-hidden">
                <div className="flex items-center gap-1.5 border-b border-white/8 bg-black px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/60" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                  <span className="h-2 w-2 rounded-full bg-green-400/60" />
                  <div className="ml-2 flex-1 truncate rounded bg-slate-800/80 px-3 py-1 text-[10px] text-slate-500">
                    {study.url}
                  </div>
                </div>
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-black">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_65%)]" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={study.logo}
                    alt={study.logoAlt}
                    className="relative z-10 max-h-20 w-auto max-w-44 object-contain drop-shadow-lg transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-[#ffd700]">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{study.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {study.results.map((result) => (
                    <span
                      key={result}
                      className="rounded-lg border border-white/10 bg-black px-3 py-1 text-xs text-slate-400"
                    >
                      {result}
                    </span>
                  ))}
                </div>
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-4 inline-flex items-center gap-2 rounded-xl border-2 border-[#2563eb] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[#2563eb]/10"
                >
                  Visit Website
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
