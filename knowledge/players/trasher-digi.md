# Trasher_Digi

```json
{
  "id": "trasher-digi",
  "name": "Trasher_Digi",
  "aliases": ["Trasher_Digi"],
  "authors": ["Preben Vindholmen (Trasher)"],
  "released": "No standalone tool-release date exists (in-house routine, not a distributed product). Full census (2026-07-31) of all 3 tagged files' own CSDb `Released` fields, via scripts/lib/csdb-client.js type=sid: 'Immerswimmel' (sid id 40595) and 'Kalle Kanon' (sid id 40596) both read 'Released: 1994 Radbrekkjers'; 'Flexible II (part 2)' (sid id 40597) reads 'Released: 1997 Offence'. Earliest attested use across the census is therefore 1994, not the 1990 'Booze'n'Rockets' figure this card previously cited — that file carries no Trasher_Digi tag and was excluded once every tagged file was actually checked. Radbrekkjers is confirmed as a real Norwegian demo group (1993-1995, CSDb group id 445; also credited with the 1994 demo 'Familiegudstjeneste', on which CSDb separately lists Trasher's 'Sampling' role): https://csdb.dk/group/?id=445",
  "status": "stub",
  "platform": "Native C64, in-house/embedded routine, not a distributed editor. All 3 tagged files carry DeepSID's own `player_type: \"Normal built-in\"` classification (data/composers/preben-vindholmen.json), consistent with a routine hand-coded into Trasher's own demo parts rather than a shared tool. Both credited groups are C64-only Norwegian demo groups with no Amiga/PC crossover in their CSDb Grouptypes: Radbrekkjers (group 445) and Offence (group 387, Grouptypes: Cracker/Demo/Game Development/Graphics/Magazine Staff/Music/Swapping Group). No CSDb tool/editor release, source repo, or format documentation was found under 'Trasher' or 'Trasher_Digi' (checked via CSDb webservice group/scener records, general web search, and a targeted Codebase64/Lemon64/Forum64 web search 2026-07-31; Lemon64's own forum search endpoint refused an unauthenticated query, and Forum64/Codebase64 searches returned nothing under this name — a residual gap this pass could not close, not a confirmed absence).",
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
    "SIDId (data/sidid.json) has an entry for this tag with an AUTHOR line only — 'Preben Vindholmen (Trasher)' — no NAME, reference, or comment. The absence of a NAME field is a signal this was never packaged as a titled, released tool.",
    "STRONG, TITLE-MATCHING evidence for the 'digi' label: CSDb credits Trasher with an explicit 'Sampling' role (plus Code) on 'Flexible' (1997 Demo) — and one of the 3 locally-tagged files is 'Flexible II (part 2)', clearly the same demo series. Also credited 'Sampling' on 'Familiegudstjeneste' (1994, Radbrekkjers) and 'Booze'n'Rockets' (1990, Code/Graphics/Sampling — NOT one of the 3 Trasher_Digi-tagged files, so it corroborates Trasher's general sampling role but is not itself evidence for this specific player tag), showing a repeated, genuine sampling role across nearly a decade, not a one-off.",
    "3 files, 1 composer: Preben Vindholmen (Trasher) — 'Flexible II (part 2)', 'Immerswimmel', 'Kalle Kanon'. A personal routine by usage pattern.",
    "Trasher (also known as 'The Trasher' / 'Bandit') is Norwegian, groups Impulse (1989-), Megastyle, Offence, SHAPE (1990).",
    "Re-research pass, 2026-07-31: gap-fill for `released`/`platform`/`csdb_release`. Census (via scripts/lib/csdb-client.js type=sid) of all 3 tagged files' own CSDb `Released` fields, not a sample: 'Immerswimmel' (sid 40595, LoadAddr/InitAddr $095C/2396) and 'Kalle Kanon' (sid 40596, LoadAddr/InitAddr $0898/2200) both read '1994 Radbrekkjers'; 'Flexible II (part 2)' (sid 40597, LoadAddr/InitAddr $08D0/2256) reads '1997 Offence'. LoadAddr/InitAddr recorded here as PSID header metadata only, per this batch's rule — never promoted to Tier 3 `entry`/`memory`. `released` corrected from the prior card's non-census 1990 'Booze'n'Rockets' figure (a file with no Trasher_Digi tag) to the census-confirmed 1994 earliest-attested. `platform` upgraded from a hedged guess to native-C64/in-house, backed by DeepSID's own `player_type: \"Normal built-in\"` field on all 3 files plus both credited groups' C64-only CSDb Grouptypes. `csdb_release` confirmed to stay null: no CSDb tool/editor release, and no webservice name-search endpoint exists to check exhaustively (only ID-based lookups are supported: https://csdb.dk/webservice/). A targeted Lemon64/Forum64/Codebase64 search for a 'Trasher' digi routine writeup found nothing (Lemon64's own search endpoint declined an unauthenticated query); this is recorded as a gap, not a confirmed absence, since those forums' full-text isn't otherwise crawlable here. `status` stays `stub`; no Tier 3 field was touched."
  ],
  "sources": [
    "data/sidid.json byTag: Trasher_Digi — author 'Preben Vindholmen (Trasher)', no name/reference/comment",
    "CSDb scener Trasher (Norway; 'Sampling' credits on 'Flexible' 1997, 'Familiegudstjeneste' 1994, 'Booze'n'Rockets' 1990): https://csdb.dk/scener/?id=4978",
    "Local dataset: 3 files tagged Trasher_Digi, 1 composer (Preben Vindholmen) — data/composers/preben-vindholmen.json",
    "data/composers/preben-vindholmen.json (profile country Norway, csdb id 4978)",
    "2026-07-31 full census: CSDb webservice type=sid records for all 3 tagged files, queried via scripts/lib/csdb-client.js — sid 40595 (Immerswimmel, Released '1994 Radbrekkjers'), sid 40596 (Kalle Kanon, Released '1994 Radbrekkjers'), sid 40597 (Flexible II part 2, Released '1997 Offence')",
    "CSDb group Radbrekkjers (Norwegian demo group, 1993-1995, aka IOC/Radbrekkers): https://csdb.dk/group/?id=445",
    "CSDb group Offence (Norway; Grouptypes Cracker/Demo/Game Development/Graphics/Magazine Staff/Music/Swapping Group, no Amiga/PC type listed), queried via scripts/lib/csdb-client.js type=group id=387: https://csdb.dk/group/?id=387",
    "CSDb webservice documentation confirming no name-search endpoint exists (ID lookups only): https://csdb.dk/webservice/",
    "2026-07-31 web search for a 'Trasher'/'Trasher_Digi' tool, editor, or routine writeup on Codebase64/Lemon64/Forum64/CSDb: none found; Lemon64's own forum search endpoint refused the unauthenticated query"
  ]
}
```

## Overview

Trasher_Digi is the SIDId tag for a digi/sample-playback routine
attributed to **Preben Vindholmen**, handle **Trasher** (also "The
Trasher"/"Bandit"), a Norwegian scener (Impulse, Megastyle, Offence,
SHAPE). SIDId's entry carries only an `AUTHOR` line. It appears in only
**3 files, all by Trasher himself**: "Immerswimmel" and "Kalle Kanon"
(both CSDb-attested `Released: 1994 Radbrekkjers`) and "Flexible II
(part 2)" (`Released: 1997 Offence`) — a full census of every tagged
file, not a sample. It is a native-C64, in-house routine rather than a
distributed tool: DeepSID itself classifies all 3 files' player as
`"Normal built-in"`, and both credited groups (Radbrekkjers, Offence)
are C64-only Norwegian demo groups with no cross-platform CSDb
Grouptypes. This is well-corroborated for this batch: CSDb credits
Trasher with a repeated, explicit "Sampling" role across releases
spanning 1990-1997, including "Flexible" (1997) — a direct title match
to the locally-tagged "Flexible II (part 2)".

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId names the author but no
titled product; (2) CSDb's "Sampling" credit on "Flexible" is a genuine
title match to one of the 3 locally-tagged files, and the role recurs
across multiple releases over ~7 years, making this one of the better-
corroborated tags in this batch; (3) the census-corrected earliest
attested year is 1994 (Radbrekkjers), not the 1990 "Booze'n'Rockets"
figure the card previously cited — that file carries no Trasher_Digi tag
and was excluded once every tagged file was actually checked, per the
"census every tagged file" rule.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb scener page
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener page for Trasher,
and the local composer aggregation.
