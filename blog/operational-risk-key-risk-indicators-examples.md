---
title: "Operational Risk Key Risk Indicators Examples"
slug: operational-risk-key-risk-indicators-examples
target_keyword: operational risk key risk indicators
word_count_target: 3000
priority: High
pattern: "Pattern B: [Risk Type] KRI Examples"
mirrors: "Fraud KRI Examples (highest CTR 4.9%)"
description: "A comprehensive, Basel-aligned guide to operational risk Key Risk Indicators with 35+ practical examples across all seven Basel event types — internal fraud, external fraud, employment practices, clients/products, physical assets, business disruption, and execution. Includes thresholds, owners, and dashboard guidance."
---

# Operational Risk Key Risk Indicators Examples

Of all the risk categories an organization manages, operational risk is the most universal and the hardest to bound. Credit risk lives mostly in the loan book. Market risk lives mostly on the trading floor. Operational risk lives *everywhere* — in every process, every system, every employee interaction, every third-party relationship.

It is also the category most likely to surprise leadership. The largest losses in modern corporate history — rogue trading scandals, mis-selling fines, system outages, ransomware shutdowns, payment processing failures — are operational. And almost every one of them showed warning signs in the data months before the loss event.

This guide is the pillar reference for **operational risk Key Risk Indicators**. We cover what operational risk actually is (using the Basel definition that most regulators converge on), how KRIs differ from KPIs and KCIs, 35+ concrete KRI examples grouped by Basel event type, threshold-setting, dashboard design, and the most common implementation mistakes.

If you only read one piece on operational risk KRIs this year, read this one — and bookmark it.

## Defining Operational Risk

The most widely used definition comes from the Basel Committee on Banking Supervision:

> **Operational risk** is the risk of loss resulting from inadequate or failed internal processes, people, and systems, or from external events. It includes legal risk but excludes strategic and reputational risk.

This definition has been adopted, with minor variations, by COSO ERM, ISO 31000-aligned programs, and most regulators outside banking. It works because it captures four root causes of loss:

1. **People** — error, omission, fraud, misconduct, capacity, capability.
2. **Process** — design flaws, control failures, manual handoffs, exception handling.
3. **Systems** — outages, performance, data integrity, cyber compromise, change failures.
4. **External events** — third parties, suppliers, regulators, fraud, natural disasters, geopolitics.

Basel further breaks operational losses into **seven event types** (the "Basel II event types"), which form a useful skeleton for any operational risk KRI program:

1. Internal fraud
2. External fraud
3. Employment practices and workplace safety
4. Clients, products, and business practices
5. Damage to physical assets
6. Business disruption and system failures
7. Execution, delivery, and process management

We will organize the KRI examples below against this taxonomy.

## What is a Key Risk Indicator?

A **Key Risk Indicator (KRI)** is a quantifiable measure that provides an early warning of increasing operational risk exposure.

KRIs are most powerful when they are:

- **Forward-looking.** They signal *probability of future loss*, not just record past loss.
- **Quantifiable.** Numbers, ratios, percentages, counts.
- **Anchored to risk appetite.** Each KRI maps to a specific risk and a specific tolerance band.
- **Actionable.** Crossing a threshold triggers a defined action — not a discussion about whether to act.
- **Owned.** A named individual is accountable for monitoring, escalation, and remediation.

It is worth contrasting KRIs with two related metrics:

- **KPIs (Key Performance Indicators)** measure achievement of objectives.
- **KCIs (Key Control Indicators)** measure the operating effectiveness of controls.
- **KRIs (Key Risk Indicators)** measure exposure to risk.

A common mistake is to label every dashboard tile a "KRI." If a metric does not link to a specific risk and a specific tolerance, it is information, not a KRI.

## Why Operational Risk KRIs Are Worth the Investment

Operational losses are non-linear. The vast majority of operational events are small and frequent — a payment exception, a customer complaint, a missed SLA. But the tail is fat. The 99.9th percentile event — a rogue trader, a cyber breach, a settlement failure — can dwarf a year of net income.

KRIs serve three jobs that no other tool serves as well:

1. **They move risk management from reactive to proactive.** Loss data tells you what already happened. KRIs tell you what is *about* to happen.
2. **They give leadership a common language.** Risk appetite, expressed as KRI thresholds, lets the board, executives, and operators argue about the same numbers.
3. **They drive capital and resource allocation.** Persistent amber/red KRIs in a process are an objective signal that the process needs investment — in controls, headcount, automation, or training.

