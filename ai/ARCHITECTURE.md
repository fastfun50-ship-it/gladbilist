# ARCHITECTURE — gladbilist

## Stack
Next.js 16.2 App Router, React 19, TypeScript, Tailwind v4, shadcn/ui (`components.json`, `components/ui/*`), GSAP, Lenis, Framer Motion, React Hook Form + Zod, Sonner. npm (`package-lock.json`).

## Modules
| Module | Purpose | Main files | Depends on | May also affect |
|---|---|---|---|---|
| Content SSOT | All texts, prices, dates, links, metadata, schema | `data/siteConfig.ts` | — | every section, SEO |
| Layout | Root layout, SEO/JSON-LD, Lenis, Navbar/Footer, Toaster, AudioWelcome | `app/layout.tsx`, `components/layout/*`, `components/providers/LenisProvider.tsx`, `components/AudioWelcome.tsx` | siteConfig, Lenis | all pages |
| Sections | One-pager sections | `components/sections/*.tsx`, `app/page.tsx` | siteConfig, `lib/gsap.ts`, `lib/scroll.ts` | animations/scroll |
| Forms | Booking + contact (client only, simulated submit) | `components/forms/BookingForm.tsx`, `ContactForm.tsx` | RHF, Zod, Sonner, siteConfig | Booking/Contact sections |
| Sub-pages | GDPR, parents page | `app/gdpr/page.tsx`, `app/til-mor-og-far/page.tsx` | siteConfig | — |
| UI kit | shadcn primitives | `components/ui/*`, `lib/utils.ts` | base-ui | all forms/sections |
| Assets | Images/PDFs/audio | `public/images/*`, `public/pdfs/*`, `public/audio/*` | — | sections, links |
| Config | Next image config | `next.config.ts` | — | images/perf |

No auth, DB, API routes, admin, payments.

## Dependency map — "If I change X, regression-test Y"
| Change in | Regression-test |
|---|---|
| `data/siteConfig.ts` | every section renders, prices/dates correct, metadata + JSON-LD, nav anchors |
| `lib/scroll.ts` / `LenisProvider` / `lib/gsap.ts` | smooth scroll, nav anchor jumps, section animations, mobile menu |
| forms | validation messages, success toast, reset, Booking default holdstart date |
| `app/layout.tsx` | all pages, AudioWelcome, Toaster |

## Deploy
Vercel (README "Deployment på Vercel"); project/domain: UNKNOWN / NEEDS CONFIRMATION.
