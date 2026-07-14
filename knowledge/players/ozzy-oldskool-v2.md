# Ozzy Oldskool V2 (Ossi Aarnio)

```json
{
  "id": "ozzy-oldskool-v2",
  "name": "Ozzy Oldskool V2 (Ossi Aarnio)",
  "aliases": ["Ozzy_Oldschool_V2"],
  "authors": ["Ossi Aarnio (Ozzy Oldskool)"],
  "released": "2004-2012 (Upstars)",
  "status": "in-progress",
  "platform": "The SECOND, structurally distinct version of already-carded [[ozzy-oldskool]]'s (Ossi Aarnio, Upstars founder) own playroutine — load $1000, versus V1's $A000, spanning 2004-2012 releases. Unlike V1, V2 shows genuine cross-composer reuse: one of its 4 files was scored by a DIFFERENT musician, Mikko Tanni ('Mordicus'), while Aarnio himself retains a 'Code' credit on that release — direct evidence he built the tool a second person then used. Player-ID-fingerprinted across 4 files: 3 by Aarnio, 1 by Tanni.",
  "csdb_release": 51523,

  "memory": { "load_address": "Sample HVSC file traced (Bulliting, 2004, Upstars): load $1000 (init $1000, play $1003).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1000.", "play": "Sample trace: $1003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 39 filter writes in a dense 399-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED SAME AS V1: both `data/composers/oldskool-ozzy.json` and the raw DeepSID dump (`hvsc_files.sql`) place all V1 and V2 files under the single composer folder `MUSICIANS/O/Ozzy_Oldskool/`, same CSDb scener id=4568 (Ossi Aarnio, Finland, Upstars founder) as [[ozzy-oldskool]]'s own card.",
    "NO FORMAL VERSION CHANGELOG EXISTS — only an inferable timeline, EXPLICITLY NOT OVERSTATED as a documented fact: per the raw dump, V1 is exclusive to the single 2002 release ('Risperdal Dreams,' load $A000) and never recurs after that year. V2's full set spans Bulliting (2004, the traced file), Vertical Smiley (2005), No Direction (2007), and Starglide (2012) — all load $1000, a genuinely different memory layout, covering the rest of his active career. This is DeepSID's own tag split, not a self-published 'V2' name by Aarnio; no source explicitly documents WHY or WHAT CHANGED between versions — this is inference from load address and dates, not a stated changelog.",
    "GENUINE CROSS-COMPOSER REUSE, unlike V1: 'Vertical Smiley' (2005, an Asymptote party demo intro) is credited to a DIFFERENT musician, Mikko Tanni ('Mordicus') — while CSDb SEPARATELY confirms Ozzy Oldskool himself has a 'Code' credit on that same 2005 release, directly supporting that he built the player Tanni then used for his own tune. Per this project's own inferred-player heuristic (spread across composers = more likely a genuine reusable tool), V2 is the more 'real tool' of the two versions.",
    "THE DENSITY DIFFERENCE (399 writes/39 filter for V2's traced file vs. V1's 133 writes/2 filter) IS CONSISTENT WITH, BUT NOT PROOF OF, AN IMPROVED/MORE CAPABLE DRIVER — flagged as a reasonable but not fully proven inference, since write density also reflects the specific tune's own compositional choices, not necessarily a hard capability ceiling of either driver version.",
    "'STARGLIDE' (2012) HAS NO CONFIRMED CONNECTION TO ARGONAUT SOFTWARE'S 1988 GAME OF THE SAME NAME — explicitly investigated and found unsupported: no CSDb release titled 'Starglide' exists under Ozzy Oldskool/Upstars credits (Upstars' full CSDb catalog is only 4 releases total: Risperdal Dreams 2002, Emulated 2004, No Direction 2007, Recharger 2012). The embedded PSID copyright string reads '2012 Upstars' (same year as Recharger), suggesting a loose/unreleased single-file HVSC upload rather than a demo-compo release. Best read: an unrelated, same-titled original tune, not a tribute or cover.",
    "A REAL DATA-QUALITY ISSUE WAS FOUND AND MUST BE FLAGGED, similar to the Ulrich Mühl case already documented elsewhere in this KB: this project's own stored `csdb_id` values for all 3 of the V2 dataset's non-primary files are WRONG — verified by direct CSDb fetch, id 22480 (stored for Bulliting) actually resolves to 'Penetrator' (a 1984 crack), id 38427 (stored for No Direction) to 'Freddy Hardest +' (a 1987 crack), and id 47436 (stored for Starglide) to 'Labyrinth +8' (a 1991 crack) — all unrelated. No Direction's REAL CSDb release id is 51523 (used as this card's `csdb_release`, confirmed 4 August 2007, Assembly Summer 2007 competition, credited solely to Ozzy Oldskool for Code/Music/Graphics). Bulliting and Starglide appear to have NO standalone CSDb release page at all. Do not cite the wrong IDs (22480/38427/47436) elsewhere.",
    "Not confirmed in SIDId (no entry for this tag, matching V1's own gap). Direct, confirmed relationship to [[ozzy-oldskool]] (same author, earlier version — cross-referenced in both directions, that card updated in this same batch). No card exists for Mikko Tanni/'Mordicus' or for the Upstars/Asymptote groups. No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "CSDb scener id=4568 (Ossi Aarnio / Ozzy Oldskool, same identity as V1): https://csdb.dk/scener/?id=4568",
    "This project's local DeepSID database dump (deepsid_dl/DeepSID_Database/hvsc_files.sql — authoritative for V1/V2 load-address split and V2's full 4-file/date span)",
    "CSDb release id=51523 ('No Direction', confirmed real release, Assembly Summer 2007): https://csdb.dk/release/?id=51523",
    "CSDb group id=1481 (Upstars, full 4-release catalog): https://csdb.dk/group/?id=1481",
    "Existing KB card: knowledge/players/ozzy-oldskool.md (V1, same author, updated in this same batch)",
    "Local dataset: 4 files tagged Ozzy_Oldschool_V2, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Ozzy_Oldschool_V2` tag is the second, structurally distinct version
of already-carded [[ozzy-oldskool]]'s own playroutine — a different load
address, spanning his 2004-2012 output. Unlike V1, V2 shows genuine
cross-composer reuse by a second musician. Player-ID-fingerprinted across
4 files: 3 by Aarnio, 1 by Mikko Tanni ('Mordicus').

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed
cross-composer reuse**, directly supported by Aarnio's own separate 'Code'
credit on the release scored by someone else. Also notable: a **real
data-quality catch** — 3 of this tag's own cached CSDb IDs in the
project's dump resolve to unrelated releases, now flagged and corrected.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Ozzy_Oldschool_V2`-tagged
`.sid` + trace — which could also confirm whether V2 shares code with V1
or is a genuine rewrite.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Ozzy_Oldschool_V2` `.sid` (Bulliting): load `$1000`,
init `$1000`, play `$1003`, **399 register writes / 50 frames** (39
filter writes — very dense, filter-heavy). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — CSDb (3 entries), this project's local DeepSID
database dump, and the related ozzy-oldskool card.
