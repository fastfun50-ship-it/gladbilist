import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { BookingForm } from "@/components/forms/BookingForm";
import { ExternalLink } from "lucide-react";

export function Booking() {
  const b = siteConfig.booking;

  return (
    <section id="holdstart" className="section border-b bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10">
          {/* Info column */}
          <div className="lg:col-span-5">
            <div className="badge mb-3">NÆSTE SKRIDT</div>
            <h2 className="heading-lg tracking-tighter mb-6">{b.title}</h2>

            <div className="space-y-8 text-sm">
              {/* Dates */}
              <div>
                <div className="font-medium mb-2 tracking-wider text-xs">KOMMENDE HOLDSTART BIL</div>
                <div className="text-2xl font-semibold tracking-tight text-primary">{b.upcomingCar.dates.join("  •  ")}</div>
                <div className="mt-1 text-muted-foreground">Teori: {b.upcomingCar.location}</div>
              </div>

              <div>
                <div className="font-medium mb-1 tracking-wider text-xs">TRAILER</div>
                <div>{b.trailer.schedule} <span className="text-muted-foreground">• {b.trailer.location}</span></div>
              </div>

              {/* Rules */}
              <div className="callout">
                {b.rules.map((r, i) => <div key={i} className="mb-1 last:mb-0">• {r}</div>)}
              </div>

              {/* Prerequisites */}
              <div>
                <div className="font-semibold tracking-tight mb-3">Vigtige forudsætninger</div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {b.prerequisites.items.map((item, idx) => (
                    <li key={idx} className="pl-1 border-l-2 border-primary/60 pl-3">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Important links */}
              <div className="pt-2">
                <div className="font-medium tracking-widest text-xs mb-3">INDEN HOLDSTART – LINKS</div>
                <div className="flex flex-col gap-2 text-sm">
                  {b.importantLinks.map((l, i) => (
                    <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="pdf-link">
                      {l.label} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border bg-card p-8 md:p-10 shadow-sm">
              <div className="mb-7">
                <div className="font-semibold text-xl tracking-tight">{b.form.title}</div>
                <p className="text-sm text-muted-foreground mt-1">Udfyld og send – jeg kontakter dig hurtigst muligt.</p>
              </div>

              <BookingForm />

              <div className="mt-6 pt-6 border-t text-center">
                <a
                  href={siteConfig.links.primaryBooking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Eller tilmeld dig direkte via Gondrive (anbefalet) →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
