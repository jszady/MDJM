import Link from "next/link";

import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";
import { accentBars, iconStyles } from "@/lib/theme";
import { PageHero } from "@/components/shared/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ServicesHeroAside } from "@/components/sections/services-hero-aside";

export const metadata = createMetadata({
  title: "Web Design, SEO & Social Media Services",
  description:
    "Web design, SEO, social media, and video production services for Toronto service businesses. MJDM brings every channel together under one agency.",
  path: "/services",
  keywords: [
    "web design services Toronto",
    "web development services",
    "SEO services Toronto",
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
        primaryCta={{ label: "Book a Discovery Call", href: "mailto:info@mjdm.io" }}
        secondaryCta={{ label: "Send an Inquiry", href: "/contact" }}
        featureChips={["Web design & dev", "SEO & content", "Social & video"]}
        aside={<ServicesHeroAside />}
      />

      <SectionShell className="pt-4">
        <div className="grid gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <section key={service.slug} id={service.slug} className="theme-card overflow-hidden rounded-xl">
                <div className={`h-1 w-full ${accentBars[index % accentBars.length]}`} />
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
                  <div>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${iconStyles[index % iconStyles.length]}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold text-white">
                      <Link
                        href={`/services/${service.slug}`}
                        className="transition-colors duration-200 hover:text-[#ffd700]"
                      >
                        {service.title}
                      </Link>
                    </h2>
                    <p className="mt-4 text-base leading-7 text-slate-400">{service.description}</p>
                    <div className="mt-6">
                      <ButtonLink href={`/services/${service.slug}`} variant="secondary" className="px-5 py-2.5">
                        View service page
                      </ButtonLink>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3 rounded-lg border border-white/10 bg-black px-4 py-4 text-sm leading-7 text-slate-300">
                        <span className="shrink-0 font-bold text-[#ffd700]">—</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
