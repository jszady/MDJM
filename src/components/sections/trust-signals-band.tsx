import { Reveal } from "@/components/motion/reveal";
import { trustStats } from "@/data/trust-signals";

type TrustSignalsBandProps = {
  className?: string;
};

export function TrustSignalsBand({ className = "" }: TrustSignalsBandProps) {
  return (
    <section
      className={`relative border-y border-white/10 bg-slate-950/50 py-12 sm:py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal blur>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              Trusted by growing brands
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              Used by teams who need premium execution without agency theatre.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
              Feedback from business owners across legal, fitness, construction, and professional services.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
          {trustStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} blur>
              <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-6 text-center shadow-[0_16px_50px_rgba(5,10,30,0.35)]">
                <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/85">
                  {s.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
