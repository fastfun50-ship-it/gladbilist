import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-[#fafafa] text-sm">
      <div className="container py-16 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/logos/gladbilist-logo.png"
              alt="Gladbilist logo"
              className="h-8 w-auto"
            />
            <span className="font-semibold text-lg tracking-tight">Gladbilist</span>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Mortens Køreskole – personlig undervisning med fokus på at skabe gode og hensynsfulde billister på Fyn.
          </p>
          <div className="mt-4 text-xs text-muted-foreground">
            CVR {siteConfig.cvr} • {siteConfig.location}
          </div>
        </div>

        {/* Kontakt */}
        <div className="md:col-span-4">
          <div className="font-semibold mb-4">Kontakt</div>
          <div className="space-y-1.5 text-muted-foreground">
            <div>{siteConfig.address.full}</div>
            <a href={siteConfig.phoneHref} className="block hover:text-foreground transition">
              Tlf. {siteConfig.phone}
            </a>
            <a href={siteConfig.emailHref} className="block hover:text-foreground transition">
              {siteConfig.email}
            </a>
            <div className="pt-1">Bank: {siteConfig.bank}</div>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Facebook
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-3">
          <div className="font-semibold mb-4">Mere information</div>
          <div className="flex flex-col gap-2">
            {siteConfig.footer.links.map((link) => (
              <Link key={link.href} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
            <a href={siteConfig.links.sikkerTrafik} target="_blank" rel="noopener noreferrer" className="footer-link">
              sikkertrafik.dk
            </a>
            <a href={siteConfig.links.antk} target="_blank" rel="noopener noreferrer" className="footer-link">
              antk.dk
            </a>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>
            © {year} {siteConfig.fullName} – {siteConfig.name}. Alle rettigheder forbeholdt.
          </div>
          <div className="flex gap-x-5">
            <Link href="/gdpr" className="hover:text-foreground">Privatlivspolitik</Link>
            <Link href="/til-mor-og-far" className="hover:text-foreground">Til mor og far</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
