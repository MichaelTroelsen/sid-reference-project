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

// DeepSID's `csdb_id` is *usually* a CSDb Handle (scener) ID, but for a few
// group-as-composer entries (e.g. "Prosonix", a Norwegian music group that
// slipped into the composer list) it's actually a GROUP id. CSDb's scener and
// group id namespaces overlap numerically, so getScener(groupId) silently
// returns an unrelated person (Handle 810 = "Peter Steiner", while group 810 =
// "Prosonix"). Detect that by name and fall back to getGroup — only replacing
// data when the group's own name matches the composer, so a legit scener whose
// DeepSID name merely differs from their handle is never misclassified.
const normalizeName = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
const scenerHandleName = (scener) =>
  scener && scener.Handle && typeof scener.Handle.Handle === 'string' ? scener.Handle.Handle : null;

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
      const record = {
        name: composer.name,
        csdbId: composer.profile.csdb_id,
        scener,
        fetchedAt: new Date().toISOString(),
      };

      // If the fetched Handle doesn't match this composer, the csdb_id may be a
      // GROUP id, not a scener id — probe the group and, only on a name match,
      // store the group instead of the mismatched person.
      const handleName = scenerHandleName(scener);
      if (!handleName || normalizeName(handleName) !== normalizeName(composer.name)) {
        const group = await client.getGroup(composer.profile.csdb_id).catch(() => null);
        const groupName = group && group.Group && group.Group.Name;
        if (groupName && normalizeName(groupName) === normalizeName(composer.name)) {
          delete record.scener; // was an unrelated person (namespace collision)
          record.group = group;
          record.isGroup = true;
          process.stdout.write('(group) ');
        }
      }

      writeJSON(cachePath, record);
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
