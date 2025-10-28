import requests
import time
import json
from typing import List, Dict, Any

HEADERS = {
    "User-Agent": "PharmaMind_Agent/1.0 (mailto:your_email@example.com)"
}

PUBMED_ESEARCH_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi"
PUBMED_ESUMMARY_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi"
PUBMED_BASE_URL = "https://pubmed.ncbi.nlm.nih.gov/"
MAX_PUBMED_RESULTS = 5

def search_pubmed(drug_name: str) -> List[Dict[str, Any]]:
    print(f"[Tool] Searching PubMed for: {drug_name}")
    
    query = f"({drug_name}) AND (repurposing OR new indication OR novel therapy OR anti-tumor OR neuroprotection)"
    
    articles = []
    try:
        search_params = {
            "db": "pubmed",
            "term": query,
            "retmax": MAX_PUBMED_RESULTS,
            "sort": "relevance",
            "retmode": "json"
        }
        
        time.sleep(0.4)
        response = requests.get(PUBMED_ESEARCH_URL, params=search_params, headers=HEADERS)
        response.raise_for_status()
        
        data = response.json()
        id_list = data.get("esearchresult", {}).get("idlist", [])
        
        if not id_list:
            print("[Tool] PubMed: No relevant articles found.")
            return []

        summary_params = {
            "db": "pubmed",
            "id": ",".join(id_list),
            "retmode": "json"
        }
        
        time.sleep(0.4)
        response = requests.get(PUBMED_ESUMMARY_URL, params=summary_params, headers=HEADERS)
        response.raise_for_status()
        
        results = response.json().get("result", {})
        
        for pmid in results.get("uids", []):
            article_data = results[pmid]
            year = article_data.get("pubdate", "N/A").split(" ")[0]
            
            articles.append({
                "title": article_data.get("title", "No Title"),
                "year": int(year) if year.isdigit() else 0,
                "authors": [auth["name"] for auth in article_data.get("authors", [])],
                "url": f"{PUBMED_BASE_URL}{pmid}/"
            })
            
    except requests.exceptions.RequestException as e:
        print(f"[Tool] PubMed API Error: {e}")
    except json.JSONDecodeError:
        print(f"[Tool] PubMed API Error: Failed to decode JSON response.")
        
    print(f"[Tool] PubMed: Found {len(articles)} articles.")
    return articles


CLINICAL_TRIALS_URL = "https://clinicaltrials.gov/api/v2/studies"
MAX_TRIALS_RESULTS = 5

def search_clinical_trials(drug_name: str) -> List[Dict[str, Any]]:
    print(f"[Tool] Searching ClinicalTrials.gov for: {drug_name}")
    
    trials = []
    try:
        params = {
            "query.cond": drug_name,
            "pageSize": MAX_TRIALS_RESULTS
        }
        
        response = requests.get(CLINICAL_TRIALS_URL, params=params, headers=HEADERS, timeout=30)
        
        if response.status_code != 200:
            print(f"[Tool] ClinicalTrials.gov returned status {response.status_code}")
            print(f"[Tool] Response: {response.text[:200]}")
            return []
        
        data = response.json()
        
        def get_nested(data, *keys, default="N/A"):
            temp = data
            for key in keys:
                if isinstance(temp, dict):
                    temp = temp.get(key)
                else:
                    return default
            return temp if temp else default
        
        for study in data.get("studies", []):
            protocol = study.get("protocolSection", {})

            phases = get_nested(protocol, "designModule", "phases", default=[])
            phase = phases[0] if isinstance(phases, list) and phases else "N/A"
            
            conditions = get_nested(protocol, "conditionsModule", "conditions", default=[])
            condition_str = ", ".join(conditions) if conditions else "Not specified"

            start_date_str = get_nested(protocol, "statusModule", "startDateStruct", "date", default="")
            year = int(start_date_str.split('-')[0]) if '-' in start_date_str and start_date_str else 2024

            title = get_nested(protocol, "identificationModule", "officialTitle", default="N/A")
            status = get_nested(protocol, "statusModule", "overallStatus", default="Unknown")
            nct_id = get_nested(study, "identificationModule", "nctId", default="")
            
            trials.append({
                "title": title,
                "phase": phase,
                "status": status,
                "year": year,
                "condition": condition_str,
                "url": f"https://clinicaltrials.gov/study/{nct_id}" if nct_id else "https://clinicaltrials.gov/"
            })
            
    except requests.exceptions.RequestException as e:
        print(f"[Tool] ClinicalTrials.gov API Error: {e}")
    except json.JSONDecodeError as e:
        print(f"[Tool] ClinicalTrials.gov JSON Error: {e}")
        print(f"[Tool] Response content: {response.text[:500] if 'response' in locals() else 'N/A'}")
    except Exception as e:
        print(f"[Tool] ClinicalTrials.gov Unexpected Error: {e}")
        
    print(f"[Tool] ClinicalTrials.gov: Found {len(trials)} trials.")
    return trials

def search_patents(drug_name: str) -> List[Dict[str, Any]]:
    print(f"[Tool] Searching Patents (MOCK) for: {drug_name}")
    time.sleep(0.2)
    
    if drug_name.lower() == "metformin":
        return [
            {"title": "Novel Metformin Formulation for Oncology Applications", "year": 2023, "applicant": "Pfizer Inc.", "url": "https://www.lens.org/patent/XXXXXX"},
            {"title": "Metformin-based Combination Therapy for Alzheimer's", "year": 2022, "applicant": "AstraZeneca", "url": "https://www.lens.org/patent/YYYYYY"},
            {"title": "Sustained-Release Metformin for Metabolic Disorders", "year": 2021, "applicant": "Merck KGaA", "url": "https://www.lens.org/patent/ZZZZZZ"}
        ]
    return []

def get_market_data(indication: str) -> Dict[str, Any]:
    print(f"[Tool] Getting Market Data (MOCK) for: {indication}")
    time.sleep(0.3)
    
    indication_lower = indication.lower()
    
    if "cancer" in indication_lower:
        return {"market_size_usd_billion": 200.0, "cagr_percent": 12.5, "competition": "Moderate", "unmet_need": "High"}
    if "alzheimer" in indication_lower:
        return {"market_size_usd_billion": 15.0, "cagr_percent": 8.1, "competition": "High", "unmet_need": "Very High"}
    if "pcos" in indication_lower:
        return {"market_size_usd_billion": 5.0, "cagr_percent": 4.5, "competition": "High", "unmet_need": "Low"}
    if "obesity" in indication_lower:
        return {"market_size_usd_billion": 25.0, "cagr_percent": 15.0, "competition": "Very High (GLP-1s)", "unmet_need": "Moderate"}
    
    return {"market_size_usd_billion": 1.0, "cagr_percent": 3.0, "competition": "Low", "unmet_need": "N/A"}