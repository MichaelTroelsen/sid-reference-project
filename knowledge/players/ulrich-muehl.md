# Ulrich Mühl (player routine)

```json
{
  "id": "ulrich-muehl",
  "name": "Ulrich Mühl (player routine)",
  "aliases": ["Ulrich_Muehl"],
  "authors": ["Ulrich Mühl"],
  "released": "1986-1987",
  "status": "verified",
  "platform": "German composer Ulrich Mühl's playroutine — 5 small, likely self-published type-in-listing games (typical of German computer-magazine listings of the era, matching this project's own 1987 active-year data), circumstantially but not conclusively linked to a later-career German games-magazine editor of the same name (ASM, Amiga Joker, Power Play). No CSDb scener profile exists. Player-ID-fingerprinted across 5 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Per-file, read from each PSID header (all 5 use header load=0, real address embedded as the payload's first 2 LE bytes): Blaster $86c0-$9624, Job_Race $c400-$cbff, Megabouncers $c1f3-$cc40, Projekt_A_I_D_S $c000-$c627, Startrip $c000-$cb17.", "zero_page": "Gen C (Blaster, Megabouncers): $b2/$b3 (voice-3 stream pointer), $f7/$f8 (voice 1), $f9/$fa (voice 2) — three 16-bit stream pointers. Gen B (Startrip): $f7/$f8, $f9/$fa, $fb/$fc. Gen A (Job_Race): $fa/$fb (copy source), $fc/$fd (copy destination) — used only by init's block copy; the play routine is fully absolute-indexed. Gen A (Projekt_A_I_D_S): no zero page at all.", "layout": "Three-voice engines, one contiguous block per file. Gen A (Projekt_A_I_D_S $c000): play $c000, per-voice event stream pages $c100/$c200/$c300, per-voice state $c0f9-$c0ff, init $c14b, subtune tables $c1c1-$c1d0. Gen A (Job_Race $c400 code, with a $c000-$c3ff runtime workspace BELOW the load address): play $c400, init $c518, subtune-page table $c580, packed song banks $c600 and $c900 copied to $c000-$c2ff at init, state $c3b8-$c3ff. Gen C (Blaster $86c0): play $9000, per-voice fetch subroutines $905c/$90cc/$913c, init $9xxx, lo/hi order-list pointer tables at $8c00 (v3) / $8d00 (v2) / $8e00 (v1) with index bytes at $8efd-$8eff, state $8f00-$8f0x and $8ffa-$8fff. Gen C (Megabouncers $c1f3): play $c200, fetch subroutines $c243/$c29a/$c2f1, init $c6c2, single looping stream per voice at $c800/$ca00/$cc00, state $c1f4-$c1ff and $c701-$c7xx. Gen B (Startrip $c000): init $c000, play $c02b, streams at $ca00 (v1) / $c900 (v2) / $c700 (v3), state $caff-$cb17." },
  "entry": { "init": "Per file, from the PSID header (all confirmed as real code by disassembly + trace): Blaster $8f1a, Job_Race $c518, Megabouncers $c6c2, Projekt_A_I_D_S $c14b, Startrip $c000.", "play": "Blaster $9000, Job_Race $c400, Megabouncers $c200, Projekt_A_I_D_S $c000, Startrip $c02b. Note Job_Race/Projekt_A_I_D_S/Startrip place play at or adjacent to the load address and init above it." },
  "speed": "All 5 files are PSID v2, PAL, 6581 (flags $14). The PSID speed word is 1 on Blaster/Megabouncers/Startrip and 3 on Job_Race/Projekt_A_I_D_S — i.e. every subtune is flagged CIA-timer-driven, not VBI. Megabouncers is the only file that programs the timer itself (init writes $dc04=$32, $dc05=$53 → Timer A = $5332 = 21298 cycles, ~46.2 Hz on PAL). Single-speed; one play call per period.",
  "data_format": { "order_list": "Only Blaster (Gen C) has one: three lo/hi pointer tables ($8e00 v1, $8d00 v2, $8c00 v3), each with its own byte index at $8eff/$8efe/$8efd. The play routine reads a lo/hi pair, stores it into the voice's ZP stream pointer, and advances the index by 2; a fetched high byte of $00 is the end marker and resets the index to 0 (infinite loop). Megabouncers, Startrip, Job_Race and Projekt_A_I_D_S have no order list — each voice plays one looping stream, restarted by reloading a fixed page address.", "patterns": "Flat per-voice event streams, fixed-width records, terminated by a $00 first byte which restarts the stream (Gen B/C) or resets the index to 0 (Gen A). Projekt_A_I_D_S (Gen A, 4 bytes/event): freq_hi, freq_lo, duration, waveform — confirmed against the raw data at $c100: `08 b4 c0 11` = $08b4 pitch, $c0 frames, waveform $11 (triangle+gate). Job_Race (Gen A, 5 bytes/event): the same four plus a pulse-width slide rate stored at $c3fb. Blaster and Megabouncers (Gen C, 5 bytes/event) fetch via a per-voice `jsr` byte-getter. Startrip (Gen B, 5 bytes/event) inlines the same fetch four to five times per voice with manual `inc zp` / carry into the high byte.", "instruments": "No instrument table — ADSR is set once per voice in init from immediate constants (Gen A: $d405/$d406, $d40c/$d40d, $d413/$d414; Projekt_A_I_D_S reads them from per-subtune tables at $c1c5-$c1d0) and never changed during playback. The per-event waveform byte is the only timbral control in the stream.", "wavetable": "None. The waveform byte is written straight to $d404/$d40b/$d412; the routine writes $00 to the control register first (gate off) then the new value, i.e. an unconditional 1-frame hard restart on every event.", "pulsetable": "No table. Gen A instead runs a per-frame arithmetic pulse-width slide: Job_Race does `lda pw / sbc rate / sta $d402 / sta pw` with the per-event rate byte; Projekt_A_I_D_S derives pulse width from the raster register (see quirks).", "filtertable": "None. $d417 and $d418 are written once in init only (typically $d417=$00, $d418=$0f). The 2 filter writes seen in a 170-write/50-frame Blaster sample are `sta $d3ff,X` indexed stores hitting $d415/$d416 during init, not a runtime filter sweep." },
  "effects": { "encoding": "There is no command/effect byte. All expression is carried by the fixed-width event record (pitch, duration, waveform) plus one optional per-event slide-rate byte in the Gen A/Job_Race variant. No portamento, vibrato, arpeggio or transpose opcode exists in any of the 5 files.", "commands": { "$00 (first byte of an event)": "Stream terminator — Gen A resets the voice's X index to 0, Gen B/C reload the voice's ZP pointer with a fixed page (or, on Blaster, advance the order list).", "per-event byte 5 (Job_Race only)": "Pulse-width slide rate, subtracted from the running PW value once per frame and written to $d402/$d409/$d410." } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE PSID HEADERS' OWN `released` FIELDS SETTLE THE 'TYPE-IN LISTING' HYPOTHESIS THAT EARLIER PASSES COULD ONLY CALL CIRCUMSTANTIAL — all 5 name a Tronic Verlag magazine directly: Blaster/Job Race/Startrip '1987 Compute mit/Tronic Verlag', Megabouncers '1987 Computronic/Tronic Verlag', Projekt A.I.D.S. '1986 Homecomputer/Tronic Verlag'. That is exactly the publisher the C64-Wiki candidate-identity biography names (games sent to Compute mit, Tronic-Verlag, published as listings around 1987), and it also corrects the card's own date range: Projekt A.I.D.S. is 1986, not 1987.",
    "THIS TAG IS NOT ONE PLAYROUTINE BUT THREE GENERATIONS OF ONE AUTHOR'S OWN CODE, confirmed by disassembly and by a lesson-68 relative-offset opcode scan over the raw payloads (patterns chosen with no address operands / hardware-fixed operands only). Gen A (Projekt A.I.D.S. 1986, Job Race 1987): X-indexed absolute reads `bd lo hi / 8d 01 d4 / e8 / bd lo hi / 8d 00 d4 / e8` at EXACTLY play+$14 in both files, with the stream-restart idiom `a9 00 aa 8d` at play+$0e in both — identical relative offsets, different absolute bases. Gen C (Blaster, Megabouncers 1987): a per-voice byte-fetch subroutine `a0 00 b1 zp aa e6 zp a5 zp c9 00 d0` (3 copies, one per voice) plus the play-head idiom `a9 00 8d xx xx 8d 04 d4 20` at EXACTLY play+$08 in both. Gen B (Startrip 1987): the same fetch logic inlined 12 times (4 per voice) instead of subroutined; matches neither Gen A nor Gen C. Per-voice block spacing differs within a generation ($70 Blaster vs $57 Megabouncers; $5b Job_Race vs $3c Projekt) because the later file in each pair adds features, so a longest-common-substring scan would NOT have detected the relationship — the offset-identity test did.",
    "PROJEKT A.I.D.S. USES THE VIC RASTER REGISTER $D012 AS A LIVE NOISE SOURCE, and self-modifies its own opcode to switch it on per subtune: init writes a byte from the table at $c1c3 over the instruction at $c0b4 — $60 (RTS, subtune 0, feature off) or $ad (LDA absolute, subtune 1, feature on). When on, the routine does `lda $d012 / sta $d402 / eor #$ff / sbc $d012 / adc #$10 / sta $d407 / sta $d408`, i.e. voice-1 pulse width and voice-2 frequency are driven straight from the current raster line. Megabouncers does a tamer version (`lda $d012 / and #$3f` accumulated into a pulse-width counter). Consequence for anyone re-verifying this card: Projekt A.I.D.S. subtune 1 is NOT cycle-position-invariant — relocating the code by a non-page-multiple shifts page-crossing penalties by a few cycles, which flips the raster line read by +/-1 and changes the emitted register values by 1. Relocation controls for this player must use a page-aligned (zero-low-byte) delta.",
    "TWO FILES ARE STRUCTURALLY PAGE-ALIGNMENT-DEPENDENT BY DESIGN, which is why an unaligned relocation control legitimately fails on them. Job_Race's init does `ldy #<$c600 / sty srclo / sty dstlo` and then `lda (src),Y / sta (dst),Y / iny / bne` — the copy loop relies on Y starting at $00 and wrapping, so at any non-page base it copies only $100-delta bytes per page. Projekt A.I.D.S.'s init patches ONLY the high bytes of the play routine's absolute operands (`sta $c00b+2,Y` etc., Y stepping $00/$3c/$78 for the three voices) from a per-subtune page table at $c1c1, so the low bytes must already be correct — again only true at a page-aligned base.",
    "JOB RACE IS A BANK-SWITCHING FILE whose SIDdecompiler `-v2` map Start ($c000) sits a full 1024 bytes BELOW its PSID load address ($c400). This is neither lesson-31 fixed low-RAM workspace nor lesson-62's copy-of-the-whole-player: init selects a subtune, reads its source page high byte from the 2-entry table at $c580 (`>$c600` or `>$c900`), and block-copies 3 pages of song data down into $c000-$c2ff, where the play routine then reads it with `lda $c000,X` / `lda $c100,X` / `lda $c200,X`. Player state lives in the same sub-load-address region at $c3b8-$c3ff. The correct relocation base is the `-v2` Start ($c000), not the PSID load address.",
    "HVSC AND THIS PROJECT'S OWN DEEPSID DUMP CACHE CONFIRM 'Mühl, Ulrich - GERMANY', no group affiliation. The project's own cached profile adds `active: 1987`, `date_birth: 1969-04-11`, `focus1: PRO` — but no CSDb scener match (`csdb_id: 0`).",
    "A DATA-QUALITY ISSUE IN THIS PROJECT'S OWN CACHED CSDb IDs WAS FOUND AND MUST BE FLAGGED: each of his 5 file records carries a `csdb_id` (51862, 48945, 51861, 51863, 51864) that, when fetched directly, resolves to COMPLETELY UNRELATED CSDb releases ('Check This' by House Designs, 'Clystron Zax' by Creatures, a 'Xama' crack by Stardom, etc.) — none mentioning Mühl at all. These IDs are bogus/mismatched in the DeepSID dump and must NOT be trusted or used as CSDb release links for this composer, in this card or elsewhere.",
    "NO GAME, DEMO, OR PUBLISHER CREDIT WAS FOUND for any of his 5 titles (Blaster, the traced file; Job Race; Megabouncers; Projekt A.I.D.S.; Startrip) in Lemon64, MobyGames, or CSDb — none read as commercial releases. Their profile (small, self-authored, 1987, no publisher) is consistent with German computer-magazine type-in listing games of the era rather than commercial products.",
    "A CIRCUMSTANTIAL BUT UNCONFIRMED IDENTITY LINK to a later-career German games-magazine figure: a German C64-Wiki biography and a Kultboy.com interview (fetch blocked, HTTP 403, content unverified) describe an Ulrich Mühl (per C64-Wiki, born 1970 — a minor discrepancy against the project's own cached 1969-04-11 birthdate) who was self-taught in BASIC/Assembler on a datasette-equipped C64, sent early games to Compute mit magazine (Tronic-Verlag) which published some as type-in listings around 1987, and went on to become deputy/chief editor at ASM, Gamers, Total!, later founding Studio Mühl (game localization) and Ohrwerk Audio; died 23 February 2022. The SAME NAME, SAME COUNTRY, and SAME 1987 self-publishing-listing-game profile make this PLAUSIBLE, but the C64-Wiki text fetched contains NO EXPLICIT STATEMENT that this magazine-editor Ulrich Mühl composed SID/chip music himself — only that he programmed games. Explicitly flagged as circumstantial, not a confirmed single-source match.",
    "NO CSDb SCENER PROFILE EXISTS (confirmed via direct search, matching the project's own `csdb_id: 0`) and no verified first-person interview content was retrievable (the one located interview 403'd on fetch) — genuinely thin sourcing beyond the identity-candidate biography above.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Mühl, Ulrich - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: data/composers/ulrich-muehl.json (DeepSID dump snapshot — active/birthdate fields, and the flagged bogus csdb_id values)",
    "C64-Wiki (DE) — Ulrich Mühl (candidate identity biography, magazine career): https://www.c64-wiki.de/wiki/Ulrich_M%C3%BChl",
    "Kultboy.com — Ulrich Mühl interview (fetch blocked, content unverified): https://www.kultboy.com/Ulrich-Muehl-Interview/20/",
    "Kultboy.com — memorial notice, 3/2022 (unverified): https://www.kultboy.com/index.php?site=pic&id=5317&s=30",
    "Local dataset: 5 files tagged Ulrich_Muehl, 1 composer (see knowledge/COVERAGE.md)",
    "Original disassembly (2026-07-30) of all 5 HVSC files at MUSICIANS/M/Muehl_Ulrich/ via SIDdecompiler 0.8 + 64tass, verified byte-exact and register-write-exact against sidm2-sid-trace.exe — see Verification",
    "PSID header `released` fields of the 5 files themselves (Tronic Verlag magazine credits: Compute mit, Computronic, Homecomputer)"
  ]
}
```

## Overview

The `Ulrich_Muehl` tag covers **three generations of one German
hobbyist's own playroutine**, 1986-1987, across 5 magazine type-in
listing games. The PSID headers name the publisher outright (Tronic
Verlag's *Compute mit*, *Computronic* and *Homecomputer*), which turns
the earlier passes' circumstantial "probably a type-in listing"
inference into a documented fact.

All three generations share the same minimal design: three independent
per-voice event streams of fixed-width records (pitch hi, pitch lo,
duration, waveform, optionally a slide rate), `$00` as the stream
terminator, ADSR set once at init, and a gate-off/gate-on hard restart
on every event. There is no command byte, no wavetable, no pulse table
and no filter table anywhere in the family. What changes between
generations is only *how the stream is read*: absolute `lda table,X`
(Gen A, Projekt A.I.D.S. + Job Race), inlined `(zp),Y` with manual
pointer increment (Gen B, Startrip), or a shared `jsr` byte-getter
(Gen C, Blaster + Megabouncers). Only Blaster ever grew an order list.

## Quirks & gotchas

See the `quirks` array. The most reusable ones: the PSID `released`
fields carrying the magazine/publisher credit; the three-generation
split and the lesson-68 offset test that proves it (longest-common-
substring would have missed it); Projekt A.I.D.S.'s `$d012` raster-line
noise source, switched on per subtune by self-modifying its own opcode
between `RTS` and `LDA abs`; and two files that are page-alignment-
dependent in the original source. The pre-existing **data-quality
catch** also still stands: this project's own cached CSDb IDs for all 5
files are bogus, resolving to unrelated releases — do not reuse them.
The candidate later-career identity match remains circumstantial, but
the Tronic Verlag credit in the file headers strengthens it materially.

## Disassembly notes

None published. The disassembly behind this card is original, produced
2026-07-30 with `SIDdecompiler` + `64tass` on all 5 tagged HVSC files.

Three code generations share one author's design (see `quirks`): a flat
per-voice event stream, fixed-width records, `$00` as the stream
terminator, ADSR fixed once in init, and an unconditional gate-off /
gate-on hard restart on every event. No wavetable, no pulse table, no
filter table, no command/effect byte anywhere in the family. The only
runtime modulation is Job Race's arithmetic pulse-width slide and
Projekt A.I.D.S.'s raster-register noise trick.

Note when grepping these disassemblies: Blaster, Megabouncers and
Startrip all write the SID through `sta $d3ff,X` (indexed, `$9d`), so a
literal-operand grep for `$d400`/`$d401` misses most of the register
writes (lesson 65's trap).

## Verification

**Byte-exact and trace-exact on all 5 tagged files (2026-07-30) —
`status: verified`.**

Method: `SIDdecompiler.exe <file>.sid -a<decimal of the -v2 map's own
"Start:" address> -z -d -c -r`, then
`64tass.exe -a --cbm-prg -o out.prg out.asm`; traced with
`sidm2-sid-trace.exe` (writes its CSV to stderr).

**Byte-diff — 100.0000% on every file**, over the whole
`SIDdecompiler`-covered range:

| file | relocation base (`-v2` Start) | compared range | bytes | match |
|---|---|---|---|---|
| Blaster | `$86c0` (= load) | `$86c0-$9622` | 3939 | 100.0000% |
| Job_Race | `$c000` (load is `$c400`) | `$c400-$cbff` | 2048 | 100.0000% |
| Megabouncers | `$c1f4` (load is `$c1f3`) | `$c1f4-$cc3c` | 2633 | 100.0000% |
| Projekt_A_I_D_S | `$c000` (= load) | `$c000-$c624` | 1573 | 100.0000% |
| Startrip | `$c000` (= load) | `$c000-$cb17` | 2840 | 100.0000% |

Bytes outside those ranges are genuinely untouched by the emulated
trace and are not reconstructed: Blaster `$9623-$9624` (2), Megabouncers
`$c1f3` (1 leading) and `$cc3d-$cc40` (4), Projekt A.I.D.S.
`$c625-$c627` (3). Job Race and Startrip are covered end to end.

**The tautology problem, and the control that answers it.** With `-r`
the reassemblies are byte-identical to the originals, so tracing them
against the originals proves nothing by construction. Two independent
**page-aligned relocation controls** were therefore built from the same
disassemblies (deltas `-$4000` and `-$2000`) and traced against the
original at shifted init/play, 120 frames, every subtune:

| file | subtunes | writes/side | bytes differing at same offset | diffs (`-$4000`) | diffs (`-$2000`) |
|---|---|---|---|---|---|
| Blaster | 1 | 798 | 276/3939 | 0 | 0 |
| Job_Race | 2 | 545 + 540 | 1513/2048 | 0 | 0 |
| Megabouncers | 1 | 563 | 1767/2633 | 0 | 0 |
| Projekt_A_I_D_S | 2 | 171 + 523 | 50/1573 | 0 | 0 |
| Startrip | 1 | 568 | 119/2840 | 0 | 0 |

**0 divergences out of 3,708 register writes per side, at both control
bases, and cycle-exact as well** (page-aligned deltas preserve
page-crossing penalties). Corroboration of the prior pass's figure: the
original Blaster at 50 frames still gives exactly **170 writes, 2 of
them filter** — unchanged.

Three manual edits to `SIDdecompiler`'s output were needed, each a
tool-output defect rather than a disassembly error:

1. **Startrip, `lda $02`** — the original encodes it 3-byte absolute
   (`ad 02 00`); 64tass re-encodes the symbol zero-page, dropping one
   byte and silently shifting every label past it by 1 (native byte-diff
   58.01% before the fix, 100.0000% after). Fixed with 64tass's `@w`
   prefix: `lda @w z02`. **Needed for the native build**, not just the
   control.
2. **Job Race, `lda #$c0`** — the hardcoded destination page of init's
   block copy (see `quirks`). `SIDdecompiler` leaves it an immediate
   constant, so a relocated build copies the song data to `$c000` while
   the play routine reads the relocated address. Fixed to
   `lda #>lc000`. Relocation-only (byte-identical at the native base).
