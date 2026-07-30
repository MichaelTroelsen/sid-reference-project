# Music Maker 128 (Music Sales Ltd)

```json
{
  "id": "rick-cardinali",
  "name": "Music Maker 128 (Music Sales Ltd)",
  "aliases": ["Music_Maker_128"],
  "authors": ["Rick Cardinali (house composer)"],
  "released": "1985 (Music Sales Ltd)",
  "status": "verified",
  "platform": "A real, named commercial hardware+software product — 'Music Maker 128' — by Music Sales Ltd (a UK music publisher whose 'SFX Computer Software' division also produced Commodore's official SFX Sound Expander/Sampler add-ons). A plastic keyboard overlay turned the C64/C128's keys into a piano-style interface, paired with software; three SKUs existed (Music Maker 64, Music Maker II 64, Music Maker 128). Composer Rick Cardinali appears to have been a house composer/arranger for the entire Music Sales Ltd catalog, not a games-industry or demoscene musician. Player-ID-fingerprinted across 5 files, all his own.",
  "csdb_release": 119395,

  "memory": { "load_address": "PER-FILE, read from each PSID header (all 5 verified by disassembly). Music_Maker_128: load $1f41, end $63ef. Playalong-Beatles: load $5240, end $cfa5. Playalong-Pop_Hits: load $5000, end $cf95. Playalong-Popular_Classics: load $6004, end $cfa5. Sound_Studio_Editor: load $b401, end $cfd5. All 5 have PSID header load-address field 0 (real address embedded as the payload's own first 2 LE bytes). SIDdecompiler's -v2 map Start: == the header load address on every file, so no gotcha-40 relocation trap here.", "zero_page": "TWO BUILDS. Music_Maker_128 build: $1b/$1c, $1d/$1e, $1f/$20 = per-voice tune-stream pointers; $21/$22 = POKE target pointer (used by `sta ($21),Y`); $fb-$fe also touched. Playalong/Sound_Studio build: $4e/$4f, $9e/$9f, $52/$53 = per-voice tune-stream pointers; $b0/$b1 = POKE target pointer; $c5 also used.", "layout": "Music_Maker_128 build: player code $1f41-$2e5a; working variables and note-frequency tables in $2000-$21ff ($2007 = note freq-lo table, $207f = note freq-hi table, $210e/$210f/$2110 = per-voice waveform+gate byte, $21a2 = the player's own page-relocation byte); subtune/voice pointer table $1fbe-$1fff; song data from $2e5e upward. Playalong/Sound_Studio build: player code and variables occupy $c000-$cfd5 (variables in $c000-$c1ff), song data below it from the load address up; Sound_Studio_Editor's init copies a 156-byte ($9c) cold-state block from $cd90 to $c0fc, and banks $01 = $36 for the duration of play (restoring $37 on exit)." },
  "entry": { "init": "Music_Maker_128: $1f41 (== load address; A = subtune, `tay` first instruction). Playalong x3: $cef0. Sound_Studio_Editor: $ce30.", "play": "Music_Maker_128: $1fb4. Playalong x3: $cef3. Sound_Studio_Editor: $ce6a. Music_Maker_128's init programs CIA1 timer A ($dc04/$dc05 := $0050) and its play entry is guarded by a `ror play+1` self-modified skip flag." },
  "speed": "CIA-timed, not raster: PSID speed word is $000007ff (Music_Maker_128), $00000fff (all 3 Playalong albums) and $00000001 (Sound_Studio_Editor) — i.e. most subtunes are flagged CIA. Music_Maker_128's init writes $dc04/$dc05 directly, confirming the driver programs the timer itself.",
  "data_format": { "order_list": "Music_Maker_128 build: a 66-byte subtune/voice pointer table at $1fbe-$1fff — 3 voices x (11 lo bytes then 11 hi bytes), voice stride 22, indexed as `lda $1fbe,Y` / `ora $1fc9,Y` with Y = subtune then Y += $16. The stored 16-bit value is (real data address + $11a2); init recovers the address with `sec / sbc #$a2` on the lo byte and `sbc #$11` on the hi byte. A zero entry means 'this voice is unused in this subtune'. Playalong/Sound_Studio build: the per-voice stream pointers are set from the cold-state block / from immediates in the init tail instead.", "patterns": "A per-voice byte-command stream read through `lda (zp),Y` with the ZP pointer incremented in place (`inc z1b / bne / inc z1c`). Commands dispatch through a jump ladder; $fe and $ff act as terminators in several sub-commands.", "instruments": "Per-voice waveform+gate is held in a single player variable ($210e/$210f/$2110 in the Music_Maker_128 build) and emitted as (value-1) then value to $d404/$d40b/$d412, i.e. gate-off then gate-on in consecutive writes. Note frequency comes from indexed tables ($2007 lo / $207f hi in the Music_Maker_128 build) via `ldx <note> / lda $2007,X / sta $d400`.", "wavetable": "None — no per-frame wavetable stepping observed; waveform changes come from the POKE command (see effects.encoding).", "pulsetable": "No table; pulse width is set directly ($d402/$d403, $d409/$d40a, $d410/$d411) from two player variables under a per-voice enable flag.", "filtertable": "No filter table. $d415-$d418 writes exist in the code but no filter writes appear in the traced frames of any of the 5 files." },
  "effects": { "encoding": "THE DEFINING FEATURE OF THIS DRIVER IS A GENERIC POKE COMMAND: a command in the tune stream feeds a chain of (target_lo, target_hi, value) triples straight into memory via `sta (zp),Y`, terminated when target_hi == $ff. Almost all 'effects' (waveform change, ADSR, pulse, tempo, flags) are expressed as pokes into the driver's own variable page rather than as dedicated opcodes. Routine at $2a81 (Music_Maker_128) / $c9e7 (Playalong, Sound_Studio_Editor).", "commands": { "poke-chain": "(lo, hi, value) triples; hi == $ff ends the chain. In the Music_Maker_128 build ONLY, hi == $c1 is a marker meaning 'substitute the page byte held at $21a2' — this is the driver's own page-relocation hook. The Playalong/Sound_Studio build has no such marker and takes hi literally from song data.", "gate": "waveform+gate written as (v-1) then v to the voice control register" } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "ALL 5 TAGGED FILES ARE ONE DRIVER FAMILY IN THREE BUILDS, confirmed by a lesson-68 relative-offset opcode-pattern scan (patterns with no address operands, plus the hardware-fixed $d4xx register operands): the 3-voice gate-off/gate-on idiom (`38 ad ?? ?? e9 01 8d 04|0b|12 d4 ad ?? ?? 8d 04|0b|12 d4`) and the POKE loop head (`a0 00 b1 ?? 85 ?? e6 ??`) are present in all 5. Build A = Music_Maker_128 (offsets +$99/+$132/+$611 from the voice-1 gate anchor). Build B = the 3 Playalong albums, which share IDENTICAL offsets (+$8b/+$117/+$562/+$572) — one build, differing only in per-album embedded state/pointer bytes (98-185 differing bytes across $c000-$cf95). Build C = Sound_Studio_Editor (+$e7/+$1ce/-$b1), a leaner build with one gate site per voice instead of two.",
    "THE DRIVER'S 'EFFECTS' ARE A GENERIC MEMORY-POKE COMMAND, not an opcode set: the tune stream carries (target_lo, target_hi, value) triples that are written straight into the driver's own variable page via `sta (zp),Y`, chain-terminated by target_hi == $ff. This is why the card's `effects.commands` is nearly empty — there is very little dedicated effect logic to enumerate; a song changes waveform/ADSR/pulse/tempo by poking the variable it wants. It is also why the two builds differ in relocatability (next quirk).",
    "THE MUSIC_MAKER_128 BUILD IS PAGE-RELOCATABLE BY DESIGN AND THE OTHER FOUR ARE NOT. In the $1f41 build, a POKE whose target_hi byte is $c1 is a MARKER: the driver substitutes the page byte it keeps at $21a2 (value $21). Fix that one byte up and every song-data poke follows the driver to a new page. The Playalong/Sound_Studio build at $c9e7 dropped the marker and takes target_hi literally from song data, so its poke targets are hard-wired to page $c1 and the driver cannot be moved without rewriting the songs. Both builds are page-granular only in any case: the poke target's LOW byte always comes from song data, so a non-page-aligned relocation is structurally impossible (confirmed empirically — see Verification).",
    "SIDDECOMPILER LEAVES 13 OF THE 33 SUBTUNE POINTER-TABLE ENTRIES AS LITERALS in Music_Maker_128, and this is invisible at the native address. The table stores (data address + $11a2), so 13 entries have raw values $656d-$7459 — past the file's $63ef end — and SIDdecompiler correctly declines to label them even though the addresses they resolve to ($53cb-$62b7) are all inside the file. The native reassembly is 100% byte-exact regardless; the defect only appears in a relocated control build, where exactly subtunes 3,4,6,7,8,9 (the ones using those 13 entries) diverge and 0,1,2,5,10 are clean. Re-emitting all 66 table bytes as `<(init+$off)` / `>(init+$off)` fixes it with no change to the native bytes.",
    "'MUSIC MAKER 128' IS A GENUINE NAMED COMMERCIAL PRODUCT, confirmed via multiple independent sources — not just the title of one tune: SIDId's own reference (`sidid.nfo`) records it as `RELEASED: 1985 Music Sales Ltd` with a CSDb reference (id=119395); a floodgap.com retrospective on Commodore's SFX product line independently confirms 'Music Maker' was a hardware+software line by Music Sales Ltd — a plastic keyboard overlay turning the C64/C128 keyboard into a piano-style interface, introduced ~November 1984 in the UK (£20-£30), also sold in Germany/Canada/Mexico/Australia, with three SKUs (Music Maker 64, Music Maker II 64, and this one, the C128-specific Music Maker 128).",
    "RICK CARDINALI'S ROLE APPEARS TO BE HOUSE COMPOSER/ARRANGER FOR THE WHOLE MUSIC SALES LTD CATALOG, not a games-industry credit: a direct CSDb search returns EXACTLY 5 SID results for 'Cardinali,' ALL published by Music Sales Ltd — Music Maker 128 (1985, the traced file), Playalong Album: Beatles (1985), Playalong Album: Pop Hits (1985), Playalong Album: Popular Classics (1985), and Sound Studio Editor (1986) — an exact match to this tag's 5-file local dataset. This reads as a home-education/creative-music-software composer, entirely distinct from the games/demoscene ecosystem most other composers in this KB come from.",
    "NO OTHER C64 GAME OR DEMO CREDITS FOUND for Rick Cardinali anywhere (Lemon64, MobyGames, general web) — his entire known output is these 5 Music Sales Ltd files. NO CSDb SCENER PROFILE EXISTS either, consistent with a non-demoscene commercial-software composer.",
    "WHO ACTUALLY CODED THE MUSIC MAKER HARDWARE/SOFTWARE ITSELF IS UNCONFIRMED — no source names a specific programmer for the product; Cardinali's confirmed role is composing the bundled music CONTENT, not necessarily the underlying software engineering. Left explicitly open rather than assumed.",
    "HVSC HAS MINIMAL DATA for this composer — a bare 'Cardinali, Rick' entry, no country, no group field.",
    "Not confirmed beyond the SIDId entry already known for this tag (name/reference present, author field empty in the project's own cached copy — the fuller identity above comes from this research pass, not SIDId itself). No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Cardinali, Rick', bare entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "sidid.nfo / data/sidid.json (project's own SIDId import — name, released, CSDb reference): local repo file",
    "CSDb release id=119395 ('Music Maker 128', cracked 1986 by Softrunner Group): https://csdb.dk/release/?id=119395",
    "floodgap.com — SFX Computer Software retrospective (Music Maker product line, Music Sales Ltd context): https://www.floodgap.com/retrobits/ckb/secret/sfx.html",
    "Lemon64 forum — Music Maker 128 / C128 keyboard overlay discussion: https://www.lemon64.com/forum/viewtopic.php?t=27417",
    "CSDb search for 'Cardinali' (5 results, all Music Sales Ltd, matching the local dataset exactly)",
    "Local dataset: 5 files tagged Music_Maker_128, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Music_Maker_128` tag is a real, named commercial product — a
keyboard-overlay music tool by Music Sales Ltd, the UK publisher behind
Commodore's own SFX Sound Expander/Sampler line. Composer Rick Cardinali
appears to have been Music Sales Ltd's house composer, credited on all 5
of the label's known C64 SID releases. Player-ID-fingerprinted across 5
files, all his own.

## Quirks & gotchas

Two load-bearing ones now. Historically: the **confirmed
commercial-product identity** — unlike most tags in this KB, this one
names a physical hardware+software product (a piano-style keyboard
overlay) rather than a composer's personal or studio driver, and
Cardinali's 5-file output maps EXACTLY onto the publisher's entire known
SID catalog. Technically: the driver's **"effects" are a generic memory-POKE
command**, so almost nothing is encoded as a dedicated opcode — a song
changes waveform/ADSR/pulse/tempo by poking the driver's own variables
with (lo, hi, value) triples carried in the tune stream. That single
design choice explains the empty `effects.commands` map, the split
between the page-relocatable Music Maker 128 build and the
non-relocatable Playalong/Sound Studio build, and everything the
relocation control had to work around.

## Disassembly notes

No published source (not in the realdmx RE repo, no STIL note). Everything
in the `memory` / `entry` / `data_format` / `effects` blocks above comes
from this project's own disassembly of all 5 tagged HVSC files
(2026-07-30), not from any external document. Recipe, per file:

```
SIDdecompiler.exe <file>.sid -o<out>.asm -a<DECIMAL of the -v2 map Start:> -z -d -c -r
64tass.exe -a --cbm-prg -o <out>.prg <out>.asm
```

`-v2` reports `Start:` == the PSID header load address on all 5 files, so
no gotcha-40 relocation adjustment is needed. `-r` was sufficient on every
file — **zero hand-patching of self-modified bytes was required** to reach
byte-exactness.

Who coded the underlying software is still unconfirmed. A printable
ASCII/PETSCII scan of all 5 payloads (lesson 74's technique, `&0x7f`
masked, runs >= 10 chars) found **no credit block and no author string**
— the only true text literal anywhere in the family is a 4-byte `"SAVE"`
at `$bffc` in `Playalong-Pop_Hits` (preceded by `$aa` filler, an editor
leftover); every other long "printable" run is note-frequency table data.
So the authorship question cannot be settled from the binaries, unlike
e.g. `comptech-x`.

## Verification

**Byte-exact + relocation-controlled on all 5 tagged files (2026-07-30) —
`status: verified`.**

### Byte-diff (reassembly vs. original PSID payload, native address)

| file | load | init / play | subtunes | payload | byte-diff |
|---|---|---|---|---|---|
| `Music_Maker_128.sid` | `$1f41` | `$1f41` / `$1fb4` | 11 | 17,583 | **100.0000%** (0 diffs) |
| `..._Playalong_Album-Beatles.sid` | `$5240` | `$cef0` / `$cef3` | 12 | 32,102 | **100.0000%** (0 diffs) |
| `..._Playalong_Album-Pop_Hits.sid` | `$5000` | `$cef0` / `$cef3` | 12 | 32,662 | **100.0000%** (0 diffs) |
| `..._Playalong_Album-Popular_Classics.sid` | `$6004` | `$cef0` / `$cef3` | 12 | 28,578 | **100.0000%** (0 diffs) |
| `Sound_Studio_Editor.sid` | `$b401` | `$ce30` / `$ce6a` | 1 | 7,125 | **100.0000%** (0 diffs) |

### The tautology problem, and the control that answers it

A 100%-byte-exact `-r` build makes a trace against the original identical
*by construction*, so it proves nothing on its own. Each file was
therefore rebuilt from the SAME disassembly at a DIFFERENT base
(`$1f41`→`$2f41` for Music Maker 128; `-$1000` for the other four, which
already sit near `$cfxx`) and traced against the original, comparing on
`frame:cycle:register:old:new` tuples. Result:

| file | control base | bytes differing from native | subtunes traced | register writes | trace diffs |
|---|---|---|---|---|---|
| `Music_Maker_128` | `$2f41` | 448 / 17,583 | 11 / 11 | 608 | **0** |
| `Playalong-Beatles` | `$4240` | 1,040 / 32,102 | 12 / 12 | 662 | **0** |
| `Playalong-Pop_Hits` | `$4000` | 964 / 32,662 | 12 / 12 | 930 | **0** |
| `Playalong-Popular_Classics` | `$5004` | 854 / 28,578 | 12 / 12 | 722 | **0** |
| `Sound_Studio_Editor` | `$a401` | 478 / 7,125 | 1 / 1 | 95 | **0** |

**3,017 register writes across 48 subtunes, 0 divergences, cycle
timestamps included** (all deltas are page-aligned, so no page-crossing
drift).

### What the control needed, and what that means

The control builds are NOT the raw SIDdecompiler output — reaching 0
required identifying three genuine address-classification issues. All
three are cited precisely because each is a reusable finding:

1. **`$21a2` — the driver's own page-relocation byte (Music Maker 128).**
   Emitted by SIDdecompiler as a literal `.byte $21`. It is the page the
   POKE command substitutes when a song's poke target carries the `$c1`
   marker. Re-emitting it as `.byte >l21a5` (native value still `$21`,
   byte-diff still 100%) took the relocated build from 187 diffs to 0 on
   subtune 0.
2. **13 of 33 subtune pointer-table entries (Music Maker 128).** See the
   quirk above. Re-emitting all 66 bytes of `$1fbe-$1fff` as
   `<(init+$off)` / `>(init+$off)` fixed subtunes 3,4,6,7,8,9.
3. **A hardcoded `$b400` stream pointer (Sound Studio Editor).** Init
   loads voice 1's tune pointer as `lda #$00 / sta $4e / lda #$b4 / sta
   $4f`, i.e. the literal address `$b400` — ONE byte below the file's own
   load address `$b401`, so SIDdecompiler could not label it and left it
   as an immediate (lesson 77's class exactly; voices 2 and 3 got proper
   `#<lb598` / `#<lb79c` labels). Rewriting as `#<(BASE-1)` / `#>(BASE-1)`
   against a `BASE = *` equate at the origin fixed it.

**One honest caveat on the four non-`Music_Maker_128` files.** Those
builds' POKE targets are fully literal 16-bit addresses embedded in SONG
DATA (no `$c1` page marker — see quirks), so the relocated control also
needed those data bytes moved: 554 / 537 / 366 / 41 poke target hi-bytes
respectively, identified as the hi byte of a `$ff`-terminated
(lo, hi, value) chain with hi in pages `$c0-$c3`, and applied as a binary
data patch to the control build. This is a property of the FILE FORMAT,
not a disassembly error — SIDdecompiler cannot know a song-data byte is
an address. Every byte on the CODE side of all five control builds came
from the disassembly's own symbols with no manual intervention beyond the
three source fixes listed above.

### Non-page-aligned relocation fails, as expected

A second Music Maker 128 control at `$3055` (delta `$1114`, non-zero low
byte) diverges. This is not a defect: the POKE target's low byte always
comes from song data and only the PAGE is fixable (via `$21a2`), so this
driver is page-granular-relocatable by construction. Per lesson 79's
diagnostic split, "clean aligned / dirty unaligned" here has a confirmed
structural explanation rather than an unexplained low-byte leak.

## Sources

See the `sources` array — HVSC Musicians.txt, sidid.nfo, CSDb (2 entries),
floodgap.com, and a Lemon64 forum thread.
