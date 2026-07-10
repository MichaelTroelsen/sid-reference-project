# SID Reference Project

[![GitHub repo](https://img.shields.io/badge/GitHub-sid--reference--project-181717?logo=github)](https://github.com/MichaelTroelsen/sid-reference-project)
[![CI](https://github.com/MichaelTroelsen/sid-reference-project/actions/workflows/ci.yml/badge.svg)](https://github.com/MichaelTroelsen/sid-reference-project/actions/workflows/ci.yml)

Fetches composer, player, and editor data live from the [DeepSID](https://deepsid.chordian.net/)
API into local JSON, builds a browsable HTML reference page from that JSON,
and cross-references everything to find documentation gaps worth reporting
back to DeepSID upstream. Three independent sources enrich and verify that
data further: [CSDb](https://csdb.dk/) (scener bios, group history, release
screenshots), HVSC's own `Musicians.txt`/`STIL.txt` (community-verified
handle/country list and per-file titles), and DeepSID's own published
database export (github.com/Chordian/deepsid's README — a dated snapshot
covering the full ~1,900 HVSC composers and ~55,000 files, not just the
curated seed — see "The DeepSID database export" below).

This replaces an earlier version of this project that was a single
hand-curated HTML file with all data hardcoded inline — preserved at
[`docs/legacy/sid_reference.html`](docs/legacy/sid_reference.html) as a
historical artifact. That approach didn't scale and couldn't stay
current: every ranking, bio, and fact was typed in by hand, so it froze
the moment it was written. This version treats DeepSID as the source of
truth and re-fetches on demand — no composer ranking or bio text is
hardcoded, only what the API actually returns. `templates/index.html.template`
does borrow the legacy page's visual language (the C64 raster header,
dark/light theme toggle, card layout, monospace fonts) — same look, but
every field on the page now traces back to a live API response instead
of a paragraph someone wrote once and never updated.

## Why this exists

DeepSID has a real (if undocumented) REST API — discovered by reading
[`api/v1.php`](https://github.com/Chordian/deepsid/blob/master/api/v1.php)
directly on GitHub, since it isn't publicly documented anywhere. It
returns JSON for composer profiles, SID file metadata, and the full
players/editors database. No auth needed.

That data is maintained by one person (JCH) across decades of scene
history, so it has real gaps: player entries missing a developer credit,
SID files with no identified player routine, composers with HVSC files
but no profile written up yet. `find-gaps.js` finds those systematically
instead of by accident, so they're reportable rather than just noticed.

CSDb and HVSC's `Musicians.txt` are independent sources maintained by
different people, so they're also useful as a cross-check on DeepSID
itself — `find-gaps.js` flags it when DeepSID's profile country disagrees
with HVSC's own verified list for the same composer
(`COMPOSER_COUNTRY_MISMATCH`), the same kind of correction the old
hand-curated guide used to make by hand (see `docs/legacy/sid_reference.html`'s
"data corrections" section) — now automatic instead of manual.

## Architecture

```
scripts/
  lib/
    deepsid-client.js   — rate-limited DeepSID API wrapper (fetch, retry, throttle)
    csdb-client.js      — rate-limited CSDb webservice wrapper (XML, via fast-xml-parser)
    hvsc.js             — shared HVSC Musicians.txt matching logic (build-html.js + find-gaps.js)
    cache.js            — JSON read/write helpers, name→slug for filenames
  build-seed-from-hvsc.js — generates a full composer seed from DeepSID's /MUSICIANS/ tree
  fetch-composers.js     — pulls profile + folder for each seed composer
  fetch-players.js       — pulls the entire players/editors database
  fetch-csdb.js           — enriches cached composers with CSDb scener data
  fetch-player-media.js   — pulls a screenshot + homepage link per player from CSDb
  fetch-hvsc-docs.js      — pulls + parses HVSC's Musicians.txt, caches STIL.txt raw
  import-deepsid-dump.js — one-time import of DeepSID's own database export (see below)
  find-gaps.js           — cross-references everything, flags missing data
  build-html.js          — injects data/*.json into the HTML template

data/
  composer-list.json     — every composer to fetch (name + path) — now generated
                            from the DeepSID database export (~1,900 entries),
                            see "The DeepSID database export" below
  composers/*.json        — one cache file per composer (gitignored)
  players.json            — full players/editors cache (gitignored)
  gaps-report.json        — machine-readable gap analysis (gitignored)
  csdb/*.json              — one CSDb scener cache file per enriched composer,
                             plus players.json (screenshot/website per player,
                             keyed by csdb_id) (gitignored)
  deepsid-dump/
    meta.json               — when the dump was imported, which HVSC/CGSC
                               version it's from (gitignored)
  hvsc/
    Musicians.txt          — raw HVSC download, ISO-8859-1 decoded correctly (gitignored)
    musicians.json          — parsed {handle, realName, group, country}[] (gitignored)
    STIL.txt                — raw HVSC download (gitignored)
    stil.json                — /MUSICIANS/ subset parsed to {folder: [{file, title, artist, subtunes}]} (gitignored)

templates/
  index.html.template    — the actual UI (CSS/JS), reads window.SID_DATA

output/
  index.html             — generated final page (gitignored, run build to make it)

docs/
  GAPS_REPORT.md          — human-readable gap report, generated by find-gaps.js
  SIDM2-INTEGRATION.md    — notes on connecting this to the SIDM2 project
  DEEPSID-API.md          — full DeepSID REST API reference (endpoints, response shapes, quirks)
  legacy/
    sid_reference.html    — the predecessor hand-curated HTML file (static,
                             frozen in time, kept for reference only — not
                             generated, not updated, not linked from the
                             live build)
```

Data and presentation are fully separated: nothing in `templates/` is
hardcoded data, and nothing in `scripts/` renders HTML. `build-html.js` is
the only bridge between them.

## Setup

Requires Node.js 18+ (uses the built-in `fetch`).

```bash
npm install
```

One runtime dependency: [`fast-xml-parser`](https://www.npmjs.com/package/fast-xml-parser),
used only by `csdb-client.js` — CSDb's webservice returns XML with no JSON
option, and Node has no built-in XML parser. Everything else (DeepSID,
HVSC) is plain JSON/text over the built-in `fetch`.

## Usage

Run the whole pipeline — fetch everything, analyze gaps, build the HTML:

```bash
npm run all
```

That's `fetch:players` → `fetch:composers` → `gaps` → `build` chained
together. Every step is independently runnable, and every step is safe
to re-run: fetch steps only hit the network for data that isn't already
cached, and `gaps`/`build` never touch the network at all — they only
read whatever's currently in `data/`.

```bash
npm run fetch:players      # one request, gets everything DeepSID knows
                            # about players/editors — SKIPPED if
                            # data/players.json already exists

npm run fetch:composers    # fetches data/composer-list.json's seed
                            # composers — one request per composer,
                            # SKIPPED per-composer if already cached
                            # under data/composers/

npm run fetch:csdb          # enriches already-cached composers that have
                             # a csdb_id — one request per composer,
                             # SKIPPED per-composer if already cached
                             # under data/csdb/ (run fetch:composers first)

npm run fetch:hvsc-docs     # downloads + parses HVSC's Musicians.txt,
                             # caches STIL.txt raw — SKIPPED if already
                             # cached under data/hvsc/

npm run gaps                # local only — analyzes whatever's been
                             # fetched so far, writes docs/GAPS_REPORT.md

npm run build                # local only — regenerates
                              # output/index.html from whatever's
                              # currently in data/, no network calls
```

Because `build` is local-only, you can tweak `templates/index.html.template`
and re-run `npm run build` repeatedly without re-fetching anything — the
fast loop for iterating on the page itself.

To force a full re-fetch, ignoring what's already cached:

```bash
npm run refresh
```

This passes `--refresh` to both fetch scripts, so every composer and the
full players database get re-requested from DeepSID regardless of what's
on disk, then re-runs `gaps` and `build`.

To fetch just one or two composers while testing:

```bash
node scripts/fetch-composers.js --only "DRAX,Fun Fun"
```

## The DeepSID database export

DeepSID publishes its own full database export specifically for running
local/offline copies (see the "Setting up for offline use" section of
[github.com/Chordian/deepsid](https://github.com/Chordian/deepsid)'s
README — download `DeepSID_Database.zip` from there). This project uses
that same export as a local data source instead of standing up a real
MySQL server: `scripts/lib/sql-dump.js` parses the mysqldump `INSERT`
statements directly, and `scripts/import-deepsid-dump.js` reads
`composers.sql` (~2,083 rows, ~1,895 of them real `MUSICIANS/` composers
— the rest are scene groups, Compute's Gazette SID Collection entries,
and `_SID Happens` date folders, none of which DeepSID's own API
supports, so they're filtered out) and `hvsc_files.sql` (~80,000 rows)
to build the same `{name, path, profile, folder, fetchedAt}` shape
`fetch-composers.js` already produces:

```bash
node scripts/import-deepsid-dump.js
# or: npm run import:dump
```

Unpack `DeepSID_Database.zip` into `deepsid_dl/DeepSID_Database/`
first (gitignored — this isn't something to publish in this repo; see
the README linked above for where to get it). The importer is
conservative about existing data: composers already cached from a live
fetch keep their existing `profile` (which may be more current than
the dump's snapshot), but get their `folder` filled in from the dump
if the live one is empty or erroring — which, given the ongoing
`?file=`/`?folder=` outage, it currently always is. `data/composer-list.json`
gets regenerated from the dump's full composer list (~1,895 entries,
up from the original 56 curated ones).

This is a **one-time, dated snapshot import**, not a live source —
`data/deepsid-dump/meta.json` records which HVSC/CGSC version it came
from. Re-run the importer against a newer export to refresh; there's no
way to "re-fetch" it like the live-API sources.

One naming subtlety worth knowing if you touch this script: the dump's
`shortname`/`name` columns inconsistently hold either a scene handle or
a real name (e.g. DRAX's `shortname` is "Thomas Mogensen", not "DRAX")
— composer identity is always taken from the HVSC folder path instead
(the same `Lastname_Firstname` → `Firstname Lastname` heuristic
`build-seed-from-hvsc.js` already used), which is what every other part
of this project already treats as canonical anyway.

### Extending the seed list further

To generate a full HVSC composer list from the **live** API instead
(no local dump needed, but depends on `?folder=`, which is down as of
this writing):

```bash
npm run seed:full
```

This calls `scripts/build-seed-from-hvsc.js`, which fetches DeepSID's
entire `/MUSICIANS/` folder tree in a **single** request — DeepSID's
`?folder=` endpoint matches subfolders with a SQL `LIKE '%path/%'`,
which (per its own source, see `docs/DEEPSID-API.md`) returns every
folder at every depth under the requested path, not just direct
children. It writes `data/composer-list-full.json` (gitignored,
regenerable) rather than overwriting `data/composer-list.json` directly
— review the output and merge entries in by hand.

## SID files linked to players

Every composer card can expand to show its individual HVSC SID files,
and the **Files** tab lists all of them in one place across every
composer. `build-html.js` computes each composer's file list once,
preferring DeepSID's own `folder` field (from `?file=<composer>/`,
including each file's free-text `player` field) and falling back to
HVSC's own `STIL.txt` (filename/title/artist only — see "Two sources
for file listings" below) when DeepSID's isn't available. Either way,
a file's `player` string is matched against the players/editors
database's `title` field with version numbers stripped (so
`"GoatTracker 2.62"` matches a title like `"GoatTracker v2.x"`).
Unmatched or unidentified players render without a link rather than a
false match — the **Players** tab's detail view (click any player
title) shows the reverse: every composer/file matched to *that* player.

### Three sources for file listings

`build-html.js` builds each composer's file list preferring, in order:
(1) a real live fetch via DeepSID's own `folder` field (`?file=<composer>/`,
including each file's free-text `player` field), (2) the DeepSID
database export (`import-deepsid-dump.js` — also has the real `player`
field, since it's the same underlying table `?file=` reads from), (3)
HVSC's own `STIL.txt` (filename/title/artist only — STIL doesn't track
which player/editor made a file, so those entries can't be linked to a
player and show honestly as "unknown — STIL has no player data" rather
than a guess).

DeepSID's `?file=`/`?folder=` endpoints have been returning
`"Could not connect to the DeepSID database"` since this project was
built — a live outage on DeepSID's side (confirmed independent of this
project: `?players` and `?profile=` still work fine). The database
export import (above) exists largely *because of* this outage — it
gets real per-file player data for the ~1,895 composers in the dump
without depending on the broken endpoint at all, just from an older
snapshot rather than the live site. Only composers outside the dump's
coverage (there shouldn't be many) still fall back to STIL. Once the
outage recovers, `npm run fetch:composers -- --refresh` will get
current live data for the curated set again.

## Rate limiting

`deepsid-client.js` throttles to one request every 400ms by default. This
is a free service run by one person, not a company API — please don't
turn that down. Fetching all 56 seed composers takes about 45 seconds
because of this; that's intentional.

## Contributing gaps back upstream

After running `npm run gaps`, open `docs/GAPS_REPORT.md`. It's formatted
to be pasted more or less directly into a new issue at
https://github.com/Chordian/deepsid/issues — JCH maintains DeepSID
actively (confirmed changelog activity through mid-2026), so genuine
reports are likely welcome. Read through the findings first though; this
script flags *sparse* data, not necessarily *wrong* data, and some fields
are legitimately unknown (lost to history) rather than un-filled-in.

## Known limitations

- Composer coverage now comes from the DeepSID database export
  (~1,895 real `MUSICIANS/` composers) rather than the original
  56-composer curated seed — but it's a **dated snapshot**
  (`data/deepsid-dump/meta.json` records the HVSC/CGSC version), not
  live data. Composers added to HVSC after that snapshot won't appear
  until the export is re-downloaded and re-imported.
- The generated page is correspondingly large now — about 8-9MB for
  ~1,900 composers and ~55,000 files, down from an initial 42MB before
  a few redundant-data fixes (duplicate file records embedded three
  times over; see git history). Still large enough that a low-end
  device or slow connection will notice.
- DeepSID's `developer`/`docs`/`source_code` player fields sometimes
  contain pre-formatted HTML (an embedded `<a>` link) and sometimes
  plain description text ("Included in archive") — the template renders
  them as trusted HTML content rather than wrapping the whole field in
  its own link, which would break for the plain-text cases.
- HVSC name matching (`lib/hvsc.js`) is exact-string-on-handle (plus a
  conservative unambiguous-candidate fallback for gap suggestions) —
  accented characters or composers who go by a different handle in
  DeepSID vs. HVSC still won't match. Coverage jumped from 23 to over
  1,000 matches once the full composer set was imported and a real
  Musicians.txt parsing bug was fixed (see git history), but it's not
  exhaustive.
- CSDb enrichment only covers composers whose DeepSID profile already has
  a non-zero `csdb_id` — composers DeepSID hasn't linked to CSDb yet get
  no enrichment, not an error.
- `find-gaps.js`'s idea of "missing" is a fixed field list
  (`EXPECTED_PLAYER_FIELDS` in that script) — adjust it if DeepSID's
  schema has fields this project doesn't know to check yet.
- No automated tests. This is a personal research tool, not a shipped
  product — but if it grows, it'd benefit from a couple of tests around
  the gap-detection logic specifically, since false positives there waste
  a maintainer's time if reported upstream uncritically.
