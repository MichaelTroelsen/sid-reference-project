# GMC (Game Music Creator)

```json
{
  "id": "gmc",
  "name": "GMC (Game Music Creator)",
  "aliases": ["GMC/Superiors", "GMC", "Game Music Creator"],
  "authors": ["Brian (Balázs Farkas) / Graffity", "Jay (co-code)"],
  "released": "1990 (V1.0, 8 Dec 1990)",
  "status": "verified",
  "platform": "Native C64 music editor + replay (Graffity). Closed scene tool.",
  "csdb_release": 7268,

  "memory": {
    "load_address": "$1000 for the player code (verified on Akadem/Boogie.sid); files may load at lower addresses (e.g. $0A00 on NecroPolo/GMC-Brandnew.sid) with song data below the player, which is still entered at fixed absolute addresses.",
    "zero_page": "$FA/$FB = order-list/pattern data pointer (used to read pattern bytes via lda (zfa),Y). $FC/$FD = instrument-table pointer (used to read 16-byte instrument entries via lda (zfc),Y). Same 2-byte-pointer pattern as DMC's $F8/$F9, different ZP addresses.",
    "layout": "Code: $1000-$1961 (init, play, per-voice handler, effects, filter, PW). Bytes $1000-$1013 are runtime-unaccessed padding. Voice state tables: $1014-$10C4 (working storage — the $1026-$10B8 drifted-table region from the verification pass). Freq tables: $10C5-$1124 (lo, 96 entries) + $1125-$1184 (hi, 96 entries). Note processing: $1180-$119F. Instrument loader: $11A0-$11F0. Voice processor (called from play): $1204-$1400. Pattern parser: $1254-$1334. Per-frame effects (PW, vibrato, filter sweep): $1400-$18E9. Init: $18EA-$1961. Pattern-pointer tables: $1980 (lo, 64 entries) + $19C0 (hi, 64 entries). Command table: $1AC0 (entries 9 bytes each). Song data (order lists + patterns): varies by file (e.g. $1B30-$21A8 in Boogie). Sub-tune header: at end of payload (e.g. $21A9+ in Boogie)."
  },
  "entry": {
    "init": "$18EA (fixed absolute player entry, verified on two independent files). Init routine: subtune×8 → Y, loads 3 order-list pointers (6 bytes) from sub-tune header, then reads speed (→ $101C) and volume (→ $101B, also → $D418). Clears $1026-$10C4 (working area), sets voice durations to $FF, clears all SID registers ($D400-$D418).",
    "play": "$14EA (fixed absolute player entry, verified on two independent files). Play routine: writes volume/filter to $D418, dec speed counter ($10B3), reloads from $101C if needed, then calls per-voice handler ($1204) for X=0,1,2. Same 3-voice loop structure as DMC's $1085."
  },
  "speed": "1x IRQ-driven (verified by 50-frame register-write trace). Speed byte from sub-tune header → $101C, counter at $10B3.",

  "data_format": {
    "order_list": "Byte stream, one per voice (pointers loaded from sub-tune header at init). SAME ENCODING AS DMC: $00-$7F = pattern number (plays that pattern from the $1980/$19C0 pointer table). $80-$FD = transpose (signed relative; $80 = 0 transpose, range -32 to +93 semitones via sbc #$A0), next byte is the pattern number. $FE = stop voice (duration=0, rts). $FF = loop to start of order list (position=0). Order-list position stored at $1041,X; advanced per pattern end.",
    "patterns": "Byte stream per pattern. Pattern number → pointer via lo table at $1980 and hi table at $19C0 (64 entries max per file). Pattern position at $1044,X. Byte classes — SAME RANGES AS DMC but with DMC's $7C/$7D/$7E/$7F special bytes moved into different ranges since GMC has no dedicated portamento/gate-toggle/repeat bytes: $00-$5F = note (0-95, ~8 octaves) — plays note via freq table at $10C5/$1125, uses current command type and instrument. $60-$7F = set command/envelope type (byte & $1F = 0-31), advances without triggering note. $80-$BF = duration prefix (byte & $3F = 0-63 frames at speed=1; low 6 bits used), advances to read actual note/command. NOTE: GMC's duration range is $80-$BF (6-bit), while DMC splits this into $80-$BF (duration) + $C0-$EF (DUR command); GMC uses $C0-$DF for DUR commands instead. $C0-$DF = DUR command (byte & $1F = 0-31), stores slide rate in $105F,X. $E0-$FF = instrument load command — byte & $1F = 0-31; if 0 (byte $E0), sets gate-off flag ($1074,X=$FE); if 1-31, stores command+1 in $1083,X and loads the 16-byte instrument entry via $11A0 (entry index × 16, table base at $1014/$1015). $FE = note sustain/repeat — copies current command ($107A,X→$107D,X), advances pattern position, reads next byte: if $FF then end-of-pattern (reset pattern position, advance order list via inc $1041,X); otherwise process next byte normally (no new note trigger, no ADSR re-trigger). This is how GMC sustains a note across multiple frames for PW envelope stepping. $FF at end of a $FE-repeat run = end of pattern marker. Known incomplete: standalone $FF (outside a $FE run) is handled as instrument command 32 ($1083=32) — exact semantics need full disassembly to confirm.",
    "instruments": "16-byte entries (LARGER than DMC's 11-byte entries — GMC has 5 extra bytes between the wave-table index and the flags byte). Indexed by entry_index × 16 via a base pointer at $1014/$1015 (loaded from the per-voice init data). Unlike DMC's fixed table at $18F0, GMC's instrument data is pointer-indirected. Loaded via ZP ($FC),Y in the instrument loader at $11A0. Layout per entry (confirmed from code at $11AF-$11F0): [0] SR → $D406. [1] AD → $D405. [2] PW sustain level → $1053,X. [3-5] 6 PW envelope step values (same packed-nibble scheme as DMC: 3 bytes × 2 nibbles = 6 steps). [6] Low nibble = filter table index; high nibble = PW base. [7] High nibble = vibrato delay; low nibble = vibrato steps per direction. [8] Vibrato depth / arpeggio rate. [9] Waveform table start index. [10-14] 5 extra bytes (present in GMC, removed/compacted in DMC — content not yet decoded; likely additional envelope or effect parameters). [15] Flags byte → $10B6: bit 0 ($01) = hard restart via testbit ($FF→freq_hi, $81→control at $11E6-$11ED — SAME TECHNIQUE as DMC); bit 1 ($02) likely filter-sweep-on-note; bit 5 ($20) likely filter enable. The instrument number from $F0-$FF pattern bytes overrides the sustain level (high nibble of SR, analogous to DMC's l17b3 mechanism).",
    "command_table": "9-byte entries at $1AC0 (DMC uses 11-byte entries at $18F0 — different size and address). Indexed by command type from $60-$7F pattern bytes. Entry layout not fully decoded (contains note-step/arpeggio data; values $80/$81 are special markers). The ×8 then +index multiplication scheme (ASL×3 at $17C2) gives 9-byte stride.",
    "wavetable": "TODO — present in the per-frame effects code ($1400-$18E9) but exact layout not decoded. Waveform values and pitch offsets likely stored similarly to DMC's $198A/$19CD arrays.",
    "pulsetable": "6 PW envelope steps per instrument entry (bytes [3-5], packed nibbles, same scheme as DMC). Per-frame PW update increments a step counter; values cycle through the 6 nibbles, shifted to high nibble and added to PW base (from instrument byte 6 high nibble). Confirmed in trace: PW lo steps through $00→$30→$60→$90→$C0→$F0→$20 (with PW hi increment) over successive note-sustain frames.",
    "filtertable": "TODO — filter sweep runs per-frame (confirmed in trace: decrementing filter_freq_hi values). Filter config nibble from instrument byte 6 low nibble selects entry from a table. Suspect 16 bytes per entry (same as DMC) with sweep stages.",
    "freqtable": "96-entry note-to-frequency lookup at $10C5 (lo) / $1125 (hi), standard PAL C64 tuning. Note 0-95 → lo/hi bytes for $D400/$D401. DIFFERENT ADDRESS from DMC's $1647/$16A7 — another case where GMC moved tables to lower addresses to make room for the larger instrument entries.",
    "sub_tune_header": "At end of payload. 8 bytes per sub-tune (SAME FORMAT AS DMC): bytes 0-5 = three order-list pointers (lo,hi × 3 channels). Byte 6 = speed (frames/tick → $101C). Byte 7 = volume/filter mode (→ $101B and $D418). Subtune count = (payload_end - header_start) / 8. Init at $18EA: subtune×8 → Y, loads 3 order-list ptrs, then speed + vol from Y=6,7."
  },
  "effects": {
    "encoding": "Command byte range $60-$7F sets envelope/effect preset (0-31) via byte & $1F. DUR command range $C0-$DF encodes slide rate via byte & $1F. Instrument range $E0-$FF loads instrument and sets command ($E0 = gate-off; $E1-$FF = command 1-32). Duration prefix $80-$BF sets default note length in frames.",
    "commands": {
      "hard_restart": "Controlled by instrument flags byte bit 0 ($01). When set: lda #$FF, sta $D401,Y (freq_hi), lda #$81, sta $D404,Y (testbit+gate). SAME testbit technique as DMC. When clear: standard gate-on via $11F1 ($53→control with no testbit). Confirmed in both GMC traces.",
      "pw_envelope": "6-step PW envelope from instrument bytes [3-5] (packed nibbles). Per-frame PW update increments step counter. Envelope cycles through 6 values, added to PW base and accumulated in PW lo/hi ($D402/$D403). Confirmed in trace: Boogie.sid osc2 PW lo sequence $00→$30→$60→$90→$C0→$F0→$20 (wraps with pw_hi increment).",
      "filter_sweep": "Per-frame filter cutoff sweep (decrementing filter_freq_hi). Sweep stages from filter table at instrument byte 6 low nibble × 16. Confirmed in both GMC traces.",
      "note_sustain": "$FE byte in pattern repeats current command without new note trigger — same effect as DMC's $7E (repeat) but with different opcode and semantics (preserves command type, checks next byte for $FF end marker)."
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": ["dmc"],
    "same_effect_encoding_as": ["dmc"]
  },

  "quirks": [
    "GMC is the direct PREDECESSOR of DMC (Demo Music Creator), same author Brian of Graffity — a well-attested lineage (a CSDb comment on the GMC release even says 'they should have called this DMC V1.0'). The dmc card carries the graph edge (derives_from / successor_of gmc).",
    "SIDId also lists a 'GMC_V2.0/Superiors' tag with the identical NAME/AUTHOR fields but no CSDb reference and no confirmed matching release (only V1.0 here and a 'V1.6' are catalogued on CSDb) — carded separately as gmc-v2.md, which carries the derives_from/successor_of edge back to this card.",
    "'Superiors' in the DeepSID tag 'GMC/Superiors' is a SCENE GROUP that USED the GMC player, NOT the developer or a publisher. The developer group is Graffity. SIDId's comment: 'Player used by the group Superiors.'",
    "Only V1.0 is documented on CSDb (8 Dec 1990); development effectively continued as DMC. Code credited to Brian and Jay; music by Andy and Brian; graphics by Jay (all Graffity).",
    "A '.gmc' data-format entry reportedly exists on the ArchiveTeam File Formats wiki (unreachable during research — TODO to verify).",
    "GMC shares DMC's testbit hard-restart technique (confirmed in code at $11E6: LDA #$FF / STA $D401,Y / LDA #$81 / STA $D404,Y — identical opcode sequence). Same order-list byte encoding ($00-$7F=pattern, $80-$FD=transpose+pattern, $FE=stop, $FF=loop), same sub-tune header layout (8 bytes: 6 order ptrs + speed + volume). Same 6-step packed-nibble PW envelope. Key difference: 16-byte instrument entries (vs. DMC's 11) with pointer-indirected table (vs. DMC's fixed $18F0). Frequency tables at $10C5/$1125 (vs DMC's $1647/$16A7)."
  ],
  "sources": [
    "CSDb GMC V1.0 (credits/date/downloads): https://csdb.dk/release/?id=7268",
    "SIDId sidid.nfo (author, year, 'used by Superiors' note): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "TND64 Music Scene (GMC→DMC lineage prose): http://tnd64.unikat.sk/music_scene.html ; DMC context https://csdb.dk/release/?id=2596",
    "sidid:GMC/Superiors (author Balázs Farkas (Brian), 1990, CSDb 7268)",
    "Local dataset: 428 files tagged GMC/Superiors (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

GMC (Game Music Creator) is a native C64 music editor+replay by **Brian
(Balázs Farkas) of Graffity**, released as V1.0 on 8 December 1990. Its main
significance is lineage: it is the **direct predecessor of [DMC](dmc.md)**, the
most-used uncarded player in the collection — same author, and DMC is
essentially GMC improved and renamed. 428 files here are tagged GMC (via the
"GMC/Superiors" tag, where *Superiors* is a group that used the player).

## Quirks & gotchas

See the `quirks` array. Load-bearing: **GMC→DMC** (the [dmc](dmc.md) card holds
the `derives_from`/`successor_of` edges from GMC); **"Superiors" is a user group, not the developer** (Graffity is); and the
**16-byte instrument entries** (vs. DMC's 11-byte) are the key structural difference
between the two formats.

## Disassembly notes

Player code traced and partially decoded from the existing verified Boogie.sid
payload (no new disassembly needed — the payload is already byte-exact per the
2026-07-20 verification). Key routines located by searching for SID register-write
opcode patterns and cross-referencing against DMC's known code layout:

- **Init** ($18EA): Subtune ×8, loads 8-byte sub-tune header, clears work area,
  inits all SID registers. Same structure as DMC's $1807.
- **Play** ($14EA): Volume write, speed-counter dec/reload, 3-voice loop calling
  $1204. Same structure as DMC's $1085.
- **Per-voice handler** ($1204): Duration check, order-list advance, pattern
  parser at $1254-$1334.
- **Pattern parser** ($1254-$1334): Order-list byte dispatch ($00-$7F/$80-$FD/
  $FE/$FF → same encoding as DMC), pattern byte dispatch ($00-$5F notes →
  $1365, $60-$7F commands, $80-$BF durations, $C0-$DF DUR, $E0-$FF instrument
  load, $FE sustain/repeat). Pattern pointer tables at $1980 (lo) / $19C0 (hi).
- **Instrument loader** ($11A0-$11F0): Reads 16-byte entry via ($FC),Y → SR
  ($D406) + AD ($D405) + PW sustain + PW steps + filter flags (bit 0 = hard
  restart via testbit).
- **Frequency tables** at $10C5 (lo) / $1125 (hi) — 96 entries each.

Remaining TODO: full per-frame effects decoding ($1400-$18E9 — PW envelope
update, vibrato, filter sweep, waveform table); wavetable and filtertable exact
layout; ZP map for the remaining zero-page bytes beyond $FA-$FD; confirmation
of whether GMC uses DMC's `$7C` portamento / `$7D` gate-toggle / `$7E` repeat
pattern bytes (GMC doesn't reference these opcodes in the pattern parser, but
may have equivalent functionality encoded differently).

## Verification

**Entry points + playback LOCALLY CONFIRMED (2026-07-13) — `status: in-progress`.** Traced a real HVSC GMC `.sid` (load $1000, init $18EA, play $14EA, 231 register writes / 50 frames) — the replay runs; entry addresses are per-file. Author, year, and the DMC lineage are CSDb/SIDId/TND64-sourced; every runtime field was `TODO`.

**Full disassemble/reassemble/byte-diff/trace-diff pass (2026-07-20) — status raised to `verified`.** Used `SIDdecompiler.exe` + `64tass` on two independent real HVSC files tagged `GMC/Superiors`. Both files share the same fixed absolute player entry points (`init $18EA`, `play $14EA`) even though their load addresses differ, confirming GMC's player code runs at a fixed location while song data may sit below it.

- **File 1**: `MUSICIANS/A/Akadem/Boogie.sid` (load $1000, init $18EA, play $14EA, subtunes 1, payload 4,553 bytes). The `-v2` memory-touch map reported `Start: $1014` because the first 20 bytes ($1000-$1013) are runtime-unaccessed, so the disassembly was relocated to `-a4116` (decimal for `$1014`) per gotcha 40. Reassembled to 4,509 bytes at `$1014-$21B0`. **Unpatched byte-diff: 99.0020% (45/4,509 bytes differ)**, all in the self-modified working-storage table `$1026-$10B8` (marked `+` read+write in the `-v2` map). **Trace-diff: exact — 231/231 register writes identical** over 50 frames. After patching the 45 drifted table bytes back to their pristine cold-start values, **byte-diff reached 100.0000% (0/4,509 bytes differ)** and the trace remained exact. Exact patch table: `knowledge/players/reconstructions/gmc.md`.

- **File 2**: `MUSICIANS/N/NecroPolo/GMC-Brandnew.sid` (load $0A00, init $18EA, play $14EA, subtunes 1, payload 11,224 bytes). The whole file was relocated to its PSID load address `$0A00` (`-a2560`); the `-v2` map's `Start:` matched the header load address. Reassembled to exactly 11,224 bytes at `$0A00-$35D7`. **Byte-diff: 99.2694% (82/11,224 bytes differ)**, clustered in the same player-internal drifted-table region around `$1018-$1053` (analogous to file 1's `$1026-$10B8`). **Trace-diff: exact — 251/251 register writes identical** over 50 frames (the trace logs differ only in the echoed filename). This confirms the drifted-table pattern is a player-family characteristic, not file-specific noise, and that the fixed entry points hold across different load addresses.

Both files independently reach exact register-write parity, and file 1 also reaches 100% byte-exact after patching the drifted startup constants. Meets this project's `verified` bar (matching `dmc` and `laxity-newplayer` precedent).

**Data-format reverse-engineering pass (2026-07-23) — status stays `verified`.** Walked the Boogie.sid payload (already byte-exact from the 2026-07-20 pass) by searching for SID register-write opcode patterns and cross-referencing against the now-fully-documented DMC format. Key findings confirmed via register-write trace comparison between GMC (Boogie.sid 231 writes, GMC-Brandnew.sid 251 writes) and DMC (Autocomposer_for_ZX81.sid 369 writes):
- GMC uses the **same order-list byte encoding** as DMC ($00-$7F=pattern, $80-$FD=transpose, $FE=stop, $FF=loop)
- GMC uses the **same sub-tune header layout** as DMC (8 bytes: 6 order ptrs + speed + volume)
- GMC uses the **same testbit hard-restart** technique as DMC (confirmed identical opcode sequence at $11E6: LDA #$FF, STA $D401,Y, LDA #$81, STA $D404,Y)
- GMC uses the **same 6-step packed-nibble PW envelope** (confirmed in both traces)
- Pattern byte class ranges are the **same as DMC** ($00-$5F notes, $60-$7F commands, $80-$BF duration, $C0-$DF DUR, $E0-$FF instrument) but the instrument range is wider ($E0-$FF vs DMC's $F0-$FF) and the $FE/$FF pattern bytes serve different roles (sustain-repeat / end-of-pattern vs DMC's stop/loop usage in the order-list context)
- **Key difference**: GMC uses **16-byte instrument entries** (pointer-indirected via $1014/$1015) while DMC uses 11-byte entries at fixed $18F0. GMC's extra 5 bytes per entry are between the wave-table index (byte 9) and the flags byte (byte 15). The larger entries pushed other tables to lower addresses: frequency tables at $10C5/$1125 (vs DMC's $1647/$16A7), command table at $1AC0 (9-byte entries vs DMC's 11-byte at $18F0).

Remaining TODO: full decoding of the per-frame effects loop ($1400-$18E9), exact wavetable/filtertable layouts, the 5 extra instrument bytes, and whether GMC supports portamento/gate-toggle (no $7C/$7D pattern bytes in parser, but may have equivalent in command-table entries).

## Reconstruction manifest

See `knowledge/players/reconstructions/gmc.md`.

See the `sources` array — CSDb release, SIDId, and TND64's Music Scene history.
