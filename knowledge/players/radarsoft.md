# Radarsoft

```json
{
  "id": "radarsoft",
  "name": "Radarsoft",
  "aliases": ["Radarsoft"],
  "authors": ["John Vanderaart", "Cees Kramer"],
  "released": "1984-1985 (Radarsoft's active C64 game period was 1984-1987)",
  "status": "stub",
  "platform": "Native C64 in-house music routine, embedded per-title in Radarsoft's own educational/game software (not a standalone editor/tracker released to the scene).",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: varies per title (e.g. $C000 in 'In den Beginne'/'Topografie Wereld', $2800 in 'Kruiswoord' per their CSDb SID entries) — not a fixed player memory map, no disassembly done",
    "zero_page": "TODO: no disassembly done",
    "layout": "TODO: no disassembly done"
  },
  "entry": {
    "init": "TODO: per-file PSID header only (e.g. $C0C0 'In den Beginne', $C000 'Topografie Wereld', $2803 'Kruiswoord' per CSDb) — inconsistent offsets relative to load between titles, so not confirmed as one fixed routine layout without real disassembly",
    "play": "TODO: per-file PSID header only (e.g. $C000 'In den Beginne', $C13A 'Topografie Wereld', $2800 'Kruiswoord' per CSDb) — same caveat as init"
  },
  "speed": "TODO: no disassembly done",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly done",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is NOT a released editor/tracker — no SIDId entry exists for the tag (checked data/sidid.json byTag, no match) and no CSDb group/release page for 'Radarsoft' as a music tool was found. It is a company house style/routine, used only in Radarsoft's own commercial titles.",
    "Radarsoft BV was a real Dutch software house (Alphen aan den Rijn, NL) founded 1984 by programmers John Vanderaart, Cees Kramer, Edwin Neuteboom and Leonardo Jacobs; it made C64/Amiga/Atari 8-bit/MSX/PC-DOS games and educational titles (topography quizzes, typing tutors) 1984-1987 before pivoting fully to educational software (c64-wiki.com/wiki/Radarsoft, en.wikipedia.org/wiki/Radarsoft).",
    "Composer concentration confirms the 'house routine' read: in this dataset, all 18 Radarsoft-tagged files split between just 3 composers — John Vanderaart (12 files, 67%), Cees Kramer (5 files), and 'Deadman' (1 file, a later '(new edit)' of 'Kapriolen', likely a scene-community rework rather than an original Radarsoft-era credit). Vanderaart and Kramer are two of Radarsoft's four co-founders, so the player was authored/used by the company's own programmers on their own games, not distributed as a public tool.",
    "File titles match Radarsoft's known catalogue exactly (Topografie Nederland/Europa/Wereld, Verkeersrally, Kruiswoord, Maps 64 U.S.A.) — cross-checked against Wikipedia/c64-wiki/Lemon64 game listings, confirming these SIDs are the in-game music of Radarsoft's own educational titles.",
    "CSDb per-file SID-entry pages show different load/init/play addresses across titles (e.g. load $C000 for 'In den Beginne' and 'Topografie Wereld' vs $2800 for 'Kruiswoord'; init/play offsets relative to load are also inconsistent between files) — this is expected for code embedded per-game rather than a shared relocatable player, but it also means these per-file PSID header values must NOT be treated as one fixed player memory map without an actual disassembly."
  ],
  "sources": [
    "Local dataset: 18 files tagged 'Radarsoft' across 3 composers (Cees Kramer, Deadman, John Vanderaart) — aggregated directly from data/composers/*.json",
    "Checked data/sidid.json byTag for a 'Radarsoft' entry — none found (no SIDId author/release/comment data for this tag)",
    "Checked data/players.json — no 'Radarsoft' entry (not one of DeepSID's curated 129 players)",
    "Radarsoft company history: https://en.wikipedia.org/wiki/Radarsoft",
    "Radarsoft company history: https://www.c64-wiki.com/wiki/Radarsoft",
    "John Vanderaart biography (Radarsoft co-founder, composer): search results citing https://en.everybodywiki.com/John_Vanderaart and MobyGames person page",
    "CSDb SID entry, 'In den Beginne' / John Vanderaart / 1984 Radarsoft: https://csdb.dk/sid/?id=29907",
    "CSDb SID entry, 'Topografie Wereld' / John Vanderaart / 1984 Radarsoft: https://csdb.dk/sid/?id=29904",
    "CSDb SID entry, 'Kruiswoord' / Cees Kramer / 1985 Radarsoft: https://csdb.dk/sid/?id=46509",
    "CSDb SID entry, 'Anonimus' / John Vanderaart / 1984 Radarsoft: https://csdb.dk/sid/?id=46576",
    "Topografie Wereld game background (Cees Kramer & John Vanderaart, Radarsoft, 1984): https://nl.wikipedia.org/wiki/Topografie_Wereld"
  ]
}
```

## Overview

Radarsoft is not a published editor or tracker — it is the in-house music
routine used by the Dutch software house **Radarsoft BV** (Alphen aan den
Rijn, Netherlands, founded 1984) in its own C64 games and educational
software. In this dataset the tag covers 18 files split between just three
composers, two of whom (**John Vanderaart** and **Cees Kramer**) were
Radarsoft's own co-founders/programmers; the third ("Deadman") is a single
later "(new edit)" track, likely a scene-community rework rather than an
original-era credit. The file titles line up exactly with Radarsoft's known
catalogue of geography/topography quiz games and other educational titles
(Topografie Nederland/Europa/Wereld, Verkeersrally, Kruiswoord). This is a
textbook small-composer-concentration case per the extraction template's
signal: a personal/company routine, not a widely distributed tool, and there
is no SIDId entry, no CSDb group page, and no public source for it.

## Quirks & gotchas

See the `quirks` array — the load-bearing points are: (1) no SIDId or CSDb
tool/group record exists for this tag, so identity comes entirely from
matching the composer roster against Radarsoft's real-world company history;
(2) composer concentration (2 of 3 composers are Radarsoft co-founders)
strongly supports "in-house routine" over "published tool"; (3) per-file CSDb
PSID header data (load/init/play) is inconsistent across titles, so it must
not be mistaken for one fixed player memory map — that would need an actual
disassembly to confirm or refute.

## Disassembly notes

None performed. No public source or disassembly of a Radarsoft-tagged `.sid`
was found; only PSID header metadata (load/init/play addresses, data size)
visible per-file on individual CSDb SID-entry pages was consulted, and those
values disagree between titles (see quirks), so they are recorded as
per-file observations only, not as a card-level memory map. A future pass
could disassemble one representative file (e.g. "Topografie Wereld", CSDb
id 29904) and trace it through `sidm2-siddump` to establish real facts.

## Verification

**Not verified — `status: stub`.** Identity (authors, company history,
composer roster) is confirmed from Wikipedia, c64-wiki.com, and CSDb SID
entries. Every runtime field is `TODO`: no disassembly exists, and the
inconsistent per-file load/init/play addresses seen on CSDb argue against
guessing a shared layout.

## Sources

See the `sources` array — Wikipedia and c64-wiki.com for Radarsoft company
history, individual CSDb SID entries for the composer/release attribution
of specific tracks, and this project's own dataset (`data/composers/*.json`)
for file counts and composer concentration. No
SIDId (`data/sidid.json`) or curated DeepSID (`data/players.json`) entry
exists for this tag.
