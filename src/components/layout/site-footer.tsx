import Link from "next/link";

import { navigationLinks } from "@/data/navigation";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/brand/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:px-8">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-sm text-sm leading-7 text-slate-300">{siteConfig.longDescription}</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            {siteConfig.socialLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
            Navigation
          </h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            {navigationLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
            Services
          </h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            {services.slice(0, 5).map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="transition hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
            Contact
          </h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            <Link href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
              {siteConfig.email}
            </Link>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.headquarters}</p>
            <Link href="/blog" className="transition hover:text-white">
              Insights & Journal
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} MJDM. Built for brands that do not blend in.</p>
          <p>Suggested sitemap includes core pages for services, work, blog, and conversion flows.</p>
        </div>
      </div>
    </footer>
  );
}
