# Bug/NCI

```json
{
  "id": "bug-nci",
  "name": "Bug/NCI",
  "aliases": ["Bug/NCI"],
  "authors": ["Patrick Becher (Bug)"],
  "released": "TODO: no explicit tool/player release date exists (personal in-house routine, not published as a distributed editor). Full census of all 5 tagged files (CSDb sid ids 4608, 4633, 4650, 4651, 4677) shows each file's own CSDb 'Released' field reads identically '1988 Bechersoftware' — consistent across the census, but this is a per-tune attestation date, not a tool-release date.",
  "status": "stub",
  "platform": "TODO: appears to be a personal/in-house C64 music routine, not a published/shared editor — no dedicated CSDb tool/release entry found under this name. All 5 census files share an identical PSID load/init address pair ($C000/$CB20 = 49152/52000), consistent with one embedded player routine reused across Becher's own tunes rather than a general-purpose editor.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "No SIDId entry exists for this exact tag (checked data/sidid.json byTag — 'Bug/NCI' absent). The tag is DeepSID-only.",
    "The composer handle 'Bug' is independently corroborated as Patrick Becher's demoscene alias via a remix.kwed.org remix credit page ('Octapolis - Arkanoid Theme', credited 'Patrick Becher (Bug)') — a real but thin corroboration, not a CSDb scener profile match (a direct CSDb scener search for 'Patrick Becher' and for handle 'Bug' both returned no results during this research pass, via csdb.dk's search endpoint).",
    "RESOLVED (this pass): the 'NCI' component of the tag is Patrick Becher's release group 'NCI', used on his other (non-tagged) 1989 tunes. A CSDb site search for 'Patrick Becher' returns 77 SID results and states he is credited with handle 'Bug' and was 'involved with the group NCI during 1989', separately from the 1988 'Bechersoftware' label (https://csdb.dk/search/?seinsel=all&search=Patrick+Becher). Directly queried via the CSDb webservice, four of Becher's OTHER tunes (csdb sid ids 4629 'Hey Baby Bug', 4605, 4606, 4610) each carry Released='1989 NCI', confirming NCI is a real, CSDb-attested release group, not an unidentified string. However none of the 5 files actually tagged 'Bug/NCI' in this collection are themselves released under '1989 NCI' — all 5 read '1988 Bechersoftware' (see below), so the Player-ID tag appears to combine his handle with a group name from his wider output, not from these specific files' own release credit.",
    "Full census (all 5 tagged files, not a sample) via the CSDb webservice (scripts/lib/csdb-client.js, type=sid): Boogie (id 4608), Jodler (id 4633), Mozart I (id 4650), Mozart II (id 4651), The Train (id 4677) — every one reads Released='1988 Bechersoftware' and LoadAddr=49152 ($C000)/InitAddr=52000 ($CB20) identically. This is PSID header metadata, not a disassembly fact, and is not written into any Tier 3 field.",
    "All 5 locally-tagged files are by the same composer (Patrick Becher) — consistent with a personal, unpublished-as-a-tool routine rather than a shared/distributed editor. His other ~70+ cataloged tunes are tagged with different SIDId player signatures ('SoundMonitor/MusicMaster_1', 'D.A.I.S.Y.'), confirming 'Bug/NCI' is a distinct, narrowly-used binary signature within his own output, not his usual player."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry for 'Bug/NCI': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb SID entries for all 5 census files, fetched via CSDb webservice (type=sid): https://csdb.dk/sid/?id=4608 (Boogie), https://csdb.dk/sid/?id=4633 (Jodler), https://csdb.dk/sid/?id=4650 (Mozart I), https://csdb.dk/sid/?id=4651 (Mozart II), https://csdb.dk/sid/?id=4677 (The Train) — all Released='1988 Bechersoftware'",
    "CSDb SID entries confirming the 'NCI' group on Becher's other tunes: https://csdb.dk/sid/?id=4629, https://csdb.dk/sid/?id=4605, https://csdb.dk/sid/?id=4606, https://csdb.dk/sid/?id=4610 — all Released='1989 NCI'",
    "CSDb site search corroborating handle 'Bug' + group 'NCI' for Patrick Becher: https://csdb.dk/search/?seinsel=all&search=Patrick+Becher",
    "remix.kwed.org remix credit page naming 'Patrick Becher (Bug)': https://remix.kwed.org/remix/4861",
    "Local dataset: 5 files tagged Bug/NCI, 1 composer (Patrick Becher), located in data/composers/patrick-becher.json — data/composers/*.json aggregation (full census this pass, not a sample)"
  ]
}
```

## Overview

`Bug/NCI` is a Player-ID-only tag (no SIDId entry) for a routine used across
all 5 locally-tagged files (full census, not a sample), every one by the same
composer, **Patrick Becher**, whose demoscene handle "Bug" is independently
corroborated via a remix-credit page. All 5 census files carry an identical
CSDb Released credit, "1988 Bechersoftware", and an identical PSID
load/init address pair — consistent with one small embedded routine, not a
distributed editor. The "NCI" component of the tag is now resolved: CSDb
attests Becher released other, later (1989) tunes under a real group named
"NCI", distinct from the 1988 "Bechersoftware" label seen on the 5 tagged
files themselves — the tag appears to splice his handle with a group name
from his wider catalogue rather than from these files' own credit.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry at all — pure
Player-ID signature; (2) the "Bug" handle and the "NCI" group are both now
corroborated on CSDb, but the 5 tagged files themselves are credited "1988
Bechersoftware", not "NCI" — the tag mixes provenance from different parts
of Becher's output; (3) single-composer concentration (5/5 files, out of
~75+ cataloged Becher tunes mostly tagged with *other* SIDId player
signatures) is consistent with a personal, never-published-as-a-tool
routine used narrowly within his own work.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check), a full census of
all 5 `data/composers/*.json`-tagged files against the live CSDb webservice
(`scripts/lib/csdb-client.js`, type=sid), and CSDb/web provenance research
resolving the "NCI" component. `status: stub` — Tier 1+2 only, no disassembly.

## Sources

See the `sources` array — SIDId absence check, 9 CSDb SID entries (5 census +
4 corroborating "NCI"), a CSDb site search, a remix credit page, and the
local composer aggregation.
