---
title: "Operational Risk Key Risk Indicators Examples: A Practical 2026 Guide"
slug: operational-risk-key-risk-indicators-examples
target_keyword: operational risk key risk indicators
meta_description: "30+ operational risk key risk indicators examples with formulas, thresholds, and Basel-aligned categories. A practical playbook for risk teams."
word_count_target: 3000
pattern: "Pattern B: [Risk Type] KRI Examples"
mirrors: "Fraud KRI Examples"
priority: High
---

# Operational Risk Key Risk Indicators Examples: A Practical 2026 Guide

Operational risk is the quiet bleed in most organizations. It does not arrive as a single catastrophic event the way a credit default or a market crash does. It seeps in through a missed control, a wire sent to the wrong account, a junior analyst leaving without a handover, a vendor outage at 2 a.m., a process that "always worked" until it didn't. By the time finance sees the number, the damage is already booked.

Key Risk Indicators (KRIs) are the early-warning instruments that turn this slow bleed into something measurable, something the board can see *before* it shows up in the loss event database. Done well, operational risk KRIs change the conversation from "what happened?" to "what is about to happen, and what do we do about it?"

This guide walks through 30+ operational risk key risk indicators examples grouped the way the Basel Committee categorises operational risk events. For each one, you will see the metric, a sample formula, a typical threshold, and what to do when it breaches. Use it as a working reference rather than a one-time read.

## What Is an Operational Risk Key Risk Indicator?

A KRI is a quantifiable metric that signals a *change in the level of risk exposure* before that risk crystallises into an actual loss. It is not the same as a Key Performance Indicator (KPI), which measures whether you achieved a goal, and it is not the same as a Key Control Indicator (KCI), which measures whether a specific control is operating.

A useful operational risk KRI has five attributes:

1. **Forward-looking** — it moves before the loss event, not after.
2. **Quantifiable** — it produces a number on a defined cadence (daily, weekly, monthly).
3. **Linked to a specific risk** — you can name the risk it is monitoring.
4. **Threshold-bound** — green, amber, and red levels are defined and signed off.
5. **Owned** — a named individual is accountable for the metric and the response.

If a candidate metric fails any of these tests, it is data — not a KRI.

## Why Operational Risk KRIs Matter Now

Three pressures make operational risk KRIs more important in 2026 than they were five years ago:

- **The Basel III finalisation reforms** replaced the old Advanced Measurement Approach with the Standardised Measurement Approach (SMA), which uses the Business Indicator and the Internal Loss Multiplier. Firms with high historical losses pay more capital, which means *forward-looking indicators* now have a direct line to capital savings.
- **Operational resilience regulation** in the UK (PRA SS1/21), the EU (DORA, in force since January 2025), and the US (Interagency Guidance on Third-Party Risk) requires firms to set "impact tolerances" and prove they can stay within them. KRIs are the daily telemetry that proves it.
- **AI-driven process change** has compressed the time between a control weakness emerging and a loss occurring. Manual monthly reviews are too slow; KRIs need to be near real-time wherever the underlying process is.

The firms that get this right treat KRIs as a *system*, not a list — instrumented, automated, and reviewed in the same cadence as the underlying process.

## The Seven Basel Operational Risk Categories

The Basel Committee defines seven Level 1 operational risk event types. Most mature operational risk frameworks organise their KRI library around these so the indicators map directly to loss data and capital models:

1. Internal Fraud
2. External Fraud
3. Employment Practices and Workplace Safety
4. Clients, Products, and Business Practices
5. Damage to Physical Assets
6. Business Disruption and System Failures
7. Execution, Delivery, and Process Management

The 30+ examples below are grouped under these categories, plus two cross-cutting categories that almost every firm now tracks separately: **Third-Party Risk** and **People Risk**.

## 1. Internal Fraud KRIs

