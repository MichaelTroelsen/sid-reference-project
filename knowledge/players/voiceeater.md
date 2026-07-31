# Voice Eater (player routine)

```json
{
  "id": "voiceeater",
  "name": "Voice Eater",
  "aliases": ["VoiceEater"],
  "authors": ["Rolf Runar Bakke (Proxxon / The Pretty One, SHAPE) — code, design", "Andreas W. Andersen (SHAPE) — graphics"],
  "released": "1999 (SHAPE), release \"Voice Eater V1.0\"",
  "status": "stub",
  "platform": "Native C64 tool — CSDb lists it as a \"C64 Tool\" release, distributed as a standalone downloadable archive (Shape_1999_VoiceEater1.zip), not a demo-embedded routine.",
  "csdb_release": 33610,

  "memory": {
    "load_address": "TODO: $xxxx (no disassembly or source located)",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO: $xxxx",
    "play": "TODO: $xxxx"
  },
  "speed": "TODO: not disassembled. Note (unverified): filenames of every file in this dataset carry a 'VE-2x'/'VE-4x'/'VE-8x' suffix (e.g. Oh_Boy_VE-2x.sid, Different_Reality_VE-4x.sid, 8_Speed_Thingy_VE-8x.sid), which looks like a composer-added multispeed hint, but this is a filename observation, not a confirmed speed model.",

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
    "sidid.nfo records only author \"Rolf Runar Bakke\", released \"1999 SHAPE\", and reference https://csdb.dk/release/?id=33610 — no playback-technique comment (see data/sidid.json byTag \"VoiceEater\").",
    "In this project's dataset ALL 7 files tagged VoiceEater are by a single composer, Glenn Rune Gallefoss (see data/composers/glenn-gallefoss.json) — 100% composer concentration on this tag, and only ~1.6% of Gallefoss's own 445 cataloged files (he otherwise used many different players, e.g. Geir_Tjelta/SIDDuzz'It, Digitalizer_V2.x). Per EXTRACTION-TEMPLATE.md's concentration heuristic this reads as a personal/small-scene routine tried briefly, not a widely-adopted tool.",
    "CSDb resolves why: Voice Eater's author Rolf Runar Bakke (handles Proxxon / The Pretty One) was a member of the Norwegian group SHAPE (1994-2003, coder/hardware). Its sole user in this dataset, Glenn Rune Gallefoss, was a member of Blues Muz', which Demozoo documents as a formal 'Subgroup of' SHAPE, with most of its ~30 productions co-credited to both groups (e.g. csdb.dk/sid/?id=2700, credited '2001 SHAPE/Blues Muz''). The pattern mirrors icc-thevoice.md: a group-internal tool built by one member, used by a groupmate.",
    "The CSDb release's Production Note, previously unretrieved, was fetched via the XML webservice (type=release, id=33610, depth=2): 'Press H for help page(s). Sequencer, Tracker and Sound editor has seperate help pages.' — confirming Voice Eater is a multi-component tool (separate sequencer/tracker/sound-editor screens with their own help), not a single-screen editor.",
    "Census of all 7 tagged files' own CSDb SID entries (webservice type=sid, ids 2651/2710/2736/2773/2826/2850/2925) shows every tune's `Released` field is 1993-1996 ('SHAPE/Blues Muz''), 3-6 years BEFORE the packaged 'Voice Eater V1.0' CSDb tool release date of 1999. This is the tune's own attested composition/first-release date, not a UsedIn-release year (per EXTRACTION-TEMPLATE.md's date-provenance rule) — it is not being promoted into the `released` field, which still correctly reflects the 1999 packaged-tool release. Unresolved: either an earlier, unpackaged version of the same driver was in use from 1993 and only formally released as 'V1.0' in 1999, or CSDb's per-tune Released field is imprecise here. Flagged, not resolved.",
    "PSID header metadata (not a disassembly fact) from the same census: 6 of 7 files share LoadAddr=InitAddr=$0F00 (3840) with DataSize ~4000 bytes; the outlier 'VE-8x' file (8_Speed_Thingy) has LoadAddr $4000/InitAddr $4140 and a much larger DataSize (10358 bytes) — consistent with the 'VE-8x' filename suffix denoting a distinct, heavier variant (possibly digi/sample data, given the name 'Voice Eater'), but this is a header observation only, not confirmed by disassembly.",
    "No source code, format manual, or Codebase64 article was found for Voice Eater — searches of GitHub, zimmers.net's C64 audio/editors index, and general web search turned up nothing beyond the CSDb release page and the cached DeepSID/SIDId metadata already in this repo. Treat as closed/undocumented; the archive itself (a 1999 SHAPE tool release) has not been examined."
  ],
  "sources": [
    "sidid:VoiceEater (author \"Rolf Runar Bakke\", released \"1999 SHAPE\", reference https://csdb.dk/release/?id=33610) — data/sidid.json byTag",
    "Local dataset: 7 files tagged VoiceEater, all by composer Glenn Rune Gallefoss — knowledge/COVERAGE.md (#36, 7 files) and data/composers/glenn-gallefoss.json (445 files total for this composer)",
    "data/players.json entry \"Voice Eater\" (search: voiceeater, developer Rolf Runar Bakke, start_year 1999, csdb_id 33610, platform \"Native / C64 emulator\") — cached DeepSID players metadata",
    "data/csdb/players.json[\"33610\"] — cached CSDb release fetch: releaseName \"Voice Eater V1.0\", type \"C64 Tool\", releaseDate 1999, releasedBy SHAPE, credits Code/Design: Rolf Runar Bakke, Graphics: Andreas W. Andersen",
    "CSDb release, Voice Eater V1.0: https://csdb.dk/release/?id=33610 (verified live via csdb.dk XML webservice, type=release depth=2/4 — download Shape_1999_VoiceEater1.zip, 911 downloads, Credits: Code+Design Rolf Runar Bakke, Graphics Andreas W. Andersen, Production Note text quoted above)",
    "CSDb XML webservice, type=sid, ids 2651/2710/2736/2773/2826/2850/2925 (all 7 census entries: https://csdb.dk/sid/?id=2651 etc.) — per-tune Released dates 1993-1996 and PSID LoadAddr/InitAddr/DataSize header fields",
    "CSDb scener profile, Rolf Runar Bakke: https://csdb.dk/scener/?id=1295 (handles Proxxon, The Pretty One; group SHAPE 1994-2003)",
    "CSDb SID entry, Pop by Glenn Rune Gallefoss: https://csdb.dk/sid/?id=2700 (credited 2001 SHAPE/Blues Muz')",
    "Demozoo, Blues Muz': https://demozoo.org/groups/7577/ (\"Subgroup of\" SHAPE; lists Glenn Rune Gallefoss as a member, not specifically as a founder)"
  ]
}
```

