#!/usr/bin/env node
/**
 * build-seed-from-hvsc.js
 *
 * Generates a full composer seed list by walking DeepSID's /MUSICIANS/
 * folder tree, instead of relying on the curated subset in
 * data/composer-list.json.
 *
 * DeepSID's ?folder= endpoint (see api/v1.php in the Chordian/deepsid
 * repo) matches subfolders with a SQL `LIKE '%<path>/%'`, which returns
 * every folder at *any* depth under the requested path in a single
 * response, not just direct children. So one ?folder=/MUSICIANS/ call
 * returns every letter directory (A/, B/, ... 0-9/), every composer
 * directory beneath them, and any deeper subfolders, all flattened into
 * one array — this only costs one request, not a per-letter crawl.
 *
 * Composer directories are identified as paths exactly two segments
 * below MUSICIANS/ (<Letter>/<ComposerFolder>/) — letter directories are
 * one segment, and rarer deeper subfolders (compilation groups etc) are
 * three or more; those are reported but not treated as composers.
 *
 * Display names are heuristically derived from the folder name:
 *   "Lastname_Firstname" -> "Firstname Lastname" (HVSC's usual convention)
 *   anything without an underscore is kept as-is (handle-style names)
 * This is best-effort — cross-check unusual-looking names against
 * DeepSID itself before trusting them.
 *
 * Writes to data/composer-list-full.json by default. Does NOT touch the
 * curated data/composer-list.json — review the output and merge entries
 * in by hand.
 *
 * Usage:
 *   node scripts/build-seed-from-hvsc.js
 *   node scripts/build-seed-from-hvsc.js --out data/composer-list-full.json
 */

const path = require('path');
const client = require('./lib/deepsid-client');
const { writeJSON } = require('./lib/cache');

const ROOT = path.join(__dirname, '..');
const DEFAULT_OUT = path.join(ROOT, 'data', 'composer-list-full.json');
const COLLECTION_PREFIX = '_High Voltage SID Collection/MUSICIANS/';

function deriveName(folderSegment) {
  const parts = folderSegment.split('_');
  if (parts.length === 2) {
    const [last, first] = parts;
    return `${first} ${last}`;
  }
  return folderSegment;
}

async function main() {
  const args = process.argv.slice(2);
  const outArg = args.find((a) => a.startsWith('--out'));
  const outPath = outArg
    ? path.resolve(ROOT, args[args.indexOf(outArg) + 1])
    : DEFAULT_OUT;

  console.log('Fetching the /MUSICIANS/ folder tree from DeepSID (single request)...');
  const response = await client.getSubfolders('/MUSICIANS/');

  const subfolderCount = response.subfolders ?? 0;
  console.log(`  DeepSID reports ${subfolderCount} folders under /MUSICIANS/ (all depths)\n`);

  const composers = [];
  const skippedDeep = [];

  for (let i = 0; i < subfolderCount; i++) {
    const entry = response[i];
    if (!entry || !entry.folder || !entry.folder.startsWith(COLLECTION_PREFIX)) continue;

    const segments = entry.folder.slice(COLLECTION_PREFIX.length).split('/').filter(Boolean);

    if (segments.length !== 2) {
      if (segments.length > 2) skippedDeep.push(entry.folder);
      continue; // skip letter directories (1 segment) and deeper subfolders
    }

    const [letter, folderName] = segments;
    composers.push({
      name: deriveName(folderName),
      path: `/MUSICIANS/${letter}/${folderName}/`,
    });
  }

  composers.sort((a, b) => a.name.localeCompare(b.name));
  writeJSON(outPath, composers);

  console.log(`Found ${composers.length} composer folders.`);
  if (skippedDeep.length) {
    console.log(`\nSkipped ${skippedDeep.length} deeper nested subfolders (not composer-level):`);
    skippedDeep.slice(0, 10).forEach((f) => console.log(`  - ${f}`));
    if (skippedDeep.length > 10) console.log(`  ... and ${skippedDeep.length - 10} more`);
  }
  console.log(`\nWrote ${path.relative(ROOT, outPath)}`);
  console.log('This does NOT replace data/composer-list.json — review and merge entries by hand.');
}

main().catch((e) => {
  console.error('Fatal error:', e.message);
  process.exit(1);
});
