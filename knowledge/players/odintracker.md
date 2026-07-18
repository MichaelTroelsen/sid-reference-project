# Odin Tracker

```json
{
  "id": "odintracker",
  "name": "Odin Tracker",
  "aliases": ["OdinTracker", "Odin Tracker"],
  "authors": ["Zoltán Konyha (Zed)"],
  "released": "2000 (v1.13 dated 2001-04-17)",
  "status": "in-progress",
  "platform": "Native C64 tracker + its own C64 replay routine (source published; tunes need external packing to a runnable PRG)",
  "csdb_release": 12577,

  "memory": {
    "load_address": "Per-rip, not fixed — the replay (`vplayer.s`, the source's own \"relocatable player\") is compiled/embedded+relocated per exported tune via the packer in `c64pack/` (c64pack.cpp on the PC host + depacker.s on the C64 side), not a shared player at a canonical address. Confirmed from real HVSC files' own PSID headers: SounDemoN/Bachimisation.sid loads $1000; SounDemoN/Arpeggioland.sid loads $a000; SounDemoN/Firelord_old.sid loads $8b00; SounDemoN/Ice.sid loads $1000. In the EDITOR's own fixed memory map (not per-export — from `defines.s`, read 2026-07-18 from `OdinTracker113src.zip`, CSDb release 2628): ORDERLIST=$4000 (256 bytes), SONGTITLE=$4100 (32 bytes), PATTERNS=$4200 (256 patterns x [3 track numbers + transpose] = $600 bytes), INSTRUMENTS=$4800 (32 instruments x 16 bytes = 512 bytes, but see zero_page note on layout order), INSTRUMENTNAMES=$4a00, WAVETABLE=$4c00 (256 bytes), ARPEGGIOTABLE=$4d00 (256 bytes), FILTERTABLE=$4e00 (256 bytes), SONGSTARTTABLE=$4f00, TRACKS_BASE=$5000 (128 tracks x 64 rows x 3 bytes), VPLAYER=$b000 (the editor's own in-memory copy of the relocatable player, NOT the address it ends up at in an exported file), PLAYER=$c000 (editor's own player, distinct from VPLAYER).",
    "zero_page": "From `defines.s`: `player_trackptr = $fb` (temp 16-bit pointer to the current track/channel's pattern data — \"the player destroys these\", i.e. not preserved across calls) and `player_patternptr = $fd` (temp 16-bit pointer to pattern; also aliased as `player_vibratotemp` since vibrato/slide math never runs concurrently with pattern-pointer use, so the same 2 zero-page bytes are deliberately reused for both purposes).",
    "layout": "Order list / pattern / table structure IS array-of-structs at the editor level per the `PATTERNS`/`INSTRUMENTS` comments above, BUT the exported/compiled replay (`vplayer.s`) accesses instrument fields via 16 SEPARATE flat arrays (`INSTRUMENTS_AD`, `INSTRUMENTS_SR`, ... `INSTRUMENTS_FILTERTABLELOOP`), each computed in `defines.s` as `<field_index>*MAX_INSTRUMENTS(32)+INSTRUMENTS` — i.e. the runtime layout is field-major (all 32 instruments' AD bytes first, then all 32 SRs, etc — structure-of-arrays), NOT the instrument-major array-of-structs the editor's own on-disk comment (\"32 instruments, each 16 bytes\") implies. This SoA-vs-AoS distinction is a real, source-confirmed nuance, not a guess. Field order (0-15): AD, SR, wavetable start/end/loop, arptable start/end/loop, vib delay, vib depth+speed (packed byte), pulse width (packed nibble), pulse speed, pulse limits (packed byte), filtertable start/end/loop. Per-channel playback state (3 channels) similarly uses `chn_*,x`-indexed flat arrays in `vplayer.s` (chn_note, chn_inst, chn_effect, chn_effectpar, chn_waveform, chn_ad, chn_sr, chn_plswidthlo/hi, chn_vibpos, etc — all 3-byte arrays, one entry per channel)."
  },
  "entry": {
    "init": "Per-rip, but the JMP-table convention itself IS fixed and source-confirmed (`vplayer.s` header comment): `<base>+0`: Init (song number in A), `<base>+3`: Play frame, `<base>+6`: Stop (silence SID), `<base>+9`: \"quick driver hack\" (plays until a key is pressed — used to fill dead time before a title screen). Bachimisation: init=$1000 (=load addr). Firelord_old: init=$bff0 (NOT load addr $8b00 — the JMP table sits near the tail of the loaded block instead), play=$bff3=init+3 (matches the fixed +3 convention exactly). Arpeggioland: init=$bff0, play=$bff3 — same +3 convention, near the tail of its own $a000-loaded block, NOT at the load address. This per-file variability in WHERE the JMP table lands (front-of-block for some rips, tail-of-block for others) is the packer's relocation choice per export, not a variance in the table's own internal structure — the +0/+3/+6/+9 layout itself is constant across all files tested.",
    "play": "See init — entry address varies per file, always read from that file's own PSID header, but is always `init+3` per the source-confirmed JMP-table layout."
  },
  "speed": "Frame-driven (called once per PAL/NTSC frame from the PSID's `play` vector — no internal IRQ/multispeed setup found in `vplayer.s`). Per-row speed is a 1-byte tracker parameter (`speed`, default 6 set at init, changeable at any row via effect 0xF with parameter $00-$7F): a `speedcounter` increments every frame and a new tracker row is only fetched once `speedcounter == speed`, i.e. classic tracker \"ticks per row\" — NOT a genuine multispeed player (no more than 1 play call per frame), just a slower-than-1-row-per-frame update rate for values above 1. `speed=0` freezes row advancement entirely but effects (vibrato, pulse/wave table stepping, slides) keep running every frame regardless.",

  "data_format": {
    "order_list": "Per-CHANNEL, not shared across channels: 3 independent order-position tables, `TRACKPOINTERSLO0/1/2` + `TRACKPOINTERSHI0/1/2` (lo/hi byte of a pointer to that channel's track/pattern data, indexed by `ordernumber`) and `TRACKTRANSPOSES0/1/2` (a per-order-slot, per-channel transpose value added to every note read from that slot). `SONGSTARTTABLE` (indexed by subtune number) gives the initial `ordernumber` for `init`'s song-number parameter (in A). A pattern/track ends after 64 rows (`cmp #64` in `vplayer.s`'s `player_play`); `ordernumber` then advances to `nextordernumber` (settable early by effect 0xB \"jump to order\", which also sets a `forcenewpattern` flag consumed at the next row boundary).",
    "patterns": "Each track/pattern row is exactly 3 bytes (see `effects.encoding` for the precise bit-level packing derived from `vplayer.s`'s `fetchrow` routine): byte0=note+effect-bit3, byte1=effect-bits-2..0 (top 3 bits) + instrument number (bottom 5 bits), byte2=effect parameter (full byte). Row offset into a track = `3 * trackrow` (`trackrow3`, recomputed every row). Note values: 0 = no new note (previous note continues), 1-96 = C-0 through B-7, 97 = note-off (releases SID gate). Instrument value: 0 = no new instrument (previous instrument's per-channel copies continue unchanged), 1-31 = instrument index (only 31 usable of the 32-slot table, since 0 means \"none\").",
    "instruments": "32-slot table, 16 fields each (source: `defines.s`'s `INST_*` offset constants: AD, SR, wavetable start/end/loop, arptable start/end/loop, vib delay, vib depth+speed packed byte, pulse width packed nibble, pulse speed, pulse limits packed byte, filtertable start/end/loop — same field list/order as `layout` above). AD/SR are \"CFI\" (Copy From Instrument — copied into the live per-channel value on every new note, but then directly overridable per-row by effects 0x07/0x08 without touching the instrument's own stored value). Pulse width/limits/speed and vibrato depth/speed are likewise CFI, similarly overridable by effects 0x02/0x04/0x05/0x06.",
    "wavetable": "One shared 256-entry global sequence (not per-instrument tables) — each instrument instead stores a start/end/loop INDEX into this one shared sequence (`INST_WAVETABLESTART/END/LOOP`), stepped once per tick while an instrument is active (`chn_waveidx`) and clamped/looped at its own instrument's end/loop indices. Table entries are raw SID waveform-control-register nibbles (written to `chn_waveform` then ANDed with the gate bit and stored to `$D404/$D40B/$D412`).",
    "pulsetable": "No separate shared pulse table — pulse width is either a per-instrument static value (`INST_PULSEWIDTH`, packed nibble = bits 11..4 of the 12-bit SID pulse width) modulated at a constant per-tick speed/limit (`INST_PULSESPEED`/`INST_PULSELIMITS`, a simple ramp-up/ramp-down between two limits, direction reversing at each limit) — or an explicit one-shot override via effect 0x02 (set width) / 0x05 (set speed) / 0x06 (set limits). No indexed wave-style sequence for pulse.",
    "filtertable": "Same shared-sequence-plus-index-window pattern as wavetable: one global 256-entry `FILTERTABLE` of raw cutoff-frequency bytes; each instrument has its own start/end/loop index (`INST_FILTERTABLESTART/END/LOOP`), but the filter's CURRENT active window (`filter_idx`/`filter_end`/`filter_loop`, all global — i.e. only one filter-table \"cursor\" for the whole song regardless of which channel/instrument last selected it) is only switched to a given instrument's window via effect 0x0F sub-command $Ex (\"select filter controller\", parameter low nibble = instrument index) — NOT automatically on every new note, unlike wave/arpeggio tables which restart per-note per-channel."
  },
  "effects": {
    "encoding": "3 bytes/row (see `data_format.patterns`). Effect number (0-15, selects one of 16 fixed handler routines `effect00`-`effect0f` via a 16-entry lo/hi jump-pointer table) is split across 2 bytes: bit 3 (MSB) = bit 7 of the row's note byte (byte0); bits 2-0 = bits 7-5 of the row's instrument byte (byte1) — derived directly from `vplayer.s`'s `fetchrow`: `cmp #$80` on byte0 puts its bit7 into carry, then `ror`+4x`lsr` on byte1 folds that carry in above byte1's own top 3 bits and discards the rest. Effect parameter is the row's 3rd byte, in full (0-255).",
    "commands": {
      "0x00": "No-op (dummy handler, falls through from effect01's shared code path).",
      "0x01": "Slide frequency: parameter $00-$7F = slide down by (param*16), $80-$FF = slide up by ((param&$7F)*16), added/subtracted from a per-channel `chn_slidefreq` that's added to the note's base frequency every tick (not reset until a new note starts).",
      "0x02": "Set pulse width: parameter's nibbles are bits 11..4 of the 12-bit SID pulse width (high nibble=low byte's top 4 bits, low nibble=high byte's low 4 bits, per the `asl x4`/`lsr x4` split in `effect02`).",
      "0x03": "Slide to note (portamento): slides `chn_freq` toward the destination note's frequency by (param*16) per tick, clamping/stopping exactly at the destination (checked via `freqcmp` each tick) — the source comment itself calls this \"Damn hack\". A row with effect 3 active suppresses per-tick arpeggio (see `process_instrument`) and skips instrument-table-driven note-frequency reset in `fetchrow`.",
      "0x04": "Vibrato: parameter high nibble = depth, low nibble = speed (immediate override of the CFI vibrato depth/speed the instrument set at note-on).",
      "0x05": "Set pulse width modulation speed (per-tick increment applied by `process_instrument`'s pulse ramp).",
      "0x06": "Set pulse width modulation limits: parameter high nibble = lower limit, low nibble = upper limit (both compared against the pulse width's high byte only).",
      "0x07": "Set Attack/Decay (direct override of the instrument's CFI AD byte, written straight to the channel's live AD, i.e. affects the SID $D405-style register on the next SID-dump pass).",
      "0x08": "Set Sustain/Release (same as 0x07 but for SR).",
      "0x09": "Set waveform directly (overrides whatever the wavetable would have produced that tick; special value $FF silences the channel's waveform/gate entirely that tick, per `pp_dump2sid`'s `cmp #$ff` check).",
      "0x0a": "Arpeggio (ProTracker-style 3-note cycle keyed to a shared `mod3counter`, NOT a per-channel independent counter): parameter high nibble = 2nd note offset, low nibble = 3rd note offset, cycling base/note1/note2 every tick in lock-step across all 3 channels via one shared counter.",
      "0x0b": "Jump to order: parameter = target order-list position (sets `nextordernumber` + a `forcenewpattern` flag consumed at the next row boundary).",
      "0x0c": "Set filter cutoff frequency directly: parameter = the 8 MSBs of cutoff (this is a manual one-shot override, distinct from the instrument-driven filtertable stepping — see `data_format.filtertable`).",
      "0x0d": "Pattern break: parameter = the row to resume at in the NEXT pattern (`firsttrackrow`), combined with the same `forcenewpattern` flag as 0x0B.",
      "0x0e": "Filter resonance / voice-routing control: parameter written directly to the SID's $D417-style resonance/filter-voice-enable byte (high nibble=resonance, low 3 bits=voice-1/2/3 filter-enable bits, per the source comment).",
      "0x0f": "Multi-function \"extended\" command, selected by the parameter's HIGH nibble (same idea as ProTracker's Exx): $00-$7F=set speed (row-tick divisor); $80-$8F=set global volume; $90-$9F=set filter mode (bits written to SID $D418-style mode/volume register — bit0=low-pass, bit2=band-pass, bit3=high-pass/cut-voice-3, per source comment, though the comment itself lists bit3 twice, an apparent typo in the ORIGINAL source, not a transcription error here); $A0-$AF=fine slide down (only applied once per row, gated on `speedcounter==0`); $B0-$BF=fine slide up (same gating); $C0-$CF=note cut (releases gate once `speedcounter` reaches the low nibble's value); $D0-$DF=note delay — **explicitly marked `!!!! TODO` and UNIMPLEMENTED in the shipped `vplayer.s` source itself** (falls through to a bare `rts`, i.e. this sub-command is a documented dead effect in the real replay code, not a gap in this card's research); $E0-$EF=select filter-table controller (switches the global filter cursor to the given instrument's start/end/loop window, see `data_format.filtertable`); $F0-$FF=set hard-restart tick count (see quirks)."
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SOURCE IS AVAILABLE and now read (2026-07-18): CSDb hosts `OdinTracker113src.zip` (6502 assembly source, release 2628) alongside the binary; fetched directly via CSDb's own webservice API (`?type=release&id=2628`'s `DownloadLinks`) and unzipped. LICENSE is STILL UNSTATED — no README/comment in the archive states explicit terms; confirm permission before treating it as reusable beyond this reverse-engineering use.",
    "Native C64 tracker: its tunes use Odin Tracker's own replay routine (`vplayer.s`, literally named \"Relocatable player\" in its own header comment) and are relocated+combined with a song via the packer in `c64pack/` (PC-side `c64pack.cpp` + C64-side `depacker.s`) to produce a standalone runnable PRG/SID — this is why load/init addresses vary per exported file (confirmed architecturally from source, not just inferred from file variance).",
    "This card was a near-empty stub on purpose (engine facts not yet extracted from source). A 2026-07-18 verification pass disassembled two real HVSC rips directly (SIDdecompiler.exe + 64tass, no source needed for this) and found the byte-diff quality is WILDLY file-dependent for this player: Bachimisation.sid reassembles to 99.61% byte-exact and is fully trace-exact over 300 frames — but Arpeggioland.sid reassembles to only 53.8% byte-exact at native alignment, and its reconstruction's INIT vector itself executes garbage. Root cause identified: SIDdecompiler's own `-v2` memory-map log reports 'Start: $a001' instead of the true (PSID-header-embedded) load address $a000 for this file — it silently drops the very first loaded byte (real value $12, marked fully unaccessed '?' in its own trace) from the reconstructed output, misaligning every subsequent byte by one. A manual attempt to patch this by re-inserting the dropped byte at the top of the .asm did NOT fix it — the internal jump-target/relocation math was already computed against the wrong base.",
    "A SECOND 2026-07-18 pass (same day, follow-up) tested two MORE real HVSC rips to see whether Arpeggioland's front-byte-drop bug or Bachimisation's near-exact result is more typical, and got a much more encouraging answer: Firelord_old.sid (load $8b00, init/play at $bff0/$bff3 — the SAME \"entry deep inside the loaded block, near $c000\" convention as the broken Arpeggioland, disproving any hypothesis that the bug is tied to that convention specifically) reassembled **100.0000% byte-exact** (0 diffs over the full 16045-byte real payload; the reassembled .prg's extra ~163 trailing bytes are just SIDdecompiler's own `-d` padding walking into adjacent self-modified-but-beyond-file-end scratch RAM, not a real mismatch — see Disassembly notes) and is fully trace-exact over 300 frames. Ice.sid (load $1000, init=load — the SAME front-JMP-table convention as Bachimisation) reassembled 99.23% byte-exact (66/8544 bytes differ, clustered at the exact same relative addresses as Bachimisation's own mismatch cluster — same shared replay-routine self-modified workspace, not new code) and is ALSO fully trace-exact over 300 frames. Net: 3 of 4 real files tested are now register-write-exact matches (only their SIDdecompiler's `-v2` map ever showed those diverging bytes as write-touched, per this project's `dmc`/`cheesecutter`/`future-composer` precedent for 'dead' initial-value mismatches) — the front-byte-drop bug is data-content-dependent (whether THAT FILE's true first loaded byte happens to be runtime-untouched), not tied to which of the two known entry-point conventions (front-of-block vs. tail-of-block) a given export uses. Still NOT resolved for Arpeggioland itself, and still only 4 of 156 files in the local dataset have been tested — do not extrapolate a fixed pass rate from this sample.",
    "The instrument table has a real, source-confirmed SoA/AoS mismatch worth flagging for anyone reading `tracker.s` (the editor) alongside `vplayer.s` (the exported replay): the editor's own `INSTRUMENTS = $4800` comment describes \"32 instruments, each 16 bytes\" (array-of-structs, instrument-major), but the replay's actual runtime field accessors (`INSTRUMENTS_AD`, `INSTRUMENTS_SR`, etc., each `defines.s`-computed as `<field>*32+INSTRUMENTS`) are structure-of-arrays, field-major — i.e. all 32 instruments' AD bytes are contiguous, then all 32 SRs, etc. Both layouts total the same 512 bytes; only the byte ORDER differs. A naive reading of just the editor's own comment would get instrument-field addressing wrong for the exported replay.",
    "Effect 0x0F sub-command $D0-$DF (\"note delay\") is explicitly marked `!!!! TODO` in the shipped `vplayer.s` source and falls through to a bare `rts` — i.e. this is a DOCUMENTED, author-acknowledged missing feature in the real released replay code, not a gap in this card's own research. Any real exported tune using that sub-command's parameter range would have it silently do nothing."
  ],
  "sources": [
    "Source archive (6502 asm, license unstated): OdinTracker113src.zip on CSDb, fetched and read 2026-07-18 via CSDb's webservice API (`https://csdb.dk/webservice/?type=release&id=2628`'s DownloadLinks, direct-URL `http://csdb.dk/getinternalfile.php/154684/OdinTracker113src.zip`) — https://csdb.dk/release/?id=2628",
    "sidid:OdinTracker (author Zoltán Konyha (Zed), 2000, CSDb release 12577 — https://csdb.dk/release/?id=12577)",
    "Local dataset: 156 files tagged OdinTracker (see knowledge/COVERAGE.md)",
    "Verification pass (2026-07-18, part 1): HVSC MUSICIANS/S/SounDemoN/Bachimisation.sid (load $1000, 15648-byte payload) and MUSICIANS/S/SounDemoN/Arpeggioland.sid (load $a000, 10754-byte payload)",
    "Verification pass (2026-07-18, part 2, same day follow-up): HVSC MUSICIANS/S/SounDemoN/Firelord_old.sid (load $8b00, init $bff0, 16045-byte payload, 100.0000% byte-exact + trace-exact) and MUSICIANS/S/SounDemoN/Ice.sid (load $1000, init $1000, 8544-byte payload, 99.23% byte-exact + trace-exact) — all four files disassembled with SIDdecompiler.exe -a<decimal load addr> -z -d -c -v2, reassembled with 64tass.exe, byte-diffed with a small Node script, trace-diffed with sidm2-sid-trace.exe (direct exe invocation — built a proper 2-byte-load-address .prg for the original file too, per this project's lesson about never handing sidm2-sid-trace.exe a raw .sid path directly)"
  ]
}
```

## Overview

Odin Tracker is a native C64 SID tracker by Zoltán Konyha (Zed), circa
2000-2001 (v1.13 dated 2001-04-17). It's included here because — unusually
for a classic-era tracker — its **6502 source is published** on CSDb
(`OdinTracker113src.zip`), making it a genuine open-source (source-available)
candidate rather than a closed binary. 156 files in the collection use it.
A 2026-07-18 reconstruction pass (in two parts, same day) found its per-file
reassembly fidelity is file-dependent but, on a 4-file sample, mostly strong:
3 of 4 real rips (Bachimisation 99.61%, Firelord_old 100.0000%, Ice 99.23% —
all fully trace-exact) reconstruct correctly; 1 of 4 (Arpeggioland) hits a
confirmed SIDdecompiler tool bug and is genuinely broken. The published
source (`OdinTracker113src.zip`) has now been read and fills in the
`data_format`/`effects`/`zero_page`/`layout` fields that were previously
`TODO` — see Verification and the `quirks` array.

## Quirks & gotchas

See the `quirks` array. The **source has now been read** (2026-07-18, fetched
directly from CSDb's webservice API) — `data_format`/`effects`/`zero_page`/
`layout` are filled from it, not guessed. The **license is still unstated**
— no explicit terms found in the archive; confirm permission before treating
it as reusable beyond this reverse-engineering use. A 2026-07-18 pass (two
rounds, same day) also filled in `memory.load_address` and `entry.init`/
`entry.play` from four real files' own PSID headers plus real disassembly/
reassembly/trace round-trips — see Disassembly notes and Verification below.

## Disassembly notes

**2026-07-18, part 1: two real HVSC rips disassembled directly (no source
archive needed for this part — PSID header + SIDdecompiler was sufficient).**

- **Bachimisation.sid** (load $1000, init $1000, play $1003, 15648-byte
  payload): `SIDdecompiler.exe Bachimisation.sid -obachimisation.asm -a4096
  -z -d -c -v1`, reassembled clean with 64tass, output length matched
  exactly (15648 bytes). Front of the file is a plain 6-byte JMP table
  (`JMP $1029` / `JMP $1067`) — matches the source's own documented
  init/play/stop/quickdriver JMP-table layout (see `entry.init`).
- **Arpeggioland.sid** (load $a000, init $bff0, play $bff3, 10754-byte
  payload): same recipe (`-a40960`), needed one manual fix to reassemble
  (an undefined zero-page symbol `za9` referenced by a `bit za9` — added
  `za9 = $a9` by hand since the disassembler never assigned it a label).
  Its reassembly is NOT reliable — see the `quirks` entry: SIDdecompiler
  drops the file's true first loaded byte, shifting everything after it by
  one, and INIT itself executes garbage in the reconstruction as a result.

**2026-07-18, part 2 (same day follow-up): two MORE real HVSC rips tested to
determine whether part 1's good or bad file is more typical.**

- **Firelord_old.sid** (load $8b00, init $bff0, play $bff3, 16045-byte real
  payload): `SIDdecompiler.exe Firelord_old.sid -ofirelord_old.asm -a35584
  -z -d -c -v2`. `-v2`'s own "Start: $8b00" matches the true load address
  exactly (no front-byte-drop this time). Reassembled clean with 64tass to a
  16208-byte `.prg` — 163 bytes LONGER than the real payload, but this is
  just SIDdecompiler's `-d` unused-data padding walking from the loaded
  block's end ($c9ac) into adjacent runtime-only scratch RAM the player
  touches as working storage ($c9ac-$ca4f, marked `+`/`w` in the `-v2` map)
  that was never part of the actual file — comparing only the overlapping
  16045 bytes gives a clean **100.0000%** byte match (0 diffs).
- **Ice.sid** (load $1000, init $1000, play $1003, 8544-byte payload):
  `SIDdecompiler.exe Ice.sid -oice.asm -a4096 -z -d -c -v2`. `-v2`'s "Start:
  $1000" also matches exactly. Reassembled clean, output length matched
  exactly (8544 bytes), 99.23% byte-exact (66 diffs, all at the same
  relative addresses as Bachimisation's own mismatch cluster — i.e. the
  same shared self-modified replay workspace, not new code).

## Verification

**Strengthened at the reconstruction level (2026-07-18, two rounds) — status
remains `in-progress` (NOT raised to `verified`: one of four real files
tested is a confirmed, unresolved broken reconstruction, which this
project's `verified` bar does not tolerate regardless of how well the other
three do — see the sidbang64/cheesecutter/dmc precedents for how this
project handles file-dependent fidelity).**

- **Bachimisation.sid: 99.61% byte-exact** (61 of 15648 bytes differ,
  clustered in `$1115-$1116`, `$181e-$188b`ish — every single diverging
  byte falls on a write-touched (`+`/`w`/`_`) address per SIDdecompiler's
  own `-v2` memory-touch map) **and fully trace-exact**: `sidm2-sid-
  trace.exe` over 300 frames produced byte-identical register-write logs
  for the original and the reassembled `.prg`.
- **Firelord_old.sid: 100.0000% byte-exact** over the real file's full
  16045-byte payload (0 diffs) **and fully trace-exact** over 300 frames
  (built a proper 2-byte-load-address `.prg` for the original file before
  tracing, per this project's standing lesson about never handing
  `sidm2-sid-trace.exe` a raw `.sid` path). This file shares Arpeggioland's
  exact "entry deep inside the loaded block, near $c000" convention
  (init=$bff0, play=$bff3) yet reassembles perfectly — proving the
  front-byte-drop bug is NOT tied to that convention.
- **Ice.sid: 99.23% byte-exact** (66 of 8544 bytes differ, at the same
  relative offsets as Bachimisation's own mismatch cluster) **and fully
  trace-exact** over 300 frames.
- **Arpeggioland.sid: only 53.8% byte-exact at native alignment**, and
  tracing confirms the reconstruction is **actually broken**, not just
  imprecise — its INIT vector executes different bytes than the real file
  (`Mem[$BFF0]` reads `C9 C2 4C 8F C1 00` in the reconstruction vs. the real
  file's `4C CA C2 4C 90 C1`), producing a near-silent trace (0 SID writes
  in frame 0 vs. 1 in the original, all-zero SID register state after INIT
  vs. real non-zero state). Root cause: SIDdecompiler's own `-v2` map
  reports its captured memory window starting at `$a001`, one byte past
  the file's real, PSID-header-confirmed load address `$a000` — it silently
  drops the file's true first byte (value `$12`, itself never read/
  written/executed at runtime, hence trimmed) from its own output, and
  every subsequent byte inherits a 1-byte shift. Manually reinserting the
  missing byte at the top of the `.asm` does NOT fix it — the disassembler's
  internal relocation/jump-target math was already computed against the
  wrong base, so a text-level shift can't retroactively correct it. This
  remains UNRESOLVED — the bug is confirmed data-content-dependent (whether
  a given file's true first loaded byte happens to be runtime-untouched),
  not tied to load-address style or entry-point convention.
- **Net conclusion**: 3 of 4 real files tested (75%) hit this project's
  `verified`-bar register-write match (exact or effectively-exact with the
  divergence fully localized to dead self-modified workspace bytes, per the
  `future-composer`/`cheesecutter`/`dmc` precedent for treating `-v2`-map
  write-touched mismatches as non-defects). This is a substantially stronger
  picture than part 1's 2-file sample suggested, but it is still only 4 of
  156 files in the local dataset, and the 1 failing file is a genuine,
  reproduced, root-caused tool bug that remains unfixed — the honest
  position is "probably fine for most exports, confirmed broken for at
  least one specific file's specific data layout," not "verified."
- Identity facts (author, year, CSDb release) remain confirmed from the
  cached SIDId entry and CSDb. `data_format`/`effects`/`zero_page`/`layout`
  are now filled from the published source (`OdinTracker113src.zip`,
  fetched and read this same pass) — see the `data_format`/`effects` JSON
  fields and the `quirks` array for the SoA/AoS instrument-layout nuance and
  the source's own acknowledged-unimplemented note-delay effect.

**Next step for a future pass**: (1) either fix/work around the
SIDdecompiler front-byte-drop bug (try patching the tool's own relocation
math rather than the `.asm` text, or try a different disassembler on
Arpeggioland.sid specifically) or test enough additional real files to
establish a reliable pass-rate estimate before considering `verified`;
(2) cross-reference the now-read source's effect/data-format facts against
an actual pattern-data region in one of the byte-exact reconstructions (e.g.
Firelord_old.sid) to confirm the row-packing byte-math derived from
`vplayer.s` matches real note/effect/instrument bytes in that file — this
pass derived the encoding from source code logic alone, not yet cross-
checked against a real file's actual pattern bytes.

## Sources

See the `sources` array — the published `OdinTracker113src.zip` (CSDb 2628,
fetched 2026-07-18 via CSDb's webservice API) and the cached SIDId entry
(`OdinTracker`, Zoltán Konyha / Zed, 2000).
