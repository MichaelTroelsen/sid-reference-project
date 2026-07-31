# KB/TOM

```json
{
  "id": "kb-tom",
  "name": "KB/TOM",
  "aliases": ["KB/TOM"],
  "authors": ["Tammo Hinrichs (kb) of The Obsessed Maniacs (TOM)"],
  "released": "No dedicated tool-release date exists (in-house routine). Census of all 6 tagged files' own CSDb `Released` fields spans 1995-1997: earliest 'Centric (trackmo)' (1995 Cyance, csdb.dk/sid/?id=23548) and 'Mathematica (tune 2)' (1995 Reflex, csdb.dk/sid/?id=23574); latest '2nd Reality (part 4)' (1997 Smash Designs, csdb.dk/sid/?id=16701) and 'Breitbandkatze' (1997 Reflex, csdb.dk/sid/?id=23542). This is a first/last-attested-tune range, not a tool release date.",
  "status": "stub",
  "platform": "Native C64, in-house/embedded music routine, not a released standalone editor. Confirmed by census: no CSDb tool/release entry under 'KB/TOM' anywhere, including in The Obsessed Maniacs' own group release list (csdb.dk/group/?id=340, all releases checked) and Tammo Hinrichs's CSDb scener page (csdb.dk/scener/?id=655) and C64-Wiki biography (c64-wiki.de/wiki/Tammo_Hinrichs) — neither lists a music tool by this or a similar name.",
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
    "SIDId's sidid.nfo carries only an AUTHOR line — 'Tammo Hinrichs (kb) of The Obsessed Maniacs (TOM)' — no NAME/RELEASED/REFERENCE/COMMENT. TOM ('The Obsessed Maniacs') is a group affiliation baked into the tag itself, not a tool title.",
    "Tammo Hinrichs (handle kb, German) is independently well known in the scene as a co-author of other, separately named/carded SID tools (e.g. Reflextracker, with Matthias Kramm and Zorc — see web research) and of TinySID; this tag is a DIFFERENT, unrelated signature from those and must not be conflated with them absent direct evidence.",
    "Usage is concentrated but not single-composer: 6 files across 2 composers — 'PVCF' (Kai Walter, Germany, 5 files) does most of the tagged output, kb himself only 1 (data/composers/kb.json, pvcf.json). Both composers are German but their HVSC profiles list no shared group affiliation, so why Kai Walter's tunes carry kb's tag is unresolved — plausibly an informally shared/adapted routine (TODO: unconfirmed).",
    "Census of all 6 tagged files' own CSDb `Released` fields (not UsedIn release years) shows the group credited alongside the tune varies per tune despite the constant 'KB/TOM' player tag: 'Smash Designs' (2nd Reality pt.4, csdb.dk/sid/?id=16701), 'Reflex' (Breitbandkatze id=23542, Mathematica tune 2 id=23574, Reflection id=23583), 'Cyance' (Centric trackmo id=23548), 'Reflex/Smash Designs' (Triage tune 2 id=23595) — CSDb independently confirms kb was a member of both Smash Designs and Reflex (csdb.dk/scener/?id=655). This supports the routine being a personal/portable one kb carried between groups/collaborators rather than tied to one release or demo group.",
    "The 6 files' own PSID header Init addresses are not identical across files that share the LoadAddr (e.g. Reflection: load 2048/init 7904; Triage tune 2: load 2051/init 7761; Centric trackmo: load 2048/init 6848) — consistent with hand-integrated per-demo placement of a shared routine rather than one fixed relocatable binary. This is PSID header metadata only, not a disassembly finding; no Tier 3 field is populated from it."
  ],
  "sources": [
    "SIDId sidid.nfo (author only): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 6 files tagged KB/TOM across composers 'KB' (1) and 'PVCF' (5) — data/composers/kb.json, data/composers/pvcf.json; see knowledge/COVERAGE.md",
    "CSDb scener profile, kb / Tammo Hinrichs: https://csdb.dk/scener/?id=655",
    "CSDb scener profile, PVCF / Kai Walter: https://csdb.dk/scener/?id=836",
    "Web research on Tammo Hinrichs's other, separately named tools (Reflextracker, TinySID) — confirms he is a known SID-tool author generally, but does not identify what 'KB/TOM' itself is: https://github.com/kebby",
    "CSDb webservice, all 6 tagged files' own sid entries (Released/LoadAddr/InitAddr fields, census): https://csdb.dk/sid/?id=16701, https://csdb.dk/sid/?id=23542, https://csdb.dk/sid/?id=23548, https://csdb.dk/sid/?id=23574, https://csdb.dk/sid/?id=23583, https://csdb.dk/sid/?id=23595",
    "CSDb webservice, The Obsessed Maniacs group release list (checked for a matching tool release, none found): https://csdb.dk/group/?id=340",
    "C64-Wiki biography, Tammo Hinrichs (no music-tool mention beyond composition/coding credits): https://www.c64-wiki.de/wiki/Tammo_Hinrichs"
  ]
}
```

## Overview

KB/TOM is a SIDId Player-ID tag attributed to **Tammo Hinrichs**, handle
**kb**, credited "of The Obsessed Maniacs (TOM)" — a group affiliation
folded into the tag name rather than a standalone tool title. SIDId's
record is author-only, with no NAME, release date, or CSDb reference.
Locally it spans **6 files across 2 composers** (full census, not a sample):
kb himself (1 file) and **PVCF** / Kai Walter (5 files) — both German, but
not sharing a recorded CSDb group. Hinrichs is independently known for other,
separately-tagged tools (Reflextracker, TinySID), so this signature should
not be assumed related to those without direct evidence. No dedicated CSDb
tool/release entry exists under this name — checked directly against The
Obsessed Maniacs' own group release list and against Hinrichs's CSDb/C64-Wiki
profiles — so it is treated as an in-house/personal routine, not a released
editor. The census of all 6 files' own `Released` fields places attested use
between 1995 (Cyance/Reflex) and 1997 (Smash Designs/Reflex).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) author-only SIDId record, no
title/reference; (2) usage skews to a second composer (PVCF, 5 of 6 files)
rather than the named author himself; (3) do not conflate with Hinrichs's
other, separately-named/carded tools; (4) the group credited alongside each
tune varies (Smash Designs / Reflex / Cyance) even though the player tag is
constant, and PSID Init addresses differ across files sharing a load
address — both point to a hand-placed personal routine, not one packaged
tool.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/kb.json`, `data/composers/pvcf.json`,
`data/sidid.json`, CSDb scener-page checks, and a full census of all 6 tagged
files' own CSDb `sid` entries (Released/LoadAddr/InitAddr) via
`scripts/lib/csdb-client.js`. `status: stub` (Tier 1/2 only, no disassembly).

## Sources

See the `sources` array — SIDId sidid.nfo, local composer aggregation, and
CSDb scener pages for kb and PVCF.
