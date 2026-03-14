import { blogPosts } from "@/data/blog-posts";
import { createMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/shared/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { BlogFilter } from "@/components/blog/blog-filter";
import { CtaBanner } from "@/components/sections/cta-banner";

const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];

export const metadata = createMetadata({
  title: "Blog",
  description:
    "MJDM insights on web design, SEO, digital branding, social media performance, and modern growth strategy.",
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
        description="The MJDM journal is structured for future SEO growth and editorial depth, with content themes around design, visibility, conversion, and social performance."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "Browse Services", href: "/services" }}
        featureChips={["Featured editorial", "Premium card layout", "SEO-minded structure"]}
        spotlight={{
          label: "Editorial Direction",
          title: "Thoughtful content that also supports search visibility.",
          description:
            "The blog is designed to carry premium editorial presentation today while leaving clean structure for future article pages, internal linking, and stronger organic growth."
        }}
        stats={[
          {
            value: `${blogPosts.length}`,
            label: "Current insights",
            detail: "A premium listing structure ready to grow into a larger editorial hub."
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
          <article className="section-surface noise-overlay relative overflow-hidden rounded-[2rem] p-8 shadow-[0_20px_80px_rgba(5,10,30,0.35)] sm:p-10">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-fuchsia-500/16 blur-3xl" />
            <div className="relative">
              <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                    Featured Article
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Editorial styling with room for future SEO depth.
                  </h2>
                </div>
                <div className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
                  {featuredPost.readTime}
                </div>
              </header>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
                <div className="rounded-[1.9rem] bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(139,92,246,0.16),rgba(217,70,239,0.2))] p-5 shadow-[0_20px_70px_rgba(8,12,30,0.38)]">
                  <div className="flex min-h-80 flex-col justify-between rounded-[1.65rem] border border-white/15 bg-slate-950/60 p-5 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.28em] text-white/65">
                      <span>Featured cover</span>
                      <span>Hero visual / editorial art</span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {["SEO angle", "Insight depth", "Future internal links"].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-xs text-white/75"
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
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {featuredPost.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-slate-300">{featuredPost.excerpt}</p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Search Intent
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-200">
                        Structured to answer high-trust design and growth questions.
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Editorial Tone
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-200">
                        Premium, clear, and commercially useful rather than generic advice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </SectionShell>

      <SectionShell>
        <Reveal blur>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              Latest Articles
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Premium cards for design, SEO, content, and brand strategy insights.
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
