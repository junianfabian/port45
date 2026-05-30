# Junian Portfolio — Backend (FastAPI)

Python API for the contact form. Designed for **Render**.

## Local dev
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app:app --reload --port 8000
```

## Deploy to Render
1. Push this repo to GitHub.
2. On Render → **New → Web Service** → connect repo.
3. Root directory: `backend`
4. Build: `pip install -r requirements.txt`
5. Start: `uvicorn app:app --host 0.0.0.0 --port $PORT`
6. Env vars:
   - `FRONTEND_ORIGINS` — your Vercel URL (comma-separated for multiple)
   - Optional SMTP: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_TO`

Then set `VITE_API_URL=https://<your-render-app>.onrender.com` in Vercel.
