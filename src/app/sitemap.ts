import type { MetadataRoute } from "next";

import { blogArticleDates } from "@/data/blog-content";
import { blogPosts } from "@/data/blog-posts";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

function lastModifiedForBlogSlug(slug: string): Date {
  const display = blogArticleDates[slug];
  if (!display) return new Date();
  const parsed = new Date(display);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = siteConfig.sitemap.map((path) => ({
    url: `https://www.mjdm.io${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `https://www.mjdm.io/blog/${post.slug}`,
    lastModified: lastModifiedForBlogSlug(post.slug),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `https://www.mjdm.io/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85
  }));

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
