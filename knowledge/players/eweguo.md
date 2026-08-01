# Eweguo

```json
{
  "id": "eweguo",
  "name": "Eweguo",
  "aliases": ["Eweguo"],
  "authors": ["Karl Hörnell"],
  "released": "2018 (both of the 2 tagged files carry CSDb 'Released' field \"2018 Eweguo\" — Iceblox Plus and Scuttlebutt 64, both 2018 games) — https://csdb.dk/sid/?id=55615, https://csdb.dk/sid/?id=55875",
  "status": "stub",
  "platform": "Native C64 in-house replay routine embedded in Karl Hörnell's own 2018 C64 games — 'Eweguo' is a registered CSDb 'Game Development Group' (id 9376, Sweden, founder/sole member Karl Hörnell), not a standalone player/tool release; CSDb lists only 4 releases under the group, all games (Scuttlebutt 64, Iceblox Plus + 2 updates), no separate player/tool entry — https://csdb.dk/group/?id=9376",
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
    "Not investigated: whether this is one fixed player binary reused across his C64 titles from the 1980s through to his 2020s-era releases, or a per-game routine that evolved over four decades — no disassembly was performed.",
    "Census of both tagged files (Iceblox_Plus.sid, csdb_id 55615; Scuttlebutt_64.sid, csdb_id 55875) confirms: both carry CSDb 'Released' field \"2018 Eweguo\", both are 2018 C64 games by Karl Hörnell. Resolves the prior 'no date found' gap — released is 2018, not undated.",
    "CSDb confirms 'Eweguo' (group id 9376) is registered as a 'Game Development Group', Sweden, founder and sole member Karl Hörnell — 4 releases total, all games, no standalone player/tool release entry. This settles the platform gap: an in-house routine, not a distributed tool, and csdb_release is correctly null (there is no CSDb release id to point to).",
    "PSID header metadata only (not disassembled, not a Tier 3 fact): Iceblox Plus — load $8AC0, init $8AC0, play $8AC3; Scuttlebutt 64 — load $1000, init $1000, play $1003. In both files play = init+3, suggesting (unconfirmed) a fixed 3-byte init/play jump-table layout, but this is an observation from two header pairs, not a verified structural fact."
  ],
  "sources": [
    "sidid:Eweguo (author 'Karl Hörnell', no name/released/reference/comment) — data/sidid.json",
    "Indie Retro News, 'Scuttlebutt - Behind Enema Lines: New game from Karl Hörnell for C64' (2018): https://www.indieretronews.com/2018/09/scuttlebutt-behind-enema-lines-new-game.html",
    "Psytronik itch.io listing, 'Inbread (C64)' by Karl Hörnell: https://psytronik.itch.io/inbread",
    "Psytronik listing, 'Graviton (C64)' by Karl Hörnell: https://psytronik.bigcartel.com/product/graviton-c64",
    "CSDb scener Karl Hörnell/Eweguo: https://csdb.dk/scener/?id=8155",
    "CSDb SID entry, Iceblox Plus (Released \"2018 Eweguo\", PSID header): https://csdb.dk/sid/?id=55615",
    "CSDb SID entry, Scuttlebutt 64 (Released \"2018 Eweguo\", PSID header): https://csdb.dk/sid/?id=55875",
    "CSDb group entry, Eweguo (id 9376, Game Development Group, Sweden, founder Karl Hörnell, 4 releases all games): https://csdb.dk/group/?id=9376",
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
own label/company name, **Eweguo** — matching the tag exactly. CSDb confirms
Eweguo is a registered "Game Development Group" (id 9376), Sweden, with Karl
Hörnell as founder and sole member, and only 4 releases on record — all
games, no standalone player/tool entry. This settles it as an in-house
player used across his own self-published games rather than a third-party
or scene-distributed tool. Both locally-tagged files (Iceblox Plus,
Scuttlebutt 64) are his own, both 2018 games, both carrying the CSDb
`Released` field "2018 Eweguo" — resolving the `released` field to 2018.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag name is the composer's own
label/company, not a coincidental match — this is a self-published, in-house
routine, and its version history across four decades of his releases (1980s
to 2020s) has not been investigated.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/karl-hoernell.json`, `data/sidid.json`) plus web research
confirming Eweguo as Hörnell's own CSDb-registered game group, and a full
census of both tagged files' own CSDb SID entries (Released field, PSID
header). `status: stub` — no runtime fact has been confirmed by disassembly
or trace; the PSID header addresses recorded in `quirks` are header
metadata, not a verified memory map.

## Sources

See the `sources` array — SIDId sidid.nfo, Indie Retro News, two Psytronik
release listings, a CSDb scener page, both tagged files' CSDb SID entries,
the CSDb Eweguo group page, and the local composer profile.
