import { Reveal } from "@/components/motion/reveal";
import { trustQuotes, trustStats } from "@/data/trust-signals";

type TrustSignalsBandProps = {
  className?: string;
};

export function TrustSignalsBand({ className = "" }: TrustSignalsBandProps) {
  return (
    <section
      className={`relative border-y border-white/10 bg-slate-950/50 py-16 sm:py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal blur>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              Trusted by growing brands
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Used by teams who need premium execution without agency theatre.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
              A sample of anonymised feedback from marketing and operations leaders we work with across
              professional services, B2B, and multi-location brands.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
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

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {trustQuotes.map((t, i) => (
            <Reveal key={t.attribution} delay={0.1 + i * 0.06} blur>
              <blockquote className="h-full rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6 shadow-[0_16px_50px_rgba(5,10,30,0.3)]">
                <p className="text-base leading-8 text-slate-200">“{t.quote}”</p>
                <footer className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                  {t.attribution}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
