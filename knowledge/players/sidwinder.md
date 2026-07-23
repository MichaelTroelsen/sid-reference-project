# SidWinder

```json
{
  "id": "sidwinder",
  "name": "SidWinder",
  "aliases": ["SidWinder"],
  "authors": [
    "Balázs Takács (Taki) / Natural Beat",
    "Levente Hársfalvi (TLC) / Coroners (V01.23 conversion, packer, GPL release)"
  ],
  "released": "1994 (code written); 1999 (V01.22, first public release, Natural Beat); 2000-03-15 (V01.23, TLC/Coroners, GPL v2); 2001 (V01.23++ 017, Unreal); 2011-04-17 (V1.23 Enhanced!!, PCH/KGB'92/Unreal)",
  "status": "in-progress",
  "platform": "Native C64 tool; also Plus/4 with SIDcard (V01.23 by TLC). Cross-assembled with Table Driven Assembler (TASM) + ComLink on DOS PC.",
  "csdb_release": 66494,

  "memory": {
    "load_address": "$1000 default, relocatable via packer (user-selectable start address; player code is position-independent in V01.23 — all labels calculated relative to pstart). Confirmed in PLAYER.ASM source header (pstart =*) and GENERAL doc section 04.02.",
    "zero_page": "$FB-$FC (pt pointer, the only ZP byte used by the player — confirmed in PLAYER.ASM line 73: pt =$fb, and GENERAL doc section 04.02: 'The player uses just one pointer on the zeropage, and this is the $fb-$fc pair'). Packer allows selecting an alternative ZP word.",
    "layout": "Header ($1000-$1020): 3 JMP vectors (init/play/multispeed at +0/+3/+6) followed by identity text and version string. Then: 2x96-byte frequency tables (freqlo/freqhi), player code (~$300 bytes), variable workspace (~$60 bytes, includes per-channel state arrays at 7-byte strides for X=0,7,$0E), then music data starting at page-aligned boundary (dstart). Music data layout: 32-byte speed table, 32-byte start pointers (start1/2/3), 32-byte track address tables (tr1adl/tr2adl/tr3adl + hi bytes), then track/sector/instrument/effect data (packed by packer). Confirmed from PLAYER.ASM source."
  },
  "entry": {
    "init": "pstart+0 (default $1000). A = subsong number ($00-$1F, limited by cmp #$20 at m_init). Sets up track pointers from tr1adl/tr2adl/tr3adl tables for the requested subsong, clears SID registers ($D400-$D418), initializes per-channel state variables. Returns with RTS. Confirmed in PLAYER.ASM (m_init at line 758).",
    "play": "pstart+3 (default $1003) = IRQ player (irqplr). Processes all 3 channels (X=0,7,$0E) in one call: volume envelope control (vol_ct/vol_cr/vol_ad), then jsr player per channel. Also at pstart+6 (default $1006) = multi-speed player (mltspd), for subsequent calls within a frame — processes only active channels via jsr sounds. V01.22 doc (SIDW0122) confirms: '$1003 for the first call every frame, $1006 for any subsequent calls within a frame'. Confirmed in PLAYER.ASM (vectors at lines 78-80)."
  },
  "speed": "1x-16x frame-based (V01.23 editor supports up to 16 calls per frame, spread evenly across the frame via CIA timer 1 IRQ). V01.22 supported up to 10x. Single-speed: call p_play once per frame from IRQ. Multi-speed: call p_mult N times per frame at evenly-spaced intervals. No CIA vs raster toggle — always IRQ-driven in the editor; standalone player can be called from any context. Confirmed in HISTORY (Editor V01.23: 'Up to 16x player speed') and PROGRAMM ('The IRQ routine is optimized for the task of the multispeed player').",

  "data_format": {
    "order_list": "Track tables (one per channel per subtune, up to 32 subtunes). Each track is a sequence of single-byte commands: sector number ($00-$5F, plays that sector), Tr+XX/Tr-XX (transpose up/down by XX semitones), VolXX (set global volume $00-$0F), DecXX (decremental volume slide at speed $01-$07), IncXX (incremental volume slide), HltVS (halt volume slide), JmpXX (2-byte: jump to position XX in track). Track length determined by first JmpXX command (packer uses this for data elimination). Confirmed in SUMMARY section 03.01 and PROGRAMM ('Used elements in a track table are determined by the track start and the first JMPxx command').",
    "patterns": "Sectors (up to 96, $00-$5F, 256 instructions per sector). Each sector is a sequence of commands in a prescribed order: one Snd.XX (select instrument $00-$3F), one Dur.XX (note duration $01-$40 frames), one of (note C-1 to A#8 | Gld.XX glide/slide | '---' delay-release | '+++' hold-sustain), one Finish (end of sector). Sector length determined by first Finish command. Sector $5F was reserved for liveplay in V01.22; freed in V01.23. Confirmed in SUMMARY section 03.02.",
    "instruments": "64 instruments ($00-$3F). Each instrument: Attack/Decay (1 byte, high/low nibble = SID ADSR attack/decay), Sustain/Release (1 byte), Gateoff counter (1 byte, decremented per frame, gates off channel when zero), plus 4 effect-table start-position pointers: Wave/Arpeggio table, Filter table, Pulse width table, Slide table. A position of $00 disables the effect; $FF leaves any active effect running. Confirmed in SUMMARY section 03.03 and PLAYER.ASM instrument initialization code.",
    "wavetable": "Wave/Arpeggio table. Each entry is WF+AR byte pair: WF ($00-$8F) = waveform ($00-$80, upper nibble) + arpeggio offset (lower nibble); ($90-$FE) = repeat last waveform, new arpeggio offset; ($FF) = jump to position AR. Arpeggio values are signed semitone offsets added to base note frequency. Confirmed in SUMMARY section 03.04.",
    "pulsetable": "Pulse width table. Each entry is RP+PH+PL triple: RP ($00-$FE) = repeat count for the addition; ($FF) = jump to position PH. PH = addition to pulse width high byte (or jump target). PL = addition to pulse width low byte. Pulse width registers reset to zero on instrument init. Confirmed in SUMMARY section 03.06.",
    "filtertable": "Filter table. Each entry is RP+FH+RL triple: RP ($00-$FD) = repeat count; ($FE) = set filter type from FH bits 6-4; ($FF) = jump to position FH. FH = addition to cutoff frequency high byte (or filter type, or jump target). RL = addition to resonance (bits 7-4) + addition to frequency low byte (bits 2-0). Filter parameters reset to zero on instrument init; filter type must be set explicitly. Confirmed in SUMMARY section 03.05."
  },
  "effects": {
    "encoding": "Sector-command-based. Sector bytes encode: notes (C-1..A#8 as frequency-table indices), glide/slide (Gld.XX), delay-release ($5F='---'), hold-sustain ($6F='+++'), instrument select (Snd.XX), duration (Dur.XX), finish marker. The glide/slide byte format per PLAYER.ASM firstf routine: values $60-$6E encode glide index (lower nibble + 1, i.e. Gld.01-Gld.0F); values $70-$7E encode slide index (Gld.11-Gld.1F). Glide/slide references a separate glide/slide table (editor SHIFT+5), up to 16 entries, each defining a note-to-note glide or slide with rate parameter. Four step-programmable effect tables per instrument: wave/arpeggio, filter, pulse width, slide/vibrato — each independently clocked, with repeat counts and jump capability. Hard restart via SID test bit (gate-off then immediate gate-on with first-frame-skip). Confirmed in SUMMARY sections 03.02-03.07 and PLAYER.ASM.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "NAME COLLISION HAZARD, specific to this project: this 1994-2001 C64 tracker/editor by Taki/TLC is unrelated to the modern cross-platform tool also called 'SIDwinder' (Raistlin/Genesis Project, first released 2025, source at https://github.com/RobertTroughton/SIDwinder) — a SID-file disassembler/relocator/visualizer, referenced elsewhere in this repo as SIDwinder.exe (see knowledge/players/laxity-newplayer.md's Verification section, and scripts/dev/README.md). Two entirely different programs share one name 26 years apart. Do not conflate them.",
    "LICENSE is version-dependent, not uniform across the release chain. V01.22 by Taki (1999): closed freeware — Taki originally planned GPL but dropped it because the full sources (editor + tools) were lost; only the player source and binaries were released. V01.23 by TLC (2000): GPL v2 with full source code — TLC reconstructed the editor from V01.20 sources + V01.22 binary disassembly, wrote a new packer from scratch, and released everything under GPL with Taki's permission. V01.23++ 017/030 (2001, Unreal): unclear — continued by PCH under Unreal group, no explicit license stated. V1.23 Enhanced!! (2011, PCH): disputed — PCH called the original 'shareware'; Luca (F.I.R.E. beta tester) claimed GPL was discontinued. No license file or source attached to PCH's release. Treat V01.23 as GPL v2 (primary evidence: COPYING file in source archive, GPL header in PLAYER.ASM); all other versions as license-unstated.",
    "The D64 filename for V01.22 on CSDb reads 'SIDwinder v01.22 (1994)(Natural Beat).d64' despite the CSDb release date being 1999. This is correct: Taki wrote the code in 1994 but it remained unreleased until 1999. The 1994 date in the filename reflects the actual code age, not the release date.",
    "Small, concentrated usage: 117 files in this dataset across only 8 composers — Factor6 (38, 32%), Luca (25, 21%), Taki the author (21, 18%), Eclipse (19, 16%), plus PCH/Puterman/Zapac/Phobos in single digits. Author's own use plus a small circle of scene contacts (Natural Beat, F.I.R.E., KGB'92), not a widely-adopted general-purpose tool — consistent with a native tracker that stayed close to its own scene group.",
    "Version history is unusually layered due to the lost-sources episode. Taki wrote V01.14→V01.20→V01.21→V01.22 (1994, all unreleased until 1999). He then lost the V01.22 editor/tool sources (only the player source survived). TLC reconstructed V01.23 from the older V01.20 sources + binary disassembly of V01.22 (using Recomment and custom Pascal diff tools), wrote a new packer, and made it cross-platform (C64 + Plus/4 with SIDcard). Later PCH created V01.23++ under Unreal (c. 2001), and V1.23 Enhanced!! in 2011 adding live-piano. The 'TLC/CNS' credit in CSDb comments refers to Levente Hársfalvi (handle TLC) of Coroners (CNS) — this is the same person credited as 'Levente Hősfalvi' on the HVMEC page and 'Levente Hársfalvi' on plus4world.",
    "PAL-only editor. The frequency tables are for PAL clock rates; the IRQ timing assumes PAL frame timing. The editor may start on NTSC but is not intended to run there. Porting would require new frequency tables and IRQ recalibration. Confirmed in GENERAL section 04.01.",
    "The player uses absolute frequency values for glide and vibrato effects (a known limitation carried from V01.20 through V01.23). TLC listed 'The player should not use absolute frequency data for the effects at all' as the first item under 'Possible improvements' (GENERAL section 05). This means glide/slide rates depend on the note's absolute pitch — faster on high notes, slower on low notes."
  ],
  "sources": [
    "SIDId: SidWinder (author Balázs Takács (Taki), released '1999 Natural Beat', CSDb release 66494) — data/sidid.json",
    "DeepSID players.json spec entry 'SidWinder' (developer Taki, start_year 1999, end_year 2001, csdb_id 101758, platform 'Native / C64 emulator', zero_pages '2 bytes ($FB-$FC)') — data/players.json",
    "Local dataset: 117 files tagged SidWinder across 8 composers (Factor6 38, Luca 25, Taki 21, Eclipse 19, PCH 5, Puterman 4, Zapac 4, Phobos 1) — data/composers/*.json",
    "CSDb release V01.22: https://csdb.dk/release/?id=66494 (Natural Beat, 1999, code+music: Taki; D64 download only, filename carries (1994) date)",
    "CSDb release V01.23: https://csdb.dk/release/?id=101758 (Natural Beat, 15 Mar 2000, code: Taki, music/testing: Luca of F.I.R.E.; D64 download)",
    "CSDb release V1.23 Enhanced!!: https://csdb.dk/release/?id=99574 (PCH of KGB'92/Unreal, 17 Apr 2011 — source of the GPL/TLC-CNS dispute in comments)",
    "Plus/4 World SIDwinder V01.23 page: http://plus4world.powweb.com/software/SIDwinder_V01_23 (confirms GPL license, source availability, TLC conversion from V01.20 sources + V01.22 binary, full release history and Taki's own account of lost sources)",
    "SIDwinder V01.23 source archive (SRC/PLAYER.ASM, GENERAL, HISTORY, SUMMARY, SIDW0122, PROGRAMM, COPYING, PLUS4, README) — downloaded from ftp.funet.fi/pub/cbm/c64/audio/editors/SIDwinder_V0123_src.zip. GPL v2 confirmed by COPYING file and source headers. All Tier 3 facts (entry points, ZP, load address, speed model, data format) sourced from these files.",
    "HVMEC (High Voltage Music Engine Collection) SIDwinder 01.23++ 017 page: https://hvmec.altervista.org/blog/?p=1728 (full key-command reference, author credits including Levente Hősfalvi and Petr Chlud, copyright chain: Natural Beat 1994-1999 → Levente Hősfalvi 1999-2000 → Unreal 2001, source code marked 'Not available')",
    "cbm-hackers mailing list announcement (2000-03-17): http://www.softwolves.com/arkiv/cbm-hackers/2/2700.html (V01.23 release announcement by Levente Hörsfalvi, confirms GPL distribution)",
    "Unrelated modern namesake for disambiguation: https://csdb.dk/release/?id=253271 and https://github.com/RobertTroughton/SIDwinder"
  ]
}
```

