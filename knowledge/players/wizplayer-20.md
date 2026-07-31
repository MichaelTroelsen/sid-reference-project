# WizPlayer_2.0

```json
{
  "id": "wizplayer-20",
  "name": "WizPlayer_2.0",
  "aliases": ["WizPlayer_2.0"],
  "authors": ["Piotr Kuciapski (Wizard)"],
  "released": "No formal tool-release date found (no dedicated CSDb tool/release entry under this name). Full census of all 4 tagged files' own CSDb SID entries (via scripts/lib/csdb-client.js, type=sid): earliest attested is 1996 — 'Comeback' (id 31084, Released='1996 Street Children') and 'Vibrations' (id 31154, Released='1996 Street Children/Oxygen'); latest is 1997 — 'Droid's Life' (id 31090, Released='1997 Street Children') and 'Live & Let Die' (id 31114, Released='1997 Street Children/Oxygen'). These are per-tune attestation dates, not a tool release date. A sibling tag 'WizPlayer_1.0' (same author, not in this batch) implies at least a two-version history.",
  "status": "stub",
  "platform": "Native C64 — a personal, in-house player routine embedded directly in the composer's own SID files (100% single-composer usage; see quirks). No dedicated CSDb tool/release page, no standalone editor, no source repo, no forum thread found under this name — checked CSDb webservice search (no result), CSDb HTML search (503 unavailable), a Lemon64 forum search (no relevant results), and sidid.nfo's raw text (author line only). Treated as an unreleased/undocumented routine rather than a distributed editor.",
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
    "SIDId's sidid.nfo carries only an AUTHOR line — 'Piotr Kuciapski (Wizard)' — no NAME/RELEASED/REFERENCE/COMMENT for 'WizPlayer_2.0'. A sibling tag 'WizPlayer_1.0' (same author, listed immediately before it in sidid.nfo, NOT in this batch/uncarded) also has an author-only record — no version-history detail beyond the two tag names themselves.",
    "100% single-composer concentration: all 4 locally-tagged 'WizPlayer_2.0' files belong to the composer 'Oxygen_Wizard' (Piotr Kuciapski, handle Wizard, Poland — data/composers/oxygen-wizard.json), consistent with a personal, self-named routine ('Wiz' + 'Player') rather than a distributed tool.",
    "Web search for 'WizPlayer' turned up no independent CSDb tool/release page or documentation distinct from the sidid.nfo entries themselves — see sources.",
    "Full census of all 4 tagged files' PSID headers (CSDb type=sid, via scripts/lib/csdb-client.js — header metadata only, not a disassembly fact, so NOT promoted into memory/entry): 'Comeback' (id 31084) LoadAddr=$5000/InitAddr=$5000/PlayAddr=$5003; 'Droid's Life' (id 31090) LoadAddr=$1000/InitAddr=$2150/PlayAddr=$2159; 'Live & Let Die' (id 31114) LoadAddr=$5000/InitAddr=$5000/PlayAddr=$5003; 'Vibrations' (id 31154) LoadAddr=$1000/InitAddr=$1000/PlayAddr=$1003. Load/init/play addresses vary per file (relocatable, or driver reassembled per-tune) — this alone is not enough to fix a single memory map.",
    "CSDb scener profile shows the composer (handle 'Wizard', CSDb Handle ID 1623) as an ex-member of the Polish group 'Street Children' (CSDb group id 646) and of 'Oxygen64'/AKA 'Oxygen' (CSDb group id 205) — matches the 'Street Children' / 'Street Children/Oxygen' release credits on all 4 tagged tunes' own CSDb SID entries. This is composer/group affiliation, not evidence of a distributed player tool."
  ],
  "sources": [
    "SIDId sidid.nfo (author only for both WizPlayer_1.0 and WizPlayer_2.0): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 4 files tagged WizPlayer_2.0, all by composer 'Oxygen_Wizard' — data/composers/oxygen-wizard.json; see knowledge/COVERAGE.md (grouped row: 5f total across WizPlayer_1.0 + WizPlayer_2.0)",
    "CSDb scener profile, Wizard / Piotr Kuciapski (Poland), CSDb Handle ID 1623: https://csdb.dk/scener/?id=1623 (fetched via CSDb webservice type=scener)",
    "CSDb SID entries for all 4 tagged files, fetched via CSDb webservice type=sid (scripts/lib/csdb-client.js): https://csdb.dk/sid/?id=31084 (Comeback), https://csdb.dk/sid/?id=31090 (Droid's Life), https://csdb.dk/sid/?id=31114 (Live & Let Die), https://csdb.dk/sid/?id=31154 (Vibrations)",
    "CSDb webservice type=search query 'WizPlayer': no result (checked 2026-07-31); CSDb HTML search (csdb.dk/search) returned 503 Service Unavailable at time of check",
    "Lemon64 forum search for 'WizPlayer': no relevant results found (checked 2026-07-31)"
  ]
}
```

## Overview

WizPlayer_2.0 is a SIDId Player-ID tag attributed to **Piotr Kuciapski**,
handle **Wizard**, a Polish scener. SIDId's record is author-only, with a
sibling `WizPlayer_1.0` tag (same author) implying at least a two-version
history, but no title, release date, or CSDb reference is recorded for
either. Locally `WizPlayer_2.0` appears in **4 files, all by the composer
Oxygen Wizard himself** (data/composers/oxygen-wizard.json — a full census,
not a sample). No independent CSDb tool/release page or documentation was
found; a CSDb webservice `search` for "WizPlayer" returns no result, and
the CSDb HTML search returned 503 at time of check.

A full census of each tagged file's own CSDb SID entry (`type=sid`, via
`scripts/lib/csdb-client.js`) puts the earliest attested use at **1996**
('Comeback', 'Vibrations' — both credited 'Street Children'/'Street
Children/Oxygen') and the latest at **1997** ('Droid's Life', 'Live & Let
Die'). This is per-tune attestation, not a tool release date — no formal
release of "WizPlayer" as a product was found. The composer's CSDb scener
profile (Handle ID 1623) confirms ex-membership in the Polish groups
'Street Children' (id 646) and 'Oxygen64'/'Oxygen' (id 205), matching the
per-tune release credits.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) author-only SIDId record for both
version tags, no title/reference; (2) 100% single-composer usage; (3) no
independent documentation found beyond sidid.nfo, CSDb search, or a Lemon64
forum search; (4) PSID load/init/play addresses vary per tagged file (not a
fixed memory map — recorded as header metadata only, not promoted to Tier 3).

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/oxygen-wizard.json`,
`data/sidid.json`, a CSDb scener-page check, and a full census of all 4
tagged files' own CSDb SID entries via the CSDb webservice. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, local composer aggregation, the
CSDb scener profile for Wizard/Piotr Kuciapski, the 4 tagged files' CSDb SID
entries, and the negative-result CSDb/Lemon64 searches.
