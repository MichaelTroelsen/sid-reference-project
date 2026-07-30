# Colin Davies (player routine)

```json
{
  "id": "colin-davies",
  "name": "Colin Davies (player routine)",
  "aliases": ["Colin_Davies"],
  "authors": ["Colin Davies"],
  "released": "1991 (PSID 'Released' field on all 4 tagged files; amateur/hobbyist, HVSC-only)",
  "status": "verified",
  "platform": "A playroutine credited to 'Colin Davies' — a genuinely thin case, reported honestly rather than padded out: exhaustive searches (Lemon64, GB64, MobyGames, CSDb, Demozoo) found NO game, demo, or commercial credit anywhere for any of his 3 tune titles (Bad Toon, Remix Toon, Very Naff), and no CSDb scener profile exists. Most likely an amateur/hobbyist composer whose work reached HVSC without ever being tied to a released game. Player-ID-fingerprinted across 4 files: 3 by Davies, 1 by Jason Tinkler (a UK scener with his own CSDb coder/graphician/musician profile). RESOLVED 2026-07-30 by disassembly: all 4 files run the BYTE-IDENTICAL player binary at the fixed absolute block $8100-$8824 (differing in only 9 dead self-modified operand bytes), so the shared tag is a genuine code match, not the metadata artifact an earlier research-only pass guessed at — though no real-world link between the two people is documented anywhere, and the routine embeds no author or tool string, so its actual author is still unknown. Tinkler's other two HVSC files (Aquarius_V2, Out-Space) do NOT use this routine.",
  "csdb_release": null,

  "memory": { "load_address": "PSID load address VARIES per file ($7000 Bad_Toon / $7900 Remix_Toon / $7400 Very_Naff / $7000 Aquarius_V1) but the ENGINE sits at FIXED ABSOLUTE addresses in every file — $8100-$8824 — so init/play are the same in all four ($83c0/$8800). All four files end at $9300-$930e. Verified from the PSID headers directly (2026-07-30).", "zero_page": "NONE. The disassembly contains zero zero-page references — every variable is an absolute address in the $8100-$81ff workspace page. Confirmed by scanning the generated .asm for zero-page symbols (0 hits).", "layout": "load..$80ff = pattern pages (see data_format). $8100-$8118 = 25-byte SID shadow register block ($8100+7*voice: +0 freq lo, +1 freq hi, +2 pw lo, +3 pw hi, +4 control, +5 attack/decay, +6 sustain/release; $8115-$8118 = filter cutoff lo/hi, res+routing, mode+volume), block-copied to $d400-$d418 every frame by $8200. $8120-$812e = parallel per-voice effect state (stride 7, same X index as the shadow block). $8150 = row 0-$3f, $8151 = tick counter, $8152 = ticks-per-row (tempo), $8153 = song length, $8154 = song position, $8158 = loop restart position. $8160/$8167/$816e = per-voice instrument index*16. $81fd/$81fe/$81ff = A/X/Y save slots. $8200-$8824 = engine code + jump skeleton. $8600+ = note frequency table (hi,lo pairs, note n at $8600+(n-1)*2, starting ~$010c = C-0). $9000-$90ff = instrument table, 16 bytes per instrument, instrument n at $9000+n*16 (n = 1-15; slot 0 is unreachable and unused). $9100/$9200/$9300 = one 256-byte order list per voice, each entry a bare PATTERN PAGE NUMBER." },
  "entry": { "init": "$83c0 in every tagged file. 14 bytes total: $8154=$ff, $8150=$ff, $8151=$00. Does not touch the SID or the shadow block.", "play": "$8800 in every tagged file. 37 bytes: jsr $8200 (shadow->SID copy + frame counter), jsr $8400 (row/song-position advance), then three per-voice calls to $8350 with X = $00/$07/$0e and Y = $8160/$8167/$816e, A = that voice's current pattern page." },
  "speed": "1x (single call per frame). No CIA/raster timing of its own — the PSID header drives it; nothing in the player installs an IRQ.",
  "data_format": { "order_list": "Three independent 256-byte order lists, one per voice, at $9100 (v1), $9200 (v2), $9300 (v3). Each byte is a raw PATTERN PAGE NUMBER (a high byte of an absolute address). $8439-$844b reads order_list[$8154] for each voice and stores it straight into the IMMEDIATE OPERAND of the corresponding 'lda #$xx' in the play routine ($880c/$8816/$8820). Song position $8154 increments when the row counter wraps; at $8154 == $8153 (song length) it reloads from $8158 (loop point).", "patterns": "One pattern = one 256-byte page, 64 rows. Note column at page+$00..$3f, command column at page+$80..$bf. $8350 stores the page number into the HIGH BYTE ONLY of two absolute operands ('lda $xx80,X' at $835f, 'lda $xx00,X' at $838a); the low bytes $80/$00 are hardwired. Note byte 0 = no note; note n -> frequency table entry at $8600+(n-1)*2 (stored hi,lo). The note column is read only on the first tick of a row ($8152 == $8151); the command column is read every frame.", "instruments": "16 bytes per instrument at $9000+n*16, n = 1-15. +0 attack/decay, +1 sustain/release, +2 control byte used while the gate-length counter is nonzero, +3 control byte used after it expires, +4 high nibble = effect command (see effects), low nibble = initial pulse-width high nibble, +5 waveform OR-mask used by the $10-$40 commands, +6 pulse-width step, +7 pulse-width counter reload (>>1), +8 pulse-width direction, +9 pulse-width start delay, +a/+b frequency step hi/lo (vibrato/slide), +c vibrato counter reload (>>1), +d vibrato direction, +e vibrato start delay, +f gate-length in frames (loaded into $8122,X).", "wavetable": "None. Waveform control is two fixed bytes per instrument (+2 / +3) switched by the +f gate-length counter, optionally OR-ed with +5 by the $10-$40 commands.", "pulsetable": "None as a table. Per-instrument triangle sweep only: $8265-$8295 adds/subtracts +6 to the 16-bit shadow pulse width ($8102/$8103), flipping direction when the +7-derived counter expires; +9 delays the start.", "filtertable": "None. CORRECTION to the earlier pass: the filter is NOT used at all. $8115-$8118 are plain constants in the file ($00 $00 $00 $0f in all four tagged files = cutoff 0, no resonance, no voice routed, volume 15) that the $8200 block copy re-writes to $d415-$d418 every frame. The '1 filter write' seen in the 2026-07-14 trace is just the frame-0 volume byte, not filter modulation." },
  "effects": { "encoding": "Two independent layers. (1) PER-ROW, from the pattern's command column (page+$80+row): high nibble $1x = 'set instrument x' (low nibble asl'd four times gives Y = x*16 and is stored in the voice's $8160/$8167/$816e). No other high nibble is decoded there. (2) PER-INSTRUMENT, from instrument byte +4's high nibble, dispatched by a fixed if/else chain at $82cf -> $8500 -> $851e -> $853c -> $855a; each handler is exactly 18 bytes and each test is separated by 3 NOP pad bytes.", "commands": { "$0x": "No command (chain falls through to the rts at $8579).", "$1x": "$82d8: every 2nd frame ($82ff & $01) replace the voice control byte with (control & $01) | instrument+5 — a waveform flip at 1/2 frame rate.", "$2x": "$8509: same, gated on $82ff & $02 (1/4 rate). NEVER EXECUTED by any of the 4 tagged files; hand-decoded from raw bytes, byte-shape identical to its three traced siblings.", "$3x": "$8527: same, gated on $82ff & $04 (1/8 rate).", "$4x": "$8545: same, gated on $82ff & $08 (1/16 rate).", "$5x": "$8563: octave alternation — on odd frames ($82ff & $01) 'asl $8100,X / rol $8101,X' (frequency x2), on even frames 'lsr $8101,X / ror $8100,X' (frequency /2).", "vibrato": "Not a command — always active from instrument bytes +a/+b/+c/+d/+e. $8210-$8262 adds or subtracts the 16-bit step from the shadow frequency, toggling direction when the +c counter expires; +e delays onset.", "pulse sweep": "Not a command — always active from instrument bytes +6/+7/+8/+9, same structure applied to the 16-bit shadow pulse width." } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE PLAYER IS PAGE-ALIGNMENT-LOCKED BY DESIGN — it cannot be relocated by anything other than a whole number of pages, and this is an intrinsic property of the data format, not a reconstruction artifact. The order lists at $9100/$9200/$9300 store bare pattern PAGE NUMBERS, and $8350 writes that byte into the HIGH BYTE ONLY of two absolute operands ('lda $xx80,X' at $835f, 'lda $xx00,X' at $838a) whose low bytes ($80/$00) are assembled constants. There is no representation for a sub-page offset anywhere in the format. Demonstrated empirically (2026-07-30, Bad_Toon.sid): a relocation control built at $5c00 (delta -$1400) traces register-write AND cycle exact against the original; the same disassembly built at $5c01 (delta -$13ff) diverges from frame 1 (373 writes vs 371, 293 differing write tuples over 60 frames). SIDdecompiler itself flags this up front with 'WARNING: Generated source may have alignment issues due to partial address operand modification' and names the two operands ($8361+1, $838c+1 in its own off-by-one label convention, i.e. the real instructions at $835f/$838a).",
    "THE DAVIES/TINKLER TAG-SHARING IS RESOLVED AND IS *NOT* A METADATA ARTIFACT (2026-07-30) — it is a genuine byte-level code match. Comparing the engine region $8200-$8824 across all four tagged files (Bad_Toon, Remix_Toon, Very_Naff by Davies; Aquarius_V1 by Jason Tinkler) shows the code is BYTE-IDENTICAL except for exactly 9 single bytes, and every one of those 9 is a known self-modified operand that is dead on disk ($82ff frame counter; $8361/$836c/$838c/$83a4/$83a9 self-modified operands; $880c/$8816/$8820 the three per-voice pattern-page immediates, all overwritten by $8439-$844b on the very first play call before any read). Not merely 'the same source recompiled' — the same assembled binary, at the same fixed absolute addresses ($8100-$8824), in all four files. A lesson-68-style relocation-immune signature scan (7 masked opcode patterns) hits all 7 at IDENTICAL absolute addresses in all four tagged files and hits ZERO of them in Tinkler's own two untagged files (Aquarius_V2, Out-Space) or in a Rob Hubbard negative control. Interpretation caveat: shared tooling is proven, a personal relationship is not — the two composers used the same editor/player, which is all the bytes can show.",
    "TINKLER'S OTHER TWO HVSC FILES DO *NOT* USE THIS PLAYER. Aquarius_V2.sid (load $2000, init $2568, play $2100) and Out-Space.sid (load $9c00, init $bf40, play $a16c, 2 subtunes) match none of the 7 signature patterns and have completely different entry-point conventions — despite Aquarius_V2 sharing a title with the tagged Aquarius_V1. Do not assume the 'V2' is the same engine as the 'V1'.",
    "NO ZERO PAGE AT ALL — every variable lives in the absolute $8100-$81ff workspace page, and the three CPU registers are spilled to $81fd/$81fe/$81ff by hand at the top of $8350. Unusual for a 1991 routine and a large part of why the engine relocates cleanly at page granularity.",
    "THE FILTER IS NEVER TOUCHED (corrects the 2026-07-14 pass's 'light filter use — 1 filter write'). $8115-$8118 are file constants ($00 $00 $00 $0f in all four files) that the unconditional 25-byte shadow->SID block copy at $8200 re-writes to $d415-$d418 every frame; the single 'filter write' a trace reports is the frame-0 volume byte. No code path anywhere in the 635 disassembled engine bytes writes $8115-$8118.",
    "THE ENGINE IS TINY AND MOSTLY DEAD SPACE: only 595 of 8961 payload bytes disassemble as code in Bad_Toon (6.6%), 635 bytes as the union across all four tagged files. The command-dispatch chain at $8500-$8579 is padded with 3-NOP gaps between each test and there are further NOP runs at $8262-$8264, $82b5-$82b7, $82cc-$82ce, $8347-$8349, $8378, $8421-$8422 — a hand-assembled routine with slots left for edits. The $2x command handler ($8509-$851a) is reached by none of the four files.",
    "NO EMBEDDED CREDIT OR TOOL STRING (checked per lesson 74: full printable-run scan of all four payloads with &0x7f masking, minimum run 8). The only long printable runs are pattern/order-list data read as text. So the engine names neither its author nor an editor — the identity of who wrote the routine (Davies, Tinkler, or a third party) remains genuinely open even though the code-sharing is now proven.",
    "NO GAME, DEMO, OR COMMERCIAL CREDIT FOUND FOR ANY OF DAVIES'S 3 TITLES anywhere checked (Lemon64's game database, GB64, MobyGames, general web) — no game titled 'Bad Toon,' 'Remix Toon,' or 'Very Naff' exists in any of these sources under his name. HVSC's own Musicians.txt entry for him is bare ('Davies, Colin', no country, no group), consistent with an amateur/hobbyist submission that never went through a commercial release pipeline.",
    "THE 'TOON'-THEMED TITLES DO NOT APPEAR TO REFERENCE A LICENSED CARTOON PROPERTY: 'Very Naff' (British slang for 'lame/uncool') reads as self-deprecating humor typical of amateur composer naming, not a commercial product title — flagged as a plausible, not confirmed, reading, since a very obscure unlisted release couldn't be fully ruled out.",
    "NO CSDb SCENER PROFILE EXISTS for Colin Davies — multiple direct and site-search queries returned zero matching profiles, consistent with him operating entirely outside any organized demoscene or commercial credit trail.",
    "THE 4TH FILE UNDER THIS TAG, 'Aquarius V1', IS CREDITED TO A DIFFERENT COMPOSER, Jason Tinkler (HVSC: 'Tinkler, Jason - UNITED KINGDOM (ENGLAND)') — who DOES have his own CSDb scener profile (id=23185, functions Coder/Graphician/Musician), with one logged solo release, 'Out-Space' (2011, a C64 shoot-'em-up, solo code+music+graphics+design, no group). NO source (CSDb, HVSC, Lemon64, MobyGames, Demozoo) shows any documented collaboration, shared group, or shared publisher between Davies and Tinkler. SUPERSEDED IN PART (2026-07-30): the earlier guess that the shared tag was 'most likely a data-matching artifact in the underlying SID file metadata' is now DISPROVED at byte level — see the tag-sharing quirk above; the player binary is identical, so the tag is correct. What web research could not find, and still cannot, is any real-world link between the two people; all four files carry a 1991 PSID release year ('1991 Colin Davies' x3, '1991 Jason Tinkler' x1), so shared 1991 UK amateur tooling is the natural reading.",
    "AN UNCONFIRMED, LOW-CONFIDENCE NAME-COINCIDENCE WAS NOTED AND EXPLICITLY NOT TREATED AS A FINDING: a CSDb scener profile for a 'Karen Davies' (id=24806) surfaced in searches — no evidence of any family or collaborative link to Colin Davies was found; flagged only as a curiosity for optional future follow-up.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB for either Colin Davies or Jason Tinkler (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Davies, Colin', bare entry; 'Tinkler, Jason - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener id=23185 (Jason Tinkler, Coder/Graphician/Musician): https://csdb.dk/scener/?id=23185",
    "CSDb release id=102708 ('Out-Space', 2011, Jason Tinkler solo): https://csdb.dk/release/?id=102708",
    "CSDb scener id=24806 ('Karen Davies', unconfirmed/unrelated name-coincidence, not a finding): https://csdb.dk/scener/?id=24806",
    "Local dataset: 4 files tagged Colin_Davies, 2 composers (see knowledge/COVERAGE.md)",
    "Own disassembly + reassembly + trace, 2026-07-30 (SIDdecompiler 0.8 `-a<Start> -z -d -c -r`, 64tass 1.60, sidm2-sid-trace.exe): HVSC `MUSICIANS/D/Davies_Colin/{Bad_Toon,Remix_Toon,Very_Naff}.sid` and `MUSICIANS/T/Tinkler_Jason/Aquarius_V1.sid`"
  ]
}
```

