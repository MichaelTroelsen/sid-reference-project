# Stephen Legg (player routine)

```json
{
  "id": "stephen-legg",
  "name": "Stephen Legg (player routine)",
  "aliases": ["Stephen_Legg"],
  "authors": ["Stephen Legg"],
  "released": "1988-1989 (Martech/Screen 7/Mindscape era)",
  "status": "verified",
  "platform": "English musician Stephen Legg's playroutine, used across confirmed credits at three different UK publishers (Martech, Screen 7, Mindscape via developer Animated Pixels) — on every title where a separate programmer is named, Legg's role is exclusively music, suggesting a shared/studio-provided routine rather than a self-coded one. Player-ID-fingerprinted across 6 files, all his own (2 co-credited with Danny Marsh).",
  "csdb_release": null,

  "memory": { "load_address": "Per-title, read from each PSID header (never assume one value): Fury $6400-$71df, Gangster $2000-$2c4f, Hellfire $b900-$cfc6, Jaws $a000-$ba1f, Steigar $0828-$172d, Time_Traveller $b000-$c3ff. In all 6 files SIDdecompiler's -v2 map Start: equals the PSID load address exactly — no low-RAM workspace, no copy loop, no dropped leading byte.", "zero_page": "Only $fb-$fe, and only as scratch pointers — the driver keeps ALL persistent state in absolute working storage inside its own load range, so two instances cannot coexist. Fury/Hellfire (older variant) use $fb/$fc only (one 16-bit stream pointer); Gangster/Jaws/Steigar/Time_Traveller (newer variant) use $fb-$fe (a second 16-bit pointer for the instrument/parameter block).", "layout": "Three contiguous regions per file: (1) engine code from the load address (~$700-$900 bytes); (2) fixed tables — voice SID-register offsets $00/$07/$0e (a 5-entry table, only 3 used), an interleaved lo/hi note-frequency table indexed by note*2, and instrument/parameter tables; (3) per-voice working storage + song data (sequence lists, pattern-pointer table, patterns). Verified example (Gangster, load $2000): code $2000-$2624, tables $262b-$28a8, working storage $28a9-$2944, song data $2945-$2c4f." },
  "entry": { "init": "A = subtune; scaled by 6 (asl/sta/asl/adc) to index a per-subtune table of 3 lo/hi voice-sequence pointers, which are copied into the voice pointer slots; then all 6 current-pattern pointers are set to a dummy $ff terminator so the first play call immediately fetches the first pattern; then $d400-$d418 are zeroed. Address is the PSID header's init field (Fury/Gangster/Hellfire/Time_Traveller: == load address; Jaws $b9f8; Steigar $1100).", "play": "PSID header play field; called once per frame. Offset from init is variant-specific: Fury +$49, Gangster/Time_Traveller +$91, Steigar +$97, Jaws +$1b, Hellfire at $cfc0 (a separate tail entry). play saves A/X/Y and $fb-$fe into absolute slots on entry and restores them on exit — it is IRQ-safe but not re-entrant." },
  "speed": "1x (single play call per frame). PSID speed field is 0 (50 Hz VBI) on 5 of 6 files; Hellfire declares 0x1 (CIA) for subtune 0. No multispeed, no raster splits, no NMI, no digi.",
  "data_format": { "order_list": "Per subtune, 3 lo/hi pointers (6 bytes) in a table right after init. Each points at a sequence: a list of 1-byte pattern indices terminated by $ff. On $ff the driver reloads the voice's sequence pointer from its saved start (no explicit loop command — the restart pointer slot is what makes it loop).", "patterns": "Pattern index * 2 indexes an interleaved lo/hi pointer table (Gangster: $2a23, 14 entries). A pattern is a byte stream of (command, operands) pairs; command byte $ff terminates the pattern and returns to the sequence. The command byte itself is a BITMASK, not an opcode — see effects.encoding.", "instruments": "Selected by a self-modified absolute operand: a 16-bit base address held in two adjacent working-storage bytes (Gangster $2944/$2945 = $2946) is added to a computed offset and stored into the operand of an `lda abs,Y` instruction. Each instrument record carries attack/decay, sustain/release and a control/waveform byte written to $d405/$d406/$d404 (+voice offset).", "wavetable": "None found — waveform comes from the instrument's control byte plus a per-voice control-byte slot in working storage; no separate wavetable stream.", "pulsetable": "Not used in the traced files (no $d402/$d403 writes on the newer variant; only $d400-$d406 + $d418 are referenced directly, voices 2/3 reached via the $00/$07/$0e offset table).", "filtertable": "Only the older Fury/Hellfire variant writes $d415/$d416/$d417 directly (Fury: 26 filter writes in a 263-write/50-frame sample). The newer Gangster/Jaws/Steigar/Time_Traveller variant references no filter register at all." },
  "effects": { "encoding": "The pattern command byte is a BITMASK tested with a chain of `lda #$xx / bit <cmd> / bne` — bits $01, $02, $04, $08 and $10 each select a different handler, and $ff (all bits) is the pattern terminator, checked first with `cmp #$ff`. Bit 0 of the byte is NOT a note; a command byte with no bits set falls through to the plain note path, which reads the next stream byte as a note index into the lo/hi frequency table (index*2) and writes $d400/$d401 (+voice offset).", "commands": { "$ff": "End of pattern — reload from sequence list (checked before the bit tests).", "$01": "Set duration/parameter pair without retriggering the instrument (reads 2 stream bytes into the voice's duration slots, forces gate via the stored control byte).", "$02": "Note with instrument re-fetch (recomputes the instrument index before the note path).", "$04": "Set a per-voice flag slot (single-byte handler).", "$08": "Present in the dispatch chain but its handler is unreferenced code in all 6 files (never executed in any traced subtune) — see quirks.", "$10": "Branches to a separate parameter-setting routine (portamento/slide family; not exercised often enough in the 60-frame window to pin down further)." } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "ALL SIX TAGGED FILES ARE CONFIRMED (2026-07-30) TO SHARE ONE DRIVER, by lesson-68 relative-offset matching on address-operand-free opcode patterns: the three `lda #$xx / bit <cmd> / bne` dispatch tests hit in all 6 files and in neither negative control (Hubbard's Monty_on_the_Run, Galway's Wizball). Relative offsets from the $01 test: Gangster/Steigar/Time_Traveller are IDENTICAL (-$ab, +$2d, and a pointer-advance idiom at -$57) — the same build; Jaws is -$b0/+$2d/-$57 (5 extra bytes upstream, same revision line); Hellfire is -$a8/+$38/-$47; Fury is -$a2/+$3e with no pointer-advance match at all. So: THREE revisions, oldest to newest — Fury (1988) -> Hellfire (1988) -> Gangster/Steigar/Time_Traveller/Jaws (1989).",
    "THE VARIANT SPLIT IS ALSO VISIBLE IN ZERO PAGE AND IN FILTER USE, which is a fast way to classify a new file without pattern-matching: the older Fury/Hellfire variant uses only $fb/$fc and writes the filter registers $d415-$d417 directly; the newer 1989 variant uses $fb-$fe (a second scratch pointer for the self-modified instrument fetch) and references NO filter register at all. Fury's 'filter-heavy' character (26 filter writes per 50 frames) is therefore a property of the OLD variant, not of the tag as a whole.",
    "THE $08 DISPATCH BRANCH IS DEAD IN EVERY FILE. In Gangster it is a bare 3-byte `.byte $4c, $c1, $22` (jmp $22c1) that SIDdecompiler classifies as unreferenced data because its own 30,000-call trace never enters it; blanking it (and the three other unreferenced blocks at $22c1-$22c8, $23bf-$23d7, $24c8-$24fb) with $00 changes nothing in a 60-frame trace of the original file, confirming empirically that all four are unreached rather than merely untraced. Treat the $08 command as a compile-time-present, never-emitted feature.",
    "THE DRIVER STORES A RAW 16-BIT BASE POINTER IN ORDINARY WORKING STORAGE (Gangster $2944/$2945, Time_Traveller $b944/$b945, Steigar $0b47/$0b48, Jaws $aac9/$aaca) plus an interleaved 3-entry lo/hi voice-state pointer table ($2932/$2933, $b932/$b933, $0b35/$0b36, $aab6/$aab7). SIDdecompiler leaves both as literal hex `.byte`s, so they do NOT survive relocation — this is the lesson-72(b) class and is the ONE thing that breaks a relocated rebuild of the four 1989 files. Fury and Hellfire have no such construct and relocate cleanly untouched.",
    "SIX CONFIRMED GAME CREDITS, EXACTLY MATCHING CSDb's own 6-result search count for this composer: The Fury (1988, Martech, the traced file — programmer Jas Austin, graphics Dave Dew, music Legg solo), Hellfire (1988, Martech — programmer David George Wainwright, graphics Mark Kevin Jones, music Danny Marsh & Legg), Jaws (1989, Screen 7 — programmer Robert Henderson, music Legg solo), Steigar (1989, Screen 7 — music Danny Marsh & Legg, no separately-listed programmer/graphics credit on this one title, see caveat below), Gangster (1989, Mindscape/Animated Pixels — programmer Charlie Robson, graphics Paul Robinson & Simon Beal, music Legg solo), Time Traveller (1989, Mindscape/Animated Pixels — same team as Gangster, music Legg solo).",
    "ON EVERY TITLE WHERE A SEPARATE PROGRAMMER IS NAMED, Legg's credit is EXCLUSIVELY music — a distinct person always holds the programmer role. Best-supported reading: he was purely a musician, not a coder, making a shared/studio-provided routine (rather than self-written) the more likely origin for this tag's driver.",
    "ONE GENUINE, EXPLICITLY UNRESOLVED CAVEAT: on 'Steigar' specifically, Lemon64 lists only 'Creator: Danny Marsh, Stephen Legg' with no separately-named programmer/graphics credit, unlike every other title in his catalog. This COULD imply a broader role on that one game, but no second source corroborates it (MobyGames 403'd, World of Spectrum unreachable) — left explicitly as unresolved, not treated as evidence he coded.",
    "TWO TITLES (Hellfire, Steigar) ARE CO-CREDITED WITH DANNY MARSH, a recurring collaborator — Marsh has no separate CSDb/HVSC profile found in this research pass and is not currently a card in this KB.",
    "NO CSDb SCENER PROFILE EXISTS — site search returns only the 6 SID release entries, no scener page, no group membership, no other (non-commercial) productions. Consistent with a commercial-only, non-demoscene UK composer, matching the plain (no-group) HVSC entry ('Legg, Stephen - UNITED KINGDOM (ENGLAND)').",
    "A LOW-QUALITY SEARCH-ENGINE ARTIFACT WAS EXPLICITLY CAUGHT AND DISCARDED: a LaunchBox-sourced claim that Time Traveller was co-developed by 'Adam Marlik, Pawel Smolka' looked like a garbled/mismatched auto-summary and directly contradicts the clean, internally-consistent Lemon64 credits (Charlie Robson/Robinson/Beal) — not included as fact.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Legg, Stephen - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — The Fury (full credits, traced file): https://www.lemon64.com/game/fury",
    "Lemon64 — Hellfire (full credits): https://www.lemon64.com/game/hellfire",
    "Lemon64 — Gangster (full credits): https://www.lemon64.com/game/gangster-mindscape",
    "Lemon64 — Time Traveller (full credits): https://www.lemon64.com/game/time-traveller-mindscape",
    "Lemon64 — Steigar (Creator field caveat): https://www.lemon64.com/game/steigar",
    "CSDb sid/?id=17420 (The Fury): https://csdb.dk/sid/?id=17420",
    "CSDb sid/?id=17422 (Hellfire): https://csdb.dk/sid/?id=17422",
    "Local dataset: 6 files tagged Stephen_Legg, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Stephen_Legg` tag is English musician Stephen Legg's playroutine,
