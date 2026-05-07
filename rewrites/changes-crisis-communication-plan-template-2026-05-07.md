# Change Summary: Crisis Communication Plan Template Rewrite

```
Original publication date: not stated in source
Rewrite date: 2026-05-07
Rewrite scope: Moderate refresh (40-60% changes)
Word count: ~3,600 (source) → ~3,650 (rewrite, similar length, much higher density)
Primary keyword: crisis communication plan template
Estimated SEO score improvement: significant — source had no markdown structure, no meta, no TL;DR, no internal/external links, mashed tables
```

## Major Changes

### Structural

- Added proper YAML frontmatter (title, slug, dates, author, reviewer, primary/secondary keywords, meta title, meta description) so the WordPress publisher and SEO tooling have machine-readable metadata.
- Added a single H1 with the primary keyword and a clear year marker for time-sensitive content (`2026`).
- Established H2/H3 hierarchy throughout. Source had implicit headings without `#` markers; the rewrite uses proper markdown.
- Converted six previously mashed-together "tables" (where columns were concatenated as continuous strings, e.g. `RoleResponsibilitiesPrimary Contact...`) into proper markdown tables:
  1. Crisis Communication Team Structure
  2. Stakeholder Mapping
  3. Escalation Matrix
  4. Ongoing Communication Cadence
  5. Materiality Assessment Framework
  6. Sector-Specific Regulatory Notifications

### AI / SEO optimisation

- Added a **direct-answer-first** opening (one paragraph defining what a crisis communication plan is and what the strongest plans contain) before the narrative SEC hook. Required by `context/seo-guidelines.md` for AI search performance.
- Added a **Key Takeaways** block immediately after the opening, with five standalone claims (not teasers). Required by `context/seo-guidelines.md`.
- Added meta title (`Crisis Communication Plan Template 2026: 3-Phase Guide`, 51 chars) and meta description (`Crisis communication plan template with pre-drafted holding statements, SEC 8-K Item 1.05 guidance, and a readiness checklist for the three phases of a disruption.`, 154 chars) in frontmatter.
- Added URL slug (`crisis-communication-plan-template`).
- Added explicit `last_updated` date and author/reviewer fields for AI citation surface.

### Content updates (2026 currency)

- Added 2025 disclosure-trend data: between Dec 2023 and early 2025, 54 companies filed 80 cybersecurity 8-Ks (26 under Item 1.05, the rest under voluntary 8.01). Sourced from Greenberg Traurig 2025 update.
- Updated CIRCIA timeline note: final rule delayed to May 2026, with further slippage flagged due to appropriations lapses (Davis Wright Tremaine, Sept 2025).
- Reframed "October 2024 enforcement actions" to past tense, given the article now sits in May 2026.
- Added a seventh FAQ ("difference between BCM plan and crisis communication plan") since this is a frequent PAA / search-suggestion question.

### External links added (authority signals)

- Linked SEC 2023 press release (rule adoption).
- Linked Gerding May 2024 guidance.
- Linked SEC Form 8-K text.
- Linked Greenberg Traurig 2025 trend update.
- Linked Davis Wright Tremaine on CIRCIA delay.
- Linked CISA CIRCIA FAQs.

### Style and AI-watermark hygiene

- Removed em-dashes throughout (replaced with commas, parentheses, semicolons, or full stops). Equivalent to running the `/scrub` post-process.
- Replaced ranges written with hyphen-narrow-spaces (`30-60 minutes`) with prose ranges (`30 to 60 minutes`) where it improved cadence.
- No invisible Unicode watermarks were introduced.
- Tightened bullet structure and removed double-spaced paragraphs.

### What was kept (strong sections from source)

- Six pre-drafted holding statements (cyber, recall, safety, supply chain, privacy, regulatory) — verbatim.
- Golden Hour protocol structure (0–60 minutes).
- AECA message framework.
- Materiality assessment factors split (quantitative vs qualitative).
- 10 common mistakes list.
- Readiness checklist.

## What still needs human action

- **Customise context/brand-voice.md and context/style-guide.md.** Both remain SEO Machine / Castos placeholder templates. The rewrite uses neutral professional prose, but a true ekai voice can only be applied once the brand-voice document is filled in.
- **Populate context/internal-links-map.md.** No internal links are inserted because the map has no real ekai URLs. Add the map, then the next pass can wire 3–5 internal links into this article.
- **Decide on a hosting outlet.** This article reads as ekai pillar content; it would benefit from being paired with shorter cluster pieces (`/cluster crisis-communication-plan` would generate them).
- **Add an embedded YouTube video** before publish. `seo-guidelines.md` requires at least one. Candidate: a SEC commissioner clip on the 2023 cybersecurity rule, or an ISO 22301 explainer.
- **Add author byline and reviewer credit** in WordPress.

## Files Produced

- `rewrites/crisis-communication-plan-template-rewrite-2026-05-07.md` — full rewritten article.
- `rewrites/changes-crisis-communication-plan-template-2026-05-07.md` — this change log.
