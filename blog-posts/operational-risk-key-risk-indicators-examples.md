---
title: "Operational Risk Key Risk Indicators Examples"
slug: operational-risk-key-risk-indicators-examples
target_keyword: operational risk key risk indicators
meta_description: "A pillar guide to operational risk KRIs, with 50+ Basel-aligned examples across people, process, systems, and external events — plus thresholds, owners, and dashboard patterns."
word_count_target: 3000
pattern: "Pattern B: [Risk Type] KRI Examples"
mirrors: "Fraud KRI Examples (highest CTR 4.9%)"
---

# Operational Risk Key Risk Indicators Examples

Operational risk is the broadest, messiest, and most consequential risk category most enterprises manage. It quietly absorbs the cost of every failed control, every outage, every rogue process, every employee mistake, and every external shock. The Basel Committee defines it as *"the risk of loss resulting from inadequate or failed internal processes, people and systems, or from external events"* — a definition wide enough to swallow most of an organization's risk register.

Because of that breadth, the difference between a strong operational risk function and a weak one usually comes down to one thing: **the quality of its Key Risk Indicators (KRIs).**

This article is the practical, specific guide to operational risk KRIs that we wish more risk teams had on hand. It covers:

- What separates an operational risk KRI from a KPI or a control test
- 50+ ready-to-use KRI examples across the four Basel categories
- Thresholds, ownership, and dashboard structure
- The most common mistakes — and how to avoid them

By the end you should be able to walk into your next risk committee with a defensible, audit-ready set of indicators rather than a spreadsheet of vanity metrics.

## What Is an Operational Risk KRI?

A Key Risk Indicator is a metric used to provide early warning of increasing risk exposure. For operational risk specifically, a KRI must do three things:

1. **Map to a defined operational risk** in the enterprise risk taxonomy (people, process, systems, external).
2. **Move *before* the loss event** — it must be leading, not just lagging.
3. **Trigger an action** when it crosses a defined threshold.

Compare that with adjacent metrics that often get mislabeled as KRIs:

| Metric type | Purpose | Example |
|---|---|---|
| KPI | Measures performance against a goal | Cost-to-income ratio |
| Control test result | Confirms a control operated as designed | "100% of payments above $1M had dual approval" |
| **KRI** | **Signals rising risk exposure** | **% of payments approved by a single user despite $1M policy** |
| Loss event data | Records a risk that already materialized | Operational losses booked in Q1 |

A healthy operational risk program uses all four — but only KRIs give you the chance to act *before* the loss is booked.

The Basel Committee's *Principles for the Sound Management of Operational Risk* (BCBS 195, revised 2021) and the *Revised Operational Risk Capital Framework* (Basel III, SA approach) are the canonical reference points. ISO 31000 and COSO ERM provide the broader risk management frame.

## The Four Basel Categories

The cleanest way to organize an operational KRI register is along the four Basel sources of operational risk:

1. **People** — human error, conduct, capacity, skills.
2. **Process** — design flaws, gaps, manual workarounds, change management.
3. **Systems** — IT availability, cyber, data, model risk.
4. **External events** — third parties, fraud, legal, physical/environmental.

The KRIs that follow are organized this way. Pick the ones that map to your top risks — do not try to use them all.

## 1. People Risk KRIs

People-related operational losses come from three places: error, conduct, and capacity. Most organizations track conduct (e.g., harassment cases) but ignore the leading indicators of error and capacity, which are where the bulk of operational losses actually originate.

**KRI Examples:**

- **Voluntary turnover rate** in critical functions (operations, finance, technology, risk, compliance), trended.
- **Time-to-fill for control-function vacancies** (risk, compliance, audit, security).
- **Span of control** — number of direct reports per manager in operational areas; outliers correlate with error rates.
- **Overtime hours per FTE** above policy threshold — fatigue is a leading indicator of operational error.
- **% of workforce overdue on mandatory training** (AML, sanctions, code of conduct, data privacy).
- **Number of conduct cases (open + closed)** in trailing 12 months by business line.
- **Whistleblower / ethics-line cases past target resolution time.**
- **% of employees in high-risk roles without current background-check refresh.**
- **Vacancy rate in segregation-of-duties-critical roles** (e.g., reconciliations, payments approver).
- **Knowledge concentration** — % of critical processes with only one named subject-matter expert (a "key-person risk" indicator).

**Source systems:** HRIS, LMS, ethics case management, payroll/time systems.

## 2. Process Risk KRIs

