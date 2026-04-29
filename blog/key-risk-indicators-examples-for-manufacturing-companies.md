---
title: "Key Risk Indicators Examples for Manufacturing Companies"
slug: key-risk-indicators-examples-for-manufacturing-companies
target_keyword: key risk indicators examples for manufacturing
meta_description: "A practical guide to key risk indicators (KRIs) for manufacturing companies, with 40+ examples across safety, supply chain, quality, ESG, and operations — aligned to OSHA, ISO 31000, and ISO 45001."
category: Enterprise Risk Management
tags: [manufacturing, KRI, operational risk, OSHA, ISO 31000, supply chain, safety]
word_count: 2900
---

# Key Risk Indicators Examples for Manufacturing Companies

Manufacturing leaders no longer compete on cost alone. They compete on resilience — the ability to keep production lines running despite raw-material shocks, cyber intrusions on the plant floor, regulatory inspections, climate disruption, and a tightening labor market. That resilience starts with one thing: **knowing which numbers tell you a problem is forming before it lands on the income statement.**

That is what key risk indicators (KRIs) are for. Unlike key performance indicators (KPIs), which measure how well you executed yesterday, KRIs are forward-looking signals that quantify the *probability and severity* of a future loss. A KPI tells the plant manager that throughput hit 94% of plan last week. A KRI tells the same manager that unplanned downtime is trending 18% above the rolling 90-day baseline — which means next week's throughput is already at risk.

This guide collects more than 40 practical key risk indicators examples for manufacturing companies, organized by risk domain, with target thresholds, data sources, and the regulatory or framework anchors (OSHA, ISO 31000, ISO 45001, ISO 14001, NIST CSF) that auditors expect to see referenced in your enterprise risk management (ERM) documentation.

## What is a Key Risk Indicator in a Manufacturing Context?

A key risk indicator is a measurable metric that provides early warning of increasing risk exposure to a specific objective. In manufacturing, those objectives typically cluster into six areas:

1. **Worker safety and occupational health**
2. **Operational continuity and asset reliability**
3. **Supply chain and raw materials**
4. **Product quality and recall exposure**
5. **Environmental, social, and governance (ESG)**
6. **Cyber-physical and IT/OT security**

A well-designed manufacturing KRI has five attributes:

- **Predictive** — it moves *before* the underlying loss event occurs.
- **Quantifiable** — it produces a number, not a narrative.
- **Comparable** — it can be benchmarked against an internal threshold or industry baseline.
- **Owned** — a named role is accountable for monitoring and escalating.
- **Actionable** — when the metric crosses a threshold, a specific response is triggered.

If a metric does not meet all five tests, it is reporting, not risk indication.

## How to Build a KRI Library for Your Plant Network

Before listing examples, here is the workflow most ERM teams in manufacturing follow when they build (or rebuild) a KRI library:

1. **Anchor to the risk register.** Every KRI must trace to a top risk in the enterprise or plant-level risk register. If a KRI does not map to a risk you have already identified, you are measuring noise.
2. **Choose lead vs. lag deliberately.** Lagging indicators (e.g., recordable injury rate) are easy to measure but late. Leading indicators (e.g., near-miss reports per 1,000 hours) are harder to source but earlier. A balanced library carries both.
3. **Set three-tier thresholds.** Most mature programs use green/amber/red bands. Green is "within tolerance," amber triggers escalation to the risk owner, red triggers escalation to the executive risk committee.
4. **Assign frequency.** Safety KRIs are usually weekly. Supply chain KRIs are weekly or monthly. Strategic KRIs are quarterly. Match the cadence to how fast the underlying risk can change.
5. **Automate the data feed.** KRIs that depend on someone manually pulling a spreadsheet rarely survive 12 months. Connect them to your MES, EAM, EHS, or GRC platform.
6. **Review quarterly.** A KRI that has been green for eight straight quarters is either well-controlled or poorly designed. Pressure-test which.

With that workflow in mind, the rest of this article is the library itself.

## 1. Health, Safety, and Occupational Risk KRIs

Safety remains the most visible risk category in manufacturing because regulators (OSHA in the US, HSE in the UK, equivalent bodies in the EU) publish injury statistics and enforce penalties on lagging performers. ISO 45001 also requires demonstrable monitoring of OH&S performance.

