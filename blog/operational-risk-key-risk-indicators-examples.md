---
title: "Operational Risk Key Risk Indicators Examples: 40+ Basel-Aligned KRIs With Formulas and Thresholds"
slug: operational-risk-key-risk-indicators-examples
target_keyword: operational risk key risk indicators
meta_description: "40+ operational risk key risk indicators examples mapped to Basel III event categories. Formulas, thresholds, and a starter dashboard for ORM, ERM, and 2nd-line risk teams."
word_count_target: 3000
pattern: "Pattern B: [Risk Type] KRI Examples"
mirrors: "Fraud KRI Examples (highest CTR 4.9%)"
priority: High
notes: "Pillar topic; Basel-aligned"
---

# Operational Risk Key Risk Indicators Examples: 40+ Basel-Aligned KRIs With Formulas and Thresholds

Operational risk is the loss exposure that does not fit cleanly into credit, market, or liquidity buckets — and the one most likely to surprise a board. A failed payment file. A rogue trader. A vendor breach. A wildfire that takes out a regional data centre. Each is an operational risk event; each one is, in principle, observable in advance through the right metric watched at the right cadence.

That metric is a **key risk indicator (KRI)**. In a mature operational risk management (ORM) program, KRIs are the mechanism that turns the qualitative judgement of a risk-and-control self-assessment (RCSA) into a continuously monitored signal. They sit alongside loss data, RCSA, scenario analysis, and capital modelling as the four core inputs into the Basel III/IV operational risk framework — but they are the only one that updates daily.

This guide is a working catalogue of 40+ operational risk key risk indicators examples, organised by the seven Basel-defined operational loss event categories and by the major control domains that ORM teams typically structure their dashboards around. For each KRI you get a formula, a defensible threshold, and the underlying risk it signals.

If you are building an ORM dashboard, refreshing your KRI library after an internal audit finding, or preparing a 2nd-line presentation to the operational risk committee, this is the reference.

## What is operational risk?

The Basel Committee on Banking Supervision defines operational risk as:

> *"the risk of loss resulting from inadequate or failed internal processes, people and systems or from external events."*

This definition includes **legal risk** (litigation, regulatory fines, settlements) but excludes **strategic and reputational risk**. The same definition is now embedded in most non-bank operational risk frameworks (insurers under Solvency II, asset managers, large corporates) because it is the most useful working definition the industry has produced.

Operational risk is the residual category — the one that absorbs everything that is not market or credit. That makes the KRI library wider, more heterogeneous, and harder to standardise than for any other risk type.

## The seven Basel operational risk event categories

Basel groups operational loss events into seven Level-1 categories. A best-practice KRI library covers all seven, even if the indicator count is uneven across them:

1. **Internal fraud** — losses due to acts intended to defraud, misappropriate property, or circumvent regulations involving at least one internal party.
2. **External fraud** — losses due to acts by a third party intended to defraud, misappropriate property, or circumvent the law.
3. **Employment practices and workplace safety** — losses arising from acts inconsistent with employment, health, or safety laws or agreements.
4. **Clients, products, and business practices** — losses from unintentional or negligent failure to meet a professional obligation to specific clients, or from the nature or design of a product.
5. **Damage to physical assets** — losses arising from loss or damage to physical assets from natural disaster or other events.
6. **Business disruption and system failures** — losses from disruption of business or system failures.
7. **Execution, delivery, and process management** — losses from failed transaction processing or process management, from relations with trade counterparties and vendors.

We will walk through KRIs for each, then add cross-cutting KRIs covering people, third-party, change, and conduct risk that span multiple categories.

## How to design an operational risk KRI

Before the catalogue, four design principles applied across every KRI below:

1. **Map to a named risk and a named control.** Each KRI exists because (a) a risk is in the register and (b) a control is supposed to be working. The KRI tells you whether the control is working in practice, not just on paper.
2. **Define green/amber/red tolerances, not just a target.** A KRI without a threshold is a number, not an indicator. Tolerances are calibrated to the firm's operational risk appetite statement.
3. **Tie escalation to the threshold.** Amber triggers an action; red triggers escalation to the operational risk committee or above. Without escalation, the KRI dies in a spreadsheet.
4. **Review thresholds at least annually.** Operational risk profiles change with strategy, products, vendors, and the regulatory perimeter. Static thresholds become misleading within 18–24 months.