## Overview

SidWinder is a native C64 music tracker/editor originally created by Balázs
Takács (Taki) of Natural Beat in 1994, first publicly released in 1999 as
V01.22. In 2000, Levente Hársfalvi (TLC) of Coroners reconstructed the editor
from surviving V01.20 sources and a disassembly of the V01.22 binary (Taki had
lost the V01.22 editor/tool sources), wrote a new packer from scratch, added
Plus/4 SIDcard support, and released the result as V01.23 under the GNU GPL
v2 with full source code — making it one of the earlier GPL-licensed C64 music
tools.

The player is notable for its low rastertime (practical maximum ~20 scanlines
per call at 1x speed), high-quality step-programmable effects (four independent
effect tables per instrument: wave/arpeggio, filter, pulse width, slide/vibrato),
and multi-speed support (up to 16x in V01.23). The editor is spartan and
deliberately not user-friendly — Taki's own documentation warns "this is
definitely not a user friendly music editor" and "I coded what I required,
but nothing more." Despite this, it attracted a small but dedicated user base:
117 files across 8 composers in this dataset, led by Factor6 (38 files) and
Luca (25 files, also the V01.23 beta tester and demo-song composer).

The source code is available (GPL v2, V01.23 by TLC) and has been examined for
this card. The player source (PLAYER.ASM) is well-structured assembly (~900
lines) with clear header documentation. No lineage claims to other players were
found — SidWinder appears to be an original design by Taki, though TLC's
documentation mentions an earlier abandoned attempt to convert Voicetracker
(which is not a derivation claim).

