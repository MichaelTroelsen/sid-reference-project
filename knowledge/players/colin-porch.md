# Colin_Porch

```json
{
  "id": "colin-porch",
  "name": "Colin_Porch",
  "aliases": ["Colin_Porch"],
  "authors": ["TODO: no coder credited — tag is attached to a Peter Clarke file; whether Colin Porch himself wrote any code for it is unconfirmed"],
  "released": "TODO: no date found — SIDId has no entry for this tag at all",
  "status": "stub",
  "platform": "TODO: appears to be a personal/in-house C64 replay routine on a file by composer Peter Clarke; the tag's name plausibly references Colin Porch, a real, documented Ocean Software C64 programmer and colleague of Clarke's (see quirks) — but no source confirms Porch wrote or is credited on this specific player, so this is circumstantial, not a confirmed authorship claim",
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
    "Peter Clarke (1958-2025) worked at Ocean Software from 1987, per his own HVSC/DeepSID profile (data/composers/peter-clarke.json) — the professional context that makes the Colin Porch connection plausible."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Colin_Porch': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "MobyGames, Colin Porch credits (C64 coder — Operation Wolf, Head Over Heels, Gryzor): https://www.mobygames.com/person/139807/colin-porch/",
    "Lemon64 game database, 'Commodore 64 Games by Colin Porch': https://www.lemon64.com/games/list.php?list_individual=colin-porch",
    "Remix64, 'An Interview with Peter Clarke' (Double Take misattribution incident, Colin Porch raising the issue, leading to Clarke's in-house hire at Ocean, first project Head Over Heels): https://remix64.com/interviews/an-interview-with-peter-clarke.html",
    "Local dataset: 1 file tagged 'Colin_Porch', by composer Peter Clarke — data/composers/peter-clarke.json",
    "data/composers/peter-clarke.json (HVSC profile: England, b. 1958, d. 2025-07-31, affiliation Ocean Software, employment 1987-)"
  ]
}
```

## Overview

`Colin_Porch` is a raw Player-ID tag found on a single file by composer
**Peter Clarke** (Ocean Software, England). SIDId has no entry for the tag.
Its name plausibly references **Colin Porch**, a real, documented Ocean
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
into the real Colin Porch/Peter Clarke connection at Ocean Software.
`status: stub` — no runtime fact has been confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), MobyGames and
Lemon64 credits for Colin Porch, a Remix64 interview with Peter Clarke, and
the local composer profile.
