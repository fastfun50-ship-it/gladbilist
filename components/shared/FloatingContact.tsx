"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function FloatingContact() {
  return (
    <a
      href={siteConfig.phoneHref}
      className="fixed bottom-4 left-4 z-[55] md:hidden flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur border border-border shadow-xl pl-1.5 pr-5 py-1.5 active:scale-[0.985] transition-all hover:border-primary/40"
      aria-label={`Ring til Morten på ${siteConfig.phone}`}
    >
      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white shadow-sm">
        <Phone className="h-5 w-5" />
      </div>
      <div className="flex flex-col leading-none -mt-0.5">
        <span className="text-[10px] text-muted-foreground tracking-tight">Ring direkte</span>
        <span className="font-semibold text-[15px] tabular-nums tracking-[-0.3px] text-foreground">
          {siteConfig.phone}
        </span>
      </div>
    </a>
  );
}
