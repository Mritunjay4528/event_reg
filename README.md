# E Labs Event Registration

## Backend

```
cd backend
npm install
cp .env.example .env   # fill in SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
npm run dev
```

Runs on `http://localhost:5000`. Uses the Supabase **service role** key (server-side only) to insert into your `matlab_event` table.

## Frontend

```
cd frontend
npm install
cp .env.example .env   # set VITE_API_URL if backend isn't on localhost:5000
npm run dev
```

Runs on `http://localhost:5173`.

## Where to get the Supabase keys

Supabase dashboard → Project Settings → API:
- `SUPABASE_URL` — Project URL
- `SUPABASE_SERVICE_ROLE_KEY` — service_role secret (keep this out of git/frontend)
