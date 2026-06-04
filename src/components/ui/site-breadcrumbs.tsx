import Link from "next/link";

import { absoluteUrl } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href: string;
  /** When true, label is shown without a link (current page). */
  current?: boolean;
};

type SiteBreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

/**
 * Visible breadcrumb trail + BreadcrumbList JSON-LD for SEO.
 */
export function SiteBreadcrumbs({ items, className = "" }: SiteBreadcrumbsProps) {
  if (!items.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: absoluteUrl(item.href)
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={`text-sm text-slate-400 ${className}`}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, i) => (
            <li key={`${i}-${item.label}`} className="flex items-center gap-2">
              {i > 0 ? (
                <span className="text-slate-600" aria-hidden>
                  /
                </span>
              ) : null}
              {item.current ? (
                <span
                  className="max-w-[min(100%,52ch)] truncate font-medium text-slate-200"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="font-medium text-cyan-300/90 transition hover:text-cyan-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
