# Drumtex (player routine)

```json
{
  "id": "drumtex",
  "name": "Drumtex (player routine)",
  "aliases": ["Drumtex"],
  "authors": ["Vidar Bang (Drumtex)"],
  "released": "TODO: no formal release date exists for the routine itself — SIDId's sidid.nfo entry carries only AUTHOR, no RELEASED/REFERENCE field. Full census of all 9 CSDb sid-entries tagged 'Drumtex' (queried via csdb.dk's XML webservice, type=sid, one call per file, 2026-07-31) gives earliest attested year 2017: 'Captain Cloudberry (loader)' (https://csdb.dk/sid/?id=55359, Released='2017 Megastyle'), followed by four 2018 tunes ('Spikes' id=55360, 'Tacky' id=55361, 'Vector Runner' id=55362, 'Trump Tower' id=56196, all 'Released: 2018 Megastyle') and four 2019 tunes ('Self Control' id=56704, 'Docster's Digger' id=57095, 'Mancave' id=57096, all 'Released: 2019 Megastyle'; 'Bruce Lee - Return of Fury' id=56705, 'Released: 2019 Rebel Android'). This is earliest-tune-attested, not a tool release date — the routine itself may predate 2017 (Drumtex/Vidar Bang's CSDb scener trivia says he 'returned to Megastyle in 2016' after decades away, https://csdb.dk/webservice/?type=scener&id=5623 — the routine could be from that 2016 return or earlier, but no tagged file evidences it).",
  "status": "stub",
  "platform": "Native C64, in-house/personal player routine, not a distributed editor or standalone tool. No CSDb release page, source repo, or documentation for a 'Drumtex' music-editor/tool was found. Confirmed via targeted web searches (2026-07-31) including 'site:csdb.dk Drumtex player OR editor OR routine', 'Drumtex player routine C64 SID Vidar Bang Megastyle', and 'forum64.de Drumtex Player C64' — no thread on Lemon64 or Forum64, no CSDb release entry, and no Codebase64 article name 'Drumtex' as a released tool; all hits resolve to Vidar Bang's music-composer credits on individual game releases, not a tool. This absence, plus the composer-concentration pattern (below), supports the existing inference that this is a composer's own hand-coded/embedded music driver rather than a published editor — inference from evidence, not a sourced statement of intent.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: not researched",
    "zero_page": "TODO: not researched",
    "layout": "TODO: not researched"
  },
  "entry": {
    "init": "TODO: no disassembly performed",
    "play": "TODO: no disassembly performed"
  },
  "speed": "TODO: no disassembly performed",

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
    "Composer concentration: of the 9 files in this project's dataset tagged 'Drumtex', 7 are by the composer Drumtex (Vidar Bang) himself and 2 are by Widding_Roy_Johan (Roy Johan Widding, handle 'Rotteroy') — see knowledge/COVERAGE.md rank #34 and the local composers/*.json aggregation. Only 2 composers total, one clearly dominant, is the project's own 'likely a personal routine' signal (cf. the Rob Hubbard card's much larger 51-composer spread for a genuinely reused driver).",
    "CIRCUMSTANTIAL, NOT ASSERTED AS AN EDGE: both credited composers (Vidar Bang/Drumtex and Roy Johan Widding/Rotteroy) are members of the Megastyle (Inc.) group per their CSDb scener pages, which is a plausible reason a second composer's files would carry the same Player-ID signature (shared/borrowed in-group code) — but no source, credit line, or manual was found stating this explicitly, so no `derives_from`/`shares_routine_with` edge is recorded.",
    "The SIDId nfo entry (deepsid_dl/sidid.nfo, 'Drumtex' section) has only an AUTHOR line — no RELEASED or REFERENCE (CSDb release id) field, unlike most other entries in the same file. No CSDb release page for a 'Drumtex' tool/routine was found via web search either. Do not assume a specific year or CSDb id.",
    "PSID header metadata (not disassembly facts — recorded here per knowledge/EXTRACTION-TEMPLATE.md, never in Tier 3 fields): all 9 tagged files share LoadAddr=$1000 (4096), but InitAddr/PlayAddr vary per file — most cluster at Init=$1000/Play=$1028-$1048ish, but 'Bruce Lee - Return of Fury' has Init=$1FA0/Play=$1FA3, 'Docster's Digger' has Init=$1530/Play=$1533, and 'Mancave' has Init=$1F40/Play=$1F43 (all via csdb.dk webservice type=sid, depth=1, 2026-07-31). Varying init/play addresses per tune, with a fixed $1000 load base, is consistent with a personal driver reassembled/relinked per-tune rather than a single fixed-address distributed player — supporting, not proving, the personal-routine inference above."
  ],
  "sources": [
    "SIDId database (deepsid_dl/sidid.nfo, 'Drumtex' entry: AUTHOR only, no RELEASED/REFERENCE) — parsed into data/sidid.json byTag.Drumtex = {\"author\":\"Vidar Bang (Drumtex)\"}",
    "knowledge/COVERAGE.md: rank #34, 9 files, grouped raw tag 'Drumtex', source column blank (no public source known)",
    "Local aggregation of data/composers/*.json per-file `player` tags: 9 files total — 7 by composer 'Drumtex', 2 by 'Widding_Roy_Johan'",
    "CSDb scener profile, Drumtex (Vidar Bang), handle history dmx/Lloyd/Flashman, Norway, groups Megastyle Inc. + Jolly Poppers (founder): https://csdb.dk/scener/?id=5623",
    "Local dataset file example confirming the tag in use: 'Self Control', one of the 7 Drumtex-tagged files in data/composers/drumtex.json (exact on-disk filename not recorded in this project's cached data, so no DeepSID file URL is constructed here) — a prior draft of this card incorrectly cited 'Frightness.sid', which is actually tagged 'SoedeSoft/Soundmaster_V1.0' in this dataset, not 'Drumtex'; corrected.",
    "DeepSID file by the second composer using the same tag: https://deepsid.chordian.net/?file=MUSICIANS%2FW%2FWidding_Roy_Johan%2FMancave.sid",
    "Demozoo scener profile for Roy Johan Widding ('Rotteroy', Megastyle) corroborating group overlap: https://demozoo.org/sceners/59230/",
    "Full census of all 9 tagged files' CSDb sid entries via csdb.dk webservice (type=sid, depth=1/2), 2026-07-31, for Released/LoadAddr/InitAddr/PlayAddr fields: https://csdb.dk/sid/?id=55359 (Captain Cloudberry loader), 55360 (Spikes), 55361 (Tacky), 55362 (Vector Runner), 56196 (Trump Tower), 56704 (Self Control), 56705 (Bruce Lee - Return of Fury), 57095 (Docster's Digger), 57096 (Mancave)",
    "CSDb webservice scener record for Drumtex (Vidar Bang, handle ID 5623) confirming 'Joined Megastyle Inc. in July 1989 as a musician... Returned to Megastyle in 2016. Left in 2019': https://csdb.dk/webservice/?type=scener&id=5623",
    "Web searches confirming no distributed 'Drumtex' tool exists (2026-07-31): 'site:csdb.dk Drumtex player OR editor OR routine', 'Drumtex player routine C64 SID Vidar Bang Megastyle', 'forum64.de Drumtex Player C64' — no CSDb release, no Lemon64 (lemon64.com) or Forum64 (forum64.de) thread naming it as a tool; all hits are Vidar Bang's composer credits on individual game releases"
  ]
}
```

