# Paul Mudra (Westwood driver)

```json
{
  "id": "paul-mudra",
  "name": "Paul Mudra (Westwood driver)",
  "aliases": ["Paul_Mudra"],
  "authors": ["Paul Mudra"],
  "released": "1987-1989 (Westwood Associates era; earliest carded file is Roadwar Europa, 1987 SSI)",
  "status": "verified",
  "platform": "American sound designer Paul Mudra's C64 driver, used at Westwood Associates (later Westwood Studios) — he went on to a long, well-documented industry career (Command & Conquer/Red Alert audio direction, later Insomniac Games audio director on Ratchet & Clank and Marvel's Spider-Man). He is confirmed as audio-side only across ~50 titles, never a coder. Player-ID-fingerprinted across 6 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "PER-FILE, NOT FIXED — read every file's own PSID header. Verified 2026-07-30 across all 6 HVSC files: Roadwar_Europa $4900, Hillsfar $308c, DragonStrike $6fc2, Battletech $963f, Mars_Saga $e300, A_Nightmare_on_Elm_Street $13c0. The engine is assembled fresh per title at whatever address the host game had free.", "zero_page": "$1a-$3f, verified by disassembly. Three 16-bit per-voice stream pointers $1a/$1b, $1c/$1d, $1e/$1f; $20/$21 = working copy of the pointer for the voice currently being ticked. Then seven 3-byte per-voice arrays (index = voice 0/1/2): $22-$24 tempo/duration multiplier (init $01), $25-$27 loop-counter 1, $28-$2a loop-counter 2, $2b-$2d note-duration countdown, $2e-$30 legato/tie flag, $31-$33 vibrato-enable flag, $34-$36 current waveform (init $10), $37-$39 note freq lo, $3a-$3c note freq hi. Scalars: $3d = player-active flag (zeroed at start of init, INCed to 1 at the end; play RTSes early while 0), $3e = current voice index, $3f = current SID voice register offset from a 3-byte table {$00,$07,$0e}. A_Nightmare_on_Elm_Street additionally uses $fb-$fe as source/dest pointers in its one-shot init block-copy, nowhere else.", "layout": "~540-840 bytes of engine code (403 instructions in the fullest -C1 disassembly) plus two 96-entry note-frequency tables (lo, hi) and per-file song data. A 2-bit free-running frame counter lives in a single byte at/near the file's load address (e.g. $6fc2 in DragonStrike, $4932 in Roadwar) and drives vibrato. Sub-load-address/out-of-file scratch is file-dependent: Hillsfar writes a working block at $178c-$17bf and a large buffer at $c000-$c84f, both outside its own payload." },
  "entry": { "init": "PSID init, A = subtune. Per-file: Roadwar $4900, Hillsfar $4160, DragonStrike $73dc, Battletech $a7ed, Mars_Saga $eedb, Nightmare $13c0. Body: A*2 indexes an interleaved lo/hi song-header pointer table (A=0 falls back to a hardcoded default header). The header is 6 bytes = three 16-bit voice-stream pointers. Per voice: $ffff = LEAVE THIS VOICE RUNNING UNTOUCHED (the SFX-over-music layering hook), $0000 = silence it, anything else = start it. Some builds add a priority gate that spin-waits for the currently playing cue to finish before taking over.", "play": "PSID play, called once per frame. Per-file: Roadwar $492f, Hillsfar $31b6, DragonStrike $70a0, Battletech $a803, Mars_Saga $eee3, Nightmare $4993 (that one is inside a runtime-copied image, not in the file's own address range). Ticks voices 0,1,2 in order, then advances the 2-bit vibrato frame counter." },
  "speed": "1x (50 Hz / once per frame). PSID speed flags = $0 on all 6 files, all subtunes; no CIA or multispeed path in the engine.",
  "data_format": { "order_list": "No separate order list. Subtune number -> byte table -> song id -> *2 -> interleaved lo/hi 16-bit pointer table -> 6-byte song header (three 16-bit voice-stream pointers). Each voice then plays one flat byte stream; repetition is done with the in-stream loop-counter commands ($cd/$ce and $d1/$d2), not with a pattern matrix.", "patterns": "Flat per-voice byte stream, verified in the -C1 disassembly of DragonStrike ($7170 dispatcher). $01-$7f = note index into the two 96-entry frequency tables, followed by a duration byte. $00 = rest/no retrigger, also followed by a duration byte. $80-$ff = command (see effects.commands). Duration byte: bit7 set = legato/tie (bit stripped, per-voice $2e flag set, suppresses the end-of-note gate-off); the remaining value V gives a countdown of tempo*(V+1)-1 frames, computed by a repeated-add loop whose ADC immediate operand is self-modified. Gate-off fires on the frame the countdown expires, unless the tie flag is set; if the next stream byte is $00 the frequency registers are zeroed too.", "instruments": "No instrument table. Timbre is set inline by stream commands: $c2 waveform, $c4 ADSR, $c3 pulse width. The waveform byte is stashed per-voice in $34-$36 and re-emitted (ORed with $01) on every note-on via a self-modified LDA immediate.", "wavetable": "None — no wavetable/arpeggio table in the engine.", "pulsetable": "None. Pulse width is a one-shot stream command ($c3 lo hi -> $d402/$d403); there is no per-frame pulse sweep.", "filtertable": "None. Filter is a one-shot stream command only ($c7 nn -> $d418, which sets filter mode AND master volume in the same byte). No filter cutoff/resonance ($d415-$d417) write exists anywhere in the engine, which is why traces show at most a single 'filter' write per cue." },
  "effects": { "encoding": "Single-byte command opcodes in the $80-$ff range, inline in the voice stream, each followed by 0-2 argument bytes. Dispatch is a linear CMP #imm / BNE chain (no jump table). Any $80-$ff value not matched falls through to a default handler that repoints the voice at a small built-in fallback sequence rather than crashing.", "commands": { "$c2 nn": "Set this voice's waveform ($34+voice).", "$c3 lo hi": "Set pulse width -> $d402,X / $d403,X.", "$c4 ad sr": "Set ADSR -> $d405,X / $d406,X.", "$c7 nn": "Write nn to $d418 (filter mode + master volume).", "$cd nn": "Set loop-counter 1 ($25+voice) = nn.", "$ce lo hi": "Decrement loop-counter 1; if still non-zero jump the voice stream to lo/hi, else skip the 2 address bytes.", "$d1 nn": "Set loop-counter 2 ($28+voice) = nn.", "$d2 lo hi": "Decrement loop-counter 2; if still non-zero jump the voice stream to lo/hi, else skip.", "$db": "Vibrato ON for this voice ($31+voice = 1).", "$dc": "Vibrato OFF for this voice ($31+voice = 0).", "$e2 nn": "Set tempo = nn for ALL THREE voices ($22/$23/$24) — global, not per-voice.", "$e6 lo hi": "Set this voice's frequency directly to lo/hi (raw pitch override), writing $d400,X/$d401,X immediately.", "$e8 nn": "Tempo -= nn (all three voices).", "$e9 nn": "Tempo += nn (all three voices).", "$ff": "End of stream — zero the voice pointer, zero its frequency, stop ticking it." } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE CARD'S OWN OLD `memory.load_address` PROSE WAS A SINGLE-FILE FIGURE, NOT A FAMILY FACT. All 6 files load at 6 different addresses ($13c0/$308c/$4900/$6fc2/$963f/$e300) and all 6 have different init/play addresses — the engine is reassembled per host game at whatever address was free. Always read each file's own PSID header; there is no canonical Mudra load address.",
    "A_NIGHTMARE_ON_ELM_STREET.SID'S PSID PLAY ADDRESS ($4993) IS OUTSIDE ITS OWN PAYLOAD ($13c0-$2250) AND THIS IS CORRECT, NOT A BROKEN RIP. Its init at $13c0 copies 997 bytes from $1e6c-$2250 to $48da-$4cbe via a $fb/$fd indirect loop, and the engine then runs from the copy; $4993 is inside it. Consequence for reconstruction: with SIDdecompiler's `-r` the copy destination is re-zeroed, so the engine is emitted as `.byte` pass-through and only 62 bytes / 32 instructions of real disassembly land inside the file's own address range — the file's 100% byte-diff is therefore mostly data pass-through, and its relocation-invariance test fails by construction because the copy DESTINATION is hardcoded while the source relocates.",
    "VIBRATO IS A 4-FRAME, PITCH-PROPORTIONAL SQUARE WOBBLE WITH NO DEPTH PARAMETER. A single global 2-bit frame counter (one byte at/near the load address) drives all three voices in lockstep: phase 1 = freq+delta, phase 3 = freq-delta, phases 0/2 = freq unchanged, where delta = the top byte of (freq << 1), i.e. depth scales with the note's own frequency. Enabled/disabled per voice by stream commands $db/$dc; there is no depth or speed command anywhere in the engine.",
    "TEMPO IS GLOBAL EVEN THOUGH IT IS STORED PER-VOICE. $22/$23/$24 are three separate bytes, but every command that touches them ($e2 set, $e8 subtract, $e9 add) writes all three unconditionally — so the per-voice layout is vestigial and the three voices can never run at different tempos.",
    "THE SFX-DRIVER SHAPE IS VISIBLE IN THE CODE, NOT JUST IN THE TRACE STATISTICS. A song header's per-voice pointer of $ffff means 'leave this voice running untouched', so a new cue can be started on one or two voices while the others keep playing whatever they were playing; some builds (e.g. Roadwar_Europa's $4d00) additionally gate init behind a priority byte that spin-waits until all three voice pointers go idle before a low-priority cue may take over. This is the mechanical corroboration of the 'Sound Effects' credit noted elsewhere in this card.",
    "NO PERIODIC FILTER OR PULSE MODULATION AT ALL. $d415/$d416/$d417 are never written by the engine; $d418 is written only by the one-shot $c7 command (and once at init in most builds), and $d402/$d403 only by the one-shot $c3 command. Sparse filter-write counts in traces are a property of the driver, not of any particular tune.",
    "MARS_SAGA.SID IS A ONE-BYTE-SHIFTED VARIANT OF THE SAME ENGINE. Opcode-pattern offset matching (relocation-immune, no address operands) puts the gate-on / ADSR / stop idioms at identical relative offsets (+169, +230, +236, +271 from the voice-silence idiom) in all 6 files, except Mars_Saga where every one is exactly one lower (+168/+229/+235/+270) and the `lda #$0f / sta $d418` init-volume idiom is absent entirely — a minor revision, not a different player.",
    "HVSC HAS NO COUNTRY DATA at all for this composer — a bare 'Mudra, Paul' entry, unlike most neighboring HVSC entries which carry a country field. Independently confirmed via VGMPF and c64-wiki.de: born 14 August 1965, Las Vegas, Nevada, USA.",
    "A GENUINELY MAJOR LATER INDUSTRY CAREER, well-documented and multi-sourced: sound designer at Westwood Associates/Westwood Studios from 1988 until EA's acquisition/eventual studio closure (1998-2003), where he is best known industry-wide for AUDIO DIRECTION on the Command & Conquer/Red Alert franchise — a career on a similar scale to this project's other 'commercial studio veteran' composers (e.g. David Thiel's pinball-audio career). Later became Audio Director at Insomniac Games (Ratchet & Clank, Marvel's Spider-Man PS4/PS5).",
    "ROLE ON THE TRACED FILE'S GAME IS SPECIFICALLY 'SOUND EFFECTS' PER VGMPF, not full composer — a genuinely interesting technical corroboration: the trace itself is sparse (17 writes/50 frames, filter-touched, osc3-only) which reads more like an SFX cue than a full musical score, consistent with that credit. A separate source (c64-wiki.de) uses the looser term 'musician' for the same credit — flagged as a minor terminology discrepancy, not a real conflict, since SFX/music roles often blur in small-team credits of this era.",
    "PURELY AUDIO-SIDE ACROSS HIS ENTIRE DOCUMENTED CAREER (~50 titles, 1988-2020 per VGMPF's own career table) — programming was explicitly credited to others (Phil Gorrow/Shawn Smith on the traced title). No coding credit found anywhere.",
    "SIX CONFIRMED C64 TITLES: A Nightmare on Elm Street (1989, Monarch Software/Westwood Associates — the traced file, a movie tie-in), Questron II (1988), Battletech: The Crescent Hawk's Inception (1988), Hillsfar (1989), Mars Saga (1989), and a C64 port of DragonStrike (present in the HVSC folder though not listed in VGMPF's own platform table for that title — flagged as a minor gap in VGMPF's own coverage, not a contradiction). NOTE the HVSC folder's own six files are A_Nightmare_on_Elm_Street, Battletech, DragonStrike, Hillsfar, Mars_Saga and Roadwar_Europa — Roadwar Europa (1987, SSI) rather than Questron II; its own PSID header credits '1987 Strategic Simulations Inc.' and it is the earliest-dated file in the set, pushing the driver's confirmed first use back a year before the Westwood Associates dates given above.",
    "NO CSDb SCENER PROFILE EXISTS and no interviews/first-person material were found — consistent with a purely US commercial-studio composer with zero demoscene footprint, the same absence pattern already established for several other purely-commercial composers already carded in this KB (e.g. [[david-thiel]]).",
    "Not confirmed in SIDId (no entry for this tag). His real documented recurring collaborator at Westwood was Dwight Okahara (later joined by Frank Klepacki), none of whom are currently in this KB. No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos — none found; an AI-search-summary loosely juxtaposing his name with Rob Hubbard/David Warhol was investigated and found to be an artifact of the search tool conflating unrelated results, not an actual sourced connection, and is explicitly NOT included as fact)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Mudra, Paul', bare entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "VGMPF — Paul Mudra (full career table, birth details, Sound Effects credit): https://www.vgmpf.com/Wiki/index.php/Paul_Mudra",
    "c64-wiki.de — Paul S. Mudra: https://www.c64-wiki.de/wiki/Paul_S._Mudra",
    "Lemon64 — A Nightmare on Elm Street (full credits): https://www.lemon64.com/game/nightmare-on-elm-street",
    "MobyGames — A Nightmare on Elm Street (title/existence confirmed via search; direct fetch 403'd): https://mobygames.com/game/c64/a-nightmare-on-elm-street",
    "Local dataset: 6 files tagged Paul_Mudra, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Paul_Mudra` tag is American sound designer Paul Mudra's C64 driver,