For institutions under Basel III/IV (banks), Solvency II (insurers), or DORA (EU financial entities), KRIs also feed directly into regulatory reporting and capital calculations. But every organization — financial or not — benefits from the discipline.

---

## 35+ Operational Risk Key Risk Indicators Examples

Below, we map example KRIs to each of the seven Basel event types. Use them as a starting point and calibrate the thresholds against your own loss history, peer benchmarks, and risk appetite.

### Event Type 1: Internal Fraud

Definition: losses due to acts intended to defraud, misappropriate property, or circumvent regulations, the law, or company policy by an internal party.

**1. Segregation of Duties (SoD) Violations**
- *Formula:* Number of users with conflicting role combinations / Total users with sensitive access
- *Source:* IAM / ERP role review
- *Why it matters:* Most internal fraud requires an SoD breach.

**2. Privileged Access Anomalies**
- *Formula:* Privileged sessions outside policy hours or geographies / Total privileged sessions
- *Source:* PAM logs / SIEM

**3. Override and Manual Adjustment Volume**
- *Formula:* Number of manual adjustments above $X / Total transactions, by department
- *Source:* GL / ERP

**4. Whistleblower / Hotline Report Trend**
- *Formula:* Reports per 1,000 employees per quarter
- *Source:* Ethics hotline
- *Why it's a KRI:* Both an unusually high *and* unusually low rate are warning signs (under-reporting can be worse than over-reporting).

**5. Mandatory Vacation / Job Rotation Compliance**
- *Formula:* Eligible staff who took ≥ 2 consecutive weeks of vacation / Total eligible staff
- *Source:* HRIS

### Event Type 2: External Fraud

Definition: losses due to acts intended to defraud, misappropriate property, or circumvent the law by a third party.

**6. Confirmed External Fraud Loss Rate**
- *Formula:* External fraud losses (rolling 12 months) / Total transactions or revenue
- *Source:* Fraud system / GL

**7. Application Fraud Detection Rate**
- *Formula:* Applications flagged as fraudulent / Total applications received
- *Source:* Onboarding / KYC platform

**8. Account Takeover (ATO) Volume**
- *Formula:* Confirmed ATO incidents per month
- *Source:* Fraud / security operations

**9. Social Engineering Success Rate**
- *Formula:* Simulated social-engineering attempts that succeeded / Total simulated attempts
- *Source:* Red team / awareness platform

**10. Third-Party Fraud Losses Aging**
- *Formula:* Open external fraud cases > 90 days
- *Source:* Fraud case management

### Event Type 3: Employment Practices & Workplace Safety

Definition: losses arising from acts inconsistent with employment, health, or safety laws, or from personal injury claims.

**11. Total Recordable Incident Rate (TRIR)**
- *Formula:* (Recordable incidents × 200,000) / Hours worked
- *Source:* EHS records

**12. Voluntary Attrition Rate (Critical Roles)**
- *Formula:* Voluntary leavers in critical roles / Average headcount in critical roles
- *Source:* HRIS
- *Why it's a KRI:* Concentrated departures in regulated functions (compliance, finance, IT) are a leading indicator of control failure.

**13. Open Employment-Related Litigation**
- *Formula:* Active EEOC / employment-tribunal cases per 1,000 employees
- *Source:* Legal case management

**14. Employee Engagement Score Variance**
- *Formula:* Trailing-survey score change vs. prior period
- *Source:* HR survey platform

**15. Mandatory Training Completion Lapses**
- *Formula:* Required compliance / safety training overdue / Total required
- *Source:* LMS

### Event Type 4: Clients, Products & Business Practices

Definition: losses arising from unintentional or negligent failure to meet a professional obligation to clients, or from the nature or design of a product.

**16. Customer Complaint Volume and Aging**
- *Formula:* Complaints opened per quarter and % unresolved > 30 days
- *Source:* CRM

**17. Mis-selling / Suitability Exception Rate**
- *Formula:* Sales transactions failing post-sale suitability review / Total reviewed
- *Source:* Suitability monitoring

**18. Regulatory Findings Open by Severity**
- *Formula:* Count of high / medium / low regulatory findings open past committed remediation date
- *Source:* Issue management

**19. Sales Practice Surveillance Alerts**
- *Formula:* Alerts per 100 advisors / month
- *Source:* Surveillance platform

**20. Product Defect / Recall Volume**
- *Formula:* Recalls or field actions in trailing 12 months
- *Source:* Quality / regulatory records

### Event Type 5: Damage to Physical Assets

Definition: losses arising from loss of or damage to physical assets from natural disasters or other events.

