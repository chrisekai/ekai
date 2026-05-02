---
title: "Key Risk Indicators Examples for Manufacturing Companies: 45+ KRIs With Thresholds"
slug: key-risk-indicators-examples-manufacturing-companies
target_keyword: key risk indicators examples for manufacturing
meta_description: "Practical KRI examples for manufacturers across safety, quality, supply chain, equipment, environment, and cyber. OSHA and ISO-aligned, with thresholds and a rollout plan."
word_count_target: 2500-3000
pattern: "A - KRI Examples for [Industry]"
mirrors: "KRI Examples for Banks (top performer)"
priority: High
---

# Key Risk Indicators Examples for Manufacturing Companies: 45+ KRIs With Thresholds

Manufacturing risk is unusually concrete. A single loose bolt, a mislabeled batch, a cyber intrusion into a programmable logic controller, or a backordered raw material can stop a plant inside an hour. Unlike banks, manufacturers cannot rebuild risk visibility from a transaction database overnight — the data sits across MES, ERP, SCADA, EHS, and quality systems, and is rarely joined up.

Key Risk Indicators (KRIs) are how manufacturing risk leaders cut through that fragmentation. They turn dozens of plant-floor signals into a small set of leading metrics that show, before an incident occurs, where the risk is moving.

This guide gives you the KRIs that matter for a modern manufacturer. It is structured around the eight risk domains we see in nearly every plant audit — safety, quality, supply chain, equipment, environment, workforce, cyber/OT, and compliance — with starter thresholds you can adapt to your operation. It is aligned with OSHA general-duty expectations, ISO 9001 quality requirements, ISO 45001 occupational health and safety, ISO 14001 environmental management, and IEC 62443 for industrial cybersecurity.

## What are KRIs in manufacturing?

A Key Risk Indicator is a measurable signal that the level of risk in a given area is changing. In a manufacturing context, that means a metric drawn from a system of record — your CMMS, your QMS, your ERP, your SCADA historian — that moves *before* a loss event, not after. A rising trend in unplanned downtime is a KRI. The customer recall six weeks later is the loss event.

Good manufacturing KRIs are:

- **Plant-relevant** — measured at site level and rolled up, not invented at corporate
- **Automatable** — drawn from the system that already records the data
- **Predictive** — a leading signal, not a year-end summary
- **Threshold-bound** — green, amber, and red zones with a defined response
- **Owned** — by a named plant or function leader, not "manufacturing"

## Why KRIs are critical in manufacturing

Manufacturing combines high physical risk, complex regulation, and tight margins. Three pressures make KRIs non-optional in 2026:

- **Regulatory expectation.** OSHA's general duty clause, ISO 45001 (clauses 9.1 and 10), ISO 14001, and FDA cGMP for regulated sectors all expect organizations to monitor performance through indicators and act on adverse trends. Auditors increasingly ask to see leading indicators, not just incident counts.
- **Insurance discipline.** Property and casualty insurers now price renewals against the maturity of a manufacturer's risk monitoring. Plants with documented KRIs and threshold escalation routinely see better terms.
- **Operational reality.** A modern plant runs on a thin margin between full output and an unplanned stoppage. Without KRIs, the first signal of trouble is the stoppage itself.

## How to design a manufacturing KRI program

Start small, instrument well, then expand. A good first cut is 25–40 enterprise KRIs, with each plant running an additional 10–20 site-specific indicators.

Use this filter for every candidate KRI:

- Does it map to a risk in your top 10 risk register?
- Can the data be pulled automatically from MES, CMMS, QMS, ERP, EHS, or SCADA?
- Is there a named plant-level owner?
- Is the threshold defensible against either a statistical baseline or an industry benchmark (NSC, BLS, ASTM, your sector association)?

The categories below cover the full surface area. Treat the example thresholds as starting points — calibrate them to your loss history, your sector, and your risk appetite.

---

## Health and safety KRI examples (OSHA and ISO 45001-aligned)

Safety is the category where manufacturing KRIs are most mature, and yet most firms still over-rely on lagging indicators like Total Recordable Incident Rate (TRIR). Pair lagging metrics with leading ones.

