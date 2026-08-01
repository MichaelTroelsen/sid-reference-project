# 1kplay (4-Mat)

```json
{
  "id": "4-mat-1k-play",
  "name": "1kplay",
  "aliases": ["4-Mat/1k_Play"],
  "authors": ["Matt Simmonds (4-Mat)"],
  "released": "Formal CSDb tool release: 10 December 2019, 4-Mat (Ate Bit / Orb). Earliest confirmed driver use: 2016, per CSDb's own 'Released' field on the SID entry for 'The Best Intro Ever' ('2016 Razor 1911', csdb.dk sid id 53082) — this directly confirms, via the CSDb webservice record rather than the earlier 403'd forum lead, the 2016 date. A second adopting file, Hoffman's 'Makeshift', carries its own CSDb 'Released' field '2017 Logicoma' (csdb.dk sid id 55206; used in the 4K intro 'Makeshift' at Solskogen 2017). The 'main work done in 2003' claim from the ChipMusic.org forum thread remains unconfirmed by any CSDb-native record and is not asserted as fact.",
  "status": "stub",
  "platform": "Native C64 music driver aimed at very small (1k-ish) intros/productions. CSDb's webservice classifies release id 184774 itself with Type 'C64 Tool' (not a cross-platform editor), distributed as a downloadable archive ('1kplay.zip', 508 downloads).",
  "csdb_release": 184774,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Not in SIDId (checked data/sidid.json byTag — absent), but IS a real, named, CSDb-catalogued tool: release '1kplay', CSDb release 184774, Type 'C64 Tool', 10 December 2019, code+music by 4-Mat (Matt Simmonds, of Ate Bit / Orb; formerly Cosine), 508 downloads (per csdb.dk webservice, getRelease id=184774).",
    "The CSDb webservice's own UsedSIDs/Released field for 'The Best Intro Ever' (sid id 53082) reads '2016 Razor 1911' — a direct, primary-source confirmation that the driver was in use in 2016, three years before the formal Dec-2019 tool release. This corroborates (via a different, authoritative source) a ChipMusic.org forum thread ('The best intro ever: small music driver (C64)') that separately claims 'main work done in 2003, some small fixes in 2016' and a runtime footprint of '256 bytes for the generated frequency table + $35 bytes of variables' — that thread page returned HTTP 403 during research and was read only via a web-search summary, so ONLY the 2016 date is now corroborated by CSDb directly; the 2003 origin claim and the byte-count figures remain sourced solely to the uncorroborated forum-thread summary.",
    "REAL EXTERNAL ADOPTION: 2 locally-tagged files split across 2 DIFFERENT composers — 4-Mat himself ('The Best Intro Ever', matching the Razor 1911 2016 demo) and 'Hoffman' ('Makeshift', CSDb sid id 55206, Released '2017 Logicoma', used in the 4K intro 'Makeshift' at Solskogen 2017) — i.e. genuinely used by someone other than the author, unlike most single-composer tags in this batch. Census of data/composers/*.json for the exact tag '4-Mat/1k_Play' confirms these are the only 2 files (grep across all 1902 composer caches).",
    "Distinct from this same author's OTHER already-carded 'tiny' routines: '4-Mat_tiny_1'/'4-Mat_tiny_2' (knowledge/players/4-mat-tiny-1.md) and '4-Mat/MiniSeq' (knowledge/players/4-mat-miniseq.md) — no evidence any of these four tags share code; each is its own Player-ID signature."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release '1kplay' (4-Mat, 10 Dec 2019, Type 'C64 Tool'): https://csdb.dk/release/?id=184774 (also queried structured via scripts/lib/csdb-client.js getRelease(184774))",
    "CSDb SID entry 'The Best Intro Ever' (Released field '2016 Razor 1911'): https://csdb.dk/sid/?id=53082 (also queried via getRelease's embedded UsedSIDs record)",
    "CSDb SID entry 'Makeshift' by Hoffman (Released field '2017 Logicoma', UsedIn 'Makeshift' 4K intro, Solskogen 2017): https://csdb.dk/sid/?id=55206 (also queried via getSidRelease(55206))",
    "CSDb scener profile, 4-Mat (Ate Bit, Orb; formerly Cosine): https://csdb.dk/scener/?id=3913",
    "ChipMusic.org forum thread (fetched via web search summary, direct fetch 403'd; 2016 date now independently corroborated by CSDb directly, 2003-origin and byte-count claims remain uncorroborated): 'the best intro ever' small music driver (c64): https://chipmusic.org/forums/topic/18264/the-best-intro-ever-small-music-driver-c64/",
    "Sibling cards, same author, different tags: knowledge/players/4-mat-tiny-1.md, knowledge/players/4-mat-miniseq.md",
    "Local dataset census: grepped '\"player\": \"4-Mat/1k_Play\"' across all 1902 files in data/composers/*.json — exactly 2 matches (data/composers/4-mat.json, data/composers/hoffman.json), 2 composers (4-Mat, Hoffman)"
  ]
}
```

## Overview

`4-Mat/1k_Play` is the Player-ID tag for **1kplay**, a native C64 music
driver by **Matt Simmonds** ("4-Mat", of Ate Bit / Orb), aimed at very small
(1k-class) intros; CSDb's webservice classifies the tool release itself as
Type "C64 Tool". Formally released as a titled CSDb tool 10 December 2019,
but the driver was already in use in 2016 — confirmed directly by CSDb's own
`Released` field on the SID entry for "The Best Intro Ever" ("2016 Razor
1911"), independently corroborating a ChipMusic.org forum thread that
additionally (but less reliably — that page 403'd and is known only via a
web-search summary) claims "main work done in 2003, small fixes in 2016".
Census of every `data/composers/*.json` file for the exact tag confirms
real external adoption: exactly 2 tagged files, split between 4-Mat himself
and a second composer, "Hoffman" (whose "Makeshift" carries its own CSDb
`Released` field of "2017 Logicoma").

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) absent from SIDId but has a real,
dated, named CSDb tool page (Type "C64 Tool"); (2) the 2016 pre-history is
now confirmed directly via CSDb's own `Released` field on the SID entry
(not just the still-403'd forum thread) — only the 2003-origin claim and
byte-count figures remain sourced solely to that uncorroborated forum
summary; (3) genuine 2-composer adoption (census-confirmed: exactly 2 files
across all of `data/composers/*.json`), distinct from the single-composer
pattern common elsewhere in this batch; (4) explicitly distinct from this
author's other "tiny"-named tags already carded here.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. The CSDb release offers a download ('1kplay.zip') not
inspected for source here.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check), `data/composers/*.json`,
the CSDb release/scener pages, and a web-search summary of one forum thread.
`status: stub`.

## Sources

See the `sources` array — SIDId absence check, CSDb release 184774 (queried
both via HTML fetch and the `csdb-client.js` webservice), the two adopting
SID entries (53082, 55206, also webservice-queried), CSDb scener 3913, the
ChipMusic.org thread, sibling cards, and a full census of the local
composer aggregation (`data/composers/*.json`, all 1902 files grepped for
the exact tag).
