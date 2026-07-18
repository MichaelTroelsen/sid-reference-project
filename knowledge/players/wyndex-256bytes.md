# 256bytes/Wyndex (player routine)

```json
{
  "id": "wyndex-256bytes",
  "name": "256bytes/Wyndex (player routine)",
  "aliases": ["256bytes/Wyndex"],
  "authors": ["Stephen L. Judd (Wyndex)"],
  "released": "2005 (per the CSDb SID entry for the one locally-tagged file)",
  "status": "stub",
  "platform": "Not a distributed tool — an extreme-size-constrained custom C64 player routine + data written by Stephen L. Judd (Wyndex) for a size-limited demoscene music competition, following the same '256bytes/*' pattern already carded at knowledge/players/agemixer-256bytes.md, knowledge/players/ice00-256bytes.md, knowledge/players/tape-256bytes.md, and knowledge/players/aeb-256bytes.md. Distinct from this same author's two general-purpose tools already carded separately: knowledge/players/wyndex-blahtune.md (1997 self-hosted composition system) and knowledge/players/wyndex-iseq.md (2001-2002 tool). No source connects this one-off routine's code to either of those.",
  "csdb_release": null,

  "memory": { "load_address": "$0328 (per the CSDb SID entry for 'Splatform (256 bytes)', csdb sid id 31365) — not independently disassembled.", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "$032A (Splatform (256 bytes), csdb sid id 31365)", "play": "$035E (Splatform (256 bytes), csdb sid id 31365)" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "NOT THE SAME AS THE AUTHOR'S OTHER TWO TOOLS: Stephen L. Judd (Wyndex) has two other, separately carded, general-purpose systems — Blahtune (1997, knowledge/players/wyndex-blahtune.md) and ISEQ (2001-2002, knowledge/players/wyndex-iseq.md) — each with its own SIDId signature. '256bytes/Wyndex' is a THIRD, distinct Player-ID tag: a one-off ultra-compact routine for exactly one size-coded tune, matching neither of those in load/init/play address or in scale. Same 'same author, but genuinely separate small tool' pattern already established for 256bytes/AEB vs Aleksi Eeben's John Player/PollyTracker/Polyanna (knowledge/players/aeb-256bytes.md).",
    "THE '256 BYTES' CLAIM IS NEARLY LITERALLY TRUE: the sole locally-tagged file, 'Splatform (256 bytes)' (data/composers/wyndex.json, CSDb sid id 31365), has a CSDb-listed data size of 254 ($00FE) bytes — genuinely sub-256, confirmed via direct CSDb lookup, not inferred from the tag or title string.",
    "GENUINE REUSE, AND THE SAME COMPILATION AS MULTIPLE SIBLING '256bytes/*' TAGS: CSDb shows this SID reused in 'PETSCII Ate My TinySID' (2005, Chrome and Ice Team) — the identical compilation that also reused 256bytes/AEB's 'Electronic', 256bytes/Tape's 'Imperial March', and 256bytes/Ice00's 'Random Ninja' (per those sibling cards' sources). This is evidence the routines were each independently selected for the same tiny-SID showcase release, not evidence of shared code between the authors — no source confirms code sharing, so no `edges` relationship is asserted. It was also separately released standalone as 'Splatform256' (2005 Music, by Wyndex) per CSDb.",
    "SIDId (data/sidid.json) has NO entry for '256bytes/Wyndex' — checked directly, absent (SIDId DOES separately carry 'Wyndex/Blahtune' and 'Wyndex/ISEQ' as their own entries). Fingerprinted by this project's own Player-ID tooling only, same as the sibling '256bytes/*' tags.",
    "The load/init/play addresses ($0328/$032A/$035E) do not match either of the author's other two tools' documented entry points (Blahtune: $1000/$1003/$1006; ISEQ: unknown, all TODO) — consistent with this being an independent, hand-assembled one-off routine rather than a cut-down build of either general-purpose system.",
    "Composer context: in this dataset Wyndex (data/composers/wyndex.json) has multiple locally-tagged files split across three distinct player tags — 'Wyndex/Blahtune', 'Wyndex/ISEQ', and this one, '256bytes/Wyndex' (1 file, 'Splatform (256 bytes)') — plus at least one untagged file ('Dim4')."
  ],
  "sources": [
    "Local dataset: data/composers/wyndex.json — 1 file tagged '256bytes/Wyndex' ('Splatform (256 bytes)', CSDb sid id 31365); see knowledge/COVERAGE.md row #12 (1 file)",
    "data/sidid.json: no entry for '256bytes/Wyndex' (checked, absent); 'Wyndex/Blahtune' and 'Wyndex/ISEQ' present separately",
    "CSDb SID entry 31365, 'Splatform (256 bytes)': author Steve Judd, released 2005, load $0328, init $032A, play $035E, data size 254 ($00FE) bytes, SID model 8580, NTSC clock; reused in 'PETSCII Ate My TinySID' (2005, Chrome and Ice Team) and 'Splatform256' (2005 Music, by Wyndex): https://csdb.dk/sid/?id=31365",
    "knowledge/players/wyndex-blahtune.md and knowledge/players/wyndex-iseq.md — sibling cards for this same author's OTHER, unrelated general-purpose tools (cited to establish the distinction, not edited)",
    "knowledge/players/aeb-256bytes.md, knowledge/players/ice00-256bytes.md, knowledge/players/tape-256bytes.md, knowledge/players/agemixer-256bytes.md — sibling '256bytes/*' cards establishing the same evaluation methodology and independently corroborating the shared 'PETSCII Ate My TinySID' compilation (cited for methodology/cross-reference, not edited)"
  ]
}
```

