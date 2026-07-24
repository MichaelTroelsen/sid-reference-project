# KMS - Kris' Music System (Kris Hatlelid)

```json
{
  "id": "kris-hatlelid",
  "name": "KMS - Kris' Music System (Kris Hatlelid)",
  "aliases": ["Kris_Hatlelid"],
  "authors": ["Kris Hatlelid"],
  "released": "~1988-1991 (Distinctive Software era)",
  "status": "verified",
  "platform": "Canadian coder-composer Kris Hatlelid's own sound-driver format, 'KMS' ('Kris' Music System'), written at Distinctive Software where he did both music/SFX AND game programming. Player-ID-fingerprinted across 10 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Varies per game build (embedded per-title, not a fixed shared binary): Castlevania.sid load $0f00; Teenage_Mutant_Ninja_Turtles.sid load $474e. Both PSID (direct play vector, not RSID/IRQ) and both disassembled+reassembled to 100.0000% byte-exact.", "zero_page": "Differs per file — Castlevania.sid uses $f5-$ff; Teenage_Mutant_Ninja_Turtles.sid uses $0a-$13, $32-$3b, $59-$62. Not a fixed convention across builds (plausibly relocated per-game to avoid conflicting with each game's own ZP usage) — TODO if a canonical/most-common range exists across more files.", "layout": "A small per-voice working-storage block sits immediately after the play routine in the file's own loaded payload (Castlevania: $54c8-$5680; TMNT: $474e-$490e) — cold-zeroed on disk, read+written at runtime. TMNT's driver additionally reads/writes a SEPARATE, fixed low-page runtime scratch area ($0a80-up) that is NOT part of the file's own loaded payload at all — SIDdecompiler's own -v2 memory map reports this as the emulation's true 'Start:' address, well below the PSID header's declared load address, and disassembly/relocation must target that address (not the header's load address) for a correct build (see Verification)." },
  "entry": { "init": "Castlevania.sid: $5400. Teenage_Mutant_Ninja_Turtles.sid: $5560.", "play": "Castlevania.sid: $54b0. Teenage_Mutant_Ninja_Turtles.sid: $5563. Both are direct PSID play vectors (not IRQ-installed) in these two files — the majority of the other 8 tagged files are RSID with play=$0000 (IRQ-driven) and were NOT attempted (see Verification)." },
  "speed": "TODO (not derived from either disassembly — no explicit per-frame speed/CIA-timer table was identified as such).",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the original 50-frame Castlevania sample; not re-checked across the full 40-subtune/14-subtune sweeps run for verification)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED CODER, self-named driver format: CSDb lists his function as Coder (not musician-only); MobyGames and VGMPF both independently confirm he wrote his own sound driver, 'KMS' ('Kris' Music System'), while working at Distinctive Software — he did both music/SFX AND game programming there, distinct from being purely a musician using a third-party engine.",
    "CAREER STARTED 1983 as designer/programmer of Frantic Freddie, his first credit. Left Distinctive Software in 1993; later career (not music-industry) — president/CTO of ICE Online, then Electronic Arts (senior producer, through 2002), then Microsoft (engineering director).",
    "AN EARLIER, PRE-KMS DRIVER IS NOW SEPARATELY CARDED as [[gregor-larson]] (tag `Gregor_Larson`, 2 files: Frantic Freddie, Interlude 1 - The Firing Squad) — confirmed via CSDb, Wikipedia, and VGMPF that Frantic Freddie (1983) was CO-DESIGNED with a second person, Gregor Larson, who VGMPF states 'programmed a music driver' jointly with Hatlelid, who then 'arranged in hex.' This is the genuine pre-KMS tool his own career started on — KMS itself only dates to ~1988, five years later.",
    "CASTLEVANIA.SID IS A LICENSED ARRANGEMENT, NOT AN ORIGINAL COMPOSITION — worth flagging clearly since it affects how to read the trace: this is a genuine, officially licensed Konami tie-in (C64 conversion, 1990, converted by Unlimited Software Inc., programming by Alan Stewart), and Hatlelid ADAPTED/PORTED Konami Kukeiha Club's original NES score ('Vampire Killer', 'Stalker', etc.) to the SID chip — not a fan cover, not an original Hatlelid composition. This may explain trace characteristics (e.g. 0 filter writes) differently than a from-scratch composition would.",
    "'CYCLES' RESOLVED: refers to 'The Cycles: International Grand Prix Racing' — a Distinctive Software motorcycle racing sim, published by Accolade 1989 (Amiga/DOS), C64 port 1991. NOT the 1982 Tron-style light-cycle game, a genuinely unrelated title despite the name similarity.",
    "Other confirmed C64 credits (Lemon64, 13 titles total): Frantic Freddie (1983), Grand Prix Circuit (1989), Test Drive II + scenery disks (1989), Power at Sea (1988), Thud Ridge (1988), Metal Gear (1990, another licensed port arrangement), Teenage Mutant Hero/Ninja Turtles (1990), Wings of Fury (1990). CSDb also lists him ex-member of the group Piratebusters, active into 1990s demoscene credits (Actual Trading Generation, Clique, Alpha Flight).",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). Runtime internals now confirmed via original disassemble/reassemble/trace-diff (see Verification) on 2 of 10 tagged files; effect encoding, order-list, and instrument/wavetable formats remain TODO.",
    "GENUINE DISASSEMBLY GOTCHA, KMS-SPECIFIC: SIDdecompiler emits several self-modified-operand labels as literal `l<hex>+1`-suffixed label names (e.g. `l940b+1`) in Teenage_Mutant_Ninja_Turtles.sid's disassembly — 64tass rejects these as invalid label syntax. Fixed per the project's standard remedy (anchor label on the instruction + a separate `label_1 = label_anc + 1` assignment, never a plain text rename) — confirmed correct by the resulting reassembly's byte-diff going to 0. Not seen in Castlevania.sid's disassembly, so it's file/build-dependent, not a fixed property of the KMS format overall.",
    "GENUINE DISASSEMBLY GOTCHA, KMS-SPECIFIC: Teenage_Mutant_Ninja_Turtles.sid's correct SIDdecompiler relocation base is NOT its own PSID load address ($474e) but the -v2 memory map's own reported 'Start:' address ($0a80) — a fixed low-page runtime scratch area the driver reads/writes that sits below the file's own loaded payload entirely. Using the PSID load address as the relocation base is the well-established trap (see the agent's own gotcha 40); Castlevania.sid did NOT need this (its Start: matched its load address exactly), confirming this is file/build-dependent, not a fixed KMS-wide layout fact."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Hatlelid, Kris - CANADA')",
    "CSDb scener (id=32451, handles Kristjan/Mad Hatter, Coder, Piratebusters): https://csdb.dk/scener/?id=32451",
    "MobyGames — Kris Hatlelid (79 credits, KMS driver, Distinctive Software, post-C64 career): https://www.mobygames.com/person/157/kris-hatlelid/",
    "VGMPF — KMS driver: https://www.vgmpf.com/Wiki/index.php?title=KMS",
    "Lemon64 — 13 C64 titles credited to Kris Hatlelid: https://www.lemon64.com/games/list.php?list_individual=kris-hatlelid",
    "Lemon64 — Castlevania (Konami/Unlimited Software Inc. licensed port): https://www.lemon64.com/game/castlevania",
    "Lemon64 — The Cycles: International Grand Prix Racing: https://www.lemon64.com/game/cycles-international-grand-prix-racing",
    "Wikipedia — The Cycles: International Grand Prix Racing: https://en.wikipedia.org/wiki/The_Cycles:_International_Grand_Prix_Racing",
    "Local dataset: 10 files tagged Kris_Hatlelid, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Kris_Hatlelid` tag is Canadian coder-composer Kris Hatlelid's own
