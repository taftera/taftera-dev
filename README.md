# taftera.dev

Personal portfolio for Alex Turati Schnaider — Vite + React, deployed to GitHub Pages at [taftera.dev](https://taftera.dev).

## Local dev

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Deploy

Push to `main`. GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys automatically.

**First-time setup:**
1. Repo **Settings → Pages → Source → GitHub Actions**
2. Save — the next push to `main` will deploy

**Custom domain (`taftera.dev`):**
- `public/CNAME` already contains `taftera.dev`
- Point DNS `A` records to GitHub Pages IPs, or use a `CNAME` to `<username>.github.io`

## Structure

```
src/
  App.jsx       # All components: card face + collapsible drawer
  App.css       # All styles
  index.css     # Global reset, CSS variables, font import
  main.jsx      # React entry point
public/
  profile_650.jpg   # Profile photo
  CNAME             # Custom domain
```
