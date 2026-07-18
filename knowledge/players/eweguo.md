# Eweguo

```json
{
  "id": "eweguo",
  "name": "Eweguo",
  "aliases": ["Eweguo"],
  "authors": ["Karl Hörnell"],
  "released": "TODO: no date found — SIDId has no RELEASED field for this tag",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 replay routine used in Karl Hörnell's own C64 games, released under his own label/company name 'Eweguo' — no dedicated CSDb tool/release entry found under this name as a standalone tool (unconfirmed)",
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
    "SIDId's entry for this tag has ONLY an AUTHOR field ('Karl Hörnell', matching the composer's real name exactly, with accent) — no name, released, or reference. Consistent with an in-house routine, not a titled published tool.",
    "'Eweguo' is Karl Hörnell's own game-development label/company name, not a third party: he continued developing games (including new C64 titles) under 'Eweguo' — e.g. modern-era Psytronik-published C64 releases 'Inbread' (2022) and 'Graviton' (2021) are attributed to him, and his earlier 1980s C64 games (as a teenager) were made for the 'Interceptor Micros Players' label. So this tag's name is a straightforward composer/company match, not a coincidental name collision.",
    "Single-composer concentration: both locally-tagged files are by Karl Hörnell himself (Sweden, b. 1970-04-26, CSDb scener 8155, affiliation listed as 'Players' in the local HVSC profile) — entirely expected for a self-published, in-house routine used across his own games.",
    "Not investigated: whether this is one fixed player binary reused across his C64 titles from the 1980s through to his 2020s-era releases, or a per-game routine that evolved over four decades — no disassembly was performed."
  ],
  "sources": [
    "sidid:Eweguo (author 'Karl Hörnell', no name/released/reference/comment) — data/sidid.json",
    "Indie Retro News, 'Scuttlebutt - Behind Enema Lines: New game from Karl Hörnell for C64' (2018): https://www.indieretronews.com/2018/09/scuttlebutt-behind-enema-lines-new-game.html",
    "Psytronik itch.io listing, 'Inbread (C64)' by Karl Hörnell: https://psytronik.itch.io/inbread",
    "Psytronik listing, 'Graviton (C64)' by Karl Hörnell: https://psytronik.bigcartel.com/product/graviton-c64",
    "CSDb scener Karl Hörnell/Eweguo: https://csdb.dk/scener/?id=8155",
    "Local dataset: 2 files tagged 'Eweguo', both by Karl Hörnell — data/composers/karl-hoernell.json",
    "data/composers/karl-hoernell.json (HVSC profile: Sweden, b. 1970-04-26, affiliation 'Players', CSDb scener 8155)"
  ]
}
```

## Overview

`Eweguo` is the SIDId tag for a replay routine credited solely to **Karl
Hörnell**, a Swedish programmer/composer who created several well-known C64
games as a teenager in the 1980s and has continued releasing new C64 titles
in recent years (e.g. Psytronik's "Inbread" 2022, "Graviton" 2021) under his
own label/company name, **Eweguo** — matching the tag exactly. This is best
read as an in-house player used across his own self-published games rather
than a third-party or scene-distributed tool. Both locally-tagged files are
his own.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag name is the composer's own
label/company, not a coincidental match — this is a self-published, in-house
routine, and its version history across four decades of his releases (1980s
to 2020s) has not been investigated.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/karl-hoernell.json`, `data/sidid.json`) plus web research
confirming Eweguo as Hörnell's own label. `status: stub` — no runtime fact
has been confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, Indie Retro News, two Psytronik
release listings, a CSDb scener page, and the local composer profile.