| KRI | Target / Threshold | Data Source | Framework |
|---|---|---|---|
| **Total Recordable Incident Rate (TRIR)** | < 1.5 per 200,000 hours | OSHA 300 log | OSHA, ISO 45001 |
| **Lost Time Injury Frequency Rate (LTIFR)** | < 0.5 per 200,000 hours | EHS system | ISO 45001 |
| **Near-miss reports per 1,000 hours worked** | > 5 (higher is better — reflects reporting culture) | EHS reporting tool | ISO 45001 |
| **Percentage of corrective actions closed on time** | > 95% | EHS / CAPA | ISO 45001 |
| **Safety training completion rate** | > 98% | LMS | OSHA 1910 |
| **Lockout/tagout audit pass rate** | > 99% | Plant audits | OSHA 1910.147 |
| **Days since last serious incident** | Trending upward | Plant log | Internal |
| **Contractor safety rating (avg)** | > 90/100 | Contractor mgmt | Internal |

**Why the "near-miss" KRI matters.** A common pattern in mature manufacturers is that the *higher* the near-miss reporting rate, the *lower* the recordable injury rate. A sudden drop in near-miss reports is almost always an early warning that the reporting culture is breaking down, not that the plant became safer overnight.

## 2. Operational and Asset Reliability KRIs

These KRIs measure the risk that the plant cannot produce what the schedule says it should produce. They are the most direct link between risk management and EBITDA.

| KRI | Target / Threshold | Data Source | Framework |
|---|---|---|---|
| **Unplanned downtime as % of available hours** | < 3% | MES | ISO 22301 |
| **Mean Time Between Failures (MTBF) — critical assets** | Trending up | EAM / CMMS | ISO 55000 |
| **Mean Time To Repair (MTTR)** | < 4 hours for tier-1 assets | EAM | ISO 55000 |
| **Preventive maintenance completion rate** | > 90% | CMMS | ISO 55000 |
| **Spare parts stock-out events on critical SKUs** | 0 per quarter | ERP | Internal |
| **Overall Equipment Effectiveness (OEE) variance vs plan** | < 5 percentage points | MES | Internal |
| **Single-source equipment dependencies** | Documented and < 10% of tier-1 assets | Asset register | ISO 22301 |
| **Average asset age vs design life (%)** | < 75% for critical lines | Asset register | ISO 55000 |

A practical tip: pair MTBF and MTTR. Together they tell you whether reliability is degrading because failures are more frequent, slower to repair, or both.

## 3. Supply Chain and Raw Materials KRIs

Post-2020, supply chain KRIs have moved from procurement back-office metrics to board-level risk indicators. ISO 28000 and the Sedex SMETA framework are the most commonly referenced anchors.

| KRI | Target / Threshold | Data Source | Framework |
|---|---|---|---|
| **% of revenue dependent on single-source suppliers** | < 15% | Supplier master | ISO 28000 |
| **On-time in-full (OTIF) delivery from tier-1 suppliers** | > 95% | ERP | Internal |
| **Days of inventory cover for critical inputs** | > 30 days | ERP | Internal |
| **Supplier financial health flags (Altman Z-score < 1.8)** | < 5% of tier-1 base | D&B / Bloomberg | Internal |
| **Geopolitical concentration risk (% spend in single country)** | < 30% | Procurement | ISO 31000 |
| **Logistics cost variance vs budget** | < 10% | Finance | Internal |
| **Customs clearance rejection rate** | < 1% | Logistics | Internal |
| **Tier-2 visibility (% of tier-1 disclosing tier-2)** | > 70% | Supplier portal | Sedex SMETA |

The single-source KRI is often the most politically sensitive. Procurement teams resist disclosing it because it implies past sourcing decisions created risk. Resist that resistance — it is exactly what the audit committee needs to see.

## 4. Quality and Product Recall KRIs

Quality KRIs sit at the intersection of operational risk and reputational risk. A single recall in regulated sectors (medical devices, automotive, food) can erase a year of margin.

| KRI | Target / Threshold | Data Source | Framework |
|---|---|---|---|
| **Customer complaints per million units shipped** | < 50 ppm | CRM / QMS | ISO 9001 |
| **First-pass yield** | > 98% | MES | ISO 9001 |
| **Cost of poor quality (COPQ) as % of revenue** | < 2% | Finance | ISO 9001 |
| **Open Corrective and Preventive Actions (CAPAs) > 90 days** | < 5 | QMS | ISO 9001 |
| **Supplier-caused defect rate** | < 1% of total defects | QMS | ISO 9001 |
| **Recall events in trailing 24 months** | 0 | QMS | Sector reg |
| **Audit findings classified as "major"** | 0 per cycle | Internal audit | ISO 19011 |
| **Calibration overdue rate (test equipment)** | < 1% | QMS | ISO/IEC 17025 |

## 5. Environmental, ESG, and Climate KRIs

