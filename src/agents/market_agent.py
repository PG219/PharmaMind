from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from src.core.llm_provider import llm
from src.tools import api_tools
from src.schemas.market_schema import MarketAnalysis
import json

PROMPT_TEMPLATE = """
You are an expert pharmaceutical business intelligence analyst.
Your job is to analyze the market potential for repurposing a drug
for a new indication.

Drug: {drug_name}
Target Indication: {indication}

Raw Market Data:
{market_data}

Analyze the data and generate a market analysis report that strictly
adheres to the `MarketAnalysis` JSON schema. Provide a clear business
recommendation and identify key competitors (if any).
"""

def get_market_chain():
    prompt = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
    
    chain = (
        RunnablePassthrough.assign(
            market_data=lambda x: api_tools.get_market_data(x["indication"])
        )
        | prompt
        | llm.with_structured_output(MarketAnalysis)
    )
    
    return chain

if __name__ == "__main__":
    market_agent_chain = get_market_chain()
    print("--- Running Market Agent for 'Metformin' in 'Cancer' ---")
    result = market_agent_chain.invoke({
        "drug_name": "Metformin",
        "indication": "Cancer"
    })
    print(json.dumps(result.model_dump(), indent=2))
