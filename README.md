# Editorial

Legacy static publication site for `Editorial`, served directly from GitHub Pages. The current publication is hosted at `https://aabhisheksiloya.com/editorial/`; every legacy page declares its matching current URL as canonical.

## Structure

- `index.html` is the public homepage.
- `essays/` contains published article pages.
- `assets/` holds shared site styling and supporting files.
- `docs/plans/` stores the design and implementation planning documents for this repo setup.

## Current pages

- Live site: `https://abhisheksiloiya.github.io/Editorial/`
- Homepage: `/`
- Travel essay: `/essays/the-future-of-travel-2026.html`
- First essay: `/essays/thirty-minutes-of-truth.html`

## Add a new essay

1. Add the new HTML file under `essays/`.
2. Keep the filename URL-friendly, for example `essays/new-essay-title.html`.
3. Add a matching card or link for it in `index.html`.
4. Push the change to the publishing branch so GitHub Pages can serve it.

## Publishing

This repository is intended to publish from GitHub Pages using:

- Branch: `main`
- Folder: `/ (root)`

The `.nojekyll` file is included so the site is served as plain static files without Jekyll processing.

Do not remove or change a canonical URL when editing a legacy page. New editorial publishing should happen in the primary website repository.
