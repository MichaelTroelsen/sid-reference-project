# Frederic Thiesse (player routine)

```json
{
  "id": "frederic-thiesse",
  "name": "Frederic Thiesse (player routine)",
  "aliases": ["Frederic_Thiesse"],
  "authors": ["Frederic Thiesse"],
  "released": "1989-1990 (64'er / Game On / CP Verlag era)",
  "status": "verified",
  "platform": "A composer-coder credited only for music — CSDb's own scener profile carries an explicit trivia note: 'This guy is added just for music credits. Do not add his games to CSDb, as they are not scene releases.' Confirmed both coder and musician via that same profile's own function tags, working entirely in German magazine type-in territory (64'er, Game On/CP Verlag). Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Varies per file (each file assembled fresh at its own base — Dingdong $9712, Megamax $c006, Maze-Man $45af, Push_em $532e). Init==load in 3 of 4 disassembled files (Push_em's init sits at load+$32e, further into the file). No page-alignment dependency found: a non-page-aligned relocation control (delta +$1037) traced byte-for-byte register-write-identical to the native build on both Dingdong (229 writes/50 frames) and Megamax (both subtunes), so the driver is freely relocatable, not page-locked.", "zero_page": "NONE — confirmed via disassembly (`grep -c '^z' *.asm` = 0 on all 4 files). The whole player keeps its working state in ordinary RAM immediately below its own load address (see layout).", "layout": "SIDdecompiler's -v2 map reports 'Start:' below the PSID load address on 3 of 4 files (Dingdong Start=$02a7 vs load=$9712; Maze-Man Start=$02d9 vs load=$45af; Push_em Start=$02b1 vs load=$532e) — this is a small (~18-byte), plain read/write working-storage block at a FIXED low address, not part of the file's own payload (gotcha 40/lesson 60's pattern, not a dropped leading byte or a copy-loop destination — no page-copy loop found in any file). Megamax's Start equals its load address exactly (no gap). Hardcoded per-note/per-effect state tables (wave/frequency/duration lookups) sit immediately after init/play in the loaded payload itself, not in zero page." },
  "entry": { "init": "Confirmed per-file from PSID header + trace: Dingdong $9712, Megamax $c006 (2 subtunes), Maze-Man $45af, Push_em $565c.", "play": "Confirmed per-file: Dingdong $990c, Megamax $c03c, Maze-Man $470a, Push_em $5436 (called in IRQ)." },
  "speed": "TODO — no explicit CIA/raster-multispeed setup found in the disassembled init routines beyond the standard CIA timer writes visible in Dingdong's init ($dc04/$dc05); not investigated further.",
  "data_format": { "order_list": "TODO — no order-list/pattern structure in the tracker sense. Confirmed (Dingdong disassembly): play routine is a small hand-written per-voice countdown/dispatch loop reading from fixed-address hardcoded tables (e.g. l9800/l9840/l98a0/l9900/l9906 in Dingdong's native addressing) rather than a generic sequencer format.", "patterns": "TODO — no pattern-stream format; appears to be a hardcoded note/duration table walked linearly per voice (see order_list note).", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 41 filter writes in the dense 229-write/50-frame Dingdong sample, now trace-confirmed exact against the reconstruction)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC HAS NO METADATA AT ALL — a bare 'Thiesse, Frederic' entry: no real name suffix, no group, no country code. One of HVSC's sparsest legacy entries.",
    "CSDb'S OWN SCENER PROFILE (id=24175) EXPLICITLY FLAGS HIM AS A NON-SCENER, VERBATIM: 'This guy is added just for music credits. Do not add his games to CSDb, as they are not scene releases.' — the same kind of direct curatorial statement already found on [[andrew-colin]]'s and [[the-music-system]]'s CSDb profiles in this same batch, strongly confirming his games are commercial/magazine type-ins, not demoscene productions. No country or realname field is populated there either.",
    "CONFIRMED BOTH CODER AND MUSICIAN, directly per CSDb's own function tags: 'Freelance functions: Coder, Musician' — he wrote his own games (Ding-Dong etc.) rather than only supplying music, consistent with the trace showing a dense, idiosyncratic, filter-heavy hand-written routine rather than a known third-party driver.",
    "GAME CREDITS ARE MAGAZINE TYPE-INS, NOT COMMERCIAL RELEASES: 'Ding-Dong' (an Arcade Reversi clone) is credited to him in the German magazine compilation '64'er Spiele total, Band 4.' 'Megamax' carries a SID-header copyright string of '1990 Game On/CP Verlag' (verified directly from the HVSC-mirrored file), consistent with the same German-magazine ecosystem already appearing on several other cards in this KB. 'Maze-Man'/'Push'em' have no independent game-credit sources beyond CSDb's own SID-track index. An unrelated 'TSI Maze Man' (1983, Creative Equipment) surfaced in search but does NOT match — different title/publisher, EXPLICITLY not the same game.",
    "AN UNVERIFIABLE 'EXOR' (1989) RELEASE CLAIM WAS EXPLICITLY DEBUNKED: a search-engine result repeatedly attributed an 'Exor' release to Thiesse (CSDb id=112927), but that CSDb ID resolves to nothing (the webservice returns a generic error, the HTML page just shows the homepage), and CSDb's own site search for 'Exor Thiesse' returns zero hits — FLAGGED explicitly as a likely search-engine hallucination, NOT relied upon.",
    "NO SCENE-GROUP MEMBERSHIP AT ALL — CSDb lists zero group affiliations; his only scene-adjacent appearances are as a GUEST music credit (not membership) on a one-file demo ('Nolorian'), a ripped-disk compilation ('ATG Ripp Disk 03,' 1990), and 'The Musix from Colora' (December 1989). A possible additional/fifth SID track, 'Colora' (CSDb id=28507, 1989), was found NOT present in this project's own 3-file local folder — UNCONFIRMED whether it's absent from HVSC entirely or simply filed elsewhere.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — checked against this project's own `knowledge/COVERAGE.md`, which lists him only as a previously-unclaimed roster entry with no player match (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Thiesse, Frederic', bare entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener id=24175 (Frederic Thiesse, 'not a scener' trivia note, function tags): https://csdb.dk/scener/?id=24175",
    "C64-Wiki — 64'er Spiele total: https://www.c64-wiki.com/wiki/64%27er_Spiele_total",
    "C64-Wiki (DE) — 64'er Spielesammlung - Band 4: https://www.c64-wiki.de/wiki/64'er_Spielesammlung_-_Band_4",
    "HVSC-mirrored SID file — Megamax.sid (copyright string '1990 Game On/CP Verlag'): https://hvsc.etv.cx/?info=please&path=C64Music%2FMUSICIANS%2FT%2FThiesse_Frederic%2FMegamax.sid",
    "Local dataset: knowledge/COVERAGE.md (prior unclaimed-roster listing)",
    "Local dataset: 3 files tagged Frederic_Thiesse, 1 composer (see knowledge/COVERAGE.md)",
    "This card's own original disassembly/reassembly/trace-diff (2026-08-01): SIDdecompiler.exe + 64tass on 4 local HVSC files (Dingdong.sid, Megamax.sid, Maze-Man.sid, Push_em.sid) from C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/MUSICIANS/T/Thiesse_Frederic/ — no external published source"
  ]
}
```

