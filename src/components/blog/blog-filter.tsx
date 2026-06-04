"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { blogCategories, blogPosts } from "@/data/blog-posts";
import { hasArticlePage } from "@/lib/blog";
import { cn } from "@/lib/utils";

export function BlogFilter() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return blogPosts;
    }

    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-3">
          {blogCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition duration-300",
                activeCategory === category
                  ? "border-cyan-300/50 bg-cyan-300/12 text-white shadow-[0_0_28px_rgba(103,232,249,0.14)]"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-fuchsia-400/30 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
          {filteredPosts.length} Article{filteredPosts.length === 1 ? "" : "s"}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.map((post, index) => {
          const href = hasArticlePage(post.slug)
            ? `/blog/${post.slug}`
            : "/blog";

          return (
            <Link key={post.slug} href={href} className="block h-full">
              <article
                className={cn(
                  "group section-surface noise-overlay relative h-full overflow-hidden rounded-[1.85rem] p-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_0_36px_rgba(103,232,249,0.06)]",
                  index === 0 && filteredPosts.length > 1 ? "xl:col-span-2" : ""
                )}
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-fuchsia-500/16" />
                <div className="relative flex h-full flex-col">
                  <header>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                        {post.category}
                      </span>
                      <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white transition duration-300 group-hover:text-cyan-200 sm:text-[1.9rem]">
                      {post.title}
                    </h3>
                  </header>

                  <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.3rem] border border-white/10 bg-slate-950/70 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Content Angle
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-200">
                        Built to support premium positioning and discoverability.
                      </p>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/10 bg-slate-950/70 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Status
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-200">
                        {hasArticlePage(post.slug)
                          ? "Full article available"
                          : "Read the summary on this page."}
                      </p>
                    </div>
                  </div>

                  <footer className="mt-6 flex items-center justify-between border-t border-white/8 pt-5 text-sm text-slate-400">
                    <span>MJDM</span>
                    <span className="text-cyan-200/80 transition duration-300 group-hover:text-cyan-200">
                      {hasArticlePage(post.slug) ? "Read article →" : "Overview"}
                    </span>
                  </footer>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
