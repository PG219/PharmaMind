from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough, RunnableParallel
from src.core.llm_provider import llm
from src.tools import api_tools
from src.schemas.research_schema import ResearchReport
import json

PROMPT_TEMPLATE = """
You are an expert pharmaceutical research analyst. Your goal is to analyze
raw data from PubMed, ClinicalTrials.gov, and patent databases for a given drug
and synthesize the findings into a structured JSON report.

Drug: {drug_name}

Raw Data:
---
PubMed Articles:
{publications}
---
Clinical Trials:
{trials}
---
Patents:
{patents}
---

Analyze all the raw data and generate a comprehensive report that strictly
adheres to the `ResearchReport` JSON schema. Identify the primary mechanism of
action, list *only* the most promising *new* indications for repurposing
(do not include its primary approved use), and summarize the key research trends.
"""

def get_research_chain():
    prompt = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
    
    gather_data = RunnableParallel(
        publications=(lambda x: api_tools.search_pubmed(x["drug_name"])),
        trials=(lambda x: api_tools.search_clinical_trials(x["drug_name"])),
        patents=(lambda x: api_tools.search_patents(x["drug_name"])),
        drug_name=RunnablePassthrough()
    )
    
    chain = (
        gather_data
        | prompt
        | llm.with_structured_output(ResearchReport)
    )
    
    return chain

if __name__ == "__main__":
    research_agent_chain = get_research_chain()
    print("--- Running Research Agent for 'Metformin' ---")
    result = research_agent_chain.invoke({"drug_name": "Metformin"})
    print(json.dumps(result.model_dump(), indent=2))
