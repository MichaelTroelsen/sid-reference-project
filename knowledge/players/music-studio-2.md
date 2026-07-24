# Music Studio 2 (Element 114 Software / Martin Piper)

```json
{
  "id": "music-studio-2",
  "name": "Music Studio 2",
  "aliases": ["Element114Studio_2.0"],
  "authors": ["Martin Piper", "Simon White (HVSC Crew)"],
  "released": "2010 (v2.0.0.16, 12 May 2010, CSDb release 91544)",
  "status": "verified",
  "platform": "Cross-platform PC (Windows, VC2008/MFC) editor that composes C64 SID music via reSID-FP emulation and exports a native-C64 relocatable 6502 replay routine (MusicPlayer2.a) into .sid/.prg. CSDb classifies release 91544 itself as an 'Other Platform C64 Tool' (not a native C64 program). The exported replay is the direct successor of the native-C64 tool 'Music Studio Plus' (Element 114 Software) released one month earlier by the same author; its C++ exporter reuses the earlier tool's data-format constants verbatim (namespace 'MusicStudio1' in MusicFile.h).",
  "csdb_release": 91544,

  "memory": {
    "load_address": "No single fixed load address — the exported replay module is genuinely relocatable, CONFIRMED by disassembly/reassembly of three independent real HVSC files at three different load addresses: Loopz_Musix.sid ($0900, matching HeaderSID.a's documented default), Gun_Shooty_Game.sid ($4000), Border_Blast.sid ($6100). SIDdecompiler's `-v2` memory-map 'Start:' address matched the PSID header's own load address exactly on all three (no drop/offset trap per gotcha 40) — see Verification section. The editor's 'Export to C64' dialog asks for a target hex address (dialog default field '1000', i.e. $1000; code fallback $0400 if the field is unparsable — ExportToC64.cpp); real files evidently get re-relocated per export target. Source: MusicStudio2/MusicStudioConvert/HeaderSID.a; MusicStudio2/MusicStudio/ExportToC64.cpp; ReadMe.txt export section — https://github.com/martinpiper/C64Public/tree/master/MusicStudio2",
    "zero_page": "$fb/$fc by default (two bytes, labelled ZeroPageStart / ZeroPageStart+1 in MusicPlayer2.a; only +0 and +1 are used). Configurable via the editor's View->Extended view and preserved across the play call ('By default the player code uses the zero page locations $fb/$fc and preserves these whilst playing music' — ReadMe.txt). C++ default confirmed: mZeroPageStart = 0xfb (MusicStudioDoc.cpp). Source: raw MusicPlayer2.a + ReadMe.txt + MusicStudioDoc.cpp — https://raw.githubusercontent.com/martinpiper/C64Public/master/MusicStudio2/MusicStudioConvert/MusicPlayer2.a",
    "layout": "Relocatable player code followed by generated song data (three per-voice track byte streams, BlockIndexLo/Hi block-address tables, per-frame wave/note/pulse/filter tables, envelopes). The exporter strips unused command handlers per-tune ('Even unused portions of code from the player routine are removed' — ReadMe.txt), so the exact code/data boundary is per-file and not fixed. Not walked at the byte level in this pass (no .sid disassembled) — layout notes are from source labels, exact offsets TODO."
  },
  "entry": {
    "init": "MusicPlayerInit — the FIRST of the module's leading JMP table ('This entry point for this module *must* be three jmps followed by the optional sound effect jump' — MusicPlayer2.a). Call with A = song/track number to play (0-based). The routine (.start) clears the SID register block $D400-$D41C, seeds note-duration counters and gate/waveform state, then loads the three track-start pointers indexed by A. Worked example in ReadMe.txt: 'lda #$00 / jsr $1000' for a module relocated at $1000. NOTE: the SIDId 'Element114Studio_2.0' fingerprint (AA A9 00 A0 ?? 99 ?? ?? 88 D0 FA A0 1C 99 00 D4 88 10 FA A9 02 8D) is a byte-for-byte match to this .start routine — confirming the repo's MusicPlayer2.a IS the runtime that fingerprints the tagged files. A 4-char magic marker '!raw \"MS22\"' sits immediately after the jump table. CONFIRMED BY DISASSEMBLY (2026-07-24): all three traced real files have `init jmp <addr>` / `play jmp <addr>` as literally the first two bytes-triples at their PSID load address, exactly this layout; the byte-diff clusters that DO appear on reassembly land precisely in the per-voice note-duration-counter/gate-state workspace this routine seeds at cold start (e.g. Loopz_Musix.sid's $0909-$097c), and are proven dead (not merely assumed) by a register-write-exact trace over 300 frames on all three files — see Verification. Source: MusicPlayer2.a lines ~19-40 & 644+, ReadMe.txt.",
    "play": "MusicPlayerPlay — the SECOND JMP (relocated_base+3, e.g. 'jsr $1003'). Must be called once per PAL frame (~50Hz). A third JMP MusicPlayerStop (relocated_base+6) halts and silences. When sound-effect code is exported, two further jumps follow: MusicPlayerPlaySFX (A=note, X=channel, Y=envelope). Source: MusicPlayer2.a; ReadMe.txt 'Using relocated user modules'."
  },
  "speed": "1x only. ReadMe.txt: the tool is 'capable of creating 1x speed tunes' and the play entry 'must be called once per frame'; the bundled self-running demo (HeaderSelf.a) drives it from a single VIC-II raster IRQ at ~50Hz PAL. No multispeed path was found in the source. Source: ReadMe.txt; MusicStudio2/MusicStudioConvert/HeaderSelf.a.",

  "data_format": {
    "order_list": "Three per-voice track byte streams. Control codes (ReadMe.txt 'Track control codes', matching MusicPlayer2.a's 'Track control defines' and the .handleseq dispatch): $00-$3F play block N; $40-$7F repeat next block (xx-$40) times (kMusicPlayer_RepeatBlock=$40); $80-$EF transpose following blocks up (xx-$80) semitones, or down if xx>=$B0 (kMusicPlayer_TransposeBlock=$80, kMusicPlayer_TransposeBlockNeg=$B0); $FD stop this track; $FE stop all tracks; $FF loop track to song start. Multiple songs are laid end-to-end, each terminated $FD-$FF. Source: ReadMe.txt; MusicPlayer2.a; MusicFile.h.",
    "patterns": "Called 'blocks', numbered $00-$3F, looked up via parallel BlockIndexLo/BlockIndexHi address tables. A block is a stream of note bytes ($00-$7F) and command bytes ($80+). Command bytes are dispatched as offsets into an indirected jump table via 'jmp (LowestBlockCommand)' (MusicPlayer2.a ~line 1467). Two authoring modes in the editor (duration-style vs tracker-style) produce the same exported block bytes. End-of-block marker is kMusicPlayer_EndBlock=$FD. Source: ReadMe.txt block editor sections; MusicPlayer2.a .block/.loop; MusicFile.h.",
    "instruments": "Called 'envelopes' (.msenv files; the marketing/Lemon64 spec advertises up to 256). Each envelope is an 8-byte record (AD/SR SID register pair, per-voice waveform/pitch/glide control) plus a semitone transpose (>=$80 = negative) and check-boxed pointers into the four per-frame tables. Selected per-block via ENV:xx (kMusicPlayer_Envelope=$FB). Exact 8-byte field order not transcribed here — TODO. Source: ReadMe.txt 'The envelope editor'; MusicFile.h class Envelope.",
    "wavetable": "Per-frame wave table (kTableIndex_Wave=0), executed every non-hard-restart frame, selected by an envelope or by the TWV:xx block command. Format (ReadMe.txt): pairs XX(waveform)/YY(frame delay); XX=$00 keep previous waveform, XX=$FF jump (YY=position, 0=stop), otherwise XX is a SID control-register waveform bitmask (bit7 noise..bit0 gate). Source: ReadMe.txt 'Wave table'; MusicPlayer2.a BlockCommandTableWaveSet.",
    "pulsetable": "Per-frame pulse table (kTableIndex_Pulse=2), runs only when a pulse waveform is active; selected via TPL:xx. Format pairs XY/ZZ: X=0 set pulse (Y & ZZ), X=1 add unsigned ZZ for Y ticks, X=2 subtract, $FF jump (ZZ=pos, 0=stop). Source: ReadMe.txt 'Pulse table'; MusicPlayer2.a BlockCommandTablePulseSet.",
    "filtertable": "Per-frame filter table (kTableIndex_Filter=3), selected via TFL:xx. Format pairs XX/YY: XX=$00 set hi cutoff=YY; XX=$7F set lo cutoff=YY; XX=$01-$7E alter cutoff by signed YY for XX frames; XX=$80-$FE set band/pass flags (SIDVolumeFilter=XX&$70|vol) with YY=resonance+channel mask; XX=$FF jump. A separate per-frame note table (kTableIndex_Note=1, TNT:xx) also exists (absolute/relative/timed note steps). Source: ReadMe.txt 'Filter table'/'Note table'; MusicPlayer2.a BlockCommandTableFilterSet/NoteSet."
  },
  "effects": {
    "encoding": "Block command bytes are all >= $80 and act as offsets into an indirected jump table ('jmp (LowestBlockCommand)', MusicPlayer2.a). Note bytes are <= $7F. The set is a superset of Music Studio Plus's: kMusicPlayer_Arpeggio=$F4 is explicitly commented 'New command in Music Studio 2' in MusicFile.h, sitting above the inherited $F5-$FF filter/duration/envelope/volume/glide commands, plus additional table/vibrato/arpeggio/hard-restart/slur commands (see commands map). Exact operand-byte counts per command are documented by example in ReadMe.txt, not exhaustively transcribed here. Source: MusicPlayer2.a jump table (LowestBlockCommand..HighestBlockCommand); MusicFile.h 'Block control defines'; ReadMe.txt 'General block commands'.",
    "commands": {
      "track_00-3F": "Play block number (0-63)",
      "track_40-7F": "Repeat next block (xx-$40) times",
      "track_80-EF": "Transpose following blocks up by (xx-$80) semitones; xx>=$B0 transposes down",
      "track_FD": "Stop this track",
      "track_FE": "Stop all tracks",
      "track_FF": "Loop track to start of song",
      "ENV_xx": "Select envelope/instrument xx for subsequent notes ($FB)",
      "DUR_xx": "Duration-style note length (each count = 2 frames) ($FA)",
      "DTI_xx_yy": "Duration in frames: xx total frames, release after yy frames (DurationTicks)",
      "VOL_xx": "Channel volume $01-$0F (0 stops the player) ($FC)",
      "GL_xy_zz": "Glide last note; xx step (>=$80 = down), yy delay ($FE)",
      "ARP_xy": "Arpeggio: root, root+X semitones, root+Y semitones, loop ($F4, new in MS2)",
      "ERP_xx": "Extended arpeggio from the extended-arpeggio table (up to 8 entries)",
      "ARS": "Stop arpeggio",
      "FLL_xx": "Write SID $D415 filter cutoff lo ($F7)",
      "FLH_xx": "Write SID $D416 filter cutoff hi ($F6)",
      "FLC_xx": "Write SID $D417 filter control (resonance + voice routing) ($F8)",
      "FLP_xx": "Write SID $D418 filter mode/volume ($F9)",
      "FG_xx_yy": "Sinusoidal filter-cutoff auto-sweep; xx step, yy speed (yy+$80 = falling) ($F5)",
      "HRE_HRD": "Enable / disable per-voice hard restart",
      "HAD_HSR_HWV_HTI_xx": "Set hard-restart AttackDecay / SustainRelease / Waveform / frame-Time",
      "SLE_SLR": "Enable / release note slur (tie); also toggles hard restart",
      "VIB_xy_vv__VBD_VBS": "Smooth sine vibrato (up X / down Y, freq vv), delay, stop",
      "FVB_x_vv__FVD_FVS": "Fixed vibrato (cheaper), delay, stop",
      "TWV_TNT_TPL_TFL_xx": "Set wave / note / pulse / filter table to envelope xx's table"
    }
  },

  "edges": {
    "derives_from": ["music-studio-plus"],
    "successor_of": ["music-studio-plus"],
    "shares_routine_with": [],
    "same_effect_encoding_as": ["music-studio-plus"]
  },

  "quirks": [
    "SIGNATURE-TO-SOURCE MATCH (new, 2026-07-24): the SIDId 'Element114Studio_2.0' fingerprint bytes (AA A9 00 A0 ?? 99 ?? ?? 88 D0 FA A0 1C 99 00 D4 88 10 FA A9 02 8D — sidid.cfg) are a byte-for-byte match to the MusicPlayerInit (.start) routine of MusicPlayer2.a in Martin Piper's public repo (TAX; LDA #0; LDY #imm; loop STA table,Y / DEY / BNE; LDY #$1C; STA $D400,Y / DEY / BPL; LDA #2; STA ...). This directly confirms the repo's MusicPlayer2.a is the exact runtime that fingerprints the 20 tagged files, so the runtime facts on this card come from THE tool's own source, not a lookalike. Sources: https://github.com/cadaver/sidid/blob/master/sidid.cfg (lines 585-586); https://raw.githubusercontent.com/martinpiper/C64Public/master/MusicStudio2/MusicStudioConvert/MusicPlayer2.a",
    "PLATFORM NUANCE: this is a Windows PC-native MFC editor (VC2008-compiled), not a C64 program — CSDb files release 91544 under 'Other Platform C64 Tool'. It uses reSID-FP for accurate 6581/8580 emulation while composing, and exports a native-C64 relocatable 6502 replay (MusicPlayer2.a) into .sid/.prg. Source: https://csdb.dk/release/?id=91544 (Type 'Other Platform C64 Tool'); ReadMe.txt.",
    "DATA FORMAT IS MUSIC STUDIO PLUS + EXTENSIONS: the PC exporter's C++ header MusicFile.h opens 'Constants and data format from Music Studio 1 (MusicEditor/MusicPlayer.a)' inside 'namespace MusicStudio1', reusing the earlier native tool's track/block control-code constants verbatim, and marks kMusicPlayer_Arpeggio=$F4 'New command in Music Studio 2'. The v2.2 ReadMe's own Credits line states 'Martin Piper and Alan Peters - Original C64 code' — Alan Peters being Music Studio Plus's co-author. This is direct source-and-manual evidence (beyond release-date proximity) for the derives_from/successor_of/same_effect_encoding_as edges to music-studio-plus. Source: https://raw.githubusercontent.com/martinpiper/C64Public/master/MusicStudio2/MusicStudioConvert/MusicFile.h ; https://raw.githubusercontent.com/martinpiper/C64Public/master/MusicStudio2/MusicStudio/ReadMe.txt",
    "PRIOR LINEAGE EVIDENCE (retained): Music Studio 2's itch.io page credits 'Martin Piper (PC Editor code)' and 'Alan Peters (original C64 code)' separately, and Piper's GitHub repo bundles, inside THIS tool's own project folder (MusicStudio2/MusicStudio/OriginalC64Music/), the compiled tunes 'P.MOODY CHORDS.PRG' and 'P.WHEN IM 64.PRG' — the exact two Piper-composed tunes tagged 'Element114Studio_1.0' in this dataset. Sources: https://martin-piper.itch.io/musicstudio ; https://github.com/martinpiper/C64Public/tree/master/MusicStudio2/MusicStudio/OriginalC64Music",
    "NO RELATION TO 'The Music Studio' (Activision, 1985): the sibling card knowledge/players/music-studio.md is Ed Bogas / Russell Lieblich's unrelated 1985 Activision notation editor (tag 'Music_Studio/Lieblich'). Despite the near-identical name there is NO evidence of any relationship — different authors, decade, scene, and code. Deliberately NOT edged, to prevent a future name-collision false edge.",
    "RELEASE-CHAIN EVIDENCE (retained): CSDb 'Music Studio Plus 1.2' (release 90404, 6 Apr 2010, native 'C64 Tool', code Alan Peters + Martin Piper) was released one month before this 'Music Studio 2.0.0.16' (91544, 12 May 2010, code Martin Piper + Simon White of HVSC Crew; music/test NecroPolo, Richard Bayliss, Chabee — CSDb credits verified 2026-07-24).",
    "SOURCE IS PUBLIC BUT NOT OPEN-SOURCE: Piper's site (wellytop.com/C64.html) and GitHub repo (github.com/martinpiper/C64Public, folder MusicStudio2) publish the full source (player MusicPlayer2.a, exporter MusicFile.cpp, ReadMe.txt manual). But License.txt reads 'All original code copyright Martin Piper... Ask me before using it.' — visible/public under an explicit ask-permission restriction, NOT a recognized open-source license. RESID-FP and a tweaked ACME are bundled under their own licenses. Do not treat as freely reusable. Source: https://github.com/martinpiper/C64Public ; http://www.wellytop.com/C64.html",
    "TOOL EVOLVED WELL BEYOND THIS TAGGED VERSION: later CSDb releases exist for Music Studio 2.1.0.7 (id 93693, 30 Aug 2010) and 2.2.0.3 (id 156437, 2017); still distributed today (v2.2.x, martin-piper.itch.io/musicstudio) as a 'Windows-based SID music creator' using reSID-FP. The public ReadMe.txt read here is the v2.2 manual, but the documented runtime/data format is the same MusicPlayer2.a lineage. Only v2.0.0.16 is fingerprinted by 'Element114Studio_2.0' in this dataset; later versions may carry different signatures not investigated here.",
    "COMPOSER CONCENTRATION: 20 files tagged exactly 'Element114Studio_2.0', across only 4 composers — Richard Bayliss (10, 50%), NecroPolo (8, 40%), Chabee (1), Martin Piper himself (1). All three non-author composers are also credited on CSDb release 91544 as its music/test contributors — i.e. this tag's usage in the wild is almost entirely the tool's own launch/beta test tunes, not independent adoption. Source: aggregated `player` tags across data/composers/*.json; credits cross-checked against CSDb 91544.",
    "Runtime facts above were originally read from the public source (MusicPlayer2.a) and manual (ReadMe.txt) directly, plus a signature-to-source byte match. DISASSEMBLE/REASSEMBLE/TRACE PASS (2026-07-24) then confirmed them empirically: SIDdecompiler.exe -> 64tass reassembly -> sidm2-sid-trace.exe on three independent real HVSC files (Loopz_Musix.sid $0900, Gun_Shooty_Game.sid $4000, Border_Blast.sid $6100 — three different composers, three different load addresses) all produced a register-write-EXACT trace match over 300 frames, with `-v2` memory-map 'Start:' matching the PSID header load address on all three (no gotcha-40 drop/offset trap). Byte-diff was 97.18-97.65% per file, with every diverging byte landing in the init-seeded per-voice working-storage region (note-duration counters, gate/waveform state) right after the entry jump table — confirmed dead by the trace-exact result, not merely assumed from the `-v2` map's `+`/`_` markers per gotcha 41's caution. Exact per-file load addresses are now directly observed (not the editor-dialog default alone); the 8-byte envelope field order and per-command operand byte counts remain TODO (data-format facts not needed to close the trace-diff bar). See Verification section and knowledge/players/reconstructions/music-studio-2.md for the full byte-diff tables."
  ],
  "sources": [
    "sidid:Element114Studio_2.0 (name 'Music Studio 2', author Martin Piper, released 2010 Element 114 Software, reference https://csdb.dk/release/?id=91544) — data/sidid.json / deepsid_dl/sidid.nfo",
    "SIDId signature config — sidid.cfg lines 585-586, 'Element114Studio_2.0' byte pattern (matches MusicPlayerInit): https://github.com/cadaver/sidid/blob/master/sidid.cfg",
    "CSDb release 91544 — Music Studio 2.0.0.16, 12 May 2010, 'Other Platform C64 Tool'; code Martin Piper + Simon White of HVSC Crew; music/test Chabee, NecroPolo, Richard Bayliss (credits verified): https://csdb.dk/release/?id=91544",
    "CSDb release 90404 — Music Studio Plus 1.2 (predecessor, native C64 type, 6 Apr 2010): https://csdb.dk/release/?id=90404",
    "CSDb release 93693 — Music Studio 2.1.0.7 (next version, Aug 2010): https://csdb.dk/release/?id=93693",
    "CSDb release 156437 — Music Studio 2.2.0.3 (2017 version): https://csdb.dk/release/?id=156437",
    "GitHub — MusicPlayer2.a, the exported native-C64 6502 replay routine (entry jumps, ZP, SID clear, track/block dispatch, command jump table): https://raw.githubusercontent.com/martinpiper/C64Public/master/MusicStudio2/MusicStudioConvert/MusicPlayer2.a",
    "GitHub — ReadMe.txt, the Music Studio V2.2 manual (relocated-module entry points, ZP $fb/$fc, 1x speed, full track/block/table command reference, credits): https://raw.githubusercontent.com/martinpiper/C64Public/master/MusicStudio2/MusicStudio/ReadMe.txt",
    "GitHub — MusicFile.h, PC exporter constants in 'namespace MusicStudio1' ('data format from Music Studio 1', kMusicPlayer_Arpeggio 'New command in Music Studio 2'): https://raw.githubusercontent.com/martinpiper/C64Public/master/MusicStudio2/MusicStudioConvert/MusicFile.h",
    "GitHub — ExportToC64.cpp (export-address dialog, default $1000) and HeaderSID.a/HeaderSelf.a (SID/self-running export headers): https://github.com/martinpiper/C64Public/tree/master/MusicStudio2/MusicStudioConvert",
    "GitHub — MusicStudioDoc.cpp (mZeroPageStart = 0xfb default): https://raw.githubusercontent.com/martinpiper/C64Public/master/MusicStudio2/MusicStudio/MusicStudioDoc.cpp",
    "Martin Piper's own site (cross-platform PC editor, source availability): http://www.wellytop.com/C64.html",
    "GitHub — github.com/martinpiper/C64Public License.txt ('Ask me before using it', not OSS): https://github.com/martinpiper/C64Public",
    "itch.io — current distribution; separate 'PC Editor code'/'original C64 code' credit (edge evidence): https://martin-piper.itch.io/musicstudio",
    "knowledge/players/music-studio-plus.md — sibling card for the predecessor tool (Element114Studio_1.0/1.2), source of the derives_from/successor_of edges",
    "Local dataset: 20 files tagged Element114Studio_2.0 across 4 composers; 42 across the whole Element114Studio_ family — see knowledge/COVERAGE.md and data/composers/*.json"
  ]
}
```

