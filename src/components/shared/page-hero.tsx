import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/ui/section-shell";

type PageHeroStat = {
  value: string;
  label: string;
  detail?: string;
};

type PageHeroSpotlight = {
  label: string;
  title: string;
  description: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: PageHeroStat[];
  featureChips?: string[];
  spotlight?: PageHeroSpotlight;
  /** Custom right-column content; replaces spotlight + stats when provided. */
  aside?: ReactNode;
  /** Full-width row below the hero grid (e.g. section nav). */
  footer?: ReactNode;
};

const statColors = ["text-[#e91e8c]", "text-[#ffd700]", "text-[#2563eb]", "text-[#ffd700]"] as const;

function DefaultAside({
  spotlight,
  stats
}: {
  spotlight?: PageHeroSpotlight;
  stats: PageHeroStat[];
}) {
  if (!spotlight && !stats.length) return null;

  return (
    <div className="grid gap-4">
      {spotlight ? (
        <div className="theme-card rounded-xl p-6">
          <div className="h-1 w-12 bg-[#e91e8c]" />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.28em] text-[#ffd700]">
            {spotlight.label}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">{spotlight.title}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">{spotlight.description}</p>
        </div>
      ) : null}

      {stats.length ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.14 + index * 0.06} blur>
              <div className="theme-card rounded-xl p-5">
                <p className="text-3xl font-bold tracking-tight text-white">{stat.value}</p>
                <p className={`mt-2 text-xs font-bold uppercase tracking-[0.2em] ${statColors[index % statColors.length]}`}>
                  {stat.label}
                </p>
                {stat.detail ? (
                  <p className="mt-3 text-sm leading-6 text-slate-400">{stat.detail}</p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats = [],
  featureChips = [],
  spotlight,
  aside,
  footer
}: PageHeroProps) {
  const hasAside = Boolean(aside || spotlight || stats.length);

  return (
    <SectionShell className={`pb-6 pt-10 sm:pb-8 sm:pt-14 lg:pt-20 ${footer ? "!pb-4" : ""}`}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end lg:gap-10">
        <Reveal blur>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ffd700]">{eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-[1.85rem] font-bold leading-[1.05] tracking-[-0.04em] text-white sm:mt-6 sm:text-5xl sm:leading-tight lg:text-[4.5rem] lg:leading-[0.95]">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {description}
            </p>
            {featureChips.length ? (
              <div className="mt-7 flex flex-wrap gap-2">
                {featureChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-lg border border-white/10 bg-black px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            ) : null}
            {primaryCta || secondaryCta ? (
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                {primaryCta ? (
                  <ButtonLink href={primaryCta.href} arrow className="w-full justify-center sm:w-auto">
                    {primaryCta.label}
                  </ButtonLink>
                ) : null}
                {secondaryCta ? (
                  <ButtonLink href={secondaryCta.href} variant="secondary" className="w-full justify-center sm:w-auto">
                    {secondaryCta.label}
                  </ButtonLink>
                ) : null}
              </div>
            ) : null}
          </div>
        </Reveal>

        {hasAside ? (
          <Reveal delay={0.08} direction="left" blur>
            {aside ?? <DefaultAside spotlight={spotlight} stats={stats} />}
          </Reveal>
        ) : null}
      </div>

      {footer ? <div className="mt-8 lg:mt-10">{footer}</div> : null}
    </SectionShell>
  );
}
