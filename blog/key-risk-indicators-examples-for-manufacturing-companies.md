---
title: "Key Risk Indicators Examples for Manufacturing Companies: 35+ Metrics That Spot Trouble Early"
slug: key-risk-indicators-examples-for-manufacturing-companies
target_keyword: key risk indicators examples for manufacturing
meta_description: "35+ practical key risk indicators examples for manufacturing companies, with formulas, thresholds and OSHA/ISO links. Operational, safety, supply chain, quality, and ESG KRIs you can deploy this quarter."
word_count_target: 2700
pattern: "Pattern A: KRI Examples for [Industry]"
mirrors: "KRI Examples for Banks"
priority: High
---

# Key Risk Indicators Examples for Manufacturing Companies: 35+ Metrics That Spot Trouble Early

A single unscheduled line stoppage at a mid-sized auto parts plant can burn through six figures of margin before lunch. A delayed shipment from a tier-three supplier can ripple into a customer chargeback that takes a quarter to recover from. A near-miss that nobody logged today is the lost-time injury that shuts your facility down next month.

Manufacturing risk is rarely a single dramatic event. It is a slow drift in the metrics that already sit on your shop floor — overall equipment effectiveness creeping down, scrap rates ticking up, supplier on-time delivery slipping under 95%. **Key risk indicators (KRIs) are the early-warning system that turns those drifts into action before they become losses.**

This guide walks through 35+ key risk indicators examples for manufacturing companies, organized the way most enterprise risk management (ERM) teams structure their risk taxonomy: operational, health and safety, supply chain, quality, compliance and ESG, financial, and cyber/OT. For each KRI, you get the formula, a defensible threshold, and the underlying risk it is signalling.

If you run a plant, sit on a manufacturing risk committee, or are building out the KRI library for a new ERM program, this is the working catalogue.

## What is a Key Risk Indicator (and how it differs from a KPI)?

A **key risk indicator** is a metric used to provide an early signal of increasing risk exposure in a particular area of the enterprise. KRIs are forward-looking and tied to a defined risk in the risk register, not just performance.

The difference from a key performance indicator (KPI) matters:

- A **KPI** measures how well an objective is being achieved. *Example: units produced per shift.*
- A **KRI** measures how close you are to a risk threshold being breached. *Example: percentage of shifts running with critical spares below minimum stock — a leading indicator of unplanned downtime risk.*

The same data point can serve as both, depending on how you frame the threshold. The discipline is in tying every KRI to (1) a named risk in the register, (2) a defined threshold (green/amber/red), and (3) a named owner.

## How to choose KRIs for a manufacturing operation

Before listing examples, four selection criteria worth applying to every candidate KRI:

1. **Predictive, not just descriptive.** Lagging metrics like total recordable incident rate (TRIR) tell you what already happened. Pair them with leading indicators (near-miss rate, safety observation completion).
2. **Measurable at a useful cadence.** Monthly OEE is fine. Monthly cyber-incident counts on OT networks are not — you need real-time.
3. **Owned by someone with the authority to act.** A KRI without an owner is a slide, not a control.
4. **Tied to a tolerance, not a target.** "We want zero recordables" is an aspiration. "More than two recordables in a rolling 90-day window triggers a board notification" is a tolerance.

The KRIs below are organised into seven categories. Pick 8–15 across categories rather than all of them. Most manufacturing risk dashboards become noise above that.

---

## 1. Operational and Production KRIs

These KRIs surface risks to throughput, equipment reliability, and labour productivity — the core economics of a plant.

### 1.1 Overall Equipment Effectiveness (OEE) deviation

- **Formula:** `(Availability × Performance × Quality) — measured weekly per critical line`
- **Threshold:** Green: ≥85% world class / ≥75% acceptable. Amber: 65–75%. Red: <65% or a 10-point drop versus 13-week trailing average.
- **Risk signalled:** Latent capacity loss, accelerated equipment wear, planning-to-actual variance.

### 1.2 Unplanned downtime hours per line

- **Formula:** `Σ unplanned stop minutes ÷ scheduled run minutes`
- **Threshold:** Red if >5% of scheduled run time on any single critical line in a rolling 30-day window.
- **Risk signalled:** Reliability-centred maintenance failure; precursor to a major breakdown.

### 1.3 Mean Time Between Failures (MTBF) trend

- **Formula:** `Total operating time ÷ number of failures`
- **Threshold:** Red if MTBF falls more than 20% versus the prior six-month rolling average for any asset designated critical in the FMEA.

