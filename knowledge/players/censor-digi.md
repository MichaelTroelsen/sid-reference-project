# Censor Digi (Swallow / Censor Design)

```json
{
  "id": "censor-digi",
  "name": "Censor Digi (Swallow / Censor Design)",
  "aliases": ["Censor_Digi_1", "Censor_Digi_2"],
  "authors": ["Fredrik Ternell (Swallow)"],
  "released": "TODO: no explicit release date found; earliest attested use is 1990 (Wonderland V, CSDb release 619)",
  "status": "stub",
  "platform": "TODO: presumed a native-C64 routine coded directly into Censor Design demo parts, not a standalone distributed editor/tool — no CSDb tool release or source archive found under this name",
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
    "No SIDId entry exists for either raw tag. deepsid_dl/sidid.nfo goes straight from 'Censor_8bit_Digi_2' to 'Censored_Editor' with nothing for 'Censor_Digi_1'/'Censor_Digi_2' in between (verified by alphabetical position and direct grep) — unlike the sibling Censor_8bit_Digi_1/_2, which DO have SIDId author entries. Author/attribution here comes only from this project's own per-file composer-data aggregation, not from SIDId.",
    "Local dataset (data/composers/swallow.json + data/composers/tomas-danko.json): 8 files tagged Censor_Digi_1, 6 tagged Censor_Digi_2 = 14 total, 2 composers. Every Censor_Digi_1 file is solo Fredrik Ternell (Swallow): Eye_Damage, Pray, Wonderland_IX(part3), Wonderland_VI(part4), Wonderland_V(part3/5/7), plus one more. Censor_Digi_2 is more mixed: Swallow solo (Bla_Bla, Bouncy_Balls_RCA_Intro, Spasmolytic part6), two 'Fredrik Ternell & Tomas Danko' collabs (Wonderland_IX part9, Wonderland_X part1), and one Tomas Danko solo (Ragga_Run).",
    "Chronology (CSDb release dates) does NOT cleanly separate _1 from _2: Wonderland V (1990-01-07, CSDb 619), VI (1990-06-08, CSDb 628) and VIII (1991-05-02, CSDb 633) all used _1. But within the SAME 1992 release, Wonderland IX (CSDb 11605), part 3 is tagged _1 and part 9 is tagged _2 — so the two are not a strict 'old version retired, new version adopted' succession within that demo; they coexisted in the same release. Wonderland X (1993, CSDb 11646) and Spasmolytic (1993, CSDb 636) use only _2. Read together this is consistent with _1/_2 being two configurations or a version bump of ONE personal routine (same author throughout, same demo series, SIDId's own '_1'/'_2' numeric-suffix convention elsewhere in this dataset marks variants of one tool, not distinct products) — but this is an inference from usage pattern, NOT a confirmed byte-level fact. No sidid.cfg (the binary byte-signature file SIDId actually scans with) is available locally to check whether _1 and _2 share code; deepsid_dl/ only ships the human-readable sidid.nfo index.",
    "The tag contains 'Digi' and several file titles literally say 'Digi' (e.g. the sibling 'Wonderland XII - Digi' tracks, tagged Censor_Digi/16khz, researched separately), which is suggestive of real sample/digi playback — but per this batch's rule, the tag name itself is not evidence, and no source/documentation was found confirming the actual playback technique for THIS tag specifically. Contrast with sibling Censor_8bit_Digi_1/_2, which DOES have a SIDId comment ('uses the same technique to play 8-bit samples as in OxyMod/THCM') — no equivalent comment exists for plain Censor_Digi.",
    "Three sibling tags (Censor_Digi, Censor_Digi/16khz, Censor_8bit_Digi) share the same author, Fredrik Ternell (Swallow) of Censor Design — but SIDId lists Censor_8bit_Digi as a byte-distinguishable signature from Censor_Digi (separate .nfo entries, no cross-reference or shared-routine comment between them). Same author is not the same as same code; no merge evidence was found connecting this family to either sibling, so no `edges` were asserted here. If a future pass gets access to sidid.cfg's raw byte signatures and finds overlap, that would be the actual evidence needed.",
    "No CSDb tool/release page exists for a 'Censor Digi' editor or player itself — this looks like an in-house routine embedded directly in demo code, not a distributed tool. The only curated DeepSID player with 'Censor' in the name is the unrelated 'Censor Editor v1.6' by a different scener, Kenneth Mutka (Slaygon) — CSDb release 67187/91724, a Censor Design music tracker, not this digi routine (different author, different CSDb id, no shared-routine evidence).",
    "Very small footprint (14 files, effectively one composer's routine used across ~a decade of one Swedish group's demos, with one co-composer credit) — squarely a personal/in-house routine, not a published editor, consistent with this batch's expectation."
  ],
  "sources": [
    "deepsid_dl/sidid.nfo (confirms no entry for Censor_Digi_1/Censor_Digi_2; entries exist for Censor_8bit_Digi_1, Censor_8bit_Digi_2, Censored_Editor): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/sidid.json byTag (same, as imported JSON)",
    "Local dataset: data/composers/swallow.json and data/composers/tomas-danko.json, per-file `player` tag aggregation (8 files Censor_Digi_1, 6 files Censor_Digi_2, 2 composers)",
    "data/players.json curated entry 'Censor Editor v1.6' (csdb_id 67187, developer Slaygon) — shown to be a distinct, unrelated tool",
    "CSDb group Censor Design (Sweden): https://csdb.dk/group/?id=2310",
    "CSDb scener Swallow (Fredrik Ternell): https://csdb.dk/scener/?id=2547",
    "CSDb releases used for chronology: Wonderland V https://csdb.dk/release/?id=619 ; Wonderland VI https://csdb.dk/release/?id=628 ; Wonderland VIII https://csdb.dk/release/?id=633 ; Wonderland IX https://csdb.dk/release/?id=11605 ; Wonderland X https://csdb.dk/release/?id=11646 ; Spasmolytic https://csdb.dk/release/?id=636 ; Wonderland XII https://csdb.dk/release/?id=120907"
  ]
}
```