Internal fraud is statistically rare but high-severity. The KRIs here aim to detect the *conditions* under which internal fraud becomes possible — concentration of access, override of controls, weakening of segregation of duties.

**KRI 1.1 — Segregation of Duties (SoD) Conflicts Open**
- Formula: Count of unresolved SoD conflicts in the IAM system at month-end.
- Threshold: Green ≤ 5, Amber 6–15, Red > 15.
- Response: Red triggers compensating-control review and a 30-day remediation plan to the ORC.

**KRI 1.2 — Privileged Access Reviews Overdue**
- Formula: (Privileged accounts with overdue quarterly review ÷ total privileged accounts) × 100.
- Threshold: Green ≤ 2%, Amber 2–5%, Red > 5%.
- Response: Red freezes new privileged grants until backlog is cleared.

**KRI 1.3 — Manual Journal Entries Above Materiality, Posted by Preparer**
- Formula: Count of manual journals > materiality threshold posted without a separate approver in the period.
- Threshold: Green = 0, Amber 1–2, Red ≥ 3.
- Response: Each red item is reviewed by Internal Audit within 10 working days.

**KRI 1.4 — Vendor Master File Changes by Non-Authorised Users**
- Formula: Count of bank-detail changes in the vendor master made by users outside the authorised list per month.
- Threshold: Green = 0, Amber 1, Red ≥ 2.

## 2. External Fraud KRIs

External fraud is high-frequency and increasingly automated. The leading indicators are the volumes that *precede* loss events — attempted fraud, fraud-pattern hit rates, and authentication anomalies.

**KRI 2.1 — Attempted Fraud Volume**
- Formula: Number of transactions blocked by fraud rules per 10,000 transactions, per channel.
- Threshold: Set as 30-day rolling baseline ± 2 standard deviations; red is > +3σ.
- Response: Red triggers a same-day pattern review by the fraud team.

**KRI 2.2 — Card-Not-Present Chargeback Ratio**
- Formula: (Chargeback value ÷ CNP transaction value) × 100, monthly.
- Threshold: Green < 0.5%, Amber 0.5–1.0%, Red > 1.0% (network monitoring threshold).

**KRI 2.3 — Authentication Failure Spikes**
- Formula: % increase in failed authentication attempts vs. trailing 7-day average.
- Threshold: Green < 25%, Amber 25–50%, Red > 50%.

**KRI 2.4 — Account Takeover Reports**
- Formula: Customer-reported ATO incidents per 100,000 active accounts, monthly.
- Threshold: Set against industry benchmark from APWG / national fraud body.

## 3. Employment Practices and Workplace Safety KRIs

This category is where the line between HR metrics and risk metrics gets blurred. The KRIs that matter for operational risk are the ones that signal *cultural* or *physical safety* breakdowns likely to produce a loss event.

**KRI 3.1 — Whistleblower Reports per 1,000 Employees**
- Formula: Count of whistleblower / speak-up reports in the quarter ÷ total headcount × 1,000.
- Threshold: Below industry benchmark is itself a risk indicator (under-reporting). Use red = > 50% deviation in either direction.

**KRI 3.2 — Lost-Time Injury Frequency Rate (LTIFR)**
- Formula: (Lost-time injuries × 1,000,000) ÷ total hours worked.
- Threshold: Green ≤ 1.0, Amber 1.0–2.0, Red > 2.0 (varies sharply by industry).

**KRI 3.3 — Mandatory Training Completion**
- Formula: % of employees with current AML, anti-bribery, code-of-conduct, and information-security training.
- Threshold: Green ≥ 98%, Amber 95–98%, Red < 95%.

**KRI 3.4 — Voluntary Attrition in High-Risk Roles**
- Formula: Rolling 12-month voluntary attrition for roles flagged as high-risk (treasury dealers, model owners, compliance officers, key engineers).
- Threshold: Green ≤ 10%, Amber 10–18%, Red > 18%.

## 4. Clients, Products, and Business Practices KRIs

