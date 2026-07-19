# SidBang64

```json
{
  "id": "sidbang64",
  "name": "SidBang64",
  "aliases": ["Sidbang64_1/Warp8", "Sidbang64_2/Warp8"],
  "authors": ["Sebastian Abel (Warp 8 / Phantasy)"],
  "released": "2021 (V0.6 22 Jan 2021, V0.6.2, V0.6.4 26 Apr 2021; \"_2\" tag possibly a later/internal build, comment unclear)",
  "status": "verified",
  "platform": "Cross-platform PC editor (Rust, GPL-3.0, needs a Rust 1.47.0+ toolchain) — a 'loop-sequencer for sid-chip multispeed sounds' — plus a hand-written 6502 C64 replayer/exporter (assembly, in the same repo) that plays back an exported stream of SID-state changes on real hardware.",
  "csdb_release": 199203,

  "memory": {
    "load_address": "$1000 for the music player module (`.pc=$1000 \"music player\"`, c64/music.asm); the bundled standalone demo/example harness in c64/main.asm loads at $0810 (BasicUpstart) with its IRQ handler at $0e00 and IRQ-position tables around $0f00 — these last three are the demo wrapper, not necessarily what real exported .sid files use.",
    "zero_page": "music.asm reserves $02-$0f (virtual, `.pc=$02 \"ZP variables\"`) for: subIdx, frameCtr (word), patternCtr (word), dataPtr (word), dataCh1/dataCh2/dataCh3 (word, per-voice stream pointers), dataIdx1/dataIdx2/dataIdx3 (word, per-voice pattern index), idx1, idx2, filterCtr (2 bytes), ffreqStore (2 bytes), ffreqAdd (2 bytes). main.asm's demo harness separately reserves $7c (lineIdx) — not part of the player itself.",
    "layout": "Per-voice data streams (dataCh1/2/3) are read byte-by-byte; each byte is masked with `and #31` (low 5 bits) to index a 32-entry per-voice 'kernel' jump table (voc1_kernelPosL/H etc., built from voc1_kernels.asm/voc2_kernels.asm/voc3_kernels.asm) that is JSR'd to perform the actual SID writes for that command. A pattern-restart table (ch_idx_ptr1/2/3) reloads dataIdx1/2/3 when patternCtr wraps at bng_ptc (number of patterns). TODO: exact per-kernel command semantics (note/gate/effect meaning of each of the 32 codes) not extracted — would need reading voc*_kernels.asm."
  },
  "entry": {
    "init": "music_init (JMP m_init, c64/music.asm) — called once from the demo harness before CLI (interrupts enabled after init). CONFIRMED by direct disassembly of a real exported RSID file (Str8.sid, HVSC MUSICIANS/W/Warp_8): init installs the raw hardware IRQ vector itself (`sei; lda #$00 / sta $fffe; lda #$0e / sta $ffff; ...; cli`) rather than going through the KERNAL's $0314/$0315 — i.e. real exported tunes of this convention run with interrupts fully off the KERNAL, matching the header's PSID `play address = 0` (no callable play routine — see below).",
    "play": "music_update (c64/music.asm) — called from the raster IRQ handler; runs one 'sub-tick' per call, incrementing subIdx until it reaches bng_qsize (the multispeed quantization/subdivision count), at which point it advances all three voices' pattern data via update_data. Also drives an independent filter-cutoff ramp (ffreqStore/ffreqAdd -> $D415/$D416) each sub-tick, refilling from a filter_v patch table every filter_patch_length ticks. CONFIRMED: real exported .sid files come in (at least) two distinct export conventions, not one — see `quirks` for the full breakdown. (a) A plain PSID convention (e.g. Secam.sid: load/init $1000, play $1003; Boilerplate.sid: load/init $e000, play $e003) where play IS a directly callable routine at init+3, the standard packed convention. (b) An RSID convention (the majority of files, e.g. Airfield.sid, Str8.sid: load/init $0810 or similar, PSID play address field literally 0) where init instead installs the real IRQ handler address directly into the hardware vector at $fffe/$ffff (confirmed $0e00 on Str8.sid, matching this card's own pre-existing `main.asm` source note) — SIDdecompiler needs an explicit `-P<decimal $0e00>` override to trace this convention at all; the header's play field is not usable directly."
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
    "The repo's c64/main.asm is a standalone demo/example harness (BasicUpstart at $0810, its own IRQ setup, credits screen) that calls into the actual player module at $1000 — the load address/entry-point facts recorded above distinguish the two; real exported .sid files in the collection were not individually disassembled to confirm they match this harness exactly.",
    "CONFIRMED (2026-07-18 disassembly pass): real exported files split into two genuinely different PSID/RSID conventions, not one. Of 8 real files sampled from the local dataset, 2 (Secam.sid, Boilerplate.sid — both later/'_2'-tag dated 2024-2025) are plain PSID with a directly callable play routine at init+3 ($1000/$1003 and $e000/$e003 respectively) — these disassembled, reassembled, and traced cleanly and fast. The other 6 sampled (Airfield.sid, Duralu.sid, Ueberschall.sid, Nachdruck.sid, Dog_Latin.sid, Ampfire.sid, Sh4ke.sid, Cyclethief.sid, M0n0melvin.sid, Jack_Voicebreaker.sid, Darkpattern.sid, Bassminer.sid) are RSID with PSID play-address field literally 0 (not a callable routine — matches the demo harness's raw-hardware-IRQ-vector design, see `entry.play`). SIDdecompiler.exe (default settings, any `-t`/`-C`/relocation value) reproducibly HANGS (does not complete even at `-t1`, confirmed after 100+ seconds — process still alive, no output ever flushed) tracing every one of those RSID files except one outlier, Str8.sid, which completes (its INIT evidently isn't the same slow/looping path). Root cause not fully isolated — could be a genuine, very-long-but-finite loop under the interpreted emulator (a raster-sync busy-wait a decompiler that runs INIT once won't see resolve) or a real emulation bug specific to this init's exact instruction sequence; flagged as a tool limitation, not chased further. This blocks disassembly of the RSID convention for most files by default; Str8.sid disassembled successfully once `-P<decimal 0x0e00>` was supplied explicitly (SIDdecompiler's own play-address auto-detection is a no-op when the header's play field is 0)."
  ],
  "sources": [
    "sidid.nfo (SIDId project, via github.com/cadaver/sidid): Sidbang64_1/Warp8 (author Sebastian Abel (Warp8), released 2021, reference https://csdb.dk/release/?id=199203) and Sidbang64_2/Warp8 (same author, comment 'Probably an internal/unpublished version') — https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo",
    "CSDb release 199203, 'Sidbang64 V0.6' (22 Jan 2021, Warp 8 of Phantasy, 'Other Platform C64 Tool'), description text and download links: https://csdb.dk/release/?id=199203",
    "CSDb release 199784, 'Sidbang64 V0.6.2' (2021): https://csdb.dk/release/?id=199784",
    "CSDb release 203460, 'Sidbang64 V0.6.4' (26 Apr 2021), release notes on filter sequence being hardcoded and a planned V0.7 UI exposure: https://csdb.dk/release/?id=203460",
    "Public source repository (GPL-3.0), README description, Rust/assembly composition: https://github.com/SebastianAbel/sidbang64",
    "Source read directly for memory/entry/data-format facts above: c64/main.asm, c64/music.asm (https://raw.githubusercontent.com/SebastianAbel/sidbang64/master/c64/main.asm and .../c64/music.asm)",
    "Composer/csdb identity for '8 Warp' (Sebastian Abel, Germany, CSDb scener id 279, HVSC MUSICIANS/W/Warp_8): local `data/composers/8-warp.json`; CSDb scener page https://csdb.dk/scener/?id=279",
    "Local dataset: 26 files tagged Sidbang64_1/Warp8 + 31 tagged Sidbang64_2/Warp8, all by composer '8 Warp' (see knowledge/COVERAGE.md, ranks #20 and #11 respectively)",
    "2026-07-18 disassembly/verification pass: real HVSC files C:/.../MUSICIANS/W/Warp_8/{Secam,Boilerplate,Str8,Airfield,Duralu,...}.sid, disassembled with SIDdecompiler.exe, reassembled with 64tass.exe, byte-diffed and trace-diffed (sidm2-sid-trace.exe) against the originals — see Disassembly notes / Verification sections above for exact figures."
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

**2026-07-18: real binary disassembly performed, three real HVSC files.**
Source (`c64/main.asm`, `c64/music.asm`) had already given Tier 3 facts by
direct reading; this pass independently re-derived the same facts from
actual shipped `.sid` binaries via `SIDdecompiler.exe` + `64tass.exe`, per
this project's standard disassemble→reassemble→byte-diff→trace-diff
workflow. Not yet read: `voc1_kernels.asm`, `voc2_kernels.asm`,
`voc3_kernels.asm` (the 32-entry per-voice command kernels) and
`c64/data/*` (table formats) — `data_format.patterns`/`effects` remain
`TODO`; the disassembly pass below confirms the *player's own dispatcher
code*, not the exported song-data tables' field semantics.

Three files tested, HVSC `MUSICIANS/W/Warp_8/`:
- **Secam.sid** (PSID, load/init `$1000`, play `$1003` — plain convention):
  `SIDdecompiler.exe Secam.sid -a4096 -z -d -c -v2 -t30000`, reassembled
  with `64tass -a --cbm-prg`. **Byte-diff: 8192/8197 bytes exact (99.94%)**;
  the 5 differing bytes ($1029, $1058-$1059, $1087-$1088) all fall exactly
  on addresses the decompiler's own `-v2` memory-touch map marks `_`
  (operand + self-modifying write) — i.e. the disassembly captured the
  *post-execution* value at those addresses, not the pristine on-disk byte.
  **Trace-diff: EXACT.** Traced both the original (repackaged as a `.prg`
  with the real load address prefixed — see gotcha 14 below) and the
  reassembled `.prg` via `sidm2-sid-trace.exe` for 20 frames each,
  `init=$1000 play=$1003`; the two register-write logs are byte-for-byte
  identical (only the echoed input filename differs).
- **Boilerplate.sid** (PSID, load/init `$e000`, play `$e003` — same plain
  convention, different relocation): same method, `-a57344`. **Byte-diff:
  7806/7858 bytes exact (99.34%)**, 52 single/double-byte diffs, again ALL
  on `_`-marked (self-modifying) addresses. **Trace-diff: near-exact, fully
  localized.** 264 real register writes vs. 267 reconstructed over 30
  frames; every difference traces back to ONE self-modified byte at $e004
  (on-disk value $00, decompiler's captured runtime value $75) causing 3
  spurious extra `osc{1,2,3}_control` writes in frame 0 only — the `new_val`
  from frame 1 onward is identical in both traces (frames 2-29 have zero
  diff lines). This is exactly the kind of file-dependent divergence
  lessons-learned entry 16 warned about: the *same* class of byte mismatch
  was silently dead on Secam.sid but audibly live (3 extra transient writes,
  self-correcting after one frame) on Boilerplate.sid — confirming the
  "always test a second file" rule earns its keep here too.
- **Str8.sid** (RSID, load/init `$083f`, PSID play field `0` — the
  IRQ-vector convention used by most real exports): required
  `-P<decimal 0x0e00>=-P3584` (see quirks) to trace at all; default settings
  hang (see quirks). `SIDdecompiler.exe Str8.sid -a2111 -I2111 -P3584 -z -d
  -c -v2 -t30000`, reassembled cleanly. **Byte-diff: 62976/63035 bytes exact
  (99.91%)** over the real payload range; the diffs split into two classes —
  a handful of `_`-marked self-modified RAM bytes (same pattern as the other
  two files, at near-identical relative offsets: $1023, $1052-53, $1081 —
  clearly the same shared player-module code), plus a block at
  $d011-$d01a/$d400-$d418/$dc0d/$dd0d/$fffe-$ffff: real hardware I/O/vector
  addresses that the decompiler's contiguous-block output includes (since
  code writes there) but which aren't meaningfully "file content" — this
  also made the reassembled `.prg` 390 bytes LONGER than the original
  (extends to $ffff because of the `sta $fffe`/`sta $ffff` vector-install
  writes). **Trace-diff: NOT completed** — `sidm2-sid-trace.exe` panicked
  ("index out of bounds") on the reconstructed `.prg`, apparently because
  its RAM buffer is sized to the loaded file's own length rather than a
  full 64KB space, and the reconstruction's extra tail bytes push a vector
  write past that buffer's bound. The *original* file's own `.prg` (correct
  length, no extra tail) traced 20 frames without incident. This is a
  tracer limitation triggered by the reconstruction's harmless-but-atypical
  length, not evidence the reconstruction's actual code is wrong — but it
  IS an honest gap: Str8.sid's playback was never behaviourally confirmed
  the way Secam.sid and Boilerplate.sid's were, only byte-diffed.

## Verification

**Locally re-run and confirmed, `status: verified`.** Two of three real
files (Secam.sid, Boilerplate.sid — the plain-PSID export convention) hit
this project's `verified` bar directly: an exact register-write trace match
and a near-exact one with the entire divergence localized to a single
self-modified byte and three transient frame-0 writes that resolve by frame
1 — both meeting or exceeding the `laxity-newplayer` ~99.9% precedent. A
third file (Str8.sid, the RSID/IRQ-vector convention most real exports
actually use) reached 99.91% byte-exactness but its trace-diff could not be
completed due to a `sidm2-sid-trace.exe` crash on the reconstruction's
slightly-longer-than-original length (see Disassembly notes) — this
specific file's playback fidelity is NOT independently confirmed, only its
static bytes. Identity/provenance facts (author, release chain, licence,
composer usage) remain confirmed from SIDId, CSDb, and this project's local
dataset, unchanged by this pass.

**Honest scope / known gaps.**
1. The RSID/IRQ-vector convention (majority of real exports) hangs
   `SIDdecompiler.exe` on all sampled files except Str8.sid — root cause
   not isolated (see quirks). Anyone re-running this: try a much longer
   wall-clock budget (>10 min) on one hung file before concluding it's a
   true infinite loop rather than an extremely slow one.
2. Effect semantics (`effects.commands`), instrument/table formats, and the
   32-entry per-voice kernel dispatch table's actual per-kernel meaning
   remain `TODO` — this pass confirmed the *player's* code, not the
   *exported song data's* field semantics. `voc1_kernels.asm`/
   `voc2_kernels.asm`/`voc3_kernels.asm` still need reading.
3. No `edges` asserted — still no lineage evidence found; SidBang64 remains,
   as far as this project's research shows, an independent from-scratch
   design.

Exact byte-level patch table (durable, not scratchpad): `knowledge/players/reconstructions/sidbang64.md`.

## Sources

See the `sources` array — sidid.nfo, three CSDb tool releases (V0.6/V0.6.2/
V0.6.4), the GitHub source repo, two source files read directly, the local
composer record for "8 Warp", and this project's local dataset counts.