## Overview

A small, hand-assembled 1991 three-voice routine that lives at a **fixed
absolute address block, `$8100-$8824`**, in every file that uses it,
regardless of where the song data below it loads. 595-635 bytes of code,
no zero page, no wavetables, no filter — per-voice vibrato and pulse
sweep driven from a 16-byte instrument record, plus a five-entry
waveform/octave command chain.

The `Colin_Davies` *biography* remains a genuinely thin case: no game,
demo or commercial credit was found for any of Davies's 3 tunes and no
CSDb scener profile exists for him. What the 2026-07-30 disassembly pass
**did** settle is the long-open question about the 4th file: `Aquarius
V1`, credited to Jason Tinkler, runs the **byte-identical player
binary**, so the shared tag is correct rather than a metadata artifact.
Who actually *wrote* the routine is still unknown — it embeds no author
or tool string.

## Quirks & gotchas

See the `quirks` array. The two load-bearing ones are now technical:

- **Page-alignment lock.** Pattern addressing is high-byte-only
  self-modification against hardwired `$80`/`$00` low bytes, with the
  order lists storing bare page numbers. The routine relocates perfectly
  at whole-page deltas and breaks immediately at any other delta. This is
  the format, not a disassembly defect.
- **Davies/Tinkler is a real code match**, proven byte-for-byte, but says
  nothing about a personal relationship — only shared tooling.

