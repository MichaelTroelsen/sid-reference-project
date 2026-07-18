# Digitize_Design_Group

```json
{
  "id": "digitize-design-group",
  "name": "Digitize_Design_Group",
  "aliases": ["Digitize_Design_Group"],
  "authors": ["Mac Gyver (credited 'Sampling' on a DDG release — see quirks; not confirmed as sole/original coder of the fingerprinted routine)"],
  "released": "TODO: no explicit tool-release year in SIDId; the group Digitize Design Group (DDG) was active 1986-1989",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house sample/digi routine of the Finnish group Digitize Design Group (DDG), not a released standalone editor (see quirks)",
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
    "No SIDId sidid.nfo entry exists for this tag (checked data/sidid.json byTag — absent). Everything below is CSDb/local-dataset provenance, not a SIDId-sourced technique claim.",
    "The tag name matches a real, documented Finnish C64 group: Digitize Design Group (DDG), CSDb group #1390, active c. 1986-1989, tagline 'Digitizing Power!', ~35 releases across demos/tools/music/graphics, who ran a 'DDG Digi-Party' in 1988 (https://csdb.dk/group/?id=1390). This is real corroboration that the tag is a genuine group-scoped routine, not a filename-regex artifact.",
    "One of the 2 locally-tagged files' composer directly matches a confirmed DDG member: 'gyver-mac' (handle Mac Gyver, Finland, data/composers/gyver-mac.json) is listed as a DDG coder member, and CSDb's own credits for the group's 1987 release 'Sex' name Mac Gyver for BOTH 'Code' and 'Sampling' (https://csdb.dk/release/?id=51889) — i.e. Mac Gyver is independently, directly credited with sample/digi work for this exact group, on a release contemporary with the group's active era. This is stronger evidence than most tags in this batch.",
    "The SECOND locally-tagged file's composer, 'feekzoid' (Paul Hannay, Scotland, data/composers/feekzoid.json), is NOT found among DDG's documented members (April7 [founder], Mac Gyver, Toincware, WPC, Kenny Everett, JSA, Miy, Mr. Moonlight, Snowballs, Hawk, Wolf, Wery Well — per CSDb group #1390) and has no obvious DDG connection in the sources checked. Why his file ('Jimi Digi') carries the same Player-ID signature as a DDG member's is unresolved — plausibly the routine circulated beyond the group's own membership, but that is inference, not sourced.",
    "Because the tag spans a group (not one person) and the SIDId author-attribution rule of this batch is 'no per-tag record exists,' `authors` here names only the one directly-CSDb-credited candidate (Mac Gyver), flagged as not necessarily the sole or original coder of the fingerprinted routine — DDG had multiple coders."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry for 'Digitize_Design_Group': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb group #1390, Digitize Design Group (Finland, 1986-1989, DDG Digi-Party 1988, member list): https://csdb.dk/group/?id=1390",
    "CSDb release #51889, 'Sex' (Digitize Design Group, 1987) — credits Mac Gyver for Code AND Sampling: https://csdb.dk/release/?id=51889",
    "Local dataset: 2 files tagged Digitize_Design_Group — 'Jimi Digi' (feekzoid) and 'Heart' (gyver-mac) — data/composers/feekzoid.json, data/composers/gyver-mac.json; see knowledge/COVERAGE.md rank 99",
    "CSDb scener profile, Mac Gyver (Finland): data/composers/gyver-mac.json profile.csdb_id 4059"
  ]
}
```

## Overview

Digitize_Design_Group is a SIDId Player-ID tag matching the name of a real,
documented Finnish demo group — **Digitize Design Group (DDG)**, active
c. 1986-1989 (CSDb group #1390). Unlike most tags in this batch, there is
direct corroborating evidence linking a real DDG member to sample work: CSDb
credits DDG coder **Mac Gyver** with both "Code" and "Sampling" on the
group's 1987 release "Sex." One of this tag's two locally-tagged files
("Heart") is indeed by Mac Gyver. The second file ("Jimi Digi") is by
**Feekzoid** (Paul Hannay, Scotland), who is not among DDG's documented
members — so while the group-routine reading is well supported for one file,
the second file's connection to DDG is unexplained.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) DDG is a real, CSDb-documented
group with a confirmed member directly credited for "Sampling" work — better
evidence than most tags here; (2) one of the two tagged composers is NOT a
documented DDG member, leaving the tag's full scope unresolved; (3) no SIDId
entry exists to independently confirm authorship or technique.

## Disassembly notes

None done here. No public source or CSDb tool/release entry (distinct from
the group's own demo/music releases) was found. All Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local composer data and CSDb group/release
research. `status: stub`.

## Sources

See the `sources` array — CSDb (group and release pages), the local composer
aggregation, and a confirmed-absent SIDId check.
