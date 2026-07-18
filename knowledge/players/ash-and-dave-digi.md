# Ash&Dave_Digi

```json
{
  "id": "ash-and-dave-digi",
  "name": "Ash&Dave_Digi",
  "aliases": ["Ash&Dave_Digi"],
  "authors": ["Ash & Dave (UK duo, real names not disclosed on CSDb)"],
  "released": "TODO: group formed 1987 per CSDb; earliest locally-tagged file is \"Digital Acid\" / \"Daffy Duck (intro)\", no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 digi/sample routine used in Ash & Dave's own demo/game work, not a released standalone editor — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "No SIDId entry exists for this tag (checked data/sidid.json byTag — null) — everything here comes from this project's own composer aggregation plus CSDb group/release pages.",
    "Ash & Dave is a UK demo/game-dev DUO (CSDb group id 871, est. 1987, alternate name 'Digital Design'), credited on their CSDb group page as having 'done some commercial games for f.e. Activision' — i.e. a coder-composer pair, not a distributed tool vendor. No dedicated 'Ash & Dave Digi' tool/editor release was found on CSDb.",
    "Real corroborating evidence for the 'digi' label: CSDb's release page for 'Digital Acid!' (1988, CSDb release 6636, credited 'Ash' and 'Dave' both Code+Music) carries a comment that the music is 'a sample-mix of \"Humanoid\" by Stakker' — i.e. this specific locally-tagged title (also present here as 'Digital Acid') is independently attested as a sample-based track, not just filename-suggestive.",
    "Only 4 files / 3 composers locally: Ash_and_Dave themselves (2: 'Daffy Duck (intro)', 'Digital Acid'), Martin Walker (1: 'Dragon Breed' — a Thalamus/Ocean-era composer who otherwise built his OWN player for Armalyte per a Commodore Format Archive interview, so this one credit looks like borrowed/reused code rather than his usual routine), and Waz (1: 'Digital Acid (Zaw Remix)' — a remix of Ash & Dave's own 'Digital Acid', consistent with reusing their sample data/routine rather than an independent tool adoption). Concentrated usage, consistent with a personal/small-circle routine rather than a published tool.",
    "CSDb id-namespace note: Ash & Dave's GROUP id (871) coincidentally collides numerically with an unrelated RELEASE id (871 = 'Digi-Organizer V.1' by Padua) — different CSDb namespaces, verified not to be the same page; do not conflate."
  ],
  "sources": [
    "data/sidid.json byTag — confirmed no entry for \"Ash&Dave_Digi\"",
    "CSDb group Ash & Dave (United Kingdom, est. 1987, alt. name 'Digital Design'): https://csdb.dk/group/?id=871",
    "CSDb release 'Digital Acid!' (1988, Ash+Dave, Code+Music; comment: sample-mix of 'Humanoid' by Stakker): https://csdb.dk/release/?id=6636",
    "Commodore Format Archive — Martin Walker interview (built his own player/editor for Armalyte, 1988 Thalamus): https://commodoreformatarchive.com/the-martin-walker-interview/",
    "Local dataset: 4 files tagged Ash&Dave_Digi across 3 composers — Ash_and_Dave (2), Martin Walker (1), Waz (1) — data/composers/*.json aggregation",
    "data/composers/ash-and-dave.json, martin-walker.json, waz.json (profile country/csdb id)"
  ]
}
```

## Overview

Ash&Dave_Digi is the raw Player-ID tag for a digi/sample-playback routine
associated with the British demo/game-coding duo **Ash & Dave** (CSDb group
871, formed 1987, also credited for commercial Activision work). It appears
in only **4 files across 3 composers**: Ash_and_Dave themselves (2), Martin
Walker (1, "Dragon Breed" — otherwise known for his own custom Armalyte
player), and Waz (1, a remix of Ash & Dave's own "Digital Acid"). No SIDId
entry exists for the tag, and no dedicated CSDb tool/editor release was
found — this looks like in-house code rather than a distributed product.
Unlike several sibling tags in this batch there IS independent
corroboration of the "digi" label: CSDb's own release comment on "Digital
Acid!" (1988) states the music is "a sample-mix of 'Humanoid' by Stakker."

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the sample-mix claim is
corroborated by a CSDb release comment on the actual locally-tagged track,
not just the filename; (2) extremely small footprint (4 files/3 composers)
with the two non-Ash&Dave uses both looking like one-off borrowed-code
cases rather than independent tool adoption; (3) no CSDb tool/editor page
exists for a standalone "Ash & Dave Digi" product.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus CSDb group/release pages
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — CSDb group page for Ash & Dave, the "Digital
Acid!" release page and its sample-mix comment, the Martin Walker
interview, and the local composer aggregation.
