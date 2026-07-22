# Extra Sound (Tobias Herre)

```json
{
  "id": "extra-sound",
  "name": "Extra Sound (Tobias Herre)",
  "aliases": ["Extra_Sound"],
  "authors": ["Tobias Herre"],
  "released": "1989",
  "status": "verified",
  "platform": "Native C64 music editor, coded by German programmer Tobias Herre — self-taught by ripping and studying game-music SIDs (especially Rob Hubbard's) as a learning exercise. Later used in the 1991 Blue Byte/Psygnosis game Atomino, which Herre co-built with his Extra Sound collaborators. Player-ID-fingerprinted across 17 files: 12 by Herre himself, 5 by Volker Strübing (handle 'Syntax Terror'), his co-composer on the tool's original release and later co-founder with him of the small studio Game-o-ware.",
  "csdb_release": 111493,

  "memory": { "load_address": "Sample HVSC file traced (Blaues Wunder, composed by Herre): load $1000 (init $1000, play $1003).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1000.", "play": "Sample trace: $1003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 74 filter writes in the 50-frame sample, plausibly reflecting Herre's self-taught study of filter-heavy Rob Hubbard tunes)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED CODER-MUSICIAN: CSDb release 111493 (found via a user comment referencing the German diskmag 'Digital Talk #86') credits Code to Tobias Herre alone, Music to both Herre and Volker Strübing — genuinely his own tool, not borrowed. CSDb lists Herre's function as Coder; his trivia notes credit him as coder of the commercial game 'Atomino' (1991).",
    "DETAILED ORIGIN STORY (VGMPF, cross-checked against two separate biography pages that agree on the same timeline): Herre (b. 12 Aug 1968, East Berlin) got a C64 in 1986, learned BASIC at the Computerklub Pionierhaus Hohenschönhausen, and ripped game music — especially Rob Hubbard's — as a learning exercise before writing his own tool. He and Volker Strübing (b. 22 Apr 1971, Sondershausen; got his C64 in 1987 as a gift from his grandfather) met on 21 July 1988, and in 1989 Herre 'programmed drivers and a music editor called Extra-Sound.'",
    "ATOMINO (1991, Blue Byte/Psygnosis) CONNECTION: Herre, Strübing, and graphic artist Uwe Beneke — three then-unemployed East Germans — built this driver/editor lineage into the commercial game Atomino, pitching it to West German publishers after German reunification. They co-founded a small studio, Game-o-ware, together (Feb 1990-~1992).",
    "VOLKER STRÜBING'S LATER LIFE, notable: he became a professional German author/screenwriter, and in 2019 directed a documentary on East German computing for German public broadcasting. Confirmed to be the same person via matching birth details (b. 1971, Sondershausen) on his own author website — not scene-relevant to this card's technical content, but a genuine and interesting throughline.",
    "STATED MUSICAL INFLUENCES (Strübing's own words, per VGMPF): Rob Hubbard, Martin Galway, Chris Hülsbeck — all already carded in this KB ([[rob-hubbard]], [[martin-galway]], [[chris-huelsbeck]]) — but this is INFLUENCE ONLY, no evidence of shared code, direct collaboration, or player derivation from any of them. Do not assert a technical link from this quote.",
    "CROSS-PLAYER HALLUCINATION CHECKS PERFORMED: a different CSDb scener also named 'Tobias' (id=11589, handles Groepaz/Wurst Hans, Alpha Flight member) is confirmed UNRELATED to Tobias Herre. A separate 'Volker Dreier' scener page is also confirmed unrelated to Volker Strübing.",
    "Not confirmed in SIDId beyond the bare author field already used above. No known relationship to any other composer/tool already in this KB beyond the general Hubbard/Galway/Hülsbeck influence quote above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Fred Gray, Matt Gray, Jeroen Kimmel, Georg Brandt, Harald Rosenfeldt — none found)."
  ],
  "sources": [
    "CSDb release 111493 (Extra Sound, full credits, Digital Talk #86 reference): https://csdb.dk/release/?id=111493",
    "CSDb scener — Tobias Herre (id=24429, Coder, Atomino trivia): https://csdb.dk/scener/?id=24429",
    "CSDb scener — Volker Strübing (id=24276, handle Syntax Terror): https://csdb.dk/scener/?id=24276",
    "VGMPF — Tobias Herre (biography, Extra-Sound origin, Game-o-ware): http://www.vgmpf.com/Wiki/index.php?title=Tobias_Herre",
    "VGMPF — Volker Strübing (biography, influences, Game-o-ware): http://www.vgmpf.com/Wiki/index.php?title=Volker_Str%C3%BCbing",
    "Volker Strübing's own author website (later-life confirmation): http://www.volker-struebing.de/",
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: 17 files tagged Extra_Sound, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Extra_Sound` tag is a native C64 music editor coded by German
programmer Tobias Herre in 1989 — self-taught by studying Rob Hubbard's
filter-heavy tunes. He and his co-composer Volker Strübing later built the
tool's driver lineage into the commercial game Atomino (1991), co-founding
a small studio, Game-o-ware, together. Player-ID-fingerprinted across 17
files, mostly by Herre.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **detailed, cross-
verified origin story** (two independent biography pages agreeing on the
same timeline); the **Atomino commercial-game connection**; and Strübing's
**notable later career** as a German author/screenwriter, confirmed via
his own website.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Extra_Sound`-tagged `.sid`
+ trace.

## Verification

**Disassembly/reassembly pass (2026-07-22) — status: verified.** Herre_Tobias + Struebing_Volker: both register-write exact. All runtime fields TODO.

## Sources

See the `sources` array — CSDb (release + 2 scener profiles), VGMPF (2
pages), Strübing's own website, and HVSC Musicians.txt.
