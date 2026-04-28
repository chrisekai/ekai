---
title: "Operational Risk Key Risk Indicators Examples: A Practical Guide for 2026"
target_keyword: operational risk key risk indicators
word_count: ~3000
pattern: B - [Risk Type] KRI Examples
---

# Operational Risk Key Risk Indicators Examples: A Practical Guide for 2026

Operational risk is the single largest source of unexpected losses in most organizations, yet it remains the hardest risk category to measure. Unlike credit or market risk, operational risk has no clean exposure metric, no daily mark-to-market, and no neat probability distribution. What it does have, when implemented correctly, is a system of Key Risk Indicators (KRIs) — leading and lagging metrics that warn you before a small process gap becomes a regulatory finding, a fraud event, or a service outage.

This guide walks through operational risk KRI examples that work in practice, organized around the Basel framework's seven loss event categories. For each, you'll find concrete metrics, suggested threshold logic, the data source, and how to interpret movements. Whether you are building your first KRI dashboard or refreshing one that's gone stale, the examples below are designed to be copied, adjusted, and put to work.

## What Counts as Operational Risk?

The Basel Committee defines operational risk as "the risk of loss resulting from inadequate or failed internal processes, people and systems, or from external events." That definition is broad on purpose. It covers:

- A wire transfer sent to the wrong account because of a process gap
- A trader exceeding limits because of a control failure
- A data center outage caused by a vendor's failed update
- A whistle-blower disclosure that triggers a regulatory probe
- A flood that takes a back-office hub offline

Because operational risk lives across every function, the KRIs that measure it must do the same. A good operational risk KRI library is not a flat list — it is mapped to the seven Basel event categories so you can spot concentrations and gaps.

## The Seven Basel Event Categories (and Why They Matter for KRIs)

Basel II's operational risk taxonomy is still the most useful organizing principle, even outside banking. It forces you to ask: where could losses actually come from? The seven categories are:

1. Internal Fraud
2. External Fraud
3. Employment Practices and Workplace Safety
4. Clients, Products, and Business Practices
5. Damage to Physical Assets
6. Business Disruption and System Failures
7. Execution, Delivery, and Process Management

Below are operational risk KRI examples for each. Treat the thresholds as starting points — every organization must calibrate to its own risk appetite, business model, and historical loss experience.

## 1. Internal Fraud KRIs

Internal fraud is rare in frequency but high in severity. The KRIs you want here are early warnings that controls are weakening, not after-the-fact loss counts.

| KRI | Formula / Definition | Suggested Amber / Red Threshold | Data Source |
|---|---|---|---|
| % of privileged accounts without quarterly access review | (Unreviewed privileged accounts ÷ Total privileged accounts) × 100 | 5% / 10% | IAM system |
| Segregation of duties (SoD) conflicts open >30 days | Count of unresolved SoD conflicts | 5 / 10 | GRC platform |
| Whistleblower hotline reports per 1,000 FTEs | Reports ÷ (FTEs ÷ 1,000) | Trending up 25% QoQ | Hotline vendor |
| Override transactions by managers per month | Count of manager overrides on workflow approvals | >1.5x trailing 12-mo average | ERP / workflow logs |
| Employees with overdue mandatory leave | Count of staff who haven't taken 5 consecutive days in 12 months | >2% of in-scope roles | HRIS |

The mandatory-leave KRI deserves a note: forcing block-leave is one of the cheapest internal fraud controls in existence, because most schemes require continuous concealment. A rising number of employees skipping it is a leading indicator worth watching.

## 2. External Fraud KRIs

External fraud KRIs typically have the highest data volume and the most automation potential. Many of the best ones are velocity metrics.

