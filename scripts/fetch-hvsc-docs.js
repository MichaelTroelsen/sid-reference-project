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
 *   STIL.txt — the Sid Tune Information List, per-file metadata (title,
 *   artist, free-text comments) for the whole collection. Cached raw
 *   (data/hvsc/STIL.txt, ~3.6MB) and the /MUSICIANS/ subset (16,435 of
 *   its ~18,650 records) parsed into data/hvsc/stil.json — title/artist/
 *   comment, scoped to each file's default subtune only (a comment tied
 *   to an alternate subtune, e.g. "(#2) Same as <other file>", is not
 *   captured — same rule title/artist already followed). This exists
 *   because DeepSID's own
 *   ?file=/?folder= endpoints (the normal source of per-composer file
 *   lists) can go down — STIL.txt is a second, independent source for
 *   the same filename/title/artist facts, so build-html.js can fall
 *   back to it. It can't identify which player/editor made a file
 *   (STIL doesn't track that), so it's a partial substitute, not a full
 *   one — see docs/DEEPSID-API.md for what only DeepSID's API provides.
 *
 * Cache-aware: skips re-downloading a file that already exists unless
 * you pass --refresh. STIL.txt's parse step runs independently of its
 * download step, so upgrading this script backfills stil.json from an
 * already-cached STIL.txt without needing --refresh.
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
  // HVSC serves these as ISO-8859-1 (confirmed via the response's own
  // Content-Type header), but Node's fetch().text() always decodes as
  // UTF-8 regardless of that — it silently corrupts every accented
  // character (e.g. "Öörni" becomes "��rni"). Buffer's 'latin1' encoding
  // is a direct byte-for-byte ISO-8859-1 decode, no ICU build required.
  const buf = Buffer.from(await res.arrayBuffer());
  return buf.toString('latin1');
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

  // A composer can belong to more than one group (e.g. "Handle (Name) /
  // Triangle / Danish Cracking Crew"). Splitting on the *last* " / " only
  // (the original approach) leaves earlier groups attached to the handle
  // part, which then fails the handle/realname paren match below (it
  // requires the string to *end* in ")"). Splitting on every " / "
  // instead — first segment is always "Handle (Realname)", everything
  // after is one or more group names — handles both cases correctly.
  const parts = rest.split(' / ').map((s) => s.trim()).filter(Boolean);
  const handlePart = parts[0] || '';
  const groups = parts.slice(1);
  const group = groups.length ? groups.join(' / ') : null;

  let handle = handlePart;
  let realName = null;
  const parenMatch = handlePart.match(/^(.*?)\s*\(([^)]*)\)\s*$/);
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

/**
 * Parses the /MUSICIANS/ subset of STIL.txt into { folderPath: [{file, title, artist, comment, subtunes}] }.
 *
 * Record format (blank-line separated):
 *   /MUSICIANS/C/Cadaver/Aces_High.sid
 *     TITLE: Aces High [from Powerslave]
 *    ARTIST: Iron Maiden
 *   COMMENT: Some free-text note, possibly wrapped onto indented
 *            continuation lines like this one.
 *
 * A file can have multiple subtunes with their own title/artist/comment,
 * marked by a "(#N)" line. Fields before the first "(#2)"-or-higher marker
 * are the default (this also covers the common case of a lone "(#1)"
 * marker, which still describes the main/default tune, not an alternate
 * one) — comment capture follows the exact same default-subtune-only rule
 * already used for title/artist, so a comment scoped to subtune #2 (e.g.
 * "Same as <other file>") isn't misattributed to the file's main entry.
 */