Process risk is where the highest-volume, lowest-severity losses live — and where well-designed KRIs deliver the fastest payback. The pattern to look for: rising manual effort, rising error rates, and rising rework.

**KRI Examples:**

- **Reconciliation breaks aged > 30 days** (count and value).
- **Manual journal entries as % of total journal entries** in finance close.
- **Number of payments processed outside the standard payment system** (a "manual workaround" indicator).
- **% of transactions failing first-time-right** (e.g., trade affirmation, customer onboarding, claims processing).
- **Average cycle time** for a defined process (e.g., new-account opening) vs. SLA.
- **Number of open process exceptions / overrides** approved in the last 30 days.
- **Operational loss frequency** in trailing 12 months, by event type (Basel Level 2 categories).
- **Operational loss severity** — single losses above the disclosure / capital threshold.
- **Near-miss events captured** (a *rising* count is healthy reporting culture; falling is under-reporting).
- **Number of processes with no documented procedure or with documentation > 24 months old.**
- **Change failure rate** — % of approved changes that result in incidents within 7 days of deployment.
- **Backlog of overdue audit findings**, by severity.
- **Backlog of overdue regulatory commitments / MRA / MRIA items** past target.

**Source systems:** GRC platform (Archer, MetricStream, ServiceNow IRM), ERP, core banking / claims / order management systems.

## 3. Systems and Technology Risk KRIs

For most modern enterprises, "systems" is now the dominant source of operational loss exposure. The 2024 CrowdStrike outage, the long tail of ransomware events, and intensifying regulatory focus (DORA in the EU, OCC heightened standards in the US) all push systems KRIs to the top of the dashboard.

**KRI Examples:**

### Availability and incident management

- **Number of Severity-1 / Severity-2 IT incidents** in the trailing 30 days.
- **Mean Time To Detect (MTTD)** and **Mean Time To Resolve (MTTR)** for production incidents.
- **% of critical systems meeting availability SLA** (e.g., 99.9%).
- **Repeat-incident rate** — % of incidents tied to a previously known root cause.
- **Number of unplanned outages affecting customer-facing services.**

### Cyber and information security

- **% of critical / high vulnerabilities open beyond SLA** (typically 30 days for critical, 60 for high).
- **Patch compliance rate** for production systems.
- **Privileged accounts without MFA enforced.**
- **Phishing simulation click-through rate.**
- **Number of detected security events meeting "incident" criteria** in trailing 30 days.
- **Backup verification success rate** — and the number of systems where the last successful verified restore is > 90 days old.
- **Days since last full disaster-recovery test** for tier-1 applications.

### Change, data, and model

- **Failed change ratio** — % of changes rolled back or producing incidents.
- **Emergency / unplanned changes** as % of total changes (rising = weakening change discipline).
- **Number of production data-quality breaks** above materiality threshold.
- **% of critical models past their scheduled validation date** (model risk).
- **End-user computing (EUC) inventory coverage** — number of identified critical spreadsheets / Access DBs / scripts under controlled governance.

**Source systems:** SIEM, ITSM (ServiceNow), vulnerability scanner, CMDB, model inventory, EUC inventory.

**Regulatory anchor:** DORA (EU), NIST CSF 2.0, ISO/IEC 27001, FFIEC IT Handbook, PRA SS1/21.

## 4. External Event Risk KRIs

External events are where the largest, lowest-probability losses live — fraud, third-party failure, legal events, climate, geopolitics. These KRIs are the ones the board will ask about first when a peer is hit by an event.

**KRI Examples:**

### Third-party / vendor risk

- **% of critical (tier-1) third parties with current due diligence within policy.**
- **% of critical third parties without an SOC 2 / ISO 27001 report on file or with reports older than 12 months.**
- **Concentration risk** — % of critical activities reliant on a single third party (or single cloud region).
- **Number of third parties on financial-distress watchlist.**
- **Open third-party-related issues / incidents past target resolution.**
- **% of fourth-party (subcontractor) inventory mapped** for critical services.

### Fraud (internal and external)

- **Detected fraud cases** in trailing 30 days, by typology (account takeover, push payment, insider, etc.).
- **Fraud losses gross / net of recoveries** vs. budget and risk appetite.
- **Authentication failure rates** at customer logins above baseline.
- **% of high-risk transactions reviewed within SLA** by fraud operations.
- **False positive rate** of fraud monitoring rules — too high signals alert fatigue, too low signals missed events.

### Legal, regulatory, conduct

