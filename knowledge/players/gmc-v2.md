# GMC V2.0 (Game Music Creator, Superiors build)

```json
{
  "id": "gmc-v2",
  "name": "GMC V2.0 (Game Music Creator, Superiors build)",
  "aliases": ["GMC_V2.0/Superiors"],
  "authors": ["Fenek (unofficial disassembly/recode); based on Balázs Farkas (Brian) of Graffity's original GMC V1.0 player"],
  "released": "2006 (unofficial 'GMC V2 (Unfinished)' release, 20 Dec 2006, by Fenek — see quirks). Earliest tune in this collection using it is attested 2010, distinct from the tool's own release year.",
  "status": "stub",
  "platform": "Native C64 music editor + replay. NOT an official Graffity release — a fan disassembly/recode of GMC V1.0's player by Fenek (Apidya/Alliance/Protovision etc.), distributed as freeware under the title 'GMC V2 (Unfinished)'. Closed scene tool — same family as GMC/DMC.",
  "csdb_release": 44814,

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
    "derives_from": ["gmc"],
    "successor_of": ["gmc"],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "IDENTIFIED (2026-07-31): CSDb release https://csdb.dk/release/?id=44814, titled 'GMC V2 (Unfinished)' (AKA 'tydzienbezsensownejroboty' = Polish 'week of senseless work'), released 20 Dec 2006 by Fenek (Apidya/Alliance/Dragon Software Productions/Protovision etc., Poland). This is the CSDb release this SIDId tag corresponds to — confirmed by direct evidence below, not name-matching.",
    "Direct author's-own account (CSDb comment by 'wacek', 09.12.2020, on release 44814 — Wacek being one of the 4 composers whose files carry this very tag): 'back in the day I was complaining about GMC v1.0 which I was using as my only tool... Fenek disassembled the player and recreated the editor and the player removing those restrictions, and optimizing the player's code. So this should be treated like an unofficial version of the GMC... EDIT. GMC is a music editor by Graffity, a grandfather to DMC.' This is real evidence (a disassembly + recode, per the author who commissioned it) for the derives_from/successor_of edge to gmc — stronger than the SIDId name-match this card originally relied on.",
    "Confirmed link between the CSDb release and the SIDId tag: two of this card's 9 tagged files (NecroPolo/Anosognosia.sid, csdb_id 59096; Vincenzo/Improvatorus_Maximus.sid, csdb_id 59424) were both released 2021-01-31 for 'The C64 Grand Tour Challenge - January 2021' (CSDb event 3031), whose tagline reads 'January's editor: GMC V2.' and whose forum thread (https://csdb.dk/forums/?roomid=14&topicid=147301) explicitly links the required editor as '[GMC V2 (Unfinished)](/release/?id=44814)' — the same release id.",
    "'V2.0' in the SIDId tag is informal/community shorthand, not the tool's own version string: the CSDb release title is 'GMC V2 (Unfinished)' (no '.0'), and a CSDb comment from 'Richard' (20.12.2006) shows the name was even being guessed at release time: 'I think it is supposed to be a music editor. :) Game Music Creator V2? maybe.'",
    "Census of all 9 tagged files (2026-07-31, via CSDb webservice type=sid on every csdb_id): Buddha/Loop_for_Intro (id 48980, 2013 Hokuto Force), Buddha/Never_Ending_TechLoop (id 51203, 2015 Commodore is Awesome), NecroPolo/Fu_Chen (id 44181, 2010 Ancients Pledge Inc.), NecroPolo/Stateless (id 43150, 2010 Ancients Pledge Inc.), NecroPolo/Anosognosia (id 59096, 2021 NecroPolo), NecroPolo/GP_Cars (id 62190, 2023 LHS), NecroPolo/GP_Cars_Main_plus_V10FX (id 62189, 2023 LHS), Vincenzo/Improvatorus_Maximus (id 59424, 2021 Lethargy/Singular Crew), Wacek/Forgotten_short_version (id 44433, 2010 Arise). Earliest tune attested: 2010 (three files) — 4 years after the tool's own 2006 release, consistent with a niche unofficial tool taking time to see use. No file predates the tool's release, so no contradiction.",
    "Old (now superseded) reasoning kept for record: SIDId gives 'GMC_V2.0/Superiors' the identical NAME ('Game Music Creator System') and AUTHOR ('Balazs Farkas (Brian)') fields as 'GMC/Superiors' — this is SIDId mislabeling the author as Brian rather than Fenek (the actual recoder); it does not carry a RELEASED/REFERENCE field, which is now understood as SIDId simply not having catalogued Fenek's 2006 release under this tag.",
    "No public source code was found for the Fenek recode — only a compiled distribution zip on CSDb (DownloadLink 'gmc v2.zip', 1199 downloads, still Ok as of 2026-07-31). Same closed-tool status as GMC V1.0/DMC.",
    "Small footprint in this collection: 9 files across 4 composers (Buddha, NecroPolo, Vincenzo, Wacek) — versus 428 files for the V1.0 tag (see knowledge/players/gmc.md). Two of the four composers (NecroPolo, Vincenzo) used it specifically because it was the mandated editor for a 2021 monthly compo, not organic adoption.",
    "GMC (the family) is itself the direct predecessor of DMC (Demo Music Creator), same author Brian/Graffity — see gmc.md and dmc.md for that documented lineage. Fenek's V2 branches off GMC V1.0's player code (per the Wacek account above); whether it has any relationship to DMC is unresearched and NOT claimed here.",
    "Replay internals (load address, ZP, init/play, data format, effect set) are entirely unknown for this specific recode — no source, format spec, or disassembly of the V2 binary was found (only the V1.0 disassembly, in gmc.md). Best RE path, if pursued: disassemble one of the 9 GMC_V2.0-tagged .sid files and diff its register trace against gmc.md's existing V1.0 trace to see how much of the recode changed vs. what stayed identical (Fenek is reported to have 'optimized' the code, so an exact match is unlikely)."
  ],
  "sources": [
    "CSDb release 'GMC V2 (Unfinished)' (author Fenek, 20 Dec 2006, download link, comments incl. Wacek's origin account and Richard's contemporaneous name-guess): https://csdb.dk/release/?id=44814",
    "CSDb event 'The C64 Grand Tour Challenge - January 2021' (tagline names GMC V2 as January's mandated editor): CSDb webservice type=event id=3031, forum thread https://csdb.dk/forums/?roomid=14&topicid=147301",
    "CSDb sid entries for all 9 tagged files (Released field per file, queried via scripts/lib/csdb-client.js getSidRelease): ids 48980, 51203, 44181, 43150, 59096, 62190, 62189, 59424, 44433",
    "SIDId sidid.nfo entries 'GMC/Superiors' and 'GMC_V2.0/Superiors' (name/author match, no reference for V2.0 — now understood as a SIDId gap, not a hint the tool doesn't exist): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb GMC V1.0 (the tool Fenek disassembled/recoded): https://csdb.dk/release/?id=7268",
    "CSDb 'Superiors Game Music Creator System V1.6': https://csdb.dk/release/?id=46470",
    "data/players.json curated 'Game Music Creator' entry (developer 'Brian ++', 1990-1992, covers V1.0/V1.6 only, predates and doesn't mention Fenek's 2006 recode) — local dataset from the DeepSID players API",
    "Local dataset: 9 files tagged GMC_V2.0/Superiors across 4 composers (aggregated from data/composers/*.json)",
    "Sibling cards: knowledge/players/gmc.md (V1.0, carries the CSDb/TND64 GMC->DMC lineage sourcing), knowledge/players/dmc.md (the successor tool)"
  ]
}
```

