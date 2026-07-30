# The Games Creator (David & Richard Darling)

```json
{
  "id": "games-creator",
  "name": "The Games Creator (David & Richard Darling)",
  "aliases": ["Games_Creator"],
  "authors": ["David Darling", "Richard Darling"],
  "released": "1984 (Mirrorsoft Ltd. / Mastertronic)",
  "status": "verified",
  "platform": "A point-and-click game-construction-kit product, published by Mirrorsoft in 1984 (reissued by Mastertronic, and again in 1987 by Codemasters as 'Creations') — let non-programmers build single-screen arcade games without coding, predating SEUCK. Authored by teenage brothers David and Richard Darling, who founded Codemasters two years later (October 1986). Player-ID-fingerprinted across 7 files, ALL by the Darlings themselves, using their own tool.",
  "csdb_release": 116924,

  "memory": { "load_address": "$2e00 on all 7 tagged files (BMX_Racers, BMX_Racers_v2, Jailbreak, Magic_Carpet, Mind_Control, Snake_Pit, Space_Walk). Payloads are tiny: 378-838 bytes. play is at the load address itself; init sits ABOVE the data (offsets $2e60-$3000 depending on build).", "zero_page": "NONE. The player touches no zero page at all — verified across all 7 files' full disassembly. Its runtime variables live at fixed ABSOLUTE addresses outside the .sid payload instead (see layout), which is why they read as $00 at cold boot.", "layout": "Fixed absolute layout, near-identical across builds. Code: play $2e00-$2e5f (~$60 bytes, 6 of the 7 files byte-identical here bar table operands); init at $2e60/$2e93/$2f80/$2f90/$3000. Data: note-frequency LO table at $2e7f or $2e80 (64 entries), HI table at $2ebf or $2ec0 (64 entries), note sequence at $2eff/$2f00 (or copied to a $3fff buffer on Mind_Control). Runtime workspace is OUT-OF-FILE, at hardcoded Games-Creator host-memory addresses: $45dd-$45e1 = a 5-byte voice-1 register shadow block (PW lo, PW hi, control, AD, SR; the control byte at $45df is what play gates on/off), $cf73 = frame counter, $cf74 = sequence index. Magic_Carpet is the one self-contained variant, keeping the same three workspace items in-file at $2e80-$2e84 (block) and $2ec2/$2ec3 (counters)." },
  "entry": { "init": "Per file: BMX_Racers $2f90, Space_Walk $2f80, Magic_Carpet $2e60, Mind_Control $2e93, BMX_Racers_v2/Jailbreak/Snake_Pit $3000. Sets $d418 volume, seeds the 5-byte voice-1 register block into $d402-$d406, zeroes the two counters, and seeds $d400/$d401 directly from the first two RAW sequence bytes (not via the frequency tables — see quirks).", "play": "$2e00 on all 7 files, i.e. the load address itself. Called once per frame; returns via rts. Uses only voice 1 ($d400/$d401/$d404) plus $d418; never touches voice 2/3 or any filter register." },
  "speed": "1x (single 50Hz call). No speed flag, no multispeed, no raster/CIA setup of its own — the host game's IRQ calls play. Musical tempo is two hardcoded immediate constants inside play: a gate-off frame threshold and a note-step frame threshold. Observed: 5/7 (BMX_Racers, Jailbreak, Snake_Pit, Magic_Carpet, Mind_Control), 4/7 (Space_Walk), 4/5 (BMX_Racers_v2) — i.e. one note every 7 (or 5) frames with the gate released 2 frames before the step.",
  "data_format": { "order_list": "NONE — there is no order list or pattern indirection. A single flat byte stream of note events is the whole song. Mind_Control is the only file with a level of indirection: init copies one of two 256-byte sequence banks ($2f30 / $3030) into a fixed $3fff play buffer, so 'subtune' = which bank is copied.", "patterns": "One flat sequence, one byte per event, read as base,X with X pre-incremented — so the byte at base+0 is NEVER played; the first note is base+1. Byte semantics: $01-$7f = note number (index into the two frequency tables); $00 = hold (no gate change, no retrigger — and if the byte AFTER the current one is $00 the gate-off step is suppressed entirely, i.e. a tie/legato); $fa = end marker, resets both counters to 0 so the sequence loops from the start; ANY value >= $80 other than $fa (observed $fc/$fd/$fe/$ff in real data) falls through the `cmp #$00 / bmi` test and is treated exactly like $00, i.e. these are editor bar/section markers the player deliberately ignores.", "instruments": "NONE — there is no instrument table or per-note instrument byte. One single hardcoded 5-byte voice-1 register block per tune (PW lo, PW hi, control, AD, SR) applies to every note in the song. BMX_Racers_v2's two subtunes differ ONLY in that block's control byte ($11 triangle vs $21 sawtooth); Mind_Control's two subtunes select different blocks ($11/$0a/$00 vs $21/$0a/$c5) via a 2-entry pointer table at $3130 plus self-modification of the gate-on `lda abs` operand.", "wavetable": "NONE. Waveform is a single constant control byte held in the register shadow block ($45df, or $2e82 on Magic_Carpet). Gate-on writes it verbatim to $d404; gate-off writes it AND #$fe.", "pulsetable": "NONE. Pulse width is set once at init from the register block and never modulated (observed $0000 in every file).", "filtertable": "NONE. $d417/$d418's filter bits are never touched — init writes a bare volume ($0f, or $0d on BMX_Racers_v2) to $d418 and nothing else. 0 filter writes confirmed across 9 subtunes x 600 frames." },
  "effects": { "encoding": "NO EFFECT SYSTEM AT ALL — the only per-note expression available is note-on, tie/hold, and loop. There is no vibrato, arpeggio, portamento, slide, pulse sweep, filter sweep, hard restart, volume envelope beyond the SID's own ADSR, or transpose anywhere in the disassembly. This is the entire command vocabulary:", "commands": { "$01-$7f": "Note on: X = value, freq lo = loTable[X], freq hi = hiTable[X], $d404 = control byte (gate on).", "$00": "Hold/rest: keep the current note, reset the frame counter only. Also, when this is the value of the NEXT sequence byte, it suppresses the gate-off step, producing a tie.", "$fa": "End of sequence: reset frame counter AND sequence index to 0, restarting the tune from base+1.", "$80-$f9 / $fb-$ff": "Ignored (treated as $00). Real data uses $fc/$fd/$fe/$ff as inert bar markers." } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "RUNTIME STATE LIVES OUTSIDE THE .SID PAYLOAD, AT HARDCODED HOST ADDRESSES (from disassembly, 2026-07-30): six of the seven files read and write $45dd-$45e1 (voice-1 register shadow block), $cf73 (frame counter) and $cf74 (sequence index) — addresses far above the $2e00-$3145 payload, i.e. slots in The Games Creator's own host-program memory map, not in the music module. This is why the player uses NO zero page whatsoever. In a PSID rip those bytes are simply fresh $00 RAM, which happens to be the correct cold-start value, so the rips play correctly anyway. Magic_Carpet is the sole self-contained build, holding the same three items in-file ($2e80-$2e84, $2ec2, $2ec3).",
    "INIT SEEDS THE SID FREQUENCY REGISTERS WITH RAW SEQUENCE BYTES, NOT TABLE LOOKUPS — a genuine oddity confirmed in every build: init does `lda seq+1 / sta $d400` and `lda seq+2 / sta $d401`, writing NOTE NUMBERS straight into the oscillator frequency registers (e.g. BMX_Racers: $d400=$1e, $d401=$00 — a sub-audible ~2 Hz). It is inaudible in practice because the gate is not on yet and the first real note-step overwrites both, but it means the post-INIT register dump of any Games_Creator file shows a nonsense frequency that must not be mistaken for a table value.",
    "THE FIRST SEQUENCE BYTE IS NEVER PLAYED: play does `ldx index / inx / lda seqbase,X` with the index starting at 0, so seqbase+0 is dead and the song starts at seqbase+1. Combined with the previous quirk (init reading seq+1/seq+2), a naive data-format reader that starts at seqbase+0 will be one byte out on every file.",
    "MIND_CONTROL'S GATE-OFF IS A LATENT BUG, CONFIRMED IN TRACE: its play routine gates off via `lda $45df / and #$fe / sta $d404` but its init — unlike every other build — never writes $45df at all (it copies the register block only to $d402-$d406, and self-modifies the gate-ON operand at $2e47+1 to point into the block instead). $45df therefore stays $00, so every gate-off writes $00 to $d404 rather than control&$fe. Visible directly in the register trace as `osc1_control $11 -> $00`. Harmless audibly (release is triggered either way) but it is a real behavioural difference from the other six builds.",
    "SELF-MODIFYING CODE IS PRESENT BUT MINIMAL AND CONFINED TO INIT — only Mind_Control has any: $2e6a+2 (high byte of the 256-byte sequence-bank copy source), $2e7c+1 (low byte of the register-block copy source) and $2e47+1 (address of the gate-on control byte). All three are written once during init and never during play, which is why SIDdecompiler's `-r` reconstruction needed no byte patching on any file in this family.",
    "SUBTUNES ARE NOT SEPARATE SONGS. Only two files declare 2 subtunes and neither means what the header implies: BMX_Racers_v2's two subtunes play the IDENTICAL note sequence and differ ONLY in the waveform control byte ($11 triangle vs $21 sawtooth, selected from a 2-byte table at $2e76); Mind_Control's two subtunes are two different 256-byte sequence banks plus two different register blocks. Confirmed by trace-diffing subtune 0 against subtune 1 on both files.",
    "BMX_Stunts.sid, which sits in the SAME HVSC folder (MUSICIANS/D/Darling_David_and_Richard/), is NOT this player and is correctly outside the 7-file tag set: load $0500, play $05be, 11 subtunes, 2832 bytes, and it does not contain the Games Creator play signature (`ee 73 cf ad 73 cf`) anywhere. Flagged so a future pass does not try to fold it in.",
    "CONFIRMED PRE-CODEMASTERS PRODUCT: David Darling (b. 17 June 1966, London) and brother Richard started writing C64 games as teenagers after their father bought a Commodore PET, forming Galactic Software in 1982 (David age 16), selling games to Mastertronic. Won Commodore's 'Programmers of the Year' award in 1984 — the same year as this tool's release. Owned a 50% stake in Mastertronic, sold in March 1986; founded Codemasters with their father Jim in October 1986. At Codemasters, David = Chairman/CEO, Richard = Creative Director — both documented as coders-turned-businessmen who wrote their own games/tools before founding the company.",
    "BMX RACERS (the traced file) IS CONFIRMED SELF-MADE: a 1985 Mastertronic budget release (£1.99), made by the Darlings THEMSELVES using their own Games Creator tool, per a Lemon64 forum comment: 'Although created on the Games Creator, this game isn't as bad as most GC games' — implying a general (if mild) reputation for games built with the tool being rough. Other games built with it: Mind Control, Dark Star, Pigs in Space, Magic Carpet, Orbitron, Jungle Story, Space Walk.",
    "CSDb 116924 IS A CRACK CREDIT, NOT AUTHORSHIP — flagged to avoid misattribution: the CSDb release page credits crackers 'Donald Duck' and 'Pojan' (scene distribution credits), not the Darlings themselves; it documents the product's scene circulation, not its original authorship. Original authorship is sourced from SIDId's own metadata and secondary company-history sources instead.",
    "CODEMASTERS INSTITUTIONAL LINK, CONFIRMED: Gavin Raeburn (already carded in this KB as [[gavin-raeburn]]) worked at Codemasters from ~1987 to 2009 — i.e. he joined the company the Darling brothers founded three years after this tool's release. This is a real, documented institutional connection, though no direct personal interaction between Raeburn and the Darlings on this specific tool was found.",
    "No source found describing 'The Games Creator' as a standalone product in detail (no dedicated Wikipedia/MobyGames product page — only company-history pages mention it in passing) — its precise feature set is undocumented beyond 'single-screen arcade game construction kit'.",
    "No confirmed technical detail distinguishing David's contribution from Richard's — SIDId credits both jointly, with no individual breakdown found anywhere.",
    "Not confirmed in SIDId beyond the bare name/author/release fields already used above. No known relationship found to any other composer/tool already in this KB beyond the Gavin Raeburn/Codemasters institutional link (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "Wikipedia — David Darling (businessman): https://en.wikipedia.org/wiki/David_Darling_(businessman)",
    "MobyGames — David Darling: https://www.mobygames.com/person/68889/david-darling/",
    "MobyGames — Richard Darling: https://www.mobygames.com/person/4043/richard-darling/",
    "Mastertronic archive — The Games Creator tag page (games built with it): https://mastertronic.co.uk/tag/the-games-creator/",
    "The Codemasters Archive — Creations (the 1987 Codemasters reissue of this tool): https://thecodemastersarchive.co.uk/games/creations/",
    "Lemon64 — BMX Racers (confirms self-made-with-the-tool status): https://www.lemon64.com/game/bmx-racers",
    "Lemon64 forum — BMX Racers/Games Creator commentary: https://www.lemon64.com/forum/viewtopic.php?t=32292",
    "CSDb release 116924 (crack distribution credits, not authorship — see quirks): https://csdb.dk/release/?id=116924",
    "Existing KB card: knowledge/players/gavin-raeburn.md (the Codemasters institutional link)",
    "Local dataset: 7 files tagged Games_Creator, 1 composer entity (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Games_Creator` tag is 'The Games Creator', a 1984 game-construction-
kit product by teenage brothers David and Richard Darling — who founded
Codemasters just two years later. Player-ID-fingerprinted across 7 files,
all self-made by the Darlings themselves using their own tool, including
the confirmed self-made release BMX Racers (1985).

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: this **predates the
Darlings' Codemasters founding** by two years, a genuine origin-story
artifact; the **CSDb release ID resolves to a crack credit, not
authorship** (flagged to avoid misattribution); and a **real, documented
institutional link** to already-carded Codemasters composer Gavin Raeburn.

## Disassembly notes

None published anywhere (not in the realdmx RE repo, no STIL note). The
memory map / data format / effects fields above are from an **original
disassembly produced in this project (2026-07-30)** of all seven
`Games_Creator`-tagged HVSC files, via `SIDdecompiler -r` + 64tass
reassembly + register-write trace-diff. See Verification.

The whole player is roughly **96 bytes of code** (a ~$60-byte `play` plus a
20-50 byte `init`) driving two 64-entry frequency tables and one flat
byte-per-event note sequence. It is a one-voice, no-effects, no-instrument,
no-zero-page monophonic note stepper — almost certainly the simplest player
carded in this knowledge base, which is consistent with its origin as the
audio side of a 1984 point-and-click game-construction kit written by two
teenagers.

Complete `play` (BMX_Racers build, byte-exact):

```
play    inc $cf73          ; frame counter
        lda $cf73
        cmp #$05           ; gate-off frame
        bne +
        ldx $cf74 : inx
        lda $2f00,X        ; peek NEXT event
        cmp #$00
        beq rts_           ; next is a hold -> tie, don't release
        lda $45df : and #$fe : sta $d404
rts_    nop : nop : rts
+       cmp #$07           ; note-step frame
        bne rts_
        inc $cf74 : ldx $cf74
        lda $2f00,X
        cmp #$00 : beq reset_ctr     ; hold
        cmp #$fa : beq reset_all     ; loop marker
        cmp #$00 : bmi reset_ctr     ; >=$80 -> ignored marker
        tax
        lda $2e80,X : sta $d400      ; freq lo table
        lda $2ec0,X : sta $d401      ; freq hi table
        lda $45df   : sta $d404      ; gate on
reset_ctr  lda #$00 : sta $cf73 : nop : nop : rts
reset_all  lda #$00 : sta $cf73 : sta $cf74 : nop : nop : rts
```

## Verification

**VERIFIED (2026-07-30) — 100.0000% byte-exact reconstruction of all 7
tagged files, plus a non-tautological register-write- and cycle-exact
trace match.**

*Method.* `SIDdecompiler.exe <file> -a11776 -z -d -c -r -v2` (decimal
11776 = `$2e00`, the PSID load address; `-v2`'s own map reports
`Start: $2e00`, matching the header exactly, so the gotcha-40
relocation trap does not apply here), then
`64tass -a --cbm-prg`. No byte patching was needed on any file —
`-r` (lessons_learned 63) yielded pristine cold-start bytes first try.

*Byte-diff (reassembly vs. original PSID payload, native base $2e00):*

| file | payload | init | subtunes | byte match |
|---|---|---|---|---|
| BMX_Racers.sid | 408 B `$2e00-$2f97` | `$2f90` | 1 | **100.0000%** (0/408 diffs) |
| BMX_Racers_v2.sid | 554 B `$2e00-$3029` | `$3000` | 2 | **100.0000%** (0/554) |
| Jailbreak.sid | 563 B `$2e00-$3032` | `$3000` | 1 | **100.0000%** (0/563) |
| Magic_Carpet.sid | 378 B `$2e00-$2f79` | `$2e60` | 1 | **100.0000%** (0/378) |
| Mind_Control.sid | 838 B `$2e00-$3145` | `$2e93` | 2 | **100.0000%** (0/838) |
| Snake_Pit.sid | 563 B `$2e00-$3032` | `$3000` | 1 | **100.0000%** (0/563) |
| Space_Walk.sid | 420 B `$2e00-$2fa3` | `$2f80` | 1 | **100.0000%** (0/420) |

All seven `play` at `$2e00` (the load address). Note the reassembled
`.prg` is 41,333 bytes rather than the payload length, because `-d`
pads the whole traced range out to the out-of-file workspace byte at
`$cf74` (lessons_learned 24); the diff is taken over the real payload
window only.

*Trace-diff — and why it is NOT tautological.* A byte-identical
reassembly traced against its own original proves nothing (batch24's
`music-processor` precedent), and that trap applies here since the
native-base build IS byte-identical. So the trace claim rests instead on
a **separately relocated build**: `SIDdecompiler -a20480` (`$5000`,
i.e. +`$2200`), which re-emits every absolute operand and moves the
out-of-file workspace to `$67df`/`$f173`/`$f174`. That payload differs
from the original in 20 of 408 bytes at the same offsets, so an
identical trace is a real structural test of the disassembly (a single
mis-parsed instruction boundary would relocate the wrong byte and break
it). Both sides run through `sidm2-sid-trace.exe` (original re-wrapped
as a `.prg` per lessons_learned 22):

| file / subtune | writes @50f | writes @600f | divergences |
|---|---|---|---|
| BMX_Racers s0 | 20 | 193 | **0** |
| BMX_Racers_v2 s0 | 20 | 254 | **0** |
| BMX_Racers_v2 s1 | 20 | 254 | **0** |
| Jailbreak s0 | 14 | 90 | **0** |
| Magic_Carpet s0 | 20 | 213 | **0** |
| Mind_Control s0 | 16 | 192 | **0** |
| Mind_Control s1 | 14 | 145 | **0** |
| Snake_Pit s0 | 18 | 227 | **0** |
| Space_Walk s0 | 28 | 258 | **0** |

**1,826 register writes across 9 subtunes x 600 frames, 0 divergences,
cycle-exact** (the tracer's per-write cycle column matched line for
line). The BMX_Racers 20-writes-per-50-frames figure reproduces the
2026-07-14 pass exactly. 0 filter writes and 0 voice-2/voice-3 writes on
every file, confirming the single-voice/no-filter finding.

*Nothing left open.* Every byte of all seven payloads is accounted for;
the only regions SIDdecompiler marks unreached are the top ~5 entries of
the frequency tables (padding/garbage beyond the highest note actually
used) and inter-table alignment gaps, all of which round-trip verbatim.

## Sources

See the `sources` array — Wikipedia, MobyGames (2 pages), Mastertronic
archive, The Codemasters Archive, Lemon64 (2 pages), CSDb, and the
Gavin Raeburn card.
