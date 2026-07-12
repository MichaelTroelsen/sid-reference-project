# Zetrex / YP (shared $E000 player)

```json
{
  "id": "zetrex-yp",
  "name": "Zetrex / YP (shared $E000 player)",
  "aliases": ["Zetrex", "Yield Point", "YP", "Zetrex-YP"],
  "authors": ["TODO"],
  "released": "1987-1988 (Racer 1987 '1987 Yield Point Music'; Jewels/Waste 1988 'Zetrex')",
  "status": "stub",
  "platform": "Native C64 player routine — pre-NP21, one shared binary loaded at $E000 across at least 3 files under 2 different scene labels",
  "csdb_release": null,

  "memory": {
    "load_address": "$E000 (Jewels, Waste, and Racer all load here)",
    "zero_page": "Per-file: Jewels $FE/$FF, Waste $FE/$FF, Racer $1B/$1C",
    "layout": "35-byte init pattern at binary offset 9, shared with the broader 'Vibrants V20' detector gate. Per-voice stream pointer table (ptr-lo/ptr-hi, file-specific): Jewels $E849/$E859, Waste $E961/$E96C, Racer $E849/$E86C. Per-voice current-note scratch at $E51C+X; frequency LUT at $E447 (lo) / $E448 (hi)."
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO — same general shape as wizax-a (pointer-table + ZP-indirect per-voice stream), but the specific byte encoding has not been confirmed for this player.",
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
    "shares_routine_with": ["wizax-a"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "'Zetrex/YP' combines two different scene labels into one player: 'Zetrex' (Jewels 1988, Waste 1988) and 'Yield Point Music' (Racer 1987) — SIDM2's detector module treats all three files as one shared player based on matching code signature (the 35-byte init pattern), not on the scene-group name. Don't assume the name implies a single author or group.",
    "CONTRADICTS ITSELF ACROSS SIDM2's OWN DOCS, unresolved as of this card: an older SIDM2 memory note (vibrants-2000ad-cluster-re.md) lists Zetrex-YP as having 'real F1' editor wiring; the more recent docs/players/CLUSTERS.md (dated 2026-07-05, v3.13.1 per SIDM2's changelog) instead says 'V20-gate recovery (audio only); editor view empty.' This card records both rather than silently picking one — treat CLUSTERS.md as the more authoritative/current source per SIDM2's own documentation practice, but verify directly before relying on either claim.",
    "Shares the same false-positive detector history as wizax-a: the Wizax-A/Zetrex-YP detector pair originally over-matched 22 of 27 unrelated Laxity NP21 files on a too-common signature, corrupting their data; fixed by gating on a broader 'Vibrants V20 class' copyright-string + size check.",
    "Belongs to SIDM2's 'V20 umbrella' (pre-NP21 Vibrants/Laxity-era variants, 1987-1990) alongside wizax-a — unrelated to JCH NewPlayer V20 (see jch-newplayer-v20.md)."
  ],
  "sources": [
    "SIDM2:docs/players/CLUSTERS.md",
    "SIDM2:sidm2/zetrex_yp_detector.py",
    "SIDM2 memory:v3.5.26-wizax-false-positive.md",
    "SIDM2 memory:vibrants-v20-findings.md",
    "SIDM2 memory:vibrants-2000ad-cluster-re.md (contains the contradicting older 'real F1' claim — see quirks)"
  ]
}
```

## Overview

Zetrex/YP is SIDM2's name for one player binary shared across three files
under two scene labels — "Zetrex" (Jewels, Waste, both 1988) and "Yield Point
Music" (Racer, 1987) — all loading at the same address, $E000. Like
[Wizax-A](wizax-a.md), it belongs to SIDM2's pre-NP21 "V20 umbrella" of
1987-1990 Vibrants/Laxity-era player variants, and shares that player's
false-positive detection history.

## Quirks & gotchas

See the `quirks` array above — most important: SIDM2's own documentation
**contradicts itself** on whether this player's editor view (F1) actually
works. This card records the contradiction explicitly rather than resolving
it by guesswork; verify directly against the current SIDM2 codebase before
relying on either claim.

## Disassembly notes

Confirmed via the shared 35-byte init pattern (binary offset 9) across all
three files, plus per-file stream-pointer table addresses and ZP pairs. No
data-format (note/duration/command byte) encoding has been independently
confirmed for this player — unlike Wizax-A, where sampled streams were
inspected.

## Verification

Unclear — see the contradiction noted above. `status: stub`; no `mcp-c64`
re-run performed here.

## Sources

See the `sources` array.
