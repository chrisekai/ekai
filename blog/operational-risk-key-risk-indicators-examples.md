---
title: "Operational Risk Key Risk Indicators Examples"
slug: operational-risk-key-risk-indicators-examples
target_keyword: operational risk key risk indicators
meta_description: "A pillar guide to operational risk KRIs with 50+ examples mapped to the Basel operational risk taxonomy — covering people, process, systems, and external events, with thresholds and data sources."
category: Enterprise Risk Management
tags: [operational risk, KRI, Basel, ORM, internal fraud, business disruption, ERM]
word_count: 3050
---

# Operational Risk Key Risk Indicators Examples

Operational risk is the broadest and most stubborn risk category in any enterprise. It does not have a single regulator, a single owner, or a single number that tells you how exposed you are. It is the risk of loss from inadequate or failed internal processes, people, and systems, or from external events — and that definition alone covers everything from a wire fraud, to a cloud outage, to a regulator's enforcement letter, to a hurricane.

The Basel Committee codified that definition for banks more than two decades ago, and the same taxonomy is now used — formally or informally — by insurers, asset managers, fintechs, healthcare systems, manufacturers, and energy companies. What makes operational risk hard is not defining it. It is *measuring* it. Loss data is sparse, severity is fat-tailed, and many of the most damaging events (the ones that make the front page) have never happened to your firm before.

That is why operational risk key risk indicators matter more here than in any other risk class. Credit risk has PD, LGD, and EAD. Market risk has VaR. Operational risk has KRIs — leading metrics that track the *health of the controls* that prevent operational losses, so you can see exposure rising before it becomes a loss event.

This guide collects 50-plus operational risk key risk indicators examples organized by the Basel operational risk event-type taxonomy, with thresholds, data sources, and the specific control each KRI is monitoring. It is designed to be used as a reference library when you are building or refreshing your own operational risk program.

## What Operational Risk KRIs Actually Measure

A key risk indicator is a quantitative metric that provides early warning of changes in risk exposure. In the operational risk context, KRIs measure one of three things:

1. **Inherent risk drivers** — factors that increase the underlying exposure regardless of controls (e.g., transaction volume growth, headcount churn, new-product launches).
2. **Control health** — whether the controls designed to mitigate the risk are functioning (e.g., reconciliation breaks, access reviews completed on time, exception approvals).
3. **Loss precursors** — near-miss or low-severity events that, statistically, precede larger losses (e.g., near-miss fraud attempts, repeated customer complaints on the same process).

The strongest operational risk programs maintain a balanced library across all three. A library full of control-health indicators will tell you whether yesterday's controls held; it will not tell you that the underlying risk environment shifted.

## The Basel Operational Risk Taxonomy as the KRI Backbone

The Basel framework defines seven operational risk event types. Even outside banking, this taxonomy is the most useful organizing structure for a KRI library because every operational loss can be classified into exactly one of these buckets:

1. Internal Fraud
2. External Fraud
3. Employment Practices and Workplace Safety
4. Clients, Products, and Business Practices
5. Damage to Physical Assets
6. Business Disruption and System Failures
7. Execution, Delivery, and Process Management

The rest of this article walks through KRI examples for each event type, then closes with a section on cross-cutting program-level KRIs, governance, and common implementation pitfalls.

## 1. Internal Fraud KRIs

Internal fraud is rare but severe — and it is one of the few operational risk classes where leading indicators consistently outperform lagging ones. The Association of Certified Fraud Examiners' biennial Report to the Nations consistently shows that median internal fraud losses scale with how long the scheme runs before detection. Every KRI in this section is, in effect, a detection-time KRI.

| KRI | Threshold | Data Source | Control Monitored |
|---|---|---|---|
| **% of segregation-of-duties (SoD) violations open > 30 days** | < 2% | IAM / GRC | Access controls |
| **High-risk transactions approved by a single user** | 0 | ERP / payments | Dual approval |
| **Vacation / mandatory leave compliance for sensitive roles** | > 98% | HRIS | Mandatory leave control |
| **Employee expense exceptions per 1,000 reports** | < 15 | T&E system | Expense policy |
| **Whistleblower reports per 1,000 employees (annualized)** | > 0.5 (higher = healthy reporting) | Hotline | Speak-up culture |
| **Time-to-investigate whistleblower allegations** | < 30 days median | Investigations | Triage |
| **% of privileged finance access reviews completed on time** | 100% | IAM | UAR cycle |
| **Manual journal entries posted by preparer-only** | 0 | GL system | Maker-checker |
| **Vendor master changes by single user** | 0 | ERP | Vendor onboarding |
| **Payments to newly added vendors in first 30 days (% of total)** | < 3% | AP | New-vendor scrutiny |

