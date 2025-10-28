# utils.py
import os
import json
from datetime import datetime
from openai import OpenAI

MODEL_NAME = os.getenv("PHARMAMIND_MODEL", "tngtech/deepseek-r1t2-chimera:free")
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

if not OPENROUTER_API_KEY:
    raise EnvironmentError("OPENROUTER_API_KEY not set. Export it before running.")

def get_openrouter_client():
    return OpenAI(base_url="https://openrouter.ai/api/v1", api_key=OPENROUTER_API_KEY)

def now_iso():
    return datetime.utcnow().isoformat() + "Z"

def safe_get(d, *keys, default=None):
    cur = d
    for k in keys:
        if not isinstance(cur, dict):
            return default
        cur = cur.get(k, default)
    return cur
