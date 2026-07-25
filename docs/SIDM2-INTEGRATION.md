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

- **~1,895 composers** and **~54,600 SID files** cataloged; player
  knowledge cards under `knowledge/players/` — see `knowledge/COVERAGE.md`
  for the current card count, and `rg -h '"status"' knowledge/players/*.md
  | sort | uniq -c` for the verified/in-progress/stub breakdown — all
  ingested into the `tdz-c64-knowledge` MCP server — so integration modes #1
  and #2 below are effectively LIVE: a SIDM2 session can already search this
  project's player facts via TDZ.
- The cards carry a machine-readable facts block (memory map, entry points, data
  format, `edges[]` lineage) — exactly the scaffold a SIDM2 disassembly fills in.
  A card reaches `verified` only when a reconstruction **assembles and plays**.
  (This line once read "the 7 verified are composer-driver reconstructions:
  Hubbard, Galway, Whittaker, Fred/Matt Gray, Kimmel, plus Laxity NewPlayer" —
  long stale. As of 2026-07-25 it is **138 verified / 96 in-progress / 286 stub**
  across 520 cards. Run `node knowledge/build-graph.js` for the live figure
  rather than trusting any number written here.)
- New analytical surface SIDM2 can lean on: `scripts/dev/find-connections.js`
  (player↔player composer-overlap), `find-group-tools.js` (scene-group usage),
  `find-eras.js` (per-file production years from PSID headers), and the narrative
  in `docs/SID-HISTORY.md` (the lineage clusters written up).

## The joint worklist — what SIDM2 has ported, and what's left

**Superseded the old priority table (2026-07-25).** That table ranked six
targets — jch-newplayer, sid-factory-ii, goattracker, dmc, cheesecutter,
soundmonitor — and *all six* have since reached `verified` here. Coverage-driven
ranking is spent: `verified` cards now account for **50,167 of 54,607 tagged
files (91.9%)**, `in-progress` for 847 (1.6%) and `stub` for 3,593 (6.6%), and
the largest single un-verified family left is 234 files — which is
`basic-program`, explicitly a meta-tag rather than a player. Value has moved
from *breadth* to *depth*.

This is the merged view: every player SIDM2 has ported alongside the ones it
hasn't, so the two projects read off one list.

**Reading the columns.** `Files` is HVSC `MUSICIANS/`-tagged files aggregated
from `data/composers/*.json`; it is a **lower bound and it badly understates the
game-composer drivers** — `GAMES/` is invisible in this dataset, which is
exactly where Galway, Hubbard, Whittaker, the Grays and Jeroen Tel did most of
their work. Do not read a low count there as low value. `Deg` is `edges[]`
degree from `knowledge/graph.json` (a hub anchors its whole cluster). `T` counts
unresolved `TODO:` fields on the card — the depth gap that remains *after*
`verified`. SIDM2 accuracy figures are **SIDM2's own reported results**, recorded
here as of 2026-07-25; they are not re-derived by this project.

| # | Player | SIDM2 state | Files | Deg | Card |
|--:|---|---|--:|--:|---|
| 1 | [[dmc]] — Bjerregaard | ✅ Balloon wf/pulse 100×3 over 400 s | 10,496 | 6 | verified, 0T |
| 2 | [[goattracker]] | ❌ not ported | 8,421 | 0 | verified, 2T |
| 3 | [[music-assembler]] | ❌ not ported | 6,127 | 1 | verified, 1T |
| 4 | [[future-composer]] ($1800) | ⚠️ Stage A only — *"the one genuinely incomplete port"* | 3,398 | 2 | verified, 3T |
| 5 | [[soundmonitor]] — Hülsbeck | ✅ 99.23% strict corpus sweep | 2,403 | 2 | verified, 0T |
| 6 | [[jch-newplayer]] (NP21) | ✅ via the Laxity path | 1,885 | **9** | verified, 2T |
| 7 | [[jch-newplayer-v20]] (20.G4) | ⚠️ **70–90% — weakest shipped driver** | 1,616 | 1 | verified, 2T |
| 8 | [[sidwizard]] | ❌ not ported | 989 | 1 | verified, 2T |
| 9 | [[sidduzzit]] — Gallefoss/Tjelta | ⚠️ Stage A; 348 SF2s, 324 sweep-validated | 979 | 1 | verified, **7T** |
| 10 | [[romuzak]] V6.3 | ✅ byte-exact wf/pulse/AD-SR ~98–100% | 563 | 0 | verified, 1T |
| 11 | [[laxity-newplayer]] v21 (native) | ✅ **99.93–100%** | 502 | 6 | verified, 0T |
| 12 | [[sid-factory-ii]] / [[sid-factory-ii-driver-11]] | ✅ 100% — **SIDM2's target format** | 360 | 6 | verified, **5T** |
| 13 | [[cheesecutter]] | ❌ not ported | 293 | 2 | verified, 1T |
| 14 | [[rob-hubbard]] V1/V2 | ✅ V1 freq 99.3–100; V2 (Delta) wf 85–97% | 256 | 3 | verified, 2T |
| 15 | [[mon-deenen]] — Charles Deenen | ✅ 7 clean wins + 8 freebies at 100% | 137 | 2 | verified, 1T |
| 16 | [[reflextracker]] | ❌ not ported (open source) | 131 | 0 | in-progress, 3T |
| 17 | [[vibrants-jo]] | ❌ not ported | 131 | 0 | verified, **7T** |
| 18 | [[david-whittaker]] | ❓ card cites SIDM2; absent from SIDM2's own port list | 114 | 2 | verified, 0T |
| 19 | [[zardax]] | ❌ not ported | 113 | 0 | stub, 4T |
| 20 | [[sync]] (SYNdrom Composer) | ❌ not ported | 107 | 0 | stub, 5T |
| 21 | [[defmon]] | ❌ not ported | 102 | 0 | in-progress, 4T |
| 22 | [[sosperec]] | ❌ not ported | 99 | 0 | stub, 3T |
| 23 | [[chubrocker]] | ❌ not ported | 98 | 0 | stub, 6T |
| 24 | [[matt-gray]] | ❓ card cites SIDM2; absent from SIDM2's own port list | 68 | 0 | verified, 0T |
| 25 | [[martin-galway]] | ✅ ~100%/register, 30/40 objectively clean in real SF2II. Stage A default is a Driver 11 transpile — notes/timing exact, **timbre approximated** | 54 | 0 | verified, 0T |
| 26 | [[fred-gray]] | ❓ card cites SIDM2; absent from SIDM2's own port list | 49 | 0 | verified, 0T |
| 27 | [[jeroen-kimmel]] (Hubbard-derived) | ✅ 11/12 voice-medians exact 100% | 42 | 1 | verified, 1T |
| 28 | [[blackbird]] / lft | ✅ **99.96%, 11/16 at exactly 100.0** | 40 | 0 | in-progress — see below |
| 29 | [[dane-newplayer]] | ❌ not ported | 27 | 1 | stub, 6T |
| 30 | [[lft]] (hand-coded pre-Blackbird routines) | ❓ not separately listed by SIDM2 — distinct from the Blackbird tag (18 files, bare `LFT`, 2001–2014) | 18 | 0 | in-progress |
| 31 | Maniacs of Noise / Jeroen Tel — Hawkeye, Cybernoid I/II, Myth, Supremacy | ✅ Hawkeye 100% byte-exact (subtunes 2 & 3); others ~95–100%/register | — | — | see "Jeroen Tel" below |
| 32 | NP21 editor-view clusters — [[drax-newplayer]], [[vibrants-2000ad]], [[wizax-a]], [[stinsen-newplayer]], [[beast-angular-newplayer]] | ✅ resolved as **variants inside the Laxity path**, not separate players | 0 each | 1–2 | all stub |

