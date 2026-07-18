# Edge

```json
{
  "id": "edge",
  "name": "Edge",
  "aliases": ["?Edge"],
  "authors": ["Andrew Green"],
  "released": "TODO: no tool-release date found; the one locally tagged file ('Almazz') has no dated context beyond the composer's active year 1986",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house, personal composing routine, not a released standalone editor (unconfirmed)",
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
    "The leading '?' in the SIDId tag marks it as a scanner-flagged/uncertain signature match. No sidid.nfo entry exists for this tag at all (checked data/sidid.json byTag — absent). ONE-FILE tag: 'Almazz' by composer Andrew Green (data/composers/andrew-green.json).",
    "The tag name 'Edge' is ambiguous: it could refer to a personal name/handle, or to 'The Edge' (a UK software house/publisher active in the same era) — HVSC's own record for Andrew Green lists his author field with a trailing '<?>' marker (i.e. HVSC itself flags his identity/affiliation as uncertain, per the local data pulled during this batch's research) and his HVSC affiliation as 'Freelance', England, active 1986. No independent source was found confirming which reading of 'Edge' is correct — treat as unresolved, not asserted.",
    "Single-file, single-composer: the thinnest possible local evidence base. Consistent with either a personal in-house routine or a one-off use of a small/obscure contemporary tool — cannot be distinguished from local data alone."
  ],
  "sources": [
    "SIDId sidid.nfo: checked, no entry for 'Edge' or '?Edge' (absent from data/sidid.json): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 1 file tagged ?Edge ('Almazz'), by composer 'Andrew Green' — data/composers/andrew-green.json; see knowledge/COVERAGE.md",
    "HVSC composer profile: Andrew Green, England, affiliation Freelance, active 1986 — data/composers/andrew-green.json"
  ]
}
```

## Overview

Edge is a SIDId Player-ID tag (`?`-prefixed, i.e. scanner-flagged/
uncertain) with no `sidid.nfo` entry of its own (checked, absent). Local
data ties its single tagged file, "Almazz", to composer **Andrew Green**
(England, HVSC affiliation "Freelance", active 1986). Whether "Edge" here
refers to a personal name/handle or to the contemporary UK publisher "The
Edge" is unresolved — no independent source disambiguates it, so no claim
is made either way.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId record exists for this
tag; (2) the meaning of "Edge" in the tag name is genuinely ambiguous and
unresolved; (3) single-file, single-composer — the thinnest evidence base
in this batch.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/andrew-green.json` and
`data/sidid.json` (checked, absent). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (checked, absent) and the local
composer aggregation/HVSC profile for Andrew Green.
