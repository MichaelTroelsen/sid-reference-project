# Bacco_Digi

```json
{
  "id": "bacco-digi",
  "name": "Bacco_Digi",
  "aliases": ["Bacco_Digi"],
  "authors": ["TODO: tag names 'Bacco' — a plausible match is Stefan Albes (CSDb scener 'Bacco', Germany), co-programmer of Turrican II — but no source confirms he coded this specific routine (see quirks); not asserted as fact"],
  "released": "TODO: not a tool with its own release date — earliest attested tune-carrying use is 1991-10-12 ('Beat of Violence' tune 3, CSDb sid id 38363, Released field '1991 Steel Productions'); the other tagged file ('Quadrant', CSDb sid id 43910) is dated 1993 ('Game On/CP Verlag')",
  "status": "stub",
  "platform": "TODO: no CSDb tool/release/group page exists for 'Bacco_Digi' or 'Bacco' as a tool (confirmed via direct CSDb site search 2026-07-31, 6 results for 'Bacco', none a tool/editor) — appears to be an in-house/embedded digi routine baked into two unrelated productions rather than a distributed editor; no evidence of a cross-platform origin either way",
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
    "No SIDId sidid.nfo entry exists for this tag (checked data/sidid.json byTag — absent). No playback-technique claim from any source; per this project's rule ('digi by name is not evidence') none is asserted here.",
    "The tag name 'Bacco' most plausibly refers to CSDb scener #12044 'Bacco' — real name Stefan Albes, a German coder/graphician active 1988-1991 (groups Arcade, Steel), notable as co-programmer of the C64 game Turrican II with Manfred Trenz (https://csdb.dk/scener/?id=12044). This is a NAME MATCH only — no source states Bacco/Albes coded a digi routine used by either locally-tagged composer, so this is flagged as a plausible candidate, not an established fact.",
    "Unlike most tags in this batch, usage is NOT single-composer: 2 files split across TWO different composers, 'markus-siebold' (Markus Siebold, Germany) and 'thomas-detert' (Thomas Detert, Germany) — data/composers/markus-siebold.json, data/composers/thomas-detert.json. Both are German, matching Bacco/Albes's own country, but neither composer profile documents any direct link to Bacco/Albes or to each other's group. A 2-composer spread is too small to read as a 'genuinely published tool' per this project's concentration heuristic, but it is at least not a single personal routine.",
    "No CSDb tool/release page for a standalone 'Bacco_Digi' editor was found — reconfirmed 2026-07-31 via CSDb's own site search for both 'Bacco_Digi' (0 results) and 'Bacco' (6 results: 3 releases, 1 scener, 2 unrelated SID files; no group, no tool). This closes the gap left as TODO in the original pass.",
    "Corroborating (not confirming) detail found via CSDb webservice sid lookups: the Markus Siebold file's own 'Released' field reads '1991 Steel Productions' (CSDb sid id 38363) — 'Steel' (AKA 'Steel Productions', Germany, founded 1990, dissolved 1992) is one of the two groups CSDb's scener #12044 record lists Bacco/Stefan Albes as a member of. This is a group-name match, not an authorship statement, and does not extend to the second tagged file: Thomas Detert's 'Quadrant' (CSDb sid id 43910) is dated '1993 Game On/CP Verlag', unrelated to Steel.",
    "Neither tagged file has a HVSC STIL.txt comment describing player/digi technique (checked both paths directly in data/hvsc/STIL.txt) — Quadrant's only STIL entries are unrelated production trivia (originally meant for a different title, and a note pointing to a duplicate file)."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry for 'Bacco_Digi': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener #12044 'Bacco' (real name Stefan Albes, Germany, groups Arcade/Steel, Turrican II co-programmer): https://csdb.dk/scener/?id=12044",
    "CSDb webservice sid id 38363 ('Beat of Violence' tune 3, Released '1991 Steel Productions', UsedIn release id 25465, 1991-10-12): https://csdb.dk/sid/?id=38363",
    "CSDb webservice sid id 43910 ('Quadrant', Released '1993 Game On/CP Verlag', UsedIn releases incl. game id 15426): https://csdb.dk/sid/?id=43910",
    "CSDb webservice group record for 'Steel' AKA 'Steel Productions' (Germany, founded 1990, dissolved 1992), reached via depth=3 scener lookup on id 12044: https://csdb.dk/group/?id=1849",
    "CSDb site search confirming no tool/release/group page for 'Bacco_Digi' or 'Bacco' as a tool, checked 2026-07-31: https://csdb.dk/search/?seinsel=all&search=Bacco_Digi and https://csdb.dk/search/?seinsel=all&search=Bacco",
    "HVSC STIL.txt checked directly for both tagged paths, no player/technique comment found: data/hvsc/STIL.txt",
    "Local dataset: 2 files tagged Bacco_Digi — 'Beat of Violence' tune 3 (markus-siebold), 'Quadrant' (thomas-detert) — data/composers/markus-siebold.json, data/composers/thomas-detert.json; knowledge/COVERAGE.md (this family no longer listed there since it already has a card)"
  ]
}
```

## Overview

Bacco_Digi is a SIDId Player-ID tag with no upstream SIDId documentation (no
`sidid.nfo` entry at all) and no CSDb tool/release page under either
`Bacco_Digi` or `Bacco` (reconfirmed by direct site search 2026-07-31). It is
not a distributed editor — no `platform` claim beyond "embedded/in-house
routine" can be made. The tag name plausibly refers to **Stefan Albes**, CSDb
handle **Bacco**, a German coder/graphician (co-programmer of Turrican II) —
but no source confirms he wrote this specific routine, so the attribution
remains a candidate, not a fact. Locally the tag spans 2 files by 2 different
German composers (Markus Siebold, Thomas Detert). CSDb's own per-file
`Released` fields put the earliest attested use at 1991-10-12 (Siebold's
"Beat of Violence" tune 3, credited to "Steel Productions" — the AKA of
Bacco/Albes's own group "Steel"); Detert's "Quadrant" is separately dated
1993 ("Game On/CP Verlag") with no Steel connection. The group-name match on
the 1991 file is corroborating, not confirming, evidence for the authorship
candidate.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the "Bacco" name match to Stefan Albes
is unconfirmed as authorship, though the 1991 Siebold file's own `Released`
credit ("Steel Productions") matches Bacco/Albes's own group "Steel" — a
corroborating group-name match, not proof; usage spans 2 (not 1) composers,
both German, one of whom (Siebold, via the group match) is more plausibly
tied to the candidate than the other (Detert, 1993, unrelated publisher).

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local composer data, a confirmed-absent SIDId
check, CSDb webservice sid/scener/group lookups, and a direct CSDb site
search (2026-07-31) that closes out the `platform`/`csdb_release` gaps as
"confirmed absent" rather than merely unchecked. `status: stub`.

## Sources

See the `sources` array — SIDId (checked, absent), CSDb webservice (sid,
scener, group records) and site search, HVSC STIL.txt, and the local
composer aggregation.
