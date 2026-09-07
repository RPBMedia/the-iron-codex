-- The Iron Codex — user store (run once in the Supabase SQL editor).
--
-- SHARING AN EXISTING PROJECT: if you are running this inside a Supabase project
-- that already serves another app, rename the table here to `ironcodex_users`
-- (replace all four occurrences below) and set SUPABASE_USERS_TABLE to the same
-- value in the environment. Nothing else changes.
--
-- Replaces the JSON file that lived inside the deployment bundle, which could
-- never be written on a serverless host. Column names are snake_case and mapped
-- to the app's camelCase in server/user-store.js.

create table if not exists public.users (
  id            text primary key,
  email         text not null unique,
  password_hash text,
  password_salt text,
  display_name  text,
  avatar        text,
  google_sub    text,
  providers     jsonb not null default '[]'::jsonb,
  favorites     jsonb not null default '[]'::jsonb,
  created_at    timestamptz not null default now()
);

create index if not exists users_email_idx on public.users (lower(email));

-- Row Level Security on, with NO policies: the service-role key used by the
-- server bypasses RLS, while the anon/public key can read nothing. Accounts and
-- password hashes are therefore unreachable from the browser even if the
-- publishable key were exposed.
alter table public.users enable row level security;
