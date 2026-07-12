# Vibrants 2000 A.D. (pre-NP21 player)

```json
{
  "id": "vibrants-2000ad",
  "name": "Vibrants 2000 A.D. (pre-NP21 player)",
  "aliases": ["2000 A.D.", "2000AD"],
  "authors": ["TODO: unconfirmed — files carry an '1988 2000 A.D.' Vibrants-group copyright label"],
  "released": "1988",
  "status": "stub",
  "platform": "Native C64 player routine — pre-NP21 (1988), architecturally distinct from the Laxity NP21 fork family (own orderlist/pattern/byte-stream model, not an NP21 variant)",
  "csdb_release": null,

  "memory": {
    "load_address": "File-specific: Echo_Beat $0400, Galax_it_y $1000",
    "zero_page": "TODO",
    "layout": "Per-voice orderlist -> pattern pointer table (file-specific address, not fixed: Galax_it_y $1788/$178E vs. Echo_Beat $0A29/$0A2D) -> pattern byte-stream. Standard PAL chromatic frequency LUT at a per-file address (Galax_it_y $150F/$1510, Echo_Beat $090F/$0910)."
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "Per-voice orderlist bytes: $00-$7F = pattern index, $80-$FE = commands (not individually decoded), $FE = end, $FF = loop. Transpose command decoded: AND #$1F; STA $XXEF,X.",
    "patterns": "Byte-stream per pattern: duration+octave-flag byte, then note byte, terminated by $FF.",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO beyond the orderlist transpose command above — in-pattern command bytes ($80-$FE) are not yet decoded.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "NOT an NP21 variant — this predates NP21 entirely (1988) and uses a completely different orderlist/pattern/byte-stream architecture, unlike Stinsen/Beast-Angular/DRAX which are all NP21 forks. Do not group it with those in the graph or in prose.",
    "James_Bond_Theme_Remix carries the SAME '1988 2000 A.D.' copyright label as Echo_Beat and Galax_it_y but is a DIFFERENT, unrelated player — no shared code signature. An earlier SIDM2 note wrongly grouped all three files together; this was corrected. A shared copyright/scene label on a SID file is not proof of a shared player.",
    "Editor status: only F1 (chromatic notes, per-pattern transpose) is populated. In-pattern commands and full write-back (propagating edits back into the binary) are undone — this player's byte format differs enough from NP21 that the shadow-buffer/ch_seq_ptr write-back mechanisms built for the NP21 fork family don't apply; a bespoke translator would be needed."
  ],
  "sources": [
    "SIDM2:docs/players/CLUSTERS.md",
    "SIDM2 memory:vibrants-2000ad-cluster-re.md"
  ]
}
```

## Overview

Vibrants 2000 A.D. is SIDM2's name for a pre-NP21 (1988) native player found
in two files, Echo_Beat and Galax_it_y — architecturally its own
orderlist/pattern/byte-stream design, unrelated to the
[Laxity NewPlayer](laxity-newplayer.md) NP21 architecture that the
Stinsen/Beast-Angular/[DRAX](drax-newplayer.md) forks share. A third file
carrying the same "1988 2000 A.D." copyright label, James_Bond_Theme_Remix,
turned out on inspection to use a completely different, unrelated player —
worth remembering as a caution against grouping files by copyright string
alone.

## Quirks & gotchas

See the `quirks` array above — most important: this is **not part of the
NP21 fork family** despite living in the same SIDM2 "clusters" research
alongside Stinsen/Beast/Angular/DRAX; keep it graph-separate (no
`derives_from` edge to `laxity-newplayer` is asserted here, unlike those
cards).

## Disassembly notes

Orderlist and pattern-pointer structure confirmed via disassembly for both
Echo_Beat and Galax_it_y independently (different load addresses, different
pointer-table locations, same encoding). In-pattern command bytes ($80-$FE
beyond the confirmed transpose command) remain undecoded.

## Verification

F1 (note/transpose) editor wiring is functional per SIDM2's CLUSTERS.md, but
no `mcp-c64` re-run has happened here. `status: stub` — entry points, speed
model, and most command bytes remain undocumented.

## Sources

See the `sources` array.
