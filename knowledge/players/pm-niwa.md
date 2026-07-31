# PM/Niwa

```json
{
  "id": "pm-niwa",
  "name": "PM/Niwa",
  "aliases": ["PM/Niwa"],
  "authors": ["PM"],
  "released": "No formal tool-release date — this is a personal in-house routine, not a published editor. Earliest attested tune (CSDb 'Released' field, full census of all 5 tagged files): 1985, on three files ('Niwa Intro' = '1985 Niwa', 'Piersoft Intro 1' = '1985 PM', 'Maksoft Group Intro' = '1985 Maksoft Group'); 'Star Wars' = '1986 Maksoft'; 'Buon Natale' = '198? PM' (decade digit unrecorded by CSDb). The composer's HVSC profile field 'active: 1986' (data/composers/pm.json) understates this by a year against the actual per-tune CSDb dates.",
  "status": "stub",
  "platform": "Native C64 replay routine (not cross-platform) — all 5 census files are native PSID entries with 6502 load/init/play addresses in ordinary C64 program space, embedded as musical intros to Italian crack releases (e.g. CSDb release 141721 'Niwa Intro', C64 Crack Intro; release 153329 'Pier Intro', C64 Crack Intro) and one tool intro (release 246127 'Recording Office [italian]', C64 Tool, 1985). Used exclusively by its namesake composer 'PM'. No dedicated CSDb tool/release page exists under the name 'PM/Niwa' or 'Niwa' — confirmed via CSDb webservice search (type=search) for both strings, each returning 'No result'.",
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
    "SIDId's sidid.nfo has NO entry for 'PM/Niwa' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "100% single-composer concentration: all 5 locally tagged files ('Buon Natale', 'Niwa Intro', 'Piersoft Intro 1', 'Star Wars', 'Maksoft Group Intro') belong to composer 'PM' himself (real name unrecorded — data/composers/pm.json full_name field is '?'), Italy. Full census of all 5 files' own CSDb 'Released' fields: 1985 (x3), 1986 (x1, 'Star Wars'), '198?' undated (x1, 'Buon Natale') — earliest attested activity is 1985, one year earlier than the composer profile's 'active: 1986' field.",
    "One of PM's own tagged files is literally titled 'Niwa Intro', directly corroborating the tag's group-name element. 'Niwa' is independently attested as a real early-1980s Italian software scene point: per a Ready64.org history article (citing Commodore Gazette 6, Sept 1987), Niwa was a Milan-based newsstand that served as a meeting point for the Italian C64 unprotection/exchange scene from 1983 onward, alongside groups like '2703'. No direct confirmation that PM's routine originated from or was distributed by that specific circle — the connection rests on the tag name and the matching file title, not a primary statement.",
    "CSDb webservice search (type=search) for both 'PM/Niwa' and bare 'Niwa' returns 'No result' — confirms no dedicated CSDb group/tool/release page exists under either name.",
    "PSID header addresses (load/init/play, from CSDb's per-file metadata, not a disassembly) are consistent with a small native routine: Buon Natale $C400/$C400/$C447, Niwa Intro $C5C1/$C5C1/$C5FD, Piersoft Intro 1 $C622/$C622/$C669, Star Wars $C800/$C800/$C84C, Maksoft Group Intro $C466/$C466/$C4A2 — init==load in every file, play offset ranges +60 to +76 bytes past init. Header metadata only; not disassembled, so not written into the Tier 3 memory/entry fields.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'PM/Niwa': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Ready64.org, 'C64 & Pirateria #04: Dossier Speciale - I Pirati in Italia' (Commodore Gazette 6, Sept 1987) — describes Niwa as a Milan-based scene/exchange point: https://ready64.org/articoli/leggi/idart/73/c64-pirateria-04-dossier-speciale-i-pirati-in-italia-commodore-gazette-6-1987-settembre-",
    "data/composers/pm.json (profile: handle PM, full_name unrecorded, country Italy, active 1986)",
    "Local dataset: 5 files tagged PM/Niwa, single composer (see knowledge/COVERAGE.md)",
    "CSDb webservice (scripts/lib/csdb-client.js, type=sid), full census of all 5 tagged files' own 'Released'/address fields: id 38860 Buon Natale, id 44497 Niwa Intro (UsedIn release 141721), id 38858 Piersoft Intro 1 (UsedIn releases 153329/155710/189583/256196), id 44496 Star Wars, id 64100 Maksoft Group Intro (UsedIn release 246127) — https://csdb.dk/webservice/?type=sid&id=<id>",
    "CSDb webservice type=search for 'PM/Niwa' and 'Niwa' both returned 'No result', confirming no dedicated CSDb page: https://csdb.dk/webservice/?type=search&id=PM%2FNiwa"
  ]
}
```

## Overview

PM/Niwa is the Player-ID tag for a native C64 replay routine used
exclusively by its namesake Italian composer, handle **PM** (real name
unrecorded). All 5 locally tagged files are his own, including one
literally titled "Niwa Intro". A full census of all 5 files' own CSDb
`Released` fields puts earliest attested activity at 1985 (three files),
one year earlier than the composer's HVSC profile field ("active: 1986");
one file ('Star Wars') is 1986, and one ('Buon Natale') is undated
("198?"). There is no formal tool-release date — this looks like a
personal in-house routine, not a published editor: the tunes are embedded
as intros in Italian crack releases (e.g. CSDb release 141721 "Niwa
Intro", release 153329 "Pier Intro") and one C64 Tool intro (release
246127 "Recording Office [italian]", 1985). "Niwa" is independently
attested as a real early Italian C64 scene meeting point (a Milan
newsstand active from 1983, per a Ready64.org history piece), though the
tag's precise connection to that circle is inferred from the file title,
not a primary source statement. Neither SIDId nor a CSDb webservice
search (for "PM/Niwa" or bare "Niwa") has an entry for this name.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) 100% single-composer usage,
with a full census of all 5 files putting earliest attested activity at
1985, one year earlier than the composer profile's "active: 1986"; (2)
neither SIDId nor a CSDb webservice search has an entry for this tag/name;
(3) the "Niwa" name is independently attested as a real Italian scene
point, but the link between that circle and PM's specific routine is
inferential (tag name + matching file title), not confirmed by a primary
statement; (4) PSID header addresses across all 5 files are small and
mutually consistent (init==load, play at load+60..+76 bytes), suggestive
of one small shared routine, though this is header metadata, not a
disassembly finding.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/pm.json`, `data/sidid.json`) plus a general historical
source for the "Niwa" name. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the Ready64.org
history article, and the local composer profile.
