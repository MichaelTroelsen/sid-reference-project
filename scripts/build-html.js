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

function fileUrlFromCollectionPath(collectionPath) {
  if (!collectionPath) return null;
  const clean = collectionPath.replace(/^_High Voltage SID Collection\//, '');
  return `https://deepsid.chordian.net/?file=${clean}`;
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
function buildFileList(composer, stilByFolder) {
  const real = Array.isArray(composer.folder)
    ? composer.folder
    : Object.values(composer.folder || {}).filter((v) => v && typeof v === 'object' && v.name);

  if (real.length) {
    return real.map((f) => {
      const filename = (f.collection_path || '').split('/').pop() || f.name || '(untitled)';
      return {
        file: filename,
        title: f.name || filename,
        artist: f.author || null,
        player: f.player || null,
        url: fileUrlFromCollectionPath(f.collection_path),
        source: 'deepsid',
      };
    });
  }

  const stilFiles = stilByFolder[composer.path] || [];
  return stilFiles.map((f) => ({
    file: f.file,
    title: f.title || f.file,
    artist: f.artist || null,
    player: null,
    url: `https://deepsid.chordian.net/?file=${composer.path}${f.file}`,
    source: 'stil',
  }));
}

/**
 * CSDb's scener response (depth=2) includes every release the person has
 * ever been credited on — for Cadaver that's hundreds of entries. Full
 * credit history is useful to have cached on disk, but embedding all of
 * it into the generated HTML would bloat the page for no display benefit.
 * This keeps only what the composer card actually shows: country, group
 * memberships, and a credit count (with a link out to CSDb for the rest).
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
  return { country: scener.Country || null, groups, creditCount };
}

function loadAllComposers() {
  if (!fs.existsSync(COMPOSERS_DIR)) return [];
  const hvscMusicians = loadHvscMusicians();
  const stilByFolder = loadStilByFolder();

  return fs
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

      composer.files = buildFileList(composer, stilByFolder);

      return composer;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

async function main() {
  console.log('Building output/index.html from cached data...\n');

  const composers = loadAllComposers();
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

  console.log(`  composers: ${composers.length}`);
  console.log(`  players/editors: ${players?.count ?? 0}`);
  console.log(`  known gaps: ${gaps?.meta?.totalGaps ?? 0}`);
  console.log(`  composers with CSDb enrichment: ${composers.filter((c) => c.csdb).length}`);
  console.log(`  composers matched against HVSC Musicians.txt: ${composers.filter((c) => c.hvsc).length}`);
  console.log(`  country mismatches vs HVSC: ${composers.filter((c) => c.hvsc?.countryMismatch).length}`);
  console.log(`  total files indexed: ${files.length} (${filesFromDeepsid} from DeepSID, ${filesFromStil} from HVSC STIL fallback)`);

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
    files,
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
