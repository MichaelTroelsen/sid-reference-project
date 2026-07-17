# NinjaTracker V1.x

```json
{
  "id": "ninjatracker-v1x",
  "name": "NinjaTracker V1.x",
  "aliases": ["NinjaTracker_V1.x"],
  "authors": ["Lasse Öörni (Cadaver) / Covert Bitops"],
  "released": "2002 (v1.0, CSDb release 7206, 31 Oct 2002); iterated to v1.1 by 2004 (CSDb release 39501, 25 Jan 2004)",
  "status": "stub",
  "platform": "Native C64 editor (cached DeepSID spec: 'Native / C64 emulator', distribution 'Freeware'). TODO: whether a V1.x source archive/mirror exists was not confirmed in this pass — unlike V2.x (whose official archive and a third-party GitHub mirror both ship full 6502/DASM source, see ninjatracker-v2x.md), no public source for V1.x specifically was located.",
  "csdb_release": 7206,

  "memory": {
    "load_address": "TODO: not sourced (no disassembly, no located V1.x source archive)",
    "zero_page": "Cached DeepSID spec (data/players.json, title 'NinjaTracker v1.x') states 'Approx 3-5 bytes ($FB-$FF)' — this is a secondary/aggregated spec value, not confirmed here by reading source or a disassembly, so treat as unverified pending a real trace.",
    "layout": "TODO: not sourced"
  },
  "entry": {
    "init": "TODO: not sourced",
    "play": "TODO: not sourced"
  },
  "speed": "TODO: not sourced (DeepSID's cached spec leaves the 'speeds' field blank for this entry, unlike V2.x's confirmed '1x')",

  "data_format": {
    "order_list": "TODO: not sourced",
    "patterns": "TODO: not sourced",
    "instruments": "TODO: not sourced",
    "wavetable": "TODO: not sourced",
    "pulsetable": "TODO: not sourced",
    "filtertable": "TODO: not sourced"
  },
  "effects": {
    "encoding": "TODO: not sourced",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is the FIRST generation of Cadaver's NinjaTracker line, predating NinjaTracker V2.x (ninjatracker-v2x.md, 2006-2013). That card's own quirks note the V2 archive's readme.txt states 'Main differences to previous versions are general purpose commands (or instruments), two-column tables and a slide function that knows to stop at the target pitch' — direct evidence V2 is a revision of this tool, which is why ninjatracker-v2x.md carries `successor_of: [\"ninjatracker-v1x\"]`. This V1.x card does not re-assert that edge (edges are one-directional in this graph; the successor's card is the citable source for it) — writing this card exists specifically to resolve that edge from dangling to a real node.",
    "Two distinct CSDb releases exist under the V1.x umbrella: v1.0 (id 7206, 31 Oct 2002, filename ninjatrk.zip per csdb.dk's download link) and v1.1 (id 39501, 25 Jan 2004). SIDId's `NinjaTracker_V1.x` tag references the earlier release (7206); the cached DeepSID player spec (data/players.json) uses the later one (39501, start_year 2002/end_year 2004) — same asymmetric earliest-vs-latest-release citation pattern already flagged in ninjatracker-v2x.md's sources, not a new bug.",
    "Composer concentration in this dataset is very narrow: only 7 composers, 16 files total (Jaymz Julian and Maktone lead with 4 each, Cadaver himself used his own tool on 3 files) — a small-scene/early-adopter tool, not a widely-spread tracker. This matches the family's overall shape: V1.x + V2.x combined rank at 106 files per knowledge/COVERAGE.md, and V1.x is the smaller share (16 of that 106).",
    "V1.x and V2.x are tracked as separate SIDId/DeepSID tags/entries/CSDb release chains despite being the same author's evolving tool — do not merge their file counts or CSDb release IDs. (Same caution already recorded in ninjatracker-v2x.md, restated here for symmetry.)",
    "The cached DeepSID spec (data/players.json) for this entry is unusually sparse compared to the V2.x entry — only distribution/platform/csdb_id/start_year/end_year/zero_pages are filled; description, speeds, data_format-adjacent fields (instruments, patterns, track_system, etc.) are all blank strings. Treat the populated zero_page value with appropriate caution: it is DeepSID's own aggregated spec box, not this card author's disassembly."
  ],
  "sources": [
    "SIDId (data/sidid.json byTag.NinjaTracker_V1.x): author 'Lasse Öörni (Cadaver)', released '2002 Covert Bitops', reference https://csdb.dk/release/?id=7206",
    "data/players.json (cached DeepSID player spec, title 'NinjaTracker v1.x'): developer Cadaver, start_year 2002, end_year 2004, csdb_id 39501, site https://cadaver.github.io/, platform 'Native / C64 emulator', distribution 'Freeware', zero_pages 'Approx 3-5 bytes ($FB-$FF)' (all other spec fields blank in the cached record)",
    "CSDb release (v1.0, 31 Oct 2002): https://csdb.dk/release/?id=7206 — title 'NinjaTracker V1.0', code by Cadaver of Covert Bitops",
    "CSDb release (v1.1, 25 Jan 2004): https://csdb.dk/release/?id=39501 — title 'NinjaTracker V1.1', code by Cadaver of Covert Bitops",
    "Author's own tool page (lists both older zips without further detail): https://cadaver.github.io/tools.html — 'NinjaTracker V1.1 - tools/ninjatrk.zip', 'NinjaTracker V1.02 - tools/ninja102.zip'",
    "sibling card knowledge/players/ninjatracker-v2x.md — quotes the V2 archive readme.txt's version-history line establishing this tool as V2's predecessor, and its own `successor_of` edge is the citable source for the derivation direction",
    "Local dataset: 16 files tagged NinjaTracker_V1.x across 7 composers (see knowledge/COVERAGE.md 'Partially carded families' table, which flagged this exact tag as the unclaimed alias gap this card resolves)"
  ]
}
```

## Overview

NinjaTracker V1.x is the original native C64 music editor by Lasse Öörni
(Cadaver) of Covert Bitops, released as v1.0 on 31 October 2002 and revised to
v1.1 by 25 January 2004. It predates and was superseded by NinjaTracker V2.x
(2006-2013, `knowledge/players/ninjatracker-v2x.md`), whose own archive
documentation cites "previous versions" as the baseline for its headline
changes (general-purpose commands/instruments, two-column tables, a
target-stopping slide effect) — direct evidence this is V2's predecessor,
which is why the V2 card already carries a `successor_of` edge pointing here.
Cached DeepSID spec data marks it "Freeware" and native-C64, but the record is
sparse compared to V2's — most format/feature fields are blank, and only a
zero-page footprint ("Approx 3-5 bytes, $FB-$FF") is populated, itself an
aggregated spec value rather than something confirmed by disassembly here. In
this collection it is a lightly-used, early tool: 16 files across just 7
composers (Jaymz Julian and Maktone with 4 each; Cadaver himself used it on 3
of his own files) — small-scene/personal-circle usage consistent with an
early, soon-superseded version rather than a tool that spread widely on its
own. This card exists specifically to resolve the dangling `successor_of`
edge target flagged in `knowledge/COVERAGE.md`'s "Partially carded families"
table and in prior sessions' handoffs.

## Quirks & gotchas

See the `quirks` array in the JSON block. The two load-bearing ones: (1) no
public V1.x source archive was located in this pass (contrast V2.x, whose
official archive and a GitHub mirror both ship full commented source) — every
Tier 3 field here is honestly `TODO`, not a guess; (2) SIDId's tag reference
points at the earliest release (v1.0, CSDb 7206) while the cached DeepSID spec
points at the latest known one (v1.1, CSDb 39501) — the same earliest-vs-latest
citation split already seen and documented in the sibling V2.x card, not a new
inconsistency introduced here.

## Disassembly notes

None performed. No source archive for V1.x specifically was found during this
research pass (only V2.x has a located, readable source — `nt2play.s`, per
`ninjatracker-v2x.md`). The `memory.zero_page` field carries a value from
DeepSID's cached spec box only because that spec plainly states it — it is
flagged as unverified rather than treated as equivalent to a source read.
Everything else (load address, entry points, speed, data formats, effect
encoding) is `TODO` pending either a located V1.x source or a disassembly of a
representative HVSC `.sid` traced through `sidm2-siddump`.

## Verification

Not verified, and not even source-level confirmed — `status: stub`. All facts
here are Tier 1 (local dataset aggregation) and Tier 2 (SIDId, cached DeepSID
player spec, CSDb release pages, the author's own site). No init/play routine
was reconstructed or traced through `mcp-c64`/`sidm2-siddump`.

## Sources

See the `sources` array in the JSON block — SIDId, the cached DeepSID player
spec (`data/players.json`), two CSDb release pages (v1.0 and v1.1), the
author's own tools page, the sibling `ninjatracker-v2x.md` card (source of the
derivation-direction evidence), and this project's local composer-file
aggregate for usage stats.
