# Walt_Digi

```json
{
  "id": "walt-digi",
  "name": "Walt_Digi",
  "aliases": ["Walt_Digi"],
  "authors": ["Anders Fogh (Walt)"],
  "released": "No dedicated tool-release date exists (no CSDb tool/release entry for this player). Census of all 5 locally-tagged files via CSDb webservice (type=sid): every file's own 'Released' field reads '1991 Bonzai', and all 5 are used in CSDb release id 2949 'Amiga Works 2' (30 May 1991, Bonzai); part 5 is also reused later in 'Fantastic Megademo #1' (CSDb release id 95875, 1993), a reuse of the file, not a second release of the routine",
  "status": "stub",
  "platform": "Native C64 routine, not a redistributable editor/tool: personal digi/sample-playback code embedded per-demo-part in Walt's own tracks, distinct from his published 'Walt's Music Editor' (knowledge/players/walt-bonzai.md). Evidence: DeepSID's curated players.json has no entry for 'Walt_Digi' (only 'Walt's Music Editor v2.0', csdb_id 12580); CSDb release 2949 'Amiga Works 2' credits Walt only with Charset/Graphics/Music/Code roles (no distinct Sampling/Player role); and PSID load/init addresses differ across all 5 census files (not a fixed engine base) — see quirks for the per-file addresses",
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
    "This tag is explicitly the sibling flagged (but deliberately NOT merged) by knowledge/players/walt-bonzai.md's own quirks: \"'Walt_Digi' is a SEPARATE raw tag/family in this project's aggregation..., also attributed to Anders Fogh (Walt) in data/sidid.json, but with no released/reference fields and no evidence tying it structurally to this editor's main player routine. Likely a companion digi-sample playback routine by the same author, but no edges entry is asserted here — similar name/author is not evidence of shared code.\" This card exists to give that sibling tag its own record.",
    "SIDId (data/sidid.json byTag.\"Walt_Digi\") records only 'AUTHOR: Anders Fogh (Walt)' — no name, released date, or comment.",
    "CSDb's scener page for Walt (id 1857) credits him with code/music/graphics/charset roles (not 'Sampling') on 'Amiga Works' and 'Amiga Works 2' (1991, Bonzai) — the productions matching several of the 5 locally-tagged filenames ('Amiga Works II (part 1/2/3)', etc.). No distinct sampling-role credit was found matching these specific files; the only 'Sampling'-role credit on his page at all is on a much later, unrelated 2022 release ('FIFA 2022').",
    "Fully single-composer usage: all 5 locally-tagged files belong to Walt (data/composers/walt.json); several are co-credited with Bjarke Vangsgaard as author (no CSDb scener profile match found for Vangsgaard during this research pass).",
    "Census of all 5 tagged files (not a sample) via CSDb webservice type=sid, csdb_id 30591/30593/30595/30597/30599: every one reports 'Released': '1991 Bonzai' and PSID load/init addresses that differ file-to-file — part 1: load $0A00 / init $0E00; part 2: load $1000 / init $8000; part 3: load $1000 / init $C000; part 4: load $0A00 / init $0E00; part 5: load $0900 / init $0900. Per EXTRACTION-TEMPLATE.md rule, these are PSID header metadata only, not disassembly facts, so they are recorded here (and cited as supporting evidence for `platform`'s 'not a fixed engine base' claim) rather than written into the Tier 3 `entry`/`memory` fields, which remain TODO.",
    "CSDb release id 2949 ('Amiga Works 2', 30 May 1991, Bonzai — the demo all 5 files are used in) was queried directly for its own credit list (webservice type=release depth=2): Walt is credited Charset/Graphics/Music/Code; a second musician 'Clarke' (handle id 4644) is also credited Music; no 'Sampling' or 'Player'-authorship credit role appears anywhere on the release. This is a moderate confirmation that CSDb does not treat the digi routine as an attributable separate work.",
    "DeepSID's curated data/players.json has exactly one entry under 'Walt' — 'Walt's Music Editor v2.0' (csdb_id 12580) — and no separate entry for 'Walt_Digi' or any digi/sample tool by this author, consistent with no dedicated tool/release existing for this tag.",
    "Web search of Lemon64 (lemon64.com) and Forum64 (forum64.de) turned up no thread mentioning 'Walt_Digi' specifically; a search-engine AI summary confidently asserted Lemon64/Forum64 'confirm' a 'Walt_Digi sample playback routine' but none of the actual result links supported that claim on inspection — discarded per EXTRACTION-TEMPLATE.md's warning that AI search summaries are leads, never sources."
  ],
  "sources": [
    "Cross-reference: knowledge/players/walt-bonzai.md quirks array (notes 'Walt_Digi' as a separate, not-merged sibling tag by the same author)",
    "SIDId sidid.nfo (author only): data/sidid.json byTag.\"Walt_Digi\"",
    "CSDb scener profile, Walt / Anders Fogh (groups Bonzai, Miami Fun Project; Denmark; code/music/graphics credits on 'Amiga Works'/'Amiga Works 2', no matching Sampling credit): https://csdb.dk/scener/?id=1857",
    "CSDb SID-file entries, all 5 queried directly via webservice (type=sid): https://csdb.dk/sid/?id=30591, https://csdb.dk/sid/?id=30593, https://csdb.dk/sid/?id=30595, https://csdb.dk/sid/?id=30597, https://csdb.dk/sid/?id=30599",
    "CSDb release 'Amiga Works 2' (id 2949, 30 May 1991, Bonzai), queried directly for its Credits list via webservice: https://csdb.dk/release/?id=2949",
    "DeepSID players.json checked for any 'Walt_Digi'/digi entry under this author — none found besides 'Walt's Music Editor v2.0' (csdb_id 12580): data/players.json",
    "Web search of Lemon64 (lemon64.com) and Forum64 (forum64.de) for 'Walt_Digi' — no matching thread found (negative result)",
    "Local dataset: 5 files tagged 'Walt_Digi', all under composer Walt — data/composers/walt.json"
  ]
}
```

