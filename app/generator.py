from __future__ import annotations

from functools import lru_cache
from pathlib import Path
from typing import Dict, List, Tuple

import yaml
from jinja2 import Environment, BaseLoader


BASE_DIR = Path(__file__).resolve().parent.parent
POLICIES_DIR = BASE_DIR / "policies"


def _to_display_name(key: str) -> str:
	key = key.replace("_", " ")
	parts = key.split()
	return " ".join(p.capitalize() if not p.isupper() else p for p in parts)


@lru_cache(maxsize=32)
def _load_yaml(path: Path) -> Dict:
	with path.open("r", encoding="utf-8") as f:
		return yaml.safe_load(f) or {}


def _safe_get_meta_display_name(path: Path) -> str:
	try:
		data = _load_yaml(path)
		meta = data.get("meta") or {}
		name = meta.get("display_name")
		if isinstance(name, str) and name.strip():
			return name.strip()
	except Exception:
		pass
	return _to_display_name(path.stem)


def get_available_industries() -> List[Tuple[str, str]]:
	industries_dir = POLICIES_DIR / "industries"
	if not industries_dir.exists():
		return []
	items: List[Tuple[str, str]] = []
	for file in sorted(industries_dir.glob("*.yml")):
		items.append((file.stem, _safe_get_meta_display_name(file)))
	return items


def get_available_regulations() -> List[Tuple[str, str]]:
	regs_dir = POLICIES_DIR / "regulations"
	if not regs_dir.exists():
		return []
	items: List[Tuple[str, str]] = []
	for file in sorted(regs_dir.glob("*.yml")):
		items.append((file.stem, _safe_get_meta_display_name(file)))
	return items


def _build_jinja_env() -> Environment:
	env = Environment(loader=BaseLoader(), autoescape=False, trim_blocks=True, lstrip_blocks=True)
	return env


def _index_sections_by_id(sections: List[Dict]) -> Dict[str, int]:
	index: Dict[str, int] = {}
	for idx, section in enumerate(sections):
		section_id = section.get("id")
		if isinstance(section_id, str):
			index[section_id] = idx
	return index


def _merge_sections(base_sections: List[Dict], overlays: List[List[Dict]]) -> List[Dict]:
	# Start with a copy of base
	merged: List[Dict] = [dict(s) for s in (base_sections or [])]
	for overlay_sections in overlays:
		if not overlay_sections:
			continue
			# map must be recomputed per iteration to reflect inserts
		index = _index_sections_by_id(merged)
		for overlay in overlay_sections:
			section_id = overlay.get("id")
			if not section_id:
				continue
			mode = (overlay.get("mode") or "append").lower()
			after_id = overlay.get("after")

			if section_id in index:
				# Update existing section
				existing_idx = index[section_id]
				existing = dict(merged[existing_idx])
				if mode == "replace":
					merged[existing_idx] = {
						"id": section_id,
						"title": overlay.get("title", existing.get("title")),
						"content": overlay.get("content", existing.get("content", "")),
					}
				else:  # append
					title = overlay.get("title", existing.get("title"))
					base_content = existing.get("content", "") or ""
					overlay_content = overlay.get("content", "") or ""
					content = base_content.rstrip() + ("\n\n" if base_content and overlay_content else "") + overlay_content.lstrip()
					merged[existing_idx] = {"id": section_id, "title": title, "content": content}
				# refresh index after update
				index = _index_sections_by_id(merged)
			else:
				# Insert new section
				new_section = {"id": section_id, "title": overlay.get("title", _to_display_name(section_id)), "content": overlay.get("content", "")}
				if after_id and after_id in index:
					insert_at = index[after_id] + 1
					merged.insert(insert_at, new_section)
				else:
					merged.append(new_section)
				index = _index_sections_by_id(merged)
	return merged


def _render_sections(sections: List[Dict], variables: Dict) -> List[Dict]:
	env = _build_jinja_env()
	rendered: List[Dict] = []
	for s in sections:
		template = env.from_string(str(s.get("content", "")))
		content = template.render(**variables)
		# Normalize trailing whitespace
		content = content.strip() + "\n"
		rendered.append({"id": s.get("id"), "title": s.get("title"), "content": content})
	return rendered


def _build_markdown(company_name: str, policy_title: str, variables: Dict, sections: List[Dict]) -> str:
	lines: List[str] = []
	lines.append(f"# {policy_title} - {company_name}")
	lines.append("")
	lines.append(f"Effective Date: {variables.get('effective_date', 'TBD')}")
	lines.append(f"Policy Owner: {variables.get('policy_owner', 'Risk Management')}")
	lines.append(f"Version: {variables.get('version', '1.0')}")
	lines.append("")
	for s in sections:
		title = s.get("title") or _to_display_name(s.get("id", "Section"))
		lines.append(f"## {title}")
		lines.append("")
		content = s.get("content", "")
		lines.append(content.rstrip())
		lines.append("")
	return "\n".join(lines).strip() + "\n"


def assemble_policy(industry_key: str, regulation_keys: List[str], profile: Dict) -> Dict:
	"""
	Assemble and render a policy based on base + industry + selected regulations and the company profile.
	Returns: { title, sections, policy_md }
	"""
	base_yaml_path = POLICIES_DIR / "base.yml"
	base_yaml = _load_yaml(base_yaml_path)
	base_sections = base_yaml.get("sections", [])

	# Load industry overlay
	overlay_sections: List[List[Dict]] = []
	industry_name = None
	if industry_key:
		industry_path = POLICIES_DIR / "industries" / f"{industry_key}.yml"
		if industry_path.exists():
			ind_yaml = _load_yaml(industry_path)
			industry_name = (ind_yaml.get("meta") or {}).get("display_name") or _to_display_name(industry_key)
			overlay_sections.append(ind_yaml.get("sections", []))
		else:
			industry_name = _to_display_name(industry_key)

	# Load regulation overlays
	reg_display_names: List[str] = []
	for reg_key in regulation_keys or []:
		reg_path = POLICIES_DIR / "regulations" / f"{reg_key}.yml"
		if reg_path.exists():
			reg_yaml = _load_yaml(reg_path)
			reg_display = (reg_yaml.get("meta") or {}).get("display_name") or _to_display_name(reg_key)
			reg_display_names.append(reg_display)
			overlay_sections.append(reg_yaml.get("sections", []))

	merged_sections = _merge_sections(base_sections, overlay_sections)

	variables = dict(profile or {})
	variables.setdefault("company_name", "Your Company")
	variables.setdefault("industry", industry_name or _to_display_name(industry_key or "Generic"))
	variables.setdefault("regulations", reg_display_names)
	variables.setdefault("version", "1.0")
	variables.setdefault("policy_owner", "Risk Management")

	rendered_sections = _render_sections(merged_sections, variables)
	policy_title = f"Risk Management Policy"
	policy_md = _build_markdown(variables["company_name"], policy_title, variables, rendered_sections)

	return {
		"title": policy_title,
		"sections": rendered_sections,
		"policy_md": policy_md,
	}