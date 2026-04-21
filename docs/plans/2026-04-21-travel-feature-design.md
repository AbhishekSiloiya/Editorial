# Travel Feature Design

**Date:** 2026-04-21

## Goal

Add `The Future of Travel 2026` to the `Editorial` publication site, promote it to the featured homepage essay, preserve the current landing page structure, and validate that the homepage and article content remain readable against their backgrounds.

## Constraints

- Keep the existing homepage structure largely intact.
- Publish the new article as a child page under `essays/`.
- Make the new article the featured essay on the homepage.
- Keep `Thirty Minutes of Truth` published in the archive.
- Limit design changes to concrete readability and accessibility issues found during verification.

## Recommended Approach

Use the existing static site structure and perform a content-forward update rather than a redesign.

- Copy the new source file into `essays/the-future-of-travel-2026.html`
- Update `index.html` so the hero and featured card point to the new essay
- Expand the archive so both essays are visible
- Run browser-based readability checks on desktop and mobile
- Apply only focused CSS/content adjustments where text contrast or layout harms readability

## Information Architecture

### Homepage

The homepage continues to act as the publication front page for `Editorial`.

Planned changes:

- Replace the current featured essay metadata with `The Future of Travel 2026`
- Keep the archive as the listing surface for all published pieces
- Add or convert archive cards so both essays are visible
- Preserve the publication note and advisory sections unless readability fixes require minor updates

### Essay Pages

The new essay will publish at:

- `/essays/the-future-of-travel-2026.html`

The existing essay remains at:

- `/essays/thirty-minutes-of-truth.html`

## Accessibility and Readability Scope

This pass is not a full redesign or WCAG audit. It is a targeted UI readability check focused on:

- text/background contrast that makes content difficult to read
- card/background combinations that wash out text
- mobile readability where large type or overlays reduce clarity
- any obvious visual issue on the homepage or new article page that blocks reading

Only concrete verified issues should be changed.

## Verification

Before completion:

- Verify the new essay file is published under `essays/`
- Verify the homepage links to the new featured essay
- Verify the archive links to both essays
- Verify desktop and mobile renders with browser screenshots
- Verify any readability fixes improve the affected areas without redesigning the landing page
