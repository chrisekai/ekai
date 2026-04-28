---
title: "Key Risk Indicators Examples for Manufacturing Companies (2026 Guide)"
slug: key-risk-indicators-examples-manufacturing-companies
target_keyword: key risk indicators examples for manufacturing
meta_description: "30+ key risk indicators examples for manufacturing companies, mapped to OSHA, ISO 31000, ISO 45001, and ISO 14001. With formulas, thresholds, and owners."
word_count_target: 2500-3000
pattern: "Pattern A: KRI Examples for [Industry]"
mirrors: "KRI Examples for Banks"
priority: High
---

# Key Risk Indicators Examples for Manufacturing Companies (2026 Guide)

A manufacturing company's risk profile does not look like a bank's. Where a bank loses money to credit defaults and trading errors, a manufacturer loses it to a press that goes down for 11 hours, a supplier that ships a contaminated lot, an OSHA recordable that triggers an inspection, or a single energy-price spike that wipes out a quarter's margin. The risks are physical, operational, and deeply tied to the shop floor.

Key Risk Indicators (KRIs) translate those risks into numbers the plant manager, the COO, and the board can act on *before* the loss is booked. This guide collects 30+ key risk indicators examples specifically for manufacturing companies, organised by the seven domains that drive most manufacturing losses: safety, quality, supply chain, equipment, environmental, cyber-OT, and people. Each example includes a formula, a threshold range, and the owner.

Use it as a working reference when you are building a manufacturing KRI library for the first time, or pruning one that has grown past usefulness.

## What Counts as a KRI in a Manufacturing Context?

A Key Risk Indicator is a quantifiable, forward-looking metric that signals a *change in risk exposure* before that risk becomes a loss event. In manufacturing this distinction matters because most plants already drown in operational data: OEE, takt time, scrap, throughput, units per hour. Those are KPIs — they tell you whether you achieved a production goal. KRIs tell you whether the *risk* of missing the goal, injuring someone, or breaching a permit is rising.

A workable manufacturing KRI has five attributes:

1. **Forward-looking** — moves before the loss event.
2. **Quantifiable** — a number on a defined cadence (per shift, per day, per week, per month).
3. **Tied to a specific risk on the register** — safety, quality, supply, equipment, environmental, cyber-OT, or people.
4. **Threshold-bound** — green, amber, and red levels, signed off by the plant or function owner.
5. **Owned** — a named individual is accountable for the metric and the response.

A manufacturer with 80 metrics on a wall and no owners has data, not KRIs.

## Why Manufacturing KRIs Matter More in 2026

Three forces have raised the stakes for manufacturing risk monitoring:

- **Regulatory tightening.** OSHA's revised electronic recordkeeping rule (29 CFR 1904.41) requires Form 300A, 300, and 301 submissions for many establishments, making safety KRIs visible in a public database. ISO 45001:2018 (occupational health and safety) and ISO 14001:2015 (environmental) both require *monitoring and measurement* — KRIs are the standard way of evidencing it.
- **Supply-chain volatility.** The shocks of 2020–2024 — semiconductor allocation, Suez and Panama canal disruption, Red Sea routing, regional electricity rationing — have made supplier KRIs a board-level topic.
- **Cyber-OT convergence.** Ransomware attacks on operational technology environments are no longer rare. CISA, NIST SP 800-82, and IEC 62443 all expect manufacturing firms to monitor OT specifically — separately from corporate IT.

Mature manufacturers respond by treating KRIs as the daily telemetry of the risk register, not as an annual reporting exercise.

## The Seven KRI Domains in Manufacturing

Most manufacturing risk registers can be reduced to seven domains. Organising your KRI library this way keeps the dashboard coherent and maps cleanly to the standards:

1. Safety and occupational health (OSHA, ISO 45001)
2. Product quality and recall (ISO 9001, customer-specific schemes such as IATF 16949)
3. Supply chain and supplier risk
4. Equipment, maintenance, and reliability
5. Environmental and energy (ISO 14001, ISO 50001)
6. Cyber-OT and information security (NIST SP 800-82, IEC 62443)
7. People, skills, and labour relations

