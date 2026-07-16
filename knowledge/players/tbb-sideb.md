# TBB/SideB

<!--
  id = kebab-case, matches the "id" field below and the filename.
-->

```json
{
  "id": "tbb-sideb",
  "name": "TBB/SideB",
  "aliases": ["TBB/SideB"],
  "authors": ["Tero Hilpinen (TBB)"],
  "released": "TODO: no formal release year found for the routine itself; earliest attested use in the collection is 1994 (AMJ's \"Blasphemy\", group Side B — https://csdb.dk/sid/?id=7771)",
  "status": "stub",
  "platform": "TODO: appears to be a native-C64, in-house player routine written by TBB (Tero Hilpinen) for the Finnish group Side B/Extend — no standalone editor, packaged tool, or CSDb tool release was found (see Overview). Not confirmed as cross-platform or native beyond that inference.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: varies by tune ($1000 seen on multiple files, but not confirmed as a fixed player load address — see Quirks)",
    "zero_page": "TODO: not disassembled",
    "layout": "TODO: not disassembled"
  },
  "entry": {
    "init": "TODO: not disassembled (init addresses observed on CSDb are inconsistent across users, see Quirks)",
    "play": "TODO: not disassembled"
  },
  "speed": "TODO: not disassembled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no source or documentation found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId's own index (sidid.nfo) carries only an AUTHOR field for this tag — no Name/Released/Reference/Comment. Confirmed by fetching the raw entry from https://github.com/cadaver/sidid/blob/master/sidid.nfo directly (block reads exactly 'TBB/SideB / AUTHOR: Tero Hilpinen (TBB)', nothing else). This is consistent with an unpublished, in-house routine rather than a distributed tool: no CSDb release ID exists for the player/tool itself (only for individual .sid tunes that use it).",
    "Extremely concentrated usage: 94 files in this collection tag as TBB/SideB, spread across only 4 composers (per data/composers/*.json): Barracuda/Toni Nisula 57 (61%), AMJ/Juha-Matti Hilpinen 21 (22%), TBB/Tero Hilpinen himself 11 (12%), Page/Toni Hilpinen 5 (5%). Per HVSC Musicians.txt, TBB, AMJ, and Page are three siblings surnamed Hilpinen, all members of group Side B ('AMJ (Audio Master J) (Hilpinen, Juha-Matti) / Side B', 'Page (Hilpinen, Toni) / Side B / Deathsector', 'TBB (Hilpinen, Tero) / Side B & Extend' — https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt). This reads as a personal/family routine used inside one group, not a widely published tool — textbook 'small-scene routine' per the concentration heuristic in knowledge/EXTRACTION-TEMPLATE.md.",
    "Barracuda (Toni Nisula, Finland) is the outlier: he is not a Hilpinen, but per CSDb he is credited to group Extend (https://csdb.dk/group/?id=173), the same group TBB himself was a founding member of ('The Beasty Boy' is listed as one of Extend's seven founders, established 1989-12-12) and is explicitly tagged alongside in TBB's own HVSC line ('Side B & Extend'). Barracuda's tunes tagged TBB/SideB in this collection date as late as ~2015-2025 (composer profile active year 2025), decades after TBB's own 1990s tunes — suggesting the routine/tune template was handed down or reused within the Side B/Extend circle long after TBB's own active period, though this is an inference from group overlap, not a documented statement.",
    "Load/init/play addresses checked on CSDb are NOT consistent across the four composers' tunes, so identical-binary reuse is not confirmed: TBB's 'Tribute 2 Sinatra' (https://csdb.dk/sid/?id=27958) is load $1000 / init $1000 / play $1003, and Barracuda's 'Aerial Core' (https://csdb.dk/sid/?id=52301) matches exactly ($1000/$1000/$1003) — but AMJ's 'SYS4096' (https://csdb.dk/sid/?id=7787) is load $1000 / init $2656 / play $265F, a different init/play pair. Do not assume a single fixed entry point without checking more files."
  ],
  "sources": [
    "SIDId sidid.nfo, tag TBB/SideB, author-only entry — https://github.com/cadaver/sidid/blob/master/sidid.nfo ; mirrored locally at data/sidid.json (byTag['TBB/SideB'])",
    "Local dataset: 94 files across 4 composers tagged TBB/SideB (see knowledge/COVERAGE.md, row 18; counted directly from data/composers/*.json)",
    "HVSC Musicians.txt handle/group entries for TBB, AMJ, and Page — https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb group page for Extend (Finland), founding members incl. 'The Beasty Boy' (TBB) — https://csdb.dk/group/?id=173",
    "CSDb SID entries checked individually: Tribute 2 Sinatra (TBB, 1998) https://csdb.dk/sid/?id=27958 ; Viidakko (TBB, 1996) https://csdb.dk/sid/?id=27959 ; Blasphemy (AMJ, 1994) https://csdb.dk/sid/?id=7771 ; SYS4096 (AMJ, 1995) https://csdb.dk/sid/?id=7787 ; Aerial Core (Barracuda, 2015) https://csdb.dk/sid/?id=52301"
  ]
}
```

## Overview

TBB/SideB is the Player-ID signature for a music replay routine attributed to
Tero Hilpinen (handle TBB, "The Beasty Boy"), a Finnish musician and founding
member of the demo/cracker group Extend (est. 1989-12-12) who was also active
in group Side B. In this collection it tags 94 files across just 4 composers,
almost all of them Hilpinen family members or close Side B/Extend groupmates
(see `quirks`) — the textbook profile of a personal or small-group in-house
routine rather than a widely distributed editor. No CSDb release entry, no
public source, and no format documentation were found for the tool itself;
SIDId's own index carries nothing beyond the author's name. This card exists
to record that identity and usage picture accurately, not to claim any
engine-level knowledge — every runtime field below is honestly `TODO`.

## Quirks & gotchas

See the `quirks` array in the JSON block: the SIDId entry is author-only (no
release/reference), usage is concentrated in one Finnish family/group
(Hilpinen siblings TBB/AMJ/Page plus groupmate Barracuda), and spot-checked
load/init/play addresses on CSDb are inconsistent across composers, so no
single fixed entry point should be assumed.

## Disassembly notes

None. No public source or standalone tool release was located to disassemble;
only individual `.sid` tunes exist. A future pass would need to pick a
representative tune (e.g. `Tribute_2_Sinatra.sid`, TBB's own, csdb id 27958)
and disassemble its embedded player directly — there is no separate editor
binary to start from.

## Verification

**Not verified — `status: stub`.** Only identity and usage facts are
established (SIDId author field, HVSC Musicians.txt group memberships, CSDb
release metadata for a handful of individual tunes, and local file/composer
counts). No memory map, entry point, or data format has been confirmed by
disassembly; nothing here should be treated as more than provenance.

## Sources

See the `sources` array — SIDId's `sidid.nfo` (via the public `cadaver/sidid`
GitHub mirror), local `data/composers/*.json` aggregation, HVSC
`Musicians.txt`, and individual CSDb SID/group pages cited above.