Whether your investors are asking about CSRD, SEC climate disclosures, or TCFD-aligned reporting, manufacturers need defensible environmental KRIs. ISO 14001 remains the operational anchor.

| KRI | Target / Threshold | Data Source | Framework |
|---|---|---|---|
| **Scope 1+2 emissions intensity (tCO2e per unit output)** | Trending down vs baseline | Energy meters / EHS | TCFD, GHG Protocol |
| **Water withdrawal in water-stressed locations (m³)** | < approved permit limits | EHS | CDP Water |
| **Hazardous waste generated per unit output** | Trending down | EHS | RCRA / ISO 14001 |
| **Reportable environmental incidents** | 0 per quarter | EHS | EPA / equivalent |
| **% of plants with valid environmental permits** | 100% | Compliance | Local reg |
| **Energy intensity (kWh per unit)** | Trending down | Utility data | ISO 50001 |
| **% of tier-1 suppliers with disclosed Scope 1+2 data** | > 60% | Supplier portal | CDP Supply Chain |
| **Stranded asset exposure (% of capex in high-risk geographies)** | Tracked | Strategy | TCFD |

## 6. Cyber-Physical and OT Security KRIs

The convergence of IT and operational technology (OT) — PLCs, SCADA, MES, IIoT sensors — has created a new risk class. Ransomware on a corporate network is painful; ransomware on a plant network stops production. NIST CSF and IEC 62443 are the most common anchors.

| KRI | Target / Threshold | Data Source | Framework |
|---|---|---|---|
| **Mean Time To Detect (MTTD) for OT anomalies** | < 4 hours | SIEM / OT IDS | NIST CSF |
| **% of OT assets in inventory and patched within SLA** | > 90% | CMDB | IEC 62443 |
| **Number of legacy OT systems with no vendor support** | Documented and trending down | Asset register | NIST CSF |
| **OT segmentation gaps identified per quarter** | < 5 | Network audits | IEC 62443 |
| **Phishing simulation failure rate (plant staff)** | < 8% | Security awareness | NIST CSF |
| **Privileged OT account reviews completed on time** | 100% | IAM | ISO 27001 |
| **Backup restore test success rate (production systems)** | > 95% | Backup logs | ISO 22301 |
| **Number of unauthorized USB / removable media detections** | Trending down | DLP / endpoint | NIST CSF |

## 7. Workforce and Labor KRIs

The labor market is now a manufacturing risk in its own right — particularly for skilled trades, machinists, and shift supervisors.

| KRI | Target / Threshold | Data Source | Framework |
|---|---|---|---|
| **Voluntary turnover among production staff** | < 12% annual | HRIS | Internal |
| **Open roles in critical trades > 60 days** | < 10% of headcount | HRIS / ATS | Internal |
| **Overtime as % of total hours** | < 8% | Payroll | Internal |
| **Training hours per FTE** | > 24 hours / year | LMS | ISO 45001 |
| **Succession coverage for plant manager and shift leads** | > 1 ready-now successor | HR | Internal |
| **Engagement survey score (production staff)** | > 75% favorable | Survey tool | Internal |

## 8. Strategic and Reputational KRIs

These KRIs are often run quarterly at the executive risk committee level rather than weekly at the plant.

| KRI | Target / Threshold | Data Source |
|---|---|---|
| **Customer concentration (% revenue from top 5)** | < 40% | Finance |
| **Regulatory enforcement actions in trailing 24 months** | 0 | Legal |
| **Negative media mentions tied to plant operations** | Trending down | Media monitoring |
| **NPS variance vs prior quarter** | > -5 points | CX |
| **R&D pipeline coverage (% of revenue from products < 5 years old)** | > 25% | Strategy |

## Putting the Library to Work: A Worked Example

A KRI library is only valuable when it drives a decision. Here is how a mid-size automotive parts manufacturer might use this library in a single month.

In week one, the **near-miss reporting rate** drops from 6.4 to 3.1 per 1,000 hours at one plant. That is a 51% drop. The plant manager investigates and finds that a long-tenured EHS lead retired and the replacement has not yet rebuilt the reporting cadence. **Action:** dedicated coaching and a reset of the daily safety huddle. The KRI is back in the green band within three weeks — and the plant avoids what data suggests would have been an injury within 60 days.

In week two, the **single-source supplier KRI** crosses the 15% threshold because a competitor acquired one of the company's tier-1 suppliers, eliminating a backup. **Action:** procurement opens qualification of an alternate supplier in a different country, and the audit committee is briefed at the next quarterly risk review.

