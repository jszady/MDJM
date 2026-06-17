type QuoteCalloutProps = {
  children: React.ReactNode;
  className?: string;
};

export function QuoteCallout({ children, className = "" }: QuoteCalloutProps) {
  return (
    <blockquote
      className={`relative my-10 overflow-hidden rounded-xl border border-white/10 bg-black px-6 py-6 sm:px-8 sm:py-7 ${className}`}
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-[#ffd700]" />
      <span
        className="absolute right-6 top-6 text-6xl font-serif leading-none text-[#ffd700]/15"
        aria-hidden
      >
        "
      </span>
      <p className="relative text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
        {children}
      </p>
    </blockquote>
  );
}
