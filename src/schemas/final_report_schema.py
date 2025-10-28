from pydantic import BaseModel, Field
from typing import List, Dict, Any
from datetime import datetime

# --- Nested Models for Final Report ---

class ReportSummary(BaseModel):
    overall_insight: str = Field(..., description="A top-level insight synthesizing scientific and market data")

class TrialDetail(BaseModel):
    title: str
    phase: str
    status: str
    year: int
    url: str

class ClinicalTrialsReport(BaseModel):
    total_trials: int
    trials_by_disease: Dict[str, int]
    key_trials: List[TrialDetail]
    summary: str

class PaperDetail(BaseModel):
    title: str
    year: int
    authors: List[str]
    url: str

class ResearchPapersReport(BaseModel):
    total_papers: int
    key_topics: List[str]
    top_papers: List[PaperDetail]
    summary: str

class PatentDetail(BaseModel):
    title: str
    year: int
    applicant: str
    url: str

class PatentsReport(BaseModel):
    total_patents: int
    recent_patents: List[PatentDetail]
    patent_trend: Dict[int, int]
    summary: str

class MarketIndicationAnalysis(BaseModel):
    disease: str
    market_size_usd_billion: float
    competition: str
    potential_score: float = Field(..., description="A calculated score from 0.0 to 1.0 representing potential")

class MarketAnalysisReport(BaseModel):
    top_indications: List[MarketIndicationAnalysis]
    summary: str

class VisualizationData(BaseModel):
    charts: Dict[str, Dict[str, Any]]

class ReportLinks(BaseModel):
    pdf_report: str
    timestamp: datetime

# --- Main Final Report Model ---

class FinalReport(BaseModel):
    """
    This is the final, consolidated JSON output from the Master Agent,
    ready for frontend integration or PDF generation.
    """
    drug_name: str
    summary: ReportSummary
    clinical_trials: ClinicalTrialsReport
    research_papers: ResearchPapersReport
    patents: PatentsReport
    market_analysis: MarketAnalysisReport
    visualization_data: VisualizationData
    report_links: ReportLinks
