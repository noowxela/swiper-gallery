# Agent notes — swiper-gallery

This repository is a **static gallery of Swiper.js carousels and coverflow sliders**. There is no bundler or npm app. Demos are standalone HTML files that load Swiper from a CDN. The only server code is `api/search.js`.

## Layout

| Path | Role |
|------|------|
| `index.html` | Gallery hub. Contains the `DEMOS` array, sidebar, search, and iframe preview. |
| `demos/index_swiper_<id>.html` | One Swiper demo per file. Ids match entries in `index.html` (e.g. `001`, `003v1`, `00a`). Asset paths are `../assets/swiper_<id>/`. |
| `assets/swiper_<id>/` | Local images and media for that Swiper demo. Prefer this over hotlinking. |
| `swiperjs-slider/` | Self-contained Malaysia slider (`index.html`, `css/`, `js/`, `img/`). Hub id `051`. |
| `extra/` | Coverflow HTML demos that are not `index_swiper_*.html`. |
| `extra/experiments/` | Non-carousel HTML experiments. `glowing003.css` stays next to `glowing003.html`. |
| `react-coverflow-main/` | React source for `extra/Coverflow_009.html`. Not part of the gallery list. |
| `api/search.js` | Vercel function for Coverflow 009. Reads `PIXABAY_API_KEY` and returns image URLs. |

## Conventions

- Keep demos **self-contained**. Change one `demos/index_swiper_*.html` (and its `assets/` folder) unless the hub also needs a new catalog entry.
- When adding a demo: create `demos/index_swiper_<id>.html`, put assets in `assets/swiper_<id>/`, reference them as `../assets/swiper_<id>/...`, and append an object to `DEMOS` in `index.html` (`id`, `file`, `title`, `tag`, `credit`). The `file` value is `demos/index_swiper_<id>.html`.
- Use **relative paths**. Only `index.html` stays in the repo root. Coverflow 009 is the exception: it calls `/api/search`.
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

The site is a Vercel project at the repository root. Static HTML stays in place. `PIXABAY_API_KEY` is a Vercel environment variable, never a value in HTML or client JavaScript. Coverflow 009 calls `/api/search`.