## Overview

Censor Digi is the local project's grouping of two raw SIDId-adjacent tags,
`Censor_Digi_1` and `Censor_Digi_2`, found on 14 files by 2 composers: mostly
**Fredrik Ternell (Swallow)** of the Swedish group **Censor Design**, with 2
collab tracks and 1 solo track by fellow Censor Design member **Tomas Danko**.
Neither tag has a SIDId entry (unusual — the sibling `Censor_8bit_Digi_1`/`_2`
tags do), so everything known here comes from this project's own per-file
composer data plus CSDb's release history for the "Wonderland" demo series the
tagged files come from. This reads as an in-house digi/sample routine used
across roughly a decade of one group's demos, not a distributed editor — no
CSDb tool release or source archive was found for it.

## Quirks & gotchas

See the `quirks` array. Load-bearing: **no SIDId documentation at all** for
either raw tag (contrast with the 8-bit sibling, which has one); the
**_1 vs _2 chronology overlaps within a single release** (Wonderland IX, 1992
— part 3 tagged _1, part 9 tagged _2), which argues against a clean "_2
replaced _1" story and toward "two configurations of one routine" instead,
though this is inference from usage pattern, not a byte-level check; and the
**cluster hypothesis** (that Censor_Digi / Censor_Digi/16khz / Censor_8bit_Digi
are all one underlying routine) is NOT supported by direct evidence — same
author, but SIDId itself treats them as separate signatures with no
cross-reference, so no `edges` were asserted to either sibling.

## Disassembly notes

None done. No source, format spec, or disassembly was found publicly for this
routine.

## Verification

Not verified — Tier 1/2 (identity, usage, provenance) only. `status: stub`.
No init/play/memory-map facts were asserted; all Tier 3 fields are `TODO`.

## Sources

See the `sources` array — deepsid_dl/sidid.nfo, this project's own
`data/composers/*.json` aggregation, `data/players.json`, and CSDb group/
scener/release pages used to establish the Censor Design / Swallow / Tomas
Danko chronology.
