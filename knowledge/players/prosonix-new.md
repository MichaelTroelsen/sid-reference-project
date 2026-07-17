# Prosonix_new

```json
{
  "id": "prosonix-new",
  "name": "Prosonix_new (undocumented later Prosonix signature)",
  "aliases": ["Prosonix_new"],
  "authors": ["TODO: not in SIDId's sidid.nfo under this tag — strong circumstantial link to Stein Pedersen, see quirks"],
  "released": "TODO: year unknown for this specific signature",
  "status": "stub",
  "platform": "TODO: not documented under this tag name; all 11 tagged files are playable .sid, consistent with (but not proof of) the same native-C64 platform as the base Prosonix Music Editor — see prosonix.md",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Raw DeepSID-dump tag 'Prosonix_new' is NOT a key in SIDId's sidid.nfo (data/sidid.json byTag has only 'Prosonix' — checked directly against the local copy deepsid_dl/sidid.nfo, lines 1240-1245) and is not a key in the curated data/players.json 129-entry list either (that file's only Prosonix-related entry is 'Prosonix Music Editor', keyed by search string 'prosonix', which matches the base 'Prosonix' tag, not this one).",
    "Extreme composer concentration AND folder overlap with the base 'Prosonix' tag: all 11 files split between Stein Pedersen (8 files — the credited author of the Prosonix Music Editor per SIDId's 'Prosonix' entry) and Ole Marius Pettersen (3 files), both filed under the identical HVSC paths MUSICIANS/P/Prosonix/Pedersen_Stein/ and MUSICIANS/P/Prosonix/Pettersen_Ole_Marius/ that also hold their 'Prosonix'-tagged files (Stein Pedersen alone has 41 files tagged plain 'Prosonix' in the same folder). This is strongly suggestive that 'Prosonix_new' is a later binary/signature revision of the same Prosonix Music Editor replay routine rather than a distinct tool — but no source (CSDb, SIDId, a manual, an author statement) documents a second version of the editor, so no `derives_from`/`successor_of` edge is asserted here; it is recorded only as an unconfirmed pattern from local dataset evidence.",
    "One of the 11 files, Stein Pedersen's 'Save a Prayer', is filed on disk as 'Save_a_Prayer_2SID.sid' — the filename suggests a dual-SID (2SID) tune, which if genuine would exceed the base Prosonix Music Editor's documented '1SID' chip-count spec in data/players.json. Not independently confirmed beyond the filename — a lead for a future disassembly pass, not a fact.",
    "CSDb's own search (https://csdb.dk/search/) returns zero results for the literal string 'Prosonix_new', and general web search likewise found no documentation, forum post, or release using that exact string — this signature name appears to exist only inside this project's/SIDId's own player-identification tooling, not in any human-authored documentation."
  ],
  "sources": [
    "Local dataset: data/composers/*.json — 11 files tagged 'Prosonix_new' (knowledge/COVERAGE.md rank #21, 11 files, single grouped raw tag), 8 by Stein Pedersen and 3 by Ole Marius Pettersen, all under HVSC MUSICIANS/P/Prosonix/",
    "data/sidid.json byTag — checked, no 'Prosonix_new' entry (negative result, cited as fact above); only 'Prosonix' exists",
    "data/players.json — checked, no 'Prosonix_new' curated entry; only 'Prosonix Music Editor' (search key 'prosonix')",
    "sidid.nfo (local copy deepsid_dl/sidid.nfo, lines 1240-1245; upstream https://github.com/cadaver/sidid/blob/master/sidid.nfo) — 'Prosonix' entry only, no 'Prosonix_new'",
    "CSDb release 179618, Prosonix Music Editor (the only documented Prosonix editor release found): https://csdb.dk/release/?id=179618",
    "CSDb group 810, Prosonix (Norway): https://csdb.dk/group/?id=810",
    "CSDb search for 'Prosonix_new': https://csdb.dk/search/ — zero results (checked directly)",
    "Sibling card knowledge/players/prosonix.md — the base 'Prosonix' tag's card, same open lineage question flagged there"
  ]
}
```

## Overview

`Prosonix_new` is a raw DeepSID-dump Player-ID tag with no corroborating
metadata anywhere outside this project's local dataset: it is absent from
SIDId's `sidid.nfo` and absent from the curated `data/players.json` list, both
of which only know about the plain `Prosonix` tag (the **Prosonix Music
Editor**, by Stein Pedersen, 1988, the Norwegian group Prosonix's shared
in-house tool — see `knowledge/players/prosonix.md`). What is known comes
entirely from usage: all 11 tagged files split between Stein Pedersen (8) and
Ole Marius Pettersen (3), the same two Prosonix members who dominate the base
`Prosonix` tag too, filed under the identical HVSC composer folders. That
overlap makes "a later signature/revision of the same editor" the obvious
reading, but it is a hypothesis drawn from local usage data, not a documented
fact — no CSDb release, SIDId entry, or manual describes a second version of
the Prosonix Music Editor, so this card does not assert a lineage edge to
`prosonix`.

## Quirks & gotchas

See the `quirks` array — the load-bearing points are the composer/folder
overlap with the base `Prosonix` tag (suggestive, not proof) and the one
`_2SID` filename that hints at dual-SID support beyond the documented editor's
1SID spec.

## Disassembly notes

None. No source or public disassembly was located to read. A future pass
could disassemble one of the 11 tagged `.sid` files directly (e.g. Stein
Pedersen's "Space Orbs", a 2-subtune file) via its PSID header init/play
addresses and trace it through `sidm2-siddump` to test the "same replay,
newer binary" hypothesis against the already-confirmed `Prosonix` entry
points — that is the only remaining route to real facts here.

## Verification

**Not verified — `status: stub`.** Even the platform claim is only inherited
by analogy from the sibling `Prosonix` card, not independently confirmed for
this specific tag. Only the Tier 1 usage facts (composer split, file count,
folder paths) are solid, cited directly from `data/composers/*.json`.

## Sources

See the `sources` array — the local dataset (`data/composers/*.json`,
`data/sidid.json`, `data/players.json`, `knowledge/COVERAGE.md`), the CSDb
pages checked (release 179618, group 810, and a direct CSDb search, all
negative for this exact tag name), and the sibling card `prosonix.md`.
