# KRI Design Command

Use this command to design formal Key Risk Indicators for a specific risk type, business process, or board dashboard.

## Usage
`/kri-design [risk or scope]`

Examples:
- `/kri-design liquidity risk`
- `/kri-design credit concentration`
- `/kri-design third-party / vendor risk`
- `/kri-design board dashboard — top 10 enterprise KRIs`

## What This Command Does
1. Proposes 5–15 KRIs for the requested scope.
2. For each KRI, specifies: definition, formula, data source, threshold bands (green / amber / red), monitoring cadence, owner, and escalation path.
3. Distinguishes leading (early-warning) from lagging KRIs.
4. Saves the spec to `kri-specs/`.

## Process

### 1. Scope & Audience
- Confirm whether the user is a regulated FI (bank, SACCO, insurer) or a non-bank corporate — the KRI mix differs materially.
- Confirm reporting audience: treasury / ALCO / BRMC / board.
- Confirm risk appetite statement (if available) so thresholds can be aligned.

### 2. KRI Selection
Draw from three buckets and label each KRI:
- **Regulatory / structural** (e.g. LCR, NSFR, capital adequacy ratio)
- **Internal / operational** (e.g. days cash on hand, top-10 depositor concentration)
- **Behavioural / early-warning** (e.g. deposit run-off rate, CDS spread widening, intraday liquidity peak usage)

### 3. KRI Specification
For each KRI, capture:
- **Name** and **risk it indicates**
- **Type**: leading / lagging
- **Definition** — one-sentence plain-English meaning
- **Formula** — explicit, including denominators and time windows
- **Data source** — which system, which table, which extract
- **Threshold bands**:
  - Green (within appetite)
  - Amber (warning — escalate to risk owner)
  - Red (breach — escalate to oversight committee)
- **Cadence** — daily / weekly / monthly / quarterly
- **Owner** — accountable role
- **Escalation path** — who is notified at amber, who at red
- **Worked example** — a calculation with realistic numbers

### 4. Validation
For each proposed KRI, check that it is:
- **Measurable** — formula is unambiguous and data is available.
- **Predictive** — moves before the underlying risk crystallises.
- **Comparable** — can be benchmarked over time and (where possible) against peers.
- **Cost-effective** — the cost of measurement is justified by the decision it informs.

### 5. Aggregation
- Show how KRIs roll up into a composite risk score or heatmap if applicable.
- Note correlations (which KRIs tend to move together) so the dashboard does not overweight one underlying signal.

## Output Format

Saved to `kri-specs/kri-spec-[scope-slug]-[YYYY-MM-DD].md`.

### Reference table
```
| KRI | Type | Risk | Formula | Green | Amber | Red | Cadence | Owner |
```

### Per-KRI detail block
For each KRI, expand with:
```
### [KRI name]
- **Risk indicated**:
- **Type**: leading / lagging
- **Definition**:
- **Formula**:
- **Data source**:
- **Thresholds**: green ___ / amber ___ / red ___
- **Cadence**:
- **Owner / escalation**:
- **Worked example**:
- **Rationale**:
- **Regulatory anchor** (if any):
```

## Reference Library
Common starting points to draw from when relevant:
- **Liquidity**: LCR, NSFR, loan-to-deposit ratio, top-10 depositor concentration, encumbered assets ratio, days cash on hand, current ratio, quick ratio, cash conversion cycle, undrawn committed facility headroom, 13-week cash forecast variance, intraday liquidity peak usage, deposit run-off rate, CDS spread.
- **Credit**: NPL ratio, sectoral concentration HHI, single-name concentration, stage-2 migration rate, cure rate, expected credit loss coverage, days past due ageing.
- **Operational**: incident frequency, loss event $/count, near-miss reports, control failures, key-person dependencies, vendor SLA breaches.
- **Cyber / IT**: critical patch SLA breach rate, phishing click-through rate, privileged access reviews overdue, MTTR for sev-1 incidents.
- **Compliance**: regulatory breaches, AML alert closure age, sanction-screening false-positive rate.

## Integration with Agents
- **risk-analyst** — sanity-checks formulas, threshold tightness, and selection bias.
- **compliance-checker** — confirms regulatory thresholds where applicable (e.g. LCR ≥ 100% under Basel III).

## Next Steps
1. Validate thresholds against the firm's risk appetite statement.
2. Wire data sources into the reporting layer.
3. Add chosen KRIs back into the risk register via `/risk-register`.
