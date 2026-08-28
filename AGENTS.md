# Agent notes — swiper-gallery

This repository is a **static gallery of Swiper.js carousels and coverflow sliders**. There is no bundler, npm app, or backend. Demos are standalone HTML files that load Swiper from a CDN.

## Layout

| Path | Role |
|------|------|
| `index.html` | Gallery hub. Contains the `DEMOS` array, sidebar, search, and iframe preview. |
| `index_swiper_<id>.html` | One demo per file. Ids match entries in `index.html` (e.g. `001`, `003v1`, `00a`). |
| `assets/swiper_<id>/` | Local images and media for that demo. Prefer this over hotlinking. |
| `.github/workflows/deploy-pages.yml` | Deploys the static site to GitHub Pages on push to `main`. |

## Conventions

- Keep demos **self-contained**. Change one `index_swiper_*.html` (and its `assets/` folder) unless the hub also needs a new catalog entry.
- When adding a demo: create `index_swiper_<id>.html`, put assets in `assets/swiper_<id>/`, and append an object to `DEMOS` in `index.html` (`id`, `file`, `title`, `tag`, `credit`).
- Use **relative paths** (`./assets/...`, `index_swiper_001.html`) so GitHub Pages at `/swiper-gallery/` keeps working.
- Do not rewrite a demo onto a new Swiper major unless the user asks. Versions vary per file (3.x through 11.x).
- Coverflow / centered-slide layouts often need `centeredSlides: true`, `slidesPerView: "auto"`, and enough slides (or clones) for `loop`.
- Do not commit unless the user explicitly asks.

## Run locally

Serve the **repository root**:

```bash
python3 -m http.server 8080
```

Opening files via `file://` can break iframe previews and some assets.

## Deploy

GitHub Pages is published by GitHub Actions. After the first workflow run, the site is at `https://noowxela.github.io/swiper-gallery/`. The Pages source must be set to **GitHub Actions** in repo settings.
