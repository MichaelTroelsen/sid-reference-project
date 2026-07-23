# Ariston (Music Editor)

```json
{
  "id": "ariston",
  "name": "Ariston (Music Editor)",
  "aliases": ["Ariston"],
  "authors": ["Ian Crabtree", "Philip Brabbin", "Wally Beben"],
  "released": "1987-1988 (Ian Crabtree's original driver, ~1987; an improved version co-credited to Philip Brabbin and Wally Beben, released 1988)",
  "status": "verified",
  "platform": "Native C64 tool — a commercial UK games-industry music editor/driver (DeepSID distribution: \"Commercial\"), not a scene-published tracker. No public source code or format documentation was found; all runtime facts below come from disassembling two real HVSC files (see Verification).",
  "csdb_release": 119920,

  "memory": {
    "load_address": "Per-file (the driver is shipped embedded per-song, not resident at a fixed address). Two disassembled examples: Aaargh.sid (Wally Beben) — PSID load address $68BE, but SIDdecompiler's own -v2 emulated memory-touch map reports the real code 'Start:' at $68EE; the 48 bytes at $68BE-$68ED are a plaintext ripper tag (' RIPPED BY G.GOUWELOOS ON 14-OCT-95 22:26', confirmed by direct ASCII read of the payload) that is never executed, not player code. Angel_Meadows.sid (Ian Crabtree) — loads cleanly at $1000 with no such prefix.",
    "zero_page": "Confirmed by disassembly, identical across both test files: $A7/$A8 (labelled za7/za8) — an indirect pointer pair reloaded before each pattern-row read (LDA (za7),Y), pointing at the currently-playing voice's pattern/sequence byte stream; $A9/$AA (za9/zaa) — a second indirect pointer pair used in the note-dispatch routine for a secondary per-voice table read (not fully traced — likely an instrument/wave lookup). 4 bytes total, confirming the low end of DeepSID's cited 'Approx 4-6 bytes.'",
    "layout": "Per-voice (3 voices) working-storage block located adjacent to the code, e.g. in Aaargh.sid at $74AE-$7529 (current note/pitch, duration, instrument number, pattern-pointer table, filter param, etc., all X-indexed 0-2 by voice) — see data_format.patterns. This block is NOT reset by init for every field (some entries are read as live tune data on cold start, others are zeroed) — see Verification for why this mattered for reconstruction fidelity."
  },
  "entry": {
    "init": "Per-file, from the PSID header — confirmed correct by trace-exact reconstruction. Aaargh.sid: $68EE, code entry directly (no jump stub). Angel_Meadows.sid: $1003, which is itself a 3-byte 'JMP $100A' stub — the real init routine starts at $100A.",
    "play": "Per-file, from the PSID header — confirmed correct by trace-exact reconstruction. Aaargh.sid: $68F8, direct entry. Angel_Meadows.sid: $1000, a 'JMP $1030' stub — the real play routine starts at $1030. (Note the header's play/init stub order is reversed relative to the usual 'jmp init / jmp play' convention in this file — 'play' is the first JMP at the block's base, 'init' the second.)"
  },
  "speed": "TODO: not independently derived — no separate CIA/raster timer setup was traced beyond the two files' play routines being called once per host PSID frame (standard PAL 50Hz assumed, not verified against a hardware timer setup).",

  "data_format": {
    "order_list": "TODO: not traced beyond the per-voice pattern-pointer table noted in data_format.patterns",
    "patterns": "One continuous command-byte stream per voice (3 streams total). Each voice's stream pointer is stored in a fixed per-voice pointer table (Aaargh.sid: lo bytes at $74C4-$74C6, hi bytes at $74C7-$74C9, X-indexed by voice 0-2) and loaded into ZP $A7/$A8 before each row is read via LDA (za7),Y — confirmed via a trace-exact reconstruction (see Verification). A command byte < $60 is a note value (added to a per-voice transpose byte, result stored as the voice's current note); $60-$FF is a dispatch range for instrument/duration/filter/special commands — see effects.encoding.",
    "instruments": "Command byte $80-$BF, masked with AND #$3F (6 bits, values 0-63), selects an instrument number, stored per-voice (Aaargh.sid: table at $74CA,X). The instrument table's own internal layout (envelope/waveform data) was not traced.",
    "wavetable": "TODO: not traced",
    "pulsetable": "TODO: not traced",
    "filtertable": "TODO: not traced — a single filter-cutoff-nibble command exists (see effects.commands 'filter_param') but no dedicated filter table was located"
  },
  "effects": {
    "encoding": "Pattern-stream command byte dispatch, decoded from Aaargh.sid's play routine ($69B4-$6AEC) and confirmed structurally identical (same byte-range boundaries, same ZP pointer usage) in Angel_Meadows.sid. Bytes are read in ascending numeric-range order via a cascade of CMP/BCC checks, high value first: $FF advances to the next entry in the per-voice pattern-pointer table (effectively 'end of pattern / advance order list'); $FE resets a global player-active flag; $FD/$FC write directly to $D418 (SID filter-mode/volume register) from a small fade counter, then read the next byte — a volume/filter fade effect; $F0-$FB masked with AND #$0F sets a global filter parameter; $C0-$EF masked with AND #$1F, shifted left 3, sets a per-voice note-duration byte; $80-$BF masked with AND #$3F sets a per-voice instrument number (see data_format.instruments); $60-$7F is a further-subdivided range of per-voice effect commands ($7D/$7C: read 1 parameter byte, likely vibrato/slide depth+speed variants; $7B: read 2 parameter bytes, likely a portamento target+speed; $7E/$7F/$7A: distinct single-byte-flag branches not semantically decoded past their dispatch point); values < $60 are note numbers. The high-level dispatch boundaries are a confirmed fact (from a trace-exact reconstruction); the semantic meaning assigned to individual $60-$7F sub-commands is a best-effort reading of the disassembly, not independently confirmed by an isolated test tune.",
    "commands": {
      "note": "< $60 — note number, added to per-voice transpose byte",
      "vibrato_or_slide_1param": "$7C-$7D — reads 1 extra pattern byte as parameter",
      "portamento_2param": "$7B — reads 2 extra pattern bytes (target note + speed, tentative)",
      "instrument": "$80-$BF, AND #$3F — 0-63 instrument select",
      "duration": "$C0-$EF, AND #$1F then <<3 — per-voice note duration",
      "filter_param": "$F0-$FB, AND #$0F — global filter cutoff nibble",
      "volume_filter_fade": "$FC/$FD — writes $D418 from a decrementing fade counter",
      "player_reset_flag": "$FE — clears a global player-active flag",
      "advance_pattern": "$FF — advance to next entry in the per-voice pattern-pointer table"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Composer concentration in this dataset (HVSC MUSICIANS\\ tree only, per data/composers/*.json): 137 files across 14 composers, no single composer dominant — Wally Beben 30, Steve Barrett 27, Ian Crabtree 21, Mark Wilson 19, Neil Scales 10, Perdita 10, Allister Brimble 5, Lyndon Sharp 3, Matt Gray 3, Barry Leitch 2, Denis Harris 2, Jonathan Dunn 2, Kendal 2, Deadman 1. Several of these are known 1980s-90s UK C64 games-industry composers (Wally Beben, Steve Barrett, Mark Wilson, Allister Brimble, Matt Gray), so the spread reads as a genuinely used in-house/commercial tool rather than one person's personal routine.",
    "Distributed commercially, not as a scene-native tracker release: the two CSDb entries titled 'Ariston Music Editor' (id 119920, Criminals in Computers, 1988; id 29914, Criminals in Computers + Illusion, 24 Jun 1988) are both warez CRACKS of the editor disk, not original scene productions. No public source code, GitHub repo, or format/manual documentation was located (CSDb, Codebase64, general web search).",
    "SIDId's sidid.nfo lists three further signature variants for this driver family — '(Ian_Crabtree_V1)', '(Ian_Crabtree_V2)', and '(Wally_Beben)' (the last documented as 'an improved version of the player/editor by Ian Crabtree', authors Ian Crabtree, Philip Brabbin & Wally Beben, CSDb release 119920) — but none of the three appear as a raw player tag anywhere in this project's local HVSC-derived dataset (0 files each). Only the bare 'Ariston' tag does (137 files), so this card's usage numbers cover just that one signature cluster, not the full SIDId family.",
    "Cross-reference: composer Matt Gray's knowledge card (matt-gray.md) notes he used SoundMonitor and 'the Ariston driver' early in his career before writing his own from-scratch driver — real evidence of adoption by another composer, but not a technical derivation of Ariston itself, so no `edges` entry was asserted from it.",
    "DeepSID's curated players.json spec entry supplies two runtime-flavored figures — 'zero_pages: Approx 4-6 bytes' and 'cpu_time: Approx 35-42 rasterlines [SD]' — the zero-page figure is now independently confirmed at 4 bytes ($A7-$AA) by disassembly; the raster-cost figure was not independently measured.",
    "VERIFICATION FINDING (drifted working-storage table, same class as documented elsewhere in this project's `sid-player-verify` lessons): SIDdecompiler's raw reassembly of both test files byte-diffs at ~98.2-98.4%, not higher, because its default trace window captures a POST-EXECUTION snapshot of the per-voice working-storage block (Aaargh.sid: $74AE-$7529, 57 bytes; Angel_Meadows.sid: an analogous ~$1590-$1613 cluster, 42 bytes) rather than the file's true pristine cold-start bytes. Some of these bytes genuinely ARE load-bearing tune data read before ever being written (confirmed: patching the block back to the file's real pristine bytes, read directly from the SID payload, was REQUIRED to reach a trace-exact reconstruction — leaving the raw SIDdecompiler output unpatched diverges heavily by frame 2 of a 300-frame trace on Aaargh.sid subtune 0, and immediately on Angel_Meadows.sid). A handful of isolated single-byte diffs outside that cluster (Aaargh.sid: $6912, $6AF3, $6BBD-$6BBE, $6BC8-$6BC9) are self-modified instruction operands (immediate-mode constants and absolute-address table-index bytes rewritten by `init`) of the same kind.",
    "Ariston is shipped embedded per-song rather than as a shared/resident library, so both the load address AND the entry-point convention vary per file: Aaargh.sid's PSID init/play vectors point directly at code with no jump stub; Angel_Meadows.sid's vectors point at a 6-byte 'JMP play-routine / JMP init-routine' stub at the very front of the loaded block (note the header's own play vector resolves to the FIRST jmp in that stub, init to the second — the reverse of the usual 'jmp init; jmp play' ordering convention seen in other players). Aaargh.sid also carries 48 bytes of plaintext ripper-tag ASCII (' RIPPED BY G.GOUWELOOS ON 14-OCT-95 22:26') immediately before its real code, which SIDdecompiler's own -v2 memory-touch map correctly reports as never executed (its 'Start:' address is one instruction past the PSID load address, exactly at the true init routine) — relocating the disassembly to that Start address rather than the raw PSID load address was required for a usable reassembly."
  ],
  "sources": [
    "sidid:Ariston (author Ian Crabtree) and sidid:(Wally_Beben) (name 'Ariston Music Editor', authors Ian Crabtree/Philip Brabbin/Wally Beben, released 1988, reference https://csdb.dk/release/?id=119920) — data/sidid.json",
    "DeepSID players.json curated entry 'Ariston' (developer Ian Crabtree, start_year 1987, end_year 1988, csdb_id 119920, platform 'Native / C64 emulator', distribution 'Commercial', zero_pages 'Approx 4-6 bytes', cpu_time 'Approx 35-42 rasterlines [SD]') — data/players.json",
    "Local dataset: 137 files tagged 'Ariston' across 14 composers (knowledge/COVERAGE.md line 14; verified by grep of data/composers/*.json)",
    "CSDb release 'Ariston Music Editor' (Criminals in Computers, 1988): https://csdb.dk/release/?id=119920",
    "CSDb release 'Ariston Music Editor' (Criminals in Computers + Illusion, 24 Jun 1988, import credit 'Black Beard'): https://csdb.dk/release/?id=29914",
    "SIDId project sidid.nfo (GitHub, cadaver/sidid): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "VGMPF wiki, 'Ian Crabtree' (notes he 'created the Ariston driver and arranged in The Ariston Music Editor'; tuning at 433.5 Hz PAL / 450 Hz NTSC): https://www.vgmpf.com/Wiki/index.php?title=Ian_Crabtree",
    "Sibling card cross-reference: knowledge/players/matt-gray.md (notes early use of the 'Ariston driver')",
    "This card's own disassembly/reconstruction pass (2026-07-23): SIDdecompiler.exe 0.8 + 64tass 1.60.3243 + sidm2-sid-trace.exe, run against two real HVSC files — MUSICIANS/B/Beben_Wally/Aaargh.sid and MUSICIANS/C/Crabtree_Ian/Angel_Meadows.sid — see Verification section below for exact figures"
  ]
}
```

