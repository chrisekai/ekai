---
title: "Operational Risk Key Risk Indicators Examples"
slug: operational-risk-key-risk-indicators-examples
target_keyword: operational risk key risk indicators
meta_description: "The complete pillar guide to Operational Risk KRIs: Basel-aligned definitions, 50+ KRI examples across people, process, systems, and external events, with formulas and thresholds."
word_count: ~3,100
category: Risk-Type KRIs (Pillar)
---

# Operational Risk Key Risk Indicators Examples

Of all the risk categories an enterprise faces, operational risk is the most pervasive – and the hardest to measure. Credit risk has a borrower. Market risk has a price. Liquidity risk has a balance sheet. Operational risk has *everything else*: the failed payment file, the rogue trader, the ransomware locker, the burst water pipe, the misfiled regulatory return.

That breadth is exactly why **operational risk Key Risk Indicators (KRIs)** are non-negotiable. You cannot watch every process, but you can watch the *signals* that tell you a process is drifting toward failure. This pillar guide gives you Basel-aligned definitions, a category-by-category KRI library, formulas, thresholds, and an implementation playbook you can put to work this quarter.

## What Is Operational Risk?

The Basel Committee on Banking Supervision defines operational risk as:

> "The risk of loss resulting from inadequate or failed internal processes, people and systems, or from external events. This definition includes legal risk but excludes strategic and reputational risk."

That definition – now the global standard well beyond banking – splits operational risk into four sources:

1. **People** – fraud, error, key-person dependency, conduct, capacity
2. **Process** – broken workflows, manual workarounds, control failures
3. **Systems** – outages, cyber breaches, data integrity, third-party platforms
4. **External events** – natural disasters, pandemics, geopolitical shocks, vendor failures

Every operational risk KRI you design should map cleanly to one (or sometimes two) of those four buckets.

## What Makes a KRI a *Key* Risk Indicator?

A KRI is not just any metric. To qualify as a true KRI – and to earn space on a senior leadership dashboard – it must satisfy five tests:

1. **Leading.** It moves *before* the loss event, not after.
2. **Measurable.** It has an unambiguous formula and a reliable data source.
3. **Linked.** It maps to a specific named risk, not a general topic.
4. **Threshold-bounded.** Green, amber, and red bands are defined in advance.
5. **Actionable.** Each threshold breach triggers a pre-agreed action.

A KPI without those five traits is just a number. A number without those five traits is just noise.

## Why Operational Risk KRIs Matter More Than Ever

Three forces have raised the stakes:

- **Basel III/IV finalised the Standardised Measurement Approach (SMA),** under which a bank's operational risk capital is driven directly by historical losses. Every operational loss event now has a multi-year capital tail.
- **Regulators expect operational resilience.** The UK PRA, EU DORA, US OCC, and APRA CPS 230 all now mandate that firms identify *important business services*, set *impact tolerances*, and *test* their ability to stay within them. KRIs are the day-to-day instrument of those regimes.
- **Operational losses are growing faster than balance sheets.** ORX consortium data shows operational loss frequency has risen markedly since 2018, driven by cyber, third-party, and conduct events.

Boards no longer accept "we monitor operational risk qualitatively." They expect numbers, on a dashboard, with thresholds.

## How to Categorize Operational Risk KRIs

The cleanest taxonomy is the Basel Level-1 event-type taxonomy, which most ERM teams adapt as follows:

1. **Internal Fraud**
2. **External Fraud**
3. **Employment Practices and Workplace Safety**
4. **Clients, Products, and Business Practices (Conduct)**
5. **Damage to Physical Assets**
6. **Business Disruption and System Failures (Technology / Cyber)**
7. **Execution, Delivery, and Process Management**
8. **Third-Party / Outsourcing**
9. **Change and Project Risk**
10. **People and Culture**

The next ten sections give you concrete operational risk KRI examples for each.

## 1. Internal Fraud KRIs

| KRI | Formula | Suggested Red Threshold |
|---|---|---|
| **Number of staff with segregation-of-duties (SoD) conflicts** | Count of users whose role bundle violates SoD policy | Any unmitigated conflict on a financial system |
| **% privileged access reviews overdue** | Overdue reviews / Total reviews due | > 5% |
| **Whistleblower reports per 1,000 FTE** | Reports received / FTE × 1,000 | A *falling* number is often the red flag, not a rising one |
| **Dormant employee accounts still active** | Accounts not used > 60 days but not disabled | > 1% of workforce |
| **Manual journal entries above materiality posted by single approver** | Count per month | Any non-zero value warrants review |

