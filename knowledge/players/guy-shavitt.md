# Guy Shavitt (player routine)

```json
{
  "id": "guy-shavitt",
  "name": "Guy Shavitt (player routine)",
  "aliases": ["Guy_Shavitt", "GS"],
  "authors": ["Guy Shavitt"],
  "released": "~1991+ (prolific 1991-2026)",
  "status": "in-progress",
  "platform": "Guy Shavitt's own in-house C64 replay routine (he was a coder + musician). Player-ID-fingerprinted across 90 files. No published spec.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game. Sample HVSC file traced: load $4000; that file's play routine sits at $1003 (below load — a separate low-memory play routine).",
    "zero_page": "TODO (no disassembly)",
    "layout": "TODO"
  },
  "entry": {
    "init": "Per-file (sample trace: $4000).",
    "play": "Per-file (sample trace: $1003)."
  },
  "speed": "TODO",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Guy Shavitt (handle 'GS'), ISRAELI scener, roles coder + musician; founder of Sidchip Scratchers (1987+), ex-member of The Force/Amok/Twisted Designs. HVSC: 'Shavitt, Guy / Sidchip Scratchers - ISRAEL'. Made a scene comeback at X'2014.",
    "PROLIFIC: his music appears in 500+ CSDb releases (1991-2026) — the main musician of Sidchip Scratchers — which explains the ~90 HVSC/DeepSID files.",
    "The Guy_Shavitt tag denotes his OWN hand-coded replay routine (curators' classification; a minority of his files use off-the-shelf players — CheeseCutter 2.x, Future Composer, RockMon 4, SoundMonitor — confirming Guy_Shavitt is a distinct in-house driver).",
    "NO SIDId entry (data/sidid.json has no match) — so the inferred-player spec-enrichment path won't fill it in automatically. Driver internals (memory map, ZP, format, effects, multispeed), signature techniques, and lineage all UNKNOWN — no disassembly/spec found. Real name/birth details also unconfirmed. TODO.",
    "Thin card by necessity: solid identity + confirmed playback, but the routine itself is essentially undocumented."
  ],
  "sources": [
    "CSDb scener 577 (bio, groups, comeback, 500+ releases): https://csdb.dk/scener/?id=577",
    "HVSC Musicians.txt (country + group): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "DeepSID Shavitt_Guy folder (the ~90 files + per-file player tags): https://deepsid.chordian.net/?file=%2FMUSICIANS%2FS%2FShavitt_Guy%2FTogether_Forever.sid",
    "Local dataset: 90 files tagged Guy_Shavitt (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Guy_Shavitt` tag is Israeli scener Guy Shavitt's own C64 replay routine —
he's a coder + musician, founder of Sidchip Scratchers, and one of the most
prolific SID musicians (500+ CSDb releases 1991-2026), which is why ~90 files
carry this tag. The routine itself is undocumented.

## Quirks & gotchas

See the `quirks` array — the load-bearing item is that this is his **own
in-house routine** (a minority of his files use off-the-shelf players,
confirming the distinction), that there's **no SIDId entry** (no auto-enrichment),
and that beyond identity + playback almost nothing about the routine is
documented.

## Disassembly notes

None; no spec/disassembly found. Disassemble a `Guy_Shavitt` SID to recover the
layout.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC Guy_Shavitt `.sid`: load `$4000`, play routine at `$1003`,
**315 register writes / 50 frames**. Identity is well-sourced; all driver
internals are `TODO`.

## Sources

See the `sources` array — CSDb scener 577, HVSC Musicians.txt, and the DeepSID
folder.
