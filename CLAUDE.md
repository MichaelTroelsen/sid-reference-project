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
  `?profile=` still work. This is now largely worked around: DeepSID
  publishes its own full database export for offline use (see "The
  DeepSID database export" below), which has the same per-file `player`
  field the broken endpoint would have returned, just from a dated
  snapshot instead of live. `build-html.js` still falls back further to
  HVSC's STIL.txt (filename/title/artist, no player field) for anything
  outside the dump's coverage. STIL.txt's free-text `COMMENT` field
  (song notes, `stil.json`'s `comment` per file) is a separate lookup
  cross-referenced by filename onto *every* file regardless of source —
  DeepSID has no equivalent field at all, so this isn't a fallback, it's
  additive (~6,500 of ~55,000 files gained one). Shown as a collapsible
  "song info" toggle on the Files tab and each composer card.
- **The DeepSID database export**: `scripts/import-deepsid-dump.js`
  reads a local copy of DeepSID's own published database dump
  (github.com/Chordian/deepsid README's "Setting up for offline use"
  section — `DeepSID_Database.zip`, unpacked into
  `deepsid_dl/DeepSID_Database/`, gitignored) via a small hand-rolled
  mysqldump parser (`scripts/lib/sql-dump.js`). This expanded composer
  coverage from the curated 56 to ~1,895 real `MUSICIANS/` composers
  (~2,083 raw rows also include scene groups, CGSC entries, and
  `_SID Happens` folders — filtered out, none of those work via
  DeepSID's own API either) and gave ~55,000 files real `player` data.
  It's a **one-time, dated snapshot import** — `data/deepsid-dump/meta.json`
  records the HVSC/CGSC version — not a live-updating source. One
  landmine already hit and fixed: the dump's `shortname`/`name` columns
  inconsistently hold a real name instead of a scene handle (DRAX's
  `shortname` is "Thomas Mogensen"), so composer identity is always
  derived from the HVSC folder path instead, never those columns.
- Embedding all ~1,895 composers + ~55,000 files in one static page
  blew up to 42MB on the first pass — the raw `folder` field, the
  derived `files` field, and a flattened top-level `files` array were
  all carrying the same data at once, and a per-file `url` string was
  being pre-built and stored instead of reconstructed from data already
  present. Fixed down to ~8-9MB (still large, but usable) — see git
  history if this creeps back up after future changes. Now ~9-10MB after
  also cross-referencing STIL.txt's `COMMENT` field onto ~6,500 files
  (see the STIL.txt line below). That same fix (deleting `composer.folder`
  after deriving `composer.files`) silently broke every composer card's
  file count/expand toggle in `templates/index.html.template` — its
  `fileList()`/`buildFileRow()` were reading the now-deleted `.folder`
  and always got zero. Not caught until this file was touched again
  during the STIL `COMMENT` work; fixed to read `.files` instead. Lesson:
  when a data field is deleted server-side, grep the template for every
  reader of it, not just the ones the current task touches.
- Text fetched from HVSC (`www.hvsc.c64.org`) is ISO-8859-1, not UTF-8 —
  `fetch()`'s `.text()` decodes as UTF-8 regardless of the response's
  actual charset and silently corrupts every accented character.
  `fetch-hvsc-docs.js`'s `downloadText()` decodes via `Buffer.from(...).toString('latin1')`
  instead — don't swap that back to `res.text()`.
- The generated page has six data-driven tabs beyond Composers/Gaps:
  Players/Editors, SID Files (every file across every composer, linked
  to its player where identifiable), Countries, Player Families
  (developers who built more than one tool, plus known `import_from`
  derivation links), Scene Groups (composers grouped by CSDb
  demoscene/cracking-group membership — `computeGroupMembership()`
  aggregates each composer's already-cached `csdb.groups` client-side;
  737 groups have 2+ cached composers once the full CSDb re-enrichment
  landed, up from effectively unviewable when only 47 composers had CSDb
  data), and Insights (ten aggregate stats/charts, considered done for
  now — deliberately stopped adding more once new findings got
  noticeably less compelling than earlier ones; two computed server-side
  once and added to the payload as small summaries — `stilCoverStats`,
  `subtuneStats` — everything else reads data already in the client
  payload for other reasons): composer activity by year 1983–2026
  (chronological, not ranked, since the point is the shape over time);
  scene roles from CSDb; most prolific composers by cached file count,
  with a concentration note (top 50 made 25% of all files); covers-vs-
  originals from STIL.txt's "[from X]" tag (DeepSID has no equivalent
  field); a subtune/medley stat (`accumulateSubtuneStats()`, computed in
  `build-html.js`'s `loadAllComposers()` from `composer.folder`'s raw
  records right before that field gets deleted — same "one-time
  aggregate, not worth threading through every file" reasoning as
  `stilCoverStats`); which tool dominated which era (approximate —
  tagged by composer's overall `active` year, not a per-file date);
  coder rate by country (gated to a 20+ composer sample size per
  country); group mobility (composers in 3+ groups); files per composer
  by country (`computeAvgFilesByCountry()`, min. 15 composers — a
  different cut than the Countries tab, which counts composers, not
  output). Shares a `barChart()` helper (now with an optional
  `valueFn(n, name)` for percentage-style displays) with the Countries
  tab, which was refactored to use it too. Excludes one known composer-
  identity edge case, `unreleased` — see TODO.md.
- **Number formatting**: `Number.prototype.toLocaleString()` with no
  locale argument uses the *visitor's browser locale* — this dev
  environment defaults to `en-DK`, which renders "14.043" (period as the
  thousands separator) instead of "14,043". Found this only after
  actually printing a multi-thousand number in a sandbox check, not from
  a `node --check` syntax pass. Always call the template's `fmtNum(n)`
  helper (forces `'en-US'`) for any count shown to the user — never call
  `.toLocaleString()` directly.
- Clicking a player card (Players tab or a matched tag on the Files tab)
  opens a dedicated full-page detail view (`renderPlayerPage()`) —
  title/byline/download link, screenshot, then Package/Features/Player/
  Editor spec sections, styled after DeepSID's own player detail page but
  in this project's visual theme. Specs are all from already-cached
  `players.json` (checked field-by-field against DeepSID's real page
  first — no scraping needed there); the screenshot itself comes from
  CSDb's `type=release` endpoint (`scripts/fetch-player-media.js`) since
  DeepSID's own players page has no equivalent API field and is a
  JS-rendered SPA with no predictable image URL.
- `find-gaps.js` adds a `suggestion` field to a gap when a candidate fix
  exists in CSDb or HVSC — composer country/realname/group from an
  unambiguous HVSC Musicians.txt match (`lib/hvsc.js`'s `findHvscMatch`/
  `findHvscLooseMatch` — the loose fallback only fires on a single
  unambiguous candidate; it returns null rather than guessing when a name
  matches multiple HVSC entries), player `site` from CSDb's `Website`
  field. This is deliberately conservative — only 97 of 240 gaps
  currently qualify — see TODO.md for why looser matching isn't the fix.
- `lib/hvsc.js`'s `countriesRoughlyMatch()` (feeds both the composer
  card's "✓ HVSC verified" badge and the `COMPOSER_COUNTRY_MISMATCH` gap)
  has a small constituent-country alias table (England/Scotland/Wales →
  United Kingdom, USA → United States, Holland → Netherlands). Found this
  was needed while cross-referencing CSDb's country data against
  DeepSID's: 14 of 24 then-reported mismatches were just "England" vs
  "UNITED KINGDOM", not real disagreements. Only covers pairs actually
  observed causing false positives in this dataset, not a full ISO table.
- Musicians.txt's parser had a real bug (fixed): composers with 2+ group
  memberships (e.g. "Handle (Name) / Group1 / Group2") broke the handle/
  realname paren-extraction, since splitting on only the *last* " / "
  left earlier group text attached to the handle segment. Affected 181
  of 1870 entries. Fixed by splitting on *every* " / " and taking the
  first segment as the handle/realname part.

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

- `data/composer-list.json` is a dated snapshot (from the DeepSID
  database export) covering ~1,895 composers, not live data — see "The
  DeepSID database export" above. Re-importing a newer export is manual.
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
