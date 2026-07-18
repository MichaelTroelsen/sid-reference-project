# Andrew Colin (player routine)

```json
{
  "id": "andrew-colin",
  "name": "Andrew Colin (player routine)",
  "aliases": ["Andrew_Colin", "?Andrew_Colin/Talent"],
  "authors": ["Andrew Colin"],
  "released": "1982-1986 (Talent Computer Systems era)",
  "status": "in-progress",
  "platform": "A playroutine credited to Andrew John Theodore Colin (1936-2018) — CONFIRMED to be a notable British computer science professor (Strathclyde University), NOT the founder of Flair Software as an initial research hypothesis wondered. Author of 12 CS textbooks including the widely-used 'Introduction to BASIC' series, he founded educational-software house Talent Computer Systems around 1984. His own CSDb profile is flagged 'Obviously not a scener' — an outside historical figure catalogued for his SID output, not a demoscene participant. Player-ID-fingerprinted across 3 files: 2 by Colin, 1 by Stefano Tognon (an unrelated Italian demoscener, whose tune's title echoes Colin's own — see quirks).",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Arrival of the Queen of Sheba, composed by Andrew Colin): load $801 (init $8ab, play $827).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $8ab.", "play": "Sample trace: $827 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED: Andrew John Theodore Colin (1936-2018), a genuinely notable British academic — lecturer at Birkbeck College (1957-60), Director of the Computer Science Laboratory at Lancaster University (1965-70), then Professor of Computer Science at the University of Strathclyde, Glasgow, from 1970. Co-author (with A.D. Booth) of a 1960 dictionary-construction/binary-tree paper, and author of 12 computer-science textbooks, most notably the 'Introduction to BASIC' series (1981/82) widely used with 1980s home micros.",
    "FLAIR SOFTWARE CONNECTION EXPLICITLY RULED OUT: Flair Software was actually founded by Colin Courtney in 1990 (after Tynesoft), a different, unrelated person — confirmed via Wikipedia. No credible link between Professor Andrew Colin and Flair Software was found anywhere; this was an initial research hypothesis that did NOT pan out and is recorded here as a ruled-out dead end, not a finding.",
    "FOUNDED HIS OWN EDUCATIONAL SOFTWARE COMPANY: around 1984, he founded Talent Computer Systems (math/chemistry simulation software) with his wife Veronica and colleague Jon Malone — 'Kalah' (1984), one of his known programs, ties directly to this company.",
    "CSDb ITSELF FLAGS HIM AS AN OUTSIDE HISTORICAL FIGURE, not a scener: his profile (id=14419) carries the explicit note 'Obviously not a scener' — a rare, notable case in this KB of CSDb's own curators distinguishing an academic/commercial figure's catalogued SID output from genuine demoscene participation. Credits there: Andrew Colin Sound Demo (1982, code+music), Queen of Sheba (1983, code+music), Uncle Ben's Magic 2 (1986, music), plus a 1985 Vienna-Soft re-release of the Sheba tune. Four total SID compositions match this project's own broader catalog for him (Arrival of the Queen of Sheba, Bugle Call, Kalah, Testcard).",
    "CONFIRMED BOTH CODER AND MUSICIAN: C64-Wiki credits him with programs Reaction Time (1981), Hangman 64 (1982), Kalah (1984), Trasmat (1984), plus 'numerous music demos' through the 1980s — consistent with a self-taught, all-round programmer-academic rather than a specialist composer.",
    "THE 'RETURN OF SHEBA' TRIBUTE CONNECTION IS LEFT EXPLICITLY UNCONFIRMED: the 4th file under this tag, 'Return of Sheba' (composed by Stefano Tognon, an Italian scener — CSDb handle 'Ice00', founder of Ice Team, member of Hokuto Force, active from the early 2000s through at least 2026), has a title that clearly echoes Colin's own 'Arrival of the Queen of Sheba' (itself an arrangement of Handel's piece from the oratorio Solomon). No source found ties the two directly as a documented tribute or remix — it does not appear in CSDb's list of Tognon's notable productions, and this project's own STIL.txt only attributes the underlying tune to Handel, not to either composer specifically. The title-echo is real but reported as circumstantial, not proven.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB for either Andrew Colin or Stefano Tognon (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe — none found).",
    "ALIAS MERGE (2026-07-18): the raw Player-ID tag `?Andrew_Colin/Talent` (1 file per knowledge/COVERAGE.md's uncarded-family sweep) is the SAME player/composer, not a distinct tool — confirmed directly from `data/composers/andrew-colin.json`, where the file `Kalah.sid` (composed by Andrew Colin, 17 subtunes, CSDb id=47810) carries this exact tag, while his other two files (Arrival of the Queen of Sheba, Testcard) carry the plain `Andrew_Colin` tag already covered above. The leading `?` marks it as an uncertain Player-ID match and the `/Talent` suffix ties it to Talent Computer Systems, the educational-software company Colin himself founded (~1984) — Kalah (1984) is one of his known Talent-era programs, already noted in this card. No separate research was warranted since the file, author, and company are all already documented facts in this card; merged by adding the tag to `aliases` rather than creating a near-duplicate card."
  ],
  "sources": [
    "HVSC Musicians.txt ('Colin, Andrew', bare entry; 'Tognon, Stefano - ITALY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "C64-Wiki — Andrew Colin (programs, biography): https://www.c64-wiki.com/wiki/Andrew_Colin",
    "Wikipedia — Andrew Colin: https://en.wikipedia.org/wiki/Andrew_Colin",
    "Oldcomputr.com — Andrew Colin (1936-2018): https://www.oldcomputr.com/andrew-colin-1936-2018/",
    "CSDb scener id=14419 (Andrew Colin, 'Obviously not a scener' note, full release list): https://csdb.dk/scener/?id=14419",
    "CSDb scener id=8082 (Stefano Tognon / Ice00, Ice Team/Hokuto Force): https://csdb.dk/scener/?id=8082",
    "Demozoo — Stefano Tognon: https://demozoo.org/sceners/29459/",
    "Wikipedia — Flair Software (confirms Colin Courtney as founder, ruling out the Andrew Colin connection): https://en.wikipedia.org/wiki/Flair_Software",
    "Local dataset: 3 files tagged Andrew_Colin, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Andrew_Colin` tag is Professor Andrew Colin's own playroutine — a
notable British computer scientist (Strathclyde University), author of
widely-used BASIC textbooks, and founder of Talent Computer Systems. An
initial hypothesis that he was the Flair Software founder was
investigated and explicitly ruled out. Player-ID-fingerprinted across 3
files under the plain `Andrew_Colin` tag: 2 by Colin, 1 by an unrelated
Italian scener whose tune title echoes his own — plus a 4th file
(`Kalah.sid`, also by Colin) under the related `?Andrew_Colin/Talent`
tag, merged into this card's `aliases` (same person, same Talent
Computer Systems era, uncertain-match-flagged variant tag).

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **ruled-out identity
hypothesis** (Flair Software), reported honestly as a dead end rather
than omitted; and CSDb's own **explicit 'not a scener' flag** on his
profile — a rare, direct curatorial acknowledgment that this composer
sits outside the demoscene his SID output is nonetheless catalogued
within.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Andrew_Colin`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Andrew_Colin` `.sid` (Arrival of the Queen of Sheba):
load `$801`, init `$8ab`, play `$827`, **48 register writes / 50 frames**
(0 filter writes). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, C64-Wiki, Wikipedia (2
pages), Oldcomputr.com, CSDb (2 entries), and Demozoo.
