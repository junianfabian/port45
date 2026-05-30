"""
Junian Portfolio – FastAPI backend.

Deploy to Render:
  - Build command : pip install -r requirements.txt
  - Start command : uvicorn app:app --host 0.0.0.0 --port $PORT
"""
import os
import smtplib
from email.message import EmailMessage
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

app = FastAPI(title="Junian Portfolio API")

# CORS – allow your Vercel domain(s). Set FRONTEND_ORIGINS as a comma list.
origins = os.getenv(
    "FRONTEND_ORIGINS",
    "http://localhost:5173,http://localhost:3000",
).split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in origins if o.strip()],
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    subject: Optional[str] = Field(default="", max_length=200)
    message: str = Field(min_length=1, max_length=5000)


@app.get("/")
def root():
    return {"status": "ok", "service": "junian-portfolio-api"}


@app.get("/api/health")
def health():
    return {"status": "healthy"}


@app.post("/api/contact")
def contact(msg: ContactMessage):
    """Receives a contact form submission and (optionally) emails it.

    Configure these env vars on Render to enable SMTP delivery:
      SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO
    Without them, the endpoint just logs the message and returns success.
    """
    host = os.getenv("SMTP_HOST")
    port = int(os.getenv("SMTP_PORT", "587"))
    user = os.getenv("SMTP_USER")
    password = os.getenv("SMTP_PASS")
    mail_to = os.getenv("MAIL_TO", "Junianfabian@gmail.com")

    if not (host and user and password):
        print(f"[contact] {msg.name} <{msg.email}>: {msg.subject}\n{msg.message}")
        return {"ok": True, "delivered": False, "note": "SMTP not configured; logged only."}

    try:
        email = EmailMessage()
        email["From"] = user
        email["To"] = mail_to
        email["Reply-To"] = msg.email
        email["Subject"] = f"[Portfolio] {msg.subject or 'New message'} — {msg.name}"
        email.set_content(
            f"From: {msg.name} <{msg.email}>\n"
            f"Subject: {msg.subject}\n\n"
            f"{msg.message}"
        )
        with smtplib.SMTP(host, port) as s:
            s.starttls()
            s.login(user, password)
            s.send_message(email)
    except Exception as e:  # noqa: BLE001
        raise HTTPException(status_code=502, detail=f"Mail delivery failed: {e}")

    return {"ok": True, "delivered": True}
