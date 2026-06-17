import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/motion/reveal";

const stepColors = ["text-[#e91e8c]", "text-[#ffd700]", "text-[#2563eb]", "text-[#e91e8c]", "text-[#ffd700]"] as const;

export function ProcessTimeline() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Process"
        title="A cleaner system from first call to long-term growth."
        description="The goal is not just a great launch. It is a digital presence with structure, consistency, and room to scale."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-5">
        {processSteps.map((item, index) => (
          <Reveal key={item.step} delay={index * 0.08} blur>
            <div className="theme-card h-full rounded-xl p-5 sm:p-6">
              <p className={`text-xs font-bold uppercase tracking-[0.25em] ${stepColors[index % stepColors.length]}`}>
                {item.step}
              </p>
              <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