used at Westwood Associates — where he began a long, well-documented
industry career (Command & Conquer/Red Alert audio direction, later
Insomniac Games audio director). Confirmed audio-side only, never a
coder. Player-ID-fingerprinted across 6 files, all his own.

## Quirks & gotchas

See the `quirks` array. Technically the load-bearing ones are that **there
is no canonical load address** (all six files differ — read each PSID
header), that **A Nightmare on Elm Street's play address legitimately sits
outside its own payload** because init block-copies the engine to `$48da`,
and that the **SFX-driver shape is visible in the code itself** (a
`$ffff` per-voice header entry means "leave this voice running", plus a
priority spin-wait in some builds) — the mechanical corroboration of
Mudra's 'Sound Effects' credit that earlier passes could only infer from
sparse trace statistics. Biographically the load-bearing quirk is still
the **major, extensively documented later industry career**.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Everything in
the `memory`/`entry`/`data_format`/`effects` blocks above is derived from
an original disassembly produced 2026-07-30 (see Verification), not from
any external source.

The engine is small and flat: ~540-840 bytes of code (403 instructions in
the fullest `-C1` disassembly of DragonStrike), two 96-entry note-frequency
tables, no wavetable/pulsetable/filtertable, and a linear `CMP #imm / BNE`
command dispatcher. Per-voice work is one routine called three times with
`X` = voice index and `$3f` = SID register offset from a `{$00,$07,$0e}`
table. Self-modifying code is used in three places only — the note-on
waveform immediate, the duration-multiply `ADC` immediate, and the vibrato
delta — all of which come out pristine under SIDdecompiler's `-r`, so no
hand-patching was needed on any file.