The 30+ examples below sit under those seven domains.

## 1. Safety and Occupational Health KRIs

Safety is the most universal KRI domain in manufacturing because the metrics are standardised by OSHA and ISO 45001 and the loss events (injuries, fatalities, citations) are unambiguous.

**KRI 1.1 — Total Recordable Incident Rate (TRIR)**
- Formula: (Recordable injuries × 200,000) ÷ total hours worked.
- Threshold: Green ≤ 1.5, Amber 1.5–3.0, Red > 3.0 (calibrate to NAICS benchmark).
- Owner: EHS Manager.

**KRI 1.2 — Lost-Time Injury Frequency Rate (LTIFR)**
- Formula: (Lost-time injuries × 1,000,000) ÷ total hours worked.
- Threshold: Green ≤ 1.0, Amber 1.0–2.0, Red > 2.0.
- Owner: EHS Manager.

**KRI 1.3 — Near-Miss Reporting Ratio**
- Formula: Near-misses reported ÷ recordable injuries (rolling 12 months).
- Threshold: Green ≥ 10:1, Amber 5–10:1, Red < 5:1. *Lower is worse — it indicates under-reporting.*
- Owner: Plant Safety Lead.

**KRI 1.4 — Open Corrective Actions from Safety Audits**
- Formula: Count of safety audit corrective actions past their committed close date.
- Threshold: Green ≤ 3, Amber 4–10, Red > 10.
- Owner: EHS Manager.

**KRI 1.5 — Lockout/Tagout (LOTO) Compliance**
- Formula: % of energy-isolation activities sampled in the period that were fully compliant with LOTO procedure.
- Threshold: Green ≥ 98%, Amber 95–98%, Red < 95%.
- Owner: Maintenance Manager.

**KRI 1.6 — Permit-to-Work Exceptions**
- Formula: Count of high-risk activities (hot work, confined space, working at height) executed without a valid permit per month.
- Threshold: Green = 0; any breach is red.
- Owner: Plant Manager.

## 2. Product Quality and Recall KRIs

Quality KRIs target the early signals of customer escapes, regulatory recalls, and warranty cost spikes. In automotive, aerospace, and food/pharma manufacturing these are typically the most heavily instrumented metrics on site.

**KRI 2.1 — First-Pass Yield (FPY) Trend**
- Formula: Units passing first inspection ÷ units started, per line, per shift.
- Threshold: Set as 30-day rolling baseline ± 2σ; red is sustained breach over 3 shifts.
- Owner: Quality Manager.

**KRI 2.2 — Parts Per Million (PPM) Defects to Customer**
- Formula: (Defective parts shipped ÷ total parts shipped) × 1,000,000, monthly.
- Threshold: Green < customer-agreed target, Amber within 25% of target, Red over target.
- Owner: Quality Manager.

**KRI 2.3 — Customer Complaints / Returns Trend**
- Formula: Customer complaints per 10,000 units shipped, rolling 3 months.
- Threshold: 6-month baseline + 2σ as red.
- Owner: Quality Manager.

**KRI 2.4 — Open 8D / CAPA Past Due**
- Formula: Count of corrective and preventive action records open beyond agreed close date.
- Threshold: Green ≤ 5, Amber 6–15, Red > 15.
- Owner: Quality Manager.

**KRI 2.5 — Cost of Poor Quality (COPQ) as % of Revenue**
- Formula: (Scrap + rework + warranty + customer-returns cost) ÷ revenue.
- Threshold: Green ≤ 1.5%, Amber 1.5–3%, Red > 3%.
- Owner: COO / Plant Controller.

**KRI 2.6 — Calibration Compliance**
- Formula: % of measurement and test equipment with calibration current at month-end.
- Threshold: Green ≥ 98%, Amber 95–98%, Red < 95%.
- Owner: Quality Manager.

## 3. Supply Chain and Supplier Risk KRIs

Supply chain is the domain where manufacturers' risk registers have grown the fastest since 2020. The KRIs here aim to detect supplier weakness, single-source exposure, and inbound-material risk before they show up as a line stoppage.

