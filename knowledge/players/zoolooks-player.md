# Zoolook's Player

```json
{
  "id": "zoolooks-player",
  "name": "Zoolook's Player",
  "aliases": ["Zoolook's player"],
  "authors": ["Unknown — attributed only by the tag name 'Zoolook'; not independently identified as a scener/musician (see quirks)"],
  "released": "TODO: the one locally-tagged file testing it is dated 1989 (Vibrants, per its CSDb 'Released' field) — no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: unidentified — no CSDb tool/release page found under this name. CSDb DOES list six real sceners who used the exact handle 'Zoolook' (Denmark/cracker, Germany, Finland/graphician+swapper, unknown-country, Hungary/coder+importer, Norway/Beyond Force from 1989) but none has a documented C64 coding, music, or player credit — so the player's author cannot be attributed to any of them from CSDb data alone",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Not in SIDId (checked data/sidid.json byTag — absent). The single locally-tagged file is 'Test (in Zoolook's Player)', composer Jens-Christian Huus (JCH — the already-heavily-carded author of jch-newplayer.md/jch-oldplayer.md/etc), 1989, group Vibrants, per its CSDb SID entry (id 49661).",
    "'ZOOLOOK' IDENTITY IS UNRESOLVED (updated): a follow-up CSDb XML-webservice query found this is WRONG — 'Zoolook' IS a real, currently-used scener handle, held by six distinct people: id 3999 (Denmark, cracker, ex-Channel 42/Class/Discovery/Dominators/Rough Trade Inc/The Arcades Denmark), id 4699 (Germany, ex-Crest, credited 'Help' on Last Ninja II Muzak 1989), id 6494 (Finland, graphician+swapper, Eurasia/World Wide Expressive 1989-90), id 11607 (country not listed, ex-Doughnut Cracking Service), id 15117 (Hungary, coder+importer, ex-FBI Crew/Heart Breakers Team/Reds/Russian Cracking Service), id 19594 (Norway, member of Beyond Force from 1989 — geographically/temporally the closest match to JCH/Vibrants, but with NO documented SID/coding credit on their CSDb profile). None of the six carries a C64 music or player-authorship credit, so the player still cannot be attributed to a specific person — but the premise that 'Zoolook' might just be an album reference with no real bearer is now disproven. Multiple UNRELATED C64 demo productions are also titled 'Zoolook' (e.g. by Fairlight 1989, by Defiers 1987, by Blazon 2025), referencing Jean-Michel Jarre's 1984 album — these remain a separate, likely-irrelevant thread.",
    "IMPORTANT SCOPE NOTE: this file's COMPOSER is JCH, but JCH is not the credited AUTHOR of this player — the filename/tag explicitly frames this as a test of somebody ELSE's ('Zoolook's') player. No `edges` relationship to JCH's own already-carded families (jch-newplayer.md, jch-oldplayer.md, jch-newplayer-v20.md, jch-protracker.md, jch-digiplayer.md) is asserted — this tag is not one of JCH's own aliases in any of those cards, and no source states a code relationship.",
    "Single-file tag (1 file) — per this batch's own working rule, a 1-file tag is presumptively a personal/one-off routine; here it's additionally ambiguous whose routine it even is."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb SID entry 49661, 'Test (in Zoolook's Player)' (Jens-Christian Huus/JCH, Released field = '1989 Vibrants'), queried via scripts/lib/csdb-client.js getSidRelease(49661): https://csdb.dk/sid/?id=49661 — no UsedIn release listed at depth 2",
    "CSDb scener-search for 'Zoolook' via scripts/lib/csdb-client.js getScener() on ids 3999, 4699, 6494, 11607, 15117, 19594 (all handle='Zoolook', CurrentlyUsedHandle=true) — https://csdb.dk/scener/?id=3999 (Denmark, Cracker) / ?id=4699 (Germany) / ?id=6494 (Finland, Graphician/Swapper) / ?id=11607 / ?id=15117 (Hungary, Coder/Importer) / ?id=19594 (Norway, Beyond Force from 1989). None shows a C64 music/player-coding credit.",
    "Web search pass for a 'Zoolook' scener identity — WebSearch budget exhausted this session; CSDb scener/? id lookups above supersede the earlier inconclusive web-search-only pass and confirm real 'Zoolook' handles found, multiple unrelated same-titled demo productions also found (Fairlight 1989, Defiers 1987, Blazon 2025)",
    "Local dataset: 1 file tagged Zoolook's player (data/composers/jch.json, 'Test_in_Zoolooks_Player.sid', csdb_id 49661) — full census of the single tagged file, no others found across data/composers/*.json"
  ]
}
```

## Overview

`Zoolook's player` is a Player-ID-only tag (no SIDId entry) for a single
locally-tagged file (censused — this is the only one in `data/composers/*.json`),
"Test (in Zoolook's Player)" — composed in 1989 by
**Jens-Christian Huus (JCH)**, of Vibrants (per CSDb SID entry 49661's own
`Released` field, "1989 Vibrants"), but explicitly testing a player credited
to someone or something called "Zoolook", not JCH's own work. A follow-up
CSDb scener lookup found "Zoolook" IS a real, currently-used handle — held
by six different people (Denmark, Germany, Finland, Hungary, one
country-unlisted, and one Norwegian member of Beyond Force active from
1989) — but none of the six has a documented C64 coding/music/player
credit on CSDb, so authorship still cannot be pinned to a specific person.
The name is also, separately, a common demoscene reference to Jean-Michel
Jarre's 1984 album, reused as a title by several unrelated C64 demo
productions. Whose routine this actually is remains unresolved.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry, no CSDb tool page,
and `csdb_release` stays `null` — a `getSidRelease` query on the one tagged
SID entry (49661) returns no `UsedIn` release; (2) "Zoolook" the handle is
now confirmed real (six CSDb sceners), but none is linked to any coding/
player credit, so the identity question is refined, not resolved; (3)
despite the composer being JCH (already extensively carded elsewhere in
this KB), no `edges` relationship is asserted to any of his own player
families — this tag is explicitly testing someone else's code, per its own
filename.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check), one CSDb SID
entry queried via `scripts/lib/csdb-client.js` (`getSidRelease`), a full
census of the one locally-tagged file, and CSDb `getScener` lookups on six
"Zoolook"-handle sceners. `status: stub` — `released`, `platform`, and
`csdb_release` remain TODO; no new evidence resolved them, only ruled out
one hypothesis (that "Zoolook" wasn't a real handle).

## Sources

See the `sources` array — SIDId absence check, CSDb SID entry 49661 (via
`getSidRelease`), CSDb scener lookups on ids 3999/4699/6494/11607/15117/19594
(via `getScener`), and the local composer aggregation (full census, 1 file).
