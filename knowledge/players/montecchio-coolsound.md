# Montecchio/Coolsound

```json
{
  "id": "montecchio-coolsound",
  "name": "Montecchio/Coolsound",
  "aliases": ["Montecchio/Coolsound"],
  "authors": ["Andreas Montecchio"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name (unconfirmed) — likely a personal/in-house C64 music routine given the SIDId author-only entry and single-composer usage",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId's entry for this tag has only an AUTHOR field ('Andreas Montecchio') — no NAME, reference, or comment — consistent with an in-house routine never packaged/released as a titled, standalone tool.",
    "A web search pass for 'Andreas Montecchio' + 'Coolsound' + CSDb returned no independent corroborating hits beyond the SIDId author attribution itself — no CSDb scener profile or group page was located during this research pass (TODO: revisit with a direct CSDb scener search).",
    "All 4 locally-tagged files are by the same composer (Andreas Montecchio) — consistent with a personal routine. 'Coolsound' in the tag name may name a demogroup or the composer's own studio/label; unconfirmed either way."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['Montecchio/Coolsound'], author only)",
    "Local dataset: 4 files tagged Montecchio/Coolsound, 1 composer (Andreas Montecchio) — data/composers/*.json aggregation"
  ]
}
```

## Overview

`Montecchio/Coolsound` is SIDId's tag for a routine attributed to
**Andreas Montecchio**, with no further name, reference, or comment in
SIDId's own data — consistent with an in-house, never-formally-released
routine. All 4 locally-tagged files are by Montecchio himself. No
independent CSDb corroboration was found for "Coolsound" as a group or tool
name during this research pass.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId gives author only, no
name/reference/comment; (2) no CSDb corroboration found for "Coolsound";
(3) single-composer concentration (4/4 files).

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. Seeded from `data/sidid.json` and `data/composers/*.json`.
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo and the local composer aggregation.
