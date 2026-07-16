# Griff / Light Voices

```json
{
  "id": "griff",
  "name": "Light Voices",
  "aliases": ["Griff", "(LightVoices)"],
  "authors": ["Péter Varga (Griff)"],
  "released": "1990 (Light Voices V1.0, Chromance/FBI Crew) - 1992 (Light Voices V1.1, Chromance)",
  "status": "stub",
  "platform": "Native C64 tool: a standalone music editor with its own C64 replay routine, distributed as scene tool releases by Chromance/FBI Crew (not a cross-platform editor). DeepSID players.json lists platform as \"Native / C64 emulator\".",
  "csdb_release": 98412,

  "memory": {
    "load_address": "TODO: no public source/disassembly located",
    "zero_page": "DeepSID players.json field 'zero_pages': \"2 bytes ($F7-$F8)\" — cited as-is, not independently verified via disassembly",
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
    "The author, Péter Varga (Griff), is deceased: CSDb's scener page records \"Alex/Chromance informed us on 30-6-2017 that Griff has passed away years ago\" — https://csdb.dk/scener/?id=2532. There is no active maintainer and no route to ask the author for source or documentation.",
    "Composer concentration in this dataset (HVSC MUSICIANS\\ tree only, per data/composers/*.json): 45 files tagged 'Griff', of which 41 (91%) are Griff's own composer folder and 4 are tagged under Hermit's folder — near single-composer usage, consistent with a personal routine that saw almost no adoption outside its own author (contrast the wide-spread 'Rob_Hubbard' case noted in the project's synthetic-player analysis).",
    "SIDId (data/sidid.json) actually records two separate tags for this author's tool: plain 'Griff' (identity fields only — author, no name/released/reference) and '(LightVoices)' (author + released '1990 FBI Crew' + CSDb reference 72915, i.e. the V1.0 release). Only 'Griff' was found as an actual raw player tag in this project's local dataset (data/composers/*.json) — '(LightVoices)' matched zero files, so it appears to be a SIDId-catalogued alias that isn't the string Player-ID actually stamps on these files.",
    "DeepSID's curated players.json entry ('Light Voices v1.x', search key 'griff') records 'relocator': \"Using separate tool\" — i.e. the replay/data is not self-relocating and depends on an external relocation step, per DeepSID's own spec table.",
    "Two dated CSDb releases exist for the tool itself: 'Light Voices V1.0' (1990, group Chromance, code+music by Griff, credited also to FBI Crew) at csdb.dk/release/?id=72915, and 'Light Voices V1.1' (1992, group Chromance, linking by Alex) at csdb.dk/release/?id=98412 — DeepSID's players.json start_year/end_year (1990/1992) match this release span exactly.",
    "No public source code, GitHub/SourceForge repo, or technical format documentation was located (CSDb, Codebase64, general web search) — only the two CSDb tool-release pages and composer/memorial bio pages. Treat as a closed classic scene tool."
  ],
  "sources": [
    "sidid:Griff (author Péter Varga (Griff), identity only, no released/reference) — data/sidid.json",
    "sidid:(LightVoices) (author Péter Varga (Griff), released '1990 FBI Crew', reference https://csdb.dk/release/?id=72915) — data/sidid.json",
    "DeepSID players.json curated entry 'Light Voices v1.x' (search 'griff', developer Griff, start_year 1990, end_year 1992, csdb_id 98412, platform 'Native / C64 emulator', zero_pages '2 bytes ($F7-$F8)', relocator 'Using separate tool') — data/players.json",
    "Local dataset: 45 files tagged 'Griff' (41 in griff.json, 4 in hermit.json); verified by grep of data/composers/*.json",
    "CSDb release 'Light Voices V1.0' (Chromance/FBI Crew, 1990; code+music Griff): https://csdb.dk/release/?id=72915",
    "CSDb release 'Light Voices V1.1' (Chromance, 1992; code+music Griff, linking Alex): https://csdb.dk/release/?id=98412",
    "CSDb scener profile, Griff / Péter Varga (Hungary, Chromance/FBI Crew founder-member, deceased): https://csdb.dk/scener/?id=2532",
    "Composer profile in local dataset (country Hungary, active 1994, csdb_id 2532): data/composers/griff.json",
    "Biography page: https://8bitlegends.com/griff-chromance/"
  ]
}
```

## Overview

Light Voices is a native C64 music editor written by Hungarian musician Péter
Varga, known on the scene as Griff, a founding member of Chromance (and
earlier of FBI Crew). It was released as a scene tool in two versions —
V1.0 in 1990 (Chromance/FBI Crew) and V1.1 in 1992 (Chromance) — and its
Player-ID signature in this project's dataset is the plain tag "Griff"
(DeepSID's own curated player-spec entry titles it "Light Voices v1.x"). In
the local HVSC-derived dataset it covers 45 files, 41 of them (91%) composed
by Griff himself, with only 4 more under a different composer's folder —
strongly consistent with a personal routine that Griff wrote for his own use
and that never spread beyond a couple of scene tunes elsewhere. Griff passed
away some years before CSDb recorded the fact in 2017, and no public source
or technical documentation for the tool has been found.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: the **author is deceased**
(per CSDb), so there is no route to ask for source or docs; usage is **almost
entirely by Griff himself** (41/45 files, 91%); SIDId splits this author's
tool across **two differently-scoped tags** ('Griff' identity-only vs.
'(LightVoices)' with a CSDb reference), but only the plain 'Griff' tag
actually appears as a raw Player-ID value in this project's dataset; and
DeepSID's own spec table notes the tool's data is relocated by a **separate
external tool**, not a self-relocating replay.

## Disassembly notes

None. No public source or disassembly of the Light Voices replay routine was
located. The only concrete runtime fact available is DeepSID's own curated
zero-page figure (2 bytes at `$F7-$F8`), taken as-is and not independently
verified. A future pass could disassemble a representative 'Griff'-tagged
`.sid` from its PSID header (init/play addresses) and trace it through
`sidm2-siddump` — the only route to real memory-map/format facts here, since
no source exists to read instead.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release years/version chain, CSDb releases, local usage stats, composer
concentration) are confirmed, from SIDId, DeepSID's curated `players.json`,
CSDb, and this project's own composer data. Every Tier 3 runtime field is
`TODO` except the one DeepSID-sourced zero-page figure, which is cited but
not independently verified — an honest gap rather than a guessed memory map.

## Sources

See the `sources` array — SIDId's two cached tags for this author, DeepSID's
curated `players.json` entry, this project's local composer-file aggregate
(`data/composers/griff.json`, `data/composers/hermit.json`,
`knowledge/COVERAGE.md`), the two CSDb Light Voices tool-release pages, the
CSDb scener profile, and one external biography page.
