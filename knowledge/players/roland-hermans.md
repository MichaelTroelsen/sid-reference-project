# Roland Hermans (Wijnhoven driver)

```json
{
  "id": "roland-hermans",
  "name": "Roland Hermans (Wijnhoven driver)",
  "aliases": ["Roland_Hermans", "NEO"],
  "authors": ["Roland Hermans (driver code)", "Joachim Wijnhoven (music)"],
  "released": "~1990-1991 (Dragon-Fly Soft era)",
  "status": "verified",
  "platform": "A custom C64 replay routine coded by Roland Hermans, used exclusively for Joachim Wijnhoven's compositions. Player-ID-fingerprinted across 66 files (all in one composer folder).",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-file, but both files disassembled load at $1000. Driver code + self-modified working storage extends well past the file's own payload length into unused high RAM (e.g. Advanced_Space_Battle.sid's payload ends ~$7BF9 but the driver's own touched-memory model extends to $AF52 — a channel/note-pointer workspace area, not part of the file's own bytes).",
    "zero_page": "Uses zfa/zfb/zfc/zfd-style sequential ZP cells (SIDdecompiler-assigned names) — TODO: real ZP addresses not yet catalogued by function.",
    "layout": "TODO: full memory map by function (order list / pattern / instrument tables) not catalogued — only verified at the byte/trace level, not reverse-engineered structurally."
  },
  "entry": {
    "init": "Per-file. Advanced_Space_Battle.sid: $1780. Sleepwalker.sid: $1000.",
    "play": "Per-file, consistently init+3. Advanced_Space_Battle.sid: $1783. Sleepwalker.sid: $1003."
  },
  "speed": "TODO",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "The `Roland_Hermans` tag is a DRIVER, not a composer: it is a custom replay routine CODED by Roland Hermans for the MUSIC of Joachim Wijnhoven. All 66 tagged files sit in one HVSC folder (/MUSICIANS/W/Wijnhoven_Joachim/); many carry author 'Joachim Wijnhoven & R. Hermans' — Wijnhoven composed, Hermans coded. Fits the 'one composer + one coder = personal routine' pattern exactly.",
    "Roland Hermans: Dutch scener (handles NEO/RGJ/Smidas/Einstein), coder + musician, groups Dragon-Fly Soft (1990) / Revive (2012). Best known for authoring PSID64 (2001-2023).",
    "DO NOT conflate with PSID64: that is a SEPARATE public tool by Hermans (a SID→PRG converter embedding a relocatable playback driver; source at github.com/hermansr/psid64). This card's routine is the per-composer Wijnhoven driver, NOT PSID64. Whether they share any code is UNKNOWN — TODO.",
    "Joachim Wijnhoven (b.1971, NL; handles Yogibear/Banana Joachim; later Protovision game composer) — Dragon-Fly Soft games (Forester, Arabian Nights) + later scene work.",
    "Driver internals (memory map, ZP, format, effects, multispeed), signature techniques, and lineage all UNKNOWN — no disassembly of this per-composer routine. TODO.",
    "Heavy use of self-modifying code (immediate-operand and JSR-target bytes patched at runtime) throughout the driver — normal for this era, but a real trap for reassembly verification: some self-modified bytes are dead (decompiler's baked-in post-simulation value never actually gets read before being overwritten — confirmed on Advanced_Space_Battle.sid, all 4 remaining post-fix byte diffs were this kind), while others are load-bearing INITIAL values read once at cold-init before the first self-modifying write occurs (confirmed on Sleepwalker.sid: an `ora #$30`-style operand byte, true original value $00, silenced all 3 voices — filter_mode_volume desynced to $3F instead of $0F — across all 4 subtunes until patched to the real original byte). Per-file, not assumable from one trace-exact result.",
    "SIDdecompiler produced a genuine reassembly blocker on Advanced_Space_Battle.sid: 10 self-modified-operand locations got emitted as syntactically invalid label definitions (e.g. `la1bb+1           lda #$00` — a label literally named with a `+1` suffix, which 64tass rejects with 'general syntax' errors). The `-A` (force page alignment) flag does NOT fix this — it instead silently relocates the whole output base address (observed: -a4096 with -A produced `* = $0900` instead of the requested $1000), which is a worse problem for byte-diffing. Fix: for each such offending line, define a plain anchor label on the instruction itself, then add a separate `<name>_1 = <anchor> + 1` assignment — do NOT simply text-rename the `+1`-suffixed label in place, since that silently redefines the symbol to mean the OPCODE byte's address (one too low) instead of the operand byte's address, producing a systematic off-by-one wherever that symbol is used elsewhere (hit this exact self-inflicted bug first, diagnosed via the byte-diff showing a uniform 'reassembled = original - 1' pattern across ~100 scattered single-byte diffs, all downstream of the renamed symbols)."
  ],
  "sources": [
    "CSDb Roland Hermans / Revive (scener 13338 — identity, groups, roles): https://csdb.dk/scener/?id=13338",
    "github.com/hermansr/psid64 — his SEPARATE public driver tool (PSID64), NOT this routine",
    "DeepSID Wijnhoven_Joachim folder (the 66 files): https://deepsid.chordian.net/?file=MUSICIANS/W/Wijnhoven_Joachim/Advanced_Space_Battle.sid",
    "Local dataset: 66 files tagged Roland_Hermans (all Joachim Wijnhoven's music) — see knowledge/COVERAGE.md"
  ]
}
```

## Overview

The `Roland_Hermans` tag is a custom C64 replay **driver** coded by Roland
Hermans (Dutch scener, later the author of PSID64) for the music of **Joachim
Wijnhoven** — Wijnhoven composed, Hermans coded. All 66 tagged files are
Wijnhoven's Dragon-Fly Soft-era tunes.

## Quirks & gotchas

See the `quirks` array — the load-bearing items: **driver ≠ composer** (Hermans
coded, Wijnhoven composed), and **don't conflate with PSID64** (Hermans's
separate public SID→PRG tool). Per-file memory map.

## Disassembly notes

Two files fully disassembled (SIDdecompiler), reassembled (64tass), and
trace-verified: `Advanced_Space_Battle.sid` and `Sleepwalker.sid`. Structural
internals (order list, pattern, instrument, wavetable/pulsetable/filtertable
formats) were NOT reverse-engineered — this pass only established
byte-for-byte and register-write equivalence, not the driver's data format.
Those remain `TODO`. See the `quirks` array for the two real gotchas hit
(the `+1`-suffixed label reassembly blocker, and the file-dependent
dead-vs-load-bearing self-modified byte issue).

## Verification

**Reassembled + trace-verified exact on two real HVSC files (2026-07-18) —
`status: verified`.**

- **`Advanced_Space_Battle.sid`** (load $1000, init $1780, play $1783, 8
  subtunes): SIDdecompiler `-a4096 -z -d -c -v2` (no `-e`), reassembled with
  64tass after fixing 10 syntactically-invalid `+1`-suffixed labels (see
  quirks). Byte-diff against the original 27,641-byte payload: **100.0000%
  exact** (0 diffs) after also patching 4 confirmed-dead self-modified bytes
  to their true pristine values (byte-diff was 99.9855% / 4 diffs before that
  cosmetic patch — trace was already exact either way). Trace-diff (via
  `sidm2-sid-trace.exe`, 300 frames per subtune, all 8 subtunes): **exact
  match, every subtune**.
- **`Sleepwalker.sid`** (load $1000, init $1000, play $1003, 4 subtunes):
  same disassembly/reassembly method, no `+1`-label issue this time. Initial
  byte-diff: 98.8573% (64 diffs, a large cluster at $103f-$10a2 — a per-subtune
  init/state table). After patching that cluster to the true original bytes:
  99.8750% (7 diffs remained, all isolated self-modified-operand bytes).
  Trace-diff at that point still **differed** (filter_mode_volume desynced to
  $3F instead of $0F at cycle 1279, cascading through the rest of frame 0 and
  beyond, all 4 subtunes) — proving the remaining 7 bytes were NOT dead for
  this file, unlike the same category on Advanced_Space_Battle.sid. Patching
  those 7 bytes to their true original values reached **100.0000% byte-exact**
  and **trace-exact on all 4 subtunes** (300 frames each).
- Both reassembled `.prg`s are longer than their source `.sid` payloads
  (40,787 bytes vs 27,641; matches for Sleepwalker since no extra tail) —
  the excess is driver working-storage RAM touched during simulation but not
  part of the file's own bytes (see `memory.load_address` note); the
  byte-diff only compares the overlapping (original-file-length) region.
- Net: two independently-verified real files, both reaching exact byte and
  register-write parity — meets this project's `verified` bar (matching
  `laxity-newplayer`'s precedent). Driver **format internals** (not just
  playback correctness) remain unexamined — see Disassembly notes.

## Sources

See the `sources` array — CSDb scener 13338, the PSID64 repo (as the *separate*
tool), and the DeepSID Wijnhoven folder.