This is the largest loss category in most banks. The KRIs target conduct, product suitability, and complaints — the leading indicators of mis-selling, regulatory action, and class-action exposure.

**KRI 4.1 — Complaint Volume Trend**
- Formula: Complaints per 10,000 customers, monthly, segmented by product.
- Threshold: 3-month rolling average + 2σ as red.
- Response: Red triggers root-cause analysis to product committee within 15 days.

**KRI 4.2 — Complaints Upheld by Ombudsman / Regulator**
- Formula: % of escalated complaints decided against the firm.
- Threshold: Green < 25%, Amber 25–40%, Red > 40%.

**KRI 4.3 — Suitability Assessment Exceptions**
- Formula: % of new investment / lending sales where the suitability assessment was overridden or skipped.
- Threshold: Green < 1%, Amber 1–3%, Red > 3%.

**KRI 4.4 — Regulatory Findings Open**
- Formula: Count of open regulatory findings past their committed remediation date.
- Threshold: Green = 0, Amber 1–2, Red ≥ 3.

**KRI 4.5 — Marketing Material Approvals Bypassed**
- Formula: Count of customer-facing materials published without compliance sign-off in the period.
- Threshold: Green = 0; any breach is red.

## 5. Damage to Physical Assets KRIs

For most firms, this is a low-frequency category dominated by climate and security events. The KRIs here are increasingly cross-listed with climate-risk and resilience indicators.

**KRI 5.1 — Sites in High-Hazard Climate Zones**
- Formula: % of revenue-generating sites located in zones flagged as high physical-climate risk under the firm's chosen scenario (e.g. NGFS Disorderly).
- Threshold: Set against board-approved appetite.

**KRI 5.2 — Property Insurance Cover Ratio**
- Formula: Insured value ÷ replacement value of physical estate.
- Threshold: Green ≥ 95%, Amber 90–95%, Red < 90%.

**KRI 5.3 — Physical Security Incidents**
- Formula: Count of physical security incidents (intrusion, theft, unauthorised access) per quarter.
- Threshold: Tracked as trend; red on > 50% YoY increase.

## 6. Business Disruption and System Failures KRIs

This category is the home of operational resilience. The metrics here are the daily heartbeat of the firm, and most regulators now expect them to be reviewed at board level at least quarterly.

