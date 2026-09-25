# Architecture — swiper gallery

- **Repo:** `o000o_active/swiper`
- **Status:** `implemented`
- **Date:** 2026-09-25

## What this is

A static gallery of HTML carousels, deployed as one Vercel project. There is no bundler or npm app. The only server code is `api/search.js`.

## Layout

| Path | Role |
| --- | --- |
| `index.html` | Gallery hub. `DEMOS` list, search, iframe preview |
| `demos/index_swiper_*.html` | One Swiper demo per file |
| `assets/swiper_*/` | Local images for those demos |
| `swiperjs-slider/` | Malaysia slider |
| `extra/Coverflow_009.html` | Coverflow with a live photo search. Calls `/api/search` |
| `api/search.js` | Vercel function. Reads `PIXABAY_API_KEY` and returns image URLs |

## Data flow

The browser loads the static HTML from Vercel. Demo 060 (`extra/Coverflow_009.html`) calls `/api/search?q=…` on the same host. That function calls Pixabay with `PIXABAY_API_KEY` and returns image URLs. The key is not in the HTML.

## Deploy

Vercel serves the repository root. Set `PIXABAY_API_KEY` in the project environment. Copy `.env.example` to `.env` for `vercel dev`.
