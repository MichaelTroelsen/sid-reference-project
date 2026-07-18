# Crunched:PUCrunch (Player-ID packer signature — NOT a player routine)

```json
{
  "id": "crunched-pucrunch",
  "name": "Crunched:PUCrunch (meta-tag, not a player)",
  "aliases": ["Crunched:PUCrunch"],
  "authors": ["Pasi 'Albert' Ojala"],
  "released": "N/A — PUCrunch itself dates from 1997 (per upstream source), but the tag marks packed DATA, not a dated music tool",
  "status": "stub",
  "platform": "NOT A PLAYER ROUTINE. 'Crunched:PUCrunch' is Player-ID's signature for a SID file whose payload was compressed with PUCrunch, a general-purpose C64/C128/VIC-20/Plus4 data cruncher (hybrid LZ77+RLE) written by Pasi Ojala — it detects a packer/depacker stub, not a music replay engine. This card documents that determination and removes the tag from the uncarded-player backlog; it is a deliberate exclusion, not a tool card.",
  "csdb_release": null,

  "memory": {
    "load_address": "N/A — PUCrunch is a general compressor; the packed payload's own load address/player are whatever the original (uncompressed) file used, and are outside this tag's scope",
    "zero_page": "N/A",
    "layout": "N/A"
  },
  "entry": {
    "init": "N/A — the tag marks a depacker stub, not a music init/play pair",
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
  "effects": { "encoding": "N/A — no music effect model; PUCrunch is a byte-stream compressor (Elias Gamma-coded LZ77 offsets/lengths + ranked RLE), not a SID player", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "DETERMINATION (2026-07-18): 'Crunched:PUCrunch' is a PACKER/COMPRESSOR signature, not an identifiable music-player family, and is treated as a PERMANENT EXCLUSION from the player-carding backlog — same shape as knowledge/players/basic-program.md's 'Basic_Program' meta-tag determination. Evidence: (1) in this project's local dataset the tag appears exactly ONCE, in knowledge/COVERAGE.md's raw-tag ranking (rank 7, 1 file) — it does NOT appear anywhere in data/composers/*.json or data/sidid.json (checked directly: zero hits for 'PUCrunch' outside COVERAGE.md), meaning it carries no per-composer usage data and no SIDId player-routine byte-signature to research; (2) PUCrunch is independently and extensively documented on the public web as a general-purpose C64/C128/VIC-20/Plus4 data compression program (hybrid LZ77+RLE, Elias Gamma-coded), written by Pasi Ojala starting 1997 — a self-extracting depacker stub, used to shrink ANY program or data (games, intros, SID payloads), not a sound-chip replay routine; see github.com/mist64/pucrunch and a1bert.kapsi.fi/Dev/pucrunch/.",
    "SIBLING PATTERN: 'Crunched:Exomizer' (rank 2, 2 files per knowledge/COVERAGE.md) sits in the same dataset under the same 'Crunched:' prefix — Exomizer is likewise a well-known general C64 cruncher (Magnus Lind), not a music player. This confirms 'Crunched:' is Player-ID's naming convention for 'this SID's data is packed with cruncher X', independent of whatever music routine the packed payload actually contains. That sibling tag is NOT touched by this card (a different agent's scope per the batch-24 sweep discipline) — flagging it here only as corroborating pattern evidence.",
    "WHY NO CARD-MERGE: there is no existing player card whose subject is a packer/cruncher (checked knowledge/players/ for 'Crunched', 'Exomizer', 'PUCrunch', 'pucrunch' — the only hit was an unrelated passing mention in goattracker.md), so this is a new documented exclusion, not a merge into an existing alias list.",
    "DO NOT attempt to disassemble a 'PUCrunch player' — there isn't one. If a future pass wants to identify the actual music routine inside the single SID file that carries this tag, that is a per-file investigation (unwrap the PUCrunch depacker, then identify whatever player the decompressed payload contains), not a tool-level card for 'Crunched:PUCrunch' itself."
  ],
  "sources": [
    "knowledge/COVERAGE.md — 'Crunched:PUCrunch' listed as rank 7 raw tag, 1 file (and 'Crunched:Exomizer' as rank 2, 2 files, corroborating the 'Crunched:' packer-signature convention)",
    "Local dataset check: 'PUCrunch' has zero occurrences anywhere in data/composers/*.json or data/sidid.json (grepped directly) — no per-file usage record, no SIDId byTag entry",
    "https://github.com/mist64/pucrunch — 'pucrunch, an Optimizing Hybrid LZ77 RLE Data Compression Program for C64/C128/VIC-20/Plus4', author Pasi Ojala, first released 1997",
    "https://a1bert.kapsi.fi/Dev/pucrunch/ — Pasi Ojala's own PUCrunch page: 'Compression Basics' / 'Lossless Data Compression Program: Hybrid LZ77 RLE', describing it as a self-extracting compressor for C64-family machines, not a music tool",
    "knowledge/players/basic-program.md — precedent card establishing the 'documented exclusion, not a tool card' pattern this card follows"
  ]
}
```

## Overview

**`Crunched:PUCrunch` is not a player and gets no player research.** It is
Player-ID's signature for a SID file whose payload has been compressed with
**PUCrunch**, a general-purpose C64/C128/VIC-20/Plus4 data compression program
(hybrid LZ77+RLE, Elias Gamma-coded offsets/lengths) written by Pasi Ojala,
first released in 1997. PUCrunch is a self-extracting *depacker stub* used to
shrink arbitrary programs or data — games, intros, or a SID's own payload —
not a sound-chip replay routine. This card is a documented exclusion, following
the precedent set by `knowledge/players/basic-program.md`: it records the
determination and, via its `aliases`, removes the tag from the uncarded-player
backlog.

The tag is vanishingly thin in this project's own data: it appears exactly
once, in `knowledge/COVERAGE.md`'s raw-tag ranking (1 file), and has **zero**
occurrences in `data/composers/*.json` or `data/sidid.json` — no per-composer
usage record and no SIDId player-routine signature exist to research. A
sibling tag, `Crunched:Exomizer` (2 files), shows the same `Crunched:` prefix
convention with a different well-known cruncher, corroborating that this is a
packer-signature naming scheme, not a music-tool family.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is a **packer/compressor signature,
treated as a permanent exclusion** — do not research or card a "PUCrunch
player," because none exists. The only meaningful future work would be
per-file (unwrap the depacker on the single tagged SID and identify whatever
music routine its decompressed payload actually contains), not tool-level.

## Disassembly notes

None, and none applicable at the tool level — PUCrunch's own depacker is a
well-documented, publicly-sourced general compressor (see sources), not a SID
player, so there is no player routine here to disassemble.

## Verification

**Not a player — no verification applies.** The claim this card makes is a
*classification* claim (that `Crunched:PUCrunch` marks packed data via a known
public compressor, not a music tool), supported by the tag's total absence
from `data/composers/*.json`/`data/sidid.json` and by PUCrunch's own public
documentation. `status` is left `stub` only because the card schema requires a
status field; it should not be read as "a player awaiting further research."

## Sources

See the `sources` array — `knowledge/COVERAGE.md`'s raw-tag ranking, the
confirmed absence from local composer/SIDId data, PUCrunch's public source
repository and author documentation, and the `basic-program.md` precedent for
this exclusion-card pattern.
