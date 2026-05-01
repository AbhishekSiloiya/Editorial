# AI Agent Editorial Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Publish a witty, premium Bhuzen Brief editorial from the enterprise AI agents research and create a matching LinkedIn carousel package.

**Architecture:** Add one standalone static HTML article to the GitHub Pages editorial site, update the landing page to feature the new issue, and create a separate local carousel export package under the Editorial output folder. The article uses inline CSS consistent with the existing essay pages; the carousel uses a Playwright render script to export 1080x1350 PNG slides and a PDF.

**Tech Stack:** Static HTML/CSS, existing GitHub Pages repo, Playwright for carousel rendering, PIL for PDF packaging.

---

### Task 1: Site Context And Article Page

**Files:**
- Create: `/Users/abhisheksiloiya/Documents/Editorial-github-pages/essays/everyone-wants-an-ai-employee.html`
- Reference: `/Users/abhisheksiloiya/Documents/Editorial-github-pages/essays/the-founder-building-a-kinder-internet-for-children.html`

**Steps:**
1. Use the existing article visual conventions: fixed masthead, full-viewport hero, premium typography, gold/ivory/dark palette.
2. Write an original editorial around the approved title: “Everyone Wants an AI Employee. The Useful Ones Are Still Interns.”
3. Keep tone witty, human, and premium while grounding claims in the enterprise AI research.
4. Include a restrained sources section with primary links for the strongest evidence.

### Task 2: Landing Page Update

**Files:**
- Modify: `/Users/abhisheksiloiya/Documents/Editorial-github-pages/index.html`

**Steps:**
1. Update featured issue to Issue 04 and point the hero CTA/panel to the new article.
2. Add the new piece as the current feature in the curated list.
3. Move Hugh/Liaura to a previous feature card, preserving clickable tile behavior.

### Task 3: LinkedIn Carousel Package

**Files:**
- Create directory: `/Users/abhisheksiloiya/Documents/Editorial/output/ai-agent-interns-linkedin-carousel/`
- Create: `carousel.html`
- Create: `render-carousel.mjs`
- Create: `linkedin-post.md`

**Steps:**
1. Build a 7-slide 1080x1350 carousel with the same title and visual language.
2. Use playful-but-posh motifs: private club menu, calling cards, gold rules, evidence tags.
3. Export PNG slides via Playwright.
4. Package slides into a PDF for LinkedIn document upload.

### Task 4: Verification

**Commands:**
- Check article links and file existence with shell commands.
- Run Playwright render script for carousel exports.
- Use `sips` to verify all PNG dimensions are 1080x1350.
- Start a local static server and inspect with Playwright screenshots for desktop and mobile.
- Check git diff before final response.
