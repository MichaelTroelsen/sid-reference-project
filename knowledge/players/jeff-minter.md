# Jeff Minter

```json
{
  "id": "jeff-minter",
  "name": "Jeff Minter",
  "aliases": ["Jeff_Minter"],
  "authors": ["Jeff Minter"],
  "released": "1985 — CSDb's own SID-entry `Released` field for the only tagged file ('Syncro', csdb sid id 54288) reads '1985 Commodore Horizons' (a UK C64 magazine credit, per CSDb webservice). A same-named CSDb-catalogued one-file demo 'Syncro' (release id 31050) is dated 1986 — likely a later scene re-release of the same tune, not confirmed via an explicit CSDb SID-to-release link (no `UsedIn` field returned).",
  "status": "stub",
  "platform": "Native C64, one-off personal routine — not a distributed tool/editor. Jeff Minter's own CSDb release list (data/csdb/jeff-minter.json, 20 releases) contains no player/editor release matching this tag; the only two 'C64 Tool' entries on his list ('Basic-Starter' 1986, 'Turbo 64 Editor' 1985, the latter only a Charset credit) are unrelated. Do not describe this as a Llamasoft 'game conversion' routine — no game release links to this SID entry; the only plausible tie is the same-named one-file demo 'Syncro' (CSDb release 31050, 1986, code/graphics/charset all by Minter/Yak, no separate Music credit listed).",
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
    "SIDId's sidid.nfo has NO entry for 'Jeff_Minter' (checked) — Player-ID-only signature. Jeff Minter, England/Wales, CSDb scener 9435, is Llamasoft's founder — local composer profile confirms affiliation 'Llamasoft' (data/composers/jeff-minter.json).",
    "DISTINCT from the separately-tagged, separately-carded 'Llamasoft/James_Lisney' tag (knowledge/players/llamasoft-james-lisney.md) by another Llamasoft-credited composer — no evidence the two tags share a routine; Player-ID resolved them as different signatures.",
    "Single file, single composer: 'Syncro' (CSDb sid entry 54288) is the only locally tagged file — a true one-off personal routine, not a widely used tool. Do not inflate this to a 'Llamasoft house engine' claim beyond what the data shows.",
    "CSDb's SID-entry Released field for 'Syncro' says '1985 Commodore Horizons' — a magazine credit, not a scene-release date. A same-named CSDb release 'Syncro' (id 31050, C64 One-File Demo, 1986, by Yak/Minter) exists but the CSDb webservice returns no UsedIn link tying the SID entry to that release — treat the tune-demo connection as plausible (identical name, same author) but unconfirmed, not established.",
    "Jeff Minter's full CSDb release credit list (20 entries, data/csdb/jeff-minter.json) has no player/editor tool matching this tag — checked exhaustively, not sampled."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Jeff_Minter': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local composer profile confirming affiliation 'Llamasoft': data/composers/jeff-minter.json",
    "CSDb scener Jeff Minter (England, Wales, Llamasoft): https://csdb.dk/scener/?id=9435",
    "Local dataset: 1 file tagged Jeff_Minter — 'Syncro', by Jeff Minter",
    "CSDb webservice, SID entry 54288 ('Syncro'): Released='1985 Commodore Horizons', LoadAddr=$0EF5/3829, InitAddr=$0F00/3840, PlayAddr=$0F85/3973 — https://csdb.dk/sid/?id=54288 (queried via scripts/lib/csdb-client.js getSidRelease)",
    "CSDb webservice, release 31050 ('Syncro', C64 One-File Demo, 1986, Yak/Jeff Minter — code/graphics/charset, no Music credit listed): https://csdb.dk/release/?id=31050",
    "Jeff Minter's full CSDb credit/release list (20 releases, no player/tool matching this tag): data/csdb/jeff-minter.json (fetched 2026-07-10)"
  ]
}
```

## Overview

`Jeff_Minter` is a raw Player-ID tag for a single locally-tagged file
("Syncro") credited directly to **Jeff Minter**, founder of Llamasoft
(England/Wales, CSDb scener 9435). SIDId has no entry for this tag; no
dedicated CSDb tool/release page was found — Minter's full 20-entry CSDb
release list has no player/editor matching this tag. This is a true
one-file, one-composer personal routine. CSDb's own SID-entry metadata
dates the tune to 1985 ("Commodore Horizons", a magazine credit); a
same-named 1986 one-file demo release exists but is not explicitly linked
by CSDb's webservice, so treat that connection as plausible, not proven.

## Quirks & gotchas

See the `quirks` array. Load-bearing: single file/single composer — do not
inflate into a claim about a broader "Llamasoft engine" or "game
conversion routine" (no game release links to this SID entry); distinct
from the separately-tagged `Llamasoft/James_Lisney` tag by another
composer; the 1985 magazine date and 1986 demo-release date are two
different, both-real attestations — don't collapse them into one.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/jeff-minter.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), local composer
profile, CSDb scener page, the local file aggregation, and two CSDb
webservice queries (SID entry 54288 and release entry 31050, both fetched
live via `scripts/lib/csdb-client.js` during this pass).
