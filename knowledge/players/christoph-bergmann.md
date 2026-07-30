# Christoph Bergmann / Walchy (player routine)

```json
{
  "id": "christoph-bergmann",
  "name": "Christoph Bergmann / Walchy (player routine)",
  "aliases": ["Christoph_Bergmann"],
  "authors": ["Christoph Bergmann ('Walchy')"],
  "released": "1987-1991 (German/Dutch demoscene + Zeppelin Games)",
  "status": "verified",
  "platform": "German demoscener Christoph Bergmann's (handle 'Walchy', group 4XC8) own playroutine — a genuine coder/musician confirmed via his own CSDb profile, credited Code+Graphics+Linking+Music on his own one-file demos. One tune ('Zounds') was independently reused across at least 3 separate releases (2 demos plus the commercial game 'Master Blaster'), confirmed via HVSC's own STIL.txt cross-reference. Player-ID-fingerprinted across 4 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Per-title, no fixed base — read every file's own PSID header. All 4 tagged files are RSID with load address 0 in the header and the real address embedded as the payload's first 2 LE bytes: Master_Blaster $7c00-$9dff (8704 B), Master_Blaster_intro $5000-$9e01 (19970 B), Zounds $1000-$8085 (28806 B), Zounds_Demo $0dc0-$8fff (33344 B). The .sid payloads are whole game/demo images, not bare music modules — the engine is one block inside them (Master_Blaster $7c00-$8fff, Zounds $6000-$72xx plus a second copy at $1000-$13xx, Master_Blaster_intro/Zounds_Demo $5000-$5e00/$1000-$1e00).", "zero_page": "Confirmed by disassembly: only $f7,$f8,$f9,$fa — a 4-byte scratch pair used to build two 16-bit pointers. No other ZP is touched by the engine (Zounds additionally uses $03 in its demo wrapper, not in the player). One of the smallest ZP footprints in this KB.", "layout": "Engine block, then a per-tune parameter block (Master_Blaster $8ce0-$8ce5: song-start index, pattern base, CIA timer lo/hi, tempo, mode flag), then pattern/instrument tables addressed 16-byte-granular (see quirks), then digi sample data at the top of the file." },
  "entry": { "init": "PSID/RSID header init is a per-title wrapper, NOT the engine: Master_Blaster $7c00 (subtune dispatch, JSRs the real music init at $7d00, RTS), Master_Blaster_intro $5006, Zounds $8000 (demo entry, JMPs to its main loop), Zounds_Demo $0dc0 (loader, JMPs $1000). The real music init is $7d00 / $5006 / $8050+$1000 / $1000 respectively.", "play": "Header play address is $0000 on all 4 files (RSID, self-installing IRQ). Real per-frame entries recovered by disassembly: Master_Blaster $7d4b (JSRd from the hardware-IRQ handler at $7cac via $fffe/$ffff), Master_Blaster_intro $5058 (from the $0314 handler at $504a), Zounds_Demo $1058 (from $104a), Zounds $604e AND $5f80 (two routines, raster-split 2x multispeed at $d012=$00/$80)." },
  "speed": "Both CIA- and raster-driven depending on the title. Master_Blaster installs a hardware IRQ at $fffe/$ffff and runs CIA1 timer A, whose lo/hi reload values ($dc04/$dc05) come from the per-tune parameter block ($8ce2/$8ce3) — i.e. tune-selectable speed, not fixed 50 Hz. Master_Blaster_intro/Zounds_Demo use the KERNAL $0314 vector with the same CIA timer. Zounds is 2x multispeed via a raster split ($d012 toggled $00/$80, a different play routine on each half).",
  "data_format": { "order_list": "Per-tune start index and pattern base come from the parameter block; the engine walks a track pointer held in the $f7/$f8 and $f9/$fa ZP pairs.", "patterns": "Addressed via a 16-byte-granular pointer construction: `lda (zp),Y` then four `asl`/`rol <zphi>` pairs (x16) then `clc / adc #>base` — so a pattern/instrument entry index is a byte and each entry is 16 bytes, with the table base implicitly page-based. This is the engine's signature idiom (confirmed present in all 4 tagged files).", "instruments": "Same 16-byte-granular indexing off a second base (`adc #>base2`), with `and #$0f` / `ora #$30` command nibble decoding.", "wavetable": "TODO — not isolated.", "pulsetable": "Confirmed present in effect: Master_Blaster's subtune-1 trace is dominated by per-frame osc1/osc3 pulse-width-low writes (50 and 44 of 139 writes over 50 frames), i.e. a continuous PWM sweep driven from the play routine.", "filtertable": "None observed — zero writes to $d415-$d418 after the one-off $d418 volume set at init, on both Master_Blaster and Master_Blaster_intro." },
  "effects": { "encoding": "Command nibble decoded with `and #$0f / tay / sta <slot>` then `ora #$30`; a separate `and #$10` bit selects an additive (transpose/portamento-style) path. Full command table not enumerated.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE ENGINE HAS A FOREGROUND-DIGI MODE WHOSE INIT NEVER RETURNS, AND THIS IS WHY EVERY STANDARD TOOL FAILS ON THESE FILES. The music init ends `ldx <modeflag> / bpl +2 / rts / ldy #$00 / jmp <sampleloop>` — a negative flag byte selects the normal IRQ-driven music (init RTSes), a non-negative one falls into a foreground sample-playback loop that never returns. On Master_Blaster the flag is $8ce5: subtune index 1 sets it to $ff (music, RTS); subtunes 0 and 2 set it to $02 and jump to the digi loop at $85df. Master_Blaster_intro has no RTS path at all ($5045 `ldy #$00 / jmp $53c9`, unconditional). Consequence: SIDdecompiler HANGS (no output, no error, must be killed) on all 4 tagged files until the foreground jump is temporarily patched to `rts` in a working copy — see the Verification section for the exact per-file patch. Master_Blaster's music init additionally spins on `lda #$ff / cmp $dc01 / bne -5` (wait-for-no-key), which also hangs the tool's emulation.",
    "THE ENGINE IS ONLY RELOCATABLE IN WHOLE PAGES, BY CONSTRUCTION. Pattern/instrument entries are addressed 16-byte-granular by shifting a data byte left four times (`asl` / `rol <zphi>` x4) and then adding only the HIGH byte of the table base (`clc / adc #>base`) — the base's low byte is implicitly $00. A relocation control at a non-page-aligned base therefore fails on the ORIGINAL code, not because of a disassembly defect: Master_Blaster traces register-write- and cycle-exact at $2c00/$4c00/$5c00 and diverges at $5c01/$5c10/$5c37. Master_Blaster_intro is stricter still and only survives shifts that are multiples of $2000 (see Verification); the extra bit-12 dependency was reproduced deterministically but not traced to its instruction.",
    "ALL FOUR `Christoph_Bergmann`-TAGGED FILES ARE CONFIRMED TO SHARE ONE ENGINE, AND THE FOUR OTHER FILES IN THE SAME HVSC FOLDER ARE CONFIRMED NOT TO (they are SoundMonitor). Tested per lesson 68 with masked opcode patterns carrying no relocatable address operands — `a9 00 85 f9 85 f8` (ZP pointer clear), `0a 26 ?? x4` (the x16 shift), `78 ad 0d dc` (SEI / CIA ack), `29 0f a8 8d` (command-nibble decode) — requiring their RELATIVE offsets to agree. All 4 tagged files hit every pattern with the shift chain +$0d / -$27..-$28 / +$1b7..+$1c1; Flying_Shark_2, I_Hope_We_Have_a_Nice_Day, Street_Gang_intro and Ultimate_Sound_Wizard hit ZERO patterns (and instead share a 99.60%-identical $c000-$cbd3 block among themselves — SoundMonitor's player, already carded). Two engine builds exist: Master_Blaster is one variant (-$28 / +$1c1); Master_Blaster_intro, Zounds and Zounds_Demo are a second, mutually identical one (-$27 / +$1b7).",
    "THE `Zounds` TUNE-REUSE TRAIL IS ALSO VISIBLE IN THE BYTES, NOT JUST IN STIL.TXT: Master_Blaster.sid and Zounds.sid share 20 byte-runs of >=64 bytes (the longest 890 bytes) at a single consistent relocation shift of exactly $1d00 (Master_Blaster $80f7-$8fa5 == Zounds $63f7-$72a5), i.e. the same engine+data assembled at two bases. Zounds.sid contains TWO engine copies ($1071 and $6073); Zounds_Demo shares Zounds' $1000-$1d51 block byte-for-byte at shift 0.",
    "'MASTER BLASTER' (the traced file, 1988, Zeppelin Games, a commercial vertical-scrolling shoot-'em-up) IS CONFIRMED AS A TUNE REUSE, not an original score: Lemon64's own credits list (design David Baxter; programming James Doyle & Mark Hughes; graphics Peter Wolfe & Rai Harjinder; music Christoph Bergmann) note it as 'a different and shorter version of Flying Shark 2' — independently confirmed by this project's own cached STIL.txt COMMENT field on the file itself. 'Flying Shark 2' here is a FAN-MADE SEUCK game (CSDb release 19861, 1988) — explicitly NOT the same as the professional 1987 Firebird 'Flying Shark' (whose music was by Jim Evans, unrelated) — a distinction worth preserving to avoid conflation.",
    "A NAME-COLLISION RISK EXPLICITLY CHECKED AND FLAGGED: a DIFFERENT, unrelated SEUCK game also called 'Master Blaster' was published by Pirate Software/Kingsoft in Germany — Bergmann's credit is specifically on the Zeppelin Games commercial title, not that one.",
    "'ZOUNDS' IS NOT A SEPARATE GAME, but the self-titled tune of Bergmann's own 1991 one-file demo ('The Zounds! Demo', CSDb release 22345, June 1991) — on which he is credited for Code, Graphics, Linking, AND Music himself. HVSC's own STIL.txt confirms this same tune was REUSED across multiple releases: 'Also used in the game Master Blaster' and 'Also used in games Flying Shark II and Master Blaster' — a genuinely well-documented case of one tune's reuse trail, unusually thoroughly cross-referenced for this KB.",
    "CONFIRMED BOTH CODER AND MUSICIAN, per his own CSDb scener profile (id=11476, `FreelanceFunctions: [Coder, Musician]`) — he personally did Code+Graphics+Linking+Music on 'The Zounds! Demo' and Code+Music+Graphics on 'Sound-Wiz #1', both one-file demos, directly supporting a self-written driver.",
    "CSDb IDENTIFIES HIS HANDLE AS 'Walchy' (marked as his currently-used handle), German, member of group '4XC8' (a 'Music Group,' status 'ex' — former member) — could not be independently verified beyond this project's own cached CSDb data. A separate, unconfirmed later/alternate handle 'WindWalkr' appears in this project's own composer profile but was not independently corroborated via web search. Active mainly 1987-88 in the German/Dutch one-file-demo scene (Amaniac Demo, Eddie's Revenge, Umumba, The Scene of Crime, Digital Dream, Dezpot, Megarock, Our Very Best, and others).",
    "A GENUINE CO-CREDIT LINK FOUND TO AN EXISTING KB COMPOSER: on 'Street Gang' (Rainbow Arts/Time Warp Productions, 1987 — producers Armin Gessert/Marc A. Ullrich, coders Armin Gessert/Arnd Nolte, graphics Boris Kunkel/Michael Grohe), Bergmann is credited as CO-MUSICIAN alongside [[georg-brandt]] (already carded in this KB). Not encoded as a technical edge (a shared game credit, not shared driver code), but a real, sourced professional connection — [[georg-brandt]]'s own card has been updated in this same batch with this cross-reference.",
    "A LIKELY MOBYGAMES NAME-COLLISION WAS FLAGGED, NOT INCLUDED AS FACT: a MobyGames 'Christoph Bergmann' profile appears to conflate this C64-era composer with an unrelated modern games-industry person credited on Deathloop (2021) — UNCONFIRMED as the same individual, treated as a likely collision. No other interviews or first-person material were found.",
    "Not confirmed in SIDId (no entry for this tag). Direct, sourced relationship to [[georg-brandt]] noted above. No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Bergmann, Christoph - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: data/hvsc/musicians.json, data/csdb/christoph-bergmann.json, data/hvsc/STIL.txt (Zounds/Master Blaster reuse cross-reference)",
    "Lemon64 — Master Blaster (full credits, traced file): https://www.lemon64.com/game/master-blaster",
    "CSDb scener id=11476 (Walchy/Christoph Bergmann, Coder+Musician, group 4XC8): local cache",
    "CSDb release 22345 ('The Zounds! Demo', June 1991): local cache",
    "CSDb release 19861 ('Flying Shark 2 [seuck]', 1988, the fan-made game whose tune Master Blaster reused): local cache",
    "Existing KB card: knowledge/players/georg-brandt.md (the Street Gang co-credit this research surfaced)",
    "Local dataset: 4 files tagged Christoph_Bergmann, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Christoph_Bergmann` tag is German demoscener Christoph Bergmann's
('Walchy', group 4XC8) own playroutine — a confirmed coder/musician whose
'Zounds' tune was reused across at least 3 separate releases, including
the commercial game 'Master Blaster'. Player-ID-fingerprinted across 4
files, all his own; all 4 confirmed by disassembly (2026-07-30) to share
one engine, in two builds.

Technically it is a small, hand-written, dual-mode routine: a 4-byte
zero-page footprint (`$f7-$fa`), 16-byte-granular pattern/instrument
indexing built by shifting a data byte four times and adding only a page
base, CIA- or raster-driven depending on the title (Zounds is 2x
multispeed via a raster split), and — unusually — a **foreground digi
mode** whose init deliberately never returns, which is why the tag's
files defeat every standard PSID tool.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: an unusually
**well-documented tune-reuse trail** (Zounds → 2 demos + a commercial
game, cross-confirmed via STIL.txt), the **confirmed self-coded driver**
via his own CSDb profile, and a **genuine co-credit link** to
[[georg-brandt]] (already carded in this KB) via the 1987 game 'Street
Gang' — [[georg-brandt]]'s own card has been updated to cross-reference
this same finding.

## Disassembly notes

No published source (not in the realdmx RE repo, no STIL note beyond the
COMMENT reuse trail already cited). Everything in the JSON block above is
this project's own disassembly, produced 2026-07-30 — see Verification.

## Verification

**Reconstructed and verified (2026-07-30) — `status: verified`, with the
scope stated precisely below. Two of the four tagged files are fully
closed (byte-exact plus a passing non-tautological relocation control);
one is byte-exact over a third of its payload with a control that passes
only at certain bases; one is byte-exact but its control FAILS and is
therefore NOT claimed as verified.**

### Getting the tool to run at all

SIDdecompiler hangs (0 bytes of output, no error, must be killed) on all
four files, because each one's init falls into a never-returning
foreground digi loop (see quirks). Working copies were patched, and every
patched byte was restored before the byte-diff, so all percentages below
are against the **pristine** HVSC files:

| file | patch in the working copy | flags |
|---|---|---|
| Master_Blaster.sid | `$7d16-$7d17` `d0 fb` -> `ea ea` (kills a `cmp $dc01` wait spin) | `-P32075 -1 -s1 -a31744` |
| Master_Blaster_intro.sid | `$5045` `a0` -> `60` (RTS instead of `ldy #0 / jmp $53c9`) | `-I20486 -P20568 -a788` |
| Zounds.sid | `$801f-$8021` `4c aa 68` -> `60 ea ea` | `-I32768 -P24654 -1 -s0 -a788` |
| Zounds_Demo.sid | `$102c` `4c` -> `60` | `-I4096 -P4184 -a3617` |

All runs used `-z -d -c -r` and `64tass -a --cbm-prg`. Relocation bases
are the `-v2` map's own `Start:` address per gotcha 40 — `$0314` for
Master_Blaster_intro and Zounds (the KERNAL IRQ vector, a fixed low-RAM
write far below the load address), `$0e21` for Zounds_Demo, `$7c00`
(== load address) for Master_Blaster.

### Byte-diff (all against the pristine HVSC file)

| file | compared / payload | identical | diffs |
|---|---|---|---|
| Master_Blaster.sid | 8704 / 8704 | **100.0000%** | 0 |
| Zounds.sid | 28806 / 28806 | **100.0000%** | 0 |
| Zounds_Demo.sid | 33247 / 33344 | **100.0000%** | 0 (`$0dc0-$0e20`, 97 B, is below the traced Start and not emitted) |
| Master_Blaster_intro.sid | 6528 / 19970 | **100.0000%** | 0 (traced End is `$697f`; `$6980-$9e01` is digi sample data reached only from the foreground loop that had to be patched out) |

### Non-tautological relocation control

`-r` makes the native build byte-identical to the original, so an
identical trace would be guaranteed by construction. Each disassembly was
therefore rebuilt at other bases and traced against the original
(`sidm2-sid-trace.exe`, 50 frames, compared on `frame,register,old,new`
**and** on the cycle column):

| file | control bases | bytes differing | writes | divergences |
|---|---|---|---|---|
| Master_Blaster.sid (subtune 1) | `$2c00`, `$4c00`, `$5c00` | 145 / 8704 | 139 | **0** at all three, cycle-exact |
| Zounds.sid (play `$604e`) | `+$2000`, `+$4000` | 178 / 28806 | 189 | **0** at both, cycle-exact |
| Master_Blaster_intro.sid | `+$2000`, `+$4000`, `+$6000` | 138 / 6528 | 228 | **0** at all three, cycle-exact |
| Zounds_Demo.sid | `+$2000`, `+$4000` | — | 94 vs 21 | **FAILS** (73 tuple divergences) |

Clean relocated evidence produced this run: **556 register writes across
3 files at 8 different bases, 0 divergences including cycle timestamps.**

### Where it does not close, precisely

1. **Master_Blaster.sid is only relocatable in whole pages.** `$5c01`,
   `$5c10` and `$5c37` all diverge; `$2c00`/`$4c00`/`$5c00` are exact.
   This is a property of the original code (`clc / adc #>base` page
   arithmetic, quirk 2), confirmed by the relocated builds changing the
   *same* 145 operand bytes whether they pass or fail.
2. **Master_Blaster_intro.sid additionally requires bit 12 of the base to
   be set.** Measured: base `$5000` (native), `$7000`, `$9000`, `$b000`
   pass with 0 divergences; `$6000`, `$8000`, `$a000` and `$5100` all
   produce the *identical* wrong trace (243 writes, 120 tuple
   divergences, first at frame 5 `osc1_freq_hi $39` vs `$3b`). The
   determinism rules out corruption, and it is not a stray absolute
   literal (the only 16-bit literals in the `.asm` are `$0314` and
   `$d4xx`/`$dc0d`/`$d0xx` hardware). **Not localised to an instruction.**
   Next lead: `l50e5`'s `clc / adc #>l605b+1` and `l5140`'s
   `adc #>l5e00` are the two page-arithmetic sites; instrument one at a
   time in a `$6000` build and watch which one produces the frame-5
   `osc1_freq_hi` value.
3. **Zounds_Demo.sid's relocation control fails at both tested bases**
   (94 -> 21 writes). Byte-exactness is real but unconfirmed
   independently, so this file is **not** part of the verified claim.
   Next lead: it is the only file whose traced `Start:` (`$0e21`) sits
   *above* its load address (`$0dc0`) — check whether the play routine
   reads anything in the dropped 97-byte `$0dc0-$0e20` head, and whether
   the partially-symbolised `.byte $c6, <l1e02` pattern-data lines
   (SIDdecompiler mistaking note bytes for low-byte pointer references,
   227 such lines) are being relocated when they should be literals.
4. **Coverage is engine-only, as expected for whole-game images.**
   Instruction bytes vs total in the compared window: Master_Blaster 887
   / 8704 (10.2%), Master_Blaster_intro 824 / 6527 (12.6%), Zounds 966 /
   28812 (3.4%). The rest is graphics/sample/pattern data passed through
   verbatim by `-d`. Per lesson 65 this is stated rather than glossed —
   the byte-diff measures the whole payload, the reconstruction covers
   the engine.
5. **Zounds' second raster-half routine (`$5f80`) was not traced** —
   `sidm2-sid-trace.exe` calls one play per frame, so only `$604e` is
   covered. A full 2x-multispeed comparison needs a tracer that
   alternates the two entries.

Scratch work: `<temp>/christoph-bergmann/` (asm, prg, csv traces, and the
`sig.js` masked-opcode scanner used for the family test).

## Sources

See the `sources` array — HVSC Musicians.txt, local dataset caches (3),
Lemon64, CSDb (2 releases), and the related georg-brandt card.
