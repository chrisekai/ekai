---
title: "Operational Risk Key Risk Indicators Examples: 50+ KRIs With Thresholds"
slug: operational-risk-key-risk-indicators-examples
target_keyword: operational risk key risk indicators
meta_description: "Operational risk KRI examples across people, process, systems, and external events. Includes thresholds, dashboards, and a Basel-aligned implementation roadmap."
word_count_target: 3000
pattern: "B - [Risk Type] KRI Examples"
mirrors: "Fraud KRI Examples (highest CTR 4.9%)"
priority: High
---

# Operational Risk Key Risk Indicators Examples: 50+ KRIs With Thresholds

Operational risk is the only risk category that exists in every organization, in every sector, on every day of the year. It is also the most under-measured. While credit and market risk teams have decades of quantitative tooling behind them, operational risk teams often rely on incident logs that arrive weeks after the damage is done.

Key Risk Indicators (KRIs) close that gap. They turn the soft, sprawling surface area of operational risk into a small set of leading metrics that you can watch on a dashboard, escalate against thresholds, and report to your risk committee with confidence.

This guide gives you the full picture: what operational risk KRIs are, how regulators expect you to use them, the categories you should cover, more than fifty practical examples with thresholds, and a step-by-step roadmap to roll them out.

## What is operational risk?

The Basel Committee defines operational risk as "the risk of loss resulting from inadequate or failed internal processes, people, and systems, or from external events." That definition is deliberately broad. It captures everything from a wire-transfer fraud and a misconfigured cloud bucket to a hurricane that takes a data center offline.

Operational risk has four traditional drivers:

- **People** — human error, misconduct, key-person dependency, capacity gaps
- **Process** — broken or undocumented procedures, control gaps, manual handoffs
- **Systems** — IT outages, application defects, data quality, cyber events
- **External events** — natural disasters, third-party failures, regulatory shocks, geopolitical disruption

Some firms add a fifth pillar — legal risk — to surface litigation, regulatory enforcement, and contractual exposure. Whichever taxonomy you use, your KRI library should map cleanly to it.

## What are operational risk key risk indicators?

A Key Risk Indicator is a measurable signal that the level of risk in a specific area is changing. A good operational risk KRI has five qualities:

1. **Relevant** — directly tied to a real risk in your operational risk taxonomy
2. **Measurable** — produced from a system of record, not a survey
3. **Predictive** — moves *before* a loss event, not after it
4. **Threshold-bound** — has a defined green, amber, and red zone
5. **Actionable** — someone owns the response when a threshold is breached

Think of KRIs as the smoke detector, not the fire. A rising volume of failed payment reconciliations is a smoke detector. The $40 million reconciliation loss six months later is the fire. The point of an operational risk KRI program is to act on smoke.

## Why operational risk KRIs matter

There is a regulatory case and a business case.

**The regulatory case.** Basel III and the new Standardised Approach for Operational Risk (SMA) require banks to maintain robust operational risk frameworks, with KRIs sitting alongside loss data, scenario analysis, and self-assessments as one of the four key inputs. ISO 31000 and COSO ERM both expect organizations to monitor risk through indicators. Sector regulators — from the OCC and the FCA in financial services to the FDA in life sciences — have all issued guidance referencing leading risk indicators.

**The business case.** Operational losses are highly skewed: most of the loss in any given year comes from a small number of large events. KRIs let you see the precursors to those events. Firms that invest in mature KRI programs typically report:

- 30–50% faster detection of control breakdowns
- 15–25% reduction in operational loss frequency over a three-year horizon
- Materially lower audit-finding remediation cycles
- Better board reporting and faster regulatory responses

## How to choose effective operational risk KRIs

The mistake every first-time program makes is too many indicators. A library of 400 KRIs is a library nobody reads. Aim for 30–60 enterprise-level indicators, supported by deeper second-line metrics in each business unit.

Use this filter:

