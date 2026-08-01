# Stinsen (Laxity NP21 fork)

```json
{
  "id": "stinsen-newplayer",
  "name": "Stinsen (Laxity NP21 fork)",
  "aliases": ["Stinsen", "Stinsens_Last_Night_of_89"],
  "authors": ["TODO: no player-code author confirmed. Census (2026-08-01) confirms the cluster name is not a player-code credit at all: HVSC STIL.txt (/MUSICIANS/L/Laxity/Stinsens_Last_Night_of_89.sid) says the tune 'Covers /MUSICIANS/S/Stinsen/Last_Night.sid... Declared first by Stinsen, organizer and only judge of said compo' — 'Stinsen' is scener Johan Samuelson (CSDb id 23584), whose CSDb FreelanceFunctions is 'Musician' only (no coder credit), who wrote/organized the song this tune covers. The exemplar SID's own credited musician (CSDb release 201399) is Thomas E. Petersen (Laxity) — consistent with this being Laxity's own driver, but no source names who specifically coded this NP21 sub-variant."],
  "released": "TODO",
  "status": "stub",
  "platform": "Native C64 player routine — NP21-architecture fork; audio plays back via SF2's embedded-Laxity-driver passthrough (the original binary is copied into the SF2 file and JMPed into), NOT a distinct registered SF2 driver",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: not disassembled as a full binary — only specific data tables have been located.",
    "zero_page": "TODO",
    "layout": "Column-major instrument table: AD column at $1808, SR column at $181C (stride $14 = 20 bytes, up to 20 instrument slots). $18D8/$18D9 = one-shot INIT-default AD/SR applied on each voice's first PLAY tick. Pulse byte streams at $1957 (PW lo) / $193E (PW hi), shared/walked independently across all 3 voices, per-voice scratch at $17E6-$17EB. Filter state-machine byte streams at $1989 (command), $19A3, $19BD (20 entries each)."
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO — not independently confirmed; presumed to follow the NP21 code-embedded sequence model (see laxity-newplayer.md) since this is an NP21 fork, but not verified for Stinsen specifically.",
    "patterns": "TODO — see order_list.",
    "instruments": "Column-major (contrast with native Laxity NP21's row-major layout): AD column at $1808, SR column at $181C, stride $14, up to 20 slots. Only AD+SR columns exist — no per-instrument HR/pulse/wave/filter columns (confirmed by direct-edit-patch testing + static disassembly: those SF2-editor columns have no destination in this player).",
    "wavetable": "TODO",
    "pulsetable": "Byte streams at $1957 (PW lo) / $193E (PW hi), shared across all 3 voices with per-voice scratch $17E6-$17EB. Wired into SF2's F4 pulse editor via a 25-byte 6502 split-copy routine (zig64-verified).",
    "filtertable": "NOT a parallel-value array — a state machine. Byte streams at $1989 (command), $19A3, $19BD (20 entries each). Bit 7 of the $1989 byte dispatches SET (init accumulator+latches) vs. SWEEP (16-bit signed delta accumulate); $7F = step terminator; $19BD[Y] gives the loop target. Wired into F5 via a 31-byte split-copy routine + 10-byte trampoline (zig64-verified)."
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
    "CENSUS RESULT (2026-08-01): zero raw dataset player tags match either alias ('Stinsen', 'Stinsens_Last_Night_of_89') anywhere across data/composers/*.json — checked case-insensitively, no typo/casing/prefix mismatch found. This is not a spelling bug: the exemplar file itself IS present (data/composers/laxity.json, 'Stinsens_Last_Night_of_89.sid'), but its raw player tag is the generic 'SidFactory_II/Laxity' — shared by ~280+ other Laxity/SF2-driver files in the dataset that belong to entirely different NP21-fork sub-clusters (Beast/Angular, Drax, Vibrants2000AD, Wizax-A all sit under the same generic tag; confirmed their own cards' aliases ('Beast','Angular','2000 A.D.','2000AD') also match zero raw tags). SIDM2's per-cluster names are disassembly/fingerprint-derived, not Player-ID signature strings — there is no tag-based way to enumerate this cluster's files from this repo's dataset; aliases left unchanged since adding 'SidFactory_II/Laxity' here would misattribute hundreds of unrelated files to this specific sub-variant.",
    "SF2's editor (F1-F5) is fully wired and edit-propagating for this player DESPITE no full disassembly existing — SIDM2 located and RE'd only the specific tables needed for editing (instrument/pulse/filter), not the whole player.",
    "Instrument table is COLUMN-major, unlike native Laxity NP21 (row-major) and unlike Beast/Angular (also row-major) — a genuine format divergence within the 'NP21 fork family', not just a cosmetic difference.",
    "Filter data is a two-mode state machine (SET vs SWEEP dispatched by a bit-7 flag), not a flat value table — don't assume the Beast/Angular 'direct cutoff value stream' model applies here.",
    "Also surfaced an unrelated SF2-writer bug (Block 3 table-descriptor byte mismatch, NameLen vs TextFieldSize) that caused load crashes — now fixed. That bug is about SF2's own file writer, not a fact about the Stinsen player format itself; don't confuse the two when reading SIDM2's fix history.",
    "UNRESOLVED CONTRADICTION, found 2026-07-12 while cross-checking laxity-newplayer.md: the STINSENS_PLAYER_DISASSEMBLY.md source cited below (fetched in full as tdz-c64-knowledge doc 1c4ad8d0c81f, 'Laxity NewPlayer v21 Disassembly Reference') is disassembled from this exact same file ('Stinsen's Last Night of '89') and documents an ENTIRELY DIFFERENT instrument table for it: $1A6B-$1AAB, 8 bytes/entry, fields [AD, SR, Wave-ptr, Pulse-ptr, Filter-ptr, Arp-ptr, Flags, Vibrato] — not the column-major $1808(AD)/$181C(SR) table this card documents. That document does NOT actually support or mention the column-major claim anywhere in its full text, despite being listed as a source here. Both facts trace to genuine SIDM2 research (this card's column-major claim comes from separate 'cluster detector' memory notes, not from STINSENS_PLAYER_DISASSEMBLY.md itself) but they cannot both describe the same physical table. Not resolved — possibilities include one research effort being wrong, or the two tables serving different purposes (e.g. the native player's own table vs. an SF2-editor-only shadow structure the cluster-detector work built separately). See the matching note on laxity-newplayer.md."
  ],
  "sources": [
    "SIDM2:docs/reference/STINSENS_PLAYER_DISASSEMBLY.md (NOTE: on full inspection this document does not actually contain the column-major $1808/$181C claim below — see the contradiction quirk above; kept here as the file this card is nominally about, not as confirming evidence)",
    "SIDM2:docs/players/CLUSTERS.md",
    "SIDM2 memory:stinsen-instr-layout.md",
    "SIDM2 memory:stinsen-pulse-architecture.md",
    "SIDM2 memory:stinsen-filter-architecture.md",
    "SIDM2 memory:stinsen-load-crash-resolved.md",
    "data/composers/laxity.json — dataset record for Stinsens_Last_Night_of_89.sid (player tag 'SidFactory_II/Laxity', not a distinct 'Stinsen' tag)",
    "HVSC STIL.txt, entry /MUSICIANS/L/Laxity/Stinsens_Last_Night_of_89.sid (fetched via data/hvsc/STIL.txt)",
    "CSDb release https://csdb.dk/release/?id=201399 (via CSDb XML webservice, fetched 2026-08-01) — 'Stinsen's Last Night of '89', Laxity/Bonzai, released 2021-03-14, 1st place at event 3043 'Last Night (melody compo)'; Credits list Music only (Laxity), no separate code/programmer credit",
    "CSDb scener https://csdb.dk/scener/?id=21086 (handle Stinsen, id 23584, via data/csdb/stinsen.json) — FreelanceFunctions: Musician only, member of Genesis Project"
  ]
}
```

