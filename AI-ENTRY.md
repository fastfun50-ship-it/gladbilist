# STOP BEFORE MODIFYING THIS REPOSITORY.

Repository: `fastfun50-ship-it/gladbilist` · Central standard: [SYSTEM117 AI Development Standard](https://github.com/fastfun50-ship-it/system117-ai-standard/blob/main/STANDARD.md)

1. Read `/ai/PROJECT.md`.
2. Read `/ai/RULES.md`.
3. Determine affected modules using `/ai/ARCHITECTURE.md`.
4. Read the relevant regression requirements in `/ai/TESTS.md`.
5. Inspect the actual implementation before changing anything.
6. Make the smallest possible change.
7. Run the required tests (`/ai/TESTS.md`).
8. If a regression occurs, the task is NOT complete.
9. Do not change architecture merely to solve a local problem.
10. Update status docs (`/ai/STATUS.md`) only where appropriate.

Before step 6, write the **EXPECTED CHANGE SCOPE** (files/modules, why, must-not-change, checks). If the real diff goes well outside it: stop and reassess.
Docs and code disagree? **STOP and report** — code is the truth of the implementation, `/ai` is the map.
**Critical User Flow Gate:** build/lint/typecheck/isolated tests green ≠ DONE. Name the affected critical user flows (`/ai/TESTS.md`). A change to a data chain or a function across modules needs at least one automated integration/E2E test proving the whole chain from input to visible result - otherwise the status is **TEST GAP** (state exactly what is not verified), never DONE.
**Data Contract Gate:** when data is produced/imported in one place and consumed in another, the test must verify that producer and consumer use the same schema/data source. No parallel hard-coded demo data may hide a broken integration. DONE report format: `/ai/RULES.md` §2c.
**Data Source Gate (demo data realism):** never replace required real/external base data with synthetic data to reach a count or get a test green. State what is real vs synthetic and which source was used; on source failure fail loudly - never silently fall back to invented data.

## Repo-specific hard stops
- All content (texts, prices, dates, links, metadata, JSON-LD) lives **only** in `data/siteConfig.ts` — no hard-coded copy in components (README "Single Source of Truth").
- The booking and contact forms currently **do not send anything** (simulated success). Do not present them as working, and do not wire a backend without Peter's decision.
- Primary sign-up CTA goes to `https://gondrive.com/166/holdstart` (siteConfig/README "uændret fra original").
