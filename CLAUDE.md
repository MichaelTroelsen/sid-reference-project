# Project context for Claude Code

This project fetches data from the DeepSID API (https://deepsid.chordian.net/api/v1.php)
and builds a local HTML reference from it. See README.md for the full
picture; this file is quick orientation for a fresh session.

## Quick facts

- Node 18+ (uses built-in `fetch`). One runtime dependency:
  `fast-xml-parser`, used only by `scripts/lib/csdb-client.js` since
  CSDb's webservice is XML-only.
- `npm run all` does everything: fetch (DeepSID players/composers, CSDb,
  HVSC docs) → analyze gaps → build HTML
- Data lives in `data/*.json`, all gitignored except `data/composer-list.json` (the seed)
- Three independent external sources, each with its own client in
  `scripts/lib/`: DeepSID (`deepsid-client.js`, JSON), CSDb
  (`csdb-client.js`, XML), HVSC (`fetch-hvsc-docs.js` downloads
  `Musicians.txt`/`STIL.txt` directly, no client needed — plain text).
  Full DeepSID endpoint reference: `docs/DEEPSID-API.md`.
- HVSC integration is metadata only (`Musicians.txt`, `STIL.txt`) — never
  the actual SID audio archive (~60,000 copyrighted C64 music files).
- Rate limit is 400ms between requests on both DeepSID and CSDb,
  intentionally conservative — these are free services, not commercial
  APIs.
- As of this writing, DeepSID's `?file=`/`?folder=` endpoints are down
  (`"Could not connect to the DeepSID database"`) — `?players` and
  `?profile=` still work. `build-html.js` falls back to HVSC's own
  STIL.txt for per-composer file listings while this is down (filenames/
  titles only — STIL has no player field, so those files can't be linked
  to a player until DeepSID's DB recovers). Re-run
  `npm run fetch:composers -- --refresh` once it does.
- Text fetched from HVSC (`www.hvsc.c64.org`) is ISO-8859-1, not UTF-8 —
  `fetch()`'s `.text()` decodes as UTF-8 regardless of the response's
  actual charset and silently corrupts every accented character.
  `fetch-hvsc-docs.js`'s `downloadText()` decodes via `Buffer.from(...).toString('latin1')`
  instead — don't swap that back to `res.text()`.
- The generated page has four data-driven tabs beyond Composers/Gaps:
  Players/Editors (click a title for full specs + which composers/files
  use it), SID Files (every file across every composer, linked to its
  player where identifiable), Countries, and Player Families (developers
  who built more than one tool, plus known `import_from` derivation
  links).

## When extending this project

- New fetch scripts should go in `scripts/`, follow the pattern in
  `fetch-composers.js` (read seed/cache, throttled fetch, write cache,
  safely re-runnable)
- Anything that touches HTML output belongs in `templates/` +
  `build-html.js`, not scattered across fetch scripts — keep data
  fetching and HTML rendering separated
- If you add new fields to what's fetched, `find-gaps.js`'s
  `EXPECTED_PLAYER_FIELDS` array may need updating to match

## Known TODOs (not yet built)

- `data/composer-list.json` is still a curated 56-composer subset, not
  exhaustive. `scripts/build-seed-from-hvsc.js` (`npm run seed:full`)
  generates the full list from DeepSID's `/MUSICIANS/` tree in one
  request, but nothing merges its output (`data/composer-list-full.json`)
  into the curated seed automatically — that's a manual review step.
- No automated tests, particularly around `find-gaps.js`'s detection
  logic — false positives there waste a maintainer's time if reported
  upstream without review.
- See `docs/SIDM2-INTEGRATION.md` for the (currently manual) connection
  to the SIDM2 disassembly project.

## Testing without network access

If working in a sandboxed environment without access to
`deepsid.chordian.net`, you can still test the JSON→HTML pipeline by
hand-writing fixture files into `data/composers/*.json` matching the
shape `{ name, path, profile, folder, fetchedAt }` and running
`node scripts/build-html.js` directly — it only reads from `data/`, it
doesn't care how those files got there.
