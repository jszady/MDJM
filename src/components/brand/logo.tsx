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
        "inline-flex shrink-0 items-center outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className
      )}
    >
      <img
        src="/new-logo.png"
        alt="MJDM"
        width={260}
        height={56}
        className="block h-9 w-auto max-w-none sm:h-10"
      />
    </Link>
  );
}
