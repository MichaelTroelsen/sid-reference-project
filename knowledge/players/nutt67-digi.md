# Nutt67_Digi

```json
{
  "id": "nutt67-digi",
  "name": "Nutt67_Digi",
  "aliases": ["Nutt67_Digi"],
  "authors": ["Ben Hayes (Nutt'67)"],
  "released": "1989 (earliest/only attested use — both of the 2 locally-tagged files are dated 1989 on CSDb: 'Back to Life' 10-Sep-1989 released by Masters of Reality, csdb.dk/release/?id=63005; 'Green Onions' 25-Aug-1989 released by Piracy Shed Productions Inc., csdb.dk/release/?id=62994 — no separate tool-release date found, so this is first-use, not a publisher release date)",
  "status": "stub",
  "platform": "Native C64, in-file/embedded digi routine — both tagged files carry DeepSID player_type 'Normal built-in' (data/composers/ben-hayes.json), i.e. code shipped inside the tune itself, not a standalone cross-platform editor. No dedicated CSDb tool/release page found under the exact name 'Nutt67_Digi'.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
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
    "SIDId's entry for this tag has only an AUTHOR line — no NAME, RELEASED, REFERENCE, or COMMENT (data/sidid.json byTag['Nutt67_Digi']) — no playback-technique claim, so per this project's rule ('digi by name is not evidence') no technique is asserted here.",
    "100% single-composer concentration: both locally-tagged files ('Back to Life', 'Green Onions') belong to composer 'ben-hayes' (David Hayes, handle 'Nutt '67' / Ben Hayes) alone (data/composers/ben-hayes.json).",
    "David Hayes (handles 'Nutt '67', Ben Hayes) is a Welsh scener/composer (data/composers/ben-hayes.json, country Wales, csdb_id 14250); no CSDb tool/release page for a standalone editor under this name was found.",
    "Census of both tagged files (CSDb webservice type=sid, ids 52892/52893): 'Back to Life' — LoadAddr $0800/InitAddr $0800, PSID header data only, not disassembly; 'Green Onions' — LoadAddr $5000/InitAddr $C200. These two PSID header pairs differ, consistent with the routine being hand-embedded per tune rather than a fixed relocatable driver, but this is inference from header metadata, not confirmed by disassembly.",
    "A same-author, same-year CSDb release 'Digisplitmix' (id 109242, C64 Music, 1989, Piracy Shed Productions Inc.) credits Nutt'67 for 'Code, Sampling' — a plausible but UNCONFIRMED candidate for this digi routine's own release entry. Not asserted as csdb_release because the SIDId tag and this release title are not directly linked by any source (https://csdb.dk/release/?id=109242)."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no other fields): https://github.com/cadaver/sidid/blob/master/sidid.nfo — data/sidid.json byTag['Nutt67_Digi']",
    "Local dataset: 2 files tagged Nutt67_Digi, both by composer 'ben-hayes' — data/composers/ben-hayes.json; see knowledge/COVERAGE.md rank 92",
    "CSDb scener profile, David Hayes / Nutt '67 / Ben Hayes: https://csdb.dk/scener/?id=14250",
    "CSDb webservice, SID entry 'Back to Life': https://csdb.dk/webservice/?type=sid&id=52892 (Released '1989 Masters of Reality'; UsedIn release https://csdb.dk/release/?id=63005, 10-Sep-1989)",
    "CSDb webservice, SID entry 'Green Onions': https://csdb.dk/webservice/?type=sid&id=52893 (Released '1989 Piracy Shed Productions'; UsedIn release https://csdb.dk/release/?id=62994, 25-Aug-1989)",
    "CSDb webservice, release 'Digisplitmix': https://csdb.dk/webservice/?type=release&id=109242 (candidate lead, unconfirmed link to this SIDId tag)"
  ]
}
```

## Overview

Nutt67_Digi is a SIDId-fingerprinted digi routine attributed to **Ben Hayes**
(real name David Hayes, originally handled "Nutt '67"), a Welsh composer/
scener. SIDId's record carries only an author line, no technique claim. Both
locally-tagged files belong to him alone, consistent with a personal, never-
packaged routine. Both files carry DeepSID `player_type: "Normal built-in"`,
confirming this is native C64 code embedded per-tune rather than a
standalone cross-platform editor. Both tagged tunes are dated 1989 on CSDb
("Back to Life", Masters of Reality, 10-Sep-1989; "Green Onions", Piracy
Shed Productions Inc., 25-Aug-1989) — no separate tool-release date exists,
so 1989 is recorded as first/only attested use, not a publisher release.
No CSDb tool/release page under the exact name "Nutt67_Digi" was found; a
same-author, same-year release "Digisplitmix" is a plausible but unconfirmed
candidate (see quirks).

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId's record is author-only (no
technique claim); 100% single-composer usage; the two tagged files' PSID
load/init addresses differ, consistent with a hand-embedded routine rather
than a fixed relocatable driver (header metadata only, not disassembly).

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local `data/composers/ben-hayes.json` and SIDId;
Tier 2 provenance (release dates, platform, csdb_release candidate) added
via CSDb webservice census of both tagged files. `status: stub`.

## Sources

See the `sources` array — SIDId, the local composer aggregation, and CSDb.
