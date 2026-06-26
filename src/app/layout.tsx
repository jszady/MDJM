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
  metadataBase: new URL("https://www.mjdm.io"),
  title: {
    default: "MJDM | Premium Web Design, Development & Growth Agency",
    template: "%s | MJDM"
  },
  description: siteConfig.longDescription,
  applicationName: "MJDM",
  category: "business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: "MJDM | Premium Web Design, Development & Growth Agency",
    description: siteConfig.longDescription,
    url: absoluteUrl("/"),
    siteName: "MJDM",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "MJDM — Premium Web Design, Development & Growth Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MJDM | Premium Web Design, Development & Growth Agency",
    description: siteConfig.longDescription,
    images: [absoluteUrl("/opengraph-image")]
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MJDM",
  url: "https://www.mjdm.io",
  logo: "https://www.mjdm.io/new-logo.png",
  description: siteConfig.longDescription,
  email: siteConfig.email,
  ...(siteConfig.socialLinks.length
    ? { sameAs: siteConfig.socialLinks.map((link) => link.href) }
    : {}),
  ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
  address: {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "Ontario",
    "addressCountry": "CA"
  },
  areaServed: ["Toronto", "Canada", "United States", "Worldwide"]
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-CA">
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
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18273217314"
        />
        <Script
          id="google-tag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18273217314');
            `
          }}
        />
      </body>
    </html>
  );
}
