# Music Studio Plus (Element 114 Software / DarkStar Systems Software)

```json
{
  "id": "music-studio-plus",
  "name": "Music Studio Plus",
  "aliases": ["Element114Studio_1.0", "Element114Studio_1.2"],
  "authors": ["Alan Peters (DarkStar Systems Software)", "Martin Piper"],
  "released": "1992 (original code written, unreleased) / 2010 public release — v1.1 9 Mar 2010 (CSDb 89392), v1.2 6 Apr 2010 (CSDb 90404), Element 114 Software",
  "status": "verified",
  "platform": "Native C64 music editor + relocatable in-game player module (CSDb classifies release 90404 as a plain 'C64 Tool', i.e. native — unlike its later PC-hosted successor Music Studio 2, filed as 'Other Platform C64 Tool'). Editor interface modeled on the classic Future Composer editor per a CSDb user comment (speculative, not author-confirmed — see quirks), with a built-in Future Composer V4.0 import/conversion feature.",
  "csdb_release": 90404,

  "memory": {
    "load_address": "No fixed load address for the editor itself. The editor's own 'SAVE RELOCATED' export defaults to $3f00 (16128) for tape ('For tape users the address ssss is fixed at $3f00 or 16128' — user-selectable on disk). This is the export convention documented in the manual; no individual HVSC-archived .sid from this dataset was disassembled to confirm its actual load address. Source: MusicEditorHelp.txt (bundled in github.com/martinpiper/C64Public/tree/master/MusicEditor).",
    "zero_page": "$fb, $fc, $fd — hardcoded by the play routine (source TODO comment in MusicPlayer.a: 'Make the zero page usage configurable instead of using hard coded $fb/$fc/$fd values'). MusicPlayerIRQ.a's IRQ wrapper (irq1) saves and restores exactly these three bytes around each call to the play routine, confirming they are its full ZP clobber set. Source: github.com/martinpiper/C64Public/blob/master/MusicEditor/MusicPlayer.a and .../MusicPlayerIRQ.a",
    "layout": "Data area begins MusicPlayerCodeToDataOffset ($700 bytes) after the code start. Three per-voice tracks (.track1/.track2/.track3), each page-aligned $100 bytes apart; .envdata ('also called FX table data', i.e. the instrument/envelope table) at data+$300; parallel .loblock/.hiblock (block/pattern address lookup) tables at data+$400; four fixed 8-byte drum waveform tables (Snare/Bass/Tomtom1/Tomtom2: .wvf/.wvfb/.wvft/.wvft2) plus loop-point bytes follow immediately after. Source: MusicPlayer.a (see URL above)."
  },
  "entry": {
    "init": "MusicPlayerInit = MusicPlayerStart (relocated_base+0). Call with A = tune/track number to select and start ('Use A to init the tune' — source comment). Confirmed by the manual's worked example: 'lda #$00 / jsr $3f00' for a module relocated at $3f00. A third jmp at +6 (MusicPlayerStop) halts playback and silences the SID volume/filter register — not itself part of the template's init/play pair but documented alongside them. Source: MusicPlayer.a + MusicEditorHelp.txt.",
    "play": "MusicPlayerPlay = MusicPlayerStart+3 (relocated_base+3, e.g. 'jsr $3f03' in the manual's example). Source comment: 'Call 50 times per second' (PAL, 1x). In the shipped player (not the manual's simplified polling-loop example) this is dispatched from a VIC2 raster IRQ fixed at line 250 (VIC2Raster=250), set up in MusicPlayerIRQ.a's startzx routine — not a CIA timer. Source: MusicPlayerIRQ.a + MusicEditorHelp.txt."
  },
  "speed": "1x only (no multispeed observed in the source read) — a VIC2 raster IRQ fixed at line 250 calls the play routine once per PAL frame ('Call 50 times per second'). Source: MusicPlayerIRQ.a's startzx/irq1 routines, MusicPlayer.a header comment.",

  "data_format": {
    "order_list": "Per-voice track byte stream (.track1/.track2/.track3). Each byte is either a block/pattern number ($00-$3F) or a control code, documented verbatim in MusicEditorHelp.txt's 'Track control codes' section and as named constants in MusicPlayer.a's 'Track control defines': $00-$3F play block N; $40-$7F repeat the next block (xx-$40) times (kMusicPlayer_RepeatBlock=$40); $80-$EF transpose all following blocks up by (xx-$80) semitones, or down if xx>=$B0 (kMusicPlayer_TransposeBlock=$80); $FD stop this track (kMusicPlayer_StopTrack); $FE stop all tracks (kMusicPlayer_StopAllTracks); $FF loop track to the start of the song (kMusicPlayer_LoopTrack). Supercommands (repeat/transpose) are thus flag bits set directly on top of a block-number byte inside the track stream itself, not a separate command channel.",
    "patterns": "Called 'blocks' in source/manual (numbered $00-3F; exact max block count constant ('maxBlocks') not located in this pass). Looked up via the parallel .loblock/.hiblock address tables. A block is a sequence of note-name tokens (e.g. 'C-1', 'D#2') and inline text-mnemonic commands (ENV:/DUR:/GL:/FLL:/FLH:/FLC:/FLP:/FG:/VOL:), terminated by an end-of-block marker (byte $FD in the block context; shown as '**STOP**' in the editor's own worked example). Source: MusicEditorHelp.txt's full worked example block.",
    "instruments": "Called 'envelopes' (selected per-note via ENV:xx in a block; backed by the .envdata table, 'also called FX table data' per MusicPlayer.a). Exact per-envelope field layout (ADSR-equivalent structure, byte count) not read in this pass — TODO.",
    "wavetable": "No general melodic wavetable found. Only four fixed 8-byte DRUM waveform tables exist (.wvf/.wvfb/.wvft/.wvft2 for Snare/Bass/Tomtom1/Tomtom2), each paired with a loop-point byte. Melodic voices appear to route through the ENV/envelope system instead of a shared wavetable, but this is not confirmed — TODO.",
    "pulsetable": "TODO — no dedicated pulse-width table or mnemonic (no 'PU:'/'PW:' command) was found in MusicEditorHelp.txt's command reference or in the portion of MusicPlayer.a read.",
    "filtertable": "No table: filter is driven directly per-block by SID-register-mapped text mnemonics — FLL:xx/FLH:xx/FLC:xx/FLP:xx write $D415/$D416/$D417/$D418 respectively — plus a sinusoidal auto-sweep command FG:xx,yy (xx=step size, yy=speed; yy+$80 = falling instead of rising). Source: MusicEditorHelp.txt 'Block commands' section, cross-confirmed against MusicPlayer.a's 'Block control defines' byte constants (below)."
  },
  "effects": {
    "encoding": "Block-level (pattern) commands are byte values $F5-$FF, reserved as no-note tokens ahead of note bytes, with matching editor text mnemonics: FilterGlide=$F5 (FG:), FilterHi=$F6 (FLH:), FilterLo=$F7 (FLL:), FilterControl=$F8 (FLC:), FilterPass=$F9 (FLP:), Duration=$FA (DUR:), Envelope=$FB (ENV:), Volume=$FC (VOL:), EndBlock=$FD (**STOP**), Glide=$FE (GL:), BlankCommand=$FF (unused, editor treats as a blank line). Track-level (order-list) control codes are a separate scheme layered on block-number bytes — see data_format.order_list. Byte constants from MusicPlayer.a's 'Block control defines' / 'Track control defines'; mnemonics and semantics from MusicEditorHelp.txt's 'Block commands' section. Exact operand-byte layout following each block command (e.g. GL:xx,yy's two-byte form) is partially documented by example only, not exhaustively read.",
    "commands": {
      "track_00-3F": "Play block number (0-63)",
      "track_40-7F": "Repeat next block (xx-$40) times",
      "track_80-EF": "Transpose following blocks up by (xx-$80) semitones; xx>=$B0 transposes down",
      "track_FD": "Stop this track",
      "track_FE": "Stop all tracks",
      "track_FF": "Loop track to start of song",
      "block_ENV_$FB": "ENV:xx — select envelope/instrument xx for subsequent notes",
      "block_DUR_$FA": "DUR:xx — set note duration",
      "block_GL_$FE": "GL:xx,yy — pitch glide; xx direction/step (>=$80 = down), yy = delay/count",
      "block_FLL_$F7": "FLL:xx — write SID $D415 (filter cutoff lo)",
      "block_FLH_$F6": "FLH:xx — write SID $D416 (filter cutoff hi)",
      "block_FLC_$F8": "FLC:xx — write SID $D417 (filter control: resonance + voice routing)",
      "block_FLP_$F9": "FLP:xx — write SID $D418 (filter mode/volume)",
      "block_FG_$F5": "FG:xx,yy — sinusoidal filter-cutoff auto-sweep; xx=step size, yy=speed (yy+$80=falling)",
      "block_VOL_$FC": "VOL:xx — set channel volume, $01-$0F (0 stops the player)",
      "block_EndBlock_$FD": "**STOP** — end-of-block marker"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "TWO RAW TAGS MERGED AS ONE EVOLVING TOOL: SIDId lists 'Element114Studio_1.0' (name 'Music Studio Plus', authors 'Martin Piper & Alan Peters', released '1992 Element 114 Software', no CSDb reference) and 'Element114Studio_1.2' (same name/authors, released '2010 Element 114 Software', reference https://csdb.dk/release/?id=90404) as two entries — both for the same-named tool by the same two authors. CSDb release 89392 ('Music Studio Plus 1.1', 9 Mar 2010) quotes Martin Piper directly: 'The first (very buggy) code was written in 1992...This 1.1 version is released now and contains lots of bug fixes' — matching SIDId's 1992 dating for tag 1.0, and confirming 1.0/1.1/1.2 are the same tool's version history, not unrelated tools. No standalone CSDb release exists for '1.0' itself (it predates the site's 2010 cataloguing of this tool, or is the raw unreleased-until-2010 1992 code fingerprint) — merged onto this one card as an alias rather than left as two separate stubs. Source: data/sidid.json; https://csdb.dk/release/?id=89392; https://csdb.dk/release/?id=90404",
    "TAG-TO-RELEASE CREDIT CROSS-CHECK: this dataset's 6 files tagged 'Element114Studio_1.2' are by NecroPolo (4) and Richard Bayliss (2) — exactly the two non-author musicians credited on CSDb release 90404 ('Music Studio Plus 1.2': code Alan Peters + Martin Piper; music Alan Peters, NecroPolo, Richard [Bayliss]). This confirms the 1.2 tag maps directly to that specific release. Source: CSDb release 90404; data/composers/necropolo.json, data/composers/richard-bayliss.json.",
    "PREDECESSOR SOURCE FOUND AND READ: Martin Piper's public GitHub repo (github.com/martinpiper/C64Public) contains the actual native-C64 6502 source for this tool under /MusicEditor/ — MusicPlayer.a (play routine), MusicPlayerIRQ.a (IRQ wrapper, header comment 'This entry point for this module *must* be four jmps'), plus MusicEditorHelp.txt (the CSDb-hosted 'Music Studio V1.2 help.' manual verbatim, matching CSDb 89392's downloadable 'MusicEditorHelp.txt' file) and MusicStudio1_2.d64. This is genuinely public source that plainly documents entry points, ZP usage, speed, and the full block/track command set (used to fill Tier 3 fields above with citation, per this project's rule allowing `status: in-progress` from a documented public source without a full disassembly/trace).",
    "LIKELY DIRECT ANCESTOR OF MUSIC STUDIO 2: the same GitHub repo's /MusicStudio2/MusicStudio/OriginalC64Music/ folder — inside the PC-hosted successor's own project tree — contains compiled .PRG files 'P.MOODY CHORDS.PRG' and 'P.WHEN IM 64.PRG', which are the exact same two tunes (by Martin Piper himself) tagged 'Element114Studio_1.0' in this dataset. Music Studio 2's itch.io page also credits 'Martin Piper (PC Editor code)' and 'Alan Peters (original C64 code)' separately — i.e. the successor's own credits attribute its underlying C64-side code to this tool's co-author. This is treated as sufficient direct evidence for a `derives_from` edge, added on knowledge/players/music-studio-2.md (not duplicated here, since edges point from the later tool back to its source) — see that card's edges/quirks for the promoted note. Source: https://github.com/martinpiper/C64Public/tree/master/MusicStudio2/MusicStudio/OriginalC64Music ; https://martin-piper.itch.io/musicstudio",
    "UNCONFIRMED FC LINEAGE SPECULATION: a CSDb user comment on release 89392 states 'The way the editor works was probably based on the old classic Future Composer music editor' (with a noted Future Composer V4.0 import feature). This is a commenter's own hedge ('probably'), not an author statement or source-code evidence, so NOT asserted as a `derives_from` edge to Future Composer here — flagged only as an unverified lead. Source: https://csdb.dk/release/?id=89392",
    "SOURCE IS PUBLIC BUT NOT OPEN-SOURCE: same restriction already documented on the sibling card knowledge/players/music-studio-2.md — Piper's GitHub repo License.txt reads 'All original code copyright Martin Piper... Ask me before using it', not a recognized open-source license. Applies equally to /MusicEditor/ (this tool's source). Source: https://github.com/martinpiper/C64Public",
    "COMPOSER CONCENTRATION: 22 files total across the merged 1.0+1.2 tags, only 4 composers — Alan Peters 13 (59%, tag 1.0, the tool's co-author), Martin Piper 2 (tag 1.0, the tool's other author), NecroPolo 4 and Richard Bayliss 3 total (1 on tag 1.0, 2 on tag 1.2 — both are release-90404-credited contributors). Essentially all usage in this dataset is the tool's own authors/launch collaborators, the same pattern already noted on the Music Studio 2 sibling card — no independent third-party adoption found. Source: aggregated `player` tags across data/composers/alan-peters.json, data/composers/martin-piper.json, data/composers/necropolo.json, data/composers/richard-bayliss.json.",
    "Runtime facts above (entry points, ZP, speed, data layout, effect encoding) come from reading the public source/manual directly, not from disassembling or tracing an actual .sid — no compiled binary was assembled or run through sidm2-siddump/mcp-c64. Instrument/envelope byte layout, exact maxBlocks size, and glide/GL: operand semantics remain TODO."
  ],
  "sources": [
    "sidid:Element114Studio_1.0 (name 'Music Studio Plus', author 'Martin Piper & Alan Peters', released '1992 Element 114 Software', no reference) — data/sidid.json",
    "sidid:Element114Studio_1.2 (name 'Music Studio Plus', author 'Martin Piper & Alan Peters', released '2010 Element 114 Software', reference https://csdb.dk/release/?id=90404) — data/sidid.json",
    "CSDb release 90404 — Music Studio Plus 1.2, 6 Apr 2010, native 'C64 Tool' type, credits (code: Alan Peters/Martin Piper; music: Alan Peters, NecroPolo, Richard): https://csdb.dk/release/?id=90404",
    "CSDb release 89392 — Music Studio Plus 1.1, 9 Mar 2010, includes Martin Piper's own '1992...very buggy code' quote: https://csdb.dk/release/?id=89392",
    "GitHub — github.com/martinpiper/C64Public, folder MusicEditor (MusicPlayer.a, MusicPlayerIRQ.a, MusicEditorHelp.txt, MusicStudio1_2.d64): https://github.com/martinpiper/C64Public/tree/master/MusicEditor",
    "GitHub raw source read directly — MusicPlayer.a: https://raw.githubusercontent.com/martinpiper/C64Public/master/MusicEditor/MusicPlayer.a",
    "GitHub raw source read directly — MusicPlayerIRQ.a: https://raw.githubusercontent.com/martinpiper/C64Public/master/MusicEditor/MusicPlayerIRQ.a",
    "GitHub raw manual read directly — MusicEditorHelp.txt (relocated-module example, track/block command reference): https://raw.githubusercontent.com/martinpiper/C64Public/master/MusicEditor/MusicEditorHelp.txt",
    "GitHub — MusicStudio2/MusicStudio/OriginalC64Music (bundled original C64 tunes incl. Piper's own 'Moody Chords'/'When I'm 64', matching this dataset's Element114Studio_1.0-tagged files): https://github.com/martinpiper/C64Public/tree/master/MusicStudio2/MusicStudio/OriginalC64Music",
    "itch.io — Music Studio 2 distribution page, separate 'original C64 code'/'PC Editor code' author credit line: https://martin-piper.itch.io/musicstudio",
    "License.txt (ask-permission-only, not OSS) — cited already on knowledge/players/music-studio-2.md: https://github.com/martinpiper/C64Public",
    "Local dataset: 16 files tagged Element114Studio_1.0 + 6 tagged Element114Studio_1.2 = 22 files across 4 composers — see knowledge/COVERAGE.md and data/composers/*.json"
  ]
}
```

