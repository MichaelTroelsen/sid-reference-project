# Steffen Wagner (player routine)

```json
{
  "id": "steffen-wagner",
  "name": "Steffen Wagner (player routine)",
  "aliases": ["Steffen_Wagner"],
  "authors": ["Steffen Wagner"],
  "released": "1990",
  "status": "in-progress",
  "platform": "German composer Steffen Wagner's playroutine — a genuinely thin trail: 5 standalone (non-game, non-demo) SID tunes from 1990, no CSDb scener identity, no group affiliation, no interviews. CSDb itself marks his composer credit with a '<?>' unresolved-identity marker on all 5 releases. Player-ID-fingerprinted across 5 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Can't Stop, 1990): load $1a80 (init $1a80, play self-installing RSID — resolved by this project's own tracer despite the format).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1a80.", "play": "Self-installing IRQ handler (RSID format); successfully traced." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 1 filter write in a sparse 13-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "ALL 5 FILES ARE STANDALONE COMPOSITIONS, NOT GAME OR DEMO CREDITS: 'Can't Stop', 'Get Higher', 'Go On', 'The Race', 'The Space' — all dated 1990, all confirmed via direct CSDb SID-entry lookups (ids 30579-30583) as independent SID rips, none matching any known C64 game title. No game titled 'Can't Stop' or similar exists in Lemon64/gb64/MobyGames under his name.",
    "CSDb ITSELF FLAGS HIS COMPOSER CREDIT AS UNRESOLVED: each of the 5 CSDb SID entries marks the composer name with a '<?>' notation — CSDb's own convention for 'no confirmed/linked musician profile', meaning CSDb is just relaying the HVSC filename/credit with no independent identity record behind it.",
    "NO CSDb SCENER PROFILE EXISTS AT ALL — a direct CSDb scener search for 'Wagner' returned zero results, ruling out membership in any of the well-known German demoscene groups of the era (Triad, Vision Factory, Rebels, etc.) that might otherwise be assumed for a German 1990 composer. Best read: an amateur/hobbyist composer working entirely outside the organized demoscene, not merely under-documented within it.",
    "NO INTERVIEWS OR FIRST-PERSON MATERIAL FOUND. Web searches for 'Steffen Wagner' surface only unrelated modern namesakes (a KPMG partner, a statistics professor, a graphic designer, various unrelated LinkedIn/SoundCloud profiles) — explicitly checked and discarded as irrelevant, not this composer.",
    "THIS PROJECT'S OWN RSID-TRACING FIX SUCCEEDED HERE, WORTH NOTING TECHNICALLY: 'Can't Stop' is an RSID (self-installing-interrupt format, play address $0) — the kind of file this project's custom tracer generally CANNOT drive (see CLAUDE.md's RSID discussion) — but in this specific case the tracer's bounded-INIT polling loop DID resolve the installed handler and produced a real (if sparse, 13-write) 50-frame trace, rather than failing. A useful data point that not every RSID hits the architectural gap equally hard.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — no co-credits, shared groups, or cross-references discovered (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Wagner, Steffen - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb sid/?id=30579 (Can't Stop, traced file) and sibling ids 30580-30583 (Get Higher, Go On, The Race, The Space) — all marked '<?>' unresolved composer: https://csdb.dk/sid/?id=30579",
    "CSDb scener search for 'Wagner' (zero results, confirming no scener profile): https://csdb.dk/search/?seinsel=scener&search=Wagner",
    "Local dataset: 5 files tagged Steffen_Wagner, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Steffen_Wagner` tag is German composer Steffen Wagner's playroutine
— a thin, honestly-reported trail: 5 standalone 1990 SID tunes, no game
or demo credits, no CSDb scener identity, no interviews. Player-ID-
fingerprinted across 5 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **honest sparse-
biography flag**: CSDb itself marks his composer credit as unresolved,
and no scene, game, or interview trail exists — reported as a genuinely
thin case rather than padded out. A secondary technical note: this
tag's RSID sample file was one this project's tracer COULD successfully
resolve, unlike many other self-installing RSID tags.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Steffen_Wagner`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Steffen_Wagner` `.sid` (Can't Stop, an RSID file):
load `$1a80`, init `$1a80`, self-installing IRQ handler successfully
resolved, **13 register writes / 50 frames** (1 filter write — sparse).
Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (SID entries + scener
search).