| # | KRI | Suggested threshold (Green / Amber / Red) | Owner |
|---|---|---|---|
| 1 | Total Recordable Incident Rate (TRIR), 12-month rolling | <1.5 / 1.5–3.0 / >3.0 | EHS lead |
| 2 | Lost Time Injury Frequency Rate (LTIFR), per million hours | <2 / 2–5 / >5 | EHS lead |
| 3 | Near-miss reports per 100 FTE per month | >5 (healthy) / 2–5 / <2 | Plant manager |
| 4 | % corrective actions from incidents closed within SLA | >95% / 80–95% / <80% | EHS lead |
| 5 | Number of unsafe-condition observations per shift | Trend ↑ healthy | Frontline supervisors |
| 6 | Permit-to-work compliance rate (audit sample) | >98% / 90–98% / <90% | EHS lead |
| 7 | % critical safety training overdue | <2% / 2–5% / >5% | HR + EHS |
| 8 | Contractor incident rate vs. employee rate | Within ±10% / ±10–25% / >±25% | Procurement + EHS |
| 9 | Days since last lost-time incident vs. 12-month average | At or above average | Plant manager |
| 10 | Personal protective equipment (PPE) compliance audit score | >95% / 85–95% / <85% | Shift lead |

A rising near-miss reporting rate is one of the few KRIs where *up is good*. It signals reporting culture is healthy. Pair it with corrective-action closure to make sure reports are acted on, not buried.

## Quality KRI examples (ISO 9001-aligned)

Quality risk shows up first in production data — long before a customer complaint or a recall.

| # | KRI | Suggested threshold | Owner |
|---|---|---|---|
| 11 | First-pass yield (%) | >98% / 95–98% / <95% | Quality lead |
| 12 | Scrap rate as % of production volume | <2% / 2–5% / >5% | Production |
| 13 | Customer complaints per 100,000 units | <5 / 5–15 / >15 | Quality lead |
| 14 | Open Corrective and Preventive Actions (CAPAs) >30 days | 0 / 1–5 / >5 | Quality lead |
| 15 | Cost of poor quality (% of revenue) | <2% / 2–4% / >4% | Quality + Finance |
| 16 | Supplier defect rate (PPM) on incoming material | <500 / 500–1500 / >1500 | Supplier Quality |
| 17 | % batches released without nonconformance | >98% / 90–98% / <90% | Quality lead |
| 18 | Number of recall events (12-month rolling) | 0 / 1 / >1 | Regulatory |
| 19 | Internal audit findings: critical category, open | 0 / 1–2 / >2 | Quality lead |
| 20 | Calibration overdue: critical instruments | 0 / 1–2 / >2 | Maintenance |

For regulated manufacturers (medical devices, food, pharma), wire CAPA aging directly into your risk dashboard. CAPA backlog is the single best predictor of an FDA Form 483 or warning letter.

## Supply chain KRI examples

Post-2020, supply chain KRIs moved from "useful" to "non-negotiable." A modern manufacturer should be able to see disruption building two tiers deep.

| # | KRI | Suggested threshold | Owner |
|---|---|---|---|
| 21 | On-time in-full (OTIF) from suppliers | >95% / 85–95% / <85% | Procurement |
| 22 | Single-source critical materials (count) | <5 / 5–15 / >15 | Procurement |
| 23 | Days of inventory cover for top 20 SKUs | >30 / 15–30 / <15 | Supply chain |
| 24 | Supplier financial-distress alerts (Dun & Bradstreet, RapidRatings) | 0 / 1–3 / >3 | Procurement |
| 25 | Geographic concentration: % spend in single country | <40% / 40–60% / >60% | Procurement |
| 26 | Inbound logistics late-delivery rate | <5% / 5–10% / >10% | Logistics |
| 27 | Cost variance vs. plan on top commodities | ±5% / ±5–15% / >±15% | Procurement |
| 28 | % critical suppliers with current business continuity plan on file | >90% / 70–90% / <70% | Procurement |

Pair item 22 with a documented dual-source plan for each red-flagged material. A KRI without a contingency is a counter, not a control.

## Equipment and asset KRI examples

Reliability data is rich in modern plants. The challenge is filtering the noise.