---

## 1. Internal Fraud KRIs (Basel category 1)

Internal fraud is low-frequency, high-severity. KRIs are mostly leading indicators of control weakness rather than direct counts of incidents.

### 1.1 Segregation-of-duties (SoD) conflict count

- **Formula:** `Number of users with conflicting entitlements ÷ users in scope`
- **Threshold:** Red if any unmitigated SoD conflict exists in payments, treasury, or financial close roles.

### 1.2 Privileged-access reviews overdue

- **Formula:** `Privileged accounts past their access-recertification due date ÷ total privileged accounts`
- **Threshold:** Red >2%.

### 1.3 Manual journal entries above threshold

- **Formula:** Count of manual JEs above a defined dollar threshold per period, particularly post-close adjustments.
- **Threshold:** Red if late-in-period high-value manual JEs trend upward over three reporting cycles.

### 1.4 Whistleblower / ethics-line case volume and ageing

- **Threshold:** A *drop* in volume can be as concerning as a spike, often signalling chilled reporting culture rather than fewer issues. Ageing of open cases >60 days is a defensible red.

### 1.5 Mandatory-leave compliance for sensitive roles

- **Formula:** `Sensitive-role employees who took ≥10 consecutive business days off in the year ÷ total in scope`
- **Threshold:** Red <100%. Mandatory leave is a long-standing internal-fraud control; the KRI is whether it is actually enforced.

### 1.6 Override and exception rate in transaction-processing

- **Threshold:** Red if exception rate exceeds 1% on a sustained basis or any single user/desk concentrates >5% of overrides.

---

## 2. External Fraud KRIs (Basel category 2)

This is the highest-volume operational loss category in retail banking, payments, and e-commerce. KRIs lean toward real-time monitoring rather than monthly snapshots.

### 2.1 Account takeover (ATO) attempts per 1,000 active accounts

- **Threshold:** Trend metric; calibrate against rolling 90-day baseline.

### 2.2 Card-not-present fraud loss rate (basis points of CNP volume)

- **Threshold:** Issuer/acquirer-specific. Industry CNP loss benchmarks from card networks anchor the green/amber/red.

### 2.3 Authorised Push Payment (APP) fraud cases per 100k transactions

- **Threshold:** Particularly relevant in markets with mandatory APP fraud reimbursement (e.g. UK PSR rules).

### 2.4 Mule-account detection rate

- **Formula:** `Confirmed mule accounts identified by monitoring ÷ confirmed mule accounts identified by external referrals`
- **Threshold:** Red <70% — a low rate indicates that monitoring is finding fewer mule accounts than law enforcement is.

### 2.5 Phishing/smishing site takedown time

- **Formula:** Average hours from detection to confirmed takedown.
- **Threshold:** Red >24 hours for branded phishing.

### 2.6 KYC remediation backlog

- **Formula:** `Customers flagged for KYC refresh past their due date ÷ total customers in scope`
- **Threshold:** Red if high-risk-customer remediation is past due.

---

## 3. Employment Practices and Workplace Safety KRIs (Basel category 3)

These KRIs span HR, EHS, and conduct teams. The link to operational risk is direct: employment-related litigation and workplace incidents are recorded operational losses.

### 3.1 Voluntary attrition in critical roles

- **Formula:** `Voluntary leavers in critical roles ÷ critical-role headcount, annualised`
- **Threshold:** Red >15%, or >2x firm-wide attrition.

### 3.2 Single points of failure in critical processes

- **Formula:** Count of critical processes with no documented backup operator.
- **Threshold:** Red if any critical end-to-end process has fewer than two trained operators.

### 3.3 Mandatory training compliance rate

- **Formula:** `Employees current on mandatory training ÷ population in scope`
- **Threshold:** Red <98% for regulated topics.

