# Connecting this to SIDM2

SIDM2 is a C64 disassembly project using `regenerator2000` (native Rust
disassembler with MCP transport and 64tass export) as its MCP server. This
project and SIDM2 have complementary data: SIDM2 works from the binary up
(disassembling actual 6502 code), this project works from the catalog down
(DeepSID's metadata about what that code *is*). Three concrete ways to
connect them, roughly in order of effort:

## Current state (2026-07-18) — read this first

This doc predates most of the project. The figures further down ("56 composers",
"145 documents") are stale; the current picture:

- **~1,895 composers** and **~54,600 SID files** cataloged; **345 player
  knowledge cards** under `knowledge/players/` (7 `verified`, the rest
  `in-progress`/`stub`), all ingested into the `tdz-c64-knowledge` MCP server
  (~578 documents) — so integration modes #1 and #2 below are effectively LIVE:
  a SIDM2 session can already search this project's player facts via TDZ.
- The cards carry a machine-readable facts block (memory map, entry points, data
  format, `edges[]` lineage) — exactly the scaffold a SIDM2 disassembly fills in.
  A card reaches `verified` only when a reconstruction **assembles and plays**
  (the 7 verified are composer-driver reconstructions: Hubbard, Galway, Whittaker,
  Fred/Matt Gray, Kimmel, plus Laxity NewPlayer at ~99.9% frame accuracy).
- New analytical surface SIDM2 can lean on: `scripts/dev/find-connections.js`
  (player↔player composer-overlap), `find-group-tools.js` (scene-group usage),
  `find-eras.js` (per-file production years from PSID headers), and the narrative
  in `docs/SID-HISTORY.md` (the lineage clusters written up).

## Which players to tackle next — a KB-driven priority list

The single most useful thing this project can hand SIDM2 is a *ranked* worklist:
which not-yet-`verified` players would return the most value if disassembled and
reconstructed. Ranked by **usage** (files affected), **lineage centrality**
(`edges[]` degree — verifying a hub anchors its whole cluster), and
**tractability** (public source to diff against beats reverse-engineering from
scratch). Regenerate with `scripts/dev/` data; the current top picks:

| Player | Files | Edges | Public source? | Why |
|---|---|---|---|---|
| **[[jch-newplayer]]** | 1,885 | 9 | no (RE) | **Highest leverage.** The tracker-dynasty hub; SIDM2's exact family (Laxity NewPlayer already `verified` beside it). No public source, but [[cheesecutter]]'s GPL source *declares* "Based on JCH NP 21.G4 by Laxity/VIB" — a lever straight into it. |
| **[[sid-factory-ii]]** | 360 | 6 | **yes** (GPL, chordian/sidfactory2) | Most tractable *and* it is SIDM2's own **target format** — read the driver `.asm` directly, no RE. Verifying the tool SIDM2 converts *into* is foundational. |
| **[[goattracker]]** | 8,421 | 0 | **yes** (GPL, Cadaver) | Biggest single coverage win with public source. Standalone, well-documented. |
| **[[dmc]]** | 10,491 | 2 | no (RE) | The largest player family in the whole collection — a full RE, but the biggest coverage payoff of any. |
| **[[cheesecutter]]** | 293 | 2 | **yes** (GPL) | Modern, open, and a dynasty member whose source states its JCH/Laxity descent — an easy win that also corroborates the Era III lineage. |
| **[[soundmonitor]]** | 2,403 | 2 | no (RE) | The Era II hinge (game-driver → published editor); high usage; would anchor the Hülsbeck cluster. |

Others with public source (tractable, lower centrality): [[sidwizard]],
[[music-assembler]] (a reimplementation exists), [[future-composer]] (libsidplayfp
carries a replay). The natural SIDM2 sequence is therefore: **verify the
dynasty (jch-newplayer via the CheeseCutter/SF2 open sources), then sweep the
high-file open-source standalones (GoatTracker, SID-Wizard), then take on the big
closed RE targets (DMC, SoundMonitor)** last.

## The verification loop (how a card actually moves to `verified`)

The trace tooling to close the loop is available in this workspace:
`sidm2-siddump` (`trace_sid` for an existing `.sid`, `trace_prg` for a
hand-assembled reconstruction, `diff_traces` to check two traces are
register-write-identical) and `mcp-c64` (`assemble_program`, `run_program`). The
pipeline for a target above: SIDM2 disassembles/reconstructs the player →
`assemble_program` it → `trace_prg` the reconstruction and `trace_sid` a real
HVSC file for that player → `diff_traces`; when they match, the card's facts are
confirmed and its `status` flips to `verified`. This is the same bar the 7
existing verified cards met.

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
