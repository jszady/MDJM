import { Reveal } from "@/components/motion/reveal";
import { trustStats } from "@/data/trust-signals";

type TrustSignalsBandProps = {
  className?: string;
};

const labelColors = ["text-[#e91e8c]", "text-[#ffd700]", "text-[#2563eb]"] as const;

export function TrustSignalsBand({ className = "" }: TrustSignalsBandProps) {
  return (
    <section className={`border-y border-white/10 bg-black py-12 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal blur>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ffd700]">
              Trusted by growing brands
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Used by teams who need premium execution without agency theatre.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
              Feedback from business owners across legal, fitness, construction, and professional services.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">
          {trustStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} blur>
              <div className="theme-card h-full rounded-xl px-5 py-6 text-center">
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{s.value}</p>
                <p className={`mt-2 text-sm font-bold uppercase tracking-[0.2em] ${labelColors[i % labelColors.length]}`}>
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
