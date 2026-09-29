# Editorial canonical consolidation

Release date: 28 September 2026

## Outcome

The legacy GitHub Pages publication remains available, but now identifies the primary website as the authoritative source for search engines.

## Changes

- Added one canonical link to the legacy Editorial homepage.
- Added one-to-one canonical links to all eight legacy essay URLs.
- Mapped the additional root-level `Thirty Minutes of Truth.html` duplicate to the current essay URL.
- Added an automated test covering all 10 legacy HTML entry points and their exact canonical destinations.
- Updated the repository documentation to direct new publishing to the primary website.

## Canonical source

- Editorial homepage: `https://aabhisheksiloya.com/editorial/`
- Essays: `https://aabhisheksiloya.com/editorial/essays/<article>.html`

## Deployment

Publishing the change to the repository's GitHub Pages branch is required before the canonical signals are live.

## Verification

Run:

```sh
node --test tests/canonical-consolidation.test.mjs
```

After deployment, confirm each legacy URL returns HTTP 200 and exposes exactly one canonical link pointing to its matching URL on `aabhisheksiloya.com`.
