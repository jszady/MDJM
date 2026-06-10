import Link from "next/link";

import { createMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/sections/cta-banner";

const principles = [
  {
    title: "Premium execution",
    description:
      "Every touchpoint should feel sharper than the competition, from headline hierarchy to motion detail."
  },
  {
    title: "Creative with commercial intent",
    description:
      "MJDM does not separate visual quality from business performance. Strong design should drive trust and action."
  },
  {
    title: "Unified digital presence",
    description:
      "Websites, content, SEO, paid media, and social execution work harder when they are built as one system."
  }
];

const approach = [
  {
    title: "Strategy",
    description:
      "Clarify the position, offer, audience, and opportunities so the work points at the right commercial outcome."
  },
  {
    title: "Design",
    description:
      "Build a premium visual system that sharpens perception, strengthens trust, and creates a more valuable first impression."
  },
  {
    title: "Content",
    description:
      "Create the message architecture, social assets, and website copy that carry the brand with consistency."
  },
  {
    title: "Growth",
    description:
      "Turn the new presence into visibility, traction, and measurable momentum through SEO, campaigns, and iteration."
  }
];

export const metadata = createMetadata({
  title: "About MJDM — Premium Web Design & Growth Agency",
  description:
    "MJDM is a Toronto-based digital agency combining premium design, SEO, content systems, and growth execution for ambitious businesses ready to stand out.",
  path: "/about",
  keywords: ["about MJDM", "Toronto digital agency", "creative agency", "marketing partner"]
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MJDM"
        title="A modern digital partner for businesses that want to look sharper and grow smarter."
        description="MJDM exists for brands that need more than generic web builds or disconnected marketing output. The agency combines premium visual execution with growth-minded systems that help businesses become more credible, more visible, and easier to choose."
        primaryCta={{ label: "Talk to MJDM", href: "/contact" }}
        secondaryCta={{ label: "See Services", href: "/services" }}
        featureChips={["Premium positioning", "Joined-up execution", "Built for ambitious brands"]}
        spotlight={{
          label: "What MJDM Does",
          title: "Creative quality with business direction.",
          description:
            "MJDM helps ambitious businesses stop looking fragmented online and start showing up with the polish, clarity, and consistency that modern buyers expect."
        }}
        stats={[
          {
            value: "4",
            label: "Core disciplines",
            detail: "Strategy, design, content, and growth are treated as one connected system."
          },
          {
            value: "1",
            label: "Unified partner",
            detail: "A single digital partner is easier to trust, brief, and scale with than disconnected suppliers."
          }
        ]}
      />

      <SectionShell className="pt-4">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal blur>
            <div className="section-surface noise-overlay relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-violet-500/16 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                  Mission
                </p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.85rem] lg:leading-[1.02]">
                  Build digital presence that feels current, credible, and impossible to ignore.
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-300">
                  MJDM helps businesses replace outdated visuals, weak messaging, and inconsistent
                  execution with a cleaner digital system. That might start with a website, content
                  strategy, social management, or paid campaigns, but the goal is always the same:
                  stronger market perception and clearer business momentum.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Sharper positioning in competitive markets.",
                    "A more premium buyer-facing experience.",
                    "Consistent content and message delivery.",
                    "Growth channels aligned to the same strategy."
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.35rem] border border-white/10 bg-slate-950/65 px-4 py-4 text-sm leading-7 text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} direction="left" blur>
                <div className="section-surface relative overflow-hidden rounded-[1.75rem] p-6">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/60 to-transparent" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <Reveal blur>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              The MJDM Approach
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Strategy to growth, built as one aggressive premium system.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Strong outcomes usually fail when strategy, design, content, and growth are handled
              in isolation. MJDM keeps those disciplines connected from the first conversation.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {approach.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} blur>
              <div className="group section-surface relative h-full overflow-hidden rounded-[1.85rem] p-6 transition duration-500 hover:-translate-y-1">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-fuchsia-500/16" />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Step 0{index + 1}
                </p>
                <h3 className="relative mt-4 text-2xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="relative mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                <div className="relative mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/75">
                  <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/40 to-transparent" />
                  {index === approach.length - 1 ? "Compounding Results" : "Next Phase"}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            "Sharper visual identity across website and social platforms.",
            "Messaging that positions the business with more confidence and clarity.",
            "Consistent execution through content, management, and performance channels."
          ].map((item, index) => (
            <Reveal key={item} delay={index * 0.08} blur>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_16px_50px_rgba(2,6,23,0.24)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                  0{index + 1}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-200">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="team" className="!py-16 sm:!py-20">
        <Reveal blur>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">MJDM Team</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Editorial and strategy from the people shipping the work.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Insights on the MJDM journal are published under the{" "}
              <span className="font-semibold text-white">MJDM Team</span> byline—written by strategists, designers, and
              growth leads who lead client delivery. The same team you brief on projects shapes the guidance you read
              here.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Work with MJDM →
            </Link>
          </div>
        </Reveal>
      </SectionShell>

      <CtaBanner
        title="Need a partner that can handle strategy, creative, content, and growth without losing quality?"
        description="MJDM is built for that gap. The work is designed to feel elevated, but the system behind it stays commercially focused, practical, and ready to scale."
      />
    </>
  );
}
