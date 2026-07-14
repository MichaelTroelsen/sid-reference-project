# Chris Grigg (Lucasfilm / Habitat-SCUMM driver)

```json
{
  "id": "chris-grigg-lucasfilm",
  "name": "Chris Grigg (Lucasfilm / Habitat-SCUMM driver)",
  "aliases": ["Chris_Grigg_2"],
  "authors": ["Chris Grigg", "Randy Farmer (base driver co-design)"],
  "released": "1986-1987 (Lucasfilm Games)",
  "status": "in-progress",
  "platform": "The EARLIER of at least two distinct drivers used by composer-tool-builder Chris Grigg — CONFIRMED as a second, genuinely separate driver from his later, already-carded [[chris-grigg]] Epyx 'SPL' tool. This one traces to his Lucasfilm Games era (~1985-87), predating Epyx: the Randy Farmer/Chris Grigg sound driver co-designed for 'Habitat' (Lucasfilm's pioneering graphical MMO), later adapted by Aric Wilmunder into early SCUMM's own music driver — the same engine used on 'Maniac Mansion' (1987), on which Grigg is separately credited for arranging the music data into SCUMM itself. Player-ID-fingerprinted across 3 files, all by Grigg.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Habitat, 1986, Lucasfilm Games): load $3ca9 (init $4010, play $3cb8).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $4010.", "play": "Sample trace: $3cb8 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THIS IS THE FAMOUS 'HABITAT' — CONFIRMED, not an unrelated same-titled game: Lucasfilm's pioneering graphical MMO on Quantum Link (later 'Club Caribe'), created by Chip Morningstar and Randy Farmer. VGMPF states Chris Grigg 'created the sounds for Habitat... co-designed and used a sound driver programmed by Randy Farmer for Habitat' — i.e. the BASE driver code was Farmer's, with Grigg as co-designer, a meaningful distinction from the already-carded [[chris-grigg]] Epyx SPL tool, which credits Grigg as the sole tool-builder.",
    "A GENUINELY NOTABLE TECHNICAL LINEAGE: this Farmer/Grigg Habitat sound driver was subsequently ADAPTED BY ARIC WILMUNDER into early SCUMM's own music driver — the pre-iMUSE sound system LucasArts used on 'Maniac Mansion' and 'Zak McKracken and the Alien Mindbenders.' On Maniac Mansion (1987, C64, the traced tag's sibling file) specifically, VGMPF credits 'Original music by' BOTH Chris Grigg and David Lawrence (two tracks: 'Maniac Theme,' 'Demo Tape' — unclear which composer wrote which, or whether joint), and Grigg's own resume states he was 'responsible for arranging the sound data to work with the SCUMM engine' — i.e. a genuine coder role integrating the music into the engine, not just a composer credit.",
    "'PHM PEGASUS' IS CONFIRMED LUCASFILM GAMES/ELECTRONIC ARTS, NOT MICROPROSE as an initial research assumption guessed: copyright Lucasfilm Games, published by Electronic Arts, design by Noah Falstein. Lemon64 explicitly credits 'Musician: Chris Grigg'; a secondary source notes he adapted 'We Sail the Ocean Blue' (Gilbert & Sullivan, H.M.S. Pinafore) for the score.",
    "THIS ERA PLAUSIBLY PRECEDES AND FILLS A GAP IN THE EXISTING [[chris-grigg]] CARD'S OWN BIOGRAPHY, which jumps from 'co-founded Future Arts, introduced to Lucasfilm Games' straight to 'freelanced for EA/Epyx starting 1987' without detailing what he actually built during the Lucasfilm period itself — this card supplies that missing chapter (Habitat, Maniac Mansion, PHM Pegasus, ~1986-87) ahead of his Epyx work.",
    "A RELATED BUT DISTINCT CATALOG OVERLAP WITH [[dave-warhol]] WAS NOTED, NOT TREATED AS A DRIVER LINK: Dave Warhol's own card lists 'Zak McKracken and the Alien Mindbenders' (1988) among his credits — the same LucasArts adventure-game catalog Grigg touched (per VGMPF's Grigg gameography, which also lists Zak McKracken). This is a shared-employer/shared-franchise overlap only; Warhol's own card documents a separate, hand-written Merlin-assembler driver, unrelated to the Farmer/Grigg/Wilmunder SCUMM lineage — noted as a 'see also,' not a technical edge.",
    "NO NAMED TITLE EXISTS for this driver beyond 'the sound driver' in every source checked — LucasArts/fan documentation never gave it a distinct product name the way 'SPL' or 'DDTSS' were named by their own creators.",
    "Not confirmed in SIDId (no entry for this tag). Direct relationship to [[chris-grigg]] (same composer, later/separate driver) — the existing card has been updated in this same batch with a cross-reference. A shared-catalog note (not a technical edge) to [[dave-warhol]]. No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin)."
  ],
  "sources": [
    "VGMPF — Chris Grigg (Habitat sound design, Farmer driver co-design, gameography): https://www.vgmpf.com/Wiki/index.php/Chris_Grigg",
    "Wikipedia — Habitat (video game): https://en.wikipedia.org/wiki/Habitat_(video_game)",
    "VGMPF — Maniac Mansion (C64) (Grigg/David Lawrence composer credit): https://www.vgmpf.com/Wiki/index.php/Maniac_Mansion_(C64)",
    "VGMPF — Aric Wilmunder (SCUMM sound driver lineage): https://www.vgmpf.com/Wiki/index.php?title=Aric_Wilmunder",
    "Lemon64 — PHM Pegasus (musician credit): https://www.lemon64.com/game/phm-pegasus",
    "Wikipedia — PHM Pegasus: search result, Lucasfilm Games/Electronic Arts publication confirmed",
    "Existing KB card: knowledge/players/chris-grigg.md (the later, Epyx-era SPL card this research directly precedes and cross-references)",
    "Existing KB card: knowledge/players/dave-warhol.md (shared LucasArts catalog overlap, not a driver link)",
    "Local dataset: 3 files tagged Chris_Grigg_2, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Chris_Grigg_2` tag is composer-tool-builder Chris Grigg's EARLIER
driver, from his Lucasfilm Games era — the Randy Farmer/Chris Grigg
sound driver co-designed for 'Habitat,' later adapted by Aric Wilmunder
into early SCUMM's own music engine, used on 'Maniac Mansion.' A genuinely
distinct, earlier chapter from his already-carded [[chris-grigg]] Epyx
SPL tool. Player-ID-fingerprinted across 3 files, all by Grigg.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **SCUMM engine
lineage**: this driver's code history runs directly from Habitat's own
sound driver into the music engine used on Maniac Mansion, a genuinely
notable technical thread this KB hadn't previously captured. Also
notable: this card **fills a documented gap** in the existing
[[chris-grigg]] card's own biography, and a publisher correction on
'PHM Pegasus' (Lucasfilm Games/EA, not MicroProse).

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Chris_Grigg_2`-tagged
`.sid` + trace — which could also help confirm whether this driver's code
is genuinely distinct from the later Epyx SPL tool, or shares any
lineage.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Chris_Grigg_2` `.sid` (Habitat): load `$3ca9`, init
`$4010`, play `$3cb8`, **120 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — VGMPF (3 pages), Wikipedia (2 pages), Lemon64,
and the related chris-grigg and dave-warhol cards.
