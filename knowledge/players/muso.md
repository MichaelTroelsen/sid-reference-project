# Muso

```json
{
  "id": "muso",
  "name": "Muso",
  "aliases": ["Muso"],
  "authors": ["Tony Reihana (per SIDId; not independently corroborated — see quirks)"],
  "released": "SIDId gives '1985'; the specific CSDb release SIDId references (id 156826) is a 'C64 Crack' page crediting only the crackers, not an original author",
  "status": "stub",
  "platform": "TODO: unclear whether this is a distinct C64 music tool named 'Muso' by Tony Reihana, or the tag has been conflated with an unrelated same-named German 1985 program 'Muso 64' by Martin Wernecke & Rüdiger Wenski (Happy-Computer) — see quirks. Not resolved here.",
  "csdb_release": 156826,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId gives author 'Tony Reihana', released '1985', reference CSDb release 156826, no NAME/comment. Fetching that CSDb page directly shows: title 'Muso', type 'C64 Crack', group '1001 Crew', credited crackers 'Honey of 1001 Crew and NH Soft' — NO mention of Tony Reihana anywhere on the page. This is NOT necessarily a contradiction: CSDb crack-release pages typically only credit the crackers, not the original software's author, so the absence of Tony Reihana's name there does not disprove SIDId's attribution — but it also does not confirm it. Treat SIDId's authorship claim as unverified, not false.",
    "A DIFFERENT, LIKELY UNRELATED same-named program was found during research: CSDb SID entry 41399, 'Muso 64', by Martin Wernecke & Rudiger Wenski, 1985, published via the German magazine Happy-Computer — a name coincidence (same title, same year) with no evidence connecting it to Tony Reihana or to this Player-ID tag. Explicitly NOT asserted as the same tool.",
    "Composer mismatch: the 2 locally-tagged files here are BOTH by 'Kyle Hodgetts' (Star Soldier, Pingo), NOT by Tony Reihana. This is consistent with Muso being a genuinely distributed 1985 commercial/type-in tool that outlived its original author's own use — Hodgetts using someone else's released tool, rather than a personal routine — but that reading is inference, not sourced fact."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['Muso'], author 'Tony Reihana', released 1985, reference csdb 156826)",
    "CSDb release id 156826 ('Muso', C64 Crack, 1001 Crew) — checked directly, no Tony Reihana mention: https://csdb.dk/release/?id=156826",
    "CSDb SID entry 41399 ('Muso 64', Martin Wernecke & Rudiger Wenski, 1985, Happy-Computer) — a likely-unrelated same-named program, flagged not asserted: https://csdb.dk/sid/?id=41399",
    "Local dataset: 2 files tagged Muso, 1 composer (Kyle Hodgetts) — data/composers/*.json aggregation"
  ]
}
```

## Overview

`Muso` is SIDId's tag for a tool attributed to **Tony Reihana**, released
1985 per SIDId. Direct verification is inconclusive: the CSDb release
SIDId's own `reference` points to is a crack-release page (1001 Crew) that
credits only the crackers, not Reihana, and a same-named-and-same-year but
apparently unrelated program ("Muso 64" by two different German authors)
also surfaced during research. Locally, both tagged files are by a
different composer entirely, Kyle Hodgetts — plausibly consistent with
Muso being a real distributed 1985 tool later used by someone else, though
this reading is inference.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's authorship claim (Tony
Reihana) is neither confirmed nor contradicted by the CSDb crack-release
page it references; (2) a same-named 1985 German program was found and
explicitly flagged as likely unrelated, not conflated in; (3) the local
composer (Kyle Hodgetts) does not match the claimed author, worth noting
honestly rather than silently reconciling.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO.

## Verification

Not verified. Seeded from `data/sidid.json`, `data/composers/*.json`, and
two CSDb pages. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 156826, CSDb SID
entry 41399, and the local composer aggregation.
