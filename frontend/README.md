# Junian Portfolio — Frontend (Vite + React)

Pure Vite + React + Tailwind v4 SPA. **No Cloudflare / no SSR**. Deploy to **Vercel** in one click.

## Local dev
```bash
cd frontend
npm install   # or bun install / pnpm install
npm run dev
```

## Deploy to Vercel
1. Push the repo to GitHub.
2. Vercel → **New Project** → import repo.
3. **Root directory:** `frontend`
4. Framework preset: **Vite** (auto-detected)
5. Build command: `npm run build` · Output: `dist`
6. Env var: `VITE_API_URL=https://<your-render-app>.onrender.com`

That's it. The contact form posts to `${VITE_API_URL}/api/contact`. If the var is empty, it falls back to a local mock so the UI still works.