**KRI 3.1 — Single-Source Critical Components**
- Formula: Count of critical components with only one approved supplier and no qualified alternative.
- Threshold: Green ≤ 5, Amber 6–15, Red > 15.
- Owner: Procurement Director.

**KRI 3.2 — Supplier On-Time-In-Full (OTIF)**
- Formula: % of POs received on time and complete, per critical supplier, monthly.
- Threshold: Green ≥ 95%, Amber 90–95%, Red < 90%.
- Owner: Procurement Manager.

**KRI 3.3 — Inbound Defect Rate (IDR)**
- Formula: PPM defective on incoming inspection, per critical supplier.
- Threshold: Set against contractual target; red on > 50% deviation.
- Owner: Quality / Procurement.

**KRI 3.4 — Supplier Financial Health Score**
- Formula: External credit-risk score (e.g. D&B PAYDEX, Creditsafe) for each Tier-1 critical supplier.
- Threshold: Green ≥ 70, Amber 50–70, Red < 50.
- Owner: Procurement Director.

**KRI 3.5 — Inventory Days of Cover for Critical Materials**
- Formula: On-hand inventory ÷ average daily consumption, per critical SKU.
- Threshold: Set against contingency policy (e.g. green ≥ 30 days, red < 14).
- Owner: Supply Chain Manager.

**KRI 3.6 — Geopolitical Concentration**
- Formula: % of spend in regions flagged as high geopolitical / sanctions risk.
- Threshold: Set against board-approved appetite.
- Owner: Procurement Director.

## 4. Equipment, Maintenance, and Reliability KRIs

Equipment KRIs target the leading signals of unplanned downtime, capacity loss, and the safety incidents that often follow ageing or under-maintained assets.

**KRI 4.1 — Mean Time Between Failures (MTBF)**
- Formula: Total operating time ÷ number of failures, per critical asset.
- Threshold: Asset-specific; tracked as trend with 3-month rolling baseline.
- Owner: Maintenance Manager.

**KRI 4.2 — Mean Time to Repair (MTTR)**
- Formula: Total downtime ÷ number of failures, per critical asset.
- Threshold: Set against capacity-loss tolerance.
- Owner: Maintenance Manager.

**KRI 4.3 — Planned Maintenance Compliance**
- Formula: % of scheduled preventive-maintenance tasks completed on time.
- Threshold: Green ≥ 95%, Amber 90–95%, Red < 90%.
- Owner: Maintenance Planner.

**KRI 4.4 — Unplanned Downtime as % of Available Time**
- Formula: Unplanned downtime hours ÷ scheduled production hours.
- Threshold: Green ≤ 3%, Amber 3–7%, Red > 7%.
- Owner: Plant Manager.

**KRI 4.5 — Backlog of Work Orders Aged > 30 Days**
- Formula: Count of open maintenance work orders past 30 days.
- Threshold: Tracked as trend; red on > 20% MoM increase.
- Owner: Maintenance Manager.

## 5. Environmental and Energy KRIs

Environmental KRIs target compliance with ISO 14001, the firm's environmental permits, and increasingly its public climate commitments. Energy KRIs are increasingly tracked as risk indicators because energy-price volatility now moves the P&L of energy-intensive manufacturers (steel, aluminium, glass, chemicals) materially each quarter.

**KRI 5.1 — Permit Limit Exceedances**
- Formula: Count of recorded exceedances against air, water, or waste permit limits per quarter.
- Threshold: Green = 0; any breach is red.
- Owner: EHS Manager.

**KRI 5.2 — Spill / Release Events**
- Formula: Count of reportable environmental spill or release events per quarter.
- Threshold: Green = 0; any breach is red.
- Owner: EHS Manager.

**KRI 5.3 — Energy Intensity Drift**
- Formula: Energy consumed (MWh) per unit of output, monthly, vs. baseline.
- Threshold: Green within ±2% of baseline, Amber 2–5%, Red > 5%.
- Owner: Energy Manager / Plant Engineer.

**KRI 5.4 — Scope 1 and 2 Emissions vs. Annual Target**
- Formula: Cumulative tCO₂e ÷ annual target, year-to-date.
- Threshold: Green within 100% of pro-rata target; Amber 100–110%; Red > 110%.
- Owner: Sustainability Lead.

