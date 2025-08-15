# Risk Management Policy Generator

A FastAPI web app that generates tailored Risk Management Policies from a YAML repository of base templates, industry overlays, and regulation overlays.

## Features

- YAML-driven policy repository: base, industries, regulations
- Jinja2 templating to inject company profile variables
- Web UI to select industry and regulations; renders Markdown policy
- Download generated policy as Markdown

## Project Structure

```
/workspace
├─ app/
│  ├─ main.py              # FastAPI app and routes
│  └─ generator.py         # YAML loading, merging, rendering
├─ policies/
│  ├─ base.yml             # Base policy sections
│  ├─ industries/
│  │  ├─ financial_services.yml
│  │  └─ healthcare.yml
│  └─ regulations/
│     ├─ iso_31000.yml
│     ├─ hipaa.yml
│     └─ sox.yml
├─ templates/
│  ├─ index.html           # Input form
│  └─ policy.html          # Output view
├─ static/
│  └─ styles.css           # Minimal styling
├─ requirements.txt
└─ README.md
```

## Run locally

Option A: Python directly

1. Ensure Python 3.10+ is installed
2. Install dependencies:
   - If your environment allows pip: `pip install -r requirements.txt`
   - If PEP 668 prevents system installs, use a venv: `python3 -m venv .venv && . .venv/bin/activate && pip install -r requirements.txt`
3. Start the server:
   - `uvicorn app.main:app --host 0.0.0.0 --port 8000 --app-dir .`
4. Open `http://localhost:8000`

Option B: Docker

```
docker build -t policy-gen .
docker run --rm -p 8000:8000 policy-gen
```

## Customize policies

- Add industries: create `policies/industries/<key>.yml`
- Add regulations: create `policies/regulations/<key>.yml`

YAML format:

```yaml
meta:
  display_name: Friendly Name
sections:
  - id: section_key
    title: Optional Title
    # mode: append | replace
    # after: another_section_id  # for insert positioning
    content: |
      Freeform Markdown with Jinja variables like {{ company_name }}, {{ risk_appetite }}, etc.
```

Common variables available in templates:
- `company_name`, `industry`, `regulations`, `company_size`, `country`, `currency`
- `risk_appetite`, `policy_owner`, `effective_date`, `version`, `additional_notes`

## Notes

- Overlays merge by `id`. Use `mode: append` to extend content or `mode: replace` to fully override a base section.
- New sections can be inserted using `after: <section_id>`.
- Output is Markdown; you can copy/paste to your docs or export as PDF using a Markdown tool. 
