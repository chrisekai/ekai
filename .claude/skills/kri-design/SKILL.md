---
name: kri-design
version: 1.0.0
description: When the user wants to design Key Risk Indicators (KRIs) — selecting metrics, writing formulas, calibrating thresholds, defining cadence, and routing escalation. Also use when the user mentions "KRI," "key risk indicator," "risk dashboard," "early warning indicator," "risk metrics," "amber/red thresholds," "leading vs lagging risk indicator," "LCR / NSFR / loan-to-deposit ratio," or "board risk dashboard." For populating a full register, see risk-register. For drafting a policy, see policy-drafting.
---

# KRI Design

You are an expert in risk-metric design. Your job is to produce KRIs that move *before* losses crystallise and that survive scrutiny from board, regulators, and internal audit.

## Initial Assessment

Before designing, confirm:

1. **Risk in scope** — liquidity, credit, operational, cyber, conduct, third-party, etc.
2. **Audience** — treasury / ALCO / BRMC / board. The cadence and aggregation differ.
3. **Firm type** — regulated bank / NBFI / insurer / SACCO / non-financial corporate. KRI mix shifts materially.
4. **Risk appetite** — quantified statement preferred, so amber/red thresholds can be anchored.
5. **Available data sources** — a perfect KRI on data you cannot obtain is useless.

## Selection Principle

Cover all three buckets per major risk:

- **Regulatory / structural** — what the regulator forces you to monitor (e.g. LCR, NSFR, capital ratios, NPL ratio).
- **Internal / operational** — what reflects your specific business model (e.g. top-10 depositor concentration, days cash on hand, system uptime).
- **Behavioural / early-warning** — market or counterparty signals that move first (e.g. CDS spread, deposit run-off rate, intraday liquidity peak usage, abnormal customer complaint volume).

If the indicator set is missing the third bucket, the firm is flying lagging-only.

## Per-KRI Specification

For each KRI, provide:

```
### [KRI name]
- **Risk indicated**:
- **Type**: leading / lagging
- **Definition** (one plain-English sentence):
- **Formula** (explicit, with denominators and time windows):
- **Data source** (system, table, refresh frequency):
- **Thresholds**:
  - Green:
  - Amber:
  - Red:
- **Cadence**: daily / weekly / monthly / quarterly
- **Owner / escalation path**:
- **Worked example**: (calculation with realistic numbers)
- **Rationale** (why this KRI, why these thresholds):
- **Regulatory anchor** (if any):
```

## Calibration Heuristics

- **Anchor amber to history**, not to a round number. If the worst observed value in the last 24 months is X, amber should sit between the long-run average and X.
- **Red must matter** — a red threshold that has never been touched is decoration. A red threshold breached every quarter is noise. Aim for a frequency that triggers a real escalation 1–2 times per year for stable risks.
- **Regulatory floors are reds, not greens**. If LCR ≥ 100% is mandatory, set internal red at 105% so escalation happens before the regulator does.
- **Cadence must match risk velocity** — liquidity KRIs daily, capital ratios monthly, climate transition risk quarterly. Mismatched cadence is the most common dashboard failure.

## Library — Common Starting Points

### Liquidity
- Liquidity Coverage Ratio (LCR)
- Net Stable Funding Ratio (NSFR)
- Loan-to-Deposit Ratio
- Top-10 depositor concentration
- Encumbered assets ratio
- Days cash on hand (corporate)
- Current ratio, Quick ratio (corporate)
- 13-week cash forecast variance
- Intraday liquidity peak usage
- Deposit run-off rate
- CDS spread / wholesale funding spread

### Credit
- NPL ratio
- Stage-2 migration rate
- Sectoral concentration HHI
- Single-name concentration
- Cure rate
- ECL coverage ratio
- Days past due ageing

### Operational
- Loss event frequency and severity
- Near-miss reports
- Control failure rate
- Key-person dependency count
- Vendor SLA breach count

### Cyber / IT
- Critical patch SLA breach rate
- Phishing click-through rate
- Privileged access reviews overdue
- MTTD / MTTR for sev-1 incidents
- Backup restoration test pass rate

### Compliance
- Regulatory breach count
- AML alert closure age (median, p90)
- Sanction-screening false-positive rate
- Customer complaint volume by category

## Aggregation

If KRIs roll up into a composite score or heatmap:
- State the weighting and justify it.
- Note correlated indicators so one underlying signal is not double-counted.

## Output

Save to `kri-specs/kri-spec-[scope-slug]-[YYYY-MM-DD].md` with:
1. Summary table of all KRIs.
2. Per-KRI detail blocks (above).
3. Aggregation / dashboard note (optional).

## Validation
Hand to the **risk-analyst** agent for formula and threshold sanity-checking. Hand to the **compliance-checker** agent to verify any regulatory thresholds cited.
