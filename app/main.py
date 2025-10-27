from __future__ import annotations

from pathlib import Path
from typing import List

from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse, PlainTextResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .generator import assemble_policy, get_available_industries, get_available_regulations


BASE_DIR = Path(__file__).resolve().parent.parent

def create_app() -> FastAPI:
	app = FastAPI(title="Policy Generator", version="1.0.0")

	# Static and templates
	static_dir = BASE_DIR / "static"
	templates_dir = BASE_DIR / "templates"
	app.mount("/static", StaticFiles(directory=str(static_dir)), name="static")
	templates = Jinja2Templates(directory=str(templates_dir))

	# Options
	COMPANY_SIZES = [
		("small", "Small (<= 100 staff)"),
		("medium", "Medium (101-1000 staff)"),
		("large", "Large (> 1000 staff)"),
	]
	RISK_APPETITES = [
		("conservative", "Conservative"),
		("moderate", "Moderate"),
		("aggressive", "Aggressive"),
	]

	@app.get("/", response_class=HTMLResponse)
	async def index(request: Request):
		industries = get_available_industries()
		regulations = get_available_regulations()
		return templates.TemplateResponse(
			"index.html",
			{
				"request": request,
				"industries": industries,
				"regulations": regulations,
				"company_sizes": COMPANY_SIZES,
				"risk_appetites": RISK_APPETITES,
			},
		)

	@app.post("/generate", response_class=HTMLResponse)
	async def generate(
		request: Request,
		company_name: str = Form(...),
		industry: str = Form(""),
		company_size: str = Form("medium"),
		country: str = Form(""),
		currency: str = Form("USD"),
		risk_appetite: str = Form("moderate"),
		policy_owner: str = Form("Risk Management"),
		effective_date: str = Form(""),
		version: str = Form("1.0"),
		regulations: List[str] = Form(None),
		additional_notes: str = Form(""),
	):
		profile = {
			"company_name": company_name.strip() or "Your Company",
			"company_size": company_size,
			"country": country.strip() or "",
			"currency": currency.strip() or "USD",
			"risk_appetite": risk_appetite,
			"policy_owner": policy_owner.strip() or "Risk Management",
			"effective_date": effective_date.strip() or "",
			"version": version.strip() or "1.0",
			"additional_notes": additional_notes.strip(),
		}
		selected_regs = regulations or []
		result = assemble_policy(industry, selected_regs, profile)
		policy_md = result["policy_md"]
		return templates.TemplateResponse(
			"policy.html",
			{"request": request, "company_name": profile["company_name"], "policy_md": policy_md},
		)

	@app.post("/download", response_class=PlainTextResponse)
	async def download(filename: str = Form("policy.md"), content: str = Form("")):
		response = PlainTextResponse(content or "")
		response.headers["Content-Disposition"] = f"attachment; filename={filename}"
		response.media_type = "text/markdown; charset=utf-8"
		return response

	@app.get("/healthz")
	async def healthz():
		return {"ok": True}

	return app


app = create_app()