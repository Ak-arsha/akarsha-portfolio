# Akarsha Agarwal — Portfolio

A galaxy/aurora-themed portfolio built with Next.js 15, Tailwind CSS, Three.js
(via react-three-fiber), and Framer Motion. Move your cursor to leave a trail
of stars; click anywhere and they disperse.

## What's inside

- **3D starfield background** (`components/Starfield.tsx`) — three parallax
  layers of stars rendered with WebGL, drifting slowly and tilting toward
  your cursor.
- **Cursor star trail + click dispersion** (`components/CursorStars.tsx`) —
  a canvas overlay that spawns small four-point stars as you move the mouse
  and bursts them outward on click. Disabled automatically on touch devices
  and when the browser's reduced-motion setting is on.
- **Live backend data** — two serverless API routes fetch your real
  Codeforces rating and GitHub stats at request time (cached for an hour),
  shown in the "Live from the source" section.
- **Working contact form** — `/api/contact` validates input with Zod, applies
  basic in-memory rate limiting, includes a spam honeypot field, and sends
  email via [Resend](https://resend.com) once you add an API key.

## Run it locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
   Vercel auto-detects Next.js — no build settings to change.
3. Add environment variables under **Project → Settings → Environment
   Variables** (see `.env.example`):
   - `RESEND_API_KEY` — from resend.com, so the contact form can send email.
   - `CONTACT_TO_EMAIL` — the inbox that receives messages (e.g. your Gmail).
   - `CONTACT_FROM_EMAIL` — optional; a verified sender address once you've
     added a domain in Resend. Without this it falls back to Resend's shared
     test sender, which works but looks less polished.
   - `GITHUB_TOKEN` — optional; a classic personal access token with no
     scopes, just to raise the GitHub API's rate limit for the live-stats
     section.
4. Click **Deploy**. That's it — the app has no database and no other
   infrastructure to provision.

If you skip the Resend setup, the contact form still works end-to-end: it
validates input and returns success, and logs the message to the Vercel
function logs, so nothing is lost — you just won't get an email until you
add the API key.

## Updating your info

All resume content lives in one place: `lib/data.ts`. Edit that file to
update education, experience, projects, skills, publications, or
achievements — every section reads from it, so there's nothing else to keep
in sync.

To point the live-stats section at different accounts, change `HANDLE` in
`app/api/codeforces/route.ts` and `USERNAME` in `app/api/github/route.ts`.

## Notes

- A moderate/high-severity advisory exists in a version of `postcss` bundled
  *inside* `next` itself (not your direct dependency) — this affects
  essentially all current Next.js 14/15 apps and is a build-tool-only issue,
  not something exploitable in the deployed site. It'll clear once Next.js
  ships a release built against a patched postcss.
- The contact form's rate limiter is in-memory, so it resets whenever a
  serverless function cold-starts. For stricter, durable rate limiting, swap
  it for [Vercel KV](https://vercel.com/docs/storage/vercel-kv) or
  [Upstash Redis](https://upstash.com/).
