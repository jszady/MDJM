import { Check } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/sections/cta-banner";
import {
  PackagesHeroAside,
  packageSections
} from "@/components/sections/packages-hero-aside";
import { Reveal } from "@/components/motion/reveal";

function PackagesNav() {
  return (
    <nav className="flex gap-1 overflow-x-auto rounded-xl border border-white/10 bg-black p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center">
      {packageSections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="shrink-0 rounded-lg px-4 py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-400 transition duration-200 hover:bg-white/8 hover:text-[#ffd700] sm:text-xs sm:tracking-[0.22em]"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Packages — Web, Digital Marketing & Real Estate Video",
  description:
    "Transparent website, digital marketing, and real estate video packages from MJDM. Fixed-scope builds, monthly retainers, and growth plans for Toronto businesses.",
  path: "/packages",
  keywords: [
    "MJDM packages",
    "web design packages Toronto",
    "social media management packages",
    "real estate video production Toronto",
    "digital marketing packages Canada"
  ]
});

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-7 text-slate-200">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
      <span>{children}</span>
    </li>
  );
}

function PackageCard({
  eyebrow,
  title,
  subtitle,
  features,
  badge,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  features: string[];
  badge?: string;
}) {
  return (
    <div className="relative theme-card rounded-xl p-6 sm:p-8">
      {badge && (
        <span className="absolute right-5 top-5 rounded-full border border-[#e91e8c]/40 bg-[#e91e8c]/10 px-3 py-1 text-xs font-bold text-[#ffd700]">
          {badge}
        </span>
      )}
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffd700]">{eyebrow}</p>
      )}
      <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <CheckItem key={f}>{f}</CheckItem>
        ))}
      </ul>
    </div>
  );
}

