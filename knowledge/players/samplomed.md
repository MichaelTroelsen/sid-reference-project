# Samplomed

```json
{
  "id": "samplomed",
  "name": "Samplomed",
  "aliases": ["Samplomed"],
  "authors": ["TODO: no author credited anywhere found — see quirks"],
  "released": "TODO: no confirmed tool-release date. Full CSDb census of all 11 tagged files' own `Released` fields (2026-07-31): the 6 'Astovel & Ksin' co-productions are earlier, each 'Released: 1996 Tengu'; the 5 Astovel-solo tracks are each 'Released: 1997 Tengu' and are all Prodigy-song covers collected into the Nov-1997 Tengu release 'The Prodigy Sample' AKA 'The Fat of the Land' (csdb.dk/release/?id=167959). So earliest attested use is 1996, not the 1997-first ordering the card previously guessed from a partial read — this corrects that.",
  "status": "stub",
  "platform": "TODO: no manual/source found, so still not directly documented, but one real corroborating fact: 'Samplomed' is a genuine 6502 machine-code byte signature in cadaver/sidid's own `sidid.cfg` (upstream source of the SIDId tool that inspired this project's data/sidid.json) — `C6 01 4A 4A 4A 4A 8D 18 D4 A4 05 88 D0 FD E6 01 B1 02 C6 01`, https://raw.githubusercontent.com/cadaver/sidid/master/sidid.cfg (line 1715). That confirms this is a real in-file native-C64 play routine, not merely a DeepSID label with nothing behind it — but the signature carries no author/date/version metadata, so 'native C64' is corroborated rather than fully documented, and is left TODO-qualified.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no disassembly done",
    "zero_page": "TODO: no disassembly done",
    "layout": "TODO: no disassembly done"
  },
  "entry": {
    "init": "TODO: no disassembly done",
    "play": "TODO: no disassembly done"
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
    "Not in SIDId's sidid.nfo (data/sidid.json byTag has no 'Samplomed' key — checked directly) and not in the curated data/players.json (129 DeepSID entries) — this is a raw DeepSID-dump player tag with zero cross-referenced metadata anywhere in this project's local data. BUT it IS a real entry in the upstream cadaver/sidid project's own sidid.cfg (the source config SIDId itself ships/builds from) — see sources. The project's local sidid.json import is evidently a snapshot that dropped or predates this entry; the string is not a DeepSID-invented label.",
    "Extreme composer concentration: ALL 11 tagged files in the collection are by a single composer, Astovel (Piotr Wojciechowski, Poland, HVSC MUSICIANS/A/Astovel — see data/composers/astovel.json). 5 are solo, 6 are co-credited 'Astovel & Ksin'. Per the project's concentration heuristic (single-composer families are 'likely a personal/small-scene routine'), this reads as Astovel's own routine rather than a published, widely-adopted tool.",
    "One tagged file is explicitly titled 'Trance (digi)' and DeepSID's per-file player_type is the constant 'Normal built-in' for all of them (uninformative — see CLAUDE.md note on this field) — consistent with, but not proof of, a sample/digi-playback player rather than a tone-only tracker; the name 'Samplomed' itself plausibly reads as sample-related but no source ties the name to a documented tool, so this is not asserted as fact.",
    "Extensive web research (CSDb full-text search, WebSearch, Player-ID's own README on GitHub, Lemon64/Forum64-targeted search) found zero hits for the string 'Samplomed' anywhere outside this project's dataset and the cadaver/sidid signature file. Astovel's CSDb scener page (id 3911) lists real tool credits — 'Music Toolz' (1995 and 1997, Tengu), 'Total Sinus Editor', 'Raster Master V2.0', 'Font Designer V1.0' — but none of those release titles or descriptions mention 'Samplomed', so no edge is asserted to any of them.",
    "The 11 tagged .sid files themselves (e.g. csdb.dk/sid/?id=55815 'Breathe') carry no player/tool credit on their own CSDb SID-entry pages either — checked directly.",
    "Re-research pass, 2026-07-31: full census of all 11 tagged files' own CSDb `Released` fields (via scripts/lib/csdb-client.js, type=sid) — all read 'Released: 1996 Tengu' (6 co-productions, csdb_ids 61972-61978) or 'Released: 1997 Tengu' (5 solo, csdb_ids 55811-55815); no per-tune Released field is missing or contradictory. Also censused Tengu's full 49-release list (csdb.dk group id 597) and both 'Music Toolz' tool collections (1995 id 120687, 1997 id 95173) that credit Astovel — none is titled or credits 'Samplomed' as a tool, so `csdb_release` stays confirmed-null rather than merely unchecked. Negative results only; no fact in this card changed except the released-field correction noted above and the platform corroboration below."
  ],
  "sources": [
    "Local dataset: data/composers/astovel.json — 11 files tagged 'Samplomed', all by Astovel (solo or with Ksin); knowledge/COVERAGE.md rank #15, 11 files, single grouped raw tag 'Samplomed'",
    "data/sidid.json byTag — checked, no 'Samplomed' entry (negative result, cited as a fact above)",
    "data/players.json — checked, no 'Samplomed' curated entry; the only 'samplomed' string in that file is an unrelated search-exclusion regex on 'The Advanced Music Programmer' entry (excludes false 'amp' substring matches)",
    "CSDb scener profile, Astovel (Piotr Wojciechowski), id 3911: https://csdb.dk/scener/?id=3911 — full release/tool credit list checked, no 'Samplomed' mention",
    "CSDb SID entry, 'Breathe' by Astovel, id 55815: https://csdb.dk/sid/?id=55815 — no player credited",
    "CSDb search (https://csdb.dk/search/) for 'Samplomed': zero results",
    "Player-ID project README (github.com/WilfredC64/player-id): zero mentions of 'Samplomed'",
    "cadaver/sidid, sidid.cfg (upstream SIDId signature source): https://raw.githubusercontent.com/cadaver/sidid/master/sidid.cfg, line 1715 — 'Samplomed' entry with byte signature 'C6 01 4A 4A 4A 4A 8D 18 D4 A4 05 88 D0 FD E6 01 B1 02 C6 01', no author/date/version metadata attached",
    "CSDb webservice census (2026-07-31), type=sid, all 11 csdb_ids from astovel.json's Samplomed-tagged files (55811-55815, 61972-61974, 61976-61978): each file's own `Released` field read directly, see quirks",
    "CSDb webservice, type=release id=167959 'The Prodigy Sample' AKA 'The Fat of the Land' (Tengu, Nov 1997): https://csdb.dk/release/?id=167959 — collection the 5 solo Samplomed-tagged tracks were used in",
    "CSDb webservice, type=group id=597 Tengu, depth=2: full 49-title release list checked for any 'Samplomed'-named release — none found",
    "CSDb webservice, type=release id=120687 'Music Toolz' (1995, Tengu) and id=95173 'Music Toolz #2' (1997, Tengu): both credit Astovel, neither includes a tool named 'Samplomed'"
  ]
}
```

