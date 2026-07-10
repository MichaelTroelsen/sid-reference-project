# Project context for Claude Code

This project fetches data from the DeepSID API (https://deepsid.chordian.net/api/v1.php)
and builds a local HTML reference from it. See README.md for the full
picture; this file is quick orientation for a fresh session.

## Quick facts

- No dependencies beyond Node 18+ (uses built-in `fetch`)
- `npm run all` does everything: fetch → analyze gaps → build HTML
- Data lives in `data/*.json`, all gitignored except `data/composer-list.json` (the seed)
- The DeepSID API is undocumented publicly — `scripts/lib/deepsid-client.js`
  has the endpoint shapes in its comments, verified against DeepSID's own
  source at github.com/Chordian/deepsid/blob/master/api/v1.php
- Rate limit is 400ms between requests, intentionally conservative —
  this is a free single-maintainer service, not a commercial API

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

- No full-HVSC seed generator — `data/composer-list.json` is a curated
  56-composer subset, not exhaustive. Would need a `?folder=` recursive
  walk starting at `/MUSICIANS/`.
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