sound driver, 'KMS' ('Kris' Music System'), written while he worked at
Distinctive Software doing both game programming and music. Player-ID-
fingerprinted across 10 files, all his own — including a licensed
arrangement of Konami's Castlevania score for the C64 port.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **confirmed self-named
driver format** ('KMS'), sourced independently by MobyGames and VGMPF; the
**Castlevania trace is a licensed arrangement**, not an original
composition — flagged so the trace isn't misread; **'Cycles' resolved**
to a specific 1989/1991 racing game, unrelated to the Tron-style game of
the same generic name; and two disassembly-specific gotchas found while
reaching `verified` — a `label+1`-suffixed self-modified-operand syntax
issue (Ninja Turtles only) and a relocation base that must be the
`-v2` map's own `Start:` address rather than the PSID load address
(Ninja Turtles only, not Castlevania) — both file/build-dependent, not
fixed KMS-format facts.

## Disassembly notes

No public disassembly exists (not in the realdmx RE repo, not in SIDId).
This card's own original disassembly (`SIDdecompiler.exe` + `64tass.exe`,
see Verification) is the first. Two real HVSC files were carried through
disassemble -> reassemble -> byte-diff -> trace-diff to a 100.0000%
byte-exact, register-write-exact result across every subtune each file
has. Full byte-level patch table in
`knowledge/players/reconstructions/kris-hatlelid.md`. Effect encoding,
order-list, pattern, instrument, wavetable, and pulsetable formats remain
`TODO` — reaching those would need a deeper read of the surviving code,
not just a working reassembly.