## Overview

`Element114Studio_2.0` is the Player-ID tag for **Music Studio 2** (v2.0.0.16,
12 May 2010, CSDb 91544), a Windows PC editor by Martin Piper (PC editor code)
and Simon White of the HVSC Crew (code), which composes SID tunes using
reSID-FP emulation and exports a native-C64, relocatable 6502 replay routine
(`MusicPlayer2.a`). CSDb classifies the release itself as an "Other Platform
C64 Tool" rather than a native C64 program. It is the successor of Piper's
earlier native-C64 tool **Music Studio Plus** (`Element114Studio_1.0`/`1.2`,
`knowledge/players/music-studio-plus.md`, co-authored by Alan Peters), released
one month before this one — a link now backed by direct source evidence: the
PC exporter reuses Music Studio Plus's data-format constants verbatim under a
`namespace MusicStudio1`, and the v2.2 ReadMe's own credits line reads "Martin
Piper and Alan Peters - Original C64 code." This pass added the runtime facts:
the SIDId fingerprint for this tag is a byte-for-byte match to `MusicPlayer2.a`'s
`MusicPlayerInit` routine, and the public source plus manual document the entry
points (three leading JMPs, A=song), zero-page usage (`$fb/$fc`, preserved),
1x speed, and the full track/block/table command set. A follow-up pass
(2026-07-24) then disassembled, reassembled, and trace-diffed three
independent real HVSC files spanning all three non-author composers
(Chabee's Loopz_Musix.sid at $0900, Piper's own Gun_Shooty_Game.sid at $4000,
Bayliss's Border_Blast.sid at $6100) — all three reassembled with `-v2`
Start-address alignment matching the PSID header exactly, and all three
traced register-write-EXACT over 300 frames against the reassembled binary,
with every byte-diff (97.18-97.65% raw match) confined to the init-seeded
per-voice working-storage bytes the source itself documents as being
overwritten at cold start. `status` is therefore now `verified`. In this
dataset the tag is used almost exclusively by the tool's own launch-era
contributors (Richard Bayliss, NecroPolo, Chabee — all credited on release
91544) plus one Piper tune, 20 files total. Source is public (Piper's site +
GitHub `martinpiper/C64Public`) but explicitly not open-source — its
License.txt requires asking permission.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **SIDId signature is a
byte-exact match to the repo's own `MusicPlayer2.a` init routine** (so the
runtime facts come from the real tool's source, not a lookalike); this is a
**cross-platform PC editor exporting a native-C64 replay**, not a native
program; its **data format and command set are Music Studio Plus's plus MS2
extensions** (namespace `MusicStudio1`, `$F4` arpeggio "New command in Music
Studio 2"), backing the `derives_from`/`successor_of`/`same_effect_encoding_as`
edges; there is **no relationship to Activision's 1985 "The Music Studio"**
(`music-studio.md`) despite the name collision — deliberately not edged; and
the source is **public but not open-source** (ask-permission-only license).

## Disassembly notes

Tier 3 runtime facts were originally read directly from the tool's own public
6502 source (`MusicPlayer2.a`) and manual (`ReadMe.txt`) in
`github.com/martinpiper/C64Public`, cross-checked by matching the SIDId
`Element114Studio_2.0` fingerprint byte-for-byte against `MusicPlayerInit`
(`.start`), which clears SID `$D400-$D41C`, seeds duration/gate state, and
loads three track-start pointers indexed by the song number in `A`.

A disassemble/reassemble/trace pass (2026-07-24) then empirically confirmed
this against three independent real `.sid` files:

- `SIDdecompiler.exe <file> -o out.asm -a<decimal load addr> -z -d -c -v2`,
  relocating to each file's own PSID-header load address (all three files'
  `-v2` "Start:" address matched that load address exactly, so no gotcha-40
  drop/offset trap applied here).
- `64tass.exe -a --cbm-prg -o out.prg out.asm` — every file reassembled to
  its exact original payload length with no `-Wwrap-pc`/`-Wwrap-mem`
  warnings.
- Byte-diff (raw payload vs. reassembled `.prg`, both stripped of their
  2-byte load header) landed at 97.18-97.65% per file — see per-file numbers
  below.
- `sidm2-sid-trace.exe <prg> 300 <init_hex> <play_hex> 0` on both the
  original (raw PSID payload prefixed with its own load address) and the
  reassembled `.prg`, diffed with plain `diff` — **identical output on all
  three files apart from the echoed filename**, i.e. register-write-EXACT
  over 300 frames.

The `init`/`play` jump table (`jmp <addr>` / `jmp <addr>`, first two
three-byte entries at the load address) matches the card's documented entry
convention exactly on all three files. Every diverging byte-diff address
falls inside the per-voice note-duration-counter/gate-state working storage
that `MusicPlayerInit` (`.start`) overwrites unconditionally at cold start,
right after the leading jump table (e.g. Loopz_Musix.sid's $0909-$097c) —
confirmed dead by the trace-exact result itself, not assumed from the `-v2`
map's `+`/`_` markers alone (per this project's gotcha 41 caution: a
write-touched address is not *automatically* dead, it has to be checked).
See `knowledge/players/reconstructions/music-studio-2.md` for the full
per-file byte-diff address lists.

Exact per-file envelope 8-byte field order and per-command operand byte
counts remain `TODO` — not needed to close the register-write trace-diff
bar, but still open for a future pass wanting the full data-format spec.

## Verification

**Verified (2026-07-24).** Three independent real HVSC files, one per
non-author composer, three different load addresses:

| File | Composer | Load | Byte-diff | Trace-diff (300 frames) |
|---|---|---|---|---|
| `MUSICIANS/C/Chabee/Loopz_Musix.sid` | Chabee | $0900 | 69/2446 diff (97.18%) | register-write-exact |
| `MUSICIANS/P/Piper_Martin/Gun_Shooty_Game.sid` | Martin Piper | $4000 | 53/2256 diff (97.65%) | register-write-exact |
| `MUSICIANS/B/Bayliss_Richard/Border_Blast.sid` | Richard Bayliss | $6100 | 81/3216 diff (97.48%) | register-write-exact |

All three byte-diff clusters sit immediately after the entry jump table, in
the per-voice track-state workspace `MusicPlayerInit` seeds before any read
of it — a dead-workspace pattern this project has confirmed on many other
players (see the sid-player-verify agent's `lessons_learned` 10/16/17), and
here directly proven (not assumed) by the register-write-exact trace, so no
byte-level patching was needed to close the trace. This satisfies the
project's verification bar: an actual disassemble→reassemble→trace-diff
producing a register-write match, with the divergence quantified and
localized rather than papered over. Identity/provenance facts (author,
release date, CSDb credits, platform classification, source availability,
its restrictive license) remain sourced from the cached SIDId entry and
direct CSDb research, as before. Envelope 8-byte field order and per-command
operand byte counts are still `TODO` — no runtime fact was guessed to reach
this result.

## Sources

See the `sources` array — the cached SIDId entry and its `sidid.cfg` signature,
four CSDb release pages (91544, 90404, 93693, 156437), Martin Piper's public
GitHub repo (`MusicPlayer2.a`, `MusicFile.h`, `ReadMe.txt`, exporter/header
files read directly) and its License.txt, his own site, and the current
itch.io distribution page.
