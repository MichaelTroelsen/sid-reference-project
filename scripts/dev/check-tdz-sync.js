#!/usr/bin/env node
/**
 * Detect drift between `knowledge/players/*.md` and the copies ingested into the
 * `tdz-c64-knowledge` MCP server.
 *
 * Usage:
 *   node scripts/dev/check-tdz-sync.js <listing.txt>            # report drift
 *   node scripts/dev/check-tdz-sync.js <listing.txt> --check    # exit 1 on drift
 *   node scripts/dev/check-tdz-sync.js <listing.txt> --ids      # bare id list, one per line
 *
 * `<listing.txt>` is the saved output of TDZ's `list_docs` tool. This script has
 * no network or MCP access -- it is a pure comparator -- so the workflow is:
 *
 *   1. call `list_docs` (include_superseded: false) and save the output
 *   2. run this script against it
 *   3. re-ingest what it names, via `update_document` (NOT `add_document`, and
 *      NOT `add_documents_bulk` -- see the warnings below)
 *
 * WHY THIS EXISTS. CLAUDE.md says "re-ingest a card after editing it", and that
 * instruction quietly stopped being followed: a 2026-07-25 audit found 158 cards
 * whose TDZ copy predated their current content, some by two full batch rounds.
 * Nothing detected it, because nothing compared the two. TDZ is the access layer
 * a SIDM2 session actually searches, so a stale card there is a wrong answer
 * delivered confidently -- the worst failure mode this KB has.
 *
 * THREE TRAPS THIS SCRIPT ENCODES, all hit for real during that audit:
 *
 *   1. MATCH ON `Card ID`, NEVER ON TAGS. The convention is to tag cards
 *      `sid-player-kb` + the card id, but SIDM2 has independently ingested some
 *      of the same cards under its own tags (`sidm2`, `hubbard-family`, ...).
 *      A tag-filtered comparison reported `jeroen-kimmel` as MISSING when it was
 *      present all along, and the "fix" was an add_document that could have left
 *      two live copies of one card id.
 *
 *   2. A DATE DIFFERENCE IS NOT A CONTENT DIFFERENCE. Comparing git dates alone
 *      flagged 227 cards; only 158 had actually changed. Merge commits re-date a
 *      file whose content never moved, so every date-flagged card is confirmed
 *      here by diffing its content against the commit that was live at TDZ's
 *      index time. Reporting the 69 false positives would have meant 69
 *      pointless re-ingests and a gate nobody trusts.
 *
 *   3. TDZ'S COPY CAN LEGITIMATELY BE NEWER. Where SIDM2 authored the card,
 *      TDZ holds a version indexed *after* this repo's file last changed.
 *      Overwriting that with the older local card is a regression, not a sync,
 *      so those are reported separately as FOREIGN/NEWER and never as stale.
 *
 * DO NOT "FIX" DRIFT WITH `add_documents_bulk`. It applies one tag set to every
 * file (destroying the per-card id tags) and its add semantics risk a second
 * live copy per card. `update_document` supersedes the old version in place,
 * which is the only safe operation here.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CARDS = path.join('knowledge', 'players');

/** Parse TDZ list_docs output into card id -> { docId, indexed, title, tags }. */
function parseListing(txt) {
  const byCard = new Map();
  const dupes = [];
  for (const block of txt.split(/\n(?=- )/).slice(1)) {
    const cardId = (block.match(/Card ID:\s*(\S+)/) || [])[1];
    if (!cardId) continue;
    const rec = {
      docId: (block.match(/ID:\s*(\S+)/) || [])[1],
      indexed: (block.match(/Indexed:\s*(\S+)/) || [])[1],
      title: block.split('\n')[0].replace(/^-\s*/, '').trim(),
      tags: ((block.match(/Tags:\s*(.+)/) || [])[1] || '').trim(),
    };
    if (byCard.has(cardId)) dupes.push(cardId);
    else byCard.set(cardId, rec);
  }
  return { byCard, dupes };
}

/**
 * Last commit date per card file, INCLUDING merge commits (`-m`). Without -m,
 * `git log --name-only` lists no files for a merge, so a card whose content was
 * settled during conflict resolution reports its older pre-merge date and the
 * drift goes unnoticed.
 */
function lastModified() {
  const out = execSync('git log -m --name-only --pretty=format:%cI -- ' + CARDS, {
    maxBuffer: 4e8,
  }).toString();
  const last = new Map();
  let date = null;
  for (const line of out.split(/\r?\n/)) {
    if (!line.trim()) continue;
    if (/^\d{4}-\d{2}-\d{2}T/.test(line)) {
      date = line.trim();
      continue;
    }
    if (line.startsWith('knowledge/players/') && line.endsWith('.md')) {
      const f = line.split('/').pop();
      if (!last.has(f) || date > last.get(f)) last.set(f, date);
    }
  }
  return last;
}

