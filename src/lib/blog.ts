import { blogPosts } from "@/data/blog-posts";
import { blogArticleDates, blogContent } from "@/data/blog-content";
import type { ContentBlock } from "@/data/blog-content";

export type BlogPost = (typeof blogPosts)[number];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function hasArticlePage(slug: string): boolean {
  return slug in blogContent;
}

export function getArticleContent(slug: string): ContentBlock[] | undefined {
  return blogContent[slug];
}

export function getArticlePublishedAt(slug: string): string | undefined {
  return blogArticleDates[slug];
}

/** ISO 8601 for structured data; undefined if date missing or unparsable. */
export function getArticlePublishedIso(slug: string): string | undefined {
  const raw = blogArticleDates[slug];
  if (!raw) return undefined;
  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}