- **Open regulatory exams / investigations** by jurisdiction.
- **Regulatory fines and settlements**, trailing 12 months.
- **New regulatory obligations identified** but not yet mapped to controls.
- **Number of customer complaints classified as "regulated complaints"** trended monthly.
- **Litigation reserves** above threshold movement.

### Physical, climate, geopolitical

- **Number of facilities in regions with elevated geopolitical risk** (using a rating service).
- **% of critical facilities in physical-climate hazard zones** (flood, wildfire, water stress) without business continuity plan tested in last 12 months.
- **Days since last full BCP / crisis-management exercise** by site.

**Source systems:** Third-party risk platform (Aravo, Prevalent, OneTrust), fraud platforms (Actimize, Featurespace), legal matter management, BCM platform (Fusion, Riskonnect).

## How Many KRIs Should You Have?

Most operational risk programs over-instrument and under-use. A workable structure for a mid-to-large enterprise:

- **5–10 enterprise-level KRIs** reported to the board / risk committee.
- **15–25 second-tier KRIs** reported to the operational risk committee.
- **A deeper library** of 100+ business-line and process-level KRIs reviewed inside the first line.

If your top operational risks have more than four or five KRIs each, you have a metrics catalog, not an early-warning system.

## Setting Thresholds

A KRI without thresholds is a number on a slide. A KRI with arbitrary thresholds is worse — it manufactures false comfort and false alarm. There are three defensible methods for setting thresholds:

1. **Statistical** — based on historical distribution of the indicator (e.g., mean ± 2 standard deviations, or control-chart rules). Best for high-frequency operational metrics.
2. **Risk-appetite-driven** — derived from the maximum loss the organization is willing to accept, then back-solved to the indicator level. Best for low-frequency, high-severity risks.
3. **Benchmark** — anchored to peer / industry data (ORX, industry-association data, regulatory expectations). Useful as a sanity check, weak as a sole basis.

Whichever method, every threshold needs:

- A **named owner** accountable for the indicator value.
- A **defined action** at amber and red.
- A **review cadence** (annual at minimum).
- A **documented rationale** so an auditor or regulator can challenge it.

## A Sample Operational Risk KRI Register Entry

| Field | Value |
|---|---|
| Risk | Unauthorized payment due to control failure |
| Risk taxonomy | Process — Execution, Delivery & Process Management (Basel Level 1) |
| KRI | % of high-value payments (> $1M) approved by a single user despite dual-approval policy |
| Definition | Count of payments > $1M approved by exactly one user / total payments > $1M, trailing 30 days |
| Source | Payments platform audit log, automated extract |
| Owner | Head of Payment Operations |
| Frequency | Daily |
| Green | 0% |
| Amber | > 0% and ≤ 0.5% |
| Red | > 0.5% |
| Amber response | Investigate within 2 business days; user-level reminder; root-cause logged |
| Red response | Escalate to ORM committee within 24 hours; payment channel reviewed for control gap |
| Linked controls | Control C-PAY-014 (Dual approval > $1M) |
| Last reviewed | Q1 |

This level of detail is what separates an operational risk program from an operational risk slide deck.

## Common Pitfalls

After two decades of consulting and implementation, the same six mistakes appear in nearly every operational risk KRI program:

1. **Vanity metrics.** "Number of risk training sessions delivered" is not a KRI. It tells you nothing about exposure.
2. **All lagging, no leading.** A dashboard of incidents, losses, and findings tells you what *did* go wrong, not what *will*.
3. **No defined action.** A red KRI that does not trigger a response is theater.
4. **Manual data, monthly cadence.** If a KRI lives in a spreadsheet that one analyst maintains, it will quietly die. Automate or remove.
5. **Threshold drift without review.** Limits set in a different operating environment quietly become meaningless.
6. **No link to capital or risk appetite.** For regulated firms especially, KRIs should ladder up to the operational risk capital model and the board's stated risk appetite. Otherwise, the regulator will ask why.

## Linking KRIs to Risk Appetite and Capital

For regulated firms, KRIs are not standalone artefacts. They sit inside a hierarchy:

**Risk appetite statement → Risk tolerance limits → KRIs → Controls → Loss events**

The board approves the appetite. The risk function translates it into tolerances. KRIs sit *inside* tolerance — that is, the red threshold should trigger *before* the tolerance is breached, giving the organization time to act rather than report. Controls execute the response. Loss event data is the back-test.

If your KRI thresholds match your tolerance limits, you have built a smoke detector that only goes off when the house is already burning. Good KRI thresholds give you minutes; tolerance breaches measure failure.

