# RoMuzak

```json
{
  "id": "romuzak",
  "name": "RoMuzak",
  "aliases": ["RoMuzak_V6.x", "RoMuzak_V7.x", "Romuzak"],
  "authors": ["Oliver Blasnik (ROM)"],
  "released": "1989 (V6.x); 1990 (V7.x)",
  "status": "in-progress",
  "platform": "Native C64 music editor+player. Closed tool with embedded author/copyright verification code; no source/license.",
  "csdb_release": 17814,

  "memory": {
    "load_address": "TODO (editor entry is SYS 28672 / $7000, but that is the EDITOR, not the replay init/play — do not conflate)",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "$1000 — LOCALLY CONFIRMED on a real HVSC RoMuzak_V6.x file (packed convention).",
    "play": "$1003 — LOCALLY CONFIRMED: a real HVSC RoMuzak_V6.x file traced with load=$1000, init=$1000, play=$1003, 241 register writes/50 frames. NOTE: this is the REPLAY entry, distinct from the EDITOR (SYS $7000) — confirming the card's caution not to conflate them."
  },
  "speed": "TODO. Behavioural note: heavy CPU cost — up to ~20+ rasterlines/frame with sprites active (considered expensive by scene coders).",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The player embeds AUTHOR/COPYRIGHT VERIFICATION code (self-checks) — the copyright string reads e.g. 'ROMUZAK V6.3 … OLIVER BLASNIK … DIGITAL MARKETING!! 02435-1295!!' (the trailing digits are a German phone number). Removing the verification gave scene coders a small speed gain.",
    "'Digital Marketing' is Blasnik's OWN copyright label, NOT a third-party publisher. CSDb releases were cracked/imported by scene groups (ACT 501, Cosmos, etc.) — those are crackers, not the publisher.",
    "Behavioural facts (from a Polish c64scene.pl technical thread): heavy raster cost (~20+ lines with sprites); modular per-channel processing where disassemblers spread the work across multiple IRQ calls; a known bug where the first note is sometimes muted on looping songs.",
    "Version history: V6.2/V6.3 (1989), V7.94/V7.96 (V7.96 = 15 Mar 1990). German docs bundled. Intermediate versions UNKNOWN.",
    "Possible (unconfirmed) lineage: a 'Romuzak Converter' (Tropic, 1990) exists and search summaries claim RoMuzak could import/convert Future Composer V1.0 songs — plausible but not primary-sourced (TODO). Note SIDM2's own KB has a shared 'romuzak_driver.asm' trace driver grouping MoN/ROMUZAK/Hubbard/DMC/Sound Monitor — a modern RE grouping, not an authorship claim.",
    "Replay internals (load address, ZP, init/play, data format, effect set) UNKNOWN — all TODO."
  ],
  "sources": [
    "CSDb RoMuzak V7.96 (docs, versions, ROM=code): https://csdb.dk/release/?id=17819",
    "CSDb baseline release: https://csdb.dk/release/?id=17814",
    "c64scene.pl technical thread (raster cost, copyright string, internals): https://www.c64scene.pl/viewtopic.php?t=112",
    "sidid:RoMuzak_V6.x (author Oliver Blasnik (ROM), 1989 Digital Marketing, CSDb 17814)",
    "Local dataset: 563 files tagged RoMuzak_V6.x/V7.x (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

RoMuzak is a native C64 music editor+player by **Oliver Blasnik (ROM)**,
released 1989 (V6.x) through 1990 (V7.x) under his own "Digital Marketing"
label. 563 files here across 73 composers. It's notable for embedding
author/copyright verification code in the player itself, and for being fairly
CPU-heavy (~20+ rasterlines/frame with sprites).

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **embedded copyright-verification
code** (and "Digital Marketing" = the author's own label, not a publisher); the
**heavy raster cost**; and the caution that **SYS $7000 is the editor entry, not
the replay init/play**. Internals `TODO`.

## Disassembly notes

None done here. The German bundled docs and a disassembly of a RoMuzak `.sid`
(traced via `sidm2-siddump`) are the routes to real facts. Note SIDM2's shared
`romuzak_driver.asm` groups RoMuzak with MoN/Hubbard/DMC/SoundMonitor as a
trace-driver family — a lead for comparison, not an authorship link.

## Verification

**Replay entry + playback LOCALLY CONFIRMED (2026-07-13) — `status:
in-progress`.** Traced a real HVSC RoMuzak_V6.x `.sid` with `sidm2-sid-trace`:
load `$1000`, init `$1000`, play `$1003`, **241 register writes / 50 frames** —
confirming the replay runs and that its entry (`$1003`) is distinct from the
editor's `$7000` (the card's caution holds). ZP, data format, and effect
encoding remain `TODO`, so in-progress rather than verified.

## Sources

See the `sources` array — CSDb (V7.96 + baseline), the c64scene.pl technical
thread, and the cached SIDId entry.
