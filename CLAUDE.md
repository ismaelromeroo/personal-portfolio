## Project context

Personal portfolio site for Ismael Romero, built with v0 (v0.app) and structurally modeled on www.calebvergene.com — same layout/section structure, but with the user's own content and no copied images (placeholders are used until real assets are added). Single-page Next.js app: profile header, experience list, project grid, contact section, over a static full-screen background.

## Commands

- `npm run dev` — start the dev server (Next.js)
- `npm run build` — production build
- `npm start` — run the production build
- `npm run lint` — run ESLint (`eslint .`)

No test suite is configured in this repo.

## Architecture

- **App Router, single route.** `app/page.tsx` is the entire site — it composes `frontend/components/portfolio/*` sections in order (ProfileHeader → ExperienceList "Now" → ExperienceList "Previously" → ProjectGrid → ContactSection) inside a `max-w-3xl` centered column. There is no routing beyond this one page.
- **Content/code separation.** All editable content (name, roles, projects, contact info, social links) lives in `frontend/lib/portfolio-data.ts` as typed data (`SocialLink`, `RoleItem`, `Project`, `profile`, `nowRoles`, `previousRoles`, `projects`, `contact`). Components in `frontend/components/portfolio/` are presentation-only and read from this file — update content there, not in the components.
- **Media placeholders.** `Project.media` and `profile.avatar` default to `/placeholder.svg?...`. Components check for this placeholder path (see `ProjectCard`'s `hasMedia`) to decide whether to render an image or a fallback. Real images/logos go in `/public` (photos under `/public/images`, logos under `/public/logos`, favicons under `/public/icons`) and are wired up by editing the paths in `portfolio-data.ts`.
- **Background layer.** The page background is a fixed, full-viewport, `pointer-events-none`, `z-0` layer rendered behind the content (`z-10`), with a gradient vignette on top of it for text readability. Implemented via `DiagonalLines` (`frontend/components/ui/diagonal-lines.tsx`), a static CSS `repeating-linear-gradient` line texture modeled on calebvergene.com's background. Preserve the same fixed/z-0/vignette wrapping pattern in `app/page.tsx` if this is swapped out later.
- **Styling.** Tailwind v4 with CSS variables (`app/globals.css`), shadcn/ui conventions (`components.json`, style `base-nova`, base color `neutral`, no class prefix). Path alias `@/*` maps to `frontend/*` (`tsconfig.json`), and shadcn aliases point `components`/`ui`/`lib`/`hooks` under `@/` (i.e. into `frontend/`).
- **Theming.** Dark mode is forced via `className="dark bg-background"` on `<html>` in `app/layout.tsx`; `viewport.colorScheme` still declares `light dark` and favicon selection switches on `prefers-color-scheme`.
- **Analytics.** `@vercel/analytics` is mounted in `app/layout.tsx` but only rendered when `NODE_ENV === 'production'`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