function parseStilTxt(text) {
  const lines = text.split(/\r?\n/);
  const byFolder = {};
  let captured = null;
  let folder = null;
  let maxSubtune = 1;
  let blocked = false;
  let inComment = false;

  function flush() {
    if (captured && (captured.title || captured.artist || captured.comment)) {
      if (captured.comment) captured.comment = captured.comment.trim();
      byFolder[folder] = byFolder[folder] || [];
      byFolder[folder].push(captured);
    }
    captured = null;
  }

  for (const line of lines) {
    const pathMatch = line.match(/^(\/MUSICIANS\/.+\.sid)$/);
    if (pathMatch) {
      flush();
      const fullPath = pathMatch[1];
      const slashIdx = fullPath.lastIndexOf('/');
      folder = fullPath.slice(0, slashIdx + 1);
      captured = { file: fullPath.slice(slashIdx + 1), title: null, artist: null, comment: null, subtunes: 1 };
      maxSubtune = 1;
      blocked = false;
      inComment = false;
      continue;
    }
    if (!captured) continue; // not inside a /MUSICIANS/ record — skip until the next one

    const trimmed = line.trim();
    const markerMatch = trimmed.match(/^\(#(\d+)\)$/);
    if (markerMatch) {
      const n = parseInt(markerMatch[1], 10);
      if (n > maxSubtune) maxSubtune = n;
      captured.subtunes = maxSubtune;
      if (n >= 2) blocked = true;
      inComment = false;
      continue;
    }
    if (blocked) continue; // fields belong to an alternate subtune, not the default

    const fieldMatch = trimmed.match(/^(TITLE|ARTIST):\s*(.*)$/);
    if (fieldMatch) {
      const [, field, value] = fieldMatch;
      if (field === 'TITLE' && !captured.title) captured.title = value;
      if (field === 'ARTIST' && !captured.artist) captured.artist = value;
      inComment = false;
      continue;
    }

    const commentMatch = trimmed.match(/^COMMENT:\s?(.*)$/);
    if (commentMatch) {
      if (!captured.comment) {
        captured.comment = commentMatch[1];
        inComment = true;
      } else {
        inComment = false; // a second COMMENT: block for this subtune — keep the first, ignore the rest
      }
      continue;
    }

    if (inComment && /^\s+\S/.test(line)) {
      captured.comment += ' ' + trimmed; // wrapped continuation line
      continue;
    }
    inComment = false;
  }
  flush();
  return byFolder;
}

async function main() {
  const refresh = process.argv.slice(2).includes('--refresh');
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const musiciansTxtPath = path.join(OUT_DIR, 'Musicians.txt');
  const musiciansJsonPath = path.join(OUT_DIR, 'musicians.json');
  const stilPath = path.join(OUT_DIR, 'STIL.txt');
  const stilJsonPath = path.join(OUT_DIR, 'stil.json');

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

  let stilText;
  if (!refresh && fs.existsSync(stilPath)) {
    console.log('STIL.txt already cached. Skipping download (pass --refresh to re-fetch).');
    stilText = fs.readFileSync(stilPath, 'utf8');
  } else {
    console.log(`Fetching ${STIL_URL} ...`);
    stilText = await downloadText(STIL_URL);
    fs.writeFileSync(stilPath, stilText, 'utf8');
    console.log(`Cached STIL.txt (${(Buffer.byteLength(stilText, 'utf8') / 1024 / 1024).toFixed(1)} MB)`);
  }

  if (!refresh && fs.existsSync(stilJsonPath)) {
    console.log('stil.json already parsed. Skipping (pass --refresh to re-parse).');
  } else {
    const byFolder = parseStilTxt(stilText);
    const folderCount = Object.keys(byFolder).length;
    const fileCount = Object.values(byFolder).reduce((sum, files) => sum + files.length, 0);
    fs.writeFileSync(stilJsonPath, JSON.stringify({ fetchedAt: new Date().toISOString(), source: STIL_URL, folderCount, fileCount, byFolder }, null, 2), 'utf8');
    console.log(`Parsed ${fileCount} /MUSICIANS/ file entries across ${folderCount} composer folders -> data/hvsc/stil.json`);
  }
}

main().catch((e) => {
  console.error('Fatal error:', e.message);
  process.exit(1);
});
