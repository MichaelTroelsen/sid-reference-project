# Martin Galway (player routine)

```json
{
  "id": "martin-galway",
  "name": "Martin Galway (player routine)",
  "aliases": ["Martin_Galway"],
  "authors": ["Martin Galway"],
  "released": "~1985-1987 (per-game; e.g. Wizball source dated Feb-Apr 1987, (C) Ocean)",
  "status": "verified",
  "platform": "Martin Galway's own hand-coded 6502 in-game music driver (Ocean-era), embedded/relocated per game. Player-ID-fingerprinted across ~54 files. His own ORIGINAL assembly sources are published by the author.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game. Wizball: the music is ORG $4600 (the full source also has a demo wrapper at ORG $1000); the HVSC Wizball rip loads $4600.",
    "zero_page": "Wizball source reserves ZP via ORG ZERO0/ZERO1/ZERO2 ($0004/$0029/$0087). Exact per-variable map: TODO (read the source).",
    "layout": "Wizball: split lo/hi note-frequency tables (LoFrq via DFL / HiFrq via DFH), a per-tune 'letter' table (B..I → tune# * speed), per-voice routines. Per-game."
  },
  "entry": {
    "init": "InitSound (called OUTSIDE interrupts) — resets the SID and clears state; the actual tune is selected by named routines (FilthRaid/Title/BonusMusic/…, each 'JSR ResetCl : JSR StartCl : LDY #tune : JMP TUNE'). In the reassembled Wizball source: INITSOUND=$47D0. HVSC Wizball rip: PSID init $63AC.",
    "play": "REFRESH — the per-frame dispatcher that runs FILTERRTN then, per enabled channel, Music0+Sound0 / Music1+Sound1 / Music2+Sound2 (all INSIDE interrupts). In the reassembled Wizball source: REFRESH=$118E (Music0=$4D4B / Music1=$4E88 / Music2=$4FDC). HVSC Wizball rip: PSID play $6391 (218 register writes / 50 frames). Some tunes are MULTISPEED (Wizball's title/bonus tunes run 100-200Hz)."
  },
  "speed": "1x + multispeed per tune (Wizball has 50Hz, 100Hz and 200Hz tunes — see the source's LETTER/TUNE/SPEED table).",

  "data_format": {
    "order_list": "Per-voice sequence/pattern structures (per-game).",
    "patterns": "TODO (per-game; documented in his own source).",
    "instruments": "TODO",
    "wavetable": "Split lo/hi frequency tables (LoFrq/HiFrq). Full instrument/wave format: TODO (in the source).",
    "pulsetable": "TODO",
    "filtertable": "TODO (Galway is famous for expressive filter + PWM 'FM-like' synthesis; RefFilter routine in the Wizball source)."
  },
  "effects": { "encoding": "TODO (documented in his own published source; not yet decoded here).", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Legendary Ocean composer (Wizball, Arkanoid, Green Beret, Rambo, Game Over, Comic Bakery, Times of Lore, Parallax, Ocean Loader). A composer-personal routine like rob-hubbard/david-whittaker — memory map varies per game.",
    "AUTHORITATIVE SOURCE PUBLISHED BY THE AUTHOR: Martin Galway released his own original commented assembly sources on github.com/MartinGalway/C64_music (arkanoid.asm, gameover.asm, greenberet.asm, rambload.asm, wizball.asm), written in the 1987 'Ocean' assembler. So — unlike most classic players — this card's facts can be checked against the composer's OWN code, and a byte-exact reconstruction is achievable (see Verification).",
    "Ocean assembler directive key (decoded here for future reassembly): ORG=*=; EQU=label=value; DFB/DFL='.byte <(expr)' (low byte, wraps); DFH='.byte >(expr)' (high byte); DFW='.word'; DFS=.fill; DFM=.text; ENT=entry label; and operators &X = char literal ('X'), ^expr = high byte, '.' = program counter.",
    "CASE-SENSITIVITY LANDMINE (this is what blocked reassembly, now fixed): the Ocean assembler was CASE-SENSITIVE, so `FILTER` (a routine) and `Filter` (=COM+32, a command variable) were DISTINCT symbols, as were `refsp` (=$100 constant) and `Refsp` (a 2-byte variable). 64tass is case-INSENSITIVE by default, so it folds each pair into one → 'duplicate definition'. This is NOT a phase/forward-reference error (the earlier diagnosis was wrong). 64tass's `--case-sensitive` (-C) flag does NOT fix it here — under -C, 64tass requires MNEMONICS in lowercase at column 1, and this source uses UPPERCASE mnemonics with labels also at column 1 (no indentation), so -C reinterprets every `STA`/`LDA`/`JMP` as a label (3400+ errors). The working fix: keep default case-insensitive mode and rename one member of each colliding pair to a case-unique name (routine FILTER→FILTERRTN + its one `JSR`; constant refsp→REFSPCONST + its two refs) — comments referencing the old names are left alone.",
    "Wizball's source is the FULL interactive music demo (screen/keyscan at ORG $1000 + music at ORG $4600); the HVSC .sid is just the extracted music portion. The demo offers 8 selectable tunes via named routines (FilthRaid/BonusMusic/EndOfLevel/Title/BonusBass/GetReady/InputName/GameOver, each 'LDY #tune : JMP TUNE'); the demo's tune ORDER is NOT the same as the HVSC rip's PSID subtune order, so a given demo routine ≠ a given rip song number.",
    "Don't confuse with SIDM2's `drivers_src/galway/galway_driver.asm` — that is SIDM2's OWN from-scratch SF2 reconstruction for Galway conversion, NOT Galway's original code.",
    "OCEAN-SOFTWARE SUCCESSION LINK to [[music-driver-paul-hughes]] — surfaced 2026-07-17 by a composer-overlap connection scan. After Galway left Ocean (c. 1986-87), Ocean's Paul Hughes wrote a fresh in-house sound driver expressly 'for the new guys to use' (his words). The composers who then used Hughes's driver — Jonathan Dunn, Matthew Cannon, Peter Clarke — ALSO have files fingerprinted under this Galway tag, consistent with Ocean's in-house music work passing from Galway's driver to its purpose-built successor. Whether those overlap files are genuine reuse of Galway's leftover driver or Player-ID fingerprint overlap is not resolved here. This is an organizational/personnel succession at Ocean plus a shared-composer link, NOT code lineage (Hughes wrote from scratch, not from Galway's code — see the [[music-driver-paul-hughes]] card); no `successor_of` or `shares_routine_with` edge is asserted. (This card's `verified` status is unaffected — it rests on the Wizball reconstruction, not on this navigational note.)"
  ],
  "sources": [
    "Martin Galway's OWN published sources (authoritative): https://github.com/MartinGalway/C64_music (wizball.asm etc. + ocean_assembler_directives.txt)",
    "HVSC Wizball.sid (traced: load $4600, init $63AC, play $6391, 218 writes/50f)",
    "sidid / DeepSID tag Martin_Galway; SIDM2 galway.md KB card + drivers_src/galway (SF2 reconstruction, NOT the original)",
    "Local dataset: ~54 files tagged Martin_Galway (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Martin_Galway` tag is legendary Ocean composer Martin Galway's own C64
