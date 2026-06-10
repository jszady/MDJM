import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/utils";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  openGraphType?: "website" | "article";
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  openGraphType = "website"
}: MetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: absoluteUrl(path)
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: "MJDM",
      locale: "en_CA",
      type: openGraphType,
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
      title,
      description,
      images: [absoluteUrl("/opengraph-image")]
    }
  };
}
