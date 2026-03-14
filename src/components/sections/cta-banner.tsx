import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";

type CtaBannerProps = {
  title: string;
  description: string;
};

export function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <SectionShell>
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(17,24,39,0.98),rgba(37,99,235,0.14),rgba(168,85,247,0.18))] p-8 shadow-[0_30px_100px_rgba(8,12,30,0.55)] sm:p-10 lg:p-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              Start Stronger
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-200/90 sm:text-lg">{description}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/contact" arrow>
              Start a Project
            </ButtonLink>
            <ButtonLink href="mailto:hello@mjdm.agency" variant="secondary">
              Email MJDM
            </ButtonLink>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