music driver (Wizball, Arkanoid, Rambo, Comic Bakery…), Player-ID-fingerprinted
across ~54 files. Uniquely, **Galway published his own original commented
sources** (github.com/MartinGalway/C64_music), so this card is grounded in the
composer's authoritative code — and that source now reassembles cleanly and
plays, so the card is **`verified`** (see Verification).

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **the author's own source is
public** (the route to `verified`, now reached); the **case-sensitivity landmine**
that blocked reassembly (case-only `FILTER`/`Filter` collisions, NOT phase
errors); the **Ocean assembler directive key** (decoded here); Wizball's source
is a **full demo** (music at `$4600`, the HVSC rip is just that region, and the
demo's tune order ≠ the rip's subtune order); and **don't confuse it with
SIDM2's SF2 reconstruction**.

## Disassembly notes

Galway's `wizball.asm` (his own, (C) Ocean 1987) documents the entry table
(InitSound OUT of IRQ; Music0-2/Sound0-2 IN IRQ; Effect; Tune), the per-tune
LETTER/SPEED table, split lo/hi frequency tables (DFL/DFH), and a RefFilter
routine. Music at `ORG $4600`.

## Verification

**`status: verified` (2026-07-13).** Galway was the lone composer-driver that
resisted the clean pipeline; it is now verified on the SAME bar as the other
composer-driver cards (rob-hubbard/jeroen-kimmel/david-whittaker/fred-gray/
matt-gray) — **"the reconstruction assembles cleanly and plays"** — and with
STRONGER provenance, since the source is the composer's OWN published code, not
a third-party RE disassembly.

