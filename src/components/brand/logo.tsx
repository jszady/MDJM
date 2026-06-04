import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="MJDM home"
      className={cn(
        "inline-flex shrink-0 items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        className
      )}
    >
      <img
        src="/mjdm-logo-final.png"
        alt="MJDM"
        width={220}
        height={48}
        className="h-8 w-auto sm:h-12"
      />
    </Link>
  );
}