### Jeroen Tel is not a missing card

There is no `jeroen-tel` card and there should not be one on current evidence.
His HVSC `MUSICIANS/` output is tagged `MoN/Deenen` (64 files),
`MoN/FutureComposer` + its `Deenen_Digi`/`Bantam`/`Cyb2`/`JTS` variants (41),
`Rob_Hubbard` (18) and `SoundMonitor/MusicMaster_1` (39) — every one of which
already has a `verified` card. The titles SIDM2 ported (Hawkeye, Cybernoid I/II,
Myth, Supremacy) are all `GAMES/` releases, which this dataset cannot see at
all. What is genuinely missing is not a card but the **mapping from SIDM2's
game-title results back onto [[mon-deenen]] / [[mon-futurecomposer]]**.

### Blackbird / LFT: SIDM2 clears a blocker this project still has

[[blackbird]] stays `in-progress` deliberately. Its playroutine uses
undocumented 6502 opcodes (`lax`, `sbx`), and **both local tracers fail on it** —
re-confirmed 2026-07-25 via this repo's own `sidm2-siddump` MCP `trace_sid` on
`MUSICIANS/L/Lft/Toy_Rocket.sid`: INIT completes, then `0 SID writes over 20
frames` and the tracer's self-check reports the file *untraceable*. This
project's `verified` bar is a local trace-diff (see below), so the status is
correct as it stands.

SIDM2 reaching 99.96% on this player therefore means **SIDM2's tracer handles
illegal opcodes and this project's does not.** That is the single most
actionable integration item on this page: adopting SIDM2's tracer here would
unblock Blackbird and the other cards this KB has parked behind the same
`lax`/`sbx` wall.

Note that [[lft]] is a *separate* card from [[blackbird]] — the bare `LFT` tag
covers 18 hand-coded routines from 2001–2014, each with a different
load/init/play address, predating the Blackbird tracker. SIDM2's port list
names "Blackbird / lft", which is the tracker; whether the older hand-coded
routines were also covered is not stated, so it is left open above rather
than assumed.

### What's actually worth doing next

1. **[[jch-newplayer-v20]]** — 1,616 files at 70–90%, the weakest driver SIDM2
   ships. Biggest accuracy win available.
2. **[[sidduzzit]]** — 979 files, Stage A only, and **7 open format fields**
   (orderlist, patterns, instruments, wave/pulse/filter tables, effect
   encoding are all byte-level unknown). The worst depth gap of any high-usage
   card; a SIDM2 disassembly is the only thing that fills it.
3. **[[future-composer]]** — 3,398 files, SIDM2's own acknowledged incomplete
   port.
4. **Never attempted, high usage**: [[goattracker]] (8,421, GPL source),
   [[music-assembler]] (6,127), [[sidwizard]] (989, open source).
5. **Reconcile** [[david-whittaker]], [[matt-gray]], [[fred-gray]] — all three
   are `verified` here citing SIDM2 as provenance but do not appear in SIDM2's
   port list. Either they predate it or the cards over-claim.

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

`sidm2-siddump` is wired up in `.mcp.json` at the repo root, pointing at the
SIDM2 checkout's `mcp-siddump/server.py` by absolute path. That path is
specific to the machine this project was built on — anyone else cloning this
repo needs to edit `.mcp.json`'s `args` to point at their own local SIDM2
checkout before this server will start.

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
