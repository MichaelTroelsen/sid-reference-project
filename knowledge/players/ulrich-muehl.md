# Ulrich Mühl (player routine)

```json
{
  "id": "ulrich-muehl",
  "name": "Ulrich Mühl (player routine)",
  "aliases": ["Ulrich_Muehl"],
  "authors": ["Ulrich Mühl"],
  "released": "1987",
  "status": "in-progress",
  "platform": "German composer Ulrich Mühl's playroutine — 5 small, likely self-published type-in-listing games (typical of German computer-magazine listings of the era, matching this project's own 1987 active-year data), circumstantially but not conclusively linked to a later-career German games-magazine editor of the same name (ASM, Amiga Joker, Power Play). No CSDb scener profile exists. Player-ID-fingerprinted across 5 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Blaster, 1987): load $86c0 (init $8f1a, play $9000).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $8f1a.", "play": "Sample trace: $9000 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 2 filter writes in a dense 170-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC AND THIS PROJECT'S OWN DEEPSID DUMP CACHE CONFIRM 'Mühl, Ulrich - GERMANY', no group affiliation. The project's own cached profile adds `active: 1987`, `date_birth: 1969-04-11`, `focus1: PRO` — but no CSDb scener match (`csdb_id: 0`).",
    "A DATA-QUALITY ISSUE IN THIS PROJECT'S OWN CACHED CSDb IDs WAS FOUND AND MUST BE FLAGGED: each of his 5 file records carries a `csdb_id` (51862, 48945, 51861, 51863, 51864) that, when fetched directly, resolves to COMPLETELY UNRELATED CSDb releases ('Check This' by House Designs, 'Clystron Zax' by Creatures, a 'Xama' crack by Stardom, etc.) — none mentioning Mühl at all. These IDs are bogus/mismatched in the DeepSID dump and must NOT be trusted or used as CSDb release links for this composer, in this card or elsewhere.",
    "NO GAME, DEMO, OR PUBLISHER CREDIT WAS FOUND for any of his 5 titles (Blaster, the traced file; Job Race; Megabouncers; Projekt A.I.D.S.; Startrip) in Lemon64, MobyGames, or CSDb — none read as commercial releases. Their profile (small, self-authored, 1987, no publisher) is consistent with German computer-magazine type-in listing games of the era rather than commercial products.",
    "A CIRCUMSTANTIAL BUT UNCONFIRMED IDENTITY LINK to a later-career German games-magazine figure: a German C64-Wiki biography and a Kultboy.com interview (fetch blocked, HTTP 403, content unverified) describe an Ulrich Mühl (per C64-Wiki, born 1970 — a minor discrepancy against the project's own cached 1969-04-11 birthdate) who was self-taught in BASIC/Assembler on a datasette-equipped C64, sent early games to Compute mit magazine (Tronic-Verlag) which published some as type-in listings around 1987, and went on to become deputy/chief editor at ASM, Gamers, Total!, later founding Studio Mühl (game localization) and Ohrwerk Audio; died 23 February 2022. The SAME NAME, SAME COUNTRY, and SAME 1987 self-publishing-listing-game profile make this PLAUSIBLE, but the C64-Wiki text fetched contains NO EXPLICIT STATEMENT that this magazine-editor Ulrich Mühl composed SID/chip music himself — only that he programmed games. Explicitly flagged as circumstantial, not a confirmed single-source match.",
    "NO CSDb SCENER PROFILE EXISTS (confirmed via direct search, matching the project's own `csdb_id: 0`) and no verified first-person interview content was retrievable (the one located interview 403'd on fetch) — genuinely thin sourcing beyond the identity-candidate biography above.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Mühl, Ulrich - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: data/composers/ulrich-muehl.json (DeepSID dump snapshot — active/birthdate fields, and the flagged bogus csdb_id values)",
    "C64-Wiki (DE) — Ulrich Mühl (candidate identity biography, magazine career): https://www.c64-wiki.de/wiki/Ulrich_M%C3%BChl",
    "Kultboy.com — Ulrich Mühl interview (fetch blocked, content unverified): https://www.kultboy.com/Ulrich-Muehl-Interview/20/",
    "Kultboy.com — memorial notice, 3/2022 (unverified): https://www.kultboy.com/index.php?site=pic&id=5317&s=30",
    "Local dataset: 5 files tagged Ulrich_Muehl, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Ulrich_Muehl` tag is German composer Ulrich Mühl's playroutine —
5 small, likely self-published type-in-listing games from 1987. A
circumstantial (not confirmed) identity link exists to a later-career
German games-magazine editor of the same name. Player-ID-fingerprinted
across 5 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is a genuine **data-quality
catch**: this project's own cached CSDb IDs for all 5 of his files are
bogus, resolving to unrelated releases — flagged explicitly so they
aren't reused elsewhere. The candidate later-career identity match is
reported honestly as circumstantial, not confirmed.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Ulrich_Muehl`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Ulrich_Muehl` `.sid` (Blaster): load `$86c0`, init
`$8f1a`, play `$9000`, **170 register writes / 50 frames** (2 filter
writes — dense). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, local dataset cache,
C64-Wiki (DE), and Kultboy.com (2 pages, unverified).
