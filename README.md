# taftera.dev

Personal portfolio — Vite + React, deployed to GitHub Pages.

## Local dev

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. GitHub Actions builds and deploys automatically.

**First-time setup:**
1. Go to repo **Settings → Pages**
2. Source: **GitHub Actions**
3. Save — the next push to `main` will deploy

**Custom domain (`taftera.dev`):**
- `public/CNAME` already contains `taftera.dev`
- Point your DNS `A` records to GitHub Pages IPs, or use a `CNAME` record pointing to `<username>.github.io`
