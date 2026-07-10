#!/usr/bin/env node
/**
 * fetch-csdb.js
 *
 * Enriches already-fetched composers with CSDb scener data (bio, group
 * memberships, country) — a second, independent source that
 * cross-references DeepSID's own data. Only runs against composers
 * already cached under data/composers/ (run fetch-composers.js first),
 * and only for the ones whose profile has a non-zero `csdb_id` — that
 * field is DeepSID's own link to a CSDb Handle ID, so no name-matching
 * or search step is needed.
 *
 * Results are cached to data/csdb/<slug>.json, one file per composer.
 * Safely interruptible and re-runnable: skips composers already cached
 * unless you pass --refresh.
 *
 * Usage:
 *   node scripts/fetch-csdb.js              # fetch only missing
 *   node scripts/fetch-csdb.js --refresh     # re-fetch everything
 */

const fs = require('fs');
const path = require('path');
const client = require('./lib/csdb-client');
const { slugify, readJSON, writeJSON } = require('./lib/cache');

const ROOT = path.join(__dirname, '..');
const COMPOSERS_DIR = path.join(ROOT, 'data', 'composers');
const OUT_DIR = path.join(ROOT, 'data', 'csdb');

async function main() {
  const refresh = process.argv.slice(2).includes('--refresh');

  if (!fs.existsSync(COMPOSERS_DIR)) {
    console.error(`No cached composers found at ${COMPOSERS_DIR}`);
    console.error('Run node scripts/fetch-composers.js first.');
    process.exit(1);
  }

  const composerFiles = fs.readdirSync(COMPOSERS_DIR).filter((f) => f.endsWith('.json'));
  const targets = composerFiles
    .map((f) => readJSON(path.join(COMPOSERS_DIR, f)))
    .filter((c) => c && c.profile && c.profile.csdb_id);

  console.log(`Found ${targets.length} cached composers with a csdb_id (of ${composerFiles.length} total).`);
  console.log(`(rate-limited to 1 request per ${client.RATE_LIMIT_MS}ms, be patient)\n`);

  let ok = 0, skipped = 0, failed = 0;

  for (const composer of targets) {
    const slug = slugify(composer.name);
    const cachePath = path.join(OUT_DIR, `${slug}.json`);

    if (!refresh && readJSON(cachePath)) {
      console.log(`  · ${composer.name} (cached, skipping)`);
      skipped++;
      continue;
    }

    try {
      process.stdout.write(`  → ${composer.name} (csdb_id ${composer.profile.csdb_id}) ... `);
      const scener = await client.getScener(composer.profile.csdb_id).catch((e) => ({ _error: e.message }));
      writeJSON(cachePath, {
        name: composer.name,
        csdbId: composer.profile.csdb_id,
        scener,
        fetchedAt: new Date().toISOString(),
      });
      console.log('done');
      ok++;
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone. ${ok} fetched, ${skipped} skipped (cached), ${failed} failed.`);
}

main().catch((e) => {
  console.error('Fatal error:', e.message);
  process.exit(1);
});
