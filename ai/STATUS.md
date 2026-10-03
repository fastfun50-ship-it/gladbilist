# STATUS — gladbilist

## Branches
- Default/current: `main` (`cf435e0`, 2026-06-03). No other branches.

## Known TODOs (from code)
- `components/forms/BookingForm.tsx`: "In production: send to your backend / Resend / Formspree / Gondrive etc." — submit is simulated (`setTimeout`), data only `console.log`.
- README "Anbefalede ekstra steps": real e-mail for forms, keep `upcomingCar.dates` updated.

## Unfinished areas
- Form delivery (booking + contact) not implemented.
- Welcome audio file presence: UNKNOWN (expects `public/audio/morten-velkomst.mp3`).

## Test gaps
- Lint failing; no tests.

## Risk areas
- **Leads silently lost**: users get a success toast but nothing is sent.
- Holdstart dates in siteConfig go stale.
- Activity: UNKNOWN / NEEDS CONFIRMATION (no commits since 2026-06-03).

## Doc/code conflicts found
- README project structure lists `components/shared/BeforeAfterSlider.tsx`, `assets/` and `content/` — these do not exist in the repo (code comment in `app/page.tsx` says the before/after slider was replaced by `CourseProcess`). README also lists "Interaktiv Before/After slider" and "Horisontal drag-scroll på referencer" as features. Not changed — reported.
- README says "Fuldt funktionelle, validerede formularer" — forms validate but do not send.
