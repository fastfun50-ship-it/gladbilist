"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { CTAButton } from "@/components/shared/CTAButton";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="om" className="section bg-[#fafafa] border-b">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 items-start">
          {/* Text content */}
          <div className="lg:col-span-7">
            <div className="badge mb-4">PERSONLIGT</div>
            <h2 className="heading-lg mb-6 tracking-tight">{about.title}</h2>

            <div className="text-lg sm:text-xl font-light text-foreground mb-8">
              Jeg hedder <span className="font-medium">{about.name}</span>. {about.experience}
            </div>

            <div className="prose prose-neutral max-w-none text-[15.2px] leading-relaxed space-y-5 text-muted-foreground">
              {about.philosophy.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Location box */}
            <div className="mt-10 rounded-2xl border bg-white p-7">
              <div className="font-semibold mb-3 tracking-tight">{about.location.title}</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {about.location.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <CTAButton href={about.cta.href} variant="primary" external>
                {about.cta.label}
              </CTAButton>
            </div>
          </div>

          {/* Image gallery – elegant 3 images */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-3">
              {about.images.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[16/10] overflow-hidden rounded-2xl border bg-zinc-100 shadow-sm"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-xs font-medium tracking-widest text-white/90">
                    {img.alt}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Personlige billeder fra hverdagen i køreskolen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
