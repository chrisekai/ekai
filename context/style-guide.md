# Style Guide

This guide defines writing conventions, formatting standards, and editorial guidelines for all blog content. It complements `brand-voice.md` (the *what* and *why* of voice) with the *how* of formatting, grammar, and house style.

**Geography**: United States. SEO target market: US.
**Language**: US English.
**Currency**: US Dollar (USD) only.
**Date format**: month-day-year (US convention) for prose; ISO `YYYY-MM-DD` for filenames and metadata.

---

## Grammar & Mechanics

### Capitalization

**Headlines & subheadings**: Title Case for H1; Sentence case for H2 and below.
- ✅ H1: `15 Liquidity Risk KRI Examples (with Formulas)`
- ✅ H2: `Why most KRI dashboards fail`
- ❌ H2: `Why Most KRI Dashboards Fail` (avoid Title Case below H1)

**Proper nouns and frameworks**: capitalize as defined.
- ISO 31000, ISO 22301, ISO 27001, NIST CSF, COSO ERM, Basel III
- SEC, OCC, FRB, FDIC, NCUA, FINRA, CFPB, CISA, FFIEC, NAIC
- Form 8-K, Item 1.05, Form 10-K, Reg S-K Item 106

**Industry terms**: lowercase unless starting a sentence.
- risk register, risk appetite, key risk indicator, business continuity plan, crisis communication plan
- exception: brand or product names (`Risk Publishing`)

**Job titles**: capitalize when used as a title before a name; lowercase when used generically.
- ✅ "Chief Risk Officer Jane Smith said..."
- ✅ "The chief risk officer said..."

### Numbers

**Spell out**: one through nine.
**Use numerals**: 10 and above.

**Always numerals**:
- Percentages: 5%, 50% (no space, no `percent` spelled out except sentence-start)
- Money: $5, $500, $1.2 million
- Measurements: 5 GB, 50 MB, 30 days, 4 business days
- Lists, tables, statistics, and rankings (for scannability)

**Large numbers**:
- Use commas: 1,000; 10,000; 1,000,000
- Round above one million: "$1.2 million" not "$1,234,567"
- For ranges in millions/billions: "$2 to $5 million"
- Abbreviated forms allowed in tables only: $5K, $5M, $5B (avoid in body prose)

**Currency**:
- Always USD. No KES, GBP, EUR, or other currency. If a source statistic is in another currency, convert to USD with a parenthetical at first mention: "EUR 2.1 million (~USD 2.3 million)".
- Currency symbol before the number: `$2.1 million`, not `2.1 million dollars`.

### Punctuation

**Oxford comma**: yes. `A, B, and C`.

**Em dashes**: avoid. Use commas, semicolons, parentheses, or periods instead. Em dashes are an AI-writing tell. The `/scrub` post-process removes them; do not introduce them in drafts.

**En dashes**: use only for ranges where the range is purely numeric and a hyphen would be ambiguous (e.g., `2024–2026` in tables). In prose, prefer `2024 to 2026`.

**Quotation marks**: straight double quotes (`"..."`) in markdown source. Curly quotes are fine in published output but must not be in source files.

**Ellipses**: three dots, no spaces. `...` Use only for omitted text in direct quotations. Do not use ellipses for trailing thought; finish the sentence.

**Semicolons**: allowed sparingly; only when joining two independent clauses that are tightly related. If in doubt, use a period.

### Abbreviations & acronyms

**First use**: spell out, then acronym in parentheses.
- "the Liquidity Coverage Ratio (LCR)"
- "Net Stable Funding Ratio (NSFR)"

**Universally known acronyms** (do not need to spell out): SEC, FBI, IRS, CEO, CFO, CRO, USD, GDP, KPI, KRI, ERM, BCM, ISO, NIST.

**Latin abbreviations**: prefer plain English.
- ✅ "for example" (not "e.g.")
- ✅ "that is" (not "i.e.")
- ✅ "and so on" (not "etc.")
- Permitted in parentheticals or tables for brevity: `(e.g., LCR, NSFR, LDR)`.

---

## Word Choice & Usage

### US English spellings

