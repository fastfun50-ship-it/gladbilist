import React from "react";
import { siteConfig } from "@/data/siteConfig";

export function Prices() {
  const { prices } = siteConfig;

  return (
    <section id="priser" className="section bg-[#fafafa] border-b">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <div className="badge mb-3">TRANSPARENTE PRISER</div>
          <h2 className="heading-lg tracking-tight mb-3">Priser</h2>
          <p className="text-lg text-muted-foreground">{prices.intro}</p>
        </div>

        {/* Main Lovpakke */}
        <div className="price-card-featured mb-8">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <div className="uppercase tracking-[1.5px] text-xs text-primary font-semibold">LOVPAKKEN</div>
              <div className="text-3xl font-medium tracking-tighter mt-1">{prices.mainPackage.title}</div>
            </div>
            <div className="text-right">
              <div className="text-4xl sm:text-5xl font-semibold tabular-nums tracking-[-1.5px] text-primary">{prices.mainPackage.price}</div>
              <div className="text-sm text-muted-foreground">{prices.mainPackage.priceNote}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <div className="font-medium mb-3 text-sm tracking-widest">INKLUDERET I PAKKEN</div>
              <ul className="space-y-1.5 text-sm">
                {prices.mainPackage.included.map((item, i) => (
                  <li key={i} className="flex gap-2">• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-medium mb-3 text-sm tracking-widest text-muted-foreground">EKSTRA UD GIFTER</div>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {prices.mainPackage.extraCosts.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-amber-50 border border-amber-200/70 p-5 text-sm text-amber-950/90">
            <strong>BEMÆRK:</strong> {prices.mainPackage.important}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{prices.mainPackage.minLegal}</p>
        </div>

        {/* Rutine + Trailer + Special side by side */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Rutine */}
          <div className="price-card">
            <div className="font-semibold tracking-tight mb-1">{prices.rutine.title}</div>
            <div className="text-2xl sm:text-3xl font-semibold tabular-nums tracking-tight mb-4">
              {prices.rutine.price} <span className="text-base font-normal text-muted-foreground">{prices.rutine.priceUnit}</span>
            </div>
            <div className="text-sm mb-3 text-muted-foreground">God idé hvis du kan svare ja til ét af følgende:</div>
            <ul className="text-sm space-y-[3px] text-muted-foreground">
              {prices.rutine.when.map((w, i) => <li key={i}>• {w}</li>)}
            </ul>
          </div>

          {/* Trailer */}
          <div className="price-card">
            <div className="uppercase text-xs tracking-[1.5px] text-blue font-semibold">TRAILER</div>
            <div className="font-semibold tracking-tight mt-1 mb-1 text-xl">{prices.trailer.title}</div>
            <div className="text-2xl sm:text-3xl font-semibold tabular-nums tracking-tight mb-4 text-blue">{prices.trailer.price}</div>
            <p className="text-sm mb-4 text-muted-foreground">{prices.trailer.description}</p>
            <div className="text-sm font-medium mb-1">Inkluderet:</div>
            <ul className="text-sm mb-4 space-y-px">
              {prices.trailer.included.map((i, idx) => <li key={idx}>• {i}</li>)}
            </ul>
            <div className="text-[11px] text-muted-foreground mt-auto pt-3 border-t">{prices.trailer.practical}</div>
          </div>

          {/* Special / Generhvervelse */}
          <div className="price-card space-y-6">
            <div>
              <div className="font-medium tracking-tight">{prices.special.generhvervelse.title}</div>
              <div className="text-2xl sm:text-3xl font-semibold tabular-nums tracking-tighter mt-1">{prices.special.generhvervelse.price}</div>
              <ul className="mt-3 text-sm text-muted-foreground">
                {prices.special.generhvervelse.included.map((item, idx) => <li key={idx}>• {item}</li>)}
              </ul>
            </div>
            <div>
              <div className="font-medium tracking-tight text-sm">{prices.special.saerlig.title}</div>
              <div className="text-xl sm:text-2xl font-semibold tabular-nums tracking-tighter mt-1">{prices.special.saerlig.price}</div>
              <div className="text-xs mt-2 text-muted-foreground">Inkl. indlevering/afhentning på borgerservice + online teori</div>
            </div>
            <div className="text-[11px] pt-2 border-t text-muted-foreground">{prices.special.generhvervelse.note}</div>
          </div>
        </div>

        <div className="mt-8 text-xs text-muted-foreground max-w-3xl">
          {prices.paymentNote}
        </div>
      </div>
    </section>
  );
}