## Overview

`256bytes/Wyndex` is American composer **Stephen L. Judd**'s ("Wyndex") own
size-constrained player+data routine, in the same "256bytes/*" tag family as
the already-carded `256bytes/AEB`, `256bytes/Ice00`, `256bytes/Tape`, and
`256bytes/Agemixer`. Judd is separately notable as the author of two other
general-purpose C64 music systems already carded in this KB — Blahtune
(1997, `knowledge/players/wyndex-blahtune.md`) and ISEQ (2001-2002,
`knowledge/players/wyndex-iseq.md`) — each with its own SIDId signature and
CSDb release chain. `256bytes/Wyndex` is a THIRD, distinct thing: a one-off
ultra-compact routine used for exactly one locally-tagged tune, "Splatform
(256 bytes)" (CSDb sid id 31365, 2005), measuring 254 bytes per CSDb and
loading/initializing/playing at addresses ($0328/$032A/$035E) that match
neither of the author's other two documented tools. It was reused in
"PETSCII Ate My TinySID" (2005, Chrome and Ice Team) — the same compilation
that also picked up the sibling `256bytes/AEB`, `256bytes/Tape`, and
`256bytes/Ice00` routines — and separately released standalone as
"Splatform256" (2005 Music, by Wyndex).

This card was written as a NEW card, not a merge into either sibling
Wyndex card: the hint from the initiating session asked whether this is a
third distinct routine or the same as one of the two existing ones. Direct
comparison of entry points, CSDb release chain, and SIDId signature confirms
it is a third, genuinely distinct Player-ID tag — the exact same "same
author, separate small tool" conclusion already reached for `256bytes/AEB`
vs. Aleksi Eeben's other tools.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is **not** Blahtune or ISEQ but a
separate one-off routine (different entry points, no SIDId entry, no shared
CSDb release chain); the "256 bytes" label is nearly exact (254 bytes
measured); and the same "PETSCII Ate My TinySID" compilation reused several
sibling `256bytes/*` composer tags, which is real but coincidental overlap,
not a code-sharing claim.

## Disassembly notes

None performed. All Tier 3 fields beyond load/init/play addresses are
`TODO` — no public source or disassembly located. A 254-byte SID would be an
unusually small and tractable future disassembly target, as already noted
for the sibling `256bytes/*` cards.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are
established from local composer data and one CSDb SID-entry lookup. No
SIDId entry exists for this tag. No runtime fact was guessed.

## Sources

See the `sources` array — local composer-file aggregation, one CSDb SID
entry, and the two sibling Wyndex cards plus four sibling `256bytes/*` cards
(cited for distinction/methodology, not edited).
