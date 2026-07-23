# Virtuoso

```json
{
  "id": "virtuoso",
  "name": "Virtuoso",
  "aliases": ["Virtuoso"],
  "authors": ["Hein Holt (Hein / Vision)"],
  "released": "2015-2019 (V0.96 20 Jun 2015 -> V1.02 26 Jan 2019)",
  "status": "in-progress",
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
    "NTSC playback was reported broken by a user on the V0.96 CSDb comments; the author indicated NTSC support was not planned at the time."
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
    "Local dataset: 61 files tagged Virtuoso across 5 composers (see knowledge/COVERAGE.md and data/composers/{hein-holt,necropolo,psc64,vincenzo,viralbox}.json)"
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

No disassembly was performed -- unnecessary here, since the author's own
6502 assembly source was found and read directly (`includes/music_routine.asm`,
`includes/packer_relocator.asm`). Extracted: init (`song_init`) and play
(`song_play`) entry points and their call structure via the CIA #1 Timer A
IRQ; the play routine's own zero-page footprint (`zp_idx_lo`/`zp_idx_hi` =
$FE/$FF); the base-tempo/multispeed model; and the full byte-value encoding
of both the sequencer/order-list stream and the pattern-data stream,
including all 8 direct pattern commands ($E0-$E7) and the 7 instrument-program
trigger tokens ($F0-$F6). Not traced: the internal layout of the ADSR/
waveform/pulse/filter/harmony instrument-program tables themselves (left as
`TODO` in `data_format.wavetable`/`pulsetable`/`filtertable`), and the
editor-side (as opposed to play-routine) zero-page usage. A source archive
existing does not by itself satisfy this project's `verified` bar --
reconstruction still needs to be assembled and traced through
`sidm2-siddump` against a real Virtuoso-tagged `.sid` to confirm register
output matches; that step was not attempted in this pass.

## Verification

**Not verified -- `status: in-progress`.** Identity/provenance facts are
confirmed as before (cached SIDId entry, CSDb release pages, Lemon64 quote).
New this pass: several Tier 3 runtime facts (entry points, ZP footprint,
speed model, data format, effect command encoding) are now sourced directly
from the author's own released 6502 source rather than guessed, which is why
the card moved from `stub` to `in-progress` per this project's rule that a
public source plainly documenting a runtime fact earns that promotion. It is
not `verified`: no reassembly/trace through `sidm2-siddump`/`mcp-c64` against
an actual Virtuoso-tagged `.sid` has been done, and three data-format
sub-fields remain `TODO`.

## Sources

See the `sources` array -- the cached SIDId entry, the CSDb release pages for
V0.96/V0.98/V1.01/V1.02 (the latter linking the source archive itself), the
full list of files read inside that archive, the Lemon64 forum thread, the
vintageisthenewold.com feature summary, and the local per-composer file
counts.