- **Does it map to a top-ten operational risk in your risk register?** If not, drop it.
- **Can the data be pulled automatically?** If you need a human to assemble it monthly, it will rot.
- **Does it have a documented owner?** No owner, no KRI.
- **Is the threshold defensible?** Either statistically (e.g., two standard deviations above 12-month rolling mean) or against an external benchmark.

## Categories of operational risk KRIs

The rest of this guide is organized around the Basel four-pillar taxonomy, plus legal and compliance, with practical examples and starter thresholds. Treat the thresholds as illustrative — calibrate them against your own loss data and risk appetite.

---

## People risk KRI examples

People risk covers human error, conduct, capacity, and culture.

| # | KRI | Suggested threshold (Green / Amber / Red) | Owner |
|---|---|---|---|
| 1 | Voluntary attrition rate in critical roles (rolling 12 months) | <8% / 8–12% / >12% | HR + Risk |
| 2 | Vacancy rate in control functions | <5% / 5–10% / >10% | HRBP |
| 3 | Average tenure of front-line operators (months) | >24 / 12–24 / <12 | Ops lead |
| 4 | % staff overdue on mandatory compliance training | <2% / 2–5% / >5% | Compliance |
| 5 | Number of conduct cases reported per 1,000 FTE per quarter | <3 / 3–6 / >6 | HR + Compliance |
| 6 | Whistleblower hotline volume vs. 12-month rolling average | ±20% / ±20–40% / >±40% | Ethics Office |
| 7 | Overtime hours as % of standard hours in operations teams | <10% / 10–20% / >20% | Ops lead |
| 8 | % key-person roles without a documented successor | <10% / 10–25% / >25% | Talent |
| 9 | Engagement survey score (annual) | >75 / 65–75 / <65 | HR |
| 10 | Number of policy exceptions granted per quarter | Trend ↓ / flat / trend ↑ | First-line risk |

A rising attrition rate in your reconciliation team is one of the most reliable predictors of a future loss event. Capacity erosion drives error rates; error rates drive losses.

## Process risk KRI examples

Process KRIs are the workhorse of any operational risk dashboard.

| # | KRI | Suggested threshold | Owner |
|---|---|---|---|
| 11 | Volume of manual workarounds in core processes | <5 / 5–15 / >15 | Process owner |
| 12 | % transactions reconciled within SLA | >99% / 95–99% / <95% | Operations |
| 13 | Aged unreconciled items >30 days (count and value) | 0 / 1–10 / >10 items | Finance Ops |
| 14 | Failed payments as % of total payments | <0.1% / 0.1–0.5% / >0.5% | Payments lead |
| 15 | Number of customer complaints per 10,000 accounts | <5 / 5–15 / >15 | CX + Risk |
| 16 | % new products launched without completed risk assessment | 0% / 1–5% / >5% | Product Risk |
| 17 | Percentage of controls overdue for testing | <5% / 5–10% / >10% | Internal control |
| 18 | Mean time to close audit findings (days) | <60 / 60–120 / >120 | Audit liaison |
| 19 | Number of rework loops per process per month | Trend ↓ / flat / trend ↑ | Process owner |
| 20 | % straight-through processing in a target workflow | >90% / 75–90% / <75% | Operations |

If you only have time to instrument ten KRIs, pick five from this category. Process drift is silent and cumulative — by the time the loss event arrives, the drift is already months old.

## Systems and technology risk KRI examples

Operational technology risk has expanded dramatically as more processes move to cloud and SaaS platforms. Keep these tightly coupled to your IT and cyber metrics, but report a small operational view.

| # | KRI | Suggested threshold | Owner |
|---|---|---|---|
| 21 | Critical system uptime (% of plan) | >99.9% / 99.5–99.9% / <99.5% | IT Ops |
| 22 | Mean time to recover (MTTR) for Severity 1 incidents (minutes) | <60 / 60–240 / >240 | IT Ops |
| 23 | Number of unpatched critical vulnerabilities >30 days | 0 / 1–5 / >5 | Cyber |
| 24 | % privileged accounts not reviewed in last 90 days | <2% / 2–10% / >10% | IAM |
| 25 | Failed change rate (% of changes rolled back) | <5% / 5–15% / >15% | Change Mgmt |
| 26 | Backup test failures per quarter | 0 / 1–2 / >2 | IT Ops |
| 27 | End-of-life software still in production (count) | 0 / 1–5 / >5 | IT Architecture |
| 28 | Phishing simulation click rate | <5% / 5–15% / >15% | Cyber |
| 29 | Data quality exceptions in the customer master per month | <50 / 50–200 / >200 | Data Office |
| 30 | Disaster recovery test pass rate | 100% / 80–99% / <80% | BCM |

