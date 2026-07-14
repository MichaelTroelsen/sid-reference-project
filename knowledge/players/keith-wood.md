# Keith Wood / Rita Jay (Microdeal driver)

```json
{
  "id": "keith-wood",
  "name": "Keith Wood / Rita Jay (Microdeal driver)",
  "aliases": ["Keith_Wood"],
  "authors": ["Keith Wood ('Rita Jay')"],
  "released": "1984-1985 (Microdeal / Bad Taste Software era)",
  "status": "in-progress",
  "platform": "English coder-composer Keith Wood's (HVSC alias 'Rita Jay') own playroutine — a confirmed solo one-man-band on his Microdeal arcade-clone titles, and a genuine, sourced Microdeal in-house colleague of already-carded [[steve-bak]] (Wikipedia's Microdeal article names Wood/'Rita Jay', Steve Bak, and Ed Scio as the company's in-house programmers). He also co-founded a small novelty-game imprint, Bad Taste Software, deliberately kept separate from Microdeal's own name. Player-ID-fingerprinted across 4 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Dis Baby, 1984, Bad Taste Software): load $1000 (init $1000, play $1003).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1000.", "play": "Sample trace: $1003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 1 filter write in a sparse 23-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC CONFIRMS THE 'RITA JAY' ALIAS DIRECTLY: the exact entry reads 'Wood, Keith (Rita Jay) - UNITED KINGDOM' — no group field, but the parenthetical alias is unambiguous and independently corroborated by CSDb/gb64/LaunchBox game credits, all of which use 'Keith Wood (Rita Jay)' as his composer credit.",
    "A GENUINE, SOURCED MICRODEAL COLLEAGUE OF AN ALREADY-VERIFIED-ADJACENT KB COMPOSER: the English Wikipedia article on Microdeal names its in-house programmers as Steve Bak, Rita Jay, and Ed Scio — meaning Wood/'Rita Jay' worked at the SAME company, in the SAME era, as [[steve-bak]] (already carded in this KB). No evidence of direct collaboration on a specific title was found — just shared employer/period (Microdeal, St Austell, Cornwall, early-mid 1980s) — but this is a real, sourced professional connection, not a speculative one.",
    "CONFIRMED SOLO CODER-MUSICIAN, first-party sourced: on 'Mr. Dig' (Microdeal, 1984, a Mr. Do!-style clone), Lemon64 credits Wood for BOTH programming/coding AND music. A Lemon64 forum post from someone identifying as Keith Wood himself directly discusses his own development history (see below), reinforcing this as a solo, self-coded body of work across his catalog rather than a musician-only credit.",
    "FIRST-PERSON ACCOUNT FOUND (Lemon64 forum, unverified account identity but internally consistent with known game history): he had 'six weeks' to program 'Di's Baby' (this project's tag renders the title 'Dis Baby' — a five-minigame novelty title riffing on Princess Diana's 1982 pregnancy, deliberately delaying its announcement until the royal baby was confirmed healthy), made 'less than £1500 from both' Bad Taste Software games, attributes the label's closure to the 1984 home-computer market collapse, and says he then held one job for '26+ years' afterward. He also mentions still having the source code for 'Santa's Grotty Christmas' but having lost 'Di's Baby's' source in a house move — a small, human, verifiable-feeling detail.",
    "'BAD TASTE SOFTWARE' WAS DELIBERATELY KEPT SEPARATE FROM MICRODEAL'S OWN NAME: per uvlist.net, the label was created specifically so Microdeal's own brand wouldn't be attached to the novelty/topical-humor titles — 'Di's Baby' (1984) and 'Santa's Grotty Christmas' (1985) were its only two releases. Other confirmed Microdeal-proper titles under his name: 'Mr. Dig' (1984, Mr. Do! clone), 'Pengon' (1984, a Pengo clone), and 'Arena 3000' (1984, per LaunchBox, not in this project's own 4-file tag set but same-author).",
    "NO CSDb SCENER PROFILE EXISTS for either 'Keith Wood' or 'Rita Jay' — a CSDb search surfaced only an unrelated 'Keith Tinman' (scener #4116, confirmed a different person/game) — consistent with a purely commercial 1984-85 UK budget-software career with no demoscene footprint.",
    "Direct, sourced relationship to [[steve-bak]] noted above (shared Microdeal employer, not shared driver code — not encoded as a technical edge). No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Wood, Keith (Rita Jay) - UNITED KINGDOM'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Wikipedia — Microdeal (names Wood/'Rita Jay', Steve Bak, Ed Scio as in-house programmers): https://en.wikipedia.org/wiki/Microdeal",
    "Lemon64 — Mr. Dig (full credits, coder+musician): https://www.lemon64.com/game/mr-dig",
    "LaunchBox Games DB — Keith Wood (Rita Jay) credited games: https://gamesdb.launchbox-app.com/developers/games/20995-keith-wood-rita-jay",
    "CSDb sid/?id=45230 (Pengon); CSDb sid/?id=1658 (Mr. Dig): https://csdb.dk/sid/?id=45230",
    "uvlist.net — Di's Baby (Bad Taste Software origin story): https://www.uvlist.net/game-33933-Dis+Baby",
    "Lemon64 forum — first-person account attributed to Keith Wood: https://www.lemon64.com/forum/viewtopic.php?t=41039",
    "Existing KB card: knowledge/players/steve-bak.md (the Microdeal colleague this research surfaced)",
    "Local dataset: 4 files tagged Keith_Wood, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Keith_Wood` tag is English coder-composer Keith Wood's ('Rita Jay')
own playroutine — a confirmed solo one-man-band on his Microdeal arcade-
clone titles, and a genuine Microdeal in-house colleague of already-
carded [[steve-bak]]. He also co-founded the novelty label Bad Taste
Software. Player-ID-fingerprinted across 4 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **genuine, sourced
professional connection to [[steve-bak]]** via Wikipedia's own Microdeal
article naming both as the company's in-house programmers. Also notable:
a **first-person forum account**, plausibly from Wood himself, giving a
human, specific account of the Bad Taste Software label's brief life and
closure.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Keith_Wood`-tagged `.sid`
+ trace — which could also help determine whether his routine shares any
code with [[steve-bak]]'s own Microdeal-era driver.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Keith_Wood` `.sid` (Dis Baby): load `$1000`, init
`$1000`, play `$1003`, **23 register writes / 50 frames** (1 filter
write — sparse). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Wikipedia, Lemon64,
LaunchBox, CSDb, uvlist.net, a Lemon64 forum post, and the related
steve-bak card.
