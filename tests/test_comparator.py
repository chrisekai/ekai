"""Unit tests for the LLC domicile comparator."""

from llc_domicile_app import COUNTRY_DATA, LLCDomicileComparator, METRIC_DESCRIPTIONS


def test_get_country_is_case_insensitive():
    comparator = LLCDomicileComparator()
    kenya = comparator.get_country("kEnYa")
    assert kenya.name == "Kenya"


def test_rank_by_metric_descending_for_scores():
    comparator = LLCDomicileComparator()
    ranked = comparator.rank_by("treaty_network_score")
    scores = [profile.treaty_network_score for profile in ranked]
    assert scores == sorted(scores, reverse=True)


def test_compare_returns_all_metrics_by_default():
    comparator = LLCDomicileComparator()
    comparison = comparator.compare("Mauritius", "Kenya")
    metric_names = [item["metric"] for item in comparison]
    assert metric_names == list(METRIC_DESCRIPTIONS)


def test_to_dicts_matches_dataset_length():
    comparator = LLCDomicileComparator()
    data = comparator.to_dicts()
    assert len(data) == len(COUNTRY_DATA)
    assert {entry["name"] for entry in data} == {profile.name for profile in COUNTRY_DATA}