## Overview

"Drumtex" is a Player-ID signature tag, not a documented editor or released tool
— no CSDb release page, source repository, manual, or Codebase64 article for a
"Drumtex" music system was found. It resolves in this project's dataset to 9
files (`knowledge/COVERAGE.md` rank #34), 7 of them by the composer Drumtex
(Vidar Bang, Norwegian scener active in Megastyle Inc. and Jolly Poppers) and 2
by Widding_Roy_Johan (Roy Johan Widding, "Rotteroy", also Megastyle). The
SIDId database (`sidid.nfo`) only records an `AUTHOR` field for this tag — no
release year or CSDb reference, unusual compared to most other entries in the
same file. A full census of all 9 tagged files' CSDb `Released` fields (not
filenames or `UsedIn` release years) puts the earliest attested tune at 2017
("Captain Cloudberry (loader)"), with the rest in 2018-2019 — a tune
composition/release-use date, not a tool release date; the routine's true
origin may be earlier (Drumtex's own CSDb scener trivia notes he "returned to
Megastyle in 2016" after a long absence). Native C64 platform is confirmed by
the PSID headers themselves; targeted web searches (CSDb, Lemon64, Forum64,
generic) found no distributed editor/tool release, reinforcing rather than
just inferring the "personal/hand-coded routine" reading. The composer
concentration (2 composers, one dominant) is a separate, corroborating signal
for the same reading, not a sourced fact on its own.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) only 2 composers use
this tag and one (Drumtex himself) accounts for most of the files — a personal-
routine signal, not proof; (2) the second composer sharing the tag (Widding_Roy_Johan)
is in the same demoscene group (Megastyle) as Drumtex, which is a plausible but
*unconfirmed* explanation for the shared signature — no `edges` relationship is
asserted from this alone; (3) PSID headers across all 9 files share a fixed
$1000 load address but vary in init/play address, consistent with a routine
reassembled per-tune rather than a single fixed distributed player.

## Disassembly notes

None performed. No public source or documentation was located to seed a
disassembly target, and Tier 3 reverse-engineering is out of scope for this
pass — see the constraints in `knowledge/EXTRACTION-TEMPLATE.md`.

## Verification

Not verified. This card is seeded entirely from Tier 1 local data
(`data/sidid.json`, `data/composers/*.json`, `knowledge/COVERAGE.md`) plus
Tier 2 web/CSDb provenance research (scener profiles, a full CSDb webservice
census of all 9 tagged sid entries, and Lemon64/Forum64/CSDb searches for a
distributed tool). No runtime fact was disassembled or traced; PSID
load/init/play values were recorded as header metadata in `quirks` only, per
`knowledge/EXTRACTION-TEMPLATE.md`, never written into Tier 3 fields.
`status: stub` is honest here — there is currently no known public source to
even attempt a Tier 3 pass on.

## Sources

See the `sources` array — SIDId's `sidid.nfo`, this project's own
`data/composers/*.json` aggregation, `knowledge/COVERAGE.md`, the CSDb scener
page for Drumtex, and DeepSID file listings for both credited composers.
