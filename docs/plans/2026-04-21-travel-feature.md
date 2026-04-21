# Travel Feature Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Publish `The Future of Travel 2026`, feature it on the `Editorial` homepage, keep existing pieces accessible through the archive, and fix any concrete readability issues found during verification.

**Architecture:** Reuse the current static HTML site structure. Add the new essay as a child page under `essays/`, update the homepage feature and archive content in `index.html`, and verify the result with browser screenshots plus focused readability checks before pushing to `main`.

**Tech Stack:** HTML, CSS, GitHub Pages, Playwright CLI tooling

---

### Task 1: Publish the new travel essay

**Files:**
- Create: `essays/the-future-of-travel-2026.html`
- Source: `/Users/abhisheksiloiya/Documents/Editorial/The Future of Travel 2026.html`

**Step 1: Write the failing verification target**

The new child-page path must not exist yet.

**Step 2: Run test to verify it fails**

Run:

```bash
test -f /tmp/editorial-repo/essays/the-future-of-travel-2026.html
```

Expected: non-zero exit status.

**Step 3: Write minimal implementation**

Copy the source file into:

```text
essays/the-future-of-travel-2026.html
```

**Step 4: Run test to verify it passes**

Run:

```bash
cmp -s "/Users/abhisheksiloiya/Documents/Editorial/The Future of Travel 2026.html" /tmp/editorial-repo/essays/the-future-of-travel-2026.html
```

Expected: zero exit status.

**Step 5: Commit**

```bash
git add essays/the-future-of-travel-2026.html
git commit -m "feat: publish travel essay"
```

### Task 2: Feature the new essay on the homepage and expand the archive

**Files:**
- Modify: `index.html`

**Step 1: Write the failing verification target**

The homepage currently features `Thirty Minutes of Truth` and does not list the travel essay.

**Step 2: Run test to verify it fails**

Run:

```bash
rg -n "The Future of Travel 2026|the-future-of-travel-2026" /tmp/editorial-repo/index.html
```

Expected: no matches.

**Step 3: Write minimal implementation**

Update `index.html` to:

- feature `The Future of Travel 2026` in the hero CTA and featured card
- keep `Thirty Minutes of Truth` as an archive entry
- add an archive entry for the travel essay
- preserve the overall structure and visual direction

**Step 4: Run test to verify it passes**

Run:

```bash
rg -n "The Future of Travel 2026|the-future-of-travel-2026|Thirty Minutes of Truth|thirty-minutes-of-truth" /tmp/editorial-repo/index.html
```

Expected: matches for both essays and both paths.

**Step 5: Commit**

```bash
git add index.html
git commit -m "feat: feature travel essay on homepage"
```

### Task 3: Run readability and accessibility checks, then apply focused fixes if needed

**Files:**
- Verify: `index.html`
- Verify: `assets/site.css`
- Verify: `essays/the-future-of-travel-2026.html`
- Modify if needed: `index.html`, `assets/site.css`

**Step 1: Start local server**

Run:

```bash
python3 -m http.server 8123
```

Expected: local server starts from repo root.

**Step 2: Capture desktop and mobile screenshots**

Run browser-based checks for:

- homepage desktop
- homepage mobile
- travel essay desktop
- travel essay mobile

Expected: screenshots captured successfully.

**Step 3: Identify concrete readability issues**

Look for:

- low-contrast text on cards or image overlays
- text too close to edges
- mobile text blocks that become hard to read
- any section where background choice reduces legibility

**Step 4: Write minimal fixes only if needed**

If issues are found, update only the necessary CSS or content wrappers to improve readability without redesigning the page.

**Step 5: Re-run verification and commit if changes were needed**

Run:

```bash
git add index.html assets/site.css
git commit -m "fix: improve homepage readability"
```

Only create this commit if Task 3 required code changes.

### Task 4: Push and verify the live site

**Files:**
- Verify: published GitHub Pages URLs

**Step 1: Push to main**

Run:

```bash
git push origin main
```

Expected: push succeeds.

**Step 2: Verify live URLs**

Check:

- homepage URL
- `/essays/the-future-of-travel-2026.html`

Expected: both return success and the homepage points at the new featured essay.

**Step 3: Commit only if docs need updating**

Update `README.md` only if the page listing needs a new entry, then commit it.
