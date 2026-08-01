# Muso

```json
{
  "id": "muso",
  "name": "Muso",
  "aliases": ["Muso"],
  "authors": ["Tony Reihana (per SIDId; independently corroborated by a CSDb comment quoting an in-memory title string — see quirks)"],
  "released": "SIDId gives '1985'; a CSDb comment on release 164744 quotes an in-memory string 'Music Editor: Tony R..:13/2/85', i.e. 13 February 1985, matching SIDId's year",
  "status": "stub",
  "platform": "Native C64 tool: a disk-based music editor. CSDb release 164744 (which packages Kyle Hodgetts's 'Star Soldier' tune) is typed 'C64 Tool'; both known Muso releases (156826, 204247) circulate as cracked/hacked .d64 disk images distributed by cracker groups (1001 Crew; Bitstoppers), not as a cross-platform editor with a separate C64 replayer. See quirks/sources.",
  "csdb_release": 156826,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId gives author 'Tony Reihana', released '1985', reference CSDb release 156826, no NAME/comment. Fetching that CSDb page directly shows: title 'Muso', type 'C64 Crack', group '1001 Crew', credited crackers 'Honey of 1001 Crew and NH Soft' — NO mention of Tony Reihana anywhere on the page. Crack-release pages typically only credit the crackers, not the original author, so this absence alone neither confirms nor disproves SIDId's attribution.",
    "Independent corroboration found on CSDb release 164744 ('Muso', type 'C64 Tool', 1986, packages Kyle Hodgetts's 'Star Soldier' tune, uploaded 'as a reference'). A 2018 user comment there states: 'Both releases show Tony.R on the editor screen and also in memory the following string is found: \"Music Editor: Tony R..:13/2/85\". Since Tony Riehana is the coder of the editor, Kyle Hodgets could have changed the credit on the title screen and released the editor with his tune.' This independently supports SIDId's Tony Reihana attribution and dates the editor to 13 Feb 1985 — matching SIDId's '1985'.",
    "Platform: release 164744 is typed 'C64 Tool' and both known circulating copies (156826, 204247) are cracked/hacked C64 .d64 disk images (crackers: 1001 Crew and Bitstoppers respectively) — i.e. Muso is a native, disk-distributed C64 editor, not a cross-platform tool with a separate C64 replayer.",
    "A DIFFERENT, LIKELY UNRELATED same-named program was found during research: CSDb SID entry 41399, 'Muso 64', by Martin Wernecke & Rudiger Wenski, 1985, published via the German magazine Happy-Computer — a name coincidence (same title, same year) with no evidence connecting it to Tony Reihana or to this Player-ID tag. Explicitly NOT asserted as the same tool.",
    "Composer census (both of the 2 locally-tagged files checked, not sampled): both are by 'Kyle Hodgetts' — 'Star Soldier' (CSDb SID id 1908, file 'Released: 1986 Quicksilva') and 'Pingo' (CSDb SID id 40575, file 'Released: 198? ECP'), not by Tony Reihana. The 164744/204247 comment above resolves this: Hodgetts appears to have released his own tune inside the editor with the title-screen credit changed to his own name, while Tony Reihana remains the editor's actual coder per the in-memory string. Both Hodgetts SIDs share the same PSID init address (33543/$8307); play addresses differ by 3 bytes (33792 vs 33789) — recorded here as header metadata only, not asserted as a Tier 3 fact."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['Muso'], author 'Tony Reihana', released 1985, reference csdb 156826)",
    "CSDb release id 156826 ('Muso', C64 Crack, 1001 Crew) — checked directly, no Tony Reihana mention: https://csdb.dk/release/?id=156826",
    "CSDb release id 164744 ('Muso', C64 Tool, 1986) — webservice XML, comment quoting in-memory string 'Music Editor: Tony R..:13/2/85': https://csdb.dk/release/?id=164744 (raw: https://csdb.dk/webservice/?type=release&id=164744&depth=2)",
    "CSDb release id 204247 ('Muso', C64 Crack, Bitstoppers, 1985) — a second, independent crack of the same disk: https://csdb.dk/release/?id=204247",
    "CSDb SID entry 41399 ('Muso 64', Martin Wernecke & Rudiger Wenski, 1985, Happy-Computer) — a likely-unrelated same-named program, flagged not asserted: https://csdb.dk/sid/?id=41399",
    "CSDb SID entries 1908 ('Star Soldier') and 40575 ('Pingo'), both Kyle Hodgetts — webservice XML, full census of both locally-tagged files: https://csdb.dk/webservice/?type=sid&id=1908&depth=1 , https://csdb.dk/webservice/?type=sid&id=40575&depth=1",
    "Local dataset: 2 files tagged Muso, 1 composer (Kyle Hodgetts) — data/composers/kyle-hodgetts.json"
  ]
}
```

## Overview

`Muso` is SIDId's tag for a native C64 music editor attributed to **Tony
Reihana**, released 13 February 1985 per an in-memory title string quoted
in a CSDb comment on release 164744 — independently corroborating SIDId's
'1985' and author attribution, which the crack-release page SIDId's own
`reference` points to (156826, credited only to crackers 1001 Crew) could
not confirm on its own. A same-named-and-same-year but apparently
unrelated program ("Muso 64" by two different German authors) also
surfaced during research and is explicitly not conflated in. Both of the
2 locally-tagged files (a full census, not a sample) are by a different
composer, Kyle Hodgetts, using the editor for his own tunes ("Star
Soldier", "Pingo") — a CSDb comment suggests he retitled the editor's
credit screen to his own name when releasing it, while the in-memory
string still shows Reihana as the actual coder.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's authorship claim (Tony
Reihana) is now independently corroborated by an in-memory string ("Music
Editor: Tony R..:13/2/85") quoted in a CSDb user comment, not just the
uncorroborated crack-release page; (2) platform is resolved as a native,
disk-distributed C64 tool (CSDb types it "C64 Tool"; both known copies
circulate as cracked `.d64` images), not a cross-platform editor; (3) a
same-named 1985 German program was found and explicitly flagged as likely
unrelated, not conflated in; (4) the local composer (Kyle Hodgetts) does
not match the claimed editor author, and a CSDb comment offers a plausible
explanation (Hodgetts re-crediting the title screen) rather than a
contradiction.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO.

## Verification

Not verified. Seeded from `data/sidid.json`, `data/composers/kyle-hodgetts.json`
(full census of both tagged files), and four CSDb pages/webservice queries.
`status: stub` — no disassembly performed, all Tier 3 fields remain TODO.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb releases 156826/164744/204247,
CSDb SID entries 1908/40575/41399, and the local composer file.
