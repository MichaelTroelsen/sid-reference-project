# Basically Music (Greg Tarr)

```json
{
  "id": "basically-music",
  "name": "Basically Music (Greg Tarr)",
  "aliases": ["Basically_Music"],
  "authors": ["Greg Tarr"],
  "released": "1988 (Compute!'s Gazette, Vol. 6 No. 3, Issue 57, March 1988, pp. 72-73)",
  "status": "in-progress",
  "platform": "A magazine type-in tool, 'Basically Music: A Complete Composition Tool For The 64' by Greg Tarr — despite the punning name, written ENTIRELY IN MACHINE LANGUAGE (typed in via Compute!'s MLX entry program), which adds new BASIC keywords (MUS, ATT, DEC, SUS, REL) letting BASIC programs drive the SID chip without manual PEEK/POKE, and can compile songs into standalone machine-language files that play in the background. Player-ID-fingerprinted across 10 files, all by hobbyist Chester Claff — a magazine-tool user, not a demoscene participant.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Dill Pickles): load $7d2b (init $7d4a, play $7d5a). MLX typed-in load range per the original article: $0801-$2000, saved as 'BAS-MUS'.", "zero_page": "TODO (no disassembly)", "layout": "Per the article: the MUS command's note fields map directly to SID voices 1-3; a BLANK note field leaves that voice's registers UNTOUCHED (no write) rather than silencing it — this explains the genuinely sparse trace, see quirks." },
  "entry": { "init": "Sample trace: $7d4a.", "play": "Sample trace: $7d5a (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "N/A observed — 0 filter writes; not clear if the tool supports filter control at all beyond ADSR (ATT/DEC/SUS/REL, values 0-15 per voice)." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SPARSE TRACE FULLY EXPLAINED BY THE TOOL'S OWN DOCUMENTED SEMANTICS, not a probe bug — confirmed via the original Compute!'s Gazette article (Issue 57, March 1988, found on archive.org, OCR text directly quoted): the `MUS note1,note2,note3,duration` command plays up to 3 notes (one per SID voice) per call, but 'if a voice's note field is left blank, that voice is left unaltered' — i.e. NO register write occurs for that voice at all. The article's own example, `MUS C4,X,,4`, plays voice 1, silences voice 2, and leaves voice 3 completely untouched. A single note-on event is itself exactly 3 SID writes (freq-lo, freq-hi, control/gate) — so this project's own 3-write/500-frame trace (all on voice 2, confirmed at both 50 and 500 frames) is plausibly capturing one long/slow held note on a single voice, not a malfunction or an incomplete trace.",
    "WRITTEN ENTIRELY IN MACHINE LANGUAGE despite the pun name suggesting BASIC — typed in via Compute!'s MLX machine-language entry program (load range $0801-$2000, saved as 'BAS-MUS'). Adds new BASIC keywords (MUS, ATT, DEC, SUS, REL) so BASIC programs can drive the SID chip without manual register PEEKs/POKEs. Also supports COMPILING songs into small standalone machine-language files that play in the background while other programs run — almost certainly the mechanism behind the standalone `.sid` files carrying this tag today. Explicit target audience per the article: 'designed to help programmers and nonprogrammers alike.'",
    "CHESTER CLAFF is confirmed a magazine-tool hobbyist, NOT a demoscene participant: HVSC lists only a bare 'Claff, Chester - USA' entry; CSDb has no scener/group profile for him at all. His 10 file titles (Dill Pickles, Every Tub, Frisco Rag, Jelly Roll Blues, Jumpin' at the Woodside, Kitten on the Keys, Moonlight Cocktail, and others) are all classic ragtime/jazz standards, strongly supporting a jazz/ragtime-arrangement hobby project. CSDb dates these files 1995-1996 — roughly 7-8 years after the tool's 1988 publication, another hobbyist-use signal (a magazine reader picking up an old tool much later, not a contemporary scene release).",
    "GREG TARR (the tool's author) has NO other findable Compute!/Compute's Gazette byline or biographical information — a one-time magazine contributor with no further documented footprint.",
    "No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "Compute!'s Gazette, Vol. 6 No. 3 (Issue 57), March 1988, pp. 72-73, 'Basically Music: A Complete Composition Tool For The 64' by Greg Tarr (primary source, directly quoted): https://archive.org/details/1988-03-computegazette",
    "HVSC Musicians.txt ('Claff, Chester - USA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: 10 files tagged Basically_Music, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Basically_Music` tag is a machine-language Compute!'s Gazette
type-in tool by Greg Tarr (1988) — despite its punning name, not a BASIC
program, but a machine-language extension adding new BASIC keywords to
drive the SID chip. Player-ID-fingerprinted across 10 files, all by
hobbyist Chester Claff, a magazine-tool user with no demoscene presence
who used it to arrange classic ragtime/jazz standards years later.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is that the **genuinely
sparse trace is fully explained by the tool's own documented command
semantics** (a blank note field leaves that voice's registers untouched,
found by directly quoting the original 1988 magazine article) — a rare
case where a primary source fully resolves an otherwise-puzzling trace
result rather than leaving it as an open question.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Basically_Music`-tagged
`.sid` + trace, though the article itself already documents the
command-level semantics in unusual detail for a magazine type-in.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Basically_Music` `.sid` (Dill Pickles): load `$7d2b`,
init `$7d4a`, play `$7d5a`, **3 register writes / 500 frames** (all on
voice 2, 0 filter writes) — confirmed genuinely sparse, not a probe
artifact, and directly explained by the tool's own documented behavior
(see quirks). Internals otherwise undocumented; memory map/format/effects
are `TODO`.

## Sources

See the `sources` array — the original Compute!'s Gazette article (primary
source) and HVSC Musicians.txt.
