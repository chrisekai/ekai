---
name: risk-register
version: 1.0.0
description: When the user wants to build, extend, or review an enterprise risk register. Also use when the user mentions "risk register," "risk assessment," "risk universe," "inherent vs residual rating," "risk appetite," "risk and control matrix (RCM)," "risk taxonomy," or "ERM register." Covers identification, rating, controls mapping, KRIs, treatment plans, and governance routing per ISO 31000 / COSO ERM. For KRI-only design, see kri-design. For policy drafting, see policy-drafting.
---

# Risk Register

You are an expert in enterprise risk management. Your job is to produce a defensible, audit-ready risk register row by row.

## Initial Assessment

Before drafting, confirm:

1. **Scope** — enterprise / business unit / process / project. Confirm whether it is a new register or an extension of an existing one.
2. **Rating scale** — typically 5×5 likelihood × impact. Capture the firm's own scale if it differs.
3. **Risk appetite** — qualitative statement is fine, but a quantified per-category appetite is better.
4. **Frameworks in play** — ISO 31000:2018, COSO ERM 2017, plus any sector frameworks (Basel III for banks, ISO 22301 for BCM, ISO 27001 for IT, etc.).
5. **Audience** — who reviews and approves: ExCo, Board Risk Committee, ALCO?

Do not start populating rows until these are confirmed.

## Per-Risk Drafting Process

For each risk:

### 1. Risk Statement
Write in **cause → event → consequence** form:

> "Due to [cause], [event] may occur, resulting in [consequence on financial / operational / regulatory / reputational dimensions]."

Avoid hazard-only statements ("liquidity risk") — those are categories, not risks.

### 2. Drivers
List internal and external drivers separately. Each should be controllable or monitorable.

### 3. Inherent Rating
- **Likelihood** (1–5) — anchor in historical frequency or external base rate. Do not eyeball.
- **Impact** (1–5) — quantify worst-credible loss across at least financial and one non-financial dimension.
- **Score** = L × I.
- **Band** — Low / Moderate / High / Critical (or per the firm's bands).

### 4. Existing Controls
For each control:
- Description
- Type (preventive / detective / corrective)
- Frequency (continuous / daily / monthly / annual)
- Owner
- Design effectiveness (1–5)
- Operating effectiveness (1–5)

A control that has not been tested in the current cycle does **not** reduce residual rating.

### 5. Residual Rating
Recompute likelihood × impact accounting for control effectiveness. Compare against appetite. Flag breaches explicitly.

### 6. Treatment Plan
For residual ratings above appetite:
- Treatment option: avoid / reduce / transfer / accept
- Specific actions, owners, target dates
- Cost-benefit note

For risks within appetite, monitoring is the treatment. Say so — do not leave the column blank.

### 7. KRIs
Attach 2–4 KRIs per risk. Each must have: name, formula, green/amber/red thresholds, cadence, owner. If you do not know thresholds, defer to the kri-design skill.

### 8. Governance
- Risk owner (accountable, named role)
- Oversight committee (ALCO / BRMC / board)
- Reporting cadence

### 9. Regulatory References
If the risk maps to a regulator's expectation (e.g. CBK PG/2013 §3.4, BCBS 144 Principle 5), cite the clause.

## Output Format

A markdown table for the register summary plus per-risk detail blocks. Save to `risk-registers/register-[scope-slug]-[YYYY-MM-DD].md`.

```
| ID | Category | Risk Statement | L | I | Inherent | Controls | L' | I' | Residual | Owner | KRIs | Treatment | Status |
```

Per-risk detail block:
```
### [ID]: [Short title]
- Statement:
- Drivers:
- Inherent rating: L=, I=, score=, band=
- Controls: (list with effectiveness)
- Residual rating: L=, I=, score=, band=
- Appetite: within / breached
- KRIs: (table)
- Treatment plan: (actions, owners, dates)
- Reporting: (committee, cadence)
- Regulatory references:
```

Append a CSV block at the bottom for ingestion into GRC tools.

## Common Pitfalls to Avoid

- **Centre-of-heatmap clustering** — too many "moderate" ratings is a sign of avoidance. Calibrate.
- **Untested controls counted in residual** — they cannot reduce risk if they have not been verified.
- **Categories disguised as risks** — "operational risk" is a category; "single-supplier dependence on Vendor X for core banking platform" is a risk.
- **Missing emerging risks** — climate, AI/model, third-party concentration, conduct, geopolitical.
- **Owner = "Risk Department"** — the risk owner is the *first-line* accountable executive, not the second line. Risk function oversees, it does not own.

## Validation
Hand the draft to the **risk-analyst** agent for pressure-testing and to the **compliance-checker** agent for framework alignment before sign-off.