3. **Megabouncers, `.byte $ee, $04, $c7`** — an `inc $c704` that is the
   fall-through of `bcc`, misclassified as "Unreferenced data" and
   emitted with a hardcoded address, so it does not relocate. Fixed to
   `inc lc704`. Relocation-only; before the fix the control diverged by
   exactly one write (`osc1_pw_hi`) at frame 42.

**Scope limits, stated explicitly.** (a) The controls are page-aligned
by necessity: two of the five files (Job Race, Projekt A.I.D.S. subtune
1) are page-alignment-dependent in the *original source*, and Projekt
A.I.D.S. subtune 1 additionally reads `$d012` raw, so a non-page-aligned
delta legitimately changes its output (both mechanisms documented in
`quirks`). Non-aligned controls at `-$3fc9` were run and did diverge on
exactly those two, cleanly on the other three. (b) The relocation
control proves the *reached* code is source-derived; each file also
carries substantial pass-through "Unreferenced data" (Blaster 1978 of
3939 bytes, Megabouncers 1305, Startrip 1295, Projekt A.I.D.S. 1014,
Job Race 358), some of which is real but unreached code with hardcoded
addresses — the Megabouncers fix above is proof that class exists.
Instruction-line counts for the reached engine: Blaster 515, Startrip
380, Megabouncers 274, Job Race 164, Projekt A.I.D.S. 135.

## Sources

See the `sources` array — HVSC Musicians.txt, local dataset cache,
C64-Wiki (DE), and Kultboy.com (2 pages, unverified).