Use US spellings throughout:
- organization, not organisation
- analyze, not analyse
- behavior, not behaviour
- center, not centre
- defense, not defence
- license (noun and verb), not licence
- check (verb / payment), not cheque
- color, favor, labor, honor (no `u`)
- traveling, focused (single `l`)

### Preferred terms

**Say this → Not that**

| Use | Avoid | Why |
|---|---|---|
| risk owner | risk holder, risk manager (when first-line accountable) | "risk owner" is ISO 31000 / COSO terminology |
| key risk indicator (KRI) | risk metric (when threshold and cadence are formal) | KRI is the audited construct |
| inherent risk | gross risk | ISO 31000 / COSO terminology |
| residual risk | net risk | ISO 31000 / COSO terminology |
| three lines model | three lines of defense | The IIA updated terminology in 2020 |
| risk appetite (quantified) | risk tolerance (when used as synonym) | Appetite is the boundary; tolerance is the variation around it |
| materiality | significance, importance | Materiality is the SEC standard |
| cybersecurity (one word) | cyber security | AP and most US regulators |
| third-party (adjective) | 3rd-party | Spell out ordinals as adjectives |
| public companies | publicly-traded firms | More direct |
| fiscal year (FY) 2026 | the financial year 2026 | US convention |

### Words to avoid

- Buzzwords: leverage (as a verb), best-in-class, holistic, synergize, unlock, unprecedented, robust, seamless, mission-critical, world-class, end-to-end (when imprecise).
- Hedge words: very, really, actually, essentially, literally, basically.
- Click-bait: ultimate, complete, definitive (only justified when paired with year and depth, e.g. `Definitive Practitioner Guide 2026`).
- "click here" or "read more" as anchor text.

### Inclusive language

- Singular `they` is preferred over `he/she`.
- Avoid gendered job descriptors. Use `chair`, not `chairman`.
- Avoid US-only idioms when the topic is international (e.g., "ballpark figure" in a Basel III piece reads parochial).

---

## Formatting Standards

### Text formatting

**Bold**: key concepts, decision points, and the first instance of a defined term. Do not bold whole sentences.

**Italics**: titles of works (`The Wall Street Journal`), foreign phrases on first use (`pro forma`), and rare emphasis. Sparingly.

**Underline**: never. Reserved for hyperlinks.

**ALL CAPS**: only for standard acronyms (SEC, OCC, ISO). Never for emphasis.

**Inline code**: backticks for filenames, command names, URLs, and field names. `risk-register/SKILL.md`, `Item 1.05`, `LCR = HQLA / Net cash outflows`.

### Lists

**Bullet lists**: non-sequential items.
- Capitalize the first word.
- End with a period if a complete sentence; no period if a fragment. Pick one and keep it parallel within a list.
- Maximum two levels of nesting.
- Use sentence case throughout; no Title Case in list items.

**Numbered lists**: only when sequence or count matters.
1. Use `1.` formatting (with period).
2. Same capitalization and punctuation rules as bullets.

**Bullets must do work**: if three bullets all paraphrase the same idea, write a sentence instead.

### Tables

- Use markdown tables for any structured comparison.
- Header row in sentence case.
- Numbers right-aligned in published output (markdown does not enforce; flag in editorial).
- Cite source under tables for any external data: `Source: SEC, 2025.`

### Links

**Anchor text**:
- Descriptive and informative. The reader should know what they will land on.
- ✅ "see the [risk register template and guide](https://riskpublishing.com/risk-register-template-and-guide-how-to-build/)"
- ❌ "[click here](...)" or "[read more](...)"

**Internal links**: target site is `riskpublishing.com`. Always use the full HTTPS URL in markdown source. See `internal-links-map.md` for the canonical link library.

**External links**: prefer authority sources (federal regulators, BIS, ISO, IIA, NIST, established US business publications). No nofollow on regular external links; use `rel="sponsored"` only for sponsored or affiliate.

**Open in new tab**: handled by the publisher (WordPress) for external links by default. Do not encode `target="_blank"` in markdown source.

### Code & technical elements

**Inline code**: `backticks` for filenames, formulas, field names.

**Fenced code blocks**: use language identifier where applicable.

