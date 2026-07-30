#!/usr/bin/env node
/**
 * Keeps README.md's documentation index honest, in both directions.
 *
 * Usage:  node scripts/dev/check-docs-index.js
 * Exits non-zero if anything fails, so it can gate a commit.
 *
 * WHY THIS EXISTS. README.md's architecture block is a hand-maintained index of
 * `docs/`. Twice now a doc has been added without updating it -- most recently
 * `docs/IMPLEMENTATION-NOTES.md` (17 KB, the second-largest file in docs/),
 * which was referenced 8 times from CLAUDE.md and from nowhere in README, so a
 * human entering through README could not discover it at all. Two audits filed
 * the same finding; fixing the instance never lowered the rate, because nothing
 * checked it.
 *
 * Two checks, opposite directions:
 *
 *   1. EVERY docs/*.md IS MENTIONED IN README.md. Deliberately "mentioned
 *      anywhere in README" rather than "listed inside the fenced tree" -- the
 *      tree is the right place and the failure message says so, but pinning the
 *      check to a fenced block means reordering the tree breaks the build, and
 *      a gate that fails on formatting is a gate people pass --no-verify.
 *
 *   2. EVERY docs/... PATH README MENTIONS ACTUALLY EXISTS. Catches the reverse
 *      drift -- a doc renamed or removed while README keeps pointing at it.
 *
 * Scope is top-level docs/*.md only. docs/legacy/ is deliberately excluded: it
 * is frozen historical material, described in README as a directory rather than
 * per-file. This check needs no fetched data (README.md + a directory listing),
 * so unlike gen-coverage.js / gen-sidm2-worklist.js it runs fine on a fresh
 * clone and in CI.
 */

const fs = require('fs');
const path = require('path');

const README = 'README.md';
const DOCS_DIR = 'docs';

function main() {
  for (const p of [README, DOCS_DIR]) {
    if (!fs.existsSync(p)) {
      console.error(`missing ${p} -- run from the repo root`);
      process.exit(1);
    }
  }

  const readme = fs.readFileSync(README, 'utf8');
  const docs = fs
    .readdirSync(DOCS_DIR)
    .filter((f) => f.endsWith('.md'))
    .sort();

  let failures = 0;

  // 1. Every docs/*.md is mentioned somewhere in README.
  const unlisted = docs.filter((f) => !readme.includes(f));
  for (const f of unlisted) {
    console.log(`FAIL  docs/${f} is not mentioned anywhere in ${README}`);
    failures++;
  }

  // 2. Every docs/... path README mentions actually exists.
  //    Matches `docs/NAME.md` in prose, links, and the fenced tree alike.
  const referenced = new Set(
    [...readme.matchAll(/docs\/([A-Za-z0-9._-]+\.md)/g)].map((m) => m[1])
  );
  const dangling = [...referenced].filter(
    (f) => !fs.existsSync(path.join(DOCS_DIR, f))
  );
  for (const f of dangling) {
    console.log(`FAIL  ${README} references docs/${f}, which does not exist`);
    failures++;
  }

  if (unlisted.length) {
    console.log(
      `\nAdd each unlisted file to ${README}'s architecture block (the "docs/" ` +
        `section), with a one-line description of what it is for. That block is ` +
        `the only index a human browsing the repo will see.`
    );
  }

  console.log(
    `\n${docs.length} docs/*.md checked, ${referenced.size} referenced from ` +
      `${README}, ${failures} failure(s)`
  );
  process.exit(failures ? 1 : 0);
}

main();
