# Spinnaker

```json
{
  "id": "spinnaker",
  "name": "Spinnaker",
  "aliases": ["Spinnaker"],
  "authors": ["Nick Scarim (Nicholas Scarim)"],
  "released": "1984 — the SID entry's own CSDb `Released` field reads '1984 Spinnaker Software' (csdb.dk sid id 26123), matching the associated game release's own `ReleaseYear` (1984, csdb.dk release id 118169). Not a tool-release date — no dedicated player/tool release exists (see platform).",
  "status": "stub",
  "platform": "Native C64, in-house game music routine — NOT a distributed editor/tool. CSDb's release entry for the game (id 118169) credits Nick Scarim for BOTH 'Code' and 'Music', confirming the composer wrote his own routine for this single 1984 Spinnaker Software-published title rather than using a shared/reusable driver. No dedicated CSDb tool/editor page exists under 'Spinnaker'.",
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
    "SIDId's sidid.nfo has NO entry for 'Spinnaker' (checked) — Player-ID-only signature.",
    "NAME MISMATCH WORTH FLAGGING: the tag 'Spinnaker' matches the US educational/games publisher Spinnaker Software (publisher of the single locally tagged game, 'Grandma's House'), but the local composer profile's AFFILIATION field for Nick Scarim reads 'First Star Software', a DIFFERENT US publisher (data/composers/nick-scarim.json) — i.e. the tag names the game's publisher, not the composer's primary catalogued studio affiliation. Left unresolved; do not assume Scarim was a Spinnaker staff composer beyond this one credit.",
    "Single locally tagged file: 'Grandma's House', by Nick Scarim (USA, CSDb scener 4093) — a narrow, single-title signature.",
    "csdb_release stays null: no dedicated CSDb tool/editor release exists for 'Spinnaker' as a player. The only related CSDb release is the game itself, 'Grandma's House' (csdb.dk release id 118169, C64 Game, 1984) — that is a GAME release id, not a player-tool release id, so it is not written into csdb_release. CSDb's own SID entry for the tune (id 26123) carries the load/init/play addresses $9500/$9C00/$9C80 as PSID header metadata only — NOT a disassembly-confirmed entry point, so these are recorded here in quirks, not in the Tier 3 entry/memory fields.",
    "Nick Scarim's other 4 locally cached files use DIFFERENT player tags ('K-Byte' for Sesame Street Letter-Go-Round, 'Nick_Scarim' for both Spy vs Spy titles, none for Spy vs Spy III) — confirming 'Spinnaker' is not a personal routine he reused across his catalogue, but specific to this one Spinnaker-published title."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Spinnaker': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local composer profile (affiliation 'First Star Software', distinct from the tag's 'Spinnaker' publisher name): data/composers/nick-scarim.json",
    "CSDb scener Nick Scarim (USA): https://csdb.dk/scener/?id=4093",
    "CSDb webservice, SID entry id 26123 (Released: '1984 Spinnaker Software'; load/init/play $9500/$9C00/$9C80 as header metadata only): https://csdb.dk/sid/?id=26123",
    "CSDb webservice, release id 118169 ('Grandma's House', C64 Game, 1984; Credits: Code=Nick Scarim, Music=Nick Scarim): https://csdb.dk/release/?id=118169",
    "Local dataset: 1 file tagged Spinnaker — 'Grandma's House', by Nick Scarim; and Nick Scarim's other 4 cached files (data/composers/nick-scarim.json), which use different/no player tags"
  ]
}
```

## Overview

`Spinnaker` is a raw Player-ID tag for a single locally tagged file,
"Grandma's House" (1984), credited to composer **Nick Scarim** (USA, CSDb
scener 4093). CSDb's own release entry for the game (id 118169) credits
Scarim for both Code and Music, confirming this is an in-house routine
written by the game's own programmer for a single Spinnaker
Software-published title — not a distributed editor/tool, and not a
routine Scarim reused elsewhere (his other cached files carry different
player tags or none). The tag name matches Spinnaker Software, the game's
publisher — but Scarim's own catalogued composer-profile affiliation is
recorded as a different US publisher, First Star Software. SIDId has no
entry for this tag; no dedicated CSDb tool/release page was found, so
`csdb_release` stays null.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag's publisher name (Spinnaker)
does not match the composer's own catalogued affiliation (First Star
Software) — a discrepancy left unresolved, not smoothed over.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/nick-scarim.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), local composer
profile, CSDb scener page, the CSDb webservice SID entry (26123) and release
entry (118169) for the game, and the local file aggregation (including
Scarim's other 4 cached files, which rule out reuse of this tag elsewhere in
his catalogue).
