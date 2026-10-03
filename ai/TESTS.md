# TESTS — gladbilist

## Existing automated checks
| Check | Command | Result 2026-10-03 (fresh clone, Node 22, Windows) |
|---|---|---|
| Install | `npm ci` | PASS |
| Lint | `npm run lint` | **FAIL** on `main` — 5 errors (`@typescript-eslint/no-explicit-any` in `LenisProvider.tsx`, `Hero.tsx`, `WhyChoose.tsx`, `lib/scroll.ts`), 10 warnings. Pre-existing, not fixed (product code). |
| Build | `npm run build` (includes Next type check) | PASS |
| Unit/E2E | — none | TEST GAP |

## CI
Before: none. Added `.github/workflows/ai-gate.yml`: `npm ci` → `npm run lint` (`continue-on-error: true` because it already fails on main — remove when fixed) → `npm run build`.

## Critical manual flows
1. One-pager renders all sections; nav anchors scroll correctly (desktop + mobile menu).
2. Booking form: validation errors; valid submit → success toast + reset (**no data is sent**).
3. Contact form: same.
4. Gondrive CTA opens `https://gondrive.com/166/holdstart`.
5. `/gdpr`, `/til-mor-og-far` render; PDFs in `public/pdfs/` open.
6. AudioWelcome does not block the page if the MP3 is missing.

## Regression matrix
| Area changed | Must re-verify |
|---|---|
| siteConfig | 1, 4, 5 + metadata |
| forms | 2, 3 |
| scroll/animation libs | 1 |
| layout | 1, 6 |

## TEST GAPs
- TEST GAP: lint fails on main (5 errors).
- TEST GAP: no tests for Zod schemas of the forms.
- TEST GAP: no E2E/smoke render test.
