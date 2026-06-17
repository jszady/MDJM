"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { blogCategories, blogPosts } from "@/data/blog-posts";
import { hasArticlePage } from "@/lib/blog";
import { accentBars } from "@/lib/theme";
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
                "rounded-xl border px-4 py-2 text-sm font-bold transition duration-200",
                activeCategory === category
                  ? "border-[#ffd700] bg-[#ffd700]/10 text-[#ffd700]"
                  : "border-white/10 bg-black text-slate-300 hover:border-[#2563eb]/50 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-black px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-slate-300">
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
                  "group theme-card relative h-full overflow-hidden rounded-xl transition duration-300 hover:border-[#ffd700]/30",
                  index === 0 && filteredPosts.length > 1 ? "xl:col-span-2" : ""
                )}
              >
                <div className={`h-1 w-full ${accentBars[index % accentBars.length]}`} />
                <div className="relative flex h-full flex-col p-6">
                  <header>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-lg border border-white/10 bg-black px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-[#ffd700]">
                        {post.category}
                      </span>
                      <span className="rounded-lg border border-white/10 bg-black px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-white transition duration-200 group-hover:text-[#ffd700] sm:text-[1.9rem]">
                      {post.title}
                    </h3>
                  </header>

                  <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                    {post.excerpt}
                  </p>

                  <footer className="mt-6 flex items-center justify-between border-t border-white/8 pt-5 text-sm text-slate-400">
                    <span>MJDM</span>
                    <span className="font-bold text-[#ffd700] transition duration-200 group-hover:text-white">
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
