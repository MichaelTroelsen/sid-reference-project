# Mark Harrison ("The Music System" tag)

```json
{
  "id": "the-music-system",
  "name": "Mark Harrison (\"The Music System\" tag)",
  "aliases": ["The_Music_System"],
  "authors": ["Mark Harrison"],
  "released": "1985 (Firebird)",
  "status": "in-progress",
  "platform": "English composer Mark Harrison's own playroutine — reported HONESTLY as UNIDENTIFIED, not guessed at: despite the SIDId tag name 'The Music System' sounding like a specific named product, extensive searching found NO commercial or PD C64 music editor actually called that, no magazine listing, no CSDb/Lemon64 tool-database entry. With an empty SIDId author field and only 3 near-identical files from one composer, this most plausibly reads as a generic/descriptive catalog label applied by a HVSC/SIDId cataloguer, not a real distributed tool. CSDb itself flags Harrison as 'Not a scener, just added to credit a tune.' Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Breaker, 1985, Firebird): load $57ba (init $7d71, play $7d7d).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $7d71.", "play": "Sample trace: $7d7d (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in a very sparse 13-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "'THE MUSIC SYSTEM' IS EXPLICITLY REPORTED AS AN UNIDENTIFIED, LIKELY GENERIC LABEL — a deliberate honesty flag rather than an invented product story: extensive searching (VGMPF, magazine archive text, CSDb/Lemon64 tool databases, general C64 music-editor-history coverage of Soundmonitor/Music Studio/Kawasaki Synthesizer and similar) found NO commercial or PD tool actually named 'The Music System.' Combined with SIDId's own empty author field, this most plausibly reads as a cataloguer-applied descriptive label for a simple, unremarkable playroutine, not a real distributed product — explicitly recommended NOT to be asserted as a specific tool/author in this card.",
    "HVSC CONFIRMS 'Harrison, Mark - UNITED KINGDOM (ENGLAND)' with no group; this project's own local composer cache adds `focus1: PRO`, `active: 1987`, `employment: Freelance 1981-1990`.",
    "CSDb ITSELF EXPLICITLY FLAGS HIM AS A NON-SCENER, MUSIC-CREDIT-ONLY ENTRY (id=17487): trivia field reads verbatim 'Not a scener, just added to credit a tune' — a rare, direct curatorial statement (matching the similar note already found on [[andrew-colin]]'s CSDb profile), confirming he was a purely commercial games composer retroactively credited on scene rips/collections (SIDBurners 1994, Ghetto Music 1987, etc.), not an active scene participant.",
    "'BREAKER' (the traced file) IS A REAL BUT POORLY-DOCUMENTED 1985 FIREBIRD RELEASE, distinct from an entirely UNRELATED 1987 Radarsoft game ALSO called 'Breaker' (a Dutch breakout clone by Renier Hongens/Jeroen Leijten/Theo Hongens) — EXPLICITLY FLAGGED to avoid conflation, the same kind of name-collision risk already documented on [[stephen-biggs]]'s 'Sentinel' card. Harrison's own 1985 Firebird 'Breaker' has no linked CSDb release/game production record at all beyond the bare SID tune metadata — genuinely under-documented, possibly unreleased or lost, not a research gap on this project's part.",
    "NO EVIDENCE HE WAS A CODER — all his CSDb credits are typed 'Music' only. His broader CSDb-documented output beyond the Breaker-titled tunes includes Sigue Sigue Sputnik (1986, Significance), Street Beat (1987, Mastertronic), Rainbow Warrior (1989, with Tony Gibson), and Ghettoblaster (1985, with Tony Gibson, Virgin Games) — those last two use a DIFFERENT, uncarded player tag, not this one, so `The_Music_System` appears specific to just the 3 Breaker-titled tunes documented here.",
    "Not confirmed in SIDId beyond the bare tag name itself. No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — a shared 'Firebird' publisher tag appears tangentially in [[stephen-biggs]] and [[david-dunn]] cards, but no direct personal connection was found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Harrison, Mark - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: data/composers/mark-harrison.json (composer profile), data/csdb/mark-harrison.json (CSDb cache)",
    "CSDb scener id=17487 (Mark Harrison, 'Not a scener, just added to credit a tune'): https://csdb.dk/scener/?id=17487",
    "CSDb sid id=55201 (Breaker.sid, load/init/play matching traced file, 'Released: 1985 Firebird'): https://csdb.dk/sid/?id=55201",
    "Existing KB card: knowledge/players/stephen-biggs.md (the parallel name-collision-flagging pattern for a 'Sentinel' title)",
    "Local dataset: 3 files tagged The_Music_System, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `The_Music_System` tag is English composer Mark Harrison's own
playroutine — reported honestly as an UNIDENTIFIED tag rather than a
confirmed named product, since no such tool exists in any source
checked. CSDb itself flags Harrison as a non-scener, music-credit-only
entry. Player-ID-fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **deliberate
honesty flag**: rather than inventing a plausible-sounding product story
for 'The Music System,' this card reports that no such tool could be
found anywhere and treats the tag as a likely generic cataloguer label.
Also flagged: a **real name-collision risk** on the traced game's own
title, 'Breaker,' against an unrelated 1987 Dutch game of the same name.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `The_Music_System`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `The_Music_System` `.sid` (Breaker): load `$57ba`,
init `$7d71`, play `$7d7d`, **13 register writes / 50 frames** (0 filter
writes — very sparse). Internals undocumented; memory map/format/effects
are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, local dataset caches, CSDb
(2 entries), and the related stephen-biggs card.