The old honest sparse-biography flag still stands for everything
web-research could reach.

## Disassembly notes

Now disassembled here (2026-07-30); nothing published elsewhere (not in
the realdmx RE repo, no STIL note). Recipe that works, no hand-patching
needed on any of the four files:

```
SIDdecompiler.exe <file.sid> -o<out.asm> -a<DECIMAL of PSID load address> -z -d -c -r
64tass.exe -a --cbm-prg -o out.prg out.asm
```

`-v2`'s reported `Start:` equals the PSID load address on all four files,
so no gotcha-40 relocation adjustment is needed. `-r` is what makes the
result byte-exact: nine engine bytes are self-modified operands whose
on-disk values are stale residue from whatever base the tune last ran at
(e.g. `$880c/$8816/$8820` = `$20/$22/$2f` in Bad_Toon, `$31/$33/$3f` in
Aquarius_V1) and are all overwritten by `$8439-$844b` on the first `play`
call before any read.

Reading the disassembly: SIDdecompiler's label-position off-by-one
(lesson 21) is visible throughout the engine — `l880c` is printed on the
instruction at `$880b`, `l8361` on the instruction at `$835f`, etc.,
because those labels name the *self-modified operand byte*, not the
opcode. Trust the listing addresses, not the label names.

## Verification

