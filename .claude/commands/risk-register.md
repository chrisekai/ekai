# Risk Register Command

Use this command to generate or extend an enterprise risk register entry for a given risk, business unit, or process.

## Usage
`/risk-register [scope]`

Examples:
- `/risk-register liquidity risk`
- `/risk-register treasury operations`
- `/risk-register cyber incident response`

## What This Command Does
1. Identifies the risks in scope using a recognised taxonomy (ISO 31000, COSO ERM, Basel risk types).
2. For each risk, drafts a complete register row: cause → event → consequence, inherent rating, controls, residual rating, owner, KRIs, treatment plan.
3. Cross-references applicable regulations and frameworks (CBK, IRA, CMA, Basel III, ISO 22301).
4. Saves the output to `risk-registers/`.

## Process

### 1. Scope Definition
- Confirm the level: enterprise / business unit / process / project.
- Confirm the risk universe to draw from (financial, operational, strategic, compliance, IT/cyber, reputational, BCM).
- Confirm the rating scale (typically 5×5 likelihood × impact, but verify with the user).

### 2. Risk Identification
For each candidate risk, capture:
- **Risk ID** (e.g. `LIQ-001`)
- **Risk category** (financial / operational / etc.)
- **Risk statement** in cause–event–consequence form: "Due to [cause], [event] may occur, resulting in [consequence]."
- **Risk drivers** (internal and external)

### 3. Inherent Risk Assessment
- **Likelihood** (1–5)
- **Impact** (1–5) — across financial, operational, regulatory, reputational dimensions
- **Inherent score** = L × I
- **Inherent rating band** (Low / Moderate / High / Critical)

### 4. Controls Mapping
For each existing control:
- Control description
- Control type (preventive / detective / corrective)
- Frequency (continuous / daily / monthly / annual)
- Control owner
- Design effectiveness (1–5)
- Operating effectiveness (1–5)

### 5. Residual Risk Assessment
- Recompute likelihood × impact after controls.
- Compare against risk appetite. Flag any breaches.

### 6. Treatment Plan
For risks above appetite:
- Treatment option (avoid / reduce / transfer / accept)
- Specific actions, owners, target dates
- Cost-benefit note

### 7. Key Risk Indicators (KRIs)
- 2–4 KRIs per risk with formula, threshold (green / amber / red), and monitoring cadence.
- Invoke the `kri-design` skill for formula-level detail.

### 8. Governance & Reporting
- Risk owner, accountable executive, oversight committee.
- Reporting cadence and route (ALCO / BRMC / board).

## Output Format

Saved to `risk-registers/register-[scope-slug]-[YYYY-MM-DD].md` as a markdown table plus per-risk detail blocks. Include a CSV export block at the bottom for ingestion into GRC tools.

### Header
```
| Risk ID | Category | Risk Statement | L | I | Inherent | Controls | L' | I' | Residual | Owner | KRIs | Treatment | Status |
```

### Per-Risk Detail Block
For each row, follow the table with:
```
### [Risk ID]: [Short title]
- **Statement**:
- **Drivers**:
- **Inherent rating**: L=x, I=y, score=z, band=
- **Controls**: (list with effectiveness)
- **Residual rating**: L=x, I=y, score=z, band=
- **Appetite**: within / breached
- **KRIs**: (table — name / formula / amber / red / cadence)
- **Treatment plan**: (actions, owners, dates)
- **Reporting**: (committee, cadence)
- **Regulatory references**: (Basel, CBK PG, ISO 31000 clause, etc.)
```

## Frameworks Referenced
- ISO 31000:2018 — Risk Management Guidelines
- COSO ERM 2017 — Enterprise Risk Management Integrating with Strategy and Performance
- Basel Committee — Principles for Sound Liquidity Risk Management (BCBS 144)
- ISO 22301:2019 — Business Continuity Management Systems
- Local prudential guidelines where in scope (e.g. CBK PG/2013, IRA, CMA)

## Integration with Agents
After register generation, the following agents auto-run:
- **risk-analyst** — pressure-tests likelihood/impact ratings and control effectiveness scores.
- **compliance-checker** — verifies the register references applicable regulators and framework clauses.

## Next Steps
1. Review with the risk owner and oversight committee.
2. Run `/kri-design [risk]` to deepen any KRI that needs formal specification.
3. Run `/policy-draft [scope]` to draft the supporting policy section if one does not exist.
