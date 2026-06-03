# Gladbilist.dk — 2026 Premium Rebuild (Next.js 15/16)

**Mortens Køreskole Årslev** — fuld moderne opfriskning af www.gladbilist.dk.

En høj-kvalitets, konverteringsstærk, professionel single-page oplevelse med elegante GSAP-animationer, buttery-smooth Lenis scroll, interaktiv Before/After slider, horisontal reference-scroll og fuld SEO.

## Teknisk stack (præcis som specificeret)
- Next.js 16 (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS v4
- shadcn/ui (base-nova)
- GSAP + ScrollTrigger (elegante scroll animationer)
- Lenis (buttery smooth scroll)
- Framer Motion (menu + ekstra)
- Next/Image fuld optimering (AVIF/WebP)
- React Hook Form + Zod (validerede formularer)
- Sonner (smukke toasts)
- 100% Single Source of Truth: `data/siteConfig.ts`

## Projektstruktur (overskuelig)

```
gladbilist/
├── app/
│   ├── layout.tsx                 # Root + dansk SEO + JSON-LD + Lenis + Navbar/Footer + Toaster
│   ├── page.tsx                   # Hoved one-pager (sammensætter alle sektioner)
│   ├── globals.css                # Brand tokens, premium typografi, micro-interactions, slider styles
│   ├── gdpr/
│   │   └── page.tsx               # Fuldt GDPR-dokument (separat side)
│   └── til-mor-og-far/
│       └── page.tsx               # "Til mor og far" (separat side)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx             # Sticky, smooth scroll, mobil hamburger (framer), telefon + CTA
│   │   └── Footer.tsx             # Komplet kontakt, links, sociale, CVR/bank
│   ├── sections/
│   │   ├── Hero.tsx               # Kraftfuld hero + GSAP stagger + trust
│   │   ├── WhyChoose.tsx          # 4 bullets + 4 dybe value cards + stats (GSAP ScrollTrigger)
│   │   ├── About.tsx              # Bio + lokation + 3-billed galleri
│   │   ├── SchoolCar.tsx          # Mach-E + features
│   │   ├── Prices.tsx             # Lovpakke (featured), trailer, generhvervelse, rutine
│   │   ├── CourseProcess.tsx      # Dit forløb – trin for trin (erstattede før/efter)
│   │   ├── ImportantLinks.tsx     # Vigtige links inden holdstart
│   │   ├── Booking.tsx            # Holdstart datoer + vigtige links + BookingForm
│   │   └── Contact.tsx            # Kontaktinfo + ContactForm
│   ├── forms/
│   │   ├── BookingForm.tsx        # Kompleks tilmeldingsform (RHForm + Zod)
│   │   └── ContactForm.tsx
│   ├── shared/
│   │   ├── CTAButton.tsx
│   │   └── BeforeAfterSlider.tsx  # Genbrugbar, tilgængelig drag-slider
│   └── providers/
│       └── LenisProvider.tsx
├── data/
│   └── siteConfig.ts              # ★ SSOT – ALT indhold, priser, datoer, links, metadata, schema
├── lib/
│   ├── utils.ts                   # cn() fra shadcn
│   └── gsap.ts                    # Registrering af ScrollTrigger
├── public/
│   ├── images/                    # Alle HQ billeder (kopieret fra assets)
│   └── pdfs/                      # koreprovebooking-guide.pdf + trailer-teknik.pdf
├── assets/                        # Originale kilder (bevares til reference)
├── content/                       # Originale .md (bevares til reference)
└── next.config.ts                 # Optimeret til billeder + performance
```

## Sådan kører du det lokalt

```bash
# 1. Installér (allerede gjort)
npm install

# 2. Dev server (http://localhost:3000)
npm run dev

# 3. Production build + check
npm run build
npm run start
```

Alt indhold redigeres **kun** i `data/siteConfig.ts` – ingen hardkodede tekster andre steder.

## Deployment på Vercel (super let)

1. Push repo til GitHub.
2. Importer projektet på [vercel.com](https://vercel.com).
3. Vercel detekterer Next.js automatisk.
4. Deploy!

**Anbefalede ekstra steps til produktion:**
- Tilføj rigtig e-mail til kontakt- og bookingformularer (f.eks. Resend + Server Action).
- Opdater `upcomingCar.dates` i `siteConfig.ts` løbende.
- Optimer de store billeder yderligere (fx via `sharp` eller Cloudinary) hvis nødvendigt.
- Tilføj en rigtig formular-handler (Formspree, Resend eller Gondrive webhook).

## Nøgle-features i den nye side

- Sticky navigation med smooth scroll til sektioner + mobil menu
- Premium hero med subtil GSAP animation + trust
- Elegant scroll-animerede sektioner (GSAP ScrollTrigger)
- **Interaktiv Before/After slider** (mus, touch, tastatur, a11y)
- Horisontal drag-scroll på referencer
- Fuldt funktionelle, validerede formularer (Booking + Kontakt)
- Alle priser, datoer, regler, PDF-links fra originalen bevaret + løftet
- Fuld SEO: dansk, Open Graph, JSON-LD LocalBusiness
- Core Web Vitals venlig (optimeret billeder, minimal JS, Lenis)
- To separate undersider: `/gdpr` og `/til-mor-og-far`

## Vigtige CTA'er (uændret fra original)

- Primær tilmelding → https://gondrive.com/166/holdstart
- Telefon: 4088 6565
- Bank: 1740 – 4397 589 639
- E-mail: morten@gladbilist.dk

## Vedligeholdelse

Alt er designet til at være **vedligeholdelsesvenligt**:
- Rediger tekster/priser/datoer kun ét sted (`data/siteConfig.ts`)
- Komponenter er små og fokuserede
- Ingen magic strings i UI-koden

**God arbejdslyst!** Siden er nu løftet til et moderne, tillidsvækkende og konverteringsstærkt niveau mens den personlige, ærlige tone er bevaret.

— Grok Refresh 2026

