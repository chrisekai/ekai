---
title: "Operational Risk Key Risk Indicators Examples"
slug: operational-risk-key-risk-indicators-examples
target_keyword: operational risk key risk indicators
meta_description: "A complete guide to Operational Risk Key Risk Indicators (KRIs), with 50+ examples across people, process, systems, and external events — aligned to Basel III/IV and ORX taxonomy."
word_count_target: 3000
pattern: "B: [Risk Type] KRI Examples"
date: 2026-04-30
---

# Operational Risk Key Risk Indicators Examples

If credit and market risk are about decisions, operational risk is about everything that happens *between* decisions — every payment processed, every system deployed, every employee onboarded, every vendor relied on. It is also the risk category that has produced the most damaging single events in financial history: the Société Générale rogue trading loss, the Knight Capital trading-software incident, the Capital One data exposure, and the long tail of conduct fines that followed the 2008 crisis.

Operational risk is hard to model and even harder to predict on the back of historical loss data alone, because the worst events are by definition rare. That is why **Key Risk Indicators (KRIs)** are the workhorse of any serious operational risk program. KRIs are forward-looking, frequently updated metrics that reveal whether the *conditions* that produce losses are getting better or worse — long before the loss itself shows up in the GL.

This article is a practical, banker- and CRO-friendly catalogue of operational risk KRIs. It covers more than 50 examples, organised by the four-cause Basel taxonomy (people, process, systems, external events) and aligned to the ORX reference taxonomy and the Basel Committee's Principles for Sound Management of Operational Risk (PSMOR). It also covers thresholds, governance, and how KRIs feed into the new Standardised Approach (SA) under Basel III.1 / IV.

## Operational Risk: The Definition That Matters

The Basel Committee defines operational risk as "the risk of loss resulting from inadequate or failed internal processes, people and systems, or from external events. This definition includes legal risk but excludes strategic and reputational risk."

Three things follow from that definition for KRI design:

1. **Four causes.** Every operational risk KRI should map to people, process, systems, or external events. If you cannot map it, it probably belongs in a different risk category.
2. **Loss-event focus.** KRIs should reflect the conditions that produce the seven Basel event-type categories: internal fraud, external fraud, employment practices, clients/products/business practices, damage to physical assets, business disruption and system failures, and execution/delivery/process management.
3. **Inclusion of legal risk.** Legal-conduct KRIs (litigation pipeline, regulatory enforcement actions, anti-financial-crime backlog) belong inside the operational risk KRI library — not floating elsewhere.

## What Distinguishes a KRI from Other Risk Metrics?

Operational risk teams swim in metrics. The cleanest way to keep them organised is the four-letter taxonomy:

- **KRI – Key Risk Indicator.** Leading. Tells you exposure is changing.
- **KCI – Key Control Indicator.** Tells you whether a specific control is operating effectively.
- **KPI – Key Performance Indicator.** Tells you how the business is performing.
- **KLI – Key Loss Indicator.** Lagging. Tells you what already went wrong.

A good operational risk dashboard usually pairs each major risk with one KRI, one KCI, and one KLI so you can see exposure, control health, and realised loss together.

## How to Build an Operational Risk KRI Library

Eight rules separate a credible KRI program from a vanity dashboard:

1. **Anchor on the risk taxonomy.** Each KRI must be tied to a specific Level 1 / Level 2 risk in the firm-wide taxonomy — typically the ORX reference taxonomy.
2. **Define the indicator precisely.** Numerator, denominator, frequency, source system, exclusions. Ambiguity kills.
3. **Set thresholds with statistical justification.** Use two to three years of history; do not import textbook numbers.
4. **Use a three-band RAG.** Green / amber / red. Five bands are noise.
5. **Assign two owners.** A risk owner (the first-line accountable executive) and a data owner (who guarantees the number).
6. **Tie escalation to governance.** Red breaches go to the operational risk committee within an agreed window, with a CAPA owner.
7. **Validate with loss data quarterly.** A KRI that never correlates with loss events should be challenged.
8. **Recalibrate at least annually.** Especially after major change programs, M&A, or new product launches.

The rest of this guide is the catalogue.

## 1. People-Driven Operational Risk KRIs

People risk covers conduct, capacity, capability, and culture. It is the single biggest driver of internal-fraud and employment-practices losses.

