#!/usr/bin/env node
/**
 * import-sidid.js
 *
 * One-time import of SIDId's sidid.nfo (ships in DeepSID's offline bundle,
 * deepsid_dl/sidid.nfo) into data/sidid.json, so build-html.js can enrich
 * the "inferred" players — the hundreds of raw player tags DeepSID's own
 * curated database has no entry for — with real author/name/year/reference
 * and playback-technique comments. See scripts/lib/sidid.js for the format
 * and the latin1 encoding note.
 *
 * Like import-deepsid-dump.js this is a one-time, local import (not a live
 * fetch): safely re-runnable, and a clean no-op with a clear message if the
 * .nfo isn't present (it's part of the manually-unpacked, gitignored
 * deepsid_dl/ bundle — see CLAUDE.md "The DeepSID database export").
 *
 * Usage: node scripts/import-sidid.js
 */
const fs = require('fs');
const path = require('path');
const { parseSididNfo } = require('./lib/sidid');

const ROOT = path.join(__dirname, '..');
const NFO_PATH = path.join(ROOT, 'deepsid_dl', 'sidid.nfo');
const OUT_PATH = path.join(ROOT, 'data', 'sidid.json');

function main() {
  if (!fs.existsSync(NFO_PATH)) {
    console.log(`sidid.nfo not found at ${path.relative(ROOT, NFO_PATH)} — nothing to import.`);
    console.log('It ships inside DeepSID\'s offline bundle — see CLAUDE.md "The DeepSID database export".');
    return; // not an error: the bundle just isn't unpacked here
  }
  // ISO-8859-1, not UTF-8 (see lib/sidid.js and fetch-hvsc-docs.js).
  const text = fs.readFileSync(NFO_PATH).toString('latin1');
  const byTag = parseSididNfo(text);
  const values = Object.values(byTag);
  const out = {
    meta: {
      source: 'deepsid_dl/sidid.nfo (SIDId database)',
      entries: values.length,
      // parsedAt is a dated snapshot marker, same as the DeepSID dump's
      // meta.json — this is not a live-updating source.
      parsedAt: new Date().toISOString(),
    },
    byTag,
  };
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 2));

  const withAuthor = values.filter((e) => e.author).length;
  const withName = values.filter((e) => e.name).length;
  const withComment = values.filter((e) => e.comment).length;
  console.log(`Parsed ${values.length} SIDId entries → ${path.relative(ROOT, OUT_PATH)}`);
  console.log(`  with name: ${withName}, author: ${withAuthor}, technique comment: ${withComment}`);
}

main();
