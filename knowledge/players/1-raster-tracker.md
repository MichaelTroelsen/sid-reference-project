# 1 Raster-Tracker

```json
{
  "id": "1-raster-tracker",
  "name": "1 Raster-Tracker",
  "aliases": ["Hermit/1RasterTracker", "1raster-tracker", "1 Raster-Tracker V1.0", "ORM", "ORB"],
  "authors": ["Mihály Horváth (Hermit) / Hermit Software Hungary"],
  "released": "2013",
  "status": "in-progress",
  "platform": "Native C64 tracker/editor + its own ultra-compact 6502 replay engine. Source archive is public (SourceForge mirror); no explicit license file found in the archive.",
  "csdb_release": 117935,

  "memory": {
    "load_address": "$1000 default (PLAYERADDR); relocatable — the tune+player is exported with a built-in relocation table (union/struct-diff technique, 64tass) so the actual init/play addresses shift to whatever relocation address is chosen at save time in the editor menu. Source: player.asm lines 6, 32, 276-299.",
    "zero_page": "$DA-$FF, stated directly in the shipped help file ('There are some zeropage-locations that are used by code/data: $DA..$FF'). Named locations from player.asm within that range: zpeffects/tempo=$F7, sldcnt=$F8, sldspd=$F9, sldtgt=$FA, spdcnt=$FB, ptncnt=$FC, seqcnt=$FD, NOPcmd=$FE, tblcnt/endcmd=$FF, ptn3pt=$F5-$F6 (2 bytes). A small note-player routine (zpNote, channels 1/2 pitch dispatch) is copied down into zero page below $F5 by iniTune so it runs faster than from ROM/RAM at $1000+.",
    "layout": "Fixed $100-aligned tune-data block placed immediately after the $100-byte player code: tuneheader ($40 bytes — tempo/pattern-length/framespeed settings plus a 40-byte author/title text field) -> sequences (3 independent $40-byte per-channel orderlists: seq1/seq2/seq3) -> patterns (ptn1l/ptn1h and ptn2l/ptn2h hold raw 16-bit SID frequency values per row for channels 1-2; ptn3 holds one program-table index per row for channel 3) -> a shared 3-column program table (TblCol1/TblCol2/TblCol3) that channel 3 indexes into. Two mutually exclusive on-disk layouts, selected at compile time by the ORMtype constant: 'ORM' (ORMtype<=1: max 8 patterns/channel x 32 rows, fixed total size $09E8/10 disk blocks) and 'ORB' (ORMtype==2: up to 32 patterns/channel x up to 48 rows, size grows with the largest pattern count)."
  },
  "entry": {
    "init": "$1000 (PLAYERADDR) = JMP iniTune. Player.asm: 'INIT jmp iniTune'; the shipped help file: 'call $1000 to initialize the tune'. Shifts with relocation.",
    "play": "$1003 (PLAYERADDR+3, right after the 3-byte INIT jmp) — the PLAY label, called once per frame. Help file: 'call $1003 in every frame to play it. (Relocation changes these addresses.)'"
  },
  "speed": "Built to execute inside a single PAL rasterline: PALrastercycles=63 / NTSCrastercycles=65 (1raster.asm constants). Per-row tempo is a frame counter (spdcnt counts down against 'tempo'/zaktempo, i.e. frames-between-rows); a framespd tune-header byte selects '0/1: single-speed, 2..XX: multispeed' up to framespeed_max=64 (1raster.asm). The source does not itself install an IRQ handler — the one-rasterline call-cost budget is the tool's whole design goal (explicitly inspired by Lft's 'Air on a Rasterline' CSDb release/competition, named in 1raster-help.txt), not a hardcoded CIA-vs-raster choice inside player.asm.",

  "data_format": {
    "order_list": "3 independent per-channel orderlists (seq1/seq2/seq3), each a flat $40 (64)-byte table of pattern indices. Channels are NOT locked to one shared song-position pattern number as in most trackers — help file: 'You have separate patterns for each channel.'",
    "patterns": "Channels 1-2: each row is a raw 16-bit SID frequency value (ptn1l/ptn1h, ptn2l/ptn2h low/high tables) written straight to the channel's freq-lo/freq-hi registers — not a note+arpeggio index. Help file: 'note-pitches are fetched directly, you can fine-detune every note up/down.' Consecutive notes play legato; a gap row is needed for staccato/retrigger. Channel 3 (ptn3): one byte per row, an index into the shared program table (0 = no-op).",
    "instruments": "No separate instrument table. Channel 3's 3-column program table (TblCol1/TblCol2/TblCol3) doubles as both instrument and effect processor: TblCol1 non-zero means the row is a waveform+note entry (TblCol1=waveform/pitch-hi, TblCol2=pitch-lo); TblCol1==0 means TblCol2 is a command byte and TblCol3 its parameter (see effects.commands).",
    "wavetable": "Folded into the program table above (TblCol1 = waveform byte on a non-zero row) — no dedicated wavetable structure.",
    "pulsetable": "No dedicated pulse table; pulse width is just another SID register, poked via a program-table command byte < $1F.",
    "filtertable": "No dedicated filter table. One shared automatic 'slide' (sldcnt/sldspd/sldtgt, editable per tune, plus per-row program-table overrides of the same 3 fields) performs a single register ramp once per pattern row — the help file's own tip suggests using it for 'fast filter-cutoff controlling for the bass channel.'"
  },
  "effects": {
    "encoding": "3-column program table (channel 3 only), documented verbatim in the shipped help file's 'Summary of Program-table commands' section. Column1 non-zero => waveform+note row (not a command). Column1==0 => Column2 is a command byte, Column3 is its parameter.",
    "commands": {
      "$00-$1F": "write Column3 to SID register Column2 (direct register poke)",
      "$F7": "set tempo (frames/row) = Column3 ($00-$7F)",
      "$F8": "set slide start value = Column3",
      "$F9": "set slide speed = Column3",
      "$FA": "set slide target SID register = Column3",
      "$FB": "stop tune (Column3 $01-$7F)",
      "$FC": "jump to pattern-row position = Column3",
      "$FD": "jump to orderlist position = Column3 (only taken when the pattern's end is reached)",
      "$FE": "NOP / no operation",
      "$FF": "jump to another program-table position = Column3"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": ["sidwizard"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Whole-tool design constraint, not a mere feature: the PLAY routine must complete inside one PAL rasterline (~63 cycles, 65 on NTSC) — directly inspired by Lft's 'Air on a Rasterline' CSDb release/competition (named in 1raster-help.txt).",
    "Channels 1-2 store raw 16-bit SID frequency values per pattern row, not note+octave indices — an unusual choice that also means notes are always legato unless a gap row is inserted.",
    "Channel 3 has no notes of its own at all — every row is just an index into a shared 3-column program table that serves simultaneously as instrument (waveform/pitch program) and command/effect processor.",
    "Two on-disk pattern layouts (ORM: 8x32-row patterns/channel, fixed $09E8-byte size; ORB: up to 32x48-row patterns/channel, size grows with content) are chosen at COMPILE time via the Makefile's ORMtype constant, not switchable at runtime within one build.",
    "Ships its own MIDI -> ORM importer and ORM -> SID-Wizard SWM exporter (ORMconvert.c) — a genuine interoperability bridge to Hermit's other, unrelated-engine tool SID-Wizard, but this does NOT make the player engine itself SID-Wizard-derived (see the `shares_routine_with` note below, which is narrower: only the relocation-table generator).",
    "player.asm's relocation-table generator is explicitly credited in its own comments as 'based on the new SID-Wizard relocator by Soci/Singular' — a real, source-cited code-sharing link to the sidwizard card, distinct from the two players' otherwise unrelated data formats and play routines.",
    "No explicit license file found in the source archive (only 2013 author/copyright comment lines) — same ambiguity already flagged on the sidwizard.md card for Hermit's other tools; treat as 'unclear' rather than assuming permissive reuse.",
    "Composer concentration in this dataset: 27 files across 13 composers; Hermit himself accounts for 9/27 (33%), the rest spread across 12 other composers (1-3 files each) — consistent with the small credited pool on the 2013 release (Chabee, freQvibez, Hermit, NecroPolo) plus a handful of later adopters. A niche tool with genuine (if modest) multi-composer uptake, not purely personal."
  ],
  "sources": [
    "CSDb release (credits, date, group, download counts): https://csdb.dk/release/?id=117935",
    "SourceForge project page (source archive, v1.0, last updated 2015-08-10): https://sourceforge.net/projects/oneraster/",
    "Source archive downloaded and read directly (player.asm, 1raster.asm, 1raster-help.txt, ORMconvert.c, ORMconvert-help.txt): https://sourceforge.net/projects/oneraster/files/1raster-tracker-1.0.zip/download",
    "Demozoo production entry: https://demozoo.org/productions/203275/",
    "sidid: Hermit/1RasterTracker (author Mihály Horváth (Hermit); released 2013; reference https://csdb.dk/release/?id=117935) — data/sidid.json",
    "Local dataset: 27 files across 13 composers tagged Hermit/1RasterTracker, rank 17 by file count (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

1 Raster-Tracker is a native C64 music tracker by Mihály Horváth (Hermit),
released 12 April 2013 through Samar Productions/SIDRIP Alliance/Singular.
It is a deliberately extreme gimmick tool: its replay routine is built to
execute inside a single PAL rasterline (~63 CPU cycles), a constraint
directly inspired by Lft's "Air on a Rasterline" CSDb release. To fit that
budget, channels 1-2 write raw SID frequency values straight from pattern
data (no note-table lookup) and channel 3 abandons notes entirely in favour
of indices into one shared 3-column program table that doubles as both
instrument and effect processor. In this project's dataset it has 27 files
across 13 composers (rank 17 by file count per `knowledge/COVERAGE.md`),
with Hermit himself the largest single contributor (9/27, 33%) — a niche
but genuinely multi-composer tool rather than a purely personal routine.

## Quirks & gotchas

See the `quirks` array in the JSON block. The load-bearing ones: the
one-rasterline execution budget is the entire reason the format looks the
way it does; channels 1-2 store absolute SID frequencies per row (not
notes), so playback is legato-by-default; channel 3 has no notes, only
program-table indices; the ORM/ORB pattern-layout split is a compile-time
choice, not a runtime one; and the only real code-sharing link to Hermit's
other tool SID-Wizard is a single credited routine (the relocation-table
generator), not a shared engine.

## Disassembly notes

Not independently disassembled — the whole runtime picture above (load
address, zero page, entry points, speed model, data layout, effect
encoding) was read directly out of the publicly available source archive
(`player.asm`, `1raster.asm`, `1raster-help.txt`) fetched from the
SourceForge mirror, rather than reverse-engineered from a compiled `.sid`.
`player.asm` is short (under 200 lines of actual code) and is the whole
replay engine; `1raster.asm` (~5600 lines) is the editor. `ORMconvert.c`
implements the MIDI->ORM and ORM->SWM converters and was read only for the
interoperability claim, not for runtime facts.

## Verification

**Not verified — `status: in-progress`.** Promoted past `stub` because the
memory map, zero-page range, entry points, speed model, data format, and
effect-command table are all taken directly from a public, plainly-worded
source archive (the shipped `player.asm` and `1raster-help.txt`), not
inferred or guessed. It is **not** `verified`: no reassembly/trace pass
through `mcp-c64`/`sidm2-siddump` has been run against a real `.sid` from
this player. Left `TODO`/unconfirmed: the exact relocation-table contents
for a specific release build, whether any IRQ setup code in a real
demo/tune differs from the raw player.asm's assumptions, and the precise
byte layout inside the `zpNote` routine once copied to zero page.

## Sources

See the `sources` array — primary is the public source archive
(`player.asm`, `1raster.asm`, `1raster-help.txt`, `ORMconvert-help.txt`)
mirrored on SourceForge, corroborated by the CSDb release page, Demozoo,
and the cached SIDId entry (`Hermit/1RasterTracker`, Mihály Horváth /
Hermit, 2013, CSDb release 117935).