```python
LCR = HQLA / NetCashOutflows30Day
assert LCR >= 1.00, "LCR below regulatory minimum"
```

### Callouts and pull quotes

- Use markdown blockquote (`>`) for both pull quotes and callouts.
- For "Key takeaways" or "Bottom line" callouts, use a bold lead-in inside the blockquote:
  ```
  > **Bottom line:** every regulatory ratio needs at least one early-warning indicator paired with it.
  ```

---

## Content Structure

### Article introduction (150–250 words)

1. **Direct answer (1–2 sentences)**: state the main answer or thesis. AI-search optimization requires the answer at the top, before the narrative.
2. **Key takeaways block**: a blockquote bullet list of 3–5 standalone claims, immediately after the direct answer.
3. **Hook (1–2 sentences)**: a named, dated event or a specific statistic that frames the urgency.
4. **Promise (2–3 sentences)**: what the reader will learn and why it matters.
5. **Keyword in first 100 words**: required for SEO.

### Section length

- Minimum 150 words per H2 section.
- Maximum 500 words per H2 section. Break longer sections into H3 subsections.
- Ideal: 250–350 words per main section.

### Conclusion (150–250 words)

1. **Bottom line**: a single declarative sentence that names the implication. (Brand voice rule: every piece earns its conclusion.)
2. **Recap** (3–5 bullets or paragraph): the takeaways, restated as actions where possible.
3. **CTA**: name the next artifact (a related article, a downloadable template, a diagnostic call). Avoid generic "contact us".

---

## SEO-Specific Style

### Meta titles

- 50–60 characters including spaces.
- Primary keyword in the first 50 characters.
- Year suffix for time-sensitive content (`(2026)`).
- No ending punctuation.
- Brand suffix `| Risk Publishing` permitted if the meta title fits within 60 characters with it; otherwise omit.

**Examples**:
- ✅ `15 Liquidity Risk KRI Examples (with Formulas)` (47 chars)
- ✅ `Crisis Communication Plan Template 2026: 3-Phase Guide` (54 chars)
- ❌ `The Ultimate Comprehensive Guide to KRIs in Banking and Finance` (too long, vague)

### Meta descriptions

- 150–160 characters.
- Include the primary keyword once, naturally.
- Direct-answer formula: `[Answer to the search query in 1 sentence]. [What this article gives the reader]. [Who it is for or a small CTA].`
- End with a complete thought (no mid-sentence cut-off).

**Example**:
> Crisis communication plan template with pre-drafted holding statements, SEC 8-K Item 1.05 guidance, and a readiness checklist for the three phases of a disruption. (154 chars)

### URL slugs

- Lowercase, hyphenated.
- Include primary keyword.
- 3–6 words ideal.
- Drop stop words (`a`, `the`, `and`, `of`) where the slug remains clear.
- Format: `/[primary-keyword-phrase]` at the post root (Risk Publishing convention; no `/blog/` prefix).

**Examples**:
- ✅ `/crisis-communication-plan-template`
- ✅ `/liquidity-risk-key-risk-indicators-examples`
- ❌ `/the-ultimate-guide-to-creating-a-crisis-communication-plan-in-2026`

### Alt text

- Describe the image factually. Include the primary keyword only if it describes the image.
- 125 characters or fewer.
- Avoid "image of..." or "picture of..." (the screen reader announces it as an image).

---

## Dates & Time

### Date format

- **Prose**: month name day, year. `May 7, 2026.`
- **Headings or terse contexts**: month abbreviation accepted. `May 7, 2026` or `May 2026`.
- **File names and metadata**: ISO `YYYY-MM-DD`. Example: `optimization-report-crisis-communication-plan-2026-05-07.md`.
- **Quarters**: `Q1 2026`, `Q2 2026` (no period after Q).
- **Fiscal years**: `FY2026` or `fiscal year 2026`.

### Time

- **12-hour format with `a.m.` / `p.m.`**: `3:00 p.m. ET`.
- **Time zones**: always specify when relevant, with US zones as the default. `ET`, `CT`, `MT`, `PT`. For international: `UTC`.
- Avoid 24-hour format in prose; permitted only in technical or operational contexts.