## Overview

"Voice Eater" (raw tag `VoiceEater`) is a native C64 music tool released by
the Norwegian group SHAPE in 1999 as "Voice Eater V1.0" (CSDb release
`?id=33610`), coded and designed by Rolf Runar Bakke (Proxxon), with graphics
by Andreas W. Andersen. Unlike a demo-embedded driver it is a distributed,
downloadable "C64 Tool" release. In this project's dataset, however, it is
used by exactly one composer — Glenn Rune Gallefoss — across 7 files, only
~1.6% of his own 445 cataloged tunes; he otherwise favoured several other
players. CSDb corroborates the connection between author and user beyond
coincidence: Bakke was a member of SHAPE itself, and Gallefoss was a
member of Blues Muz', a group Demozoo documents as a formal subgroup of
SHAPE, with most of its output co-credited to both groups. The picture is a
group-internal tool that one SHAPE member's frequent musician tried briefly,
similar in shape to `icc-thevoice.md`'s pattern (author and sole user sharing
a demo group) even though Voice Eater, unlike ICC/TheVoice, did get a proper
packaged CSDb tool release. A full census of all 7 tagged files' own CSDb SID
entries adds a wrinkle: every tune's own `Released` date (1993-1996) predates
the packaged "V1.0" tool release (1999) by 3-6 years — flagged as unresolved
in the quirks rather than reconciled, since no source or disassembly was
available to explain it.

## Quirks & gotchas

See the `quirks` array. Load-bearing facts: (1) the 100% composer
concentration on Gallefoss, and its small share (~1.6%) of his overall
output, (2) the SHAPE / Blues Muz' group-membership link between author and
user via CSDb and Demozoo, (3) the CSDb production note text (now retrieved
live via the XML webservice: "Press H for help page(s). Sequencer, Tracker
and Sound editor has seperate help pages.") confirming a multi-screen tool,
(4) the unverified `VE-2x`/`VE-4x`/`VE-8x` filename suffix pattern the
composer applied to his own files, corroborated by a PSID-header split (6/7
files share LoadAddr=InitAddr=$0F00; the `VE-8x` outlier loads at
$4000/$4140 with 2.5x the data size) that is suggestive but unconfirmed by
disassembly, and (5) the unresolved 1993-1996 per-tune date vs. 1999
tool-release date gap noted above.

## Disassembly notes

None. No source archive contents, disassembly, or format documentation was
located — only the CSDb release metadata and cached DeepSID/SIDId fields
already in this repo. A future pass could pull the actual
`Shape_1999_VoiceEater1.zip` archive from CSDb and/or disassemble one of
Gallefoss's `VoiceEater`-tagged `.sid` files from HVSC to recover the
memory map and entry points, since no other path to Tier 3 facts exists.

## Verification

**Not verified — `status: stub`.** Everything beyond identity/provenance
(authors, release, composer-concentration, and the SHAPE/Blues Muz' group
link) is `TODO`. No runtime fact was guessed.

## Sources

See the `sources` array — the cached SIDId entry, the local per-composer
dataset, cached DeepSID/CSDb player metadata already in this repo, and live
CSDb/Demozoo pages for Bakke, Gallefoss, and their respective groups.