For a deeper technology-only view, build a separate cybersecurity KRI dashboard. The operational risk dashboard should carry only the indicators that the risk committee needs to discuss in fifteen minutes.

## External event KRI examples

These often look like macro indicators, which is exactly what makes them useful — they show pressure building outside the firm.

| # | KRI | Suggested threshold | Owner |
|---|---|---|---|
| 31 | Concentration of revenue in single supplier or customer | <20% / 20–35% / >35% | Procurement / Sales |
| 32 | Number of critical third parties with overdue assurance reviews | 0 / 1–3 / >3 | TPRM |
| 33 | Geopolitical exposure index for top 10 countries (0–100) | <30 / 30–60 / >60 | Risk |
| 34 | Number of reportable incidents at critical fourth parties (quarter) | 0 / 1–2 / >2 | TPRM |
| 35 | Climate-related physical risk events impacting operations (year-to-date) | 0–1 / 2–4 / >4 | BCM + ESG |
| 36 | Currency volatility for top exposures (annualized) | <10% / 10–20% / >20% | Treasury |
| 37 | Insurance coverage gap vs. 1-in-200-year scenario loss | <5% / 5–15% / >15% | Risk Finance |

## Legal and compliance KRI examples

Whether or not legal risk is a separate pillar in your taxonomy, these indicators belong on the operational dashboard.

| # | KRI | Suggested threshold | Owner |
|---|---|---|---|
| 38 | Open regulatory enforcement matters (count) | 0 / 1–2 / >2 | Legal |
| 39 | Litigation exposure (provisions, $M) | Within budget / +10% / +25% | Legal |
| 40 | Regulatory deadlines missed in trailing 12 months | 0 / 1 / >1 | Compliance |
| 41 | Privacy data subject requests overdue beyond statutory deadline | 0 / 1–5 / >5 | DPO |
| 42 | Sanctions screening false-positive rate | <2% / 2–5% / >5% | Financial Crime |
| 43 | Sanctions screening true positives investigated >5 days | 0 / 1–3 / >3 | Financial Crime |
| 44 | KYC refresh backlog (count of customers) | <100 / 100–500 / >500 | Onboarding |
| 45 | Number of self-identified compliance breaches per quarter | Trend ↑ is healthy if losses ↓ | Compliance |

A counter-intuitive note on item 45: a *rising* number of self-identified breaches paired with falling losses is a sign of a maturing program, not a deteriorating one. KRIs need narrative, not just numbers.

## Loss-data KRI examples

Loss data is a lagging indicator on its own, but slicing it produces useful leading signals about where controls are weakening.

| # | KRI | Suggested threshold | Owner |
|---|---|---|---|
| 46 | Operational loss events >$10K per quarter (count) | <5 / 5–10 / >10 | ORM |
| 47 | Near-miss events reported per quarter | Trend ↑ is healthy | ORM |
| 48 | Concentration of losses in top Basel category (% of total) | <40% / 40–60% / >60% | ORM |
| 49 | Loss provision movement vs. plan | Within budget / +10% / +25% | Finance |
| 50 | Repeat-cause loss events in trailing 12 months | 0 / 1–3 / >3 | ORM + Audit |
| 51 | Recovery rate on operational losses (insurance + other) | >40% / 25–40% / <25% | Risk Finance |
| 52 | % loss events with completed root-cause analysis | 100% / 80–99% / <80% | ORM |

## Setting thresholds: green, amber, and red

