# Artline Designs player

```json
{
  "id": "artline-designs",
  "name": "Artline Designs player",
  "aliases": ["Artline_Designs"],
  "authors": ["Antti Kangas (AK / Scorpion)"],
  "released": "TODO: no single release date found — routine used across Artline Designs C64 productions from ~1990 onward (Scorpion's CSDb group membership starts 1-1990)",
  "status": "stub",
  "platform": "TODO: unconfirmed — no public documentation of an editor. Best available evidence (CSDb group history) describes it as a hand-coded 6510 assembler music routine, not a tracker/editor product",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no public disassembly found",
    "zero_page": "TODO: no public disassembly found",
    "layout": "TODO: no public disassembly found"
  },
  "entry": {
    "init": "TODO: no public disassembly found",
    "play": "TODO: no public disassembly found"
  },
  "speed": "TODO: no public disassembly found",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public disassembly found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is a demo-group-internal composer routine, not a published editor/tool. SIDId's own comment says exactly this: 'Player used by the group Artline Designs' (sidid.nfo, tag Artline_Designs). No CSDb release entry exists for it (csdb_release: null) — unlike most other SIDId tags, its `reference` field is empty, consistent with there never having been a standalone tool release.",
    "SIDId lists the author as 'Antti Kangas (AK)' with `released` holding the literal string 'Artline Designs' instead of a year — a parsing quirk in the source .nfo (the RELEASED field was filled with the group name, not a date). Local composer data corroborates authorship: CSDb's Artline Designs group history page states 'Scorpion coded a solid assembler music-routine which was mainly used by Flex (Antti Hannula) for his tunes' (https://csdb.dk/group/?id=285), and a separate CSDb scener page (https://csdb.dk/scener/?id=5019, handle 'AK', alt handle currently used 'Scorpion') ties the two handles together — i.e. Scorpion == Antti Kangas == AK, matching SIDId's author field exactly. (Scorpion's OWN scener profile, https://csdb.dk/scener/?id=897, does not itself list the 'AK' alias — the link is established via the separate id=5019 page.)",
    "Strong composer concentration in this dataset: 51 files across only 5 composers, with Antti Hannula (Flex) alone accounting for 41/51 (80%) — matching the CSDb account that the routine 'was mainly used by Flex for his tunes'. The remaining files (Scorpion 5, Juzdie 2, MAC2 2, Apollyon 1) are other Artline Designs members, consistent with an internal group tool rather than a widely distributed one. This is the textbook 'personal/small-scene routine' signature per the extraction template's concentration heuristic.",
    "Do not confuse this Antti Kangas/Scorpion/AK with the composer Antti Hannula (Flex) — both are Artline Designs members but distinct people; SIDId's 'author' names the coder of the routine, not the primary composer who used it."
  ],
  "sources": [
    "sidid: Artline_Designs tag — author 'Antti Kangas (AK)', released 'Artline Designs', comment 'Player used by the group Artline Designs' (data/sidid.json, from cadaver/sidid's sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo)",
    "knowledge/COVERAGE.md: rank 5, 51 files, family 'Artline_Designs', no `source` flag (no public source known)",
    "Local composer aggregation (data/composers/*.json): 51 files, 5 composers — Antti Hannula 41, Scorpion 5, Juzdie 2, MAC2 2, Apollyon 1",
    "CSDb group page, Artline Designs (Finland): https://csdb.dk/group/?id=285 — group history text: 'Scorpion coded a solid assembler music-routine which was mainly used by Flex...for his tunes'",
    "CSDb scener page, Scorpion/Artline Designs: https://csdb.dk/scener/?id=897 — coder+musician role, membership since 1-1990 (does NOT itself list the 'AK' alias)",
    "CSDb scener page, AK (alt handle 'Scorpion')/Artline Designs: https://csdb.dk/scener/?id=5019 — the page that ties the 'AK' handle to 'Scorpion'",
    "CSDb scener page, Antti Hannula (Flex)/Artline Designs: https://csdb.dk/scener/?id=5830 and https://csdb.dk/scener/?id=530"
  ]
}
```

## Overview

The "Artline Designs" Player-ID tag identifies a hand-coded 6510 assembler
music routine used internally by the Finnish demo/music group **Artline
Designs**, written by member **Scorpion** (also known by the handle "AK" —
real name not disclosed on CSDb), per that group's own CSDb history page. It
was mainly used by fellow member **Antti Hannula (Flex)** for his own tunes.
In this project's dataset it covers 51 files (rank 5 of the uncarded
families in `knowledge/COVERAGE.md`) across only 5 composers, 80% of them
Flex — a composer-concentration signature consistent with a personal/small-
scene routine rather than a published, widely-adopted tool. No CSDb release
exists for the routine itself (no `csdb_release`), no editor product has
been found publicly documented, and no source or disassembly is publicly
available, so every Tier 3 runtime fact stays `TODO`.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) SIDId's `released`
field for this tag holds the literal group name "Artline Designs" instead of
a year — a data quirk in the upstream `.nfo`, not a real release date; (2)
the SIDId "author" (Antti Kangas / AK) and the primary user of the routine
(Antti Hannula / Flex) are two different Artline Designs members — cross-
checked against CSDb, where Scorpion's scener profile confirms the "AK"
alias, tying SIDId's author field to the group's own credited coder.

## Disassembly notes

None. No public source or existing disassembly of this routine was found
during this research pass — it appears to be an internal, non-distributed
tool. A future pass would need to disassemble a representative
Artline-Designs-tagged `.sid` (init/play from its PSID header) directly and
trace it through `sidm2-siddump`, the same as any other undocumented closed
routine.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
confirmed, sourced from the cached SIDId entry, local composer-tag
aggregation, and CSDb's Artline Designs group and Scorpion scener pages.
Every runtime field (memory map, entry points, speed, data format, effects)
is honestly `TODO` — no disassembly was performed and none was found
publicly available.

## Sources

See the `sources` array — SIDId (`sidid.nfo`), `knowledge/COVERAGE.md`,
local `data/composers/*.json` aggregation, and the CSDb group/scener pages
for Artline Designs, Scorpion, and Antti Hannula.
