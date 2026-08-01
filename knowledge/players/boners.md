# Boners

```json
{
  "id": "boners",
  "name": "Boners",
  "aliases": ["Boners"],
  "authors": ["Lars Hoff (Shade) — inferred from tag/composer identity; not independently confirmed as the routine's actual author, and no source explains the tag name 'Boners'"],
  "released": "1988 (The Troopers) — confirmed directly from the CSDb webservice (type=sid, id=48481): 'Released': '1988 The Troopers'. The file is UsedIn CSDb release 32623 ('Omed Ylgu', a C64 One-File Demo, ReleaseYear 1988; AKA 'Ugly Demo'), and separately in release 32624 ('Datz Da Way', a C64 demo shown at the Rawhead/Bros/Suppliers 'Spydeberg' party, 26 Feb 1989) — the 1989 entry is a later reuse of the same tune, not its release date.",
  "status": "stub",
  "platform": "Native C64 — a personal built-in play routine embedded directly in the one tagged file's own data (local dataset's player_type for it is 'Normal built-in', i.e. an unrecognized/unnamed driver signature, not a catalogued tool — data/composers/lars-hoff.json). No SIDId entry and no dedicated CSDb tool/release page exist for a player or editor called 'Boners'. A CSDb scener handle 'Boners' does exist (csdb.dk/scener/?id=14408, credited 'Idea' on the release 'Mission Music'/'Mission Impossible' and 'Music' on 'Roundo') but no work on that profile credits a player/routine, so this is recorded as an unconfirmed, likely-coincidental lead, not evidence for the tag's origin — discarded rather than asserted.",
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
    "No SIDId entry exists for 'Boners' (checked data/sidid.json directly), and no source found explains the tag's name.",
    "A CSDb scener handle 'Boners' (csdb.dk/scener/?id=14408) surfaced during the web search but has no player/routine credit on that profile — treated as a discarded, likely-coincidental naming lead, not evidence of the tag's origin."
  ],
  "sources": [
    "CSDb sid entry 48481 ('Omed Ylgu', Lars Hoff, The Troopers, 1988, load $1000/init $1000/play $1085) via CSDb webservice type=sid: https://csdb.dk/webservice/?type=sid&id=48481 (human page: https://csdb.dk/sid/?id=48481)",
    "CSDb release 32623 ('Omed Ylgu', C64 One-File Demo, 1988, AKA 'Ugly Demo'): https://csdb.dk/release/?id=32623",
    "CSDb release 32624 ('Datz Da Way', C64 demo, shown at Rawhead/Bros/Suppliers party, Spydeberg, Norway, 26 Feb 1989 — a later reuse of the tune, not its release): https://csdb.dk/release/?id=32624",
    "CSDb scener profile — Lars Hoff/Prosonix: https://csdb.dk/scener/?id=2270",
    "CSDb scener profile — handle 'Boners' (id 14408; credited 'Idea' on release 'Mission Music', 'Music' on 'Roundo'; no player/routine credit found — discarded as a naming lead, not asserted): https://csdb.dk/scener/?id=14408",
    "CSDb release 37576 ('Mission Music'/'Mission Impossible', released by Boners & Fleabag): https://csdb.dk/release/?id=37576",
    "Local dataset: data/composers/lars-hoff.json — 1 file tagged 'Boners' (Omed_Ylgu.sid, player_type 'Normal built-in'); knowledge/COVERAGE.md rank #118",
    "data/sidid.json byTag — checked, no entry for 'Boners'",
    "data/players.json — checked, no entry for 'Boners'"
  ]
}
```

## Overview

`Boners` is a raw Player-ID tag covering exactly 1 file, "Omed Ylgu" by
Norwegian composer **Lars Hoff (Shade)**, released 1988 by the group The
Troopers — confirmed directly against the CSDb webservice's own `Released`
field for the SID entry (id 48481), not just the composer-json cache. The
local dataset classifies its `player_type` as "Normal built-in", i.e. a
personal play routine baked into the file rather than a catalogued,
named tool — consistent with the platform note. No SIDId entry, CSDb tool
page, or `csdb_release` exists for a distributed "Boners" player/editor.
A CSDb scener handle "Boners" (id 14408) turned up during the provenance
search but carries no player/routine credit on that profile, so it is
recorded as a discarded naming lead, not an asserted origin for the tag.
The file's PSID-header load/init/play addresses ($1000/$1000/$1085) were
read directly from its CSDb SID-entry page and are recorded as the only
concrete technical facts available, though they do not establish a real
memory map or player identity on their own.

## Quirks & gotchas

See the `quirks` array — a minimal, single-file personal routine with an
unexplained tag name (with one discarded naming lead — an unrelated CSDb
scener handle "Boners" with no player credit); the PSID-header entry
points are cited as public binary metadata, not a disassembly result.

## Disassembly notes

None done here beyond reading the PSID header off CSDb. Memory map, zero
page, data format, and effects are genuinely unknown and left `TODO`. A
representative starting point for real RE would be "Omed Ylgu" itself
(load $1000 / init $1000 / play $1085).

## Verification

**Not verified — `status: stub`.** Composer/release identity (including the
1988 release year, confirmed against the CSDb webservice directly rather
than only the local cache) and PSID-header metadata (not a disassembly)
are confirmed. No SIDId entry, `players.json` entry, or CSDb tool/release
page for "Boners" was found anywhere; a same-named CSDb scener handle was
found and explicitly discarded as an unsupported lead. No runtime fact
beyond the public PSID header was guessed.

## Sources

See the `sources` array — the CSDb SID-entry and release webservice
records, a CSDb scener profile, a discarded same-named scener-handle
lead, and local composer/player data.
