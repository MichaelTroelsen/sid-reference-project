# Prosonix (Music Editor)

```json
{
  "id": "prosonix",
  "name": "Prosonix (Music Editor)",
  "aliases": ["Prosonix", "Prosonix Music Editor", "SteinTronic"],
  "authors": ["Stein Pedersen"],
  "released": "1988 (Prosonix)",
  "status": "in-progress",
  "platform": "Native C64 music editor + bundled replay routine, used within the Norwegian group Prosonix. Closed (D64 binary only).",
  "csdb_release": 179618,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "The 'Prosonix' tag = the Prosonix Music Editor (also listed as 'SteinTronic'), code+music by Stein Pedersen, 1988. SIDId comment: 'Used by several people within the Prosonix music group' — so it marks the group's shared in-house system, not a single composer's personal routine. Usage matches: 131 files across just 4 composers (Stein Pedersen, Lars Hoff, Lynx, Ole Marius Pettersen — the Prosonix members).",
    "Prosonix is a Norwegian C64 music group (CSDb group #810, Demozoo #1251). Minor date discrepancy: SIDId/Demozoo say the group formed 1988; CSDb group #810 says est. 1989 — the editor is dated 1988.",
    "REPO CACHE BUG (worth fixing): data/csdb/prosonix.json holds a stale/mismatched scener record ('Peter Steiner', Germany) under csdbId 810 — but csdbId 810 is the Norwegian GROUP Prosonix, not a person.",
    "Stein Pedersen later authored the separate modern SIDdecompiler (2017/2019) — a different tool, not this replay.",
    "Replay internals all UNKNOWN — TODO."
  ],
  "sources": [
    "sidid.nfo (author/year/comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release 179618 (the editor D64, credits): https://csdb.dk/release/?id=179618",
    "CSDb group 810 / Demozoo 1251 (group identity): https://csdb.dk/group/?id=810 ; https://demozoo.org/groups/1251/",
    "sidid:Prosonix (Stein Pedersen, 1988 Prosonix)",
    "Local dataset: 131 files tagged Prosonix, 4 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The "Prosonix" tag is the **Prosonix Music Editor** (aka SteinTronic) by **Stein
Pedersen**, 1988 — the shared in-house music system of the Norwegian group
Prosonix. Its footprint is tight: 131 files across just its 4 group members.

## Quirks & gotchas

See the `quirks` array — it's a **group-internal shared tool** (hence 4
composers), and there's a **repo cache bug** to fix (`data/csdb/prosonix.json`
has a wrong scener record under the group's csdbId). Internals `TODO`.

## Disassembly notes

None; internals undocumented. Disassemble a Prosonix `.sid` or the D64 editor.

## Verification

**Playback + entry points LOCALLY CONFIRMED (2026-07-13) — `status: in-progress`.** Traced a real HVSC Prosonix `.sid` (load $E000, init $E000, play $E009, 46 register writes / 50 frames) — the replay runs; entry addresses are per-file. Author, year, group, and shared-tool nature
confirmed; all runtime fields `TODO`.

## Sources

See the `sources` array — SIDId, the CSDb editor release, and CSDb/Demozoo
group pages.
