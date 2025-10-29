import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.orchestration.master_agent import get_master_chain
from src.schemas.final_report_schema import FinalReport

app = FastAPI(
    title="PharmaMind API",
    description="API for running the PharmaMind drug repurposing agent.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def get_root():
    return {"message": "PharmaMind API is running. Go to /docs for documentation."}

@app.get("/report/{drug_name}")
async def get_drug_report(drug_name: str):
    print(f"Received request for: {drug_name}")
    
    master_chain = get_master_chain()
    
    result = master_chain.invoke({"drug_name": drug_name})
    
    if isinstance(result, FinalReport):
        print(f"Successfully generated report for: {drug_name}") 
        return result.model_dump()
    else:
        return {"error": "Unexpected output type", "result": str(result)}

if __name__ == "__main__":
    print("Starting PharmaMind API server on http://127.0.0.1:8000")
    print("Go to http://127.0.0.1:8000/docs for the interactive API documentation.")
    
    uvicorn.run(
        "api:app",
        host="127.0.0.1",
        port=8000,
        reload=True
    )
