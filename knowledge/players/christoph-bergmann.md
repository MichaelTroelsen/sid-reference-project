# Christoph Bergmann / Walchy (player routine)

```json
{
  "id": "christoph-bergmann",
  "name": "Christoph Bergmann / Walchy (player routine)",
  "aliases": ["Christoph_Bergmann"],
  "authors": ["Christoph Bergmann ('Walchy')"],
  "released": "1987-1991 (German/Dutch demoscene + Zeppelin Games)",
  "status": "in-progress",
  "platform": "German demoscener Christoph Bergmann's (handle 'Walchy', group 4XC8) own playroutine — a genuine coder/musician confirmed via his own CSDb profile, credited Code+Graphics+Linking+Music on his own one-file demos. One tune ('Zounds') was independently reused across at least 3 separate releases (2 demos plus the commercial game 'Master Blaster'), confirmed via HVSC's own STIL.txt cross-reference. Player-ID-fingerprinted across 4 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Master Blaster, 1988, Zeppelin Games, RSID format resolved by this project's tracer): load $7c00 (init $7c00, self-installing play).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $7c00.", "play": "Self-installing IRQ handler (RSID format); successfully traced." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "'MASTER BLASTER' (the traced file, 1988, Zeppelin Games, a commercial vertical-scrolling shoot-'em-up) IS CONFIRMED AS A TUNE REUSE, not an original score: Lemon64's own credits list (design David Baxter; programming James Doyle & Mark Hughes; graphics Peter Wolfe & Rai Harjinder; music Christoph Bergmann) note it as 'a different and shorter version of Flying Shark 2' — independently confirmed by this project's own cached STIL.txt COMMENT field on the file itself. 'Flying Shark 2' here is a FAN-MADE SEUCK game (CSDb release 19861, 1988) — explicitly NOT the same as the professional 1987 Firebird 'Flying Shark' (whose music was by Jim Evans, unrelated) — a distinction worth preserving to avoid conflation.",
    "A NAME-COLLISION RISK EXPLICITLY CHECKED AND FLAGGED: a DIFFERENT, unrelated SEUCK game also called 'Master Blaster' was published by Pirate Software/Kingsoft in Germany — Bergmann's credit is specifically on the Zeppelin Games commercial title, not that one.",
    "'ZOUNDS' IS NOT A SEPARATE GAME, but the self-titled tune of Bergmann's own 1991 one-file demo ('The Zounds! Demo', CSDb release 22345, June 1991) — on which he is credited for Code, Graphics, Linking, AND Music himself. HVSC's own STIL.txt confirms this same tune was REUSED across multiple releases: 'Also used in the game Master Blaster' and 'Also used in games Flying Shark II and Master Blaster' — a genuinely well-documented case of one tune's reuse trail, unusually thoroughly cross-referenced for this KB.",
    "CONFIRMED BOTH CODER AND MUSICIAN, per his own CSDb scener profile (id=11476, `FreelanceFunctions: [Coder, Musician]`) — he personally did Code+Graphics+Linking+Music on 'The Zounds! Demo' and Code+Music+Graphics on 'Sound-Wiz #1', both one-file demos, directly supporting a self-written driver.",
    "CSDb IDENTIFIES HIS HANDLE AS 'Walchy' (marked as his currently-used handle), German, member of group '4XC8' (a 'Music Group,' status 'ex' — former member) — could not be independently verified beyond this project's own cached CSDb data. A separate, unconfirmed later/alternate handle 'WindWalkr' appears in this project's own composer profile but was not independently corroborated via web search. Active mainly 1987-88 in the German/Dutch one-file-demo scene (Amaniac Demo, Eddie's Revenge, Umumba, The Scene of Crime, Digital Dream, Dezpot, Megarock, Our Very Best, and others).",
    "A GENUINE CO-CREDIT LINK FOUND TO AN EXISTING KB COMPOSER: on 'Street Gang' (Rainbow Arts/Time Warp Productions, 1987 — producers Armin Gessert/Marc A. Ullrich, coders Armin Gessert/Arnd Nolte, graphics Boris Kunkel/Michael Grohe), Bergmann is credited as CO-MUSICIAN alongside [[georg-brandt]] (already carded in this KB). Not encoded as a technical edge (a shared game credit, not shared driver code), but a real, sourced professional connection — [[georg-brandt]]'s own card has been updated in this same batch with this cross-reference.",
    "A LIKELY MOBYGAMES NAME-COLLISION WAS FLAGGED, NOT INCLUDED AS FACT: a MobyGames 'Christoph Bergmann' profile appears to conflate this C64-era composer with an unrelated modern games-industry person credited on Deathloop (2021) — UNCONFIRMED as the same individual, treated as a likely collision. No other interviews or first-person material were found.",
    "Not confirmed in SIDId (no entry for this tag). Direct, sourced relationship to [[georg-brandt]] noted above. No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Bergmann, Christoph - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: data/hvsc/musicians.json, data/csdb/christoph-bergmann.json, data/hvsc/STIL.txt (Zounds/Master Blaster reuse cross-reference)",
    "Lemon64 — Master Blaster (full credits, traced file): https://www.lemon64.com/game/master-blaster",
    "CSDb scener id=11476 (Walchy/Christoph Bergmann, Coder+Musician, group 4XC8): local cache",
    "CSDb release 22345 ('The Zounds! Demo', June 1991): local cache",
    "CSDb release 19861 ('Flying Shark 2 [seuck]', 1988, the fan-made game whose tune Master Blaster reused): local cache",
    "Existing KB card: knowledge/players/georg-brandt.md (the Street Gang co-credit this research surfaced)",
    "Local dataset: 4 files tagged Christoph_Bergmann, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Christoph_Bergmann` tag is German demoscener Christoph Bergmann's
('Walchy', group 4XC8) own playroutine — a confirmed coder/musician whose
'Zounds' tune was reused across at least 3 separate releases, including
the commercial game 'Master Blaster'. Player-ID-fingerprinted across 4
files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: an unusually
**well-documented tune-reuse trail** (Zounds → 2 demos + a commercial
game, cross-confirmed via STIL.txt), the **confirmed self-coded driver**
via his own CSDb profile, and a **genuine co-credit link** to
[[georg-brandt]] (already carded in this KB) via the 1987 game 'Street
Gang' — [[georg-brandt]]'s own card has been updated to cross-reference
this same finding.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note beyond the
COMMENT reuse trail already cited). A future `verified` needs an original
disassembly of a `Christoph_Bergmann`-tagged `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Christoph_Bergmann` `.sid` (Master Blaster, an RSID
file): load `$7c00`, init `$7c00`, self-installing IRQ handler
successfully resolved, **126 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, local dataset caches (3),
Lemon64, CSDb (2 releases), and the related georg-brandt card.
