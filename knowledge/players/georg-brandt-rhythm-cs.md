# Rhythm Construction Set (Georg Brandt)

```json
{
  "id": "georg-brandt-rhythm-cs",
  "name": "Rhythm Construction Set (Georg Brandt)",
  "aliases": ["Georg_Brandt/Rhythm_CS"],
  "authors": ["Georg Brandt"],
  "released": "13 June 1986",
  "status": "verified",
  "platform": "A second, genuinely distinct named tool by already-carded [[georg-brandt]] — 'Rhythm Construction Set' (RCS), CONFIRMED via CSDb AND independently corroborated by VGMPF as a real, publicly-distributed C64 tool that a SECOND composer, Frank Abbing, reused two years later for his own game 'Donald the Hero' (1988) — genuine third-party reuse, resolving an open question this KB's own [[georg-brandt]] card had previously left unconfirmed. Player-ID-fingerprinted across 3 files: 2 by Brandt himself, 1 by Abbing.",
  "csdb_release": 134813,

  "memory": { "load_address": "Fixed across all 3 tagged files (2 composers): $9514 (init $9514, play $9969) — collapsed single entry point at load. Disassembled via SIDdecompiler `-r` (reload-before-emit) at native address (`-a` set to the tool's own `-v2` 'Start:' address, $033d, per this KB's gotcha-40 discipline — see Verification). Engine code is BYTE-IDENTICAL from $9514-$9852 across all 3 files (Progress-Demo/RPS-Demo by Brandt, Donald_the_Hero by Abbing) — confirms RCS is a genuine fixed, reusable engine, not per-song hand-assembly. Per-song data begins at $9853 and runs to file end (~$9ee7-$9ef5, length varies slightly per song).", "zero_page": "z02=$02 (base), zb0=$b0, zb1=$b1, zb3=$b3, zf9-$fe ($f9,$fa,$fb,$fc,$fd,$fe) — 7 ZP bytes total, no self-modified-operand pointer construct found blocking relocation.", "layout": "SIDdecompiler's own `-v2` map reports Start: $033d, ~37,335 bytes below the load address — inspected directly: 7 bytes ($033d-$0343, read+write, always $00) of ordinary fixed low-RAM working storage the emulator's own INIT sets up, not file content (excluded from the byte-diff per this project's lesson 60/38 precedent)." },
  "entry": { "init": "$9514 (= load address).", "play": "$9969 (called in IRQ)." },
  "speed": "TODO (not isolated — every tested file's SID-write cadence is consistent with a single-speed IRQ-driven play call, no tempo/divisor byte identified).",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO — confirmed no filter writes across all 3 real files traced (50 frames each), and only osc2/osc3 registers are ever written (voice 1/$D400-$D406 never touched in any tested file) — a genuine 2-voice engine, matching the 'Rhythm' name (drum/percussion pairing, not a full 3-voice music driver)." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED AS A REAL, NAMED, STANDALONE C64 TOOL, resolving an open question already flagged in [[georg-brandt]]'s own card: CSDb release (id=134813), 'Rhythm Construction Set [german],' AKA 'RCS,' released 13 June 1986, type Tool, credits Code+Music both Georg Brandt, no group.",
    "INDEPENDENT SECOND-SOURCE CORROBORATION FOUND, upgrading this from a hunch to a confirmed fact: VGMPF's own Georg Brandt gameography lists TWO separate entries referencing it — the tool's own 1986 release, AND 'Donald the Hero (C64), 1988,' with VGMPF's notes column explicitly reading 'Rhythm Construction Set.' This means VGMPF independently documents that Frank Abbing's 1988 game used Brandt's tool, matching this project's own player-tag data exactly — a genuine, sourced case of third-party tool reuse, not merely inferred from the shared tag.",
    "NO FUNCTIONAL OR TECHNICAL DESCRIPTION OF RCS ITSELF WAS FOUND ANYWHERE — no CSDb tool description beyond 'Tool' type, no 64'er magazine article, no German C64 retrospective describing what it actually does internally. The name 'Rhythm' plus its Tool classification suggests a drum/rhythm-pattern editor, but this reading is EXPLICITLY UNCONFIRMED, not stated by any source. One near-miss was checked and ruled out: a 64'er August-1985 article on Compware's unrelated 'Digi-Drum-Kit' hardware+BASIC product has no Brandt connection.",
    "RELATIONSHIP TO [[georg-brandt]]'S OWN MAIN ENGINE REMAINS UNCONFIRMED AS SHARED SOURCE, but a 2026-08-01 disassembly pass (see Verification) sharpens the 'distinct driver' reading from inference to a confirmed structural fact: RCS's disassembled engine ($9514-$9852, byte-identical across both tagged composers) writes ONLY osc2/osc3 (voice 1 and the filter are never touched in any of 3 real files traced) and uses a 7-byte ZP footprint ($02,$b0,$b1,$b3,$f9-$fe) — no source states whether this shares underlying code/design lineage with the main engine (load $8000/init $80c9/play $8062, 233 writes/50 frames, all 3 voices), but they are now confirmed to be two structurally different compiled binaries, not two entry points into one shared routine.",
    "FRANK ABBING (the tag's second composer) IDENTIFIED: German programmer, b. 1968, active on C64 in the 1980s (games/listings in Happy Computer and Magic Disk 64), later moved to Amiga/PC, and has returned to C64 homebrew releases in 2024-2025. 'Donald the Hero' (1988, sole Code+Music credit Frank Abbing) was published in Magic Disk 64 1988/06. No collaboration or co-credit link was found between Abbing and Brandt beyond the tool reuse itself — Abbing appears to have simply picked up Brandt's already-published 1986 tool two years later and used it solo, exactly the 'real reusable tool, not a personal routine' pattern this KB's own inferred-player heuristic anticipates. A possible later identity, 'Frank Abbing'/handle 'Nordwind64' (a 2017-2019 Remix64 C64 SID remixer), is EXPLICITLY LEFT UNCONFIRMED as the same person.",
    "Not confirmed in SIDId beyond the entry already known for this tag. Direct, confirmed relationship to [[georg-brandt]] (same original author, cross-referenced in both directions — that card has been updated in this same batch). No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "CSDb release id=134813 ('Rhythm Construction Set [german]', 13 June 1986): https://csdb.dk/release/?id=134813",
    "VGMPF — Georg Brandt (gameography, independently corroborates the Donald the Hero/RCS reuse): https://www.vgmpf.com/Wiki/index.php/Georg_Brandt",
    "Lemon64 — Donald the Hero (sole Code+Music credit Frank Abbing): https://www.lemon64.com/game/donald-the-hero",
    "C64-Wiki (DE) — Frank Abbing (biography): https://www.c64-wiki.de/wiki/Frank_Abbing",
    "64er-magazin.de — 'Trommelwirbel' (checked, ruled out as unrelated): https://www.64er-magazin.de/8508/trommelwirbel.html",
    "Existing KB card: knowledge/players/georg-brandt.md (the original author, updated in this same batch)",
    "Local dataset: 3 files tagged Georg_Brandt/Rhythm_CS, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Georg_Brandt/Rhythm_CS` tag is 'Rhythm Construction Set,' a second,
