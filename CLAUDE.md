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
- **Players/Editors isn't just DeepSID's curated 129 anymore.**
  `deriveSyntheticPlayers()` (template) scans every file's raw `player`
  tag, and for the 496 distinct tags that don't resolve to any of the
  129 curated entries (17,538 files, ~32% of the whole collection — a
  bare "DMC" since DeepSID only has versioned DMC v4/v5/v6.x, each
  "JCH_NewPlayer_V9" through "V20" individually, composers' own hand-
  coded in-game routines like "Rob_Hubbard"), synthesizes a player-shaped
  object (`inferred: true`, no spec data — there isn't any) and merges it
  into `window.SID_DATA.players` once at load, before anything else
  reads that array. Every existing consumer (Files tab matching, usage
  counts, the Players tab itself) picks these up for free. Two real
  finds while building this: "JCH NewPlayer V20" (1,616 files) and
  "Hermit/SidWizard V1.x" (988 files) both rank in the top 15 most-used
  tools overall despite never having a curated entry. `matchPlayer()`
  also gained a "prefer the more specific of multiple strict matches"
  rule (e.g. "SidFactory_II/Laxity" now correctly resolves to "SID
  Factory II" instead of bailing out as ambiguous against "SID Factory").
  `computePlayerFamilies()` excludes inferred entries (no known developer
  to group by). The Players tab's sort dropdown has an "Inferred only"
  option (doubles as a filter) for working through the 496 one at a time;
  each inferred player's detail page shows a composer-concentration hint
  (≤3 composers, or one at ≥60% of files, is called out as "likely a
  personal routine"; spread across many composers as "more likely a real
  tool that never got written up") — genuinely useful signal, not a
  guess: "Rob_Hubbard" turned out to be spread across 51 different
  composers (only 28% by Rob Hubbard himself), suggesting his player
  routine was reused/adapted by others.
- **SIDId enrichment fills in the inferred players' missing specs.**
  `scripts/import-sidid.js` (parser in `scripts/lib/sidid.js`) reads
  `deepsid_dl/sidid.nfo` — the SIDId project's player index that ships in
  DeepSID's offline bundle — into `data/sidid.json` (`byTag`: raw player
  tag → `{name, author, released, reference, comment}`). Like
  `import-deepsid-dump.js` it's a one-time local import (a dated snapshot,
  `meta.parsedAt`), not in `npm run all`; `build-html.js` embeds `byTag`
  as `window.SID_DATA.sidid` if present. The template's `lookupSidid()`
  resolves a raw tag to a SIDId entry using the *same* matching tiers as
  `matchPlayer()` (exact tag → version-intact strict → version-stripped
  loose, the two normalized tiers unambiguous-only), and
  `deriveSyntheticPlayers()` attaches the result to each inferred player
  as `player.sidid` (plus `developer`/`start_year` from author/released,
  so it shows on the card and sorts by year). This gave 247 of the 496
  inferred players real author/name/year/reference and, for 66 entries, a
  playback-*technique* comment (e.g. Mahoney's 8-bit-via-volume-register
  trick) — ~45,300 of ~55,000 files (82%) now resolve to a SIDId entry.
  Shown as a "🔎 SIDId database" spec box on the inferred player's detail
  page (`renderPlayerPage()`), styled like a curated player's spec table.
  Curated players (which keep their authoritative DeepSID specs) get a
  smaller "🔎 SIDId note" box too, via `lookupSididByTitle()` — but ONLY
  the additive playback-technique COMMENT (11 of 129 match a comment: e.g.
  VoiceTracker "based on the Music Assembler player", SoundMonitor's 1986
  type-in-listing origin), never overriding developer/name/specs. A bare
  SIDId *reference* with no comment is suppressed (it would just duplicate
  the CSDb download link already in the header).
  **Encoding landmine**: `sidid.nfo` is ISO-8859-1, not UTF-8 (accented
  author names) — `import-sidid.js` decodes via `.toString('latin1')`,
  same trap as the HVSC docs; don't swap to a UTF-8 read. `player_type`
  from the DeepSID dump is deliberately NOT carried into the payload — it
  is the constant string "Normal built-in" on all 55,223 files (zero
  information, ~1.6MB of pure repetition); see `build-html.js`'s
  `buildFileList`.
- **The SID Files tab is a grouped, filterable grid** (`renderFiles()`).
  Every file is grouped under its composer (collapsible group headers,
  collapsed by default; a filter that narrows to ≤25 composers
  auto-expands them, `AUTO_EXPAND_GROUPS`); expanding builds a sortable
  columnar table (File/Title/Player/Sub/Source/Links, capped at
  `FILES_PER_GROUP_CAP=400` rows per composer). Three independent
  narrowing controls, none resetting the others: the shared search box
  ("find", across composer/title/artist/player/filename), a row of facet
  filters (`fileFacets`: source, player-identification state incl.
  curated/inferred, has-song-info, a specific tool — the tool list built
  from resolved player titles), and per-column sort (`fileColSort`,
  toggled by clicking a column header — files sort *within* each group;
  the shared sort dropdown orders the *groups*). All this tab-specific
  state resets on tab switch (handled in `render()`, alongside the
  `currentSort` reset). `resolveTag()` memoizes `matchPlayer()` per
  distinct tag so filtering/sorting 55k files never re-resolves. Two
  extra per-file attributes were added to the payload for the grid's
  columns: `subtunes` (omitted when 1) and `csdbId` (CSDb release link) —
  both omit-when-default, same repetition-avoidance as `comment`.
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
- **Filter and sort**: every tab has always had a text filter
  (`currentFilter`, the search bar). Composers/Players/Files/Gaps also
  have a sort dropdown (`currentSort`, `TABS[i].sorts` array — each tab's
  first entry is its default). Deliberately not added to the bar-chart
  tabs (Countries, Player Families, Scene Groups, Insights) — those are
  already sorted by their one meaningful dimension (magnitude), so an
  arbitrary re-sort control there wouldn't add anything. Switching tabs
  resets to that tab's own default sort; typing in the filter box or
  picking a different sort option both just re-render the same tab and
  must not reset the other one's state (`render()`'s `tabChanged` check
  handles this).
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
- **Richer CSDb release data on the player detail page.**
  `fetch-player-media.js` no longer keeps only the screenshot from CSDb's
  `type=release` response — it also extracts **credits** (who actually
  coded the tool — the genuinely new field, since DeepSID's `?players`
  API never had it), release date, releasing group, CSDb type, and a
  download link (+ download count), keyed by CSDb release ID in
  `data/csdb/players.json`. It fetches two ID sets: every curated player's
  `csdb_id` **and** every SIDId `reference` that points at a CSDb release
  (so *inferred* players get it too — 244 releases fetched, 226 with
  credits). `build-html.js` attaches this as `player.csdbRelease` on
  curated players and grafts it onto each SIDId entry (so an inferred
  player reads `p.sidid.csdbRelease`); the template's `csdbReleaseBox()`
  shows it as a "🗃 CSDb release" table (122 curated + 95 inferred players
  currently have one). The output shape changed, so entries cached by the
  old (screenshot-only) shape are re-fetched automatically — an entry
  missing the `credits` key is treated as stale (no `--refresh` needed).
- The **SID Files tab's grouped grid is reused on the player detail page**
  for the "Composers/files using this player" listing (`renderPlayerPage()`):
  the flat capped list of 40 was replaced with the files grouped by
  composer (most-prolific-user first), each a collapsible header opening
  the same columnar table (`buildFilesTablePlain()` — a non-sortable
  variant, since the Files-tab column headers call `render('files')` and
  would yank the user off the player page). Groups auto-open when ≤
  `AUTO_EXPAND_GROUPS` composers used the tool; otherwise collapsed and
  built lazily on click (`togglePlayerGroup()` / `_playerUsedGroups`) so a
  tool used by hundreds of composers doesn't build thousands of rows up
  front. The Files tab's own `buildFilesTable()` and this share
  `filesTableBody()` for identical rows.
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
