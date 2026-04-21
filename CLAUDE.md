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

Single-page portfolio site — **Vite + React**, no routing, no state management library.

### Entry points
- `index.html` → `src/main.jsx` → `src/App.jsx`
- Styles: `src/index.css` (global reset + CSS custom properties) and `src/App.css` (all component styles)

### Scroll-driven color wave (`src/App.jsx`)
The core visual effect lives in the `useEffect` inside `App`. It works like this:

1. `SECTIONS` array at the top of the file defines `{ id, bg, accent }` for each section — these are the color stops.
2. On scroll, the viewport midpoint (`scrollY + innerHeight * 0.5`) is compared against cached section positions.
3. A `t` value (0→1) is computed for how far through the current section the midpoint is.
4. `lerpRgb` interpolates between the current and next section's `bg` and `accent` hex colors.
5. Results are applied directly to `pill.style.backgroundColor`, `pill.style.boxShadow`, and two CSS custom properties: `--accent` and `--accent-rgb`.

All accent-colored elements (dots, labels, tags, gradients, btn backgrounds) consume `var(--accent)` and `var(--accent-rgb)` from `:root`, so they update automatically without per-component JS.

**To change the color palette:** edit the `SECTIONS` array at the top of `App.jsx`. Each entry maps to a `<section id="...">` in the JSX below.

### Sections
All five sections are defined as plain functions at the bottom of `App.jsx` — `Hero`, `About`, `Experience`, `Skills`, `Contact`. They are not in separate files by design (single-page, no routing needed).

### Deployment
Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and deploys `dist/` to GitHub Pages via the Actions environment. `public/CNAME` contains `taftera.dev` so the custom domain is preserved after every deploy.

**First-time GitHub Pages setup:** repo Settings → Pages → Source → **GitHub Actions**.
