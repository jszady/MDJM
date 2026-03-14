import {
  Code2,
  Film,
  LayoutTemplate,
  Megaphone,
  MonitorPlay,
  PenSquare,
  Search,
  Share2
} from "lucide-react";

export const services = [
  {
    slug: "web-design",
    title: "Web Design",
    short: "Sharp, premium interfaces built to earn trust in seconds.",
    description:
      "We design conversion-first websites that look world-class, feel modern, and give your brand a clear edge.",
    benefits: [
      "Premium visual direction tailored to your market",
      "Clear messaging hierarchy and conversion-focused UX",
      "Responsive systems that keep the site strong on every screen"
    ],
    icon: LayoutTemplate
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Fast, scalable builds with clean code and modern motion.",
    description:
      "From marketing sites to high-impact landing pages, we build polished digital experiences that are quick, maintainable, and ready to grow.",
    benefits: [
      "Modern front-end architecture and performant builds",
      "Reusable sections and CMS-ready thinking",
      "SEO-friendly structure and technical best practices"
    ],
    icon: Code2
  },
  {
    slug: "seo",
    title: "SEO",
    short: "Search visibility that compounds over time.",
    description:
      "We structure your site and content to improve discoverability, strengthen authority, and bring in qualified traffic.",
    benefits: [
      "Technical and on-page SEO foundations",
      "Keyword-led content planning",
      "Local and service-based visibility improvements"
    ],
    icon: Search
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    short: "Consistent social presence without inconsistent execution.",
    description:
      "We manage planning, content calendars, posting, and brand consistency so your channels stay active, sharp, and relevant.",
    benefits: [
      "Platform-specific planning and cadence",
      "Branded content direction and account management",
      "Clearer consistency across Instagram, LinkedIn, TikTok, and more"
    ],
    icon: Share2
  },
  {
    slug: "social-media-advertising",
    title: "Social Media Advertising",
    short: "Paid campaigns engineered for reach, leads, and revenue.",
    description:
      "We create ad systems that pair strong visuals with sharper targeting to drive inquiries, bookings, and sales.",
    benefits: [
      "Funnel-aware campaign strategy",
      "Creative testing and audience refinement",
      "Performance reporting focused on business outcomes"
    ],
    icon: Megaphone
  },
  {
    slug: "reels-video-production",
    title: "Reels / Video Production",
    short: "Short-form creative that stops the scroll and carries the brand.",
    description:
      "We plan and shoot content built for modern attention spans, platform behavior, and stronger brand recall.",
    benefits: [
      "Concept development and shot planning",
      "Content designed for social-first performance",
      "Creative built to feel premium, not generic"
    ],
    icon: MonitorPlay
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    short: "Tighter edits, stronger pacing, cleaner brand storytelling.",
    description:
      "We turn raw footage into polished assets that hold attention, reinforce your positioning, and elevate output quality.",
    benefits: [
      "Modern pacing, transitions, and graphics",
      "Platform-aware cuts for short and long form",
      "Branded delivery with consistent visual language"
    ],
    icon: Film
  },
  {
    slug: "content-posting-account-management",
    title: "Content Posting / Account Management",
    short: "Operational support that keeps your brand visible.",
    description:
      "We handle uploads, scheduling, captions, and account upkeep so the execution matches the strategy.",
    benefits: [
      "Reliable posting workflows",
      "Captioning, uploads, and account hygiene",
      "A cleaner system for staying visible week after week"
    ],
    icon: PenSquare
  }
] as const;