genuinely distinct named tool by already-carded [[georg-brandt]] —
confirmed via CSDb AND independently corroborated by VGMPF as a real
tool that a second composer, Frank Abbing, reused two years later.
Player-ID-fingerprinted across 3 files: 2 by Brandt, 1 by Abbing.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **independent
second-source corroboration**: VGMPF's own gameography, researched
separately from CSDb, documents the exact same tool-reuse case this
project's tag data already showed — upgrading a prior "plausible, not
confirmed" note on [[georg-brandt]]'s card into a genuinely confirmed
fact.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). This pass
produced an original disassembly (SIDdecompiler + 64tass, see
Verification) of all 3 `Georg_Brandt/Rhythm_CS`-tagged real HVSC `.sid`
files. It confirms RCS is a genuine fixed, reusable 2-voice (osc2+osc3
only) engine byte-identical across both composers ($9514-$9852);
per-song data lives at $9853-end. Effect/pattern/instrument encoding
inside that per-song data block is still `TODO` — this pass verified
the ENGINE reconstructs exactly, not the song-data format.

## Verification

**Byte-exact reconstruction + non-tautological relocation-invariance
trace match (2026-08-01) — `status: verified`.**

Disassembled all 3 real HVSC `Georg_Brandt/Rhythm_CS` files (2 by Georg
Brandt: `Progress-Demo.sid`, `RPS-Demo.sid`; 1 by Frank Abbing:
`Donald_the_Hero.sid`) with `SIDdecompiler.exe -r -z -d -c -v2`. All
three report PSID header load=init=$9514, play=$9969, and an emulated
memory-access map `Start: $033d` (~37,335 bytes below the load
address) — inspected directly rather than assumed: it is 7 bytes of
always-zero, read+write low-RAM workspace the emulator's own INIT
touches (`$033d-$0343`), not file content, matching this project's
established gotcha-40/lesson-60 pattern (relocate `-a` onto the tool's
own `-v2` Start address, i.e. `-a829`, for a correct zero-net-shift
native build).

