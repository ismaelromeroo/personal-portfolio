## Project context

Personal portfolio site for Ismael Romero, built with v0 (v0.app) and structurally modeled on www.calebvergene.com — same layout/section structure, but with the user's own content and no copied images (placeholders are used until real assets are added). Single-page Next.js app: profile header, experience list, project grid, contact section, over an animated full-screen background.

## Commands

- `pnpm dev` — start the dev server (Next.js)
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — run ESLint (`eslint .`)

No test suite is configured in this repo.

## Architecture

- **App Router, single route.** `app/page.tsx` is the entire site — it composes `components/portfolio/*` sections in order (ProfileHeader → ExperienceList "Now" → ExperienceList "Previously" → ProjectGrid → ContactSection) inside a `max-w-3xl` centered column. There is no routing beyond this one page.
- **Content/code separation.** All editable content (name, roles, projects, contact info, social links) lives in `lib/portfolio-data.ts` as typed data (`SocialLink`, `RoleItem`, `Project`, `profile`, `nowRoles`, `previousRoles`, `projects`, `contact`). Components in `components/portfolio/` are presentation-only and read from this file — update content there, not in the components.
- **Media placeholders.** `Project.media` and `profile.avatar` default to `/placeholder.svg?...`. Components check for this placeholder path (see `ProjectCard`'s `hasMedia`) to decide whether to render an image or a fallback. Real images/logos go in `/public` (logos under `/public/logos`) and are wired up by editing the paths in `portfolio-data.ts`.
- **Background layer.** The page background is a fixed, full-viewport, `pointer-events-none`, `z-0` layer rendered behind the content (`z-10`), with a gradient vignette on top of it for text readability. Currently implemented via `BackgroundPaths` (`components/ui/background-paths.tsx`, framer-motion animated SVG paths). The intended replacement is a `DottedSurface` component (Three.js-based dotted-grid effect) — not yet present in `components/ui/`. When implementing it, preserve the same fixed/z-0/vignette wrapping pattern used for `BackgroundPaths` in `app/page.tsx`.
- **Styling.** Tailwind v4 with CSS variables (`app/globals.css`), shadcn/ui conventions (`components.json`, style `base-nova`, base color `neutral`, no class prefix). Path alias `@/*` maps to the repo root (`tsconfig.json`), and shadcn aliases point `components`/`ui`/`lib`/`hooks` under `@/`.
- **Theming.** Dark mode is forced via `className="dark bg-background"` on `<html>` in `app/layout.tsx`; `viewport.colorScheme` still declares `light dark` and favicon selection switches on `prefers-color-scheme`.
- **Analytics.** `@vercel/analytics` is mounted in `app/layout.tsx` but only rendered when `NODE_ENV === 'production'`.
