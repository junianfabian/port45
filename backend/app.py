"""
Portfolio Backend — FastAPI + Resend
Hosted on Render.com
 
Endpoints:
  GET  /            -> health/info
  GET  /api/health  -> {"status": "ok"}
  POST /api/contact -> accepts contact form and sends email via Resend
 
Env vars (required for email):
  RESEND_API_KEY   -> your Resend API key
  MAIL_TO          -> recipient email address
"""
 
import os
import requests
from datetime import datetime, timezone
 
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr
 
app = FastAPI(title="Portfolio API")
 
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://port45.vercel.app",
        "http://localhost:5173",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 
RESEND_API_KEY = os.environ.get("RESEND_API_KEY")
MAIL_TO = os.environ.get("MAIL_TO")
 
 
# ---------- Models ----------
 
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str
 
 
# ---------- Routes ----------
 
@app.get("/")
def root():
    return {
        "name": "Portfolio API",
        "status": "online",
        "time": datetime.now(timezone.utc).isoformat(),
    }
 
 
@app.get("/api/health")
def health():
    return {"status": "ok"}
 
 
@app.post("/api/contact")
async def contact(form: ContactForm):
    name = form.name.strip()
    email = str(form.email).strip()
    message = form.message.strip()
 
    if not name or not email or not message:
        return JSONResponse(
            status_code=400,
            content={"success": False, "message": "Taarifa zote zinahitajika"},
        )
 
    print(
        f"[contact] {datetime.now(timezone.utc).isoformat()} | "
        f"{name} <{email}>\n{message}\n"
    )
 
    if not RESEND_API_KEY or not MAIL_TO:
        print("[contact] RESEND_API_KEY au MAIL_TO haijawekwa — email haitumwi")
        return JSONResponse(
            status_code=500,
            content={"success": False, "message": "Mfumo wa email haujasanidiwa"},
        )
 
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
                "subject": f"Portfolio Contact: {name}",
                "text": f"Jina: {name}\nBarua pepe: {email}\n\nUjumbe:\n{message}",
            },
            timeout=10,
        )
 
        if response.status_code in (200, 201):
            return {"success": True, "message": "Email imetumwa!"}
        else:
            print(f"[contact] Resend error: {response.text}")
            return JSONResponse(
                status_code=500,
                content={"success": False, "message": "Imeshindwa kutuma"},
            )
 
    except Exception as e:
        print(f"[contact] Kosa: {e}")
        return JSONResponse(
            status_code=500,
            content={"success": False, "message": "Imeshindwa kutuma email"},
        )
 
