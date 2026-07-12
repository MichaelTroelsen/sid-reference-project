# Beast / Angular (Laxity NP21 fork)

```json
{
  "id": "beast-angular-newplayer",
  "name": "Beast / Angular (Laxity NP21 fork)",
  "aliases": ["Beast", "Angular"],
  "authors": ["TODO"],
  "released": "TODO",
  "status": "stub",
  "platform": "Native C64 player routine — NP21-architecture fork, two near-identical code variants (one per tune); audio plays back via SF2's embedded-Laxity-driver passthrough, NOT a distinct registered SF2 driver",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "Two near-identical variants, distinct addresses per file. Beast: pulse handler $13C4-$13DA, pulse stream base $1AC5, PW-lo/hi scratch $1911-$1916, filter cutoff-hi stream $1A7D (16+ entries). Angular: pulse handler $1404-$1418, pulse stream base $1A3B, PW-lo/hi scratch $197B-$1980, filter cutoff-hi stream $1A1F (16+ entries). Both: filter res_routing fixed at $100A, mode_vol fixed at $1009 (same address in both variants)."
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO — presumed row-major sequence model (contrast with Stinsen's column-major instrument table), not independently confirmed.",
    "patterns": "TODO",
    "instruments": "TODO — row-major per CLUSTERS.md's overall framing of this cluster vs. Stinsen's column-major table, but the specific field layout is not documented.",
    "wavetable": "TODO",
    "pulsetable": "4-byte step records, nibble-packed byte 0: $FF = skip-step marker; otherwise high nibble -> PW lo, low nibble -> PW hi. Handler code disassembled per-variant (see memory.layout). Wired into SF2's F4 pulse editor via a 34-byte 6502 copy routine (zig64-verified).",
    "filtertable": "Direct-value cutoff_hi byte stream (unlike Stinsen's SET/SWEEP state machine) — one byte per step, 16+ entries. res_routing and mode_vol are FIXED single bytes shared across all rows (same address for every row), so writing more than row 0 of those two columns would corrupt player code — only the cutoff column round-trips through the editor; the other two columns are view-only. Wired into F5 via a 19-byte routine (zig64-verified)."
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": ["laxity-newplayer"],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Two distinct tunes (Beast.sid, Angular.sid), two distinct code addresses, but near-identical handler code — documented as one card the same way this KB documents JCH NewPlayer's version range as one hub card, since SIDM2 itself treats them as one 'cluster.'",
    "Filter table is a flat direct-value stream (contrast with Stinsen's two-mode SET/SWEEP state machine) — a real format divergence within the 'NP21 fork family' despite superficially similar SF2 editor wiring.",
    "res_routing/mode_vol are FIXED bytes, not per-row data — the SF2 filter editor shows 3 columns (cutoff, res_routing, mode_vol) but only column 0 (cutoff) is writable without corrupting the player; don't assume all editor-visible columns round-trip.",
    "Shared the same SF2 loader crash-bug history as Stinsen (Block 3 NameLen/TextFieldSize mismatch) — Beast/Angular's smaller NP21 heap layout hit the bug deterministically (~0% load success before the fix, vs. Stinsen's ~50%)."
  ],
  "sources": [
    "SIDM2:docs/players/CLUSTERS.md",
    "SIDM2 memory:beast-angular-pulse-architecture.md",
    "SIDM2 memory:beast-angular-filter-architecture.md",
    "SIDM2 memory:stinsen-load-crash-resolved.md"
  ]
}
```

## Overview

Beast and Angular are two tunes sharing one near-identical NP21-fork player
variant within SIDM2's Laxity-family cluster work — grouped as one card here
because SIDM2 itself treats them as a single cluster (near-identical handler
code at two different addresses). Like [Stinsen](stinsen-newplayer.md) and
[DRAX](drax-newplayer.md), it's a fork of [Laxity NewPlayer](laxity-newplayer.md)
that plays back through SF2's generic embedded-binary passthrough rather than
a dedicated driver.

## Quirks & gotchas

See the `quirks` array above — the load-bearing one: the filter table here is
a **flat direct-value stream**, not the state machine Stinsen uses, and two of
its three editor-visible columns (`res_routing`, `mode_vol`) are fixed shared
bytes that must never be written per-row.

## Disassembly notes

Same method as the rest of this fork family: locate `STA $D40x,Y` SID-register
writes and trace backward. Pulse and filter handlers were disassembled
per-variant (Beast vs. Angular have distinct addresses but near-identical
logic); no full player disassembly or memory map exists beyond these two
handled tables.

## Verification

Pulse and filter wiring are SIDM2-"zig64-verified" (their own edit-propagation
check), same confidence level as the Stinsen card. `status: stub` — memory
map, entry points, order-list/instrument/wave format all undocumented.

## Sources

See the `sources` array.