**KRI 5.5 — Water Withdrawal in Stressed Basins**
- Formula: Volume of water withdrawn at sites flagged as high or extremely high water-stress (e.g. WRI Aqueduct).
- Threshold: Set against site-level reduction targets.
- Owner: Sustainability Lead.

## 6. Cyber-OT and Information Security KRIs

Cyber-OT KRIs are deliberately separate from corporate IT KRIs because OT environments have different patching constraints, different network segmentation, and different blast radii. NIST SP 800-82 Rev 3 and IEC 62443 are the usual references.

**KRI 6.1 — OT Network Segmentation Exceptions**
- Formula: Count of approved exceptions allowing direct connectivity between IT and OT zones.
- Threshold: Green ≤ 3, Amber 4–10, Red > 10.
- Owner: OT Security Lead.

**KRI 6.2 — OT Patching Compliance for Critical Systems**
- Formula: % of OT assets patched within agreed maintenance window.
- Threshold: Green ≥ 90%, Amber 80–90%, Red < 80% (lower than IT because of patching constraints).
- Owner: OT Security Lead.

**KRI 6.3 — Unauthorised Removable Media Events**
- Formula: Count of unauthorised USB / removable media insertions detected on OT endpoints per month.
- Threshold: Green ≤ 2, Amber 3–10, Red > 10.
- Owner: OT Security Lead.

**KRI 6.4 — Backup Restore Test Success for Plant Systems**
- Formula: % of scheduled restore tests for HMI / SCADA / historian backups that succeeded.
- Threshold: Green = 100%, Amber 95–99%, Red < 95%.
- Owner: OT Security Lead.

**KRI 6.5 — Time Since Last OT Tabletop Exercise**
- Formula: Months since last OT-specific incident-response tabletop, per plant.
- Threshold: Green ≤ 6, Amber 7–12, Red > 12.
- Owner: CISO.

## 7. People, Skills, and Labour Relations KRIs

People KRIs in manufacturing are not soft — they correlate directly with safety incidents, scrap rates, and supplier escalations. A plant that has lost half its skilled trades will see all three move within a quarter.

**KRI 7.1 — Skilled-Trades Vacancy Rate**
- Formula: % of approved skilled-trades positions vacant.
- Threshold: Green < 5%, Amber 5–15%, Red > 15%.
- Owner: HR Director.

**KRI 7.2 — Overtime as % of Regular Hours**
- Formula: Overtime hours ÷ regular hours, per plant, monthly.
- Threshold: Green < 8%, Amber 8–15%, Red > 15%.
- Owner: HR / Operations.

**KRI 7.3 — Voluntary Attrition in Critical Roles**
- Formula: Rolling 12-month voluntary attrition for production supervisors, quality engineers, maintenance technicians, and EHS leads.
- Threshold: Green ≤ 8%, Amber 8–15%, Red > 15%.
- Owner: HR Director.

**KRI 7.4 — Mandatory Training Currency**
- Formula: % of employees with current safety, quality, and process training.
- Threshold: Green ≥ 98%, Amber 95–98%, Red < 95%.
- Owner: HR / EHS / Quality.

**KRI 7.5 — Time to Backfill Critical Roles**
- Formula: Average days from vacancy to start date for critical roles.
- Threshold: Set against benchmark (e.g. green ≤ 60 days, red > 120).
- Owner: HR Director.

## How to Build a Manufacturing KRI Library That Actually Gets Used

A common failure pattern at manufacturing sites is the "control-room wall" of metrics — every screen lit up, nothing acted on. Six rules keep a manufacturing KRI library alive:

1. **Start from the risk register, not the SCADA.** For each top risk, ask "what would move first if this got worse?" Then go find or build the metric.
2. **Cap the executive set.** A site leadership team can absorb 15–20 active KRIs at the weekly operations review. The rest belong in the wider library and only escalate on breach.
3. **Pair every KRI with a Key Control Indicator.** "Permit-limit exceedances = 0" is reassuring only if the control sampling and calibration KRIs are also green.
4. **Set thresholds to appetite, not to history.** A 95th-percentile threshold guarantees a quarterly red; that is statistics, not signal.
5. **Automate from the source.** Pull from MES, CMMS, EHS systems, and the supplier portal — manual spreadsheets degrade in two cycles.
6. **Review thresholds twice a year.** New products, new lines, new suppliers all change the risk profile; static thresholds become noise.