## Overview

`Element114Studio_1.0` and `Element114Studio_1.2` are Player-ID tags for the
same evolving tool, **Music Studio Plus**, a native-C64 music editor and
relocatable in-game player by Alan Peters (DarkStar Systems Software, code +
music) and Martin Piper (code). Its origin, in Piper's own words on the CSDb
release page for v1.1, is "very buggy code... written in 1992" that stayed
unreleased until a 2010 cleanup pass (v1.1, then v1.2 a month later) —
matching SIDId's own 1992-dated entry for the `1.0` tag. This dataset carries
22 files across the merged pair, almost entirely by the tool's own authors and
their two credited launch collaborators (NecroPolo, Richard Bayliss). Unusually
for this knowledge base, Piper's own GitHub repo (`martinpiper/C64Public`)
hosts the actual native-C64 6502 source (`MusicPlayer.a`, `MusicPlayerIRQ.a`)
and the original user manual (`MusicEditorHelp.txt`) verbatim — public,
though explicitly not open-source (ask-permission-only license) — which was
read directly to fill entry points, zero-page usage, speed, data layout, and
a full track/block command reference below, without disassembling or tracing
any binary. It is very likely the direct ancestor of the same author's later
PC-hosted **Music Studio 2** (`knowledge/players/music-studio-2.md`) — that
successor's own credits separately attribute "original C64 code" to Alan
Peters, and its project tree bundles the exact same Piper-composed tunes that
carry the `Element114Studio_1.0` tag here as reference material.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **the `1.0`/`1.2` tag split
is one tool's version history, not two tools** (confirmed by Piper's own
1992/2010 quote); **the `1.2` tag's composer list exactly matches CSDb
release 90404's credits**; **real native-C64 source and manual were found
and read** (not a guess — this is why `status` is `in-progress` rather than
`stub`); the **Future Composer lineage claim is a hedge from a CSDb
commenter**, not asserted as an edge; and the **likely `derives_from` link
to Music Studio 2** is recorded on that sibling card, not duplicated here.

## Disassembly notes

No disassembly performed — all Tier 3 facts above come from reading
`MusicPlayer.a`, `MusicPlayerIRQ.a`, and `MusicEditorHelp.txt` directly (named
labels, comments, and the manual's own worked examples), not from
reconstructing behaviour from a compiled binary. A future pass could
assemble the real source (it's public, ACME-flavoured 6502) and trace it via
`sidm2-siddump` to reach `verified` — the source is complete enough that this
looks tractable, unlike most cards in this KB.

## Verification

**Disassembly/reassembly pass (2026-07-22) — status: verified.**
- Peters_Alan/Airwolf.sid (56 diffs, 98.59%, 53 src/3 PRG, r:300 p:300) + Piper_Martin/Moody_Chords.sid (55 diffs, 98.30%, 53 src/2 PRG, r:114 p:114)

Two files from different composers. All runtime fields TODO.

## Sources

See the `sources` array — two SIDId entries, two CSDb release pages (89392,
90404), Martin Piper's public GitHub repo (source + manual read directly),
the GitHub folder bundling the original tunes inside the Music Studio 2
project tree, and the itch.io distribution page.