---

## Statistics & Data

### Citing sources

- Every statistic gets a source on first mention.
- Format: `According to [Source, year], [statistic].`
- Hyperlink to the original source on first mention.
- Restate the year in the sentence: "In 2025, the SEC..." or "(SEC, 2024)".

### Presenting numbers

- Round large numbers in prose: `$1.2 million`, not `$1,234,567`.
- Use the `%` symbol after the number with no space: `15%`.
- Use `$` before the number with no space: `$500`.
- Always use commas in four-digit and larger integers: `1,000`, `10,000`.
- For ratios, write as decimals or percentages, not fractions: `0.45` or `45%`, not `9/20`.

---

## Images & Media

### Image captions

- Optional. Required only when the image contains data or context not in the body text.
- Sentence case. End with a period if a complete sentence.
- Placement: directly below the image.

### Screenshots

- Crop to relevant portion only.
- Add arrows or highlights only when needed to direct attention.
- Alt text describes what the screenshot demonstrates, not just the screen.

### Charts and graphs

- Always provide context in the surrounding paragraph. Do not let the chart carry the argument alone.
- Cite the data source in the caption.
- Alt text describes the key finding, not the visual.

### Embedded video

- Per `seo-guidelines.md`, embed at least one relevant video per pillar article when it adds context.
- Prefer first-party videos when available; otherwise authoritative third-party (regulator, IIA, ISACA, GARP, RIMS).

---

## Brand-Specific Guidelines

### Site references

- The publication is **Risk Publishing**. Use as a proper noun.
- Domain: `riskpublishing.com`. Use the full HTTPS URL in markdown source: `https://riskpublishing.com/...`.
- Possessive: `Risk Publishing's risk register guide`.

### Competitor references

- Name competitors directly when the comparison is relevant and fair.
- No disparaging language. Focus on differentiation, not criticism.
- Always link competitor mentions only when the link adds reader value.

---

## Accessibility

- Descriptive link text only (no "click here").
- All images have alt text.
- Heading hierarchy is strict: H1 → H2 → H3 → H4. Never skip a level.
- Plain language: 8th–10th grade reading level (Flesch-Kincaid).
- Define technical terms on first use, even when audience seniority would normally permit shorthand.

---

## Editing Checklist

Before publishing, verify:

**Grammar & mechanics**
- [ ] US English spellings throughout.
- [ ] Oxford comma applied consistently.
- [ ] No em dashes.
- [ ] All numbers formatted per the rules above.
- [ ] All dates in `Month DD, YYYY` (prose) or `YYYY-MM-DD` (filenames).
- [ ] Currency in USD; conversions noted in parentheses on first mention.

**Style**
- [ ] Title Case for H1; sentence case for H2 and below.
- [ ] Frameworks and regulators capitalized correctly.
- [ ] Preferred terminology used (see Say This → Not That table).
- [ ] No buzzwords or hedge words.

**Structure**
- [ ] Direct answer in the first 1–2 sentences.
- [ ] Key takeaways blockquote follows the direct answer.
- [ ] Logical heading hierarchy (no level-skipping).
- [ ] Effective conclusion with `Bottom line` and named CTA.
- [ ] Section lengths within range.

**SEO**
- [ ] Meta title 50–60 characters, keyword in first 50.
- [ ] Meta description 150–160 characters, ends with complete thought.
- [ ] URL slug short, hyphenated, includes primary keyword.
- [ ] Internal links use canonical anchor text from `internal-links-map.md`.
- [ ] External links to US authority sources where applicable.
- [ ] Images have descriptive alt text under 125 characters.

**Quality**
- [ ] Every meaningful claim has a source, framework citation, or dataset behind it.
- [ ] No broken links.
- [ ] Provides genuine, action-oriented value.
- [ ] Brand voice maintained (research-led, executive-grade, decisive close).

---

## Updates & Maintenance

**Version**: 1.0
**Last updated**: 2026-05-07
**Next review**: 2026-11-07

This style guide is a living document. Update as the publication evolves. When you make a style decision not covered here, document it and add it to this guide for future reference.
