# Jason Briggs (ECP driver)

```json
{
  "id": "jason-briggs",
  "name": "Jason Briggs (ECP driver)",
  "aliases": ["Jason_Briggs"],
  "authors": ["Jason J. Briggs"],
  "released": "1987-1989 (ECP era)",
  "status": "in-progress",
  "platform": "Australian one-man-band developer Jason J. Briggs's own driver — he programmed, drew the graphics for, AND composed the music on all 5 of his confirmed C64 games, all published by ECP (Entertainment & Computer Products Pty. Ltd., a Gold Coast, Australia publisher/distributor). No SIDId entry exists for this tag, consistent with a self-written, never-catalogued routine. Player-ID-fingerprinted across 5 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Bert the Bug Bites Back, 1987, ECP): load $3b80 (init $4081, play $3ffa).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $4081.", "play": "Sample trace: $3ffa (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED SOLO ONE-MAN-BAND DEVELOPER: on ALL 5 of his C64 games (Bert the Bug Bites Back 1987, Bojo, Electro World, Poga, Tiger Tank — all 1989), Lemon64's structured per-game credit pages consistently list Jason J. Briggs as Programmer, Graphics, AND Musician/Composer simultaneously — a genuinely rare pattern in this KB, where composers usually rely on a separate coder. Strongly supports a self-written driver, consistent with the total absence of a SIDId entry for this tag.",
    "ALL 5 GAMES PUBLISHED BY THE SAME SMALL PUBLISHER, ECP (Entertainment & Computer Products Pty. Ltd.), an Australian (Gold Coast) budget-software house active in the late 1980s — a tight, single-publisher output pattern. A Lemon64 forum comment (informal, not the structured database) independently corroborates his reputation as ECP's in-house one-man-band, sarcastically addressing him directly: 'I'm looking at you, Mr Jason J Briggs!'",
    "HVSC HAS NO COUNTRY/GROUP DATA AT ALL for this composer (a bare 'Briggs, Jason' entry) — but this project's own cached DeepSID profile separately carries `full_name: 'Jason J. Briggs'`, `affiliation: 'ECP'`, confirming the fuller identity even though HVSC's own record is sparse.",
    "NO CSDb SCENER PROFILE EXISTS — no resolvable CSDb scener ID, no demoscene group membership found. Consistent with a purely commercial (non-scene) Australian budget-developer profile, the same absence pattern already established for several purely-commercial composers already carded in this KB.",
    "'POGA' (1989) IS A CONFIRMED COVER: its music is an arrangement of Scott Joplin's 'The Entertainer' — a genuine, sourced detail about at least one of his 5 tunes' origin, though the traced sample file (Bert the Bug Bites Back) is an original composition, not this cover.",
    "MINOR, UNRESOLVED YEAR DISCREPANCIES exist across sources for Bojo/Bert (1987 vs 1988/1989 depending on source) — not resolved to a single authoritative date, flagged rather than guessed at. An AI-search-summary claim about an 'ECP Red Ribbon Game Pak' bundling all 4 games could NOT be corroborated in the actual source text and is explicitly NOT included as fact.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB — his entire documented career is one small Australian commercial publisher with zero overlap found against the UK/US/European composers already carded here (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Briggs, Jason', bare entry, no country/group): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Bert the Bug Bites Back (full credits): https://www.lemon64.com/game/bert-the-bug-bites-back",
    "Internet Archive — Bert the Bug Bites Back (title embeds '1987, Jason Briggs'): https://archive.org/details/Bert_the_Bug_Bites_Back_1987_Jason_Briggs_cr_Contex",
    "Lemon64 — Bojo: https://www.lemon64.com/game/bojo",
    "Lemon64 — Electro World: https://www.lemon64.com/game/electro-world",
    "Lemon64 — Poga (music: Scott Joplin 'The Entertainer' arrangement): https://www.lemon64.com/game/poga",
    "Lemon64 — Tiger Tank: https://www.lemon64.com/game/tiger-tank",
    "MobyGames — Bert the Bug Bites Back: https://www.mobygames.com/game/36547/bert-the-bug-bites-back/",
    "MobyGames — Tiger Tank: https://www.mobygames.com/game/34552/tiger-tank/",
    "CSDb webservice (project's own API, composer='Jason J. Briggs', group='ECP'): https://csdb.dk/webservice/?type=sid",
    "Local dataset: 5 files tagged Jason_Briggs, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Jason_Briggs` tag is Australian one-man-band developer Jason J.
Briggs's own driver — he programmed, drew graphics for, and composed the
music on all 5 of his confirmed C64 games, all published by the small
Gold Coast publisher ECP. Player-ID-fingerprinted across 5 files, all his
own, with no SIDId entry consistent with a self-written routine.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed solo
one-man-band pattern**: a rare case in this KB where the same person
coded, drew, and composed every single one of their credited titles,
directly supporting a self-written driver hypothesis rather than one
inferred from absence of contrary evidence alone.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Jason_Briggs`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Jason_Briggs` `.sid` (Bert the Bug Bites Back): load
`$3b80`, init `$4081`, play `$3ffa`, **40 register writes / 50 frames**
(0 filter writes). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (5 pages), Internet
Archive, MobyGames (2 pages), and the CSDb webservice.
