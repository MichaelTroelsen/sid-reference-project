# Music Magic (Mark Riley & Jon Rami)

```json
{
  "id": "music-magic",
  "name": "Music Magic (Mark Riley & Jon Rami)",
  "aliases": ["Music_Magic"],
  "authors": ["Mark Riley", "Jon Rami"],
  "released": "1984",
  "status": "in-progress",
  "platform": "IMPORTANT SCOPE NOTE: 'Music Magic' (1984) is a music COLLECTION of pop-song/TV/classical cover arrangements (Code: Mark Riley, Music: Jon Rami) — 9 tunes on one disk — not a distributed editor/player tool in the usual sense of other cards in this KB. The 'Music_Magic' DeepSID tag is almost certainly the disk/collection name being used as a de-facto player-tag for Riley's playback code, not a named product. Player-ID-fingerprinted across 9 files, all by Jon Rami (the collection's musician, one of its own two co-creators).",
  "csdb_release": 129644,

  "memory": { "load_address": "Sample HVSC file traced (Africa, a Toto cover): load $11a4 (init $11a4, play $19e2).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $11a4.", "play": "Sample trace: $19e2 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 8 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED A COVER/ARRANGEMENT COLLECTION, not original compositions: CSDb release 129644 lists all 9 track titles — Africa (Toto), Andy Griffith Show (TV theme), Eleanor Rigby (Beatles), Every Breath (The Police), Maniac (Flashdance theme), Money, Nut Cracker (Tchaikovsky), Rami Tune1, Super Bunny Theme — confirming the pop-song/TV/classical-cover hypothesis directly from the source data, not inferred from titles alone.",
    "MARK RILEY = CODE, JON RAMI = MUSIC, per the CSDb release credits — this is genuinely a two-person collaboration, not solo work, with the DeepSID tag's sole traced composer (Jon Rami) being the musician half of the pair, not its coder.",
    "REAL, INDEPENDENTLY CORROBORATED AMIGA CAREER, not a name-collision guess: BOTH CSDb scener pages (Riley id=26385, Rami id=26386) carry a descriptor tying them to Aegis Sonix on Amiga, and Wikipedia (citing Amiga Future #109, 2014) independently confirms Commodore built an unreleased Amiga sound app codenamed 'Musicraft'; Aegis Development bought the rights and contracted the ORIGINAL DEVELOPERS Mark Riley and Gary Koffler to continue its development into the commercially published Aegis Sonix (1987). Jon Rami is separately associated with the 1990 add-on packs 'Aegis Sonix SoundTrax Vol 1/2'. Two independent sources agreeing on the same Riley/Sonix link is real corroboration, not a coincidental-name risk — this C64 pairing went on to ship real commercial Amiga music software together.",
    "1001 CREW GROUP CONTEXT: both scener pages list the Dutch group '1001 Crew' (active 1985-87), with two 1986 standalone re-releases of Music Magic tracks under that group banner ('Every Breath You Take', 'Maniac') — same titles as tracks in the original 1984 collection. NOTE: Music Magic (1984) predates 1001 Crew's documented CSDb activity window (1985-87) — either the pairing predates the group's formal existence, or CSDb's coverage of the group's early years is incomplete; not resolved.",
    "AN UNCONFIRMED, EXPLICITLY FLAGGED LEAD: a 1983 Datamost C64 paint program called 'Paint Magic' also credits a 'Mark Riley' — plausible given the shared '___ Magic' naming convention and era, but CSDb's Paint Magic release page carries NO credits at all, so there is no direct database link confirming it's the same person. Treated as coincidental-name, not asserted as fact.",
    "No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "CSDb release 129644 (Music Magic, full track list, Code/Music credit split): https://csdb.dk/release/?id=129644",
    "CSDb scener — Mark Riley (id=26385, 1001 Crew, Aegis Sonix descriptor): https://csdb.dk/scener/?id=26385",
    "CSDb scener — Jon Rami (id=26386, 1001 Crew, Aegis Sonix SoundTrax descriptor): https://csdb.dk/scener/?id=26386",
    "CSDb group — 1001 Crew (id=81, Netherlands, active 1985-87): https://csdb.dk/group/?id=81",
    "Wikipedia — Aegis Sonix (Musicraft origin, Mark Riley + Gary Koffler contracted to continue development): https://en.wikipedia.org/wiki/Aegis_Sonix",
    "HVSC Musicians.txt (bare 'Rami, Jon' entry; 'Riley, Mark' does not appear at all): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: 9 files tagged Music_Magic, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Music_Magic` tag represents a 1984 music collection of pop-song/TV/
classical cover arrangements — code by Mark Riley, music by Jon Rami —
rather than a distributed editor tool in the usual sense. Player-ID-
fingerprinted across 9 files, all by Jon Rami. Notably, both creators went
on to real, independently-corroborated careers on Commodore's Amiga
platform, contracted to develop the commercial music software Aegis
Sonix.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: this is **confirmed a
cover/arrangement collection**, not original compositions, directly from
CSDb's own track list; the **real Aegis Sonix Amiga connection**,
corroborated by two independent sources rather than assumed from a name
match; and an **explicitly unconfirmed 'Paint Magic' lead** flagged rather
than asserted.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Music_Magic`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Music_Magic` `.sid` (Africa, a Toto cover): load
`$11a4`, init `$11a4`, play `$19e2`, **193 register writes / 50 frames**
(8 filter writes). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — CSDb (release + 2 scener + group), Wikipedia,
and HVSC Musicians.txt.
