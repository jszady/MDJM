import { notFound } from "next/navigation";
import Script from "next/script";

import { createMetadata } from "@/lib/metadata";
import {
  getArticleContent,
  getArticlePublishedAt,
  getArticlePublishedIso,
  getBlogPost
} from "@/lib/blog";
import { absoluteUrl } from "@/lib/utils";
import { SectionShell } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ReadingProgressBar } from "@/components/blog/reading-progress-bar";
import { ArticleContent } from "@/components/blog/article-content";
import { ArticleFooter } from "@/components/blog/article-footer";
import { ArticleInlineCta } from "@/components/blog/article-inline-cta";
import { SiteBreadcrumbs } from "@/components/ui/site-breadcrumbs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const content = getArticleContent(slug);

  if (!post || !content) return { title: "Article Not Found" };

  const publishedIso = getArticlePublishedIso(slug);
  const base = createMetadata({
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt,
    path: `/blog/${slug}`,
    keywords: [post.category.toLowerCase(), "web design", "digital agency"],
    openGraphType: "article"
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article" as const,
      ...(publishedIso ? { publishedTime: publishedIso } : {}),
      authors: ["MJDM Team"]
    }
  };
}

export function generateStaticParams() {
  return [
    { slug: "how-much-does-web-design-cost-in-canada-2026-guide" },
    { slug: "seo-for-service-businesses-where-to-start" },
    { slug: "social-media-management-for-small-businesses-what-actually-works" },
    { slug: "why-modern-web-design-still-wins-trust-fast" },
    { slug: "seo-foundations-every-service-business-needs" },
    { slug: "short-form-content-turns-attention-into-inquiries" },
    { slug: "building-a-brand-that-looks-expensive-online" }
  ];
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const content = getArticleContent(slug);
  const publishedAt = getArticlePublishedAt(slug);

  if (!post || !content) notFound();

  const publishedIso = getArticlePublishedIso(slug);
  const authorName = post.author ?? "MJDM Team";

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    ...(publishedIso ? { datePublished: publishedIso } : {}),
    author: {
      "@type": "Organization",
      name: authorName,
      url: absoluteUrl("/about#team")
    },
    publisher: {
      "@type": "Organization",
      name: "MJDM",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/new-logo.png")
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${slug}`)
    },
    url: absoluteUrl(`/blog/${slug}`),
    image: [absoluteUrl("/og-image.png")]
  };

  return (
    <>
      <Script
        id={`blog-posting-ld-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
      />
      <ReadingProgressBar />
      <SectionShell className="pb-10 pt-14 sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <SiteBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${slug}`, current: true }
            ]}
          />

          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-lg border border-white/10 bg-black px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-[#ffd700]">
                {post.category}
              </span>
              <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                {post.readTime}
              </span>
              {publishedAt ? (
                <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                  {publishedAt}
                </span>
              ) : null}
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {post.excerpt}
            </p>
            <p className="mt-4 text-sm font-medium text-slate-400">
              By{" "}
              <a href="/about#team" className="font-bold text-[#ffd700] transition hover:text-white">
                {authorName}
              </a>
            </p>
          </header>

          <article
            data-article-content
            className="article-container theme-card relative mt-14 overflow-hidden rounded-xl p-10 sm:p-14"
          >
            <div className="relative">
              <ArticleContent blocks={content} />
              <ArticleFooter title={post.title} slug={slug} />
              <ArticleInlineCta variant="footer" />
            </div>
          </article>
        </div>
      </SectionShell>

      <CtaBanner
        title="Want insight backed by execution, not just opinion pieces?"
        description="MJDM can turn strategy into websites, SEO structure, content systems, and campaigns that actually get shipped."
      />
    </>
  );
}
