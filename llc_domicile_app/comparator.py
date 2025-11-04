"""Comparison utilities for LLC domicile analysis."""

from __future__ import annotations

from dataclasses import asdict
from typing import Iterable, List, Sequence

from .data import COUNTRY_DATA, METRIC_DESCRIPTIONS, CountryProfile


class CountryNotFoundError(ValueError):
    """Raised when a requested country is unavailable in the dataset."""


class LLCDomicileComparator:
    """High-level helper that exposes comparison primitives for the CLI."""

    def __init__(self, dataset: Sequence[CountryProfile] | None = None) -> None:
        self._dataset: List[CountryProfile] = list(dataset or COUNTRY_DATA)
        self._index = {profile.name.lower(): profile for profile in self._dataset}

    # ------------------------------------------------------------------
    # Dataset helpers
    # ------------------------------------------------------------------
    def list_countries(self) -> List[CountryProfile]:
        """Return all domicile profiles."""

        return list(self._dataset)

    def get_country(self, name: str) -> CountryProfile:
        """Fetch a country profile by name (case-insensitive)."""

        key = name.strip().lower()
        try:
            return self._index[key]
        except KeyError as exc:  # pragma: no cover - exercised in tests
            raise CountryNotFoundError(f"Country '{name}' is not in the dataset") from exc

    # ------------------------------------------------------------------
    # Comparison logic
    # ------------------------------------------------------------------
    def rank_by(self, metric: str, reverse: bool | None = None) -> List[CountryProfile]:
        """Return countries sorted by the specified metric."""

        if metric not in METRIC_DESCRIPTIONS:
            raise KeyError(
                f"Unknown metric '{metric}'. Choose from: {', '.join(METRIC_DESCRIPTIONS)}"
            )

        if reverse is None:
            reverse = metric in {"treaty_network_score", "compliance_rigour"}

        return sorted(self._dataset, key=lambda profile: getattr(profile, metric), reverse=reverse)

    def compare(self, left: str, right: str, metrics: Iterable[str] | None = None) -> List[dict]:
        """Build a point-by-point comparison between two countries."""

        left_profile = self.get_country(left)
        right_profile = self.get_country(right)

        selected_metrics = list(metrics) if metrics else list(METRIC_DESCRIPTIONS)

        comparison = []
        for metric in selected_metrics:
            if metric not in METRIC_DESCRIPTIONS:
                raise KeyError(
                    f"Unknown metric '{metric}'. Choose from: {', '.join(METRIC_DESCRIPTIONS)}"
                )

            comparison.append(
                {
                    "metric": metric,
                    "description": METRIC_DESCRIPTIONS[metric],
                    "left": getattr(left_profile, metric),
                    "right": getattr(right_profile, metric),
                }
            )

        return comparison

    # ------------------------------------------------------------------
    # Formatting helpers for the CLI
    # ------------------------------------------------------------------
    def format_summary_table(self, metric: str | None = None) -> str:
        """Return a formatted table with a quick overview."""

        profiles = self.rank_by(metric or "treaty_network_score") if metric else self.list_countries()
        headers = [
            "Country",
            "Corp Tax %",
            "VAT %",
            "Formation (weeks)",
            "Formation Cost (USD)",
            "Annual Compliance (USD)",
            "Treaty Score",
            "Compliance Rigour",
        ]

        rows = [
            [
                profile.name,
                f"{profile.corporate_tax_rate:g}",
                f"{profile.vat_rate:g}",
                f"{profile.formation_time_weeks:g}",
                f"{profile.formation_cost_usd:,}",
                f"{profile.annual_compliance_cost_usd:,}",
                profile.treaty_network_score,
                profile.compliance_rigour,
            ]
            for profile in profiles
        ]

        return render_table(headers, rows)

    def format_country_detail(self, name: str) -> str:
        """Present a detailed description of a country profile."""

        profile = self.get_country(name)
        lines = [
            f"{profile.name}",
            "=" * len(profile.name),
            f"Corporate tax rate: {profile.corporate_tax_rate:g}%",
            f"VAT: {profile.vat_rate:g}%",
            f"Typical formation time: {profile.formation_time_weeks:g} weeks",
            f"Estimated formation cost: USD {profile.formation_cost_usd:,}",
            f"Estimated annual compliance cost: USD {profile.annual_compliance_cost_usd:,}",
            f"Treaty network score: {profile.treaty_network_score}/10",
            f"Compliance rigour: {profile.compliance_rigour}/10",
            "Strengths:",
        ]
        lines.extend(f"  • {item}" for item in profile.strengths)
        lines.append("Watchpoints:")
        lines.extend(f"  • {item}" for item in profile.watchpoints)
        lines.append("")
        lines.append(profile.notes)
        return "\n".join(lines)

    def to_dicts(self) -> List[dict]:
        """Return the dataset as serialisable dictionaries."""

        return [asdict(profile) for profile in self._dataset]


def render_table(headers: Sequence[str], rows: Sequence[Sequence[str]]) -> str:
    """Render a plain-text table with padded columns."""

    col_widths = [len(header) for header in headers]
    for row in rows:
        for idx, cell in enumerate(row):
            col_widths[idx] = max(col_widths[idx], len(str(cell)))

    def _format_row(row: Sequence[str]) -> str:
        return " | ".join(str(cell).ljust(col_widths[idx]) for idx, cell in enumerate(row))

    divider = "-+-".join("-" * width for width in col_widths)
    output = [_format_row(headers), divider]
    for row in rows:
        output.append(_format_row(row))

    return "\n".join(output)


__all__ = [
    "CountryNotFoundError",
    "LLCDomicileComparator",
    "render_table",
]
