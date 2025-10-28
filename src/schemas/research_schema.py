from pydantic import BaseModel, Field
from typing import List

class Publication(BaseModel):
    title: str = Field(..., description="Title of the research paper")
    year: int = Field(..., description="Publication year")
    authors: List[str] = Field(..., description="List of primary authors")
    url: str = Field(..., description="URL to the publication")

class Trial(BaseModel):
    title: str = Field(..., description="Official title of the clinical trial")
    phase: str = Field(..., description="Current phase (e.g., 'Phase II')")
    status: str = Field(..., description="Current status (e.g., 'Active', 'Completed')")
    year: int = Field(..., description="Start or completion year")
    condition: str = Field(..., description="The condition being studied (e.g., 'Cancer')")
    url: str = Field(..., description="URL to the trial")

class Patent(BaseModel):
    title: str = Field(..., description="Title of the patent")
    year: int = Field(..., description="Publication year of the patent")
    applicant: str = Field(..., description="Applicant or assignee (e.g., 'Pfizer Inc.')")
    url: str = Field(..., description="URL to the patent document")

class ResearchReport(BaseModel):
    """
    Structured output for the Research Agent. This is the scientific foundation
    for the market analysis.
    """
    drug_name: str = Field(..., description="The name of the drug being researched")
    mechanism_of_action: str = Field(..., description="A concise summary of the drug's primary mechanism of action")
    potential_new_indications: List[str] = Field(..., description="A list of potential new diseases or therapeutic areas for repurposing (e.g., ['Cancer', 'Alzheimer's'])")
    key_publications: List[Publication] = Field(..., description="A list of the most relevant recent publications")
    key_trials: List[Trial] = Field(..., description="A list of the most relevant clinical trials for new indications")
    key_patents: List[Patent] = Field(..., description="A list of recent, relevant patents, especially for new formulations or uses")
    research_trends: str = Field(..., description="A high-level summary of emerging research themes (e.g., 'Rising interest in anti-inflammatory and neuroprotective pathways')")