**KRI 6.1 — Critical System Availability**
- Formula: (Total uptime ÷ scheduled uptime) × 100, per critical service.
- Threshold: Green ≥ 99.95%, Amber 99.9–99.95%, Red < 99.9% (calibrate to the firm's impact tolerance).

**KRI 6.2 — P1/P2 Incidents per Month**
- Formula: Count of priority-1 and priority-2 incidents affecting customer-facing services.
- Threshold: 6-month rolling baseline + 2σ as red.

**KRI 6.3 — Mean Time to Recover (MTTR)**
- Formula: Sum of recovery time ÷ count of incidents, per service, monthly.
- Threshold: Set to half the impact tolerance window.

**KRI 6.4 — Backup Restore Test Success Rate**
- Formula: % of scheduled backup restore tests that succeeded in the period.
- Threshold: Green = 100%, Amber 95–99%, Red < 95%.

**KRI 6.5 — Change Failure Rate**
- Formula: (Failed or rolled-back production changes ÷ total production changes) × 100.
- Threshold: Green < 5%, Amber 5–10%, Red > 10% (DORA Elite ≈ 0–5%).

**KRI 6.6 — Cyber Patching Compliance**
- Formula: % of critical / high CVEs patched within SLA.
- Threshold: Green ≥ 98%, Amber 95–98%, Red < 95%.

## 7. Execution, Delivery, and Process Management KRIs

This is the category most associated with the day-to-day "noise" of operations — failed trades, wrong payments, reconciliation breaks. Volume is high, severity is usually low, but the *trend* tells you whether the underlying process is degrading.

**KRI 7.1 — Reconciliation Breaks Aged > 30 Days**
- Formula: Count and value of items unreconciled for more than 30 days at month-end.
- Threshold: Green ≤ 5 items / < 0.01% of book, Amber and Red set proportionally.

**KRI 7.2 — Failed Trade Rate**
- Formula: (Failed settlement instructions ÷ total instructions) × 100, per asset class.
- Threshold: Industry benchmark (e.g. CSDR cash-penalty triggers).

**KRI 7.3 — Wire Payment Errors**
- Formula: Count of wire payments requiring recall or amendment per 100,000 sent.
- Threshold: Green < 5, Amber 5–10, Red > 10.

**KRI 7.4 — Manual Workarounds in Live Use**
- Formula: Count of documented manual workarounds bypassing automated controls.
- Threshold: Tracked as a list; red on any new workaround in place > 60 days without a remediation plan.

**KRI 7.5 — Process Capability Index (Cpk) for Critical Processes**
- Formula: Cpk per critical process from operations data.
- Threshold: Green ≥ 1.33, Amber 1.0–1.33, Red < 1.0.

**KRI 7.6 — Aged Open Issues from Issue Log**
- Formula: Count of open issues past target close date by 30+ days.
- Threshold: Green ≤ 3, Amber 4–8, Red > 8.

## 8. Third-Party and Outsourcing KRIs

DORA, the PRA's operational resilience regime, and the US Interagency Guidance have all elevated third-party risk into a near-equal pillar with internal operational risk. These KRIs almost always sit on a separate dashboard now.

**KRI 8.1 — Critical Third-Party Concentration**
- Formula: % of critical services dependent on a single third party (or a single cloud region).
- Threshold: Set against board appetite; red typically > 30% on a single provider.

**KRI 8.2 — Third-Party SLA Breach Rate**
- Formula: % of months in trailing 12 with at least one critical SLA breach, per critical vendor.
- Threshold: Green ≤ 8%, Amber 9–25%, Red > 25%.

**KRI 8.3 — Overdue Third-Party Risk Assessments**
- Formula: Count of critical third parties with overdue annual risk assessment.
- Threshold: Green = 0; any breach is red.

**KRI 8.4 — Exit Plans Tested in Last 12 Months**
- Formula: % of critical third parties with an exit / substitution plan tested in the trailing 12 months.
- Threshold: Green ≥ 90%, Amber 70–90%, Red < 70%.

## 9. People Risk (Cross-Cutting) KRIs

Carving people risk out of category 3 is increasingly common because it covers more than safety — it covers continuity, capacity, and capability.

**KRI 9.1 — Single Points of Knowledge**
- Formula: Count of critical processes with only one individual capable of executing them end-to-end.
- Threshold: Green ≤ 2, Amber 3–5, Red > 5.

**KRI 9.2 — Span of Control Outliers**
- Formula: Count of managers with > 12 direct reports in operational roles.
- Threshold: Tracked as trend.

**KRI 9.3 — Vacancy Rate in Control Functions**
- Formula: % of approved positions vacant in risk, compliance, audit, and finance control teams.
- Threshold: Green < 8%, Amber 8–15%, Red > 15%.

## How to Build an Operational Risk KRI Library That People Actually Use

A common failure pattern is the *KRI graveyard* — a 200-row spreadsheet that nobody reads because it is too long, too lagging, and too disconnected from decisions. Six rules keep a KRI library alive:

1. **Start from the risk register, not the data.** For each top risk on the register, ask: "What would move first if this risk got worse?" Then look for the metric — not the other way around.
2. **Cap the active set.** An executive risk committee can absorb roughly 20–30 KRIs in a quarter. Tier the rest as "monitored" — they exist, but they only escalate on breach.
3. **Set thresholds the way you set risk appetite.** Green = within tolerance, Amber = approaching tolerance, Red = breach. Red must trigger a *named action*, not just a discussion.
4. **Automate the data feed.** Anything that requires a human to populate a cell each month will degrade. Pull from source systems via the GRC platform or a data lake.
5. **Pair every KRI with a Key Control Indicator.** A KRI tells you the risk is rising; the KCI tells you whether the control that should mitigate it is still working. Together they prevent the false comfort of "control in place, risk rising, no one notices."
6. **Review thresholds twice a year.** Risk profiles drift; static thresholds become noise.

## Operational Risk KRI Dashboard: A Sample Layout

A workable executive dashboard tends to follow the same shape:

- **Top strip:** the firm's three or four "impact tolerance" services with availability, MTTR, and incident count for the period.
- **Heatmap:** Basel categories on one axis, business lines on the other, coloured by the worst KRI status in each cell.
- **Trend panel:** the five KRIs that moved the most this period.
- **Watch list:** any KRI that has been amber for two consecutive periods (early sign of a structural issue).
- **Closed loop:** prior-period reds with current status and owner.

The point of the dashboard is not to display data — it is to drive a 30-minute conversation about *which two or three things we are doing differently next quarter*.

## Common Pitfalls

- **Confusing volume with risk.** "We did 2 million payments" is not a KRI. "We had 14 wire errors per 100,000 payments, up from 7" is.
- **Lagging indicators dressed up as KRIs.** Loss events booked, complaints upheld, and audit findings are *outcome* metrics. They belong in the dashboard but they are not early warnings.
- **Thresholds set by data, not by appetite.** If you set red at the 95th percentile of historical data, you will *always* have one or two reds. That is not signal — it is arithmetic.
- **No owner.** A KRI without a named accountable executive does not get acted on. The owner is the person who has to explain the breach.
- **Static libraries.** New products, new geographies, and new vendors all change the risk profile. The KRI library has to change with them.

## Putting It Into Practice This Quarter

If your operational risk KRI programme needs a refresh, a 90-day plan that has worked for a lot of teams looks like this:

- **Days 1–30:** map the top 20 risks on the operational risk register to existing metrics. Identify the gaps. Kill any KRI that no one has reviewed in the last two cycles.
- **Days 31–60:** redesign the dashboard to a single page per business line, with thresholds explicitly approved by each business head. Automate the three most painful manual feeds.
- **Days 61–90:** run the new dashboard at the operational risk committee for two cycles, capturing every challenge and gap. Publish the revised KRI library and the schedule for next year's threshold review.

Operational risk will never be eliminated; it can only be sensed earlier and acted on faster. A working set of operational risk key risk indicators — Basel-aligned, automated, owned, and reviewed — is what turns the slow bleed into something the organisation can actually see.

## Frequently Asked Questions

**How many operational risk KRIs should a firm have?**
A working executive set is typically 20–30 active KRIs, with a wider library of 80–150 monitored metrics that escalate only on breach. Beyond that the dashboard becomes noise.

**What is the difference between a KRI and a KCI?**
A Key Risk Indicator measures the level of risk exposure (e.g. failed trade rate). A Key Control Indicator measures whether a specific control is operating as designed (e.g. % of trades passing pre-trade compliance check). Mature frameworks use both.

**How often should operational risk KRIs be reviewed?**
The data should refresh on the cadence of the underlying process — daily for system availability, monthly for reconciliation breaks, quarterly for training completion. The *threshold review* should happen at least twice a year.

**Are operational risk KRIs required by regulation?**
Directly, no — but indirectly, yes. Basel III, DORA, PRA SS1/21, and the US Interagency Guidance all require firms to monitor operational risk and operational resilience on an ongoing basis. KRIs are the standard way of evidencing that monitoring.

**Can small firms use this framework?**
Yes. Smaller firms typically run with 10–15 active KRIs covering availability, payment errors, complaints, third-party SLA, and people risk. The structure is the same; only the scale changes.
