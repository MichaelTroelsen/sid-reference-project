# Montecchio/Coolsound

```json
{
  "id": "montecchio-coolsound",
  "name": "Montecchio/Coolsound",
  "aliases": ["Montecchio/Coolsound"],
  "authors": ["Andreas Montecchio"],
  "released": "TODO: no explicit tool/routine release date; each tagged file's own CSDb sid-entry 'Released' field: Centron '19?? Blue Chip Software' (undated), Mission II '1990 64'er/Markt & Technik', Tricky '1990 Markt & Technik', The Wall '1990 Magic Disk 64/CP Verlag' — 3 of 4 files independently attest 1990 (https://csdb.dk/webservice/?type=sid&id=18650, 18651, 18646)",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/editor release found under this name — the 4 tagged files are the composer's own in-house music for 3 separate 1990 commercial C64 productions (Mission II game, Tricky, The Wall game; publishers Markt & Technik / Magic Disk 64-CP Verlag), consistent with a native-C64 routine authored/compiled per-project rather than a distributed editor. Montecchio's only CSDb group membership is 'Blue Chip' (German demo group, founded 1989); no CSDb group, release, or web page named 'Coolsound' was found (https://csdb.dk/scener/?id=14346)",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId's entry for this tag has only an AUTHOR field ('Andreas Montecchio') — no NAME, reference, or comment — consistent with an in-house routine never packaged/released as a titled, standalone tool.",
    "Census (2026-07-31) of all 4 tagged files' own CSDb sid-entry records confirms exactly 4, all authored by Andreas Montecchio, csdb_id 18646/18649/18650/18651: Centron, Mission II, Tricky, The Wall. No 5th file or missed cluster.",
    "Per-file CSDb 'Released' fields (own sid-entry, not a UsedIn release's year): Centron '19?? Blue Chip Software' (undated); Mission II '1990 64'er/Markt & Technik'; Tricky '1990 Markt & Technik'; The Wall '1990 Magic Disk 64/CP Verlag'. Three of four independently attest 1990; The Wall was additionally used in two later 1990/1989 compilation releases (UsedIn), which are not treated as its own release date.",
    "PSID header load/init/play addresses differ across all 4 files (Centron $4800/$4800/$4806; Mission II $C000/$C000/$C006; Tricky $C000/$C000/$C003; The Wall $3000/$3000/$3006) — header metadata only, gathered during the census, not a disassembly fact; recorded here, not in the Tier 3 `entry`/`memory` fields. Consistent with a small routine recompiled/relinked at whatever address each game's memory map allowed, rather than distributed as a fixed-address standalone tool.",
    "CSDb's scener page for Andreas Montecchio (id 14346/12856) lists exactly one group membership, 'Blue Chip' (Germany, founded 1989, demo group) — no group, release, or entity named 'Coolsound' appears there or anywhere in a direct CSDb group/release search. DuckDuckGo searches for '\"Montecchio\" \"Coolsound\" C64' and '\"Blue Chip\" \"Coolsound\" C64 Montecchio' both returned zero results (checked 2026-07-31). 'Coolsound' remains unexplained beyond the SIDId tag itself — possibly a personal studio/label name Montecchio used but never registered on CSDb.",
    "All 4 locally-tagged files are by the same composer (Andreas Montecchio) — single-composer concentration consistent with a personal/in-house routine, not a widely shared tool."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['Montecchio/Coolsound'], author only)",
    "Local dataset: 4 files tagged Montecchio/Coolsound, 1 composer (Andreas Montecchio) — data/composers/andreas-montecchio.json aggregation",
    "CSDb webservice, type=sid: https://csdb.dk/webservice/?type=sid&id=18646 (The Wall), &id=18649 (Centron), &id=18650 (Mission II), &id=18651 (Tricky) — per-file Released/LoadAddr/InitAddr/PlayAddr",
    "CSDb webservice, type=scener: https://csdb.dk/webservice/?type=scener&id=14346 — Andreas Montecchio, sole group membership 'Blue Chip'",
    "CSDb scener page: https://csdb.dk/scener/?id=14346 (fetched 2026-07-31, corroborates group membership and absence of 'Coolsound')"
  ]
}
```

## Overview

`Montecchio/Coolsound` is SIDId's tag for a routine attributed to
**Andreas Montecchio**, with no further name, reference, or comment in
SIDId's own data — consistent with an in-house, never-formally-released
routine. All 4 locally-tagged files (Centron, Mission II, Tricky, The Wall —
censused in full, 2026-07-31) are by Montecchio himself, and each is the
music for a separate 1990 commercial C64 production (three of the four
attest 1990 directly in their own CSDb `Released` field; the fourth,
Centron, is undated but names the same publisher circle, "Blue Chip
Software"). Montecchio's sole CSDb group membership is Blue Chip, a German
demo group founded 1989; no CSDb entity named "Coolsound" exists, and it was
not found in web search either — it remains unexplained beyond the SIDId
tag itself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId gives author only, no
name/reference/comment; (2) no CSDb or web corroboration found for
"Coolsound" despite a direct scener-page check and search-engine queries;
(3) single-composer concentration (4/4 files); (4) 3 of 4 files' own CSDb
Released fields independently attest 1990, with differing PSID header
addresses per file (header metadata, not a disassembly fact).

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. Seeded from `data/sidid.json` and `data/composers/*.json`.
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, the local composer aggregation,
CSDb's `type=sid` webservice for each of the 4 tagged files, and CSDb's
`type=scener`/scener-page for Andreas Montecchio.
