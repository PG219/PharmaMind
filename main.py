import json
from src.orchestration.master_agent import get_master_chain
from src.schemas.final_report_schema import FinalReport
import os

def run_pharmamind_pipeline(drug_name: str):
    print(f"INITIATING PHARMAMIND PIPELINE FOR: {drug_name}")
    
    if not os.getenv("OPENROUTER_API_KEY"):
        print("="*50)
        print("ERROR: OPENROUTER_API_KEY not found.")
        print("Please create a .env file and add your key.")
        print("Example: OPENROUTER_API_KEY=\"your_key_here\"")
        print("="*50)
        return

    master_chain = get_master_chain()
    
    try:
        result = master_chain.invoke({"drug_name": drug_name})
        
        if isinstance(result, FinalReport):
            print(f"PIPELINE COMPLETED: {drug_name}")
            
            final_json = result.model_dump_json(indent=2)
            
            output_filename = "example_output.json"
            with open(output_filename, "w") as f:
                f.write(final_json)
            
            print(f"\nFinal report saved to {output_filename}")
            print("\n--- SAMPLE OF FINAL REPORT ---")
            print(final_json)
            print("--- END OF REPORT ---")
            
        else:
            print(f"PIPELINE ERROR: Unexpected output type")
            print(result)

    except Exception as e:
        print(f"PIPELINE FAILED")
        print(f"An error occurred: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    drug = input("Enter the drug name: ")
    run_pharmamind_pipeline(drug)