## Quirks & gotchas

See the `quirks` array. The most important points: (1) the name collision with
the 2025 SIDwinder disassembly tool, (2) the version-dependent licensing
(V01.22 is closed; only V01.23 by TLC is GPL v2 with sources), (3) the 1994
code-age vs 1999 release-date discrepancy reflected in the D64 filename,
(4) the unusual version chain caused by Taki's lost V01.22 sources — V01.23 was
reconstructed from older source + binary disassembly, not a direct evolution,
and (5) the absolute-frequency limitation on glide/vibrato effects (known
design limitation, listed as a desired improvement).

## Disassembly notes

Not disassembled — facts sourced from the public V01.23 source code
(PLAYER.ASM). The source is in TASM (Table Driven Assembler) syntax with
conditional assembly for C64/Plus/4 dual-platform support. Key sections:

- **Lines 78-80**: Entry point vectors (`p_init`/`p_play`/`p_mult` as
  `jmp m_init`/`jmp irqplr`/`jmp mltspd`)
- **Line 73**: Zero-page declaration (`pt =$fb`)
- **Lines 166-189**: IRQ player entry (`irqplr`) — volume envelope then
  per-channel dispatch
- **Lines 324-357**: First-frame note initialization (`firstf`) — sector
  parsing, glide/slide setup, frequency lookup