## Verification

**`status: verified` (2026-07-30).** Original disassembly + reassembly +
relocation-invariant trace-diff, all six HVSC `Paul_Mudra` files.

Recipe, unchanged across all six:
`SIDdecompiler.exe <file> -a<decimal of the -v2 map's own "Start:"> -z -d -c -r`
then `64tass.exe -a --cbm-prg`. `-r` was decisive — every file came out
pristine with **zero byte patching**.

| File | load / init / play | subtunes | payload | byte-diff |
|---|---|---|---|---|
| Roadwar_Europa | $4900 / $4900 / $492f | 13 | 2553 B | **100.0000%** (0/2553) |
| Battletech | $963f / $a7ed / $a803 | 1 | 4565 B | **100.0000%** (0/4565) |
| DragonStrike | $6fc2 / $73dc / $70a0 | 16 | 7431 B | **100.0000%** (0/7431) |
| Hillsfar | $308c / $4160 / $31b6 | 1 | 4385 B | **100.0000%** (0/4385) |
| Mars_Saga | $e300 / $eedb / $eee3 | 17 | 3167 B | **100.0000%** (0/3163 compared) |
| A_Nightmare_on_Elm_Street | $13c0 / $13c0 / $4993 | 1 | 3729 B | **100.0000%** (0/3729) |

