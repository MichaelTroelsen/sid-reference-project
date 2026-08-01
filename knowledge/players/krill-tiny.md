# Krill_tiny

```json
{
  "id": "krill-tiny",
  "name": "Krill_tiny",
  "aliases": ["Krill_tiny"],
  "authors": ["Krill (Gunnar Ruthenberg), Germany — coder, member of Plush(+H) since 1999 (CSDb scener id 8104, https://csdb.dk/scener/?id=8104). Confirmed NOT Thomas Egeskov Petersen — that is a different, unrelated Danish composer (2007 'Joe Gunn'); the two share no CSDb link. Krill's own CSDb profile lists 'Artefacts (2006)' and 'Softwired 4K Intro (2021)' among his coding credits — the exact two releases the two Krill_tiny-tagged SIDs come from — so the tag plausibly names a tiny replay routine Krill wrote as part of his coding work on these 4K intros, not a general-purpose tracker/editor of his own composition."],
  "released": "TODO: no single release date for the routine itself. Earliest attested use: 2006-04-15, 'Artefacts' 4K intro, Breakpoint 2006, 1st place C64 4K Intro (CSDb SID id 12050). Latest attested use: 2021-02-14, 'Softwired' 4K intro, Intro Creation Competition 2020 (ICC2020), 1st place C64 4K Intro (CSDb SID id 59106). Both releases are by/with Plush — consistent with Krill's Plush membership.",
  "status": "stub",
  "platform": "Native C64 — appears to be an extreme-size-optimized micro replay routine embedded in 4K-intro-class releases (both known uses are 'C64 4K Intro' competition entries), not a standalone editor/tracker. No SIDId entry or CSDb tool/player page exists under 'Krill_tiny' or 'Krill's [something]' (checked via csdb.dk search — CSDb only lists 'Krill's Loader', an unrelated disk loader, under Krill's name). No public source found (GitHub search for a Krill C64 player/driver returned nothing; a 2013 'krillbuild' repo is a build environment for the unrelated loader).",
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
    "2 files, 2 composers — NEITHER is Krill himself: Dalezy (Ronny Engmann, 'Softwired', csdb SID id 59106) and Fanta (Alexander Rotzsch, 'Artefacts', csdb SID id 12050), both Germany. Census of both tagged files is complete (2 of 2).",
    "CORRECTED from an earlier draft of this card: the tag does NOT name Thomas Egeskov Petersen. CSDb confirms 'Krill' is the scene handle of Gunnar Ruthenberg (Germany, Plush(+H) coder since 1999, CSDb scener id 8104) — a distinct person with no CSDb link to Thomas Egeskov Petersen, who is an unrelated Danish composer credited on the 2007 game 'Joe Gunn'.",
    "Both tagged SIDs are music from Krill's own coding credits: CSDb lists 'Artefacts (2006)' and 'Softwired 4K Intro (2021)' directly on Krill's scener profile as releases he coded — exactly the two releases these two files are the soundtracks of. This is real (if still circumstantial) evidence that 'Krill_tiny' is a tiny replay routine Krill wrote for his own extreme-size-constrained (4K) intro code, used by the intros' respective musicians (Dalezy, Fanta) rather than by Krill as a composer.",
    "Both known uses are 'C64 4K Intro' competition category entries (1st place at Breakpoint 2006 and at Intro Creation Competition 2020/ICC2020 respectively) and both releases are attributed to/with the group Plush — consistent with a tight-fit driver purpose-built for the 4K size class, reused across two Plush 4K intros 15 years apart.",
    "No SIDId entry exists for 'Krill_tiny' (checked data/sidid.json directly). No CSDb tool/player page exists under this name either — CSDb search for 'Krill' surfaces only the unrelated 'Krill's Loader' (a disk loader tool, also by Plush, unrelated to music playback).",
    "PSID header data (not a runtime fact — recorded here only): Softwired.sid has LoadAddr=$1000, InitAddr=$1129, PlayAddr=$1000 (PlayAddr==LoadAddr, unusual); Artefacts.sid has LoadAddr=$1000, InitAddr=$1000, PlayAddr=$1026. The two files' header addresses are NOT identical to each other, so if this is genuinely one shared driver its code is not loaded at a fixed absolute address across releases — or the two are size-optimized custom builds sharing only a naming convention. Not disassembled; do not read this as a memory map."
  ],
  "sources": [
    "Local dataset: data/composers/dalezy.json (Softwired, csdb_id 59106), data/composers/fanta.json (Artefacts, csdb_id 12050); knowledge/COVERAGE.md rank #66",
    "data/sidid.json byTag — checked, no entry for 'Krill_tiny'",
    "CSDb webservice, scripts/lib/csdb-client.js getSidRelease(59106) and getSidRelease(12050) — Released/UsedIn/PSID-header fields for both files",
    "https://csdb.dk/scener/?id=8104 — Krill's scener profile: real handle owner Gunnar Ruthenberg, Plush(+H) member since 1999, coding credits list 'Artefacts (2006)' and 'Softwired 4K Intro (2021)'",
    "https://csdb.dk/search/?search=krill — confirms only 'Krill's Loader' (an unrelated disk loader) and the two SID/release matches above exist under this name; no player/tool page",
    "https://csdb.dk/search/?search=Gunnar+Ruthenberg — cross-confirms Gunnar Ruthenberg = Krill via a separate SID credit ('Transwarp', 2020, Plush)",
    "https://csdb.dk/search/?search=Thomas+Egeskov+Petersen — confirms this is a distinct, unrelated composer (2007 'Joe Gunn'), ruling out the earlier draft's identification",
    "GitHub search (github.com/search?q=krill+c64+player) — no public source repo found for a Krill C64 music player/driver"
  ]
}
```