## Overview

GMC V2 is not a Graffity-authored sequel to GMC — it is an unofficial 2006
disassembly/recode of **GMC (Game Music Creator)** V1.0's player, done by
**Fenek** (Apidya/Alliance/Protovision, Poland) for **Wacek**, released on
CSDb as "GMC V2 (Unfinished)" (https://csdb.dk/release/?id=44814, 20 Dec
2006). SIDId's `GMC_V2.0/Superiors` tag mislabels the author as Balázs Farkas
(Brian, the original V1.0 author) — a SIDId gap this card corrects. The link
between the SIDId tag and this specific CSDb release is confirmed
independently: two of the 4 tagged composers used it because it was the
mandated editor for CSDb's "C64 Grand Tour Challenge - January 2021" compo,
whose tagline names "GMC V2" and whose forum thread links release 44814
directly. In this collection it remains a minor tag: **9 files across 4
composers** (Buddha, NecroPolo, Vincenzo, Wacek), a fraction of V1.0's 428
files, with earliest use attested 2010 (four years after the tool's release).
It is carded separately from `gmc.md` because `knowledge/COVERAGE.md`'s tag
grouping keeps the two apart, and the "unofficial fan recode, not a real
Graffity sequel" distinction is itself worth recording rather than silently
merging.

## Quirks & gotchas

See the `quirks` array. Load-bearing: **the SIDId tag maps to CSDb release
44814 "GMC V2 (Unfinished)"**, a fan recode by Fenek, not a Graffity release;
the **derives_from/successor_of edge to `gmc` is now backed by the
commissioning author's own CSDb account** ("Fenek disassembled the player and
recreated the editor and the player"), not just SIDId's identical name/author
fields; and **all runtime internals remain `TODO`** — no disassembly of the
V2 binary itself was done here, only of V1.0 (in gmc.md).

## Disassembly notes

None done here. No public source exists for Fenek's recode (only a compiled
distribution zip on CSDb); no disassembly of the V2 binary was attempted (see
gmc.md for the V1.0 disassembly it derives from). If pursued, the
highest-value first step is comparing a GMC_V2.0-tagged `.sid`'s register
trace against gmc.md's existing V1.0 trace (load `$1000`, init `$18EA`, play
`$14EA` on that one file — entry points are per-file, not guaranteed to match
here, and Fenek is reported to have optimized the code, so an exact match is
unlikely).

## Verification

**Not verified, not traced.** This card is Tier 1 (local dataset) + Tier 2
(CSDb/SIDId/CSDb-forum provenance) only — no `.sid` file for this tag was
traced through `sidm2-siddump`, and no disassembly was attempted.
`status: stub` is honest: every runtime field is `TODO`. The `edges` claim now
rests on a named author's first-person account of the disassembly/recode
(quoted in `quirks`), which is real Tier 2 evidence, but still short of a
source header or code comparison — not enough to justify `in-progress`.

## Sources

See the `sources` array — CSDb release 44814 ("GMC V2 (Unfinished)", incl.
its comment thread), the CSDb "Grand Tour Challenge - January 2021" event and
forum thread, per-file CSDb `sid` records for all 9 tagged files, SIDId's
sidid.nfo, the two related CSDb GMC releases (V1.0 id 7268, "V1.6" id 46470),
the cached DeepSID player entry in `data/players.json`, and the sibling
`gmc.md`/`dmc.md` cards for the wider GMC→DMC lineage.
