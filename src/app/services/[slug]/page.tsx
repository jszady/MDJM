import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

import { services } from "@/data/services";
import { getServicePageCopy } from "@/data/service-page-content";
import { createMetadata } from "@/lib/metadata";
import { iconStyles, textAccents } from "@/lib/theme";
import { absoluteUrl } from "@/lib/utils";
import { hasArticlePage } from "@/lib/blog";
import { ButtonLink } from "@/components/ui/button-link";
import { SiteBreadcrumbs } from "@/components/ui/site-breadcrumbs";
import { SectionShell } from "@/components/ui/section-shell";
import { TrustSignalsBand } from "@/components/sections/trust-signals-band";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Reveal } from "@/components/motion/reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const copy = getServicePageCopy(slug);
  const serviceMeta = services.find((s) => s.slug === slug);
  if (!copy || !serviceMeta) return { title: "Service" };

  return createMetadata({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path: `/services/${slug}`,
    keywords: [
      serviceMeta.title,
      "MJDM",
      "digital agency",
      "service business",
      slug.replaceAll("-", " ")
    ]
  });
}

function ThemeBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`theme-card rounded-xl p-6 sm:p-8 ${className}`}>{children}</div>
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const copy = getServicePageCopy(slug);
  const service = services.find((s) => s.slug === slug);

  if (!copy || !service) notFound();

  const serviceIndex = services.findIndex((s) => s.slug === slug);
  const Icon = service.icon;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: copy.metaDescription,
    url: absoluteUrl(`/services/${slug}`),
    provider: {
      "@type": "Organization",
      name: "MJDM",
      url: "https://www.mjdm.io",
      email: "info@mjdm.io"
    },
    areaServed: ["Toronto", "Canada", "United States", "Worldwide"]
  };

  const relatedServices = copy.relatedSlugs
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as (typeof services)[number][];

  return (
    <>
      <Script
        id={`service-ld-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <Script
        id={`service-faq-ld-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <SectionShell className="pb-12 pt-14 sm:pt-20">
        <Reveal blur>
          <SiteBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${slug}`, current: true }
            ]}
          />

          <div className="mt-10 flex flex-wrap items-start gap-6">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${iconStyles[serviceIndex % iconStyles.length]}`}
            >
              <Icon className="h-6 w-6" />
            </div>
            <div className="min-w-0 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ffd700]">MJDM</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">{copy.h1}</h1>
              <p className="mt-8 text-base leading-8 text-slate-400 sm:text-lg">{copy.intro}</p>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="!py-12 sm:!py-16">
        <Reveal blur>
          <ThemeBlock>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{copy.includesHeading}</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {copy.includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-lg border border-white/10 bg-black px-4 py-4 text-sm leading-7 text-slate-300"
                >
                  <span className="shrink-0 font-bold text-[#ffd700]">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ThemeBlock>
        </Reveal>
      </SectionShell>

      <SectionShell className="!py-12 sm:!py-16">
        <Reveal blur delay={0.06}>
          <ThemeBlock>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{copy.valueHeading}</h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-slate-400">
              {copy.valueParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ThemeBlock>
        </Reveal>
      </SectionShell>

      <SectionShell className="!py-12 sm:!py-16">
        <Reveal blur delay={0.1}>
          <ThemeBlock>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{copy.processHeading}</h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-2">
              {copy.processSteps.map((step, i) => (
                <li key={step.title} className="relative theme-card rounded-xl p-5 pl-14">
                  <span
                    className={`absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black text-sm font-bold ${textAccents[i % textAccents.length]}`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{step.body}</p>
                </li>
              ))}
            </ol>
          </ThemeBlock>
        </Reveal>
      </SectionShell>

      <SectionShell className="!py-12 sm:!py-16">
        <Reveal blur delay={0.14}>
          <ThemeBlock>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{copy.faqHeading}</h2>
            <div className="mt-8 space-y-3">
              {copy.faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg border border-white/10 bg-black px-5 py-5 sm:px-6">
                  <h3 className="text-base font-bold text-white">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </ThemeBlock>
        </Reveal>
      </SectionShell>

      <SectionShell className="!py-12 sm:!py-16">
        <Reveal blur delay={0.18}>
          <ThemeBlock>
            <div className="h-1 w-12 bg-[#e91e8c]" />
            <h2 className="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
              Related services & reading
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Explore complementary capabilities on dedicated pages, or dive into MJDM insights where they support
              this service.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/services" variant="secondary">
                All services
              </ButtonLink>
              {relatedServices.map((s, i) => {
                const RelIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-white/10 bg-black px-4 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:border-[#ffd700]/50 hover:text-[#ffd700]"
                  >
                    <RelIcon className={`h-4 w-4 ${textAccents[i % textAccents.length]}`} />
                    {s.title}
                  </Link>
                );
              })}
            </div>
            {copy.relatedBlog.length ? (
              <ul className="mt-8 space-y-3 text-sm text-slate-400">
                {copy.relatedBlog.map((b) => (
                  <li key={b.slug}>
                    {hasArticlePage(b.slug) ? (
                      <Link
                        href={`/blog/${b.slug}`}
                        className="font-bold text-[#ffd700] underline-offset-4 transition-colors hover:text-white hover:underline"
                      >
                        {b.title}
                      </Link>
                    ) : (
                      <Link
                        href="/blog"
                        className="font-bold text-[#ffd700] underline-offset-4 hover:underline"
                      >
                        {b.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </ThemeBlock>
        </Reveal>
      </SectionShell>

      <TrustSignalsBand />

      <CtaBanner
        title={`Ready to talk ${service.title.toLowerCase()}?`}
        description="Tell MJDM what you are building, what is not working today, and what a strong next quarter looks like. We will respond with a clear, practical next step."
      />
    </>
  );
}
