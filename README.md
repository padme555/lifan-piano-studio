# Li Fan Piano Studio

A bilingual (Chinese/English) single-page website for pianist and educator Li Fan — his biography, the "Young Pianists" studio student showcase, concert history, and a contact form.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router) on Vite 7
- Tailwind CSS 4 with Radix UI primitives
- Netlify Forms for the contact form
- Deployed on Netlify

## Structure

All page content (teacher biography, 7 student profiles, concert descriptions — in both Chinese and English) lives in `src/lib/content.ts`. The entire site is a single route at `src/routes/index.tsx`, made up of anchored sections (Teacher, Students, Concerts, Contact) with a sticky nav.

Photos are placeholder gradient avatars until real photos are provided — see `src/components/avatar.tsx`.

## Running locally

```bash
npm install
npm run dev
```

Or, to emulate the full Netlify platform (including Forms) locally:

```bash
netlify dev
```

Note: Netlify Forms submissions only work on a deployed site, not in local dev.

## Build

```bash
npm run build
```