The whistleblower KRI is counter-intuitive but well-evidenced: a sudden drop in hotline volume rarely means there is less wrongdoing — it usually means employees have lost confidence the channel works. Treat declining volume as a red flag.

## 2. External Fraud KRIs

External fraud now includes everything from check fraud to deepfake-enabled CEO impersonation. The KRI shift over the last five years has been from transaction-monitoring metrics to identity-and-channel metrics.

| KRI | Threshold | Data Source | Control Monitored |
|---|---|---|---|
| **Fraud loss as bps of transaction volume** | Trending down vs baseline | Fraud system | Fraud strategy |
| **Account takeover attempts per million logins** | < baseline + 20% | IAM / fraud | Auth controls |
| **% of high-value wires verified via callback** | > 99% | Treasury | Callback control |
| **Median time to detect external fraud event** | < 24 hours | Fraud system | Detection |
| **Phishing-reported emails per 1,000 employees per month** | > 30 (higher = healthy reporting) | Email security | Awareness |
| **Phishing simulation click rate** | < 8% | Awareness platform | Training |
| **New-account fraud rate (first 90 days)** | < 0.3% | Onboarding | KYC / IDV |
| **Synthetic identity flags per 1,000 applications** | Trending tracked | KYC vendor | IDV stack |
| **Card-not-present chargeback rate** | < 0.5% | Acquirer | CNP fraud |
| **False-positive rate on transaction monitoring** | < 95% | TMS | Rule tuning |

A subtle but important pairing is the false-positive rate alongside the median detection time. A team that drives false positives down by loosening rules will see detection time drift up. Always read the two together.

## 3. Employment Practices and Workplace Safety KRIs

This Basel category covers HR-driven losses — discrimination claims, wrongful termination, harassment, and workplace injuries. Many firms split this category between HR and EHS owners; KRIs should still roll up to the operational risk dashboard.

| KRI | Threshold | Data Source |
|---|---|---|
| **Open employment-related litigation cases** | Tracked, trended | Legal |
| **EEOC / equivalent complaints per 1,000 employees** | < industry benchmark | HR / Legal |
| **Voluntary turnover in critical roles** | < 12% annual | HRIS |
| **Engagement survey "speak-up safety" score** | > 75% favorable | Survey tool |
| **Total Recordable Incident Rate (TRIR)** | < 1.5 per 200,000 hours | EHS |
| **Manager span-of-control breaches (> 12 directs)** | < 5% of managers | HRIS |
| **% of mandatory compliance training completed** | > 98% | LMS |
| **Open harassment investigations > 60 days** | 0 | HR / Legal |

## 4. Clients, Products, and Business Practices KRIs

This is the largest single Basel loss category by aggregate severity, driven by mis-selling, conduct failures, market manipulation, and inadequate disclosures. Conduct risk lives here.

| KRI | Threshold | Data Source |
|---|---|---|
| **Customer complaints per 1,000 active accounts** | < industry benchmark | CRM |
| **Complaints upheld by ombudsman / regulator** | Tracked | Compliance |
| **% of complaints classified as "vulnerable customer"** | Tracked | CRM |
| **Sales practice exceptions per 1,000 transactions** | < 5 | Sales QA |
| **Suitability review pass rate** | > 95% | Compliance |
| **Disclosure errors identified post-trade** | < 0.1% | Compliance |
| **Marketing material approvals overdue** | 0 > 5 days | Marketing ops |
| **Conflict-of-interest declarations completed on time** | 100% | Compliance |
| **Product approval committee exceptions** | < 10% of launches | Product |
| **% of complaints resolved within SLA** | > 95% | CX |

A common mistake here is treating complaint volume as the only KRI. Complaint *mix* — the proportion tied to a single product, channel, or sales region — is usually a stronger early signal than total volume.

## 5. Damage to Physical Assets KRIs

This category covers losses from natural disasters, fire, vandalism, and terrorism. KRIs are mostly inherent-risk indicators and control-health indicators tied to insurance, BCM, and physical security.

| KRI | Threshold | Data Source |
|---|---|---|
| **% of critical sites with current BIA and BCP** | 100% | BCM tool |
| **Time since last disaster recovery test (per critical site)** | < 12 months | BCM |
| **Insurance coverage gap vs maximum probable loss** | Tracked | Risk / Insurance |
| **Sites in high climate-risk zones (% of asset value)** | Tracked | Property data |
| **Physical access exception count per quarter** | < 5 per site | Physical security |
| **CCTV / access-control system uptime** | > 99% | Facilities |
| **Open property risk engineering recommendations** | < 10 per site | Insurer reports |

## 6. Business Disruption and System Failures KRIs