**21. Properties in High Climate-Risk Zones**
- *Formula:* Asset value in tier-1 climate-risk zones / Total asset value
- *Source:* Asset register + climate-risk overlay

**22. Insurance Coverage Adequacy**
- *Formula:* Insured value / Replacement cost across critical sites
- *Source:* Insurance schedule

**23. Business Continuity Plan Test Currency**
- *Formula:* Critical sites with BCP tested in last 12 months / Total critical sites
- *Source:* BCM platform

**24. Critical Site Single Points of Failure**
- *Formula:* Number of critical processes operating from a single site without redundancy
- *Source:* BIA

### Event Type 6: Business Disruption & System Failures

Definition: losses arising from disruption of business or system failures.

**25. Critical System Availability**
- *Formula:* Uptime of tier-1 systems / Available time
- *Source:* APM / monitoring tools

**26. Major Incidents per Quarter (Severity 1 & 2)**
- *Formula:* Count of P1/P2 incidents per quarter
- *Source:* Incident management

**27. Mean Time to Recover (MTTR) for Critical Services**
- *Formula:* Total recovery time / Number of incidents
- *Source:* Incident management

**28. Change Failure Rate**
- *Formula:* Failed or rolled-back changes / Total changes
- *Source:* Change management

**29. Cyber Patch SLA Compliance**
- *Formula:* Critical / high CVEs patched within SLA / Total in scope
- *Source:* Vulnerability management

**30. Backup Restore Test Success Rate**
- *Formula:* Successful test restores / Total tests in trailing 90 days
- *Source:* Backup logs

**31. Third-Party Critical Dependency Concentration**
- *Formula:* % of critical services dependent on a single external provider
- *Source:* TPRM register

### Event Type 7: Execution, Delivery & Process Management

Definition: losses from failed transaction processing or process management — the highest-frequency, lowest-severity category for most firms, but the easiest to scale to a major loss when controls erode.

**32. Reconciliation Breaks Aging**
- *Formula:* Breaks open > 30 days / Total breaks
- *Source:* Reconciliation tool

**33. Failed Trade / Settlement Rate**
- *Formula:* Failed settlements / Total settlements
- *Source:* Settlement system

**34. Manual Workaround Volume**
- *Formula:* Documented manual workarounds substituting for automated process
- *Source:* Operations team review

**35. Suspense Account Balances Aging**
- *Formula:* Balances in suspense > 30 days / Total suspense balances
- *Source:* GL

**36. Data Quality Exception Rate**
- *Formula:* Records failing data-quality rules / Total records processed
- *Source:* Data quality platform

**37. Vendor SLA Breach Rate**
- *Formula:* Material SLAs breached / Total SLAs measured
- *Source:* TPRM / vendor performance

**38. Process Cycle-Time Variance**
- *Formula:* Standard deviation of cycle time for high-volume processes (e.g., new account opening)
- *Source:* Process mining / workflow tool

---

## Setting Thresholds and Risk Appetite

A KRI without a threshold is a metric, not a control. The bridge between a KRI and risk appetite is the threshold structure. The standard pattern:

- **Green (within appetite)** — risk is at or below the level the organization is willing to accept. No action required beyond normal monitoring.
- **Amber (approaching tolerance)** — risk is rising and close to the limit. Triggers heightened monitoring, formal review at the next risk committee, and a written remediation commitment.
- **Red (outside appetite)** — risk has exceeded the tolerance. Triggers immediate escalation to the executive sponsor and, if material, to the board risk committee.

Three practical rules for setting thresholds:

1. **Anchor in three reference points.** Internal history (your own data), peer benchmarks (where available), and regulator/industry expectations. A threshold built on only one of these is fragile.
2. **Calibrate to be triggered occasionally.** A KRI that has never crossed amber is mis-calibrated. A useful rule of thumb: 5–15% of measurement periods in amber over a year is healthy.
3. **Re-baseline annually.** Business mix, technology, geography, and risk appetite all change. Last year's "red" can be this year's "green."

## Building an Operational Risk KRI Dashboard

The dashboards we have seen work best share a small number of design choices:

- **Aggregated, layered view.** A board-level dashboard with 12–18 enterprise KRIs; departmental dashboards beneath with 10–25 each.
- **Trend, not snapshot.** A 13-month trend line with the threshold band overlaid is more valuable than a single number.
- **Heat-mapped.** Color tells the eye where to look in two seconds.
- **Drillable.** Every KRI lets the reader click through to the underlying transactions, incidents, or audit findings.
- **Owner per tile.** No anonymous tiles. Every KRI has a name and a function.
- **Linked to issues and actions.** When a KRI goes red, the open remediation actions associated with it should be one click away.

