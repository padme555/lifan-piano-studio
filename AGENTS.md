# AGENTS.md

Overview of this project for AI agents and developers working on this codebase.

## Project Overview

A single-page bilingual (Chinese/English) website for the Li Fan Piano Studio: pianist and educator Li Fan's biography, a showcase of his "Young Pianists" studio students, concert history, and a contact form. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Language | TypeScript 5.9 (strict mode) |
| Forms | Netlify Forms |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── contact.html  # Static hidden form so Netlify registers the "contact" form at build time
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── ui/               # Radix-based primitives (badge, card, checkbox, hover-card, separator)
│   │   ├── avatar.tsx         # Placeholder gradient avatar (initial + music note) until real photos are supplied
│   │   ├── expandable-paragraphs.tsx  # "See more / See less" collapsible paragraph block
│   │   └── student-card.tsx  # Student profile card with bilingual toggle + expandable bio
│   ├── lib
│   │   ├── content.ts        # All page copy: teacher bio, 7 student profiles, concert history (zh + en)
│   │   └── utils.ts          # cn() class-merging helper
│   ├── routes
│   │   ├── __root.tsx        # Root HTML shell, page title/meta
│   │   └── index.tsx         # The entire site: header, hero, teacher, students, concerts, contact
│   ├── router.tsx
│   └── styles.css
├── netlify.toml
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Key Concepts

### Single-page layout

Everything lives in `src/routes/index.tsx` as anchored sections (`#teacher`, `#students`, `#concerts`, `#contact`) with a sticky nav that scrolls to each. There is intentionally only one route.

### Content is data, not markdown

All bilingual copy (teacher biography, the 7 student profiles, concert descriptions) lives in `src/lib/content.ts` as plain TypeScript objects with `Zh`/`En` suffixed fields. Edit that file to update copy — no CMS or content-collections layer is used.

### Placeholder photos

`src/components/avatar.tsx` renders a gradient placeholder with the person's initial in place of a real photograph, since no photos were supplied. Replace with real `<img>` tags (e.g. via Netlify Blobs or files in `public/`) once photos are available. Search for "Photo coming soon" / "照片待补充" to find where to swap them in.

### Student profiles are placeholders

The 7 student bios in `content.ts` are illustrative sample profiles (names, achievements, repertoire) written to match the style and structure of the teacher's real biography — they are **not** real students. Replace with actual student names, grades, achievements, and photos when available.

### Netlify Forms

The contact form at the bottom of the page posts to Netlify Forms. `public/contact.html` contains a hidden static form so Netlify's build-time scanner registers the `contact` form (TanStack Start renders the real form client-side, which Netlify can't detect on its own). Forms only work on a deployed site, not in local dev.

## Development Commands

```bash
npm run dev      # Start dev server (or: netlify dev)
npm run build    # Production build
```

## Conventions

- Components: PascalCase; utilities/hooks: camelCase
- Tailwind utility classes for styling; `cn()` helper for conditional class merging
- Bilingual fields follow the `xxxZh` / `xxxEn` naming pattern throughout `content.ts`
- TypeScript strict mode; `@/` path alias for `src/*`