- **Card-not-present chargeback rate** — chargebacks ÷ total CNP transactions, monthly. Amber at 0.65%, red at 1% (Visa's monitoring threshold).
- **Account takeover (ATO) attempts blocked per 1,000 logins** — pulled from your fraud engine. Sharp week-over-week increases often precede a successful breach.
- **New-account synthetic ID flag rate** — % of newly opened accounts flagged as likely synthetic identity. Red at 0.5% sustained over three weeks.
- **Authorized push payment (APP) fraud loss rate** — fraud loss ÷ total push-payment volume. Set internal threshold against industry benchmarks.
- **Phishing simulation click-through rate** — % of staff who clicked a simulated phish in the last campaign. Red above 8%, with mandatory remediation training.

The phishing simulation metric sits at the boundary between external fraud, cyber, and people-risk KRIs. Wherever you put it, track it.

## 3. Employment Practices and Workplace Safety KRIs

This category is often underweighted in operational risk dashboards because it sits between HR and Risk. Don't underweight it — employment-practices losses are climbing year over year in most loss databases.

| KRI | Why It Matters |
|---|---|
| Voluntary attrition rate (regretted only), trailing 12 months | Spike indicates culture or compensation risk; precedes process risk as institutional knowledge walks out |
| Open employment-related litigation cases | Direct legal exposure; track by jurisdiction |
| Lost-time injury frequency rate (LTIFR) per 200,000 hours worked | OSHA-compatible safety metric; rising LTIFR points to control breakdown |
| % of staff overdue on mandatory training | Training-completion lag is a leading indicator for misconduct findings |
| Span-of-control outliers | Managers with >12 direct reports correlate with higher conduct issues |

A practical implementation tip: pair LTIFR with a near-miss reporting rate. If LTIFR is flat but near-misses are dropping, that's not good news — it usually means people have stopped reporting.

## 4. Clients, Products, and Business Practices KRIs

This is the largest loss category in many banks' history (think mis-selling, market manipulation, and AML breaches). The KRIs are about conduct, fit, and disclosure.

- **% of customer complaints upheld by regulator or ombudsman** — direct conduct signal.
- **Sales suitability override rate** — % of sales where the relationship manager overrode the recommended product fit. Red above 5%.
- **AML alert backlog age** — median days an AML alert has been open. Red above 30 days, regulators consistently cite this metric.
- **Sanctions screening false-negative rate** — measured via tuning tests. Anything above 0.1% on Tier 1 lists is a red flag.
- **Marketing material approvals overdue** — count of in-market materials where the compliance approval has expired.

A subtle but powerful KRI: **% of new products launched without a completed product-risk assessment**. If this is anything other than zero, you have a governance problem that will eventually surface as a Customer/Products loss.

## 5. Damage to Physical Assets KRIs

Often dismissed as low-frequency, this category became a board-level topic after pandemic-era disruptions and now climate stress testing. Useful KRIs include:

- **% of critical sites without current business-continuity plan tested in 12 months**
- **Single-point-of-failure (SPOF) physical sites** — sites housing critical processes with no alternate
- **Insurance coverage ratio** — insured value ÷ replacement cost of critical assets, by site
- **Days since last evacuation drill** at critical hubs
- **Climate exposure score** — % of critical sites in flood / wildfire / heat zones rated high

The climate exposure KRI is increasingly a regulator focus and overlaps with climate-risk KRIs (covered separately). For operational risk dashboards, what matters is the slope: is exposure growing or shrinking as you move sites and counterparties?

## 6. Business Disruption and System Failures KRIs

This is where operational risk meets technology risk, and it is often the loudest category on a dashboard. Some of the most useful metrics:

| KRI | Threshold Logic |
|---|---|
| Critical-system uptime % (rolling 30 days) | Red if below SLO (e.g., 99.95%) |
| Number of P1/P2 incidents per month | Red on >25% increase QoQ |
| Mean time to recover (MTTR) for P1 incidents | Red if MTTR exceeds RTO commitments |
| % of critical applications with current DR test | Red if any critical app missed annual DR |
| Change-failure rate | Red above 15% — points to release-management weakness |
| Cumulative customer-minutes lost in month | Direct customer-impact metric, ties to NPS |

If your organization runs a cloud-heavy stack, add **% of critical workloads with multi-AZ or multi-region deployment** and **vendor concentration ratio** (% of critical workloads on a single hyperscaler). Both are increasingly featured in regulator stress tests.

## 7. Execution, Delivery, and Process Management KRIs

The most fertile category for KRI examples and, paradoxically, the one most organizations measure least systematically. Process KRIs are also where machine-readable data is most abundant.

- **First-time-right rate** — % of transactions/processes completed without rework.
- **Manual-touch ratio** — % of process steps requiring human intervention. Higher manual touch correlates with error rate and conduct risk.
- **Reconciliation breaks aged >30 days** — count and dollar value.
- **Settlement fail rate** — relevant in trading, payments, and supply-chain finance contexts.
- **Vendor SLA breach count by tier** — operational risk exposure to outsourcing.
- **% of processes without a documented owner** — a governance KRI that often surfaces shockingly high numbers when first measured.

A strong dashboard pairs **error rate** with **error severity index**. Many low-severity errors are normal cost-of-doing-business; a few high-severity errors are how you end up in the news.

## Cross-Cutting Operational Risk KRIs

Some KRIs don't fit neatly into one Basel category but should appear on every operational risk dashboard:

1. **Open audit findings past due date** — split by severity. A creep upward is usually the earliest sign of governance fatigue.
2. **Risk and Control Self-Assessment (RCSA) overdue count**.
3. **Issues with overdue remediation broken out by 30/60/90+ days**.
4. **Operational loss as a % of gross income** — top-of-house lagging metric, useful for trend.
5. **Near-miss-to-incident ratio** — high ratio (more near-misses caught than incidents) is healthy.

These are your "is the operational risk framework itself working?" indicators. If audit closures are slipping and RCSAs are overdue, every other KRI on this page becomes less reliable.

## How to Set Thresholds That Actually Trigger Action

The most common failure mode of an operational risk KRI program is not a missing metric — it's thresholds set so wide that nothing ever turns amber. Three principles:

**1. Anchor on history, then on appetite.** Start with the trailing 24 months of data. Identify the 75th and 90th percentile of the metric's distribution. Use those as amber and red, then adjust upward or downward based on stated risk appetite. Don't invent thresholds in a workshop with no data.

**2. Make breaches mean something.** A KRI that turns red but triggers no action is worse than no KRI at all — it teaches the organization that risk signals are noise. Each red threshold should map to a defined response: escalation, deep-dive review, control test, or capital reservation.

**3. Review thresholds annually.** Risk profiles drift. A 2024 threshold set when transaction volume was 60% of today's volume is now wrong by construction. Build threshold review into the same cycle as your RCSA refresh.

## Reporting and Governance: Making KRIs Stick

Even the best metric library fails without the right governance wrapper. The pattern that works in most organizations:

- **Tier 1 KRIs (8–15 metrics)** report monthly to the board risk committee. These are the top-of-house operational risk signals.
- **Tier 2 KRIs (30–60 metrics)** report monthly to the executive risk committee, organized by Basel category.
- **Tier 3 KRIs (the long tail)** sit in business-unit dashboards and are reviewed by the first line.

Map every KRI to:

- A Basel category
- A risk owner (named individual, not a team)
- A threshold rationale
- A defined escalation path
- A linked control or process

Without those five fields, a KRI is decoration, not management information.

## Common Pitfalls — and How to Avoid Them

After reviewing dozens of KRI implementations, the same failure modes show up again and again:

- **Too many KRIs.** A 400-metric library no one looks at is worse than 25 metrics the board reviews monthly. Prioritize ruthlessly. If you cannot articulate the decision a KRI would inform, cut it.
- **Lagging-only metrics.** "Number of operational losses last quarter" tells you what already happened. Pair every lagging KRI with at least one leading indicator from the same category.
- **No data lineage.** A KRI you can't trace back to a source system will get challenged the first time it goes red. Build the lineage before you publish the metric.
- **Thresholds that never breach.** If nothing in your dashboard has been amber in six months, your thresholds are too loose, your data is wrong, or you have an unusually serene business. Two of those three are bad news.
- **No connection to capital or scenarios.** In regulated entities, KRIs that don't feed into operational risk capital modeling or scenario analysis tend to be ignored. Tie them in deliberately.

## A Starter Set: 25 Operational Risk KRIs to Implement First

If you are building a dashboard from scratch, the following 25 metrics will give you working coverage across all seven Basel categories within a quarter:

1. Privileged accounts without quarterly review (%)
2. SoD conflicts open >30 days (count)
3. Mandatory leave overdue (% of in-scope staff)
4. Card chargeback rate (%)
5. Phishing simulation click-through rate (%)
6. ATO attempts blocked per 1,000 logins
7. Voluntary regretted attrition (TTM %)
8. LTIFR per 200,000 hours
9. Mandatory training overdue (%)
10. Open employment litigation (count)
11. Customer complaints upheld by regulator (count)
12. AML alert backlog age (median days)
13. Sales suitability override rate (%)
14. Critical sites without tested BCP (%)
15. Climate-exposure-high critical sites (%)
16. Critical-system uptime (%)
17. P1 incidents (count, MoM)
18. MTTR vs. RTO (ratio)
19. Change-failure rate (%)
20. Vendor concentration on single hyperscaler (%)
21. First-time-right rate (%)
22. Reconciliation breaks aged >30 days (count and value)
23. Vendor SLA breaches by tier (count)
24. Open audit findings past due (count, by severity)
25. Operational loss as % of gross income

Start with these, run a 90-day proof-of-concept, and only then expand. A small, trusted, well-governed dashboard outperforms a large, ignored one every time.

## Conclusion

Operational risk KRIs are not a compliance exercise — they are how you turn a vague, sprawling risk category into actionable management information. The examples in this guide are deliberately concrete: thresholds you can adapt, formulas you can implement, and governance scaffolding you can copy.

The organizations that get the most from operational risk KRIs share three traits. They map every metric to a Basel category and a named owner. They set thresholds that breach often enough to mean something. And they treat the KRI dashboard as a living artifact, refreshed every year against fresh data and lessons from the loss event log.

If you start with the 25 metrics above and build the discipline around them, you will be ahead of most operational risk programs — and crucially, you will spot the next significant loss event in time to do something about it.
