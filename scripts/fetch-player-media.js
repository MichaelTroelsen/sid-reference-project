#!/usr/bin/env node
/**
 * fetch-player-media.js
 *
 * Enriches players/editors with a screenshot image, sourced from CSDb's
 * `type=release` endpoint — the same csdb_id already used to link out to
 * CSDb (124 of 129 cached players have one). CSDb's release response
 * includes a `ScreenShot` field with a direct image URL. DeepSID's own
 * players page shows something similar, but there's no equivalent field
 * in DeepSID's own ?players API, and no reliable way to pull it from
 * DeepSID directly (that page is a JS-rendered SPA with no predictable
 * image URL — see docs/DEEPSID-API.md's players section and the git
 * history around 2026-07-10 for what was checked before landing on this).
 *
 * Cached to data/csdb/players.json, keyed by csdb_id: { screenshot, releaseName }.
 * Cache-aware: skips csdb_ids already cached unless --refresh. This is a
 * single combined file (unlike fetch-csdb.js's one-file-per-composer
 * layout) since there are only ~129 players — no need for per-item files.
 *
 * Usage:
 *   node scripts/fetch-player-media.js              # fetch only missing
 *   node scripts/fetch-player-media.js --refresh     # re-fetch everything
 */

const path = require('path');
const client = require('./lib/csdb-client');
const { readJSON, writeJSON } = require('./lib/cache');

const ROOT = path.join(__dirname, '..');
const PLAYERS_PATH = path.join(ROOT, 'data', 'players.json');
const OUT_PATH = path.join(ROOT, 'data', 'csdb', 'players.json');

async function main() {
  const refresh = process.argv.slice(2).includes('--refresh');

  const playersData = readJSON(PLAYERS_PATH);
  if (!playersData || !Array.isArray(playersData.players)) {
    console.error(`Players database not found: ${PLAYERS_PATH}`);
    console.error('Run node scripts/fetch-players.js first.');
    process.exit(1);
  }

  const targets = playersData.players.filter((p) => p.csdb_id);
  const out = (!refresh && readJSON(OUT_PATH)) || {};

  console.log(`Found ${targets.length} players with a csdb_id (of ${playersData.players.length} total).`);
  console.log(`(rate-limited to 1 request per ${client.RATE_LIMIT_MS}ms, be patient)\n`);

  let ok = 0, skipped = 0, failed = 0;

  for (const p of targets) {
    const key = String(p.csdb_id);
    if (!refresh && out[key]) {
      skipped++;
      continue;
    }

    try {
      process.stdout.write(`  → ${p.title} (csdb_id ${p.csdb_id}) ... `);
      const release = await client.getRelease(p.csdb_id, { depth: 1 }).catch((e) => ({ _error: e.message }));
      const rel = release && release.Release;
      out[key] = {
        screenshot: (rel && rel.ScreenShot) || null,
        releaseName: (rel && rel.Name) || null,
      };
      console.log(out[key].screenshot ? 'done' : 'done (no screenshot on CSDb)');
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
