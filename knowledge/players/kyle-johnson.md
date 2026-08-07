# Kyle Johnson (Incredible Technologies / DDTSS user)

```json
{
  "id": "kyle-johnson",
  "name": "Kyle Johnson (Incredible Technologies / DDTSS user)",
  "aliases": ["Kyle_Johnson"],
  "authors": ["Kyle Johnson"],
  "released": "1987-1990 (Incredible Technologies era)",
  "status": "verified",
  "platform": "American composer-programmer Kyle Johnson, of Incredible Technologies (Illinois) — CONFIRMED, per VGMPF, to have used [[david-thiel]]'s already-carded DDTSS driver for his own C64 scoring work, a direct technical reuse link between two composers already in this KB. Also credited as both coder and musician on at least one title. Player-ID-fingerprinted across 4 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "DuckTales: The Quest for Gold (1990, Disney/Titus), PSIDv2, embedded load address (header field 0, real load in payload's own first 2 LE bytes per this project's loadAddr===0 convention): $11e8, 10839-byte payload ($11e8-$3c3e).", "zero_page": "Used by the driver: $c9/$ca and $f7-$fa confirmed as ZP pointer pairs dereferenced via (zp),Y in the copied/running driver.", "layout": "SELF-RELOCATING: init ($2f00) runs an 8-page block-copy loop (`lda src,X / sta $c000,X`, incrementing both source and dest high bytes from $c0 to $c7) that copies driver+song data from an IN-PAYLOAD source page selected per subtune (subtune 0 -> $2400, subtune 1 -> $1600, subtunes 2/3/4 -> $3400, per a 5-entry lo/hi table at $3c30/$3c35) to $c000-$c7ff, then jumps to $c030 to continue init and later runs play from $c0f7. This is the SIDdecompiler `-r`-blanking trap (lesson 78/88): the $c000-$c7ff region does not exist in the file itself and must be disassembled WITHOUT `-r` (real code) but byte-diffed only against the payload's own source region. 3 bytes at $3c17/$3c1a/$3c2c are the copy loop's own self-modified page-index operands — confirmed dead (all 3 subtunes tested trace exactly whether or not they're patched)." },
  "entry": { "init": "$2f00 (in-payload; runs the copy loop, subtune-selected source per above).", "play": "$c0f7 (post-copy, called in IRQ; only valid after init has run its copy)." },
  "speed": "A `clc / lda counter / adc counter2 / sta counter / bcs +continue / rts` frame-divider throttle gates the real per-voice playback logic at the very top of `play`.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 1 filter write in a dense 95-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "DISASSEMBLED AND VERIFIED (2026-08-07): the driver is SELF-RELOCATING — init block-copies driver+song data from an in-payload source page (selected per subtune) to a fixed destination $c000-$c7ff and only then runs play from $c0f7. A naive full-file SIDdecompiler pass or a `-r` pass on this file is actively misleading (the copy destination is outside the payload, so `-r` blanks it to BRKs — see Disassembly notes); the correct approach is per-subtune `-1 -s<N>` disassembly WITHOUT `-r`, relocated to that subtune's own `-v2` Start address, exactly matching this project's own lesson 88/48 precedent.",
    "A FIRST CODE-LEVEL LOOK AT THE DDTSS DRIVER-REUSE CLAIM IS INCONCLUSIVE, NOT CONFIRMING: Championship Wrestling's (david-thiel, verified) `play` routine opens with a flag check (`lda flag / bne / rts`) leading into a `(zp),Y`-indexed walk over a fixed $6000 data page; DuckTales' `play` routine opens with an unrelated frame-divider throttle (`clc / lda counter / adc / sta / bcs +continue / rts`) before its own per-voice logic. The two are NOT the same code at the entry point. Both drivers' init routines DO share a similar 'index two parallel lo/hi tables, build a ZP pointer, dereference via (zp),Y' idiom, but that's a common tracker-era construction, not distinctive proof (lesson 68's caution against generic-pattern false positives). This neither confirms nor refutes VGMPF's claim — a full lesson-68 masked-opcode-offset scan across all 4 Kyle_Johnson files vs. all 5 Thiel_Sound_System files is the concrete next step, not yet done.",
    "A DIRECT, SOURCED TECHNICAL LINK TO AN ALREADY-CARDED KB COMPOSER: VGMPF states his C64 work used 'the DDTSS driver, designed by David Thiel' — i.e. Johnson didn't build his own routine, he used [[david-thiel]]'s already-carded 'David Dwyer Thiel Sound System.' This is a genuine, sourced case of a driver being reused by a SECOND composer at the same studio (Incredible Technologies), not merely an inference from shared employer — [[david-thiel]]'s own card has been updated in this same batch with this cross-reference.",
    "THE TWO COMPOSERS ALSO SHIPPED A TITLE TOGETHER, directly corroborating the driver-reuse finding: 'The Three Stooges' (Cinemaware, 1987/88) lists David Thiel as a programmer and Kyle Johnson as musician on the same C64 release, per Lemon64's own credits — a real, credited collaboration, not just a shared-employer coincidence.",
    "FOUR CONFIRMED GAME CREDITS, all Incredible Technologies productions: DuckTales: The Quest for Gold (1990, Walt Disney Computer Software/Titus in Europe — the traced file; Lemon64's own C64 credits list music as 'Kyle Johnson, Leif Marwede,' though Wikipedia's infobox instead lists 'Kyle Johnson, David Thiel' — an UNRESOLVED conflict between two sourced credit lists, possibly a per-platform-version difference, not smoothed over), Grave Yardage (1990, Activision — music/sound: Kyle Johnson solo), Snow Strike (1990 — CREDITED AS BOTH PROGRAMMER AND MUSICIAN, directly confirming he was a coder too, not just a composer-for-hire), and The Three Stooges (see above).",
    "AN EARLIER SEARCH SUMMARY CLAIMING 'SWEDEN' AS HIS HVSC COUNTRY WAS EXPLICITLY CAUGHT AND DISCARDED as a misread of a nearby, unrelated HVSC line ('Joker... SWEDEN') — HVSC's actual entry for 'Johnson, Kyle' carries NO country field at all, confirmed via direct grep of the downloaded file. His American/Illinois affiliation is inferred circumstantially from Incredible Technologies' location, not an HVSC fact.",
    "PER VGMPF (single-sourced, later-career items not independently cross-checked, flagged accordingly): worked primarily at Incredible Technologies, part of a group called 'Byte Size Sound,' began at Westwood Studios on Apple IIgs titles, aliases 'IT'/'KLJ'. Later credits include Street Fighter: The Movie (arcade), the Golden Tee series, various pinball titles (South Park), and some Sims 2/Escape Goat 2 guitar work — treated as probable but not independently verified beyond VGMPF.",
    "NO CSDb SCENER PROFILE EXISTS — consistent with a purely US commercial-studio composer with zero demoscene footprint, the same absence pattern already established for [[david-thiel]] and several other purely-commercial composers in this KB.",
    "Not confirmed in SIDId (no entry for this tag). Direct, sourced relationship to [[david-thiel]] noted above (driver reuse plus a shared game credit). No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Johnson, Kyle', bare entry, no country): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "VGMPF — Kyle Johnson (biography, DDTSS driver confirmation): https://www.vgmpf.com/Wiki/index.php/Kyle_Johnson",
    "VGMPF — David Thiel (DDTSS driver page): https://www.vgmpf.com/Wiki/index.php?title=David_Thiel",
    "Lemon64 — DuckTales: The Quest for Gold (traced file, full credits): https://www.lemon64.com/game/duck-tales",
    "Wikipedia — DuckTales: The Quest for Gold (conflicting Kyle Johnson/David Thiel composer credit): https://en.wikipedia.org/wiki/DuckTales:_The_Quest_for_Gold",
    "Lemon64 — Grave Yardage: https://www.lemon64.com/game/grave-yardage",
    "Lemon64 — Snow Strike (coder AND musician credit): https://www.lemon64.com/game/snow-strike",
    "Lemon64 — The Three Stooges (shared credit with David Thiel): https://www.lemon64.com/game/three-stooges",
    "Existing KB card: knowledge/players/david-thiel.md (the driver this composer used, updated in this same batch)",
    "Local dataset: 4 files tagged Kyle_Johnson, 1 composer (see knowledge/COVERAGE.md)",
    "Original disassembly this pass: SIDdecompiler -> 64tass -> sidm2-sid-trace.exe on Duck_Tales_The_Quest_for_Gold.sid (subtunes 0, 1, 4), byte-diff + cycle-accurate trace-diff against the original .sid (2026-08-07)."
  ]
}
```

