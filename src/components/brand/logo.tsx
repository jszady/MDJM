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
      className={cn("inline-flex items-center gap-3 text-white", className)}
    >
      <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(95,75,255,0.22)]">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.55),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(217,70,239,0.45),_transparent_50%)]" />
        <span className="relative text-sm font-black tracking-[0.26em]">MJ</span>
      </span>
      <span className="text-sm font-semibold tracking-[0.4em] text-white/90">MJDM</span>
    </Link>
  );
}