used across confirmed credits at three UK publishers (Martech, Screen 7,
Mindscape). On every title with a separately-named programmer, his role
is exclusively music — pointing toward a shared/studio routine rather
than a self-coded one. Player-ID-fingerprinted across 6 files, all his
own (2 co-credited with Danny Marsh).

## Quirks & gotchas

See the `quirks` array. Two load-bearing ones now: on the **history** side,
the consistent musician-only role across 5 of 6 confirmed titles (with
Steigar's ambiguous 'Creator' credit flagged rather than smoothed over) —
which the reconstruction supports, since the driver is one shared engine
carried across three publishers and three revisions, exactly what a
studio-provided routine looks like. On the **code** side, the raw
unsymbolised 16-bit base pointer in working storage that breaks any naive
relocation of the four 1989 files.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). The facts above
come from an original disassembly produced in this project — see
Verification.

The engine is a straightforward pattern/sequence player: three voices, each
with a sequence pointer (list of pattern indices, `$ff`-terminated) and a
current-pattern pointer. `init` fans a per-subtune 6-byte pointer block out
into the voice slots and points every current-pattern pointer at a dummy
`$ff` so the first `play` call immediately pulls pattern 0. Per frame, each
voice reads a command byte, tests it as a **bitmask** (`lda #$01 / bit cmd /
bne ...` through `$10`), and either dispatches to a handler or falls through
to the plain-note path, which indexes an interleaved lo/hi frequency table by
`note*2` and writes `$d400`/`$d401` offset by `$00`/`$07`/`$0e` from a
5-entry voice table.

