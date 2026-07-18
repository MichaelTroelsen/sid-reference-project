# Boners

```json
{
  "id": "boners",
  "name": "Boners",
  "aliases": ["Boners"],
  "authors": ["Lars Hoff (Shade) — inferred from tag/composer identity; not independently confirmed as the routine's actual author, and no source explains the tag name 'Boners'"],
  "released": "TODO: sole locally-tagged file, 'Omed Ylgu', was released 1988 by the group The Troopers (per CSDb)",
  "status": "stub",
  "platform": "TODO: no SIDId entry or CSDb tool page found for a tool or group called 'Boners'. CSDb's own SID-entry page for the one tagged file lists only composer (Lars Hoff) and releasing group (The Troopers, 1988) — no mention of 'Boners' anywhere in that record.",
  "csdb_release": null,

  "memory": {
    "load_address": "$1000 — read directly from CSDb's SID-entry page (PSID header metadata, csdb.dk/sid/?id=48481), not a disassembly",
    "zero_page": "TODO: not disassembled",
    "layout": "TODO: not disassembled"
  },
  "entry": {
    "init": "$1000 — PSID header value from the same CSDb SID-entry page; not independently distinguished from the load address by any disassembly",
    "play": "$1085 — PSID header value from the same CSDb SID-entry page"
  },
  "speed": "TODO: not disassembled (PSID header gives no speed/timing detail beyond entry points)",

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
    "1 file, 1 composer (Lars Hoff, handle Shade, Norway; credited to the group The Troopers on this release, though his CSDb scener profile is more broadly associated with Prosonix) — a personal routine.",
    "The load ($1000), init ($1000), and play ($1085) addresses above are read directly from the file's own CSDb SID-entry page (compiled-binary PSID header metadata, not a reverse-engineered fact) — the same category of evidence used on [[msb]]'s card, kept as a citable fact rather than a guess, but not enough on its own to establish a real memory map or calling convention.",
    "No SIDId entry exists for 'Boners' (checked data/sidid.json directly), and no source found explains the tag's name."
  ],
  "sources": [
    "CSDb sid entry 48481 ('Omed Ylgu', Lars Hoff, The Troopers, 1988, load $1000/play $1085): https://csdb.dk/sid/?id=48481",
    "CSDb scener profile — Lars Hoff/Prosonix: https://csdb.dk/scener/?id=2270",
    "Local dataset: data/composers/lars-hoff.json — 1 file; knowledge/COVERAGE.md rank #118",
    "data/sidid.json byTag — checked, no entry for 'Boners'"
  ]
}
```

## Overview

`Boners` is a raw Player-ID tag covering exactly 1 file, "Omed Ylgu" by
Norwegian composer **Lars Hoff (Shade)**, released 1988 by the group The
Troopers. No SIDId entry, CSDb tool page, or other source explains the tag
name — it does not correspond to any named group or tool found in this
pass. The file's PSID-header load/init/play addresses ($1000/$1000/$1085)
were read directly from its CSDb SID-entry page and are recorded as the
only concrete technical facts available, though they do not establish a
real memory map or player identity on their own.

## Quirks & gotchas

See the `quirks` array — a minimal, single-file personal routine with an
unexplained tag name; the PSID-header entry points are cited as public
binary metadata, not a disassembly result.

## Disassembly notes

None done here beyond reading the PSID header off CSDb. Memory map, zero
page, data format, and effects are genuinely unknown and left `TODO`. A
representative starting point for real RE would be "Omed Ylgu" itself
(load $1000 / init $1000 / play $1085).

## Verification

**Not verified — `status: stub`.** Only composer/release identity and
PSID-header metadata (not a disassembly) are confirmed. No SIDId entry
exists, and no tool/group named "Boners" was found anywhere. No runtime
fact beyond the public PSID header was guessed.

## Sources

See the `sources` array — a CSDb SID-entry page, a CSDb scener profile,
and local composer data.
