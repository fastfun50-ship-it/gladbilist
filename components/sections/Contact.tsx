import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "@/components/forms/ContactForm";
import { Phone } from "lucide-react";

export function Contact() {
  const c = siteConfig.contact;

  return (
    <section id="kontakt" className="section bg-[#fafafa] border-b">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="badge mb-3">KOM I GANG</div>
          <h2 className="heading-lg tracking-tighter mb-4">{c.title}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {c.intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
          
          {/* Contact info + trust */}
          <div className="space-y-10">
            <div>
              <div className="text-sm text-muted-foreground mb-1.5 tracking-[1px]">{c.phoneLabel}</div>
              <a 
                href={siteConfig.phoneHref} 
                className="text-3xl font-semibold tracking-tight hover:text-primary transition-colors flex items-center gap-3 group"
              >
                {siteConfig.phone}
                <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition" />
              </a>
            </div>

            <div>
              <div className="text-sm text-muted-foreground mb-1.5 tracking-[1px]">{c.emailLabel}</div>
              <a 
                href={siteConfig.emailHref} 
                className="text-2xl hover:text-primary transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            <div>
              <div className="text-sm text-muted-foreground mb-1.5 tracking-[1px]">{c.addressLabel}</div>
              <div className="text-lg text-foreground">{siteConfig.address.full}</div>
            </div>

            {/* Trust signals like on højfynsspartel */}
            <div className="pt-6 border-t border-border space-y-3 text-sm text-muted-foreground">
              {c.trustItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white border p-7 sm:p-8 shadow-sm">
            <div className="font-semibold tracking-tight mb-6 text-lg">{c.form.title}</div>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