### 3.4 Open employment claims and ageing

- **Threshold:** Tracked for trend; spikes correlate with cultural or management issues that often surface as conduct or fraud KRIs later.

### 3.5 Workplace incident rate (TRIR / LTIFR)

- **Reference:** OSHA (US), HSE (UK), or national equivalent. Compared against industry benchmarks.

### 3.6 Diversity-related grievance volume

- **Threshold:** Trend metric, paired with engagement-survey scores as a leading indicator of conduct risk.

---

## 4. Clients, Products, and Business Practices KRIs (Basel category 4)

This category drives the largest operational-risk losses for many financial institutions through misselling, fiduciary breach, and product-design failures. The KRIs here are heavily conduct-flavoured.

### 4.1 Customer complaint rate and root-cause concentration

- **Formula:** `Complaints per 1,000 active customers, broken down by root cause`
- **Threshold:** Red if a single root cause accounts for >25% of complaints over two consecutive months.

### 4.2 Complaint upheld rate by external ombudsman

- **Threshold:** UK Financial Ombudsman or equivalent uphold rate above peer median is red.

### 4.3 Misselling indicator: product suitability override rate

- **Formula:** `Sales executed despite suitability or appropriateness flags ÷ flagged sales`
- **Threshold:** Red >5%.

### 4.4 Product approval committee bypass count

- **Threshold:** Red if any product reaches market without sign-off from the new-product approval (NPA) committee.

### 4.5 Marketing communications compliance review failure rate

- **Formula:** `Comms reworked at compliance review ÷ comms submitted`
- **Threshold:** Red >15%.

### 4.6 AML transaction-monitoring alert ageing

- **Formula:** `Open AML alerts past their SLA ÷ open alerts`
- **Threshold:** Red >5%, with any alert older than 90 days flagged individually.

---

## 5. Damage to Physical Assets KRIs (Basel category 5)

Lower frequency than the other categories, but tail-risk capital intensive. KRIs are mostly resilience and BCM-flavoured.

### 5.1 Sites in elevated natural-hazard zones without tested BCP

- **Formula:** `Sites in defined hazard zones without a BCP tested in last 12 months ÷ total sites in zone`
- **Threshold:** Red >0%.

### 5.2 Insurance coverage gap

- **Threshold:** Red if business interruption coverage is less than the modelled 1-in-100 year BIA loss.

### 5.3 Critical site concentration

- **Formula:** `Revenue or processing volume concentrated in single site ÷ total`
- **Threshold:** Red if >40% of any critical service runs from one location.

### 5.4 Facilities maintenance overdue (life-safety systems)

- **Threshold:** Red if any life-safety inspection (fire, sprinkler, generator) is overdue.

---

## 6. Business Disruption and System Failures KRIs (Basel category 6)

Often the largest day-to-day source of operational loss in technology-heavy firms. Many of the indicators below align with ITIL, NIST CSF, and the operational resilience expectations issued by the Bank of England, FCA, and PRA.

### 6.1 Critical service availability versus impact tolerance

- **Formula:** `Actual availability of an Important Business Service ÷ defined impact tolerance`
- **Threshold:** Red if availability falls below the published impact tolerance, or the rolling 12-month trend would breach.

### 6.2 Incident count and severity weighted by Severity 1/2

- **Threshold:** Red if Sev-1 incidents exceed a defined annual budget.

### 6.3 Mean time to recover (MTTR) on critical services

- **Threshold:** Red if MTTR exceeds the impact tolerance defined for the Important Business Service.

### 6.4 Change failure rate

- **Formula:** `Changes resulting in incident or rollback ÷ total changes`
- **Threshold:** Red >15%; world-class targets <5%.

### 6.5 Emergency change ratio

- **Formula:** `Emergency changes ÷ total changes`
- **Threshold:** Red >10% on a sustained basis. High emergency-change ratios indicate planning or change-control weakness.

### 6.6 End-of-life / unsupported software in critical services

- **Formula:** `Critical services running components past vendor support ÷ total critical services`
- **Threshold:** Red >0%.

