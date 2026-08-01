# Colin_Porch

```json
{
  "id": "colin-porch",
  "name": "Colin_Porch",
  "aliases": ["Colin_Porch"],
  "authors": ["TODO: no coder credited — tag is attached to a Peter Clarke file; whether Colin Porch himself wrote any code for it is unconfirmed"],
  "released": "1987 (Ocean Software) — the tagged tune \"Double Take\" itself states 'Released: 1987 Ocean' on its CSDb SID-entry page (csdb.dk/sid/?id=5642); corroborated by five independent 1987 CSDb release entries (Gorgeous, Dynamite Demo 3, Double Take/Hotline, Double Take/The OUG-Team crack, Soundcollection I, Amadeus XI) that all reuse the same SID that same year",
  "status": "stub",
  "platform": "Native C64 in-game replay routine, built into the 1987 Ocean Software game 'Double Take' — DeepSID records its player_type as 'Normal built-in' (data/composers/peter-clarke.json), i.e. not a distributed/standalone editor or tool. SIDId has no entry for the tag at all, and a CSDb release search for 'Double Take' turned up only cracks/demos, no Ocean Software game or tool release — consistent with a one-off in-game routine rather than a published player. The tag's name plausibly references Colin Porch, a real, documented Ocean Software C64 programmer and colleague of Clarke's (see quirks), but no source confirms Porch wrote or is credited on this specific routine — circumstantial, not a confirmed authorship claim.",
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
    "SIDId's sidid.nfo has NO entry for 'Colin_Porch' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "PLAUSIBLE BUT UNCONFIRMED NAME ORIGIN: the sole locally-tagged composer is Peter Clarke (England, Ocean Software, per data/composers/peter-clarke.json). A real, documented person named Colin Porch was a fellow Ocean Software C64 programmer (credited coder of C64 ports of Operation Wolf, Head Over Heels, and Gryzor per MobyGames/Lemon64), and per Peter Clarke's own 1990s account (Remix64 interview), Colin Porch was one of two people who publicly raised the issue when Ocean's 'Double Take' shipped with Clarke's music misattributed to another composer — an incident that directly led Ocean to hire Clarke in-house (his first in-house project being Head Over Heels). This is a real, documented professional connection between the two men at Ocean Software in the same era — but NO source found states that Colin Porch coded this specific player routine, or that the tag references this incident/person at all rather than being coincidental. Recorded as strong circumstantial context only.",
    "Single file, single composer (Peter Clarke) — the smallest possible footprint, consistent with a one-off or personally-named routine rather than a distributed tool.",
    "Peter Clarke (1958-2025) worked at Ocean Software from 1987, per his own HVSC/DeepSID profile (data/composers/peter-clarke.json) — the professional context that makes the Colin Porch connection plausible.",
    "csdb_release deliberately left null, not TODO: a CSDb release search for 'Double Take' returned only cracks/demos/music-collections, no Ocean Software game or standalone tool entry — there is no CSDb release id to record for a built-in in-game routine.",
    "PSID header metadata only (not a disassembly fact, not written into memory/entry Tier 3 fields): CSDb's page for the tune lists load=$1000, init=$1000, play=$1003, 3 subtunes, 6581/PAL, data size 5860 bytes (csdb.dk/sid/?id=5642)."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Colin_Porch': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "MobyGames, Colin Porch credits (C64 coder — Operation Wolf, Head Over Heels, Gryzor): https://www.mobygames.com/person/139807/colin-porch/",
    "Lemon64 game database, 'Commodore 64 Games by Colin Porch': https://www.lemon64.com/games/list.php?list_individual=colin-porch",
    "Remix64, 'An Interview with Peter Clarke' (Double Take misattribution incident, Colin Porch raising the issue, leading to Clarke's in-house hire at Ocean, first project Head Over Heels): https://remix64.com/interviews/an-interview-with-peter-clarke.html",
    "Local dataset: 1 file tagged 'Colin_Porch', by composer Peter Clarke — data/composers/peter-clarke.json (census: full folder[] array checked, tune is 'Double_Take.sid', csdb_id 5642, player_type 'Normal built-in')",
    "data/composers/peter-clarke.json (HVSC profile: England, b. 1958, d. 2025-07-31, affiliation Ocean Software, employment 1987-)",
    "CSDb SID-tune entry for 'Double Take' (composer Peter Clarke): Released '1987 Ocean', load $1000/init $1000/play $1003, 3 subtunes — https://csdb.dk/sid/?id=5642",
    "CSDb release search for 'Double Take' (checked for an Ocean Software game or standalone tool release; found only cracks/demos/music-collections, no such entry): https://csdb.dk/search/?seinsel=releases&search=Double+Take"
  ]
}
```

## Overview

`Colin_Porch` is a raw Player-ID tag found on a single file, **"Double
Take"** (3 subtunes), by composer **Peter Clarke** (Ocean Software,
England) — DeepSID records its `player_type` as "Normal built-in", i.e. an
in-game routine, not a distributed editor. CSDb's own page for the tune
states `Released: 1987 Ocean`, corroborated by five independent 1987 CSDb
release entries (cracks/demos) that reused the same SID that year. SIDId has
no entry for the tag at all, and a CSDb release search turned up no Ocean
Software game or tool entry, consistent with a one-off in-game routine. The
tag's name plausibly references **Colin Porch**, a real, documented Ocean
Software C64 programmer (credited on the C64 ports of Operation Wolf, Head
Over Heels, and Gryzor) who — per Clarke's own account — was one of two
people who publicly flagged an incident where Ocean shipped Clarke's music
misattributed to another composer, directly leading to Clarke's in-house hire
at Ocean. That is a real, documented professional connection between the two
men, but no source confirms Porch actually coded this routine or that the
tag references the incident at all — this remains circumstantial.

## Quirks & gotchas

See the `quirks` array. Load-bearing: a real, well-documented professional
relationship between Peter Clarke and a real Colin Porch exists at Ocean
Software in the same era, which is unusually strong circumstantial context
for a 1-file personal tag — but it stops short of confirming Porch wrote or
is credited on this specific player, so no authorship claim is made.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/peter-clarke.json`, `data/sidid.json`) plus web research
into the real Colin Porch/Peter Clarke connection at Ocean Software, and a
CSDb lookup of the tagged tune's own release date and release chain.
`status: stub` — no runtime fact has been confirmed by disassembly or trace;
PSID header values (load/init/play) recorded in `quirks` are header
metadata, not a disassembly finding, and are deliberately not written into
the Tier 3 `memory`/`entry` fields.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), MobyGames and
Lemon64 credits for Colin Porch, a Remix64 interview with Peter Clarke, the
local composer profile (full census of its 21-file folder array), and CSDb's
SID-entry and release-search pages for "Double Take".
