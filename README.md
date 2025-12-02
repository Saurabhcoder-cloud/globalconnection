# Global Connection B2B Marketplace

A Vite + React + TypeScript single-page application for a B2B marketplace experience (buyers, suppliers, admin, products, and supporting tools). The project uses Tailwind CSS and shadcn-ui components.

## Tech stack
- Vite + React + TypeScript
- Tailwind CSS
- Radix UI / shadcn components
- Supabase client for authentication/data helpers

## Prerequisites
- **Node.js >= 18** (Node 20 LTS recommended)
- **npm** (comes with Node.js)

## Environment variables
Copy `.env.example` to `.env` and fill in real values before building. These values are injected at **build time** by Vite.

```
VITE_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
VITE_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
PORT=4173   # optional, used by npm start / Docker runtime
```

## Local development
```
npm install
npm run dev
```
The dev server binds to all interfaces for remote access (default port 5173).

## Production build & start
```
cp .env.example .env   # update with real values
npm install            # keep dev dependencies; Vite preview relies on them
npm run build
npm start
```
- `npm start` serves the production build with `vite preview` on port `4173` (override with `PORT`).
- Ensure the same environment variables used at build time are available when the image or server is built.

## Docker
Build-time environment variables must be provided so Vite can inline them in the bundle. Example:
```
docker build \
  --build-arg VITE_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co \
  --build-arg VITE_PUBLIC_SUPABASE_ANON_KEY=your-anon-key \
  -t globalconnection .

docker run -p 4173:4173 --env PORT=4173 globalconnection
```
The container runs `npm start` and exposes port `4173`.

## PM2 (optional)
After building locally:
```
npm install
npm run build
pm2 start npm --name globalconnection -- start
```
PM2 will keep the preview server running in the background.

## Project structure
- `src/` – Application source (routes, components, hooks, lib helpers)
- `public/` – Static assets
- `tailwind.config.ts` – Tailwind configuration
- `tsconfig*.json` – TypeScript configuration

## Notes
- No secrets are committed; populate `.env` with real values before deploying.
- Supabase keys are required for authentication helpers in `src/lib/supabase.ts`.
