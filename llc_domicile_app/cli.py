"""Command-line interface for comparing LLC domicile options."""

from __future__ import annotations

import argparse
import json
from typing import Iterable

from .comparator import LLCDomicileComparator, render_table
from .data import METRIC_DESCRIPTIONS


def parse_args(argv: Iterable[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Compare LLC domicile considerations across selected African jurisdictions."
    )
    parser.add_argument(
        "--list",
        action="store_true",
        help="Display a summary table of all countries.",
    )
    parser.add_argument(
        "--detail",
        metavar="COUNTRY",
        help="Show a detailed narrative profile for the specified country.",
    )
    parser.add_argument(
        "--compare",
        nargs=2,
        metavar=("LEFT", "RIGHT"),
        help="Compare two countries across all numeric metrics.",
    )
    parser.add_argument(
        "--metric",
        choices=list(METRIC_DESCRIPTIONS),
        help="Optional metric to sort the summary table by (used with --list).",
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Output the raw dataset in JSON format for downstream tooling.",
    )

    return parser.parse_args(argv)


def main(argv: Iterable[str] | None = None) -> str:
    args = parse_args(argv)
    comparator = LLCDomicileComparator()

    if args.json:
        data = comparator.to_dicts()
        return json.dumps(data, indent=2)

    outputs: list[str] = []

    if args.list or not (args.detail or args.compare):
        outputs.append(comparator.format_summary_table(metric=args.metric))

    if args.detail:
        if outputs:
            outputs.append("")
        outputs.append(comparator.format_country_detail(args.detail))

    if args.compare:
        left, right = args.compare
        comparison = comparator.compare(left, right)
        if outputs:
            outputs.append("")
        outputs.append(_format_comparison(left, right, comparison))

    return "\n".join(outputs)


def _format_comparison(left: str, right: str, comparison: list[dict]) -> str:
    headers = ["Metric", left.title(), right.title()]
    rows = [
        [item["description"], _format_value(item["left"]), _format_value(item["right"])]
        for item in comparison
    ]
    return render_table(headers, rows)


def _format_value(value: object) -> str:
    if isinstance(value, int):
        return f"{value:,}"
    if isinstance(value, float):
        if value.is_integer():
            return f"{value:.0f}"
        return f"{value:.2f}".rstrip("0").rstrip(".")
    return str(value)


if __name__ == "__main__":  # pragma: no cover - manual invocation
    print(main())
