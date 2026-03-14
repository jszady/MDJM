"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navigationLinks } from "@/data/navigation";
import { Logo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-xl shadow-[0_10px_50px_rgba(5,10,30,0.45)]">
        <div className="flex items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href="/contact" variant="secondary">
              Send Inquiry
            </ButtonLink>
            <ButtonLink href="mailto:hello@mjdm.agency" arrow>
              Book a Call
            </ButtonLink>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col gap-4 px-1 pb-2 pt-5">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  <ButtonLink href="/contact" variant="secondary">
                    Send Inquiry
                  </ButtonLink>
                  <ButtonLink href="mailto:hello@mjdm.agency" arrow>
                    Book a Call
                  </ButtonLink>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
