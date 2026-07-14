# Daniele Liverani / Genius (player routine)

```json
{
  "id": "daniele-liverani",
  "name": "Daniele Liverani / Genius (player routine)",
  "aliases": ["Dan_Liverani"],
  "authors": ["Daniele Liverani"],
  "released": "2014 (Genius: Into the Toy Warehouse, ported to C64)",
  "status": "in-progress",
  "platform": "CONFIRMED to be the SAME Daniele Liverani known internationally as an Italian progressive-rock/metal multi-instrumentalist (Twinspirits, Cosmics, Khymera) and mastermind behind the 'Genius Rock Opera' trilogy — a genuinely striking identity confirmation, since the C64 tune titled 'Genius' is a direct self-reference to that same rock-opera project, not a coincidence. He personally coded and ported an Apple II platform game, 'Genius: Into the Toy Warehouse' (2014, itself inspired by the rock opera), to Commodore 64, Plus/4, and Atari 8-bit himself. Player-ID-fingerprinted across 4 files, all his own (Genius, Genius 2, Genius Enhanced, Genius 3 — versions/variants of the same game's music).",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Genius): load $c000 (init $ca20, play $c4fc).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $ca20.", "play": "Sample trace: $c4fc (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 1 filter write in a sparse 23-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED WITH HIGH CONFIDENCE, a genuinely striking find: this is the internationally-known Italian progressive-rock/metal musician Daniele Liverani, described as 'a cornerstone in Italian metal' — guitarist/keyboardist/mastermind behind Twinspirits (formed 2002 'just after wrapping up... Genius: A Rock Opera'), Cosmics, and Khymera. The 'Genius Rock Opera' is a trilogy he wrote and performed (guitar, bass, keyboards), its third episode released 16 February 2007.",
    "THE C64 'GENIUS' TITLE IS A DIRECT SELF-REFERENCE, NOT A COINCIDENCE: in 2014 Liverani released an Apple II platform game, 'GENIUS — Into the Toy Warehouse,' explicitly stated to be 'inspired by the Genius Rock Opera he created in the early 2000s' — and he PERSONALLY PORTED IT to Commodore 64, Commodore Plus/4, and Atari 8-bit himself. This makes him BOTH composer and coder for these files — a rare case in this KB of a musician from an entirely different professional field (progressive rock) returning to childhood-hobby 6502 programming decades later to build and port his own game.",
    "A 2017 Italian interview (Ready64.org, 'Intervista a Daniele Liverani' — page itself 403'd on direct fetch, findings from indexed content) states he was '47 years old and divides his time between computer science and music, both professionally and as a hobby,' works professionally as a programmer for a company doing vision systems/numerical controls, began BASIC programming in the early 1980s, and later deepened his 6502 assembly knowledge — directly corroborating the self-coded-port claim from an independent angle (his day-job programming career, not just the music side).",
    "THE C64 RELEASE/DISTRIBUTION WAS HANDLED BY A SEPARATE ITALIAN GROUP, Hokuto Force (members Flavioweb, The Overkiller) — CSDb's release for 'Genius 2 +7D' (2017) explicitly credits the music as ''Genius 2' SID by Liverani_Daniele from the High Voltage SID Collection,' confirming Hokuto Force trained/repackaged/distributed his composition rather than composing it themselves. No CSDb scener profile exists directly under 'Liverani' — a candidate profile 'Dan' (id=14281) was checked and explicitly RULED OUT as a different, unrelated Canadian scener (b. 1982, founder of Eagle Soft Incorporated).",
    "NO DIRECT QUOTE WAS FOUND connecting his early-80s BASIC programming specifically to owning/using a Commodore 64 as a teenager — the Ready64 interview confirms early BASIC programming generally but the retrieved excerpt (not the full article, which 403'd) doesn't include an explicit C64-ownership statement. Flagged as a minor, plausible-but-unconfirmed gap rather than assumed.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — his career (Italian progressive-rock/metal, vision-systems programming) is entirely outside the games-industry/demoscene ecosystem most other composers in this KB come from (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Liverani, Daniele - ITALY'): https://hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "ProgArchives — Daniele Liverani artist profile: https://www.progarchives.com/artist.asp?id=4797",
    "Wikipedia — Twinspirits (formation context, Genius Rock Opera reference): https://en.wikipedia.org/wiki/Twinspirits",
    "danieleliverani.com — Genius Rock Opera page: https://danieleliverani.com/genius.htm",
    "vitno.org — 'Apple II/C64 Genius ported to Commodore Plus/4' (2017): https://vitno.org/2017/01/14/apple-iic64-genius-ported-to-commodore-plus4/",
    "callapple.org — Genius 2: Into the Toy Caves officially released: https://callapple.org/vintage-apple-computers/apple-ii/genius-2-into-the-toy-caves-officially-released/",
    "Ready64.org — 'Intervista a Daniele Liverani' (2017, fetch 403'd, indexed content only): https://www.ready64.org/articoli/leggi/idart/97/intervista-a-daniele-liverani",
    "CSDb release id=160776 ('Genius 2 +7D' by Hokuto Force, 2017, confirms HVSC composer identity): https://csdb.dk/release/?id=160776",
    "CSDb scener id=14281 ('Dan', explicitly RULED OUT as a different, unrelated Canadian scener): https://csdb.dk/scener/?id=14281",
    "Local dataset: 4 files tagged Dan_Liverani, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Dan_Liverani` tag is confirmed to be Italian progressive-rock/metal
musician Daniele Liverani (Twinspirits, Genius Rock Opera) — the C64
'Genius' tune directly references his own rock-opera trilogy. He
personally coded and ported the 2014 Apple II game it's drawn from to
C64 himself, decades after his early-80s BASIC programming days. Player-
ID-fingerprinted across 4 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **high-confidence
identity confirmation with a self-referential title**: a rare case in
this KB of a musician whose entirely separate, internationally-known
professional music career (progressive rock, not games) directly explains
the C64 tune's own name, corroborated by his day-job programming career.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Dan_Liverani`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Dan_Liverani` `.sid` (Genius): load `$c000`, init
`$ca20`, play `$c4fc`, **23 register writes / 50 frames** (1 filter
write — sparse). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, ProgArchives, Wikipedia,
danieleliverani.com, vitno.org, callapple.org, Ready64.org, and CSDb (2
entries).