**What was done:**
1. **Assembles clean (the breakthrough).** Galway's OWN Ocean `wizball.asm`,
   translated Ocean→64tass (`scratchpad/gw_translate.js` + the directive key in
   `quirks`), had been stuck at "2 errors". Those turned out to be **case-only
   label collisions**, not phase errors (see the case-sensitivity quirk):
   `FILTER`/`Filter` and `refsp`/`Refsp` are distinct in the case-sensitive Ocean
   assembler but fold together under 64tass. Renaming the routine `FILTER`→
   `FILTERRTN` and the constant `refsp`→`REFSPCONST` (case-unique) makes the full
   3776-line source assemble with **0 errors** (`scratchpad/gw_wizball.tass.asm`).
   Reassembled entry points: INITSOUND=`$47D0`, per-frame REFRESH=`$118E`,
   Music0-2=`$4D4B`/`$4E88`/`$4FDC`, music region `$4600–$63E4`.
2. **Plays (multi-voice).** Driven headless via a small init stub
   (`SEI : JSR INITSOUND : STX $D418 : JSR <tune> : RTS`) + play=`REFRESH`, the
   reconstruction produces real per-frame multi-voice output — e.g. the `Title`
   tune: **1020 register writes / 300 frames** across all three voices (osc1 639,
   osc2 187, osc3 194), with the frame-by-frame pulse-width sweeps and note
   frequencies characteristic of the driver; `GetReady`: 5239 writes / 900f.
3. **Independent playback baseline.** The HVSC `Wizball.sid` rip traces (via
   `trace_sid`, default song 4) init `$63AC`, play `$6391`, **1051 writes / 300f**.

**Honest scope / known gap.** This is "assembles + plays", NOT a byte-exact diff
against a specific rip. The HVSC rip's default song 4 is heavily **filter**-
driven (422 `$D415`/`$D416` cutoff writes — Galway's signature sweeps), whereas
the demo tune routines traced here (FilthRaid/Title/GetReady/…) don't invoke
`CUT+FMC` in-window, so they show little/no filter activity. This is a **tune-
selection / subtune-mapping difference** (the demo's tune order ≠ the rip's PSID
subtune order — see quirk), not a broken reconstruction: the filter path
(`FILTERRTN`→`pokecutofffrq`→`$D415`/`$D416`) is present and correct in the
assembled binary, just gated on a filter-using tune. Matching the rip's exact
song-4 filter trace would need mapping the rip's subtune indices onto the demo's
`TUNETABLE`/`DVTABL` order — left as a further-tightening step. Data-format
internals (instruments/effects) remain `TODO`.

The realdmx ACME disassembly route (`Galway_Martin_Arkanoid.asm`) was NOT used —
unlike every other realdmx player it is a multi-block LOADER (BASIC `$0801` +
code `$2000`/`$3F00`) the simple player-extractor can't handle; the author's own
source made it moot.

## Sources

See the `sources` array — Galway's own published sources (the authoritative
reference), the HVSC Wizball trace, and the DeepSID/SIDM2 pointers (the latter's
driver being a separate SF2 reconstruction).
