"""
Portfolio Backend – FastAPI + Resend
Deploy to Render:
  - Build command : pip install -r requirements.txt
  - Start command : uvicorn app:app --host 0.0.0.0 --port $PORT

Required environment variables on Render:
  RESEND_API_KEY   – your Resend API key
  MAIL_TO          – email address to receive contact messages
"""

import os
import requests
from typing import Optional
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

app = FastAPI(title="Portfolio API")

# CORS – allow your Vercel domain + local dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://ai-architect-kappa.vercel.app",
        "http://localhost:5173",
        "http://localhost:3000",
    ],
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

RESEND_API_KEY = os.environ.get("RESEND_API_KEY")
MAIL_TO = os.environ.get("MAIL_TO")


class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    subject: Optional[str] = Field(default="", max_length=200)
    message: str = Field(min_length=1, max_length=5000)


@app.get("/")
def root():
    return {"status": "ok", "service": "portfolio-api"}


@app.get("/api/health")
def health():
    return {"status": "healthy"}


@app.post("/api/contact")
def contact(msg: ContactMessage):
    if not RESEND_API_KEY or not MAIL_TO:
        print(f"[contact] {msg.name} <{msg.email}>: {msg.subject}\n{msg.message}")
        return {
            "success": True,
            "delivered": False,
            "message": "RESEND_API_KEY au MAIL_TO haijawekwa; ujumbe umehifadhiwa tu.",
        }

    try:
        response = requests.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {RESEND_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "from": "onboarding@resend.dev",
                "to": MAIL_TO,
                "reply_to": msg.email,
                "subject": f"Portfolio Contact: {msg.subject or 'New message'} — {msg.name}",
                "text": (
                    f"Jina: {msg.name}\n"
                    f"Barua pepe: {msg.email}\n"
                    f"Kichwa: {msg.subject}\n\n"
                    f"Ujumbe:\n{msg.message}"
                ),
            },
        )

        if response.status_code == 200:
            return {"success": True, "delivered": True, "message": "Email imetumwa!"}
        else:
            print(f"Resend error: {response.text}")
            raise HTTPException(status_code=502, detail="Imeshindwa kutuma email.")

    except HTTPException:
        raise
    except Exception as e:
        print(f"Kosa: {e}")
        raise HTTPException(status_code=502, detail=f"Imeshindwa kutuma email: {e}")
