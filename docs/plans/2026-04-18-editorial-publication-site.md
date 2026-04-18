# Editorial Publication Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a public static `Editorial` homepage in the GitHub repo, publish the existing `Thirty Minutes of Truth` article as a child page, and prepare the repository for GitHub Pages.

**Architecture:** Use plain static HTML served directly from the repository root on `main`. Keep the existing article HTML unchanged by copying it into `essays/thirty-minutes-of-truth.html`, add a new `index.html` as the publication homepage, and use a small shared stylesheet plus minimal repo docs for future additions.

**Tech Stack:** HTML, CSS, Git, GitHub Pages

---

### Task 1: Create the publication homepage

**Files:**
- Create: `index.html`
- Create: `assets/site.css`
- Reference: `docs/plans/2026-04-18-editorial-publication-design.md`

**Step 1: Write the failing verification target**

Define the homepage sections that must exist:

- `Editorial` masthead
- featured link to `/essays/thirty-minutes-of-truth.html`
- publication statement
- archive/listing section
- advisory/contact section

Expected manual failure before implementation:

- `index.html` does not exist
- the site root cannot act as the GitHub Pages homepage

**Step 2: Run the verification check to confirm the failure**

Run:

```bash
test -f index.html
```

Expected: non-zero exit status because the homepage file does not exist yet.

**Step 3: Write the minimal homepage implementation**

Create `index.html` with:

- semantic sections for masthead, hero/featured story, publication note, archive, and advisory footer
- a link pointing to `./essays/thirty-minutes-of-truth.html`
- a stylesheet link to `./assets/site.css`

Create `assets/site.css` with:

- a distinct editorial visual treatment
- responsive layout rules for desktop and mobile
- card styling for future archive entries
- restrained CTA styling for the advisory/contact section

**Step 4: Run the verification check to confirm the homepage exists**

Run:

```bash
test -f index.html && test -f assets/site.css
```

Expected: zero exit status.

**Step 5: Commit**

```bash
git add index.html assets/site.css
git commit -m "feat: add editorial homepage"
```

### Task 2: Publish the existing article as a child page

**Files:**
- Create: `essays/thirty-minutes-of-truth.html`
- Keep unchanged: `Thirty Minutes of Truth.html`

**Step 1: Write the failing verification target**

Define the requirement:

- `essays/thirty-minutes-of-truth.html` must exist
- its contents must exactly match `Thirty Minutes of Truth.html`

Expected manual failure before implementation:

- the `essays/` directory does not exist
- the child-page path is missing

**Step 2: Run the verification check to confirm the failure**

Run:

```bash
test -f essays/thirty-minutes-of-truth.html
```

Expected: non-zero exit status because the child page does not exist yet.

**Step 3: Write the minimal implementation**

- Create the `essays/` directory
- Copy `Thirty Minutes of Truth.html` to `essays/thirty-minutes-of-truth.html`
- Do not edit the copied HTML content

**Step 4: Run the verification checks to confirm the copy is correct**

Run:

```bash
cmp -s "Thirty Minutes of Truth.html" essays/thirty-minutes-of-truth.html
```

Expected: zero exit status, confirming the files are byte-for-byte identical.

**Step 5: Commit**

```bash
git add essays/thirty-minutes-of-truth.html
git commit -m "feat: publish first editorial essay"
```

### Task 3: Add lightweight repo documentation and Pages support files

**Files:**
- Create: `README.md`
- Create: `.nojekyll`

**Step 1: Write the failing verification target**

Define the requirement:

- the repo should explain the public-site structure and how to add future essays
- GitHub Pages should not run Jekyll processing

Expected manual failure before implementation:

- there is no README
- there is no `.nojekyll`

**Step 2: Run the verification check to confirm the failure**

Run:

```bash
test -f README.md && test -f .nojekyll
```

Expected: non-zero exit status.

**Step 3: Write the minimal implementation**

Create `README.md` documenting:

- site purpose
- homepage path
- essay path convention under `essays/`
- simple instructions for adding another essay page and linking it from the homepage

Create an empty `.nojekyll` file.

**Step 4: Run the verification checks**

Run:

```bash
test -f README.md && test -f .nojekyll
```

Expected: zero exit status.

**Step 5: Commit**

```bash
git add README.md .nojekyll
git commit -m "docs: add site publishing notes"
```

### Task 4: Verify local site behavior

**Files:**
- Verify: `index.html`
- Verify: `assets/site.css`
- Verify: `essays/thirty-minutes-of-truth.html`

**Step 1: Start a local static server**

Run:

```bash
python3 -m http.server 8000
```

Expected: server starts successfully from the repository root.

**Step 2: Verify the homepage manually**

Open:

- `http://localhost:8000/`

Expected:

- homepage renders
- featured article link is visible
- archive section is visible
- advisory section is visible

**Step 3: Verify the essay page manually**

Open:

- `http://localhost:8000/essays/thirty-minutes-of-truth.html`

Expected:

- article renders fully
- content matches the original page visually and structurally

**Step 4: Verify navigation**

From the homepage, click the featured article link.

Expected:

- the browser navigates correctly to `/essays/thirty-minutes-of-truth.html`

**Step 5: Commit if fixes were required**

```bash
git add index.html assets/site.css essays/thirty-minutes-of-truth.html README.md .nojekyll
git commit -m "fix: address local verification issues"
```

Only create this commit if verification exposed issues that required code changes.

### Task 5: Push and publish through GitHub Pages

**Files:**
- Verify: repository settings on GitHub

**Step 1: Push the branch**

Run:

```bash
git push origin main
```

Expected: local commits are pushed successfully.

**Step 2: Enable GitHub Pages**

If GitHub CLI is authenticated, run the appropriate repository settings command or API call to configure Pages to publish from:

- branch: `main`
- folder: `/ (root)`

If CLI auth is unavailable, enable this in the GitHub repo settings manually.

**Step 3: Verify the public site**

Open the GitHub Pages URL after deployment completes.

Expected:

- homepage loads at the public site URL
- the essay child page loads from `/essays/thirty-minutes-of-truth.html`

**Step 4: Document the resulting public URL**

Add the final Pages URL to `README.md` if desired after deployment is confirmed.

**Step 5: Commit only if README changed**

```bash
git add README.md
git commit -m "docs: add published site url"
```

Only create this commit if the README was updated with the final URL.
