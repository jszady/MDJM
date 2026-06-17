import Link from "next/link";

import { services } from "@/data/services";
import { iconStyles } from "@/lib/theme";

const featuredServices = services.slice(0, 4);

export function ServicesHeroAside() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {featuredServices.map((service, index) => {
        const Icon = service.icon;

        return (
          <Link
            key={service.slug}
            href={`#${service.slug}`}
            className="theme-card group flex items-start gap-3 rounded-xl p-4 transition duration-200 hover:border-[#ffd700]/30"
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconStyles[index % iconStyles.length]}`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-white transition-colors duration-200 group-hover:text-[#ffd700]">
                {service.title}
              </p>
              <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-400">{service.short}</p>
            </div>
          </Link>
        );
      })}
      <div className="theme-card flex flex-col justify-center rounded-xl border-dashed p-4 sm:col-span-2">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ffd700]">+4 more</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Video, ads, content ops, and more — scroll to explore the full stack.
        </p>
      </div>
    </div>
  );
}