| # | KRI | Suggested threshold | Owner |
|---|---|---|---|
| 29 | Overall Equipment Effectiveness (OEE), critical lines | >85% / 70–85% / <70% | Production |
| 30 | Unplanned downtime hours (12-month rolling) | Trend ↓ / flat / trend ↑ | Maintenance |
| 31 | Mean Time Between Failures (MTBF), critical assets | >Industry benchmark | Maintenance |
| 32 | Preventive-maintenance compliance | >95% / 85–95% / <85% | Maintenance |
| 33 | Spare-parts stockout rate for critical components | <2% / 2–5% / >5% | Maintenance |
| 34 | % critical assets at end-of-life | <10% / 10–20% / >20% | Engineering |
| 35 | Maintenance backlog (weeks of work) | <4 / 4–8 / >8 | Maintenance |

OEE on its own is a productivity metric, but its decomposition (availability, performance, quality) is one of the most powerful diagnostic KRI sets in manufacturing.

## Environmental and sustainability KRI examples (ISO 14001-aligned)

Environmental KRIs are now scrutinized by regulators, lenders, customers, and community stakeholders.

| # | KRI | Suggested threshold | Owner |
|---|---|---|---|
| 36 | Reportable environmental incidents (year-to-date) | 0 / 1 / >1 | EHS lead |
| 37 | Permit exceedances (air, water, waste) | 0 / 1 / >1 | EHS lead |
| 38 | Energy intensity (MWh per unit produced) vs. baseline | -5% to 0% / 0% to +5% / >+5% | Plant manager |
| 39 | Water withdrawal vs. permit limit (%) | <70% / 70–90% / >90% | EHS lead |
| 40 | Hazardous waste generated (tons) vs. plan | Within plan / +10% / +25% | EHS lead |
| 41 | Scope 1 and 2 emissions vs. reduction target | On / behind / materially behind | Sustainability |

## Workforce and people KRI examples

People risk in manufacturing is operational risk in slow motion. Skill gaps and attrition predict safety and quality outcomes months in advance.

| # | KRI | Suggested threshold | Owner |
|---|---|---|---|
| 42 | Voluntary attrition: production roles | <10% / 10–18% / >18% | HR |
| 43 | Vacancy rate: skilled trades | <5% / 5–10% / >10% | HR |
| 44 | Overtime hours as % of standard (production) | <10% / 10–20% / >20% | Plant manager |
| 45 | % employees current on critical skills certification | >95% / 85–95% / <85% | HR + Ops |
| 46 | Time-to-fill: skilled trade roles (days) | <45 / 45–90 / >90 | HR |
| 47 | Engagement score (annual) | >75 / 65–75 / <65 | HR |

## Cybersecurity and OT risk KRI examples (IEC 62443-aligned)

Industrial cyber events are now a leading driver of unplanned downtime. The risk lives between IT and OT, and KRIs need to span both.

| # | KRI | Suggested threshold | Owner |
|---|---|---|---|
| 48 | OT assets with unsupported operating systems | 0 / 1–5 / >5 | OT Security |
| 49 | Time since last vulnerability scan on the plant network (days) | <30 / 30–60 / >60 | OT Security |
| 50 | % OT-IT network segmentation gaps remediated within SLA | >90% / 70–90% / <70% | OT Security |
| 51 | Privileged accounts on OT not reviewed in 90 days | 0 / 1–3 / >3 | IAM |
| 52 | Phishing simulation click rate (production staff) | <5% / 5–15% / >15% | Cyber |
| 53 | Backup test failures on plant control systems per quarter | 0 / 1 / >1 | OT Security |
| 54 | Unauthorized device connections to OT network per month | 0 / 1–3 / >3 | OT Security |

If you operate to NIST CSF, IEC 62443, or both, mirror these KRIs into your cyber program but report a small operational view to the plant-level risk committee.

## Compliance and regulatory KRI examples

| # | KRI | Suggested threshold | Owner |
|---|---|---|---|
| 55 | Open regulatory findings (count) | 0 / 1–2 / >2 | Compliance |
| 56 | Regulatory inspection findings: critical category | 0 / 1 / >1 | Compliance |
| 57 | Days to close regulatory commitments | <60 / 60–120 / >120 | Compliance |
| 58 | Product compliance documentation overdue (count) | 0 / 1–5 / >5 | Regulatory affairs |
| 59 | Trade and export control breaches per quarter | 0 / 1 / >1 | Trade Compliance |

For regulated industries, instrument these aggressively. A single missed cGMP deadline can cascade into a months-long enforcement cycle.

## Setting thresholds: green, amber, and red

Three defensible methods, the same as in financial-sector KRI design:

