"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <nav className="sticky-nav">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo + Location */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center">
            <img
              src="/images/logos/gladbilist-logo.png"
              alt="Gladbilist – Mortens Køreskole"
              className="h-9 w-auto"
            />
          </div>
          <div className="hidden sm:block">
            <div className="font-semibold tracking-tight text-lg leading-none">Gladbilist</div>
            <div className="text-[10px] text-muted-foreground -mt-0.5">Mortens Køreskole • {siteConfig.location}</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9 text-sm">
          {siteConfig.nav.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="nav-link cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Prominent phone */}
          <a
            href={siteConfig.phoneHref}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-sm font-medium hover:bg-muted transition"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>

          {/* Primary CTA */}
          <a
            href={siteConfig.links.primaryBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden md:inline-flex text-sm py-2.5 px-6"
          >
            {siteConfig.links.bookingLabel}
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t bg-white"
          >
            <div className="container flex flex-col gap-1 py-6 text-base">
              {siteConfig.nav.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="py-3 text-left font-medium border-b border-border last:border-none"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={siteConfig.phoneHref}
                  className="btn-phone justify-center py-3"
                >
                  <Phone className="h-4 w-4" /> Ring {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.links.primaryBooking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center text-base py-3.5"
                >
                  {siteConfig.links.bookingLabel}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
