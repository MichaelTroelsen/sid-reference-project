# WizPlayer_2.0

```json
{
  "id": "wizplayer-20",
  "name": "WizPlayer_2.0",
  "aliases": ["WizPlayer_2.0"],
  "authors": ["Piotr Kuciapski (Wizard)"],
  "released": "1996 (CSDb release 97038, 'Wizplayer V2.0 Relocator', C64 Tool, Street Children, Code: Wizard/Handle ID 1623 — same author as this card). CORRECTED 2026-08-01: an earlier pass on this card searched only the bare string 'WizPlayer' and found nothing; a sibling card's research (wizplayer-v1.md) independently located this release by its full title. Full census of all 4 tagged files' own CSDb SID entries (via scripts/lib/csdb-client.js, type=sid): earliest attested is 1996 — 'Comeback' (id 31084, Released='1996 Street Children') and 'Vibrations' (id 31154, Released='1996 Street Children/Oxygen'); latest is 1997 — 'Droid's Life' (id 31090, Released='1997 Street Children') and 'Live & Let Die' (id 31114, Released='1997 Street Children/Oxygen'), consistent with a 1996 tool release followed by continued use into 1997.",
  "status": "stub",
  "platform": "Native C64 tool — CSDb release 97038 ('Wizplayer V2.0 Relocator') classifies it under Type 'C64 Tool', credited to Wizard (Handle ID 1623, this card's author) for the Polish group Street Children. CORRECTED 2026-08-01: this card previously claimed 'no dedicated CSDb tool/release page ... found' after searching only the bare string 'WizPlayer'; the release exists under its full title. Embedded per-tune usage (100% single-composer concentration, varying load/init/play addresses across the 4 tagged files) is consistent with the composer reassembling/relocating his own tool's output per production, matching the sibling card `wizplayer-v1.md`'s reading.",
  "csdb_release": 97038,

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
    "SIDId's sidid.nfo carries only an AUTHOR line — 'Piotr Kuciapski (Wizard)' — no NAME/RELEASED/REFERENCE/COMMENT for 'WizPlayer_2.0'. A sibling tag 'WizPlayer_1.0' (same author, listed immediately before it in sidid.nfo, NOT in this batch/uncarded) also has an author-only record — no version-history detail beyond the two tag names themselves.",
    "100% single-composer concentration: all 4 locally-tagged 'WizPlayer_2.0' files belong to the composer 'Oxygen_Wizard' (Piotr Kuciapski, handle Wizard, Poland — data/composers/oxygen-wizard.json), consistent with a personal, self-named routine ('Wiz' + 'Player') rather than a distributed tool.",
    "Web search for 'WizPlayer' turned up no independent CSDb tool/release page or documentation distinct from the sidid.nfo entries themselves — see sources.",
    "Full census of all 4 tagged files' PSID headers (CSDb type=sid, via scripts/lib/csdb-client.js — header metadata only, not a disassembly fact, so NOT promoted into memory/entry): 'Comeback' (id 31084) LoadAddr=$5000/InitAddr=$5000/PlayAddr=$5003; 'Droid's Life' (id 31090) LoadAddr=$1000/InitAddr=$2150/PlayAddr=$2159; 'Live & Let Die' (id 31114) LoadAddr=$5000/InitAddr=$5000/PlayAddr=$5003; 'Vibrations' (id 31154) LoadAddr=$1000/InitAddr=$1000/PlayAddr=$1003. Load/init/play addresses vary per file (relocatable, or driver reassembled per-tune) — this alone is not enough to fix a single memory map.",
    "CSDb scener profile shows the composer (handle 'Wizard', CSDb Handle ID 1623) as an ex-member of the Polish group 'Street Children' (CSDb group id 646) and of 'Oxygen64'/AKA 'Oxygen' (CSDb group id 205) — matches the 'Street Children' / 'Street Children/Oxygen' release credits on all 4 tagged tunes' own CSDb SID entries. This is composer/group affiliation, not evidence of a distributed player tool.",
    "CORRECTION (2026-08-01): this card's original research pass searched CSDb only for the bare string 'WizPlayer' and concluded no dedicated tool/release page existed. That was wrong — release 97038, 'Wizplayer V2.0 Relocator' (C64 Tool, 1996, Street Children, Code: Wizard/Handle ID 1623), is a real, dedicated CSDb entry for exactly this tool version. Found independently while researching the sibling card `wizplayer-v1.md` in the same batch, which searched for the version-qualified title rather than the bare product name."
  ],
  "sources": [
    "SIDId sidid.nfo (author only for both WizPlayer_1.0 and WizPlayer_2.0): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 4 files tagged WizPlayer_2.0, all by composer 'Oxygen_Wizard' — data/composers/oxygen-wizard.json; see knowledge/COVERAGE.md (grouped row: 5f total across WizPlayer_1.0 + WizPlayer_2.0)",
    "CSDb scener profile, Wizard / Piotr Kuciapski (Poland), CSDb Handle ID 1623: https://csdb.dk/scener/?id=1623 (fetched via CSDb webservice type=scener)",
    "CSDb SID entries for all 4 tagged files, fetched via CSDb webservice type=sid (scripts/lib/csdb-client.js): https://csdb.dk/sid/?id=31084 (Comeback), https://csdb.dk/sid/?id=31090 (Droid's Life), https://csdb.dk/sid/?id=31114 (Live & Let Die), https://csdb.dk/sid/?id=31154 (Vibrations)",
    "CSDb webservice type=search query 'WizPlayer': no result (checked 2026-07-31); CSDb HTML search (csdb.dk/search) returned 503 Service Unavailable at time of check",
    "Lemon64 forum search for 'WizPlayer': no relevant results found (checked 2026-07-31)",
    "CSDb release entry 97038, 'Wizplayer V2.0 Relocator' — https://csdb.dk/release/?id=97038 (fetched via CSDb webservice type=release, 2026-08-01)"
  ]
}
```

