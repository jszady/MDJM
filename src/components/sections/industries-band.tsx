import { industries } from "@/data/industries";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function IndustriesBand() {
  return (
    <SectionShell>
      <div className="theme-card rounded-xl p-6 sm:p-10">
        <SectionHeading
          eyebrow="Who We Work With"
          title="Built for businesses that know weak digital presence costs real opportunities."
          description="From local service brands to firms that need authority online, MJDM is structured to support businesses that want stronger branding, better visibility, and cleaner execution."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-lg border border-white/10 bg-black px-3 py-2 text-sm text-slate-300 transition-colors duration-200 hover:border-[#ffd700]/40 hover:text-white"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
