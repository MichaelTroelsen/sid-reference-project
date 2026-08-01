# Proton_tiny

```json
{
  "id": "proton-tiny",
  "name": "Proton_tiny",
  "aliases": ["Proton_tiny"],
  "authors": ["Sami Louko (Proton)"],
  "released": "2022 — both Proton_tiny-tagged files were entries in the 'Unofficial Tiny SID Compo 2022' (CSDb event id 3157): 'Immortality' released 2022-03-24 (CSDb sid id 60559), 'Immortality II' released 2022-03-27 (CSDb sid id 60566)",
  "status": "stub",
  "platform": "Native C64 replay routine, custom-written by Proton specifically for the size-limited categories ('C64 512B Game', 'C64 1K Game') of the 'Unofficial Tiny SID Compo 2022' — CSDb's own event page states the compo had no appropriate size-limited-music category so entrants wrote custom tiny music routines to fit (https://csdb.dk/event/?id=3157); not a general-purpose/published tool, no dedicated CSDb tool/release entry found under the name 'Proton_tiny' itself.",
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
    "SIDId's sidid.nfo has NO entry for 'Proton_tiny' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "Census of both tagged files confirms the '_tiny' suffix denotes size, not a code-relationship to other '_tiny'-suffixed families: 'Immortality' (csdb_id 60559) placed 3rd in the 'C64 512B Game' category and 'Immortality II' (csdb_id 60566) placed 3rd in the 'C64 1K Game' category of the 'Unofficial Tiny SID Compo 2022' (CSDb event id 3157, https://csdb.dk/event/?id=3157) — a standalone size-limited compo (512B/1K/2K games, 256B intro) with no CSDb category for size-limited music, so entrants wrote their own compact routines. This is a different origin from other '_tiny'-suffixed sibling cards (e.g. 4-Mat's) and should NOT be read as evidence of shared code — per project discipline, no family-name-pattern edge is asserted here.",
    "PSID header metadata from the CSDb webservice (not a disassembly fact): 'Immortality' — LoadAddr $1000, InitAddr $1000, PlayAddr $107B, DataSize 512 bytes, SID model 8580, PAL. 'Immortality II' — LoadAddr $1000, InitAddr $1000, PlayAddr $10AF, DataSize 1023 bytes, SID model 8580, PAL. (https://csdb.dk/webservice/?type=sid&id=60559, https://csdb.dk/webservice/?type=sid&id=60566)",
    "Single-composer concentration: both locally-tagged files are by Proton himself (Sami Louko, Finland, b. 1973-11-14, CSDb scener 4616, former handles include 'SJL Cracking Service', 'The Merp', 'Xybots') — consistent with a personal/experimental routine, matching the pattern of other '_tiny'-suffixed tags in this project."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Proton_tiny': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged 'Proton_tiny', both by Proton — data/composers/proton.json (census: 'Immortality' csdb_id 60559, 'Immortality II' csdb_id 60566)",
    "data/composers/proton.json (HVSC profile: full name Sami Louko, Finland, b. 1973-11-14, CSDb scener 4616)",
    "CSDb webservice, type=sid, id=60559 (Immortality: Released '2022 Finnish Gold', UsedIn 'Unofficial Tiny SID Compo 2022' event id 3157, released 2022-03-24, C64 512B Game 3rd place) — https://csdb.dk/webservice/?type=sid&id=60559",
    "CSDb webservice, type=sid, id=60566 (Immortality II: Released '2022 Finnish Gold', UsedIn 'Unofficial Tiny SID Compo 2022' event id 3157, released 2022-03-27, C64 1K Game 3rd place) — https://csdb.dk/webservice/?type=sid&id=60566",
    "CSDb event page (fetched): 'Unofficial Tiny SID Compo 2022', organized by Karmic, 2022-02-04 to 2022-05-14, categories C64 512B/1K/2K Game and C64 256B Intro, comment noting CSDb 'doesn't have appropriate categories for size limited music' — https://csdb.dk/event/?id=3157",
    "CSDb release page (fetched, id=215797, 'Immortality'): Proton (Complex / Finnish Gold) handled code and music — https://csdb.dk/release/?id=215797",
    "Sibling cards with the same '_tiny' naming pattern (compared only, no edge asserted — see quirks): knowledge/players/4-mat-tiny-1.md, knowledge/players/4-mat-tiny-2.md, knowledge/players/4-mat-tiny-3.md, knowledge/players/magnar-tiny.md, knowledge/players/rotteroy-tiny.md, knowledge/players/hein-tiny.md, knowledge/players/silpheed-tiny.md, knowledge/players/krill-tiny.md"
  ]
}
```

## Overview

`Proton_tiny` is a raw Player-ID tag for a small replay routine used
exclusively by **Sami Louko**, handle **Proton**, a Finnish scener (Complex /
Finnish Gold). SIDId has no entry for the tag. Census of both locally-tagged
files (`Immortality`, `Immortality II`, both by Proton) traces the origin
precisely: both were entries in CSDb's "Unofficial Tiny SID Compo 2022"
(event id 3157, released 2022-03-24 and 2022-03-27), a standalone
size-limited compo (512B/1K/2K game categories, 256B intro) for which the
event page itself notes CSDb has no dedicated category for size-limited
*music*, so entrants wrote their own compact custom routines to fit. That
directly explains the `_tiny` suffix here — a purpose-built minimal replay
routine sized to a 512-byte and a 1023-byte SID payload respectively — as
distinct from the superficially similar `_tiny` suffix on other cards (e.g.
4-Mat's `_tiny_1`/`_tiny_2`), which this project deliberately does not
assert any code relationship to.

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId has no entry for this tag; usage
is 100% by the composer himself; both tagged files were 512B/1K-limited compo
entries at CSDb event 3157, which is the actual origin of the `_tiny` name —
not a code relationship to other `_tiny`-suffixed sibling cards.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/proton.json`, `data/sidid.json`) plus CSDb webservice/event
lookups for provenance. `status: stub` — no runtime fact has been confirmed
by disassembly or trace; Tier 3 remains untouched.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the local
composer aggregation, and CSDb webservice (`type=sid`) + event page (id 3157)
lookups for both of the two tagged files.
