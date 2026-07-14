# C64 Music Editor V1.0 (Michael Delaney)

```json
{
  "id": "michael-delaney",
  "name": "C64 Music Editor V1.0 (Michael Delaney)",
  "aliases": ["Michael_Delaney"],
  "authors": ["Michael Delaney"],
  "released": "1990 (music driver); 1992 (editor)",
  "status": "in-progress",
  "platform": "Native C64 music driver, written by English programmer Michael Delaney (alias 'AudioArts', runs 'Notable Developments') in Turbo Assembler, specifically FOR two named composers — Allister Brimble and Matthew Simmonds ('4-Mat') — around 1990; the editor front-end followed in 1992. A faster second-generation driver (1991) shipped in only one game. Delaney later ported the driver lineage to Game Boy Color (1999) and Game Boy Advance (2001), used by Brimble and other composers there too. Player-ID-fingerprinted across 14 files: 11 by Brimble, 3 by '4-Mat'.",
  "csdb_release": 138249,

  "memory": { "load_address": "Sample HVSC file traced (Captain Dynamo, composed by Brimble): load $0c00 (init $0c00, play $0c03).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $0c00.", "play": "Sample trace: $0c03 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 45 filter writes in an unusually dense 436-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CORRECTION TO AN INITIAL RESEARCH ASSUMPTION: '4-Mat' is Matthew Simmonds (English electronic musician/sound designer/game composer, active in the demoscene since ~1989-early '90s, groups Ate Bit/Orb, former Cosine — CSDb scener id=3913, rated 9.3/10 as musician, 9.6/10 as coder). He is NOT the unrelated CSDb scener 'Jason Brooke' (id=8136, a different, prolific UK C64 musician with 600+ credits) — the two share no overlap in groups or CSDb IDs. Wikipedia, CSDb, and VGMPF all independently agree on the Matthew Simmonds identity.",
    "SIDId's own comment field is directly corroborated by an independent biography (VGMPF): 'Around 1990, [Delaney] wrote the first music driver on the Commodore 64 for Allister Brimble and Matthew Simmonds (4-Mat) using Turbo Assembler' — this exactly matches the 11-Brimble/3-4-Mat split seen in this project's own tag data. A faster, more capable SECOND driver followed in 1991 but shipped in only one game ('Grell and Fella').",
    "THE DRIVER LINEAGE OUTLIVED THE C64: Delaney later ported it to Game Boy Color (1999, Z80) and Game Boy Advance (2001, ARM), both used by Brimble and other composers, noted for emulating C64 pulse waves on those later platforms — an unusually long-lived driver family for a C64-era tool.",
    "ALLISTER BRIMBLE: British game composer, joined Codemasters in 1988, confirmed credits including Captain Dynamo (1992, the traced file) and the Dizzy series (Treasure Island Dizzy, Fantasy World Dizzy, Spellbound Dizzy, Dizzy Prince of the Yolkfolk, 1989-91) — all matching this project's local HVSC folder. Went on to a long career into Amiga/console/PC (X-COM, Mortal Kombat, RollerCoaster Tycoon, Driver, Need for Speed: Underground).",
    "Michael Delaney has NO CSDb scener profile — he only appears as a release credit, consistent with being a professional games-industry programmer (b. 1 Jan 1974, Crowborough, East Sussex per VGMPF) rather than a demoscene participant.",
    "The traced sample's UNUSUALLY DENSE 436 writes / 50 frames has no external technical documentation explaining it — plausibly reflects the second, 'faster, more complex sounds' driver generation, or heavy filter-sweep design, but this is speculative and not confirmed by any source.",
    "Not confirmed in SIDId beyond the bare NAME/AUTHOR/RELEASED/comment fields already used above. No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "CSDb release 138249 (C64 Music Editor V1.0, credits, download links): https://csdb.dk/release/?id=138249",
    "VGMPF — Michael Delaney (biography, driver history, 1990/1991/1992 timeline, GBC/GBA ports): https://www.vgmpf.com/Wiki/index.php?title=Michael_Delaney",
    "Wikipedia — Allister Brimble (career, Codemasters, later console/PC work): https://en.wikipedia.org/wiki/Allister_Brimble",
    "Wikipedia — 4mat / Matthew Simmonds (identity, demoscene career): https://en.wikipedia.org/wiki/4mat",
    "CSDb scener — 4-Mat / Matthew Simmonds (id=3913, groups Ate Bit/Orb): https://csdb.dk/scener/?id=3913",
    "CSDb scener — Jason Brooke (id=8136, checked and confirmed UNRELATED to 4-Mat): https://csdb.dk/scener/?id=8136",
    "Local dataset: 14 files tagged Michael_Delaney, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Michael_Delaney` tag is a C64 music driver written by English
programmer Michael Delaney in 1990 specifically for two named composers,
Allister Brimble and Matthew Simmonds ('4-Mat') — an unusually well-
documented commission story, confirmed independently by a biography that
matches this project's own tag split exactly. The driver family later
lived on into Game Boy Color and Game Boy Advance ports.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **corrected identity**
for '4-Mat' (Matthew Simmonds, not an initially-assumed Jason Brooke); the
**confirmed 1990-for-two-composers commission story**, independently
matching the local tag split exactly; and the driver's **surprisingly
long life** beyond the C64, into GBC/GBA.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Michael_Delaney`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Michael_Delaney` `.sid` (Captain Dynamo, composed by
Brimble): load `$0c00`, init `$0c00`, play `$0c03`, **436 register writes
/ 50 frames** (45 filter writes) — an unusually dense trace. Internals
undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — CSDb (release + 2 scener profiles), VGMPF, and
Wikipedia (2 pages).
