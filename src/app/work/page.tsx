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
    "MJDM's portfolio of web design and digital growth projects. See how Toronto service businesses improved their online presence and conversion rates.",
  path: "/work",
  keywords: ["agency portfolio Toronto", "case studies", "website redesign results", "digital agency work"]
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Portfolio work shaped to look premium, feel current, and prove commercial impact."
        description="MJDM case studies are built to showcase transformation, performance, and the kind of creative execution ambitious businesses expect from a modern digital partner."
        primaryCta={{ label: "Discuss Your Project", href: "/contact" }}
        secondaryCta={{ label: "Email MJDM", href: "mailto:info@mjdm.io" }}
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
            value: "4",
            label: "Disciplines",
            detail: "Strategy, design, content, and growth outcomes captured end to end."
          }
        ]}
      />

      <SectionShell className="py-8! sm:py-10!">
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
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ffd700]">
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
            <div className="theme-card rounded-xl p-5 text-sm leading-7 text-slate-300 lg:max-w-sm">
              <p className="font-bold uppercase tracking-[0.28em] text-[#ffd700]">
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
              <article className="group theme-card overflow-hidden rounded-xl transition duration-300 hover:border-[#ffd700]/30">
                {/* Browser chrome + screenshot */}
                <div className="overflow-hidden rounded-t-4xl">
                  <div className="flex items-center gap-1.5 border-b border-white/8 bg-slate-900/80 px-4 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-red-400/60" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                    <span className="h-2 w-2 rounded-full bg-green-400/60" />
                    <div className="ml-2 flex-1 truncate rounded bg-slate-800/80 px-3 py-1 text-[10px] text-slate-500">
                      {study.url}
                    </div>
                  </div>
                  <div className="relative flex h-52 items-center justify-center overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_65%)]" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={study.logo}
                      alt={study.logoAlt}
                      className="relative z-10 max-h-24 w-auto max-w-50 object-contain drop-shadow-lg transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 px-5 pb-5 pt-5">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-white transition duration-200 group-hover:text-[#ffd700]">
                      {study.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{study.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {study.results.map((result) => (
                      <span
                        key={result}
                        className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-slate-300 transition duration-300 group-hover:border-white/20"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-xl border-2 border-[#2563eb] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white transition duration-200 hover:border-[#ffd700] hover:text-[#ffd700]"
                  >
                    Visit Website
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="theme-card rounded-xl p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <Reveal blur>
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ffd700]">
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