## Verification

**Full reconstruction, 6 of 6 tagged files — `status: verified`
(2026-07-30).**

Method (batch26 recipe): for each file, `SIDdecompiler.exe -a<decimal of the
-v2 map's own Start: address> -z -d -c -r`, then
`64tass.exe -a --cbm-prg`. On all six files the `-v2` Start address equals
the PSID load address exactly, so no gotcha-40 correction was needed. No
hand-patching of self-modified/working-storage bytes was required — `-r`
supplied pristine cold bytes on the first pass.

**Byte-diff — 100.0000% exact on every file, over 27,839 of 28,189 payload
bytes (98.76% of the family):**

| file | PSID load / init / play / subtunes | emitted | byte-diff |
|---|---|---|---|
| Fury.sid | $6400 / $6400 / $6449 / 1 | 3523 of 3552 | 100.0000% |
| Gangster.sid | $2000 / $2000 / $2091 / 1 | 3152 of 3152 | 100.0000% |
| Hellfire.sid | $b900 / $b900 / $cfc0 / 4 | 5831 of 5831 | 100.0000% |
| Jaws.sid | $a000 / $b9f8 / $ba13 / 22 | 6688 of 6688 | 100.0000% |
| Steigar.sid | $0828 / $1100 / $1197 / 2 | 3846 of 3846 | 100.0000% |
| Time_Traveller.sid | $b000 / $b000 / $b091 / 2 | 4799 of 5120 | 100.0000% |

