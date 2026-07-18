# Bug/NCI

```json
{
  "id": "bug-nci",
  "name": "Bug/NCI",
  "aliases": ["Bug/NCI"],
  "authors": ["Patrick Becher (Bug)"],
  "released": "TODO: earliest locally-associated file dated 1988 ('Boogie', CSDb sid entry 4608, credited group 'Bechersoftware'); no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be a personal/in-house C64 music routine — no dedicated CSDb tool/release entry found under this name (unconfirmed); the 'NCI' component of the tag is unidentified (TODO)",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "No SIDId entry exists for this exact tag (checked data/sidid.json byTag — 'Bug/NCI' absent).",
    "The composer handle 'Bug' is independently corroborated as Patrick Becher's demoscene alias via a remix.kwed.org remix credit page ('Octapolis - Arkanoid Theme', credited 'Patrick Becher (Bug)') — a real but thin corroboration, not a CSDb scener profile match (a direct CSDb scener search for 'Patrick Becher' and for handle 'Bug' both returned no results during this research pass, via csdb.dk's search endpoint).",
    "One representative CSDb SID entry was checked directly (id 4608, 'Boogie'): composer credited 'Patrick Becher', year 1988, group listed as '1988 Bechersoftware' — i.e. a self-named personal label, not a demoscene group called 'NCI'. What 'NCI' in the Player-ID tag refers to is UNRESOLVED (TODO) — it does not match the 'Bechersoftware' credit seen on the sampled release.",
    "All 5 locally-tagged files are by the same composer (Patrick Becher) — consistent with a personal, unpublished-as-a-tool routine rather than a shared/distributed editor."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry for 'Bug/NCI': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb SID entry 'Boogie' (Patrick Becher, 1988, Bechersoftware): https://csdb.dk/sid/?id=4608",
    "remix.kwed.org remix credit page naming 'Patrick Becher (Bug)': https://remix.kwed.org/remix/4861",
    "Local dataset: 5 files tagged Bug/NCI, 1 composer (Patrick Becher) — data/composers/*.json aggregation"
  ]
}
```

## Overview

`Bug/NCI` is a Player-ID-only tag (no SIDId entry) for a routine used across
5 locally-tagged files, all by the same composer, **Patrick Becher**, whose
demoscene handle "Bug" is independently corroborated via a remix-credit page.
A sampled CSDb SID entry ("Boogie", 1988) credits him under the label
"Bechersoftware", not a group matching "NCI" — what "NCI" refers to in the
tag name is unresolved.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry at all — pure
Player-ID signature; (2) the "Bug" handle is corroborated, but "NCI" is not
— an open TODO; (3) single-composer concentration (5/5 files) is consistent
with a personal, never-published-as-a-tool routine.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check), `data/composers/*.json`,
and a small amount of CSDb/web provenance research. `status: stub`.

## Sources

See the `sources` array — SIDId absence check, one CSDb SID entry, a remix
credit page, and the local composer aggregation.
