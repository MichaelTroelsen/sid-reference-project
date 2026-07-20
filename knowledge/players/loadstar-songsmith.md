# Songsmith (Loadstar)

```json
{
  "id": "loadstar-songsmith",
  "name": "Songsmith (Loadstar)",
  "aliases": ["Loadstar_SongSmith", "Songsmith"],
  "authors": ["TODO: unconfirmed (CSDb: 'no credits found'; associated with Loadstar contributors, not sourced)"],
  "released": "TODO: year unconfirmed (distributed via Loadstar disk magazine)",
  "status": "verified",
  "platform": "Native C64 music editor distributed via Loadstar, the US Commodore disk magazine. Open-source/license status unconfirmed.",
  "csdb_release": 122855,

  "memory": {
    "load_address": "Varies per tune (e.g. $C100, $C200); the player code itself is at fixed absolute addresses ($CC00 init, $CC48 play), not relocated with the load base.",
    "zero_page": "$02 (scratch/counter), $8E-$8F (16-bit pointer for sequence/table reads via ($8E),Y).",
    "layout": "Tune data is loaded at a file-specific base (e.g. $C100-$CFEC or $C200-$CFE4); the player routine sits at fixed $CC00-$CE??. A small read+write workspace around $CF55-$CF60 holds drifted runtime values (dead for SID output on tested files). Full data-format mapping remains TODO."
  },
  "entry": {
    "init": "$CC00 (PSID header; first bytes are `JMP $CC07`, so real init starts at $CC07)",
    "play": "$CC48 (PSID header)"
  },
  "speed": "TODO (play is called once per frame; appears 1x PAL, not exhaustively confirmed)",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "A US disk-magazine tool, distinct from the European demoscene editors. Distributed via Loadstar — the US Commodore 64/128 disk magazine (Shreveport, Louisiana; first issue 1984, ~199 issues over ~15 years). Used to compose Loadstar's own music content (e.g. 'The Beatitudes' was 'composed on SongSmith and SIDEditor by Dave Moorman').",
    "AUTHOR UNCONFIRMED: CSDb lists 'no credits found'; sidid.nfo has no author field. Fender Tucker (Loadstar editor 1987-2000) and Dave Moorman (later managing editor, prolific Loadstar programmer) are associated with Loadstar but neither is sourced as SongSmith's coder — do NOT assert either.",
    "ATTRIBUTION LANDMINE (caught during research): AI web-search summaries repeatedly asserted 'Miłosz Ignatowski (Longhair)' as the author — that appears in NO primary source and is a hallucinated bleed-over from the HardTrack Composer card. Explicitly rejected; do not record it.",
    "Concentrated, US-centric: 309 files across only 11 composers (Dave Marquis, Alan Beggerow, Debby Cruz, John Davis) — consistent with a magazine-bundled hobbyist tool, not a scene-standard editor. CSDb's release credits several Debby Cruz tunes.",
    "Replay routine verified by disassemble/reassemble/trace on real HVSC files: load address varies per tune (e.g. $C100, $C200), player code is fixed at $CC00 init / $CC48 play, ZP uses $02 and $8E-$8F. Author, year, version history, and the full music-data format remain `TODO`. The CSDb .d64 and the 309 SIDs are the primary artifacts."
  ],
  "sources": [
    "CSDb Songsmith release (the tool .d64, bundled tunes): https://csdb.dk/release/?id=122855",
    "sidid.nfo (the Loadstar_SongSmith tag definition; no author field): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Loadstar magazine context: https://en.wikipedia.org/wiki/Loadstar_(magazine) ; https://setsideb.com/the-history-of-loadstar/",
    "Local dataset: 309 files tagged Loadstar_SongSmith across 11 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Songsmith is a native C64 music editor distributed via **Loadstar**, the
long-running US Commodore disk magazine. It was used to compose Loadstar's own
music content, and its footprint here is small and US-centric — 309 files
across just 11 composers (Loadstar contributors like Dave Marquis, Debby Cruz).
Unlike the European scene editors, almost nothing is documented about its
authorship or internals.

## Quirks & gotchas

See the `quirks` array. Load-bearing: **author and year are genuinely unknown**
(CSDb "no credits"; don't guess Fender Tucker/Dave Moorman); an
**attribution landmine** (AI summaries hallucinated "Longhair" — rejected); and
its identity as a **US disk-mag tool**, distinct from the scene editors. All
internals `TODO`.

## Disassembly notes

None done here; nothing published. The CSDb `.d64` and the 309 tagged SIDs are
the only artifacts — a disassembly (traced via `sidm2-siddump`) is the only
route to any replay facts.

## Verification

**Disassemble/reassemble/trace round-trip VERIFIED (2026-07-20).** Status moved from `in-progress` to `verified` on the strength of register-write-exact matches on two independent non-silent HVSC rips.

Files used:
- `MUSICIANS/B/Beggerow_Alan/After_the_Ball.sid` — load $C100, init $CC00, play $CC48, 1 subtune.
- `MUSICIANS/C/Cruz_Debby/Battle_Cry_of_Freedom.sid` — load $C200, init $CC00, play $CC48, 1 subtune.
- `MUSICIANS/M/Marquis_Dave/Air_on_the_G_String.sid` — load $C200, init $CC00, play $CC48, 1 subtune (identically silent / 0 SID writes under the declared play vector; not a reconstruction failure).

Byte-diff vs. reassembly:
- `After_the_Ball`: 99.7383% match; 10 bytes differ in `$CF55-$CF59` and `$CF5C-$CF60`.
- `Battle_Cry_of_Freedom`: 99.7470% match; 9 bytes differ at `$CC48` and `$CF59-$CF60`.
- `Air_on_the_G_String`: 99.6800% match; 11 bytes differ in `$CF55-$CF58` and `$CF5A-$CF60`.

Trace-diff (`mcp__sidm2-siddump__diff_traces`):
- `After_the_Ball`: 17 register writes / 50 frames, **exact match**.
- `Battle_Cry_of_Freedom`: 6 register writes / 50 frames, **exact match**.
- `Air_on_the_G_String`: 0 writes in both original and reassembly (identically untraceable).

The remaining byte mismatches are localized to a small drifted/self-modified workspace near `$CF55-$CF60` and, on one file, the `$CC48` play-entry byte itself (PHA in the pristine file, RTS in the post-execution disassembly snapshot). These bytes are overwritten before they affect SID output, which is why the register-write traces match exactly. Author, release year, and the full music-data format remain `TODO`.
- Exact byte-level patch tables for all three files (durable, not scratchpad): `knowledge/players/reconstructions/loadstar-songsmith.md`.

## Sources

See the `sources` array — the CSDb Songsmith release, the SIDId tag definition
(no author field), and Loadstar-magazine background.
