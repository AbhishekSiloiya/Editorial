# Editorial

Static publication site for `Editorial`, designed to be served directly from GitHub Pages.

## Structure

- `index.html` is the public homepage.
- `essays/` contains published article pages.
- `assets/` holds shared site styling and supporting files.
- `docs/plans/` stores the design and implementation planning documents for this repo setup.

## Current pages

- Homepage: `/`
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
