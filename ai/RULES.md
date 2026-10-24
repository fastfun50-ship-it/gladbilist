# RULES — gladbilist

Fælles indgang: [README](https://github.com/fastfun50-ship-it/system117-ai-standard/blob/main/README.md). Eneste fælles regelkilde: [STANDARD.md](https://github.com/fastfun50-ship-it/system117-ai-standard/blob/main/STANDARD.md). Kopier af fælles roller, gates, scope og DONE-format er fjernet herfra. Slå de relevante afsnit op i kilden; nedenstående særkrav og godkendte projektundtagelser bevares.

## 3. Repo-specific rules (evidenced in repo)
- Edit content only in `data/siteConfig.ts`; no magic strings in UI code (README "Vedligeholdelse").
- Keep CTAs/contact data as in siteConfig (README "Vigtige CTA'er (uændret fra original)").
- Use existing shadcn components in `components/ui/` — no second UI kit.
- Forms are simulated: never claim they deliver. Wiring a real handler = decision below.

## 4. Deploy / branches
- **One development line (default, STANDARD.md §9a):** one active development line → one version we test → one deployment we keep building on. Do not spread an ordinary task over several branches/environments on your own. Preview/staging only when this repo has real customers/data or Peter asks - and then it is written here as a project override.
- Default branch `main` only. Deploy: UNKNOWN / NEEDS CONFIRMATION.

## 5. ARCHITECTURE/PRODUCT DECISION REQUIRED
- Real form handler (Resend / Formspree / Gondrive webhook) — personal data of students.
- Removing/replacing Gondrive as sign-up path.
- Fixing the lint errors is allowed only as an explicit task (product code).