### 1.4 Preventive maintenance compliance rate

- **Formula:** `PM work orders completed on schedule ÷ PM work orders due`
- **Threshold:** Green ≥95%, Red <85%. Below 85% is correlated with a jump in unplanned downtime within 60–90 days.

### 1.5 Critical spares stock-out rate

- **Formula:** `Number of critical SKUs below reorder point ÷ total critical SKUs`
- **Threshold:** Red if any single critical spare for a designated single-point-of-failure asset is below minimum.

### 1.6 Backlog of overdue work orders

- **Formula:** `Count of work orders past due date, weighted by priority`
- **Threshold:** Red if priority-1 overdue work orders exceed five at any reporting cycle.

### 1.7 Labour absenteeism rate

- **Formula:** `Unplanned absent shifts ÷ scheduled shifts`
- **Threshold:** Red >6%. Persistent absenteeism is both a productivity risk and a leading indicator of workforce engagement and safety risk.

### 1.8 Overtime as a percentage of regular hours

- **Threshold:** Sustained overtime above 12% is associated with elevated injury rates per the National Safety Council and is a fatigue-risk KRI in its own right.

---

## 2. Health and Safety KRIs

The U.S. Occupational Safety and Health Administration (OSHA) and ISO 45001 (Occupational Health and Safety Management Systems) frame the core safety KRIs every manufacturer should track. Pair lagging incident metrics with leading behavioural metrics — that is the heart of modern safety management.

### 2.1 Total Recordable Incident Rate (TRIR)

- **Formula:** `(Number of OSHA-recordable incidents × 200,000) ÷ total hours worked`
- **Threshold:** Benchmark against your NAICS-code industry average from the U.S. Bureau of Labor Statistics. Red if TRIR exceeds the industry average or trends upward two consecutive quarters.

### 2.2 Lost Time Injury Frequency Rate (LTIFR)

- **Formula:** `(LTIs × 1,000,000) ÷ total hours worked`
- **Threshold:** Site-specific. Many ISO 45001-certified manufacturers use <2.0 as their internal red line.

### 2.3 Days Away, Restricted, or Transferred (DART) rate

- **Formula:** `(DART cases × 200,000) ÷ total hours worked`

### 2.4 Near-miss reporting rate

- **Formula:** `Near-misses reported ÷ employees per month`
- **Threshold:** *A low number is bad.* Heinrich's pyramid suggests a healthy ratio of roughly 300 near-misses per 1 lost-time injury. A drop in near-miss reporting is a leading indicator of under-reporting culture, not safer operations.

### 2.5 Safety observation completion rate

- **Formula:** `Behaviour-based safety observations completed ÷ target`
- **Threshold:** Green ≥95% of target observations completed by supervisors per month.

### 2.6 Corrective action closure rate

- **Formula:** `Safety CAPAs closed within target SLA ÷ CAPAs raised`
- **Threshold:** Red if open CAPAs older than 90 days exceed 10% of total open.

### 2.7 Permit-to-work compliance

- **Formula:** `Audited permits found compliant ÷ permits audited`
- **Threshold:** Red <98%. Permit-to-work failures (lockout/tagout, hot work, confined space) are the proximate cause of most catastrophic events; the threshold should be unforgiving.

### 2.8 Process Safety Event (PSE) Tier 1 / Tier 2 count

- **Reference:** API RP 754 / ISO 45001 process-safety guidance.
- **Threshold:** Any Tier 1 PSE is a board-level red. Tier 2 trend matters more than the absolute number.

---

## 3. Supply Chain KRIs

Post-pandemic, supply chain risk moved from a procurement concern to a board-level concern. The KRIs below are the ones most often cited in manufacturing ERM frameworks.

### 3.1 Supplier on-time, in-full (OTIF) delivery

- **Formula:** `Orders delivered on time and complete ÷ total orders`
- **Threshold:** Green ≥95% per supplier; Red <90% over a rolling quarter.

### 3.2 Single-source SKU concentration

- **Formula:** `Number of SKUs with no qualified alternate supplier ÷ total active SKUs`
- **Threshold:** Red if single-source share of cost-of-goods-sold exceeds 15%, or if any single-source SKU is on a designated critical bill of materials.

### 3.3 Supplier financial-health score deterioration

- **Source:** Third-party credit/financial-health monitor (e.g. Dun & Bradstreet, RapidRatings).
- **Threshold:** Red if any tier-1 supplier's score falls into the bottom quartile or drops more than 100 points in a quarter.

### 3.4 Geographic concentration of spend

