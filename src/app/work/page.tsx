import { caseStudies } from "@/data/case-studies";
import { createMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { SiteBreadcrumbs } from "@/components/ui/site-breadcrumbs";
import { SectionShell } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = createMetadata({
  title: "Agency Portfolio — Web Design & Digital Growth Projects",
  description:
    "See how MJDM approaches websites, SEO, content systems, and digital growth through high-impact case study structures.",
  path: "/work",
  keywords: ["agency portfolio", "case studies", "website redesign results", "digital agency work"]
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Portfolio work shaped to look premium, feel current, and prove commercial impact."
        description="MJDM case studies are built to showcase transformation, performance, and the kind of creative execution ambitious businesses expect from a modern digital partner."
        primaryCta={{ label: "Discuss Your Project", href: "/contact" }}
        secondaryCta={{ label: "Email MJDM", href: "mailto:hello@mjdm.agency" }}
        featureChips={["Premium presentation", "Results-led storytelling", "Visual case studies"]}
        spotlight={{
          label: "Portfolio System",
          title: "Designed for visuals, proof, and momentum.",
          description:
            "Each project card highlights the challenge, the approach, and measurable outcomes so prospects can see how MJDM delivers for brands like theirs."
        }}
        stats={[
          {
            value: "03",
            label: "Featured studies",
            detail: "Representative engagements across web, growth, and brand-focused work."
          },
          {
            value: "4D",
            label: "Delivery scope",
            detail: "Strategy, design, content, and growth outcomes captured end to end."
          }
        ]}
      />

      <SectionShell className="!py-8 sm:!py-10">
        <SiteBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Work", href: "/work", current: true }
          ]}
        />
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal blur>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                Selected Case Studies
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Portfolio work that shows how brands level up online.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Each study summarises the engagement, the creative and technical focus, and the
                commercial signals that mattered to the client.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08} direction="left" blur>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-slate-300 shadow-[0_16px_50px_rgba(2,6,23,0.3)] lg:max-w-sm">
              <p className="font-semibold uppercase tracking-[0.28em] text-fuchsia-200/80">
                How to read these studies
              </p>
              <p className="mt-3">
                Use the cards to compare scope, industry, and results. When you are ready to
                discuss a similar engagement, MJDM can map a tailored plan to your goals.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.08} blur>
              <article className="group section-surface noise-overlay relative overflow-hidden rounded-[2rem] p-3 transition duration-500 hover:-translate-y-1">
                <div
                  className={`relative overflow-hidden rounded-[1.7rem] bg-gradient-to-br ${study.accent} p-5`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.6),_transparent_40%)]" />
                  <div className="relative flex min-h-72 flex-col justify-between gap-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <p className="min-w-0 flex-1 break-words text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
                        {study.category}
                      </p>
                      <span className="flex-shrink-0 rounded-full border border-white/20 bg-slate-950/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75 backdrop-blur-sm">
                        Project Ready
                      </span>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/15 bg-slate-950/55 p-5 backdrop-blur-md transition duration-500 group-hover:scale-[1.02] group-hover:border-cyan-300/35">
                      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.28em] text-white/65">
                        <span>Project focus</span>
                        <span>Web · Growth · Brand</span>
                      </div>
                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {["Creative direction", "Key metrics", "Business impact"].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-xs text-white/70"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 px-4 pb-4 pt-6 sm:px-5 sm:pb-5">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                      Visual-led
                    </span>
                    <span className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-fuchsia-200">
                      Results-first
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white transition duration-300 group-hover:text-cyan-200">
                      {study.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{study.summary}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/75 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Result Signals
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-white">{study.results.length}</p>
                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        Highlighted outcomes from the engagement.
                      </p>
                    </div>
                    <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/75 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Story Arc
                      </p>
                      <p className="mt-3 text-base font-semibold text-white">Challenge to growth</p>
                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        Designed to explain what changed and why it mattered.
                      </p>
                    </div>
                    <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/75 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Media Slots
                      </p>
                      <p className="mt-3 text-base font-semibold text-white">Static + motion</p>
                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        Stills, motion, and interactive assets where relevant.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {study.results.map((result) => (
                      <div
                        key={result}
                        className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 transition duration-300 group-hover:border-white/15"
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="section-surface noise-overlay relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-cyan-400/14 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <Reveal blur>
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                  Built To Scale
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  New projects join the portfolio as they ship.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  MJDM continues to publish fresh case studies so you can see recent thinking across
                  web, SEO, content, and social-led growth.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08} direction="left" blur>
              <ButtonLink href="/contact" arrow>
                Create The Next Case Study
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      <CtaBanner
        title="The next project should feel as strong in-market as it does in the portfolio."
        description="If you want work that looks premium, earns attention, and gives your business better proof to sell with, MJDM is ready to build it."
      />
    </>
  );
}
