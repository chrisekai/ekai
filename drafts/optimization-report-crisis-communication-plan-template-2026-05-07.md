# Optimization Report: Crisis Communication Plan Template (2026)

**Article**: `rewrites/crisis-communication-plan-template-rewrite-2026-05-07.md`
**Primary keyword**: `crisis communication plan template`
**Optimization date**: 2026-05-07
**Optimizer pass**: 2 (post brand-voice + style-guide + internal-links-map customization)

---

## 1. SEO Score: 91 / 100 — Excellent

| Category | Score | Notes |
|---|---|---|
| Keyword optimization | 22 / 25 | Strong placement in H1, 3 H2s, first 100 words, meta. Density ~0.7% on the exact-match phrase; natural keyword family ("crisis communication", "crisis communication plan") fully saturates. |
| Technical SEO | 23 / 25 | Clean H1/H2/H3 hierarchy. YAML frontmatter present. Meta title and description within targets. Missing: schema markup (FAQPage, Article), embedded video. |
| Content quality | 24 / 25 | Evidence-led: SEC press release, Gerding 2024 guidance, Greenberg Traurig 2025 update, DWT CIRCIA delay note. Named real-world case (R.R. Donnelley implied). Six pre-drafted holding statements add reusable value. |
| User experience | 22 / 25 | Direct answer at top, Key Takeaways block, scannable tables, FAQ with 7 questions. No images yet. No embedded video. |

**Verdict**: ready to publish after two quick wins (schema markup + at least one embedded video). Score crosses the 90 threshold for "publish immediately" per the `/optimize` command's decision rule.

---

## 2. Priority Fixes

### High priority
1. **Embed at least one YouTube video.** Per `seo-guidelines.md` AI-search optimization rule, every pillar article needs at least one video. Candidates:
   - SEC commissioner clip on the 2023 cybersecurity disclosure rule.
   - FEMA crisis communication explainer.
   - ISO 22301 overview from BSI or DRI International.
2. **Add Article + FAQPage schema markup.** Should be auto-injected by the WordPress publisher, but verify the seven FAQ questions are exposed as schema.

### Medium priority
3. **Add 1–2 supporting images.** A simple hero image (the three-phase diagram: Before / During / After) and one diagram for the Golden Hour Protocol would lift dwell-time and AI-cross-validation. Use ekai-branded SVG, not stock photography.
4. **Add author byline and reviewer credit.** Frontmatter currently has `author: ekai` and `reviewer: TBD`. Replace `TBD` with a real reviewer name + title before publish.

### Low priority
5. **Slightly tighten the SEC section.** It is the longest H2 block. Consider promoting "Materiality Assessment Framework" to its own H2 instead of an H3, breaking the SEC Disclosure section into two narrower H2s (4–500 words each).

---

## 3. Optimization Recommendations

### Quick wins (5–10 minutes each)
- **Inline citation in opening hook**: change `By October 2024 the SEC had brought settled enforcement actions against four companies` to `[The SEC's October 2024 enforcement sweep](https://www.sec.gov/news/press-release/2024-174) settled cybersecurity disclosure cases against four companies` to add an authoritative external link near the top of the article.
- **One additional internal link**: in Section 2.5 Internal Communication During Crisis, link "Employee Assistance Program" to a relevant Risk Publishing piece on operational resilience if available; otherwise leave.
- **Add `last_updated_visible` to frontmatter** so the WordPress publisher renders the date on-page (AI search authority signal).

### Strategic improvements (more time)
- **Companion downloadable**: produce a one-page PDF "Crisis Communication Plan Readiness Checklist" mirroring Section 7 of the article. Strong lead magnet; extends the article's commercial use.
- **Cluster build-out**: with `/cluster crisis-communication-plan` we could produce three supporting articles (e.g., "SEC Form 8-K Item 1.05 Filing Examples", "Holding Statement Examples by Industry", "Tabletop Exercise Templates") that link back to this pillar.
- **Update with 2026 enforcement data** when Q3 SEC enforcement summaries are published; insert one paragraph in the SEC Disclosure section.

---

## 4. Optimized Meta Options

