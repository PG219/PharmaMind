from pydantic import BaseModel, Field
from typing import List

class MarketAnalysis(BaseModel):
    """
    Structured output for the Market Agent. Analyzes the commercial
    potential for a *single* indication.
    """
    drug_name: str = Field(..., description="The drug being analyzed")
    target_indication: str = Field(..., description="The specific disease or indication being evaluated (e.g., 'Cancer')")
    market_opportunity: str = Field(..., description="Qualitative summary of the opportunity (e.g., 'High unmet need and low competition')")
    estimated_market_size_usd: float = Field(..., description="Estimated total addressable market in USD")
    growth_cagr_percent: float = Field(..., description="Projected Compound Annual Growth Rate (CAGR) for this market")
    key_competitors: List[str] = Field(..., description="List of key competitor companies or drugs in this space")
    business_recommendation: str = Field(..., description="A specific strategic recommendation (e.g., 'Focus on Phase IIb trial for neuroprotection')")
    summary: str = Field(..., description="A concise summary of the market potential")
