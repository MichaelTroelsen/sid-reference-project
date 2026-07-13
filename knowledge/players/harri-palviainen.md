# Harri Palviainen (player routine)

```json
{
  "id": "harri-palviainen",
  "name": "Harri Palviainen (player routine)",
  "aliases": ["Harri_Palviainen"],
  "authors": ["Harri Palviainen"],
  "released": "1986 (Finnish 'Floppy Magazine 64' era)",
  "status": "in-progress",
  "platform": "A playroutine authored by Finnish hobbyist Harri Palviainen — sole credited programmer/graphics/music author of an unreleased 1986 C64 platformer, Race with the Devil — used entirely (all 14 files) by a different musician, Ere Lievonen, for a complete set of Finnish Christmas carol arrangements published the same year via the diskmag 'Floppy Magazine 64'. Same coder-writes/musician-uses shape as this KB's [[olav-morkrid]] and [[henning-andersen]] cards, though the code-identity link here is a working hypothesis (same publication venue, same year), NOT confirmed by disassembly.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Enkeli taivaan, 'Angel from Heaven'): load $7d70 (init $8013, play $80ff).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $8013.",
    "play": "Sample trace: $80ff (called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (light filter use observed — 3 filter writes in a comparatively quiet 27-write/50-frame sample, consistent with a slow carol tune)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HARRI PALVIAINEN HAS NO CSDb OR HVSC PROFILE AT ALL — confirmed by direct grep of the raw Musicians.txt (no 'Palviainen' or 'Harri' match; an earlier AI-search summary incorrectly conflated him with an unrelated 'Parviainen, Jani' entry — discarded as a hallucination, not included here) and a zero-result CSDb scener search. He IS independently documented as the sole credited Programmer, Graphics, AND Music/Sound author of Race with the Devil (1986, Protocol Productions Oy), an unreleased C64 platformer preview — a hobbyist one-off, not a demoscene fixture, which explains the absent CSDb/HVSC record.",
    "ERE LIEVONEN'S ENTIRE DOCUMENTED C64 OUTPUT IS 14 FINNISH CHRISTMAS CAROLS, all dated 1986, all published through the same outlet: 'Floppy Magazine 64' (a Finnish-language diskmag active 1985-1988). Titles are all recognizable Finnish Christmas standards (Enkeli taivaan, Joulun kellot/'Christmas bells', Kulkuset/'Jingle Bells', Sylvian joululaulu/'Sylvia's Christmas Carol', Varpunen jouluaamuna/'The Sparrow on Christmas Morning', Valkea joulu/'White Christmas', and 8 more) — a deliberate, complete carol-arrangement set for the magazine's December 1986 issue, not a random sampling.",
    "THE CONNECTION IS A WORKING HYPOTHESIS, NOT CONFIRMED: both Palviainen's game and Lievonen's carols surfaced via the same publication, same year (Floppy Magazine 64, 1986) — real and sourced, but no interview, shared-credit line, or CSDb co-membership was found actually linking the two people, and whether Race with the Devil's music routine is literally the same code as the 'Harri_Palviainen' tag on Lievonen's files (vs. independently similar) can only be settled by a disassembly/trace comparison, not by this research. Treat the coder/musician-pair analogy to [[olav-morkrid]]/[[henning-andersen]] as plausible, not established.",
    "A living Finnish harpsichordist named 'Ere Lievonen' (b. 1972, Oulu) surfaced in unrelated search results — his official biography never mentions computers or C64 work. Almost certainly a namesake, NOT the same person as this C64-era composer; explicitly not conflated here.",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Harri_Palviainen entry). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt (Lievonen entry confirmed at line 959, 'Lievonen, Ere - FINLAND'; Palviainen confirmed ABSENT via direct grep): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb search — Ere Lievonen (14 SID files, all 1986, all via Floppy Magazine): https://csdb.dk/search/?search=Lievonen",
    "CSDb SID — Enkeli taivaan (confirms local trace's load/init/play addresses and file path): https://csdb.dk/sid/?id=59282",
    "Lemon64 — Race with the Devil (Palviainen: Programmer, Graphics, Music/Sound): https://www.lemon64.com/games/details.php?ID=2063, https://www.lemon64.com/game/race-with-the-devil",
    "gamesthatwerent.com — Race with the Devil (unreleased preview, 'didn't seem to do any other games after that point'): https://www.gamesthatwerent.com/gtw64/race-with-the-devil/",
    "Floppy Magazine 64 archive (the shared publication venue): https://www.zimmers.net/anonftp/pub/cbm/c64/magazines/Floppy%20Magazine/index.html",
    "Local dataset: 14 files tagged Harri_Palviainen, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Harri_Palviainen` tag is a playroutine authored by Finnish hobbyist
programmer Harri Palviainen — otherwise known only as the sole
programmer/graphics/music credit on an unreleased 1986 platformer, Race
with the Devil — but used entirely (all 14 local files) by a different
musician, Ere Lievonen, for a complete set of Finnish Christmas carol
arrangements published the same year through the same diskmag. A working
hypothesis, not a confirmed collaboration.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: Palviainen has **no
CSDb/HVSC profile at all**, documented only via an unreleased game credit;
Lievonen's entire output is a **deliberate 14-carol Christmas set**; and the
Palviainen/Lievonen connection is **explicitly a hypothesis** (same
publication venue and year), not a disassembly-confirmed code link.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Harri_Palviainen`-tagged
`.sid` + trace — which would also be the only way to confirm or refute the
Palviainen/Lievonen code-identity hypothesis above.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Harri_Palviainen` `.sid` (Enkeli taivaan): load
`$7d70`, init `$8013`, play `$80ff`, **27 register writes / 50 frames**
(3 filter writes — comparatively light, consistent with a slow carol tune).
Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, Lemon64,
gamesthatwerent.com, and the Floppy Magazine 64 archive.