- **Formula:** `Spend in any single country ÷ total tier-1 spend`
- **Threshold:** Red if >40% concentration in any single country, particularly for components subject to geopolitical or tariff exposure.

### 3.5 Inbound material lead-time variance

- **Formula:** `Standard deviation of actual lead time ÷ promised lead time, by SKU`
- **Threshold:** Red if variance exceeds 25% for SKUs on the critical BOM.

### 3.6 Inventory days of supply for critical materials

- **Threshold:** Site-specific. The leading indicator is the *trend*, not the level. A consistent slide from 45 days to 25 days for a critical raw material flags a buffer-erosion risk before you stock out.

### 3.7 Tier-2/3 visibility coverage

- **Formula:** `Critical SKUs with mapped tier-2 supply ÷ total critical SKUs`
- **Threshold:** Red <70%. Sub-tier blind spots have caused most major manufacturing disruptions of the last decade.

---

## 4. Quality KRIs

Quality KRIs are the bridge between operational performance and customer/regulatory risk.

### 4.1 First Pass Yield (FPY)

- **Formula:** `Units passing all quality checks first time ÷ units started`
- **Threshold:** Process-specific. Red if FPY drops more than 3 percentage points versus the trailing 90-day average.

### 4.2 Scrap and rework cost as a percentage of revenue

- **Threshold:** Red if scrap+rework exceeds 2% of revenue, or trends upward for two consecutive months.

### 4.3 Customer complaint rate (parts per million)

- **Formula:** `(Complaints × 1,000,000) ÷ units shipped`
- **Threshold:** Customer-specific. For tier-1 automotive, the implicit threshold is single-digit PPM.

### 4.4 Warranty cost as a percentage of sales

- **Threshold:** Red if warranty cost exceeds 1% of sales for a manufactured durable, or rises 25% versus prior year.

### 4.5 Cost of Poor Quality (CoPQ)

- **Formula:** Internal failure cost + external failure cost + appraisal cost + prevention cost
- **Threshold:** Trend metric. World-class manufacturers target <4% of sales.

### 4.6 Open non-conformance reports (NCRs) ageing

- **Threshold:** Red if more than 5% of open NCRs are older than 30 days.

### 4.7 Recall risk index

- **Formula:** Composite of severity × occurrence × detection from the FMEA, weighted by units shipped.
- **Threshold:** Used as a leading indicator for regulated products (medical devices, food, pharma).

---

## 5. Compliance, Environmental, and ESG KRIs

ISO 14001 (Environmental Management Systems), ISO 50001 (Energy Management), and the U.S. EPA's reporting frameworks anchor most of the compliance KRIs in this section.

### 5.1 Environmental permit exceedance count

- **Formula:** Count of air, water, or waste permit limits exceeded per quarter.
- **Threshold:** Any exceedance is reportable. Two in a rolling 12-month window typically triggers a board-level review.

### 5.2 Spills and releases (number and volume)

- **Threshold:** Any reportable-quantity release is red. Below-RQ spills are tracked for trend.

### 5.3 Energy intensity drift

- **Formula:** `Energy consumed ÷ unit produced (kWh per unit)`
- **Threshold:** Red if energy intensity rises more than 5% versus baseline, adjusted for product mix.

### 5.4 Greenhouse gas (GHG) emissions intensity

- **Formula:** `Scope 1 + Scope 2 emissions ÷ revenue or per unit produced`
- **Threshold:** Tied to publicly disclosed targets (SBTi, CDP commitments). Red if trajectory falls behind interim targets.

### 5.5 Hazardous waste generation per unit

- **Threshold:** Trend metric; tied to ISO 14001 continuous-improvement objectives.

### 5.6 Regulatory inspection findings

- **Formula:** Count and severity of findings from OSHA, EPA, FDA (where applicable), and equivalent regulators.
- **Threshold:** Any "willful" or "serious" finding is red. Repeat findings within 24 months are red.

### 5.7 Training compliance rate (regulated topics)

- **Formula:** `Employees current on mandatory training ÷ employees required to be trained`
- **Threshold:** Red <98% for regulated topics (HazCom, lockout/tagout, confined-space, etc.).

---

## 6. Cyber and Operational Technology (OT) KRIs

Manufacturing ransomware and OT-targeted intrusions have moved cyber risk into the manufacturing risk register. The NIST Cybersecurity Framework and IEC 62443 (Industrial Automation and Control Systems Security) are the relevant standards.

### 6.1 OT asset patch currency