### 6.7 Backup recoverability test pass rate

- **Threshold:** Red <100% for tier-1 critical systems.

### 6.8 Cyber control failures (NIST CSF function-level)

- **Threshold:** Red if any tier-1 control test fails. Cyber-specific KRIs typically warrant a separate dashboard, but the operational risk committee should see the rolled-up red/amber count.

---

## 7. Execution, Delivery, and Process Management KRIs (Basel category 7)

This is the most populous KRI category for transaction-processing firms — payments, settlements, fund administration, claims, supply-chain operations.

### 7.1 Failed transaction rate (STP failure)

- **Formula:** `Transactions falling out of straight-through processing ÷ total transactions`
- **Threshold:** Red if STP rate falls below the defined operational target (process-specific).

### 7.2 Reconciliation breaks ageing

- **Formula:** `Reconciliation breaks open >5 business days ÷ total breaks`
- **Threshold:** Red >5% or any single break above a defined materiality threshold.

### 7.3 Suspense and unallocated account balances

- **Threshold:** Red if balance or count exceeds defined thresholds for >2 consecutive month-ends.

### 7.4 Manual workaround inventory

- **Formula:** Count of documented manual workarounds in critical processes; ageing.
- **Threshold:** Red if any workaround has been in place >180 days without remediation plan.

### 7.5 Trade/payment cancel-and-correct rate

- **Threshold:** Red if cancel-and-correct exceeds 0.5% of volume on a sustained basis.

### 7.6 Vendor SLA breach rate (critical vendors)

- **Formula:** `Critical-vendor SLA breaches ÷ total critical vendors per period`
- **Threshold:** Red if any tier-1 vendor breaches more than once per quarter.

### 7.7 RCSA action ageing

- **Formula:** `RCSA actions past their target close date ÷ total open RCSA actions`
- **Threshold:** Red >15%.

### 7.8 Audit issue ageing (operational risk-relevant findings)

- **Threshold:** Red if any "high" rated audit issue is past its agreed close date.

---

## 8. Cross-cutting KRIs: People, Third-Party, Change, and Conduct

Some operational risks span Basel categories and warrant their own indicators on a 2nd-line dashboard.

### 8.1 Third-party concentration in critical services

- **Formula:** `Critical services dependent on a single third party ÷ total critical services`
- **Threshold:** Red >25%.

### 8.2 Fourth-party (sub-processor) visibility

- **Formula:** `Critical third parties with mapped fourth-party dependencies ÷ total critical third parties`
- **Threshold:** Red <80%.

### 8.3 Vendor risk assessments overdue

- **Threshold:** Red >5%.

### 8.4 Project portfolio risk index

- **Formula:** Weighted average of schedule variance, budget variance, and risk-adjusted scope completion across major change projects.
- **Threshold:** Red if more than 20% of strategic projects are amber/red.

### 8.5 Conduct-risk index

- **Formula:** Composite of complaint rate, breach count, mandatory-training compliance, and engagement-survey scores.
- **Threshold:** Set by the conduct risk committee.

### 8.6 Operational loss frequency and severity (lagging)

- **Formula:** Count and gross loss of internal operational events per quarter, by Basel category.
- **Threshold:** Red if losses exceed budgeted operational risk losses or any single event exceeds the defined materiality threshold.

---

## A starter operational risk KRI dashboard

A workable 2nd-line operational risk dashboard rarely runs to more than 15–20 indicators at the committee level, with deeper drill-downs at process level. A defensible starter set:

