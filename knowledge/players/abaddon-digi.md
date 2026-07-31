# Abaddon_Digi

```json
{
  "id": "abaddon-digi",
  "name": "Abaddon_Digi",
  "aliases": ["Abaddon_Digi"],
  "authors": ["Timo Taipalus (Abaddon)"],
  "released": "TODO: no tool-release date exists — SIDId carries no RELEASED field and no CSDb tool/release entry was found under this name (csdb.dk/search/?search=Abaddon_Digi returns no matches). Earliest attested use is the tune 'Vaakataso', released 2015-10-25 at Zoo 2015 (csdb.dk/sid/?id=52180, CSDb webservice type=sid) — a first-use date, not a tool release date; do not read this as `released`.",
  "status": "stub",
  "platform": "TODO: native C64 6502 routine embedded directly in Abaddon's own SID files (both tagged files share LoadAddr $0800/2048, InitAddr $0F10/3856 per CSDb webservice type=sid records for id 52180 and 57267) — not a distributed editor/tool, no dedicated CSDb tool/release entry exists under this name. Confirmed distinct from Abaddon's separately-authored CheeseCutter player (knowledge/players/cheesecutter.md, BASEADDRESS $1000) by differing load/init addresses — this is not CheeseCutter's digi/sample handling under another tag.",
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
    "SIDId's entry for this tag has only an AUTHOR line — no NAME, RELEASED, REFERENCE, or COMMENT (data/sidid.json byTag['Abaddon_Digi']) — no playback-technique claim of any kind, so per this project's rule ('digi by name is not evidence') no technique is asserted here.",
    "100% single-composer concentration: both locally-tagged files ('Vaakataso', 'Out of Contex' tune 4) belong to composer 'abaddon' (Timo Taipalus) alone (data/composers/abaddon.json) — the strongest available personal-routine signal.",
    "Timo Taipalus (Abaddon) is a Finnish scener/composer (data/composers/abaddon.json, country Finland, csdb_id 292); no CSDb tool/release page for a standalone editor under this name was found.",
    "Census of both tagged files via the CSDb webservice (type=sid): 'Vaakataso' (id 52180) LoadAddr 2048/InitAddr 3856, Released '2015 Triad' (used in the release 'Vaakataso' at Zoo 2015, 2015-10-25); 'Out of Contex (tune 4)' (id 57267) LoadAddr 2048/InitAddr 3856, Released '2019 Artline Designs' (used in the demo 'Out of Contex' / 'Artline I' at Zoo 2019, 2019-10-05). Identical load/init addresses across both files support one shared routine, not a coincidence.",
    "Abaddon (Timo Taipalus) is separately credited as author of CheeseCutter (csdb.dk/scener/?id=292 lists 'CheeseCutter 0.4.0'/'0.5.1'/'2.3.0' releases; see knowledge/players/cheesecutter.md). No source or manual states Abaddon_Digi is CheeseCutter's digi/sample code, and the two files' LoadAddr/InitAddr ($0800/$0F10) don't match CheeseCutter's BASEADDRESS ($1000) — same-author coincidence only, so no `edges` entry is asserted between the two cards.",
    "CSDb site search for 'Abaddon_Digi' and 'Abaddon digi' both returned 'We were unable to find anything for you' (csdb.dk/search/) — explicit none-found, not an omission. Lemon64 forum search required a logged-in account and could not be queried (search.php returned 'not permitted to use the search system')."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no other fields): https://github.com/cadaver/sidid/blob/master/sidid.nfo — data/sidid.json byTag['Abaddon_Digi']",
    "Local dataset: 2 files tagged Abaddon_Digi, both by composer 'abaddon' — data/composers/abaddon.json; see knowledge/COVERAGE.md rank 90",
    "CSDb scener profile, Timo Taipalus / Abaddon: https://csdb.dk/scener/?id=292",
    "CSDb webservice type=sid id=52180 ('Vaakataso'): https://csdb.dk/webservice/?type=sid&id=52180&depth=2 (LoadAddr/InitAddr/Released/UsedIn fields)",
    "CSDb webservice type=sid id=57267 ('Out of Contex tune 4'): https://csdb.dk/webservice/?type=sid&id=57267&depth=2 (LoadAddr/InitAddr/Released/UsedIn fields)",
    "CSDb site search, no match for 'Abaddon_Digi' or 'Abaddon digi': https://csdb.dk/search/?search=Abaddon_Digi"
  ]
}
```

## Overview

Abaddon_Digi is a SIDId-fingerprinted digi routine attributed to **Timo
Taipalus**, handle **Abaddon**, a Finnish composer/scener (Triad). SIDId's
record for the tag carries only an author line — no name, release date,
reference, or technique comment. Both locally-tagged files belong to Abaddon
himself, consistent with a personal, never-packaged routine. A full census of
both files via the CSDb webservice shows identical LoadAddr/InitAddr
($0800/$0F10) across the four years separating them (tune "Vaakataso",
2015-10-25, to tune "Out of Contex" tune 4, 2019-10-05) — one stable routine
reused over time, not a one-off. No dedicated CSDb tool/release entry exists
under the name "Abaddon_Digi", and a direct CSDb site search for it returns no
results, so `released` and `csdb_release` stay TODO rather than being inferred
from the tunes' own dates. Abaddon is separately the author of CheeseCutter
(carded at `knowledge/players/cheesecutter.md`), but the load/init addresses
here don't match CheeseCutter's `$1000` base, so no lineage is asserted
between the two — same author, different routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId's record is the thinnest possible
(author-only, no technique claim at all); 100% single-composer usage; both
files share one LoadAddr/InitAddr pair; explicit CSDb search failure for a
tool entry; ruled out as being CheeseCutter under another tag.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`. PSID header fields (LoadAddr/InitAddr) gathered
during the CSDb census are recorded in `quirks` only, per this project's rule
against writing header metadata into Tier 3 `memory`/`entry` fields.

## Verification

Not verified. Seeded from local `data/composers/abaddon.json` and SIDId.
`status: stub`.

## Sources

See the `sources` array — SIDId, the local composer aggregation, and CSDb.
