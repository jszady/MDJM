import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-4 inline-flex max-w-full rounded-full border border-cyan-300/15 bg-cyan-300/8 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cyan-200/90 shadow-[0_0_30px_rgba(34,211,238,0.08)] sm:mb-5 sm:px-4 sm:py-2 sm:text-[0.68rem] sm:tracking-[0.35em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="heading-lg glow-text max-w-none text-white sm:max-w-[16ch]">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-[42rem] text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
