#!/usr/bin/env node
/**
 * import-deepsid-dump.js
 *
 * DeepSID publishes a full database export for running local/offline
 * copies (github.com/Chordian/deepsid README, "Setting up for offline
 * use" / "Databases" sections). This project uses that same export as a
 * local data source — a one-time snapshot import, not a live fetch —
 * to route around the ongoing ?file=/?folder= outage and to cover far
 * more composers than the curated 56 (the dump has ~2083).
 *
 * Reads from deepsid_dl/DeepSID_Database/ (gitignored — not part of this
 * repo; download DeepSID_Database.zip per the README linked above and
 * unpack it there) and writes:
 *
 *   - data/composers/<slug>.json for every composer in the dump, in the
 *     exact shape fetch-composers.js already produces ({name, path,
 *     profile, folder, fetchedAt}), so build-html.js needs no special
 *     casing. Composers already cached from a live fetch keep their
 *     existing profile (it may be more current than this snapshot) but
 *     get their `folder` filled in from the dump if the live one is
 *     empty/erroring — which it currently always is, given the outage.
 *   - data/composer-list.json regenerated from the dump (all ~2083,
 *     superseding the old 56-composer curated seed).
 *   - data/deepsid-dump/meta.json — HVSC/CGSC version this snapshot is
 *     from, so it's clear this is a dated point-in-time import, not live.
 *
 * Usage:
 *   node scripts/import-deepsid-dump.js
 *   node scripts/import-deepsid-dump.js --dump-dir path/to/DeepSID_Database
 */

const fs = require('fs');
const path = require('path');
const { parseInserts } = require('./lib/sql-dump');
const { slugify, readJSON, writeJSON } = require('./lib/cache');

const ROOT = path.join(__dirname, '..');
const COMPOSERS_DIR = path.join(ROOT, 'data', 'composers');
const COMPOSER_LIST_PATH = path.join(ROOT, 'data', 'composer-list.json');
const DUMP_META_PATH = path.join(ROOT, 'data', 'deepsid-dump', 'meta.json');
const HVSC_PREFIX = '_High Voltage SID Collection/';

function argValue(flag, fallback) {
  const args = process.argv.slice(2);
  const idx = args.indexOf(flag);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : fallback;
}

function toProjectPath(dumpPath) {
  const stripped = dumpPath.startsWith(HVSC_PREFIX) ? dumpPath.slice(HVSC_PREFIX.length) : dumpPath;
  return `/${stripped.replace(/^\/+|\/+$/g, '')}/`;
}

/** Same Lastname_Firstname -> Firstname Lastname heuristic as build-seed-from-hvsc.js. */
function deriveNameFromPath(projectPath) {
  const segments = projectPath.split('/').filter(Boolean);
  const folderName = segments[segments.length - 1] || '';
  const parts = folderName.split('_');
  if (parts.length === 2) {
    const [last, first] = parts;
    return `${first} ${last}`;
  }
  return folderName;
}

function brandUrl(filename) {
  return filename ? `https://deepsid.chordian.net/images/brands/${filename}` : '';
}

