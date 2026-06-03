"use client";

declare global {
  interface Window {
    __lenis?: any;
  }
}

/**
 * Smooth scroll to a section with proper offset for sticky navbar (h-20 = 80px).
 * Uses Lenis when available for buttery smooth experience.
 */
export const HEADER_OFFSET = 80;

export function scrollToSection(href: string, offset = HEADER_OFFSET) {
  if (!href.startsWith("#")) {
    window.location.href = href;
    return;
  }

  const target = href;

  // Try Lenis first for best experience
  const lenis = window.__lenis;
  if (lenis && typeof lenis.scrollTo === "function") {
    // Lenis scrollTo can take selector or element
    // We use negative offset because Lenis offset moves the target up
    lenis.scrollTo(target, {
      offset: -offset,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.0010000000000001 * (-Math.pow(2, -10 * t) + 1)),
    });
    return;
  }

  // Fallback to native smooth scroll with offset calculation
  const el = document.querySelector(target);
  if (!el) return;

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition - bodyRect - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
