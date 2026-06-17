import { Clock, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";

import { createMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionShell } from "@/components/ui/section-shell";
import { siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Get in Touch — Start Your Web or Growth Project",
  description:
    "Get in touch with MJDM to start a web design, SEO, or digital marketing project. Based in Toronto. Reply within one business day.",
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
        title="Start Your Next Project With MJDM"
        description="Tell us what you are building, where the brand feels behind, and what a strong next quarter looks like. After you submit the form, MJDM reviews your goals and replies with a practical next step—whether that is a scoping call, a short proposal outline, or a clear recommendation if we are not the right fit."
        primaryCta={{ label: "Request a Response", href: "#contact-form" }}
        secondaryCta={{ label: "Email MJDM", href: `mailto:${siteConfig.email}` }}
        featureChips={["We respond within 24 hours", "No-obligation consultation", "Strategy-led conversation"]}
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

      <SectionShell className="py-10!">
        <div className="theme-card mx-auto max-w-3xl rounded-xl px-6 py-6 text-center sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#ffd700]">What happens next</p>
          <p className="mt-3 text-base leading-7 text-slate-300">
            You will receive a personal response within <span className="text-white">24 hours</span> on business
            days. There is <span className="text-white">no obligation</span>—just a focused review of your brief and
            the most sensible way to move forward with web, SEO, social, or a combined programme.
          </p>
        </div>
      </SectionShell>

      <SectionShell id="contact-form" className="pt-4">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal blur>
            <ContactForm />
          </Reveal>

          <div className="grid auto-rows-min gap-5">
            <Reveal delay={0.08} direction="left" blur>
              <div className="theme-card rounded-xl p-6">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ffd700]">
                  Direct Contact
                </p>
                <div className="mt-6 grid gap-4">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-black p-4 text-slate-200 transition duration-200 hover:border-[#ffd700]/40"
                    >
                      <Mail className="h-5 w-5 shrink-0 text-[#ffd700]" />
                      <span>{siteConfig.email}</span>
                    </a>
                    {siteConfig.whatsappNumber ? (
                      <a
                        href={`https://wa.me/${siteConfig.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-slate-200 transition duration-300 hover:border-emerald-300/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.1)]"
                      >
                        <MessageCircle className="h-5 w-5 shrink-0 text-emerald-400 transition duration-300 group-hover:brightness-110 group-hover:scale-105" />
                        <span>+1 (647) 887-5823</span>
                      </a>
                    ) : null}
                    {siteConfig.phone ? (
                      <a
                        href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                        className="group flex items-center gap-4 rounded-xl border border-white/10 bg-black p-4 text-slate-200 transition duration-200 hover:border-[#ffd700]/40"
                      >
                        <PhoneCall className="h-5 w-5 shrink-0 text-[#ffd700]" />
                        <span>{siteConfig.phone}</span>
                      </a>
                    ) : null}
                    {siteConfig.address ? (
                      <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-black p-4 text-slate-200">
                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#ffd700]" />
                        <span className="leading-7">
                          {siteConfig.address[0]}<br />{siteConfig.address[1]}
                        </span>
                      </div>
                    ) : null}
                    {siteConfig.businessHours ? (
                      <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-black p-4 text-slate-200">
                        <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#ffd700]" />
                        <span className="leading-7">
                          {siteConfig.businessHours[0]}<br />{siteConfig.businessHours[1]}
                        </span>
                      </div>
                    ) : null}
                  </div>
              </div>
            </Reveal>

            <Reveal delay={0.16} direction="left" blur>
              <div className="theme-card rounded-xl p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ffd700]">
                    What To Expect
                  </p>
                  <div className="mt-5 grid gap-3 text-sm leading-7 text-slate-300">
                    <p>Fast initial review of your goals, positioning, and current digital gaps.</p>
                    <p>Recommended service mix based on whether you need site, growth, content, or all three.</p>
                    <p>A clear next-step conversation focused on action, not drawn-out sales theatre.</p>
                  </div>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
