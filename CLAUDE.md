# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies (first time)
npm run dev       # local dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

> If `npm install` fails with `EACCES`, run `sudo chown -R $(id -u):$(id -g) ~/.npm` first.

## Architecture

Single-page personal portfolio — **Vite + React**, no routing, no state management library.

### Entry points
- `index.html` → `src/main.jsx` → `src/App.jsx`
- Styles: `src/index.css` (global reset + CSS custom properties) and `src/App.css` (all component styles)

### Layout

The site is a single centered card (`max-width: 760px`) floating on a dark background (`#0d1117`). It has two parts:

1. **Card face** — a `450px`-tall split: info on the left, profile photo on the right. On mobile (`≤600px`) it switches to `flex-direction: column-reverse` so the photo sits on top and info below, both vertically centered on screen.

2. **Collapsible drawer** — a tab at the bottom of the card labeled "About & Skills". Clicking it animates open (CSS `grid-template-rows: 0fr → 1fr` trick) to reveal a bio, client list, and skill tags.

### Key data in `App.jsx`
- `LINKS` — array of `{ label, href, icon }` for the 6 social icon buttons (GitHub, Behance, Phone, Email, X, WhatsApp). Icons are inline SVG.
- `SKILLS` — array of skill tag strings shown in the drawer.
- `CLIENTS` — array of notable client names shown in the drawer.

### CSS variables (`src/index.css`)
| Variable | Value | Used for |
|---|---|---|
| `--accent` | `#00e5a0` | Mint green accent color |
| `--accent-rgb` | `0, 229, 160` | Same, for `rgba()` usage |
| `--text` | `#f0ede8` | Off-white text |
| `--text-rgb` | `240, 237, 232` | Same, for `rgba()` usage |
| `--bg` | `#0d1117` | Page background |
| `--font` | Space Grotesk | Body font |
| `--mono` | Space Mono | Eyebrow / label font |

Fonts are loaded via Google Fonts `@import` in `index.css`.

### Profile photo
Served from `public/profile_650.jpg` → available at `/profile_650.jpg` at runtime.

### Deployment
Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and deploys `dist/` to GitHub Pages. `public/CNAME` contains `taftera.dev` so the custom domain is preserved after every deploy.

**First-time GitHub Pages setup:** repo Settings → Pages → Source → **GitHub Actions**.
