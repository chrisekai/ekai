# ekai

This repository now includes a lightweight command-line application that helps compare
limited liability company (LLC) domicile considerations across Mauritius, Seychelles,
Rwanda, Uganda, and Kenya.

## LLC domicile comparison app

The application summarises headline tax rates, indicative formation and compliance
costs, and qualitative strengths and watchpoints for each jurisdiction. You can use it
to generate tables, narrative country profiles, or export the raw dataset as JSON.

### Getting started

Create (and activate) a Python 3.11+ virtual environment, then install the project in
editable mode:

```bash
pip install -e .[dev]
```

Alternatively, you can simply run the module with the Python interpreter available on
your system — the app has no third-party dependencies.

### Usage

Show the summary table (this is also the default behaviour):

```bash
python -m llc_domicile_app.cli --list
```

Display a detailed profile for a jurisdiction:

```bash
python -m llc_domicile_app.cli --detail Mauritius
```

Compare two countries side by side across numeric metrics:

```bash
python -m llc_domicile_app.cli --compare Mauritius Kenya
```

Export the knowledge base for use in other tools:

```bash
python -m llc_domicile_app.cli --json
```

### Running tests

```bash
pytest
```
