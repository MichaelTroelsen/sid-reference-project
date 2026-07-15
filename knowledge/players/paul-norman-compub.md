# Paul Norman's Computerized Publishing Co. (demo tunes)

```json
{
  "id": "paul-norman-compub",
  "name": "Paul Norman's Computerized Publishing Co. (demo tunes)",
  "aliases": ["Paul_Norman/ComPub"],
  "authors": ["Paul Norman"],
  "released": "1986 (Cosmi Corporation)",
  "status": "in-progress",
  "platform": "A genuinely distinct, later tag from already-carded [[paul-norman]]'s own main game-scoring driver — the bundled demo/showcase tunes for 'Paul Norman's Computerized Publishing Co.,' a real, commercially-boxed C64 desktop-publishing/print utility (per its own Commodore Software manual, creates custom print characters/text combined with graphics for newsletters, banners, letterheads, cards, labels), copyright 1986 Cosmi per the SID files' own embedded PSID header — NOT the same product or necessarily the same driver code as his games. All 3 tunes are classical/patriotic covers, not original compositions. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": 48192,

  "memory": { "load_address": "Sample HVSC file traced (music A, an arrangement of Tchaikovsky's 1812 Overture): load $c4e0 (init $c8e8, play $c800).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $c8e8.", "play": "Sample trace: $c800 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "'PAUL NORMAN'S COMPUTERIZED PUBLISHING CO.' IS A REAL, COMMERCIALLY-BOXED PRODUCT — CONFIRMED, not just a tune-title guess: a genuine C64 desktop-publishing/print utility, boxed copies confirmed on sale (eBay), with its own Commodore Software manual describing it as creating 'regular or custom print characters and text combined with graphics or fonts for newsletters, banners, letterheads, cards, labels, or as part of a screen display.' A distinct product from any game, not a music-composition tool itself — these 3 files are its bundled DEMO/SHOWCASE tunes.",
    "PUBLISHER AND YEAR CONFIRMED VIA PRIMARY EMBEDDED METADATA, refining what the existing [[paul-norman]] card previously only sourced from a later crack date: this project's own local DeepSID dump (`hvsc_files.sql`) shows all 3 files' PSID header copyright field reads verbatim **'1986 Cosmi'** — i.e. the SAME publisher as Norman's games, released under his own personal name as the product's brand, one year BEFORE the CSDb-catalogued crack date of 23 September 1987 (a normal lag between original release and crack circulation, not a contradiction).",
    "ALL THREE TUNES ARE CLASSICAL/PATRIOTIC COVERS, NOT ORIGINAL COMPOSITIONS — a genuinely new finding not previously documented anywhere in this KB: 'music A' = Tchaikovsky's 1812 Overture (the traced file), 'music B' = Sousa's The Stars and Stripes Forever, 'music C' = Bagley's National Emblem — all public-domain classical/patriotic marches, sourced from this project's own DeepSID dump title/STIL data (`data/composers/paul-norman.json`). Fitting demo/showcase music for a print-shop utility rather than game scoring.",
    "WHETHER THIS IS THE SAME DRIVER CODE AS NORMAN'S MAIN GAME-SCORING ROUTINE (already documented on [[paul-norman]]'s own card) IS EXPLICITLY LEFT UNCONFIRMED, not asserted either way: the trace's write-per-frame RATIO (55 writes/50 frames ≈ 1.10/frame) is structurally close to that card's own Slinky trace (328 writes/300 frames ≈ 1.09/frame) — both filter-free — consistent with the same hand-coded, chords-across-three-voices compositional habit already documented for Norman. But different load/init/play addresses alone don't prove a different routine (relocatable code varies per build), and no disassembly exists for either tag to settle this definitively. [[paul-norman]]'s own card's prior 'not the same routine' framing was itself an assertion, not a disassembly-backed fact — both cards now flag this honestly as genuinely open.",
    "Not confirmed in SIDId (no entry for this tag, matching the sibling card's own gap — also checked directly in `deepsid_dl/sidid.nfo`, no entry there either). Direct, confirmed relationship to [[paul-norman]] (same composer, later/separate product — cross-referenced in both directions, that card updated in this same batch). No other known relationship found to any composer/tool already in this KB (checked against the same extensive roster as the sibling card — none found)."
  ],
  "sources": [
    "Commodore Software archive — Computerized Publishing Co. manual: https://commodore.software/downloads/download/211-application-manuals/13428-computerized-publishing",
    "eBay listing — boxed copy (confirms commercial retail packaging): https://www.ebay.com/itm/Commodore-64-Paul-Norman-s-Computerized-Publishing-Company-Software-In-Box-/133292894142",
    "CSDb release id=48192 (crack, 23 September 1987, Radwar/The Light Circle): https://csdb.dk/release/?id=48192",
    "Local dataset: deepsid_dl/DeepSID_Database/hvsc_files.sql (PSID copyright field '1986 Cosmi' for all 3 files, rows ~33690-33692)",
    "Local dataset: data/composers/paul-norman.json (DeepSID dump — real titles: 1812 Overture, Stars and Stripes Forever, National Emblem)",
    "Existing KB card: knowledge/players/paul-norman.md (the earlier, main game-scoring tag, updated in this same batch)",
    "Local dataset: 3 files tagged Paul_Norman/ComPub, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Paul_Norman/ComPub` tag is the bundled demo/showcase music for
'Paul Norman's Computerized Publishing Co.,' a real, commercially-boxed
1986 Cosmi desktop-publishing utility — a distinct product from
already-carded [[paul-norman]]'s own game-scoring career. All 3 tunes
are classical/patriotic covers. Player-ID-fingerprinted across 3 files,
all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed real
product identity and publisher**, sourced directly from the SID files'
own embedded PSID metadata rather than only the later crack date. Also
notable: a **genuinely new finding**, all 3 tunes identified as classical/
patriotic covers, not original compositions — previously undocumented
anywhere in this KB.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Paul_Norman/ComPub`-tagged
`.sid` + trace — which could also finally settle whether this shares code
with [[paul-norman]]'s own main game-scoring driver.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Paul_Norman/ComPub` `.sid` (music A, an arrangement
of the 1812 Overture): load `$c4e0`, init `$c8e8`, play `$c800`, **55
register writes / 50 frames** (0 filter writes). Internals undocumented;
memory map/format/effects are `TODO`.

## Sources

See the `sources` array — Commodore Software archive, eBay, CSDb, local
dataset (2 files), and the related paul-norman card.
