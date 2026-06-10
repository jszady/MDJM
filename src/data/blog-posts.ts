export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Optional SEO title (layout appends "| MJDM"). */
  metaTitle?: string;
  /** Optional meta description (140–155 chars recommended). */
  metaDescription?: string;
  category: string;
  readTime: string;
  featured?: boolean;
  /** Editorial byline; shown on article pages and in BlogPosting schema. */
  author?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-web-design-cost-in-canada-2026-guide",
    title: "How Much Does Web Design Cost in Canada? (2026 Guide)",
    excerpt:
      "A practical guide to Canadian web design pricing: what drives quotes, realistic budgets for service brands in Toronto and beyond, and how to compare agencies without paying for hidden gaps.",
    metaTitle: "Web Design Costs in Canada 2026 — What Toronto Service Brands Pay",
    metaDescription:
      "A practical guide to Canadian web design pricing in 2026. Learn what Toronto service businesses pay for template sites, custom builds, and full-service retainers.",
    category: "Web Design",
    readTime: "11 min read",
    featured: true,
    author: "MJDM Team"
  },
  {
    slug: "seo-for-service-businesses-where-to-start",
    title: "SEO for Service Businesses: Where to Start",
    excerpt:
      "A clear starting roadmap for service firms: fix technical foundations, map intent to pages, publish proof-led content, and measure pipeline—not vanity rankings.",
    metaTitle: "SEO for Service Businesses — Where to Start in 2026",
    metaDescription:
      "A step-by-step SEO starting guide for Toronto service businesses. Learn how to fix crawlability, map keywords to intent, and measure what moves pipeline.",
    category: "SEO",
    readTime: "10 min read",
    featured: false,
    author: "MJDM Team"
  },
  {
    slug: "social-media-management-for-small-businesses-what-actually-works",
    title: "Social Media Management for Small Businesses: What Actually Works",
    excerpt:
      "SMB social that survives busy weeks: fewer channels, strong pillars, operational rigour, and metrics tied to inquiries—not follower counts.",
    metaTitle: "SMB Social Media Management — What Actually Works",
    metaDescription:
      "What actually works for small business social media in 2026. A practical guide to channel focus, content pillars, and measuring social ROI for Toronto SMBs.",
    category: "Social Media",
    readTime: "10 min read",
    featured: false,
    author: "MJDM Team"
  },
  {
    slug: "why-modern-web-design-still-wins-trust-fast",
    title: "Why Modern Web Design Still Wins Trust Fast",
    excerpt:
      "First impressions happen in seconds. Here is how premium design, speed, and structure shape credibility before a conversation even starts.",
    metaTitle: "Why Modern Web Design Still Wins Trust Fast — MJDM Insights",
    metaDescription:
      "First impressions happen in seconds. Learn why modern web design is still the fastest trust signal for service businesses and what design choices build credibility.",
    category: "Web Design",
    readTime: "5 min read",
    featured: false,
    author: "MJDM Team"
  },
  {
    slug: "seo-foundations-every-service-business-needs",
    title: "SEO Foundations Every Service Business Needs",
    excerpt:
      "If your website is invisible in search, your sales pipeline is thinner than it should be. Start with the fundamentals that actually move rankings.",
    metaTitle: "SEO Foundations Every Service Business Needs — MJDM Guide",
    metaDescription:
      "The SEO fundamentals every Toronto service business needs before chasing rankings. Technical fixes, page structure, and the signals Google actually cares about.",
    category: "SEO",
    readTime: "6 min read",
    featured: false,
    author: "MJDM Team"
  },
  {
    slug: "short-form-content-turns-attention-into-inquiries",
    title: "How Short-Form Content Turns Attention Into Inquiries",
    excerpt:
      "Reels and social video are not just for awareness. With the right strategy they can warm up leads and create direct demand.",
    metaTitle: "How Short-Form Content Turns Attention Into Inquiries — MJDM",
    metaDescription:
      "Reels and short-form video aren't just for awareness. Learn how Toronto service businesses use short-form content to move viewers from attention to booked inquiry.",
    category: "Social Media",
    readTime: "4 min read",
    featured: false,
    author: "MJDM Team"
  },
  {
    slug: "building-a-brand-that-looks-expensive-online",
    title: "Building a Brand That Looks Expensive Online",
    excerpt:
      "Premium positioning is not luck. It is the product of visual clarity, consistency, and how your digital presence makes people feel.",
    metaTitle: "Building a Brand That Looks Expensive Online — MJDM Insights",
    metaDescription:
      "Premium positioning is not luck. Learn the visual clarity, consistency, and digital presence decisions that make a Toronto business look credible and worth hiring.",
    category: "Branding",
    readTime: "7 min read",
    featured: false,
    author: "MJDM Team"
  }
];

export const blogCategories = ["All", "Web Design", "SEO", "Social Media", "Branding"];
