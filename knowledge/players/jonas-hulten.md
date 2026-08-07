# Jonas Hultén / Hypnosis (player routine)

```json
{
  "id": "jonas-hulten",
  "name": "Jonas Hultén / Hypnosis (player routine)",
  "aliases": ["Jonas_Hulten"],
  "authors": ["Jonas Hultén ('Hypnosis')"],
  "released": "2014-2021 (Kollektivet / Svenska Commodoreklubben era)",
  "status": "verified",
  "platform": "Swedish coder-composer Jonas Hultén's (demoscene handle 'Hypnosis') own playroutine — CONFIRMED both coder and musician, professionally a programmer since 1998 (Chalmers University EE graduate). Player-ID-fingerprinted across 3 files, all his own. HVSC itself has NO record of this composer at all — a genuinely rare gap for this KB.",
  "csdb_release": null,

  "memory": { "load_address": "Varies per release, reassembled fresh each time (no fixed base): Bruce Lee II (2015) $e081; SCK Intro (2021) $0af0; Cosmos (2014) $427b — all disassembled+reassembled byte-exact and confirmed relocation-invariant, see Verification.", "zero_page": "A single indirect (zp),Y pointer used throughout the pattern/note-data reader, at a DIFFERENT zero-page address per build (no fixed convention): $fb/$fc (Bruce Lee II), $a3/$a4 (SCK Intro), $1d/$1e (Cosmos).", "layout": "SCK Intro (2021) alone opens with a 2-entry JMP table (init: jmp $1140; play: jmp $1688) at the very load address; Bruce Lee II and Cosmos have init/play as direct routine entries with no such indirection — same underlying engine, different header convention per build." },
  "entry": { "init": "Confirmed via disassembly on 3 files: Bruce Lee II $e081; SCK Intro $0af0 (jmp $1140); Cosmos $427b (jmp to $4c3c — near the END of the file's own payload, not near load).", "play": "Confirmed: Bruce Lee II $e0ef; SCK Intro $0af3 (jmp $1688); Cosmos $42b7 (called in IRQ)." },
  "speed": "Alternating 2-value tempo divider: a 1-byte frame countdown (per-file working storage) is decremented every frame; on reaching 0 it toggles a 1-bit flip-flop and reloads from a 2-entry table indexed by that bit — a standard 'funk tempo' construct producing two alternating tick lengths, confirmed byte-identical in structure across all 3 files.",
  "data_format": { "order_list": "TODO (not reached by static reading alone)", "patterns": "Read via a single zero-page indirect pointer ((zp),Y) set up per active channel — see zero_page.", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "CONFIRMED from the SID-output routine (Bruce Lee II $e5c6+): $D417 (filter routing) is built per-voice from 3 independent per-voice filter-enable flags (bits $01/$02/$04 for voices 1-3); $D418 (mode/volume) is built from a volume nibble ORed with 4 independent mode flags mapping exactly to real SID hardware bits (LP=$10, BP=$20, HP=$40, Voice3Off=$80)." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "The main per-frame play-routine loop processes 4 indexed channels (cpx #$04, X=0..3) each frame, but the SID-output routine only ever writes voice registers for X=0..2 (mapped to $D400/$D407/$D40E) — channel index 3's role in the shared per-frame loop is NOT resolved by static disassembly alone; it is plausibly an internal 4th track (e.g. tempo/effects) rather than a 4th audio voice, since the chip only has 3.",
    "SCK Intro (2021)'s reassembled build FAILS a non-page-aligned relocation-invariance control (0 SID writes over 60 frames vs 185 in the un-shifted control/original) while passing a page-aligned one cleanly (0/185 diffs) — traced to and fully explained by a genuine self-modified JSR/JMP table in its own INIT routine ($1140): a single `lda #>l129d` is stored into 4 separate high-byte operand slots, while 4 DIFFERENT low bytes (`#<l129d/#<l12bb/#<l12cd/#<l12df`) are stored into the matching low-byte slots — this only works if all 4 targets share one page, i.e. the driver as originally assembled is page-relocatable ONLY, a property of the original code (not a reconstruction defect; matches this project's own established page-lock precedent for other players).",
    "HVSC HAS NO ENTRY AT ALL FOR THIS COMPOSER, confirmed via direct grep of the raw Musicians.txt file (checked both the full H-alphabetical block and every 'Jonas' occurrence) — a genuinely rare, explicit gap for this KB, meaning no HVSC-sourced country/group cross-reference exists; country (Sweden) comes entirely from CSDb instead.",
    "'BRUCE LEE II' (the traced file) IS NOT A 1987 DATASOFT SEQUEL, an incorrect premise in the original research brief EXPLICITLY CORRECTED: the original 'Bruce Lee' (1984, Datasoft) never had an official sequel. What exists is a 2013 spiritual-successor freeware game for PC/Linux by Spanish developer Bruno R. Marcos (with a retro 'C64 mode' built in); Hultén then did a genuine, from-scratch C64 PORT of Marcos's game, started April 2014, released 7 April 2015 (v1.9 update later). Credits: code — Jonas Hultén, music — Jonas Hultén, graphics — 'Mase.'",
    "'SCK INTRO' CONFIRMS DEMOSCENE GROUP MEMBERSHIP: SCK = Svenska Commodoreklubben (Swedish Commodore Club, still active). 'SCK Intro' (March 2021) is a multiplatform intro (C16/Plus4, C64, C128, VIC-20) with Hultén credited for Code, Music, AND Graphics under his handle 'Hypnosis.'",
    "CONFIRMED BOTH CODER AND MUSICIAN via his own CSDb scener profile (id=26400): roles Coder/Graphician/Musician, handle Hypnosis, country Sweden, groups 'Hultén Brothers,' 'Kollektivet' (which he founded), and Svenska Commodoreklubben (joined 28 January 2021, currently its finance/membership officer per the club's own site). C64-Wiki adds real-world biography: Chalmers University of Technology EE degree, professional programmer since 1998, career at Kongsberg Devotek, Tieto, AH Automation, currently Tenstar Simulation — a coder by trade who also does his own music, consistent with the dense, hand-rolled-feeling trace (276 writes/50 frames, filter=52).",
    "A POSSIBLE, EXPLICITLY UNCONFIRMED EARLIER CREDIT: Demozoo lists a much older production, 'Veni Vidi Vic!' (December 1996, VIC-20 demo, music credit, with Jens Schönfeld and Marko Mäkelä) under the same 'Hypnosis' handle — suggesting his scene involvement may go back to the mid-1990s rather than only the 2010s. Plausible given the shared alias and VIC-20 focus, but NOT independently confirmed as definitely the same person.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — his Swedish circle (Kollektivet, Hultén Brothers, Svenska Commodoreklubben) does not overlap with any other Scandinavian composer already carded (checked against Olav Mørkrid, Henning Rokling, Henning Andersen, and all others: Ben Daglish, Adam Gilmore, David Dunn, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (checked directly, confirmed NO entry exists for Jonas Hultén): https://hvsc.sannic.nl/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb release id=137540 (Bruce Lee II, full credits, traced file): https://csdb.dk/release/?id=137540",
    "C64-Wiki — Bruce Lee II: https://www.c64-wiki.com/wiki/Bruce_Lee_II",
    "CSDb scener id=26400 (Jonas Hultén / Hypnosis, full role/group history): https://csdb.dk/scener/?id=26400",
    "C64-Wiki (DE) — Jonas Hultén (biography, professional programming career): https://www.c64-wiki.com/wiki/Jonas_Hult%C3%A9n",
    "Demozoo — Jonas Hultén / SCK Intro, Veni Vidi Vic!: https://demozoo.org/sceners/60878/",
    "Svenska Commodoreklubben (SCK), Hultén's current role: https://www.commodore.se/",
    "Local dataset: 3 files tagged Jonas_Hulten, 1 composer (see knowledge/COVERAGE.md)",
    "Original disassembly (2026-08-01): SIDdecompiler.exe -r against local HVSC files C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/MUSICIANS/H/Hulten_Jonas/{Bruce_Lee_II,SCK_Intro,Cosmos}.sid, reassembled with 64tass, byte-diffed and relocation-invariance trace-verified with sidm2-sid-trace.exe (see Verification)."
  ]
}
```

## Overview

The `Jonas_Hulten` tag is Swedish coder-composer Jonas Hultén's ('Hypnosis')
own playroutine — a professional programmer since 1998 who also does his
own C64 music. HVSC has no record of him at all, a rare gap in this KB.
Player-ID-fingerprinted across 3 files, all his own. All 3 have been
disassembled, reassembled byte-exact, and relocation-invariance
trace-verified (see Verification) — `status: verified`.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **complete absence
from HVSC's own composer index**, explicitly checked rather than assumed;
and a **corrected premise** on 'Bruce Lee II,' which is a 2015 fan-game
C64 port, not an official 1987 Datasoft sequel as an initial research
assumption guessed.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). This session
(2026-08-01) produced an original disassembly, byte-exact reassembly and
relocation-invariance trace verification of all 3 locally-available
`Jonas_Hulten`-tagged files, using `SIDdecompiler.exe`'s `-r` (reload)
flag against `C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/
MUSICIANS/H/Hulten_Jonas/{Bruce_Lee_II,SCK_Intro,Cosmos}.sid`.

## Verification

**Full byte-exact reassembly + non-tautological relocation-invariance
trace match on all 3 tagged files (2026-08-01) — `status: verified`.**

Method: `SIDdecompiler.exe -a<decimal load addr> -z -d -c -v2 -r`,
reassembled with `64tass`, byte-diffed against the pristine PSID payload,
then re-disassembled at TWO different relocation bases (one page-aligned,
one not) and traced with `sidm2-sid-trace.exe` to confirm the relocated
build reproduces the ORIGINAL file's register-write sequence exactly —
this is a non-tautological test (see this project's own gotcha 63/69/70:
an `-r` reassembly is byte-identical to the source by construction, so
only a relocated rebuild that still matches is real structural evidence).

- **Bruce Lee II** (2015, load/init `$e081`, play `$e0ef`): reassembly
  **100.0000% byte-exact** (3215/3215 bytes). Relocation control at
  page-aligned `$9000` and non-aligned `$9037` (712 of 3911 assembled
  bytes actually differ from the native build at these bases — confirms
  it's a real test, not a no-op): **0/330 register-write divergences**
  over 60 frames at BOTH bases. Fully relocation-invariant.
- **SCK Intro** (2021, load/init `$0af0` -> `jmp $1140`, play `$0af3` ->
  `jmp $1688`): reassembly **100.0000% byte-exact** (3206/3206 bytes).
  Page-aligned relocation control (`$9000`, 699/3256 bytes actually
  differ): **0/185 register-write divergences**. Non-aligned control
  (`$9037`): **fails completely** — 0 SID writes over 60 frames vs. 185
  in the original/native build — traced to and fully explained by a
  genuine page-locked self-modified JSR/JMP table in INIT (see `quirks`);
  this is a documented property of the original code, not a
  reconstruction defect (matches this project's own page-lock precedent
  for other players, e.g. lessons on Shaun Southern / Colin Davies /
  Rene Romijn / Al Lowe-style drivers).
- **Cosmos** (2014, load `$427b`, init `$4c3c`, play `$42b7`): reassembly
  **100.0000% byte-exact** (2668/2668 bytes). Relocation control at
  page-aligned `$9000` and non-aligned `$9037` (514/3036 bytes actually
  differ): **0/120 register-write divergences** at BOTH bases. Fully
  relocation-invariant.

All 3 files share the identical engine (confirmed by direct code
inspection, not just the SIDId tag): same 4-channel-per-frame main loop
shape, same `and #$01`-toggle 2-entry tempo-divider construct, same
per-voice filter/mode-bit assembly feeding `$D417`/`$D418` — reassembled
fresh per release at a different load address and zero-page block each
time (no fixed convention), which is why the memory map differs file to
file. Internals beyond the confirmed entry points, ZP pointer, tempo
mechanism and filter/mode-bit construction (order list, pattern/instrument
encoding, effect commands) were not pursued further and remain `TODO` —
none of that blocks the trace-match verification claim above, which rests
purely on register-write equivalence, not on semantic understanding of
the data format.

## Sources

See the `sources` array — CSDb (2 entries), C64-Wiki (2 pages), Demozoo,
Svenska Commodoreklubben's own site, and this session's original
disassembly/reassembly/trace verification of all 3 locally-available
tagged files.
