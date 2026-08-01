# Jer_Digi

```json
{
  "id": "jer-digi",
  "name": "Jer_Digi",
  "aliases": ["Jer_Digi"],
  "authors": ["Jari Tuominen (Jer)"],
  "released": "No dedicated tool/product release exists for this tag. Full census (2026-08-01) of both tagged files' own CSDb `Released` fields (via scripts/lib/csdb-client.js, type=sid): Music.sid — '1997 Panic' (CSDb sid id 44721, released as a standalone C64 Music compo entry at Assembly 1997, 1997-08-10, placed 12th); Dexter.sid — '1998 Panic' (CSDb sid id 44723, C64 Music compo at Assembly 1998, 1998-08-09, placed 6th). Both tunes' own field matches the compo release they shipped in exactly (no tune-vs-release date gap). Earliest attested use: 1997.",
  "status": "stub",
  "platform": "Native C64. No dedicated CSDb tool/release page exists for a 'Jer_Digi' editor/player itself (confirmed via CSDb site search, 2026-08-01: 'Jer_Digi' returns zero results). However, Jer/Jari Tuominen is independently confirmed as a native-C64 tool author: CSDb's webservice lists several C64 Tool-type releases credited to him, incl. 'Digi Music Creator V1.0' (1994, CSDb release 132342, AKA 'DMC Version 1.0'), 'Digi Music Creator V2.0' (1995, release 4276, AKA 'DMC V2'), and '3 Digi Channel Music Editor V1' (1994, release 2593) — all typed 'C64 Tool' on CSDb, i.e. native, not PC-crossover. These are NOT confirmed to be the same routine as the 'Jer_Digi' SIDId signature found in Dexter.sid/Music.sid — no direct evidence (byte signature, source, or documentation) ties the tag to any of these named releases, and a possible name collision was ruled out: SIDId's separate 'DMC'/'DMC_V4.x'/'DMC_V5.x'/'DMC_V6.x' tags are a different, unrelated tool ('Demo Music Creator System' by Balazs Farkas/Brian, 1991-93) that merely shares the DMC abbreviation. Recorded as a plausible-but-unconfirmed authorship context, not a lineage claim.",
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
    "No SIDId sidid.nfo entry exists for this tag (checked data/sidid.json byTag — absent). No playback-technique claim from any source; per this project's rule ('digi by name is not evidence') none is asserted here.",
    "100% single-composer concentration: both locally-tagged files ('Dexter', 'Music') belong to composer 'jer' (Jari Tuominen, originally handled 'Jarzenegger') alone (data/composers/jer.json).",
    "Jari Tuominen (Jer) is a Finnish scener/composer (data/composers/jer.json, country Finland, csdb_id 628); no CSDb tool/release page for a standalone editor under this name was found.",
    "The other 4 of Jer's 6 total HVSC files use a DIFFERENT SIDId tag entirely, 'Digi-Organizer' (Digimix_1/2/3.sid, Memomay_Dbl_Mix.sid) — a separate, more widely-used player with its own card (knowledge/players/digi-organizer.md). Only Dexter.sid and Music.sid carry the 'Jer_Digi' signature. No evidence found connecting Jer_Digi to Digi-Organizer beyond same-composer usage; no edge asserted.",
    "Re-research pass, 2026-08-01: gap-fill for `released`/`platform`/`csdb_release`. Full census (both files, via scripts/lib/csdb-client.js type=sid) confirms each tune's own `Released` field matches its Assembly-party C64-Music-compo `UsedIn` release exactly — Music.sid 1997-08-10 (Assembly 1997, compo place 12), Dexter.sid 1998-08-09 (Assembly 1998, compo place 6) — so earliest attested use is 1997, recorded as an earliest-attestation date, not a product release date (no product exists). `platform` set to native C64 on the strength of Jer's other, independently CSDb-documented C64 Tool releases (Digi Music Creator V1/V2, 3 Digi Channel Music Editor), while explicitly NOT asserting those tools are the same code as this SIDId signature — checked for and ruled out a name collision with the unrelated 'DMC' tag family (Balazs Farkas/Brian, 1991-93). `csdb_release` confirmed to stay `null` — a CSDb site search for 'Jer_Digi' returned zero results (2026-08-01). Lemon64 forum search was attempted but blocked ('not permitted to use the search system' without login) — a genuine access gap, not a skipped step. `status` stays `stub`; no Tier 3 field touched."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry for 'Jer_Digi': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged Jer_Digi, both by composer 'jer' — data/composers/jer.json; see knowledge/COVERAGE.md rank 103",
    "CSDb scener profile, Jari Tuominen / Jer: https://csdb.dk/scener/?id=628",
    "CSDb webservice, type=sid, id=44721 (Music.sid, Released '1997 Panic', UsedIn release 94789, Assembly 1997) and id=44723 (Dexter.sid, Released '1998 Panic', UsedIn release 24595, Assembly 1998), queried via scripts/lib/csdb-client.js, 2026-08-01",
    "CSDb webservice, type=scener, id=628, depth=3 (Panic group membership, MemberOf Release list): https://csdb.dk/webservice/?type=scener&id=628&depth=3",
    "CSDb release pages confirming Jer-credited native C64 Tool releases: Digi Music Creator V1.0 https://csdb.dk/release/?id=132342 ; Digi Music Creator V2.0 https://csdb.dk/release/?id=4276 ; 3 Digi Channel Music Editor V1 https://csdb.dk/release/?id=2593",
    "data/sidid.json byTag entries for 'DMC'/'(DMC_V4.x)'/'(DMC_V5.x)'/'DMC_V6.x' confirming that tag family is the unrelated 'Demo Music Creator System' by Balazs Farkas (Brian), ruling out a name collision with Jer's own 'Digi Music Creator'",
    "CSDb site search for 'Jer_Digi', no results (2026-08-01): https://csdb.dk/search/?search=Jer_Digi&type=0",
    "Lemon64 forum search attempted, blocked without login ('not permitted to use the search system'), 2026-08-01: https://www.lemon64.com/forum/search.php?action=results&keywords=Jer_Digi"
  ]
}
```

