import { industries } from "@/data/industries";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function IndustriesBand() {
  return (
    <SectionShell>
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
        <SectionHeading
          eyebrow="Who We Work With"
          title="Built for businesses that know weak digital presence costs real opportunities."
          description="From local service brands to firms that need authority online, MJDM is structured to support businesses that want stronger branding, better visibility, and cleaner execution."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-cyan-300/20 hover:bg-slate-950/85"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
