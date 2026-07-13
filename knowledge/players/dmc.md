# DMC (Demo Music Creator)

```json
{
  "id": "dmc",
  "name": "DMC (Demo Music Creator)",
  "aliases": ["DMC", "DMC_V4.x", "DMC_V5.x", "DMC_V6.x", "Demo Music Creator", "Demo Music Creator System"],
  "authors": ["Brian (Graffity)"],
  "released": "1991 (V1.2 Feb 1991; V4.0 Sep 1991)",
  "status": "stub",
  "platform": "Native C64 tracker/editor ('ProTracker for the C64'). Closed classic tool; V5.0 was later placed in the public domain by the author.",
  "csdb_release": 2596,

  "memory": {
    "load_address": "$1000 — tunes are relocated/packed to $1000 (V4/V7 have an integrated packer; V5 has a separate packer).",
    "zero_page": "TODO: not documented publicly",
    "layout": "TODO: orderlist / pattern / instrument / table addresses undocumented online"
  },
  "entry": {
    "init": "$1000 (init at load; standard C64 convention)",
    "play": "Called once per frame from the IRQ. TODO: exact play address (per-file)."
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
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The single most-used player in the collection without a card (10,491 files across 365 composers). Full name 'Demo Music Creator System' (CSDb release titles). Author is the handle 'Brian' of the Hungarian group Graffity (also seen as 'Baliszoft'). SIDId gives the real name 'Balázs Farkas' — recorded but NOT independently confirmed by other sources; treat the legal name as unverified.",
    "LINEAGE: DMC is the improved successor to GMC (Game Music Creator), the same author's earlier tool (GMC has its own tag/files here — 'GMC/Superiors' — not yet carded). Not wired as a graph edge until GMC is carded.",
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

**Not verified — `status: stub`.** Identity, lineage, and version history are
web/CSDb-sourced (Tier 1+2 of the extraction template); every runtime field is
`TODO` because no public disassembly/memory map exists. The `$1000` load /
IRQ-play convention is the only runtime fact, and it's a general packing
convention, not a decoded format.

## Sources

See the `sources` array — primarily CSDb (Graffity group + the V4.0/V1.2
releases), TND64's Music Scene history, the Lemon64 author thread, and the
cached SIDId entry.
