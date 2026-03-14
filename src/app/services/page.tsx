import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Explore MJDM services including web design, development, SEO, social media management, paid social, video production, and content execution.",
  path: "/services",
  keywords: [
    "web design services",
    "web development services",
    "SEO services",
    "social media management",
    "video editing agency"
  ]
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services built to strengthen visibility, credibility, and conversion."
        description="MJDM brings websites, content, social, and growth strategy together so businesses do not have to piece together disconnected execution."
        primaryCta={{ label: "Book a Discovery Call", href: "mailto:hello@mjdm.agency" }}
        secondaryCta={{ label: "Send an Inquiry", href: "/contact" }}
      />

      <SectionShell className="pt-4">
        <div className="grid gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <section
                key={service.slug}
                id={service.slug}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_70px_rgba(5,10,30,0.35)] sm:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-6 text-3xl font-semibold text-white">{service.title}</h2>
                    <p className="mt-4 text-base leading-7 text-slate-300">{service.description}</p>
                  </div>
                  <div className="grid gap-4">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 px-5 py-5 text-slate-200"
                      >
                        {benefit}
                      </div>
                    ))}
                    <div className="rounded-[1.5rem] border border-dashed border-white/15 bg-white/[0.02] px-5 py-5 text-sm leading-7 text-slate-400">
                      Future-ready structure: this section is intentionally designed so it can be
                      split into a dedicated SEO-friendly service page later with minimal refactor.
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </SectionShell>

      <CtaBanner
        title="Need a website, a content engine, or both?"
        description="MJDM builds the front-end impression and the growth system behind it, so your business shows up stronger everywhere it matters."
      />
    </>
  );
}
