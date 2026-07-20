# TFX

```json
{
  "id": "tfx",
  "name": "TFX",
  "aliases": ["TFX"],
  "authors": ["Ray (Area Team / Unreal)"],
  "released": "1995 (V1.0, Unreal); V1.2 1996",
  "status": "verified",
  "platform": "Native C64 music editor (the .prg/.d64 embeds a playroutine). Closed; binaries only.",
  "csdb_release": 110111,

  "memory": {
    "load_address": "$1000 (observed on TFX_Test.sid; PSID header loadAddr field was 0)",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "$1000",
    "play": "$1003"
  },
  "speed": "TODO",

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
    "A music editor by 'Ray' (of Area Team and Unreal), released by Unreal — V1.0 (1995), V1.2 (1996). Co-created with Pseudografx (music/design/charset/docs); idea by Ray + Pseudografx. A V1.1 is implied by numbering but not found (TODO).",
    "What 'TFX' stands for is UNKNOWN — neither the CSDb releases nor SIDId document an expansion. TODO.",
    "Signature note: the SIDId entry carries NO magic-byte signature for TFX (only author/year/reference) — so SIDId/Player-ID cannot fingerprint TFX by content; the DeepSID 'TFX' tag originates from DeepSID's own metadata, not automatic byte-detection. (Worth knowing when trusting the tag's precision.)",
    "Very concentrated: 268 files across only 7 composers (Sad, Jaymz Julian, PCH, Factor6) — a small in-group tool. Note Unreal also released DMC V7.0 (1995), but no stated relationship to TFX.",
    "Replay internals (memory map, ZP, init/play, data format, effect set), source/license, and lineage all UNKNOWN — TODO (would require disassembling a TFX-tagged .sid or the editor binary)."
  ],
  "sources": [
    "CSDb TFX V1.0 (Unreal, 1995, full credits): https://csdb.dk/release/?id=110111",
    "CSDb TFX V1.2 (Unreal, 1996): https://csdb.dk/release/?id=38900",
    "SIDId sidid.nfo (author Ray, 1995; note: no byte-signature): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "sidid:TFX (author Ray, 1995 Unreal, CSDb 110111)",
    "Local dataset: 268 files tagged TFX across 7 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

TFX is a native C64 music editor by **Ray** (of Area Team and Unreal), released
by Unreal — V1.0 in 1995, V1.2 in 1996 (co-created with Pseudografx). It's a
small, concentrated tool: 268 files across only 7 composers. What "TFX" stands
for isn't documented anywhere found.

## Quirks & gotchas

See the `quirks` array. Load-bearing: **SIDId has no byte-signature for TFX**
(so its DeepSID tag comes from DeepSID metadata, not content-fingerprinting —
relevant to how much to trust the tag); the **unknown acronym**; and the small
7-composer footprint. Internals `TODO`.

## Disassembly notes

None done here; no published internals. Disassembling a TFX-tagged `.sid` or
the editor `.prg` is the route to memory/format facts.

## Verification

**Verified by disassembly + reassembly + trace-diff (2026-07-20).**

File used: `C64Music/MUSICIANS/P/PCH/TFX_Test.sid`.
PSID header read directly: dataOffset $7C, loadAddr field $0000 → real load **$1000**, init **$1000**, play **$1003**, subtunes 1, payload 4281 bytes.

Disassembly: `SIDdecompiler.exe ... -a4096 -z -d -c -v2` produced a $1000–$20B8 map with 12,912 trace-node pairs.
Reassembly: `64tass.exe -a --cbm-prg` produced 4281 bytes at $1000–$20B8.

- **Initial byte-diff:** 64/4281 bytes differed (98.5050%). All divergences were drifted self-modified/working-storage values that SIDdecompiler captured post-execution rather than the file's cold-start constants:
  - four self-modified immediate operands: `$11B9`, `$11BE`, `$11C5`, `$16D2`;
  - one read/write working-storage region: `$18ED`–`$1998` (172 bytes, mostly `.byte` tables, with a few inline bytes inside multi-byte directives).
- **After patching those 64 bytes back to cold-start values in the source:** reassembly is **100.0000% byte-exact**, and a 50-frame `sidm2-sid-trace` run is **register-write exact** — 187 SID writes, 0 divergences vs. the original.

`status` changed from `in-progress` to `verified`. **Honest scope caveat:** this verification is based on a single TFX file (`TFX_Test.sid`). The drift mechanism is the same class already seen on other players (self-modified immediate operands + working-storage table), so the reconstruction is highly likely to generalize, but a second independent TFX file has not yet been tested.
- Exact byte-level patch table for `TFX_Test.sid` (durable, not scratchpad): `knowledge/players/reconstructions/tfx.md`.

Remaining unknowns (memory map beyond this file, ZP, data-format details, effect encodings, the TFX acronym, lineage) are still `TODO`.

## Sources

See the `sources` array — the CSDb V1.0/V1.2 releases and the SIDId entry
(which notably lacks a byte-signature).
