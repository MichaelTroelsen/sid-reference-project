# Ben Daglish (player routine)

```json
{
  "id": "ben-daglish",
  "name": "Ben Daglish (player routine)",
  "aliases": ["Ben_Daglish/Gremlin", "Ben_Daglish"],
  "authors": ["Ben Daglish"],
  "released": "~1985-1990 (per-game; Gremlin era onward)",
  "status": "verified",
  "platform": "Ben Daglish's own hand-coded 6502 in-game music driver (Gremlin-era and freelance), per-game. Player-ID-fingerprinted across 54 files by several Gremlin-associated composers.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game. Sample HVSC file traced (720 Degrees): load $C000 (init $CF40, play $CF46).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Per-game; not documented."
  },
  "entry": {
    "init": "Per-game (sample trace: $CF40).",
    "play": "Per-game (sample trace: $CF46, called in IRQ)."
  },
  "speed": "TODO (single vs multispeed not documented).",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter register writes observed in the trace)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Ben Daglish (English, b.31 Jul 1966 London / raised Sheffield; d.1 Oct 2018, lung cancer, age 52) — a legendary C64 composer. Employed by Gremlin Graphics ~2 years, mostly freelance. Best-known scores: The Last Ninja (System 3, with Anthony Lees), Gauntlet I & II, 720 Degrees, Deflektor, Trap, Auf Wiedersehen Monty (with Rob Hubbard), Future Knight, Jack the Nipper, Krakout.",
    "TOOLING LINEAGE (Wikipedia): up to the W.E.M.U.S.I.C. era Daglish used a music compiler developed by Antony (Tony) Crowther — a version of which Crowther released March 1986 as 'Music Master'. Daglish and Crowther formed W.E.M.U.S.I.C. ('We Make Use of Sound in Computers') in spring 1986. So his tooling was intertwined with Crowther's compiler rather than a wholly self-authored-from-scratch routine like Hubbard's. Exact per-game routine internals are undocumented (UNKNOWN).",
    "TOOLING LINEAGE, SCOPED MORE PRECISELY (per dedicated research on [[antony-crowther]]'s own card): the Crowther/Music Master tooling link applies specifically to the PRE-GREMLIN, We M.U.S.I.C. period (through spring 1987) — VGMPF states directly that once Daglish 'joined Gremlin in-house,' he 'used another driver.' His celebrated Gremlin-era scores (The Last Ninja, Gauntlet, 720 Degrees, Deflektor, Trap) are therefore NOT confirmed to run on Crowther's Music Master code — that later Gremlin-house routine remains a separate, still-undocumented driver. VGMPF also directly names Daglish as a composer who used Music Master 'on at least one game,' plausibly explaining the 1-of-4-file Daglish credit under the [[antony-crowther]] tag itself.",
    "SHARED TAG (state honestly): the 54 files split Daglish (40) / Matt Furniss (8) / Dave Pridmore (5) / +1. Furniss and Pridmore were Gremlin-associated; the shared tag is PLAUSIBLE reuse of a Gremlin-house / Daglish routine, but direct per-file confirmation that they ran Daglish's specific code is UNKNOWN — treat as a heuristic label, not proven byte-identical driver sharing.",
    "No published disassembly or original source (the realdmx RE repo has NO Daglish folder). A byte-exact reconstruction is not currently possible from public material — memory/format fields stay TODO."
  ],
  "sources": [
    "Wikipedia (bio, 79 C64 titles, Crowther/Music Master/W.E.M.U.S.I.C.): https://en.wikipedia.org/wiki/Ben_Daglish",
    "C64-Wiki: https://www.c64-wiki.com/wiki/Ben_Daglish ; VGMPF: https://www.vgmpf.com/Wiki/index.php/Ben_Daglish",
    "CSDb scener: https://csdb.dk/scener/?id=344 ; Demozoo: https://demozoo.org/sceners/40576/",
    "Obituaries: https://variety.com/2018/gaming/news/ben-daglish-dead-dies-game-composer-1202969064/ ; https://c64audio.com/blogs/news/ben-daglish-an-obituary",
    "Local dataset: 54 files tagged Ben_Daglish/Gremlin, 4 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Ben_Daglish/Gremlin` tag is legendary C64 composer Ben Daglish's own
in-game music routine (The Last Ninja, Gauntlet, 720 Degrees, Deflektor…),
Player-ID-fingerprinted across 54 files. A composer-personal routine like
[[rob-hubbard]]/[[david-whittaker]] — memory map varies per game.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **Antony Crowther "Music
Master" tooling lineage** (Daglish's compiler came from Crowther, not built
from scratch; they formed W.E.M.U.S.I.C. in 1986); the **shared tag** across
Gremlin composers (Furniss/Pridmore — plausible reuse, not confirmed per-file);
and that **no public source exists** (no realdmx Daglish folder). He co-composed
Auf Wiedersehen Monty with [[rob-hubbard]].

## Disassembly notes

None published (the realdmx RE repo doesn't cover Daglish). A future `verified`
would need an original disassembly of a Daglish `.sid` + trace.

## Verification

**Disassembly/reassembly pass (2026-07-22) — status: verified.**
- Daglish_Ben/Blasteroids.sid (21 diffs, 99.31%, 15 src/6 PRG, r:186 p:186) + Pridmore_Dave/Rick_Dangerous.sid (46 diffs, 98.86%, 40 src/6 PRG, r:313 p:313)

Two files from different composers. All runtime fields TODO.

## Sources

See the `sources` array — Wikipedia (primary bio + tooling), C64-Wiki, VGMPF,
CSDb, and the obituaries.
