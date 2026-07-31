# DreamComposer/Tendance

```json
{
  "id": "dreamcomposer-tendance",
  "name": "DreamComposer/Tendance",
  "aliases": ["DreamComposer/Tendance"],
  "authors": ["Márton Feldman (Marcy) — inferred from tag/composer identity; not independently confirmed as the tool's actual author"],
  "released": "1995 (per-tune CSDb `Released` field, census of all 3 tagged files: Another Style csdb_id 19712, Boom csdb_id 19728, Doorway csdb_id 19716 — all three read '1995 Smash Designs' via csdb.dk/webservice/?type=sid&id=<n>). This is the tune/release date the files themselves carry, not a documented tool-version release date — no SIDId entry or CSDb tool page for 'DreamComposer' exists to confirm a first-release date for the player itself.",
  "status": "stub",
  "platform": "TODO: no SIDId entry, CSDb tool/release page, or other independent documentation found for a tool named 'DreamComposer'. Native-C64-vs-cross-platform cannot be determined from what exists. (The 'Tendance' half of the tag IS now identified, see quirks — it is a real Hungarian demo group, not a tool platform.)",
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
    "3 files, 1 composer (100% Márton Feldman / Marcy, Hungary) — a textbook personal/in-house routine, not a published tool.",
    "Census of all 3 tagged files (csdb webservice type=sid): Another Style (19712), Boom (19728), Doorway (19716) all carry identical CSDb metadata — Released '1995 Smash Designs', LoadAddr $1000, InitAddr $1000, PlayAddr $1003 (PSID header values — not confirmed disassembly facts, recorded here only, never promoted to the Tier 3 memory/entry fields).",
    "'Tendance' is now identified: CSDb scener record for Marcy (Handle ID 4313, csdb.dk/webservice/?type=scener&id=4313&depth=3) lists him as an ex-member ('Musician') of group 'Tendance' (CSDb group ID 613, short 'TDC'), a Hungarian demo group founded 1993-05-21. Many of his other SIDs (not part of this 3-file tag family) carry 'Released: 1995 Tendance' or '1994 Tendance' directly. So the tag's two halves read as tool-name/origin-group ('DreamComposer' the personal editor, written while a Tendance member) even though these specific 3 tagged files were released under a different group, Smash Designs — Marcy appears to have moved between/worked with both. No page documents 'DreamComposer' as a named, released tool distinct from Marcy's own use of it.",
    "No SIDId entry exists for 'DreamComposer/Tendance' (checked data/sidid.json directly)."
  ],
  "sources": [
    "Local dataset: data/composers/marcy.json — 27 total files for this composer, of which exactly 3 carry the 'DreamComposer/Tendance' player tag (Another Style csdb_id 19712, Boom csdb_id 19728, Doorway csdb_id 19716); the other 24 carry different tags (DMC_V4.x, DMC_V5.x, DMC, Sosperec) and are out of scope for this card",
    "CSDb sid webservice, all 3 tagged files: https://csdb.dk/webservice/?type=sid&id=19712, id=19728, id=19716 (each read directly, 2026-07-31)",
    "CSDb scener webservice for Marcy (Handle 4313), depth=3, showing 'Tendance' (group 613) membership: https://csdb.dk/webservice/?type=scener&id=4313&depth=3",
    "data/sidid.json byTag — checked, no entry for 'DreamComposer/Tendance'",
    "CSDb webservice search for 'DreamComposer' as a distinct group/scener/release name returned no result: https://csdb.dk/webservice/?type=search&search=DreamComposer"
  ]
}
```

## Overview

`DreamComposer/Tendance` is a raw Player-ID tag covering 3 files (of the
composer's 27 total in the collection), all by a single Hungarian composer,
**Márton Feldman (Marcy)**. No SIDId entry or CSDb tool page documents
"DreamComposer" as a distinct, released editor — it reads as a personal/
in-house routine. All 3 tagged files carry an identical CSDb `Released`
field of "1995 Smash Designs"; "Tendance" (the tag's other half) is now
confirmed as a real Hungarian demo group (founded 1993-05-21, CSDb group
ID 613) that Marcy was a member of — resolving the previous open question
about the name, even though these particular 3 files were released under
Smash Designs rather than Tendance.

## Quirks & gotchas

See the `quirks` array — the load-bearing points are the 100%
single-composer concentration (personal routine), the identical PSID
header metadata across all 3 files, and the now-confirmed identity of
"Tendance" as Marcy's own demo group (not the releasing group of these
specific 3 tunes, which is Smash Designs).

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Local composer/usage data plus a
census of all 3 tagged files' CSDb SID-entry records (via the webservice,
not just one file as before) and the composer's own CSDb scener record
are confirmed; no SIDId entry exists, and no Tier 3 runtime fact was
guessed — all remain `TODO`.

## Sources

See the `sources` array — local composer data, all 3 CSDb SID-entry
records, the composer's CSDb scener record (resolving the "Tendance"
group identity), and SIDId (checked, no match).
