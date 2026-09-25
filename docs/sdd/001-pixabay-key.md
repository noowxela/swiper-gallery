# SDD: Hide the Pixabay API key

- **Repo:** `o000o_active/swiper`
- **Status:** `implemented`
- **Date:** 2026-09-25
- **Related:** [000-architecture.md](000-architecture.md)

## 1. Context / current architecture

`extra/Coverflow_009.html` is demo 060 in `index.html`. The search box calls Pixabay from the browser with a hardcoded key on line 118. GitHub Pages publishes that file, so anyone can read the key.

The rest of the gallery is static HTML and does not call Pixabay. GitHub Actions copies the repo to GitHub Pages.

## 2. Problem and non-goals

**Problem:** The Pixabay key must stay off any file the browser downloads, and search must still return photo URLs. The whole gallery should live on one host.

**Non-goals:**

- Do not rewrite static demos that do not call an API.
- Do not put the key in a client bundle or in HTML.
- Do not convert the gallery to a React app.

## 3. Questions asked and answers

| Question | Answer |
| --- | --- |
| Split Coverflow 009 onto Vercel and leave the gallery on GitHub Pages? | No. Restructure the whole repo onto one host. Keep static HTML that does not need a change. |
| Will you add your own Pixabay key as a Vercel environment variable named `PIXABAY_API_KEY`? | Yes. |

## 4. Proposed approach, pros / cons, rejected alternatives

**Approach:** Deploy this repo on Vercel as one project. Static HTML, CSS, and images stay where they are. Add `api/search.js`, a Vercel serverless function that reads `PIXABAY_API_KEY` and calls Pixabay. Change `extra/Coverflow_009.html` so search calls `/api/search?q=…` and the key is deleted from that file. The function accepts only a short search word and returns image URLs. GitHub Pages is no longer the publish target for this site.

**Pros:**

- One host. The hub and Coverflow 009 share the same origin, so the iframe keeps working.
- The browser never receives the key.
- Other demos stay static HTML.

**Cons / risks:**

- Anyone who can reach `/api/search` can spend the Pixabay quota. The function must reject empty or oversized queries.
- The key must be set in the Vercel project. It is not stored in the repo.
- The existing Pages workflow would publish the HTML again without the server route, so search on Pages would fail. That workflow should stop being the live deploy.

**Rejected alternatives:**

| Alternative | Why not |
| --- | --- |
| Next.js app only for Coverflow 009, gallery stays on Pages | Two hosts. You asked to restructure the whole repo. |
| Rewrite every demo in React | Those pages do not call an API. |
| Plain React or Vite with `VITE_` / `REACT_APP_` | The build copies the key into the file the browser downloads. |

## 5. Acceptance criteria and verification

- [x] `extra/Coverflow_009.html` and the rest of the static site contain no Pixabay key.
- [x] A call to `/api/search?q=cats` returns image URLs and does not echo the key. A missing or empty `q` is rejected.
- [x] A search in the browser fills the coverflow.
- [x] Demo 060 in the gallery hub still opens `extra/Coverflow_009.html`.
- [x] Other demo HTML files are unchanged.

## 6. Status history

| Date | Status | Note |
| --- | --- | --- |
| 2026-09-25 | draft | First draft: Coverflow 009 only, gallery stays on Pages |
| 2026-09-25 | draft | Revised: whole repo on Vercel, static HTML kept, key in `PIXABAY_API_KEY` |
| 2026-09-25 | implemented | `api/search.js` added, key removed from Coverflow 009, Pages workflow removed |
