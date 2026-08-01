# Andy Wilson

```json
{
  "id": "andy-wilson",
  "name": "Andy Wilson",
  "aliases": ["Andy_Wilson"],
  "authors": ["Andy Wilson"],
  "released": "1986 — not a distributed-tool release date; it is the release year recorded on the sole tagged file's own CSDb SID entry, whose Released field reads '1986 Virgin Games/Gang of Five' (the C64 game 'Dan Dare - Pilot of the Future'). See https://csdb.dk/sid/?id=4078",
  "status": "stub",
  "platform": "Native C64, in-house game-music routine embedded in the C64 game 'Dan Dare - Pilot of the Future' (Virgin Games / Gang of Five, 1986) — not a distributed editor/tool. No dedicated CSDb tool/editor release page exists for 'Andy Wilson' or 'Andy_Wilson'. Source: https://csdb.dk/sid/?id=4078",
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
    "SIDId's sidid.nfo has NO entry for 'Andy_Wilson' (checked) — Player-ID-only signature.",
    "The single locally tagged file — 'Dan Dare - Pilot of the Future' — is attributed in the LOCAL COMPOSER dataset to composer 'BOGG' (Graham Marsh, England, CSDb scener 7729), NOT to 'Andy Wilson' — i.e. Player-ID's identified routine author ('Andy Wilson') differs from the HVSC-catalogued composer ('BOGG') for this file. CSDb's own SID entry (id 4078) resolves this as a two-name co-composer credit, 'Graham Marsh & Andy Wilson', for the game's music — not evidence of a reused/covered routine from an unrelated source. Andy Wilson's own biographical identity (CSDb scener page, role at 'Gang of Five') is still unresolved — a same-named 'Andy' handle found on a later redistribution (CSDb release 84677) turned out to be a mismatched link to an unrelated scener (see below); do not assume that is the same person either.",
    "Single-file, single-composer-in-catalogue tag — a very narrow signature, consistent with either a personal routine or a one-off reused/covered player.",
    "PSID header of the one tagged file (via CSDb SID entry id 4078, not disassembled): LoadAddr $720A (29194), InitAddr $7540 (30016), PlayAddr $7570 (30064), 2 subtunes, 6581, PAL. Header metadata only — NOT a Tier 3 disassembly fact, recorded here per project convention.",
    "The file's own CSDb 'Author' field is 'Graham Marsh & Andy Wilson' and 'Released' field is '1986 Virgin Games/Gang of Five' — i.e. Andy Wilson is CSDb-credited as co-composer of the routine used in the C64 game 'Dan Dare - Pilot of the Future', published by Virgin Games, developed by a team credited 'Gang of Five'. https://csdb.dk/sid/?id=4078",
    "A later cracked/redistributed one-file demo of this music, CSDb release id 84677 ('Dan Dare Music' / 'Dan Dare Sound', Elite Cracking Group, 1986), credits Music to handle 'Bogg' and a second handle literally named 'Andy' (CSDb handle id 22517). CSDb's own database links that 'Andy' handle to scener id 20116 ('Toxic Waste', Germany, active ~1999-2005) — a clear mismatch/dead link, NOT evidence for the 1986 Andy Wilson's identity. Discarded lead, recorded so it isn't re-chased. https://csdb.dk/release/?id=84677",
    "remix64's BOGG interview confirms Dan Dare was one of only two paid commercial jobs BOGG ever did ('I only actually did 2 paid jobs I think, the other being Dan Dare') but does not mention Andy Wilson by name or describe how the routine/co-composition split worked. http://www.remix64.com/interviews/interview-the-mighty-bogg.html"
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Andy_Wilson': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener BOGG / Graham Marsh (England, HVSC-catalogued composer of the one tagged file, distinct from tag's 'Andy Wilson' attribution): https://csdb.dk/scener/?id=7729",
    "Local dataset: 1 file tagged Andy_Wilson — 'Dan Dare - Pilot of the Future', catalogued composer BOGG — see data/composers/bogg.json",
    "CSDb webservice, SID entry id 4078 (Author, Released, PSID header fields, UsedIn releases): https://csdb.dk/sid/?id=4078",
    "CSDb webservice, release id 84677 ('Dan Dare Music', ECG, 1986 — credits 'Bogg' + 'Andy' for Music): https://csdb.dk/release/?id=84677",
    "CSDb webservice, scener id 20116 ('Toxic Waste', Germany) — checked and found to be an unrelated mismatch for the 'Andy' credit above, not Andy Wilson: https://csdb.dk/scener/?id=20116",
    "remix64.com interview with BOGG (confirms Dan Dare was a paid commercial job, no further Andy Wilson detail): http://www.remix64.com/interviews/interview-the-mighty-bogg.html"
  ]
}
```

## Overview

`Andy_Wilson` is a raw Player-ID tag with a single locally tagged file,
"Dan Dare - Pilot of the Future" — catalogued under composer **BOGG**
(Graham Marsh, England) in the local HVSC-derived dataset, but the
Player-ID-identified routine author is a DIFFERENT name, "Andy Wilson".
CSDb's own SID entry for this file (id 4078) confirms the split: `Author`
is "Graham Marsh & Andy Wilson" and `Released` is "1986 Virgin Games/Gang
of Five" — the file is the in-game music for the C64 game "Dan Dare -
Pilot of the Future", published by Virgin Games and developed by a team
credited "Gang of Five". This is a single-game, in-house routine, not a
distributed editor/tool: SIDId has no entry for the tag, and no dedicated
CSDb tool/editor release page exists under "Andy Wilson" or "Andy_Wilson".
Composer concentration: exactly 1 composer-in-catalogue (BOGG) across the
1 tagged file — as narrow a signature as this dataset has.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag's author name ("Andy
Wilson") and the file's catalogued HVSC composer ("BOGG") do not match —
CSDb's own SID entry resolves this as a two-person co-composer credit
("Graham Marsh & Andy Wilson") for the game's music, not a routine
reused/covered from an unrelated source. Andy Wilson's own identity
(a CSDb scener page, a role at "Gang of Five", etc.) remains unresolved:
a same-named handle "Andy" turned up on a later cracked redistribution of
this music (CSDb release 84677) but CSDb links that handle to an unrelated
German scener active in 1999-2005 — a mismatch, not a lead, and is recorded
as a discarded dead end rather than re-chased.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified — no disassembly performed. This card is seeded from cached
local data (`data/composers/bogg.json`, `data/sidid.json`) plus Tier 2
provenance research (CSDb webservice queries for the SID entry, the release
that redistributed it, and a scener-id check; the remix64 BOGG interview).
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), CSDb scener page
for the catalogued composer BOGG, CSDb's SID/release webservice records for
the one tagged file and its 1986 game context, a discarded scener-id lead,
the remix64 BOGG interview, and the local file aggregation.
