# Carmine_TSM

```json
{
  "id": "carmine-tsm",
  "name": "Carmine_TSM",
  "aliases": ["Carmine_TSM"],
  "authors": ["Carmine Migliaccio (TSM)"],
  "released": "2005 (per both tunes' own CSDb 'Released' field: 'The Great Bath' and 'Willow', both csdb.dk/sid entries 29629/29630, checked — both of the 2 tagged files agree)",
  "status": "stub",
  "platform": "Native C64 — a personal, self-written play routine, not a published editor/tool. CSDb site search for 'Carmine_TSM' returns zero results (no release/tool/player entry of any kind, checked 2026-07-31); by contrast TSM's other 12 HVSC files are tagged with genuine third-party tools (CyberTracker, GoatTracker_V2.x), so this name is not a mislabeled alias of a known editor. Both tagged SIDs' PSID headers place load/init/play at $1000/$1000/$1003 (csdb.dk/sid 29629, 29630) — a tiny, self-contained routine consistent with hand-written code rather than a general-purpose tracker driver.",
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
    "SIDId's sidid.nfo has NO entry for 'Carmine_TSM' (checked cadaver/sidid AND the sysfce2/C64_SIDId fork, 2026-07-31) — this is a Player-ID-only signature, not a documented/published tool.",
    "SELF-REFERENTIAL NAME: the tag combines the composer's own real first name (Carmine) with his own scene handle (TSM) — per data/composers/tsm.json, TSM's full real name is Carmine Migliaccio (Italy). This is a strong, direct match confirming the tag names the composer's own personal routine, not a third party or a coincidence.",
    "Single-composer concentration: BOTH of the 2 locally-tagged files (full census: 'The Great Bath' csdb.dk/sid 29629, and 'Willow' csdb.dk/sid 29630) are by TSM himself (Carmine Migliaccio, Italy, active from 2012, CSDb scener 15664) — entirely expected for a self-named personal routine.",
    "Both tunes' own CSDb 'Released' field reads '2005 TSM' verbatim — same year, same self-attribution, on both files. 'The Great Bath' was later reused 13 years on in the 2018 one-file demo 'Tequila Sunset' (csdb.dk/release/?id=167547, C64 ReUnion 2018) — that reuse's 2018 UsedIn date is NOT the tune's own composition/release date and was correctly not used for `released`.",
    "PSID headers (not a Tier 3 fact, recorded here only): both files load/init at $1000, play at $1003 (csdb.dk/sid 29629, 29630), PAL/6581, tiny DataSize (1841 and 4884 bytes) — consistent with a compact hand-written routine rather than a general tracker driver.",
    "CSDb site search for the literal string 'Carmine_TSM' returns zero results (checked 2026-07-31) — confirms no release/tool/player database entry exists under this name, independent of the SIDId absence check."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Carmine_TSM': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "sysfce2 fork of sidid.nfo also checked, no matching entry: https://raw.githubusercontent.com/sysfce2/C64_SIDId/master/sidid.nfo",
    "CSDb site search for 'Carmine_TSM': https://csdb.dk/search/?seinsel=all&search=Carmine_TSM (zero results)",
    "CSDb SID entry, 'The Great Bath': https://csdb.dk/sid/?id=29629 (Released: '2005 TSM'; Load/Init $1000, Play $1003)",
    "CSDb SID entry, 'Willow': https://csdb.dk/sid/?id=29630 (Released: '2005 TSM'; Load/Init $1000, Play $1003)",
    "CSDb release entry, 'Tequila Sunset' (2018 reuse of 'The Great Bath', not its original release): https://csdb.dk/release/?id=167547",
    "Local dataset: 2 files tagged 'Carmine_TSM' (full census), both by TSM — data/composers/tsm.json",
    "data/composers/tsm.json (HVSC profile: full name Carmine Migliaccio, Italy, active 2012, CSDb scener 15664)"
  ]
}
```

## Overview

`Carmine_TSM` is a raw Player-ID tag for a personal replay routine used
exclusively by **Carmine Migliaccio**, handle **TSM**, an Italian scener. The
tag name is self-referential — the composer's own real first name plus his
own handle — a direct match confirming this is his own routine rather than a
third-party tool. SIDId has no entry for the tag (checked both the cadaver
original and the sysfce2 fork), and a CSDb site search for the literal string
returns zero results. Both locally-tagged files (full census: "The Great
Bath" and "Willow") are his own, both attesting `Released: 2005 TSM` in
their own CSDb SID metadata. Of TSM's 14 total HVSC files, only these 2 carry
this tag — the other 12 use genuine third-party tools (CyberTracker,
GoatTracker_V2.x), reinforcing that `Carmine_TSM` names a one-off personal
routine, not a mislabeled alias of a known editor.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag name is a direct self-reference
(real first name + handle), not a coincidence or a third-party tool name;
usage is 100% by the composer himself, both files censused, and no CSDb
release/tool entry exists under this name.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/tsm.json`, `data/sidid.json`). `status: stub` — no runtime
fact has been confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo absence check (both the cadaver
original and the sysfce2 fork), a direct CSDb site-search absence check, the
two tagged files' own CSDb SID entries (release-year attestation + PSID
header metadata), and the local composer aggregation.
