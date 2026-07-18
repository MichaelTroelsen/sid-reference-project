# Crunched:Exomizer (Player-ID packer-signature tag — NOT a player routine)

```json
{
  "id": "crunched-exomizer",
  "name": "Crunched:Exomizer (meta-tag, not a player)",
  "aliases": ["Crunched:Exomizer"],
  "authors": [],
  "released": "N/A — not a dated music-player tool; a packer-detection tag applied whenever a SID file's data happens to be compressed with Exomizer",
  "status": "stub",
  "platform": "NOT A PLAYER ROUTINE. 'Crunched:Exomizer' is Player-ID's detection tag for a SID file whose PRG/data payload was compressed with Exomizer, a general-purpose 6502/C64 cruncher (by Magnus Lind) used across the whole scene for demos, games and disk-mag intros — not a music-replay routine of any kind. This card documents that determination and removes the tag from the uncarded-player backlog.",
  "csdb_release": null,

  "memory": {
    "load_address": "N/A — Exomizer is a general compressor; the decompressed payload's own player (if any) has its own, unrelated memory map",
    "zero_page": "N/A",
    "layout": "N/A"
  },
  "entry": {
    "init": "N/A — Exomizer's decruncher stub runs once at load time to unpack data, then control passes to whatever the crunched file actually contains; it has no init/play music entry points itself",
    "play": "N/A"
  },
  "speed": "N/A",

  "data_format": {
    "order_list": "N/A",
    "patterns": "N/A",
    "instruments": "N/A",
    "wavetable": "N/A",
    "pulsetable": "N/A",
    "filtertable": "N/A"
  },
  "effects": { "encoding": "N/A — Exomizer is a byte-stream compressor (LZ-style, optimal parsing), not a music effect/command format", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "DETERMINATION (2026-07-18): 'Crunched:Exomizer' is a PACKER-SIGNATURE tag, not an identifiable music-player family, and is treated as a PERMANENT EXCLUSION from the player-carding backlog. Evidence: (1) Exomizer is a well-documented, general-purpose C64/6502 compressor written by Magnus Lind, used across the entire demoscene for crunching PRGs of every kind (demos, games, intros, and — incidentally — SID files whose loader happens to compress the data), not something written to replay music (github.com/bitshifters/exomizer; freshports.org/devel/exomizer). (2) A sibling tag in the SAME dataset, 'Crunched:PUCrunch' (knowledge/COVERAGE.md, 1 file), uses the identical 'Crunched:<packer-name>' naming shape for a DIFFERENT, unrelated general-purpose cruncher (PuCrunch) — proving 'Crunched:' is Player-ID's own prefix convention for 'this file's payload is packed with X', not a family of related music tools. (3) This project's own goattracker.md card independently lists 'Exomizer2 crossassembler (Magnus Lind)' as third-party bundled code GoatTracker uses for its own export packing — corroborating that Exomizer is infrastructure/tooling used BY player projects, not itself a player.",
    "USAGE: only 2 files in the local dataset carry this tag (data/composers/cadaver.json, data/composers/edward-hobbs.json) — consistent with an incidental packer detection rather than a chosen music tool; whatever actual player produced these two tunes' music is a separate, unrecorded fact this tag does not capture.",
    "DO NOT attempt to disassemble a 'Crunched:Exomizer player' — there is no such routine. If a future pass wants to identify what actually plays these 2 files' music, that requires per-file investigation (what's inside the crunched payload), not tool-level research on Exomizer itself."
  ],
  "sources": [
    "knowledge/COVERAGE.md — 'Crunched:Exomizer' (2 files) and the sibling tag 'Crunched:PUCrunch' (1 file), same 'Crunched:<packer>' naming convention applied to two unrelated general-purpose crunchers",
    "Local dataset: data/composers/cadaver.json and data/composers/edward-hobbs.json are the only two composer folders carrying this tag (grepped directly)",
    "data/sidid.json — no byTag entry for 'Crunched:Exomizer' (checked directly): confirms it is not a SIDId-catalogued player-routine signature",
    "https://github.com/bitshifters/exomizer — Exomizer source/docs: a general 6502/C64 cruncher by Magnus Lind, not a music-replay tool",
    "https://www.freshports.org/devel/exomizer/ — 'Cruncher for 6502-based systems', confirms general-purpose compression tool scope",
    "knowledge/players/goattracker.md — independently corroborates Exomizer's role as bundled third-party packer infrastructure used BY player/export tools, not a player itself",
    "knowledge/players/basic-program.md — precedent for this card's shape: a documented-exclusion card for a Player-ID meta-tag that is not a music player"
  ]
}
```

## Overview

**`Crunched:Exomizer` is not a player and gets no player research.** It is
Player-ID's detection tag for a SID file whose PRG payload happens to be
compressed with **Exomizer**, a general-purpose 6502/C64 cruncher written by
Magnus Lind and used scene-wide for demos, games, intros — anything that needs
packing — not a music-replay routine. This card is a *documented exclusion*:
it records the determination and, by claiming the tag in its `aliases`,
removes it from the uncarded-player backlog.

Only 2 files in the local dataset carry this tag (in `cadaver.json` and
`edward-hobbs.json`). The decisive corroborating fact is a sibling tag in the
same dataset, `Crunched:PUCrunch` (1 file, `knowledge/COVERAGE.md`) — the
identical `Crunched:<packer-name>` shape applied to a completely different,
unrelated cruncher, proving `Crunched:` is Player-ID's own prefix convention
for "this payload is packed with X," not a family of related music tools.
This project's own `goattracker.md` card independently lists Exomizer2 as
bundled third-party packer code GoatTracker uses for its own exports —
further confirming Exomizer's role as general tooling *used by* player
projects, never a player itself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is a **packer-signature meta-tag,
treated as a permanent exclusion** — do not research or card a "Crunched:Exomizer
player," because none exists. The genuine open question (what actually plays
the music in these 2 files) would require per-file investigation of the
crunched payload, not tool-level research on Exomizer.

## Disassembly notes

None, and none applicable — there is no player routine here. Exomizer's own
decruncher stub is a load-time unpacking routine, not a music init/play pair;
disassembling it would tell us nothing about the SID's actual music player.

## Verification

**Not a player — no verification applies.** The claim this card makes is a
*classification* claim (that `Crunched:Exomizer` denotes Exomizer-compressed
payload, not a tool), supported by Exomizer's public documentation, the
sibling `Crunched:PUCrunch` tag proving the naming is a generic prefix, and
this project's own `goattracker.md` corroboration. `status` is left `stub`
only because the card schema requires a status; it should not be read as "a
player awaiting further research."

## Sources

See the `sources` array — the local dataset (2 files, both composer folders
checked directly), `data/sidid.json`'s confirmed absence of an entry, the
Exomizer project's own public documentation (GitHub, FreshPorts), and two
in-repo cross-references (`goattracker.md`, `basic-program.md`).
