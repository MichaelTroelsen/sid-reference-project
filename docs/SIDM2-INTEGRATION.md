# Connecting this to SIDM2

SIDM2 is a C64 disassembly project using `regenerator2000` (native Rust
disassembler with MCP transport and 64tass export) as its MCP server. This
project and SIDM2 have complementary data: SIDM2 works from the binary up
(disassembling actual 6502 code), this project works from the catalog down
(DeepSID's metadata about what that code *is*). Three concrete ways to
connect them, roughly in order of effort:

## 1. Player identification as a disassembly starting point

Every SID file's `player` field (from `?file=` or `?profile=` folder
data) names the music driver/routine that file uses — GoatTracker, JCH
Editor, a composer's own custom player, etc. When SIDM2 is disassembling
a game or demo binary that includes SID music, knowing the player ahead
of time means:

- If it's a known tracker (GoatTracker 2, SID-Wizard, SID Factory II),
  the driver's source is public — the disassembly can be diffed against
  known driver source rather than reverse-engineered from scratch.
- If it's a composer's custom player (Rob Hubbard, Martin Galway, etc.),
  this project's `data/composers/*.json` cache already has that
  composer's other SIDs — useful for spotting shared code patterns across
  a composer's catalog, since many composers reused their player routine
  across multiple games with only the data tables changing.

Practical step: before starting a SIDM2 disassembly session on a binary
with known SID content, look up its player via this project's cached
data (`data/composers/<slug>.json` → `folder` → matching file →
`.player` field) and note it in SIDM2's session context.

## 2. Feed this data into the TDZ C64 Knowledge MCP server

The existing TDZ C64 Knowledge MCP server (145 documents, ~7M words,
FTS5 + semantic search) is the natural home for this project's output —
composer profiles, player/editor technical specs, and gap reports are
all documents in the same sense as the rest of that corpus.

Concretely: after `npm run build`, the same `data/*.json` that feeds
`output/index.html` could be chunked and indexed into TDZ's FTS5 store
alongside existing documents. That would make questions like "what driver
did Jeroen Tel use for Cybernoid?" or "which SID composers wrote their own
player routines?" answerable directly in a Claude Code session working on
SIDM2, without leaving that workflow to check DeepSID manually.

This needs a small indexing script (not built here) that reads
`data/composers/*.json` and `data/players.json` and writes them into
whatever ingestion format TDZ's FTS5 setup expects. Worth building once
this project's seed list grows past the current 56 composers — at that
size, manual lookup is still fine.

## 3. Expose this project's data as its own MCP server

If querying this data becomes a frequent need during SIDM2 sessions
rather than an occasional one, the next step is wrapping `data/*.json` in
a small MCP server of its own — following the same pattern as
`regenerator2000`. Tools like `get_composer(name)`, `get_player_by_sid(path)`,
`find_composers_using_driver(driver_name)` would let Claude Code query
this data directly mid-disassembly rather than requiring a manual lookup
and copy-paste into context.

This is deliberately not built in this project yet — it's a reasonable
next step once the fetch/build pipeline here has been run a few times and
the data's usefulness in practice is clearer. Building an MCP server
around data that might still need schema changes is premature; the
JSON-file approach in `data/` is intentionally simple to iterate on
first.

## Not connected (on purpose)

This project doesn't try to *write* anything back into SIDM2 or vice
versa — they stay as separate tools reading/writing their own data,
connected only by the composer/player identifiers that happen to be
meaningful in both. That seemed like the right boundary: SIDM2 is about
disassembling code, this project is about cataloging music metadata, and
forcing them into one tool would make both harder to reason about.
