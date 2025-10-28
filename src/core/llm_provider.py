"""
LLM Provider Configuration
This file centralizes the LLM configuration, using OpenRouter
to access the specified model.
"""
import os
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get the API key from environment variables
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

if not OPENROUTER_API_KEY:
    raise ValueError("OPENROUTER_API_KEY not found in environment variables. Please set it in your .env file.")

# --- Centralized LLM Instance ---

def get_llm():
    """
    Initializes and returns the Chat LLM instance configured for OpenRouter.
    We use the DeepSeek R1T2 Chimera model, which is a powerful free model on OpenRouter.
    """
    
    # Note: We are using "openrouter/tgi/deepseek-r1t2-chimera"
    # This is a model you requested and is available on the free tier.
    llm = ChatOpenAI(
        model_name="tngtech/deepseek-r1t2-chimera:free",
        openai_api_key=OPENROUTER_API_KEY,
        openai_api_base="https://openrouter.ai/api/v1",
        temperature=0,      # Set to 0 for deterministic, factual outputs
        max_tokens=4096,    # Adjust as needed for report size
        streaming=False
    )
    
    print("[LLM Provider] Initialized LLM with model: openrouter/tgi/deepseek-r1t2-chimera")
    return llm

# Create the global llm instance that other modules can import
llm = get_llm()