import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";

type CtaBannerProps = {
  title: string;
  description: string;
};

export function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <SectionShell>
      <div className="theme-card rounded-xl p-6 sm:p-10 lg:p-12">
        <div className="h-1 w-16 bg-[#e91e8c]" />
        <div className="mt-6 flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ffd700]">
              Start Stronger
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-lg">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <ButtonLink href="/contact" arrow className="w-full justify-center sm:w-auto">
              Start a Project
            </ButtonLink>
            <ButtonLink href="mailto:info@mjdm.io" variant="secondary" className="w-full justify-center sm:w-auto">
              Email MJDM
            </ButtonLink>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
