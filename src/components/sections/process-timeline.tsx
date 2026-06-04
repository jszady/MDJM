import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/motion/reveal";

export function ProcessTimeline() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Process"
        title="A cleaner system from first call to long-term growth."
        description="The goal is not just a great launch. It is a digital presence with structure, consistency, and room to scale."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-5">
        {processSteps.map((item, index) => (
          <Reveal key={item.step} delay={index * 0.08} blur>
            <div className="section-surface relative h-full rounded-[1.9rem] p-6 transition duration-400 ease-out hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(34,211,238,0.08)]">
              <div className="mb-10 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-[0.25em] text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.08)]">
                {item.step}
              </div>
              <h3 className="text-[1.45rem] font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
