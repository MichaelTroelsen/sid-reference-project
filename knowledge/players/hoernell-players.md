# Hörnell/Players (Karl Hörnell's in-house driver for Interceptor's "Players" label)

```json
{
  "id": "hoernell-players",
  "name": "Hörnell/Players (Karl Hörnell's in-house driver for Interceptor's \"Players\" label)",
  "aliases": ["?Hoernell/Players"],
  "authors": ["Karl Hörnell — inferred from the tag name; not independently confirmed as the routine's actual author"],
  "released": "TODO: no explicit tool-release date; Hörnell's 'Players'-label games span the mid-to-late 1980s per c64-wiki.de",
  "status": "stub",
  "platform": "TODO: native C64 in-house game-music driver, not a distributed editor. Karl Hörnell's games were published through 'Players', Interceptor Software's budget label, per c64-wiki.de's Karl Hörnell biography — 'Players' in the raw tag name is this publishing label, not a separate music-tracker product.",
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
    "5 files, 2 composers: Karl Hörnell himself (4 — Clean Up Time, Ronald Rubberduck, Velocipede, Velocipede II) and Johan Vessby (1 — Fungus, credited jointly 'Johan Vessby & Karl Hörnell' in the local author field). c64-wiki.de's Karl Hörnell biography lists Clean-Up (Time), the two Velocipede games, Ronald Rubberduck, and Fungus among his published titles — a title-for-title match to this dataset's file list.",
    "c64-wiki.de states Hörnell's games were published through 'Players', Interceptor Software's budget label — he and a friend sent Interceptor fan mail with a game demo around age 14-15, leading to the publishing deal — direct, sourced corroboration for the 'Players' half of this tag's name, independent of SIDId (which has no entry for this tag at all).",
    "Johan Vessby's single co-credited file ('Fungus') suggests informal collaboration on that one title rather than Vessby independently adopting a separately published tool.",
    "No SIDId entry exists for '?Hoernell/Players' (checked data/sidid.json directly) — the '?' prefix marks this as one of DeepSID/SIDId's own low-confidence tag matches, the same convention documented on [[msb]] and [[unknown-c64-driver]]."
  ],
  "sources": [
    "c64-wiki.de — Karl Hörnell (biography, 'Players'/Interceptor Software publishing deal, gameography matching Clean-Up, Velocipede x2, Ronald Rubberduck, Fungus, Toadforce, Fruity, Rocket Smash): https://www.c64-wiki.de/wiki/Karl_H%C3%B6rnell",
    "Local dataset: data/composers/karl-hoernell.json (4 files), data/composers/johan-vessby.json (1 file); knowledge/COVERAGE.md rank #26",
    "data/sidid.json byTag — checked, no entry for '?Hoernell/Players'"
  ]
}
```

## Overview

`?Hoernell/Players` is a raw Player-ID tag covering 5 files, naming
Swedish game developer **Karl Hörnell** and referencing "Players",
Interceptor Software's budget publishing label he released his games
through — confirmed independently by c64-wiki.de's Karl Hörnell biography,
whose gameography (Clean-Up Time, the two Velocipede games, Ronald
Rubberduck, Fungus) matches this dataset's tagged files title-for-title.
No SIDId entry exists for this tag, so this identification rests entirely
on the external c64-wiki.de biography plus this project's own local
composer data. It is used almost entirely by Hörnell himself (4 of 5
files), with one collaboration credit shared with fellow Swedish composer
Johan Vessby ("Fungus").

## Quirks & gotchas

See the `quirks` array. The load-bearing point: this is one of the
stronger-evidenced "personal in-house driver" cards in this batch, because
an independent, citable biography (not SIDId, not CSDb) directly names both
the composer and the publishing label the tag references — a rare case of
external confirmation for a `?`-prefixed, SIDId-absent tag.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Composer/publisher identity is
confirmed via c64-wiki.de and local data; no SIDId entry exists, and no
runtime fact was guessed.

## Sources

See the `sources` array — c64-wiki.de's Karl Hörnell page and this
project's local composer data.