## Overview

Jer_Digi is a SIDId Player-ID tag with no upstream SIDId documentation (no
`sidid.nfo` entry at all). Locally it appears in only 2 files, both by the
Finnish composer **Jari Tuominen**, handle **Jer**, consistent with a
personal, never-packaged routine. Both tunes were released as standalone
C64 Music compo entries at Assembly (Music.sid, 1997; Dexter.sid, 1998) —
native C64, per a full census of both files' own CSDb records. No CSDb
tool/release page exists under the "Jer_Digi" name (confirmed by direct
CSDb site search). Jer is independently documented as a native-C64 tool
author (Digi Music Creator V1/V2, 3 Digi Channel Music Editor — all CSDb
"C64 Tool" releases from 1994-95), which supports the native-C64 platform
call but is NOT evidence that any of those named tools share code with
this specific SIDId signature.

## Quirks & gotchas

See the `quirks` array. Load-bearing: no SIDId record exists at all; 100%
single-composer usage; Jer's other 4 HVSC files use the unrelated
"Digi-Organizer" signature, not this one; a superficially tempting
"Digi Music Creator" lineage was investigated and explicitly NOT asserted
as an edge for lack of direct evidence.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local `data/composers/jer.json`, a confirmed-
absent SIDId check, and a 2026-08-01 CSDb provenance pass (full census of
both tagged files, platform/csdb_release gap-fill). `status: stub`.

## Sources

See the `sources` array — SIDId (checked, absent), the local composer
aggregation, CSDb (sid records, scener/group, tool releases, site search),
and a Lemon64 search attempt (blocked).
