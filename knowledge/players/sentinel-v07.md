# Sentinel Music Player and Editor V07.G0

```json
{
  "id": "sentinel-v07",
  "name": "Sentinel Music Player and Editor V07.G0",
  "aliases": ["Sentinel_V0.7"],
  "authors": ["Sentinel"],
  "released": "1 March 2020, self-released",
  "status": "stub",
  "platform": "Native C64 music composition/playback tool, distributed as a disk image. Also known as 'Kemeny-Dio Editor V02.00' per CSDb.",
  "csdb_release": 202684,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId and CSDb agree cleanly: SIDId gives name 'Sentinel Music Player V07.G0', author 'Sentinel', released 2020, reference CSDb release 202684. CSDb's own page names it fully 'Sentinel Music Player and Editor V07.G0', released 1 March 2020, code+music both by 'Sentinel' (an individual scener, CSDb scener id 22185, not a group) — a modern (2020), independently-released tool with no group affiliation shown.",
    "CSDb also records the alternate title 'Kemeny-Dio Editor V02.00' for the same release — an internal/earlier working name, unexplained further.",
    "The release itself bundled 5 SID music files as examples/demos, per CSDb; downloaded 128 times as of research. Recent enough (2020) that no SIDId 'comment' playback-technique field is present.",
    "All 5 locally-tagged files are by the same composer, 'Cherubs Sentinel' — i.e. the author using his own tool, consistent with a young/personal but genuinely released and named tool (has a proper versioned title and CSDb tool page, unlike most other tags in this batch)."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['Sentinel_V0.7'])",
    "CSDb release 'Sentinel Music Player and Editor V07.G0' (1 Mar 2020, scener Sentinel, alt title 'Kemeny-Dio Editor V02.00'): https://csdb.dk/release/?id=202684",
    "Local dataset: 5 files tagged Sentinel_V0.7, 1 composer (Cherubs Sentinel) — data/composers/*.json aggregation"
  ]
}
```

## Overview

`Sentinel_V0.7` is SIDId's tag for the **Sentinel Music Player and Editor
V07.G0**, a native C64 composition/playback tool self-released 1 March 2020
by scener "Sentinel" (CSDb scener id 22185), also known internally as
"Kemeny-Dio Editor V02.00". Unlike most tags in this batch, it has a proper
CSDb tool/release page with a clean version number. All 5 locally-tagged
files are by the author himself ("Cherubs Sentinel").

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) unusually well-documented for its
size — a genuine, versioned, dated (2020) tool release, not just a bare
Player-ID signature; (2) an unexplained alternate internal name, "Kemeny-Dio
Editor V02.00"; (3) still single-composer concentration (5/5 files, the
author himself) despite being a real released tool.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. No public source repo was found (a disk-image download
exists on CSDb but was not inspected here).

## Verification

Not verified. Seeded from `data/sidid.json`, `data/composers/*.json`, and
the CSDb release page. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 202684, and the
local composer aggregation.
