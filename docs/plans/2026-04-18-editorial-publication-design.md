# Editorial Publication Design

**Date:** 2026-04-18

## Goal

Create a public-facing static site for `Editorial` that acts as a publication homepage, with the existing `Thirty Minutes of Truth` piece published as a child page and room to add future essays over time.

## Constraints

- Preserve the contents of `Thirty Minutes of Truth.html` exactly as-is.
- Keep the hosting model simple and public.
- Use the GitHub repository as the source of truth.
- Structure the site so future editorial pages can be added under the homepage.

## Recommended Approach

Use a plain static site served directly by GitHub Pages from the repository root on the `main` branch.

This keeps the stack minimal:

- `index.html` becomes the publication homepage.
- `essays/thirty-minutes-of-truth.html` becomes the first child page.
- Shared assets can live under `assets/`.
- Future essays can be added as additional HTML files under `essays/` and linked from the homepage archive.

## Information Architecture

### Homepage

The homepage should be editorial-first rather than consultancy-first. It should establish `Editorial` as the publication identity and use advisory messaging as supporting context.

Planned sections:

- Masthead and publication framing
- Featured story linking to `Thirty Minutes of Truth`
- Short publication statement or editor's note
- Archive/listing area for current and future essays
- Low-key advisory/contact section near the bottom

### Essay Pages

Each essay should have its own direct URL and be reachable from the homepage archive.

The first essay will use:

- `/essays/thirty-minutes-of-truth.html`

The existing article content will not be edited. It will be copied into the publication structure so the original text, layout, and styling remain unchanged.

## Publishing Model

GitHub Pages should publish from the repository root on `main`.

Expected public behavior:

- `/` loads the `Editorial` homepage
- `/essays/thirty-minutes-of-truth.html` loads the preserved article page

## Repo Shape

Planned repository structure:

```text
/
  index.html
  README.md
  essays/
    thirty-minutes-of-truth.html
  assets/
    ...
  docs/
    plans/
      2026-04-18-editorial-publication-design.md
```

## Verification

Before calling the work complete:

- Open the homepage locally and verify the editorial layout.
- Open the essay page locally and verify the article content renders unchanged.
- Verify the homepage links into the essay page correctly.
- Confirm the repository is ready for GitHub Pages publishing from `main`.

## Out of Scope

- Rewriting or redesigning the `Thirty Minutes of Truth` article itself
- Adding a CMS or static-site framework
- Multi-author workflows, search, tagging, or automation
