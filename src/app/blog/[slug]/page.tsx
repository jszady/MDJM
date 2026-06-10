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

  return createMetadata({
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt,
    path: `/blog/${slug}`,
    keywords: [post.category.toLowerCase(), "web design", "digital agency"],
    openGraphType: "article"
  });
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
        url: absoluteUrl("/logo.png")
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
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
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
              <a href="/about#team" className="text-cyan-300/90 transition hover:text-cyan-200">
                {authorName}
              </a>
            </p>
          </header>

          <article
            data-article-content
            className="article-container relative mt-14 overflow-hidden rounded-[2.25rem] border border-cyan-400/10 bg-white/[0.02] p-10 shadow-[0_0_0_1px_rgba(103,232,249,0.08),0_20px_80px_rgba(5,10,30,0.35),inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-xl sm:p-14"
          >
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-500/8 blur-3xl" />
            <div className="noise-overlay absolute inset-0" />
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