## 2. External Fraud KRIs

- **Fraud losses as % of revenue** (split by channel: card-present, card-not-present, ACH, wire)
- **First-party fraud rate** on new accounts
- **Authorised Push Payment (APP) fraud loss per £1m of payment volume**
- **% transactions flagged but auto-approved** (suppressed alert rate)
- **Account takeover incidents per 100,000 active accounts**
- **Synthetic identity detection rate**

The single most predictive external fraud KRI in payments is the *velocity of failed authentication attempts per 1,000 sessions* – a 20% week-over-week rise typically precedes a coordinated attack by 7 to 14 days.

## 3. Employment Practices and Workplace Safety KRIs

- **Lost-Time Injury Frequency Rate (LTIFR)** – injuries × 1m / hours worked
- **Open employment-related claims** (harassment, discrimination, wage)
- **Employment claim settlement cost YTD vs budget**
- **% mandatory training overdue** (anti-bribery, code of conduct, health & safety)
- **Engagement survey response rate** – falling response rate is itself a KRI
- **Voluntary turnover in critical roles**

## 4. Conduct and Clients/Products KRIs

These KRIs are central to FCA, ASIC, and CFPB-style conduct regimes.

- **Complaints per 1,000 customers** (split by product, root cause, vulnerability flag)
- **% complaints upheld by ombudsman / regulator**
- **Mis-selling indicators**: % sales reversed within 14-day cooling-off window
- **% customer interactions reviewed under QA framework**
- **Sales-incentive risk score** – proportion of variable comp tied to single product
- **Vulnerable customer identification rate** vs portfolio expectation

## 5. Damage to Physical Assets KRIs

- **Number of sites in flood / earthquake / wildfire zones above tolerance**
- **% sites with current Business Impact Analysis (BIA)**
- **% sites with tested evacuation plan in last 12 months**
- **Insurance coverage gap (insured value vs replacement cost)**
- **Property loss frequency per 100 sites**

## 6. Technology, Cyber, and Business Disruption KRIs

This is the fastest-growing category and deserves the deepest library.

### Availability and resilience

- **% Important Business Services breaching impact tolerance YTD** (DORA / PRA SS1/21)
- **Number of P1/P2 incidents per quarter**
- **Mean Time to Recover (MTTR)** for tier-1 services
- **% disaster recovery tests passed in last 12 months**
- **Recovery Time Objective (RTO) achievement rate**
- **% applications without a tested DR plan**

### Change and release

- **Change failure rate** – failed changes / total changes
- **% emergency changes vs total changes** (sustained > 15% is a red flag)
- **Rollback rate by release**

### Cyber

- **Mean Time to Detect (MTTD)** – critical alerts only
- **% critical vulnerabilities unpatched > SLA** (e.g., 30 days)
- **% privileged accounts without MFA**
- **Phishing simulation click rate**
- **% systems with EOL operating systems**
- **Number of confirmed data exfiltration events**
- **DLP alerts per 1,000 employees**

### Data and integrity

- **% critical data elements without an owner**
- **Data quality issues open > SLA**
- **% systems without immutable backups**

## 7. Execution, Delivery, and Process Management KRIs

Often the largest single source of operational losses by volume.

- **Manual workaround count** – processes still requiring spreadsheet patches
- **Reconciliation breaks open > 5 days**
- **Failed trade rate** (in capital markets) or **failed payment rate** (in banking/payments)
- **% transactions requiring manual repair**
- **STP (straight-through processing) rate** – falling STP signals process erosion
- **% controls untested in last 12 months**
- **Issues raised by audit / second line still open past due date**
- **Backlog ageing** – count of items > 30 days old in core operations queues

## 8. Third-Party and Outsourcing KRIs

Post-DORA and OCC 2023-17 third-party guidance, this category is now scrutinised at board level.

- **% material third parties without current due diligence**
- **% material third parties without exit / substitutability plan**
- **Concentration risk** – % critical services sourced from a single provider
- **Fourth-party visibility coverage** – % material vendors with disclosed sub-contractors
- **Vendor SLA breach rate**
- **Vendor financial health score** (RapidRatings, D&B)
- **Days to offboard a terminated vendor's access**

## 9. Change and Project Risk KRIs

- **% strategic projects rated red on RAG status**
- **Schedule variance > 20% on tier-1 programmes**
- **Cost variance > 15% on tier-1 programmes**
- **Benefits realisation gap** – planned vs realised business case
- **Change saturation index** – number of concurrent major changes hitting the same business unit

## 10. People and Culture KRIs

