export type SiteConfig = {
  name: string;
  shortDescription: string;
  longDescription: string;
  email: string;
  /** Verified business number only; omit until real NAP exists. */
  phone?: string;
  /** WhatsApp number in E.164 format (digits only, no spaces or dashes). */
  whatsappNumber?: string;
  headquarters: string;
  address?: string[];
  businessHours?: string[];
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
  email: "info@mjdm.io",
  whatsappNumber: "16478875823",
  headquarters: "Toronto, Ontario, Canada",
  address: ["6375 Dixie Rd Suite 201", "Mississauga, ON L5T 2E7"],
  businessHours: ["Monday – Friday: 9:00 AM – 5:00 PM EST", "Saturday – Sunday: Closed"],
  bookingUrl: "https://wa.me/16478875823?text=Hi%20MJDM%2C%20I%27d%20like%20to%20book%20a%20strategy%20call.",
  socialLinks: [],
  sitemap: ["/", "/services", "/packages", "/work", "/about", "/blog", "/contact"]
};
