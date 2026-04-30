---
title: "Key Risk Indicators Examples for Manufacturing Companies"
slug: key-risk-indicators-examples-for-manufacturing-companies
target_keyword: key risk indicators examples for manufacturing
meta_description: "A practical guide to Key Risk Indicators (KRIs) for manufacturing companies, with 40+ examples across safety, operations, supply chain, quality, compliance, and ESG."
word_count_target: 2700
pattern: "A: KRI Examples for [Industry]"
date: 2026-04-30
---

# Key Risk Indicators Examples for Manufacturing Companies

Manufacturing leaders sit on top of more risk than almost any other industry. A single hour of unplanned downtime on a busy line can cost six figures. One missed OSHA recordable can trigger a regulator visit. A bad batch can mean a recall, a lawsuit, and a brand crisis all at once. Yet most plants still discover these problems *after* they happen — through incident reports, customer complaints, or an auditor's exit meeting.

Key Risk Indicators (KRIs) flip that equation. Instead of telling you what already went wrong (those are KPIs and lagging indicators), KRIs tell you what is *about to* go wrong, while there is still time to act. Done properly, a manufacturing KRI program is the early-warning system that connects the shop floor to the boardroom.

This article gives you a working library of more than 40 Key Risk Indicators examples for manufacturing companies, grouped by risk domain, with thresholds, data sources, and the standards (OSHA, ISO 9001, ISO 14001, ISO 45001, ISO 27001, IATF 16949) they map to. By the end you will have a template you can drop into your enterprise risk management (ERM) framework and start populating from your existing MES, ERP, EHS, and CMMS systems.

## What Is a Key Risk Indicator in a Manufacturing Context?

A Key Risk Indicator is a measurable, forward-looking metric whose movement signals a change in the level of exposure to a specific risk. In a factory, a KRI must satisfy four tests:

1. **Leading, not lagging.** It moves *before* the loss event. "Number of recordable injuries" is a KPI; "number of near-miss reports per 100,000 hours worked" is a KRI.
2. **Tied to a defined risk.** Each KRI lives inside the risk register entry it monitors. No orphans.
3. **Threshold-bound.** Green / amber / red bands are agreed in advance and approved by the risk owner.
4. **Owned and actionable.** A named role — plant manager, EHS lead, head of quality — is accountable for response when the KRI breaches.

KRIs are not the same as KPIs, KCIs (Key Control Indicators), or OEE components, although they often share data sources. Think of the relationship as: KRIs warn, KCIs assure, KPIs report, and OEE optimises.

## How to Build a Manufacturing KRI Library

Before listing examples, here is the four-step approach that stops a KRI program from becoming a dashboard graveyard:

1. **Anchor on the top 10 risks** from your enterprise risk register. Most plants over-monitor minor risks and under-monitor strategic ones.
2. **Pick two to four KRIs per risk.** One leading behavioural indicator, one operational, one financial / customer-facing, and optionally one external (commodity prices, regulator activity).
3. **Calibrate thresholds with two years of historical data.** A threshold pulled from a textbook is worse than no threshold.
4. **Review quarterly at the management risk committee.** Retire KRIs that never move and add new ones as the risk landscape shifts.

Now, the examples.

## 1. Health, Safety, and Environment (HSE) KRIs

Safety is the highest-impact risk category in most manufacturing operations and the one regulators look at first. These KRIs align with OSHA recordkeeping rules (29 CFR 1904) and ISO 45001 occupational health and safety management.