## Overview

Ariston (Music Editor) is a commercial C64 music-composition tool/driver
written by British programmer Ian Crabtree, originating around 1987, with an
improved version co-credited to Philip Brabbin and Wally Beben released in
1988 (SIDId). It is not a scene-published tracker — DeepSID's own spec table
lists its distribution as "Commercial" — and the only public traces of it are
two CSDb crack releases of the editor disk (119920, 29914) rather than an
original scene production. In this project's local HVSC-derived dataset it
covers 137 files spread across 14 composers, several of them known 1980s-90s
UK games-industry names (Wally Beben, Steve Barrett, Mark Wilson, Allister
Brimble, Matt Gray) — a spread consistent with a real in-house/commercial
tool rather than one person's personal routine.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: this is a **commercial,
closed tool** with no public source code or format documentation found
anywhere searched (CSDb, Codebase64, general web); its CSDb presence is
**warez cracks of the editor disk**, not scene releases; SIDId documents
**three further signature variants** of this driver family that simply don't
occur in this project's local dataset; and composer Matt Gray's own card
notes he used "the Ariston driver" early on, which is interesting usage
evidence but not a technical lineage claim about Ariston itself.

## Disassembly notes

None. No public source or disassembly of the Ariston driver/editor was
located. A future pass would need to disassemble a representative
Ariston-tagged `.sid` from its PSID header (init/play addresses) and trace it
through `sidm2-siddump` — the only route to real memory-map/format facts,
since there is no source to read.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (authors,
release years, CSDb releases, commercial distribution, local usage stats) are
confirmed, from SIDId, DeepSID's curated players.json, CSDb, and this
project's own composer data. Every Tier 3 runtime field is `TODO` except two
DeepSID-sourced approximate figures (zero-page footprint, play-routine
raster cost), which are cited but not independently verified — an honest gap
rather than a guessed memory map.

## Sources

See the `sources` array — SIDId's `sidid.nfo`, DeepSID's curated
`players.json` entry, this project's local composer-file aggregate
(`data/composers/*.json`, `knowledge/COVERAGE.md`), two CSDb crack-release
pages, and the VGMPF wiki page on Ian Crabtree.
