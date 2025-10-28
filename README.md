🚀 PharmaMind: Agentic AI System for Drug Repurposing Research
🧩 Overview

PharmaMind is an Agentic AI System designed to automate drug repurposing research — discovering new potential uses for existing drugs or molecules.

Instead of scientists manually searching across databases like PubMed, ClinicalTrials.gov, or Google Patents, PharmaMind uses a multi-agent AI architecture to automatically:

Collect biomedical data from multiple sources

Summarize and visualize potential new drug uses

Generate a downloadable, structured report

🎯 Objective

“To build an AI system that can automatically research, summarize, and visualize potential new medical uses for any existing molecule.”

Given a molecule name (e.g., Metformin), the system:

Fetches research papers, clinical trials, patents, and market data

Evaluates repurposing potential using AI reasoning

Summarizes results into an interactive dashboard and PDF report

🧠 System Architecture
🧩 1. Master Agent (Coordinator)

Understands user query (e.g., “Find new uses for Metformin”)

Delegates subtasks to specialized worker agents

Merges all outputs into a structured summary

⚙️ 2. Worker Agents
Agent	Function	Data Source
🧪 Clinical Trials Agent	Finds ongoing/past trials for the molecule	ClinicalTrials.gov API
📚 Research Agent	Fetches related papers and research trends	Semantic Scholar API, PubMed API
🧬 Patent Agent	Identifies patents involving the molecule	Lens.org / Google Patents
💹 Market Agent	Estimates disease demand and market size	OpenFDA, WHO, Kaggle datasets
📊 Report Agent	Compiles all outputs into visual summary (PDF + charts)	Local data / Plotly / ReportLab
🧰 Tech Stack
🖥️ Frontend

React.js — Interactive UI

Tailwind CSS / Material UI — Responsive, clean design

Chart.js / Recharts / Plotly — Data visualization

Framer Motion — Animations & transitions

⚙️ Backend

FastAPI (Python) — REST API for AI & data fetching

LangChain / CrewAI / LlamaIndex — Multi-agent orchestration

Celery / AsyncIO — For parallel agent tasks

Pandas + Plotly — Data cleaning & visualization

🧠 AI / NLP Layer

OpenAI GPT-4 / GPT-5 API — Reasoning & summarization

BioBERT / PubMedBERT — Biomedical NLP

SciSpacy — Entity extraction (drugs, diseases)

🗃️ Database

MongoDB — Cache and store query results

Redis (optional) — For fast in-memory caching

🔍 Data Sources
Source	Description
ClinicalTrials.gov
	Clinical trials data
PubMed Central
	Biomedical research papers
Semantic Scholar API
	Research metadata
PubChem
	Molecular data
Lens.org
	Patent search
Kaggle Datasets
	Market & disease data
OpenFDA API
	Drug usage and approvals
🧩 System Workflow

User Input:
→ User enters a molecule name (e.g., Metformin)

Master Agent:
→ Dispatches parallel tasks to worker agents

Worker Agents:
→ Collect and summarize domain-specific data

Report Agent:
→ Merges all insights → generates JSON summary + PDF

Frontend Dashboard:
→ Displays clinical trials, papers, patents, and market trends

Final Output:
✅ Drug overview
✅ Ongoing trials & new indications
✅ Key papers & patents
✅ Market potential chart
✅ Downloadable report

⚙️ Setup & Installation
Clone the repository
git clone https://github.com/yourusername/pharmamind.git
cd pharmamind

Install dependencies
pip install -r requirements.txt

Run FastAPI backend
uvicorn main:app --reload

Frontend (if using MERN)
npm install
npm start

🧩 AI Agent Development Roadmap
Phase	Task	Tools	Duration
1	Setup environment & Master Agent	LangChain, FastAPI	4 hrs
2	Build Clinical & Research Agents	APIs	1 day
3	Add Patent & Market Agents	Lens.org, Kaggle	1 day
4	Report Agent + Visualization	GPT, Plotly, ReportLab	1 day
5	Integration with Backend	FastAPI	3 hrs
📄 Example Output

Input: Metformin
Output Includes:

12 ongoing clinical trials (mainly cancer & PCOS)

Top 5 papers on new therapeutic uses

3 recent patents (2023–2024)

Global oncology market size: $200B+

Downloadable PDF summary

🔮 Future Scope

Integrate Knowledge Graphs for drug–gene–disease correlations

Use Graph Neural Networks for deeper relationship prediction

Chrome Extension for quick in-browser research

Voice-based molecule search

🧑‍💻 Team Structure
Role	Members	Responsibilities
AI & Agents Team (3)		Builds 4 worker agents + Master agent
Frontend & Backend Team (2)		Builds MERN dashboard + FastAPI bridge
