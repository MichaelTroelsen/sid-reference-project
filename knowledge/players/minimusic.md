# Mini Music Editor

```json
{
  "id": "minimusic",
  "name": "Mini Music Editor",
  "aliases": ["MiniMusic"],
  "authors": ["Balazs Farkas (Brian)"],
  "released": "1990 (24 July 1990, Tomcat)",
  "status": "stub",
  "platform": "Native C64 tool — a self-contained editor + replay routine, distributed on a single D64 disk image (music/editor combo, not a cross-platform tracker).",
  "csdb_release": 55790,

  "memory": {
    "load_address": "TODO: $xxxx (no public source or disassembly found)",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO: $xxxx",
    "play": "TODO: $xxxx"
  },
  "speed": "TODO: frame-driven vs CIA/multispeed unknown",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public documentation or source found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Small, narrowly-used tool: only 8 files in this project's dataset use it (MUSICIANS/ tree only), across just 3 composers, and 5 of those 8 (62.5%) are by Brian himself — the tool's own author. The other two composers (Freeze, Locust) contribute 1 and 2 files respectively. This composer concentration is the signature of a personal/small-scene routine that saw very limited outside adoption, not a widely-published tracker.",
    "CSDb credits 'Code: Brian of Tomcat' and 'Music: Drax of Crest, Vibrants' on the release itself (the demo SID bundled with the editor, 'Warriors', is by Drax) — so the editor's one on-CSDb demonstration tune isn't even by Brian, even though most of the collection's tagged files are.",
    "No public source code, disassembly, or format documentation was found (CSDb release page, Codebase64, general web search) — this is a closed/undocumented classic-era tool, not source-available like odintracker or goattracker. Every runtime field below is honestly TODO rather than guessed.",
    "Distributed as a single D64 (`MME_TOMCAT.d64`) containing both editor and player, per CSDb's download listing — typical of a self-contained late-80s/1990 C64 music tool, but confirms there's no separate 'source' artifact to read, only the binary disk image."
  ],
  "sources": [
    "CSDb release (Mini Music Editor V1.2, aka 'TOMCAT music player & editor', Brian of Tomcat, 24 Jul 1990): https://csdb.dk/release/?id=55790",
    "sidid:MiniMusic (name 'Mini Music Editor', author Balazs Farkas (Brian), released '1990 Tomcat', reference csdb.dk/release/?id=55790) — data/sidid.json, cross-checked against https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 8 files tagged MiniMusic across 3 composers (Brian, Freeze, Locust) — see knowledge/COVERAGE.md and data/composers/*.json"
  ]
}
```

## Overview

Mini Music Editor (Player-ID tag `MiniMusic`) is a native Commodore 64 music
editor + replay routine written by Balazs Farkas (Brian) of the group Tomcat,
released 24 July 1990 as a single D64 disk image (`MME_TOMCAT.d64`), bundled
with a demo tune ("Warriors") composed by Drax. In this project's dataset it
is a minor player: 8 tagged files across only 3 composers, and the large
majority (5 of 8) are by Brian himself — the classic signature of a
personal/small-circle tool rather than a widely-adopted tracker. No public
source, disassembly, or format documentation was located, so this card is
identity-only.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: this is a **very lightly
used, likely personal** tool (62.5% of tagged files are the author's own),
and it is **closed/undocumented** — no source zip or write-up was found
anywhere searched (CSDb, Codebase64, general web), unlike source-available
peers such as [odintracker](odintracker.md). Every runtime field is therefore
an honest `TODO`.

## Disassembly notes

None. No public source or prior disassembly was found. A future pass would
need to pull a representative `MiniMusic`-tagged `.sid` from HVSC (or the
bundled `MME_TOMCAT.d64` itself) and disassemble the init/play routines from
its PSID header, then trace through `sidm2-siddump` — that is the only route
to real memory-map/format facts here, since there is nothing else to read.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release date/group, CSDb release, dataset usage/composer concentration) are
confirmed, from the CSDb release page and the cached SIDId entry (cross-checked
against the upstream `sidid.nfo`). All memory/entry/format/effect fields are
`TODO` because no source or disassembly exists to read.

## Sources

See the `sources` array — the CSDb release page (id 55790) and the cached
SIDId entry, cross-checked against the upstream `cadaver/sidid` repo. Local
usage figures from `data/composers/*.json` / `knowledge/COVERAGE.md`.
