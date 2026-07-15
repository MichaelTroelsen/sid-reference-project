# Gregor Larson / Kris Hatlelid (Frantic Freddie driver)

```json
{
  "id": "gregor-larson",
  "name": "Gregor Larson / Kris Hatlelid (Frantic Freddie driver)",
  "aliases": ["Gregor_Larson"],
  "authors": ["Gregor Larson", "Kris Hatlelid"],
  "released": "1983 (Commercial Data Systems)",
  "status": "in-progress",
  "platform": "The EARLIER, pre-KMS driver used by already-carded [[kris-hatlelid]] — CONFIRMED via three independent sources (CSDb, Wikipedia, VGMPF) as a genuine co-authored tool: Gregor Larson co-designed 'Frantic Freddie' (1983, Commercial Data Systems) alongside Hatlelid, and VGMPF states directly that 'Larson and Hatlelid programmed a music driver and arranged in hex' together — a real division of labor, driver-code vs. music-data, roughly five years before Hatlelid's own later, self-named 'KMS' driver. Player-ID-fingerprinted across 2 files, both composed by Hatlelid.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Frantic Freddie, composed by Kris Hatlelid): load $a000 (init $c3db, play $a0e4).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $c3db.", "play": "Sample trace: $a0e4 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in a sparse 22-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "RESOLVED WITH HIGH CONFIDENCE, the cleanest of several similar name-mismatch cases in this KB — cleaner than the still-unresolved [[rene-romijn]], comparable to the cleanly-resolved [[gavin-graham]] and [[neil-bate]]: this tag's SIDId author field names 'Gregor Larson,' a DIFFERENT name from the composer credited in this project's own local dataset, Kris Hatlelid. CSDb's own SID metadata for the tune resolves this directly: **'Frantic Freddie / Gregor&Brian Larson, K. Hatlelid / 1983 Commercial Data Systems'** — a THREE-way credit (Gregor Larson, a second Larson named Brian — unidentified relationship, likely a relative, no further info found — and Kris Hatlelid). Wikipedia's own Frantic Freddie article independently corroborates the Larson/Hatlelid CO-DESIGN credit.",
    "VGMPF STATES THE DIVISION OF LABOR DIRECTLY, the key confirming source: 'For Frantic Freddie (C64), Larson and Hatlelid programmed a music driver and arranged in hex' — i.e. driver code was jointly built, with SIDId's naming of Larson specifically as author most plausibly reflecting him as the driver's primary/named coder, while Hatlelid did the arranging. VGMPF FURTHER STATES Hatlelid REUSED this same driver on the 'PirateBusters' cartoon, and that 'by February 1988, he had created a new driver' (KMS, already documented on [[kris-hatlelid]]'s own card) — establishing this AS Hatlelid's genuine PRE-KMS tool, the exact tool his own career started on.",
    "THIS IS THE STRUCTURAL SAME PATTERN as the already-resolved [[neil-bate]] case (a driver a composer learned/co-built early in his career before writing his own) — not the unresolved [[rene-romijn]] pattern (no identity found at all for the mismatched name). Gregor Larson IS a real, cross-sourced co-author, just with no CSDb scener profile or further documented C64 credits of his own beyond Frantic Freddie and a related unreleased title, 'Mutant.'",
    "'INTERLUDE 1 - THE FIRING SQUAD' (the tag's second file) HAS NO INDEPENDENT CSDb/Lemon64/Wikipedia RECORD as a standalone release — it appears to be an HVSC-catalogued Hatlelid tune not indexed as its own CSDb SID/release page. Given it shares the exact `Gregor_Larson` tag and both files are the ONLY two under this tag, it's plausible this is from the same early-CDS-era period using the same co-built driver, but this could NOT be independently corroborated beyond the shared tag itself — left explicitly open, not asserted as confirmed.",
    "NO CSDb SCENER PROFILE, no HVSC Musicians.txt entry, and no other C64-industry credits were found for Gregor Larson beyond this project's own data and the related unreleased 'Mutant' title — genuinely thin biographical material beyond the driver-authorship fact itself.",
    "Not confirmed in SIDId beyond the author field already known for this tag. Direct, confirmed relationship to [[kris-hatlelid]] (the composer who learned on this driver before his own KMS — cross-referenced in both directions, that card updated in this same batch). No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor, Neil Bate, Jason Page/Jay, Entropy Editor, Georg Brandt/Rhythm CS, The Music System, Ozzy Oldskool V2, Jonas Hultén, Kenneth Arnold, Andreas Bauernfeind, Andy Brown, Arti Haroutunian, Bo Mellberg, Cadaver's second driver, Frank Brodersen, Frederic Thiesse, Music Works — none found)."
  ],
  "sources": [
    "CSDb sid id=14184 (Frantic Freddie, three-way composer credit 'Gregor&Brian Larson, K. Hatlelid'): https://csdb.dk/sid/?id=14184",
    "Wikipedia — Frantic Freddie (co-design credit): https://en.wikipedia.org/wiki/Frantic_Freddie",
    "VGMPF — Kris Hatlelid (driver co-authorship quote, PirateBusters reuse, KMS successor timeline): https://www.vgmpf.com/Wiki/index.php/Kris_Hatlelid",
    "GamesThatWerent — Mutant (unreleased, related title): https://www.gamesthatwerent.com/gtw64/mutant/",
    "CSDb scener id=32451 (Kris Hatlelid, already cited in kris-hatlelid.md — no separate Gregor Larson scener profile exists on CSDb)",
    "Existing KB card: knowledge/players/kris-hatlelid.md (the composer this driver was co-built for, updated in this same batch)",
    "Local dataset: 2 files tagged Gregor_Larson, 1 composer (Kris Hatlelid) (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Gregor_Larson` tag is the earlier, pre-KMS driver used by
already-carded [[kris-hatlelid]] — a genuine, three-source-confirmed
co-authored tool from Frantic Freddie (1983), the exact game his own
career started on. Player-ID-fingerprinted across 2 files, both
composed by Hatlelid.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **cleanly resolved
name mismatch**, directly comparable to [[neil-bate]]'s already-resolved
case in this KB: a real co-author, confirmed across CSDb, Wikipedia, and
VGMPF, with VGMPF explicitly describing the driver-code/arranging
division of labor between Larson and Hatlelid.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Gregor_Larson`-tagged
`.sid` + trace — which could also help settle how much this driver's code
carried forward into Hatlelid's own later KMS system.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Gregor_Larson` `.sid` (Frantic Freddie): load `$a000`,
init `$c3db`, play `$a0e4`, **22 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — CSDb, Wikipedia, VGMPF, GamesThatWerent, and
the related kris-hatlelid card.
