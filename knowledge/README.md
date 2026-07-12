# Player knowledge base

A reusable, git-versioned store of what we learn from disassembling C64 SID
players and authoring SID Factory II drivers/instruments — so the *next*
player starts from accumulated knowledge instead of a blank disassembler.

## Why it's shaped this way

This is **not** a trained model and **not** a graph-database-as-source-of-truth.
It's a layered/hybrid design (see the discussion that produced it):

1. **Files are the source of truth** (this folder). Markdown cards + prose,
   diffable and reviewable in git. One card per player.
2. **The graph is derived** — `build-graph.js` projects the machine-readable
   facts block out of each card into `graph.json`. Regenerate any time; never
   hand-edit the graph. The graph exists because SID players form a
   *derivation DAG* (SF2 ← predecessors; JCH NewPlayer V1→V20; shared
   routines; shared effect encodings) — relationship queries a flat grep
   can't answer.
3. **Access via MCP** — the `tdz-c64-knowledge` server (already built,
   separately, for general C64 documentation search) is wired in and the
   cards are ingested into it (`add_document` per card, tagged
   `sid-player-kb` + the card's id) so an agent can search/query them
   mid-task via its FTS5/semantic search tools. The cards themselves
   remain the source of truth — `tdz-c64-knowledge` is a queryable index
   over them, not a replacement; re-ingest a card (same `add_document`
   call) after editing it, the same way `graph.json` is regenerated.
4. **Verification via `mcp-c64`** (the c64 MCP already available) — a player
   card is only `status: verified` once its reconstructed init/play has been
   assembled and run to confirm the facts. This KB is unusually testable;
   use it.

## Layout

```
knowledge/
  players/
    _template.md          # the schema — copy this to start a new card
    <player-id>.md        # one card per player (id = kebab-case filename)
  playbooks/
    disassemble-a-player.md   # method: how to reverse an unknown player
  artifacts/
    <player-id>.*         # annotated disassembly listings, data-format specs
  build-graph.js          # cards' JSON facts blocks -> graph.json
  graph.json              # generated (gitignored)
```

## The card format

Each card opens with **one fenced ```json block** — the machine-readable
"facts" (`build-graph.js` reads exactly this). JSON (not YAML frontmatter) so
it parses with zero dependencies and handles nesting cleanly. Everything
after it is human/LLM prose: Overview, Quirks, Disassembly notes,
Verification, Sources. Unknown facts are the string `"TODO: ..."` (never
guessed — a wrong memory map is worse than a blank one).

## Adding a player

1. `cp players/_template.md players/<id>.md`, fill what you know, mark the
   rest `TODO`.
2. Add typed `edges` (`derives_from`, `shares_routine_with`,
   `same_effect_encoding_as`, `successor_of`) to other card ids — targets
   without a card yet are fine (they mark work to do).
3. `node build-graph.js` and skim the summary for dangling edges / cycles.
4. Once assembled+run through `mcp-c64`, bump `status` to `verified`.
