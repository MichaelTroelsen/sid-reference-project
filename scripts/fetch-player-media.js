#!/usr/bin/env node
/**
 * fetch-player-media.js
 *
 * Enriches players/editors with real CSDb release data, sourced from CSDb's
 * `type=release` endpoint. Two sets of release IDs are pulled:
 *
 *   1. Every curated player's own `csdb_id` (124 of 129 have one).
 *   2. Every SIDId `reference` that points at a CSDb release
 *      (data/sidid.json — see scripts/import-sidid.js), so the *inferred*
 *      players (which DeepSID's curated DB has no entry for) get the same
 *      release data where SIDId knew a release for their tag.
 *
 * From each release we keep:
 *   - screenshot / releaseName / website  (as before — the screenshot is
 *     shown on the detail page, the site feeds find-gaps.js's `site` gap)
 *   - type          the CSDb release type ("... C64 Tool")
 *   - releaseDate    ReleaseYear[-Month[-Day]], "0000"/0 treated as absent
 *   - releasedBy     the releasing group (or handle) name
 *   - credits        [{type, handle, handleId}] — WHO actually coded/made
 *                    it; the genuinely new, high-value field DeepSID's own
 *                    ?players API never had
 *   - download       the stable CSDb download link (+ a downloads count)
 *
 * DeepSID's own ?players API has none of this beyond what it already gave
 * (title/specs), and its players page is a JS-rendered SPA with no scrapable
 * equivalent (see docs/DEEPSID-API.md) — CSDb is the source.
 *
 * Cached to data/csdb/players.json, keyed by CSDb release ID. Cache-aware:
 * skips an ID already cached *in the current (richer) shape* unless
 * --refresh; entries cached by an older version of this script (which lack
 * the `credits` field) are re-fetched automatically to backfill.
 *
 * Usage:
 *   node scripts/fetch-player-media.js              # fetch missing / stale-shape
 *   node scripts/fetch-player-media.js --refresh     # re-fetch everything
 */

const path = require('path');
const client = require('./lib/csdb-client');
const { readJSON, writeJSON } = require('./lib/cache');

const ROOT = path.join(__dirname, '..');
const PLAYERS_PATH = path.join(ROOT, 'data', 'players.json');
const SIDID_PATH = path.join(ROOT, 'data', 'sidid.json');
const OUT_PATH = path.join(ROOT, 'data', 'csdb', 'players.json');

// CSDb uses "0"/0 for an unknown day/month/year component.
function part(v) {
  const s = String(v ?? '').trim();
  return s && s !== '0' && s !== '0000' ? s : null;
}

function firstOf(v) {
  return Array.isArray(v) ? v[0] : v;
}

// Project a CSDb `Release` object down to just the fields the player detail
// page shows — defensive about single-vs-array shapes (fast-xml-parser
// yields a bare object for a single child, an array for many).
function extractReleaseFields(rel) {
  if (!rel) {
    return { screenshot: null, releaseName: null, website: null, type: null, releaseDate: null, releasedBy: null, credits: [], download: null, downloads: null };
  }

  const y = part(rel.ReleaseYear);
  let releaseDate = null;
  if (y) {
    const m = part(rel.ReleaseMonth);
    const d = part(rel.ReleaseDay);
    releaseDate = y + (m ? `-${m.padStart(2, '0')}${d ? `-${d.padStart(2, '0')}` : ''}` : '');
  }

  let releasedBy = null;
  const rb = rel.ReleasedBy;
  if (rb) {
    const group = firstOf(rb.Group);
    const handle = firstOf(rb.Handle);
    releasedBy = (group && group.Name) || (handle && handle.Handle) || null;
  }

  const rawCredits = rel.Credits && rel.Credits.Credit;
  const creditArr = Array.isArray(rawCredits) ? rawCredits : rawCredits ? [rawCredits] : [];
  const credits = creditArr
    .map((c) => ({
      type: c.CreditType || null,
      handle: (c.Handle && c.Handle.Handle) || null,
      handleId: (c.Handle && c.Handle.ID) || null,
    }))
    .filter((c) => c.handle || c.handleId);

  let download = null;
  let downloads = null;
  const dl = firstOf(rel.DownloadLinks && rel.DownloadLinks.DownloadLink);
  if (dl) {
    download = dl.CounterLink || dl.Link || null;
    downloads = dl.Downloads != null ? Number(dl.Downloads) : null;
  }

  return {
    screenshot: rel.ScreenShot || null,
    releaseName: rel.Name || null,
    website: rel.Website || null,
    type: rel.Type || null,
    releaseDate,
    releasedBy,
    credits,
    download,
    downloads,
  };
}

// Gather every CSDb release ID to fetch: curated players' csdb_id plus any
// SIDId reference that points at a CSDb release. Returns [{id, label}].
function collectTargets(playersData) {
  const byId = new Map();
  for (const p of playersData.players) {
    if (p.csdb_id) byId.set(String(p.csdb_id), p.title);
  }
  const sidid = readJSON(SIDID_PATH);
  if (sidid && sidid.byTag) {
    for (const [tag, entry] of Object.entries(sidid.byTag)) {
      const m = entry.reference && String(entry.reference).match(/csdb\.dk\/release\/\?id=(\d+)/i);
      if (m && !byId.has(m[1])) byId.set(m[1], `${tag} (SIDId ref)`);
    }
  }
  return [...byId.entries()].map(([id, label]) => ({ id, label }));
}

async function main() {
  const refresh = process.argv.slice(2).includes('--refresh');

  const playersData = readJSON(PLAYERS_PATH);
  if (!playersData || !Array.isArray(playersData.players)) {
    console.error(`Players database not found: ${PLAYERS_PATH}`);
    console.error('Run node scripts/fetch-players.js first.');
    process.exit(1);
  }

  const targets = collectTargets(playersData);
  const out = (!refresh && readJSON(OUT_PATH)) || {};

  console.log(`${targets.length} CSDb release IDs to consider (curated players + SIDId references).`);
  console.log(`(rate-limited to 1 request per ${client.RATE_LIMIT_MS}ms, be patient)\n`);

  let ok = 0;
  let skipped = 0;
  let failed = 0;

  for (const { id, label } of targets) {
    // Re-fetch entries cached by an older shape (no `credits` key) so a plain
    // run backfills the new fields without needing --refresh.
    if (!refresh && out[id] && Object.prototype.hasOwnProperty.call(out[id], 'credits')) {
      skipped++;
      continue;
    }
    try {
      process.stdout.write(`  → ${label} (release ${id}) ... `);
      const release = await client.getRelease(id, { depth: 2 }).catch((e) => ({ _error: e.message }));
      const rel = release && release.Release;
      out[id] = extractReleaseFields(rel);
      console.log(`${out[id].credits.length} credits${out[id].screenshot ? ', screenshot' : ''}`);
      ok++;
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
      failed++;
    }
  }

  writeJSON(OUT_PATH, out);
  console.log(`\nDone. ${ok} fetched, ${skipped} skipped (cached), ${failed} failed.`);
}

main().catch((e) => {
  console.error('Fatal error:', e.message);
  process.exit(1);
});