In banking and insurance, GRC platforms (RSA Archer, ServiceNow IRM, MetricStream, OneTrust, etc.) provide this natively. In other sectors, well-designed Power BI / Tableau / Looker dashboards backed by a clean data warehouse work just as well — the discipline of definition matters far more than the tool.

## Common Implementation Mistakes

We see the same mistakes across industries and across organization sizes:

- **Confusing loss data with KRIs.** Loss data is lagging. A KRI is leading. "Operational losses last quarter" is not a KRI; it's a result.
- **Tracking too many KRIs.** A 100-KRI dashboard is a 0-KRI dashboard. Every additional indicator dilutes attention.
- **No clear owner.** "Operations owns it" is not ownership.
- **Manual data feeds.** A KRI populated by a quarterly spreadsheet upload will be late, wrong, or absent at the moment it matters.
- **Disconnected from risk appetite.** If "Red" doesn't trigger a defined action, the rating is theatrical.
- **Static for years.** Risks evolve; KRIs that don't evolve become noise.
- **No link to scenario analysis or stress testing.** KRIs and scenario analysis should reinforce each other; in mature programs, KRIs are an input to stress assumptions and scenario triggers.

## How Operational Risk KRIs Connect to Other Risk Programs

A well-built operational risk KRI program should not stand alone. It plugs into:

- **Risk and Control Self-Assessments (RCSAs).** Each RCSA-identified risk should have at least one KRI.
- **Loss data collection.** Loss events should drive new KRIs, and KRIs should help predict future loss frequency / severity.
- **Scenario analysis.** Severe scenarios should map to combinations of KRIs that, when red simultaneously, indicate the scenario is materializing.
- **Capital and stress testing.** In regulated entities, KRI levels can feed economic capital and stress test severity assumptions.
- **Issue and action management.** Red KRIs without open remediation actions are a process failure.

When these elements interlock, an operational risk function moves from monitoring to genuine forward-looking risk management.

## Frequently Asked Questions

**How many operational risk KRIs should we have?**
At the enterprise level, 15–25 KRIs covering all seven Basel event types is a reasonable range. Each business line typically has another 10–25 specific to its activities. Boards usually see only 8–12 of the most material ones.

**How often should operational risk KRIs be reviewed?**
Operationally focused KRIs (system uptime, incidents, fraud) are reviewed daily or weekly by management and monthly by senior committees. Strategic and slower-moving KRIs (training completion, attrition) are reviewed monthly to quarterly. The board risk committee typically reviews aggregated operational risk KRIs quarterly.

**Who owns operational risk KRIs in a typical organization?**
The CRO or Head of Operational Risk owns the program. Each individual KRI has a "first line" owner — the business or function that runs the underlying process — and "second line" oversight by operational risk. Internal audit (third line) tests the integrity of the KRI program.

**Are operational risk KRIs only relevant for banks?**
No. Basel originated the taxonomy, but operational risk exists in every organization. Insurers, asset managers, manufacturers, retailers, healthcare providers, technology firms, and government agencies all benefit from the same approach — the event-type taxonomy translates cleanly across industries.

**How do operational risk KRIs differ from cybersecurity or compliance KRIs?**
Cyber and compliance KRIs are subsets of operational risk KRIs. Cyber KRIs map mostly to "Business disruption and system failures" and parts of "External fraud." Compliance KRIs map mostly to "Clients, products, and business practices" and parts of "Internal fraud." A mature program will have specialist sub-dashboards for each, rolled up into the operational risk view.

**What is the relationship between KRIs and risk appetite statements?**
A risk appetite statement is qualitative ("we will not tolerate any material breach of customer data"). KRIs make the statement quantitative and monitorable ("any confirmed customer-data breach involving > 1,000 records triggers immediate board notification"). Without KRIs, risk appetite is a poster on the wall.

## Closing Thought

The largest operational losses of the last twenty years — across banking, insurance, technology, manufacturing, and retail — share a common feature: in almost every case, the data that would have warned leadership was already inside the organization, weeks or months in advance. It just wasn't being looked at.

Operational risk KRIs are the discipline of looking at the right data, at the right cadence, with the right thresholds, owned by the right people. The Basel event-type taxonomy gives you the structure. The 35+ examples above give you a starting library. The work — calibrating, aligning to appetite, escalating, and acting — is the part that no framework can do for you.

The organizations that take this seriously will not eliminate operational risk; nobody can. But they will see far more of it coming, and they will lose far less to it when it arrives.
