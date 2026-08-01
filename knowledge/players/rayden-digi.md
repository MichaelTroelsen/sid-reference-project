# Rayden Digi (player routine)

```json
{
  "id": "rayden-digi",
  "name": "Rayden Digi (player routine)",
  "aliases": ["Rayden_Digi_V2"],
  "authors": ["Patrick Zeh (Rayden)"],
  "released": "2000 (attested once): the sole tagged file 'Spelling Around' carries CSDb SID-entry Released field '2000 Breeze/Cyberpunx' (csdb.dk webservice type=sid id=24988) — this is the tune's own attestation, not a separate tool/version release date; no earlier or later Rayden_Digi_V1/V2 file is locally visible to bracket a range",
  "status": "stub",
  "platform": "Native C64, in-house/personal routine, not a published tool: no CSDb release page, source repo, Codebase64 article, or search-engine hit exists for 'Rayden_Digi' or 'Rayden Digi' under any spelling (checked csdb.dk site search and Bing web search, both zero results); German composer Patrick Zeh's own routine, his catalog otherwise dominated by DMC_V4.x and Music_Assembler (published trackers), consistent with a one-off in-house digi player never released as a standalone tool",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "100% single-composer concentration: the only file tagged 'Rayden_Digi_V2' in this dataset — 'Spelling Around' (data/composers/rayden.json, CSDb sid id 24988) — is by Patrick Zeh (Rayden) himself, out of ~80 total tagged files in his folder. The other 79 run overwhelmingly on 'DMC_V4.x' (a published, versioned tracker used by many composers project-wide) and 'Music_Assembler', with this being the sole outlier.",
    "'_V2' IN THE RAW TAG NAME IMPLIES A VERSION HISTORY, BUT NO V1 IS LOCALLY VISIBLE: knowledge/COVERAGE.md lists only 'Rayden_Digi_V2' (grouped under family display name 'Rayden_Digi', row #168, 1 file) — no 'Rayden_Digi' (unversioned) or 'Rayden_Digi_V1' tag appears anywhere in this project's local dataset (data/composers/*.json covers HVSC's MUSICIANS/ tree only; an earlier version may exist untagged, in the GAMES/ tree, or simply was never separately fingerprinted). This card covers only what is locally attested: V2, 1 file.",
    "SIDId (data/sidid.json byTag['Rayden_Digi_V2']) gives ONLY an author line — 'Patrick Zeh (Rayden)' — no NAME, RELEASED, REFERENCE, or COMMENT field, the same thin-record pattern seen on most other single-composer '_Digi' tags in this batch.",
    "sidid.json DOES carry a 'Rayden_Digi_V1' byTag entry too (author-only, same as V2) — a real V1 signature exists in SIDId's ID database even though no file in this project's local HVSC-derived dataset (data/composers/*.json) is tagged with it. So the version pair is attested at the signature level; only the file-usage census is V2-only.",
    "PSID header metadata for the one tagged file (CSDb webservice type=sid id=24988, csdb.dk): LoadAddr $0801 (2049), InitAddr $0900 (2304), PlayAddr $0000, NOSongs 1, SID model 6581, PAL. A PlayAddr of $0000 is header metadata only, not a disassembly fact — it is NOT written into the Tier 3 entry.play field; it is merely consistent with a one-shot/init-only digi driver, unconfirmed without disassembly.",
    "CSDb searched directly (site search at csdb.dk, plus Bing web search) for 'Rayden_Digi' / 'Rayden Digi' under any spelling: zero results — no tool release page, source repo, or third-party writeup exists under this name anywhere found.",
    "PER THIS KB'S CORE RULE: no source found independently confirms actual sample/digi playback technique for this tag — treated as a bare Player-ID/byte-signature label, not a verified claim about the routine's underlying mechanism."
  ],
  "sources": [
    "Local dataset: data/composers/rayden.json — 1 file tagged Rayden_Digi_V2 ('Spelling Around', csdb sid id 24988), sole author Patrick Zeh (Rayden), out of ~80 total files; see knowledge/COVERAGE.md row #168 (1 file, raw tag 'Rayden_Digi_V2')",
    "data/sidid.json byTag['Rayden_Digi_V2']: author 'Patrick Zeh (Rayden)', no other fields; byTag['Rayden_Digi_V1']: same author, also no other fields",
    "data/composers/rayden.json profile: full_name Patrick Zeh, handles '<del>Booze Lee</del>, Rayden', country Germany, csdb_id 4989",
    "CSDb webservice (scripts/lib/csdb-client.js, type=sid, id=24988): Name 'Spelling Around', Author 'Patrick Zeh (Rayden)', Released '2000 Breeze/Cyberpunx', LoadAddr 2049 ($0801), InitAddr 2304 ($0900), PlayAddr 0, SIDModel 6581, ClockSpeed PAL, fetched 2026-08-01",
    "csdb.dk site search ('Rayden Digi') and Bing web search ('\"Rayden_Digi\"'): zero results, checked 2026-08-01 — no CSDb release page, source repo, or third-party documentation found under this name"
  ]
}
```

## Overview

`Rayden_Digi_V2` is a Player-ID tag covering exactly **1 file** — "Spelling
Around", attested (per CSDb's own SID-entry Released field) in **2000
Breeze/Cyberpunx** — in German composer **Patrick Zeh**'s ("Rayden") catalog,
out of roughly 80 total tagged files. His catalog is otherwise dominated by
the published `DMC_V4.x` tracker and `Music_Assembler`, making this a clear
personal outlier. The "_V2" in the raw tag name implies an earlier version
exists, and SIDId's own ID database does carry a matching `Rayden_Digi_V1`
signature (author-only record, no usage details) — but no file in this
project's local HVSC-derived dataset is tagged with it, so only V2's single
file is censused here. Native C64, in-house routine: neither a CSDb site
search nor a general web search turned up a standalone tool release, source
repo, or documentation under the "Rayden Digi" name in any spelling.

## Quirks & gotchas

See the `quirks` array. Load-bearing: 100% single-composer/single-file
concentration against a much larger DMC-dominated catalog, and an unresolved
"V2 with no locally-visible V1" version-numbering gap. No independent source
confirms an actual sample/digi playback mechanism for this tag.

## Disassembly notes

None performed. No public source or disassembly was located; all Tier 3
fields are `TODO`, not guessed.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
(authorship, exact 1-file usage, the thin SIDId author-only record). No
runtime behaviour has been confirmed or reconstructed.

## Sources

See the `sources` array — local dataset aggregation and the cached SIDId
record.
