# ?Juergen_Jost

```json
{
  "id": "juergen-jost",
  "name": "?Juergen_Jost",
  "aliases": ["?Juergen_Jost"],
  "authors": ["Unconfirmed — the tag names 'Juergen Jost', but the sole locally-tagged composer is Jörg Sieslack (see quirks); no source resolves this discrepancy"],
  "released": "TODO: no tool-release date exists — no SIDId entry, no CSDb tool/release page found under this name (csdb.dk search for 'Juergen Jost'/'Jurgen Jost' returns no results). Full census of both tagged files' own CSDb `Released` fields (CSDb webservice type=sid, via scripts/lib/csdb-client.js, checked 2026-08-01): 'Balloon Raid' (csdb id 45237) = '1988 Magic Disk 64/CP Verlag'; 'OHG' (csdb id 37840) = '1989 Magic Disk 64/CP Verlag'. Both are per-tune attestations, not a tool-release date — earliest attested use is 1988.",
  "status": "stub",
  "platform": "TODO: no SIDId entry, no CSDb tool/editor page found under this name (csdb.dk search returns no results), and no scener/group page for 'Juergen Jost' exists on CSDb either. Reads as a personal/in-house routine of unclear authorship, tied to Jörg Sieslack's two Magic Disk 64/CP Verlag contributions — see quirks for the name/composer mismatch.",
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
    "2 files, 1 composer — filed under Jörg Sieslack (HVSC folder Sieslack_Joerg), NOT 'Jürgen Jost'. The tag's name does not match the credited composer, and no source was found explaining the discrepancy: a co-author named Jürgen Jost, a scanner mis-identification, or an unrelated third party's routine reused by Sieslack are all equally plausible readings, none confirmed.",
    "The leading '?' marks this as one of DeepSID/SIDId's own low-confidence tag matches, the same convention documented on [[msb]] and [[unknown-c64-driver]].",
    "No SIDId entry exists for '?Juergen_Jost' (checked data/sidid.json directly).",
    "Both tagged tunes were published in the German disk magazine Magic Disk 64 (via CP Verlag): 'Balloon Raid' 1988, 'OHG' 1989 (CSDb webservice, sid ids 45237/37840, checked 2026-08-01). No CSDb search for 'Juergen Jost'/'Jurgen Jost' (scener, group, or release) returns any result, so this is not a known scener handle on CSDb.",
    "A third Sieslack file in the local dataset, 'Mission Egg' (csdb_id 46899), carries player tag \"\" (empty) rather than '?Juergen_Jost' — the tag is not applied to all of this composer's files, only 2 of the 3."
  ],
  "sources": [
    "Local dataset: data/composers/joerg-sieslack.json — 2 files (Balloon Raid csdb_id 45237, OHG csdb_id 37840); knowledge/COVERAGE.md rank #73",
    "data/sidid.json byTag — checked, no entry for '?Juergen_Jost'",
    "CSDb webservice (scripts/lib/csdb-client.js, type=sid) ids 45237 and 37840 — checked 2026-08-01, gives each tune's own Released field",
    "CSDb site search (csdb.dk/search/?seinsel=all&search=Juergen+Jost) — checked 2026-08-01, no scener/group/release match for the name"
  ]
}
```

## Overview

`?Juergen_Jost` is a raw Player-ID tag covering 2 files, both credited to
composer **Jörg Sieslack** — a discrepancy with the tag's own name
("Juergen Jost") that no source found here explains. No SIDId entry or
CSDb tool page exists for it, and no scener/group named "Juergen Jost"
exists on CSDb under any spelling searched. Both tagged tunes — 'Balloon
Raid' (1988) and 'OHG' (1989) — were published in the German disk
magazine Magic Disk 64/CP Verlag per their own CSDb `Released` fields;
these are per-tune attestations, not a tool-release date. A third
Sieslack file, 'Mission Egg', carries no player tag at all, so the
routine (whatever it is) was not used across all of his output. It is
documented as a genuine open question rather than silently corrected or
guessed.

## Quirks & gotchas

See the `quirks` array — the entire card is really one load-bearing fact:
the tag name does not match its sole credited composer, and the reason is
unresolved.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Local composer/usage data plus a full
census of both tagged files' own CSDb `Released` fields are confirmed;
the name/composer mismatch is recorded, not resolved. No SIDId entry and
no CSDb tool/scener page exist under this name. No runtime fact was
guessed.

## Sources

See the `sources` array — local composer data, SIDId (no match), and the
CSDb webservice per-file `Released` fields plus a CSDb site search
(no match), both checked 2026-08-01.