## Overview

The `Frederic_Thiesse` tag is a composer-coder credited only for magazine
type-in music — CSDb's own profile carries an explicit trivia note
confirming he's not a demoscene participant. Confirmed both coder and
musician via that same profile's own function tags. Player-ID-
fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is CSDb's own **explicit
'not a scener' curatorial note**, directly corroborating this composer's
purely magazine-type-in profile. Also notable: a **debunked search-
engine hallucination** (an unverifiable 'Exor' release claim) explicitly
caught and excluded rather than repeated.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note) — this card's
own original disassembly (below) is the only source. `SIDdecompiler.exe`
disassembled all 4 locally-available `Frederic_Thiesse`-tagged files
cleanly with no hangs, no undocumented-opcode issues, and no relocation
warnings. `Colora.sid` (a possible 5th file, CSDb id=28507) was not
present in this project's local HVSC mirror and was not disassembled.

## Verification

**Byte-diff + trace-diff + relocation-invariance control, 4 files
(2026-08-01) — `status: verified`.**

Disassembled with `SIDdecompiler.exe -z -d -c -v2 -r`, relocating onto
each file's own `-v2` "Start:" address (gotcha 40 — 3 of 4 files have a
small fixed-low-RAM workspace block below their PSID load address; see
`memory.layout`). Reassembled with `64tass`.

- **Dingdong.sid**: 1201/1201 traced bytes byte-exact (100.0000%; the
  final 5 bytes of the file, `$9bc3-$9bc7` — a `$99`-repeat tail never
  touched by SIDdecompiler's own trace — fall outside its emitted
  disassembly entirely and are not covered by this comparison, per
  gotcha 9). Trace-diff (50 frames, native addresses): **0
  divergences over 229 register writes**, exact including cycle
  timestamps. **Relocation-invariance control** (rebuilt at a
  non-page-aligned +$1037 delta, base $12de/init $a749/play $a943; 118
  of 39196 bytes genuinely differ from the native build): **0
  divergences over 229 writes** (cycle column stripped per lesson 70) —
  confirms the disassembly is source-derived and not a tautological `-r`
  pass-through (lesson 63/69).
- **Megamax.sid** (2 subtunes): 698/698 bytes byte-exact (100.0000%,
  full file coverage — `-v2` Start equals load address exactly here, no
  workspace gap). Trace-diff both subtunes: **0 divergences** (10 writes
  subtune 0, 28 writes subtune 1). Relocation-invariance control
  (+$1037 delta; 44/698 bytes differ from native): **0 divergences**,
  both subtunes.
- **Maze-Man.sid**: 1263/1265 bytes byte-exact (100.0000% of the traced
  range; same 2-byte untraced-tail pattern as Dingdong). Trace-diff (50
  frames): **0 divergences**. No relocation control run (time budget —
  see next step).
- **Push_em.sid**: 891/891 bytes byte-exact (100.0000%, full coverage).
  Trace-diff (50 frames): **0 divergences**. No relocation control run.

This is a hand-written, non-tracker sequencer (no zero-page usage
anywhere; per-voice state lives in a small fixed low-RAM block; play
routine walks small hardcoded note/duration tables per voice — see
`data_format`), consistent with the "coder-composer, not a shared tool"
profile already established in the quirks. `Colora.sid` was not
available locally and was not attempted.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, C64-Wiki (2 pages),
and an HVSC-mirrored SID file.
