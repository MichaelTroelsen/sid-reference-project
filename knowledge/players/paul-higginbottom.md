# Paul_Higginbottom

```json
{
  "id": "paul-higginbottom",
  "name": "Paul_Higginbottom",
  "aliases": ["?Paul_Higginbottom"],
  "authors": ["Paul Higginbottom"],
  "released": "1984 (both tagged tunes; CSDb sid entries 53047/53046 both give Released: 1984, matching HVSC's active:1984)",
  "status": "stub",
  "platform": "Native C64 machine code, not BASIC: both tagged tunes have PSID Load/Init $1000 (CSDb sid entries 53047, 53046), distinct from the composer's third HVSC file (Prelude_in_C_Major, tagged Basic_Program, not part of this player's 2 files). No dedicated CSDb tool/release entry or scener/group profile exists for 'Paul Higginbottom' (CSDb site search returns only the 3 SID-tune entries, no release/group) — consistent with an in-house, personal composing routine rather than a released standalone editor.",
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
    "The leading '?' in the SIDId tag marks it as a scanner-flagged/uncertain signature match. No sidid.nfo entry exists for this tag at all (checked data/sidid.json byTag — absent). The tag name matches the composer's own name exactly, consistent with a personal-routine naming pattern seen elsewhere in this batch.",
    "100% single-composer concentration: both locally-tagged files ('The Entertainer', 'Invention #8' — both classical-music arrangement titles) belong to Paul Higginbottom alone (data/composers/paul-higginbottom.json). HVSC records almost no metadata for him: no country, no CSDb scener id (csdb_id: 0), active year 1984.",
    "Both PSID headers give Play address $0000 (Load/Init $1000; CSDb sid entries 53047, 53046) — no separate play/IRQ vector, i.e. the routine plays out from Init alone rather than exposing a standard interrupt-driven play call. Header metadata only, not a disassembly finding.",
    "CSDb site search for 'Paul Higginbottom' returns exactly the composer's 3 HVSC SID entries and nothing else — no scener profile, no group, no release/tool entry — confirming this is not a named, distributed editor.",
    "Given the thin HVSC record, classical-arrangement titles, and the play-address-$0000 quirk, this reads as an early (1984), personal, in-house routine rather than a distributed editor."
  ],
  "sources": [
    "SIDId sidid.nfo: checked, no entry for 'Paul_Higginbottom' or '?Paul_Higginbottom' (absent from data/sidid.json): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged ?Paul_Higginbottom, both by composer 'Paul Higginbottom' — data/composers/paul-higginbottom.json; see knowledge/COVERAGE.md",
    "HVSC composer profile: Paul Higginbottom, active 1984, no country/CSDb id recorded — data/composers/paul-higginbottom.json",
    "CSDb sid entry 'The Entertainer': Released 1984, Load/Init $1000, Play $0000 — https://csdb.dk/sid/?id=53047",
    "CSDb sid entry 'Invention #8': Released 1984, Load/Init $1000, Play $0000 — https://csdb.dk/sid/?id=53046",
    "CSDb site search 'Paul Higginbottom': only 3 SID-tune entries, no release/group/scener profile — https://csdb.dk/search/?search=Paul+Higginbottom"
  ]
}
```

## Overview

Paul_Higginbottom is a SIDId Player-ID tag (`?`-prefixed, i.e.
scanner-flagged/uncertain) with no `sidid.nfo` entry of its own (checked,
absent). It matches the name of composer **Paul Higginbottom**, an early
(active 1984) HVSC entry with almost no other recorded metadata (no
country, no CSDb scener id). Both locally-tagged files — "The Entertainer"
and "Invention #8", both classical-arrangement titles, both released 1984
per CSDb — are by him alone, consistent with a personal, in-house composing
routine. Both are native C64 machine code (PSID Load/Init $1000), not the
BASIC program his third (untagged) HVSC file uses. CSDb has no
release/tool/group/scener entry under this name at all — only the 3 SID
files.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId record exists for this
tag; (2) HVSC's own record for this composer is unusually thin (no
country, no CSDb id); (3) 100% single-composer, 2-file usage; (4) both
PSID headers carry Play address $0000 — no distinct play vector; (5) CSDb
site search confirms no tool/release/group entry exists.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/paul-higginbottom.json`,
`data/sidid.json` (checked, absent), and CSDb sid-entry/site-search lookups
for both tagged tunes. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (checked, absent), the local
composer aggregation/HVSC profile for Paul Higginbottom, and CSDb sid
entries 53047/53046 plus a CSDb site search confirming no tool/release
entry exists.