In week three, the **OT MTTD** climbs from 3.5 hours to 6.8 hours after a SIEM rule was disabled to reduce alert fatigue. **Action:** the rule is re-enabled with tuned thresholds, and the security team adds OT MTTD to the monthly executive scorecard.

None of those events would appear in a standard P&L review. All three would have shown up — late and expensively — as injuries, stockouts, or a ransomware-induced plant shutdown. That is the difference between KPI reporting and KRI-driven risk management.

## Common Mistakes Manufacturers Make With KRIs

Even well-resourced ERM teams stumble on the same handful of issues:

- **Too many KRIs.** A library with 200 indicators gets ignored. Most mature manufacturers run 30–60 enterprise-level KRIs and a similar number at each plant.
- **All lagging, no leading.** TRIR, recall counts, and downtime hours are necessary but tell you about yesterday. Pair every lagging indicator with at least one leading indicator.
- **No owner.** A KRI without a named accountable person is a chart no one reads. Assign ownership at the plant manager, function head, or director level — not "the team."
- **Static thresholds.** A 3% downtime threshold that was set in 2019 may be too loose for a modern lights-out line and too tight for an aging legacy plant. Recalibrate annually.
- **Disconnected from controls.** A red KRI should map to a specific control that needs investment, redesign, or testing. If the response to a red KRI is a slide in next quarter's review, the link is broken.
- **No board-level rollup.** Plant-level KRIs need a defensible aggregation method so the board sees enterprise risk, not a wall of numbers.

## How These KRIs Map to Common Frameworks

If your organization needs to demonstrate alignment to a recognized framework, here is the shortest defensible mapping:

- **ISO 31000** — the principles and process anchor. Your KRI library is the *monitoring and review* element of the ISO 31000 process.
- **COSO ERM 2017** — KRIs sit under the *Performance* component (specifically "Identifies and Analyzes Risk" and "Implements Risk Responses").
- **OSHA / ISO 45001** — anchors for all safety KRIs in section 1.
- **ISO 9001** — anchor for quality KRIs in section 4.
- **ISO 14001 / ISO 50001 / GHG Protocol / TCFD** — environmental and climate KRIs in section 5.
- **NIST CSF / IEC 62443 / ISO 27001** — cyber and OT KRIs in section 6.
- **ISO 22301** — business continuity KRIs across reliability and supply chain.
- **ISO 28000** — supply chain security KRIs.
- **Basel-style operational risk taxonomy** — useful for manufacturers with regulated finance subsidiaries to align their operational loss event categorization.

## A Starter Set: The 12 KRIs Every Manufacturer Should Track First

If you are building from scratch, do not start with all 40-plus. Start with twelve and earn the right to expand:

1. Total Recordable Incident Rate (TRIR)
2. Near-miss reports per 1,000 hours worked
3. Unplanned downtime as % of available hours
4. Preventive maintenance completion rate
5. % of revenue dependent on single-source suppliers
6. Days of inventory cover for critical inputs
7. First-pass yield
8. Open CAPAs > 90 days
9. Reportable environmental incidents
10. Mean Time To Detect (MTTD) for OT anomalies
11. Voluntary turnover among production staff
12. Customer concentration (% revenue from top 5)

This twelve-metric starter set covers safety, operations, supply chain, quality, environment, cyber, workforce, and strategy in a single dashboard. Most ERM teams can stand it up in a quarter using existing systems and a single weekly meeting cadence.

## From KRI Library to KRI Program

A list of metrics is not a program. A program needs governance, technology, and discipline:

- **Governance** — a risk committee with defined escalation paths and a calendar. Plant-level monthly, function-level monthly, executive-level quarterly, board-level twice a year.
- **Technology** — a GRC or ERM platform that ingests KRI feeds automatically, applies thresholds, and routes alerts. A spreadsheet works for the first 90 days; it does not scale beyond that.
- **Discipline** — quarterly KRI review where every metric is challenged: "Is this still predictive? Is the threshold still right? Is the owner still the right person?" KRIs that fail the test get retired.

Manufacturing risk is unforgiving in one specific way: most major losses are *foreseeable in the data* if anyone is watching. The companies that escape those losses are not luckier — they are the ones who turned their KRI library into a living, governed program that flags problems while there is still time to fix them.

That is what a strong set of key risk indicators examples for manufacturing companies, properly implemented, gives you: time. And in modern manufacturing, time is the most valuable risk control there is.

---

*Looking to operationalize this KRI library inside your own ERM platform? Track each indicator with thresholds, owners, and automated alerts so red signals reach the right person before they reach the income statement.*
