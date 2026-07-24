# Soundcontrol / SOPROL (Holger Gehrmann)

```json
{
  "id": "soundcontrol",
  "name": "Soundcontrol / SOPROL (Holger Gehrmann)",
  "aliases": ["Holger_Gehrmann"],
  "authors": ["Holger Gehrmann"],
  "released": "1984-1985 (Soundcontrol 2, HG-Software Systems; date conflicts across CSDb's own records, see quirks)",
  "status": "verified",
  "platform": "A compiled-BASIC-like music tool: SOPROL ('Sound Programming Language'), where songs are typed in like a BASIC program (labels, sound commands) and a compiler converts them to machine language. Per the author's own account, compiled songs ran VERY slowly due to the language's structure. Later ported to Atari ST and Amiga (the Amiga Soundcontrol supported macros comparable to Chris Hülsbeck's TFMX). Player-ID-fingerprinted across 9 files, all by Gehrmann himself.",
  "csdb_release": 30432,

  "memory": { "load_address": "Load address varies per file — this is a compiled-per-song blob, not a fixed relocatable player + separate song data. Confirmed on 3 disassembled/reassembled files: Graffiti_Man $3000, Soundcontrol_2 $9000, Top_Secret $9800. ALL THREE independently share a fixed low-page scratch-RAM workspace at $033d-$03xx (page-3/tape-buffer RAM), reported by SIDdecompiler's -v2 map as the true 'Start:' address, BELOW every file's own PSID load address (see verification notes — this is the gotcha-40 trap: relocate to that Start address, not the PSID load address, or 64tass wraps/misaligns silently). Soundcontrol_2 and Top_Secret additionally touch a second workspace block at $c3xx-$c418 (free RAM under BASIC ROM) holding a per-voice pitch-slide accumulator (see entry.play) and 2 flag/counter bytes at $c417/$c418 — NOT present in Graffiti_Man's smaller build.", "zero_page": "TODO (uses labelled non-zero-page scratch, e.g. z02/z92/za9 etc. in the $02-$c0 zero-page range per SIDdecompiler's -z output; full ZP map not yet catalogued field-by-field).", "layout": "Compiled from a BASIC-like source language (SOPROL) with labels and sound commands — not a conventional pattern/table format. Confirmed empirically: the driver/runtime code is NOT a fixed shared library called from a fixed address — Soundcontrol_2 and Top_Secret both place their 'play' entry at the identical absolute address $9a32 despite different load addresses ($9000 vs $9800), but a byte comparison of the whole $9a00-$c418 region between the two is only ~93.6% identical (688 of 10776 bytes differ, first diff at $9a32 itself) — i.e. the SOPROL compiler emits customized, per-song runtime code that happens to target a conventional fixed base, not a literal shared/reused binary blob." },
  "entry": { "init": "Per-file absolute address, not fixed: Graffiti_Man $3400 (itself a JMP stub to $3c3d), Soundcontrol_2 $9000 (== load address), Top_Secret $9f80.", "play": "Per-file absolute address: Graffiti_Man $3403 (JMP stub to $3c58); Soundcontrol_2 AND Top_Secret both $9a32 (see memory.layout — same address, different code). SC2/Top_Secret's play routine calls its core sub-play routine TWICE per PSID play-call (lda #$02 / loop: jsr <core> / dec counter / bne loop) before falling through to the per-frame note dispatcher — an internal 2x update-rate baked into the driver, not exposed via the PSID header." },
  "speed": "TODO (author's own account: compiled songs ran 'VERY slow' due to SOPROL's language structure). Confirmed one concrete mechanism contributing to this: SC2/Top_Secret's play routine invokes its core update loop twice per call (see entry.play).",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 1 filter write in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "FIRST-PARTY CONFIRMED, DETAILED DESCRIPTION of SOPROL, quoted directly from a 2001 Remix64 interview with Gehrmann himself: 'On the C-64 I made Soundcontrol and a sound programming language called SOPROL which I also used on the Atari ST. The Amiga version of SOPROL was used in early games like Hollywood Poker and Space Port, and the Amiga-Soundcontrol which allowed similar macros like Chris Hülsbeck's TFMX was used till BIING!.' He named 'Hollywood Poker' as arguably his best composition. Architecturally DISTINCT from every other tool currently in this KB — a compiled DSL, not a table/pattern player.",
    "DATE CONFLICT, explicitly flagged rather than silently resolved: CSDb's own release page for 'Soundcontrol 2' gives 1984; CSDb's own SID-file page for the SAME title gives 1985 — a genuine inconsistency within CSDb's own records, not a project data error. Separately, a secondary (unverified) source describes SOPROL as designed in 1986 — TWO YEARS AFTER the C64 tool it's supposedly used in, per this project's own SIDId comment. Possible explanations (revision, loose conflation of the tool family) are not resolved by any source found — left as an open discrepancy.",
    "'GRAFFITI MAN' AND 'HOLLYWOOD POKER' (both file titles in the traced folder) are CONFIRMED real Gehrmann-composed games, both released multi-platform (C64/Amiga/Atari ST) — not generic HVSC filenames.",
    "GEHRMANN'S BROADER CAREER: founder of HG-Software Systems (demoscene, active 1983-1987, functions Cracker AND Musician per CSDb — not purely a coder tag); founded Golden Games (1986, with Dieter Eckhardt) then reLINE Software GmbH (Hannover, 1987, folded 2004), which employed Karsten Obarski (author of the influential Ultimate Soundtracker Amiga tracker) as sound programmer for 4+ years. Organizer of the 'reLINE Software Programmer Party' 1989-1991. Named Rob Hubbard (already carded in this KB as [[rob-hubbard]]) as a musical influence — an admiration link only, no evidence of code derivation.",
    "Born 6 May 1968; died 11 February 2008, age 39 (per VGMPF, a fall from a 6th floor; CSDb separately states 'died by suicide' — both sources describe the same event, not contradictory, noted here factually and respectfully).",
    "Other confirmed game credits: Operation Hongkong (1986), Top Secret (1986), Adult Poker (1987), Galactic Meteors (1983), Oil Imperium, Biing!, North Sea Inferno, Legend of Faerghail.",
    "No known relationship found to any other composer/tool already in this KB beyond the Rob Hubbard admiration note above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Georg Brandt, Harald Rosenfeldt, Tobias Herre/Extra Sound, Chris Huelsbeck — none found).",
    "VERIFIED (2026-07-24) via disassemble → reassemble → trace-diff on 3 independent real HVSC files, closing the gotcha-40-class 'fixed low-page workspace below the load address' trap: SIDdecompiler's -v2 memory map reports the true 'Start:' address as ~$0340, well below every tested file's own PSID load address ($3000/$9000/$9800) — relocating there (not to the PSID load address) was required to avoid a silent 64tass wraparound. One extra wrinkle beyond gotcha 40 itself: SIDdecompiler's own reassembly bakes its LAST-OBSERVED runtime snapshot of that below-load workspace into the output .asm/.prg as if it were the file's own initial data — but that workspace was never part of the real PSID file's payload at all, so on real playback (and in the trace tool, which zero-initializes all memory before loading only the file's own declared load range) it starts genuinely zero, not SIDdecompiler's captured value. This mattered concretely on Graffiti_Man (the un-zeroed reassembly's trace diverged from frame 3 onward — osc3 frequency drift, a false failure); zeroing every byte outside the file's own declared [load, load+len) range before tracing fixed it to register-write-exact. Confirmed file-dependent per the project's own established pattern (lessons_learned 41/42): Soundcontrol_2 and Top_Secret's reassemblies were ALREADY trace-exact even without this zeroing step (their own init apparently sets up that workspace fully before it's ever read) — so the zeroing fix is a general safety step to apply, not evidence every file needs it."
  ],
  "sources": [
    "This project's SIDId import (direct Gehrmann quote, marked '(HG)', on Soundcontrol/SOPROL's slow performance)",
    "Remix64 interview with Holger Gehrmann (2001-08-01, primary source for the SOPROL description, career detail): https://remix64.com/interviews/interview-holger-gehrmann.html",
    "CSDb release 30432 (Soundcontrol 2, 1984): https://csdb.dk/release/?id=30432",
    "CSDb SID entry (Soundcontrol 2, 1985 — the date-conflict source): https://csdb.dk/sid/?id=13312",
    "CSDb scener (id=10722, HG-Software Systems, reLINE Software, career, death note): https://csdb.dk/scener/?id=10722",
    "VGMPF — Holger Gehrmann (birth/death dates, Golden Games/reLINE history, game list): https://www.vgmpf.com/Wiki/index.php?title=Holger_Gehrmann",
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: 9 files tagged Holger_Gehrmann, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Holger_Gehrmann` tag is Soundcontrol, a compiled-BASIC-like music
tool built around Gehrmann's own scripting language SOPROL — later ported
to Atari ST and Amiga, where its macro system was directly comparable to
Chris Hülsbeck's TFMX. Player-ID-fingerprinted across 9 files, all by
Gehrmann himself, who went on to found the German studio reLINE Software.
Verified via disassemble → reassemble → trace-diff on 3 independent real
files (see Verification) — the compiled 6502 output is understood; the
SOPROL source-language format itself is not (out of scope for a binary
disassembly).

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **first-party, directly
quoted description** of SOPROL from a 2001 interview; an **honestly
flagged date conflict** within CSDb's own records rather than silently
picking one; and Gehrmann's **broader career** founding reLINE Software
and employing the Ultimate Soundtracker's own author.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Original
disassembly done this pass via SIDdecompiler on 3 real HVSC files — see
Verification below and `knowledge/players/reconstructions/soundcontrol.md`
for the exact commands/offsets. High-level structure (per-song compiled
blob, shared low-page workspace, driver internals like the pitch-slide
routines at `l9a40`/`l9a50`/`l9a70`) is now understood; the compiled
SOPROL source format itself (order lists, patterns, effect encoding) is
still `TODO` — SIDdecompiler only recovers the compiled 6502 output, not
the original SOPROL-language input.

