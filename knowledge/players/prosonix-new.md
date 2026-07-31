# Prosonix_new

```json
{
  "id": "prosonix-new",
  "name": "Prosonix_new (undocumented later Prosonix signature)",
  "aliases": ["Prosonix_new"],
  "authors": ["TODO: not in SIDId's sidid.nfo under this tag — strong circumstantial link to Stein Pedersen, see quirks"],
  "released": "TODO: no CSDb release or manual documents a 'Prosonix_new' tool/version itself. Full census (2026-07-31) of all 11 tagged files' own CSDb SID-entry `Released` fields via scripts/lib/csdb-client.js (type=sid, not a sample) shows the signature in active use 2019-2025, entirely AFTER the base 'Prosonix' tag's curated end_year of 2012 (data/players.json 'Prosonix Music Editor' entry). Earliest attested: Stein Pedersen's 'Pandemoniac Part 5 of 5 Slider' (CSDb sid id 57183, own Released field '2019 Prosonix/Panoramic/Offence', used in release 179170 at Gubbdata 2019, 2019-06-30 — https://csdb.dk/sid/?id=57183 / https://csdb.dk/release/?id=179170), predating 'Space Orbs' (sid id 57182, also 2019 but UsedIn-dated 2019-11-07) by ~4 months. Latest attested: four 2025 files (Fleksnes 64728, Norge Rundt 64724, A Fayre Glow (tune 1) 65564, Cucumber Sandwich 65565), the latest event-dated 2025-12-24 (Cucumber Sandwich used in 'RecrackDec25', release 258116). This is an earliest/latest-tune-attestation range, not a tool-release date.",
  "status": "stub",
  "platform": "TODO: not documented under this tag name by any source found. The 2026-07-31 census is consistent with (not proof of) the same class of tool as the base Prosonix Music Editor: all 11 files are standard PSID .sid entries, SID model 8580, and — like prosonix.md's disassembly-confirmed 'assembles a fresh copy of the replay routine into each exported .sid' behaviour — load addresses vary per file ($1000/$1100/$3000/$4000/$9000/$B000 observed across the 11-file census) rather than one fixed shared player address. Not independently confirmed by disassembly under this tag.",
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
    "CSDb's own search (https://csdb.dk/search/) returns zero results for the literal string 'Prosonix_new', and general web search likewise found no documentation, forum post, or release using that exact string — this signature name appears to exist only inside this project's/SIDId's own player-identification tooling, not in any human-authored documentation.",
    "Re-research pass, 2026-07-31: censused all 11/11 tagged files' own CSDb SID-entry `Released` field via scripts/lib/csdb-client.js (type=sid) rather than sampling — full table: Rumblr (62208) '2023 Prosonix'; Fleksnes (64728) '2025 Offence'; A Fayre Glow tune 1 (65564) '2025 FairLight'; Pandemoniac Part 5 of 5 Slider (57183) '2019 Prosonix/Panoramic/Offence'; Space Orbs (57182) '2019 Space Moguls'; Happy Birthday (58620) '2020 Offence'; Jon Cato 50 tune 1 (61320) '2022 Stein Pedersen'; Polarcirkeln (62207) '2023 Offence'; Save a Prayer (63464) '2024 Prosonix'; Norge Rundt (64724) '2025 Offence'; Cucumber Sandwich (65565) '2025 Bonzai/Camelot'. This moved `released` from a bare TODO to a cited 2019-2025 attestation range (see `released` field) and is the first full census run on this card.",
    "Re-research pass, 2026-07-31: correction to a prior claim on this card. 'data/players.json — checked, no Prosonix_new curated entry' was true but incomplete: the curated 'Prosonix Music Editor' entry's own `search` key is literally `\"prosonix -new\"` (data/players.json, fetched fresh from https://deepsid.chordian.net/api/v1.php?players 2026-07-31), i.e. DeepSID's curator deliberately EXCLUDES any raw player tag matching '-new' from that entry's usage stats. That confirms the curator was aware of a related-but-distinct 'Prosonix_new'-style tag and chose not to fold it into the base card, but did not create a separate curated entry for it either — curatorial judgment, not a technical-derivation statement, so still not sufficient for a `derives_from`/`successor_of` edge here. (The same '-new'/'newplayer -vNN' exclusion pattern also appears on the unrelated 'JCH Editor v2.x'/'JCH Editor v3.x' entries in the same file — a general DeepSID convention for excluding a renamed/versioned signature from an older curated entry's stats, not something specific to Prosonix.)",
    "Re-research pass, 2026-07-31: the base 'Prosonix' curated entry's documented `end_year` is 2012 (data/players.json), while this census shows Prosonix_new activity beginning 2019 — a 7-year gap with zero overlap between the two tags' attested years, which is at least consistent with 'a later, temporally disjoint signature' rather than misclassified noise, though (as above) no source states an actual derivation.",
    "Re-research pass, 2026-07-31: re-confirmed the csdb_release negative two ways — csdb.dk/search/ for 'Prosonix_new' still returns zero results, and CSDb group 810's own release list (https://csdb.dk/group/?id=810) lists only three group tool releases in total: 'Prosonix Music Editor' (179618), 'SIDdecompiler V0.5' (159804, 2017), and 'SIDdecompiler V0.8' (179288, 2019) — no second music editor/player release exists to attach a `csdb_release` id to.",
    "Re-research pass, 2026-07-31: one census file, 'Save a Prayer' (Stein Pedersen, CSDb sid id 63464, filename Save_a_Prayer_2SID.sid), has InitAddr 22518 ($57F6) diverging from its LoadAddr/PlayAddr 16384/16387 ($4000/$4003) — every other censused file has Init=Load. This is a genuinely distinct PSID header shape (not resolved here — a Tier 3 lead only) and is consistent with, but does not prove, the filename's '2SID' hint."
  ],
  "sources": [
    "Local dataset: data/composers/*.json — 11 files tagged 'Prosonix_new' (knowledge/COVERAGE.md rank #21, 11 files, single grouped raw tag), 8 by Stein Pedersen and 3 by Ole Marius Pettersen, all under HVSC MUSICIANS/P/Prosonix/",
    "data/sidid.json byTag — checked, no 'Prosonix_new' entry (negative result, cited as fact above); only 'Prosonix' exists",
    "data/players.json — checked 2026-07-31 (fresh fetch from https://deepsid.chordian.net/api/v1.php?players): no standalone 'Prosonix_new' curated entry, but the 'Prosonix Music Editor' entry's `search` field is `\"prosonix -new\"`, explicitly excluding this tag from its stats (see quirks)",
    "sidid.nfo (local copy deepsid_dl/sidid.nfo, lines 1240-1245; upstream https://github.com/cadaver/sidid/blob/master/sidid.nfo) — 'Prosonix' entry only, no 'Prosonix_new'",
    "CSDb release 179618, Prosonix Music Editor (the only documented Prosonix editor release found): https://csdb.dk/release/?id=179618",
    "CSDb group 810, Prosonix (Norway), re-checked 2026-07-31 for any second tool release: https://csdb.dk/group/?id=810 — none found",
    "CSDb search for 'Prosonix_new': https://csdb.dk/search/ — zero results (checked directly, re-confirmed 2026-07-31)",
    "CSDb webservice (scripts/lib/csdb-client.js, type=sid), one call per tagged file, 2026-07-31: sid ids 57182, 57183, 58620, 61320, 62207, 62208, 63464, 64724, 64728, 65564, 65565 — full per-file Released fields recorded in quirks and the `released` field above",
    "Sibling card knowledge/players/prosonix.md (status: verified) — the base 'Prosonix' tag's card; same open lineage question flagged there, no new edge asserted by this pass either"
  ]
}
```

## Overview

`Prosonix_new` is a raw DeepSID-dump Player-ID tag with no corroborating
metadata anywhere outside this project's local dataset: it is absent from
SIDId's `sidid.nfo` and has no standalone curated `data/players.json` entry,
both of which only formally document the plain `Prosonix` tag (the
**Prosonix Music Editor**, by Stein Pedersen, 1988-2012, the Norwegian group
Prosonix's shared in-house tool — see `knowledge/players/prosonix.md`).
Usage evidence is stronger than a first pass found: all 11 tagged files split
between Stein Pedersen (8) and Ole Marius Pettersen (3), the same two
Prosonix members who dominate the base `Prosonix` tag too, filed under the
identical HVSC composer folders — and a full 2026-07-31 census of every
file's own CSDb `Released` field puts every one of them in **2019-2025**,
starting exactly where the base tag's curated `end_year` (2012) leaves off,
with zero overlap between the two ranges. The same pass also found that the
curated `Prosonix Music Editor` entry's own `search` key (`"prosonix -new"`)
deliberately excludes this tag from its stats — evidence DeepSID's curator
was aware of it as a distinct signature, without ever giving it a card of its
own. All of this makes "a later signature/binary revision of the same
editor" the strongest available reading, but it remains a hypothesis drawn
from usage data and dataset curation metadata, not a documented fact — no
CSDb release, SIDId entry, or manual describes a second version of the
Prosonix Music Editor, so this card still does not assert a lineage edge to
`prosonix`.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: the composer/folder overlap with
the base `Prosonix` tag (suggestive, not proof); the temporally disjoint
2019-2025 usage window (vs. the base tag's 1988-2012); the curated
`"prosonix -new"` search-key exclusion (curatorial awareness, not a
derivation statement); and the one `_2SID` filename (`Save a Prayer`) whose
PSID header shows Init≠Load, a real anomaly among the 11 census files worth
a future Tier 3 look.

## Disassembly notes

None. No source or public disassembly was located to read. A future pass
could disassemble one of the 11 tagged `.sid` files directly (e.g. Stein
Pedersen's "Space Orbs", a 2-subtune file, or "Save a Prayer" for its
Init≠Load anomaly) via its PSID header init/play addresses and trace it
through `sidm2-siddump` to test the "same replay, newer binary" hypothesis
against the already-confirmed `Prosonix` entry points — that is the only
remaining route to real facts here.

## Verification

**Not verified — `status: stub`.** The platform claim is still only
supported by analogy and pattern-matching to the sibling `Prosonix` card
(matching variable-load-address behaviour), not independently confirmed for
this specific tag by disassembly. The Tier 1 usage facts (composer split,
file count, folder paths) and the Tier 2 provenance facts (full CSDb
`Released` census, curated-entry search-key exclusion, negative
`csdb_release` search) are all solid and cited.

## Sources

See the `sources` array — the local dataset (`data/composers/*.json`,
`data/sidid.json`, `data/players.json`, `knowledge/COVERAGE.md`), the CSDb
pages/webservice calls checked (release 179618, group 810, a direct CSDb
search, and all 11 tagged files' own `type=sid` records, all fetched/re-fetched
2026-07-31), and the sibling card `prosonix.md`.
