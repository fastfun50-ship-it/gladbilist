"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { HEADER_OFFSET } from "@/lib/scroll";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.0010000000000001 * (-Math.pow(2, -10 * t) + 1)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expose for debugging / advanced GSAP integration if needed
    (window as any).__lenis = lenis;

    // Handle initial hash navigation (e.g. /#holdstart) after Lenis is ready
    if (typeof window !== "undefined" && window.location.hash) {
      setTimeout(() => {
        const target = window.location.hash;
        lenis.scrollTo(target, {
          offset: -HEADER_OFFSET,
          duration: 1.0,
        });
      }, 300);
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
