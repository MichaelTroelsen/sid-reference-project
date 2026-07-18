# DMC (Demo Music Creator)

```json
{
  "id": "dmc",
  "name": "DMC (Demo Music Creator)",
  "aliases": ["DMC", "DMC_V4.x", "DMC_V5.x", "DMC_V6.x", "Graffity/Brian", "Demo Music Creator", "Demo Music Creator System"],
  "authors": ["Brian (Graffity)"],
  "released": "1991 (V1.2 Feb 1991; V4.0 Sep 1991)",
  "status": "in-progress",
  "platform": "Native C64 tracker/editor ('ProTracker for the C64'). Closed classic tool; V5.0 was later placed in the public domain by the author.",
  "csdb_release": 2596,

  "memory": {
    "load_address": "$1000 — tunes are relocated/packed to $1000 (V4/V7 have an integrated packer; V5 has a separate packer).",
    "zero_page": "TODO: not documented publicly",
    "layout": "TODO: orderlist / pattern / instrument / table addresses undocumented online"
  },
  "entry": {
    "init": "$1000 (init at load) — LOCALLY CONFIRMED on a real HVSC DMC file.",
    "play": "$1003 (once per frame) — LOCALLY CONFIRMED: a real HVSC DMC_V4.x file traced with load=$1000, init=$1000, play=$1003, 369 register writes/50 frames. The classic $1000/$1003 packed convention (per-file, but standard for DMC exports)."
  },
  "speed": "1x IRQ-driven (standard). Variant builds: V5.Z is a 6x-speed build; the unreleased V6.0 was a low-rastertime (7-8 raster lines) player. Supports up to 7 sub-tunes (V5.0+).",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not documented publicly",
    "commands": {}
  },

  "edges": {
    "derives_from": ["gmc"],
    "successor_of": ["gmc"],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The single most-used player in the collection without a card (10,491 files across 365 composers). Full name 'Demo Music Creator System' (CSDb release titles). Author is the handle 'Brian' of the Hungarian group Graffity (also seen as 'Baliszoft'). SIDId gives the real name 'Balázs Farkas' — recorded but NOT independently confirmed by other sources; treat the legal name as unverified.",
    "LINEAGE: DMC is the improved successor to GMC (Game Music Creator), the same author's earlier tool (now carded as [[gmc]]) — wired here as derives_from / successor_of gmc. A CSDb comment on the GMC release even says 'they should have called this DMC V1.0'.",
    "Uses the modern 'testbit' hard-restart technique (a shared TECHNIQUE with JCH NewPlayer, not shared code) — noted here, not asserted as an edge.",
    "Version tangle (all one lineage, but confusingly numbered): V2.1, V4.0, V5.0/5.0+ (Creamd/C64.SK community build), V5.1/5.4, V5.Z (6x speed), V7.0/7.1beta (Unreal — actually a modified V4). V6.0 EXISTS but was never publicly released (editor by Syndrom/TIA, player by Brian). A separate player 'SYNC' is sometimes mislabeled 'DMC V6'.",
    "Runtime data format is genuinely undocumented online — fill by disassembly (via the sidm2-siddump / mcp-c64 loop), not by guessing."
  ],
  "sources": [
    "CSDb: DMC V4.0 https://csdb.dk/release/?id=2596 ; DMC V1.2 https://csdb.dk/release/?id=2598 ; Graffity group https://csdb.dk/group/?id=193 (authorship, versions, dates)",
    "The New Dimension 'Music Scene': http://tnd64.unikat.sk/music_scene.html (GMC→DMC lineage, packing to $1000, version overview; V5.0 public-domain note)",
    "Lemon64 'DMC 6' thread: https://www.lemon64.com/forum/viewtopic.php?t=24476 (author statements on V6/V7, rastertime)",
    "Codebase64 SID programming (testbit hard-restart technique): https://codebase64.net/doku.php?id=base:sid_programming",
    "sidid:DMC (author 'Balázs Farkas (Brian)', 1991, CSDb 2598)",
    "Local dataset: 10,491 files tagged DMC/DMC_V4.x/V5.x/V6.x (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

DMC ("Demo Music Creator System") is a native C64 music editor by the handle
**Brian** of the Hungarian group **Graffity**, first released ~1991 and the
improved successor to the same author's **GMC (Game Music Creator)**. It is by
a wide margin the most-used player in this collection that lacks a card —
**10,491 files across 365 composers** — and was a staple of the demoscene
(often described as "ProTracker for the C64"). It went through a confusing
version history (V4/V5/V7 all in circulation, an unreleased low-rastertime V6),
and V5.0 was eventually placed in the public domain.

## Quirks & gotchas

See the `quirks` array. Load-bearing: **the version numbering is a trap** (V7 is
a modified V4; V6 was never released; "SYNC" is a different player mislabeled
DMC V6); the **real-name attribution is unverified** (only the handles Brian /
Baliszoft are firmly sourced); and it **derives from GMC** by the same author
(a lineage edge to wire once GMC is carded). It shares the *testbit hard-restart
technique* with JCH NewPlayer — a technique, not shared code.

## Disassembly notes

None done here. The runtime format (ZP, orderlist/pattern/instrument/table
layout, effect set) is undocumented online. The one firm hook is the packing
convention — tunes relocate to **$1000**, init at load, play once per frame from
IRQ — so a disassembly of a representative DMC `.sid` (init/play from its PSID
header) traced through `sidm2-siddump` is the route to real facts. Given the
file count, DMC is the highest-value RE target among the uncarded players.

## Verification

**Entry points + playback LOCALLY CONFIRMED (2026-07-13) — `status:
in-progress`.** Traced a real HVSC DMC_V4.x `.sid` with `sidm2-sid-trace`:
load `$1000`, init `$1000`, play `$1003`, **369 register writes / 50 frames** —
confirming the `$1000`/`$1003` packed convention and that it plays. The
data-format internals (ZP, tables, effect encoding) are still undocumented and
`TODO`, so in-progress rather than verified.

**Full disassemble/reassemble/byte-diff/trace-diff pass (2026-07-18) — status
remains `in-progress`, not raised to `verified`.** Used `SIDdecompiler.exe`
(`-a4096 -z -d -c -v2/-v1`, i.e. decimal for `$1000`) + `64tass` on two
independent real HVSC DMC_V4.x files (the highest-usage variant, 5,337 of the
10,491 total DMC-family files):

- **File 1**: `MUSICIANS/C/CHR_142/Autocomposer_for_ZX81.sid` (load/init
  `$1000`, play `$1003`, payload 3,095 bytes). Reassembled to exactly 3,095
  bytes at `$1000-$1C16`. **Byte-diff: 98.45% (48/3095 bytes differ)**, all
  falling in two address ranges: `$100F-$1016` (8 bytes) and
  `$1718-$1793` (40 bytes, scattered). Both ranges are marked `+`
  (write-touched at runtime) in the decompiler's own `-v2` memory-touch map,
  the same pattern as `future-composer`'s entry-10 finding. **Trace-diff:
  50-frame register-write trace via `sidm2-sid-trace.exe` (init `$1000`,
  play `$1003`) is EXACT — 369/369 writes identical, byte-for-byte** (only
  the tool's echoed input filename differs between the two log files).
- **File 2** (per this project's own gotcha 16 — never trust one file's
  trace-exact result as representative): `MUSICIANS/A/Abee/After_Promises.sid`
  (load/init `$1000`, play `$1003`, payload 4,084 bytes). Reassembled to
  exactly 4,084 bytes at `$1000-$1FF3`. **Byte-diff: 98.16% (75/4084 bytes
  differ)**, in the SAME two address ranges as file 1 (`$1012-$1017` and
  `$1719-$17B5`) — strong evidence this is a consistent player-internal
  table, not file-specific noise. **Trace-diff: 327 total register writes
  over 50 frames; 326/327 identical, but ONE write pair genuinely diverges**:
  frame 0, `osc3_freq_lo`/`osc3_freq_hi` written as `$FA/$A8` in the real
  file vs `$31/$1C` in the reassembly (99.69% trace-exact, not 100%).
  Traced the root cause into the disassembly: `$1012-$1017` is a 6-byte
  table (`l1012: .byte $0c,$30,$39` / `l1015: .byte $07,$04,$02` in the
  reassembled source) that is BOTH read (`ldy l1012,X` / `lda l1015,X` /
  `adc l1015,X`) and written (`sta l1012,X` / `sta l1015,X`) at runtime —
  exactly the entry-16 cheesecutter failure mode: the decompiler's default
  `-t` trace window baked in a post-execution (drifted) snapshot of this
  table rather than its true cold-start constants, and file 2's play routine
  happens to read the wrong byte from it during voice-3 setup where file 1's
  does not.
  
  **Conclusion: this is a genuine, localized, well-characterized ~98.2-98.5%
  byte match and ~99.7-100% trace match, not a full match** — the gap is
  isolated to one small startup-constant table at `$1012-$1017` (and its
  associated working-storage region `$1719-$17B5`) that the decompiler
  cannot currently recover the pristine initial value of. `status` stays
  `in-progress`, per this project's rule against rounding a near-match up to
  `verified`. Both scratchpad builds (`dmc.asm`/`dmc_reasm.prg` from file 1,
  `dmc2.asm`/`dmc2_reasm.prg` from file 2) plus both original/reassembled
  trace logs are on disk if a future pass wants to hand-patch that one table
  from the pristine `.sid` payload bytes and re-verify — the fix is
  mechanical (substitute the 8 correct init-time bytes at `$100F-$1016`
  into the `.byte` directives) but wasn't done here to keep this pass to
  read-only reconstruction, not a hand-edited hybrid.

## Sources

See the `sources` array — primarily CSDb (Graffity group + the V4.0/V1.2
releases), TND64's Music Scene history, the Lemon64 author thread, and the
cached SIDId entry.
