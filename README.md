# The Iron Codex

A mobile-friendly React and Node.js history app focused on medieval Europe from 476 to 1453.

## Features

- Random history articles on the home page
- Chronological medieval events
- Medieval kingdoms, cities, and towns
- People profiles with biography sections
- Historical artifacts
- Responsive red, gold, black, and silver visual design

## Run Locally

```bash
npm run install:all
npm run build
npm start
```

Open [http://localhost:4000](http://localhost:4000).

## Authentication Environment

IronCodex supports email/password accounts, Google sign-in, signed HTTP-only session cookies, and a protected Favorites shell.

Copy `.env.example` to `.env` for local development:

```bash
cp .env.example .env
```

Required for production and recommended locally:

```bash
AUTH_SESSION_SECRET="replace-with-a-long-random-secret"
AUTH_BASE_URL="https://your-domain.example"
```

Optional:

```bash
GOOGLE_CLIENT_ID="your-google-oauth-client-id"
GOOGLE_CLIENT_SECRET="your-google-oauth-client-secret"
CORS_ORIGIN="https://your-domain.example"
AUTH_USERS_FILE="/absolute/path/to/users.json"
```

For Google OAuth, create a Google OAuth web client and add this authorized redirect URI:

```text
https://your-domain.example/api/auth/google/callback
```

For local development, use:

```text
http://localhost:4000/api/auth/google/callback
```

The local user store defaults to `server/data/users.json`, which is ignored by Git.