- **Lines 505-514**: Multi-speed player entry (`mltspd`) — per-channel
  dispatch
- **Lines 758-825**: Init routine (`m_init`) — subsong selection, track
  pointer setup, SID clear, variable initialization
- **Lines 893-950+**: Music data layout — speed table, start pointers,
  track address tables (32 entries each for up to 32 subtunes)

The editor source (ED.ASM, ~139KB) and packer source (PACKER.ASM, ~65KB) are
also available but not examined in detail for this card.

## Verification

**Not verified — `status: in-progress`.** Identity, provenance, and Tier 3
runtime facts (memory map, entry points, ZP usage, speed model, data format)
are confirmed from the public V01.23 source code and its accompanying
documentation (GENERAL, HISTORY, SUMMARY, SIDW0122, PROGRAMM). Entry points
have not been reassembled and traced through `sidm2-siddump` / `mcp-c64` —
that is the step needed to promote to `verified`.

The source examined is the V01.23 player (PLAYER.ASM), which TLC states is
"almost identical to the original V01.22" with minor modifications (relocatable
labels, conditional assembly for dual-platform, gate-bit masking for channel
on/off). The V01.22 doc (SIDW0122) confirms the same entry point structure at
the same offsets ($1003/$1006), so these facts should apply to V01.22 as well.

## Sources

See the `sources` array — all facts are cited to specific files within the
V01.23 source archive, the accompanying documentation, CSDb release pages,
plus4world, SIDId, and DeepSID's players.json.
