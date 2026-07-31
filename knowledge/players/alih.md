# ALiH

```json
{
  "id": "alih",
  "name": "ALiH",
  "aliases": ["ALiH", "256bytes/ALiH"],
  "authors": ["Jaymz Julian (A Life in Hell)"],
  "released": "TODO: no tool release exists to date — full census of all 7 tagged files' own CSDb SID-entry `Released` fields shows composition/use dates only: 2005-04-06 (Crue Gurl (Freestyle Remix), 256bytes/ALiH, csdb.dk/sid/?id=16182) and 2006-04-07 (Back to Basics, 256bytes/ALiH, csdb.dk/sid/?id=38715) for the size-category variant, vs uniformly 2008 ('2008 A Life in Hell') for all 5 bare-ALiH-tagged files (csdb.dk/sid/?id=39695,39696,39697,44736,44738) — these are tune dates, not a player release date",
  "status": "stub",
  "platform": "native C64 in-house routine, not a released standalone editor — confirmed by full census of all 7 tagged files (no CSDb tool/release/group entry under 'ALiH' or 'A Life in Hell' turned up by direct CSDb webservice, web search, or Lemon64/Forum64-focused searches on 2026-07-31); the 5 bare-ALiH-tagged files share identical PSID header addresses (load $1000/init $1000/play $1003 across csdb.dk/sid/?id=39695,39696,39697,44736,44738), consistent with one shared routine, while the two 256bytes/ALiH files have mutually different, unrelated headers (Back_to_Basics has no Init/Play at all, typical of a BASIC loader; Crue_Gurl_Freestyle_Remix has init $1006/play $1000) — the '256bytes' tag looks like a size category, not a shared routine",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId's sidid.nfo carries only an AUTHOR line for the bare 'ALiH' tag — 'Jaymz Julian (A Life in Hell)' — no NAME/RELEASED/REFERENCE/COMMENT. No sidid.nfo entry exists at all for the sibling '256bytes/ALiH' tag.",
    "'256bytes/ALiH' is folded into this card as an alias rather than carded separately: it is the SAME author (Jaymz Julian) and the SAME composer usage pattern, differing only by a '256bytes/' size-category prefix — read as a size-constrained (256-byte intro/compo) variant of the same personal routine, not a distinct tool. Per this project's convention, bare size-category tags are normally skipped unless tied to a real, identifiable reused routine; here the author match to the already-attested 'ALiH' tag is that evidence.",
    "100% single-composer concentration across BOTH tag variants: all 7 locally-tagged files (5 'ALiH' + 2 '256bytes/ALiH') belong to the composer 'Jaymz Julian' alone (data/composers/jaymz-julian.json, handle 'A Life in Hell', Australia/USA) — the strongest available personal-routine signal.",
    "No web search turned up a released tool or CSDb entry titled 'ALiH' or 'A Life in Hell [player]' — the tag name matches the composer's own handle, consistent with a self-named in-house routine.",
    "Full census (2026-07-31) of all 7 tagged files' CSDb SID entries confirms the 7-file/single-composer count and adds PSID header data: the 5 bare-'ALiH' files (Simulcra, Slanted x2, Square Two x2) share identical load/init/play addresses ($1000/$1000/$1003), while the 2 '256bytes/ALiH' files (Back to Basics, Crue Gurl (Freestyle Remix)) have different, unrelated headers from each other — supporting the existing card decision that '256bytes/ALiH' is a size-category tag rather than the same shared routine as bare 'ALiH'.",
    "Targeted re-search (web search including Lemon64/Forum64-style queries, plus CSDb group/scener lookups) for 'ALiH' or 'A Life in Hell' as a named C64 tool or group still found nothing beyond the composer's own tunes and YouTube rips — no lead to chase further."
  ],
  "sources": [
    "SIDId sidid.nfo (author only for 'ALiH'; no entry at all for '256bytes/ALiH'): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 5 files tagged 'ALiH' + 2 files tagged '256bytes/ALiH', all by composer 'Jaymz Julian' — data/composers/jaymz-julian.json; see knowledge/COVERAGE.md",
    "CSDb scener profile, Jaymz Julian / A Life in Hell (Australia, USA): https://csdb.dk/scener/?id=290",
    "CSDb SID entries (full census, via csdb.dk webservice type=sid, 2026-07-31): Simulcra https://csdb.dk/sid/?id=39697, Slanted https://csdb.dk/sid/?id=39696, Slanted (2SID) https://csdb.dk/sid/?id=44738, Square Two https://csdb.dk/sid/?id=39695, Square Two (2SID) https://csdb.dk/sid/?id=44736, Back to Basics (256 bytes) https://csdb.dk/sid/?id=38715, Crue Gurl (Freestyle Remix) https://csdb.dk/sid/?id=16182"
  ]
}
```

## Overview

ALiH is a SIDId Player-ID tag attributed to **Jaymz Julian**, whose handle
"A Life in Hell" is the tag's namesake. SIDId's record is author-only, with
no title, release date, or CSDb reference. Locally it (and its sibling
size-category tag `256bytes/ALiH`, folded in here as an alias — see
quirks) spans **7 files total, 100% by Jaymz Julian himself**
(data/composers/jaymz-julian.json). No dedicated CSDb tool/release entry
was found under either tag name, consistent with a self-named, in-house
routine rather than a published editor.

A full census of all 7 tagged files' own CSDb SID entries (2026-07-31)
found no tool release date to fill `released` with — only tune dates: the
5 bare-`ALiH` files are all dated "2008 A Life in Hell" and share one
identical PSID header (load/init/play `$1000`/`$1000`/`$1003`), while the
2 `256bytes/ALiH` files are dated 2005 and 2006 and have mutually
different headers, reinforcing that the size-category tag is not the same
shared routine. `platform` is now recorded as a confident (not merely
unconfirmed) "native C64 in-house routine" — a further round of web
search including Lemon64/Forum64-style queries and CSDb group/scener
lookups still surfaced no dedicated tool or group page. `csdb_release`
stays `null`: no such release entry exists.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's record is author-only,
and `256bytes/ALiH` has no SIDId record at all; (2) `256bytes/ALiH` is
treated as an alias of this same personal routine (same author, same sole
composer) rather than carded separately, per the project's size-category
convention; (3) 100% single-composer usage across both variants.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/jaymz-julian.json`,
`data/sidid.json`, a CSDb scener-page check, and (2026-07-31) a full
census of all 7 tagged files' individual CSDb SID entries plus a fresh
web/Lemon64/Forum64-style search for a dedicated tool page. `status:
stub` — Tier 3 remains untouched.

## Sources

See the `sources` array — SIDId sidid.nfo, local composer aggregation, and
the CSDb scener profile for Jaymz Julian.
