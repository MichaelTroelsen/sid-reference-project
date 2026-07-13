# Cyberlogic Sound Studio

```json
{
  "id": "cyberlogic-soundstudio",
  "name": "Cyberlogic Sound Studio",
  "aliases": ["Cyberlogic_SoundStudio", "Cyberlogic Sound Studio", "C.S.S"],
  "authors": ["Oliver Klee (code)", "Sascha Nagie (celticdesign) — music/design"],
  "released": "~1991 (V4.0 dated 1992)",
  "status": "stub",
  "platform": "Native C64 music editor/tool. Closed (no source/license found).",
  "csdb_release": 170632,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Canonical name Cyberlogic Sound Studio (abbrev. C.S.S). Code by Oliver Klee; music/design/concept by Sascha Nagie (handle 'celticdesign', of Masters' Design Group). SIDId dates it 1991; the documented CSDb version is V4.0 (1992, bundling 25 demo SIDs) — so first release ~1991, V4.0 in 1992.",
    "Whether 'Cyberlogic' is a scene group or just the product-line name is UNKNOWN — CSDb credits individuals, no group entry found (TODO).",
    "FINDABILITY NOTE: a CSDb keyword search returns nothing; the release (id 170632) is reachable only via the SIDId reference ID — recorded so a maintainer isn't sent on a fruitless search.",
    "Replay internals all UNKNOWN — TODO. No SIDId technique comment. 197 files."
  ],
  "sources": [
    "CSDb Cyberlogic Sound Studio V4.0 (credits/version/year): https://csdb.dk/release/?id=170632",
    "sidid.nfo (name/authors/1991): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "sidid:Cyberlogic_SoundStudio (Oliver Klee & Sascha Nagie, 1991)",
    "Local dataset: 197 files tagged Cyberlogic_SoundStudio (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Cyberlogic Sound Studio (C.S.S) is a native C64 music editor — code by **Oliver
Klee**, music/design by **Sascha Nagie** (celticdesign) — from ~1991 (V4.0 in
1992). 197 files here.

## Quirks & gotchas

See the `quirks` array — note the **findability caveat** (the CSDb release is
only reachable via the SIDId ref ID, not keyword search) and the unresolved
"is Cyberlogic a group?" question. Internals `TODO`.

## Disassembly notes

None; internals undocumented. Disassemble a tagged `.sid` to recover them.

## Verification

**Not verified — `status: stub`.** Authors and version confirmed; all runtime
fields `TODO`.

## Sources

See the `sources` array — CSDb V4.0 and SIDId.
