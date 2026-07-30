# Project context for Claude Code

This project fetches data from the DeepSID API (https://deepsid.chordian.net/api/v1.php)
and builds a local HTML reference from it. See README.md for the full
picture; this file is quick orientation for a fresh session. Detailed
implementation history and landmines behind specific features live in
`docs/IMPLEMENTATION-NOTES.md` — read the relevant section there when
you're about to touch that area of code, not up front.

## Quick facts

- Node 18+ (uses built-in `fetch`). One runtime dependency:
  `fast-xml-parser`, used only by `scripts/lib/csdb-client.js` since
  CSDb's webservice is XML-only.
- `npm run all` does everything: fetch (DeepSID players/composers, CSDb,
  player media, HVSC docs) → analyze gaps → build HTML — see
  `package.json`'s `scripts` block for the authoritative step chain
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
- DeepSID's `?file=`/`?folder=` endpoints are down as of this writing
  (`"Could not connect to the DeepSID database"`) — `?players` and
  `?profile=` still work. Worked around via DeepSID's own database export
  (`scripts/import-deepsid-dump.js`, a one-time dated snapshot covering
  ~1,895 composers / ~55,000 files) plus a STIL.txt fallback/additive
  lookup for song notes. See "DeepSID API status and the STIL.txt
  fallback" and "The DeepSID database export" in
  `docs/IMPLEMENTATION-NOTES.md`.
- Output payload size is a known constraint (once blew up to 42MB) —
  `build-html.js` prints the actual output size at the end of every
  `npm run build`; check that rather than trusting a figure written here
  (currently ~10.75MB). See "Payload size" in `docs/IMPLEMENTATION-NOTES.md`
  for the history and its one standing rule: when a data field is deleted
  server-side, grep the template for every reader of it, not just the
  ones the current task touches.
- Text fetched from HVSC (`www.hvsc.c64.org`) is ISO-8859-1, not UTF-8 —
  `fetch()`'s `.text()` decodes as UTF-8 regardless of the response's
  actual charset and silently corrupts every accented character.
  `fetch-hvsc-docs.js`'s `downloadText()` decodes via
  `Buffer.from(...).toString('latin1')` instead — don't swap that back to
  `res.text()`. `sidid.nfo` (SIDId enrichment, see below) has the same
  trap, decoded the same way in `import-sidid.js`.
- **Players/Editors isn't just DeepSID's curated 129 anymore.** ~496
  distinct raw player tags (17,538 files, ~32% of the collection) don't
  resolve to a curated entry, so `deriveSyntheticPlayers()` synthesizes an
  `inferred: true` entry for each and merges it into
  `window.SID_DATA.players` — every existing consumer (Files tab, Players
  tab, usage counts) picks these up for free. SIDId enrichment
  (`scripts/import-sidid.js`) fills in real author/name/year for 247 of
  them. Full mechanics and examples: `docs/IMPLEMENTATION-NOTES.md`.
- **The SID Files tab** (`renderFiles()`) is a grouped, filterable grid of
  every file across every composer, linked to its player where
  identifiable. **`csdbId` landmine**: a *file*'s `csdb_id` is a CSDb
  **SID-entry** id (`csdb.dk/sid/?id=`); a *player*'s `csdb_id` is a
  **release** id (`csdb.dk/release/?id=`) — same field name, two
  different namespaces that overlap numerically, so querying one as the
  other silently returns an unrelated page instead of 404ing. Verify
  which namespace you're in before adding any new CSDb link — this has
  bitten four separate research passes already. Full mechanics:
  `docs/IMPLEMENTATION-NOTES.md`.
- The generated page has seven tabs beyond Composers/Gaps: Players/
  Editors, SID Files, Countries, Player Families, Scene Groups, Sources,
  and Insights (ten aggregate stats/charts). Filter/sort behavior and the
  Insights tab's specific computations: `docs/IMPLEMENTATION-NOTES.md`.
- **Number formatting**: always call the template's `fmtNum(n)` helper —
  never call `.toLocaleString()` directly. With no locale argument it uses
  the *visitor's browser locale* (this dev environment defaults to
  `en-DK`, rendering "14.043" instead of "14,043"); `fmtNum` forces
  `'en-US'`.