A KRI without a threshold is a dashboard ornament. There are three defensible ways to set thresholds:

- **Statistical** — for high-volume metrics, set amber at 1.5σ above the rolling 12-month mean and red at 2.5σ. This is the cleanest method when you have data history.
- **Risk-appetite-anchored** — start from the board's stated quantitative appetite (e.g., "operational losses below $50M per year") and work backwards into KRI thresholds that, if breached, would put that appetite at risk.
- **Benchmarked** — for indicators where you have peer data (third-party uptime, attrition, training completion), use industry benchmarks. Document the benchmark source.

Whichever method you choose, write it into the KRI charter so it survives the next reorganization.

## Building the operational risk KRI dashboard

A good dashboard is small. The risk committee should be able to scan it in two minutes and ask three sharp questions in the next ten.

Aim for:

- One enterprise heatmap (5 risk categories × red/amber/green status)
- A trend strip for the top 10 enterprise KRIs
- A "what changed this month" panel — only KRIs that shifted color
- A forward-look section: KRIs trending toward amber within 60 days
- An action register linked to every red KRI

If your dashboard exceeds two pages, you have a reporting product, not a decision tool.

## Implementation roadmap

A pragmatic 90-day rollout looks like this.

**Days 1–30: Frame.**
Map your top 10 enterprise operational risks. For each, draft three candidate KRIs. Identify the system of record. Confirm an owner. End of month one: a 30-KRI shortlist with named owners and data sources.

**Days 31–60: Build.**
Establish data pipelines. Set provisional thresholds using twelve months of historical data where possible. Wire the dashboard. Pilot it with one business unit and the risk committee.

**Days 61–90: Embed.**
Run the dashboard in parallel with existing reporting for one cycle. Tune thresholds. Lock the KRI charter. Add the dashboard to the formal risk committee pack. Schedule the first quarterly KRI calibration.

After the first 90 days, the program needs maintenance, not expansion. Add a KRI only when you retire one.

## Common pitfalls

- **Confusing KRIs with KPIs.** A KPI measures whether you achieved a goal. A KRI measures whether the level of risk is changing. The same metric can be both, but they need separate thresholds and audiences.
- **Lagging indicators dressed as leading.** "Number of fines" is a lagging indicator. "Number of regulatory inspection findings open >30 days" is closer to leading. Audit your library.
- **No escalation path.** If breaching red doesn't trigger a clearly defined response within a clearly defined window, the threshold is decorative.
- **Static thresholds.** Recalibrate at least annually. Your business changes; your thresholds should too.
- **Ownership theatre.** "Risk Management" is not an owner. A named first-line executive is.

## Frequently asked questions

**How many operational risk KRIs should we have?**
At enterprise level, 30–60 is a healthy range. Below 20, you are probably under-instrumented. Above 80, you are reporting noise.

**How often should we report KRIs?**
Monthly to the risk committee, quarterly to the board, with real-time alerting on red thresholds for a critical subset.

**What's the difference between a KRI and a KCI?**
A Key Control Indicator measures whether a *control* is working (e.g., percentage of access reviews completed). A KRI measures whether the *risk* is rising. KCIs feed KRIs; both matter.

**Do small firms need operational risk KRIs?**
Yes, but proportionate. A 200-person firm might run 10–15 KRIs reviewed quarterly. The discipline matters more than the volume.

**How do operational risk KRIs connect to capital?**
Under the Basel SMA, capital is driven primarily by business indicator and historical losses, but supervisors expect KRIs to evidence a credible operational risk framework. Strong KRIs reduce the risk of supervisory add-ons.

## Conclusion

Operational risk KRIs work because they convert ambient organizational noise into a small number of decision-ready signals. The fifty examples above are not a checklist to copy whole — they are a starting library. Pick the ten that map most directly to your top risks, instrument them properly, set thresholds you would defend in front of a regulator, and run the program with the same rigor your credit and market colleagues bring to theirs.

The firms that get this right do not necessarily have the largest operational risk teams. They have the smallest, most opinionated KRI libraries, and a leadership team that actually reads them.
