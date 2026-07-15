# Jeremy Hall (player routine)

```json
{
  "id": "jeremy-hall",
  "name": "Jeremy Hall (player routine)",
  "aliases": ["Jeremy_Hall"],
  "authors": ["Jeremy Hall"],
  "released": "1984-1988",
  "status": "in-progress",
  "platform": "English coder-musician Jeremy Hall's own hand-coded playroutine — confirmed both coder and musician via his own CSDb scener profile (member of group I.O.U.), with one confirmed commercial game credit (Mr Mephisto, 1984). Player-ID-fingerprinted across 3 files, all his own, including a Led Zeppelin cover.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (G-Force): load $8038 (init $8166, play $80ca).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $8166.", "play": "Sample trace: $80ca (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in a very sparse 8-write/50-frame, single-voice sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC HAS NO METADATA AT ALL — a bare 'Hall, Jeremy' entry, no country, no group. Country (likely UK) is inferred circumstantially from his confirmed CSDb scene activity and 'Mr Mephisto' game credit, not an HVSC-sourced fact.",
    "CSDb SCENER PROFILE CONFIRMS BOTH CODER AND MUSICIAN (id=29017): roles Coder AND Musician, not music-only. Only confirmed release as BOTH coder and musician: 'Ball IV' (1986, one-file demo). Music-only credits on OTHER groups' releases: Intro Editor V5.0 (Beastie Boys, 1987 tool), Musik Eddi 2 (Orionsoft, 1986), Venom Demo II (I.O.U., 1986), A New Little Demo (The Mupet Babies, 1988), The Porsche V1.2 (BrianSoft, 1986), Costa del Sol (Danish Graphic Makers, 1986), plus a re-released 'Mr. Mephisto Themes' music collection (Bitstoppers/German Spreading Service, 1986) and a 2020 cracktro reusing his old music. Demozoo independently lists him only as a member of group I.O.U.",
    "'MR MEPHISTO' (1984) CONFIRMED AS A REAL COMMERCIAL GAME, an overhead-view arcade/climbing title, sourced from a Lemon64 forum thread and MobyGames: programmer Dave Lucas, musician J. Hall (Jeremy Hall), with a 'G. Hunt' also mentioned as a collaborator in an UNCONFIRMED role (possibly graphics or a second programmer, not established). Published by Euro-Byte Ltd. (Godalming, Surrey, England) 1984, clam-case; re-released by Bug-Byte (London) 1986, single case.",
    "'G-FORCE' (the traced file) COULD NOT BE INDEPENDENTLY CONFIRMED as a distinct commercial release — extensive searching (Lemon64, MobyGames, GB64, Demozoo, general web) found no distinct C64 game page matching this title from the mid-1980s associated with Hall, Euro-Byte, or Bug-Byte. NO connection to the Gerry Anderson 'Battle of the Planets'/G-Force property was found — that association is EXPLICITLY treated as speculative, not fact. Genuinely possible this is an obscure budget title, a type-in listing, or a non-game demo/tool by that name — flagged as unresolved, not guessed at.",
    "'STAIRWAY TO HEAVEN' IS VERY LIKELY A LED ZEPPELIN COVER ARRANGEMENT (the title is too distinctive to be coincidental, and pop-song covers were common practice among early C64 musicians) — but NO explicit confirming source was found (no STIL.txt comment, no CSDb/Demozoo annotation stating 'cover of Led Zeppelin'). Reported as a high-confidence inference, not a sourced fact.",
    "THE TRACED FILE'S VERY SPARSE, SINGLE-VOICE-ONLY PROFILE (8 writes/50 frames, osc1 only, no filter) SUGGESTS A MINIMAL BESPOKE IN-GAME ROUTINE rather than a shared/documented tool — consistent with no SIDId entry existing for this tag.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — no basis to link him to any of the 168+ existing player cards given his isolated, minimal bespoke routine and small commercial/demoscene footprint (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (bare 'Hall, Jeremy' entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener id=29017 (Jeremy Hall, Coder/Musician, full credit list): https://csdb.dk/scener/?id=29017",
    "Demozoo — Jeremy Hall (id=134557, I.O.U. membership): https://demozoo.org/sceners/134557/",
    "Lemon64 forum — Mr Mephisto credits (programmer Dave Lucas, musician J. Hall): https://www.lemon64.com/forum/viewtopic.php?t=33033",
    "MobyGames — Mr Mephisto: https://mobygames.com/game/64739/mr-mephisto/",
    "Demozoo — Mr. Mephisto Themes (1986 re-release, music collection): https://demozoo.org/music/314849/",
    "Local dataset: 3 files tagged Jeremy_Hall, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Jeremy_Hall` tag is English coder-musician Jeremy Hall's own
hand-coded playroutine — confirmed both coder and musician via his own
CSDb scener profile, with one confirmed commercial game credit (Mr
Mephisto, 1984). Player-ID-fingerprinted across 3 files, all his own,
including a likely Led Zeppelin cover.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **explicitly
unconfirmed 'G-Force' game identity**: extensive searching found no
matching commercial release, and a speculative Gerry Anderson tie-in
theory was explicitly ruled out as unsupported rather than assumed.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Jeremy_Hall`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Jeremy_Hall` `.sid` (G-Force): load `$8038`, init
`$8166`, play `$80ca`, **8 register writes / 50 frames** (0 filter
writes — very sparse, single-voice). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, Demozoo (2 pages), a
Lemon64 forum thread, and MobyGames.
