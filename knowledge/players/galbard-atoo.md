# GalBard

```json
{
  "id": "galbard-atoo",
  "name": "GalBard",
  "aliases": ["GalBard/ATOO"],
  "authors": ["Anders Andréen (ATOO)"],
  "released": "TODO: no explicit release date for the tool itself (absent from sidid.nfo, and no dated CSDb tool release exists). Re-researched 2026-07-31: full census of all 17 GalBard/ATOO-tagged files' CSDb 'Released' fields (not filenames/UsedIn) gives earliest attested tune 1986 ('ATOO's First' https://csdb.dk/sid/?id=8484 and 'ATOO's Second' https://csdb.dk/sid/?id=8485, both 'Released: 1986 Anders Andréen'), predating the prior 1988 estimate ('American', https://csdb.dk/sid/?id=8483) which was drawn from a 3-file sample. This is a tune composition date, not a tool release date — GalBard as a routine has no attested release at all.",
  "status": "stub",
  "platform": "Native C64. A script-based personal music editor/routine written by its sole known user, Anders Andréen (ATOO, Sweden) — not found as a distributed public tool release.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO — observed to vary per file (not a single fixed player address; see quirks)",
    "zero_page": "TODO: no disassembly",
    "layout": "TODO: no disassembly or source found"
  },
  "entry": {
    "init": "TODO — per-file PSID header values differ (e.g. $C000 for 'American', $301A for 'Compleeto!'); no confirmed single entry point",
    "play": "TODO — per-file (e.g. $C003 for 'American', $304E for 'Compleeto!')"
  },
  "speed": "TODO: not documented",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: SIDId describes GalBard only as 'script-based'; no format spec found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "100% single-composer routine: all 17 GalBard/ATOO-tagged files in the local dataset (data/composers/atoo.json) are by ATOO himself — no other composer uses this tag. Textbook 'personal routine, not a published tool' signal per the project's composer-concentration heuristic.",
    "Name explained by SIDId's comment: 'GalBard is a script-based music editor. It is called GalBard because Anders' goal was to be able to create tunes in the style of Martin Galway and Rob Hubbard.' (data/sidid.json byTag['GalBard/ATOO'], sourced from cadaver/sidid's sidid.nfo).",
    "No dedicated CSDb release exists under the name 'GalBard' — a CSDb site search for the term returns zero results (https://csdb.dk/search/?seinsel=all&search=GalBard). ATOO's own CSDb 'C64 Tool' releases ('Music Expansion 64', 1987; 'Terrific Types', undated) carry no mention of GalBard in their credits/description, so neither can be confirmed as the same thing.",
    "sidid.nfo's entry for this tag has NO 'RELEASED' and NO 'REFERENCE' field (unlike many other SIDId entries) — confirmed by fetching the raw sidid.nfo. That's why released/csdb_release stay TODO/null rather than a guess.",
    "PSID header load/init/play addresses differ across GalBard-tagged .sid files on CSDb (American: load $B000, init $C000, play $C003 — https://csdb.dk/sid/?id=8483; Compleeto!: load $301A, init $301A, play $304E — https://csdb.dk/sid/?id=8486; Yie-Ar Sanxion: load $B000, init $C000, play $C003 — https://csdb.dk/sid/?id=8499). This is consistent with a personal editor whose output is relocated/repacked per tune rather than a single fixed player binary — do not record one 'the' load address from this alone.",
    "No public source or disassembly found anywhere searched (CSDb, GitHub, Codebase64). Every runtime field is an honest TODO.",
    "Re-research pass, 2026-07-31: censused all 17 GalBard/ATOO-tagged sid entries (ids 8483-8499 and 49079) via the CSDb webservice (scripts/lib/csdb-client.js, type=sid), reading each file's own Released field (not a filename year, not a UsedIn release year). Full list: American 1988 (8483), ATOO's First 1986 (8484), ATOO's Second 1986 (8485), Compleeto! 1989 (8486), GBK-Test 1989 (8487), Harmonic 1989 (8489), Ivanhoe Loader 1988 (8490), Madmusic v0.8 1988 (8491), Mad Hiscore v0.8 1988 (8492), Muzatoo 1 1987 (8493), Post War 1988 (8494), Radio Waves 1987 (8495), Relax (beta) 1989 (8496), Rock Madly 1988 (8497), Space Bar Demo 1987 (8498), Weird 1988 (49079), Yie-Ar Sanxion 1988 (8499). Earliest is 1986 ('ATOO's First'/'ATOO's Second'), which moved the dataset's earliest-attested year two years earlier than the previously-sampled 1988. No tune's CSDb entry carries any 'GalBard' mention beyond the Player-ID tag itself.",
    "Re-research pass, 2026-07-31: checked ATOO's full CSDb scener record (webservice type=scener, id=11335, depth=3) — FreelanceFunctions lists only 'Musician' with no group membership (Attended events only), consistent with GalBard being a personal in-house routine rather than a group-published tool. AKA field on CSDb: 'ATOO The Odd One, Anders Tycker Om Ost' — trivia, not provenance.",
    "Re-research pass, 2026-07-31: explicitly searched Lemon64 (lemon64.com) and Forum64 (forum64.de) for 'GalBard' — no results on either. Also re-checked CSDb's own site search and a CSDb forum thread comparing C64 music editors (topicid=128259, page 503'd on fetch but the search-engine cache of it showed no GalBard mention). No new provenance found beyond what was already documented; the tool-level released/csdb_release TODOs stand."
  ],
  "sources": [
    "sidid:GalBard/ATOO (data/sidid.json byTag, imported from cadaver/sidid's sidid.nfo): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener ATOO (Anders Andréen, Sweden, function Musician): https://csdb.dk/scener/?id=11335",
    "HVSC Musicians.txt: 'ATOO (Andréen, Anders) - SWEDEN' (data/hvsc/Musicians.txt line 154)",
    "CSDb sid entries used to check PSID header addresses: 'American' https://csdb.dk/sid/?id=8483 ; 'Compleeto!' https://csdb.dk/sid/?id=8486 ; 'Yie-Ar Sanxion' https://csdb.dk/sid/?id=8499",
    "CSDb site search confirming no 'GalBard'-named release exists: https://csdb.dk/search/?seinsel=all&search=GalBard",
    "CSDb ATOO tool releases checked and ruled inconclusive as the same tool: 'Music Expansion 64' https://csdb.dk/release/?id=129436 ; 'Terrific Types' https://csdb.dk/release/?id=243642",
    "Local dataset: 17 files tagged GalBard/ATOO, all by 1 composer (ATOO) — see knowledge/COVERAGE.md (rank #12 uncarded family) and data/composers/atoo.json",
    "2026-07-31 census of all 17 GalBard/ATOO sid entries via CSDb webservice (type=sid): https://csdb.dk/sid/?id=8483 (American, 1988), https://csdb.dk/sid/?id=8484 (ATOO's First, 1986), https://csdb.dk/sid/?id=8485 (ATOO's Second, 1986), https://csdb.dk/sid/?id=8486 (Compleeto!, 1989), https://csdb.dk/sid/?id=8487 (GBK-Test, 1989), https://csdb.dk/sid/?id=8489 (Harmonic, 1989), https://csdb.dk/sid/?id=8490 (Ivanhoe Loader, 1988), https://csdb.dk/sid/?id=8491 (Madmusic v0.8, 1988), https://csdb.dk/sid/?id=8492 (Mad Hiscore v0.8, 1988), https://csdb.dk/sid/?id=8493 (Muzatoo 1, 1987), https://csdb.dk/sid/?id=8494 (Post War, 1988), https://csdb.dk/sid/?id=8495 (Radio Waves, 1987), https://csdb.dk/sid/?id=8496 (Relax (beta), 1989), https://csdb.dk/sid/?id=8497 (Rock Madly, 1988), https://csdb.dk/sid/?id=8498 (Space Bar Demo, 1987), https://csdb.dk/sid/?id=49079 (Weird, 1988), https://csdb.dk/sid/?id=8499 (Yie-Ar Sanxion, 1988)",
    "CSDb scener record for ATOO (webservice type=scener, id=11335, depth=3), confirming freelance Musician with no group membership: https://csdb.dk/scener/?id=11335",
    "2026-07-31 negative-result searches: 'GalBard' on lemon64.com (no results) and forum64.de (no results); CSDb forum thread 'Comparison of C64 Music Editors by JCH' https://csdb.dk/forums/?roomid=14&topicid=128259 (page unavailable, 503, but search-engine indexing shows no GalBard mention)"
  ]
}
```

