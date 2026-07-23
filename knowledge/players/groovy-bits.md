# Groovy Bits (Groovy Music / GB-Composer)

```json
{
  "id": "groovy-bits",
  "name": "Groovy Bits",
  "aliases": ["Groovy_Bits"],
  "authors": ["Lars Patrik Wallström (Karl XII, of Agile)", "Roy (of Dynamix)"],
  "released": "1989 (V1.0/V1.1, Falcon) - 1990 (V2.6+, Dynamix)",
  "status": "stub",
  "platform": "Native C64 tool: a standalone music editor/composer with its own C64 replay routine, distributed as scene tool releases (not a cross-platform editor). DeepSID players.json lists platform as \"Native / C64 emulator\".",
  "csdb_release": 27462,

  "memory": {
    "load_address": "TODO: no public source/disassembly located",
    "zero_page": "DeepSID players.json field 'zero_pages': \"2 bytes ($AE-$AF)\" — cited as-is, not independently verified via disassembly",
    "layout": "TODO: order list / patterns / table addresses — not documented publicly"
  },
  "entry": {
    "init": "TODO: per-file (would need a PSID header read or disassembly)",
    "play": "TODO: per-file (PSID header); DeepSID players.json leaves cpu_time/speed fields blank for this entry"
  },
  "speed": "TODO: no public source/disassembly located; DeepSID players.json leaves the 'speeds' field blank",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public source/disassembly located",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Two-version history documented on CSDb, matching DeepSID's own note (\"Groovy Bits had a v1.x and a v2.x series\"): V1.0 'Groovy Bits' released by the group Falcon in 1989, code by Karl XII of Agile AND Roy of Dynamix (CSDb release 10740, text by Jacco — Roy is co-credited from V1.0 onward, not just the V2.x line); V1.1 'Groovy Music' released by the group Groovy Bits, also 1989 (CSDb release 121513); then 'Groovy-Bits Sound-Composer V2.6+' released by Dynamix in August 1990, code by Karl XII (Agile) and Roy (Dynamix), linking/docs by The Model (CSDb releases 27462 and 184076, the latter crediting Dynamix and Twins). DeepSID's players.json entry documents specs for the latest V2.6.",
    "Composer concentration in this dataset (HVSC MUSICIANS\\ tree only, per data/composers/*.json): 64 files across 9 composers, moderately concentrated — Tomas Danko 21 (33%), Bluez 16 (25%), XII Karl 12 (19%, almost certainly the author's own tag, matching Karl XII), Slaygon 8, Firefox 3, and four composers with 1 file each. The top 3 composers cover ~77% of files. This reads as a real but small-scene tool used mainly by its own author and a handful of others, not a single-composer private routine, but also not a widely adopted published tracker.",
    "SIDId (sidid.json) supplies only identity fields (name, author, released, CSDb reference) for the 'Groovy_Bits' tag — no playback-technique 'comment' field is present for this entry.",
    "No public source code, GitHub/SourceForge repo, or format/manual documentation beyond the scene release's own docs file was located (CSDb, Codebase64, general web search — re-checked 2026-07-23, no new results). A CSDb-hosted docs file ('GB_Composer_2_6_plus_docs.prg', 151 downloads on release 27462) likely contains user-facing editor instructions but was not opened/read for this card — see Disassembly notes.",
    "V1.0 (CSDb release 10740) additional detail: alternate title 'Groovy Music v1.6' is listed on the release page, and CSDb contributor tlr states in a release comment 'This particular music editor was in fact programmed by Karl XII of Groovy Bits' — corroborating, not contradicting, the V1.0 code credit already in `authors`. Instructions text for V1.0 was written by Jacco of Falcon and The Wonderboys.",
    "Zimmers.net's C64 audio/editors archive (pub/cbm/c64/audio/editors/) lists a raw, non-T64-wrapped binary 'gb-comp.v26.prg' (16,672 bytes) — a potentially useful lead for a future disassembly pass since it's a bare PRG rather than a tape image. Its listed description on that index, 'It's future composer V1.', does not match Groovy Bits/GB-Composer at all and is almost certainly a copy-paste/misalignment artifact of that archive's index (Future Composer is an unrelated, separately-documented player); the description should not be trusted, only the filename/size as a possible source file to fetch later.",
    "CSDb release 184076 (the second listing of 'Groovy-Bits Sound-Composer V2.6+', by Dynamix and Twins) additionally credits music to EVS (20th Century Composers) and Link (Cheyens, Vibrants), and bundles two example SID tunes ('Choice' by Link, 'I Just Don't Have the Heart' by Edwin van Santen) — these are content credits for the release package, not code/lineage facts, and do not change the `authors` field."
  ],
  "sources": [
    "sidid:Groovy_Bits (name 'Groovy Music', author Lars Patrik Wallström (Karl XII), released '1989 Groovy Bits', reference https://csdb.dk/release/?id=121513) — data/sidid.json",
    "DeepSID players.json curated entry 'Groovy Bits' (developer Karl XII | Roy ++, start_year 1989, end_year 1990, csdb_id 27462, platform 'Native / C64 emulator', zero_pages '2 bytes ($AE-$AF)', description notes a v1.x and v2.x series) — data/players.json",
    "Local dataset: 64 files tagged 'Groovy_Bits' across 9 composers (knowledge/COVERAGE.md line 26; verified by grep/aggregation of data/composers/*.json)",
    "CSDb release 'Groovy Bits V1.0' (Falcon, 1989; code by Karl XII of Agile, text by Jacco): https://csdb.dk/release/?id=10740",
    "CSDb release 'Groovy Music V1.1' (Karl XII of Agile, 1989): https://csdb.dk/release/?id=121513",
    "CSDb release 'Groovy-Bits Sound-Composer V2.6+' (Dynamix, August 1990; code by Karl XII (Agile) and Roy (Dynamix), linking/docs by The Model): https://csdb.dk/release/?id=27462",
    "CSDb release 'Groovy-Bits Sound-Composer V2.6+' (Dynamix and Twins; credits Karl XII and Roy for code): https://csdb.dk/release/?id=184076",
    "Zimmers.net C64 audio editors archive listing (raw 'gb-comp.v26.prg' binary, size only — description on that page is unrelated/unreliable, see quirks): https://www.zimmers.net/anonftp/pub/cbm/c64/audio/editors/index.html",
    "Re-verified local composer/file aggregate independently against data/composers/*.json on 2026-07-23: 64 files across 9 composers (Tomas Danko 21, Bluez 16, XII Karl 12, Slaygon 8, Firefox 3, Alfatech/Ice/Shark/TLR 1 each) — matches this card's existing figures exactly"
  ]
}
```

