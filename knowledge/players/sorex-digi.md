# Sorex_Digi

```json
{
  "id": "sorex-digi",
  "name": "Sorex_Digi",
  "aliases": ["Sorex_Digi"],
  "authors": ["Geert Verschueren (Sorex)"],
  "released": "TODO: no explicit tool-release date found in SIDId or CSDb",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 digi/sample routine embedded in Sorex's own tracks, not a released standalone editor — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId (data/sidid.json) has an entry for this tag with an AUTHOR line only — 'Geert Verschueren (Sorex)' — no NAME, reference, or comment. The absence of a NAME field is itself a signal this was never packaged as a titled, released tool.",
    "Real corroborating evidence for the 'digi' label: CSDb's scener page for Sorex lists EXTENSIVE 'Sampling' credits, primarily on Warriors of the Wasteland releases (e.g. 'WOW Story 3' 1993, 'Kcor Leurc' 1993, 'Tri-Demo' 1993) — a genuine, repeated sampling role, not a one-off. This is stronger evidence than most tags in this batch, though these particular CSDb-credited releases are not the same titles as the 4 locally-tagged SID files (see next point), so the link is via consistent role/era, not an exact file match.",
    "4 files, 1 composer: Sorex himself — 'Give It Up', \"I'm Not a Number\", 'Out of Space', 'Utter (hardcore power mix)'. A personal routine by usage pattern.",
    "Sorex is a Belgian scener, groups Nostalgia and Warriors of the Wasteland (ex-Raiders of the Lost Empire); CSDb also lists roles Coder/Cracker/Diskmag Editor/NTSC-Fixer, consistent with an in-house coder-composer profile rather than a tool vendor."
  ],
  "sources": [
    "data/sidid.json byTag: Sorex_Digi — author 'Geert Verschueren (Sorex)', no name/reference/comment",
    "CSDb scener Sorex/Nostalgia/Warriors of the Wasteland (Belgium; extensive 'Sampling' credits on WoW releases): https://csdb.dk/scener/?id=952",
    "Local dataset: 4 files tagged Sorex_Digi, 1 composer (Sorex) — data/composers/sorex.json",
    "data/composers/sorex.json (profile country Belgium, csdb id 952)"
  ]
}
```

## Overview

Sorex_Digi is the SIDId tag for a digi/sample-playback routine attributed
to **Geert Verschueren**, handle **Sorex**, a Belgian scener (groups
Nostalgia, Warriors of the Wasteland). SIDId's entry carries only an
`AUTHOR` line, no title/reference/comment. It appears in only **4 files,
all by Sorex himself**. Unlike many sibling tags in this batch, there is
genuine corroboration for the "digi" label: CSDb's scener page credits
Sorex with repeated, explicit "Sampling" roles across multiple Warriors of
the Wasteland productions — though those specific credited releases are
not the same titles as the 4 locally-tagged files, so the evidence is
role/era-level, not a file-for-file match.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId names the author but not a
titled product — consistent with a personal/in-house routine; (2) CSDb's
"Sampling" credits are genuine corroboration of the sample-playback claim,
stronger than a bare filename regex, but not tied to the exact 4 locally
tagged tracks.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb scener page
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener page for Sorex, and
the local composer aggregation.
