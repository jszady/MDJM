import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/motion/reveal";

const reasons = [
  "Modern visual execution that makes brands look sharper from the first impression.",
  "Strategy and creativity working together instead of as separate services.",
  "Web, content, and platform management handled under one agency partner.",
  "Design systems and messaging choices built to convert, not just decorate.",
  "A consistent brand presence across website, content, paid campaigns, and social channels."
];

export function WhyMjdm() {
  return (
    <SectionShell>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="Why MJDM"
          title="A modern agency for businesses that want stronger presence and better execution."
          description="MJDM is built for brands that do not want fragmented freelancers, generic templates, or disconnected creative decisions."
        />

        <div className="grid gap-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason} delay={index * 0.06} direction="right" blur>
              <div className="section-surface rounded-[1.7rem] px-5 py-5 text-slate-200">
                <span className="mr-3 inline-block min-w-8 text-cyan-300">0{index + 1}</span>
                {reason}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