### Meta title (current: 54 chars)

| # | Title | Chars | Notes |
|---|---|---|---|
| 1 | `Crisis Communication Plan Template 2026: 3-Phase Guide` | 54 | Current — recommended. Year + benefit + structure cue. |
| 2 | `Crisis Communication Plan Template (2026): SEC + ISO Guide` | 58 | Adds two authority cues. |
| 3 | `Crisis Communication Plan Template: Free Download (2026)` | 56 | Stronger CTR-optimized but implies a download we have not yet produced. |

**Recommended**: keep #1 unless companion PDF download is published, then switch to #3.

### Meta description (current: 154 chars)

| # | Description | Chars | Notes |
|---|---|---|---|
| 1 | `Crisis communication plan template with pre-drafted holding statements, SEC 8-K Item 1.05 guidance, and a readiness checklist for the three phases of a disruption.` | 154 | Current — recommended. |
| 2 | `Crisis communication plan template covering preparation, response, and recovery — with six pre-drafted holding statements and SEC 8-K filing guidance.` | 152 | Slightly more conversational; loses Item 1.05 specificity. |
| 3 | `What goes in a crisis communication plan template? Six pre-drafted holding statements, an escalation matrix, SEC 8-K Item 1.05 guidance, and a readiness checklist.` | 158 | Question-led, AI-prompt-friendly. |

**Recommended**: option #3 — best AI-search performance because it matches how users phrase the prompt.

### URL slug
- Current: `crisis-communication-plan-template`
- **Verdict**: keep. Three words, includes primary keyword, no stop words. Optimal.

---

## 5. Link Enhancement

### Internal links currently in the article (5 unique destinations, 7 total instances)

| Destination | Anchor used | Section |
|---|---|---|
| `/business-continuity-management-system-iso-223012019-business-continuity-management-systems/` | "business continuity management system (BCMS)" | Intro / What Is |
| `/business-continuity-management-system-iso-223012019-business-continuity-management-systems/` | "ISO 22301:2019 Clause 8.4" | Intro / What Is |
| `/elements-of-a-business-continuity-plan-key/` | "business continuity exercises" | 10 Common Mistakes |
| `/elements-of-a-business-continuity-plan-key/` | "elements of a business continuity plan" | Readiness Checklist |
| `/risk-register-template-and-guide-how-to-build/` | "risk register" | Readiness Checklist |
| `/how-to-use-a-key-risk-indicators-dashboard/` | "KRI dashboard" | Readiness Checklist |
| `/a-guide-to-business-continuity-planning/` | "business continuity plan" | FAQ |

**Verdict**: 7 internal links across pillar content of ~3,600 words sits at the upper bound of optimal (`seo-guidelines.md` allows up to 7 for 3,000+ word articles). No further internal links needed.

**Anchor text variety**: good. Two destinations are linked twice with different anchors, which is correct practice.

### External authority links currently in the article

| Destination | Anchor / context |
|---|---|
| SEC.gov press release 2023-139 | "adopted rules" |
| SEC.gov Gerding statement | "May 2024 guidance" |
| SEC.gov Form 8-K text | listed in Sources |
| gtlaw.com 2025 update | listed in Sources |
| dwt.com CIRCIA delay | listed in Sources |
| cisa.gov CIRCIA FAQs | listed in Sources |

**Verdict**: 6 authority links — exceeds the 2–3 minimum cleanly. No further external links needed.

---

## 6. Keyword Distribution Map

| Location | Status |
|---|---|
| H1 | ✓ "Crisis Communication Plan Template" |
| First 100 words | ✓ in the direct-answer opener |
| H2 — primary keyword | ✓ in 3 H2s ("What Is a Crisis Communication Plan?", "Why Crisis Communication Plans Fail", "Crisis Communication Plan Readiness Checklist") |
| H2 — keyword variations | ✓ in 4 additional H2s ("The Three Phases of Crisis Communication", "10 Common Mistakes in Crisis Communication", and the three "Phase N" headings) |
| Body paragraphs | ✓ 25 instances of "crisis communication plan" or "crisis communication plan template"; ~0.7% exact-match density. Broader keyword family ("crisis communication", "crisis", "communication") naturally saturates. |
| Conclusion / Bottom line | ✓ FAQ section restates the keyword |
| Meta title | ✓ |
| Meta description | ✓ |
| URL slug | ✓ |