// Two caches, because the naive version spawned 2 git processes per flagged card
// (~64s for a 158-card drift). Index timestamps are nearly all distinct, but they
// collapse onto far fewer *commits*, and one `git diff --name-only` per base
// yields the whole changed set for that base -- so the per-card question becomes
// a set lookup.
const baseCache = new Map(); // iso timestamp -> base commit sha
const changedCache = new Map(); // base sha -> Set(changed card filenames)

function baseCommitAt(isoWhen) {
  if (baseCache.has(isoWhen)) return baseCache.get(isoWhen);
  let base = '';
  try {
    base = execSync(`git rev-list -1 --before=${JSON.stringify(isoWhen)} HEAD`, {
      stdio: ['pipe', 'pipe', 'ignore'],
    })
      .toString()
      .trim();
  } catch {
    base = '';
  }
  baseCache.set(isoWhen, base);
  return base;
}

function changedSince(base) {
  if (changedCache.has(base)) return changedCache.get(base);
  const set = new Set();
  try {
    const out = execSync(`git diff --name-only ${base} HEAD -- ${JSON.stringify(CARDS)}`, {
      stdio: ['pipe', 'pipe', 'ignore'],
      maxBuffer: 1e8,
    }).toString();
    for (const line of out.split(/\r?\n/)) {
      if (line.endsWith('.md')) set.add(line.split('/').pop());
    }
  } catch {
    // fall through with an empty set; caller treats a missing base as drift
  }
  changedCache.set(base, set);
  return set;
}

/** Did this card's content actually change between TDZ's index time and HEAD? */
function contentChangedSince(file, isoWhen) {
  const base = baseCommitAt(isoWhen);
  if (!base) return true; // no baseline -- report drift rather than hide it
  return changedSince(base).has(file);
}

function main() {
  const args = process.argv.slice(2);
  const check = args.includes('--check');
  const idsOnly = args.includes('--ids');
  const listingPath = args.find((a) => !a.startsWith('--'));

  if (!listingPath) {
    console.error('usage: node scripts/dev/check-tdz-sync.js <list_docs-output.txt> [--check] [--ids]');
    console.error('  <list_docs-output.txt> is the saved output of TDZ\'s list_docs tool.');
    process.exit(2);
  }
  for (const p of [listingPath, CARDS]) {
    if (!fs.existsSync(p)) {
      console.error(`missing ${p}`);
      process.exit(2);
    }
  }

  const { byCard, dupes } = parseListing(fs.readFileSync(listingPath, 'utf8'));
  const last = lastModified();
  const live = fs
    .readdirSync(CARDS)
    .filter((f) => f.endsWith('.md') && f !== '_template.md');

  const missing = [];
  const stale = [];
  const newerInTdz = [];

  for (const file of live) {
    const id = file.replace(/\.md$/, '');
    const tdz = byCard.get(id);
    if (!tdz || !tdz.indexed) {
      missing.push(id);
      continue;
    }
    const git = last.get(file);
    if (!git) continue; // untracked / brand new, nothing to compare against
    if (new Date(git) <= new Date(tdz.indexed)) continue; // TDZ same-or-newer
    if (!contentChangedSince(file, tdz.indexed)) continue; // merge/date noise only
    stale.push(id);
  }

  // TDZ card ids with no local file: SIDM2-authored cards sharing the corpus.
  const foreign = [...byCard.keys()].filter(
    (id) => !fs.existsSync(path.join(CARDS, `${id}.md`))
  );

  if (idsOnly) {
    [...stale, ...missing].forEach((id) => console.log(id));
    process.exit(stale.length + missing.length ? 1 : 0);
  }

  console.log(`Local cards: ${live.length}`);
  console.log(`TDZ docs carrying a Card ID: ${byCard.size}`);
  console.log('');
  console.log(`STALE (content changed since TDZ indexed it): ${stale.length}`);
  stale.forEach((id) => console.log(`  ${id}`));
  console.log(`MISSING (no live TDZ doc for this card id): ${missing.length}`);
  missing.forEach((id) => console.log(`  ${id}`));

  if (dupes.length) {
    console.log('');
    console.log(`DUPLICATE live card ids in TDZ: ${dupes.length} -- these need manual resolution`);
    [...new Set(dupes)].forEach((id) => console.log(`  ${id}`));
  }

  if (foreign.length) {
    console.log('');
    console.log(
      `FOREIGN (in TDZ, no local card file): ${foreign.length} -- ` +
        'not drift; cards another project ingested into the shared corpus.'
    );
    foreign.forEach((id) => console.log(`  ${id}  ${byCard.get(id).title}`));
  }

  const drift = stale.length + missing.length + dupes.length;
  if (check && drift) {
    console.error('');
    console.error(`STALE: ${drift} card(s) differ from TDZ.`);
    console.error('Re-ingest each with the tdz-c64-knowledge `update_document` tool');
    console.error('(card_id + filepath + tags ["sid-player-kb", "<card-id>"]).');
    console.error('Do NOT use add_document or add_documents_bulk -- see this script\'s header.');
    process.exit(1);
  }
  console.log('');
  console.log(drift ? `${drift} card(s) need re-ingesting.` : 'TDZ is in sync with knowledge/players/.');
}

main();
