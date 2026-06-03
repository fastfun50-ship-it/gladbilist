import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "@/components/forms/ContactForm";

export function Contact() {
  const c = siteConfig.contact;

  return (
    <section id="kontakt" className="section bg-[#fafafa] border-b">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10">
          <div>
            <div className="badge mb-3">DIREKTE KONTAKT</div>
            <h2 className="heading-lg tracking-tighter mb-4">{c.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">{c.intro}</p>

            <div className="space-y-2 text-lg">
              <a href={siteConfig.phoneHref} className="block font-semibold hover:text-primary transition">{siteConfig.phone}</a>
              <a href={siteConfig.emailHref} className="block hover:underline">{siteConfig.email}</a>
            </div>

            <div className="mt-8 text-sm text-muted-foreground space-y-px">
              <div>{siteConfig.address.full}</div>
              <div>Bank: {siteConfig.bank}</div>
              <div>CVR: {siteConfig.cvr}</div>
            </div>
          </div>

          <div className="rounded-3xl bg-white border p-8">
            <div className="font-semibold mb-5 tracking-tight">{c.form.title}</div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