**Non-tautological evidence (the byte-identical builds prove nothing on
their own).** For five of the six files a second, structurally different
build was produced at a different base from the same disassembly and
traced against the native one, comparing `(frame, register, old, new)`
tuples programmatically:

| File | relocated base | bytes differing at same offset | frames x subtunes | writes | divergences |
|---|---|---|---|---|---|
| Roadwar_Europa | $4900 -> $6100 | 80 / 2553 | 100 x 13 | 549 | **0** (also cycle-exact) |
| Roadwar_Europa | $4900 -> $6123 | 160 / 2553 | 100 x 13 | 549 | **0** (cycle drift only) |
| DragonStrike | $6fc2 -> $4fc2 | 85 / 7431 | 150 x 16 | 1147 | **0** (also cycle-exact) |
| DragonStrike | $6fc2 -> $5137 | — | 150 x 16 | 1147 | **0** (cycle drift only) |
| Battletech | $963f -> $5000 | 54 / 4565 | 300 x 1 | 145 | **0** |
| Hillsfar | $308c -> $0f8c | 49 / 45252 | 300 x 1 | 208 | **0** (also cycle-exact) |
| Mars_Saga | $e303 -> $5343 | 258 / 3163 | 150 x 17 | 577 | **0** |

**2626 register writes over 48 subtune traces on 5 files, 0 divergences.**
Cycle timestamps are identical wherever the relocation delta is
page-aligned and drift only where it is not — i.e. page-crossing penalties,
per the known pattern, not behavioural difference.

