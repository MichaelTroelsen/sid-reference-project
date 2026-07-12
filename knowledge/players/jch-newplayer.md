# JCH NewPlayer

```json
{
  "id": "jch-newplayer",
  "name": "JCH NewPlayer",
  "aliases": ["JCH_NewPlayer", "NewPlayer", "NP", "JCH NewPlayer V5-V20"],
  "authors": ["Jens-Christian Huus (JCH)"],
  "released": "1988",
  "status": "in-progress",
  "platform": "Native C64 (runtime player; authored with the JCH Editor)",
  "csdb_release": 14037,

  "memory": {
    "load_address": "TODO: per version — needs disassembly",
    "zero_page": "TODO: per version",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO: per version",
    "play": "TODO: per version (single frame call; multispeed variants exist)"
  },
  "speed": "TODO: 1x + multispeed",

  "data_format": {
    "order_list": "TODO",
    "patterns": "Contiguous sequence stacking; JCH Editor v3 exposes 114 patterns up to 96 rows",
    "instruments": "32 instruments",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: per version command encoding",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": ["jch-oldplayer"],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is the RUNTIME PLAYER; the authoring front-end is the JCH Editor (curated 'JCH Editor v2.x' 1988-90 and 'v3.x' 1990-91). Editor v2 shipped NewPlayer V5-V17; editor v3 shipped V18-V20 (+ Laxity NP V21).",
    "Versioned family: each 'JCH_NewPlayer_Vn' (V9..V20 seen in the file data) is a distinct tag — treat a specific version as its own sub-card once disassembled, linked here.",
    "ORIGIN of the 'contiguous sequence stacking' track system later adopted by X-SID, SID Factory (I/II) and the NewPlayer forks.",
    "Widely forked: Laxity NewPlayer V21 (2006), Glover NewPlayer V21 (2000), Dane NewPlayer V22-25 (2011) — those cards should point back here via derives_from.",
    "Exclusive to the Vibrants group; the JCH Editor leaked ~1990-91 and was later released as freeware."
  ],
  "sources": [
    "deepsid:players.json — 'JCH Editor v2.x' (used for NewPlayer V5-V17) and 'JCH Editor v3.x' (used for NP V18-V20 + Laxity NP V21)",
    "sidid:JCH_NewPlayer (author JCH, csdb release 14037); JCH_OldPlayer, JCH_Protracker also by JCH",
    "csdb:release/14037 — 'JCH Editor V3.04 20G4', 1991, released by Vibrants, Code by JCH"
  ]
}
```

## Overview

JCH NewPlayer is Jens-Christian Huus's C64 music player routine (from 1988),
the runtime paired with the **JCH Editor**. It is the origin of the
"contiguous sequence stacking" track system that propagated across a large part
of the Danish SID scene — [X-SID](../players/), [SID Factory](sid-factory.md)
and [SID Factory II](sid-factory-ii.md) all descend from its sequence model,
and it was forked directly as Laxity/Glover/Dane NewPlayers. It succeeded JCH's
earlier "OldPlayer".

## Quirks & gotchas

- **Player vs editor.** The `JCH_NewPlayer_Vn` tags on SID files name the
  *player*; the curated "JCH Editor v2.x/v3.x" entries are the *editor* that
  produced them. Editor v2 → NewPlayer V5–V17; editor v3 → V18–V20 (+ Laxity
  V21). Keep the two straight.
- **Versions are distinct players.** V9…V20 each appear as their own tag in the
  file data (and rank among the most-used tools overall). Document a specific
  version as a sub-card (`jch-newplayer-v20.md`) with concrete `memory`/`entry`
  and link it here.
- **Hub of a lineage.** This is the graph's root for the track-system family —
  most edges point *toward* it, not away.

## Disassembly notes

TODO. Pick one high-usage version (V20 is a good target — 1,616 files) and
follow the [playbook](../playbooks/disassemble-a-player.md). The
`successor_of: jch-oldplayer` edge is a lead: diffing OldPlayer vs NewPlayer
routines is often the fastest way to understand what "New" changed.

## Verification

Seeded from cached DeepSID `players.json` (the JCH Editor entries), SIDId, and
CSDb release 14037 — **not** yet disassembled/run. `status: in-progress`.

## Sources

- DeepSID `data/players.json` → "JCH Editor v2.x" / "v3.x" (JCH, Vibrants;
  version mapping in their `noteworthy` fields).
- SIDId `sidid.nfo` → `JCH_NewPlayer` (author JCH, CSDb 14037); also
  `JCH_OldPlayer`, `JCH_Protracker`, and the forks `Laxity_NewPlayer_V21`,
  `Glover_NewPlayer_V21`, `(Dane_NewPlayer)` "JCH-editor 3.1 + NP22-25".
- CSDb release 14037 → "JCH Editor V3.04 20G4", 1991, Vibrants, Code by JCH.
