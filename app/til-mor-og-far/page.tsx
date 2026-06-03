import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Til mor og far",
  description: "Information til forældre om Mortens Køreskole i Årslev. Regler, afbud, ekstra lektioner og praktik.",
};

export default function ParentsPage() {
  const p = siteConfig.parents;

  return (
    <div className="section max-w-3xl mx-auto">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">&larr; Tilbage til forsiden</Link>

      <h1 className="heading-lg tracking-tight mt-6 mb-8">{p.title}</h1>

      <div className="prose prose-neutral max-w-none text-[15px] space-y-7">
        <p>{p.intro}</p>
        <p>{p.communication}</p>

        <h3>{p.under18.title}</h3>
        <p>{p.under18.text}</p>

        <h3>{p.extraLessons.title}</h3>
        <p>{p.extraLessons.text}</p>

        <blockquote className="border-l-4 pl-4 text-muted-foreground border-primary/40">
          {p.extraLessons.quote}
          <footer className="mt-2 text-xs not-italic">— {p.extraLessons.quoteSource}</footer>
        </blockquote>

        <p>{p.extraLessons.investment}</p>

        <h3>{p.rules.title}</h3>
        <ul>
          {p.rules.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h3>{p.practical.title}</h3>
        <ul>
          {p.practical.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className="mt-12 rounded-xl bg-primary/5 p-6 text-sm">
        Ring gerne på <a href={siteConfig.phoneHref} className="font-semibold underline">{siteConfig.phone}</a> hvis du har spørgsmål.
      </div>
    </div>
  );
}
