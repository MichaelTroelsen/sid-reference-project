# Mark Clements (player routine)

```json
{
  "id": "mark-clements",
  "name": "Mark Clements (player routine)",
  "aliases": ["Mark_Clements"],
  "authors": ["Mark Clements"],
  "released": "~1986-1992 (Codemasters / Thalamus era)",
  "status": "in-progress",
  "platform": "English composer-coder Mark Clements's own playroutine — plausibly (not CSDb-certified) the same person as the Compunet-era handle 'Gem'/'The Gem', a coder/graphician/musician who pitched his own game to publishers before being hired by Codemasters for his graphics work. Player-ID-fingerprinted across 12 files, all his own; one routine reused across several same-era tunes, evidenced by two different files sharing identical load/init/play addresses.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Cool Air): load $1000 (init $1000, play $110e — CSDb's own listing for a second file, FOTLL, gives the identical load/init/play addresses, confirming one reused routine across several 1990 tunes).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $1000.",
    "play": "Sample trace: $110e (called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (filter-heavy — 52 filter writes in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY BEHIND 'GEM'/'THE GEM' — HIGHLY LIKELY BUT NOT CSDb-CERTIFIED: a detailed gamesthatwerent.com retrospective on the unfinished game 'Mirage' states Clements used the Compunet handle 'GEM', made demos under it, and was subsequently hired by Codemasters to convert Jet Ski Simulator after they liked his graphics work on the Mirage pitch — implying he was coder + graphics artist, not just a musician. CSDb's scener id=11056 ('Gem'/'The Gem', UK, functions Coder/Graphician/Musician, trivia field 'Compunet ID: MC12' — initials matching Mark Clements) is the plausible CSDb profile, but CSDb itself never fills in a real-name field confirming this — the identification rests on the external gamesthatwerent corroboration plus the MC12 initials match, not a CSDb-native statement. A SECOND, UNRELATED CSDb 'Gem' (id=25537, Megadeath member from 1989) exists — confirms the name-collision risk was real; do not conflate the two.",
    "HEATSEEKER CONFIRMED: a real published C64 game (Thalamus, 1990, scrolling platformer) — code/graphics by Paul O'Malley, music by Mark Clements (MobyGames/Lemon64). Other Lemon64-credited titles: Championship Jet Ski Simulator (1989, Codemasters), Jet Bike Simulator (1988, Codemasters), Make My Day (unpublished — the Mirage-adjacent pitch), Mirage (a 2020 PD release of the unfinished 1987 project), Summer Camp (1990, Thalamus), Winter Camp (1992, Thalamus).",
    "'FOTLL' HAS NO CONFIRMED MEANING — appears only as a standalone SID tune title on CSDb (2 versions, sequential release IDs alongside Cool_Air and Heatseeker, all dated 1990), with no matching game/demo of that name found anywhere. Left as unexplained, not guessed at.",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Mark Clements entry). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Clements, Mark - UNITED KINGDOM (ENGLAND)')",
    "CSDb SID — FOTLL (confirms identical load/init/play to Cool Air): https://csdb.dk/sid/?id=5655",
    "CSDb SID — Heatseeker v1: https://csdb.dk/sid/?id=5658",
    "gamesthatwerent.com — Mirage retrospective (GEM handle, Codemasters hiring story): https://www.gamesthatwerent.com/gtw64/mirage/",
    "CSDb scener — 'Gem'/'The Gem' (id=11056, Compunet ID MC12, functions Coder/Graphician/Musician): https://csdb.dk/scener/?id=11056",
    "Lemon64 — Mark Clements musician credits (7 titles): https://www.lemon64.com/games/list.php?musician=Mark+Clements",
    "MobyGames — Heatseeker credits: https://www.mobygames.com/game/c64/heatseeker_/credits",
    "Local dataset: 12 files tagged Mark_Clements, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Mark_Clements` tag is English composer Mark Clements's own playroutine,
used across his Codemasters/Thalamus C64 work (Heatseeker, Jet Ski
Simulator, Winter Camp). Player-ID-fingerprinted across 12 files, all his
own. He is plausibly — via a detailed but not CSDb-certified identification
— the same person as Compunet-era coder/graphician 'Gem', hired by
Codemasters after pitching his own unfinished game.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **'Gem' identity is
highly likely but explicitly flagged as not CSDb-certified**, resting on an
external retrospective plus a Compunet-ID initials match; **Heatseeker is a
confirmed real game**; and **'FOTLL' remains an unexplained title**, left
honestly unresolved.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Mark_Clements`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Mark_Clements` `.sid` (Cool Air): load `$1000`, init
`$1000`, play `$110e`, **161 register writes / 50 frames** (52 filter
writes — clearly filter-heavy). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (2 SID entries + scener
profile), gamesthatwerent.com, Lemon64, and MobyGames.
