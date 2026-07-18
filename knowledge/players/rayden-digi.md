# Rayden Digi (player routine)

```json
{
  "id": "rayden-digi",
  "name": "Rayden Digi (player routine)",
  "aliases": ["Rayden_Digi_V2"],
  "authors": ["Patrick Zeh (Rayden)"],
  "released": "TODO: no explicit year in SIDId; the one locally-tagged file's CSDb SID entry was not fetched in this pass",
  "status": "stub",
  "platform": "TODO: no CSDb tool release, source repo, or standalone download found under this name — German composer Patrick Zeh's own in-house digi routine; his catalog is otherwise dominated by DMC_V4.x and Music_Assembler (published trackers), so this reads as a small personal outlier, not confirmed by a direct citation",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "100% single-composer concentration: the only file tagged 'Rayden_Digi_V2' in this dataset — 'Spelling Around' (data/composers/rayden.json, CSDb sid id 24988) — is by Patrick Zeh (Rayden) himself, out of ~80 total tagged files in his folder. The other 79 run overwhelmingly on 'DMC_V4.x' (a published, versioned tracker used by many composers project-wide) and 'Music_Assembler', with this being the sole outlier.",
    "'_V2' IN THE RAW TAG NAME IMPLIES A VERSION HISTORY, BUT NO V1 IS LOCALLY VISIBLE: knowledge/COVERAGE.md lists only 'Rayden_Digi_V2' (grouped under family display name 'Rayden_Digi', row #168, 1 file) — no 'Rayden_Digi' (unversioned) or 'Rayden_Digi_V1' tag appears anywhere in this project's local dataset (data/composers/*.json covers HVSC's MUSICIANS/ tree only; an earlier version may exist untagged, in the GAMES/ tree, or simply was never separately fingerprinted). This card covers only what is locally attested: V2, 1 file.",
    "SIDId (data/sidid.json byTag['Rayden_Digi_V2']) gives ONLY an author line — 'Patrick Zeh (Rayden)' — no NAME, RELEASED, REFERENCE, or COMMENT field, the same thin-record pattern seen on most other single-composer '_Digi' tags in this batch.",
    "PER THIS KB'S CORE RULE: no source found independently confirms actual sample/digi playback technique for this tag — treated as a bare Player-ID/byte-signature label, not a verified claim about the routine's underlying mechanism."
  ],
  "sources": [
    "Local dataset: data/composers/rayden.json — 1 file tagged Rayden_Digi_V2 ('Spelling Around', csdb sid id 24988), sole author Patrick Zeh (Rayden), out of ~80 total files; see knowledge/COVERAGE.md row #168 (1 file, raw tag 'Rayden_Digi_V2')",
    "data/sidid.json byTag['Rayden_Digi_V2']: author 'Patrick Zeh (Rayden)', no other fields",
    "data/composers/rayden.json profile: full_name Patrick Zeh, handles '<del>Booze Lee</del>, Rayden', country Germany, csdb_id 4989"
  ]
}
```

## Overview

`Rayden_Digi_V2` is a Player-ID tag covering exactly **1 file** — "Spelling
Around" — in German composer **Patrick Zeh**'s ("Rayden") catalog, out of
roughly 80 total tagged files. His catalog is otherwise dominated by the
published `DMC_V4.x` tracker and `Music_Assembler`, making this a clear
personal outlier. The "_V2" in the raw tag name implies an earlier version
exists, but no "Rayden_Digi"/"Rayden_Digi_V1" tag is visible anywhere in this
project's local HVSC-derived dataset.

## Quirks & gotchas

See the `quirks` array. Load-bearing: 100% single-composer/single-file
concentration against a much larger DMC-dominated catalog, and an unresolved
"V2 with no locally-visible V1" version-numbering gap. No independent source
confirms an actual sample/digi playback mechanism for this tag.

## Disassembly notes

None performed. No public source or disassembly was located; all Tier 3
fields are `TODO`, not guessed.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
(authorship, exact 1-file usage, the thin SIDId author-only record). No
runtime behaviour has been confirmed or reconstructed.

## Sources

See the `sources` array — local dataset aggregation and the cached SIDId
record.
