import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "GDPR / Privatlivspolitik",
  description: "Privatlivsbeskyttelsespolitik for Mortens Køreskole – Gladbilist i Årslev.",
};

export default function GdprPage() {
  const g = siteConfig.gdpr;

  return (
    <div className="section max-w-3xl mx-auto">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">&larr; Tilbage til forsiden</Link>

      <h1 className="heading-lg tracking-tight mt-6 mb-2">{g.title}</h1>
      <p className="text-muted-foreground mb-10">Mortens Køreskole v/ Morten Larsen • CVR {siteConfig.cvr}</p>

      <div className="prose prose-neutral max-w-none text-[15px]">
        <p>{g.intro}</p>
        <p>{g.contactForData}</p>

        <h3>Samtykke</h3>
        <p>{g.consent}</p>

        <h3>Hvilke data anvendes</h3>
        <ul>
          {g.dataUsed.map((d, i) => <li key={i}>{d}</li>)}
        </ul>

        <h3>Videregivelse af data (modtagere)</h3>
        <ul>
          {g.recipients.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
        <p className="font-medium">{g.noExtraDisclosure}</p>

        <h3>Opbevaring</h3>
        <ul>
          {g.storage.map((s, i) => <li key={i}>{s}</li>)}
        </ul>

        <h3>Dine rettigheder</h3>
        <p>{g.rights}</p>
        <p>{g.complaint}</p>
      </div>

      <div className="mt-12 text-xs text-muted-foreground">
        Kontakt: {siteConfig.phone} • {siteConfig.email}
      </div>
    </div>
  );
}
