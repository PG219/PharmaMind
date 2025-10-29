"""
LLM Provider Configuration
This file centralizes the LLM configuration.
We are now using Google Gemini via the ChatGoogleGenerativeAI integration.
"""
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get the API key from environment variables
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY not found in environment variables. Please set it in your .env file.")

# --- Centralized LLM Instance ---

def get_llm():
    """
    Initializes and returns the Chat LLM instance configured for
    Google Gemini (gemini-1.5-flash-latest).
    """
    
    # We use gemini-1.5-flash-latest. It's fast, cheap, and
    # excellent at following structured JSON instructions.
    llm = ChatGoogleGenerativeAI(
        model="models/gemini-1.5-flash-latest",
        google_api_key=GOOGLE_API_KEY,
        temperature=0,      # Set to 0 for deterministic, factual outputs
        convert_system_message_to_human=True # Helps with compatibility
    )
    
    print("[LLM Provider] Initialized LLM with model: gemini-1.5-flash-latest")
    return llm

# Create the global llm instance that other modules can import
# Because of this line, no other files need to be changed.
llm = get_llm()

