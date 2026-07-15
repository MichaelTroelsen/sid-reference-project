# Roger Svensson (Computer Boss International driver)

```json
{
  "id": "roger-svensson",
  "name": "Roger Svensson (Computer Boss International driver)",
  "aliases": ["Roger_Svensson"],
  "authors": ["Roger Svensson"],
  "released": "1986-1988 (Computer Boss International)",
  "status": "in-progress",
  "platform": "Swedish solo game developer Roger Svensson's own playroutine — CONFIRMED both coder and musician (a genuine one-man-band credit), described as Computer Boss International's (CBI) 'most prolific game designer.' Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Astrobot, 1986, CBI): load $c0e3 (init $c0e3, play $c0ef).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $c0e3.", "play": "Sample trace: $c0ef (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC CONFIRMS 'Svensson, Roger - SWEDEN' (extracted via summarized fetch, not raw grep — exact literal formatting UNCONFIRMED though the country itself is well-corroborated by independent sources below).",
    "IDENTIFIED AS COMPUTER BOSS INTERNATIONAL'S (CBI) MOST PROLIFIC DESIGNER, per a dedicated Scandinavian-games-history retrospective: CBI was a Swedish mail-order/publisher based in Eskilstuna. Per that source, Svensson made 5 games for CBI 1984-1988: Jump (a Jumping Jack clone), Astrobot, Astrobot II, Othello, and Walliball — this project's own 3-file tag covers Astrobot, Astrobot II, and Walliball specifically.",
    "CONFIRMED BOTH CODER AND MUSICIAN, a genuine solo one-man-band credit: Lemon64's own credits for Astrobot (1986) list programmer, musician/composer, AND graphics ALL as Roger Svensson himself, published by CBI — unusual among small budget-label titles but not unprecedented, matching the pattern already seen on several other solo-developer cards in this KB.",
    "'ASTROBOT II' (1988) LACKS A FULLY POPULATED CREDITS PAGE — its listing pages exist (c64online.com, commodoregames.net, WoWroms) confirming the 1988/CBI sequel relationship, but no individual credits breakdown was independently verified for it beyond the general CBI/Svensson pattern already established. Left explicitly UNCONFIRMED whether he's separately credited as coder+musician on this specific sequel, though consistent with the pattern.",
    "'WALLIBALL' (1987 per most listings) IS CLASSIFIED AS AN ARCADE/BREAKOUT-PONG-STYLE TITLE per WoWroms — confirmed to exist under this composer's tag via a DeepSID file page reference, matching this project's own dataset.",
    "NO CSDb SCENER PROFILE EXISTS — a direct web search found no matching scener page, consistent with a mid-1980s Swedish commercial/budget-label developer rather than a demoscene participant. No Swedish scene-group membership found, though this absence was checked only via general web search, not a direct CSDb site search — flagged as a minor sourcing gap.",
    "THE TRACED FILE'S HEAVILY ASYMMETRIC PER-VOICE ACTIVITY (osc3=103 writes vs. osc1/osc2=8 each, filter=0) IS TYPICAL OF A SMALL, HAND-ROLLED EFFECTS/ARPEGGIO ROUTINE ON ONE CHANNEL, consistent with an isolated one-man-band developer's own custom in-game routine rather than a shared, general-purpose tracker driver — this is inference from the trace data itself, not sourced elsewhere.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — checked against the KB's other Scandinavian composers ([[jonas-hulten]], [[bo-mellberg]]) with no overlap found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Svensson, Roger - SWEDEN'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "FRGCB — 'A Brief History of Scandinavian Games' (CBI context, 5-game credit list): http://frgcb.blogspot.com/2017/07/special-brief-history-of-scandinavian.html",
    "Lemon64 — Astrobot (full credits, traced file): https://www.lemon64.com/game/astrobot",
    "c64online.com — Astrobot II: https://c64online.com/c64-games/astrobot-ii/",
    "commodoregames.net — Astrobot II: https://www.commodoregames.net/Commodore64/Astrobot-II-22294.html",
    "WoWroms — Astrobot II; Walliball: https://wowroms.com/11/roms/commodore-64/download-astrobot-ii/121893.html",
    "DeepSID file page — Walliball.sid: https://deepsid.chordian.net/?file=MUSICIANS%2FS%2FSvensson_Roger%2FWalliball.sid",
    "Local dataset: 3 files tagged Roger_Svensson, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Roger_Svensson` tag is Swedish solo game developer Roger Svensson's
own playroutine — a confirmed coder+musician, described as Computer
Boss International's most prolific game designer. Player-ID-
fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed
one-man-band credit** on Astrobot (coder, musician, AND graphics all
himself), sourced via Lemon64's own structured credit page rather than
inferred. Also notable: a dedicated **Scandinavian-games-history source**
gives useful publisher/company context (CBI, Eskilstuna) rarely
available for such a small budget-label developer.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Roger_Svensson`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Roger_Svensson` `.sid` (Astrobot): load `$c0e3`, init
`$c0e3`, play `$c0ef`, **119 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, FRGCB, Lemon64, and 3
listing sites.
