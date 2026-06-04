import Link from "next/link";

import { blogPosts } from "@/data/blog-posts";
import { hasArticlePage } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/motion/reveal";

export function BlogPreview() {
  return (
    <SectionShell>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Insights"
          title="Thoughtful content for brands that want more than surface-level marketing."
          description="The blog is structured to support SEO growth, authority building, and future editorial expansion."
        />
        <Link href="/blog" className="text-sm font-semibold text-white transition duration-300 hover:text-cyan-300">
          View journal
        </Link>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_1fr_1fr]">
        {blogPosts.slice(0, 3).map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.08}>
            <Link
              href={hasArticlePage(post.slug) ? `/blog/${post.slug}` : "/blog"}
              className="group block h-full rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition duration-400 ease-out hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(103,232,249,0.06)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                {post.category}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white transition group-hover:text-cyan-300">
                {post.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{post.excerpt}</p>
              <p className="mt-6 text-sm text-slate-400">{post.readTime}</p>
              {post.author ? (
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{post.author}</p>
              ) : null}
            </Link>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
