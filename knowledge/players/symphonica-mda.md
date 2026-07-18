# Symphonica/MDA (Symphonica Music System V1.0)

```json
{
  "id": "symphonica-mda",
  "name": "Symphonica Music System V1.0",
  "aliases": ["Symphonica/MDA"],
  "authors": ["Tim Kleinert"],
  "released": "TODO: no date found — SIDId has no RELEASED field for this tag, and no dedicated CSDb release page was found under this name",
  "status": "stub",
  "platform": "TODO: appears to be a native C64 tool from the Modern Arts (MDA) group's toolset — no dedicated CSDb tool/release entry found under 'Symphonica' (unconfirmed)",
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
    "MODERN ARTS (MDA) SIBLING TAGS: sidid.nfo groups three separate 'MDA'-suffixed tags together — 'Mat/MDA' (author Matthias Hillebrand of Modern Arts), 'SoundBox/MDA' (author Tim Kleinert, released 1991, CSDb release 112576), and this one, 'Symphonica/MDA' (name 'Symphonica Music System V1.0', author Tim Kleinert, no released/reference). All three sit adjacent in sidid.nfo and share the group suffix, consistent with Modern Arts having produced a small family of in-house editors rather than one single tool — but each has a distinct SIDId signature and is NOT merged here as an alias of the others.",
    "CAUTION — a WebSearch AI summary during this research pass initially claimed Symphonica was 'a modified version of Matt Gray's player.' Checked directly against the raw deepsid_dl/sidid.nfo text: that COMMENT ('A modified version of Matt Gray's player') belongs to the separate, unrelated '(Andrew_Rodger)' entry a few lines below Symphonica/MDA in the file, not to Symphonica itself. The Symphonica/MDA entry has NO comment field. This is recorded here specifically so a future pass doesn't repeat the same misattribution.",
    "Composer concentration matches the two other MDA-family tool authors exactly: the 6 locally-tagged files split between Matthias Hillebrand (Switzerland, CSDb scener 6595) — author of the sibling 'Mat/MDA' tag — and Tim Kleinert (Switzerland, CSDb scener 6596, real name Timothy Walter Kleinert, b. 1971) — Symphonica's own credited author. Both composers are Swiss and both are credited tool authors within the same small group, suggesting Modern Arts' own members were the primary/only users of their own editors.",
    "No CSDb release page was found specifically for 'Symphonica' (searched directly); the sibling 'SoundBox/MDA' does have one (CSDb 112576), so Symphonica's absence from CSDb as a standalone release is a real gap, not a research shortfall."
  ],
  "sources": [
    "sidid:Symphonica/MDA (name 'Symphonica Music System V1.0', author 'Tim Kleinert', no released/reference/comment) — deepsid_dl/sidid.nfo line ~908, imported into data/sidid.json",
    "deepsid_dl/sidid.nfo (raw text, checked directly to resolve the Matt Gray misattribution): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "sidid:SoundBox/MDA (sibling tag, author Tim Kleinert, released 1991, reference https://csdb.dk/release/?id=112576) — context only, not merged",
    "sidid:Mat/MDA (sibling tag, author Matthias Hillebrand of Modern Arts) — context only, not merged",
    "Local dataset: 6 files tagged 'Symphonica/MDA' across 2 composers — Matthias Hillebrand, Tim Kleinert — data/composers/matthias-hillebrand.json, data/composers/tim-kleinert.json",
    "data/composers/matthias-hillebrand.json (HVSC profile: Switzerland, CSDb scener 6595)",
    "data/composers/tim-kleinert.json (HVSC profile: Switzerland, real name Timothy Walter Kleinert, b. 1971-08-26, CSDb scener 6596)"
  ]
}
```

## Overview

`Symphonica/MDA` is the SIDId tag for **Symphonica Music System V1.0**,
credited to **Tim Kleinert** of the Swiss group **Modern Arts (MDA)**. It is
one of at least three MDA-suffixed SIDId tags (alongside `Mat/MDA` and
`SoundBox/MDA`), consistent with Modern Arts having built a small family of
in-house editors rather than one shared tool — but each carries its own
distinct signature and none are merged here. Locally it covers 6 files split
between Kleinert himself and fellow Swiss Modern Arts member Matthias
Hillebrand (author of the sibling `Mat/MDA` tag), suggesting the group's own
members were its primary users. No CSDb release page was found for Symphonica
itself, unlike its `SoundBox/MDA` sibling.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) do not merge with the `Mat/MDA` /
`SoundBox/MDA` sibling tags — same group, distinct signatures; (2) a
misattributed "modified version of Matt Gray's player" claim was traced back
to a different, adjacent sidid.nfo entry (`(Andrew_Rodger)`) and does NOT
apply to Symphonica — flagged so it isn't repeated; (3) both locally-tagged
composers are Swiss Modern Arts members and credited tool authors themselves.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a direct read of the raw
sidid.nfo to resolve a misattribution. `status: stub` — no runtime fact has
been confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo (including the raw-text check),
the two sibling MDA tags for context, and the local composer aggregation.
