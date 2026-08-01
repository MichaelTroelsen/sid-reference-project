# Macro Player (Geir Tjelta)

```json
{
  "id": "geir-tjelta-macro-player",
  "name": "Macro Player (Geir Tjelta)",
  "aliases": ["Geir_Tjelta/MacroPlay2", "Geir_Tjelta/MacroPlay1"],
  "authors": ["Geir Tjelta (GT)"],
  "released": "2009-03-09 (CSDb release 76493, exact date; SIDId gives only the year)",
  "status": "stub",
  "platform": "Native C64 player/routine, not a tracker/editor. CSDb release 76493 ('Macro Player', type 'C64 Music', released by GT/Geir Tjelta 2009-03-09) is a from-scratch reimplementation of Jeroen Tel's 1987 'Noisy Pillars' player, built to demonstrate a smaller/faster driver -- scene comments on the release read 'Smaller player size, much better performance' (Skate) and discuss replacing JSR/JMP-heavy dispatch with inlined code (Mace), which is consistent with the name 'Macro Player' (an assembler-macro-based, inlined reimplementation rather than a subroutine-call driver) -- though no author statement spells the name's meaning out directly. One commenter (MacGyver) argued the release type should be 'C64 Tool' rather than 'C64 Music' because 'the player is the actual release'. Source code is publicly downloadable from the release page (macroplayersource.rar, 446 downloads, alongside a macroplayer.d64 disk image, 1084 downloads) -- no license is stated on the page, so this is 'source available', not confirmed open-source. A second SIDId signature (MacroPlay2, used by Tjelta's own tune) has no separate CSDb release; treated as an unversioned/internal variant of the same routine, not a distinct product -- see quirks.",
  "csdb_release": 76493,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

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
    "SIDId gives TWO distinct signature tags for the same tool: 'Geir_Tjelta/MacroPlay1' (name 'Macro Player', author Geir Tjelta, released 2009, reference https://csdb.dk/release/?id=76493) and 'Geir_Tjelta/MacroPlay2' (identical name/author/year, but NO reference). A CSDb site search for \"Macro Player\" (2026-08-01) returns exactly one matching release -- 76493 -- confirming no separate CSDb release exists for a 'MacroPlay2' variant; MacroPlay2 is treated as an unversioned/undocumented variant signature of the same routine, not a second product.",
    "CENSUS CORRECTION (2026-08-01, full census of both tagged files, not a sample): the prior pass recorded only 1 tagged file and called this a 'personal-routine-scale signature'. There are in fact 2 tagged files across 2 DIFFERENT composers: 'Pål sine høner (tune 2)' by Geir Tjelta himself (MacroPlay2, data/composers/geir-tjelta.json, CSDb sid id 58160, tune's own Released field '2020 Offence' -- a much later composition than the 2009 player) and 'RAM Joint' by Alex Brem (freQvibez) (MacroPlay1, data/composers/freqvibez.json, CSDb sid id 48715, tune's own Released field '2013 Offence'). The routine WAS picked up by at least one composer outside Tjelta himself, weakening (not confirming) the personal-routine framing -- still a thin sample (2 files, 2 composers) by this project's concentration heuristic, but not single-author.",
    "The CSDb release itself (76493, 'Macro Player', 2009-03-09) is a reimplementation of Jeroen Tel's 1987 'Noisy Pillars' player/tune (UsedSIDs: CSDb sid id 28190, 'Noisy Pillars (tune 1)' by Jeroen Tel, orig. 1987 Scoop Designs, load/init $1800, play $1806, 6581) -- credited Code/Text/Idea/Concept/Docs to Geir Tjelta (GT), Music to Jeroen Tel. A 2022 scene comment on the release underscores this is tune-specific, not general-purpose: 'it seems like this one is made specifically for Noisy Pillars and to add this to my own tune i must find out how the driver works' (user demosic/That8BitChiptuneGuy). No public evidence found that a Jeroen Tel driver has its own KB card in this project (checked: no players/*jeroen* or *tel* card matches) -- no `edges.derives_from` asserted for lack of a target card, but the lineage claim itself is directly sourced and recorded in `platform`.",
    "NOT A MERGE TARGET for the other Tjelta cards despite same-author overlap: SIDId's 2009 date for 'Macro Player' coincides with the year of Tjelta's separately-documented 'Echo' realtime-delay TECHNIQUE (also 2009, per CHIPFLIP, carded as knowledge/players/geir-tjelta-echo.md) — but Echo explicitly has NO SIDId entry at all, while this tag DOES, and the names differ ('Macro Player' vs. an undocumented, unnamed echo trick). No evidence found that these are the same routine; treat as two separate 2009 Tjelta artifacts.",
    "Also distinct from SID Systems (1990, editor+player, [[sidsys]]) and Comptech-X (~2019, per SIDId 'probably private, for X-Ample Architectures members', [[comptech-x]]) — different names, different years, different SIDId descriptions. This is Geir Tjelta's FOURTH documented tool/technique in this project's cards."
  ],
  "sources": [
    "SIDId sidid.nfo (two tags, 'Macro Player' name/author/2009; MacroPlay1 carries the CSDb reference, MacroPlay2 does not): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release 76493, 'Macro Player' by GT, exact date 2009-03-09, credits, UsedSIDs (Jeroen Tel's 'Noisy Pillars'), DownloadLinks (D64 + macroplayersource.rar), and user comments -- queried via scripts/lib/csdb-client.js webservice (type=release id=76493 depth=2): https://csdb.dk/release/?id=76493",
    "CSDb sid entry 28190, 'Noisy Pillars (tune 1)' by Jeroen Tel, orig. 1987 Scoop Designs -- the tune the Macro Player release reimplements: https://csdb.dk/sid/?id=28190",
    "CSDb sid entries for the 2 locally tagged files, own Released fields queried directly: id 58160 'Pål sine høner (tune 2)' (2020 Offence) https://csdb.dk/sid/?id=58160, id 48715 'RAM Joint' (2013 Offence) https://csdb.dk/sid/?id=48715",
    "CSDb site search confirming 76493 is the only 'Macro Player' release (2026-08-01): https://csdb.dk/search/?search=Macro+Player&type=release",
    "CSDb scener Geir Tjelta (Norway): https://csdb.dk/scener/?id=1266",
    "Existing KB cards for Tjelta's other tools, cross-checked to avoid false merge: knowledge/players/sidsys.md, knowledge/players/sidduzzit.md, knowledge/players/geir-tjelta-echo.md, knowledge/players/comptech-x.md",
    "Local dataset, full census of both tagged files: data/composers/geir-tjelta.json (MacroPlay2, 1 file) and data/composers/freqvibez.json (MacroPlay1, 1 file)"
  ]
}
```