- **Risk culture survey score**
- **% leaders completing risk training**
- **Incident reporting rate** – low and falling = under-reporting culture
- **Speak-up index** – calls to ethics line per 1,000 FTE
- **Span of control outliers** – managers with > 12 direct reports

## Quantitative vs Qualitative KRIs

Strong programmes use both:

- **Quantitative KRIs** – numeric, formula-driven (e.g., MTTD, fraud loss per £1m).
- **Qualitative KRIs** – assessed on a scale (e.g., risk culture survey score, control self-assessment ratings).

Qualitative KRIs are not "soft" – they are often the earliest signals of trouble. The Wells Fargo, Barings, and Société Générale cases all featured deteriorating *cultural* indicators long before quantitative losses showed up.

## Setting Thresholds: A Practical Framework

Avoid the temptation to set thresholds by gut. A repeatable approach:

1. **Pull 24 months of history** for each candidate KRI.
2. **Calculate the 50th, 85th, and 95th percentiles** of the distribution.
3. **Set Green = below 50th, Amber = 50th–85th, Red = above 85th.** Adjust where regulatory or contractual limits override.
4. **Re-baseline annually** to prevent drift.
5. **Document the mathematical basis** so internal audit can challenge it.

For low-frequency / high-severity KRIs (e.g., critical regulatory breaches), thresholds are usually *count-based*: red = 1, amber = potential / near-miss = 1.

## Linking KRIs to the Risk Taxonomy

Every KRI should sit in a chain:

> **Risk → Control → KRI → Threshold → Action → Owner**

Worked example for "Unauthorised payment release":

| Element | Value |
|---|---|
| Risk | Unauthorised payment release |
| Key Control | Dual approval on payments > $50,000 |
| KRI 1 | % payments > $50k released without dual approval |
| KRI 2 | Number of users with conflicting payment + approval entitlements |
| KRI 3 | % payment system access reviews overdue |
| Amber threshold (KRI 1) | > 0.5% in any month |
| Red threshold (KRI 1) | Any single payment > $1m released without dual approval |
| Action on red | Within 24h: forensic review, suspension of single-approver capability, report to ORC |
| Owner | Head of Payment Operations |

This chain is what regulators (and a serious internal audit team) want to see.

## Reporting Operational Risk KRIs

A common reporting cadence:

- **Daily** – cyber, fraud, payments / settlement breaks (1st-line ops dashboards).
- **Weekly** – incidents, change failures, complaints (1st-line management).
- **Monthly** – the Operational Risk Committee pack, with all amber/red KRIs and trends.
- **Quarterly** – the Risk Committee of the Board.

A good monthly KRI pack contains, at minimum: the trend chart, the threshold, the breach narrative, the root-cause analysis, the action with owner and due date, and a forward-looking commentary. Fifty pages of red dots without narrative is *worse* than no pack at all.

## Common Pitfalls

1. **Confusing volume metrics with risk metrics.** "Number of trades processed" is a KPI. "% trades failing settlement" is a KRI.
2. **Too many KRIs.** Senior leadership can act on 25–35 KRIs in total. Anything beyond becomes shelfware.
3. **Thresholds set to never trigger.** If nothing has been amber in 12 months, the threshold is wrong.
4. **No backward-looking validation.** After every operational loss event, ask: "which KRI *should* have caught this, and did it?" If none did, design a new one.
5. **Treating KRIs as static.** New products, new regulation, new threats demand new KRIs. Refresh the library at least annually.
6. **Disconnected from capital and stress testing.** Under SMA, every operational loss feeds capital. KRIs should be linked into the same data spine that feeds the loss event database and ICAAP / ICAARA.

## How Operational Risk KRIs Differ From Other Risk KRIs

It is worth being explicit, since the lines blur in practice:

- **Vs Credit Risk KRIs** – credit KRIs (PD, LGD, NPL ratio) describe the borrower; operational KRIs describe how *you* execute.
- **Vs Market Risk KRIs** – market KRIs (VaR, sensitivities) describe price exposure; operational KRIs describe whether your trading, valuation, and back-office processes work.
- **Vs Compliance KRIs** – compliance KRIs cover regulatory rule adherence; operational KRIs cover the broader execution machine. Conduct sits in both.
- **Vs Cyber KRIs** – cyber KRIs are a *subset* of operational risk KRIs (Basel category 6 / 7), but most firms maintain a separate, deeper cyber dashboard.

## A 90-Day Plan to Stand Up an Operational Risk KRI Programme

