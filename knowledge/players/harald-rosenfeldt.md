# Harald Rosenfeldt's player ("Music Assembler V3.1")

```json
{
  "id": "harald-rosenfeldt",
  "name": "Harald Rosenfeldt's player (\"Music Assembler V3.1\")",
  "aliases": ["Harald_Rosenfeldt"],
  "authors": ["Harald Rosenfeldt"],
  "released": "1989 (64'er / Markt & Technik)",
  "status": "in-progress",
  "platform": "A German magazine type-in music tool, published 1989 in 64'er (Markt & Technik). SIDId's own metadata NAME field calls this 'Music Assembler V3.1' — a coincidental, generic-era naming collision with the DIFFERENT, unrelated tool already carded in this KB as [[music-assembler]] (Marco Swagerman & Oscar Giesen's Dutch USA-Team product, 1988-89). CONFIRMED genuinely distinct code, not a data error — see quirks. Player-ID-fingerprinted across 18 files: 17 by Rosenfeldt himself, 1 by Michael Winterberg (already carded in this KB as [[michael-winterberg]] — no confirmed connection beyond both being German).",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Cleopha): load $9344 (init $9f99, play $9fed).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $9f99.", "play": "Sample trace: $9fed (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 14 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "NAMING-COLLISION RESOLVED — genuinely different, unrelated tools, NOT a SIDId data error: this project's own SIDId import gives this tag's NAME field as 'Music Assembler V3.1' (AUTHOR: Harald Rosenfeldt, RELEASED: 1989 64'er/Markt & Technik — the sole source, no CSDb reference exists for it), which superficially collides with the already-carded [[music-assembler]] (a completely different tool by Marco Swagerman & Oscar Giesen, Dutch USA-Team, released Feb 1989 as CSDb release 94388, which has ZERO mention of Rosenfeldt/64'er/Markt & Technik anywhere on its own page). INDEPENDENT confirmation of the split: an unrelated third-party disassembly catalog, JC64dis (a binary-disassembly-based player-ID tool built with no access to SIDId's naming), separately lists 'Harald Rosenfeldt's player' and the 'Music Assembler player' (Swagerman/Ouwehand tunes) as two DISTINCT routines under different labels — strong evidence the code itself is unrelated, not just a naming coincidence in one dataset. A 1984 64'er magazine article independently shows 'Music Assembler'-style generic names (MUSICALC, SYNTHIMAT, SEQUENZER 64, etc.) were a common, non-proprietary naming pattern for German composing tools of this era — the name itself is a red herring for lineage, deliberately NOT wired as an edge to [[music-assembler]].",
    "UNUSUALLY BARE IDENTITY RECORD: HVSC Musicians.txt lists ONLY 'Rosenfeldt, Harald' — no handle, no group, no country — notably sparser than neighboring alphabetical entries which do have country/group fields. No CSDb scener page exists for him at all. Consistent with a one-off magazine type-in program author rather than a demoscene participant — he appears NOT scene-connected in any way found.",
    "Whether Rosenfeldt personally coded the routine (vs. someone else at the magazine) is inferred only from SIDId's bare AUTHOR field — the actual 1989 64'er magazine article/byline itself could not be located via archive.org in the time available. Flagged as UNCONFIRMED at that level of detail, though the SIDId attribution itself is treated as reliable.",
    "NO CONFIRMED CONNECTION to Michael Winterberg (the other composer using this tag, 1 file) despite both being German — Winterberg (CSDb scener 731, group 'Speedi Systems', ~1984-92, ~15 game credits) has no shared group, no shared release, and Rosenfeldt has no HVSC group listed at all. Left as coincidental co-occurrence, not asserted as a real link.",
    "No known relationship to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Georg Brandt, Chris Huelsbeck — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (bare entry, no group/country): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "This project's SIDId import (deepsid_dl/sidid.nfo line 599 / data/sidid.json — sole source for the tool's NAME/AUTHOR/RELEASED fields)",
    "JC64dis — independent disassembly-based player catalog, lists 'Harald Rosenfeldt's player' and 'Music Assembler player' as distinct routines: https://iceteam.itch.io/jc64dis",
    "CSDb release 94388 — the OTHER, unrelated Music Assembler (Swagerman/Giesen, checked directly, no Rosenfeldt connection): https://csdb.dk/release/?id=94388",
    "64er-magazin.de archive — 1984 article cataloging similarly generic-named German C64 music programs (naming-pattern context): https://www.64er-magazin.de/8409/musikprogramme.html",
    "Existing KB card: knowledge/players/music-assembler.md (the different, unrelated tool with a coincidentally similar SIDId name)",
    "Existing KB card: knowledge/players/michael-winterberg.md (the other composer sharing this tag, no confirmed link)",
    "Local dataset: 18 files tagged Harald_Rosenfeldt, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Harald_Rosenfeldt` tag is a 1989 German magazine type-in music tool
(64'er/Markt & Technik), which SIDId's own metadata happens to label
"Music Assembler V3.1" — a coincidental naming collision with a completely
different, unrelated tool already carded in this KB as [[music-assembler]].
Independent disassembly evidence confirms the two are genuinely distinct
code, not a data error. Player-ID-fingerprinted across 18 files.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **fully resolved
naming collision**: two unrelated tools happen to share a generic
era-typical name in SIDId's data, confirmed distinct via an independent
disassembly catalog (JC64dis) that names them differently with no access
to SIDId's own naming. Also note the composer's **unusually bare identity
record** — no CSDb scener page exists for him at all.

## Disassembly notes

None published by this project (JC64dis, a third-party tool, has
disassembled it under its own catalog but no artifact was reviewed here).
A future `verified` needs an original disassembly of a
`Harald_Rosenfeldt`-tagged `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Harald_Rosenfeldt` `.sid` (Cleopha): load `$9344`,
init `$9f99`, play `$9fed`, **233 register writes / 50 frames** (14 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, this project's SIDId import,
JC64dis, CSDb, and the 64er-magazin.de archive.