## Verification

**`status: verified` (2026-07-24).** Disassembled, reassembled, and
trace-diffed 3 independent real HVSC files (SIDdecompiler → 64tass →
`sidm2-sid-trace.exe`), all **100.0000% byte-exact** on the file's own
payload region and **register-write-exact over 50 frames**:

| File | Load | Init | Play | Byte-diff | Trace-diff |
|---|---|---|---|---|---|
| Graffiti_Man.sid | $3000 | $3400 | $3403 | 100.0000% (3177/3177) | exact (after zeroing below-load workspace, see quirks) |
| Soundcontrol_2.sid | $9000 | $9000 | $9a32 | 100.0000% (3292/3292) | exact (exact even without zeroing) |
| Top_Secret.sid | $9800 | $9f80 | $9a32 | 100.0000% (1945/1945) | exact (exact even without zeroing) |

Method: relocated SIDdecompiler's output to its own `-v2` map's reported
"Start:" address (~`$033d`-`$0340`, a fixed low-page scratch-RAM workspace
below every file's own PSID load address — the gotcha-40 trap), not the
PSID load address itself, to avoid a silent 64tass wraparound. For
Graffiti_Man, additionally zeroed every reassembled byte outside the
file's own declared `[load, load+len)` range before tracing (see quirks
for why — SIDdecompiler bakes its own runtime snapshot of that
non-payload workspace into the output, which is not the real cold-start
state). Earlier (2026-07-14) pass had only confirmed playback/entry
points on Graffiti_Man (106 writes/50 frames, load $3000/init $3400/play
$3403) without disassembly — this pass supersedes it with an actual
verified reconstruction.

Internals of the compiled 6502 output (workspace layout, driver
dispatch, pitch-slide routines) are now documented in `memory`/`entry`
above; the original SOPROL source-language format (order lists, patterns,
instrument/effect encoding) remains `TODO` — out of scope for
disassembly of the compiled binary alone.

## Sources

See the `sources` array — this project's SIDId import, a Remix64
interview (primary source), CSDb (release + SID entry + scener), VGMPF,
and HVSC Musicians.txt.
