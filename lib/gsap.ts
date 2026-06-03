"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Small helper to use GSAP + ScrollTrigger safely in client components.
 * Call once in a top level component or layout effect if needed.
 */
export function useGSAP() {
  useEffect(() => {
    // Any global GSAP config can go here
    ScrollTrigger.refresh();
  }, []);
}
