import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/motion/reveal";
import { AmbientBackground } from "@/components/visuals/ambient-background";
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
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats = [],
  featureChips = [],
  spotlight
}: PageHeroProps) {
  return (
    <SectionShell className="pb-8 pt-10 sm:pb-10 sm:pt-14 lg:pt-20">
      <div className="section-surface noise-overlay relative overflow-hidden rounded-[1.75rem] px-4 py-6 sm:rounded-[2.25rem] sm:px-10 sm:py-10 lg:px-14 lg:py-14">
        <AmbientBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.06),rgba(168,85,247,0.05),rgba(34,211,238,0.03))]" />
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end lg:gap-10">
          <Reveal blur>
            <div>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan-300/85 sm:gap-3 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.35em]">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
                {eyebrow}
              </div>
              <h1 className="glow-text mt-5 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:mt-6 sm:text-5xl sm:leading-tight lg:text-[4.5rem] lg:leading-[0.95]">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                {description}
              </p>
              {featureChips.length ? (
                <div className="mt-7 flex flex-wrap gap-3">
                  {featureChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/12 bg-slate-950/55 px-4 py-2 text-xs font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
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

          <Reveal delay={0.08} direction="left" blur className="hidden lg:block">
            <div className="grid gap-4">
              {spotlight ? (
                <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-slate-950/65 p-6 shadow-[0_20px_70px_rgba(2,6,23,0.45)]">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-fuchsia-500/18 blur-3xl" />
                  <p className="relative text-xs font-semibold uppercase tracking-[0.32em] text-fuchsia-200/80">
                    {spotlight.label}
                  </p>
                  <h2 className="relative mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {spotlight.title}
                  </h2>
                  <p className="relative mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                    {spotlight.description}
                  </p>
                </div>
              ) : null}

              {stats.length ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((stat, index) => (
                    <Reveal key={stat.label} delay={0.14 + index * 0.06} blur>
                      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_50px_rgba(2,6,23,0.35)]">
                        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                        <p className="text-3xl font-semibold tracking-tight text-white">{stat.value}</p>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
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
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
