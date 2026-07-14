# Acid Player (Stuart McDowell)

```json
{
  "id": "acid-player",
  "name": "Acid Player (Stuart McDowell)",
  "aliases": ["Acid_Player"],
  "authors": ["Stuart McDowell"],
  "released": "1988-1991",
  "status": "in-progress",
  "platform": "English musician Stuart McDowell's ('Acid') own hand-coded playroutine, never released as a public tool — file titles across his output read like a personal development/testbed narrative rather than a distributed editor. Player-ID-fingerprinted across 30 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (A Little Something): load $7000 (init $8000, play $8fc0).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $8000.", "play": "Sample trace: $8fc0 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 54 filter writes in the 50-frame sample; independently corroborated by a 'Filter Test' title existing in his own catalog)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "PERSONAL DEVELOPMENT/TESTBED SIGNAL, not a public tool: file titles across his 30 SID credits are strongly consistent with an iterative, self-directed development narrative rather than a distributed editor — 'Filter Test', 'New Routine M-02', 'New Routine M-03', 'L 01 trial', 'Test File R', 'Demo 1' through 'Demo 6', plus several 'C128'-prefixed files (possibly cross-platform tests). No CSDb release exists for 'Acid Player' as a named/shipped product — consistent with an undistributed personal routine.",
    "TIGHT 1988-1991 WINDOW with no later output found anywhere — likely a short-lived personal project he moved on from, not an actively maintained/adopted tool.",
    "NAME-COLLISION TRAP, explicitly flagged: naive searches for 'Acid Player' overwhelmingly surface 'ACID 64 Player Pro' (by Wilfred Bos, 2010-present) — a completely unrelated MODERN third-party SID-playback application, not connected to Stuart McDowell or this tag in any way. Do not conflate the two; this KB card is about the 1988-91 hand-coded playroutine, not the 2010s playback tool.",
    "NO CSDb SCENER PAGE FOUND for Stuart McDowell or the handle 'Acid' — CSDb's SID index has all 30 credits, but no linked composer/scener profile page exists at all. Consequently: no confirmed coder role, no group membership, no commercial game credits, no interviews or biographical material of any kind were found — a genuinely thin footprint, left honestly unfilled rather than speculated.",
    "HVSC Musicians.txt entry is bare-minimum: 'McDowell, Stuart (Acid) - UNITED KINGDOM (ENGLAND)', no group/active-years fields.",
    "Not in SIDId with a distinct tool name (only the author string 'Stuart McDowell (Acid)', no separate name/released/comment fields). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('McDowell, Stuart (Acid) - UNITED KINGDOM (ENGLAND)')",
    "CSDb search — McDowell (30 matching SID credits, 1988-1991, cross-confirms the file count): https://csdb.dk/search/?search=McDowell",
    "CSDb — ACID 64 Player Pro (unrelated modern tool, explicitly ruled out as a connection): https://csdb.dk/release/?id=200590",
    "Local dataset: 30 files tagged Acid_Player, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Acid_Player` tag is English musician Stuart McDowell's ('Acid') own
hand-coded playroutine — never released as a public tool, with file titles
reading like a personal development log ('Filter Test', 'New Routine
M-02', 'Demo 1'-'Demo 6'). Player-ID-fingerprinted across 30 files, all his
own, all within a tight 1988-1991 window.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **testbed-narrative
file titles**, strong circumstantial evidence this was a personal project
never distributed; a **genuinely thin CSDb footprint** (no scener profile
page exists at all); and an explicitly flagged **name-collision trap**
with a modern, unrelated tool also called "Acid Player"/"ACID64".

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Acid_Player`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Acid_Player` `.sid` (A Little Something): load `$7000`,
init `$8000`, play `$8fc0`, **218 register writes / 50 frames** (54 filter
writes — clearly filter-heavy, matching a 'Filter Test' title elsewhere in
his catalog). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt and CSDb (search + the
unrelated-tool disambiguation).
