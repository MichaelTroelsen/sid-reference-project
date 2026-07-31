# Rastelin/Bones (player routine)

```json
{
  "id": "rastelin-bones",
  "name": "Rastelin/Bones (player routine)",
  "aliases": ["Rastelin/Bones"],
  "authors": ["Jacob Surland (Rastelin)"],
  "released": "1989 (earliest tune attested — not a documented player-release date). All 3 locally-tagged files' own CSDb SID-entry `Released` fields say 1989: 'The Larch (tune 5)' -> '1989 Bones/Crazy' (csdb.dk sid id 559), 'Neagox 2092 Terrorforce (032)' -> '1989 Noise' (id 1674), 'Tillsammans (part 4)' -> '1989 Bones' (id 684). No SIDId RELEASED/REFERENCE field exists for this tag.",
  "status": "stub",
  "platform": "Native C64 — a routine embedded directly in the composer's own tunes, not a distinct standalone editor/tool. No CSDb tool/release entry found under 'Rastelin/Bones' or 'Bones' (checked the composer's own CSDb scener profile, id 5407, `affiliation` field empty; CSDb's website was unreachable this pass to hand-check a possible 'Bones' group page, so that specific negative is not fully exhausted). Supporting signal: all 3 files share byte-identical PSID header load/init/play addresses ($E000/$E000/$E006 per csdb.dk webservice type=sid ids 559/1674/684), consistent with the same fixed routine reused unchanged across tunes rather than a generated/versioned export.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SINGLE-COMPOSER TAG: all 3 locally-tagged files ('The Larch (tune 5)', 'Neagox 2092 Terrorforce (032)', 'Tillsammans (part 4)') are by Jacob Surland (data/composers/jacob-surland.json), handle 'Rastelin' on two files and 'Top' on the third (per the per-file author string) — same person, Danish scener. Composer profile lists handles '<del>Zordex</del>, <del>Top</del>, Rastelin' and `active: 1989`, no `affiliation` (csdb.dk scener id 5407) — consistent with a personal routine, not a group-published tool.",
    "SIDId's byTag entry gives only an AUTHOR line ('Jacob Surland (Rastelin)') — no NAME, RELEASED, or REFERENCE field — consistent with an unpackaged personal routine rather than a titled, released tool.",
    "CENSUS (2026-07-31): all 3 tagged files' own CSDb SID-entry `Released` fields read 1989, crediting three differently-named informal groupings ('Bones/Crazy', 'Noise', 'Bones') rather than one consistent group name — csdb.dk webservice type=sid ids 559, 1674, 684. 'Bones' (appearing in 2 of 3) plausibly gave the SIDId tag its second half, but no CSDb group page for 'Bones' could be located/confirmed this pass (csdb.dk website was unreachable via WebFetch during this research session — ECONNREFUSED — so this is a gap, not a checked negative).",
    "PSID HEADER (not a disassembly fact — recorded here, not in Tier 3, per project rule): all 3 files share load=$E000 (57344), init=$E000, play=$E006 (57350), per csdb.dk webservice type=sid records 559/1674/684.",
    "A web search summary surfaced an unsourced claim of specific load/init/play addresses for a file named 'Bones' — this was NOT independently verified against a primary source at the time, so it was deliberately not recorded on trust. It is now moot: the real CSDb SID-entry records for all 3 census files were fetched directly this pass (see PSID HEADER quirk above) and confirm load=$E000/init=$E000/play=$E006 — but per this project's rule, PSID header metadata is not a disassembly fact, so all Tier 3 fields remain TODO regardless."
  ],
  "sources": [
    "data/sidid.json byTag['Rastelin/Bones']: author 'Jacob Surland (Rastelin)', no other fields",
    "Local dataset: data/composers/jacob-surland.json — 3 files tagged 'Rastelin/Bones'; see knowledge/COVERAGE.md row #50 (3 files)",
    "csdb.dk webservice (scripts/lib/csdb-client.js), type=sid, id=559 (The Larch tune 5): Released '1989 Bones/Crazy', Load/Init/Play $E000/$E000/$E006",
    "csdb.dk webservice, type=sid, id=1674 (Neagox 2092 Terrorforce 032): Released '1989 Noise', Load/Init/Play $E000/$E000/$E006",
    "csdb.dk webservice, type=sid, id=684 (Tillsammans part 4): Released '1989 Bones', Load/Init/Play $E000/$E000/$E006",
    "csdb.dk webservice, type=scener, id=5407 (Jacob Surland): handles 'Zordex, Top, Rastelin', active 1989, no affiliation listed",
    "csdb.dk website unreachable via WebFetch this pass (ECONNREFUSED) — could not hand-check a 'Bones' group page; WebSearch budget for this session was also exhausted before a query for it could run"
  ]
}
```

## Overview

`Rastelin/Bones` is SIDId's byte-signature tag for a routine credited to
Danish composer **Jacob Surland**, handle **Rastelin** (also credited as "Top"
on one file). All 3 locally-tagged files are his own (single-composer
concentration — a personal routine, not a widely-shared tool). SIDId's entry
carries only an `AUTHOR` line, no name/release/reference. A full census of all
3 files' own CSDb SID-entry `Released` fields (fetched directly via the CSDb
webservice) puts every attested use in **1989**, crediting three differently
-worded groupings ('Bones/Crazy', 'Noise', 'Bones') rather than one stable
group name — 'Bones' plausibly explains the tag's second half, but no CSDb
group page for it could be confirmed this pass (site unreachable). No CSDb
tool/release entry exists for a standalone "Rastelin/Bones" editor; it reads
as **native C64**, a routine baked into the composer's own tunes.

## Quirks & gotchas

See the `quirks` array. Load-bearing: single-composer concentration, no
release metadata in SIDId, 1989 as the census-confirmed earliest-attested year
across all 3 files, and identical PSID header load/init/play addresses across
all 3 files (recorded as header metadata only, not a Tier 3 fact).

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no confirmed public source or
disassembly located. The CSDb SID-entry records for all 3 census files do
carry a `LoadAddr`/`InitAddr`/`PlayAddr` (see the PSID HEADER quirk), but per
this project's rule that PSID header values are metadata, not disassembly
facts, they are recorded only in `quirks`, never written into `entry`/
`memory`. An earlier web-search summary surfaced specific address claims for a
same-named file that could not be traced to a checkable primary source at the
time; the real CSDb records fetched this pass happen to match, but that does
not change the Tier 3 boundary.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts from cached
SIDId and local composer data are established.

## Sources

See the `sources` array — the cached SIDId entry, local composer-file
aggregation, and a full census of all 3 tagged files' CSDb SID-entry records
(csdb.dk webservice, `scripts/lib/csdb-client.js`, type=sid ids 559/1674/684
and type=scener id 5407) fetched directly during this pass.