## Overview

`Krill_tiny` is a raw Player-ID tag covering 2 files (census complete),
naming a size-optimized micro replay routine tied to German C64 coder
**Krill (Gunnar Ruthenberg)**, a Plush(+H) member since 1999. Neither
tagged file is by Krill as a composer — both are by other composers
(Dalezy/Ronny Engmann, Fanta/Alexander Rotzsch) — but CSDb's own profile
for Krill lists 'Artefacts (2006)' and 'Softwired 4K Intro (2021)' among
his coding credits, and those are exactly the two releases these two
files are the soundtracks of. That is real (if still circumstantial)
evidence Krill coded a tiny replay routine for his own 4K-intro work,
which the intros' musicians then used — not a general-purpose tracker of
his own composition, and not a routine composers picked up independently
of him. Both known uses are top-placed 'C64 4K Intro' compo entries for
Plush, 15 years apart, which fits a purpose-built tight-fit driver rather
than a widely-circulated tool. Composer concentration (2 files, 2
composers, neither Krill) reads as a small in-house/collaborative routine,
not a personal one.

## Quirks & gotchas

See the `quirks` array. Headline correction: an earlier draft of this card
speculated the tag named Danish composer Thomas Egeskov Petersen — CSDb
confirms that is a different, unrelated person, and the real Krill is
Gunnar Ruthenberg of Plush(+H). The load-bearing point otherwise still
holds: this reads as a routine coded by "Krill" and used by OTHER
composers within his own 4K-intro releases, not a routine he composed
music with himself.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`. PSID header load/init/play addresses for
both files were read directly off CSDb and are recorded in `quirks` only
— per project discipline, header metadata is not a disassembly fact and
must not be promoted into `entry`/`memory`.

## Verification

**Not verified — `status: stub`.** Local composer/usage data plus CSDb
provenance (scener profile, SID release metadata) are now cited for every
non-TODO fact. The corrected Krill=Gunnar Ruthenberg identification is
sourced to CSDb, not name-matching. No SIDId entry exists, no CSDb
tool/player page exists, and no public source was found. No runtime fact
was guessed.

## Sources

See the `sources` array — local composer data, CSDb webservice SID
records for both files, and CSDb's scener profile for Krill (id 8104).
