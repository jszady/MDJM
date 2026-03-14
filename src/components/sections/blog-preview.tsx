import Link from "next/link";

import { blogPosts } from "@/data/blog-posts";
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
        <Link href="/blog" className="text-sm font-semibold text-white transition hover:text-cyan-300">
          View journal
        </Link>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_1fr_1fr]">
        {blogPosts.slice(0, 3).map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.08}>
            <Link
              href="/blog"
              className="group block h-full rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                {post.category}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white transition group-hover:text-cyan-300">
                {post.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{post.excerpt}</p>
              <p className="mt-6 text-sm text-slate-400">{post.readTime}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
