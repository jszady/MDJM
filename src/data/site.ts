export type SiteConfig = {
  name: string;
  shortDescription: string;
  longDescription: string;
  email: string;
  /** Verified business number only; omit until real NAP exists. */
  phone?: string;
  headquarters: string;
  bookingUrl: string;
  /** Verified profile URLs only; empty omits sameAs in Organization schema and footer links. */
  socialLinks: { label: string; href: string }[];
  sitemap: string[];
};

export const siteConfig: SiteConfig = {
  name: "MJDM",
  shortDescription:
    "MJDM builds bold websites, sharper brands, and high-performance digital campaigns for ambitious businesses.",
  longDescription:
    "MJDM is a modern marketing and digital agency delivering premium web design, development, SEO, content production, and social media growth systems for businesses ready to stand out.",
  email: "hello@mjdm.agency",
  headquarters: "Working with clients across the UK, Canada, the US, and beyond",
  bookingUrl: "mailto:hello@mjdm.agency?subject=Book%20a%20strategy%20call",
  socialLinks: [],
  sitemap: ["/", "/services", "/work", "/about", "/blog", "/contact"]
};
