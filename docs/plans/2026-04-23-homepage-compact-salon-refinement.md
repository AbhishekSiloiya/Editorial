# Compact Salon Homepage Refinement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refine the luxury editorial salon homepage so the first screen is clearer, wording avoids "essays", the archive reads as clean carousel-style cards, and the host portrait becomes a sleek circular frame.

**Architecture:** Keep the current static homepage and Mayfair salon visual language. Patch `index.html` copy/structure and `assets/site.css` layout rules, then verify desktop and mobile renders before pushing to GitHub Pages.

**Tech Stack:** HTML, CSS, GitHub Pages, Playwright screenshot verification

---

### Task 1: Tighten homepage copy and remove "essays" language

**Files:**
- Modify: `index.html`

**Step 1: Write failing check**

Run:

```bash
rg -ni "essay|essays" /tmp/editorial-repo/index.html
```

Expected: matches exist.

**Step 2: Implement copy updates**

Replace homepage-facing instances of "essay/essays" with more suitable language such as "features", "briefs", "pieces", or "issues". Keep article URLs unchanged.

**Step 3: Verify**

Run:

```bash
! rg -ni "essay|essays" /tmp/editorial-repo/index.html
```

Expected: zero exit status.

### Task 2: Compress hero and improve first-screen clarity

**Files:**
- Modify: `index.html`
- Modify: `assets/site.css`

**Step 1: Identify current hero structure**

Review `.cover`, `.cover-grid`, `.cover-copy h1`, `.cover-panel`, and associated copy.

**Step 2: Implement compact hero**

- Shorten the headline
- Reduce hero minimum height
- Tighten top spacing
- Make the featured item more visible in the first viewport

**Step 3: Verify**

Run:

```bash
git -C /tmp/editorial-repo diff --check
```

Expected: no errors.

### Task 3: Convert archive into clean carousel-style cards

**Files:**
- Modify: `index.html`
- Modify: `assets/site.css`

**Step 1: Identify current archive markup**

Review `.archive-list`, `.archive-entry`, and children.

**Step 2: Implement card row**

- Rename section from "Collected pieces" to a cleaner label
- Use horizontal scroll / carousel-style card row
- Keep both current pieces linked
- Preserve mobile readability

**Step 3: Verify links**

Run:

```bash
rg -n "the-future-of-travel-2026|thirty-minutes-of-truth" /tmp/editorial-repo/index.html
```

Expected: both links remain.

### Task 4: Convert host section to circular portrait card

**Files:**
- Modify: `index.html`
- Modify: `assets/site.css`

**Step 1: Identify portrait markup and style**

Review `.host-section`, `.host-portrait-wrap`, and `.host-portrait`.

**Step 2: Implement circular portrait treatment**

- Use a circular frame for the portrait
- Reduce the dominance of the photo block
- Make the section feel like a sleek host card

**Step 3: Verify asset reference**

Run:

```bash
rg -n "abhi-portrait-mayfair.png" /tmp/editorial-repo/index.html
```

Expected: image reference remains.

### Task 5: Browser verification and publish

**Files:**
- Verify: `index.html`
- Verify: `assets/site.css`

**Step 1: Capture screenshots**

Use Playwright screenshots for desktop and mobile homepage.

**Step 2: Review**

Confirm:

- top section is clearly visible on first load
- no homepage-facing "essays" wording remains
- archive card row is cleaner
- circular portrait card looks sleek

**Step 3: Commit and push**

Run:

```bash
git add index.html assets/site.css docs/plans/2026-04-23-homepage-compact-salon-refinement.md
git commit -m "feat: refine compact salon homepage"
git push origin main
```

**Step 4: Verify live homepage**

Check the GitHub Pages homepage returns success and contains the updated content.