## Overview

Groovy Bits (also seen as "Groovy Music" and, in its later revision, "GB-Composer") is a native C64 music editor/composer written by Swedish coder Lars Patrik Wallström, known on the scene as Karl XII, of the group Agile. It shipped in two generations: V1.0/V1.1 released in 1989 (V1.0 by the group Falcon, V1.1 by the group Groovy Bits), with Roy of Dynamix co-credited for the code alongside Karl XII from V1.0 onward, and a substantially later "Groovy-Bits Sound-Composer V2.6+" released by Dynamix in August 1990. DeepSID's curated player spec table documents the V2.6 revision. In this project's local HVSC-derived dataset it covers 64 files across 9 composers — moderately concentrated (the author's own "XII Karl" tag plus two other names, Tomas Danko and Bluez, account for ~77% of usage), consistent with a small-scene tool that saw some adoption beyond its own author but never became a widely published tracker.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: this is a **two-generation tool** (V1.x by Falcon in 1989, V2.6+ by Dynamix in 1990) with the CSDb release history split across at least four release entries; DeepSID's own curated spec table supplies a single concrete runtime figure — a 2-byte zero-page footprint at `$AE-$AF` — which is recorded here as a citation only, not independently verified; and **no public source code or technical format documentation was located**, only a scene-distributed user docs file on CSDb that was not opened for this card.

## Disassembly notes

None. No public source or disassembly of the Groovy Bits/GB-Composer replay routine was located (re-checked 2026-07-23 via CSDb, Codebase64, and general web search — no new results beyond what's already cited). Two concrete leads for a future pass: CSDb release 27462's docs file (`GB_Composer_2_6_plus_docs.prg`) — likely user-facing editor instructions, not a technical spec, but unread; and zimmers.net's raw `gb-comp.v26.prg` binary (16,672 bytes, not T64-wrapped) in `pub/cbm/c64/audio/editors/` — a possibly more convenient starting point for a disassembly than unpacking the CSDb T64, though its filename/size is the only trustworthy part of that listing (the index's description text for it is a mismatched artifact, see quirks). Either way, the real route to memory-map/format facts is disassembling a representative `Groovy_Bits`-tagged `.sid` from its PSID header (init/play addresses) and tracing it through `sidm2-siddump`.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author, release years/version chain, CSDb releases, local usage stats) are confirmed, from SIDId, DeepSID's curated `players.json`, CSDb, and this project's own composer data. Every Tier 3 runtime field is `TODO` except one DeepSID-sourced zero-page figure, which is cited but not independently verified — an honest gap rather than a guessed memory map.

## Sources

See the `sources` array — SIDId's cached entry, DeepSID's curated `players.json` entry, this project's local composer-file aggregate (`data/composers/*.json`, `knowledge/COVERAGE.md`), and four CSDb release pages covering the V1.x and V2.x release chain.
