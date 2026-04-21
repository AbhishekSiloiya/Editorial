# Mayfair Salon Homepage Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the `Editorial` homepage into a luxury editorial salon with a Mayfair London visual language, integrate imagery including a closing portrait section, and preserve the current publication architecture.

**Architecture:** Rebuild the homepage as a more editorial, image-led composition while keeping the essay URLs and archive structure intact. Replace the existing homepage HTML and CSS with a darker, more luxurious system, then verify the result on desktop and mobile before pushing to `main`.

**Tech Stack:** HTML, CSS, static assets, GitHub Pages, Playwright CLI tooling

---

### Task 1: Rebuild the homepage structure for the salon layout

**Files:**
- Modify: `index.html`

**Step 1: Write the failing verification target**

The current homepage still uses the old soft-card layout and does not contain the new salon-specific sections.

**Step 2: Run test to verify it fails**

Run:

```bash
rg -n "salon|host|Mayfair|portrait|curated archive" /tmp/editorial-repo/index.html
```

Expected: no matches.

**Step 3: Write minimal implementation**

Rebuild `index.html` to include:

- a more editorial hero / cover
- a stronger featured essay section for `The Future of Travel 2026`
- a curated archive presentation for both essays
- a discreet editorial/advisory note
- a closing portrait-led host section

Keep the essay links unchanged.

**Step 4: Run test to verify it passes**

Run:

```bash
rg -n "The Future of Travel 2026|thirty-minutes-of-truth|the-future-of-travel-2026" /tmp/editorial-repo/index.html
```

Expected: matches for both essay titles and both essay paths.

**Step 5: Commit**

```bash
git add index.html
git commit -m "feat: redesign homepage structure"
```

### Task 2: Replace the homepage visual system with the Mayfair salon style

**Files:**
- Modify: `assets/site.css`

**Step 1: Write the failing verification target**

The current stylesheet still uses the earlier lighter card-based visual system.

**Step 2: Run test to verify it fails**

Run:

```bash
rg -n "#f6f0e5|page-shell|feature-card|archive-card" /tmp/editorial-repo/assets/site.css
```

Expected: matches showing the old system is still in place.

**Step 3: Write minimal implementation**

Replace or substantially rewrite the homepage stylesheet to introduce:

- darker palette and premium materials
- more editorial spacing and type rhythm
- stronger section composition
- responsive behavior for mobile
- portrait section treatment

**Step 4: Run test to verify it passes**

Run:

```bash
git -C /tmp/editorial-repo diff --check
```

Expected: no whitespace or patch errors.

**Step 5: Commit**

```bash
git add assets/site.css
git commit -m "feat: add mayfair salon styling"
```

### Task 3: Integrate imagery including the selected portrait

**Files:**
- Create: `assets/images/abhi-portrait-mayfair.png`
- Modify: `index.html`

**Step 1: Write the failing verification target**

The selected portrait is not yet part of the repo and the homepage does not reference it.

**Step 2: Run test to verify it fails**

Run:

```bash
test -f /tmp/editorial-repo/assets/images/abhi-portrait-mayfair.png
```

Expected: non-zero exit status.

**Step 3: Write minimal implementation**

- Create `assets/images/` if needed
- Copy `gemini-generated-image-04.png` into the repo as `assets/images/abhi-portrait-mayfair.png`
- Reference it in the closing portrait section of `index.html`

**Step 4: Run test to verify it passes**

Run:

```bash
test -f /tmp/editorial-repo/assets/images/abhi-portrait-mayfair.png && rg -n "abhi-portrait-mayfair.png" /tmp/editorial-repo/index.html
```

Expected: zero exit status with a matching homepage reference.

**Step 5: Commit**

```bash
git add assets/images/abhi-portrait-mayfair.png index.html
git commit -m "feat: add portrait section imagery"
```

### Task 4: Verify luxury tone, readability, and responsiveness

**Files:**
- Verify: `index.html`
- Verify: `assets/site.css`

**Step 1: Start local server**

Run:

```bash
python3 -m http.server 8124
```

Expected: local server starts from repo root.

**Step 2: Capture screenshots**

Capture:

- homepage desktop
- homepage mobile

Expected: screenshots generated successfully.

**Step 3: Review for issues**

Check for:

- premium rather than generic visual tone
- readable text against image/background layers
- balanced spacing on desktop and mobile
- portrait section feeling elegant rather than promotional

**Step 4: Apply minimal fixes only if needed**

Update `index.html` or `assets/site.css` only for concrete visual/readability problems discovered during review.

**Step 5: Commit if fixes were required**

```bash
git add index.html assets/site.css
git commit -m "fix: refine salon homepage presentation"
```

Only create this commit if Task 4 required changes.

### Task 5: Push and verify the live site

**Files:**
- Verify: published GitHub Pages homepage

**Step 1: Push to main**

Run:

```bash
git push origin main
```

Expected: push succeeds.

**Step 2: Verify live homepage**

Check the public homepage URL after deployment.

Expected:

- homepage loads successfully
- featured essay link works
- portrait section is visible

**Step 3: Update docs only if necessary**

Update `README.md` only if the homepage description needs revision.
