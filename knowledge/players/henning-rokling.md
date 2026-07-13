# Henning Rokling (composer, Olav Mørkrid routine user)

```json
{
  "id": "henning-rokling",
  "name": "Henning Rokling (composer, Olav Mørkrid routine user)",
  "aliases": ["Tornado"],
  "authors": ["Henning Rokling"],
  "released": "~1988-1992 (Norwegian Panoramic Designs era)",
  "status": "in-progress",
  "platform": "NOT a distinct playroutine — this card is about the PERSON, Norwegian musician Henning Rokling, who is the heaviest user (31 of 39 files) of the [[olav-morkrid]] routine already carded in this KB. Included as its own card per project convention: a musician whose usage pattern and career are worth documenting separately from the coder who wrote the tool he used.",
  "csdb_release": null,

  "memory": {
    "load_address": "See [[olav-morkrid]] for the routine's own entry points (this card documents the composer, not the code).",
    "zero_page": "N/A — see olav-morkrid.md",
    "layout": "N/A — see olav-morkrid.md"
  },
  "entry": {
    "init": "Sample trace of a Rokling-composed, Olav_Moerkrid-tagged tune (20CC-Shit): init $0b5a.",
    "play": "Sample trace: play $0b5d (called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "N/A — see olav-morkrid.md", "patterns": "N/A", "instruments": "N/A",
    "wavetable": "N/A", "pulsetable": "N/A",
    "filtertable": "Filter-heavy in the sample traced (51 filter writes / 50 frames), consistent with the parent olav-morkrid card's own filter-heavy sample."
  },
  "effects": { "encoding": "N/A — see olav-morkrid.md", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": ["olav-morkrid"], "same_effect_encoding_as": [] },

  "quirks": [
    "Henning Rokling (handle 'Tornado', inactive since ~1989) — Norwegian musician, CSDb function ~82% Musician / 0% coder (per the existing olav-morkrid card's research). Group lineage CONFIRMED via both CSDb and Demozoo: The Shadows / The Golden Triangle / The Unreliable Rebels / Digital Delight → Panoramic Designs — the SAME Panoramic Designs lineage documented on the olav-morkrid card, corroborating the 'coder writes the routine (Mørkrid), musician bandmate uses it heavily (Rokling)' reading.",
    "POST-SCENE CAREER, CONFIRMED (Wikipedia): co-founder and Managing Director of Innerloop Studios (Oslo), founded May 1996 by ex-Funcom employees, merged with DiMaga Studios in 1997 (hence the Innerloop rename), closed 2003. This parallels — but is NOT confirmed to directly intersect — Olav Mørkrid's own path (Mørkrid co-founded Funcom in 1993, per separate research on that card). Read as 'same Norwegian demoscene-to-games-industry social circle,' not 'worked at the same company' — no primary source found placing Rokling and Mørkrid at Funcom together.",
    "His local HVSC folder (57 files total) is NOT exclusively the Olav_Moerkrid tag: besides the 31 Olav_Moerkrid-tagged files, ~5 use Digitalizer_V2.x (Mørkrid's SEPARATE, SIDId-catalogued editor — Antimon_Tune_1991, Oriental_Music, Reaction, Spaze_Duell, Strobe) and ~16 use FutureComposer_V1.0. So he used at least three different tools across his output — the Olav_Moerkrid personal routine is his most-used, but not his only one.",
    "'20CC-Shit.sid' TITLE IS UNEXPLAINED — NOT the same '20CC' as this KB's existing [[20cc]] card (that one is a Dutch group/RSID-player tool, '20th Century Composers', geographically and personally unrelated to Norwegian Rokling). What '20CC' refers to in this specific title was not resolved by research; do not assume a connection to the 20cc card.",
    "Claimed 1990s-2000s game credits (Daze Before Christmas, A Dinosaur's Tale, Winter Gold, NBA Hang Time, Joint Strike Fighter, I.G.I-2) come only from aggregated web-search snippets (MobyGames/GiantBomb both returned 403 during research) — UNVERIFIED against a primary source, flagged rather than asserted.",
    "No known relationship found to any other composer/tool in this KB besides the confirmed olav-morkrid link (checked Ben Daglish, Adam Gilmore, David Dunn, Mark Tait, Jeroen Koops, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Prosonix — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (raw line 1384: 'Rokling, Henning - NORWAY', no group/handle listed there): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener — Henning Rokling (id=16851, handle Tornado, groups Panoramic Designs/Digital Delight, bio notes Innerloop MD): https://csdb.dk/scener/?id=16851",
    "Demozoo — Henning Rokling (sceners/1257, fuller group list: Panoramic Designs, Digital Delight, The Golden Triangle, The Shadows, The Unreliable Rebels): https://demozoo.org/sceners/1257/",
    "Wikipedia — Innerloop Studios (founding, Funcom-alumni origin, Rokling as co-founder/MD, 1996-2003): https://en.wikipedia.org/wiki/Innerloop_Studios",
    "Existing KB card: knowledge/players/olav-morkrid.md (the routine he mostly used, same author's separate Digitalizer editor)",
    "Existing KB card: knowledge/players/20cc.md (unrelated Dutch tool — checked and ruled out as a connection for the '20CC-Shit' title)",
    "Local dataset: data/composers/henning-rokling.json — 57 files, 31 tagged Olav_Moerkrid, 5 Digitalizer_V2.x, 16 FutureComposer_V1.0, 1 unspecified (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Henning Rokling ('Tornado') is a Norwegian C64 musician and the heaviest
user (31 of 39 files) of the [[olav-morkrid]] routine already carded in
this KB. Unlike most cards here, this one documents a PERSON rather than a
distinct playroutine — Rokling and Olav Mørkrid were bandmates in the same
Panoramic Designs lineage (Mørkrid the coder, Rokling the musician who used
his tool most), and this card exists to capture Rokling's own career and
usage pattern without duplicating the routine's technical facts.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **confirmed Panoramic
Designs / Shadows lineage** shared with Mørkrid; his **post-scene Innerloop
Studios career** (Norwegian games industry, parallel to but not confirmed
overlapping with Mørkrid's Funcom path); that he used **at least three
different tools** (Olav_Moerkrid, Digitalizer_V2.x, FutureComposer_V1.0)
across his output, not just the one routine; and the **unexplained '20CC'
title** (confirmed unrelated to this KB's separate 20cc card).

## Disassembly notes

N/A for this card — see [[olav-morkrid]] for the routine's own (currently
undisassembled) technical details.

## Verification

**Playback confirmed via the parent routine (2026-07-13) — `status:
in-progress`.** Traced a real HVSC file composed by Rokling and tagged
`Olav_Moerkrid` (20CC-Shit): load `$0b5a`, init `$0b5a`, play `$0b5d`,
**419 register writes / 50 frames** (51 filter writes — filter-heavy,
consistent with the olav-morkrid card's own sample). This confirms Rokling's
usage of the routine plays correctly; it does not add new technical facts
about the routine itself.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, Demozoo, Wikipedia
(Innerloop Studios), and the existing [[olav-morkrid]] / [[20cc]] cards.