This is where IT, cyber, and resilience converge. With cloud concentration risk and the rise of third-party platform dependencies, this category has become the dominant source of operational losses for many firms.

| KRI | Threshold | Data Source | Framework |
|---|---|---|---|
| **Critical system uptime** | > 99.95% | Monitoring | DORA / FFIEC |
| **Sev-1 incidents per quarter** | < 2 | ITSM | ITIL |
| **Mean Time To Recover (MTTR) Sev-1** | < 2 hours | ITSM | DORA |
| **% of critical applications with tested DR plan** | > 95% | BCM | ISO 22301 |
| **Backup restore test success rate** | > 98% | Backup logs | ISO 22301 |
| **Change failure rate** | < 5% | DevOps | DORA Four Keys |
| **Emergency changes as % of total** | < 10% | ITSM | Change mgmt |
| **Patch SLA compliance — critical CVEs** | > 95% within 14 days | Vuln mgmt | NIST CSF |
| **Mean Time To Detect (MTTD) cyber incidents** | < 4 hours | SIEM | NIST CSF |
| **Concentration risk: % of workloads on single cloud provider** | Tracked | CMDB | DORA |
| **Critical third-party SOC 2 / ISO 27001 reports current** | 100% | TPRM | NIST CSF |
| **Resilience test pass rate (chaos / scenario)** | > 90% | Resilience eng | DORA |

The cloud concentration KRI deserves a board conversation in its own right. Most firms cannot meaningfully reduce concentration in the short term; the KRI's purpose is to make sure leadership *knows* the exposure and has a documented response if the provider degrades.

## 7. Execution, Delivery, and Process Management KRIs

This is the largest category by *frequency* of loss events. Reconciliation breaks, settlement fails, mis-bookings, model errors, and data quality issues all live here. KRIs in this category are typically owned by the line of business or finance operations team.

| KRI | Threshold | Data Source |
|---|---|---|
| **Open reconciliation breaks > 5 days** | < 50 | Recon platform |
| **Aged break value (USD)** | < threshold per LOB | Recon |
| **Settlement fails as % of trades** | < 1% | Operations |
| **Failed payments per 10,000 outbound** | < 5 | Payments ops |
| **Manual processes still in production (count)** | Trending down | Process inventory |
| **Process exceptions per 1,000 transactions** | < 10 | Workflow |
| **Data quality score on critical data elements** | > 95% | DQ tool |
| **% of EUC (end-user computing) tools registered and reviewed** | > 90% | EUC inventory |
| **Open audit findings past due date** | < 5 | Audit |
| **Self-identified issues vs audit-identified (ratio)** | > 2:1 | RCSA / Audit |
| **Model risk: models past validation due date** | 0 | Model inventory |
| **Vendor SLA breaches per quarter** | < threshold per critical vendor | TPRM |

The self-identified vs audit-identified ratio is one of the most underused KRIs in operational risk. A healthy program finds at least twice as many issues itself as audit finds for it. A ratio under 1:1 means the first line is not actively risk-managing.

## Cross-Cutting Program-Level KRIs

Beyond the seven event-type buckets, there is a small set of program-level KRIs that measure the *health of the operational risk function itself*. These should sit on every CRO's dashboard.

| KRI | Threshold |
|---|---|
| **% of business units with completed RCSA in last 12 months** | 100% |
| **% of top risks with KRI coverage** | > 90% |
| **% of KRIs in red status > 90 days** | < 10% |
| **% of risk events captured in loss database within 30 days** | > 95% |
| **Unreported losses identified by audit / regulator** | 0 |
| **Risk appetite breaches per quarter** | Tracked, trended |
| **Time to close issues by severity** | Within agreed SLA |
| **Coverage of key business processes by control testing** | > 80% annual |

If your operational risk program does not measure itself, it is not a program — it is a collection of dashboards.

## Building Thresholds That Actually Trigger Action

A KRI without a threshold is a statistic. The most common mistake is choosing thresholds based on intuition or last year's performance. Mature programs use one of three threshold-setting methods:

1. **Statistical baselining** — calculate the rolling 12-month mean and standard deviation, set amber at +1σ and red at +2σ. Works well for high-frequency KRIs (transaction volumes, complaints, login attempts).
2. **Risk appetite cascade** — start with the board-approved appetite statement (e.g., "no operational loss event exceeding USD X"), translate to KRI thresholds that, if breached, would put the appetite at risk.
3. **Regulatory or framework benchmark** — for KRIs with external reference points (TRIR, SLA targets in DORA, RTO/RPO in BCM standards), use the external benchmark as the red threshold and a tighter internal level as the amber.

Whichever method you use, *write down* how the threshold was set and review it annually. A threshold no one can defend will be debated every time it is breached, which is exactly when you do not want a debate.

