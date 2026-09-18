create extension if not exists pgcrypto;

create table if not exists public.website_accounts (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  password_hash text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.study_progress (
  user_id uuid primary key references public.website_accounts(id) on delete cascade,
  answers jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.website_accounts enable row level security;
alter table public.study_progress enable row level security;

drop policy if exists website_accounts_select on public.website_accounts;
drop policy if exists website_accounts_insert on public.website_accounts;
drop policy if exists website_accounts_update on public.website_accounts;
drop policy if exists study_progress_select on public.study_progress;
drop policy if exists study_progress_insert on public.study_progress;
drop policy if exists study_progress_update on public.study_progress;

create policy website_accounts_select
on public.website_accounts for select
using (true);

create policy website_accounts_insert
on public.website_accounts for insert
with check (true);

create policy website_accounts_update
on public.website_accounts for update
using (true)
with check (true);

create policy study_progress_select
on public.study_progress for select
using (true);

create policy study_progress_insert
on public.study_progress for insert
with check (true);

create policy study_progress_update
on public.study_progress for update
using (true)
with check (true);

notify pgrst, 'reload schema';
