# Dave Lee (Virgin Games "Falcon" driver)

```json
{
  "id": "dave-lee",
  "name": "Dave Lee (Virgin Games \"Falcon\" driver)",
  "aliases": ["Dave_Lee"],
  "authors": ["Dave Lee"],
  "released": "1984-1987 (Virgin Games)",
  "status": "in-progress",
  "platform": "British composer Dave Lee's playroutine, used across Virgin Games's linked 'Falcon' shooter lineage. Player-ID-fingerprinted across 7 files: 4 by Dave Lee himself, 2 by 'Steve Lee' (the team's coder — no confirmed family relationship to Dave, despite the shared surname), 1 by Martin Wheeler (a fellow Virgin Games composer on the same lineage, plausibly reusing this same driver — see quirks).",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Erebus, 1986, Virgin Games — see quirks for a publisher correction): load $9fd (init $9fd, play $a00).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $9fd.", "play": "Sample trace: $a00 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 4 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "PUBLISHER CORRECTION: Erebus (the traced file) is confirmed 1986, VIRGIN GAMES — every source checked (Lemon64, general web search) consistently gives Virgin Games, NOT 'Grandslam/Martech' (a wrong assumption baked into the initial research brief, caught and corrected here; possibly a mix-up with a different game or an unfound later budget re-release — flagged as unresolved rather than asserted).",
    "THE VIRGIN GAMES 'FALCON' TEAM, CONFIRMED across a linked run of mid-1980s titles, same coder (Steve Lee) throughout but different composers per title: Hideous Bill & the Gi-Gants (1983, Steve Lee coder), Falcon Patrol II (1984, Steve Lee coder/designer, Dave Lee music), Erebus (1986, Steve Lee coder, Martin Wheeler graphics, Dave Lee music), Falcon: The Renegade Lord (1987, Steve Lee coder, Martin Wheeler MUSIC this time, not Dave Lee).",
    "PLAUSIBLE EXPLANATION FOR THE MARTIN WHEELER OUTLIER FILE: Falcon: The Renegade Lord and Falcon Patrol II are both entries in the same Virgin 'Falcon' shooter lineage, same coder both times, but the composer changed from Dave Lee to Martin Wheeler between the two. This plausibly explains why Wheeler's Falcon-The_Renegade_Lord file carries the 'Dave_Lee' player tag: it likely reuses the SAME music-driver/routine established on the earlier Falcon-series titles, rather than being a naming coincidence — a real, sourced continuity across a change in composer, though not independently confirmed via disassembly.",
    "STEVE LEE, CONFIRMED CODER+MUSICIAN (CSDb scener id=17214, dual role, UK): coded the whole 'Falcon' lineage and also composed on his own titles (Air Raid 1985, Beirut '84 1983, Hideous Bill 1983) — a genuinely separate figure from Dave Lee, not a shared identity.",
    "NO EVIDENCE OF A FAMILY RELATIONSHIP between Dave Lee and Steve Lee despite the shared surname — explicitly checked and found NOTHING supporting or refuting this; do not assert 'possibly related' without a citation. Treated here as coincidental surname sharing unless proven otherwise.",
    "NO CSDb SCENER PAGE located for either Dave Lee or Martin Wheeler (CSDb's coverage skews toward the demoscene, not 1980s commercial-only composers) — consistent with a thin footprint for both, not a research gap.",
    "Not confirmed in SIDId (no entry for this tag — so no independent confirmation of driver authorship beyond the tag itself). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (bare entries for Lee, Dave / Lee, Steve / Wheeler, Martin): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Falcon Patrol II (Steve Lee coder/designer, Dave Lee music): https://www.lemon64.com/game/falcon-patrol-2",
    "Wikipedia — Falcon Patrol II (corroborates Steve Lee designer/coder, Virgin Games): https://en.wikipedia.org/wiki/Falcon_Patrol_II",
    "Lemon64 — Erebus (Steve Lee coder, Martin Wheeler graphics, Dave Lee music, Virgin Games 1986): https://www.lemon64.com/game/erebus",
    "Lemon64 — Falcon: The Renegade Lord (Steve Lee coder, Martin Wheeler music, Virgin Games/ItalVideo 1987): https://www.lemon64.com/game/falcon-the-renegade-lord",
    "CSDb scener — Steve Lee (id=17214, Coder+Musician, UK): https://csdb.dk/scener/?id=17214",
    "computinghistory.org.uk — Hideous Bill & the Gi-Gants (1983, Steve Lee coder): https://www.computinghistory.org.uk/cgi/archive.pl?type=Games&author=Steve+Lee,+Dave+Lee",
    "Local dataset: 7 files tagged Dave_Lee, 3 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Dave_Lee` tag is British composer Dave Lee's playroutine, used across
Virgin Games's linked 'Falcon' shooter lineage in the mid-1980s. Player-
ID-fingerprinted across 7 files, split between Dave Lee, his frequent
coder collaborator Steve Lee (no confirmed relation despite the shared
surname), and fellow composer Martin Wheeler, who plausibly inherited the
same driver on a later title in the same series.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **corrected publisher
attribution** for Erebus (Virgin Games, not the initially assumed
Grandslam/Martech); the **Virgin 'Falcon' team lineage**, confirmed across
four linked titles with a consistent coder but changing composers; and an
explicitly **unconfirmed family-relationship question** between the two
Lees, left open rather than assumed.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Dave_Lee`-tagged `.sid` +
trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Dave_Lee` `.sid` (Erebus): load `$9fd`, init `$9fd`,
play `$a00`, **94 register writes / 50 frames** (4 filter writes).
Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (3 pages),
Wikipedia, CSDb, and computinghistory.org.uk.