| KRI | Definition | Typical amber / red threshold | Data source |
|---|---|---|---|
| Near-miss reporting rate | Near-miss reports per 200,000 hours worked | Amber: <10, Red: <5 (low reporting hides risk) | EHS system |
| Lost-time injury frequency rate (LTIFR) trend | 12-month rolling LTIFR vs prior year | Amber: +10%, Red: +25% | EHS system |
| Overdue corrective actions from safety incidents | % of CAPAs past due date | Amber: >10%, Red: >20% | EHS / CAPA module |
| Safety training compliance | % of operators with current required certifications | Amber: <95%, Red: <90% | LMS |
| Permit-to-work violations | Number of confined-space, hot-work, or LOTO permit breaches per month | Amber: 1, Red: ≥3 | EHS audits |
| Contractor safety incident rate | Recordable rate among contractors | Amber: >employee rate, Red: >2× employee rate | EHS system |
| Air emissions exceedances | Number of stack-monitoring readings outside permit limits | Amber: 1, Red: ≥2 | CEMS |
| Hazardous waste storage time | Days drums held beyond 90-day RCRA limit | Amber: any >75 days, Red: any >85 days | Waste manifests |
| Reportable spill events | Spills exceeding reportable quantity in 12 months | Amber: 1, Red: ≥2 | EHS log |
| Energy intensity drift | kWh per unit produced vs baseline | Amber: +5%, Red: +10% | Plant utilities |

A practical note: do not turn near-miss volume into a punitive metric. The moment supervisors believe high near-miss numbers reflect badly on them, the data dies.

## 2. Operational and Production KRIs

These KRIs target the risk of unplanned downtime, throughput loss, and asset reliability failures. They feed off your MES and CMMS.

- **Mean time between failures (MTBF) deterioration** — A drop of more than 15% on a critical asset class, three months running, is an early signal of a reliability cliff.
- **Mean time to repair (MTTR) drift** — Rising MTTR usually points at spare-part availability or skills gaps before it shows up as downtime.
- **Preventive maintenance (PM) compliance rate** — Percentage of scheduled PMs completed in window. Below 85% is amber; below 75% is red and statistically correlates with breakdown clusters within 60 days.
- **Critical spare-part stock-out events** — Number of times a Class A spare hit zero. One per quarter is usually red.
- **Backlog of overdue work orders on critical equipment** — Trend matters more than absolute number.
- **Unplanned downtime hours as a percentage of planned production hours** — Track per line and per shift; aggregated numbers hide the problem cell.
- **OEE volatility** — Standard deviation of weekly OEE. Falling OEE is bad; *erratic* OEE is often worse because it signals loss of process control.
- **Changeover time variance** — When changeovers start drifting outside control limits, expect quality spikes within weeks.
- **Utility reliability** — Compressed-air pressure dips per shift, voltage sags per month, water-treatment alarm count.

## 3. Supply Chain and Procurement KRIs

Post-2020, supply chain risk graduated from a procurement concern to a board-level one. These KRIs sit at the intersection of procurement, S&OP, and ERM.

- **Single-source supplier exposure** — Percentage of bill-of-material spend with no qualified alternative. Anything above 15% is typically red for a regulated manufacturer.
- **Supplier on-time-in-full (OTIF) decline** — Top-20 supplier OTIF dropping below 92% is amber.
- **Supplier financial-health score downgrades** — Number of strategic suppliers with a credit-score downgrade in the past quarter (Dun & Bradstreet, RapidRatings, Creditsafe).
- **Geographic concentration of Tier-2 suppliers** — Percentage of Tier-2 spend in a single country or sub-region.
- **Inbound logistics dwell time** — Days inventory spends in transit beyond standard. A creeping number signals port, carrier, or customs stress.
- **Commodity price volatility exposure** — Rolling 30-day standard deviation of key input prices vs hedged percentage.
- **Supplier audit findings** — Number of major non-conformances per audit cycle.
- **Supplier cyber-incident notifications** — Count of breach notifications from connected suppliers (a fast-growing KRI under NIS2 and SEC cyber rules).
- **Inventory days of supply for critical components** — Falling below 14 days on a Class A part is typically red.
- **Counterfeit-part detection events** — Especially relevant in electronics, aerospace, and automotive.

## 4. Quality and Customer KRIs

Quality KRIs predict the risk of recalls, warranty claims, customer escalations, and certification loss under IATF 16949, AS9100, or ISO 13485.

