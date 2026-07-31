# 4-Mat/Patchwork

```json
{
  "id": "4-mat-patchwork",
  "name": "4-Mat/Patchwork",
  "aliases": ["4-Mat/Patchwork"],
  "authors": ["Matt Simmonds (4-Mat)"],
  "released": "2018-02-13 (CSDb release 'Patchwork V1.0', by 4-Mat; https://csdb.dk/release/?id=162212, confirmed via CSDb webservice type=release id=162212)",
  "status": "stub",
  "platform": "Native C64 tool. CSDb lists release 162212 'Patchwork V1.0' with Type 'C64 Tool', released by 4-Mat (group affiliations at the time: Cosine [ex], Ate Bit [active], Orb [active]) on 2018-02-13 — https://csdb.dk/release/?id=162212. One of several size/name-suffixed raw tags attributed to 4-Mat in this dataset (4-Mat_tiny, 4-Mat/TEDplay, 4-Mat/1k_Play, 4-Mat/MiniSeq — none in scope for this card and NOT folded in here, see quirks). No SIDId entry found under 'Patchwork' specifically.",
  "csdb_release": 162212,

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
    "4 files, 2 composers: 4-Mat himself (3 — Patchwork Demotrack 1/2/3) and Maak (Akira Shiozawa, Japan; 1 — 'Illuminate Patchwork Edit'). The Japanese composer's own file title explicitly includes 'Patchwork Edit', real evidence this reads as a named format/tool at least one outside composer adopted, not a purely private routine kept to 4-Mat alone.",
    "knowledge/COVERAGE.md lists several OTHER 4-Mat-prefixed raw tags not included in this card's scope: '4-Mat_tiny' (10 files), '4-Mat/TEDplay' (4), '4-Mat/1k_Play' (2), '4-Mat/MiniSeq' (2) — each presumably a differently-named micro-tool or mode by the same composer. None are confirmed identical to Patchwork and none are folded into this card; a future pass covering those tags should decide independently whether any belong together.",
    "No SIDId entry exists for '4-Mat/Patchwork' (checked data/sidid.json directly).",
    "Census of all 4 tagged files (data/composers/4-mat.json csdb_id 55675/55679/55676, data/composers/maak.json csdb_id 58847) via CSDb webservice type=sid: each independently confirms UsedIn release 162212 'Patchwork V1.0' (the 3 4-Mat files) or a standalone 2019 date (Maak's file, 'Released: 2019 maak' — one year after the tool's own release, consistent with the outside-adoption reading above). All 4 share LoadAddr=$2000/InitAddr=$2000/PlayAddr=$2003, SID model 8580, PAL — PSID header metadata only, not a disassembly fact, recorded here per this KB's standing rule that header values belong in quirks and never in Tier 3 memory/entry fields.",
    "CSDb release 162212 lists 4-Mat's group affiliations at the tool's 2018 release as Cosine (ex), Ate Bit (active), Orb (active) — https://csdb.dk/release/?id=162212."
  ],
  "sources": [
    "Local dataset: data/composers/4-mat.json (3 files), data/composers/maak.json (1 file); knowledge/COVERAGE.md rank #34 (and rows for the sibling 4-Mat tags, out of scope here)",
    "data/sidid.json byTag — checked, no entry for '4-Mat/Patchwork'",
    "CSDb webservice (scripts/lib/csdb-client.js), type=release id=162212 — https://csdb.dk/release/?id=162212 ('Patchwork V1.0', Type 'C64 Tool', released 2018-02-13 by 4-Mat)",
    "CSDb webservice, type=sid ids 55675, 55679, 55676 (4-Mat's 3 files, all UsedIn release 162212) and 58847 (Maak's file, own Released field '2019 maak')"
  ]
}
```

## Overview

`4-Mat/Patchwork` is a raw Player-ID tag covering 4 files, naming British
composer **Matt Simmonds (4-Mat)**'s own tool, "Patchwork". No SIDId entry
exists for it, but CSDb does carry a genuine tool release: 162212,
"Patchwork V1.0", Type "C64 Tool", released by 4-Mat on 2018-02-13
(https://csdb.dk/release/?id=162212) — confirmed directly via the CSDb
webservice, not a search-engine summary. All 3 of 4-Mat's own tagged
files are listed as `UsedIn` that release; a Japanese composer's own file
("Illuminate Patchwork Edit", by Maak/Akira Shiozawa, own `Released` field
"2019 maak") is real evidence of at least one outside adopter a year
after the tool's release, not a purely private routine. This dataset's
raw tags include several other 4-Mat-prefixed variants (`4-Mat_tiny`,
`4-Mat/TEDplay`, `4-Mat/1k_Play`, `4-Mat/MiniSeq`) that are deliberately
out of scope for this card and not folded in.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the outside-adopter evidence (Maak's
own file title) is the strongest signal in this card, and the explicit
non-merge with 4-Mat's other same-prefix tags follows this KB's standing
"shared name prefix is not evidence of one tool" caution.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Tier 1 (local composer/usage data) and
Tier 2 (CSDb release + per-file provenance, fetched live via
`scripts/lib/csdb-client.js`) are both confirmed with a census of all 4
tagged files. No SIDId entry exists for this tag. No Tier 3 runtime fact
was guessed — every `memory`/`entry`/`speed`/`data_format`/`effects`
field remains honestly `TODO`.

## Sources

See the `sources` array — local composer data, `knowledge/COVERAGE.md`,
and the CSDb webservice (release id 162212, sid ids 55675/55679/55676/58847).
