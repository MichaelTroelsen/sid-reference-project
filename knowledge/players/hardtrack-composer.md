# Hardtrack Composer

```json
{
  "id": "hardtrack-composer",
  "name": "Hardtrack Composer",
  "aliases": ["HardTrack_Composer", "Hardtrack Composer"],
  "authors": ["Miłosz Ignatowski (Longhair) — player code", "Brush — co-coded the tool"],
  "released": "1992 (V1.0, Elysium)",
  "status": "verified",
  "platform": "Native C64 music editor (ships as a .PRG editor). Closed classic tool; no source/license located.",
  "csdb_release": 74928,

  "memory": {
    "load_address": "$1000 in both HVSC rips examined (MUSICIANS/B/Bzyk/2_Unlimited.sid and Absolute.sid). The module may be relocatable, but $1000 is the only observed load address this pass.",
    "zero_page": "$FB-$FC used as an indirect pointer pair (`zfb`/`zfc` in the SIDdecompiler output). No other zero-page usage was labelled.",
    "layout": "Module+$00 = JMP init, module+$03 = JMP play. A per-file text/metadata block of variable length follows, then a 26-byte subtune parameter table, then the real init/play routines. Real init/play offsets are file-dependent because the metadata block length varies; in 2_Unlimited.sid init=$1160/play=$11d8, in Absolute.sid init=$1060/play=$10d8 (play is consistently init+$78). The disassembled/reassembled code is identical apart from addresses and per-file data tables."
  },
  "entry": {
    "init": "PSID header vector $1000 (jumps to real init routine; file-dependent offset, e.g. $1160 or $1060)",
    "play": "PSID header vector $1003 (jumps to real play routine; file-dependent offset, e.g. $11d8 or $10d8)"
  },
  "speed": "Single-speed in the standard V1.0 files examined (one PLAY call per frame). The 'V1.0+ [6 speed]' variant is inferred from its CSDb title only and was not examined.",

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
    "AUTHORSHIP nuance: SIDId credits Miłosz Ignatowski (Longhair) for the player code, but CSDb's V1.0 credits list code as Brush AND Longhair (both of Elysium/Parados), with a note that Longhair's player-code credit was added later. So it's at minimum co-authored — Longhair = replay-routine author, Brush co-coded the tool.",
    "Polish-scene tool (Longhair/Brush of Elysium and Parados, Polish groups). Usage reflects this: 1,126 files but only 45 composers (top users Bzyk, Klax, Randy, Shapie) — a concentrated, locally-circulated Polish editor rather than a broadly adopted one. A Polish-language manual exists.",
    "Version history is partial: V1.0 (1992, Elysium), a 'V1.0+ [6 speed]' re-release (Beverly Hills Group, adds Glover/Samar to credits), and a V2.0 referenced on a Polish forum. Dates for the latter two: UNKNOWN.",
    "Replay internals are now partially documented via disassembly (load address $1000, ZP $FB-$FC, init/play via PSID vectors $1000/$1003, real init/play offsets file-dependent). Data format (order list / patterns / instruments / wavetable / pulsetable / filtertable) and effect set remain TODO.",
    "Year corrected to 1992 (was 'unknown' in the Tier-1 baseline).",
    "SHARED POLISH COMPOSER COHORT with [[reflextracker]] — surfaced 2026-07-17 by a composer-overlap connection scan over data/composers/*.json. Eight composers used BOTH this Polish editor and Reflex-Tracker (the 1995 German tool by kb/Quiss/Zorc of Reflex): Bax, Data, JFK, Leming, Praiser, Randy, V-12 and Warlock — all Polish. These are also among Reflex-Tracker's OWN heaviest users (Warlock, Data, JFK rank at its top), so the German-authored tool was substantially adopted by the same Polish scene that ran the native Hardtrack Composer — a cross-scene shared-USERS relationship, NOT shared code (different coders, Longhair/Brush vs kb/Quiss/Zorc; neither disassembled here). No `shares_routine_with` edge asserted; navigational link only."
  ],
  "sources": [
    "CSDb Hardtrack Composer V1.0 (release/credits/year): https://csdb.dk/release/?id=74928",
    "CSDb 'V1.0+ [6 speed]' variant: https://csdb.dk/release/?id=36647",
    "SIDId sidid.nfo (tag + Longhair player-code attribution): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Polish manual/community: https://www.c64scene.pl/viewtopic.php?t=584",
    "Local dataset: 1,126 files tagged HardTrack_Composer, 45 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Hardtrack Composer is a native C64 music editor from **1992** by the Polish
sceners **Longhair (Miłosz Ignatowski)** and **Brush**, released under Elysium.
It's a concentrated, Polish-scene-heavy tool — **1,126 files but only 45
composers** — rather than a broadly adopted editor, and its player code is
undocumented outside CSDb credits.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **co-authorship nuance** (Longhair =
player code, Brush co-coded; SIDId lists only Longhair); the **Polish-scene
concentration** (45 composers is the signal); and a **6x-speed variant** whose
title is the only multispeed hint. Everything about the replay is `TODO`.

## Disassembly notes

**Done (2026-07-20).** Disassembled two independent HVSC rips (`MUSICIANS/B/Bzyk/2_Unlimited.sid` and `Absolute.sid`) with `SIDdecompiler.exe`, reassembled with `64tass`, and trace-diffed with `sidm2-siddump`. The player code reconstructs exactly; all byte-diff divergence is in runtime-overwritten subtune/working tables. Remaining `TODO`s are the `data_format` fields and the exact semantics of the 26-byte subtune parameter table. The Polish-language manual may still help with the latter.

## Verification

**RECONSTRUCTION VERIFIED (2026-07-20) — `status: verified`.** Disassembled two independent HVSC rips by the same composer with `SIDdecompiler.exe`, reassembled with `64tass`, byte-diffed against the real PSID payload, traced both the original `.sid` and the reassembled `.prg` with `sidm2-siddump`, and confirmed the register-write traces match exactly after restoring the runtime-overwritten data tables.

- **Files used**:
  - `MUSICIANS/B/Bzyk/2_Unlimited.sid` (load $1000, init $1000, play $1003, subtunes 1, payload 3146 bytes).
  - `MUSICIANS/B/Bzyk/Absolute.sid` (load $1000, init $1000, play $1003, subtunes 1, payload 4252 bytes).
- **Byte-diff result (raw SIDdecompiler/64tass reassembly)**:
  - `2_Unlimited.sid`: **98.79%** match (3108/3146 bytes), 38 differing bytes in `$1107-$111f`, `$11fb`, `$166f`, `$1754-$179a`, and two unreferenced trailing bytes `$1c48-$1c49`.
  - `Absolute.sid`: **98.12%** match (4172/4252 bytes), 80 differing bytes in `$1007-$101f`, `$10fb`, `$154c`, `$156f`, `$1572`, `$1648-$1658`, `$166d-$1675`, `$1679-$167a`, `$167c-$167f`, `$1682`, `$168e-$168f`, `$169d-$169e`, `$16a7-$16a8`, `$16aa`, `$16ac-$16ae`, `$16b6-$16b7`, `$16bc-$16c2`.
- **Classification of diffs**: Every diverging address falls in a `-v2` memory-map write-touched (`+`/`w`/`_`) region, i.e. runtime-overwritten subtune-parameter / working-storage tables, not code. Patching those addresses back to the original file bytes makes both reconstructions trace-exact.
- **Trace-diff result**: `2_Unlimited.sid` is an **exact register-write match** over 50 traced frames (211 writes); `Absolute.sid` is an **exact register-write match** over 20 traced frames (152 writes). `diff_traces` on the patched `2_Unlimited` reconstruction returned `match: true`.
- **New confirmed memory-map facts**: load address `$1000`; zero-page pointer pair `$FB-$FC`; module start is `JMP init` / `JMP play`; real init/play offsets are file-dependent because the metadata text block length varies, but play is consistently init+$78. The player code itself is byte-identical across the two files; only the per-file data tables differ.
- **Honest scope / known gap**: `data_format` (order list / patterns / instruments / wavetable / pulsetable / filtertable) and the exact meaning of the 26-byte subtune table remain `TODO`. The `speed` field is confirmed single-speed for standard V1.0 files; the 'V1.0+ [6 speed]' variant was not examined. Only two files by one composer were tested — the methodology is confirmed, but a third file by a different composer would further strengthen the conclusion.
- Exact byte-level patch tables for both files (durable, not scratchpad): `knowledge/players/reconstructions/hardtrack-composer.md`.

## Sources

See the `sources` array — CSDb releases, SIDId, and the Polish community
manual thread.