### Conduct and culture

- **Code-of-conduct training currency** — Percentage of employees with training completed within policy window. Amber: <95%; Red: <90%.
- **Whistleblower hotline volume** — Reports per 1,000 employees. Both very low (signal of fear) and unusually high values matter.
- **Speak-up survey index** — Percentage of staff who agree they could raise a concern without fear of reprisal. A drop of >5 points year on year is amber.
- **Disciplinary cases involving control breaches** — Trailing 12-month count and severity index.
- **Front-office mandatory-leave / block-leave compliance** — Percentage of in-scope traders who took the required consecutive days. Long-standing rogue-trader red flag.
- **Personal-account dealing breaches** per 1,000 covered persons.
- **Gifts-and-entertainment policy breaches** detected via expense analytics.

### Capacity and capability

- **Critical-role vacancy rate** in the second and third lines of defence. >10% open >60 days is red.
- **Operations span of control** — Average reports per first-line manager. A creeping number is a known precursor of process-execution losses.
- **Overtime as a percentage of total hours** in operations and technology. Sustained levels above 10% correlate with error rates.
- **Single points of knowledge** — Number of critical processes with one trained operator.
- **Voluntary turnover in regulated functions** — Compliance, AML, internal audit. Industry baseline plus 200 bps is amber.
- **Average tenure in critical roles** below 24 months.

### Conduct intelligence

- **eComms / vComms surveillance backlog** — Average days to review flagged communications.
- **Trade-surveillance alert backlog** aged >5 business days.
- **Outside business activity (OBA) registrations not refreshed** within policy window.

## 2. Process-Driven Operational Risk KRIs

Process risk produces the highest *frequency* of losses, even if the headline-grabbing events come from systems and conduct. ORX data consistently shows execution, delivery and process management as the largest event-count category.

### Execution, delivery and process management

- **Manual-touch rate on high-volume processes** — Percentage of trades, payments, or claims requiring manual intervention. Trend up is bad.
- **Trade-break aging** — Number of unmatched trades >T+2 by asset class.
- **Reconciliation breaks aging** — Open items >30 days, by GL account criticality.
- **Failed payments rate** — Percentage of outbound wires returned, repaired, or rejected.
- **STP (straight-through processing) rate decline** — A drop of >2 percentage points month on month is amber.
- **Suspense / wash account balances** — Aggregate balance and aging.
- **Manual journal entries posted to the GL** — Volume and average value, especially around month-end.
- **Operational losses booked but not yet attributed to a risk taxonomy node** within 30 days.
- **Process-control self-assessment overdue** — Percentage of in-scope processes with overdue RCSA refresh.
- **Issues and CAPAs past due** by severity.
- **Data-quality exception rate** in critical reporting feeds (regulatory, finance, risk).

### Change management

- **Change-request rejection / rework rate** — A rising number signals weakening change discipline.
- **Emergency / out-of-hours changes** as a percentage of total. >10% sustained is amber.
- **Post-implementation defect rate** for major releases.
- **Backlog of change-related issues** aged >90 days.

### Anti-financial crime processes

- **AML alert backlog** — Median age of open alerts. Aging beyond regulatory expectation is red.
- **Sanctions-screening hit-rate after model change** — A jump can signal a calibration problem; a drop can signal a coverage gap.
- **KYC periodic-review past-due rate** — Especially for high-risk customers. Anything >5% is typically amber, >10% red.
- **Suspicious Activity Report (SAR) cycle time** from detection to filing.

## 3. Systems-Driven Operational Risk KRIs

Technology and cyber are the operational risk category with the steepest upward trend in loss severity since 2015.

### Resilience and availability

- **Critical service availability** — Percentage uptime for Tier-1 services. A drop below SLA two months running is amber.
- **Number of P1 / P2 incidents** in the past 90 days, by service.
- **Mean time to recover (MTTR)** for P1 incidents.
- **Recovery-time-objective (RTO) test pass rate** — Percentage of critical services whose last DR test met RTO. A miss on any Tier-1 service is red.
- **Recovery-point-objective (RPO) test pass rate**.
- **Backups not tested in 90 days** — particularly offline/immutable copies.
- **Change-related incidents** as a percentage of total. The "unforced error" KRI.

### Cyber and information security