## Overview

GalBard is Anders Andréen's ("ATOO", Sweden) own script-based personal music
editor/routine — per SIDId's comment, named for his goal of writing tunes in
the style of Martin Galway and Rob Hubbard. Player-ID tags 17 `.sid` files in
the local dataset with `GalBard/ATOO`, and every single one of them is by ATOO
himself (`data/composers/atoo.json`) — no other composer uses it. Combined
with the absence of any CSDb release actually named "GalBard" (a direct site
search returns nothing) and the absence of `RELEASED`/`REFERENCE` fields in
its `sidid.nfo` entry, this reads as a personal in-house tool rather than a
distributed editor, in the same vein as [[adam-gilmore]]'s own driver — worth
a card mainly as a documented instance of the project's "single composer,
personal routine" pattern rather than as a widely-used player family. A
2026-07-31 census of all 17 tagged files' own CSDb `Released` fields (not a
sample) puts the earliest attested GalBard-tagged tune at 1986 ("ATOO's
First"/"ATOO's Second"); that is a tune composition date, not a tool release
— the tool itself has no attested release date.

## Quirks & gotchas

See the `quirks` array — load-bearing points: **100% one-composer
concentration** (17/17 files, all ATOO), **no CSDb release named "GalBard"
exists** (site search returns zero results, and ATOO's own listed C64 Tool
releases don't self-identify as it either), and **PSID header
load/init/play addresses differ per file** on the few tunes checked on CSDb —
so no single fixed memory map should be inferred from that alone.

## Disassembly notes

None. No public source or prior disassembly was found in any of CSDb,
GitHub, or Codebase64. A future pass toward `in-progress` would need to
disassemble a representative GalBard-tagged `.sid` from scratch (e.g.
"American", init `$C000`/play `$C003` per its CSDb-displayed PSID header)
and trace it via `sidm2-siddump` — there is no prior art to seed it from.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
country, composer concentration, absence of a public tool release or source)
are confirmed, from the cached SIDId entry, HVSC Musicians.txt, and CSDb.
Every memory/entry/format/effects field is `TODO` because no source or
disassembly exists to found them on.

## Sources

See the `sources` array — the cached SIDId entry (from cadaver/sidid's
`sidid.nfo`), CSDb's ATOO scener profile and individual `.sid` entries, HVSC's
`Musicians.txt`, and the local dataset (`data/composers/atoo.json`,
`knowledge/COVERAGE.md`).
