# 1kplay (4-Mat)

```json
{
  "id": "4-mat-1k-play",
  "name": "1kplay",
  "aliases": ["4-Mat/1k_Play"],
  "authors": ["Matt Simmonds (4-Mat)"],
  "released": "10 December 2019, 4-Mat (Ate Bit / Orb); earlier work reportedly done 2003 with fixes in 2016 per a ChipMusic.org forum thread",
  "status": "stub",
  "platform": "Native C64 music driver aimed at very small (1k-ish) intros/productions, distributed as a downloadable tool ('1kplay.zip') on CSDb.",
  "csdb_release": 184774,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Not in SIDId (checked data/sidid.json byTag — absent), but IS a real, named, CSDb-catalogued tool: 'Xpmck'-style release '1kplay', CSDb release 184774, 10 December 2019, code+music by 4-Mat (Matt Simmonds, of Ate Bit / Orb; formerly Cosine), rated 10/10 across 8 votes, 507 downloads.",
    "A ChipMusic.org forum thread ('The best intro ever: small music driver (C64)') independently describes what is very plausibly this same driver: created by '4-Mat/Ate Bit + Orb', used in Razor 1911's demo 'The Best Intro Ever' (Revision 2016), 'main work done in 2003, some small fixes in 2016', runtime footprint '256 bytes for the generated frequency table + $35 bytes of variables' — i.e. an EARLIER (2003/2016) history for the driver than its formal Dec-2019 CSDb tool release. The thread page itself returned HTTP 403 during this research pass and its exact URL is recorded below for a future re-check, so these technical specifics are cited via a web-search summary of that page, not a direct read — treat the byte-count detail as a lead pending direct confirmation.",
    "REAL EXTERNAL ADOPTION: 2 locally-tagged files split across 2 DIFFERENT composers — 4-Mat himself ('The Best Intro Ever', matching the Razor 1911 2016 demo) and 'Hoffman' ('Makeshift') — i.e. genuinely used by someone other than the author, unlike most single-composer tags in this batch.",
    "Distinct from this same author's OTHER already-carded 'tiny' routines: '4-Mat_tiny_1'/'4-Mat_tiny_2' (knowledge/players/4-mat-tiny-1.md) and '4-Mat/MiniSeq' (knowledge/players/4-mat-miniseq.md) — no evidence any of these four tags share code; each is its own Player-ID signature."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release '1kplay' (4-Mat, 10 Dec 2019): https://csdb.dk/release/?id=184774",
    "CSDb scener profile, 4-Mat (Ate Bit, Orb; formerly Cosine): https://csdb.dk/scener/?id=3913",
    "ChipMusic.org forum thread (fetched via web search summary, direct fetch 403'd): 'the best intro ever' small music driver (c64): https://chipmusic.org/forums/topic/18264/the-best-intro-ever-small-music-driver-c64/",
    "Sibling cards, same author, different tags: knowledge/players/4-mat-tiny-1.md, knowledge/players/4-mat-miniseq.md",
    "Local dataset: 2 files tagged 4-Mat/1k_Play, 2 composers (4-Mat, Hoffman) — data/composers/*.json aggregation"
  ]
}
```

## Overview

`4-Mat/1k_Play` is the Player-ID tag for **1kplay**, a native C64 music
driver by **Matt Simmonds** ("4-Mat", of Ate Bit / Orb), aimed at very small
(1k-class) intros. Formally released as a titled CSDb tool 10 December
2019, but a ChipMusic.org forum thread describes an earlier history for the
same driver — used in Razor 1911's "The Best Intro Ever" (Revision 2016),
with "main work done in 2003, small fixes in 2016". Unlike most tags in
this batch it shows real external adoption: 2 locally-tagged files split
between 4-Mat himself and a second composer, "Hoffman".

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) absent from SIDId but has a real,
dated, named CSDb tool page; (2) a forum-thread lead (not directly
re-fetchable during this pass, 403) suggests a much earlier 2003/2016
history predating the formal 2019 CSDb release — flagged, not asserted as
fact beyond what the CSDb page itself confirms; (3) genuine 2-composer
adoption, distinct from the single-composer pattern common elsewhere in
this batch; (4) explicitly distinct from this author's other "tiny"-named
tags already carded here.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. The CSDb release offers a download ('1kplay.zip') not
inspected for source here.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check), `data/composers/*.json`,
the CSDb release/scener pages, and a web-search summary of one forum thread.
`status: stub`.

## Sources

See the `sources` array — SIDId absence check, CSDb release 184774, CSDb
scener 3913, the ChipMusic.org thread, sibling cards, and the local
composer aggregation.
