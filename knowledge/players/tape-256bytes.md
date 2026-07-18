# 256bytes/Tape (player routine)

```json
{
  "id": "tape-256bytes",
  "name": "256bytes/Tape (player routine)",
  "aliases": ["256bytes/Tape"],
  "authors": ["Tapio Viitanen (Tape)"],
  "released": "2005 (per the CSDb SID entry for the one locally-tagged file)",
  "status": "stub",
  "platform": "Not a distributed tool — an extreme-size-constrained custom C64 player routine + data written by Finnish composer Tapio Viitanen for size-limited demoscene competitions, following the same pattern as the already-carded knowledge/players/agemixer-256bytes.md and knowledge/players/ice00-256bytes.md.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE '256bytes' TAG NAME IS LITERALLY, MEASURABLY TRUE: the sole locally-tagged file, 'Imperial March' (data/composers/tape.json, CSDb sid id 369), has a CSDb-listed data size of exactly 246 ($00F6) bytes — confirmed via direct CSDb lookup, not inferred from the tag name.",
    "ONLY 1 LOCALLY-TAGGED FILE, BUT CONFIRMED REUSE ACROSS SEPARATE RELEASES: CSDb's listing shows this same SID used in at least two distinct productions — the standalone 'Imperial March' (2005 Music) and the compilation/collection 'PETSCII Ate My TinySID' (2005, Chrome and Ice Team) — meeting the same 'real reused routine, not a one-off' bar used for the sibling 256bytes/Agemixer and 256bytes/Ice00 cards, despite the single-file local tag count.",
    "SIDId (data/sidid.json) has NO entry for '256bytes/Tape' — fingerprinted by this project's own Player-ID tooling only.",
    "The composer's handle 'Tape' (Tapio Viitanen, Finnish) appears to be coincidental with the general concept of cassette tape storage — not a claim about the routine's storage medium; recorded exactly as the local composer folder names it."
  ],
  "sources": [
    "Local dataset: data/composers/tape.json — 1 file tagged '256bytes/Tape' ('Imperial March', csdb id 369); see knowledge/COVERAGE.md row #129 (1 file)",
    "data/sidid.json: no entry for '256bytes/Tape' (checked, absent)",
    "CSDb SID entry, 'Imperial March': data size 246 ($00F6) bytes, reused in 'PETSCII Ate My TinySID' (2005 Music Collection, Chrome and Ice Team): https://csdb.dk/sid/?id=369",
    "knowledge/players/agemixer-256bytes.md and knowledge/players/ice00-256bytes.md (status: stub) — sibling cards establishing the same evaluation criteria for '256bytes/*' tags; cited for methodology, not edited"
  ]
}
```

## Overview

`256bytes/Tape` is Finnish composer **Tapio Viitanen**'s ("Tape") own
size-constrained player+data routine, in the same "256bytes/*" tag family as
the already-carded `256bytes/Agemixer` and `256bytes/Ice00`. Although only 1
file is locally tagged, CSDb confirms the exact "256 bytes" claim (246 bytes
measured) and shows the same SID reused in a separate, later compilation
("PETSCII Ate My TinySID," 2005) — meeting this project's bar for a real,
reused routine rather than a size-category label with no substance.

## Quirks & gotchas

See the `quirks` array. Load-bearing: despite being a single-file local tag,
CSDb-confirmed reuse in a second, independent release justified a stub card
over a SKIP, per the precedent set by the sibling `256bytes/*` cards.

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no public source or
disassembly located. A 246-byte SID would be an unusually small and
tractable future disassembly target.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
from local composer data and one CSDb SID-entry lookup. No SIDId entry exists
for this tag.

## Sources

See the `sources` array — local composer-file aggregation, one CSDb SID
entry, and the sibling `256bytes/*` cards (cited, not edited).