- **Days 1–15:** Confirm the operational risk taxonomy and align with internal audit's universe.
- **Days 15–30:** For the top 15 operational risks, brainstorm 3–5 candidate KRIs each. Score them against the five-test rubric.
- **Days 30–45:** Identify data sources. Wire automated feeds where possible (incident system, HRIS, IAM, payment systems, vendor management, complaints, audit issues).
- **Days 45–60:** Calculate provisional thresholds from history. Socialise with first-line owners.
- **Days 60–75:** Define escalation playbooks. Assign accountable owners for every KRI.
- **Days 75–90:** Run the first formal Operational Risk Committee with the new dashboard. Capture lessons. Iterate.

By day 90, a mid-size firm should have 25–35 live operational risk KRIs feeding monthly governance.

## Industry Variations: How the KRI Mix Shifts by Sector

Operational risk taxonomy is universal, but the *mix* of KRIs that matter most varies sharply:

- **Banking and Capital Markets:** Settlement fail rate, reconciliation breaks, conduct complaints, model performance drift, and trade-surveillance alert closure rates dominate. Basel SMA and PRA SS1/21 compliance are non-negotiable framings.
- **Insurance:** Claims leakage, underwriting error rate, complaint upheld rate by ombudsman, and policy administration STP rate are tier-1 KRIs.
- **Asset Management:** NAV error frequency, breach of investment guidelines, and trade-allocation exception rates sit at the top.
- **Payments and Fintech:** Authorisation rate variance, chargeback rate, fraud loss per million in volume, and API uptime are the leading indicators investors and regulators watch.
- **Healthcare:** Never-events, medication error rate, HIPAA breach reports, and credentialing lapses replace much of the conduct category.
- **Energy and Utilities:** Process safety events (Tier 1 / Tier 2 per API RP 754), SAIDI/SAIFI for electric utilities, and environmental exceedances anchor the dashboard.
- **Public Sector:** Service-delivery SLA breaches, FOIA / public-records response times, and procurement-fraud indicators take primacy.

The taxonomy is universal; the calibration is local. Regulator expectations, customer contracts, and historical loss data should drive which KRIs sit at the top of your dashboard.

## Tooling: What Actually Powers an Operational Risk KRI Programme

Your KRI programme is only as good as its data plumbing. A pragmatic stack:

- **Loss event database** – ORX, internal LED, or a GRC module – feeds historical calibration of thresholds.
- **GRC platform** – Archer, ServiceNow IRM, LogicGate, MetricStream, Riskonnect, or Resolver – holds the risk register, control library, and KRI definitions in one place.
- **Data layer** – a warehouse (Snowflake, Databricks, BigQuery, Synapse) that pulls from incident management, IAM, payments, complaints, HRIS, vendor management, and audit issue trackers.
- **Visualisation** – Power BI or Tableau for the operating-level dashboards; the GRC tool for board-grade reports.
- **Workflow** – SLA-tracked tickets for amber/red breaches, with auto-escalation to the named accountable owner.

The single most common implementation failure is letting KRIs depend on monthly spreadsheet refreshes. Automate the feed, or expect the KRI to silently die within two quarters.

## Worked Mini Case Study: Catching a Conduct Event Early

A mid-size retail bank noticed three KRIs trending amber simultaneously over six weeks:

1. **Sales-incentive risk score** – the proportion of variable comp tied to a single savings product had crept above its 85th-percentile threshold.
2. **Complaints upheld rate** for that product had risen from 18% to 27%.
3. **% sales reversed within the 14-day cooling-off window** had moved from 1.1% to 2.4%.

No single KRI was a smoking gun. The combination was. A targeted thematic review found a regional sales team cross-selling the product to ineligible vulnerable customers. The bank acted within 30 days, refunded affected customers, and avoided a regulatory enforcement action that, based on comparable peers, would have cost roughly 20× the remediation programme.

The lesson: operational risk events almost never light up a single red KRI in isolation. Watch correlated movements across categories.

## Final Word

Operational risk losses rarely arrive as a single catastrophe – they arrive as a *trend* that nobody was paid to watch. The regulators have given up waiting for firms to do this on their own. DORA, CPS 230, OCC heightened standards, and Basel SMA all now turn KRIs into a regulatory expectation, not a nice-to-have.

The good news: the discipline pays for itself. Firms that run a tight KRI programme typically see 20–40% reductions in operational loss frequency over three years – not because risk falls, but because they catch events while they are still cheap to fix.

Pick the five operational risk KRIs from this guide that map to your largest losses of the past three years. Wire them to live data. Set thresholds. Define what happens when red flashes. Do that, and you have already moved further than most enterprises ever will.