All six carry PSID load address 0 with the real address embedded as the
payload's own first two little-endian bytes.

**Non-tautological check (relocation-invariance, lessons 69/70/72).** A
100%-byte-exact `-r` build makes a trace against the original identical by
construction, so every file was ALSO rebuilt from the same disassembly at a
different base with a non-zero low-byte delta (Fury -> $8123, Gangster/
Hellfire/Steigar/Time_Traveller -> $4123, Jaws -> $2123) and traced there
against the original. Each relocated build differs from its native build in
**812-1270 bytes**. Result across **all 6 files and all 32 subtunes,
3,834 register writes: 0 divergences** on `(frame, register, old, new)`.
Cycle timestamps drift 1-3 cycles per write from page-crossing penalties
(lesson 72a) — expected, and confirmed by Fury, where the write sequence is
identical while 293 of 294 cycle stamps shift by 1-3.

**One real defect found and fixed, in the 1989 variant only (lesson 72b).**
The first relocation attempt failed on Gangster, Steigar, Time_Traveller and
Jaws subtunes 0/1 (e.g. Gangster 195 writes -> 67, ADSR writes vanishing).
Cause: the driver holds a **raw, unsymbolised 16-bit base pointer** in
ordinary working storage — `l2944/l2945 = $46,$29` -> `$2946` on Gangster —
which `adc`s into `$fd/$fe` and is stored into a self-modified `lda abs,Y`
operand. SIDdecompiler emits it as literal hex, so it does not relocate.
Emitting it (and the sibling 3-entry interleaved lo/hi voice-state table at
`$2932/$2933`) base-relative against an `RB = <origin>` equate closed all
four files. Equivalent addresses: Time_Traveller `$b944/$b945` +
`$b932/$b933`; Steigar `$0b47/$0b48` + `$0b35/$0b36`; Jaws `$aac9/$aaca` +
`$aab6/$aab7`. Patch-isolation showed the base pointer alone is load-bearing
in a 60-frame window; the voice-state table is patched too because it is a
genuine unrelocated pointer (lesson 41 — do not assume it is dead). Fury and
Hellfire contain neither construct and relocated cleanly with no patch.

**Two false leads, both ruled out empirically rather than assumed.** (1) The
four `; Unreferenced data` blocks in Gangster (`$2231-$2233`, `$22c1-$22c8`,
`$23bf-$23d7`, `$24c8-$24fb`) contain unrelocated absolute jumps
(`jmp $22c1`, `jmp $24fc`) and looked like the obvious relocation blocker;
blanking each with `$00` in the ORIGINAL file changed the 60-frame trace by
0 writes, proving none is executed. (2) `-C1` (speculative) did not help —
it produced *more* unreferenced blocks (95 vs 74) and the relocated trace was
unchanged.

**Honest scope / known gap.** Two files have a trailing region past
SIDdecompiler's traced End that is not emitted and therefore not part of the
byte-diff: Fury `$71c3-$71df` (29 bytes: `ff ff` then zeros — inert) and
**Time_Traveller `$c2bf-$c3ff` (321 bytes, 143 of them non-zero and clearly
real 6502 code)**. That 6.3% of Time_Traveller is genuinely unreconstructed;
it is unreached by any of its 2 subtunes over 60 frames and by
SIDdecompiler's own 30,000-call trace, so it is most likely a
game-side/sound-effect entry the PSID rip never calls, but that is not
established. Everything else in this card is derived from the reconstruction
above.

Scratch work (disassemblies, patched sources, both `.prg` sets, trace logs):
`C:\Users\mit\AppData\Local\Temp\claude\C--Users-mit-claude-sid-reference-project\54363ab5-4f49-4f93-99ab-27aa24abc3b8\scratchpad\stephen-legg\`

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (5 pages), and CSDb
(2 entries).
