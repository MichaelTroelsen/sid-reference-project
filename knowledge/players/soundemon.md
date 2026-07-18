# SounDemon

```json
{
  "id": "soundemon",
  "name": "SounDemon",
  "aliases": ["SounDemon"],
  "authors": ["Otto Järvinen (SounDemoN)"],
  "released": "TODO: no explicit tool-release date found; local files span the composer's active career",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/editor release found under this name — appears to be a personal in-house routine embedded in SounDemon's own tracks, not a released standalone editor (unconfirmed)",
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
    "SIDId's entry for the raw tag 'SounDemon' carries only an AUTHOR line (Otto Järvinen (SounDemoN)) — no NAME, reference, or comment fields (deepsid_dl/sidid.nfo). The absence of a NAME/reference is itself a signal this was never packaged/released as a titled standalone tool, consistent with a personal in-house routine rather than a published editor. No CSDb tool/release page under 'SounDemon' as a product was found in this pass.",
    "Single-composer, single-country concentration: all 7 files in the local dataset are by SounDemon himself (Otto Järvinen, Finland, CSDb scener 1257) — a textbook personal-routine signature, not a widely shared tool.",
    "SounDemoN is otherwise a well-known and prolific Finnish SID composer/coder (member of various demoscene groups per CSDb); do not confuse this bare-name Player-ID signature with any of his other, separately-tagged work — this card covers only the raw 'SounDemon' tag as it appears in the local dataset."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no NAME/reference/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener Otto Järvinen / SounDemoN (Finland): https://csdb.dk/scener/?id=1257",
    "Local dataset: 7 files tagged SounDemon, all by SounDemon himself — see data/composers/soundemon.json"
  ]
}
```

## Overview

`SounDemon` is the raw Player-ID tag for a routine attributed to
**Otto Järvinen**, handle **SounDemoN**, a Finnish scener (CSDb scener 1257).
Locally it appears in only **7 files, all by SounDemon himself** — a strong
personal-routine signature. SIDId's entry for the tag has only an `AUTHOR`
line, no `NAME`/`reference`/`comment`, consistent with an in-house routine
that was never packaged and released as a titled, standalone tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) single-composer, single-country
concentration (7/7 files by SounDemon himself) marks this as a personal
routine, not a published tool; (2) no dedicated CSDb tool/release page was
found under this name; (3) SounDemoN is a well-known, prolific composer more
broadly — this card is scoped strictly to the bare `SounDemon` Player-ID tag,
not his whole body of work (most of which likely uses other, separately
tagged players).

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/soundemon.json`, `data/sidid.json`) plus a CSDb scener page
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener page for SounDemon,
and the local composer aggregation.
