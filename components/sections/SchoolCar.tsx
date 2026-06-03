import React from "react";
import { siteConfig } from "@/data/siteConfig";

export function SchoolCar() {
  const { schoolCar } = siteConfig;

  return (
    <section id="skolevogn" className="section border-b bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl border">
            <img
              src={schoolCar.image}
              alt={`${schoolCar.car.model} – Gladbilist skolevogn`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-xs tracking-[2px] opacity-75">MODERNE ELBIL</div>
              <div className="text-2xl font-medium tracking-tight">{schoolCar.car.model}</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="badge mb-3">KØRESKOLENS BILER</div>
            <h2 className="heading-lg mb-2 tracking-tighter">{schoolCar.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">{schoolCar.subtitle}</p>

            <div className="mb-8">
              <div className="font-semibold text-lg tracking-tight">
                {schoolCar.car.model} <span className="font-normal text-muted-foreground">– {schoolCar.car.spec}</span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {schoolCar.car.description}
              </p>
            </div>

            <div>
              <div className="text-sm font-medium mb-3 tracking-widest text-muted-foreground">AVANCEREDE FUNKTIONER</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {schoolCar.car.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-primary">✓</span> {f}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-xs text-muted-foreground border-l-2 pl-3 border-primary/60">
              {schoolCar.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
