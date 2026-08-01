# Beast / Angular (Laxity NP21 fork)

```json
{
  "id": "beast-angular-newplayer",
  "name": "Beast / Angular (Laxity NP21 fork)",
  "aliases": ["Beast", "Angular"],
  "authors": ["Thomas Mogensen (DRAX)"],
  "released": "Beast: 2011 (Maniacs of Noise, CSDb sid=45858); Angular: 2017 (Camelot/Vibrants, CSDb sid=54918) — per-tune CSDb 'Released' field, not a distinct player release: this is an editor-view code cluster inside two of DRAX's own tunes, not a published/versioned tool with its own release chain.",
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
    "Census note (2026-08-01): 0 files match this card's aliases in data/composers/*.json because this cluster has no distinct raw player tag in the DeepSID/SIDId dataset, not because of a spelling mismatch. Beast.sid and Angular.sid both exist in data/composers/drax.json (collection_path MUSICIANS/D/DRAX/Beast.sid and .../Angular.sid, csdb sid=45858 and sid=54918) but are tagged with the generic player string 'Laxity_NewPlayer_V21' — already claimed as an alias by laxity-newplayer.md, jch-newplayer.md and sid-factory-ii-driver-11.md (313 files across 18 composer caches, unrelated tunes included). Adding that generic tag to this card's aliases would misattribute those 313 files here, so aliases stays ['Beast','Angular'] as tune-title identifiers, not raw signature tags. Confirmed via csdb-client.js type=sid lookups on both ids.",
    "Both source tunes are by Thomas Mogensen (DRAX) — same person as the drax-newplayer.md card. Despite shared authorship, DRAX's own card explicitly warns its 8-byte instrument-record detector 'spuriously matches pulse/filter code sites in the Beast/Angular cluster (a 2-byte-format player)' — i.e. SIDM2 treats Beast/Angular as a format-distinct cluster from the main DRAX cluster, not the same code. No `edges` relationship to drax-newplayer is asserted here for that reason.",
    "PSID header values for both files (via csdb-client.js, not a disassembly fact — recorded here per Tier 2 convention, not in entry/memory): Beast — LoadAddr/InitAddr $1000, PlayAddr $1003, SID model 6581, PAL. Angular — LoadAddr/InitAddr $1000, PlayAddr $1003, SID model 8580, PAL.",
    "Two distinct tunes (Beast.sid, Angular.sid), two distinct code addresses, but near-identical handler code — documented as one card the same way this KB documents JCH NewPlayer's version range as one hub card, since SIDM2 itself treats them as one 'cluster.'",
    "Filter table is a flat direct-value stream (contrast with Stinsen's two-mode SET/SWEEP state machine) — a real format divergence within the 'NP21 fork family' despite superficially similar SF2 editor wiring.",
    "res_routing/mode_vol are FIXED bytes, not per-row data — the SF2 filter editor shows 3 columns (cutoff, res_routing, mode_vol) but only column 0 (cutoff) is writable without corrupting the player; don't assume all editor-visible columns round-trip.",
    "Shared the same SF2 loader crash-bug history as Stinsen (Block 3 NameLen/TextFieldSize mismatch) — Beast/Angular's smaller NP21 heap layout hit the bug deterministically (~0% load success before the fix, vs. Stinsen's ~50%)."
  ],
  "sources": [
    "SIDM2:docs/players/CLUSTERS.md",
    "SIDM2 memory:beast-angular-pulse-architecture.md",
    "SIDM2 memory:beast-angular-filter-architecture.md",
    "SIDM2 memory:stinsen-load-crash-resolved.md",
    "data/composers/drax.json (collection_path MUSICIANS/D/DRAX/Beast.sid, MUSICIANS/D/DRAX/Angular.sid)",
    "https://csdb.dk/sid/?id=45858 (Beast, Thomas Mogensen/DRAX, 2011 Maniacs of Noise)",
    "https://csdb.dk/sid/?id=54918 (Angular, Thomas Mogensen/DRAX, 2017 Camelot/Vibrants)",
    "CSDb webservice type=sid (scripts/lib/csdb-client.js) for both ids, 2026-08-01"
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

Both source files (`MUSICIANS/D/DRAX/Beast.sid`, `MUSICIANS/D/DRAX/Angular.sid`,
confirmed via `data/composers/drax.json` and CSDb sid ids 45858/54918) are by
**Thomas Mogensen (DRAX)** — the same composer as the `drax-newplayer.md`
card, though DRAX's own card explicitly treats Beast/Angular as a
format-distinct cluster (2-byte pulse/filter records) from his main 8-byte
instrument-record cluster, so no `edges` relationship between the two cards
is asserted. Composer concentration is as narrow as it gets: 100% single
composer, two tunes — this is a personal editor-view code variant, not a
tool used by other musicians. This card's zero-file census is genuine and
explained, not a tagging bug: SIDId/DeepSID has no distinct signature for
this narrow cluster, so both files carry the generic `Laxity_NewPlayer_V21`
tag already owned by the hub `laxity-newplayer`/`jch-newplayer` cards — see
the `quirks` entry for the full trace.

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
