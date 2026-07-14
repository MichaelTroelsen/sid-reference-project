# Matthias Weber (CSD Artware)

```json
{
  "id": "matthias-weber",
  "name": "Matthias Weber (CSD Artware)",
  "aliases": ["Matthias_Weber"],
  "authors": ["Matthias Weber"],
  "released": "1988-1989 (CSD Artware, Input 64 magazine)",
  "status": "in-progress",
  "platform": "German composer-coder Matthias Weber's own playroutine — CSD Artware, his CSDb-registered 'group', is effectively a one-man outfit (he is its ONLY listed member, coding every release himself). He also built his own drum/tracker-style editors (Alpha Drummer V1.4, 4-Track Drummer, both 1988, Addlogic Drums 1989). Player-ID-fingerprinted across 8 files, all his own, including a self-installing RSID tune successfully traced by this project's tracer.",
  "csdb_release": 182914,

  "memory": { "load_address": "Sample HVSC file traced (Virus - The Breakout Error, a magazine coverdisk game): load $57ff (init $57ff, play self-installing).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $57ff.", "play": "Self-installing IRQ (RSID play=$0000 convention — successfully traced)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CSD ARTWARE IS EFFECTIVELY A ONE-MAN OUTFIT, CONFIRMED: CSDb classifies it as a 'Game Development Group' with EXACTLY ONE member — Weber himself (coder/graphician/musician). A strong structural signal that 'Matthias_Weber' is a genuinely personal playroutine, not a shared tool — he coded every CSD Artware release himself, with no other coder ever involved.",
    "TITLE CONFIRMED: the traced file 'Breakout_Error_Virus.sid' is 'Virus - The Breakout Error' (1988) — a Breakout/Pac-Man hybrid arcade game, Code/Music/Graphics/Design all by Weber, published via the German computer magazine Input 64 (publisher Verlag Heinz Heise, the same publisher behind c't/iX) — i.e. a magazine type-in/coverdisk game, not a full commercial or demoscene release. 'Bubble It' (1989, also in his folder) is likewise a CSD Artware/Input 64 production, same Code/Music/Graphics/Design credit pattern.",
    "SELF-WRITTEN MUSIC TOOLS, CONFIRMED: Weber authored his own drum/tracker-style editors under CSD Artware — 'Alpha Drummer V1.4' and '4-Track Drummer' (both 1988), 'Addlogic Drums' (1989), all Code+Music credited to him. A DIFFERENT, LATER, unrelated release, 'Alpha Drummer V2.1' (1991, by a group called Hitmen), is explicitly NOT confirmed to be a modification of Weber's tool — flagged to avoid conflating the two.",
    "Active period 1988-1992 per his CSDb credits (earliest: Alpha Drummer V1.4, 1988; latest: reissues of 'Pride'/'Quad 2' by group PDB, 1992). He also composed freelance for other groups' productions without formal membership — Weird Science (logos), The Icepic Eagles, Genesis Project, Might, Orion, Recrute, The PD-Freaks — credit-only appearances, not group memberships.",
    "CONFIRMED coder AND musician (CSDb functions list both), unlike several other cards in this batch — directly supports self-authorship of both the game code and the accompanying playroutine.",
    "Not confirmed in SIDId (no entry for this tag — consistent with him being an obscure, non-catalogued player author). No known relationship found to any other composer/tool already in this KB, including other German composers (checked against Georg Brandt, Harald Rosenfeldt, Tobias Herre/Extra Sound, Chris Huelsbeck, Oliver Klaewer, Holger Gehrmann/Soundcontrol, Georg Feil/Synth, and the full non-German roster: Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Weber, Matthias - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener (id=24201, functions Coder+Musician, CSD Artware ex-member): https://csdb.dk/scener/?id=24201",
    "CSDb group — CSD Artware (id=7690, one-man outfit, Weber only): https://csdb.dk/group/?id=7690",
    "CSDb release 182914 — Virus - The Breakout Error (1988, Input 64 magazine, full credits): https://csdb.dk/release/?id=182914",
    "Lemon64 — Virus - The Breakout Error: https://www.lemon64.com/game/virus-the-breakout-error",
    "CSDb release 118967 — Bubble It (1989): (credits table on Weber's scener profile)",
    "Local dataset: 8 files tagged Matthias_Weber, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Matthias_Weber` tag is German composer-coder Matthias Weber's own
playroutine — his 'group', CSD Artware, is effectively a one-man outfit,
with every release coded, composed, and drawn by Weber himself, including
his own custom drum/tracker editors. Player-ID-fingerprinted across 8
files, all his own, published via the German magazine Input 64.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: CSD Artware is a
**confirmed one-man outfit**, strong structural support for genuine
self-authorship; his titles are **magazine coverdisk games**, not
commercial or demoscene releases; and he **built his own drum-editor
tools**, a documented pattern of self-sufficiency.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Matthias_Weber`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Matthias_Weber` `.sid` (Virus - The Breakout Error, a
self-installing RSID): load `$57ff`, self-installing IRQ, **46 register
writes / 50 frames** (0 filter writes). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (3 entries), and
Lemon64.
