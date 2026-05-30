# Junian Fabian Nchanila — Portfolio Monorepo

Two self-contained, separately-deployable apps:

| Folder      | Stack                          | Host                      |
| ----------- | ------------------------------ | ------------------------- |
| `frontend/` | Vite + React 19 + Tailwind v4  | **Vercel** (SPA, no SSR)  |
| `backend/`  | FastAPI (Python)               | **Render** (Web Service)  |

See each folder's `README.md` for deploy steps.

## Wiring
After both are deployed:
1. On **Render**, set `FRONTEND_ORIGINS` to your Vercel URL.
2. On **Vercel**, set `VITE_API_URL` to your Render URL.
3. Redeploy frontend so the env var takes effect.