Per-file notes worth keeping:

- **Battletech** needed 20 `@w` (force-absolute) fixes: the original build
  encodes 20 zero-page addresses in 3-byte absolute mode (`ad 3d 00`, not
  `a5 3d`), so the naive reassembly came out 20 bytes short and byte-diffed
  at 1.03% (a shift-19 scan gave 97.6%, which is the tell). Found
  automatically by walking 64tass's `-L` listing for any 2-byte instruction
  whose opcode is exactly 8 less than the original file's byte at the same
  address with a `$00` high byte. Mars_Saga needed the same fix twice.
- **Hillsfar** has `-v2 Start: $178c`, well BELOW its own load address
  `$308c`, plus a written block at `$c000-$c84f` far above its end — both
  are out-of-file runtime workspace, not code, so relocating onto `$178c`
  (zero net shift) is correct and the 45,252-byte reassembly byte-diffs
  100% over the real 4385-byte payload window.
- **Mars_Saga**: `-v2 Start: $e303`, three bytes past its load address. The
  compared window is `$e303-$ef5d` (3163 of 3167 bytes); the 4 bytes outside
  it are `$e300-$e302` = `4c 0c e3` (`jmp $e30c`, an entry stub the PSID
  vectors bypass) and a single trailing `$ff` at `$ef5e`, neither ever
  touched at runtime.
- **A_Nightmare_on_Elm_Street** is the one file NOT independently closed.
  SIDdecompiler emitted two duplicate `l4a9d`/`l4ac6` label definitions;
  deduping by keeping the **last** gives 100.0000%, keeping the first gives
  99.9464% (2 diffs, at `$2015` and `$204c`) — the pointer-table off-by-one
  signature. But the file's engine is a 997-byte image at `$1e6c-$2250` that
  init block-copies to `$48da-$4cbe`, and `-r` re-zeroes that destination,
  so only **62 instruction bytes / 32 instructions** of the payload are real
  disassembly and the remaining 96.8% is `.byte` pass-through; a relocated
  build (`$028c -> $128c`) diverges immediately (0 writes) because the copy
  destination is hardcoded while the source relocates. Its native trace
  reproduces the previously recorded figure exactly (**17 writes / 50
  frames**; 188 / 300 frames), and its engine is confirmed identical to the
  verified builds by opcode-offset signature, but that file alone rests on
  pass-through rather than on its own reconstruction.

**Player-family identity, relocation-immune (opcode patterns with no
address operands, matched on relative offsets rather than
longest-common-substring).** Anchoring on `9d 00 d4 9d 01 d4`
(silence-voice), the gate-on idiom `09 01 9d 04 d4`, the ADSR writes
`9d 05 d4` / `9d 06 d4` and the end-of-stream idiom sit at **+169 / +230 /
+236 / +271 in all six files** (Mars_Saga: +168/+229/+235/+270, a
one-byte-shifted revision). One player, six builds.

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF, c64-wiki.de, Lemon64,
and MobyGames.
