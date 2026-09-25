# Swiper Gallery

A static gallery of [Swiper](https://swiperjs.com/) carousel and coverflow demos. Open `index.html` to browse the collection, search by id or title, and preview each example in desktop, tablet, or phone width.

**Live site:** deploy this folder on Vercel. The Pixabay key stays in the Vercel environment as `PIXABAY_API_KEY`.

## Run locally

Serve the repo root so relative asset paths resolve:

```bash
cd swiper-gallery
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080). That server does not run `/api/search`. Use `vercel dev` when you need Coverflow 009 search.

## Layout

| Path | Role |
|------|------|
| `index.html` | Gallery hub: demo list, search, and iframe preview |
| `demos/index_swiper_*.html` | Individual Swiper demos. Image paths are `../assets/swiper_*/`. |
| `assets/swiper_*/` | Images and media for each Swiper demo |
| `swiperjs-slider/` | Malaysia slider: its own `index.html`, `css/`, `js/`, and `img/` |
| `extra/` | Coverflow HTML demos that are not Swiper files |
| `extra/experiments/` | Other HTML experiments (glow, shader, keyboard, scroll, steps) |
| `api/search.js` | Vercel function. Calls Pixabay with `PIXABAY_API_KEY` and returns image URLs. |
| `react-coverflow-main/` | React source for the coverflow in `extra/Coverflow_009.html`. Kept for editing. |

Most demos load Swiper from a CDN. Credits and source links are listed on the hub next to each demo.

## Vercel

Deploy the repository root as a Vercel project. Static HTML is served as-is. Set `PIXABAY_API_KEY` in the project environment. Coverflow 009 calls `/api/search`. Copy `.env.example` to `.env` for local `vercel dev`.
