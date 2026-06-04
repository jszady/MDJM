import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

import { services } from "@/data/services";
import { getServicePageCopy } from "@/data/service-page-content";
import { createMetadata } from "@/lib/metadata";
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

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const copy = getServicePageCopy(slug);
  const service = services.find((s) => s.slug === slug);

  if (!copy || !service) notFound();

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
      url: "https://www.mjdm.agency",
      email: "hello@mjdm.agency"
    },
    areaServed: ["United Kingdom", "United States", "Canada", "Worldwide"]
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
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 text-cyan-300">
              <Icon className="h-6 w-6" />
            </div>
            <div className="min-w-0 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">MJDM</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{copy.h1}</h1>
              <p className="mt-8 text-base leading-8 text-slate-300 sm:text-lg">{copy.intro}</p>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="!py-16 sm:!py-20">
        <Reveal blur>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_70px_rgba(5,10,30,0.35)] sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{copy.includesHeading}</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {copy.includes.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 px-5 py-5 text-sm leading-7 text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="!py-16 sm:!py-20">
        <Reveal blur delay={0.06}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_70px_rgba(5,10,30,0.35)] sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{copy.valueHeading}</h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
              {copy.valueParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="!py-16 sm:!py-20">
        <Reveal blur delay={0.1}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_70px_rgba(5,10,30,0.35)] sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{copy.processHeading}</h2>
            <ol className="mt-10 grid gap-6 md:grid-cols-2">
              {copy.processSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6 pl-14"
                >
                  <span className="absolute left-5 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-sm font-semibold text-cyan-200">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="!py-16 sm:!py-20">
        <Reveal blur delay={0.14}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_70px_rgba(5,10,30,0.35)] sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{copy.faqHeading}</h2>
            <div className="mt-8 space-y-4">
              {copy.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 px-5 py-5 sm:px-6 sm:py-6"
                >
                  <h3 className="text-base font-semibold text-white">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="!py-16 sm:!py-20">
        <Reveal blur delay={0.18}>
          <div className="rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-fuchsia-950/20 p-8 sm:p-10">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">Related services & reading</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Explore complementary capabilities on dedicated pages, or dive into MJDM insights where they support
              this service.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/services" variant="secondary">
                All services
              </ButtonLink>
              {relatedServices.map((s) => {
                const RelIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-white transition hover:border-cyan-300/35 hover:text-cyan-200"
                  >
                    <RelIcon className="h-4 w-4 text-cyan-300/90" />
                    {s.title}
                  </Link>
                );
              })}
            </div>
            {copy.relatedBlog.length ? (
              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                {copy.relatedBlog.map((b) => (
                  <li key={b.slug}>
                    {hasArticlePage(b.slug) ? (
                      <Link
                        href={`/blog/${b.slug}`}
                        className="font-medium text-cyan-300/90 underline-offset-4 transition hover:text-cyan-200 hover:underline"
                      >
                        {b.title}
                      </Link>
                    ) : (
                      <Link href="/blog" className="font-medium text-cyan-300/90 underline-offset-4 hover:underline">
                        {b.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
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