## Overview

Samplomed is a raw DeepSID-dump player-identification tag absent from this
project's local `sidid.json`/`players.json`, but confirmed as a real,
independently-defined entry elsewhere: cadaver/sidid's own upstream
`sidid.cfg` (the source config for the SIDId tool) carries a "Samplomed" byte
signature with no author/date/version attached. No web search (CSDb
full-text search, general web search, Player-ID's README, Lemon64/Forum64)
turned up the string as a named, documented tool anywhere. What IS known
comes from the local dataset plus a full CSDb census of all 11 tagged files:
they belong to a single composer, Astovel (Piotr Wojciechowski, Poland, CSDb
scener id 3911) — five solo tracks (each `Released: 1997 Tengu`, all Prodigy
covers collected into Tengu's Nov-1997 "The Prodigy Sample" AKA "The Fat of
the Land") and six earlier "Astovel & Ksin" co-productions (each
`Released: 1996 Tengu`). That correction matters: the co-productions are the
*earlier* attested use, not later as a prior partial read of the card
guessed. A single-composer concentration this tight reads as a personal or
small-scene routine, not a widely-published tool. Astovel's CSDb profile and
Tengu's full 49-release list (including both "Music Toolz" tool collections
crediting Astovel) list real tool-coding credits, but none is titled or
described as "Samplomed", so no lineage edge is asserted.

## Quirks & gotchas

See the `quirks` array. The load-bearing point: this card exists to record a
genuine dead end honestly, not to guess one. Every avenue this project's
Tier 2 process normally uses (SIDId, curated players.json, CSDb release/scener
pages, general search) came back empty for the name itself; the only solid
ground is the Tier 1 usage data (composer, file count, dates) already in this
repo.

## Disassembly notes

None. No source or public disassembly was located to read. A future pass
could disassemble one of the 11 tagged `.sid` files directly (e.g. "Breathe",
csdb.dk/sid/?id=55815) via its PSID header init/play addresses and trace it
through `sidm2-siddump` — that is the only remaining route to real memory/
format facts, since no name-based documentation exists.

## Verification

**Not verified — `status: stub`.** Platform is still not fully documented,
but is now partially corroborated: the cadaver/sidid signature confirms
"Samplomed" is a real machine-code play routine embedded in the tagged
`.sid` files, not just a DeepSID label — strong circumstantial support for
"native C64" without a source or manual to state it outright, so it stays
`TODO`-qualified rather than asserted flatly. `released` likewise stays
`TODO` as a *tool* release date (no source states one) but the Overview and
quirks now carry a full, censused per-tune date range (1996-1997) rather
than a partial read. The Tier 1 usage facts (composer, file count,
co-credits) remain solid, cited directly from `data/composers/astovel.json`.
A 2026-07-31 re-research pass found no new positive facts about the tool
itself — only the census correction and the sidid.cfg corroboration above.

## Sources

See the `sources` array — the local dataset (`data/composers/astovel.json`,
`data/sidid.json`, `data/players.json`, `knowledge/COVERAGE.md`) and the CSDb
pages checked (scener 3911, sid entry 55815, and a direct CSDb search), all of
which are negative results for the name "Samplomed" itself, cited as such.
