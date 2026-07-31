# Madhacker_Digi

```json
{
  "id": "madhacker-digi",
  "name": "Madhacker_Digi",
  "aliases": ["Madhacker_Digi"],
  "authors": ["David (Madhacker)"],
  "released": "TODO: no dedicated tool-release date exists (this is a personal, per-track routine, not a distributed product); census of all 6 tagged files' own CSDb 'Released' field is unanimous — '1990 Ikon Visual' for every one (sid ids 42388, 52842, 52843, 52841, 42389, 42390) — a first-use/composition-year attestation, not a tool release date",
  "status": "stub",
  "platform": "Native C64 machine code, embedded per-track in each PSID (HVSC/DeepSID 'player_type: Normal built-in' for all 6 census files; PSID LoadAddr/InitAddr cluster at $1E00-$1EC0 / 7680-7872 decimal, one outlier at $1D80/7552) — not a released standalone editor/tool. Confirmed distinct from a genuinely separate, CSDb-documented native C64 tool also coded by Madhacker, 'Digi-Mixer' (C64 Tool release id 10762, 1990 Ikon Visual, credited Code: Madhacker+Maniac, Music: Jens Blidon, distributed as a downloadable .T64) — no evidence ties that tool to this SIDId tag.",
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
    "SIDId (data/sidid.json byTag.\"Madhacker_Digi\") records only 'AUTHOR: David (Madhacker)' — checked directly, no `name`/`released`/`comment`/`reference` keys exist at all, so `csdb_release` is confirmed absent (not merely unresearched).",
    "CENSUS CORRECTION (all 6/6 tagged files checked via CSDb webservice type=sid, not sampled): every one of the 6 locally-tagged files DOES map onto a title Madhacker holds a genuine scene-attested 'Sampling' credit for, contrary to the prior note in this card. Fine_Time.sid's own UsedIn list includes 'Demo of the Year 1990' (release id 11292); Get_Up.sid, Helyom_Halib.sid and Music_Lover_Mix.sid are all UsedIn 'Sonic Youth' (id 11577); Sucker_DJ.sid is UsedIn 'Sucker DJ Mix' (id 11579); U_Cant_Touch_This.sid is UsedIn 'U Can't Touch This!' (id 6774), 'Contact IKV Now' (id 143810) and 'Can't Touch IKV!' (id 176283) — every one of these exactly matches a title on Madhacker's scener page 'Sampling'-credit list. This is now direct (not merely biographical) corroboration that these 6 specific files carry his own sampling/digi work.",
    "CSDb's scener page for Madhacker (id 4745; ex-Cobra [founder], ex-Ikon Visual [founder], ex-NATO; Australia) lists the 'Sampling'-role credits referenced above: 'Sucker DJ Mix' (1991), 'U Can't Touch This!' (1990), 'Sonic Youth' (1990), 'Contact IKV Now' (1991), 'Can't Touch IKV!' (1990), 'Demo of the Year 1990'.",
    "Do not confuse with a different, separately-named thing: CSDb also documents a standalone C64 tool called 'Digi-Mixer' (release id 10762, 1990 Ikon Visual, 'C64 Tool' type, downloadable as .T64) co-coded by Madhacker (with Maniac; music by Jens Blidon) — distinct from both this SIDId tag ('Madhacker_Digi') and from Gyula Szalai/Jules's unrelated 'Digimixer V2.0' (Fun Factory, 1993 — see knowledge/players/digimixer-funfactory.md). No evidence ties Madhacker's own embedded per-track routine (this tag) to his 'Digi-Mixer' tool release; flagged only to prevent conflating three similarly-named but distinct things.",
    "PSID header census (all 6 files): LoadAddr/InitAddr are 7680/7808 for Fine_Time, Get_Up, Music_Lover_Mix and Sucker_DJ; 7680/7872 for U_Cant_Touch_This; and an outlier 7552/7552 (load==init) for Helyom_Halib. Header metadata only — not a disassembly fact, kept out of the Tier 3 `entry`/`memory` fields per the extraction template.",
    "Fully single-composer usage: all 6 locally-tagged files belong to Madhacker himself (data/composers/madhacker.json)."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, checked for `reference`/`released`/`comment` — none present): data/sidid.json byTag.\"Madhacker_Digi\"",
    "CSDb scener profile, Madhacker (groups Cobra/Ikon Visual/NATO, Australia, multiple 'Sampling'-role credits 1990-91): https://csdb.dk/scener/?id=4745",
    "CSDb release entry, 'Digi-Mixer' (C64 Tool, 1990 Ikon Visual, Code: Madhacker+Maniac, Music: Jens Blidon): https://csdb.dk/release/?id=10762",
    "CSDb SID-file entries, all 6 census-checked via webservice (type=sid): https://csdb.dk/sid/?id=42388 (Fine Time), https://csdb.dk/sid/?id=52842 (Get Up), https://csdb.dk/sid/?id=52843 (Helyom Halib), https://csdb.dk/sid/?id=52841 (Music Lover Mix), https://csdb.dk/sid/?id=42389 (Sucker DJ), https://csdb.dk/sid/?id=42390 (U Can't Touch This)",
    "Local dataset: 6 files tagged 'Madhacker_Digi', all under composer Madhacker — data/composers/madhacker.json"
  ]
}
```

## Overview

Madhacker_Digi is the local/SIDId tag for a digi/sample-playback routine
attributed to **David**, handle **Madhacker**, an Australian scener
(founder of Cobra and Ikon Visual, later NATO). SIDId's index carries only an
author line — no release date, comment, or CSDb reference id (checked
directly). Locally it covers 6 files, all by Madhacker himself, all embedded
per-track as PSID "Normal built-in" native C64 machine code (no dedicated
standalone player/tool release exists for this exact tag). A full census of
all 6 CSDb SID-file entries (not a sample) shows every one of them was used
in a demo where Madhacker holds a genuine, scene-attested "Sampling" credit —
direct corroboration, not just biography, that these specific files carry
his own sampling work. Each file's own CSDb `Released` field is unanimously
"1990 Ikon Visual", though that is a composition-year attestation, not a
tool release date, since no standalone tool was ever released under this
tag.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) a full census (6/6, not a sample)
corrects the prior draft's claim that no credited title matched a tagged
file — every one of the 6 files' `UsedIn` releases exactly matches a title on
Madhacker's "Sampling"-credit list; (2) a separate, genuinely CSDb-documented
tool, "Digi-Mixer" (release id 10762, 1990, native C64, downloadable .T64,
co-coded by Madhacker), must not be confused with this tag or with the
unrelated "Digimixer V2.0" by Jules/Fun Factory; (3) 100% single-composer
usage; (4) `csdb_release` is confirmed absent from SIDId's entry, not merely
unresearched.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found
specifically for this SIDId tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity is SIDId-sourced,
platform inferred from PSID headers across a full 6-file census, scene
corroboration from CSDb's scener page and a full census of each file's own
`UsedIn` list, composer concentration from local dataset aggregation. No
runtime fact has been disassembled or traced.

## Sources

See the `sources` array — SIDId's sidid.nfo, CSDb's Madhacker scener profile,
one sampled CSDb SID-file entry, and local composer-file aggregation.
