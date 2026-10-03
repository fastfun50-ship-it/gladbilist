# PROJECT — gladbilist (Gladbilist.dk / Mortens Køreskole)

> Derived from `README.md`, `data/siteConfig.ts`, `app/**`, `components/**`.

## Purpose
Rebuilt single-page website for Mortens Køreskole (driving school) in Årslev, Midtfyn — `www.gladbilist.dk` (README).

## User groups
- Prospective driving students and their parents (`/til-mor-og-far`).
- Morten (school owner) — contact by phone/e-mail; sign-ups via Gondrive.

## Main flows
1. One-pager `/`: Hero → Why choose → About → School car → Prices → Course process → Important links → Booking (holdstart dates + form) → Contact.
2. Sign up: CTA → external Gondrive (`https://gondrive.com/166/holdstart`).
3. Booking form / contact form: client validation (React Hook Form + Zod) → **simulated** success toast; data only `console.log` (see `components/forms/*.tsx`).
4. `/gdpr` (privacy) and `/til-mor-og-far` (parents page).

## Core features
- GSAP + ScrollTrigger animations, Lenis smooth scroll, Framer Motion menu, Sonner toasts.
- `AudioWelcome` (mounted in `app/layout.tsx`) — welcome audio from `public/audio/` (expects `morten-velkomst.mp3`, see `public/audio/README.md`).
- SEO: Danish metadata, Open Graph, JSON-LD LocalBusiness (from `siteConfig`).

## Integrations
- Gondrive (external link only).
- No e-mail/form backend (README lists Resend/Formspree/Gondrive webhook as future option).

## Critical product rules (from README/code)
- `data/siteConfig.ts` is the single source of truth for all content.
- CTAs/phone/bank/e-mail kept "uændret fra original" (README).

## UNKNOWN / NEEDS CONFIRMATION
- Whether this repo is deployed/live and to which Vercel project/domain (no vercel.json; README describes import steps).
- Whether the project is still active (last commit 2026-06-03).
