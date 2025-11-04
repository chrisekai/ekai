"""Domain knowledge for the LLC domicile comparison app."""

from __future__ import annotations

from dataclasses import dataclass
from typing import List


@dataclass(frozen=True)
class CountryProfile:
    """Structured snapshot of an LLC domicile option."""

    name: str
    corporate_tax_rate: float
    vat_rate: float
    formation_time_weeks: float
    formation_cost_usd: int
    annual_compliance_cost_usd: int
    treaty_network_score: int
    compliance_rigour: int
    strengths: List[str]
    watchpoints: List[str]
    notes: str


COUNTRY_DATA: List[CountryProfile] = [
    CountryProfile(
        name="Mauritius",
        corporate_tax_rate=15.0,
        vat_rate=15.0,
        formation_time_weeks=2.0,
        formation_cost_usd=850,
        annual_compliance_cost_usd=1200,
        treaty_network_score=8,
        compliance_rigour=7,
        strengths=[
            "Extensive double tax treaty network across Africa, Europe, and Asia",
            "Partial exemption regime can reduce effective corporate tax to 3% for qualifying export services",
            "Sophisticated banking, legal, and fiduciary support infrastructure",
        ],
        watchpoints=[
            "Economic substance rules require local directors and expenditure for most global business activities",
            "Global tax reforms (Pillar Two, minimum tax) may narrow preferential rates",
            "Regulator expects audited financial statements for most entities",
        ],
        notes=(
            "Mauritius remains a popular holding jurisdiction thanks to treaty access and a stable legal system. "
            "However, substance and reporting expectations are steadily increasing, which raises recurring costs."
        ),
    ),
    CountryProfile(
        name="Seychelles",
        corporate_tax_rate=1.5,
        vat_rate=15.0,
        formation_time_weeks=1.0,
        formation_cost_usd=650,
        annual_compliance_cost_usd=950,
        treaty_network_score=3,
        compliance_rigour=5,
        strengths=[
            "Fast incorporation with straightforward documentation requirements",
            "Low corporate income tax rate for companies conducting business primarily outside Seychelles",
            "IBC regime supports flexible share classes and no minimum capital",
        ],
        watchpoints=[
            "Smaller double tax treaty network compared to Mauritius",
            "Heightened scrutiny in some financial centres due to past transparency concerns",
            "Economic substance rules apply for entities engaged in relevant activities (e.g., headquarters, distribution)",
        ],
        notes=(
            "Seychelles suits smaller trading or holding structures needing cost efficiency and quick turnaround. "
            "Firms targeting institutional investors often prefer jurisdictions with deeper treaty access."
        ),
    ),
    CountryProfile(
        name="Rwanda",
        corporate_tax_rate=30.0,
        vat_rate=18.0,
        formation_time_weeks=1.5,
        formation_cost_usd=420,
        annual_compliance_cost_usd=600,
        treaty_network_score=4,
        compliance_rigour=8,
        strengths=[
            "Modern company registry with largely digital workflows",
            "Incentive regimes (including preferential rates in special economic zones) for strategic investments",
            "Stable governance and strong push for ease of doing business reforms",
        ],
        watchpoints=[
            "Standard corporate tax rate of 30% absent incentives",
            "Requires annual audited financial statements for companies exceeding size thresholds",
            "Local director or representative requirements for certain regulated sectors",
        ],
        notes=(
            "Rwanda works well for operators with on-the-ground activity in East Africa who want predictable compliance. "
            "The jurisdiction emphasises transparency and timely filings; incentives should be confirmed in writing."
        ),
    ),
    CountryProfile(
        name="Uganda",
        corporate_tax_rate=30.0,
        vat_rate=18.0,
        formation_time_weeks=2.5,
        formation_cost_usd=380,
        annual_compliance_cost_usd=550,
        treaty_network_score=5,
        compliance_rigour=6,
        strengths=[
            "Access to East African Community and COMESA markets",
            "Straightforward shareholding rules with 100% foreign ownership allowed in most sectors",
            "Reasonable formation costs and availability of professional company secretarial support",
        ],
        watchpoints=[
            "Revenue Authority actively scrutinises transfer pricing and withholding tax compliance",
            "Tax filings are monthly for VAT and PAYE, increasing administrative touchpoints",
            "Delays may occur when reserving company names or obtaining investment licences",
        ],
        notes=(
            "Uganda is practical for businesses targeting the local consumer market or natural resources. "
            "Expect hands-on engagement with the tax authority and be prepared for frequent filings."
        ),
    ),
    CountryProfile(
        name="Kenya",
        corporate_tax_rate=30.0,
        vat_rate=16.0,
        formation_time_weeks=2.0,
        formation_cost_usd=520,
        annual_compliance_cost_usd=700,
        treaty_network_score=7,
        compliance_rigour=7,
        strengths=[
            "Regional financial hub with deep professional services ecosystem",
            "Access to an expanding double tax treaty network, including with key African peers",
            "Robust fintech and technology ecosystem supporting venture and holding structures",
        ],
        watchpoints=[
            "Frequent tax law amendments require continuous monitoring",
            "Minimum tax and digital service tax proposals can affect certain business models",
            "Regulators expect annual audited accounts for most private companies",
        ],
        notes=(
            "Kenya suits operating companies and regional headquarters needing connectivity and capital access. "
            "The jurisdiction balances opportunity with relatively intensive compliance oversight."
        ),
    ),
]


METRIC_DESCRIPTIONS = {
    "corporate_tax_rate": "Headline corporate income tax rate (before incentives)",
    "vat_rate": "Standard value-added tax rate",
    "formation_time_weeks": "Typical time to incorporate an LLC-equivalent (weeks)",
    "formation_cost_usd": "Estimated professional and government fees to form (USD)",
    "annual_compliance_cost_usd": "Indicative annual compliance/secretarial budget (USD)",
    "treaty_network_score": "Relative depth of the double tax treaty network (1-10)",
    "compliance_rigour": "Regulatory and reporting intensity (1-10, higher is stricter)",
}

