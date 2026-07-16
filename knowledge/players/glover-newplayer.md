# Glover NewPlayer V21

```json
{
  "id": "glover-newplayer",
  "name": "Glover NewPlayer V21",
  "aliases": ["Glover_NewPlayer_V21"],
  "authors": ["Lukasz Baran (Glover) / Samar Productions"],
  "released": "2000",
  "status": "stub",
  "platform": "Native C64 player routine — Glover's port/adaptation of Jens-Christian Huus's (JCH) NewPlayer for Samar Productions, co-credited to JCH himself on at least one release.",
  "csdb_release": 101623,

  "memory": {
    "load_address": "TODO: no disassembly performed",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO: no disassembly performed",
    "play": "TODO: no disassembly performed"
  },
  "speed": "TODO: not established (JCH NewPlayer family supports 1x + multispeed, but this is not confirmed for this specific fork)",

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
    "derives_from": ["jch-newplayer"],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "DIRECT LINEAGE EVIDENCE, not inference from name similarity: CSDb release 101622, titled 'JCH NewPlayer 21.G6' (Samar Productions, 2000), lists credits as 'Code by Glover of Samar Productions and JCH of Vibrants' — i.e. JCH himself is co-credited on Glover's port. The sibling CSDb release 101623 ('JCH Players by Glover', also 2000, Samar Productions, credited to Glover alone) bundles the tool plus source (SRC_JCH_Glover.zip) and two documentation files literally named 21G4_GLOVER.txt and 21G6_GLOVER.txt — JCH's own '21.Gn' version-naming convention (cf. laxity-newplayer.md's 'v21.G5', jch-newplayer-v20.md's '20.G4'), carried over into Glover's fork. This is why `derives_from: [\"jch-newplayer\"]` is asserted here with confidence, unlike a same-name-only guess.",
    "jch-newplayer.md's own quirks list independently name this fork: 'Widely forked: Laxity NewPlayer V21 (2006), Glover NewPlayer V21 (2000), Dane NewPlayer V22-25 (2011)' — corroborating, from the other side of the edge, the same 2000/Samar Productions/V21 identity found directly on CSDb here.",
    "NOT the same signature as the bare 'Glover' tag (a separate, uncarded family in this dataset, ~11 files) — that appears to be Glover's own earlier/unrelated routine. Do not conflate the two when aliasing.",
    "Composer concentration (local `data/composers/*.json`, all 66 files accounted for, matching COVERAGE.md exactly): 6 composers — Phobos (29 files, 44%, the single largest user), Isildur (21), Glover himself (13), Kosa (1), G-Fellow (1), Tomas Danko (1). Notably the author is NOT the top user of his own player — Phobos and Isildur both used it more — which argues against 'personal routine never adopted by anyone else' and toward 'a real, if small-scene, published tool', consistent with it being distributed as a Samar Productions release with its own source/doc package rather than kept private.",
    "Glover (Lukasz Baran) and Samar Productions were active in the Polish C64 scene; Glover also authored a separate, contemporaneous 'Hardtracker to JCH Converter' (CSDb release 101621, 13 Jun 2000, Samar Productions) — consistent with him working specifically within the JCH-format ecosystem around this time, not as an unrelated one-off."
  ],
  "sources": [
    "sidid:Glover_NewPlayer_V21 (author Lukasz Baran (Glover); released 2000; reference https://csdb.dk/release/?id=101623) — data/sidid.json",
    "CSDb release 101623, 'JCH Players by Glover' (Samar Productions, 2000; Code by Glover of Samar Productions): https://csdb.dk/release/?id=101623",
    "CSDb release 101622, 'JCH NewPlayer 21.G6' (Samar Productions, 2000; Code by Glover of Samar Productions and JCH of Vibrants): https://csdb.dk/release/?id=101622",
    "CSDb release 101621, 'Hardtracker to JCH Converter' (Samar Productions, 13 Jun 2000; Code by Glover): https://csdb.dk/release/?id=101621",
    "CSDb group 201, Samar Productions (Poland): https://csdb.dk/group/?id=201",
    "knowledge/players/jch-newplayer.md quirks — corroborating mention of the Glover NewPlayer V21 (2000) fork from the JCH side of the lineage",
    "knowledge/COVERAGE.md — family 'Glover_NewPlayer', rank 12, 66 files, single grouped raw tag Glover_NewPlayer_V21",
    "Local dataset: data/composers/{phobos,isildur,glover,kosa,g-fellow,tomas-danko}.json — 66 files across 6 composers, matching knowledge/COVERAGE.md exactly"
  ]
}
```

## Overview

Glover NewPlayer V21 is a 2000 fork/port of Jens-Christian Huus's (JCH)
NewPlayer routine, made by Lukasz Baran ("Glover") of the Polish group Samar
Productions. It is not a name-alike guess: CSDb release 101622 ("JCH NewPlayer
21.G6", Samar Productions, 2000) explicitly credits "Code by Glover of Samar
Productions **and JCH of Vibrants**", and the companion release 101623 ("JCH
Players by Glover") bundles source code and documentation files named
`21G4_GLOVER.txt` / `21G6_GLOVER.txt` — JCH's own `21.Gn` version-naming
convention, carried into Glover's build. In the local dataset it is a
mid-sized family (66 files per `knowledge/COVERAGE.md`, rank 12 among
uncarded families before this card), used by more composers than just Glover
himself — Phobos is its single largest user (29 of 66 files), ahead of
Isildur (21) and Glover himself (13) — pointing to a genuinely distributed
small-scene tool rather than a private routine that stayed with its author.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **direct, first-party
lineage evidence**: JCH is literally co-credited on the "JCH NewPlayer 21.G6"
release that Glover coded, which is why this card asserts
`derives_from: ["jch-newplayer"]` with confidence rather than as a
name-similarity guess (the constraint this project takes most seriously).
Also note the bare `Glover` tag (~11 files) is a **different, uncarded**
family — don't conflate it with `Glover_NewPlayer_V21`.

## Disassembly notes

None performed. No public disassembly of this specific fork was found during
this pass; SRC_JCH_Glover.zip (CSDb release 101623) is a plausible starting
point for a future session — it is source code, not just a binary — but
reading and re-deriving a memory map from it is Tier 3 work out of scope
here.

## Verification

**Not verified — `status: stub`.** Identity and lineage facts (author, year,
CSDb releases, the JCH co-credit, composer usage) are confirmed from cached
SIDId data and CSDb release pages. No runtime fact (memory map, entry points,
data format, effect encoding) has been established; all are honestly left
`TODO` rather than inferred from the JCH NewPlayer family, since a fork can
diverge in exactly the ways that matter (cf. `laxity-newplayer.md`'s
sequences-welded-into-code vs `jch-newplayer-v20.md`'s separated sequences —
two JCH-lineage forks with genuinely incompatible runtime architectures).

## Sources

See the `sources` array — SIDId's `Glover_NewPlayer_V21` entry, CSDb releases
101621/101622/101623, the Samar Productions CSDb group page, the corroborating
mention in `jch-newplayer.md`, and this project's own `data/composers/*.json`
for usage counts.
