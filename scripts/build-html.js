#!/usr/bin/env node
/**
 * build-html.js
 *
 * Reads every cached JSON file in data/ and injects it into
 * templates/index.html.template, producing output/index.html.
 *
 * This keeps data and presentation separate: the template holds all the
 * CSS/JS/UI logic, and this script's only job is to serialize the current
 * state of data/ into a single JS object the template can consume at
 * runtime. Re-run this any time data/ changes (after fetch-composers.js
 * or fetch-players.js) to regenerate the page.
 *
 * Usage:
 *   node scripts/build-html.js
 */

const fs = require('fs');
const path = require('path');
const { readJSON, slugify } = require('./lib/cache');
const { loadHvscMusicians, findHvscMatch, countriesRoughlyMatch } = require('./lib/hvsc');

const ROOT = path.join(__dirname, '..');
const COMPOSERS_DIR = path.join(ROOT, 'data', 'composers');
const CSDB_DIR = path.join(ROOT, 'data', 'csdb');
const PLAYERS_PATH = path.join(ROOT, 'data', 'players.json');
const PLAYER_MEDIA_PATH = path.join(ROOT, 'data', 'csdb', 'players.json');
const GAPS_PATH = path.join(ROOT, 'data', 'gaps-report.json');
const STIL_PATH = path.join(ROOT, 'data', 'hvsc', 'stil.json');
const TEMPLATE_PATH = path.join(ROOT, 'templates', 'index.html.template');
const OUTPUT_PATH = path.join(ROOT, 'output', 'index.html');

function loadStilByFolder() {
  return readJSON(STIL_PATH)?.byFolder ?? {};
}

