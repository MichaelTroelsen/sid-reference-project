# Jason Page Music Editor / Jay's Music Routine

```json
{
  "id": "jason-page-jay",
  "name": "Jason Page Music Editor / Jay's Music Routine",
  "aliases": ["Jason_Page/Jay"],
  "authors": ["Jason Page ('Jay')"],
  "released": "1988 (Newforce / Breakpoint Hacking Techniques)",
  "status": "in-progress",
  "platform": "A THIRD, distinct Jason Page tool — confirmed as a genuinely publicly-released 1988 scene editor ('Jay's Music Routine V1', alt. title 'Jason Page Music Editor'), squarely inside the same window as his already-carded [[jason-page]] original Graftgold-era driver, but released as a standalone product via UK groups Newforce and Breakpoint Hacking Techniques under his 'Jay' alias. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": 43956,

  "memory": { "load_address": "Sample HVSC file traced (Automatic, the tool's own bundled demo tune): load $c000 (init $c9ab, play $c612).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $c9ab.", "play": "Sample trace: $c612 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in a dense 205-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED AS A REAL, PUBLICLY-DISTRIBUTED SCENE TOOL, not just an internal in-game routine: CSDb release id=43956, 'Jay's Music Routine V1' (alt. title 'Jason Page Music Editor'), classified as a C64 Tool, released 1988, credited solely to 'Jay (of Breakpoint Hacking Techniques and Newforce)' for both code and music. The bundled demo tune, `JAYSMUSICROUTINEV1.prg`, is exactly this project's own traced 'Automatic.sid' file — a direct, confirmed match, not an inference.",
    "SIDId INDEPENDENTLY CORROBORATES: `sidid.nfo` lists this exact tag with name 'Jays Music Routine,' author 'Jason Page (Jay),' released 1988, pointing at the same CSDb release id.",
    "THE 'JAY' ALIAS IS ALREADY CONFIRMED ELSEWHERE IN THIS KB, not a new finding: Jason Page's own CSDb scener profile (id=4121, already cited in [[robtracker]]'s card) lists handle 'Jay' and Compunet ID 'JP22' — this CSDb release is additional first-party corroboration of the same alias tied to a specific dated product.",
    "THE 'JAYS_EDITOR_2'/'JAYS_EDITOR_3' FILE NAMES PLAUSIBLY REFLECT LATER VERSIONS of this same editor's engine-test tunes, but NO CSDb release for a V2 or V3 was found — explicitly left UNCONFIRMED whether those version numbers were ever separately distributed, or are just Page's own internal naming for later test tunes.",
    "TIMELINE PLACEMENT IS PLAUSIBLE BUT NOT PROVEN to be the 'spare-time routine' [[jason-page]]'s own card already documents from his Remix64 interview ('at Graftgold... I was also writing my own routine in my spare time') — this 1988 release, squarely inside that card's dated 1988-90 window and packaged for scene distribution under a different alias via different groups (Newforce/Breakpoint Hacking Techniques) than any Graftgold credit, is a strong circumstantial match, but no source directly states the equivalence. Treated as two distinct, possibly-related-but-unproven routines from the same short window, not conflated.",
    "GROUP CONTEXT: CSDb's Newforce group page (id=1819, United Kingdom, active 1987-88, 24 releases) lists 'Jay' as an ex-member (1988, Coder), alongside Asmodis, Bizzmo, Einstein, Greeny, Huddy, and Mr.Foc. A possible-but-unconfirmed connection was checked and left open: Newforce's 'Bizzmo' MAY or MAY NOT be the same 'Bizzmo' already documented in [[nigel-grieve]]'s card (there identified as Doug Roberts/Relax Designs, a one-off reuser of Grieve's driver) — that card explicitly notes no group overlap with Grieve's own circle was found AT THE TIME, but didn't specifically check Newforce; treat as a common-handle coincidence unless independently verified further. Newforce's 'Einstein' member is very likely an unrelated handle collision with the 'Einstein' aliases already documented elsewhere in this KB for other composers/eras — not a real link.",
    "Not confirmed beyond the CSDb/SIDId entries already cited (no separate SIDId author lookup needed — same record). Direct relationship to [[jason-page]] (same composer, plausibly-related third routine) — cross-referenced in that card. No confirmed relationship to [[steve-turner]] or Graftgold specifically for THIS tag (unlike the original jason-page.md tag). No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found beyond the possible Bizzmo coincidence)."
  ],
  "sources": [
    "CSDb release id=43956 ('Jay's Music Routine V1' / 'Jason Page Music Editor'): https://csdb.dk/release/?id=43956",
    "SIDId sidid.nfo (github.com/cadaver/sidid) — 'Jason_Page/Jay' entry, name 'Jays Music Routine', author 'Jason Page (Jay)'",
    "CSDb group id=1819 (Newforce, ex-member roster including Jay): https://csdb.dk/group/?id=1819",
    "CSDb scener id=4121 (Jason Page, handle 'Jay', Compunet 'JP22' — already cited in robtracker.md)",
    "Remix64 — Jason Page interview (already cited in jason-page.md, the 'spare-time routine' quote): https://remix64.com/interviews/interview-jason-page.html",
    "Existing KB cards: knowledge/players/jason-page.md, knowledge/players/robtracker.md, knowledge/players/steve-turner.md, knowledge/players/nigel-grieve.md",
    "Local dataset: 3 files tagged Jason_Page/Jay, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Jason_Page/Jay` tag is a THIRD, distinct Jason Page tool —
'Jay's Music Routine'/'Jason Page Music Editor,' a genuinely
publicly-released 1988 scene editor via UK groups Newforce and Breakpoint
Hacking Techniques. Squarely inside the same window as his already-carded
[[jason-page]] original driver, but distributed separately under his
'Jay' alias. Player-ID-fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **direct CSDb
confirmation**: the tag's own traced demo tune matches the exact
distributable file bundled with a dated, named, publicly-released tool,
not an inference from a generic pattern. A plausible but explicitly
unproven link to [[jason-page]]'s own 'spare-time routine' quote is
reported honestly as circumstantial.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Jason_Page/Jay`-tagged
`.sid` + trace — which could also help settle whether this shares any
code with [[jason-page]]'s original driver.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Jason_Page/Jay` `.sid` (Automatic, the tool's own
bundled demo tune): load `$c000`, init `$c9ab`, play `$c612`, **205
register writes / 50 frames** (0 filter writes — dense). Internals
undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — CSDb (2 entries), SIDId's sidid.nfo, Remix64,
and 4 related KB cards.
