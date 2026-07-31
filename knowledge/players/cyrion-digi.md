# Cyrion_Digi

```json
{
  "id": "cyrion-digi",
  "name": "Cyrion_Digi",
  "aliases": ["Cyrion_Digi"],
  "authors": ["Cyrion (real name and country not disclosed on CSDb)"],
  "released": "1993 (4 March 1993) — earliest attestation, not a tool-release date. All 3 tagged files carry CSDb's own 'Released: 1993 Device' field and are the 3 digi-mixes used in Device's demo 'Tekktikkz' (csdb.dk/release/?id=10791, released 04.03.1993). Source: csdb.dk webservice type=sid, ids 49346/501/49345.",
  "status": "stub",
  "platform": "Native C64 in-house digi/sample routine, coded AND sampled by Cyrion himself (CSDb credits him separately for both 'Code' and 'Sampling' on 'Tekktikkz', release id 10791) — embedded in one specific Device demo, not a released standalone editor/tool. No dedicated CSDb tool/player release entry found under this name.",
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
    "CORRECTION (full census of all 3 tagged files, done via csdb.dk webservice type=sid): the earlier draft of this card guessed 'Tekkno Fun'/'Tekktikkz' were different, unrelated titles from the 3 locally-tagged files. They are not — they are the SAME works. CSDb's own release-page summary for 'Tekktikkz' (id 10791, by Device, 04.03.1993) reads verbatim: 'A menu with sid-techno and 3 digi-mixes of: - \"out of space\" by prodigy - \"everybody in the place\" by prodigy - \"Night in mot.\" by Cubic22' — i.e. all 3 locally-tagged Cyrion_Digi files ARE those 3 digi-mixes, covers of Prodigy/Cubic 22 tracks bundled into one Device demo menu.",
    "No SIDId entry exists for this tag (checked data/sidid.json byTag — null). Identity comes entirely from the CSDb scener page and CSDb sid/release webservice records for the 3 tagged files themselves.",
    "Real corroborating evidence for the 'digi' label: CSDb explicitly credits Cyrion with a separate 'Sampling' role (alongside 'Code') on both 'Tekktikkz' (id 10791) and 'Tekkno Fun' (id 35213).",
    "'Tekkno Fun' (id 35213, July 1993, 1st place at Game On Demo Competition 07/93, credited to Sven Maschke) is, per a CSDb user comment dated 07.09.2013 citing 'Prof. Chaos', a rip of 'Tekktikkz''s 3rd tune (Night in Motion) with only the unpacking message edited — so it is not an independent release of the routine, just a repackaging of the same file.",
    "3 files, 1 composer: Cyrion himself. A personal routine by usage pattern.",
    "Cyrion is credited on CSDb as ex-founder of the group 'Device' (Germany-based, founded July 1991), functions Coder and Musician; no country is listed on his own CSDb scener profile.",
    "PSID header metadata only (not disassembly facts — do not promote to Tier 3): LoadAddr $1000 for all 3 files; InitAddr $1000 for 'Everybody in the Place' and 'Outta Space', but $1080 for 'Night in Motion'. Source: csdb.dk webservice type=sid."
  ],
  "sources": [
    "data/sidid.json byTag — confirmed no entry for \"Cyrion_Digi\"",
    "CSDb scener Cyrion (ex-founder of Device; 'Sampling'+'Code' credits on 'Tekkno Fun' and 'Tekktikkz', 1993): https://csdb.dk/scener/?id=7571",
    "CSDb webservice type=sid id=49346 (Everybody in the Place, Released '1993 Device'): https://csdb.dk/webservice/?type=sid&id=49346",
    "CSDb webservice type=sid id=501 (Night in Motion, Released '1993 Device'): https://csdb.dk/webservice/?type=sid&id=501",
    "CSDb webservice type=sid id=49345 (Outta Space, Released '1993 Device'): https://csdb.dk/webservice/?type=sid&id=49345",
    "CSDb release 'Tekktikkz' (Device, 04.03.1993), release-page summary text quoted above: https://csdb.dk/release/?id=10791",
    "CSDb release 'Tekkno Fun' (July 1993, Game On Demo Competition 07/93, 1st place C64 Demo), 'ripoff' comment: https://csdb.dk/release/?id=35213",
    "Local dataset: 3 files tagged Cyrion_Digi, 1 composer (Cyrion), census of all 3 — data/composers/cyrion.json"
  ]
}
```

## Overview

Cyrion_Digi is the raw Player-ID tag for a digi/sample-playback routine
attributed to **Cyrion**, ex-founder of the group **Device** (Germany-based,
founded July 1991; real name and country not disclosed on CSDb). It appears
in exactly **3 files, all by Cyrion himself** — a personal routine by usage
pattern. No SIDId entry exists for the tag. A full census of all 3 tagged
files against CSDb's `type=sid` webservice records shows they are, verbatim,
the "3 digi-mixes" (cover versions of Prodigy's "Out of Space"/"Everybody
in the Place" and Cubic 22's "Night in Motion") bundled into one Device
demo, **"Tekktikkz"** (`csdb.dk/release/?id=10791`, released 4 March 1993).
CSDb corroborates the "digi" label directly: Cyrion is credited with a
separate "Sampling" role (distinct from "Code") on that release. A second
release, "Tekkno Fun" (July 1993), reuses "Night in Motion" but is
documented on CSDb as a rip of Tekktikkz's 3rd tune, not an independent
release — so 1993/Tekktikkz is the routine's earliest and only real
attestation.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry, so identity comes
entirely from CSDb; (2) the census corrected an earlier, wrong guess that
"Tekkno Fun"/"Tekktikkz" were unrelated titles — they are literally the
files in question, per CSDb's own release summary; (3) CSDb's "Sampling"
role credit (separate from "Code") is genuine corroboration of the digi
label; (4) "Tekkno Fun" is a rip of Tekktikkz's 3rd tune, not a second
independent release; (5) extreme concentration (3 files/1 composer) marks
this as a personal routine, not a published tool.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.
PSID header values (load $1000 all 3, init $1000/$1000/$1080) were
gathered during the CSDb sweep but are header metadata, not disassembly
facts — recorded in `quirks`, not promoted to `memory`/`entry`.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a full census of all 3
tagged files against CSDb's `type=sid`/`type=release` webservice, and the
CSDb scener page for Cyrion. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId byTag (no entry), CSDb scener page for
Cyrion, CSDb `type=sid` records for all 3 tagged files, the two CSDb
release pages ("Tekktikkz", "Tekkno Fun"), and the local composer
aggregation.
