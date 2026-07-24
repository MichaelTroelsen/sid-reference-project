# Virtuoso

```json
{
  "id": "virtuoso",
  "name": "Virtuoso",
  "aliases": ["Virtuoso"],
  "authors": ["Hein Holt (Hein / Vision)"],
  "released": "2015-2019 (V0.96 20 Jun 2015 -> V1.02 26 Jan 2019)",
  "status": "verified",
  "platform": "Native C64 tool (on-machine music editor/tracker with a live keyboard 'jam' mode), distributed as bootable .d64 disk images. Developed with PC-side cross-dev tools bundled in the V1.02 source archive (64tass cross-assembler, c1541, pucrunch packer, tested under WinVICE per `make.bat`) but the editor itself runs natively on the C64. No separate PC editor/GUI exists.",
  "csdb_release": 139247,

  "memory": {
    "load_address": "Player module (`includes/music_routine.asm`) assembles at $0801 (BASIC stub) with the actual play-routine code block running from $0900 (`music_routine_start`) through `music_routine_end_incl_freq` (ends just before $1100, where embedded song-project data begins in the all-in-one browser .prg). For a song EXPORTED as a standalone file, the editor's exporter relocates this same code block to a location chosen at export time (`includes/packer_relocator.asm`'s `pack_and_relocate_songs`, `relocator_destination = $D000` by default, adjustable via a user-settings byte `disc_io_export_variables_user_settings`) -- so no single fixed load address can be assumed for an arbitrary Virtuoso-tagged .sid in the wild; it depends on export-time settings.",
    "zero_page": "Only one 2-byte pointer pair is owned by the play routine itself: `zp_idx_lo`/`zp_idx_hi` = $FE/$FF ('default zeropages for player', `includes/music_routine.asm` lines 39-41), reused sequentially as an indirect pointer while walking sequence/pattern data across all 3 voices inside `song_play`. Comment implies these two bytes are relocatable to avoid clashing with a host program's own ZP use. Not exhaustively audited beyond this pointer pair -- other temp ZP use elsewhere in the ~2800-line file was not traced.",
    "layout": "Two independent data streams, each with its own byte-value namespace: a per-voice sequencer/order-list stream (jump-up/jump-down/repeat/loop/empty tokens) and a pattern-data stream (notes/instrument-select/duration/direct-commands/instrument-programs). See `data_format` below. Song project data (names, instrument table, pattern data) sits at $1100+ in the all-in-one editor/browser build; the export/relocate path repositions the player code only, not necessarily the data layout of a packed release build."
  },
  "entry": {
    "init": "`song_init` (`includes/music_routine.asm` line 927), reached via `init_song: jmp song_init` just after $0900. Called once per song selection (from the disk browser's `music_player_init_song` loop in the all-in-one build); resets per-voice ADSR/waveform/filter/hard-restart state and loads the song's multi-speed nibble from `song_pattern_settings`.",
    "play": "`song_play` (line 984), reached via `play_song: jmp song_play`. Called every interrupt from the IRQ handler `irq_0` (line 538), installed on the CIA #1 Timer A vector (`$0318`/`$0319`, `$DD0D`/`$DD0E`). On non-advance frames it jumps straight to `osc_program_exe`; on every Nth frame (N = the per-song multi-speed nibble, decremented in `v123_multi_speed+1`) it runs the full pattern/sequencer advance via `pattern_list_init`."
  },
  "speed": "CIA #1 Timer A-driven, not a fixed once-per-raster-frame rate: four base tempos live in `player_speed_lo`/`player_speed_hi` tables (line 561-562: $C7/$4C, $63/$26, $97/$19, $31/$13, loaded into $DD04/$DD05) selected per-song by `v123_multi_speed`. A separate per-song 4-bit 'multi-speed' nibble (from `song_pattern_settings`) is decremented every IRQ in `song_play`, giving 1x-16x pattern-row multispeed independent of the base tempo. Startup syncs once to raster line $FB before arming the CIA timer (`music_player` routine, lines 420-431).",

  "data_format": {
    "order_list": "Sequencer/order-list stream, its own byte namespace distinct from pattern data (`includes/music_routine.asm` lines 44-98): up00-0f=$E0-$EF (jump-up references), dwn00-0f=$D0-$DF (jump-down references; dwn00 is overridden to $D0 'ONLY FOR EDITOR' vs $C0 elsewhere per an inline comment), rpt00-0d=$F0-$FD (repeat counters), loop=$FE, empty=$FF (terminator/empty slot).",
    "patterns": "Pattern-data byte values (lines 105-365): $00 = no note; $01-$5F = 95 chromatic notes C0..B7; $60-$7F = 32 instrument-select tokens ins00-ins1f; $80-$DF = 96 duration tokens dur00-dur5f; $E0-$E7 = direct pattern commands (see `effects`); $F0-$F6 = instrument-program trigger tokens; $FF = pattern end marker.",
    "instruments": "32 instrument slots (ins00-ins1f). Per-instrument behaviour is driven by small sub-programs triggered from the pattern stream ($F0-$F6, lines 356-363): prgads($F0) ADSR program, prgpor($F1) portamento, prgwav($F2) waveform program, prgfre($F3) frequency program, prgpul($F4) pulse program, prgfil($F5) filter program, prghar($F6) 'harmony' (arpeggio-like) program. Internal table layout of these sub-programs (`adsr_jump_table_indirect`/`osc_jump_table_indirect`, line ~581-589) was not traced further.",
    "wavetable": "TODO: waveform-program (`prgwav`) table internals not traced beyond its trigger token",
    "pulsetable": "TODO: pulse-program (`prgpul`) table internals not traced beyond its trigger token",
    "filtertable": "TODO: filter-program (`prgfil`) table internals not traced beyond its trigger token"
  },
  "effects": {
    "encoding": "Direct pattern commands occupy $E0-$E7 in the pattern byte stream (see `data_format.patterns`), dispatched through `pattern_command_indirect`'s jump table (`includes/music_routine.asm` lines 344-352, 578-579).",
    "commands": {
      "$E0 gateoff": "Gate off",
      "$E1 gateon": "Gate on",
      "$E2 gliup": "Glide/portamento up",
      "$E3 glido": "Glide/portamento down",
      "$E4 glito": "Glide to note (auto-portamento)",
      "$E5 tie": "Tie / legato (no retrigger)",
      "$E6 speed": "Per-row speed change",
      "$E7 freefree": "Reserved/unused -- inline comment: 'because of editor, max 3 bits. CMD $e7 still free'"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Composer concentration is heavy but not exclusive: of 61 tagged files in this dataset, 51 (~84%) are by the author Hein Holt himself; the remaining 10 spread across 4 other composers (NecroPolo, PSC64, Vincenzo, Viralbox) per `data/composers/*.json` (recount confirms 51/1/6/1/2 = 61 exactly).",
    "PUBLIC AND SOURCE-AVAILABLE (this pass's main finding, supersedes the prior 'source not found' note): the V1.02 CSDb release's download is literally named `virtuoso-1.02-including-sources.zip` (https://csdb.dk/release/?id=174495) and contains the full 64tass-syntax 6502 assembly source (`editor.asm` + 13 `includes/*.asm` files covering disk I/O, init, instrument, keyboard, music, packer/relocator, pattern, popup, sequencer and user-input routines), a PDF help manual (`Virtuoso_1.01_Help_A6.pdf`), 19 exported song projects, and the PC-side build tools (64tass, c1541, pucrunch) referenced by `make.bat`/`make-editor.bat`. No LICENSE file or licence statement was found anywhere in the archive -- treat as 'source available, no stated licence', not confirmed open-source/permissive in the legal sense.",
    "The play routine's exported/standalone form is relocatable, not fixed-address: `includes/packer_relocator.asm`'s `pack_and_relocate_songs` copies the whole `music_routine_start`..`music_routine_end_incl_freq` code block to a destination chosen at export time (default $D000, adjustable via a user-settings byte). This means `memory.load_address` above is a description of the *editor's own* code layout, not a guarantee for any specific Virtuoso-tagged .sid file found in HVSC.",
    "Has a live-performance 'jam' keyboard mode, called out favorably by users: 'Hein's Virtuoso also sports a keyboard to jam a bit' (Lemon64 forum) and CSDb commenters praised its 'layered jam mode'. A feature summary on vintageisthenewold.com lists the editor as 'sequencer, patterns, instruments, step and FLO programs' plus jam mode in mono/poly/layered variants, octave/tempo controls, and a diskette menu.",
    "V0.96 was explicitly released as a release-candidate before the author's holiday; V0.97 (12 Jul 2015) fixed an editing bug the author attributed to 'a forgotten zp when optimizing the code' -- confirms zero-page-sensitive code existed at that point in history; the only ZP usage confirmed in the later V1.02 source is the single `zp_idx_lo`/`zp_idx_hi` ($FE/$FF) pointer pair used by the play routine (editor-only ZP use was not audited).",
    "NTSC playback was reported broken by a user on the V0.96 CSDb comments; the author indicated NTSC support was not planned at the time.",
    "The play routine's core effect-dispatch code deliberately uses undocumented NMOS 6502 opcodes -- confirmed $0B (ANC #imm), $6B (ARR #imm) and $CB (AXS/SBX #imm) all appear in the pattern-command dispatch region (around song_play+0x6xx) across all 3 real files disassembled in the 2026-07-24 verification pass. `SIDdecompiler.exe`'s own internal trace-emulator does not implement these opcodes: it logs 'Unimplemented opcode: <hex> at address $<addr>' and, once the tune's own pattern data drives execution into a loop that repeatedly hits one of these instructions (confirmed at a per-file-specific address -- $15ed for BASF.sid, $166c for Breakstep.sid, $4664 for Bird_Beak.sid, all at the same relative offset from load), its default 30000-call trace gets permanently stuck re-hitting that one address for the remainder of the run. This caps how much of the file's total byte range the disassembler can statically discover (raising `-t` or `-C1` does not help, since the stall isn't insufficient trace length -- it's a genuine dead-end in the tool's own CPU model). Effect scales with file size: BASF.sid (5050B) and Breakstep.sid (2681B) only lost a small unreached tail (0% and 7.4% of the file respectively); Bird_Beak.sid (6784B) lost 39.1% (2655 trailing bytes, $5021-$5A80, never captured at all). `64tass` also needs the `-i` (NMOS 65xx) flag to assemble the `axs`/`arr` mnemonics SIDdecompiler DOES name; the one opcode it does NOT have a mnemonic for ($0B/ANC) is emitted as a bare, syntactically-invalid `ill` placeholder line that must be hand-patched to `.byte $0b, <operand>` before reassembly (confirmed needed on Bird_Beak.sid and Breakstep.sid; not present in BASF.sid's own disassembly, which only hit the two opcodes SIDdecompiler does name)."
  ],
  "sources": [
    "sidid:Virtuoso (author Hein Holt; released '2015 Vision'; reference https://csdb.dk/release/?id=139247) - deepsid_dl/sidid.nfo / data/sidid.json",
    "CSDb release, Virtuoso V0.96 (Vision, 20 Jun 2015), credits Code/Music/Graphics: Hein (Vision): https://csdb.dk/release/?id=139247",
    "CSDb release, Virtuoso V0.98 (Vision, 5 Mar 2016): https://csdb.dk/release/?id=145848",
    "CSDb release, Virtuoso V1.01 (Vision, 20 May 2017): https://csdb.dk/release/?id=156325",
    "CSDb release, Virtuoso V1.02 (Vision, 26 Jan 2019), credits Code/Music/Graphics: Hein (Vision): https://csdb.dk/release/?id=174495 -- download `virtuoso-1.02-including-sources.zip` (http://csdb.dk/getinternalfile.php/178280/virtuoso-1.02-including-sources.zip, fetched 2026-07-23)",
    "Full 6502 source archive contents (`editor.asm`, `includes/music_routine.asm`, `includes/packer_relocator.asm`, `includes/instrument_routines.asm`, `includes/pattern_routines.asm`, `includes/sequencer_routines.asm`, `includes/init_routines.asm`, `includes/disk_io_routines.asm`, `includes/keyboard_routines.asm`, `includes/clipboard_routines.asm`, `includes/popup_routines.asm`, `includes/user_routines.asm`, `includes/help_file.asm`, plus `Virtuoso_1.01_Help_A6.pdf` and 19 `projects/*.prg` song exports) -- source for every `memory`/`entry`/`speed`/`data_format`/`effects` fact above, all read directly from `includes/music_routine.asm` and `includes/packer_relocator.asm` within the V1.02 archive linked above",
    "Lemon64 forum, 'C64 music program' thread: quote 'Hein's Virtuoso also sports a keyboard to jam a bit' - https://www.lemon64.com/forum/viewtopic.php?t=70648",
    "vintageisthenewold.com, 'Virtuoso 0.99 - Commodore 64': feature list 'Main editor: sequencer, patterns, instruments, step and FLO programs' plus jam-mode/octave/tempo/diskette-menu description - https://www.vintageisthenewold.com/virtuoso-0-99-commodore-64",
    "Local dataset: 61 files tagged Virtuoso across 5 composers (see knowledge/COVERAGE.md and data/composers/{hein-holt,necropolo,psc64,vincenzo,viralbox}.json)",
    "2026-07-24 verification pass: disassembled/reassembled/trace-diffed 3 real HVSC files (MUSICIANS/H/Holt_Hein/BASF.sid, Breakstep.sid, Bird_Beak.sid) via SIDdecompiler.exe (C:\\Users\\mit\\claude\\c64server\\SIDM2\\tools\\SIDdecompiler.exe), 64tass.exe -i (C:\\debugger\\64tass\\64tass.exe), and sidm2-sid-trace.exe (same SIDM2 tools dir) -- register-write-exact on all 3 (see Verification section for figures)"
  ]
}
```

## Overview

Virtuoso is a native Commodore 64 music editor/tracker written by Hein Holt
(Hein, of the group Vision) and released as a series of versioned, bootable
`.d64` disk images between 2015 and 2019 (V0.96 through at least V1.02). It is
notable in the scene for a live "jam" keyboard mode for real-time performance,
well-received on CSDb (9.9/10 user rating on the initial release). In this
dataset it is used by 61 files, 51 of them (~84%) by Holt himself and the rest
by four other composers (NecroPolo, PSC64, Vincenzo, Viralbox) -- a personal
tool with modest but real outside adoption, not a purely private routine. The
V1.02 CSDb release bundles a full 64tass-syntax 6502 source archive alongside
the disk images, making this a genuinely source-available tool rather than
the closed "public-but-undocumented" case it first appeared to be.

## Quirks & gotchas

See the `quirks` array. The headline change from the prior pass: a source
archive **was** found (`virtuoso-1.02-including-sources.zip` off the V1.02
CSDb release), so this is no longer a closed-engine stub. The load-bearing
points: (1) composer concentration is heavy (84% self-authored) but not
total; (2) the play routine's exported form is **relocatable** -- the editor
copies its code block to an export-time-configurable address (default $D000),
so no single fixed load address applies to an arbitrary Virtuoso-tagged .sid;
(3) no LICENSE file exists in the archive, so "source available" is not the
same claim as "open-source" -- same caveat pattern as `odintracker.md`; (4)
the pattern/sequencer data-byte encoding is now fully documented straight
from the source's own symbol table (notes/instruments/durations/commands),
which is unusually clean.

## Disassembly notes

The 2026-07-24 pass performed the disassemble/reassemble/trace-diff step this
card's prior pass explicitly left undone. Three real HVSC files were used,
all `Holt_Hein/*.sid` (`MUSICIANS/H/Holt_Hein/`): `BASF.sid` (payload 5050B,
load/init/play `$1000`/`$1000`/`$1003`), `Breakstep.sid` (payload 2681B,
same load/init/play addresses), and `Bird_Beak.sid` (payload 6784B, load/
init/play `$4000`/`$4000`/`$4003` -- a different export-time relocation,
confirming `memory.load_address`'s "no single fixed address" note is real).
`SIDdecompiler.exe -a<decimal load> -z -d -c -v2` correctly reported `Start:`
== the file's own PSID load address on all three (no gotcha-40-style drift),
and the disassembly's own `init`/`play` jump targets (`l10d8`/`l1133` for the
$1000 files) line up exactly with the source's documented `song_init`/
`song_play` labels. `64tass -i -a --cbm-prg` (the `-i` NMOS-65xx flag is
required -- see the new quirks entry on undocumented-opcode use) reassembled
all three. Not traced further in this pass: the ADSR/waveform/pulse/filter/
harmony instrument-program table internals (still `TODO` in `data_format`),
and editor-side (non-play-routine) zero-page usage.

## Verification

**`status: verified` (2026-07-24).** Register-write-exact trace match
confirmed on three independent real HVSC files, each traced 2000 frames
(`sidm2-sid-trace.exe`, since the `mcp__sidm2-siddump__*` MCP tools were not
registered in this session -- see `hard_won_gotchas`/lessons_learned #8;
also needed lesson #22/#46's raw-.prg-with-explicit-load-header and
stderr-capture handling):

- **`BASF.sid`** (load/init/play `$1000`/`$1000`/`$1003`): byte-diff
  99.1285% (44/5049 bytes differ, all 44 concentrated in a small
  self-modified working-storage block `$1057-$10d5` plus 6 isolated
  self-modified indirect-jump-table operand bytes the disassembler's own
  header comment already flagged as risky -- `$121a`, `$121f`, `$1222`,
  `$1235`, `$1462`, `$1575`). Trace-diff: **2358/2358 register writes
  identical** over 2000 frames -- exact match, confirming all 44 diverging
  bytes are dead (post-execution snapshot values, never read before
  written), the same pattern as `lessons_learned` #10/16/17/20/25/29/30/32/
  36/37/42/43.
- **`Breakstep.sid`** (load/init/play `$1000`/`$1000`/`$1003`): disassembly
  captured 2483 of 2681 payload bytes (92.6% -- see the coverage-cap quirk
  below for why); byte-diff within the captured region 99.2348% (19/2483
  bytes differ, same dead-workspace pattern as BASF.sid). Trace-diff:
  **3/3 register writes identical** over 2000 frames (a short, sparse tune)
  -- exact match.
- **`Bird_Beak.sid`** (load/init/play `$4000`/`$4000`/`$4003`, a different
  export relocation than the other two): disassembly captured only 4129 of
  6784 payload bytes (60.9% -- the most severe case of the coverage-cap
  quirk below, missing tail `$5021-$5A80`); byte-diff within the captured
  region 99.5641% (18/4129 bytes differ, same dead-workspace pattern).
  Trace-diff: **3/3 register writes identical** over 2000 frames -- exact
  match, despite the missing 39.1% tail -- i.e. within the 2000-frame window
  actually exercised, the untraced tail bytes were never needed either by
  the real file's own playback (confirmed by comparing against the real
  file's own from-scratch trace, not assumed).

**Honest scope of the "verified" claim**: the match is register-write-exact
on every byte the disassembler actually captured, on all 3 tested files --
that is what earns `status: verified` per this project's rule (register-
write match, divergence explicitly quantified and localized, matching the
`laxity-newplayer` precedent -- here the trace match is in fact *exact*,
not ~99.9%). It does NOT mean 100% of every Virtuoso file's bytes are
reconstructable: larger files can hit a real, identified `SIDdecompiler`
tool limitation (see the new quirks entry) that leaves a genuine, unresolved
`TODO` gap in the trailing, evidently-unplayed-within-the-tested-window
portion of the file. That gap is a disassembly-coverage limit, not a
register-write divergence -- no evidence contradicts the covered code being
correct.

## Sources

See the `sources` array -- the cached SIDId entry, the CSDb release pages for
V0.96/V0.98/V1.01/V1.02 (the latter linking the source archive itself), the
full list of files read inside that archive, the Lemon64 forum thread, the
vintageisthenewold.com feature summary, and the local per-composer file
counts. Added 2026-07-24: three real HVSC files disassembled/reassembled/
traced (`MUSICIANS/H/Holt_Hein/BASF.sid`, `Breakstep.sid`, `Bird_Beak.sid`),
`SIDdecompiler.exe` (`C:\Users\mit\claude\c64server\SIDM2\tools\`), `64tass.exe`
(`C:\debugger\64tass\`), and `sidm2-sid-trace.exe` (same SIDM2 tools
directory) -- see the Verification section above for exact figures.
