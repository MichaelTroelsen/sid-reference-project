# Marco Scheepers / Brain (Beat Box driver)

```json
{
  "id": "marco-scheepers",
  "name": "Marco Scheepers / Brain (Beat Box driver)",
  "aliases": ["Marco_Scheepers"],
  "authors": ["Marco Scheepers (Brain)"],
  "released": "1987-1989 (The Terrible Two era)",
  "status": "in-progress",
  "platform": "Dutch demoscener Marco Scheepers's (handle 'Brain', founder of The Terrible Two) own driver — CONFIRMED via his own CSDb scener profile to be a genuine triple-threat: coder, graphician, AND musician, credited with code+music+graphics on his own 'Beat Box'/'Beat Box II' series specifically. Player-ID-fingerprinted across 5 files (of 12 total in his full HVSC folder), all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Beat Box II tune 1): load $837 (init $837, play $83a).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $837.", "play": "Sample trace: $83a (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed — 151 writes concentrated almost entirely on osc1 in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED SELF-CODED, VIA HIS OWN CSDb SCENER PROFILE (id=6508, handle 'Brain', real name Marco Scheepers, listed professions Coder/Graphician/Musician): his credited CSDb releases include 'The Beat Box' series (1988, code/music/graphics/text all credited to him), directly supporting a self-written driver for this tag — a genuinely strong, primary-source confirmation rather than an inference from absence.",
    "GROUP MEMBERSHIPS CONFIRMED: Anti Ronny Kuysters Club, Le Squadron Dominant (8/1987-11/1987), Riffs, The Supersonics (2/1988-5/1988), and **The Terrible Two (1987-1989, which he FOUNDED)** — matching HVSC Musicians.txt's own entry exactly ('Scheepers, Marco (Brain) / The Supersonics / The Terrible Two - NETHERLANDS').",
    "AN IMPORTANT DISAMBIGUATION, EXPLICITLY RULED OUT: a separate, unrelated release also called 'Beat-Box Collection' (CSDb id=16309, by the group Science 451, credited to Karl XII and Wally Beben, Dec 1987) is NOT this composer's work despite the shared name — his own 'Beat Box' series is separately, explicitly self-credited on his own CSDb profile.",
    "ONE COMMERCIAL GAME CREDIT FOUND, GRAPHICS ONLY: '5th Gear' (1988, Rack-It/Hewson, a C64 racing game) — programming/graphics by Jeroen Leijten, ADDITIONAL graphics by Scheepers, but the MUSIC on that specific title was by Renier & Theo Hongens, not Scheepers. This is the one credit where his usual triple-role pattern doesn't hold — flagged, not smoothed over.",
    "A WEAK, TANGENTIAL LINK TO BEN DAGLISH FOUND AND EXPLICITLY FLAGGED AS NOT A REAL COLLABORATION: CSDb release 'The Mudman' (Le Squadron Dominant/The Terrible Two, 1987) credits code+graphics to 'Brain' (Scheepers) but its MUSIC is Ben Daglish's 'The Last Ninja' SID tune, evidently reused/ripped for the demo rather than freshly composed for it — a shared-credit-line on one release, not a documented working relationship.",
    "A POSSIBLE BUT UNCONFIRMED SECOND CREDIT flagged, not asserted: an unreleased Activision preview 'Rampage V1' credits a 'Marco Scheepers' as graphic artist alongside main developer Bart Meeuwissen — the associated group ('The Judges') doesn't match any of his confirmed CSDb group memberships, so this is left explicitly unconfirmed as possibly a different person of the same name, not folded into the main profile.",
    "Not confirmed in SIDId (no entry for this tag). Weak/tangential link to [[ben-daglish]] noted above (shared release credit, not shared code — not encoded as a technical edge). No other known relationship found to any composer/tool already in this KB (checked against Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Scheepers, Marco (Brain) / The Supersonics / The Terrible Two - NETHERLANDS'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "HVSC folder listing (12 total files, confirms the 5-file local dataset is a subset): https://www.prg.dtu.dk/HVSC/C64Music/MUSICIANS/S/Scheepers_Marco/",
    "CSDb scener id=6508 ('Brain'/Marco Scheepers, full role/group/release list): https://csdb.dk/scener/?id=6508",
    "CSDb release id=17871 ('The Mudman', Ben Daglish music reuse): https://csdb.dk/release/?id=17871",
    "CSDb release id=16309 ('Beat-Box Collection' by Science 451, explicitly a DIFFERENT, unrelated release): https://csdb.dk/release/?id=16309",
    "Lemon64 — 5th Gear (full credits): https://www.lemon64.com/game/5th-gear",
    "gamesthatwerent.com — Rampage V1 (unconfirmed second credit, flagged not folded in): https://www.gamesthatwerent.com/gtw64/rampage-v1/",
    "Local dataset: 5 files tagged Marco_Scheepers, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Marco_Scheepers` tag is Dutch demoscener Marco Scheepers's ('Brain,'
founder of The Terrible Two) own driver — confirmed via his own CSDb
profile as a genuine coder/graphician/musician who built his 'Beat
Box'/'Beat Box II' series himself. Player-ID-fingerprinted across 5 files
(a subset of 12 total in his HVSC folder), all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **primary-source
self-coding confirmation** via his own CSDb profile, a rare case in this
KB where the composer's own scener page directly credits code+music+
graphics together on the exact tool this card documents. A weak,
explicitly-flagged tangential link to [[ben-daglish]] (a shared demo
release, not a collaboration) is also noted rather than overstated.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Marco_Scheepers`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Marco_Scheepers` `.sid` (Beat Box II tune 1): load
`$837`, init `$837`, play `$83a`, **151 register writes / 50 frames**
(0 filter writes — dense, almost entirely osc1). Internals undocumented;
memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, HVSC folder listing, CSDb
(3 entries), Lemon64, and gamesthatwerent.com.