function SectionHeading({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ffd700]">{label}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{description}</p>
    </div>
  );
}

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Everything we offer, laid out clearly."
        description="From one-page websites to full social media management and real estate video — here is exactly what MJDM delivers across every service category."
        primaryCta={{ label: "Book a Discovery Call", href: "mailto:info@mjdm.io" }}
        secondaryCta={{ label: "Send an Inquiry", href: "/contact" }}
        aside={<PackagesHeroAside />}
        footer={<PackagesNav />}
      />

      {/* ── WEBSITE DESIGN, DEVELOPMENT & SEO ───────────────────────── */}
      <SectionShell id="web" className="!pb-14 !pt-6 sm:!pb-20 sm:!pt-8 lg:!pt-10">
        <Reveal blur>
          <div className="theme-card rounded-xl p-5 sm:rounded-xl sm:p-10">
            <SectionHeading
              label="Website Design, Development & SEO"
              title="Build packages"
              description="Custom websites built on modern tech — fast, mobile-first, and conversion-focused. Pick the tier that matches your scope."
            />
            <div className="grid gap-6 md:grid-cols-3">
              <PackageCard
                eyebrow="Tier 01 · Starter"
                title="Starter Site"
                subtitle="Up to 5 pages — brochure / service"
                features={[
                  "5-page custom designed website",
                  "Mobile responsive design",
                  "Contact form + Google Maps",
                  "Basic on-page SEO setup",
                  "2 rounds of revisions",
                  "Launch ready in 2–3 weeks",
                ]}
              />
              <PackageCard
                eyebrow="Tier 02 · Business"
                title="Business Site"
                subtitle="10–15 pages — custom & conversion focused"
                badge="Most Popular"
                features={[
                  "10–15 pages fully custom design",
                  "CMS so you can edit content",
                  "Booking system or lead forms",
                  "Blog / news section",
                  "On-page SEO + speed optimisation",
                  "Launch ready in 3–5 weeks",
                ]}
              />
              <PackageCard
                eyebrow="Tier 03 · E-Commerce"
                title="E-Commerce Site"
                subtitle="Online store — Shopify or WooCommerce"
                features={[
                  "Full online store setup",
                  "Product pages + collections",
                  "Secure checkout + payments",
                  "Inventory & order management",
                  "Mobile optimised shopping",
                  "Custom quote based on scope",
                ]}
              />
            </div>

            <div className="mt-10 border-t border-white/8 pt-10">
              <SectionHeading
                label="Monthly Maintenance, Hosting & SEO"
                title="Ongoing plans"
                description="Keep your site live, secure, and climbing the rankings with an ongoing plan that matches your goals."
              />
              <div className="grid gap-6 md:grid-cols-2">
                <PackageCard
                  eyebrow="Plan 01 · Essential"
                  title="Essential Plan"
                  subtitle="Site live + reporting — no fixes included"
                  features={[
                    "Website hosting — site stays live",
                    "Security monitoring & uptime checks",
                    "Keyword tracking — monthly ranking report",
                    "Monthly clicks & impressions analytics",
                    "Google Search Console monitoring",
                    "Google Business Profile monitoring",
                    "Monthly performance report delivered",
                  ]}
                />
                <PackageCard
                  eyebrow="Plan 02 · Growth"
                  title="Growth Plan"
                  subtitle="Full service — hosting, SEO fixes & strategy"
                  badge="Most Popular"
                  features={[
                    "Everything in Essential Plan",
                    "On-page SEO fixes & updates",
                    "Technical SEO audit & improvements",
                    "Content recommendations & briefs",
                    "Competitor keyword gap analysis",
                    "Bi-weekly reporting dashboard",
                    "Priority support & site updates",
                  ]}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      {/* ── DIGITAL MARKETING ────────────────────────────────────────── */}
      <SectionShell id="marketing" className="!py-14 sm:!py-20">
        <Reveal blur delay={0.06}>
          <div className="theme-card rounded-xl p-5 sm:rounded-xl sm:p-10">
            <SectionHeading
              label="Social Media Management · Video Content · Paid Advertising"
              title="Digital marketing packages"
              description="Full-service social media management with professional video production and paid ads — all in one flat monthly fee. No surprise bills."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <PackageCard
                eyebrow="Tier 01 · Starter"
                title="Starter"
                features={[
                  "6–8 videos shot & edited monthly",
                  "1 on-site shoot per month",
                  "Full social media takeover",
                  "Instagram & TikTok management",
                  "Posting, captions & hashtags",
                  "Monthly content calendar & strategy",
                  "Monthly performance report",
                  "$250 ad spend included",
                ]}
              />
              <PackageCard
                eyebrow="Tier 02 · Growth"
                title="Growth"
                badge="Most Popular"
                features={[
                  "12–15 posts per month",
                  "2 on-site shoots per month",
                  "Full social media takeover",
                  "Instagram, TikTok & Facebook",
                  "Posting, captions & hashtags",
                  "Community management (comments & DMs)",
                  "Bi-weekly strategy & analytics report",
                  "$500 ad spend included",
                ]}
              />
            </div>

            <div className="mt-10 rounded-xl border border-white/10 bg-black p-6 sm:p-8">
              <h3 className="text-base font-semibold text-white">What's included in every package</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Full account access & management",
                  "Content calendar planning",
                  "Professional video shooting & editing",
                  "Caption & hashtag strategy",
                  "Vertical (TikTok/Reels) + horizontal cuts",
                  "Paid ad campaign setup & optimization",
                  "Licensed music on all videos",
                  "Monthly analytics reporting",
                ].map((f) => (
                  <CheckItem key={f}>{f}</CheckItem>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-6 text-slate-400">
                Ad spend is baked into the package price — clients pay one flat monthly fee. Additional ad budget can be added at any time. 3-month minimum commitment.
              </p>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      {/* ── REAL ESTATE VIDEO PRODUCTION ─────────────────────────────── */}
      <SectionShell id="realestate" className="!py-14 sm:!py-20">
        <Reveal blur delay={0.1}>
          <div className="theme-card rounded-xl p-5 sm:rounded-xl sm:p-10">
            <SectionHeading
              label="Real Estate Video Production · Cinematic Property Content"
              title="Real estate packages"
              description="Cinematic property videos for realtors and brokerages — delivered fast, branded professionally, and cut for every platform."
            />

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">One-off listings</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <PackageCard
                eyebrow="Condo / Apartment"
                title="Single Listing Video"
                features={[
                  "45–90 sec cinematic video",
                  "Vertical + horizontal versions",
                  "Colour grade + editing",
                  "Licensed music",
                  "48h delivery · 1 revision",
                ]}
              />
              <PackageCard
                eyebrow="Up to 2,000 sq ft"
                title="Small House"
                features={[
                  "60–120 sec cinematic video",
                  "Vertical + horizontal versions",
                  "Editing + colour grade",
                  "Licensed music",
                  "48h delivery · 1 revision",
                ]}
              />
              <PackageCard
                eyebrow="2,000–4,000 sq ft"
                title="Standard House"
                features={[
                  "Everything in Small House",
                  "Detailed room coverage",
                  "Exterior sequences",
                  "Agent branding overlay",
                  "48h delivery · 1 revision",
                ]}
              />
              <PackageCard
                eyebrow="4,000+ sq ft"
                title="Luxury Home"
                features={[
                  "Extended production",
                  "Multiple angles + lifestyle shots",
                  "Premium edit + colour grade",
                  "Agent branding overlay",
                  "Faster turnaround options",
                ]}
              />
            </div>

            <div className="mt-10 border-t border-white/8 pt-10">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Monthly retainer packs</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <PackageCard
                  eyebrow="Realtor Pack"
                  title="Realtor Content Pack"
                  subtitle="Condo / apartment focus"
                  features={[
                    "Up to 5 property videos per month",
                    "Delivery priority",
                    "5 short social cutdowns",
                    "Agent branding on all content",
                    "Monthly content planning",
                  ]}
                />
                <PackageCard
                  eyebrow="House Pack"
                  title="Realtor House Content Pack"
                  subtitle="Detached / house focus"
                  features={[
                    "Up to 5 property videos per month",
                    "Delivery priority",
                    "5 short social cutdowns",
                    "Agent branding on all content",
                    "Monthly content planning",
                  ]}
                />
              </div>
              <p className="mt-6 text-xs leading-6 text-slate-400">
                Unused shoots expire after 30 days — 1 month rollover max.
              </p>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <CtaBanner
        title="Not sure which package fits?"
        description="Book a free discovery call and MJDM will scope out the right combination for your goals, budget, and timeline."
      />
    </>
  );
}
