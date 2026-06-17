import Link from "next/link";

import { blogPosts } from "@/data/blog-posts";
import { hasArticlePage } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { createMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { BlogFilter } from "@/components/blog/blog-filter";
import { CtaBanner } from "@/components/sections/cta-banner";

const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];

export const metadata = createMetadata({
  title: "Digital Marketing & Web Design Insights",
  description:
    "Digital marketing and web design insights from MJDM. Practical guides on SEO, social media, branding, and online growth for Toronto service businesses.",
  path: "/blog",
  keywords: [
    "digital marketing blog",
    "web design insights",
    "SEO tips",
    "social media strategy"
  ]
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights for businesses building a stronger digital edge."
        description="Practical guidance on web design, search visibility, social content, and brand presence from the MJDM team."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "Browse Services", href: "/services" }}
        featureChips={["Featured articles", "Design & growth", "Actionable ideas"]}
        spotlight={{
          label: "Editorial Direction",
          title: "Thoughtful content that also supports search visibility.",
          description:
            "Articles are written for founders and marketing leads who want clear, premium-quality advice they can apply or discuss with MJDM."
        }}
        stats={[
          {
            value: `${blogPosts.length}`,
            label: "Insights published",
            detail: "Deep dives on the topics that shape how modern brands show up online."
          },
          {
            value: featuredPost.readTime,
            label: "Featured article",
            detail: featuredPost.category
          }
        ]}
      />

      <SectionShell className="pt-4">
        <Reveal blur>
          {(() => {
            const FeaturedArticle = () => (
              <article
                className={cn(
                  "theme-card group relative overflow-hidden rounded-xl p-8 sm:p-10",
                  hasArticlePage(featuredPost.slug) &&
                    "transition duration-300 hover:border-[#ffd700]/30"
                )}
              >
                <div className="relative">
                  <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ffd700]">
                        Featured Article
                      </p>
                      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {featuredPost.title}
                      </h2>
                    </div>
                    <div className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
                      {featuredPost.readTime}
                    </div>
                  </header>

                  <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
                    <div className="rounded-xl border border-white/10 bg-black p-5">
                      <div className="flex min-h-80 flex-col justify-between rounded-lg border border-white/10 bg-black p-5">
                        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.28em] text-white/65">
                          <span>Featured</span>
                          <span>Design · SEO · Growth</span>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-3">
                          {["Strategy", "Execution", "Results"].map((item) => (
                            <div
                              key={item}
                              className="rounded-2xl border border-white/10 bg-white/4 px-3 py-3 text-xs text-white/75"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                        {featuredPost.category}
                      </p>
                      <p className="mt-5 text-base leading-8 text-slate-300">{featuredPost.excerpt}</p>
                      <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-4 py-4">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                            What you will learn
                          </p>
                          <p className="mt-3 text-sm leading-6 text-slate-200">
                            Clear answers on design, visibility, and growth decisions that affect your brand.
                          </p>
                        </div>
                        <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-4 py-4">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                            How we write
                          </p>
                          <p className="mt-3 text-sm leading-6 text-slate-200">
                            Premium, direct, and commercially useful guidance you can act on or discuss with MJDM.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );

            return hasArticlePage(featuredPost.slug) ? (
              <Link href={`/blog/${featuredPost.slug}`} className="block">
                <FeaturedArticle />
              </Link>
            ) : (
              <FeaturedArticle />
            );
          })()}
        </Reveal>
      </SectionShell>

      <SectionShell>
        <Reveal blur>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ffd700]">
              Latest Articles
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Latest articles on design, SEO, content, and brand strategy.
            </h2>
          </div>
        </Reveal>
        <BlogFilter />
      </SectionShell>

      <CtaBanner
        title="Want insight backed by execution, not just opinion pieces?"
        description="MJDM can turn strategy into websites, SEO structure, content systems, and campaigns that actually get shipped."
      />
    </>
  );
}