- `find-gaps.js` adds a `suggestion` field to a gap when a candidate fix
  exists in CSDb or HVSC (composer country/realname/group, player `site`).
  Deliberately conservative — see `docs/IMPLEMENTATION-NOTES.md` and
  TODO.md for why looser matching isn't the fix.

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
  DeepSID database export" in `docs/IMPLEMENTATION-NOTES.md`.
  Re-importing a newer export is manual.
- No automated tests, particularly around `find-gaps.js`'s detection
  logic — false positives there waste a maintainer's time if reported
  upstream without review.
- See `docs/SIDM2-INTEGRATION.md` for the (currently manual) connection
  to the SIDM2 disassembly project.
- Composer/file counts are hand-maintained across 10+ locations in
  `README.md`/`CLAUDE.md`/`TODO.md` and legitimately differ by
  denominator — `~1,895` is the seed list (`data/composer-list.json`),
  `1,902` is cached composers (`ls data/composers/*.json`), `54,608` is
  tagged files (`knowledge/COVERAGE.md`), `55,223` is dump-sourced file
  rows. Don't "harmonise" these to one number if you touch them — they
  measure different things. When a count is next edited, prefer linking
  to its generated source (e.g. `knowledge/COVERAGE.md`) over writing a
  fresh copy.

## Player knowledge base (`knowledge/`)

A separate, git-versioned store of reverse-engineering knowledge about SID
players (disassembly facts, SF2 driver notes), so the next player starts
from accumulated knowledge rather than a blank disassembler. See
`knowledge/README.md` for the full design rationale (markdown cards are
the source of truth, `graph.json` is derived, `tdz-c64-knowledge` is the
access layer, `mcp-c64` is the verification loop — a card only becomes
`status: verified` once its reconstruction actually assembles+runs).
Card counts drift every batch — run `node knowledge/build-graph.js` for
the current figure rather than trusting a number written here.

The disassembly-derived fields (memory map, ZP, entry points, effect
encodings) are largely sourced from the **SIDM2 project**
(`c64server/SIDM2` — reverse-engineers Laxity-family SID players into
SF2; the `laxity-newplayer.md` card is seeded from its disassembly +
author source, externally validated at ~99.93% frame accuracy). See
`docs/SIDM2-INTEGRATION.md` for the worklist and "the verification loop"
tooling that connects the two projects.

## Testing without network access

If working in a sandboxed environment without access to
`deepsid.chordian.net`, you can still test the JSON→HTML pipeline by
hand-writing fixture files into `data/composers/*.json` matching the
shape `{ name, path, profile, folder, fetchedAt }` and running
`node scripts/build-html.js` directly — it only reads from `data/`, it
doesn't care how those files got there.

## Model delegation
For research/data-structuring subtasks — fetching or restructuring raw
DeepSID/CSDb data, drafting first-pass player-card prose — delegate to a
cheaper model instead of doing it yourself: run
`python tools/delegate.py <model> "<prompt>"`.

Available models, cheapest/free first:
- nim-nano       — try this first for routine subtasks (free tier)
- nim-super      — stronger NIM model, still free tier
- deepseek-flash — cheapest paid option, good default for structured output
- deepseek-pro   — better quality DeepSeek, use if flash output looks weak
- kimi-2.7       — closer to Claude quality, use for subtasks that need
                   more careful reasoning or agentic behavior
- kimi-k3        — Kimi's strongest/most expensive model, use sparingly

Start with nim-nano for routine work. Escalate to deepseek-flash or
kimi-2.7 if the subtask involves more nuance than simple data structuring.
Reserve your own reasoning for planning, architecture decisions, and the
final falsification review — never delegate that.