## A Sample Plant KRI Dashboard

A workable plant-level dashboard tends to follow the same shape:

- **Top strip:** TRIR, LTIFR, PPM defects to customer, OTIF on critical inbound, unplanned downtime %.
- **Heatmap:** seven KRI domains × three lines (or three plants), coloured by the worst KRI status in each cell.
- **Trend panel:** the five KRIs that moved the most this period.
- **Watch list:** any KRI amber for two consecutive periods.
- **Closed loop:** prior-period reds with current status and owner.

The dashboard is not a reporting artefact. It is the spine of a 30-minute conversation about which two or three things the site will do differently next month.

## Common Pitfalls

- **Mixing KPIs with KRIs.** OEE is a performance metric; *deviation* of OEE from baseline can be a risk metric. Don't put them on the same chart without distinguishing.
- **Lagging indicators dressed up as KRIs.** Recordable injuries booked, customer recalls issued, and permit fines paid are outcome metrics. They belong in the dashboard but they are not early warnings.
- **No owner.** If the KRI does not have a named accountable manager, the breach response will be theatre.
- **Static libraries.** New product launches, new suppliers, and new lines all change the risk profile. The library must change with them.
- **Reporting up only.** KRIs must drive shop-floor action too — the operator on a press should see the tier-1 board with the same logic the COO sees on the tier-4 dashboard.

## A 90-Day Plan to Reset a Manufacturing KRI Programme

If your KRI programme has drifted, a 90-day reset that has worked at multiple sites looks like this:

- **Days 1–30:** map the top 20 risks on the manufacturing risk register to existing metrics. Identify the gaps. Kill any KRI that no one has reviewed in the last two cycles.
- **Days 31–60:** redesign each plant's dashboard to a single page, with thresholds approved by the plant manager. Automate the three most painful manual feeds (typically EHS, supplier OTIF, calibration).
- **Days 61–90:** run the new dashboard at the weekly ops review for two cycles, capturing every challenge and gap. Publish the revised library, the owners list, and the schedule for the next threshold review.

Manufacturing risk is physical, visible, and unforgiving — but it is also among the most measurable categories of enterprise risk. A working library of key risk indicators for your manufacturing company, organised across safety, quality, supply, equipment, environmental, cyber-OT, and people, is what turns daily plant data into a sensing system the board can rely on.

## Frequently Asked Questions

**How many KRIs should a manufacturing site have?**
A working executive set is typically 15–20 active KRIs at site level, with a wider library of 60–100 monitored metrics that escalate only on breach. At enterprise level, a roll-up of 25–35 across plants is normal.

**Do small manufacturers need a formal KRI library?**
Yes — at a smaller scale. A small plant can run a credible programme on 10–12 KRIs covering TRIR, near-miss ratio, FPY, OTIF, unplanned downtime, calibration compliance, and permit exceedances.

**How do KRIs relate to ISO 31000 and ISO 45001?**
ISO 31000 (risk management) treats KRIs as part of the *monitoring and review* element of the risk-management process. ISO 45001 (occupational H&S) and ISO 14001 (environmental) both require *monitoring and measurement* — KRIs are the standard mechanism for evidencing it.

**What is the difference between an operational KPI and a manufacturing KRI?**
A KPI measures whether you achieved a goal (units shipped, OEE, takt time). A KRI measures whether the *risk* of missing a goal, breaching a permit, or harming someone is rising. Many KRIs are derived from KPI data — e.g. "deviation of OEE from baseline by more than 2σ for three shifts" — but the lens is risk, not performance.

**How often should manufacturing KRIs be reviewed?**
The data should refresh on the cadence of the underlying process — per shift for production, daily for supplier OTIF, monthly for environmental and people, quarterly for permits. Threshold reviews should happen at least twice a year, and after any material change in product, line, or supplier.
