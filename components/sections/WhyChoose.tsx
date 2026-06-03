"use client";

import React, { useEffect, useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as LucideIcons from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);
  const { whyChoose, stats } = siteConfig;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for the 4 value cards
      gsap.fromTo(
        ".why-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hvorfor" ref={sectionRef} className="section bg-white border-b">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <div className="badge mb-3">KERNEVÆRDIER</div>
          <h2 className="heading-lg tracking-tight mb-4">Hvorfor vælge mig?</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Sikkerhed, personlighed og høj kvalitet er ikke tilvalg – det er fundamentet.
          </p>
        </div>

        {/* Top 4 bullets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {whyChoose.introBullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-3 rounded-2xl border bg-card p-4 sm:p-5 text-sm">
              <div className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* Deep 4 sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChoose.sections.map((sec, index) => {
            const Icon = (LucideIcons as any)[sec.icon] || LucideIcons.Star;
            return (
              <div
                key={index}
                className="why-card group rounded-3xl border bg-card p-6 sm:p-8 flex flex-col hover:border-primary/30 transition-colors"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-medium tracking-tight mb-4">{sec.title}</h3>
                <div className="prose prose-neutral text-[15px] text-muted-foreground space-y-4">
                  {sec.text.split("\n\n").map((para, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/GULDHOLD/g, '<span class="goldhold">GULDHOLD</span>') }} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px rounded-3xl bg-border overflow-hidden">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat bg-card">
              <div className={`stat-number text-primary ${stat.number === 'GULDHOLD' ? 'goldhold tracking-normal' : ''}`}>{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
