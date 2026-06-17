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
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#ffd700] sm:mb-5">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="heading-lg max-w-none text-white sm:max-w-[16ch]">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-[42rem] text-base leading-8 text-slate-400 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
