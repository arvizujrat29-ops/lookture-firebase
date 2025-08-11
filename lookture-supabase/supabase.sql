
create table if not exists jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  company text not null,
  area text,
  city text,
  video_url text,
  interview_model text check (interview_model in ('STAR','COMPETENCIAS','TECNICA')),
  created_at timestamptz default now(),
  status text default 'OPEN'
);

create table if not exists candidates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  name text,
  email text,
  area text,
  city text,
  video_url text,
  experience_years int,
  created_at timestamptz default now()
);

create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references jobs(id) on delete cascade,
  candidate_id uuid references candidates(id) on delete cascade,
  status text default 'NEW',
  scores jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

create table if not exists interviews (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references jobs(id) on delete cascade,
  candidate_id uuid references candidates(id) on delete cascade,
  slot timestamptz,
  mode text,
  notes text,
  created_at timestamptz default now()
);
