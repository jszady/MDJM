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
    "MJDM is a Toronto digital agency combining premium web design with growth-focused SEO, social, and content. We build brands that look current and convert.",
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

      <SectionShell className="!pb-12 !pt-6 sm:!pb-16 sm:!pt-8">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-8">
          <Reveal blur>
            <div className="theme-card overflow-hidden rounded-xl p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ffd700]">Mission</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
                Build digital presence that feels current, credible, and impossible to ignore.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300 sm:leading-8">
                MJDM helps businesses replace outdated visuals, weak messaging, and inconsistent
                execution with a cleaner digital system. That might start with a website, content
                strategy, social management, or paid campaigns, but the goal is always the same:
                stronger market perception and clearer business momentum.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Sharper positioning in competitive markets.",
                  "A more premium buyer-facing experience.",
                  "Consistent content and message delivery.",
                  "Growth channels aligned to the same strategy."
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm leading-6 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} direction="left" blur>
                <div className="theme-card relative overflow-hidden rounded-xl p-5 sm:p-6">
                  <div className="absolute inset-x-0 top-0 h-1 bg-[#e91e8c]" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300 sm:leading-7">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="!py-12 sm:!py-16">
        <Reveal blur>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ffd700]">
              The MJDM Approach
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">
              Strategy to growth, built as one aggressive premium system.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:leading-8">
              Strong outcomes usually fail when strategy, design, content, and growth are handled
              in isolation. MJDM keeps those disciplines connected from the first conversation.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-4">
          {approach.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} blur className="h-full">
              <div className="group theme-card flex h-full min-h-[220px] flex-col rounded-xl p-5 transition duration-300 hover:border-[#ffd700]/30 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:mt-4 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-300 sm:leading-7">{item.description}</p>
                <div className="mt-6 flex items-center gap-3 pt-2 text-xs font-bold uppercase tracking-[0.28em] text-[#ffd700]">
                  <span className="h-px flex-1 bg-linear-to-r from-[#ffd700]/40 to-transparent" />
                  {index === approach.length - 1 ? "Compounding Results" : "Next Phase"}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3">
          {[
            "Sharper visual identity across website and social platforms.",
            "Messaging that positions the business with more confidence and clarity.",
            "Consistent execution through content, management, and performance channels."
          ].map((item, index) => (
            <Reveal key={item} delay={index * 0.08} blur>
              <div className="theme-card rounded-xl p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffd700]">0{index + 1}</p>
                <p className="mt-3 text-base leading-7 text-slate-200">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="team" className="!py-12 sm:!py-16">
        <Reveal blur>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ffd700]">MJDM Team</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-4xl">
              Editorial and strategy from the people shipping the work.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:leading-8">
              Insights on the MJDM journal are published under the{" "}
              <span className="font-semibold text-white">MJDM Team</span> byline—written by strategists, designers, and
              growth leads who lead client delivery. The same team you brief on projects shapes the guidance you read
              here.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex text-sm font-bold text-[#ffd700] transition hover:text-white"
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
