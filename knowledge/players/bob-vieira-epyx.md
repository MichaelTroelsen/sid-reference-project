# Bob Vieira / Epyx

```json
{
  "id": "bob-vieira-epyx",
  "name": "Bob Vieira / Epyx",
  "aliases": ["?Bob_Vieira/Epyx"],
  "authors": ["Bob Vieira (Robert Vieira)"],
  "released": "Not a tool-release date — this is an in-house Epyx game-music routine, not a distributed editor. Per-game CSDb `Released` fields for all 4 tagged files (full census): Barbie 1984, G.I. Joe 1985, Summer Games II 1985, The Movie Monster Game 1986 (csdb.dk webservice type=sid, ids 45475/30096/1935/30097). Barbie's 1984 date is corroborated by Wikipedia's 'Barbie (1984 video game)' infobox.",
  "status": "stub",
  "platform": "Native C64, compiled directly into each Epyx game binary (not a standalone/redistributable editor or tool). Bob Vieira's own words in HVSC STIL.txt (Summer_Games_II.sid comment): \"I inherited the data files for the national anthems, Bugler's Holiday, and 'play for Epyx' music\" — indicating an in-house Epyx music-data convention reused/handed down across titles and composers, not a personal one-off. No dedicated CSDb tool/editor release page exists under this name.",
  "csdb_release": null,

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
    "The '?' PREFIX means this is a Player-ID signature that its own tooling flags as an UNCONFIRMED/heuristic match, not a fully certain identification — but UNLIKE a bare '?Unknown_*' tag, this one DOES carry an identifiable author (Bob Vieira) and publisher (Epyx) baked into the tag itself, and both are independently corroborated: the local composer profile confirms Bob Vieira's (Robert Vieira, USA) affiliation field is literally 'Epyx' (data/composers/bob-vieira.json), and web search confirms Bob Vieira was Epyx's credited musician on 'Summer Games II' and other Epyx titles.",
    "SIDId's sidid.nfo has NO entry for '?Bob_Vieira/Epyx' (checked) — the tag exists only in this project's own local Player-ID data, not corroborated by SIDId's independent database.",
    "All 4 locally tagged files are Epyx-published/associated C64 games credited to Bob Vieira: Barbie, G.I. Joe, The Movie Monster Game, Summer Games II — spanning what appear to be several different release years (Summer Games II is mid-1980s; Barbie is a later, 1990s-era Epyx-adjacent title), suggesting a reused in-house routine across a broad span of Bob Vieira's Epyx work rather than a single game's one-off code.",
    "'DIGI BY NAME IS NOT EVIDENCE': no sample/digi technique is confirmed for this tag — SIDId has no comment field, and no manual/source was found describing the routine's playback mechanism. Left TODO.",
    "Full census of all 4 tagged files' CSDb SID-entry headers (PSID metadata, not disassembly): Barbie LoadAddr $87E InitAddr $C170; G.I. Joe LoadAddr/InitAddr $C300, PlayAddr $CF00; The Movie Monster Game LoadAddr $1000 InitAddr $2784 PlayAddr $2787; Summer Games II LoadAddr $2600 InitAddr $7000 PlayAddr $7003. Four different load addresses across 4 files is consistent with a routine compiled per-game rather than loaded from one fixed shared location — supports 'in-house, embedded' over 'standalone tool'. Header data only; no memory-map or entry-point disassembly done.",
    "Bob Vieira's own HVSC STIL.txt comment on Summer_Games_II.sid states he 'inherited the data files for the national anthems, Bugler's Holiday, and \"play for Epyx\" music' but composed the original event music himself (tunes #2,3,6,20,22) — direct first-person evidence that Epyx had a standing in-house music-data convention predating/spanning his own work, reused across composers."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for '?Bob_Vieira/Epyx': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local composer profile confirming affiliation 'Epyx': data/composers/bob-vieira.json",
    "Local dataset: 4 files tagged ?Bob_Vieira/Epyx, all by Bob Vieira — Barbie, G.I. Joe, The Movie Monster Game, Summer Games II (Super_Cycle.sid by the same composer carries no player tag and is NOT part of this family)",
    "CSDb webservice (scripts/lib/csdb-client.js, type=sid), full census of all 4 tagged files, giving each file's own Released field: Barbie id=45475 'Released: 1984 Epyx', G.I. Joe id=30096 'Released: 1985 Epyx', The Movie Monster Game id=30097 'Released: 1986 Epyx', Summer Games II id=1935 'Released: 1985 Epyx' — https://csdb.dk/webservice/?type=sid&id=45475 (and 30096, 30097, 1935)",
    "Wikipedia 'Barbie (1984 video game)': infobox composer 'Bob Vieira', North American release 1984 — https://en.wikipedia.org/wiki/Barbie_(1984_video_game)",
    "Local HVSC STIL.txt cache (data/hvsc/STIL.txt, lines ~100383-100427), /MUSICIANS/V/Vieira_Bob/ section: Summer_Games_II.sid comment quotes Bob Vieira on inheriting Epyx's 'play for Epyx' music data files; Barbie.sid comment on the digitized voice source; entries also checked for G_I_Joe.sid and Movie_Monster_Game.sid (no driver-name comments there)",
    "Lemon64 Summer Games II game page corroborates the same STIL quote and 1985 release: https://www.lemon64.com/game/summer-games-2",
    "Web search for a dedicated driver/tool page on CSDb, Lemon64, Forum64 and Codebase64 (queries: 'Bob Vieira Epyx C64 sound driver', 'forum64.de Bob Vieira Epyx') found no results — no dedicated Player-ID/tool documentation exists beyond this project's own local tag"
  ]
}
```