- **Statistical** — for high-volume metrics like scrap or downtime, set amber at 1.5σ above the rolling 12-month mean and red at 2.5σ.
- **Risk-appetite-anchored** — start from the board's stated appetite ("zero recordable injuries," "no permit exceedances," "loss events <$2M per year") and back into KRI thresholds that, if breached, would put that appetite at risk.
- **Benchmarked** — for indicators where benchmarks exist (TRIR via BLS, OEE by sector, defect PPM by industry), use external data and document the source.

Whichever method you use, write the rationale into the KRI charter so it survives a plant manager change.

## Building the manufacturing KRI dashboard

The dashboard is for the plant leadership team and the enterprise risk committee. It needs to be readable in two minutes:

- One enterprise heatmap (8 risk domains × red/amber/green)
- A trend strip for the top 10 enterprise KRIs
- A "what changed this month" panel — only KRIs that shifted color
- Plant-by-plant comparison for shared KRIs (TRIR, OEE, OTIF)
- An action register linked to every red KRI

If you have multiple plants, normalize indicators per FTE, per machine-hour, or per unit produced. Otherwise the largest plant always looks worst.

## 90-day implementation roadmap

**Days 1–30: Frame.**
Map your top 10 manufacturing risks across the 8 domains. For each, draft three candidate KRIs. Identify the system of record. Confirm an owner per KRI. End of month one: a 25–40-KRI shortlist with named owners and data sources.

**Days 31–60: Build.**
Establish data feeds from MES, CMMS, QMS, ERP, EHS, and SCADA. Set provisional thresholds using twelve months of historical data. Wire the dashboard. Pilot at one site and the executive risk committee.

**Days 61–90: Embed.**
Run the dashboard in parallel with existing reporting for one cycle. Tune thresholds. Lock the KRI charter. Add the dashboard to the formal monthly plant review and the quarterly board pack. Schedule the first annual KRI calibration.

After 90 days, the program needs maintenance, not expansion. Add a KRI only when you retire one.

## Real-world illustration

A multi-site fabricator we worked with cut recordable injuries 38% over two years using only six leading KRIs: near-miss reporting rate, permit-to-work audit score, contractor incident parity, corrective-action closure, training currency, and overdue maintenance work orders. They retired thirty other safety metrics that nobody read. The smaller, sharper library outperformed the larger one because every KRI on it had a named owner and a defined response when it turned red.

## Common pitfalls

- **Reporting only lagging indicators.** TRIR, scrap, recall counts — all important, all backward-looking. Pair every lagging KRI with a leading one.
- **Plant-level invention.** When KRIs are designed bottom-up at each site, they cannot be aggregated. Define enterprise KRIs centrally, allow site-specific KRIs locally.
- **No threshold escalation.** Red has to trigger a defined response within a defined window. Otherwise red is just a color.
- **Static thresholds.** Recalibrate annually. Your operation, suppliers, and risk profile change.
- **Ignoring OT cyber.** A plant network breach is now one of the most likely causes of unplanned downtime. Instrument it on day one.

## Frequently asked questions

**How many KRIs should a manufacturer have?**
At enterprise level, 25–40 indicators is a healthy range. Each plant adds 10–20 site-specific KRIs.

**How often should manufacturing KRIs be reviewed?**
Daily for safety and production, weekly at plant level, monthly at enterprise risk committee, quarterly at board.

**What is the difference between a KPI and a KRI in manufacturing?**
A KPI measures performance against a goal (OEE, on-time shipment). A KRI measures whether risk is increasing (downtime trend, supplier OTIF deterioration). Same data, different framing, different audience.

**Where does ESG fit in?**
Environmental KRIs (emissions, water, waste, energy intensity) are now a core part of any manufacturing risk dashboard. Treat them as first-class operational risks.

**Do small manufacturers need a KRI program?**
Yes, proportionate. A 100-person plant might run 10–15 KRIs reviewed monthly. The discipline matters more than the size.

## Conclusion

Manufacturing KRIs work because they translate plant-floor reality into a small, decision-ready signal set. The forty-five examples above are not a checklist to copy whole — they are a starting library. Pick the indicators that map to your top risks, instrument them properly from systems you already run, set thresholds you would defend in front of an OSHA inspector or an ISO auditor, and put a named owner against each one.

The manufacturers that get this right do not have the largest risk teams. They have the smallest, sharpest KRI libraries, and a leadership team that actually reads them every Monday morning.
