# JCH OldPlayer

```json
{
  "id": "jch-oldplayer",
  "name": "JCH OldPlayer",
  "aliases": ["JCH_OldPlayer"],
  "authors": ["Jens-Christian Huus (JCH)"],
  "released": "TODO: pre-1988 (predates JCH NewPlayer)",
  "status": "in-progress",
  "platform": "Native C64 player routine",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: not found in SIDM2",
    "zero_page": "TODO: not found in SIDM2",
    "layout": "TODO: not found in SIDM2"
  },
  "entry": {
    "init": "= load (init at load address, e.g. $4000 or $8800) — confirmed on 3 HVSC files",
    "play": "= load+3 (e.g. $4003 or $8803) — confirmed on 3 HVSC files"
  },
  "speed": "TODO: not found in SIDM2",

  "data_format": {
    "order_list": "TODO: not found in SIDM2",
    "patterns": "TODO: not found in SIDM2",
    "instruments": "TODO: not found in SIDM2",
    "wavetable": "TODO: not found in SIDM2",
    "pulsetable": "TODO: not found in SIDM2",
    "filtertable": "TODO: not found in SIDM2"
  },
  "effects": {
    "encoding": "TODO: not found in SIDM2",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "identification": {
    "sidid_signature": "48 18 4A 4A 4A 4A 29 07 0A 0A 0A 48 0A 8D ?? ?? 68 18 6D ?? ?? 8D ?? ?? 68 (SIDId opcode fingerprint — the ONLY concrete data available; a code fragment, not a memory map)"
  },

  "quirks": [
    "Almost nothing is documented. SIDM2 does NOT reverse-engineer this player — the only trace of it there is the bundled third-party SIDId signature database (tools/sidid.cfg, tools/sidid.nfo). No memory map / entry points / data format / accuracy exist anywhere in SIDM2.",
    "Do NOT conflate with JCH *NewPlayer*, which IS documented (see jch-newplayer). This is JCH's earlier routine that NewPlayer succeeded.",
    "The one hard fact: JCH's later work records a 'Laxity hard restart adapted from my old player (anno 1989)' and SIDM2 notes 'JCH NewPlayer reverse-engineered from Laxity's player in 1988' — the early Laxity/JCH lineage is tangled and unresolved; do not assert a derivation without evidence."
  ],
  "sources": [
    "sidid:JCH_OldPlayer (author Jens-Christian Huus; no release/date/comment) — data/sidid.json and SIDM2 tools/sidid.nfo:700-701",
    "SIDM2:tools/sidid.cfg:975-976 (detection signature only)",
    "deepsid:players.json — JCH Editor v2.x/v3.x are the NewPlayer front-ends, NOT this player"
  ]
}
```

## Overview

JCH OldPlayer is Jens-Christian Huus's earlier C64 player routine, the
predecessor that [JCH NewPlayer](jch-newplayer.md) succeeded. It is included
here mainly to resolve the `successor_of` edge from the NewPlayer card — but be
warned: **there is almost no documented technical information about it.**

## Quirks & gotchas

- **Near-zero coverage.** SIDM2 — despite being a deep C64 player-disassembly
  project — has done no reverse engineering of JCH OldPlayer. The only trace is
  the third-party **SIDId** detection signature it bundles (a byte-pattern
  fingerprint, recorded under `identification` above), which lets a file be
  *detected* as OldPlayer but says nothing about its internals.
- **Not JCH NewPlayer.** Everything substantial in the "JCH" space concerns the
  *NewPlayer* — keep them separate.

## Disassembly notes

Genuinely open. This is a from-scratch disassembly target with no head start.
Use the [playbook](../playbooks/disassemble-a-player.md), and the SIDId
signature above as the detection anchor. Diffing against a NewPlayer disassembly
is the obvious lead (understanding what "New" changed), but the early
Laxity↔JCH lineage is murky — don't assume shared code.

## Verification

Not applicable yet — `status: stub`, no facts to verify. It exists as a node so
the graph's `jch-newplayer → jch-oldplayer` edge resolves and this player is
flagged as "known to exist, undocumented."

## Sources

- SIDId (`data/sidid.json` / SIDM2 `tools/sidid.nfo`): `JCH_OldPlayer`, author
  Jens-Christian Huus — no release date, reference, or comment.
- SIDM2 `tools/sidid.cfg` — the detection signature only.
