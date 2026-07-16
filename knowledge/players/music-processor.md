# Music Processor

```json
{
  "id": "music-processor",
  "name": "The Music Processor",
  "aliases": ["Music_Processor"],
  "authors": ["M. Peter Engelbrite"],
  "released": "1984 (Sight & Sound Music Software)",
  "status": "in-progress",
  "platform": "Native C64 program sold on disk by Sight & Sound Music Software — a BASIC-extension music notation editor/player, not a demoscene tracker. Marketing copy: \"This software creates an in-home recording studio. Three voice compositions can be written, edited, recorded, and printed\" (99 preset instrument/effect presets, joystick-selectable). Every .sid file in the collection is an RSID rip of one tune's data extracted from the original program, not output from a separate composer's tracker/editor.",
  "csdb_release": 150058,

  "memory": {
    "load_address": "$10AC — read directly from the PSID/RSID header's data payload (header `load_address` field is $0000, meaning the real load address is the first little-endian word of the data block, per PSID convention). Confirmed identical across all 64 files in the collection by reading each file's header, not just the one traced.",
    "zero_page": "TODO: not disassembled — only the tracer's black-box register-write observations and the raw header fields have been read, no 6502 source.",
    "layout": "TODO: not disassembled. Observation only: the fixed engine code precedes the init entry at $1BDF ($10AC-$1BDF, i.e. 0xB33/2867 bytes), and total data-payload size varies per file from 8,418 to 33,825 bytes — consistent with a fixed player/editor binary plus variable-length appended song data, but the split point and table layout were not analyzed."
  },
  "entry": {
    "init": "$1BDF — identical across all 64 files in the collection (read directly from each RSID header, not just the traced sample).",
    "play": "None. PSID/RSID `play` address is $0000 in every file — this is the RSID convention for a player that installs its own IRQ handler during init rather than being called via an external PSID play vector. Confirmed live: `sidm2-sid-trace.exe` (which drives a tune by calling the declared play address) returns 0 writes for this whole tag; `scripts/dev/vsid-trace.js` (VICE `vsid.exe`, full emulated machine with autonomous IRQ delivery) is what actually traces it, per `scripts/dev/README.md`."
  },
  "speed": "Frame-driven, appears to run at the PAL 50Hz IRQ cadence, but writes are emitted only on note/state changes, not every frame — a real trace of `All_My_Love.sid` (50 frames, `vsid-trace.js --frames 50 --json`) recorded 33 writes across only 7 of 50 frames (`cadence: sparse`). A concrete note-on/note-off pair was observed: frame 20 sets voice-1 control to $41 (gate on) with a new frequency, frame 34 sets it back to $40 (gate off), frame 35 immediately starts the next note — a 14-frame (~0.28s) note-gate period, consistent with quantized playback of manually-transcribed sheet music rather than fine-grained tracker timing. TODO: whether the underlying IRQ is CIA-timer or raster-driven was not determined (the tracer observes register writes only, not the interrupt source).",

  "data_format": {
    "order_list": "TODO — not disassembled. Likely not applicable in the tracker sense: this is a notation editor storing a score, not a pattern/order-list sequencer (unconfirmed).",
    "patterns": "TODO",
    "instruments": "TODO. Marketing copy states \"99 preset instrument and special effects sounds\", joystick-selectable (usermanual.wiki C64/128 Music Software Guide) — not verified against the binary.",
    "wavetable": "TODO",
    "pulsetable": "TODO — init frame of the traced file sets all three voices' pulse width to $0800 and control to $40 (pulse waveform, gate off) identically, but this is one observed init snapshot, not a confirmed table format.",
    "filtertable": "TODO — init frame sets $D417 (filter resonance/routing) to $F0 (max resonance; low nibble $0 means NO voice is routed through the filter) and $D418 (volume/mode) to $58 (high-pass + low-pass combined, i.e. notch-adjacent, NOT band-pass alone — $20/band-pass bit is unset; volume 8) in the one traced file; not confirmed as a general table."
  },
  "effects": {
    "encoding": "TODO: not disassembled.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is the first knowledge card sourced from `scripts/dev/vsid-trace.js`, the VICE-based RSID tracer (see `scripts/dev/README.md`). Music_Processor was chosen as the proving case because it was the tag that motivated building the tool: `sidm2-sid-trace.exe` (PSID-only, calls the declared play address) returns 0 writes for every one of its 64 files since RSID declares `play=$0000`. `vsid-trace.js` runs a full emulated C64 via `vsid.exe -console -sounddev dump`, so the self-installed IRQ actually fires and gets captured. All 64/64 files traced successfully with 0 failures per the README.",
    "All 64 files in the collection share byte-identical `load=$10AC` / `init=$1BDF` header addresses (verified directly from every file's PSID/RSID header, not just the traced sample), despite payload sizes ranging 8,418-33,825 bytes — strong evidence these are rips of the same fixed player/editor engine with different song data appended, not 64 independently-compiled programs.",
    "Extremely sparse write cadence in the trace (33 writes over 50 frames, only 7 frames touched) is the software being simple, not the trace failing — matches the pattern `scripts/dev/README.md` already documented for this exact tag (\"writes only when a note changes\").",
    "Composer concentration: all 64 files in the local dataset belong to a single composer, Dick van Riemsdijk (Netherlands) — a 100%-concentration case. That does NOT mean this is a personal/bespoke player routine, though: SIDId identifies it as a specific commercial, boxed product (`The Music Processor`, Sight & Sound, 1984, CSDb release 150058) with its own marketing copy and reviews. The 100% concentration instead just reflects that HVSC happens to preserve only one person's output from this particular editor.",
    "Filenames in the collection are entirely classical/standards repertoire (Blue Moon, Ballade Pour Adeline, Die Schoene Blaue Donau, Cats in the Cradle, ...) — consistent with the software's advertised purpose as a notation-based \"in-home recording studio\" for transcribing existing sheet music, per a Lemon64 thread describing it as \"Notation based (staff with notes)\" with an animated title screen where notes danced to the music.",
    "IS present in the curated `data/players.json` (129-entry DeepSID player list) — {title: 'The Music Processor', developer: 'M. Peter Engelbrite', start_year: '1984', csdb_id: 150058, distribution: 'Commercial'} — so this is a curated, not an inferred/synthetic, player; identity is corroborated independently by DeepSID's curated entry, `data/sidid.json`'s `byTag` entry, and CSDb, not sourced from SIDId alone."
  ],
  "sources": [
    "sidid:Music_Processor (author M. Peter Engelbrite, 1984 Sight & Sound, CSDb release 150058) — data/sidid.json",
    "CSDb release: https://csdb.dk/release/?id=150058 (\"The Music Processor\", 1984, C64 tool, d64 download)",
    "Commodore 64 and 128 Music Software Guide (usermanual.wiki), Music Processor entry: \"This software creates an in-home recording studio. Three voice compositions can be written, edited, recorded, and printed\" / 99 preset instrument & effects sounds, joystick-selectable, $29.95, Sight and Sound Music Software — https://usermanual.wiki/Document/Commodore64and128MusicSoftwareGuide.1468320925/help",
    "Lemon64 forum, software identified as \"The Music Processor\" by Sight & Sound, described as staff-notation-based with an animated splash screen: https://www.lemon64.com/forum/viewtopic.php?t=56360",
    "Lemon64 forum, Sight & Sound Computer Song Albums (context on the Sight & Sound product line): https://www.lemon64.com/forum/viewtopic.php?t=27266",
    "Local dataset: 64 files, all tagged Music_Processor, all by one composer (van_Riemsdijk_Dick) — see knowledge/COVERAGE.md (rank 4, 64 files) and data/composers/van-riemsdijk-dick.json",
    "Own trace, this session: `node scripts/dev/vsid-trace.js <HVSC>/MUSICIANS/V/van_Riemsdijk_Dick/All_My_Love.sid --frames 50 --json`, plus direct PSID/RSID header inspection of all 64 files in that folder for load/init address consistency — not a disassembly, a black-box runtime + header observation only"
  ]
}
```