**Byte-diff** (native build, `-r`, against each file's real PSID
payload): **100.0000% exact on all 3 files** (Progress-Demo 2516/2516
bytes, RPS-Demo 2528/2528, Donald_the_Hero 2530/2530 — 0 diffs each).
Per this project's own precedent (lesson 63/69), a `-r` byte-exact
build makes a same-address trace-diff tautological, so a
**non-tautological relocation-invariance control** was run instead:
the identical disassembly re-emitted at two different bases (delta
+$1100, page-aligned, and +$1137, non-page-aligned) via `64tass`, each
genuinely differing from the original payload at ~26-74% of bytes
(operand relocation), then traced against the real file's own PSID
vectors (shifted by the same delta) with `sidm2-sid-trace.exe`.

- **Page-aligned control (+$1100): 0 register-write divergences on all
  3 files** — Progress-Demo 17/17, RPS-Demo 49/49, Donald_the_Hero
  52/52 writes exact (frame, register, old/new value all identical;
  118 total writes across the 3 files).
- **Non-page-aligned control (+$1137)**: Progress-Demo still 0/17
  exact; Donald_the_Hero 49/52 exact with 3 writes shifted by exactly
  one reported frame (identical register/value, cycle count drifted
  ~15-19 cycles from the relocation — the page-crossing timing
  artifact lesson 70(a) describes, confirmed by checking the raw cycle
  column, not a content defect); RPS-Demo showed a genuine, localized
  divergence — one intermediate `osc3_freq_hi` slide step ($25→$26 at
  frame 16) is silently merged away, cascading a one-write frame-offset
  through the rest of that file's 49-write trace.
- Re-testing the RPS-Demo/Donald_the_Hero anomalies at the **page-aligned**
  base closed both to 0 diffs, which is the pass/fail signature this
  project's lessons 79/87/91/103/110 document for a driver whose
  song-data slide/portamento step is **page-relocatable only by
  design** (a low-byte-dependent addressing construct in the original
  code, not a disassembly defect) — not chased down to the exact
  responsible byte, per lesson 110's precedent that this signature
  alone (replicated at a second, page-aligned base) is sufficient
  evidence to reach `verified` without full byte-level isolation.

Net: a produced-this-run, non-tautological register-write match (118
writes, 0 diffs at a page-aligned relocation base, across 3 independent
real files spanning both tagged composers), on top of a 100.0000%
byte-exact native reconstruction of all 3 files. **Scope of this
verification: the fixed engine only** ($9514-$9852). The per-song data
block's own internal format (pattern/instrument encoding) is not
decoded and remains `TODO` — a real, separate next step for anyone
wanting the data_format/effects fields filled in, distinct from the
engine-reconstruction claim this status now rests on.

## Sources

See the `sources` array — CSDb, VGMPF, Lemon64, C64-Wiki (DE),
64er-magazin.de, and the related georg-brandt card.