## Overview

`?Bob_Vieira/Epyx` is a raw (heuristically-flagged, `?`-prefixed) Player-ID
tag credited to composer **Bob Vieira** (Robert Vieira, USA), whose
affiliation is recorded locally as **Epyx**, the US games publisher. All 4
locally-tagged files (a full census — Bob Vieira's 5th HVSC file,
Super_Cycle.sid, carries no player tag) are Epyx titles credited to Bob
Vieira: Barbie (1984), G.I. Joe (1985), Summer Games II (1985), The Movie
Monster Game (1986), per each file's own CSDb `Released` field. One
composer, one publisher, four files — this reads as an in-house
per-game music routine, not a published/general-purpose tool: it has no
CSDb tool/release page, and Bob Vieira's own HVSC STIL.txt comment on
Summer Games II describes inheriting Epyx's existing "play for Epyx"
music data convention rather than writing a personal one. SIDId has no
independent entry for this exact tag; no dedicated CSDb tool/release page
or technical writeup was found on CSDb, Lemon64, Forum64, or Codebase64.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the leading `?` marks this as an
unconfirmed/heuristic Player-ID match, but the embedded author+publisher
names ARE independently corroborated by local composer data, CSDb, and
HVSC's STIL.txt — this is not a bare, unidentifiable `?Unknown_*`
signature. The 4 tagged files' CSDb-header load addresses are all
different, consistent with a routine embedded per-game rather than one
fixed shared tool. No sample/digi technique is confirmed (TODO, not
inferred from any name).

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO (untouched by this pass).

## Verification

Not verified. This pass filled the `released`/`platform`/`csdb_release`
gaps from a full census of all 4 tagged files (CSDb webservice `type=sid`
per-file `Released` fields, cross-checked against Wikipedia for Barbie and
against Lemon64/local HVSC STIL.txt for Summer Games II), plus a targeted
CSDb/Lemon64/Forum64/Codebase64 search that found no dedicated tool page.
`csdb_release` stays `null` — no such page exists to cite. `status: stub`
unchanged; no Tier 3 field was touched.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), local composer
profile, CSDb webservice per-file census, Wikipedia, local HVSC STIL.txt
cache, Lemon64, and the negative web-search result for a dedicated tool
page.