## Overview

The Music Processor is a commercial C64 music **notation editor and player**
published by Sight & Sound Music Software in 1984, credited to M. Peter
Engelbrite ([SIDId](https://csdb.dk/release/?id=150058)). It's a "BASIC
extension" style product, not a demoscene tracker: it presented a musical
staff, let a user transcribe (or select from 99 preset instrument/effects
sounds) a three-voice composition, and played it back with an animated
title screen (Lemon64 forum reports). All 64 files tagged `Music_Processor`
in the local HVSC-derived dataset belong to one composer, Dick van Riemsdijk
of the Netherlands — a 100%-concentration case, but one that reflects
preservation scope (only his rips survive in HVSC), not a bespoke/personal
routine: SIDId ties the tag to a real boxed retail product with contemporary
reviews. This is also the **first card sourced from `scripts/dev/vsid-trace.js`**,
the project's new VICE-based RSID tracer — Music_Processor was the exact tag
that motivated building it, since every one of its files is RSID with
`play=$0000` (self-installed IRQ), which the existing PSID-only
`sidm2-sid-trace.exe` cannot drive at all.

## Quirks & gotchas

See the `quirks` array. Headline items: (1) all 64 files share byte-identical
`load=$10AC`/`init=$1BDF` addresses despite very different payload sizes,
strong evidence of one fixed engine binary with appended song data; (2) the
tracer shows genuinely sparse, event-driven register writes (not a trace
failure — the tool's own README already flagged this tag as the sparse-cadence
example); (3) 100% single-composer concentration in the local dataset is a
preservation-coverage artifact, not evidence this is a personal/bespoke
routine — SIDId + CSDb + period marketing material confirm it's a real retail
product.

## Disassembly notes

None. This pass is Tier 1 (local identity data) + Tier 2 (CSDb/web provenance)
+ a real **black-box runtime trace** via `scripts/dev/vsid-trace.js`, not a
disassembly. No 6502 source was read; `entry.init`/`memory.load_address` come
from reading the PSID/RSID header fields directly (a documented, standard file
format, not reverse engineering), and `speed`/write-pattern facts come from
the tracer's captured register-write sequence. Memory-map internals beyond the
load/init addresses (zero page, table layout, data formats, effects encoding)
remain genuinely unknown and are marked `TODO`.

## Verification

**Not verified — `status: in-progress`.** Promoted one tier past `stub`
because a real runtime artifact (the `vsid-trace.js` trace of
`All_My_Love.sid`, plus header inspection of all 64 files) directly supports
`entry.init`, `memory.load_address`, and part of `speed`, per this project's
rule that a citable tracer/source observation (not a guess) earns
`in-progress`. It is explicitly **not** `verified`: verification requires
reassembling/reconstructing the init+play routine from a real disassembly and
round-tripping it through `mcp-c64`/`sidm2-siddump`, which this pass
deliberately does not attempt — no 6502 source was read, and the zero page,
data tables, and effect encoding are all still unknown.

Tooling note for future passes: `vsid-trace.js` worked exactly as documented
on the first real card-writing attempt. `vsid.exe` (`C:\winvice\bin\vsid.exe`)
ran headless via `-console -sounddev dump`, exit code was 1 as documented
(status code is not meaningful — checked the dump file instead), and the
`--json` output's `initAddress`/`playAddress`/`cadence`/per-frame write list
were all directly usable without modification. No problems hit.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), the CSDb release page,
a period C64/128 music-software buyer's guide with a direct product
description, two Lemon64 forum threads, the local HVSC composer dataset, and
this session's own `vsid-trace.js` run plus direct header inspection of all
64 files in `MUSICIANS/V/van_Riemsdijk_Dick/`.
