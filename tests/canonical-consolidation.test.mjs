import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const canonicalByFile = new Map([
  ["index.html", "https://aabhisheksiloya.com/editorial/"],
  ["Thirty Minutes of Truth.html", "https://aabhisheksiloya.com/editorial/essays/thirty-minutes-of-truth.html"],
  ["essays/everyone-wants-an-ai-employee.html", "https://aabhisheksiloya.com/editorial/essays/everyone-wants-an-ai-employee.html"],
  ["essays/know-own-grow-the-relationship-issue.html", "https://aabhisheksiloya.com/editorial/essays/know-own-grow-the-relationship-issue.html"],
  ["essays/the-founder-building-a-kinder-internet-for-children.html", "https://aabhisheksiloya.com/editorial/essays/the-founder-building-a-kinder-internet-for-children.html"],
  ["essays/the-future-of-travel-2026.html", "https://aabhisheksiloya.com/editorial/essays/the-future-of-travel-2026.html"],
  ["essays/the-middle-class-ladder-is-being-repriced.html", "https://aabhisheksiloya.com/editorial/essays/the-middle-class-ladder-is-being-repriced.html"],
  ["essays/the-new-household-economy.html", "https://aabhisheksiloya.com/editorial/essays/the-new-household-economy.html"],
  ["essays/thirty-minutes-of-truth.html", "https://aabhisheksiloya.com/editorial/essays/thirty-minutes-of-truth.html"],
  ["essays/who-gets-to-live-in-the-ai-economy.html", "https://aabhisheksiloya.com/editorial/essays/who-gets-to-live-in-the-ai-economy.html"],
]);

for (const [file, expectedCanonical] of canonicalByFile) {
  test(`${file} declares the consolidated canonical URL`, async () => {
    const html = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
    const canonicals = [...html.matchAll(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["'][^>]*>/gi)];

    assert.equal(canonicals.length, 1, "expected exactly one canonical link");
    assert.equal(canonicals[0][1], expectedCanonical);
  });
}
