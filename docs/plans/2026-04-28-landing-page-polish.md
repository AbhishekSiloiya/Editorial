# Landing Page Polish Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Polish the Editorial landing page so the first viewport is more balanced, the featured article tile is fully clickable, supporting sections feel more premium, and article mastheads link back to the landing page.

**Architecture:** Keep the current static GitHub Pages architecture. Update `index.html` for semantic clickable article panels and masthead links, `assets/site.css` for layout and visual polish, and each essay HTML for return navigation where needed.

**Tech Stack:** Static HTML, CSS, GitHub Pages, Playwright CLI screenshots for visual verification.

---

### Task 1: Tighten Hero And Feature Panel

**Files:**
- Modify: `index.html`
- Modify: `assets/site.css`

**Steps:**
1. Convert the featured issue panel from `aside.cover-panel` into `a.cover-panel` so the whole tile is clickable.
2. Remove the visible path metadata from the tile and replace it with a cleaner issue/read-time treatment.
3. Reduce desktop hero vertical budget by tightening `.site-frame`, `.topbar`, `.cover`, `.cover-grid`, `.cover-copy h1`, and `.cover-panel`.
4. Keep primary CTAs visible above the fold on a 1440x900-ish viewport.

### Task 2: Polish Supporting Sections And Archive Cards

**Files:**
- Modify: `assets/site.css`

**Steps:**
1. Add restrained inner rules, subtle gradients, and better text sizing to `.curated-feature` and `.salon-note`.
2. Improve archive card hover/focus state, spacing, and featured/archive distinction.
3. Preserve the existing dark Mayfair editorial palette.

### Task 3: Add Detail Page Back Links

**Files:**
- Modify: `essays/the-founder-building-a-kinder-internet-for-children.html`
- Modify: `essays/thirty-minutes-of-truth.html`
- Modify: `essays/the-future-of-travel-2026.html`

**Steps:**
1. Make the Hugh/Liaura masthead logo link to `../`.
2. Make the Thirty Minutes masthead logo link to `../`.
3. Restore pointer events for the Travel masthead logo only and link it to `../`.

### Task 4: Verify And Publish

**Commands:**
- `ruby` link checker for local links/assets.
- `npx playwright screenshot` for desktop/mobile landing page.
- `npx playwright screenshot` for the Hugh/Liaura detail page.
- `git diff --check`
- `git commit`
- `git push origin main`

