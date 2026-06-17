type HighlightPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function HighlightPanel({ children, className = "" }: HighlightPanelProps) {
  return (
    <div
      className={`relative my-10 overflow-hidden rounded-[1.5rem] border border-yellow-400/20 bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-6 py-6 shadow-[0_0_30px_rgba(255,215,0,0.06)] backdrop-blur-md sm:px-8 sm:py-7 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_50%)]" />
      <div className="relative text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">
        {children}
      </div>
    </div>
  );
}