// STIL.txt titles a cover/adaptation with a "[from X]" suffix (e.g. "Dallas
// Theme [from the TV series]") — DeepSID's own `name` field never carries
// this (checked: 0 of 55,223 DeepSID-sourced file names match the pattern),
// so it's only measurable across the STIL-documented subset of the
// collection, not the whole thing. A one-time aggregate, not a per-file
// field — nothing needs this title text after the count, so it isn't
// worth threading through composer.files just for this.
function computeStilCoverStats(stilByFolder) {
  let total = 0;
  let covers = 0;
  Object.values(stilByFolder).forEach((entries) => {
    entries.forEach((f) => {
      if (!f.title) return;
      total++;
      if (/\[from /i.test(f.title)) covers++;
    });
  });
  return { total, covers };
}

/**
 * A composer's real per-file listing comes from DeepSID's ?file= endpoint
 * (composer.folder) — but that endpoint has been unreliable (see
 * docs/DEEPSID-API.md), leaving `folder` empty or `{_error: ...}` for
 * everyone during an outage. When that happens, this falls back to
 * HVSC's own STIL.txt (fetch-hvsc-docs.js), a second independent source
 * for filename/title/artist — but STIL doesn't track which player/editor
 * made a file, so `player` stays null for STIL-sourced entries; that's a
 * real gap in what's knowable from that source, not a bug.
 */
function rawFolderFiles(composer) {
  return Array.isArray(composer.folder)
    ? composer.folder
    : Object.values(composer.folder || {}).filter((v) => v && typeof v === 'object' && v.name);
}

function buildFileList(composer, stilByFolder) {
  const real = rawFolderFiles(composer);

  // STIL.txt's free-text COMMENT field is an independent per-file source
  // that DeepSID doesn't have at all — cross-referenced by filename onto
  // *every* file regardless of which source (DeepSID vs STIL fallback)
  // supplied its title/artist/player, not just STIL-fallback files, since
  // those are only ~28 of ~55,000 files. `comment` is omitted entirely
  // (not left as null) when absent — at ~55,000 files, `"comment":null`
  // on every record would be ~900KB of pure repetition for no display use.
  const stilFiles = stilByFolder[composer.path] || [];
  const stilByFilename = new Map(stilFiles.map((f) => [f.file, f]));

  // `url` is deliberately not stored per file — every file's DeepSID
  // link is just `?file=<composer.path><filename>`, so the template
  // reconstructs it client-side from data it already has (composer.path
  // + f.file) instead of embedding a ~35-char URL prefix per record.
  // At ~55,000 files (after the DeepSID database dump import expanded
  // composer coverage from 56 to ~1900), that was ~1.9MB of pure
  // repetition in the generated page.
  if (real.length) {
    return real.map((f) => {
      const filename = (f.collection_path || '').split('/').pop() || f.name || '(untitled)';
      const comment = stilByFilename.get(filename)?.comment;
      return {
        file: filename,
        title: f.name || filename,
        artist: f.author || null,
        player: f.player || null,
        source: 'deepsid',
        ...(comment ? { comment } : {}),
      };
    });
  }

  return stilFiles.map((f) => ({
    file: f.file,
    title: f.title || f.file,
    artist: f.artist || null,
    player: null,
    source: 'stil',
    ...(f.comment ? { comment: f.comment } : {}),
  }));
}

/**
 * CSDb's scener response (depth=2) includes every release the person has
 * ever been credited on — for Cadaver that's hundreds of entries. Full
 * credit history is useful to have cached on disk, but embedding all of
 * it into the generated HTML would bloat the page for no display benefit.
 * This keeps only what the composer card actually shows: country, group
 * memberships, freelance roles (this project only cares that someone made
 * music, but CSDb tracks every scene role a person is credited for — most
 * SID composers turn out to not be dedicated musicians at all, see
 * FreelanceFunctions below), and a credit count (with a link out to CSDb
 * for the rest).
 */
function summarizeCsdb(entry) {
  const handle = entry && entry.scener && entry.scener.Handle;
  if (!handle) return null;
  const scener = handle.Scener || {};
  const memberOf = Array.isArray(handle.MemberOf) ? handle.MemberOf : handle.MemberOf ? [handle.MemberOf] : [];
  const groups = memberOf
    .filter((m) => m.Group && m.Group.Name)
    .map((m) => ({ name: m.Group.Name, id: m.Group.ID, status: m.Status || null }));
  const credits = handle.Credits && handle.Credits.Credit;
  const creditCount = Array.isArray(credits) ? credits.length : credits ? 1 : 0;
  const fn = handle.FreelanceFunctions && handle.FreelanceFunctions.Function;
  const roles = Array.isArray(fn) ? fn : fn ? [fn] : [];
  return { country: scener.Country || null, groups, creditCount, roles };
}

// Subtunes-per-file (medleys) is another stat, like stilCoverStats, that's
// only worth a one-time aggregate — computed here, while composer.folder's
// raw per-file records (which carry the real `subtunes` count) still exist,
// right before loadAllComposers() deletes that field. Not worth adding
// `subtunes` to composer.files just for this one fact across ~55,000 files.
function accumulateSubtuneStats(stats, composer, realFiles) {
  realFiles.forEach((f) => {
    const n = parseInt(f.subtunes, 10) || 1;
    stats.total++;
    if (n > 1) stats.multi++;
    if (!stats.max || n > stats.max.subtunes) {
      const filename = (f.collection_path || '').split('/').pop() || f.name || '(untitled)';
      stats.max = { composer: composer.name, file: filename, subtunes: n };
    }
  });
}

function loadAllComposers() {
  const subtuneStats = { total: 0, multi: 0, max: null };
  if (!fs.existsSync(COMPOSERS_DIR)) return { composers: [], subtuneStats };
  const hvscMusicians = loadHvscMusicians();
  const stilByFolder = loadStilByFolder();

  const composers = fs
    .readdirSync(COMPOSERS_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => readJSON(path.join(COMPOSERS_DIR, f)))
    .filter(Boolean)
    .map((composer) => {
      const csdbRaw = readJSON(path.join(CSDB_DIR, `${slugify(composer.name)}.json`));
      composer.csdb = summarizeCsdb(csdbRaw);

      const hvscMatch = findHvscMatch(composer.name, hvscMusicians);
      composer.hvsc = hvscMatch
        ? {
            realName: hvscMatch.realName,
            group: hvscMatch.group,
            country: hvscMatch.country,
            countryMismatch: !countriesRoughlyMatch(composer.profile && composer.profile.country, hvscMatch.country),
          }
        : null;

      const realFiles = rawFolderFiles(composer);
      accumulateSubtuneStats(subtuneStats, composer, realFiles);
      composer.files = buildFileList(composer, stilByFolder);
      // `folder` (the raw per-file records read from disk) has now been
      // projected into the smaller `files` shape above — dropping it
      // here avoids embedding the same ~55,000 file records twice in the
      // generated page (this mattered once composer coverage went from
      // 56 curated composers to the full ~1900 in the DeepSID database
      // dump — at that scale the raw `folder` field alone was ~14MB).
      delete composer.folder;

      return composer;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return { composers, subtuneStats };
}

async function main() {
  console.log('Building output/index.html from cached data...\n');

  const { composers, subtuneStats } = loadAllComposers();
  const players = readJSON(PLAYERS_PATH);
  const gaps = readJSON(GAPS_PATH);
  const playerMedia = readJSON(PLAYER_MEDIA_PATH) || {};
  const playerList = (players?.players ?? []).map((p) => {
    const media = p.csdb_id ? playerMedia[String(p.csdb_id)] : null;
    return { ...p, screenshot: media?.screenshot ?? null };
  });

  const files = composers.flatMap((c) => c.files.map((f) => ({ ...f, composer: c.name, composerPath: c.path })));
  const filesFromDeepsid = files.filter((f) => f.source === 'deepsid').length;
  const filesFromStil = files.filter((f) => f.source === 'stil').length;
  const stilCoverStats = computeStilCoverStats(loadStilByFolder());

  console.log(`  composers: ${composers.length}`);
  console.log(`  players/editors: ${players?.count ?? 0}`);
  console.log(`  known gaps: ${gaps?.meta?.totalGaps ?? 0}`);
  console.log(`  composers with CSDb enrichment: ${composers.filter((c) => c.csdb).length}`);
  console.log(`  composers matched against HVSC Musicians.txt: ${composers.filter((c) => c.hvsc).length}`);
  console.log(`  country mismatches vs HVSC: ${composers.filter((c) => c.hvsc?.countryMismatch).length}`);
  console.log(`  total files indexed: ${files.length} (${filesFromDeepsid} from DeepSID, ${filesFromStil} from HVSC STIL fallback)`);
  console.log(`  STIL-documented covers/adaptations: ${stilCoverStats.covers} of ${stilCoverStats.total}`);
  console.log(`  files with 2+ subtunes: ${subtuneStats.multi} of ${subtuneStats.total} (max: ${subtuneStats.max?.subtunes ?? 0} in "${subtuneStats.max?.file ?? '?'}" by ${subtuneStats.max?.composer ?? '?'})`);

  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`\nTemplate not found: ${TEMPLATE_PATH}`);
    console.error('Run this from the project root, or check templates/ exists.');
    process.exit(1);
  }

  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

  const dataPayload = {
    generatedAt: new Date().toISOString(),
    composers,
    players: playerList,
    gaps: gaps?.gaps ?? [],
    stilCoverStats,
    subtuneStats,
    // Deliberately not embedding a flattened `files` array here — every
    // composer already carries its own `files`, and duplicating all
    // ~55,000 records again at the top level roughly doubled the
    // generated page's size for no reason. The Files tab computes this
    // flattened view client-side from `composers` instead (see
    // allFiles() in the template) — same data, one copy.
  };

  // The template contains a marker comment; we replace it with a real
  // <script> tag embedding the JSON payload as a global variable.
  const injected = template.replace(
    '/*__SID_DATA_INJECTION_POINT__*/',
    `window.SID_DATA = ${JSON.stringify(dataPayload)};`
  );

  if (injected === template) {
    console.warn(
      '\n  ! Injection marker not found in template — check templates/index.html.template'
    );
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, injected, 'utf8');

  const sizeKB = (Buffer.byteLength(injected, 'utf8') / 1024).toFixed(0);
  console.log(`\nWrote output/index.html (${sizeKB} KB)`);
}

main().catch((e) => {
  console.error('Fatal error:', e);
  process.exit(1);
});
