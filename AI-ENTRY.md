# AI-ENTRY — gladbilist

Repository: fastfun50-ship-it/gladbilist. Dokumenteret arbejdsgren: `main`. Verificér den faktiske checkout før skrivning; en gammel status starter ikke en gammel opgave.

Start i [fælles README](https://github.com/fastfun50-ship-it/system117-ai-standard/blob/main/README.md), læs eget botindeks og relevant egen læring. Den eneste fælles regelkilde er [STANDARD.md](https://github.com/fastfun50-ship-it/system117-ai-standard/blob/main/STANDARD.md). Fælles regler kopieres ikke hertil; de gælder fortsat.

## Læs ved projektstart
- [PROJECT](https://github.com/fastfun50-ship-it/gladbilist/blob/main/ai/PROJECT.md): mål, funktioner og afgrænsning.
- [STATUS](https://github.com/fastfun50-ship-it/gladbilist/blob/main/ai/STATUS.md): fremdrift, kendte fejl og næste skridt.
- [RULES](https://github.com/fastfun50-ship-it/gladbilist/blob/main/ai/RULES.md): projektsærkrav og udgivelsesgrænser.

## Læs efter opgavens behov
- [ARCHITECTURE](https://github.com/fastfun50-ship-it/gladbilist/blob/main/ai/ARCHITECTURE.md) ved kode eller dataflow.
- [TESTS](https://github.com/fastfun50-ship-it/gladbilist/blob/main/ai/TESTS.md) for kontroller af de berørte brugerforløb.
- Eksisterende AGENTS/CLAUDE-vejledning bevares for værktøjskrav. Godkendt design og billeder findes via projektets eksisterende dokumentation; opfind ikke en designsti.

## Repo-specific hard stops
- All content (texts, prices, dates, links, metadata, JSON-LD) lives **only** in `data/siteConfig.ts` — no hard-coded copy in components (README "Single Source of Truth").
- The booking and contact forms currently **do not send anything** (simulated success). Do not present them as working, and do not wire a backend without Peter's decision.
- Primary sign-up CTA goes to `https://gondrive.com/166/holdstart` (siteConfig/README "uændret fra original").
