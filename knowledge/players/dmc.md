# DMC (Demo Music Creator)

```json
{
  "id": "dmc",
  "name": "DMC (Demo Music Creator)",
  "aliases": ["DMC", "DMC_V4.x", "DMC_V5.x", "DMC_V6.x", "Graffity/Brian", "Demo Music Creator", "Demo Music Creator System"],
  "authors": ["Brian (Graffity)"],
  "released": "1991 (V1.2 Feb 1991; V4.0 Sep 1991)",
  "status": "verified",
  "platform": "Native C64 tracker/editor ('ProTracker for the C64'). Closed classic tool; V5.0 was later placed in the public domain by the author.",
  "csdb_release": 2596,

  "memory": {
    "load_address": "$1000 — tunes are relocated/packed to $1000 (V4/V7 have an integrated packer; V5 has a separate packer).",
    "zero_page": "$F8/$F9 = zf8/zf9: general-purpose data pointer (lda/sta (zf8),Y). Only two ZP bytes used by the player.",
    "layout": "Code: $1000-$1646 (init, play, per-voice handler, effects). Freq tables: $1647-$1706 (lo/hi, 96 entries each). Per-voice state: $1707-$17BF (3 voices × ~61 bytes). Pattern parser: $17C0-$187F. Note-step table: $1888-$18EF (96 bytes, first 6 overlap with code at $1888-$188D). Instrument/command table: $18F0-$1A4F (14 entries × 11 bytes). Sub-tune headers: $1A50-$1A5F+ (scratch). Filter table: $1A10-$1A4F (embedded in same range). Wave/vibrato tables: $198A-$1A0F ($198A wave, $19CD vib, ~67 entries each). Song data (order lists + patterns): $1A50-$1C16 in Autocomposer; varies per file."
  },
  "entry": {
    "init": "$1000 (init at load) — LOCALLY CONFIRMED on a real HVSC DMC file. Init routine at $1807: subtune×8 → Y, loads 3 order-list pointers (6 bytes) from sub-tune header at $1A5C+, then reads speed and volume from header+6.",
    "play": "$1003 (once per frame) — LOCALLY CONFIRMED: a real HVSC DMC_V4.x file traced with load=$1000, init=$1000, play=$1003, 369 register writes/50 frames. The classic $1000/$1003 packed convention (per-file, but standard for DMC exports). Play at $1085: dec speed counter, process 3 voices via $10B0, write filter cutoff to $D416, write volume/filter mode to $D418."
  },
  "speed": "1x IRQ-driven (standard). Variant builds: V5.Z is a 6x-speed build; the unreleased V6.0 was a low-rastertime (7-8 raster lines) player. Supports up to 7 sub-tunes (V5.0+).",

  "data_format": {
    "order_list": "Byte stream, one per voice. $00-$7F = pattern number (plays that pattern). $80-$FD = transpose (signed relative; $80 and $A0 both = 0, range -31 to +93 semitones), next byte is the pattern number. $FE = stop voice (l100c,X=0, rts). $FF = loop to start of order list. Each sub-tune header at $1A5C+ (8 bytes/sub-tune): bytes 0-5 = three order-list pointers (lo,hi × 3); byte 6 = speed (frames/tick); byte 7 = volume/filter mode (stored to $D418).",
    "patterns": "Byte stream. $00-$5F = note (0-95, ~8 octaves) — triggers note with current command, instrument, and default duration (l173e,X). $60-$7F = set command/envelope type (byte & $1F = 0-31, but only 0-13 have valid table entries; stored in l1015,X), advance without triggering note. $80-$BF = duration prefix (byte & $3F = 0-63 frames at speed=1; stored in l173e,X as default), advance to read actual note/command. $C0-$EF = DUR command (see effects). $F0-$FF = instrument number (byte & $0F = 0-15; stored in l17b3,X, affects SR high-nibble only), advance without note. $7C = toggle portamento (l17b0,X ^= 1). $7D = gate toggle — reset duration to l173e, toggle gate bit (l100f,X), no ADSR re-trigger. $7E = repeat note — reset duration to l173e, no ADSR re-trigger. $7F = end of pattern — reset pattern position (l1729,X=0), advance order list (l1726,X++), clear portamento.",
    "instruments": "14 command-table entries of 11 bytes each at $18F0, indexed by l1015 (command type 0-13) × 11. Layout per entry: [0] AD (→ $D405). [1] SR (→ $D406; if l17b3!=0, sustain=instrument×16, release=this & $0F). [2] PW: low nibble = sustain level (l1753), high nibble = attack rate (l1756); decay rate = l1756 ^ $0F (l1759). [3-5] 6 PW step values as packed nibbles (2 per byte, high then low), stepped by sequence index l1762 (0-5). [6] Low nibble = filter table index; high nibble = PW base (l175f). [7] High nibble = vibrato delay in frames (l1771); low nibble = vibrato steps per direction (l1774). [8] Vibrato depth — number of direction changes (l1777); also serves as arpeggio rate when flags bit 6 set. [9] Waveform/vibrato table start index (l177a → $198A/$19CD). [10] Flags (l177d): bit 0 ($01) = sync/noise mode (freq from vibrato table directly), bit 1 ($02) = filter sweep linked to note trigger, bit 2 ($04) = skip PW/wave processing, bit 5 ($20) = filter enable, bit 6 ($40) = arpeggio mode (vibrato becomes arpeggio modulating l1798/l179b), bit 7 ($80) = hard restart via testbit ($FF→freq, $81→ctrl). The separate instrument number (0-15, from $F0-$FF pattern bytes) ONLY overrides the sustain level (upper nibble of $D406); ALL other sound parameters come from this command-indexed table.",
    "wavetable": "Parallel arrays at $198A (waveform + gate byte → $D404, e.g. $41=saw+gate, $81=noise+gate, $11=triangle+gate) and $19CD (signed pitch offset in semitones, added to current note for frequency lookup). Values $90-$FF in $198A are relative loop-back markers: new index = old_index - (byte - $90). $19CD at the same index gives the pitch offset. Used per-frame via l1591/l15d5; bit 0 of flags selects sync/noise mode (direct freq write instead of note+offset).",
    "pulsetable": "6 PW envelope steps packed as nibbles in instrument bytes [3-5] (3 bytes × 2 nibbles = 6 steps, high nibble first). Per-frame PW update at l134e: step value read from appropriate nibble based on l1762 (0-5), shifted to high nibble, added to l175f (PW base from inst byte 6 high nibble), stored in l175c. l1750/l1753 (PW accum lo/hi) accumulate l175c each frame; attack/decay direction from l1765. PW written to $D402/$D403 at l1603.",
    "filtertable": "16 bytes per entry at $1A10+, indexed by (instrument[6] & $0F) × 16. Bytes 0-3: filter config/resonance (merged with volume for $D418), cutoff lo (l171c), cutoff/hi (l171d), cutoff target (l171e). Bytes 4-9 (l1a14+): 6 sweep step values (added to cutoff each stage). Bytes 10-15 (l1a1a+): 6 sweep durations (frames per stage). Global sweep across up to 6 stages: l1719 = stage index, l171a = frame counter within stage. Filter active only when flags bit 5 ($20) set and bit 1 ($02) clear on the FIRST voice to reach l13c5 (l1720 mutex).",
    "freqtable": "96-entry note-to-frequency lookup at $1647 (lo) / $16A7 (hi), standard PAL C64 tuning. Index = note number 0-95. Also: note-to-vibrato-step table at $1888+ (96 bytes, note-indexed; first 6 entries overlap with code at $1888-$188D, actual data starts at $188E; values $02-$FC, higher notes use larger vibrato steps).",
    "sub_tune_header": "At $1A5C+: 8 bytes per sub-tune. Bytes 0-5: three order-list pointers (lo,hi × 3 channels). Byte 6: speed (frames/tick, stored in l1716). Byte 7: volume/filter mode (→ $D418). Sub-tune count = (table_end - $1A5C) / 8. Init at $1807: subtune×8 → Y, load 3 order-list ptrs, then Y+=6 reads speed + vol from same header.",
    "voice_state": "Per-voice ZP-relative state at $100C-$17B5 (X-indexed for voices 0-2). Key fields: l100c,X = voice active flag. l100f,X = gate bit mask ($FF=on, $FE=off). l1012,X = current note. l1015,X = command type (l174d = this × 11). l1707/a,X = order list ptr. l170d,X = SID reg base ($00/$07/$0E). l1710/13,X = filter enable/inverse mask. l1726,X = order list position. l1729,X = pattern position. l172c,X = transpose. l172f/32,X = freq lo/hi. l1735/38,X = pitch slide accumulator. l173b,X = row duration counter. l173e,X = default duration. l1741,X = DUR slide rate. l1744/47,X = DUR start/target note. l174a,X = note trigger flag. l174d,X = instrument table index. l1750/53,X = PW lo/hi. l17b0,X = portamento flag. l17b3,X = instrument number. l1771,X = vibrato delay. l1774,X = vibrato steps. l1777,X = vibrato cycles/arpeggio rate. l177a,X = waveform table index. l177d,X = effect flags. l1780,X = waveform. l1786,X = gate delay (2 frames). Global vars: l1716 = speed, l1717 = volume, l1718 = speed counter, l1719 = filter stage, l171a = filter counter, l171b = filter table base, l171c/d = filter cutoff lo/hi, l171e = filter target, l1720 = filter mutex."
  },
  "effects": {
    "encoding": "Command byte range $60-$7F sets envelope/effect preset (0-31, effectively 0-13 with 14 valid table entries) via byte & $1F → l1015,X. DUR command range $C0-$EF encodes 32 command types with pitch-slide parameters. Instrument range $F0-$FF sets instrument number 0-15 (l17b3,X). Special bytes $7C (portamento), $7D (gate toggle), $7E (repeat).",
    "commands": {
      "0x00-0x0d": "Command/envelope presets 0-13. Each selects one 11-byte entry from $18F0 table: AD, SR, PW envelope (6 steps), filter index, vibrato/arpeggio params, waveform table start, flags (hard restart, arpeggio mode, filter enable, sync/noise). Commands 14-31 index beyond the 14-entry table into waveform data (undefined behavior).",
      "DUR_pitch_slide": {
        "range": "$C0-$EF in pattern (48 bytes encoding 32 command numbers)",
        "encoding": "byte & $1F = DUR command 0-31. Low nibble (byte & $0F) = slide rate parameter → l1741,X. Bit 4 (byte & $10): clear = 2 data bytes follow (start_note + transpose → l1744,X, end_note + transpose → l1747,X), set = 1 data byte follows (end_note + transpose → l1747,X, start_note = current l1012,X → l1744,X). Note: $E0-$EF (bit 6=1) AND-masks identically to $C0-$CF — same 1-byte variant, effectively aliased commands 0-15.",
        "effect": "If l1741 != 0: per-frame pitch slide. Compute step = l1741 × 16. Compare l1744 vs l1747: if l1744 < l1747, add step to pitch accumulator l1735/l1738 (slide up); else subtract (slide down). When accumulator-referenced frequency reaches the target note's frequency-table entry (l16a7), terminate: set current note to target, clear l1741,X, zero accumulator. Accumulator shared with vibrato (additive interaction)."
      },
      "portamento": "$7C toggles l17b0,X. When active, new notes skip ADSR re-trigger in l11a2 (frequency slides without fresh attack, using SID's existing state). Auto-cleared at pattern end ($7F), by order-list advance (l182d), and on new note trigger (l17b0 check at l11a2).",
      "gate_toggle": "$7D: l173e → l173b (reset duration counter), l100f,X ^= 1 (toggle gate bit between $00 and $FF, turning current SID voice on/off without ADSR). Advances pattern. Falls through to $7F check and per-frame effects.",
      "repeat": "$7E: l173e → l173b (reset duration counter). Advances pattern. No ADSR re-trigger, no gate change. Falls through to $7F check and per-frame effects.",
      "hard_restart": "Controlled by instrument flags bit 7 ($80). When set: write $FF to freq lo/hi ($D400/$D401), then $81 to control ($D404) — gate on + test bit set, the standard C64 testbit hard-restart technique. When clear: standard gate-on via l17fb (brief gate-off + ADSR restore then gate on with $FF in l100f). Applied on new note trigger only (l1318 vs l1591 path)."
    }
  },

  "edges": {
    "derives_from": ["gmc"],
    "successor_of": ["gmc"],
    "shares_routine_with": ["gmc"],
    "same_effect_encoding_as": ["gmc"]
  },

  "quirks": [
    "The single most-used player in the collection without a card (10,491 files across 365 composers). Full name 'Demo Music Creator System' (CSDb release titles). Author is the handle 'Brian' of the Hungarian group Graffity (also seen as 'Baliszoft'). SIDId gives the real name 'Balázs Farkas' — recorded but NOT independently confirmed by other sources; treat the legal name as unverified.",
    "LINEAGE: DMC is the improved successor to GMC (Game Music Creator), the same author's earlier tool (now carded as [[gmc]]) — wired here as derives_from / successor_of gmc. A CSDb comment on the GMC release even says 'they should have called this DMC V1.0'.",
    "Uses the modern 'testbit' hard-restart technique (a shared TECHNIQUE with JCH NewPlayer, not shared code) — noted here, not asserted as an edge.",
    "Version tangle (all one lineage, but confusingly numbered): V2.1, V4.0, V5.0/5.0+ (Creamd/C64.SK community build), V5.1/5.4, V5.Z (6x speed), V7.0/7.1beta (Unreal — actually a modified V4). V6.0 EXISTS but was never publicly released (editor by Syndrom/TIA, player by Brian). A separate player 'SYNC' is sometimes mislabeled 'DMC V6'.",
    "Runtime data format is genuinely undocumented online — filled by disassembly (via the sidm2-siddump / mcp-c64 loop), not by guessing. NOW DOCUMENTED (2026-07-23): all data_format and effects fields populated from byte-exact disassembly of Autocomposer_for_ZX81.sid."
  ],
  "sources": [
    "CSDb: DMC V4.0 https://csdb.dk/release/?id=2596 ; DMC V1.2 https://csdb.dk/release/?id=2598 ; Graffity group https://csdb.dk/group/?id=193 (authorship, versions, dates)",
    "The New Dimension 'Music Scene': http://tnd64.unikat.sk/music_scene.html (GMC→DMC lineage, packing to $1000, version overview; V5.0 public-domain note)",
    "Lemon64 'DMC 6' thread: https://www.lemon64.com/forum/viewtopic.php?t=24476 (author statements on V6/V7, rastertime)",
    "Codebase64 SID programming (testbit hard-restart technique): https://codebase64.net/doku.php?id=base:sid_programming",
    "sidid:DMC (author 'Balázs Farkas (Brian)', 1991, CSDb 2598)",
    "Local dataset: 10,491 files tagged DMC/DMC_V4.x/V5.x/V6.x (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

DMC ("Demo Music Creator System") is a native C64 music editor by the handle
**Brian** of the Hungarian group **Graffity**, first released ~1991 and the
improved successor to the same author's **GMC (Game Music Creator)**. It is by
a wide margin the most-used player in this collection that lacks a card —
**10,491 files across 365 composers** — and was a staple of the demoscene
(often described as "ProTracker for the C64"). It went through a confusing
version history (V4/V5/V7 all in circulation, an unreleased low-rastertime V6),
and V5.0 was eventually placed in the public domain.

## Quirks & gotchas

See the `quirks` array. Load-bearing: **the version numbering is a trap** (V7 is
a modified V4; V6 was never released; "SYNC" is a different player mislabeled
DMC V6); the **real-name attribution is unverified** (only the handles Brian /
Baliszoft are firmly sourced); and it **derives from GMC** by the same author
(a lineage edge to wire once GMC is carded). It shares the *testbit hard-restart
technique* with JCH NewPlayer — a technique, not shared code.

## Disassembly notes

Two independent real HVSC DMC_V4.x files fully disassembled (SIDdecompiler),
reassembled (64tass), byte-diffed, and trace-verified — both reaching
**100.0000% byte-exact and trace-exact** after one round of hand-patching a
small self-modified table (see Verification). Structural internals (ZP
layout, order list / pattern / instrument / wavetable / pulsetable /
filtertable formats, effect encoding) were NOT reverse-engineered — this pass
established byte-for-byte and register-write equivalence only, not the
player's data format. Those remain `TODO` (matches this project's
`roland-hermans` precedent: verified playback parity does not require full
format documentation).

## Verification

**Entry points + playback LOCALLY CONFIRMED (2026-07-13).** Traced a real
HVSC DMC_V4.x `.sid` with `sidm2-sid-trace`: load `$1000`, init `$1000`, play
`$1003`, **369 register writes / 50 frames** — confirming the `$1000`/`$1003`
packed convention and that it plays.

**Full disassemble/reassemble/byte-diff/trace-diff pass, first attempt
(2026-07-18) — status stayed `in-progress`.** Used `SIDdecompiler.exe`
(`-a4096 -z -d -c -v2/-v1`, i.e. decimal for `$1000`) + `64tass` on two
independent real HVSC DMC_V4.x files (the highest-usage variant, 5,337 of the
10,491 total DMC-family files):

- **File 1**: `MUSICIANS/C/CHR_142/Autocomposer_for_ZX81.sid` (load/init
  `$1000`, play `$1003`, payload 3,095 bytes). Reassembled to exactly 3,095
  bytes at `$1000-$1C16`. **Byte-diff: 98.45% (48/3095 bytes differ)**, all
  falling in two address ranges: `$100F-$1016` (8 bytes) and
  `$1718-$1793` (40 bytes, scattered). Both ranges are marked `+`
  (write-touched at runtime) in the decompiler's own `-v2` memory-touch map,
  the same pattern as `future-composer`'s entry-10 finding. **Trace-diff:
  50-frame register-write trace via `sidm2-sid-trace.exe` (init `$1000`,
  play `$1003`) is EXACT — 369/369 writes identical, byte-for-byte** (only
  the tool's echoed input filename differs between the two log files).
- **File 2** (per this project's own gotcha 16 — never trust one file's
  trace-exact result as representative): `MUSICIANS/A/Abee/After_Promises.sid`
  (load/init `$1000`, play `$1003`, payload 4,084 bytes). Reassembled to
  exactly 4,084 bytes at `$1000-$1FF3`. **Byte-diff: 98.16% (75/4084 bytes
  differ)**, in the SAME two address ranges as file 1 (`$1012-$1017` and
  `$1719-$17B5`) — strong evidence this is a consistent player-internal
  table, not file-specific noise. **Trace-diff: 327 total register writes
  over 50 frames; 326/327 identical, but ONE write pair genuinely diverges**:
  frame 0, `osc3_freq_lo`/`osc3_freq_hi` written as `$FA/$A8` in the real
  file vs `$31/$1C` in the reassembly (99.69% trace-exact, not 100%).
  Traced the root cause into the disassembly: `$1012-$1017` is a 6-byte
  table (`l1012: .byte $0c,$30,$39` / `l1015: .byte $07,$04,$02` in the
  reassembled source) that is BOTH read (`ldy l1012,X` / `lda l1015,X` /
  `adc l1015,X`) and written (`sta l1012,X` / `sta l1015,X`) at runtime —
  exactly the entry-16 cheesecutter failure mode: the decompiler's default
  `-t` trace window baked in a post-execution (drifted) snapshot of this
  table rather than its true cold-start constants, and file 2's play routine
  happens to read the wrong byte from it during voice-3 setup where file 1's
  does not.
  
  **Conclusion (at this stage): a genuine, localized, well-characterized
  ~98.2-98.5% byte match and ~99.7-100% trace match, not a full match** — the
  gap is isolated to one small startup-constant table at `$1012-$1017` (and
  its associated working-storage region `$1719-$17B5`) that the decompiler's
  default trace window baked in a post-execution (drifted) value for instead
  of the pristine cold-start constant.

**Hand-patch pass (2026-07-18, same day, follow-up) — status raised to
`verified`.** Per the next-step already identified above: wrote both `.sid`
files' pristine payload bytes (read directly via the `psid_header` method,
NOT the decompiler's post-execution snapshot) back into the reassembled
`.asm`'s `.byte` directives at every one of the 48 (file 1) / 75 (file 2)
diverging addresses, all of which fell inside the labeled data-table lines
SIDdecompiler itself emitted (`l100c`/`l100f`/`l1012`/`l1015` and the
`l1710`-`l1794`-ish per-voice table block) — no code changes, only literal
constant bytes patched. Reassembled with 64tass and re-diffed/re-traced:

- **File 1** (`Autocomposer_for_ZX81.sid`, load/init `$1000`, play `$1003`,
  3,095-byte payload): reassembled to exactly 3,095 bytes at `$1000-$1C16`.
  **Byte-diff: 100.0000% exact (0/3095 bytes differ).** Trace-diff (50
  frames, `sidm2-sid-trace.exe`, init `$1000`/play `$1003`): the two 427-line
  logs differ **only** in the echoed input filename on line 1 — every
  register write is identical.
- **File 2** (`After_Promises.sid`, load/init `$1000`, play `$1003`,
  4,084-byte payload): reassembled to exactly 4,084 bytes at `$1000-$1FF3`.
  **Byte-diff: 100.0000% exact (0/4084 bytes differ).** Trace-diff (50
  frames, same tool/addresses): the two 385-line logs also differ **only** in
  the echoed filename — the previously-diverging frame-0
  `osc3_freq_lo`/`osc3_freq_hi` write pair now matches exactly.
- Both files independently reach exact byte and register-write parity —
  meets this project's `verified` bar (matching `laxity-newplayer`'s and
  `roland-hermans`'s precedent). This is the highest-usage uncarded-until-now
  player family closed to `verified` so far (10,491 files). Player **data
  format internals** (ZP, order list/pattern/instrument/table layout, effect
  encoding) remain unexamined and `TODO` — this pass established playback
  parity, not the runtime data format; see Disassembly notes.
- Exact byte-level patch table for both files (durable, not scratchpad):
  `knowledge/players/reconstructions/dmc.md`.

## Sources

See the `sources` array — primarily CSDb (Graffity group + the V4.0/V1.2
releases), TND64's Music Scene history, the Lemon64 author thread, and the
cached SIDId entry.
