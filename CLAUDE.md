## Project context

Personal portfolio site for Ismael Romero, built with v0 (v0.app). Single-page Next.js app: profile header, experience list, project grid, contact section, over a static full-screen background.

## Commands

- `npm run dev` — start the dev server (Next.js)
- `npm run build` — production build
- `npm start` — run the production build
- `npm run lint` — run ESLint (`eslint .`)

No test suite is configured in this repo.

## Project structure

```
app/                      # Next.js App Router — layout, page, global styles
frontend/
  components/portfolio/   # The page's sections (header, experience, projects, contact)
  components/ui/          # Generic/reusable presentational pieces
  lib/                    # portfolio-data.ts — all site content lives here
public/
  images/                 # Photos (avatar)
  logos/                  # Company & social logos
  icons/                  # Favicons / apple touch icon
```

`app/` must stay at the repo root — Next.js only recognizes the App Router at the root `app/` or at `src/app/`, so it cannot be nested inside `frontend/`. Root config files (`package.json`, `next.config.mjs`, `tsconfig.json`, `postcss.config.mjs`, `components.json`) and `public/` must also stay at the root for the same reason. `next-env.d.ts` and `tsconfig.tsbuildinfo` are generated, not hand-edited.

## Architecture

- **App Router, single route.** `app/page.tsx` is the entire site — it composes `frontend/components/portfolio/*` sections in order (ProfileHeader → ExperienceList "Now" → ExperienceList "Previously" → ProjectGrid → ContactSection) inside a centered `max-w-5xl` column. There is no routing beyond this one page.
- **Content/code separation.** All editable content (name, roles, projects, contact info, social links) lives in `frontend/lib/portfolio-data.ts` as typed data (`SocialLink`, `RoleItem`, `Project`, `profile`, `nowRoles`, `previousRoles`, `projects`, `contact`). Components in `frontend/components/portfolio/` are presentation-only and read from this file — update content there, not in the components.
- **Media placeholders.** `Project.media` is optional — omit it to render a text-fallback card (the project title centered in the media frame), or set it to an image/video path to render real media. Real assets go in `/public` (photos under `/public/images`, logos under `/public/logos`, favicons under `/public/icons`) and are wired up by editing the paths in `portfolio-data.ts`.
- **Background layer.** `DiagonalLines` (`frontend/components/ui/diagonal-lines.tsx`) is an SVG of fanned cubic-bezier strokes with a radial gradient. It is rendered in `app/page.tsx` inside a `pointer-events-none`, `-z-10`, full-bleed (`w-screen left-1/2 -translate-x-1/2`) wrapper scoped to the top section, with negative top offsets that cancel the content wrapper's responsive top padding so the lines reach the true top of the page. A `maskImage` linear-gradient fades them out toward the bottom of that section.
- **Styling.** Tailwind v4 with CSS variables (`app/globals.css`), shadcn/ui conventions (`components.json`, style `base-nova`, base color `neutral`, no class prefix). Path alias `@/*` maps to `frontend/*` (`tsconfig.json`), so shadcn aliases `components`/`ui`/`lib`/`hooks` resolve under `frontend/`.
- **Theming.** Dark mode is forced via `className="dark bg-background"` on `<html>` in `app/layout.tsx`; `viewport.colorScheme` still declares `light dark` and favicon selection switches on `prefers-color-scheme`.
- **Analytics.** `@vercel/analytics` is mounted in `app/layout.tsx` but only rendered when `NODE_ENV === 'production'`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