function thumbnailUrl(dumpPath, localComposerImages) {
  const fn = dumpPath
    .replace(HVSC_PREFIX, '')
    .replace(/\//g, '_')
    .toLowerCase() + '.jpg';
  return localComposerImages.has(fn)
    ? `https://deepsid.chordian.net/images/composers/${fn}`
    : 'https://deepsid.chordian.net/images/composer.png';
}

function buildProfile(row, localComposerImages) {
  return {
    collection_path: row.fullname,
    focus1: row.focus1,
    focus2: row.focus2,
    full_name: row.name,
    short_name: row.shortname,
    handles: row.handles,
    short_handle: row.shorthandle,
    active: String(row.active || ''),
    date_birth: row.born,
    date_death: row.died,
    death_cause: row.cause,
    notable: row.notable,
    country: row.country,
    employment: row.employment,
    affiliation: row.affiliation,
    brand_light: brandUrl(row.brand),
    brand_dark: brandUrl(row.branddark),
    csdb_type: row.csdbtype,
    csdb_id: row.csdbid,
    thumbnail: thumbnailUrl(row.fullname, localComposerImages),
    image_source: row.imagesource,
  };
}

function buildFileList(fileRows) {
  return fileRows.map((f) => ({
    collection_path: f.fullname,
    name: f.name,
    author: f.author,
    player: f.player,
    player_type: f.playertype,
    subtunes: f.subtunes,
    hash: f.hash,
    csdb_id: f.csdbid,
  }));
}

function hasUsableFolder(composer) {
  const folder = composer.folder;
  if (!folder) return false;
  if (folder._error) return false;
  const entries = Array.isArray(folder) ? folder : Object.values(folder).filter((v) => v && typeof v === 'object' && v.name);
  return entries.length > 0;
}

async function main() {
  const dumpDir = argValue('--dump-dir', path.join(ROOT, 'deepsid_dl', 'DeepSID_Database'));
  const composersFile = path.join(dumpDir, 'composers.sql');
  const filesFile = path.join(dumpDir, 'hvsc_files.sql');

  if (!fs.existsSync(composersFile) || !fs.existsSync(filesFile)) {
    console.error(`Expected composers.sql and hvsc_files.sql under ${dumpDir}`);
    console.error('Download DeepSID_Database.zip per github.com/Chordian/deepsid\'s README and unpack it there, or pass --dump-dir.');
    process.exit(1);
  }

  console.log(`Reading dump from ${dumpDir} ...`);
  const composerRows = parseInserts(fs.readFileSync(composersFile, 'utf8'), 'composers');
  const fileRows = parseInserts(fs.readFileSync(filesFile, 'utf8'), 'hvsc_files');
  console.log(`  ${composerRows.length} composers, ${fileRows.length} files`);

  const localComposerImagesDir = path.join(ROOT, 'deepsid_dl', 'DeepSID_Images_Composers');
  const localComposerImages = new Set(
    fs.existsSync(localComposerImagesDir) ? fs.readdirSync(localComposerImagesDir) : []
  );

  const filesByFolder = new Map();
  for (const f of fileRows) {
    const folder = f.fullname.slice(0, f.fullname.lastIndexOf('/'));
    if (!filesByFolder.has(folder)) filesByFolder.set(folder, []);
    filesByFolder.get(folder).push(f);
  }

  fs.mkdirSync(COMPOSERS_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(DUMP_META_PATH), { recursive: true });

  const composerList = [];
  let created = 0, folderFilled = 0, keptAsIs = 0, skippedNonMusicians = 0;

  for (const row of composerRows) {
    // The dump's composers table also has rows for scene GROUPS
    // (_High Voltage SID Collection/GROUPS/...), Compute's Gazette SID
    // Collection composers, _SID Happens date folders, and a couple of
    // bare collection-root placeholder rows — none of those are HVSC
    // composers, none work via DeepSID's own API (CGSC/SID Happens are
    // explicitly unsupported there, see docs/DEEPSID-API.md), and groups
    // are a different entity type. Only keep real MUSICIANS/ entries.
    if (!row.fullname.startsWith(`${HVSC_PREFIX}MUSICIANS/`)) {
      skippedNonMusicians++;
      continue;
    }
    const projectPath = toProjectPath(row.fullname);
    // Path-derived name wins over the dump's own name/shortname fields —
    // those inconsistently hold a real name instead of a scene handle
    // (e.g. DRAX's `shortname` is "Thomas Mogensen", not "DRAX"). The
    // HVSC folder name is what every other part of this project already
    // treats as the canonical handle (composer-list.json, the live API,
    // build-seed-from-hvsc.js's same heuristic), so it's more reliable
    // here than a field whose meaning varies row to row. name/shortname
    // still end up in profile.full_name/profile.short_name — not lost,
    // just not used to pick the composer's primary identity.
    const name = deriveNameFromPath(projectPath);
    composerList.push({ name, path: projectPath });

    const slug = slugify(name);
    const cachePath = path.join(COMPOSERS_DIR, `${slug}.json`);
    const dumpFolder = buildFileList(filesByFolder.get(row.fullname) || []);

    const existing = readJSON(cachePath);
    if (existing) {
      if (!hasUsableFolder(existing) && dumpFolder.length) {
        existing.folder = dumpFolder;
        existing.folderSource = `deepsid-dump (HVSC snapshot)`;
        writeJSON(cachePath, existing);
        folderFilled++;
      } else {
        keptAsIs++;
      }
      continue;
    }

    writeJSON(cachePath, {
      name,
      path: projectPath,
      profile: buildProfile(row, localComposerImages),
      folder: dumpFolder,
      folderSource: dumpFolder.length ? 'deepsid-dump (HVSC snapshot)' : undefined,
      fetchedAt: null, // never live-fetched — sourced entirely from the dump
    });
    created++;
  }

  composerList.sort((a, b) => a.name.localeCompare(b.name));
  writeJSON(COMPOSER_LIST_PATH, composerList);

  const hvscVersionPath = path.join(dumpDir, 'Version_HVSC_84.txt');
  const cgscVersionFiles = fs.existsSync(dumpDir) ? fs.readdirSync(dumpDir).filter((f) => f.startsWith('Version_')) : [];
  writeJSON(DUMP_META_PATH, {
    importedAt: new Date().toISOString(),
    versionFiles: cgscVersionFiles,
    composerCount: composerRows.length,
    fileCount: fileRows.length,
    note: 'One-time snapshot import from the official DeepSID database export (github.com/Chordian/deepsid README). Not live-updating — re-run this script against a newer export to refresh.',
  });

  console.log(`\nDone.`);
  console.log(`  ${skippedNonMusicians} non-MUSICIANS rows skipped (groups, CGSC, SID Happens, etc.)`);
  console.log(`  ${created} new composer files created (full profile + folder from the dump)`);
  console.log(`  ${folderFilled} existing composers had their empty/erroring folder filled in from the dump`);
  console.log(`  ${keptAsIs} existing composers already had usable folder data, left untouched`);
  console.log(`  data/composer-list.json regenerated with all ${composerList.length} composers`);
}

main().catch((e) => {
  console.error('Fatal error:', e);
  process.exit(1);
});
