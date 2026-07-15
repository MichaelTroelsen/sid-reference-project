# Audial Revolution Music Editor (Yoga)

```json
{
  "id": "audial-revolution",
  "name": "Audial Revolution Music Editor (Yoga)",
  "aliases": ["Audial_Revolution"],
  "authors": ["Maikel van de Lisdonk ('Yoga')"],
  "released": "8 March 1989 (Venlo Meeting, group Audial Revolution)",
  "status": "in-progress",
  "platform": "A C64 music editor coded by Dutch demoscener Maikel van de Lisdonk ('Yoga') for the group Audial Revolution — CONFIRMED via a two-source-corroborated identity resolution: 'Whizz' (real name Ramon van de Laar), this tag's sole composer, and 'Yoga,' the tool's coder, are TWO DIFFERENT PEOPLE who were groupmates — the same 'composer used a groupmate's tool' pattern already documented elsewhere in this KB, not a self-credit-under-alias case. NOT to be confused with the similarly-named but unrelated already-carded [[audial-arts]] group/tool. Player-ID-fingerprinted across 2 files, both by Whizz.",
  "csdb_release": 71543,

  "memory": { "load_address": "Sample HVSC file traced (Cool Ripp 31, composed by Whizz): load $2fd3 (init $2fd3, play $2ff4).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $2fd3.", "play": "Sample trace: $2ff4 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in a very dense 357-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE COMPOSER/TOOL-AUTHOR NAME MISMATCH IS RESOLVED WITH TWO INDEPENDENT SOURCES: HVSC Musicians.txt reads 'Whizz (van de Laarm Ramon) / Audial Revolution - NETHERLANDS' (the file's own minor typo, 'Laarm,' matches CSDb's SID-credit spelling 'Ramon van de Laar' exactly — treated as the same name, not a different person). CSDb release id=71543, 'Audial Revolution Music Editor' (aka 'The Music Maker,' released 8 March 1989 at Venlo Meeting, group Audial Revolution), is credited to 'Yoga' (CSDb scener id=7826) for BOTH Code and Music. So the tool's own author is confirmed to be Yoga, a DIFFERENT person from Whizz, the tag's sole traced composer — GROUPMATES, not the same person under two aliases.",
    "SIDId INDEPENDENTLY CONFIRMS YOGA'S REAL NAME AS Maikel van de Lisdonk — CSDb's own scener profile for Yoga (id=7826) lists no real name field, so SIDId is the corroborating source for that identity detail specifically.",
    "THE SAME 'COMPOSER USED A GROUPMATE'S TOOL' PATTERN ALREADY DOCUMENTED ELSEWHERE IN THIS KB, not a novel resolution mechanism: directly comparable to [[audial-arts]] (Zong Player, coded by group member François Prijt, used across the whole Audial Arts composer roster) and [[audio-effect-editor]] (Alexander Kirsch/groupmate Rudolf Stember). Both Whizz and Yoga are confirmed groupmates — first in Audial Revolution itself, and LATER both also members of Actual Trading Generation (ATG, 1990-91, the group credited on both this tag's traced 1989 SID releases) — a doubly-confirmed social link, not a one-off.",
    "A REAL NAME-COLLISION RISK IS EXPLICITLY FLAGGED: 'Audial Revolution' (this card's group/tool) is a COMPLETELY DIFFERENT, unrelated Dutch group/tool from the similarly-named already-carded [[audial-arts]] (Zong Player) — worth noting explicitly to avoid future confusion between the two similarly-branded entities.",
    "'COOL RIPP 31' (the traced file's title) HAS AN UNCONFIRMED MEANING: no CSDb page or forum thread was found explaining what 'Ripp' references — it reads like a numbered personal tune-series name (the '31' suggesting many prior installments) rather than a literal 'rip' of another artist's melody, but no direct evidence was found either way. Left explicitly unresolved.",
    "Not confirmed in SIDId beyond the author identification already cited. No connection found to [[twice-effect-editor]], [[entropy-editor]], or [[mega-player]] — no shared authors, groups, or titles surfaced. No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Whizz (van de Laarm Ramon) / Audial Revolution - NETHERLANDS'): local cache data/hvsc/Musicians.txt line 1832",
    "CSDb search — Whizz/Ramon van de Laar SID credits (Cool Ripp 31, The Revenge tune 2, both 1989, group Actual Trading Generation): https://csdb.dk/search/",
    "CSDb release id=71543 ('Audial Revolution Music Editor'/'The Music Maker', 8 March 1989, Code+Music: Yoga): https://csdb.dk/release/?id=71543",
    "CSDb scener id=7826 (Yoga, Netherlands, groups Audial Revolution/Actual Trading Generation/Demix/Visual Delight): https://csdb.dk/scener/?id=7826",
    "SIDId sidid.nfo (github.com/cadaver/sidid) — real name Maikel van de Lisdonk for Yoga",
    "CSDb group id=907 (Actual Trading Generation, both Whizz and Yoga members): https://csdb.dk/group/?id=907",
    "Existing KB card: knowledge/players/audial-arts.md (the similarly-named but unrelated group, explicitly flagged to avoid confusion)",
    "Existing KB card: knowledge/players/audio-effect-editor.md (the parallel groupmate-tool-reuse pattern)",
    "Local dataset: 2 files tagged Audial_Revolution, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Audial_Revolution` tag is a C64 music editor coded by Dutch
demoscener Maikel van de Lisdonk ('Yoga') for the group Audial
Revolution — used by his groupmate Whizz (Ramon van de Laar), a
different person entirely, resolved via two independent sources. NOT to
be confused with the similarly-named [[audial-arts]]. Player-ID-
fingerprinted across 2 files, both by Whizz.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **cleanly resolved
composer/tool-author name mismatch**, confirmed via two independent
sources and further corroborated by BOTH people's later shared
membership in a second group — a doubly-confirmed social link. Also
flagged: a **real name-collision risk** against the unrelated,
similarly-named [[audial-arts]] group already in this KB.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Audial_Revolution`-
tagged `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Audial_Revolution` `.sid` (Cool Ripp 31, composed by
Whizz): load `$2fd3`, init `$2fd3`, play `$2ff4`, **357 register writes /
50 frames** (0 filter writes — very dense). Internals undocumented;
memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (4 entries), SIDId's
sidid.nfo, and 2 related KB cards.
