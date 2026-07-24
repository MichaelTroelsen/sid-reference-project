# Mark Clements (player routine)

```json
{
  "id": "mark-clements",
  "name": "Mark Clements (player routine)",
  "aliases": ["Mark_Clements"],
  "authors": ["Mark Clements"],
  "released": "~1986-1992 (Codemasters / Thalamus era)",
  "status": "verified",
  "platform": "English composer-coder Mark Clements's own playroutine — plausibly (not CSDb-certified) the same person as the Compunet-era handle 'Gem'/'The Gem', a coder/graphician/musician who pitched his own game to publishers before being hired by Codemasters for his graphics work. Player-ID-fingerprinted across 12 files, all his own; one routine reused across several same-era tunes, evidenced by two different files sharing identical load/init/play addresses.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies per file (game-rip dependent). Three verified files: Cool Air @ $1000 (1990, init $1000/play $110e); Heatseeker @ $97c1 (1990, init $97c1/play $97cd); Winter Camp @ $6a40 (1992, but disassembler capture starts at $6bb2 — 370 leading bytes unreferenced by the player routine, init $77d1/play $783b). Same core player at different absolute addresses per game.",
    "zero_page": "Used by player (entries at $4b-$50 per Winter Camp disassembly).",
    "layout": "Single code block: $1000-$1d07 (Cool Air, 3336 bytes, self-contained PSID rip). Winter Camp: player code at $6bb2-$7ff1 with song data throughout $6b40-$7f40 range — large read-only data blocks interleaved with execution. Heatseeker: $97c1-$a14a (2442 bytes). All three share identical trace signatures confirming one routine across multiple games."
  },
  "entry": {
    "init": "$1000 (Cool Air), $77d1 (Winter Camp), $97c1 (Heatseeker).",
    "play": "$110e (Cool Air), $783b (Winter Camp), $97cd (Heatseeker). Called per frame via IRQ."
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

Three files disassembled and verified (2026-07-24): SIDdecompiler produces
a clean reassembly (97-98% byte-exact) that traces register-write-exact against
the originals. Disassembled `.asm` files at `scratchpad/mark-clements/`:

- `cool_air.asm` (3336 bytes, $1000-$1d07, 1 subtune)
- `heatseeker.asm` (2442 bytes, $97c1-$a14a, 2 subtunes)
- `winter_camp.asm` (5184 bytes, $6bb2-$7ff1, 5 subtunes)

The core player routine is identical across all three — same init pattern
(song-number indexing), same filter-heavy play loop with self-modifying
workspace at the high end of the code block. No IRQ vector installation
observed — called via a game's own IRQ handler, not self-installing.
No published source or prior disassembly found (not in realdmx RE repo,
not in SIDId).

## Verification

**Verified register-write-exact (2026-07-24) — `status: verified`.**

Three HVSC `Mark_Clements`-tagged `.sid` files disassembled with
SIDdecompiler, reassembled with 64tass, and trace-diffed against the
originals via `sidm2-sid-trace.exe`. All three produced **register-write-exact**
traces across all tested subtunes:

| File | PSID load:init:play | Subtunes tested | Byte-diff | Trace result |
|------|---------------------|-----------------|-----------|-------------|
| Cool_Air.sid | $1000:$1000:$110e | 1 | 98.20% (60 diffs, $1076-$1107) | 64 writes, exact |
| Heatseeker.sid | $97c1:$97c1:$97cd | 1 + 2 | 97.67% (57 diffs, $9cab-$9d0d) | 118/216 writes, exact |
| Winter_Camp.sid | $6a40:$77d1:$783b | 1 | 98.40% (83 diffs, $7f5d-$7fec) | 83 writes, exact |

Winter_Camp required relocation to SIDdecompiler's `-v2`-reported `Start:
$6bb2` (not the PSID load address `$6a40`) — 370 leading and 14 trailing
bytes unreferenced by the player routine itself (game/packer data outside the
trace window). Cool_Air and Heatseeker used the standard PSID load address.
The trailing 5 bytes of Heatseeker are also unreferenced by the trace.

All byte-diff divergences are in `+`/`w`-marked (read+write/write) memory
regions — SIDdecompiler captured post-execution values of self-modified
working-storage bytes. None affect SID register output; the three traces are
register-write identical to their originals.

Memory map, format, and effects encoding remain `TODO` — this verification
confirms the reconstruction pipeline works and the core player code is
identical across multiple files, but does not document the data format.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (2 SID entries + scener
profile), gamesthatwerent.com, Lemon64, and MobyGames.
