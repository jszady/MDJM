import Link from "next/link";
import { Clapperboard, Globe, Megaphone } from "lucide-react";

const categories = [
  {
    id: "web",
    label: "Web",
    title: "Website builds & SEO",
    detail: "Starter, business, and e-commerce tiers plus ongoing hosting plans.",
    icon: Globe,
    color: "bg-[#e91e8c] text-white"
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    title: "Social & paid growth",
    detail: "Monthly retainers with video, posting, and ad spend included.",
    icon: Megaphone,
    color: "bg-[#ffd700] text-black"
  },
  {
    id: "realestate",
    label: "Real Estate Video",
    title: "Property & realtor packs",
    detail: "Listing videos, luxury homes, and monthly content retainers.",
    icon: Clapperboard,
    color: "bg-[#2563eb] text-[#ffd700]"
  }
] as const;

export function PackagesHeroAside() {
  return (
    <div className="grid gap-3">
      {categories.map((category) => {
        const Icon = category.icon;

        return (
          <Link
            key={category.id}
            href={`#${category.id}`}
            className="theme-card group flex items-start gap-4 rounded-xl p-4 transition duration-200 hover:border-[#ffd700]/30"
          >
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${category.color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#ffd700]">
                {category.label}
              </p>
              <p className="mt-1 font-bold text-white transition-colors duration-200 group-hover:text-[#ffd700]">
                {category.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-400">{category.detail}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export const packageSections = [
  { id: "web", label: "Web" },
  { id: "marketing", label: "Digital Marketing" },
  { id: "realestate", label: "Real Estate Video" }
] as const;
