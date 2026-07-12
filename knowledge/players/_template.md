# <Player name>

<!--
  Copy this file to knowledge/players/<id>.md (id = kebab-case, matches the
  "id" field below and the filename). Fill what you know; leave unknowns as
  "TODO: ..." strings — NEVER invent a memory map, ZP range, or entry point.
  The single ```json block below is the machine-readable facts that
  build-graph.js reads. Keep it valid JSON (no comments, no trailing commas).
-->

```json
{
  "id": "player-id",
  "name": "Player name",
  "aliases": [],
  "authors": [],
  "released": "TODO: year",
  "status": "stub",
  "platform": "TODO: native C64 / cross-platform editor + C64 player",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: $xxxx",
    "zero_page": "TODO: which ZP addresses the play routine clobbers",
    "layout": "TODO: notes on where order lists / tables / patterns live"
  },
  "entry": {
    "init": "TODO: $xxxx (A/X/Y convention if any)",
    "play": "TODO: $xxxx (call rate / speed model)"
  },
  "speed": "TODO: 1x-Nx, CIA vs raster/VBI, how multispeed is signalled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: how a command byte is laid out",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [],
  "sources": []
}
```

## Overview

_One paragraph: what this player is, who made it, where it sits in the
lineage, and why it matters._

## Quirks & gotchas

- _The non-obvious things that cost time — the reason this card exists._

## Disassembly notes

_Where the interesting routines are, what confused you, how the data tables
are walked. Link raw listings in `knowledge/artifacts/<id>.*`._

## Verification

_How the facts above were confirmed. Ideal: assembled the reconstructed
init/play and ran it through `mcp-c64`; note the result here and set
`status: verified`. If seeded from cached DeepSID/SIDId/CSDb data only, say
so and keep `status: stub`/`in-progress`._

## Sources

- _DeepSID players.json / SIDId sidid.nfo / CSDb release / public source repo
  / your own disassembly — cite each fact's origin._
