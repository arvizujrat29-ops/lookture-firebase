
# Lookture · Next.js + Supabase (Starter)

## Requisitos
- Node 18+
- Cuenta Supabase
- (Opcional) Vercel para deploy

## Pasos rápidos
1) `cp .env.example .env.local` y pega tus keys de Supabase.
2) En el dashboard de Supabase, SQL Editor → pega `supabase.sql` y ejecuta.
3) `npm i`
4) `npm run dev` → http://localhost:3000

## Deploy en Vercel
- Conecta el repo a Vercel
- Añade `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Deploy
