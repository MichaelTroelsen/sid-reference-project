# 256bytes/AEB (player routine)

```json
{
  "id": "aeb-256bytes",
  "name": "256bytes/AEB (player routine)",
  "aliases": ["256bytes/AEB"],
  "authors": ["Aleksi Eeben"],
  "released": "2005 (per the CSDb SID entry for the one locally-tagged file)",
  "status": "stub",
  "platform": "Not a distributed tool — an extreme-size-constrained custom C64 player routine + data written by Finnish composer/coder Aleksi Eeben for a size-limited demoscene competition, following the same pattern as the already-carded knowledge/players/agemixer-256bytes.md, knowledge/players/ice00-256bytes.md, and knowledge/players/tape-256bytes.md. 'AEB' reads as his own initials (Aleksi EEBen), not a separate person or group.",
  "csdb_release": null,

  "memory": { "load_address": "CSDb lists the SID file's own load address as $0801 (BASIC-area load, typical of tiny size-coding entries) — not independently disassembled.", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "NOT THE SAME AS THE AUTHOR'S OTHER TOOLS: Aleksi Eeben is a known player author in his own right — his composer profile credits him with creating John Player, PollyTracker, and Polyanna, all already carded in this KB (knowledge/players/john-player.md, knowledge/players/pollytracker.md, knowledge/players/polyanna.md). '256bytes/AEB' is a SEPARATE, one-off ultra-compact routine used for exactly one size-coded tune, distinct from those general-purpose trackers — none of his other ~20+ locally-tagged files use this tag (source: data/composers/aleksi-eeben.json, checked directly).",
    "THE '256bytes' CLAIM IS NEARLY LITERALLY TRUE: the sole locally-tagged file, 'Electronic (256 bytes)' (data/composers/aleksi-eeben.json, CSDb sid id 11618), has a CSDb-listed data size of 254 ($00FE) bytes — genuinely sub-256, confirmed via direct CSDb lookup, not inferred from the tag or title string.",
    "GENUINE REUSE, AND THE SAME COMPILATION AS TWO SIBLING '256bytes/*' TAGS: CSDb shows this SID reused in 'PETSCII Ate My TinySID' (2005, Chrome and Ice Team) — the identical compilation that also reused 256bytes/Tape's 'Imperial March' and 256bytes/Ice00's 'Random Ninja' (per those sibling cards' sources). This is evidence the three tags' routines were each independently selected for the same tiny-SID showcase release, not evidence of any shared code between the three authors — no source confirms code sharing, so no `edges` relationship is asserted.",
    "SIDId (data/sidid.json) has NO entry for '256bytes/AEB' — checked directly, absent. Fingerprinted by this project's own Player-ID tooling only, same as the three sibling '256bytes/*' tags.",
    "'AEB' is Aleksi Eeben's own name-derived tag (his surname 'Eeben' contains the letters), following the same self-naming pattern as the composer-handle-based sibling tags (256bytes/Tape, 256bytes/Ice00, 256bytes/Agemixer all use the composer's own handle/initials as the tag suffix). A separate check of knowledge/players/gavin-raeburn.md (which happens to contain the substring 'aeb' inside 'Raeburn') found NO relationship — Gavin Raeburn is a Scottish Codemasters composer with an entirely unrelated hand-written playroutine, and no source connects him to Aleksi Eeben or this tag; that similarity is coincidental string matching, not evidence."
  ],
  "sources": [
    "Local dataset: data/composers/aleksi-eeben.json — 1 file tagged '256bytes/AEB' ('Electronic (256 bytes)', csdb id 11618) out of Aleksi Eeben's ~20+ total tagged files; see knowledge/COVERAGE.md row #4 (1 file)",
    "data/sidid.json: no entry for '256bytes/AEB' (checked, absent)",
    "CSDb SID entry, 'Electronic (256 bytes)': https://csdb.dk/sid/?id=11618 — author Aleksi Eeben, released 2005 (Carillon & Cyberiad), data size 254 ($00FE) bytes, load address $0801, reused in 'PETSCII Ate My TinySID' (2005, Chrome and Ice Team) and the composer's own 'Electronic' collection release",
    "data/composers/aleksi-eeben.json profile: full_name Aleksi Eeben, country Finland, csdb_id 13210, notable 'Created John Player, Polly Tracker and Polyanna'",
    "knowledge/players/john-player.md, knowledge/players/pollytracker.md, knowledge/players/polyanna.md — sibling cards for this same author's OTHER, unrelated tools (cited to establish the distinction, not edited)",
    "knowledge/players/tape-256bytes.md and knowledge/players/ice00-256bytes.md — sibling '256bytes/*' cards establishing the same evaluation criteria and independently corroborating the shared 'PETSCII Ate My TinySID' compilation (cited for methodology/cross-reference, not edited)",
    "knowledge/players/gavin-raeburn.md — checked directly and ruled OUT as related; the 'aeb' substring match to 'Raeburn' is coincidental (cited to document the negative check, not edited)"
  ]
}
```

## Overview

`256bytes/AEB` is Finnish composer/coder **Aleksi Eeben**'s own
size-constrained player+data routine, in the same "256bytes/*" tag family as
the already-carded `256bytes/Agemixer`, `256bytes/Ice00`, and `256bytes/Tape`.
Eeben is notable in his own right as the author of John Player, PollyTracker,
and Polyanna (all separately carded in this KB) — `256bytes/AEB` is a distinct,
one-off ultra-compact routine unrelated to those general-purpose trackers,
used for exactly one locally-tagged tune. CSDb confirms the "256 bytes" claim
almost exactly (254 bytes measured) and shows the same SID reused in "PETSCII
Ate My TinySID" (2005) — the identical compilation that also picked up the
sibling `256bytes/Tape` and `256bytes/Ice00` routines, though nothing suggests
shared code between the three authors.

A hint from the initiating session suggested checking `knowledge/players/gavin-raeburn.md`
for a possible connection (substring "aeb" inside "Raeburn"). That card was
read directly: it documents an entirely different Scottish Codemasters
composer with his own hand-written playroutine, and no source connects him to
Aleksi Eeben or this tag. The similarity is coincidental string matching, not
evidence, and no edge or merge was made.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is **not** one of Eeben's known
tools (John Player / PollyTracker / Polyanna) but a separate one-off; the "256
bytes" label is nearly exact (254 bytes measured); and the same compilation
("PETSCII Ate My TinySID") reused all three sibling `256bytes/*` composer
tags, which is real but coincidental overlap, not a code-sharing claim.

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no public source or
disassembly located. A 254-byte SID would be an unusually small and tractable
future disassembly target, as already noted for the sibling `256bytes/*`
cards.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
from local composer data and one CSDb SID-entry lookup. No SIDId entry exists
for this tag. The Gavin Raeburn hint was checked and explicitly ruled out.

## Sources

See the `sources` array — local composer-file aggregation, one CSDb SID
entry, the three already-carded tools by the same author (cited for
distinction), the two sibling `256bytes/*` cards (cited for methodology), and
the `gavin-raeburn.md` card (cited to document the ruled-out check).