## Overview

Stinsen is SIDM2's name for one of several player-code variants found within
the [Laxity NewPlayer](laxity-newplayer.md) (NP21) family — named after the
tune "Stinsens Last Night of 89" that anchors the cluster. It doesn't have
its own SF2 driver: audio plays back by copying the original binary straight
into the SF2 file and jumping to its own play routine (the same mechanism
every card in this fork family uses). SIDM2's actual work here was
reverse-engineering just enough of its instrument/pulse/filter tables to wire
SID Factory II's editor views (F1-F5) — not a full disassembly.

**Census note (2026-08-01):** this cluster has no discoverable footprint in
this repo's dataset — `aliases` match zero raw player tags in
`data/composers/*.json`, and this is not a fixable typo. The one exemplar
file this cluster is named after is present in the dataset, but tagged only
with the generic `SidFactory_II/Laxity` string shared by every SF2-embedded
Laxity-family driver, so it cannot be told apart from other NP21-fork
sub-clusters by tag alone (the same is true of this family's sibling cards:
`beast-angular-newplayer`, `vibrants-2000ad`). Provenance research (HVSC
STIL.txt, CSDb) further clarifies that "Stinsen" itself is not a player-code
credit at all: it's scener Johan Samuelson's handle, a musician (CSDb
FreelanceFunction) who wrote and judged a 2021 "Last Night" cover compo that
this Laxity tune won — see the `authors` TODO and `quirks` for the full
citation chain.

## Quirks & gotchas

See the `quirks` array above — the two most load-bearing: the **column-major
instrument table** (a real architectural difference from both native Laxity
and the Beast/Angular fork), and the **filter state machine** (SET/SWEEP
dispatch, not a flat cutoff-value stream).

## Disassembly notes

No full disassembly exists. SIDM2's method throughout this fork family:
locate the fixed `STA $D40x,Y` SID-register writes (the only per-file-robust
anchor) and trace backward from there to find the data tables actually
driving playback, rather than guessing table addresses forward. That's how
the instrument/pulse/filter tables above were found and confirmed.

## Verification

**Not verified per this KB's rule** (no `mcp-c64` re-run here), but the
specific facts above are unusually solid for a stub-level card: SIDM2
describes the pulse and filter wiring as "zig64-verified" (their own
verification tooling), i.e. edits made through the SF2 editor were confirmed
to actually change playback correctly. `status: stub` because the memory map,
entry points, and sequence/order-list format remain completely undocumented.

## Sources

See the `sources` array — primary is SIDM2's internal memory notes on the
Stinsen instrument/pulse/filter architecture, cross-referenced against
`docs/players/CLUSTERS.md`.
