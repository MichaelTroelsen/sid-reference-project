# Colin Davies (player routine)

```json
{
  "id": "colin-davies",
  "name": "Colin Davies (player routine)",
  "aliases": ["Colin_Davies"],
  "authors": ["Colin Davies"],
  "released": "Undated (likely amateur/hobbyist, HVSC-only)",
  "status": "in-progress",
  "platform": "A playroutine credited to 'Colin Davies' — a genuinely thin case, reported honestly rather than padded out: exhaustive searches (Lemon64, GB64, MobyGames, CSDb, Demozoo) found NO game, demo, or commercial credit anywhere for any of his 3 tune titles (Bad Toon, Remix Toon, Very Naff), and no CSDb scener profile exists. Most likely an amateur/hobbyist composer whose work reached HVSC without ever being tied to a released game. Player-ID-fingerprinted across 4 files: 3 by Davies, 1 by Jason Tinkler (an unrelated UK scener with his own CSDb coder/graphician/musician profile) — the reason for that 4th file's inclusion under this tag could not be resolved from any external source and is most likely a data-matching artifact in the underlying SID metadata rather than a real-world connection.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Bad Toon, composed by Colin Davies): load $7000 (init $83c0, play $8800).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $83c0.", "play": "Sample trace: $8800 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 1 filter write in a dense 317-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "NO GAME, DEMO, OR COMMERCIAL CREDIT FOUND FOR ANY OF DAVIES'S 3 TITLES anywhere checked (Lemon64's game database, GB64, MobyGames, general web) — no game titled 'Bad Toon,' 'Remix Toon,' or 'Very Naff' exists in any of these sources under his name. HVSC's own Musicians.txt entry for him is bare ('Davies, Colin', no country, no group), consistent with an amateur/hobbyist submission that never went through a commercial release pipeline.",
    "THE 'TOON'-THEMED TITLES DO NOT APPEAR TO REFERENCE A LICENSED CARTOON PROPERTY: 'Very Naff' (British slang for 'lame/uncool') reads as self-deprecating humor typical of amateur composer naming, not a commercial product title — flagged as a plausible, not confirmed, reading, since a very obscure unlisted release couldn't be fully ruled out.",
    "NO CSDb SCENER PROFILE EXISTS for Colin Davies — multiple direct and site-search queries returned zero matching profiles, consistent with him operating entirely outside any organized demoscene or commercial credit trail.",
    "THE 4TH FILE UNDER THIS TAG, 'Aquarius V1', IS CREDITED TO A DIFFERENT COMPOSER, Jason Tinkler (HVSC: 'Tinkler, Jason - UNITED KINGDOM (ENGLAND)') — who DOES have his own CSDb scener profile (id=23185, functions Coder/Graphician/Musician), with one logged solo release, 'Out-Space' (2011, a C64 shoot-'em-up, solo code+music+graphics+design, no group). NO source (CSDb, HVSC, Lemon64, MobyGames, Demozoo) shows any documented collaboration, shared group, or shared publisher between Davies and Tinkler — the most likely explanation for their shared tag is a data-matching artifact in the underlying SID file metadata (e.g. an ambiguous embedded author field), not a real-world relationship. Left explicitly unresolved rather than guessed at; a direct look at the raw SID header of `Aquarius_V1.sid` (outside the scope of web research) could settle this.",
    "AN UNCONFIRMED, LOW-CONFIDENCE NAME-COINCIDENCE WAS NOTED AND EXPLICITLY NOT TREATED AS A FINDING: a CSDb scener profile for a 'Karen Davies' (id=24806) surfaced in searches — no evidence of any family or collaborative link to Colin Davies was found; flagged only as a curiosity for optional future follow-up.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB for either Colin Davies or Jason Tinkler (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Davies, Colin', bare entry; 'Tinkler, Jason - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener id=23185 (Jason Tinkler, Coder/Graphician/Musician): https://csdb.dk/scener/?id=23185",
    "CSDb release id=102708 ('Out-Space', 2011, Jason Tinkler solo): https://csdb.dk/release/?id=102708",
    "CSDb scener id=24806 ('Karen Davies', unconfirmed/unrelated name-coincidence, not a finding): https://csdb.dk/scener/?id=24806",
    "Local dataset: 4 files tagged Colin_Davies, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Colin_Davies` tag is a genuinely thin case, reported honestly: no
game, demo, or commercial credit was found for any of Colin Davies's 3
tunes, and no CSDb scener profile exists for him. A 4th file under the
same tag is credited to an apparently unrelated composer, Jason Tinkler
— the connection between the two could not be resolved and is most
likely a data-matching artifact, not a real relationship.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **honest sparse-
biography flag**: multiple independent database searches converged on
the same negative result for Davies, and the Davies/Tinkler tag-sharing
is explicitly left unresolved rather than guessed at.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Colin_Davies`-tagged `.sid`
+ trace — which could also directly settle the Davies/Tinkler tag-sharing
question by comparing routine structure.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Colin_Davies` `.sid` (Bad Toon): load `$7000`, init
`$83c0`, play `$8800`, **317 register writes / 50 frames** (1 filter
write — dense). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt and CSDb (3 entries).
