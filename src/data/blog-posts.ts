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
      "Web design costs in Canada explained for 2026: what drives quotes, typical budgets for Toronto service brands, and how to get real value. Practical guide from MJDM.",
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
      "Start SEO the right way: technical basics, on-page priorities, and what service businesses should fix first. Clear 2026 guidance from MJDM—learn more.",
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
      "SMB social that works: cadence, content pillars, platforms, and measurement without vanity metrics. Practical social guidance from MJDM—read more.",
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
      "First impressions form in under a second. Learn how modern design, speed, and layout earn trust before a conversation starts — and what to fix on your site.",
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
      "If your site is invisible in search, your pipeline suffers. This guide covers the SEO foundations every service business must have to rank and convert.",
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
      "Reels and short-form video aren't just for awareness — they can generate direct inquiries. Here's how to use them strategically for your service business.",
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
      "Premium brand perception is built, not born. Learn how visual clarity, consistency, and smart design choices make your business look high-end online.",
    category: "Branding",
    readTime: "7 min read",
    featured: false,
    author: "MJDM Team"
  }
];

export const blogCategories = ["All", "Web Design", "SEO", "Social Media", "Branding"];
