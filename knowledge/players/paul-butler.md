# Paul Butler (player routine)

```json
{
  "id": "paul-butler",
  "name": "Paul Butler (player routine)",
  "aliases": ["Paul_Butler"],
  "authors": ["Paul Butler"],
  "released": "1983-1993 (Artech Digital Entertainment era)",
  "status": "in-progress",
  "platform": "Canadian composer-designer Paul Butler's own playroutine, used across the many Artech Digital Entertainment (Ottawa, Canada — a studio he co-founded) titles he scored. A dense, busy routine (~8-9 register writes/frame in the traced sample). Player-ID-fingerprinted across 12 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies per file — Grogs_Revenge: $3500 (init $3ac0, play $3550); Ace_of_Aces: $0a68 (init $0a68, play $0a77); Deceptor: $6767 (init $7d08, play $7def); Fight_Night: $4db3 (init $4db3, play $4dea). Player code is at the load address; workspaces sit between 'v2 Start' and load address in most files (except Grogs_Revenge where they're identical).",
    "zero_page": "SIDdecompiler-derived: $40-$7f range used (z40=$40, z42, z43, z70-z76, za9=$a9). Channel state pointers at $40-$42, tempo/duration counters at $70-$76, event dispatch uses indirect addressing.",
    "layout": "Two-region: low-RAM working storage (ZP $40-$7f + page-level workspace below load address, e.g. $037b-$0665 on Deceptor) + player code/song data at load address upwards. Song data is a large read-only block (patterns, sequence tables, note/frequency tables) referenced via indexed indirect addressing. Filter setup uses self-modifying immediate operands. Play vector ($7def on Deceptor) is self-modified: init writes RTS ($60), frame dispatcher overwrites with JMP ($4C)."
  },
  "entry": {
    "init": "Varies per file: $3ac0 (Grogs_Revenge), $0a68 (Ace_of_Aces), $7d08 (Deceptor), $4db3 (Fight_Night). Standard: LDX #$60 / STX play_addr (writes RTS to play vector), initializes channel state from ZP workspace.",
    "play": "Varies per file: $3550 (Grogs_Revenge), $0a77 (Ace_of_Aces), $7def (Deceptor), $4dea (Fight_Night). Self-modified by init (RTS overwritten with JMP). Per-frame: incremental note counter, indexed lookups into sequence tables, voice register writes."
  },
  "speed": "Per-frame (50Hz). Traces show 0-17 SID writes/frame depending on song activity (Grogs_Revenge is sparse: ~2 writes/frame after frame 0; Ace_of_Aces: ~2-5 writes/frame with gate toggles). Dense songs like Deceptor average ~8-9 writes/frame.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (light filter use observed — 5 filter writes in a 200-frame/1755-write sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "NATIONALITY CORRECTION: Paul Butler is CANADIAN, not British — HVSC Musicians.txt lists him plainly as 'Butler, Paul - CANADA'. Co-founder (with Rick Banks) of Artech Digital Entertainment, Ottawa (founded 1981/1982). Studied Computer/Electronic Music at Carleton University with Banks in the late 1970s; later degrees in Computer Science (Algonquin College) and Philosophy (Carleton University). Active as a games composer/designer 1983-1993.",
    "GAME CREDITS CONFIRMED, matching the local HVSC folder exactly: Grog's Revenge (BC's Quest for Tires II), Fight Night, Deceptor (the traced file), Ace of Aces (1986, Accolade — his 'Sound' credit is in the game's own printed manual), Heat Wave — plus other Artech titles not in this collection: The Dam Busters, Desert Fox, Killed Until Dead, Mini Putt, Apollo 18, The Train: Escape to Normandy, Infiltrator II, Rack 'Em, Serve & Volley, Mental Blocks, Blue Angels.",
    "LATER SOUND-DRIVER PROGRAMMING, supporting self-coded hypothesis: he did low-level audio-engine work on Sega Genesis titles (ToeJam & Earl, Sports Talk Baseball, 1991-92) — evidence of hands-on driver coding beyond just composing, plausibly extending back to a self-written C64 routine, though no source directly states he wrote the C64 driver himself.",
    "NO CSDb PROFILE EXISTS for him — unsurprising, since he was a professional-era (1983-93) commercial games composer, not a demoscene participant, same pattern as several other American/Canadian composers already carded here (e.g. [[paul-norman]], [[dave-warhol]]).",
    "NAME-COLLISION HAZARD FLAGGED: search results repeatedly surface an unrelated 'Chris Butler' (a different, well-known C64 coder featured in a ZZAP!64 interview) and an unrelated blues musician also named Paul Butler — neither is this composer; do not conflate. MobyGames also has multiple distinct 'Paul Butler' profiles; the Artech/Rick Banks one (57 games together) is the correct one here, cross-checked against VGMPF as the stronger primary source (MobyGames itself returned a fetch error, so treated as lower-confidence corroboration only).",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Paul Butler entry). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Butler, Paul - CANADA')",
    "VGMPF (Artech co-founding, education, full gameography, Sega Genesis driver work): https://www.vgmpf.com/Wiki/index.php/Paul_Butler",
    "Wikipedia — Artech Digital Entertainment: https://en.wikipedia.org/wiki/Artech_Digital_Entertainment",
    "Ace of Aces (1986, Accolade) game manual, 'Sound' credit: https://archive.org/stream/Ace_of_Aces_1986_Accolade_a/Ace_of_Aces_1986_Accolade_a_djvu.txt",
    "gb64 — Heat Wave (C64/Amiga, Artech/Accolade): https://gb64.com/game.php?id=3464",
    "Local dataset: 12 files tagged Paul_Butler, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Paul_Butler` tag is Canadian composer-designer Paul Butler's own
