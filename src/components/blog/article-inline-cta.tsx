"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/data/site";

type ArticleInlineCtaProps = {
  variant?: "mid" | "footer";
};

export function ArticleInlineCta({ variant = "mid" }: ArticleInlineCtaProps) {
  const isMid = variant === "mid";

  return (
    <div
      className={
        isMid
          ? "my-12 rounded-[1.5rem] border border-cyan-400/20 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-fuchsia-950/25 p-6 shadow-[0_0_40px_rgba(103,232,249,0.08)] sm:p-8"
          : "mt-12 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8"
      }
    >
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/85">
        {isMid ? "Work with MJDM" : "Next step"}
      </p>
      <p className="mt-3 text-lg font-semibold tracking-tight text-white sm:text-xl">
        {isMid ? "Turn this into a project your market will feel." : "Ready when you are."}
      </p>
      <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300">
        {isMid
          ? "Tell us what you are launching or fixing—we respond with a clear plan, timeline, and commercial focus."
          : "Book a call or send a brief—MJDM replies within one business day with practical next steps."}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href="/contact" arrow className="px-5 py-2.5">
          Start your project
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary" className="px-5 py-2.5">
          Request a proposal
        </ButtonLink>
        <ButtonLink href={siteConfig.bookingUrl} variant="secondary" className="px-5 py-2.5">
          Book a call
        </ButtonLink>
      </div>
    </div>
  );
}