## Overview

"Macro Player" is a native C64 **player/routine** (not a tracker/editor) by
**Geir Tjelta** ("GT"), released on CSDb as release 76493 on 2009-03-09 — a
from-scratch, apparently macro/inlined reimplementation of Jeroen Tel's 1987
"Noisy Pillars" driver, built to be smaller and faster than the original
(scene comments: "Smaller player size, much better performance"). Source
code is publicly downloadable from the release page alongside a D64, with no
stated license. It is the fourth Geir Tjelta tool/technique now carded in
this knowledge base, alongside SID Systems (1990), SID Duzz'It (1992), the
2009 "Echo" realtime-delay technique, and the much later Comptech-X
(~2019) — all distinct, per their differing SIDId names/dates/descriptions.
2 locally tagged files across 2 different composers (Tjelta himself, and
Alex Brem/freQvibez) — corrected from a prior pass that recorded only 1.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the prior pass under-counted the
tagged files (1 vs. the actual 2, across 2 composers) — fixed by a full
census; (2) SIDId's two signature tags (MacroPlay1/MacroPlay2) map to the
same single CSDb release, confirmed by a direct CSDb search; (3) the release
is a reimplementation of Jeroen Tel's "Noisy Pillars" player, per CSDb's own
UsedSIDs field and scene comments, but no KB card for a Jeroen Tel driver
exists yet, so no `edges.derives_from` is asserted; (4) this shares its 2009
year with Tjelta's separately-carded "Echo" technique, but the two are NOT
the same thing — Echo has no SIDId entry at all, while this tag does, under
a different name.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/geir-tjelta.json`, `data/composers/freqvibez.json`,
`data/sidid.json`) plus CSDb webservice queries (release 76493, sid entries
28190/58160/48715) and a CSDb site search, cross-referenced against sibling
Tjelta cards. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 76493 (webservice),
CSDb sid entries, a CSDb site search, the scener page, sibling KB cards, and
the full local file census.