## Overview

Walt_Digi is the local/SIDId raw tag for a digi/sample-playback routine
attributed to **Anders Fogh**, handle **Walt**, a Danish scener (group
Bonzai) — the same composer behind the published "Walt's Music Editor" (see
`knowledge/players/walt-bonzai.md`). That sibling card explicitly declines to
merge this tag in, treating it as a separate, unproven companion routine by
the same author; this card exists to give `Walt_Digi` its own honest record.
SIDId carries only an author line for this tag. All 5 locally-tagged files
(a full census, not a sample) belong to Walt himself, from the "Amiga Works
II" series — each file's own CSDb "Released" field reads "1991 Bonzai", and
all 5 are used in CSDb release id 2949 "Amiga Works 2" (30 May 1991). No
dedicated CSDb tool/release entry, and no DeepSID `players.json` entry,
exists for this routine — it appears to be native C64 code embedded per
demo-part rather than a redistributable editor: the 5 files' PSID headers
carry five different load/init address pairs, and CSDb's own credit list for
"Amiga Works 2" gives Walt only Charset/Graphics/Music/Code roles, not a
distinct "Sampling" role.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) this is the explicitly-flagged
sibling of `walt-bonzai.md`'s main tag, deliberately kept separate per this
project's "similar names/authors are not evidence of shared code" rule; (2)
SIDId has author only, no release/reference; (3) no CSDb "Sampling"-role
credit matches these specific files — only code/music/graphics roles are
credited on the matching "Amiga Works" productions; (4) a full census of all
5 tagged files' PSID headers shows five different load/init address pairs,
which is why `platform` reads "not a fixed engine base" rather than naming
one; (5) a search-engine AI summary invented a "confirmed" Lemon64/Forum64
mention of "Walt_Digi" that did not exist in the actual result pages —
discarded, not cited.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found for
this tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`, seeded from the sibling
`walt-bonzai.md` card's own prior research, SIDId, CSDb's Walt scener
profile, a full census of all 5 tagged files' CSDb SID-file records, CSDb's
"Amiga Works 2" release credit list, DeepSID's `players.json`, and local
dataset aggregation. `released` and `platform` are now identity/provenance
facts backed by a full census rather than a single sampled file; `csdb_release`
stays `null` because no dedicated tool/release entry was found anywhere
searched. No runtime fact has been disassembled or traced — `status` stays
`stub`.

## Sources

See the `sources` array — the `walt-bonzai.md` cross-reference, SIDId's
sidid.nfo, CSDb's Walt scener profile, all 5 CSDb SID-file entries (a full
census), CSDb release 2949's credit list, DeepSID's `players.json`, a
Lemon64/Forum64 negative-result search, and local composer-file aggregation.