| # | KRI | Category | Owner |
|---|-----|----------|-------|
| 1 | SoD conflict count (unmitigated) | Internal fraud | CIO / CISO |
| 2 | Mandatory-leave compliance | Internal fraud | HR |
| 3 | External fraud loss rate (bps) | External fraud | Fraud ops |
| 4 | KYC remediation backlog | External fraud | Financial crime |
| 5 | Voluntary attrition in critical roles | Employment | HR |
| 6 | Mandatory training compliance | Employment | Compliance |
| 7 | Complaint rate by root cause | Clients/products | Customer ops |
| 8 | AML alert ageing | Clients/products | Financial crime |
| 9 | BCP test currency on critical sites | Damage to assets | BCM |
| 10 | Critical service availability vs impact tolerance | Disruption | CIO |
| 11 | Change failure rate | Disruption | CIO |
| 12 | EOL/unsupported software in critical services | Disruption | CIO |
| 13 | STP failure rate | EDPM | Ops |
| 14 | Reconciliation breaks ageing | EDPM | Finance / ops |
| 15 | Critical vendor SLA breach rate | EDPM / third-party | Procurement / TPRM |
| 16 | Open audit issue ageing (high) | Cross-cutting | All |
| 17 | RCSA action ageing | Cross-cutting | All |
| 18 | Operational loss frequency / severity | Lagging | ORM 2nd line |

Each indicator has a single accountable owner, a defined green/amber/red threshold, a reporting cadence, and an escalation path.

## Calibrating thresholds with loss data and RCSA

Where do the green/amber/red thresholds come from? In a mature ORM program, three sources triangulate:

- **Internal loss data.** The historical loss distribution per Basel category, used to set thresholds at percentile points (e.g. the amber threshold sits at the 80th percentile of historical monthly loss frequency).
- **External loss data.** Consortium databases (ORX, IBM Algo, etc.) are particularly valuable for low-frequency / high-severity categories where internal data is thin.
- **RCSA inherent and residual scores.** Risks rated high inherent / medium residual warrant tighter thresholds, since they sit closer to a control breakdown.

Where data is genuinely thin, expert judgement from the 1st line plus 2nd-line challenge is the honest approach — documented as such in the KRI charter, with a commitment to revisit when more loss data is available.

## How operational risk KRIs feed Basel III/IV capital

Under Basel III/IV's revised standardised approach, operational risk capital is largely formula-driven from the Business Indicator and the Internal Loss Multiplier (for larger banks). KRIs do not directly drive capital — but they are central to the supervisory expectation that a bank's ORM framework demonstrably reduces the risk of large losses.

For non-banks, the link to capital is indirect (through Solvency II Pillar 2 for insurers, or risk-based capital frameworks elsewhere) but the management discipline is the same: KRIs are the early-warning layer that makes loss avoidance, not just loss reporting, the focus of the ORM function.

## Common pitfalls when implementing operational risk KRIs

The same handful of failure modes show up across firms:

- **Indicator inflation.** A KRI library that grows past 50–60 indicators at committee level loses signal. Curate aggressively.
- **Thresholds set without reference to risk appetite.** A red threshold should mean *we are outside appetite*, not *we are above target.*
- **No link to RCSA.** A KRI library disconnected from the RCSA produces metrics that nobody on the 1st line recognises.
- **Lagging indicators mistaken for leading.** Loss event counts are lagging. They belong on the dashboard, but they are not early warnings.
- **No escalation tied to red.** A red indicator that sits in a quarterly pack until the next meeting is functionally green.
- **Static thresholds.** The operational risk profile changes with strategy, products, third-party dependencies, and the regulatory perimeter. Refresh thresholds annually at minimum.
- **Owned by the 2nd line.** The 2nd line curates and challenges. The 1st line owns the KRI and the underlying control.

## Where to start

If you are standing up a KRI library for the first time, three pragmatic moves:

1. **Start from the RCSA.** For each top-quartile risk by residual score, ask: what observable metric would tell us this risk is increasing? That is the candidate KRI. Most useful KRIs already exist as operational metrics somewhere in the firm.
2. **Cover all seven Basel categories, even thinly.** A dashboard that has 20 EDPM KRIs and zero Damage-to-Assets KRIs has a blind spot, not a focus.
3. **Build the dashboard for the operational risk committee, not for the analyst.** The committee needs 15–20 indicators with clear ownership and escalation. The analyst-level drill-downs sit underneath.

Operational risk KRIs are not a reporting exercise. They are the mechanism by which the firm decides — every month, in real numbers — whether its operational risk profile is moving toward or away from the appetite the board has set. Done well, they are the most actionable artefact the ORM function produces.