## Overview

WizPlayer_2.0 is a SIDId Player-ID tag attributed to **Piotr Kuciapski**,
handle **Wizard**, a Polish scener. SIDId's record is author-only, with a
sibling `WizPlayer_1.0` tag (same author) implying at least a two-version
history. CSDb release 97038, **"Wizplayer V2.0 Relocator"** (C64 Tool, 1996,
Street Children, Code: Wizard), is the tool's own dedicated release page —
found under its version-qualified title after an earlier research pass on
this card had searched only the bare string "WizPlayer" and wrongly
concluded no such page existed. Locally `WizPlayer_2.0` appears in **4
files, all by the composer Oxygen Wizard himself**
(data/composers/oxygen-wizard.json — a full census, not a sample).

A full census of each tagged file's own CSDb SID entry (`type=sid`, via
`scripts/lib/csdb-client.js`) puts the earliest attested use at **1996**
('Comeback', 'Vibrations' — both credited 'Street Children'/'Street
Children/Oxygen') and the latest at **1997** ('Droid's Life', 'Live & Let
Die'), consistent with the tool's 1996 release followed by continued use
into 1997. The composer's CSDb scener profile (Handle ID 1623) confirms
ex-membership in the Polish groups 'Street Children' (id 646) and
'Oxygen64'/'Oxygen' (id 205), matching the per-tune release credits.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) author-only SIDId record for both
version tags, no title/reference; (2) 100% single-composer usage; (3) no
independent documentation found beyond sidid.nfo, CSDb search, or a Lemon64
forum search; (4) PSID load/init/play addresses vary per tagged file (not a
fixed memory map — recorded as header metadata only, not promoted to Tier 3).

## Disassembly notes

None done here. CSDb release 97038 provides only a compiled tool release
(`.prg` download), not source; no format documentation was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/oxygen-wizard.json`,
`data/sidid.json`, a CSDb scener-page check, and a full census of all 4
tagged files' own CSDb SID entries via the CSDb webservice. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, local composer aggregation, the
CSDb scener profile for Wizard/Piotr Kuciapski, the 4 tagged files' CSDb SID
entries, and the negative-result CSDb/Lemon64 searches.
