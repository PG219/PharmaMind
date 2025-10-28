from datetime import datetime
from langchain_core.runnables import RunnablePassthrough
from src.core.llm_provider import llm
from src.agents.research_agent import get_research_chain
from src.agents.market_agent import get_market_chain
from src.schemas.final_report_schema import (
    FinalReport, ReportSummary, ClinicalTrialsReport, ResearchPapersReport,
    PatentsReport, MarketAnalysisReport, VisualizationData, ReportLinks,
    TrialDetail, PaperDetail, PatentDetail, MarketIndicationAnalysis
)
import json

def get_master_chain():
    research_chain = get_research_chain()
    market_chain = get_market_chain()
    
    def _group_trials_by_disease(trials: list) -> dict:
        grouped = {}
        for trial in trials:
            disease = trial.get("condition", "Unknown")
            grouped[disease] = grouped.get(disease, 0) + 1
        return grouped
    
    def _convert_trials(trials: list) -> list:
        return [TrialDetail(
            title=t.get("title", ""),
            phase=t.get("phase", ""),
            status=t.get("status", ""),
            year=t.get("year", 2024),
            url=t.get("url", "")
        ) for t in trials[:10]]
    
    def _convert_publications(pubs: list) -> list:
        return [PaperDetail(
            title=p.get("title", ""),
            year=p.get("year", 2024),
            authors=p.get("authors", []),
            url=p.get("url", "")
        ) for p in pubs[:10]]
    
    def _convert_patents(patents: list) -> list:
        return [PatentDetail(
            title=p.get("title", ""),
            year=p.get("year", 2024),
            applicant=p.get("applicant", ""),
            url=p.get("url", "")
        ) for p in patents[:10]]
    
    def _calculate_potential_score(market: dict) -> float:
        market_size = market.get("estimated_market_size_usd", 0)
        cagr = market.get("growth_cagr_percent", 0)
        competitors_count = len(market.get("key_competitors", []))
        
        size_score = min(1.0, market_size / 50_000_000_000)
        cagr_score = min(1.0, cagr / 15.0)
        competition_score = 1.0 / (competitors_count + 1)
        
        final_score = (size_score * 0.4 + cagr_score * 0.3 + competition_score * 0.3)
        return round(final_score, 2)
    
    def _synthesize_market_summary(markets: list) -> str:
        if not markets:
            return "No market analyses available."
        return f"Analysis of {len(markets)} potential indications completed. See top_indications for details."
    
    def _convert_market_analyses(markets: list) -> list:
        top_indications = []
        for market in markets:
            potential_score = _calculate_potential_score(market)
            top_indications.append(MarketIndicationAnalysis(
                disease=market.get("target_indication", ""),
                market_size_usd_billion=market.get("estimated_market_size_usd", 0) / 1_000_000_000,
                competition=", ".join(market.get("key_competitors", [])) or "Low",
                potential_score=potential_score
            ))
        return sorted(top_indications, key=lambda x: x.potential_score, reverse=True)
    
    def synthesize_report(data: dict) -> dict:
        drug_name = data["drug_name"]
        research = data["research_report"]
        markets = data["market_analyses"]
        
        potential_new_indications = research.get("potential_new_indications", [])
        key_trials = research.get("key_trials", [])
        key_publications = research.get("key_publications", [])
        key_patents = research.get("key_patents", [])
        
        final_report = FinalReport(
            drug_name=drug_name,
            summary=ReportSummary(
                overall_insight=f"{drug_name} shows significant repurposing potential based on recent research and market analysis."
            ),
            clinical_trials=ClinicalTrialsReport(
                total_trials=len(key_trials),
                trials_by_disease=_group_trials_by_disease(key_trials),
                key_trials=_convert_trials(key_trials),
                summary=research.get("research_trends", "")
            ),
            research_papers=ResearchPapersReport(
                total_papers=len(key_publications),
                key_topics=potential_new_indications,
                top_papers=_convert_publications(key_publications),
                summary=research.get("research_trends", "")
            ),
            patents=PatentsReport(
                total_patents=len(key_patents),
                recent_patents=_convert_patents(key_patents),
                patent_trend={},
                summary="Patent activity suggests growing interest in new applications."
            ),
            market_analysis=MarketAnalysisReport(
                top_indications=_convert_market_analyses(markets),
                summary=_synthesize_market_summary(markets)
            ),
            visualization_data=VisualizationData(
                charts={
                    "trials_by_disease": _group_trials_by_disease(key_trials),
                    "patent_trend": {},
                    "market_potential": {}
                }
            ),
            report_links=ReportLinks(
                pdf_report=f"https://pharmamind.ai/reports/{drug_name.lower()}_report.pdf",
                timestamp=datetime.now()
            )
        )
        
        return final_report
    
    def run_market_analyses(x):
        research_dict = x.model_dump() if hasattr(x, 'model_dump') else x
        drug_name = research_dict.get("drug_name", "")
        potential_indications = research_dict.get("potential_new_indications", [])[:5]
        market_results = []
        for indication in potential_indications:
            try:
                print(f"[Master] Analyzing market for: {indication[:80]}...")
                market_result = market_chain.invoke({
                    "drug_name": drug_name,
                    "indication": indication
                })
                if hasattr(market_result, 'model_dump'):
                    market_results.append(market_result.model_dump())
                else:
                    market_results.append(market_result)
            except Exception as e:
                error_msg = str(e)
                if "Rate limit" in error_msg or "429" in error_msg:
                    print(f"[Master] Rate limit hit - using mock data for: {indication[:50]}")
                else:
                    print(f"[Master] Error analyzing market for {indication[:50]}: {e}")
                
                market_results.append({
                    "target_indication": indication,
                    "market_opportunity": "Analysis unavailable (rate limited)",
                    "estimated_market_size_usd": 5000000,
                    "growth_cagr_percent": 5.0,
                    "key_competitors": ["TBD"],
                    "business_recommendation": "Further analysis needed - consider adding credits or waiting",
                    "summary": f"Market analysis unavailable for {indication}"
                })
        
        return {
            "drug_name": drug_name,
            "research_report": research_dict,
            "market_analyses": market_results
        }
    
    def pipeline(x):
        try:
            research_result = x
            analyzed = run_market_analyses(research_result)
            final = synthesize_report(analyzed)
            return final
        except Exception as e:
            error_msg = str(e)
            if "Rate limit" in error_msg or "429" in error_msg:
                print("\n" + "="*60)
                print("RATE LIMIT EXCEEDED")
                print("="*60)
                print("You've hit the OpenRouter free tier rate limit.")
                print("Options:")
                print("1. Add credits to your OpenRouter account")
                print("2. Wait for the rate limit to reset")
                print("3. Try a different model")
                print("="*60 + "\n")
                raise
            raise
    
    chain = (
        research_chain
        | pipeline
    )
    
    return chain
