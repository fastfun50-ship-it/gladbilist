"use client";

import React, { useEffect, useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
import { CTAButton } from "@/components/shared/CTAButton";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant staggered entrance
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.15,
        }
      );

      // Subtle image parallax on load (very light)
      gsap.to(".hero-bg", {
        scale: 1.03,
        duration: 18,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const { hero, stats } = siteConfig;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#050505] text-white"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.background}
          alt="Gladbilist køreskole baggrund"
          className="hero-bg absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.6px,transparent_1px)] bg-[length:5px_5px] opacity-[0.035]" />
      </div>

      <div className="container relative z-10 pt-16 pb-20 md:pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow / location */}
          <div className="hero-reveal mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs tracking-[2px] backdrop-blur">
            {hero.eyebrow}
          </div>

          {/* Main headline */}
          <h1 className="hero-reveal heading-xl text-white mb-6 whitespace-pre-line leading-[0.92] tracking-[-3.5px]">
            {hero.headline}
          </h1>

          {/* Sub */}
          <p className="hero-reveal mx-auto max-w-2xl text-xl md:text-2xl text-white/90 font-light tracking-tight mb-10">
            {hero.subheadline}
          </p>

          {/* Trust line */}
          <div className="hero-reveal mb-9">
            <span className="inline-block rounded-full border border-white/30 bg-white/5 px-5 py-1 text-sm backdrop-blur">
              {hero.trustLine}
            </span>
          </div>

          {/* CTAs */}
          <div className="hero-reveal flex flex-col sm:flex-row items-center justify-center gap-4">
            {hero.ctas.map((cta, i) => (
              <CTAButton
                key={i}
                href={cta.href}
                variant={cta.variant}
                external={!!(cta as any).external}
                className="w-full sm:w-auto text-base"
              >
                {cta.label}
              </CTAButton>
            ))}
          </div>

          {/* Small trust images + stats row */}
          <div className="hero-reveal mt-14 flex flex-col items-center gap-6">
            <div className="flex -space-x-3">
              {hero.smallImages.map((src, idx) => (
                <div key={idx} className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/70">
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
              <div className="ml-4 flex items-center text-xs text-white/70">
                + mange glade elever på Fyn
              </div>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-white/90 text-sm">
              {stats.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="flex items-baseline gap-2">
                  <span className="font-semibold tabular-nums text-white">{stat.number}</span>
                  <span className="text-white/60 text-xs tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block text-[10px] tracking-[3px] text-white/50">
        SCROLL FOR AT SE MERE
      </div>
    </section>
  );
}
