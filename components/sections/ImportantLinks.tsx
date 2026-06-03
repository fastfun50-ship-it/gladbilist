import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { ExternalLink, FileText, Video, UserCheck, Shield, Award } from "lucide-react";

export function ImportantLinks() {
  const b = siteConfig.booking;

  const linksWithIcons = [
    {
      ...b.importantLinks[0],
      icon: UserCheck,
      desc: "Bestil tid hos din læge – den må max være 3 måneder gammel ved indlevering.",
    },
    {
      ...b.importantLinks[1],
      icon: FileText,
      desc: "Guide til hvordan du opretter dig i koreprovebooking før holdstart.",
    },
    {
      ...b.importantLinks[2],
      icon: FileText,
      desc: "Teknik og viden om trailer – obligatorisk stof til prøven.",
    },
    {
      ...b.importantLinks[3],
      icon: Video,
      desc: "Video om bilens teknik til den praktiske prøve.",
    },
    {
      ...b.importantLinks[4],
      icon: FileText,
      desc: "Tekst og vejledning om bilens teknik til den praktiske prøve.",
    },
  ];

  // Ekstra vigtige links fra originalt indhold der manglede fremtrædende plads
  const extraLinks = [
    {
      label: "Sikker Trafik",
      href: siteConfig.links.sikkerTrafik,
      icon: Shield,
      desc: "Officiel information om færdsel og sikkerhed i trafikken.",
    },
    {
      label: "ANT-kursus (alkohol, narko og trafik)",
      href: siteConfig.links.antk,
      icon: Award,
      desc: "Påkrævet hvis du har mistet kørekortet pga. alkohol/narko.",
    },
  ];

  return (
    <section className="section border-b bg-[#fafafa]">
      <div className="container">
        <div className="max-w-3xl mb-10">
          <div className="badge mb-3">FORBEREDELSE</div>
          <h2 className="heading-lg tracking-tight mb-3">Vigtige links inden holdstart</h2>
          <p className="text-xl text-muted-foreground">
            Sørg for at have styr på disse ting, før du starter dit forløb. De er afgørende for at kunne komme til prøve.
          </p>
        </div>

        {/* Stor callout for lægeerklæring */}
        <div className="callout mb-10 border-primary bg-primary/5 text-base">
          <strong className="block mb-1">HUSK LÆGEERKLÆRING</strong>
          Det er en god idé allerede nu at få bestilt tid hos din læge. 
          Lægeerklæring må <strong>MAX</strong> være 3 måneder gammel ved indlevering på borgerservice.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {linksWithIcons.map((link, index) => {
            const Icon = link.icon;
            const isExternal = !link.href.startsWith("/");
            return (
              <a
                key={index}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex gap-4 rounded-2xl border bg-white p-6 hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold tracking-tight flex items-center gap-2">
                    {link.label}
                    {isExternal && <ExternalLink className="h-3.5 w-3.5 opacity-60" />}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground leading-snug">
                    {link.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Ekstra vigtige links der manglede */}
        <div>
          <div className="text-sm font-medium tracking-widest text-muted-foreground mb-3">FLERE VIGTIGE RESSOURCER</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {extraLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 rounded-2xl border bg-white p-6 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold tracking-tight flex items-center gap-2">
                      {link.label}
                      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground leading-snug">
                      {link.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground max-w-2xl">
          Alle elever får udleveret en lektionsplan på første aften. 
          Man kan ikke komme til teoriprøve før ansøgning, lægeerklæring og samtykkeerklæring (under 18 år) er indleveret og godkendt.
        </p>
      </div>
    </section>
  );
}