- **First-pass yield (FPY) trend** — A 2-percentage-point decline over four weeks usually precedes a customer complaint.
- **Scrap rate by product family** — Watch the change, not the absolute level.
- **Statistical Process Control (SPC) out-of-control signals per shift** — Western Electric or Nelson rule violations on critical-to-quality characteristics.
- **Supplier PPM (parts per million) defect rate** — Particularly for safety-critical components.
- **Open customer complaints aging** — Number open more than 30 days.
- **8D / CAPA cycle time** — Average days to close a corrective action. Lengthening cycle time is a leading indicator of systemic quality erosion.
- **Audit non-conformances repeat rate** — Percentage of findings that recur within 12 months. Anything above 10% suggests root-cause analysis is weak.
- **Calibration overdue rate** — Percentage of measuring equipment past calibration date.
- **Field return rate within warranty period** — Rolling 90-day trend by SKU.
- **Customer-driven Stop-Ship events** — A single one is amber; two in a quarter is a board-level red.

## 5. Compliance and Regulatory KRIs

Manufacturing is regulated by OSHA, EPA, FDA (for medical devices and food), DOT, BIS, REACH, RoHS, and a growing list of ESG and climate disclosure rules. Compliance KRIs warn that the gap between obligation and execution is widening.

- **Regulatory inspection findings trend** — Rolling 24-month count of OSHA, EPA, or FDA observations.
- **Open compliance obligations past due** — Permits, filings, and renewals.
- **Time since last internal compliance audit** by site — Sites that go more than 18 months without a fresh audit are red.
- **Number of new regulations identified but not yet impact-assessed** — A surprisingly powerful KRI for plants in multiple jurisdictions.
- **Whistleblower / ethics line reports per 1,000 employees** — Both very low (suggesting fear) and unusually high values matter.
- **Sanctions / export-control screening hit rate** — Count of new flagged customers, distributors, or end-uses.
- **Anti-bribery training currency** — Percentage of customer-facing and sourcing staff with current training.
- **Data-subject access requests overdue** — GDPR / CCPA aging beyond statutory window.

## 6. Cybersecurity and OT (Operational Technology) KRIs

Cyber-physical risk is now a top-five risk for most manufacturers. The convergence of IT and OT means a ransomware event can stop production lines, not just email.

- **OT assets without current patch level** — Percentage of PLCs, HMIs, and historians more than two patch cycles behind.
- **Unauthorised USB or removable-media events on the OT network** per month.
- **Network segmentation drift** — Number of new firewall rules between IT and OT zones added without change-control approval.
- **Privileged-access account count** with access to SCADA / MES — Trend up is bad.
- **Phishing simulation click-rate** at production sites — Often higher than corporate; threshold should be site-specific.
- **Endpoint detection coverage on engineering workstations** — Below 95% is red.
- **Mean time to detect (MTTD) on OT incidents** — Should improve year on year; flat or rising MTTD is a KRI.
- **Backups not tested in 90 days** — Particularly the offline copies.
- **Industrial IoT devices without identity / certificate management** — A growing KRI as smart-factory rollouts accelerate.

These map to NIST CSF 2.0, IEC 62443, and ISO 27001 controls.

## 7. Workforce and Skills KRIs

Hard to staff a smart factory if you cannot keep skilled operators and engineers.

- **Voluntary turnover among machine operators and skilled trades** — Compare to industry baseline.
- **Open requisitions for safety-critical roles** aging beyond 60 days.
- **Average tenure on critical roles** falling below 24 months.
- **Internal training completion rate** for upskilling programs.
- **Overtime as a percentage of total hours** — Sustained levels above 10% correlate with both safety incidents and quality defects.
- **Single points of knowledge** — Number of critical processes with only one trained operator.
- **Engagement survey eNPS** at site level — Sites diverging more than 15 points below the network average rarely improve quietly.

## 8. ESG, Climate, and Sustainability KRIs

Investors, customers, and increasingly regulators (CSRD in Europe, SEC climate rule, California SB 253) want measurable progress, not glossy reports.

