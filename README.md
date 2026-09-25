# Swiper Gallery

A static gallery of [Swiper](https://swiperjs.com/) carousel and coverflow demos. Open `index.html` to browse the collection, search by id or title, and preview each example in desktop, tablet, or phone width.

Coverflow 009 searches photos through `/api/search`. The Pixabay key stays in the host environment as `PIXABAY_API_KEY` and is not written into the HTML.

## Run locally

Serve the repo root so relative asset paths resolve:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080). That server does not run `/api/search`.

For Coverflow 009 search, copy `.env.example` to `.env`, set `PIXABAY_API_KEY`, and run:

```bash
vercel dev
```

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

Most demos load Swiper from a CDN. Credits and source links are listed on the hub next to each demo.

## Deploy on Vercel

Import this repository and use these project settings:

| Setting | Value |
|---------|--------|
| Framework preset | Other |
| Root directory | Repository root |
| Build command | Empty |
| Output directory | Empty |
| Environment variable | `PIXABAY_API_KEY` |

Static HTML is served as-is. `api/search.js` runs as a serverless function. Do not choose Next.js, Vite, or Create React App. Those presets expect a `package.json` and a build, and this repo has neither.
