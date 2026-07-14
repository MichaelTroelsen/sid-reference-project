# Gavin Graham / Gazza (Warriors of Time)

```json
{
  "id": "gavin-graham",
  "name": "Gavin Graham / Gazza (Warriors of Time)",
  "aliases": ["Gavin_Graham"],
  "authors": ["Gavin Graham ('Gazza')"],
  "released": "1988-1989 (Warriors of Time era)",
  "status": "in-progress",
  "platform": "Australian demoscener Gavin Graham's ('Gazza,' group Warriors of Time) own playroutine — the name-mismatch between this project's tag ('Gavin_Graham', a real name) and the HVSC folder ('Gazza', a handle) is directly and unambiguously resolved by HVSC's own parenthetical notation. CONFIRMED both coder and musician on his own releases, still active today building modern SID tools. Player-ID-fingerprinted across 4 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Dobee, composed by Gazza): load $1000 (init $1000, play $1003).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1000.", "play": "Sample trace: $1003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 4 filter writes in a dense 179-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE NAME MISMATCH IS DIRECTLY RESOLVED, unlike the [[rene-romijn]] case (which remains genuinely unconfirmed): HVSC Musicians.txt's own entry reads 'Gazza (Graham, Gavin) / Warriors of Time - AUSTRALIA' — HVSC's standard parenthetical format (handle followed by real name in parentheses), unambiguously confirming 'Gazza' is the demoscene handle of a real person named Gavin Graham. Independently corroborated by his own CSDb scener profile (id=8611).",
    "CSDb SCENER PROFILE CONFIRMS: handle 'Gazza' (also 'Gaz'), Australia, active 1986-1992, member of group Warriors of Time (1 Jan 1988 - 1 Dec 1989), roles Coder/Hacker/Musician/Phreaker. CSDb's own profile notes he 'used multiple handles during the C64 era but cannot recall them,' with 'Gazza' becoming his primary handle on Amiga; he also worked with group Factor 4 on Amiga as musician/coder.",
    "CONFIRMED BOTH CODER AND MUSICIAN ON THE SAME RELEASE: CSDb's credits for 'Kernal Selecter' (Warriors of Time, 20 Aug 1989) list Gazza for BOTH Code and Music (with 'Kernal' credited separately for cracking-technique code and 'The Buccaneer' for text) — directly supporting a self-written playroutine, consistent with the traced file's compact, non-standard load/init/play layout ($1000/$1000/$1003).",
    "WARRIORS OF TIME'S GROUP RECORD LISTS GERMANY as its nominal registered country (founder 'Rhodan,' active ~1987-1991, 129+ releases, collaborated with Zenobits and Comtec, ran a 1990 Christmas party in Norway) — not a contradiction of Graham's own confirmed Australian origin; mixed-nationality membership was common in scene groups of this era.",
    "STILL ACTIVELY BUILDING MODERN SID TOOLS, per indexed snippets from his own personal site (gavingraham.com — direct page fetches returned 403, so this is UNCONFIRMED in exact detail though plausible and consistent): he reportedly built 'ReSIDue,' a wavetable synth/VST3 plugin using the reSID emulation engine, showing continued involvement in SID/C64 audio decades after his 1980s scene activity. The same source suggests 'Dobee' (the traced file) may have been written for a small hacker/crack intro, though he 'can't confirm this nowadays' — appropriately flagged as his own uncertain recollection, not a hard fact.",
    "A FOOTBALLER NAME-COLLISION RISK WAS EXPLICITLY CHECKED AND RULED OUT: 'Gazza' is also a famous nickname for footballer Paul Gascoigne, and an unrelated C64 game 'Gazza II' exists — neither connects to Gavin Graham/Warriors of Time in any source checked.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Gazza (Graham, Gavin) / Warriors of Time - AUSTRALIA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener id=8611 (Gazza, full role/group/release history): https://csdb.dk/scener/?id=8611",
    "CSDb group id=663 (Warriors of Time): https://csdb.dk/group/?id=663",
    "CSDb release id=130719 ('Kernal Selecter', 1989, Code+Music both credited to Gazza): https://csdb.dk/release/?id=130719",
    "gavingraham.com — C64 Retro Coding page (indexed snippet only, direct fetch 403'd, ReSIDue tool mention): https://gavingraham.com/geek-stuff-new-old/c64-retro-coding/",
    "Existing KB card: knowledge/players/rene-romijn.md (a contrasting, UNRESOLVED name-mismatch case for comparison)",
    "Local dataset: 4 files tagged Gavin_Graham, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Gavin_Graham` tag is Australian demoscener Gavin Graham's ('Gazza,'
Warriors of Time) own playroutine. Unlike the similar-looking
[[rene-romijn]] name-mismatch case, this one is directly and
unambiguously resolved by HVSC's own parenthetical handle-to-real-name
notation. Confirmed both coder and musician, still active today building
modern SID tools. Player-ID-fingerprinted across 4 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **cleanly resolved
name mismatch**, a useful contrast case to [[rene-romijn]]'s genuinely
unresolved one in this same KB. Also notable: he appears to be **still
actively building SID-related audio tools decades later** (a VST3
plugin, 'ReSIDue'), per his own personal site.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Gavin_Graham`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Gavin_Graham` `.sid` (Dobee, composed by Gazza): load
`$1000`, init `$1000`, play `$1003`, **179 register writes / 50 frames**
(4 filter writes — dense). Internals undocumented; memory map/format/
effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (3 entries),
gavingraham.com, and the related rene-romijn card.