playroutine, used across the many Artech Digital Entertainment titles he
scored — a studio he co-founded in Ottawa. Player-ID-fingerprinted across
12 files, all his own; a dense, busy routine averaging roughly 8-9 register
writes per frame in the traced sample.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he's **Canadian, not
British** (a correction from initial assumptions, confirmed via HVSC); his
**Artech co-founding and full gameography** matches the local HVSC folder
exactly; his **later Sega Genesis driver-programming work** supports (but
doesn't prove) self-coding on the C64; and a **flagged name-collision
hazard** (an unrelated Chris Butler and an unrelated blues musician also
named Paul Butler).

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Paul_Butler`-tagged `.sid` +
trace.

## Verification

**SIDdecompiler disassembly + trace-diff across 4 files (2026-07-24) — `status: in-progress`.**

Two files verified **trace-exact**; two files fail with the same methodology
due to code-region byte-level divergence (likely SIDdecompiler's internal
relocation math failing across large load-address gaps):

| File | Byte-diff | Trace result | Notes |
|------|-----------|-------------|-------|
| **Grogs_Revenge.sid** | 98.27% | **Trace-exact** (20 frames, subtune 0) | 29 dead-workspace diffs only; init=`$3AC0`, play=`$3550`, load=`$3500` |
| **Ace_of_Aces.sid** | 99.87% | **Register-write-identical** (cycle offsets only from different load addr) | 6 dead-workspace diffs; init=`$0A68`, play=`$0A77`, load=`$0A68` |
| **Deceptor.sid** | 94.03% | **FAILED** — completely different trace | 193 critical diffs in r/o/x regions; large v2-Start-to-PSID-load gap (`$037b` vs `$6767`) |
| **Fight_Night.sid** | 84.16% | **FAILED** — not traced | ~488 diffs, many in code regions; large v2-Start-to-PSID-load gap (`$0E82` vs `$4DB3`) |

**Methodology that works**: relocate to SIDdecompiler's `-v2` Start address
(gotcha 40), fix missing ZP symbols (`za9`, `z75`), reassemble, byte-diff —
all remaining diffs are `+`/`w`/`_` dead-workspace bytes. Works when the v2
Start-to-load-address gap is small or zero.

**Known gap on Deceptor/Fight_Night**: SIDdecompiler produces incorrect code
and read-only data bytes when the emulated trace covers a large low-RAM
workspace far below the PSID load address. The 193 critical diffs on
Deceptor include execute (`x`), operand (`o`), and read-only (`r`) bytes —
not just dead workspace. Same pattern recurs on Fight_Night. Once the code
bytes are wrong, the trace diverges completely. Likely root cause:
SIDdecompiler's internal address resolution doesn't handle large
load-address gaps correctly when constructing the disassembly.

**Next steps**: Try `-A` (alignment mode) on Deceptor/Fight_Night; or try
disassembling at the PSID load address and manually patching the low-RAM
workspace. The verified Grogs_Revenge and Ace_of_Aces confirm the player
routine IS capturable by SIDdecompiler — the failure is a tool limitation,
not a player-specific block.

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF, Wikipedia, an Ace of
Aces game manual scan, and gb64.