- **Formula:** `OT assets at current patch level ÷ total OT assets in scope`
- **Threshold:** Red <80%. OT environments have legitimate reasons for patch lag, but the trend matters.

### 6.2 Unauthorised devices on the OT network

- **Threshold:** Red if any unauthorised device is detected. The KRI is the time-to-detect, not the count.

### 6.3 IT/OT segmentation control failures

- **Threshold:** Any failure of designated boundary controls is red.

### 6.4 Phishing test failure rate (plant employees)

- **Formula:** `Employees who clicked or submitted credentials ÷ employees tested`
- **Threshold:** Red >10%; trend matters more than absolute level.

### 6.5 Backup recoverability test pass rate

- **Threshold:** Red <100%. A backup that has not been test-restored is a hope, not a control.

### 6.6 Mean time to detect (MTTD) on OT events

- **Threshold:** Site-specific; align with the incident-response RTO/RPO commitments to the business.

---

## 7. Financial and Strategic KRIs

These KRIs translate plant-floor risk into the language the CFO and the board already speak.

### 7.1 Working capital days (DSO + DIO – DPO)

- **Threshold:** Red if working capital days expand more than 10% versus prior year, particularly when paired with falling OTIF or rising inventory.

### 7.2 Customer concentration

- **Formula:** Revenue from top three customers ÷ total revenue.
- **Threshold:** Red >40%.

### 7.3 Commodity price exposure (unhedged)

- **Formula:** `Unhedged commodity spend at risk ÷ total commodity spend, weighted by volatility`
- **Threshold:** Set by treasury/risk policy.

### 7.4 Forex exposure on inputs

- **Threshold:** Set by treasury policy; typically expressed as percentage of input cost not hedged 90 days forward.

### 7.5 Insurance coverage gap

- **Threshold:** Red if business-interruption coverage is less than 12 months of forecast EBITDA at the most concentrated site.

---

## Putting it together: the manufacturing KRI dashboard

A workable manufacturing KRI dashboard is rarely more than 10–15 indicators. A practical starter set:

1. OEE deviation (operational)
2. Unplanned downtime hours on critical lines (operational)
3. PM compliance rate (operational)
4. TRIR plus near-miss rate (safety, leading + lagging pair)
5. Permit-to-work compliance (safety)
6. Supplier OTIF for tier-1 critical SKUs (supply chain)
7. Single-source SKU concentration (supply chain)
8. First Pass Yield (quality)
9. CoPQ as percentage of sales (quality)
10. Environmental permit exceedance count (compliance/ESG)
11. OT patch currency (cyber)
12. Backup recoverability test pass rate (cyber)
13. Customer concentration (financial/strategic)
14. Commodity price exposure unhedged (financial/strategic)

Every indicator has an owner, a defined green/amber/red threshold, a reporting cadence, and a documented escalation path. The dashboard is reviewed monthly at the plant risk committee and quarterly at the enterprise risk committee.

## Common pitfalls when implementing manufacturing KRIs

A handful of mistakes show up repeatedly when manufacturing companies stand up KRI programs:

- **Too many KRIs.** A 60-indicator dashboard becomes wallpaper. Pick the ones that change behaviour.
- **Lagging-only indicators.** TRIR alone is not a safety program. Pair every lagging KRI with a leading KRI.
- **No defined tolerance.** "Trending in the right direction" is not a threshold.
- **Owned by the risk team, not the line.** KRIs are managed by the people who can move the metric. The risk team curates and reports; the operations leader owns.
- **No link to the risk register.** Each KRI should map to a named risk in the ERM register. If it doesn't, it is a KPI in a KRI's clothing.
- **Static thresholds.** Thresholds need to be reviewed at least annually as products, processes, and supply chains change.

## How KRIs change the conversation in manufacturing risk reviews

Done well, the manufacturing KRI dashboard reframes the monthly operations review. Instead of recapping what already went wrong, the conversation moves to **which indicators are drifting toward the red, who owns them, and what mitigation is in flight before the loss event arrives.**

For most manufacturers, the highest-leverage KRIs are the leading indicators in safety (near-miss reporting, permit-to-work compliance), the supply-chain concentration metrics that the risk register has been silently understating, and the OT cyber controls that the IT and engineering teams need to jointly own.

If you are starting from a blank page, start with the 10–15 KRIs in the dashboard above. Wire them into the systems where the data already lives — your CMMS, MES, EHS, and SIEM platforms — and resist the temptation to build a separate KRI database that nobody updates.

The point of a KRI is not to produce a report. It is to make sure that the next surprise on your plant floor is somebody else's, not yours.
