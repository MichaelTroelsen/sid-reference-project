# Music Maker 128 (Music Sales Ltd)

```json
{
  "id": "rick-cardinali",
  "name": "Music Maker 128 (Music Sales Ltd)",
  "aliases": ["Music_Maker_128"],
  "authors": ["Rick Cardinali (house composer)"],
  "released": "1985 (Music Sales Ltd)",
  "status": "in-progress",
  "platform": "A real, named commercial hardware+software product — 'Music Maker 128' — by Music Sales Ltd (a UK music publisher whose 'SFX Computer Software' division also produced Commodore's official SFX Sound Expander/Sampler add-ons). A plastic keyboard overlay turned the C64/C128's keys into a piano-style interface, paired with software; three SKUs existed (Music Maker 64, Music Maker II 64, Music Maker 128). Composer Rick Cardinali appears to have been a house composer/arranger for the entire Music Sales Ltd catalog, not a games-industry or demoscene musician. Player-ID-fingerprinted across 5 files, all his own.",
  "csdb_release": 119395,

  "memory": { "load_address": "Sample HVSC file traced (Music Maker 128, the title tune itself): load $1f41 (init $1f41, play $1fb4).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1f41.", "play": "Sample trace: $1fb4 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "'MUSIC MAKER 128' IS A GENUINE NAMED COMMERCIAL PRODUCT, confirmed via multiple independent sources — not just the title of one tune: SIDId's own reference (`sidid.nfo`) records it as `RELEASED: 1985 Music Sales Ltd` with a CSDb reference (id=119395); a floodgap.com retrospective on Commodore's SFX product line independently confirms 'Music Maker' was a hardware+software line by Music Sales Ltd — a plastic keyboard overlay turning the C64/C128 keyboard into a piano-style interface, introduced ~November 1984 in the UK (£20-£30), also sold in Germany/Canada/Mexico/Australia, with three SKUs (Music Maker 64, Music Maker II 64, and this one, the C128-specific Music Maker 128).",
    "RICK CARDINALI'S ROLE APPEARS TO BE HOUSE COMPOSER/ARRANGER FOR THE WHOLE MUSIC SALES LTD CATALOG, not a games-industry credit: a direct CSDb search returns EXACTLY 5 SID results for 'Cardinali,' ALL published by Music Sales Ltd — Music Maker 128 (1985, the traced file), Playalong Album: Beatles (1985), Playalong Album: Pop Hits (1985), Playalong Album: Popular Classics (1985), and Sound Studio Editor (1986) — an exact match to this tag's 5-file local dataset. This reads as a home-education/creative-music-software composer, entirely distinct from the games/demoscene ecosystem most other composers in this KB come from.",
    "NO OTHER C64 GAME OR DEMO CREDITS FOUND for Rick Cardinali anywhere (Lemon64, MobyGames, general web) — his entire known output is these 5 Music Sales Ltd files. NO CSDb SCENER PROFILE EXISTS either, consistent with a non-demoscene commercial-software composer.",
    "WHO ACTUALLY CODED THE MUSIC MAKER HARDWARE/SOFTWARE ITSELF IS UNCONFIRMED — no source names a specific programmer for the product; Cardinali's confirmed role is composing the bundled music CONTENT, not necessarily the underlying software engineering. Left explicitly open rather than assumed.",
    "HVSC HAS MINIMAL DATA for this composer — a bare 'Cardinali, Rick' entry, no country, no group field.",
    "Not confirmed beyond the SIDId entry already known for this tag (name/reference present, author field empty in the project's own cached copy — the fuller identity above comes from this research pass, not SIDId itself). No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Cardinali, Rick', bare entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "sidid.nfo / data/sidid.json (project's own SIDId import — name, released, CSDb reference): local repo file",
    "CSDb release id=119395 ('Music Maker 128', cracked 1986 by Softrunner Group): https://csdb.dk/release/?id=119395",
    "floodgap.com — SFX Computer Software retrospective (Music Maker product line, Music Sales Ltd context): https://www.floodgap.com/retrobits/ckb/secret/sfx.html",
    "Lemon64 forum — Music Maker 128 / C128 keyboard overlay discussion: https://www.lemon64.com/forum/viewtopic.php?t=27417",
    "CSDb search for 'Cardinali' (5 results, all Music Sales Ltd, matching the local dataset exactly)",
    "Local dataset: 5 files tagged Music_Maker_128, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Music_Maker_128` tag is a real, named commercial product — a
keyboard-overlay music tool by Music Sales Ltd, the UK publisher behind
Commodore's own SFX Sound Expander/Sampler line. Composer Rick Cardinali
appears to have been Music Sales Ltd's house composer, credited on all 5
of the label's known C64 SID releases. Player-ID-fingerprinted across 5
files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed
commercial-product identity**: unlike most tags in this KB, this one
names a physical hardware+software product (a piano-style keyboard
overlay) rather than a composer's personal or studio driver, and
Cardinali's 5-file output maps EXACTLY onto the publisher's entire known
SID catalog.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Music_Maker_128`-tagged
`.sid` + trace — which could also help settle who actually coded the
underlying software.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Music_Maker_128` `.sid` (the title tune itself): load
`$1f41`, init `$1f41`, play `$1fb4`, **46 register writes / 50 frames**
(0 filter writes). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, sidid.nfo, CSDb (2 entries),
floodgap.com, and a Lemon64 forum thread.