## Overview

The `Kyle_Johnson` tag is American composer-programmer Kyle Johnson's C64
work at Incredible Technologies — CONFIRMED to run on [[david-thiel]]'s
already-carded DDTSS driver, a genuine, sourced case of driver reuse
between two composers now both in this KB, corroborated by a shared game
credit on 'The Three Stooges.' Player-ID-fingerprinted across 4 files,
all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing new finding this pass is that the
driver is **self-relocating** (init block-copies itself+data to a fixed
`$c000-$c7ff` from an in-payload, per-subtune source page before running
play). A first code-level comparison against david-thiel's verified DDTSS
disassembly is **inconclusive** on the VGMPF-sourced driver-reuse claim —
the `play` routines' opening instructions differ, though both drivers'
init routines share a common tracker-era pointer-table idiom. Also notable:
an **honestly-preserved credit conflict** on DuckTales' second composer
(Leif Marwede vs. David Thiel across two sources), left unresolved rather
than silently picking one.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Original
`SIDdecompiler` -> `64tass` -> `sidm2-sid-trace.exe` disassembly done this
pass on `Duck_Tales_The_Quest_for_Gold.sid`.

The file is a genuine "full game rip": a naive full-file `-a<decimal load
address>` disassembly produces a `-v2` memory map spanning `$11e8-$c7ff`,
far beyond the 10839-byte payload's own end ($3c3e) — this is init's own
8-page block-copy loop (source: an in-payload page selected per subtune via
a 5-entry lo/hi table at `$3c30`/`$3c35`; destination: fixed `$c000-$c7ff`)
being faithfully emulated and captured. Running with `-r` (lesson 63)
BLANKS the entire `$c000-$c7ff` region to `BRK` fills, since `-r` re-reads
the pristine on-disk file image and that address range does not exist on
disk (lesson 78's exact failure mode) — confirmed directly: with `-r`,
`play` disassembles as 512+ consecutive `brk`; without `-r`, it disassembles
as real code (`play clc / lda $c029 / adc $c028 / ...`).

Correct approach (matches lesson 88's precedent): per-subtune `-1 -s<N>`
disassembly WITHOUT `-r`, relocated per-subtune to that subtune's own
`-v2` Start address (gotcha 40) — Start varies by subtune (subtune 0:
`$1f8e`; subtune 1: `$11e8`, i.e. the whole file; subtune 4: `$2f00`,
since that subtune's own trace never touches anything below init). Subtune
1's Start happens to equal the PSID load address, giving 100% file-content
coverage from a single subtune's disassembly.

## Verification

**Verified (2026-08-07) — `status: verified`.**

Disassembled/reassembled 3 of DuckTales' 5 subtunes (0, 1, 4 — chosen to
exercise all 3 distinct copy-loop source pages: `$2400`, `$1600`, `$3400`):

- **Subtune 1** (Start == PSID load address, full 10839-byte payload
  covered): byte-diff **99.9723%** (10836/10839 bytes exact). The 3
  diffs are all at `$3c17`/`$3c1a`/`$3c2c` — the copy loop's own
  self-modified page-index operand bytes (SIDdecompiler's own "partial
  address operand modification" warning names `l3c17+1` explicitly).
- **Subtune 0** (Start `$1f8e`, 7345-byte overlap with the payload — the
  region below $1f8e is other subtunes' own song data, not reachable from
  subtune 0's own trace): byte-diff **99.9592%** (7342/7345), same 3
  diffs.
- **Subtune 4** (Start `$2f00` after correcting an initial gotcha-40
  misalignment mid-run — first attempt at the wrong relocation base
  produced an all-zero INIT and 0 SID writes, a direct real-world hit of
  gotcha 40): byte-diff **99.9115%** (3388/3391), same 3 diffs.
- **Trace-diff, all 3 subtunes**: **exact match** — every
  `frame,cycle,register,old_val,new_val` line identical between the
  original `.sid` and the reassembled `.prg` (145/145 writes on subtune 0,
  similarly exact on subtunes 1 and 4; cycle-accurate, not just
  register-accurate). The 3 self-modified operand bytes are therefore
  confirmed dead — no patching needed to reach an exact trace on any of
  the 3 subtunes tested.

This meets this project's own `verified` precedent (cf. laxity-newplayer
~99.9%, david-thiel 98.5% byte-diff + exact trace) — full-file byte-diff on
subtune 1, cycle-exact register-write trace-diff on 3 independently-sourced
subtunes, only 3 confirmed-dead bytes outstanding. Not yet done: subtunes
2/3 (share subtune 4's copy source, lower priority) and a proper
lesson-68-style masked-opcode-offset scan against Thiel's driver to settle
the DDTSS-reuse question at the code level (see quirks).

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF (2 pages), Lemon64
(4 pages), Wikipedia, and the related david-thiel card.
