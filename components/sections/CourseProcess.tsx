"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { 
  CalendarCheck, 
  Users, 
  Car, 
  Award, 
  Shield, 
  Smile 
} from "lucide-react";

export function CourseProcess() {
  const steps = [
    {
      icon: CalendarCheck,
      title: "Tilmelding & forberedelse",
      desc: "Du tilmelder dig via Gondrive. Få styr på lægeerklæring (max 3 mdr. gammel), førstehjælpsbevis og eventuel samtykkeerklæring hvis du er under 18 år.",
    },
    {
      icon: Users,
      title: "Første aften – introduktion",
      desc: "Vi starter med en grundig introduktion. Du får udleveret din personlige lektionsplan, og jeg svarer på alle dine spørgsmål. Holdene er på max 6 elever.",
    },
    {
      icon: Smile,
      title: "Teori med dialog og glæde",
      desc: "Undervisning foregår med tavle – ikke kun PC. Vi har plads til spørgsmål, humor og rigtig forståelse af trafikken. \"GULDHOLD\"-behandling uden merpris.",
    },
    {
      icon: Car,
      title: "Praktisk kørsel – personlig feedback",
      desc: "Lektioner starter og stopper fra Rema1000 (eller efter aftale). Du får individuel feedback i en moderne elbil med automatgear og avancerede hjælpesystemer.",
    },
    {
      icon: Shield,
      title: "Manøvrebane & køreteknik",
      desc: "4 lektioner på manøvrebane + 4 lektioner på køreteknisk anlæg. Her træner vi de praktiske færdigheder i trygge rammer.",
    },
    {
      icon: Award,
      title: "Mørkekørsel & klar til prøve",
      desc: "2 af dine kørelektioner er mørkekørsel. Når du er klar, hjælper jeg dig med at blive en sikker og hensynsfuld billist – ikke bare bestå en prøve.",
    },
  ];

  return (
    <section className="section border-b bg-white">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <div className="badge mb-3">DIT FORLØB</div>
          <h2 className="heading-lg tracking-tight mb-4">
            Sådan bliver du en glad og sikker bilist
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Et forløb hos Gladbilist er bygget på kvalitet, personlig kontakt og små hold. 
            Mit mål er ikke bare et kørekort – det er at gøre dig til en god og hensynsfuld billist for livet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="group rounded-2xl border bg-card p-5 sm:p-6 hover:border-primary/30 transition-all flex flex-col"
              >
                <div className="mb-4 sm:mb-5 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium tracking-tight mb-3">{step.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed flex-1">
                  <span dangerouslySetInnerHTML={{ __html: step.desc.replace(/GULDHOLD/g, '<span class="goldhold">GULDHOLD</span>') }} />
                </p>
                <div className="mt-4 text-xs font-medium text-primary/70 tracking-widest">
                  TRIN {index + 1}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl bg-[#fafafa] border p-8 text-center">
          <p className="text-base sm:text-lg font-medium tracking-tight mb-2">
            Alt kørsel foregår som udgangspunkt i automatgearbil (kode 148)
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Du får 29 teorilektioner, 16 kørelektioner på vej (inkl. mørkekørsel), 
            manøvrebane, køreteknisk anlæg samt login til onlineteori, administrationsgebyr og pasfoto inkluderet i Lovpakken.
          </p>
        </div>
      </div>
    </section>
  );
}