For banks and insurers using the Standardised Approach to operational risk capital, KRI movement should also be reviewable against the **Internal Loss Multiplier (ILM)** and the loss data set that drives capital. A material adverse trend in KRIs without a matching review of the operational risk capital outlook is a finding waiting to be written up.

## Industry Variations

Operational risk is universal but the priority KRIs shift by sector:

**Banks and capital markets.** Trade-error rates, payment-rejection rates, regulatory-reporting accuracy, model risk indicators (% of tier-1 models past validation), and AML/sanctions hit-rate metrics dominate. Conduct KRIs (mis-selling complaint rates, sales-practice exceptions) carry heavy regulatory weight.

**Insurance.** Claims processing cycle time, leakage indicators, underwriting authority breaches, and reinsurance counterparty concentration. Policy administration error rates are persistent loss drivers and well worth instrumenting.

**Asset management.** Net Asset Value (NAV) error frequency and severity, breach rates of investment guidelines, trade-allocation exceptions, and valuation-committee override frequency.

**Healthcare and life sciences.** Medication / device error rates, FDA observation aging, supply continuity for critical SKUs, and HIPAA / patient-data privacy events.

**Technology and SaaS.** Production change-failure rate, customer-impacting incidents per release, MTTR, and dependency on a small number of cloud regions or third-party APIs.

The Basel four-category structure works as a backbone in every sector. The specific KRIs are an industry overlay.

## Building the Dashboard

A working operational risk KRI dashboard has four parts the board can read in under five minutes:

1. **Heat map** of operational risks with current KRI status (green / amber / red).
2. **Top 5 KRIs in breach** — each with the breach driver and the action being taken.
3. **Trend view** — at least 12 months of history for each enterprise KRI, so direction is visible.
4. **Loss data overlay** — operational losses booked in the period, mapped to the relevant KRIs to test predictive power.

If you can produce that page from your GRC platform without manual reformatting, your program is mature. If you cannot, fixing the data plumbing is more valuable than adding more KRIs.

## From Indicator to Action: The Escalation Path

The most common reason KRIs fail in practice is not bad metric design — it is the missing path from a red indicator to a decision. A workable escalation pattern for an enterprise operational risk program looks like this:

**Tier 1 — First-line desk / process owner (daily monitoring).** Indicator turns amber. Owner investigates within 2 business days, logs the cause, applies a tactical fix, and updates the KRI commentary.

**Tier 2 — Business-line operational risk officer (weekly review).** Indicator stays amber for two consecutive cycles, or turns red. Officer convenes a root-cause review, decides whether the issue is a one-off or systemic, and either accepts the residual exposure within tolerance or commissions a remediation plan with a named owner and target date.

**Tier 3 — Operational risk committee (monthly).** Multiple indicators in the same risk turn amber, or any indicator breaches red and tolerance. Committee reviews, decides on resourcing, and confirms whether risk appetite is still appropriate or needs re-baselining.

**Tier 4 — Board risk committee (quarterly, or ad hoc).** Tolerance is breached, capital impact is material, or a regulatory reportable event is in scope. Board review, with documented decisions and external disclosure consideration.

Map every enterprise KRI to this ladder. If a KRI cannot be placed on a tier — meaning no one is genuinely accountable for acting on its movement — remove it. A program of 25 well-tiered indicators outperforms a program of 100 orphaned ones every time.

## Conclusion

Operational risk is the residual of every other risk and every imperfect control. It cannot be eliminated, only monitored, priced, and managed. The instrument that does that work is the **Key Risk Indicator** — defined precisely, threshold-bound, owned by a named accountable executive, automated where possible, and reviewed on a cadence that matches the speed of the risk.

The 50+ examples in this guide are not a checklist. They are the menu from which a strong second-line risk function picks the 20 to 30 indicators that actually map to its institution's top operational risks, ladders them up to the capital model and board appetite, and uses them to drive earlier, smaller, less expensive interventions than the alternative.

That is what good operational risk management looks like — and the difference between a program that survives the next audit and one that survives the next loss event.

### Further Reading

- BCBS 195 — *Principles for the Sound Management of Operational Risk*
- Basel III — *Standardised Approach for Operational Risk Capital*
- COSO — *Enterprise Risk Management — Integrating with Strategy and Performance*
- ISO 31000:2018 — *Risk management guidelines*
- [Key Risk Indicators Examples for Manufacturing Companies](./key-risk-indicators-examples-for-manufacturing-companies.md)
