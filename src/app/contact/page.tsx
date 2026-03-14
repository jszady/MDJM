import { Mail, PhoneCall } from "lucide-react";

import { createMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionShell } from "@/components/ui/section-shell";
import { siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact MJDM to discuss web design, web development, SEO, social media management, content production, or a full digital growth project.",
  path: "/contact",
  keywords: [
    "contact digital agency",
    "book marketing agency call",
    "web design inquiry",
    "SEO inquiry"
  ]
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="If your current presence undersells the business, this is where that changes."
        description="Tell MJDM what you are building, where the brand feels behind, and what kind of support would create the strongest next step. The conversation is designed to be clear, direct, and commercially useful."
        primaryCta={{ label: "Request a Response", href: "#contact-form" }}
        secondaryCta={{ label: "Email MJDM", href: `mailto:${siteConfig.email}` }}
        featureChips={["Fast response", "Strategy-led conversation", "Premium growth support"]}
        spotlight={{
          label: "Why Reach Out",
          title: "Start with clarity, not a vague sales process.",
          description:
            "MJDM reviews your goals, identifies the biggest digital gaps, and points toward the combination of website, content, positioning, or growth support that will move the business forward fastest."
        }}
        stats={[
          {
            value: "24h",
            label: "Typical first response",
            detail: "Fast review of your goals, presence, and likely next steps."
          },
          {
            value: "1:1",
            label: "Focused conversation",
            detail: "Direct guidance tailored to your current position and ambition."
          }
        ]}
      />

      <SectionShell id="contact-form" className="pt-4">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal blur>
            <ContactForm />
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.08} direction="left" blur>
              <div className="section-surface noise-overlay relative overflow-hidden rounded-[2rem] p-6">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-400/14 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                    Direct Contact
                  </p>
                  <div className="mt-6 grid gap-4">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="group flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4 text-slate-200 transition duration-300 hover:border-cyan-300/40 hover:shadow-[0_0_30px_rgba(103,232,249,0.1)]"
                    >
                      <Mail className="h-5 w-5 text-cyan-300" />
                      <span>{siteConfig.email}</span>
                    </a>
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                      className="group flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4 text-slate-200 transition duration-300 hover:border-fuchsia-300/40 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]"
                    >
                      <PhoneCall className="h-5 w-5 text-fuchsia-300" />
                      <span>{siteConfig.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16} direction="left" blur>
              <div className="section-surface relative overflow-hidden rounded-[2rem] p-6">
                <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-fuchsia-500/14 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                    What To Expect
                  </p>
                  <div className="mt-5 grid gap-3 text-sm leading-7 text-slate-300">
                    <p>Fast initial review of your goals, positioning, and current digital gaps.</p>
                    <p>Recommended service mix based on whether you need site, growth, content, or all three.</p>
                    <p>A clear next-step conversation focused on action, not drawn-out sales theatre.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24} direction="left" blur>
              <div className="relative overflow-hidden rounded-[2rem] border border-dashed border-white/15 bg-slate-950/70 p-6 text-sm leading-7 text-slate-300 shadow-[0_16px_50px_rgba(2,6,23,0.24)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <p className="font-semibold uppercase tracking-[0.28em] text-fuchsia-200/80">
                  Delivery Note
                </p>
                <p className="mt-4">
                  The contact form already posts to an internal API route and is ready to connect
                  to MJDM&apos;s workflow through SMTP, Resend, or another email provider once
                  credentials are added.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
