# Richard Joseph (player routine)

```json
{
  "id": "richard-joseph",
  "name": "Richard Joseph (player routine)",
  "aliases": ["Richard_Joseph"],
  "authors": ["Richard Joseph"],
  "released": "1986-1990 (Palace Software era)",
  "status": "in-progress",
  "platform": "English composer Richard Joseph's own playroutine — a musician, NOT a coder (confirmed by two independent sources), used across his Palace Software soundtracks including Barbarian, whose theme is a deliberate orchestral homage to Basil Poledouris's Conan the Barbarian score. Joseph later became one of the best-known Amiga/PC game composers of the 1990s, a frequent Sensible Software collaborator (Cannon Fodder, Sensible World of Soccer). Player-ID-fingerprinted across 9 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Barbarian, 1987): load $97c0 (init $b527, play $b470).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $b527.", "play": "Sample trace: $b470 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO — a real tension worth resolving via disassembly: he stated in interview the SID filter 'was changed a number of times throughout various production runs of the hardware... we couldn't really use it at all', yet the traced sample shows 3 filter writes / 50 frames. Possibly incidental register writes (a reset/park value) rather than active modulation — not necessarily a contradiction, flagged as a TODO for whoever disassembles this." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED MUSICIAN, NOT A CODER (two independent sources, VGMPF and his own Remix64 interview) — before games he had a professional pop-music career (worked with Trevor Horn and Hugh Padgham, member of the group CMU which released two albums on Transatlantic) and had composed ~100 tunes on a Yamaha CX5 music computer. Entered games after answering a 1986 Melody Maker classified ad placed by Palace Software.",
    "FIRST C64 WORK, first-party account: Cauldron II (1986), delivered in TWO WEEKS 'from booting up the C64 for the first time to delivering a finished tune and 20 sound effects', per his own Remix64 interview.",
    "BARBARIAN'S ORCHESTRAL INTENT WAS DELIBERATE, CONFIRMED: the theme is based on Basil Poledouris's Conan the Barbarian film score; he later arranged Barbarian 'in the style of Ennio Morricone' for a planned retrospective album — confirming the orchestral character was an intentional artistic choice, not incidental to the SID's capabilities.",
    "Full C64 composing credits (VGMPF): Cauldron II (1986), The Sacred Armour of Antiriad (1986), Barbarian: The Ultimate Warrior (1987, Palace Software — the traced file), Stifflip & Co (1987), Rimrunner (1988), Barbarian II: The Dungeon of Drax (1988), Wicked (1989), International 3D Tennis (1990), a Defender of the Crown (Cinemaware) port.",
    "LATER, MUCH MORE FAMOUS CAREER: from 1990 a frequent collaborator with Jon Hare, co-writing/arranging several of Sensible Software's best-known soundtracks — Mega Lo Mania (1991), Wizkid (1992), Cannon Fodder (1993, BAFTA-nominated GBC port in 2000), Sensible World of Soccer (1994). Founded the audio house Audio Interactive in 1995; won a BAFTA Interactive Award (audio) for Theme Park World. Also freelanced for The Bitmap Brothers and Millennium. Final credited work in 2006; died 4 March 2007 (age 53) of lung cancer.",
    "SCENE RECOGNITION posthumously: CSDb lists a demoscene tribute release, 'The Richard Joseph Tribute' (2010, by Onslaught, Protovision, and Samar Productions — the same Samar Productions already connected to [[jch-protracker]]/[[kosa-protracker]] in this KB, though no direct link between Joseph and Kosa/Phobos was found, just a coincidental shared tribute-group credit). He attended Back in Time Live 2003.",
    "NAMED INFLUENCES (his own words, Remix64 interview): Martin Galway ('still my favourite even now', praised Wizball) and Rob Hubbard ('Knucklebusters') — both already carded in this KB as [[martin-galway]] and [[rob-hubbard]]. Admiration only, no evidence of collaboration or shared code.",
    "Not confirmed in SIDId (no entry for this tag). No other known relationship found to any composer/tool already in this KB beyond the influence citations above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "Wikipedia — Richard Joseph: https://en.wikipedia.org/wiki/Richard_Joseph",
    "8bitlegends — Richard Joseph biography/obituary: https://8bitlegends.com/richard-joseph/",
    "VGMPF — Richard Joseph (full C64 credit list, later career): https://vgmpf.com/Wiki/index.php?title=Richard_Joseph",
    "Remix64 interview (first-party quotes: Cauldron II timeline, filter-avoidance statement, Morricone-style Barbarian arrangement, influences): https://remix64.com/interviews/interview-richard-joseph.html",
    "CSDb scener (id=8426): https://csdb.dk/scener/?id=8426",
    "CSDb release — The Richard Joseph Tribute (2010): http://csdb.dk/release/?id=94536",
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: 9 files tagged Richard_Joseph, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Richard_Joseph` tag is English composer Richard Joseph's own
playroutine, used across his Palace Software soundtracks including
Barbarian (1987) — a deliberate orchestral homage to Basil Poledouris's
Conan the Barbarian score. He went on to become one of the best-known
1990s Amiga/PC game composers via Sensible Software (Cannon Fodder,
Sensible World of Soccer). Player-ID-fingerprinted across 9 files, all
his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he's **confirmed a
musician, not a coder**, unlike several other cards in this batch; the
**Barbarian/Conan homage is deliberate**, confirmed by his own later
Morricone-style rearrangement; and a **genuine, flagged tension** between
his own filter-avoidance quote and 3 filter writes observed in the trace,
left as an open TODO rather than resolved by assumption.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Richard_Joseph`-tagged
`.sid` + trace — which would also help resolve the filter-usage tension
noted above.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Richard_Joseph` `.sid` (Barbarian): load `$97c0`,
init `$b527`, play `$b470`, **71 register writes / 50 frames** (3 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — Wikipedia, 8bitlegends, VGMPF, a Remix64
interview (primary source for several quirks), CSDb, and HVSC
Musicians.txt.