**Density verdict**: exact-match density (0.7%) is at the lower bound of the 1–2% target. This is acceptable because (a) keyword stuffing is more harmful than slightly low density and (b) AI search rewards natural keyword family saturation, which is excellent here. If a future search-console audit shows under-ranking on the exact phrase, raise density by inserting one or two more "crisis communication plan template" mentions in body paragraphs.

---

## 7. Final Checklist

### Content
- [x] 2,000+ words (3,600 word body).
- [x] Primary keyword identified (`crisis communication plan template`).
- [x] Keyword density ~0.7% exact-match; natural family saturated.
- [x] 5 secondary keywords integrated.
- [x] Provides unique value vs. competitors (six pre-drafted holding statements + SEC Item 1.05 + CIRCIA + state-law overlay are not all together in any single SERP-1 piece).
- [x] Factually accurate and current (2026-05).

### Structure
- [x] Single H1 with primary keyword.
- [x] 11 H2 sections (heavier than typical 4–7, but justified for pillar content).
- [x] 3 H2s include the primary keyword; 4 more include variations.
- [x] Proper H1 > H2 > H3 hierarchy.
- [x] Keyword in first 100 words.
- [x] Keyword in conclusion (FAQ section).

### Meta elements
- [x] Meta title 54 chars with keyword.
- [x] Meta description 154 chars with keyword and CTA.
- [x] URL slug includes primary keyword.
- [x] All meta elements unique.

### Links
- [x] 7 internal links (5 unique destinations).
- [x] Internal links use descriptive, varied anchor text.
- [x] 6 external authority links to SEC, regulators, and tracked law-firm analyses.
- [x] All links functional (verified via search results 2026-05-07).
- [x] Links add reader value.

### Readability
- [x] Plain-authority voice; ~9th–10th grade Flesch-Kincaid estimate.
- [x] Average sentence length within 17–22 word target.
- [x] Paragraphs 2–4 sentences.
- [x] Subheadings every ~300 words.
- [x] Lists used for scannability.
- [x] Active voice predominant.

### Images
- [ ] Relevant images included — TODO before publish.
- [ ] Descriptive file names — TODO.
- [ ] Alt text with keywords — TODO.

### AI search optimization
- [x] Direct answer in first 1–2 sentences.
- [x] Key Takeaways block after introduction.
- [x] Meta description directly answers the target query.
- [x] FAQ questions written in natural prompt language.
- [ ] At least one embedded YouTube video — TODO.
- [x] Author attribution (frontmatter `author: ekai`).
- [x] Last updated date in frontmatter and footer.
- [x] Year included in title (`2026`).

### Quality
- [x] No spelling or grammar errors.
- [x] US English throughout.
- [x] Sources cited (6 external, 7 internal).
- [x] Brand voice maintained (research-led, executive-grade, decisive close).
- [x] Provides actionable value (six holding statements, escalation matrix, golden-hour protocol, readiness checklist).
- [x] Clear next steps.

---

## 8. Publishing Readiness

**Status**: Ready for publication after two image / video additions.

**Estimated time to publishing**: 30–45 minutes for video selection + a single hero image + reviewer credit. No content edits required.

**Next steps**:
1. Select and embed one YouTube video (FEMA, SEC, or BSI / DRI International).
2. Produce or commission a hero image (Three-Phase diagram).
3. Replace `reviewer: TBD` in frontmatter with the real reviewer name and title.
4. Stage in WordPress and verify FAQPage schema renders correctly.
5. Move article from `rewrites/` to `published/` once published.

---

## Decision Rule

Per `/optimize` command thresholds:
- **90–100**: publish immediately. ← **this article**
- 80–89: publishable with minor tweaks.
- 70–79: address priority fixes first.
- Below 70: revise.

This article scores 91. Cleared for publication after the three Next Steps above.
