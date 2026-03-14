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
        <p className="mb-5 inline-flex rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-cyan-200/90 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="heading-lg glow-text max-w-[16ch] text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-[42rem] text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
