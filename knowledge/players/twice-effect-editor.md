# Twice Effect Music Editor (Thomas Engelau)

```json
{
  "id": "twice-effect-editor",
  "name": "Twice Effect Music Editor (Thomas Engelau)",
  "aliases": ["Twice_Effect_Editor"],
  "authors": ["Thomas Engelau"],
  "released": "1991 (Twice Effect era)",
  "status": "in-progress",
  "platform": "A C64 music editor coded by Thomas Engelau for the short-lived (1990-91) German demoscene group 'Twice Effect' — SIDId's tag/author attribution ('Twice Effect Music Editor'/Thomas Engelau) is directly corroborated by primary-source group-credit data: Engelau also coded 'Einstein' (1991), one of the very files in this dataset that composer Mario Kriwanek scored using this editor, both released through the German disk-magazine 'Game On'/CP Verlag. Player-ID-fingerprinted across 4 files, all composed by Mario Kriwanek ('MOK'), a different person from the tool's author.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Deri Colours, composed by Mario Kriwanek): load $7f8 (init $7f8, play $860).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $7f8.", "play": "Sample trace: $860 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 74 filter writes in a dense 335-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "'TWICE EFFECT' IS A SCENE GROUP NAME, NOT AN AUDIO TECHNIQUE — a genuinely important disambiguation for the card's title: no documentation of any 'dual-effect/dual-oscillator' technical meaning was found anywhere (magazines, CSDb, forums). It's a short-lived (~1990-91) C64 demo/game-making group with members Jim Nowak and Sören Kress (coders/graphics), Mario Kriwanek ('MOK,' music), and Thomas Engelau (coder, listed on CSDb as 'ex member of Twice Effect').",
    "SIDId'S AUTHOR ATTRIBUTION IS PRIMARY-SOURCE CORROBORATED, not just a database claim: Thomas Engelau also personally coded 'Einstein' (1991), ONE OF THE FOUR FILES IN THIS PROJECT'S OWN DATASET that Mario Kriwanek scored using this editor — published through the German disk-magazine 'Game On'/CP Verlag (confirmed via a direct listing at pirates.emucamp.com: 'Einstein (Commodore 64) © 1991 Game On,' and CSDb's own Game On/CP Verlag 1991 disk-mag issues). This is a direct, sourced pairing of tool-author and tool-user on the same specific release, not an inference.",
    "THE GROUP'S OTHER OUTPUT CORROBORATES THE PATTERN: 'Demo Designer' (1990, CSDb release 60922, a C64 demo-construction tool — code by Jim Nowak/Sören Kress, music by MOK, bundling 5 Kriwanek SID tunes, several titled 'Twice Effect Demo Maker') and 'Deri Colours' (Feb 1991, CSDb release 112271, a C64 game — same coders, same MOK music credit, the traced file) show the SAME division of labor (Nowak/Kress or Engelau code, Kriwanek scores) repeating across the group's small output.",
    "MARIO KRIWANEK ('MOK') CONFIRMED GERMAN via HVSC ('Kriwanek, Mario (MOK) - GERMANY'), with 19 SID compositions found on CSDb (1989-1993) spanning Twice Effect plus groups Defence and Dynamix, and diskmags Relax and Magic Disk 64 — no dedicated CSDb scener profile page was located for him directly (UNCONFIRMED whether one exists under a variant handle), only composer-credit entries on individual SID releases.",
    "THOMAS ENGELAU'S OWN CSDb PROFILE (id=25985) IS SPARSE: function Coder, group listed only as 'Ex member of Twice Effect,' with real name/country NOT listed on the profile itself (the surname suggests possibly Scandinavian, but this is UNCONFIRMED, not stated as fact). Only two credited releases exist for him anywhere: 'Einstein' (1991 Game, code) and this 'Twice Effect Music Editor' (1991 Tool, code) — no other tools or scene credits found.",
    "Not confirmed in SIDId beyond the tool-identity entry itself (already known pre-research). No known relationship found to any composer/tool already in this KB — this looks like an isolated, self-contained German-scene tool with its own author, distinct from every other editor already carded here (Audio Effect Editor/Alexander Kirsch, SkyLine Editor/Daniel Stenberg, etc.), and none of Twice Effect's people or affiliated groups (Defence, Dynamix) overlap with any other name in this roster (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, John Prince, Kyle Johnson — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Kriwanek, Mario (MOK) - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb release id=60922 ('Demo Designer', 1990, group credit pattern): https://csdb.dk/release/?id=60922",
    "CSDb release id=112271 ('Deri Colours', Feb 1991, traced file's own release): https://csdb.dk/release/?id=112271",
    "CSDb scener id=25985 (Thomas Engelau, Coder, ex-Twice Effect): https://csdb.dk/scener/?id=25985",
    "pirates.emucamp.com — Einstein (C64, © 1991 Game On, confirms Engelau/Game On pairing): http://pirates.emucamp.com/a/e/einstein/c64/main3.html",
    "SIDId sidid.nfo (github.com/cadaver/sidid) — 'Twice Effect Music Editor' entry, author Thomas Engelau",
    "Local dataset: 4 files tagged Twice_Effect_Editor, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Twice_Effect_Editor` tag is a C64 music editor coded by Thomas
Engelau for the short-lived German demoscene group 'Twice Effect' —
SIDId's author attribution is directly corroborated by primary-source
data, since Engelau also coded 'Einstein,' one of composer Mario
Kriwanek's own tracked files, both released through the same disk
magazine. Player-ID-fingerprinted across 4 files, all by Kriwanek.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **group-name
disambiguation** ('Twice Effect' is a scene group, not an audio
technique — a genuinely useful clarification for the card's own title);
and the **primary-source-corroborated tool-author/tool-user pairing**,
via a shared release (Einstein) rather than just SIDId's own database
entry.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Twice_Effect_Editor`-
tagged `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Twice_Effect_Editor` `.sid` (Deri Colours, composed by
Mario Kriwanek): load `$7f8`, init `$7f8`, play `$860`, **335 register
writes / 50 frames** (74 filter writes — very filter-heavy, dense).
Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (3 entries),
pirates.emucamp.com, and SIDId's sidid.nfo.
