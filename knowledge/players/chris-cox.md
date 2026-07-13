# Chris Cox (player routine)

```json
{
  "id": "chris-cox",
  "name": "Chris Cox (player routine)",
  "aliases": ["Chris_Cox"],
  "authors": ["Chris Cox"],
  "released": "~1983-1985 (Interceptor Software / Ian Gray studio era)",
  "status": "in-progress",
  "platform": "A playroutine used almost exclusively by British C64 musician Chris Cox at Interceptor Software (and on Interceptor-alumni titles at Ocean/Virgin), always paired with coder Ian Gray. Player-ID-fingerprinted across 17 files: 16 by Cox, 1 by Andy Jervis (unexplained outlier — see quirks). Whether Cox or Gray actually wrote the underlying sound-driver code is UNCONFIRMED.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Aquanaut): load $43ea (init $58c0, play $58d7 — init/play addresses far from load, consistent with the player being appended/relocated within a full game binary).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $58c0.",
    "play": "Sample trace: $58d7 (called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (minimal filter use observed — only 1 filter write in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Chris Cox was the MUSICIAN, not the coder — CSDb function is 'Musician' only, and every documented release credits a separate coder, almost always Ian Gray (games: Aquanaut, Burger Time, China Miner, Front Line, Get Off My Garden!, Quango, Tales of the Arabian Nights — all 1984, Interceptor Software; also A Fi$tful of Buck$ (1985, Ocean) and Doriath (1985, Rabbit Software/Virgin Games), both coded by Ian Gray & Lee Braine). No source found crediting Cox as a programmer. This means the 'Chris_Cox' tag most likely reflects an IN-HOUSE Interceptor-studio routine (probably Gray's code), tagged under the musician's name by this project's convention — same pattern seen elsewhere in this KB (coder writes the routine, tag follows the composer who used it most/exclusively).",
    "ANDY JERVIS outlier UNEXPLAINED: 1 of the 17 files under this tag is credited to Andy Jervis, not Cox. HVSC lists Jervis as a separate UK musician; CSDb shows only 3 unrelated SID credits for him (Deliverance 1987/The Power House, I-Alien 1987/CRL, To Hell and Back 1988/CRL) — different publishers than Cox's Interceptor/Ocean/Virgin circle, with no found studio overlap or personal connection to Cox or Ian Gray. Why his one tune got fingerprinted to the same player tag is genuinely unresolved — could be an unrelated but byte-identical routine, or a mislabeled/shared game codebase. Do not assert a connection.",
    "Recurring composer/coder duo across ~1983-1985: Cox (music) + Ian Gray (code), often with Lee Braine, spanning multiple publishers (Interceptor Software, Ocean, Rabbit Software/Virgin) — the pairing outlived the original studio, suggesting Gray carried his own driver/toolchain from project to project with Cox as the regular composer for it.",
    "Not in SIDId (confirmed directly via sidid.nfo — no Chris Cox / Cox entry). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt (Cox + Jervis entries): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener — Chris Cox (id=14021, 63 credited releases 1984-2012): https://csdb.dk/scener/?id=14021",
    "Lemon64 — Interceptor Software 1984 titles by Chris Cox: https://www.lemon64.com/games/list.php?list_year=1984&list_company=interceptor-software&list_individual=chris-cox",
    "gamesthatwerent.com — China Miner (Ian Gray code, Chris Cox sound): https://www.gamesthatwerent.com/gtw64/china-miner-v1/",
    "Lemon64 — A Fi$tful of Buck$ (Gray & Braine code, Cox music): https://www.lemon64.com/game/fistful-of-bucks",
    "Lemon64 — Doriath (Gray & Braine code, Cox music): https://www.lemon64.com/game/doriath",
    "CSDb search — Andy Jervis credits (3 SIDs, different publishers): https://csdb.dk/search/?seType=1&search=jervis",
    "Local dataset: 17 files tagged Chris_Cox, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Chris_Cox` tag is used almost exclusively by British C64 musician
Chris Cox, who scored games for coder Ian Gray at Interceptor Software (and
later at Ocean/Rabbit Software/Virgin). Player-ID-fingerprinted across 17
files: 16 Cox, 1 Andy Jervis (unexplained). Whether the underlying driver
code is Cox's own or Gray's is unconfirmed — no source credits Cox as a
programmer.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: Cox was **musician, not
coder** (Ian Gray consistently coded); the recurring **Cox+Gray duo**
persisted across three different publishers; and the **unexplained Andy
Jervis outlier** (1 file, no found connection to Cox's circle) — flagged
honestly as unresolved rather than guessed at.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Chris_Cox`-tagged `.sid` +
trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Chris_Cox` `.sid` (Aquanaut): load `$43ea`, init
`$58c0`, play `$58d7` (init/play far from load — consistent with the
routine being embedded inside a full game binary), **64 register writes /
50 frames** (only 1 filter write). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, Lemon64, and
gamesthatwerent.com.