## Governance: Turning KRIs Into Decisions

A KRI library produces a number; a governance process produces a decision. The minimum viable governance for an operational risk KRI program looks like this:

- **Weekly** — first-line risk owners review their KRIs and act on amber/red signals.
- **Monthly** — second-line operational risk function aggregates KRIs, challenges the first line, and reviews trends.
- **Quarterly** — executive risk committee reviews enterprise KRI dashboard, appetite breaches, and emerging risks.
- **Semi-annually** — board risk committee reviews program-level KRIs and the effectiveness of the operational risk function itself.
- **Annually** — KRI library is recalibrated. Indicators that were green for four straight quarters are pressure-tested. Indicators that were red for two straight quarters are escalated to a remediation program.

The key word is *decision*. Every KRI report should explicitly state, for every red and amber indicator: who owns it, what action is being taken, and by when. A report that simply lists numbers is not governance.

## Common Implementation Pitfalls

Even well-funded programs run into the same problems. The fastest way to mature an operational risk KRI program is to actively avoid them:

- **Library bloat.** Programs with 300+ KRIs usually run no real KRIs at all. Most enterprises operate with 50–100 enterprise-level operational risk KRIs and similar numbers at the LOB level. More than that and the signal is lost in the noise.
- **All control-health, no inherent-risk.** A library that only measures whether controls fired tells you nothing about whether the underlying environment shifted. Always carry inherent-risk indicators (transaction volume growth, new-product launches, headcount churn).
- **No link to RCSA.** KRIs and Risk and Control Self-Assessments (RCSAs) should be the same conversation. The RCSA identifies the top risks; the KRIs measure them. If your RCSA outputs and KRI library do not reference each other, they are running in parallel — and that costs credibility with the board.
- **Manual data feeds.** A KRI that depends on someone exporting a CSV every Monday will not survive a reorganization. Automate at the source.
- **No connection to capital or appetite.** Especially in regulated firms, KRIs should feed into operational risk capital models (SMA inputs, scenario analysis) and the firm's stated risk appetite. KRIs that float free of those processes get ignored.
- **No retirement discipline.** A library that only grows is a library that gets ignored. Retire indicators that no longer move, no longer matter, or duplicate other indicators.
- **Confusing KPIs with KRIs.** Operations leaders often want their KPIs included in the KRI library. Resist. KPIs measure performance against plan; KRIs measure exposure against appetite. Both matter; they are not the same.

## A Starter Set: 15 KRIs to Anchor a New Operational Risk Program

If you are building from scratch — or trying to rationalize a bloated library — start with these fifteen. Together they cover all seven Basel event types and the program itself:

1. SoD violations open > 30 days (Internal Fraud)
2. Whistleblower reports per 1,000 employees (Internal Fraud)
3. Median time to detect external fraud event (External Fraud)
4. Phishing simulation click rate (External Fraud)
5. Open employment-related litigation cases (Employment Practices)
6. Customer complaints upheld by regulator (Clients & Products)
7. % of critical sites with tested BCP (Damage to Assets)
8. Critical system uptime (Business Disruption)
9. MTTR Sev-1 incidents (Business Disruption)
10. Patch SLA compliance — critical CVEs (Business Disruption)
11. Open reconciliation breaks > 5 days (Execution)
12. Self-identified vs audit-identified issues ratio (Execution)
13. % of top risks with KRI coverage (Program)
14. % of KRIs in red status > 90 days (Program)
15. Risk appetite breaches per quarter (Program)

Stand these up first. Earn the right — through clean data, on-time reporting, and demonstrated decision impact — to expand the library from there.

## Closing Thought: Operational Risk KRIs Are a Forecasting Discipline

The reason operational risk KRIs feel harder than credit or market KRIs is that there is no neat closed-form model behind them. You are not solving a mathematical equation; you are building a sensor network across the enterprise that, in aggregate, lets the CRO and board see exposure forming before it becomes a loss.

The firms that do this well share three habits:

1. They treat the KRI library as a living artifact and review it relentlessly.
2. They link every red indicator to a specific decision and a named owner.
3. They use the program itself as a KRI — measuring whether their operational risk function is actually changing outcomes.

A well-built set of operational risk key risk indicators is not just a regulatory deliverable. It is the early-warning system that keeps the firm out of the headlines, the loss database, and the enforcement queue. And in a risk class as broad and unforgiving as operational risk, that early-warning system is the single highest-leverage investment a risk function can make.

---

*Want to operationalize this KRI library? Track each indicator with thresholds, owners, and automated alerts inside a single ERM platform — and link every red signal to a documented response action so KRIs translate into decisions, not just dashboards.*
