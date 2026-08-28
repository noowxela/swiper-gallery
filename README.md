# Swiper Gallery

A static gallery of [Swiper](https://swiperjs.com/) carousel and coverflow demos. Open `index.html` to browse the collection, search by id or title, and preview each example in desktop, tablet, or phone width.

**Live site:** [https://noowxela.github.io/swiper-gallery/](https://noowxela.github.io/swiper-gallery/)

## Run locally

Serve the repo root so relative asset paths resolve:

```bash
cd swiper-gallery
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

## Layout

| Path | Role |
|------|------|
| `index.html` | Gallery hub: demo list, search, and iframe preview |
| `index_swiper_*.html` | Individual Swiper demos |
| `assets/swiper_*/` | Images and media for each demo |

Most demos load Swiper from a CDN. Credits and source links are listed on the hub next to each demo.

## GitHub Pages

Pushes to `main` deploy through [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

First time only, in the GitHub repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
