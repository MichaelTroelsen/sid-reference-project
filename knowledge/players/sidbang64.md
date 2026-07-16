# SidBang64

```json
{
  "id": "sidbang64",
  "name": "SidBang64",
  "aliases": ["Sidbang64_1/Warp8", "Sidbang64_2/Warp8"],
  "authors": ["Sebastian Abel (Warp 8 / Phantasy)"],
  "released": "2021 (V0.6 22 Jan 2021, V0.6.2, V0.6.4 26 Apr 2021; \"_2\" tag possibly a later/internal build, comment unclear)",
  "status": "in-progress",
  "platform": "Cross-platform PC editor (Rust, GPL-3.0, needs a Rust 1.47.0+ toolchain) — a 'loop-sequencer for sid-chip multispeed sounds' — plus a hand-written 6502 C64 replayer/exporter (assembly, in the same repo) that plays back an exported stream of SID-state changes on real hardware.",
  "csdb_release": 199203,

  "memory": {
    "load_address": "$1000 for the music player module (`.pc=$1000 \"music player\"`, c64/music.asm); the bundled standalone demo/example harness in c64/main.asm loads at $0810 (BasicUpstart) with its IRQ handler at $0e00 and IRQ-position tables around $0f00 — these last three are the demo wrapper, not necessarily what real exported .sid files use.",
    "zero_page": "music.asm reserves $02-$0f (virtual, `.pc=$02 \"ZP variables\"`) for: subIdx, frameCtr (word), patternCtr (word), dataPtr (word), dataCh1/dataCh2/dataCh3 (word, per-voice stream pointers), dataIdx1/dataIdx2/dataIdx3 (word, per-voice pattern index), idx1, idx2, filterCtr (2 bytes), ffreqStore (2 bytes), ffreqAdd (2 bytes). main.asm's demo harness separately reserves $7c (lineIdx) — not part of the player itself.",
    "layout": "Per-voice data streams (dataCh1/2/3) are read byte-by-byte; each byte is masked with `and #31` (low 5 bits) to index a 32-entry per-voice 'kernel' jump table (voc1_kernelPosL/H etc., built from voc1_kernels.asm/voc2_kernels.asm/voc3_kernels.asm) that is JSR'd to perform the actual SID writes for that command. A pattern-restart table (ch_idx_ptr1/2/3) reloads dataIdx1/2/3 when patternCtr wraps at bng_ptc (number of patterns). TODO: exact per-kernel command semantics (note/gate/effect meaning of each of the 32 codes) not extracted — would need reading voc*_kernels.asm."
  },
  "entry": {
    "init": "music_init (JMP m_init, c64/music.asm) — called once from the demo harness before CLI (interrupts enabled after init).",
    "play": "music_update (c64/music.asm) — called from the raster IRQ handler; runs one 'sub-tick' per call, incrementing subIdx until it reaches bng_qsize (the multispeed quantization/subdivision count), at which point it advances all three voices' pattern data via update_data. Also drives an independent filter-cutoff ramp (ffreqStore/ffreqAdd -> $D415/$D416) each sub-tick, refilling from a filter_v patch table every filter_patch_length ticks."
  },
  "speed": "IRQ-driven multispeed, not CIA-timer-driven. The demo harness sets up custom raster IRQ split-positions (generateIrqPositions) with an explicit '16x' comment/label in main.asm, and CSDb's V0.6 release notes mention '16x player source code' — i.e. the exported player runs the update routine some configurable multiple of times per frame (subIdx counts up to bng_qsize sub-ticks before the pattern/song position advances). Exact default multiplier and whether it is fixed at 16x or configurable per-song: TODO.",

  "data_format": {
    "order_list": "TODO: pattern order/restart mechanics use bng_ptc (pattern count) and ch_idx_ptr1/2/3 (per-voice pointer tables indexed by pattern number) but the on-disk/exported table layout was not traced beyond the runtime pointers.",
    "patterns": "Each voice has its own independent byte-stream data list (not a shared multi-voice pattern); a byte's low 5 bits select one of 32 per-voice 'kernels' (voc{1,2,3}_kernels.asm). TODO: what the remaining 3 bits (or subsequent stream bytes) encode.",
    "instruments": "README states export intentionally does NOT keep instrument logic in the replayer yet: 'the export format is essentially a dump of sid-state changes to keep the replayer fast and simple', with the author noting plans to move instrument logic into the replayer before v1.0 to reduce memory use. TODO: current (source-read) instrument representation, if any beyond the raw kernel dispatch.",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "A filter_v patch table (6 bytes/patch: cutoff-lo, cutoff-hi, resonance/mode?, mode/routing?, delta-lo, delta-hi) is read every filter_patch_length ticks and ramped each sub-tick via ffreqStore += ffreqAdd into $D415/$D416; V0.6.4's CSDb release notes say the filter sequence is 'hardcoded in the player source code' with a UI exposure planned for V0.7. Exact field meaning beyond cutoff/delta: TODO."
  },
  "effects": {
    "encoding": "TODO: only the top-level dispatch (stream byte & $1F -> kernel index -> JSR) is confirmed from source; per-kernel effect semantics not extracted.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "MERGED CARD: 'Sidbang64_1/Warp8' and 'Sidbang64_2/Warp8' are two adjacent Player-ID signature tags for what is almost certainly ONE evolving tool by the same author. SIDId (sidid.nfo) lists both under 'AUTHOR: Sebastian Abel (Warp8)'; '_1' carries the real CSDb reference (https://csdb.dk/release/?id=199203, V0.6, 22 Jan 2021) while '_2's only annotation is 'Probably an internal/unpublished version' (SIDId's own uncertainty, not a claim of a different tool). CSDb lists three published SidBang64 tool releases in 2021 alone (V0.6 id 199203, V0.6.2 id 199784, V0.6.4 id 203460), all credited to Warp 8/Phantasy — consistent with an actively-versioned single driver (same pattern as jch-newplayer/john-player), not two distinct tools. Kept as one card with both raw tags as `aliases` per this project's precedent; NOT split.",
    "Extremely narrow usage: in this project's dataset, both tags resolve to exactly ONE composer — '8 Warp' (Sebastian Abel himself, HVSC path MUSICIANS/W/Warp_8) — 26 files under Sidbang64_1 and 31 under Sidbang64_2, 57 total, 100% self-authored. This is the strongest possible 'personal/experimental tool, never adopted by others' signal (stronger even than the Rob Hubbard case in the main dataset, which was spread across 51 composers).",
    "Genuinely open source (rare for a personal tool): GPL-3.0, github.com/SebastianAbel/sidbang64, with the C64 replayer/exporter as hand-written 6502 assembly (KickAssembler syntax) sitting alongside a Rust-based cross-platform editor/sequencer — the editor is NOT C64-native, only the exported replay is.",
    "Author's own README frames the project's core idea as multispeed beyond 50/60Hz raster-locked updates ('loop-sequencer for sid-chip multispeed sounds'), and the export format is deliberately a near-raw dump of SID register-state changes rather than a compact tracker format, by the author's own admission, for replayer simplicity — with a stated intent to move instrument logic into the replayer before a v1.0 that, per CSDb's V0.6.4 notes (Apr 2021), had not shipped as of that release.",
    "The repo's c64/main.asm is a standalone demo/example harness (BasicUpstart at $0810, its own IRQ setup, credits screen) that calls into the actual player module at $1000 — the load address/entry-point facts recorded above distinguish the two; real exported .sid files in the collection were not individually disassembled to confirm they match this harness exactly."
  ],
  "sources": [
    "sidid.nfo (SIDId project, via github.com/cadaver/sidid): Sidbang64_1/Warp8 (author Sebastian Abel (Warp8), released 2021, reference https://csdb.dk/release/?id=199203) and Sidbang64_2/Warp8 (same author, comment 'Probably an internal/unpublished version') — https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo",
    "CSDb release 199203, 'Sidbang64 V0.6' (22 Jan 2021, Warp 8 of Phantasy, 'Other Platform C64 Tool'), description text and download links: https://csdb.dk/release/?id=199203",
    "CSDb release 199784, 'Sidbang64 V0.6.2' (2021): https://csdb.dk/release/?id=199784",
    "CSDb release 203460, 'Sidbang64 V0.6.4' (26 Apr 2021), release notes on filter sequence being hardcoded and a planned V0.7 UI exposure: https://csdb.dk/release/?id=203460",
    "Public source repository (GPL-3.0), README description, Rust/assembly composition: https://github.com/SebastianAbel/sidbang64",
    "Source read directly for memory/entry/data-format facts above: c64/main.asm, c64/music.asm (https://raw.githubusercontent.com/SebastianAbel/sidbang64/master/c64/main.asm and .../c64/music.asm)",
    "Composer/csdb identity for '8 Warp' (Sebastian Abel, Germany, CSDb scener id 279, HVSC MUSICIANS/W/Warp_8): local `data/composers/8-warp.json`; CSDb scener page https://csdb.dk/scener/?id=279",
    "Local dataset: 26 files tagged Sidbang64_1/Warp8 + 31 tagged Sidbang64_2/Warp8, all by composer '8 Warp' (see knowledge/COVERAGE.md, ranks #20 and #11 respectively)"
  ]
}
```

## Overview

SidBang64 is a small, GPL-3.0 open-source SID composition tool by Sebastian
Abel ("Warp 8" of Phantasy), first released as V0.6 in January 2021 and
updated through at least V0.6.4 (April 2021). It pairs a cross-platform Rust
editor/sequencer — the author calls it "a loop-sequencer for sid-chip
multispeed sounds" — with a hand-written 6502 assembly C64 replayer that
plays back an exported near-raw stream of SID register-state changes. In
this project's dataset it is used exclusively by its own author: both
Player-ID tags for it, `Sidbang64_1/Warp8` and `Sidbang64_2/Warp8`, resolve
to precisely one composer ("8 Warp"), 57 files total, making this a rare
case where a genuinely open-source, actively-versioned tool never spread
past its creator's own use.

## Quirks & gotchas

See the `quirks` array — the load-bearing points: (1) `_1` and `_2` are
treated as ONE evolving driver, not two tools, on the strength of SIDId's
shared-author listing plus CSDb's three same-year, same-credit tool
releases; (2) usage is 100% self-authored, the strongest personal-tool
signal seen in this dataset so far; (3) unusually for a small personal
project, the source is real, public, and GPL-3.0-licensed, so several
runtime facts below come from directly reading `c64/main.asm` and
`c64/music.asm` rather than being guessed — but the per-kernel effect
semantics (`voc1_kernels.asm`/`voc2_kernels.asm`/`voc3_kernels.asm`) were
not read, so `effects.commands` stays empty.

## Disassembly notes

No binary disassembly was performed — this is source-available, and the
facts recorded were read directly from the published KickAssembler source
(`c64/main.asm`, `c64/music.asm`). Not yet read: `voc1_kernels.asm`,
`voc2_kernels.asm`, `voc3_kernels.asm` (the 32-entry per-voice command
kernels that `music_update` dispatches into) and `c64/data/*` (table
formats). Reading those would resolve the `data_format.patterns` and
`effects` TODOs. A further step to reach `verified` would be assembling the
harness (or a real exported `.sid`) and tracing it through
`sidm2-siddump`.

## Verification

**Not verified — `status: in-progress`.** Identity/provenance facts (author,
release chain, licence, composer usage) are confirmed from SIDId, CSDb, and
this project's local dataset. A meaningful slice of Tier 3 (load address,
ZP layout, init/play entry points, top-level data dispatch, speed model) was
promoted past `stub` because the public GPL-3.0 source plainly states them
in `c64/main.asm`/`c64/music.asm` — each cited to the exact file. Effect
semantics, instrument/table formats, and any edge to another player family
remain `TODO`; no `edges` were asserted because no lineage evidence was
found (SidBang64 appears to be an independent, from-scratch design per its
own README, not a derivative of an existing player).

## Sources

See the `sources` array — sidid.nfo, three CSDb tool releases (V0.6/V0.6.2/
V0.6.4), the GitHub source repo, two source files read directly, the local
composer record for "8 Warp", and this project's local dataset counts.