**VERIFIED (2026-07-30) — 4 of 4 tagged files, 100.0000% byte-exact,
register-write AND cycle exact, with a non-tautological relocation
control on every file.**

Method: `SIDdecompiler 0.8 -a<load> -z -d -c -r` -> `64tass 1.60 -a
--cbm-prg` -> byte-diff of the reassembled payload against the PSID
payload -> `sidm2-sid-trace.exe` at 60 frames, compared programmatically
on `(frame, cycle, register, old, new)` tuples.

| File | Load / init / play | Byte-diff | Native trace | Relocation control | Control trace |
|---|---|---|---|---|---|
| `Bad_Toon.sid` | `$7000` / `$83c0` / `$8800` | **100.0000%** (0/8961) | 371 writes, **0 divergences** | `$5000` (143 of 8961 bytes differ) | **0 divergences**, cycles included |
| `Remix_Toon.sid` | `$7900` / `$83c0` / `$8800` | **100.0000%** (0/6664) | 302 writes, **0 divergences** | `$5900` (162 of 6664 differ) | **0 divergences**, cycles included |
| `Very_Naff.sid` | `$7400` / `$83c0` / `$8800` | **100.0000%** (0/7944) | 275 writes, **0 divergences** | `$5400` (159 of 7944 differ) | **0 divergences**, cycles included |
| `Aquarius_V1.sid` | `$7000` / `$83c0` / `$8800` | **100.0000%** (0/8975) | 362 writes, **0 divergences** | `$5000` (195 of 8975 differ) | **0 divergences**, cycles included |