- **Scope 1 and 2 emissions intensity vs trajectory** — Rolling 12-month tCO₂e per unit output against the SBTi pathway.
- **Scope 3 supplier coverage** — Percentage of Tier-1 spend with disclosed emissions data.
- **Water withdrawal in water-stressed sites** — Volume from sites flagged High or Extremely High by the WRI Aqueduct tool.
- **Waste diverted from landfill** — Trend, by site.
- **Climate-physical exposure** — Number of facilities in 1-in-100-year flood, wildfire, or extreme-heat zones, with capex mitigation status.
- **Modern slavery / human rights audit coverage** — Percentage of Tier-2 high-risk suppliers audited in the past 24 months.

## Putting the KRIs to Work: A Sample Dashboard Structure

A useful manufacturing KRI dashboard usually has five layers:

1. **Plant heat map** — One row per site, one column per risk domain, RAG status.
2. **Trend lines** — 13-month rolling for each KRI, with thresholds drawn in.
3. **Breach log** — Every amber and red event in the last quarter, with owner and CAPA status.
4. **Forward look** — Indicators trending toward thresholds even if not yet breached.
5. **Commentary** — Risk owner's narrative on movements, changes in environment, and proposed actions.

The biggest mistake is publishing the dashboard without governance. KRIs only change behaviour when there is a standing agenda item at the management risk committee, with the same level of rigour as the financial review.

## Common Pitfalls to Avoid

- **Too many indicators.** Twelve well-tended KRIs beat fifty neglected ones. If a metric never moves, retire it.
- **Lagging metrics dressed up as KRIs.** "Recordable injury rate" is lagging. Ask: would this number alert me *before* the loss?
- **Thresholds set by the risk team alone.** They must be co-owned by the operational owner.
- **Static thresholds.** Recalibrate annually. A 95% PM-compliance threshold from 2019 may be obsolete after a digital maintenance rollout.
- **No tie to incentives.** When KRI breaches do not influence budget, bonus, or capex prioritisation, the program quietly dies.
- **One central dashboard, no site ownership.** Each plant manager should have *their* KRI sheet, not just a corporate report.

## Mapping KRIs to Standards and Frameworks

Most of the indicators above map cleanly to one or more of:

- **ISO 31000** — overall risk management.
- **COSO ERM 2017** — strategy and performance integration.
- **ISO 45001** — occupational H&S management.
- **ISO 14001** — environmental management.
- **ISO 9001 / IATF 16949 / AS9100** — quality.
- **ISO 27001 / IEC 62443 / NIST CSF 2.0** — information and OT security.
- **OSHA 29 CFR 1904** — injury and illness recordkeeping.
- **CSRD / ESRS, SEC climate rule, TCFD, SBTi** — climate and sustainability.

When you build the KRI library, label each entry with the framework reference. It makes audits faster and helps win regulator goodwill.

## Frequently Asked Questions

**How many KRIs should a single manufacturing site have?**
Most well-run plants report on 15 to 25 site-level KRIs and feed a smaller subset (six to ten) into the enterprise dashboard.

**Who owns KRIs in a manufacturing organisation?**
Each KRI has two owners: the *risk owner* (usually the plant manager, EHS lead, or head of quality) and the *data owner* (the team that produces the underlying data — often MES, CMMS, or EHS administrators).

**How often should manufacturing KRIs be reviewed?**
Operational KRIs weekly at the plant level, monthly at the site leadership level, and quarterly at the enterprise risk committee. Strategic and ESG KRIs at least quarterly.

**Are KRIs the same as OEE?**
No. OEE is a performance indicator for asset effectiveness. A KRI is forward-looking and tied to a specific risk. They share data sources and complement each other but should not be conflated.

**What tools can collect manufacturing KRI data automatically?**
MES (e.g. Rockwell FactoryTalk, Siemens Opcenter, Ignition), CMMS (Maximo, SAP PM, Fiix), EHS platforms (Enablon, Cority, Intelex), and GRC platforms (LogicGate, Archer, ServiceNow IRM) cover most of the indicators in this list.

## Closing Thought

A manufacturing KRI library is not a deliverable; it is an operating habit. Start with the top ten enterprise risks, pick two or three indicators each, calibrate with real data, and put a standing review on the calendar. Within two quarters you will start seeing the early warnings you are missing today — and within a year, the program will be paying for itself in avoided downtime, fewer incidents, and faster regulator interactions.
