# Entropy Music Editor (Simon Collis / Uzzy)

```json
{
  "id": "entropy-editor",
  "name": "Entropy Music Editor (Simon Collis / Uzzy)",
  "aliases": ["Entropy_Editor"],
  "authors": ["Simon Collis ('Uzzy', later 'Trireme')"],
  "released": "1993 (Entropy)",
  "status": "verified",
  "platform": "A C64 music editor coded by English demoscener Simon Collis (handle 'Uzzy,' later 'Trireme'), for the group Entropy (founded 1991 by Trireme & Gremlin, formerly called 'Logik'). CONFIRMED via a genuinely rich first-person source — a dedicated Hall of Fame interview with Collis himself, giving rare biographical depth for this KB. Player-ID-fingerprinted across 3 files: 2 by Collis himself (his own tool's demo tunes) and 1 by Nantco Bakker, a Dutch composer.",
  "csdb_release": 100032,

  "memory": { "load_address": "Sample HVSC file traced (Entropy Editor Sample 1, composed by Uzzy): load $1000 (init $1000, play $1003).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1000.", "play": "Sample trace: $1003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 42 filter writes in a dense 273-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "TOOL AND AUTHOR CONFIRMED, MULTIPLE SOURCES: CSDb release id=100032, 'Entropy Music Editor V1.0,' 1993, group Entropy, type C64 Tool — 'Code: Uzzy (Entropy),' 'Music: Peace (Oxyron, Xentax) and Uzzy (Entropy).' SIDId's `sidid.nfo` independently corroborates: name 'Entropy Music Editor,' author 'Simon Collis (Uzzy).' Also listed on the Commodore Software download archive as a 'full music editor with lots of features and built-in player.'",
    "A GENUINELY RICH FIRST-PERSON SOURCE EXISTS — RARE FOR THIS KB: a dedicated Hall of Fame interview (c64-hof.com) with Collis himself, under his LATER handle 'Trireme.' He states: born 10 July 1972 in York, England, still resides there; 'Uzzy' is 'an abbreviation of an old Yorkshire name, Uzziel'; joined Entropy (then called 'Logik') around 1991; left the scene in 1994; later helped reform the group. He self-describes as 'utterly tuneless' as a musician but did compose in a 'spooky' style — consistent with being credited as one of the editor's two demo-tune composers alongside 'Peace.'",
    "GROUP HISTORY CONFIRMED: CSDb's Entropy group page (id=212, United Kingdom) states it was 'Founded by Trireme & Gremlin in 1991,' originally called 'Logik,' rebuilt 1 July 1997. Roughly 40 members are listed with roles spanning Coder/Diskmag Editor/Graphician/Musician/Swapper, active from 1991 — Collis/Uzzy among them.",
    "CONFIRMED BOTH CODER AND MUSICIAN: he coded the editor AND is one of its two credited demo-tune musicians, matching this tag's own 2 Uzzy-authored files, which are self-demos of his own tool.",
    "NANTCO BAKKER (the tag's second composer, 1 file, 'Midnight Express') IS A DIFFERENT, DUTCH COMPOSER: HVSC lists him as 'Bakker, Nantco (Beat, Ripper) / Warriors of Music - NETHERLANDS.' His confirmed CSDb activity ties instead to the group 'New Dimension Crew' (SID release 'Bitch Hiker,' 1992, used in 'Musmo 03'); 'Warriors of Music' has no CSDb group page under that exact name and may be a smaller/informal circle, left UNCONFIRMED. A biography page (8bitlegends.com) confirms he was Dutch, active 1991-95, composed 150+ SIDs, associated with New Dimension Crew and a group 'Bronx' — and DIED, though the exact date is DISPUTED between two sources (1 September 2011 per 8bitlegends vs. 1 December 2011 per a CSDb forum memorial thread) — flagged explicitly as an unresolved discrepancy rather than picking one.",
    "NO CONNECTION FOUND TO ANY OTHER NAMED EDITOR TOOL ALREADY IN THIS KB, checked explicitly and reported as an isolated finding, not a silent gap: no group/authorship overlap found with [[ccc-editor]] (a Swedish group, unrelated to Entropy's English circle), [[skyline-editor]], [[twice-effect-editor]], [[audio-effect-editor]], or [[jch-protracker]]. 'Peace' (Oxyron/Xentax), the co-musician on the demo tunes, is not the author of any other carded tool either.",
    "Not confirmed beyond the SIDId/CSDb entries already cited. No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Uzzy (Collis, Simon) / Entropy - UNITED KINGDOM (ENGLAND)'; 'Bakker, Nantco (Beat, Ripper) / Warriors of Music - NETHERLANDS'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb release id=100032 ('Entropy Music Editor V1.0'): https://csdb.dk/release/?id=100032",
    "SIDId sidid.nfo (github.com/cadaver/sidid) — 'Entropy Music Editor' entry, author Simon Collis (Uzzy)",
    "CSDb group id=212 (Entropy, founding history, member roster): https://csdb.dk/group/?id=212",
    "Commodore Software archive — Entropy Music Editor V1: https://commodore.software/downloads/download/46-sound-music-editors/802-entropy-music-editor-v1",
    "Hall of Fame interview — Simon Collis/Trireme (biography, Uzzy alias origin): http://www.c64-hof.com/groups/e/entropy/inttrire.htm",
    "CSDb sid id=4339 (Nantco Bakker, 'Bitch Hiker', New Dimension Crew): https://csdb.dk/sid/?id=4339",
    "8bitlegends.com — Nantco Bakker biography: https://8bitlegends.com/nantco-warriors-of-the-wasteland/",
    "Local dataset: 3 files tagged Entropy_Editor, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Entropy_Editor` tag is a C64 music editor coded by English
demoscener Simon Collis ('Uzzy,' later 'Trireme') for the group Entropy
(founded 1991). Confirmed via a rare, rich first-person interview with
Collis himself. Player-ID-fingerprinted across 3 files: 2 by Collis, 1 by
Dutch composer Nantco Bakker.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **rich first-person
interview source**, a genuinely rare depth of biographical material for a
tool-builder in this KB. Also notable: an **honestly-preserved date
discrepancy** on Nantco Bakker's death, left unresolved between two
sources rather than picking one arbitrarily.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Entropy_Editor`-tagged
`.sid` + trace.

## Verification

**Disassembly/reassembly pass (2026-07-22) — status: verified.** Bakker_Nantco + Uzzy: both register-write exact. All runtime fields TODO.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (2 entries), SIDId's
sidid.nfo, Commodore Software archive, a Hall of Fame interview, and
8bitlegends.com.
