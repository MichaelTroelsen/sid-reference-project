# Hardtrack Composer

```json
{
  "id": "hardtrack-composer",
  "name": "Hardtrack Composer",
  "aliases": ["HardTrack_Composer", "Hardtrack Composer"],
  "authors": ["Miłosz Ignatowski (Longhair) — player code", "Brush — co-coded the tool"],
  "released": "1992 (V1.0, Elysium)",
  "status": "stub",
  "platform": "Native C64 music editor (ships as a .PRG editor). Closed classic tool; no source/license located.",
  "csdb_release": 74928,

  "memory": {
    "load_address": "TODO: not documented publicly",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO. A 'V1.0+ [6 speed]' variant (Beverly Hills Group) implies a 6x-multispeed build; standard V1.0 presumably single-speed — INFERENCE from the release title, not technically confirmed.",

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
    "AUTHORSHIP nuance: SIDId credits Miłosz Ignatowski (Longhair) for the player code, but CSDb's V1.0 credits list code as Brush AND Longhair (both of Elysium/Parados), with a note that Longhair's player-code credit was added later. So it's at minimum co-authored — Longhair = replay-routine author, Brush co-coded the tool.",
    "Polish-scene tool (Longhair/Brush of Elysium and Parados, Polish groups). Usage reflects this: 1,126 files but only 45 composers (top users Bzyk, Klax, Randy, Shapie) — a concentrated, locally-circulated Polish editor rather than a broadly adopted one. A Polish-language manual exists.",
    "Version history is partial: V1.0 (1992, Elysium), a 'V1.0+ [6 speed]' re-release (Beverly Hills Group, adds Glover/Samar to credits), and a V2.0 referenced on a Polish forum. Dates for the latter two: UNKNOWN.",
    "Replay internals (load address, ZP, init/play, data format, effect set) are entirely undocumented — no public disassembly. All TODO; do not invent.",
    "Year corrected to 1992 (was 'unknown' in the Tier-1 baseline)."
  ],
  "sources": [
    "CSDb Hardtrack Composer V1.0 (release/credits/year): https://csdb.dk/release/?id=74928",
    "CSDb 'V1.0+ [6 speed]' variant: https://csdb.dk/release/?id=36647",
    "SIDId sidid.nfo (tag + Longhair player-code attribution): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Polish manual/community: https://www.c64scene.pl/viewtopic.php?t=584",
    "Local dataset: 1,126 files tagged HardTrack_Composer, 45 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Hardtrack Composer is a native C64 music editor from **1992** by the Polish
sceners **Longhair (Miłosz Ignatowski)** and **Brush**, released under Elysium.
It's a concentrated, Polish-scene-heavy tool — **1,126 files but only 45
composers** — rather than a broadly adopted editor, and its player code is
undocumented outside CSDb credits.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **co-authorship nuance** (Longhair =
player code, Brush co-coded; SIDId lists only Longhair); the **Polish-scene
concentration** (45 composers is the signal); and a **6x-speed variant** whose
title is the only multispeed hint. Everything about the replay is `TODO`.

## Disassembly notes

None done here; no public disassembly or memory map exists. The Polish-language
manual and a disassembly of a representative `.sid` (init/play from its PSID
header, traced via `sidm2-siddump`) are the routes to real facts.

## Verification

**Not verified — `status: stub`.** Author, year (1992, corrected), scene, and
version outline are CSDb/SIDId-sourced; all runtime fields are `TODO`.

## Sources

See the `sources` array — CSDb releases, SIDId, and the Polish community
manual thread.
