#!/usr/bin/env node
/**
 * fetch-composers.js
 *
 * Reads data/composer-list.json (the seed list of composer names + DeepSID
 * paths) and fetches, for each one:
 *   - their profile (bio, country, dates, thumbnail, group logos...)
 *   - their folder (every SID file they have in HVSC, with per-file metadata
 *     including which player/editor routine each file uses)
 *
 * Results are cached to data/composers/<slug>.json — one file per composer,
 * containing { name, path, profile, folder, fetchedAt }.
 *
 * Safely interruptible: re-running skips composers already cached unless
 * you pass --refresh.
 *
 * Usage:
 *   node scripts/fetch-composers.js              # fetch only missing
 *   node scripts/fetch-composers.js --refresh     # re-fetch everything
 *   node scripts/fetch-composers.js --only "DRAX,Rob Hubbard"
 */

const path = require('path');
const client = require('./lib/deepsid-client');
const { slugify, readJSON, writeJSON } = require('./lib/cache');

const ROOT = path.join(__dirname, '..');
const SEED_PATH = path.join(ROOT, 'data', 'composer-list.json');
const OUT_DIR = path.join(ROOT, 'data', 'composers');

async function main() {
  const args = process.argv.slice(2);
  const refresh = args.includes('--refresh');
  const onlyArg = args.find((a) => a.startsWith('--only'));
  const onlyNames = onlyArg
    ? args[args.indexOf(onlyArg) + 1]?.split(',').map((s) => s.trim().toLowerCase())
    : null;

  const seed = readJSON(SEED_PATH);
  if (!seed) {
    console.error(`Seed file not found: ${SEED_PATH}`);
    console.error('Create it first, or run scripts/build-seed-from-hvsc.js');
    process.exit(1);
  }

  const list = onlyNames
    ? seed.filter((c) => onlyNames.includes(c.name.toLowerCase()))
    : seed;

  console.log(`Fetching ${list.length} composers from DeepSID...`);
  console.log(`(rate-limited to 1 request per ${client.RATE_LIMIT_MS}ms, be patient)\n`);

  let ok = 0, skipped = 0, failed = 0;

  for (const composer of list) {
    const slug = slugify(composer.name);
    const cachePath = path.join(OUT_DIR, `${slug}.json`);

    if (!refresh && readJSON(cachePath)) {
      console.log(`  · ${composer.name} (cached, skipping)`);
      skipped++;
      continue;
    }

    try {
      process.stdout.write(`  → ${composer.name} ... `);
      const [profile, folder] = await Promise.all([
        client.getProfile(composer.path).catch((e) => ({ _error: e.message })),
        client.getFolder(composer.path).catch((e) => ({ _error: e.message })),
      ]);
      writeJSON(cachePath, {
        name: composer.name,
        path: composer.path,
        profile,
        folder,
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
  if (failed > 0) {
    console.log('Re-run the same command to retry failed ones (they were not cached).');
  }
}

main().catch((e) => {
  console.error('Fatal error:', e);
  process.exit(1);
});