- **Critical / high vulnerability remediation aging** — % beyond SLA. Maps to NIST CSF 2.0 PR.MA.
- **Privileged-access reviews overdue** — % of accounts with stale entitlement reviews.
- **Multi-factor authentication coverage** on privileged and externally exposed accounts. <100% on privileged is red.
- **Phishing simulation click-through rate** — Trend, not absolute, matters.
- **Endpoint detection and response coverage** — Percentage of in-scope endpoints with EDR active.
- **Data loss prevention alerts** aged >5 business days.
- **Third-party cyber-incident notifications** received per quarter. A growing KRI under DORA, NIS2, and SEC cyber rules.
- **Shadow-IT discoveries** per month from network or SaaS-discovery tooling.

### Data and model risk adjacencies

- **Critical data elements (CDEs) without an assigned data owner**.
- **Model-validation findings overdue** in second-line model risk inventory.
- **End-user computing (EUC) inventory not refreshed** in 12 months.

## 4. External-Event Operational Risk KRIs

The external-event category captures damage to physical assets, business disruption from outside the firm, and third-party / supply-chain failures. It is also where climate-physical risk increasingly lives.

- **Critical third-party concentration** — Percentage of Tier-1 services delivered by a single provider. Particularly important post-DORA.
- **Fourth-party (sub-contractor) visibility** — Percentage of Tier-1 vendors with disclosed sub-processors.
- **Vendor financial-distress indicators** — Number of strategic vendors with credit-rating downgrades, missed SLA penalties, or going-concern flags.
- **Vendor SOC 2 / ISO 27001 evidence aging** — Percentage of in-scope vendors with reports older than 13 months.
- **Geopolitical exposure** — Percentage of operations or critical services in jurisdictions on internal watchlist.
- **External-fraud loss frequency** — Card fraud per million transactions, scam losses per active customer, account takeover events per 100,000 logins.
- **Physical-site exposure to climate hazards** — Number of critical buildings in flood, wildfire, or storm-surge zones, weighted by mitigation status. Maps to TCFD physical-risk disclosures.
- **Force-majeure invocations received from suppliers** per quarter.

## 5. Cross-Cutting and Aggregate KRIs

Some of the most predictive operational risk indicators sit *across* the four causes:

- **Internal audit findings overdue** by severity and business line.
- **Regulatory examination findings open** with original due date breached.
- **Loss event reporting timeliness** — Percentage of internal loss events reported within policy window. A leading indicator of cultural risk.
- **Near-loss / no-loss event volume** — Healthy programs see strong reporting; a sudden drop is suspicious.
- **Capital impact volatility** — Quarter-on-quarter change in modelled or SA-CCR-aligned operational risk capital. Helps the board see when the risk profile is shifting.

## Thresholds: How to Set Them Without Guessing

Three approaches work well, often in combination:

1. **Statistical** — Set amber at the 75th percentile of two years of history, red at the 90th. Simple and defensible.
2. **Tolerance-based** — Anchor red to the firm's stated risk appetite. For example, "no more than two P1 incidents per quarter on Tier-1 services" becomes a hard red threshold.
3. **Regulatory** — Anchor to a regulatory requirement (e.g. KYC review aging vs the period mandated by the local regulator).

Avoid the temptation to set thresholds where the metric is comfortably green today. A good threshold should be breached *occasionally*; if it never moves, it is decoration.

## Governance: Where Operational Risk KRIs Live

A credible operational risk KRI framework has four loops:

1. **First line, weekly** — Business unit heads see their own KRIs and own remediation.
2. **Second line, monthly** — Operational risk team curates the firm-wide pack, challenges movements, and tracks remediation.
3. **Operational Risk Committee, monthly or quarterly** — Reviews red breaches, approves new KRIs, retires stale ones.
4. **Board Risk Committee, quarterly** — Sees the apex KRIs (typically 15 to 25) tied to the firm's risk appetite statement.

Under the Basel Principles for Sound Management of Operational Risk (BCBS 195/292), the board is expected to receive sufficient information to understand the firm's operational risk profile. KRIs are the most efficient vehicle for that, provided they are aggregated and not just listed.

## Linking KRIs to the Operational Risk Capital Framework

Under Basel III.1 / IV, the new Standardised Approach (SA) replaces AMA and removes the explicit role of internal models in capital. That has *not* reduced the importance of KRIs — if anything, it has increased it, because:

- The Internal Loss Multiplier (ILM) under SA is sensitive to the ten-year loss history, so reducing tail-loss frequency through earlier intervention has a direct capital benefit.
- Pillar 2 supervisory review still requires firms to demonstrate they understand and manage operational risk on a forward-looking basis. KRIs, scenario analysis, and RCSA outcomes are the primary evidence.
- Climate-related and digital-resilience expectations (DORA in the EU, FFIEC and FRB guidance in the US, PRA SS1/21 in the UK) explicitly call for forward-looking indicators.

## Common Pitfalls

- **Repackaging KPIs as KRIs.** "Customer NPS" is a performance indicator, not a risk indicator. A KRI version would be "complaints volume aging beyond regulator response window."
- **Too many indicators.** A useful firm-wide pack rarely needs more than 25 apex KRIs. Detail belongs in business-line packs.
- **Thresholds set in isolation.** Without first-line buy-in, breaches turn into arguments about the metric, not the risk.
- **Static taxonomy.** As products and processes change, the KRI library must follow. Annual refresh is a minimum.
- **No link to losses.** Quarterly, walk through every operational loss above a threshold and ask: which KRI would have warned us? If none, design one.
- **Reporting without action.** A red breach that does not produce a CAPA in the same week is a credibility-destroying event. Better to have fewer, stronger KRIs.

## Mapping to Standards and Frameworks

The KRIs above map cleanly to:

- **Basel Committee BCBS 195 / 292** — Principles for Sound Management of Operational Risk.
- **Basel III.1 / IV** — Standardised Approach for operational risk capital.
- **ORX Reference Taxonomy** — Industry-standard event and cause classification.
- **COSO ERM 2017** — Strategy and performance integration.
- **ISO 31000** — General risk management principles.
- **NIST CSF 2.0 / ISO 27001 / IEC 62443** — Cyber and OT controls.
- **DORA (EU 2022/2554)** — Digital operational resilience for financial services.
- **PRA SS1/21, FRB SR 20-24, OCC Heightened Standards** — Operational resilience supervisory expectations.
- **TCFD / ISSB / CSRD** — Climate-related operational and physical risk disclosure.

When you build the library, tag each KRI with the framework reference. It accelerates exam readiness and audit walk-throughs.

## Frequently Asked Questions

**How many operational risk KRIs should a firm report at board level?**
Most well-run firms surface 15 to 25 apex KRIs to the Board Risk Committee. Below that level, individual business lines often track 30 to 100, and operations / technology functions can run hundreds at the working level.

**What is the difference between an operational risk KRI and a KCI?**
A KRI signals a change in the *exposure* to a risk; a KCI signals the *health of a control*. "Phishing click-through rate" is a KRI; "MFA coverage on privileged accounts" is a KCI. Most mature programs use both side by side.

**How do operational risk KRIs interact with the RCSA?**
The Risk and Control Self-Assessment generates the inventory of risks, controls, and residual ratings. KRIs are how you monitor whether the residual rating is still valid in real time. A red KRI breach should trigger an out-of-cycle RCSA refresh on the affected risk.

**Can operational risk KRIs reduce capital requirements?**
Indirectly, yes. Under SA, lower realised losses reduce the Internal Loss Multiplier over time. Stronger KRIs and faster remediation translate into fewer recurring losses. Under Pillar 2, supervisors look favourably on firms that can demonstrate forward-looking management of operational risk, which can influence supervisory capital add-ons.

**Which tools are commonly used to manage operational risk KRIs?**
GRC platforms such as ServiceNow IRM, IBM OpenPages, Archer, MetricStream, Resolver, LogicGate, and Workiva are common. The platform matters less than the data plumbing into HR systems, ITSM, payments engines, sanctions tooling, vendor-management systems, and the loss-event database.

## Closing Thought

Operational risk is the category where good data and clear governance compound most. Every loss event is, in retrospect, foreshadowed by something — a rising error rate, a delayed patch, a stretched team, an unmonitored vendor. KRIs are how you find that foreshadowing while you can still act on it.

Build the library deliberately, anchor it in the taxonomy, calibrate thresholds with real history, and put a standing review on the calendar. Within two quarters you will spot the early warnings you are missing today; within a year, the program will be paying for itself in avoided losses, faster regulatory examinations, and a measurably calmer back office.
