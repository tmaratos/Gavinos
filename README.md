# Gavino's Pizzeria — Website

Mobile-first redesign of [gavinospizzeria.com](http://www.gavinospizzeria.com/). Brand colors, logo, menu PDFs, and photos are preserved.

## Local preview

```bash
npm install
npm run dev
```

Open **http://localhost:5173/**

Preview exactly how GitHub Pages will look:

```bash
npm run preview:pages
```

Open **http://localhost:4173/Gavinos/**

## Styles (where the CSS lives)

There is no `stylings.css`. Styles are in:

- `src/css/main.css` — site layout, header, footer, mobile
- `src/css/menu.css` — menu page
- `src/css/employment.css` — job application
- `src/css/chalkboard.css` — homepage board

Vite bundles these into `dist/assets/*.css` when you build. **Do not deploy the repo root to the web** — only the built `dist/` folder.

## GitHub Pages (preview URL)

**Live preview:** https://tmaratos.github.io/Gavinos/

### One-time setup in GitHub

1. Open **Settings → Pages**
2. Under **Build and deployment → Source**, select **GitHub Actions** (not “Deploy from a branch”)
3. Push to `main` — the **Publish site** workflow builds and deploys automatically

If the site looks like plain black text, Pages is still serving source files from the repo root. Switch the source to **GitHub Actions** and re-run the workflow from the **Actions** tab.

### Production domain

When ready to replace the live site, point **gavinospizzeria.com** DNS at your host and deploy the `dist/` folder (or connect the custom domain in GitHub Pages settings).

## Content updates

| What | File |
|------|------|
| Hours | `data/restaurant/restaurant-hours.json` |
| Phone, address, social | `data/restaurant/restaurant-info.json` |
| Menu PDF links | `data/menus/menu-pdfs.json` |
| PDF files | `assets/pdfs/menus/` |
| Logo & images | `assets/images/` |
| Job application email | `data/restaurant/restaurant-info.json` → `applicationsEmail` |

## Build for production

```bash
npm run build          # local / custom host (base /)
npm run build:pages    # GitHub Pages (base /Gavinos/)
```

Output is in `dist/`.