## Verification

**`status: verified` (2026-07-24) — disassemble/reassemble/trace-diff, two
independent real HVSC files, both closed to 100.0000% byte-exact and
register-write-exact.**

**File 1: `Castlevania.sid`** — PSID, load `$0f00`, init `$5400`, play
`$54b0`, 40 subtunes. `SIDdecompiler.exe -a3840 -z -d -c -v2` (the -v2
map's own `Start:` address matched the PSID load address exactly — no
relocation-shift gotcha here). Reassembled with `64tass.exe` clean, no
warnings. Raw byte-diff: 132/23002 bytes differed (99.4261%), all
concentrated in a per-voice working-storage block right after the play
routine (`$54c8-$5680`) plus a handful of scattered single self-modified
bytes further out (`$578c`-`$5f62`) — the classic "SIDdecompiler snapshots
a post-execution value, not the pristine cold value" pattern (this
project's `hard_won_gotchas` 41/`lessons_learned` families). Traced
subtune 0 first: 0 diffs (register-write-exact already). But subtunes 5
and 39 (out of a 0/1/5/20/39 sample) showed REAL divergence (508 and 78
differing trace lines respectively, pulse-width-modulation values wrong
from frame 1 onward) — proving the working-storage block is NOT uniformly
dead across this file's own subtunes, unlike a same-file assumption would
suggest. Patched all 132 differing bytes back to the pristine value
(131 of 132 were `$00`, one was `$ff` at `$5c2f`) directly in the
assembled `.prg`. Result: byte-diff 0/23002 (100.0000%), and a full
sweep of all 40 subtunes (30 frames each) came back register-write-exact
on every single one — 0 mismatches.

**File 2: `Teenage_Mutant_Ninja_Turtles.sid`** — PSID, load `$474e`, init
`$5560`, play `$5563`, 14 subtunes. First relocation attempt at the PSID
load address produced a `-v2` map whose own `Start:` address was `$0a80`
— well below the load address (a fixed low-page runtime scratch region the
driver reads/writes, not part of the file's own payload) — re-relocated to
`-a2688` (decimal for `$0a80`) per this project's gotcha 40. The
disassembly also emitted 30 `label+1`-suffixed self-modified-operand
labels 64tass rejects as invalid syntax; fixed via the anchor-label +
separate-assignment method (not a text rename — see quirks). Reassembled
clean. Raw byte-diff: 117/16210 bytes differed (99.2782%), same pattern —
a per-voice working-storage block right after load (`$474e-$490e`,
114 of 117 diffs) plus 3 further scattered bytes. Traced 5 subtunes
(0/1/5/10/13): all showed identical, tiny 2-line diffs confined to the
harness's cold-memory preamble dump (a self-modified jump-table target at
`$5564-$5565`), never in the actual register-write CSV body — i.e.
already register-write-exact pre-patch. Patched all 117 bytes to pristine
values (116 of 117 were `$00`, one was `$ff` at `$4de6`). Result: byte-diff
0/16210 (100.0000%), and all 14 subtunes (30 frames each) traced
register-write-exact — 0 mismatches.

**Honest scope / known gap:** only 2 of the 10 tagged files were carried
through this pipeline. The other 8 (`Cycles.sid`, `Grand_Prix_Circuit.sid`,
`Metal_Gear.sid`, `Power_at_Sea.sid`, `Teenage_Mutant_Hero_Turtles.sid`,
`Test_Drive_2_The_Duel.sid`, `Thud_Ridge.sid`, `Wings_of_Fury.sid`) are
RSID files with PSID play address `$0000` (IRQ-driven — the play routine
is installed onto a hardware IRQ vector during `init`, not called via a
fixed address `SIDdecompiler`/`sidm2-sid-trace.exe`'s init/play harness
can drive directly) and were not attempted. `Teenage_Mutant_Hero_Turtles.sid`
(distinct from the verified Ninja Turtles PSID file — a separate release)
IS a plain PSID (load `$4756`, init `$5606`, play `$567a`) and is the most
promising next candidate if a third file is wanted, since it should follow
the same recipe as the two files verified here. Effect
encoding/data-format fields remain `TODO` — this verification pass
confirms the reconstructed *code* plays back register-write-identically,
it does not decode the music-data format itself.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, MobyGames, VGMPF, and
Lemon64 (3 pages).