**The tautology requirement is met.** Because `-r` makes each native
reassembly byte-identical to the original, the native trace proves
nothing on its own. Each file therefore also got a control built from the
*same* disassembly at a different base (delta `-$2000` throughout, so
143-195 payload bytes genuinely differ), traced at the shifted
init/play — all four reproduce every register write **and every cycle
timestamp** exactly.

**The control is page-aligned-only, and that limit is a property of the
player, not of the reconstruction.** Per lesson 79's aligned/unaligned
split, Bad_Toon was additionally built at `$5c00` and `$5c01`: `$5c00`
is 0-divergence cycle-exact, `$5c01` diverges from frame 1 (373 vs 371
writes, 293 differing write tuples over 60 frames). Root cause located
in the disassembly, not guessed: `$8350` does `sta $8361` / `sta $838c`,
writing the incoming page byte into the **high byte only** of `lda
$xx80,X` (`$835f`) and `lda $xx00,X` (`$838a`), whose low bytes are
assembled constants; the order lists at `$9100/$9200/$9300` likewise
store bare page numbers. A sub-page relocation is unrepresentable in the
format. SIDdecompiler emits its own `partial address operand
modification` warning naming exactly these two operands.

**Engine identity across the family (lesson 68 method, not
longest-common-substring).** Seven masked opcode patterns carrying no
relocatable address operands (SID shadow copy `a2 00 bd ?? ?? 9d 00 d4 e8
e0 19 d0 f5`; the 16-bit add/sub slide pair; `29 f0 c9 10 d0 0e`; `29 f0
c9 20 d0 12`; the `18 69 01 c9 40 d0 02 a9 00` 64-row wrap; `0a 0a 0a 0a
ae ?? ?? 9d ?? ?? a8 ea` instrument-index shift; the play-head skeleton)
all hit in all four tagged files at **identical absolute addresses**
(`$8200`, `$821d`, `$8365`, `$8503`, `$840e`, `$836d`, `$8800`), and hit
**zero** times in Tinkler's untagged `Aquarius_V2.sid` / `Out-Space.sid`
or in `Monty_on_the_Run.sid` as a negative control. A direct byte
comparison of `$8200-$8824` across the four files differs in exactly 9
bytes, all of them dead self-modified operands.

**Honest scope / known gaps.**
- Code coverage is 595 bytes (Bad_Toon alone) / 635 bytes (union of all
  four). The remaining payload is song data and unreferenced fill, passed
  through verbatim by `-d`. The instruction-vs-`.byte` ratio was checked
  per lesson 65 before quoting the byte-diff; the play address `$8800`
  lies inside every file's own payload, so lesson 78's `-r` runtime-copy
  blind spot does not apply here.
- The `$2x` command handler at `$8509-$851a` is executed by none of the
  four files. It is documented above from a hand-decode of the raw bytes
  and is byte-shape-identical to its three traced siblings
  (`$82d8`, `$8527`, `$8545`), but that specific 18-byte path is
  *inferred, not traced*.
- Small untraced gaps remain at `$83b7-$83bf`, `$83ce-$83ff`,
  `$844c-$84ff` and `$857a-$87ff`; hex dumps show these are `$00`/`$60`
  fill, not code.
- Only one subtune exists per file (PSID `subtunes = 1`), so there is no
  multi-subtune scoping question here.

## Sources

See the `sources` array — HVSC Musicians.txt and CSDb (3 entries).
