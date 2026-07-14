# Ozzy Oldskool V1 (Ossi Aarnio)

```json
{
  "id": "ozzy-oldskool",
  "name": "Ozzy Oldskool V1 (Ossi Aarnio)",
  "aliases": ["Ozzy_Oldschool_V1"],
  "authors": ["Ossi Aarnio (Ozzy Oldskool)"],
  "released": "2002 (Upstars, 'Risperdal Dreams')",
  "status": "in-progress",
  "platform": "Finnish coder-musician Ossi Aarnio's ('Ozzy Oldskool', founder of group Upstars) own playroutine — confirmed load $A000, the FIRST of two structurally distinct versions in his output (a separate 'Ozzy_Oldschool_V2' tag, uncarded, uses load $1000 and was later shared with at least one other composer). V1 is exclusively self-used, all 7 files from a single 2002 release. Player-ID-fingerprinted across 7 files, all his own.",
  "csdb_release": 6496,

  "memory": { "load_address": "Confirmed via local DeepSID dump AND HVSC trace, consistent across all 7 files: $A000 (40960).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $a000.", "play": "Sample trace: $a003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 2 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY TRIPLE-CONFIRMED, no cross-player hallucination risk: HVSC Musicians.txt ('Ozzy Oldskool (Aarnio, Ossi) / Upstars - FINLAND'), CSDb scener id=4568 (real name Ossi Aarnio, alt handle 'Ozz', country Finland), and this project's own local DeepSID database dump (scener id=4568) all independently agree. CSDb functions: Coder, Fullscreen Graphician, Graphician, Logo Graphician, Musician, Organizer — a confirmed coder, not purely a musician, supporting genuine self-authorship of this routine. Founder of the Finnish group Upstars. NOT to be confused with the unrelated 'Ozzy Osbourne' string appearing elsewhere in this project's tag data.",
    "TWO STRUCTURALLY DISTINCT VERSIONS EXIST, confirmed directly from this project's own local DeepSID dump (not just SIDId): 'Ozzy_Oldschool_V1' (this card, 7 files, load $A000, all from the single 2002 release 'Risperdal Dreams', credited 'Ozzy Oldskool & yAmmer' — one track, 'part_3', instead credits '& Nothappy') versus a sibling tag 'Ozzy_Oldschool_V2' (4 files, load $1000 — a genuinely different memory layout, not just a version bump) spanning 2004-2012 releases, NOW SEPARATELY CARDED as [[ozzy-oldskool-v2]]. No V3 or higher tag exists in the local data.",
    "V2 (now its own card, [[ozzy-oldskool-v2]]) shows GENUINE CROSS-COMPOSER REUSE, unlike V1: 3 of its 4 files are by Aarnio himself, but the 4th ('Vertical Smiley', 2005, an Asymptote party demo intro) is credited to a DIFFERENT composer, Mikko Tanni ('Mordicus') — with CSDb separately confirming Ozzy Oldskool himself has a 'Code' credit on that same 2005 release, consistent with him having coded the player that Mordicus then used for his own tune. Per this project's own inferred-player heuristic (spread across composers = more likely a genuine reusable tool vs. a personal routine), V2 is the more 'real tool' of the two versions — V1 (this card) remained exclusively self-used.",
    "'RISPERDAL DREAMS' is a demo title referencing the real pharmaceutical Risperdal/risperidone (an antipsychotic medication) — noted here neutrally, without further interpretation.",
    "No source found describing the player routine's internals (memory map, effect commands, ZP usage) — nothing beyond tag/author/CSDb-release metadata exists anywhere searched.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Kris Hatlelid, Harri Palviainen, Ere Lievonen — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Ozzy Oldskool (Aarnio, Ossi) / Upstars - FINLAND'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener — Ossi Aarnio / Ozzy Oldskool (id=4568, functions incl. Coder, Upstars founder): https://csdb.dk/scener/?id=4568",
    "CSDb release 6496 — Risperdal Dreams (2002, Upstars, Code+Music+Graphics): https://csdb.dk/release/?id=6496",
    "This project's local DeepSID database dump (deepsid_dl/DeepSID_Database/hvsc_files.sql — authoritative source for the V1/V2 load-address split, verbatim rows)",
    "Local dataset: 7 files tagged Ozzy_Oldschool_V1, 1 composer (see knowledge/COVERAGE.md); a separate, uncarded 'Ozzy_Oldschool_V2' tag (4 files) exists in the same folder"
  ]
}
```

## Overview

The `Ozzy_Oldschool_V1` tag is Finnish coder-musician Ossi Aarnio's
('Ozzy Oldskool', Upstars founder) own playroutine — the first of two
structurally distinct versions in his output, this one used exclusively
by himself across a single 2002 release. Player-ID-fingerprinted across 7
files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **triple-confirmed
identity** across three independent sources; **two genuinely distinct
versions** (different load addresses, not just a version bump), confirmed
directly from this project's own local database; and V2's **real
cross-composer reuse** (a different musician used it for one tune) versus
V1's exclusive self-use — a clean signal for which version is the 'more
real tool'.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Ozzy_Oldschool_V1`-tagged
`.sid` + trace — and a future card for the uncarded 'Ozzy_Oldschool_V2'
sibling tag would be a natural follow-up.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Ozzy_Oldschool_V1` `.sid` (Risperdal Dreams end):
load `$a000`, init `$a000`, play `$a003`, **133 register writes / 50
frames** (2 filter writes). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, and this project's
local DeepSID database dump.
