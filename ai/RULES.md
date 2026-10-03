# RULES — gladbilist

## 1. SYSTEM117 shared rules

Full text: [STANDARD.md](https://github.com/fastfun50-ship-it/system117-ai-standard/blob/main/STANDARD.md). Summary:

- **Roles:** Chef/Architect analyses the task and its blast radius → Implementation agent makes the smallest correct change → QA verifies independently and must not just accept the implementer's claim.
- **"Build successful" ≠ done.** The critical flows in `/ai/TESTS.md` for the touched modules must still work. A regression = task NOT complete.
- **Smallest Change Rule.** Fewest files/lines that correctly solve the task. No drive-by refactors, renames, formatting, dependency bumps or styling changes.
- **No Architecture Drift** for a small task: no parallel data layers, no new auth system, no duplicate components, no big moves, no new frameworks, no new projects/repos, no DB architecture changes. → ARCHITECTURE/PRODUCT DECISION REQUIRED.
- **Existing Code First.** Reuse existing components/helpers/stores/routes. Read the implementation before changing it.
- **No parallel truths.** Code = truth of implementation; `/ai/*` = map. A critical rule never lives only in a conversation or agent memory. Doc/code conflict → STOP and report; do not rewrite product code to match a doc.
- **Secrets:** never in git, logs, chat, screenshots or the frontend bundle. Docs name env variables, never values.
- **Never** run production migrations/seeds, change DNS, Vercel env or domains, or force-push as part of a code task.
- **Communication:** do the task, no unnecessary confirmations or status messages, no screenshots unless asked, proportional checks, stop when done. Final report: what changed · checks run · branch/commit/preview · real blockers.

## 2. EXPECTED CHANGE SCOPE (mandatory)

Before implementing, write:

```
EXPECTED CHANGE SCOPE
- Files/modules:
- Why these:
- Must not change:
- Checks to run (from /ai/TESTS.md):
```

After implementing, compare `git diff --stat` with it. If the actual diff goes well outside the declared files/modules: **STOP and reassess** before continuing.

## 2a. Critical User Flow Gate (mandatory)

Full text: STANDARD.md §2a.

- A feature may **not** be marked DONE just because build, lint, typecheck or isolated tests pass.
- For every change, identify the **affected critical user flows** (list in `/ai/TESTS.md`) and name them in the DONE report.
- If the change affects a **data chain or a function across modules**, at least **one automated integration/E2E test** must prove the whole chain from input to visible result. Separate unit tests of each part are not enough.
- If a critical flow cannot be tested automatically, the task is **TEST GAP** with an exact statement of what is not verified - **never DONE**.
- The repo keeps its list of critical user flows in `/ai/TESTS.md`; a new cross-module flow is added there in the same task.

## 2b. Data Contract Gate (mandatory)

Full text: STANDARD.md §2b.

- When data is produced/imported in one place and consumed in another, the test must verify that **producer and consumer use the same schema and the same data source**.
- The test feeds data in through the real producer (import/API/form) and asserts on what the consumer actually shows - not on data seeded directly into the consumer.
- No parallel hard-coded demo/fallback data may hide a broken integration. A consumer that silently shows demo data when the real source is empty or wrong is a failure, not a pass.

## 2c. DONE report (mandatory format)

```
STATUS: DONE | TEST GAP | NOT COMPLETE
Changed: <files>
Critical user flows affected: <flow numbers/names from /ai/TESTS.md, or "none - <why>">
Flow evidence: <per flow: automated integration/E2E test name + result>
Data contract: <producer → consumer, same schema/source verified by <test>; or "n/a - <why>">
Data sources: <real: source + date/version | synthetic: what + why, clearly marked | on source failure: <loud error shown/logged>; or "n/a - <why>">
Checks run: <command: result>; not run: <list>
TEST GAP: <exact step(s) of the flow/chain not verified automatically + why; "none">
Branch / commit / preview: <...>
Blockers: <real blockers only>
```

`STATUS: DONE` only when `TEST GAP: none`, every affected critical flow has evidence and data sources are stated (§2d). Otherwise `TEST GAP` (or `NOT COMPLETE` on regression).

## 2d. Data Source Gate (mandatory)

Full text: STANDARD.md §2c.

- Never replace required real/external base data (registers, imports, customer/address/price data, API data) with **synthetic/invented data** to reach a required count, fill a list or get a test/check green.
- Every task that touches data states clearly **what is real and what is synthetic**, and **which source** was used (file/API/table + date/version).
- On source failure (missing file, API error, empty or invalid import) the code and the test **fail loudly** with a visible error - **never a silent fallback to invented data**.
- Synthetic/demo data is allowed only when the task asks for it, is clearly marked as synthetic, and never stands in for data a critical flow or test claims to prove. If real data is unavailable, report **TEST GAP** / blocker instead of faking it.

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
