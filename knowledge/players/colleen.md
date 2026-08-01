# Colleen

```json
{
  "id": "colleen",
  "name": "Colleen",
  "aliases": ["Colleen"],
  "authors": ["TODO: no coder credited — tag is attached to a Wally Beben file; the name's meaning/origin is unresolved"],
  "released": "1986 — CSDb SID entry id 3935 (the sole tagged file, 'Merry Xmas') has its own 'Released' field reading '1986 Hagar'; its home release 'Merry X-mas' (aka 'Hagar's Xmas', CSDb release id 23215) is also dated ReleaseYear 1986",
  "status": "stub",
  "platform": "In-house/personal C64 replay routine, not a distributed editor/tool. The sole tagged file ('Merry Xmas', CSDb SID id 3935) is embedded in Wally Beben's solo one-file demo 'Merry X-mas' (aka 'Hagar's Xmas', CSDb release id 23215, 1986), whose CSDb credits list Code, Graphics, and Music all to Hagar alone — consistent with a self-written routine, not a separately released tool. No dedicated CSDb player/tool page exists under the name 'Colleen', and no source found explains what/who the name 'Colleen' refers to (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'Colleen' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "The sole locally-tagged composer is Wally Beben (real name Wallace Beben, England, b. 1953-09-05, handle 'Hagar', CSDb scener 8133) — a well-documented professional UK games composer, best known for the C64 Tetris soundtrack. No source found during this research pass explains what or who 'Colleen' refers to (not a known game title, company, or person associated with Beben in the sources checked) — the name's origin is genuinely unresolved, unlike 'Colin_Porch' in this same batch where a plausible real-person connection was found.",
    "Single file, single composer — the smallest possible footprint, consistent with a one-off personally-named routine.",
    "Census confirmed: exactly 1 file across the whole local dataset carries the 'Colleen' tag — 'Merry Xmas' (CSDb SID id 3935), embedded in the solo one-file demo 'Merry X-mas' / 'Hagar's Xmas' (CSDb release id 23215, 1986). CSDb's own release credits list Code/Graphics/Music all to Hagar (Wally Beben) alone.",
    "PSID header metadata for the sole tagged file (from CSDb's SID webservice, id 3935) — NOT a disassembly fact, recorded here only: LoadAddr 38464 ($9640), InitAddr 40417 ($9DE1), PlayAddr 40483 ($9E23), DataSize 2409 bytes. Do not promote into the Tier 3 `entry`/`memory` fields without an actual disassembly.",
    "The demo's own release id (CSDb release/?id=23215) is a different namespace from a player-tool's csdb_release — it is the demo the routine is embedded in, not a release of the player itself, so it is recorded here rather than in `csdb_release` (see project's csdbId landmine note)."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Colleen': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 1 file tagged 'Colleen', by composer Wally Beben — data/composers/wally-beben.json",
    "data/composers/wally-beben.json (HVSC profile: full name Wallace Beben, England, b. 1953-09-05, handle Hagar, affiliation Freelance, CSDb scener 8133)",
    "Remix64 composer page, Wally Beben (background/career, no mention of 'Colleen'): https://remix64.com/composer/wally-beben/",
    "CSDb webservice, type=sid, id=3935 ('Merry Xmas'): Released '1986 Hagar', LoadAddr/InitAddr/PlayAddr/DataSize as recorded, UsedIn release id 23215 — https://csdb.dk/sid/?id=3935",
    "CSDb webservice, type=release, id=23215 ('Merry X-mas' / 'Hagar's Xmas', C64 One-File Demo, ReleaseYear 1986, Code/Graphics/Music all credited to Hagar): https://csdb.dk/release/?id=23215"
  ]
}
```

## Overview

`Colleen` is a raw Player-ID tag found on a single file by composer **Wally
Beben** (handle Hagar), a professional UK C64 games composer best known for
the Tetris soundtrack. The tagged file, "Merry Xmas" (CSDb SID id 3935), is
embedded in Beben's solo one-file demo "Merry X-mas" (aka "Hagar's Xmas",
CSDb release id 23215), whose own `ReleaseYear` and the SID entry's own
`Released` field both read **1986**; CSDb credits Code, Graphics, and Music
on that release entirely to Hagar himself, consistent with an in-house
routine rather than a distributed editor/tool. SIDId has no entry for the
tag, and no source found during this research pass explains the name's
origin — it does not match a known game, company, or associate of Beben's in
the sources checked. This card records the identity/usage facts available
and leaves the name unexplained rather than guessing.

## Quirks & gotchas

See the `quirks` array. Load-bearing: unlike several other tags in this
batch, no plausible real-world referent for the tag name was found — flagged
honestly as unresolved rather than speculated on.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/wally-beben.json`, `data/sidid.json`) plus web research that
did not resolve the tag's name. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the local
composer profile for Wally Beben, a Remix64 composer page, and the CSDb
webservice (`type=sid` id 3935, `type=release` id 23215) for the file's
release date and demo context.
