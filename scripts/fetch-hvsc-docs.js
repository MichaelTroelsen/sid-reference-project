#!/usr/bin/env node
/**
 * fetch-hvsc-docs.js
 *
 * Pulls in HVSC's own text documentation as a second, independent
 * cross-reference source — deliberately metadata only, not the actual
 * SID audio archive (that's ~60,000 copyrighted C64 music files; this
 * project only ever deals in facts *about* them).
 *
 *   Musicians.txt — the official verified list of composer handles,
 *   real names, groups, and countries (3+ SIDs requirement). Parsed
 *   into data/hvsc/musicians.json. This is the exact source the
 *   legacy hand-curated reference page (docs/legacy/sid_reference.html)
 *   used to correct several composer nationality errors — now fetched
 *   live instead of copied in by hand.
 *
 *   STIL.txt — the Sid Tune Information List, per-subtune metadata
 *   (title, artist comments) for the whole collection. Cached raw only
 *   (data/hvsc/STIL.txt) — it's large and its per-entry format is a
 *   separate parsing project of its own; not parsed here.
 *
 * Cache-aware: skips re-downloading a file that already exists unless
 * you pass --refresh.
 *
 * Usage:
 *   node scripts/fetch-hvsc-docs.js              # fetch only missing
 *   node scripts/fetch-hvsc-docs.js --refresh     # re-fetch both files
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'data', 'hvsc');
const USER_AGENT = 'sid-reference-project/1.0 (personal HVSC research tool)';

const MUSICIANS_URL = 'https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt';
const STIL_URL = 'https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/STIL.txt';

async function downloadText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

/**
 * Parses one composer line from Musicians.txt. Observed shapes:
 *   Handle (Realname) / Group - COUNTRY
 *   Handle (Realname) - COUNTRY
 *   Handle / Group - COUNTRY
 *   Handle - COUNTRY
 * Realname may itself contain a {nickname} aside, e.g. "Fitches, Dave {Asmodeus}".
 * A minority of entries have no country at all (unknown/undisclosed) —
 * requireCountry controls whether those are dropped. Range detection
 * uses requireCountry:true (a stricter signal for "this is the real
 * listing, not a header/footer"); the actual extraction pass uses
 * requireCountry:false so those entries aren't silently lost, just
 * recorded with country:null.
 * Returns null for lines that don't match (headers, blank lines, separators).
 */
function parseMusicianLine(line, requireCountry) {
  const trimmed = line.trim();
  if (!trimmed) return null;

  let rest = trimmed;
  let country = null;
  const dashSplit = trimmed.lastIndexOf(' - ');
  if (dashSplit !== -1) {
    country = trimmed.slice(dashSplit + 3).trim() || null;
    rest = trimmed.slice(0, dashSplit).trim();
  }
  if (requireCountry && !country) return null;
  if (!rest) return null;

  let group = null;
  const slashSplit = rest.lastIndexOf(' / ');
  if (slashSplit !== -1) {
    group = rest.slice(slashSplit + 3).trim();
    rest = rest.slice(0, slashSplit).trim();
  }

  let handle = rest;
  let realName = null;
  const parenMatch = rest.match(/^(.*?)\s*\(([^)]*)\)\s*$/);
  if (parenMatch) {
    handle = parenMatch[1].trim();
    realName = parenMatch[2].trim();
  }
  if (!handle) return null;

  return { handle, realName, group, country };
}

function parseMusiciansTxt(text) {
  const lines = text.split(/\r?\n/);

  // The file has several "****..." separator lines — a title block, a
  // per-country stats table, the actual composer listing, then footer
  // sections. Rather than assume which gap is the listing, score every
  // gap between consecutive separators by how many lines in it parse as
  // composer entries, and take the best-scoring one.
  const sepIdx = [-1]; // sentinel: "start of file" counts as a boundary
  for (let i = 0; i < lines.length; i++) {
    if (/^\*{5,}$/.test(lines[i].trim())) sepIdx.push(i);
  }
  sepIdx.push(lines.length); // sentinel: "end of file"

  let best = { count: -1, start: 0, end: lines.length };
  for (let i = 0; i < sepIdx.length - 1; i++) {
    const start = sepIdx[i] + 1;
    const end = sepIdx[i + 1];
    const count = lines.slice(start, end).filter((l) => parseMusicianLine(l, true)).length;
    if (count > best.count) best = { count, start, end };
  }

  const musicians = [];
  for (const line of lines.slice(best.start, best.end)) {
    const parsed = parseMusicianLine(line, false);
    if (parsed) musicians.push(parsed);
  }
  return musicians;
}

async function main() {
  const refresh = process.argv.slice(2).includes('--refresh');
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const musiciansTxtPath = path.join(OUT_DIR, 'Musicians.txt');
  const musiciansJsonPath = path.join(OUT_DIR, 'musicians.json');
  const stilPath = path.join(OUT_DIR, 'STIL.txt');

  if (!refresh && fs.existsSync(musiciansTxtPath)) {
    console.log('Musicians.txt already cached. Skipping (pass --refresh to re-fetch).');
  } else {
    console.log(`Fetching ${MUSICIANS_URL} ...`);
    const text = await downloadText(MUSICIANS_URL);
    fs.writeFileSync(musiciansTxtPath, text, 'utf8');
    const musicians = parseMusiciansTxt(text);
    fs.writeFileSync(musiciansJsonPath, JSON.stringify({ fetchedAt: new Date().toISOString(), source: MUSICIANS_URL, count: musicians.length, musicians }, null, 2), 'utf8');
    console.log(`Parsed ${musicians.length} musician entries -> data/hvsc/musicians.json`);
  }

  if (!refresh && fs.existsSync(stilPath)) {
    console.log('STIL.txt already cached. Skipping (pass --refresh to re-fetch).');
  } else {
    console.log(`Fetching ${STIL_URL} ...`);
    const text = await downloadText(STIL_URL);
    fs.writeFileSync(stilPath, text, 'utf8');
    console.log(`Cached STIL.txt (${(Buffer.byteLength(text, 'utf8') / 1024 / 1024).toFixed(1)} MB, raw only — not parsed)`);
  }
}

main().catch((e) => {
  console.error('Fatal error:', e.message);
  process.exit(1);
});
