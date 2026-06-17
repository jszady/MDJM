import Link from "next/link";

import { blogPosts } from "@/data/blog-posts";
import { hasArticlePage } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/motion/reveal";

const barColors = ["bg-[#e91e8c]", "bg-[#ffd700]", "bg-[#2563eb]"] as const;

export function BlogPreview() {
  return (
    <SectionShell>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Insights"
          title="Thoughtful content for brands that want more than surface-level marketing."
          description="The blog is structured to support SEO growth, authority building, and future editorial expansion."
        />
        <Link href="/blog" className="text-sm font-bold text-white transition-colors duration-200 hover:text-[#ffd700]">
          View journal
        </Link>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-[1.35fr_1fr_1fr]">
        {blogPosts.slice(0, 3).map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.08}>
            <Link
              href={hasArticlePage(post.slug) ? `/blog/${post.slug}` : "/blog"}
              className="theme-card group block h-full overflow-hidden rounded-xl transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className={`h-1 w-full ${barColors[index % barColors.length]}`} />
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#ffd700]">
                  {post.category}
                </div>
                <h3 className="mt-4 text-xl font-bold text-white transition-colors group-hover:text-[#ffd700] sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{post.excerpt}</p>
                <p className="mt-5 text-sm text-slate-500">{post.readTime}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
