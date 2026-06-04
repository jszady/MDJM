import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

import "./globals.css";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AmbientBackground } from "@/components/visuals/ambient-background";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mjdm.agency"),
  title: {
    default: "MJDM | Premium Web Design, Development & Growth Agency",
    template: "%s | MJDM"
  },
  description: siteConfig.longDescription,
  applicationName: "MJDM",
  category: "business",
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: "MJDM | Premium Web Design, Development & Growth Agency",
    description: siteConfig.longDescription,
    url: absoluteUrl("/"),
    siteName: "MJDM",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: absoluteUrl("/og-image.png"),
        width: 1200,
        height: 630,
        alt: "MJDM agency preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MJDM | Premium Web Design, Development & Growth Agency",
    description: siteConfig.longDescription,
    images: [absoluteUrl("/og-image.png")]
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MJDM",
  url: "https://www.mjdm.agency",
  logo: "https://www.mjdm.agency/icon.svg",
  description: siteConfig.longDescription,
  email: siteConfig.email,
  ...(siteConfig.socialLinks.length
    ? { sameAs: siteConfig.socialLinks.map((link) => link.href) }
    : {}),
  ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
  areaServed: ["United Kingdom", "United States", "Canada", "Worldwide"]
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="noise-overlay antialiased">
        <div className="relative min-h-screen overflow-hidden">
          <AmbientBackground />
          <div className="relative z-10">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </div>
        <Script
          id="mjdm-organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
