# Reiter_Digi

```json
{
  "id": "reiter-digi",
  "name": "Reiter_Digi",
  "aliases": ["Reiter_Digi"],
  "authors": ["Bartosz Stobiecki (Reiter)"],
  "released": "1998-2003 (per-tune; see quirks — CORRECTED from a 2-file sample. Full census of all 8 CSDb SID entries shows the tag spans six separate C64 Music/C64 Sample Music competition releases, not one collection.)",
  "status": "stub",
  "platform": "CONFIRMED native C64: all 8 files are classified by DeepSID as player_type \"Normal built-in\" (data/composers/reiter.json) — i.e. a routine compiled directly into each .sid, not an invocation of a recognized shared/standalone player. No separate CSDb tool page, download, editor, or cross-platform authoring tool was found for it (checked CSDb release search, the author's scener page, Lemon64 and general web search for 'Reiter Apidya digi' — no hits describing a distributed tool, only the tunes and party-compo results themselves). Consistent with a personal, per-tune, C64-native playback routine rather than a published editor.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: varies per file (e.g. Oxygene.sid loads $0CA3, Fire.sid loads $0C83) — not a fixed shared player address",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO: varies per file (Oxygene $0D92, Fire $0D72 — per CSDb SID-entry headers)",
    "play": "Consistently $0000 across the files checked (Oxygene, Fire) per CSDb's SID-entry headers — suggests the routine self-installs its own IRQ/NMI during init rather than being called via a conventional external play vector. Unconfirmed by disassembly (TODO)."
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
    "Single-composer, 8-file tag (Reiter/Bartosz Stobiecki only) — data/composers/reiter.json aggregation. This is a personal playback routine, not a published tool; no other composer's files use this tag.",
    "CORRECTED (full census of all 8 CSDb SID entries, replacing an earlier 2-file sample): only 2 of the 8 files (Oxygene, Fire) belong to 'Reiter's Sample Collection #1' (Apidya musicdisk, 1998-09-11, CSDb release id 7856; Demozoo id 323245: https://demozoo.org/productions/323245/). The remaining 6 files are each its own separate standalone CSDb 'C64 Music'/'C64 Sample Music' release, one per competition entry: Cubic (id 7893, North Party V6.0, 2000-08-01, 1st place C64 Sample Music), Dusty Vinyl (id 7894, Satellite & Kindergarden 2000, 2000-11-05, 2nd place C64 Music), Moving Up (id 7895, Mekka & Symposium 2001, 2001-04-13/16, 19th place C64 Music), Watch Out (id 7896, dated 2001 in its own Released field but its ReleasedAt event is Symphony 2002 on 2002-07-03 — a genuine inconsistency in CSDb's own data, recorded not resolved), Slice Me Nice (id 7897, North Party V7.0, 2002-10-06, 3rd place C64 Sample Music), Ride on Time (id 26168, North Party V8.0, 2003-08-03, 1st place C64 Sample Music). So the tag covers a 1998-2003 span of competition entries at Polish (and one German) demoparties, not one release.",
    "The '_Digi' suffix is a coverage-script naming hint only (bare filename regex in scripts/dev/coverage.js), NOT a confirmed technique. CSDb's SID-entry pages for these files (checked: Oxygene id 43522, Fire id 43523) do not describe the sample/digi mechanism, only load/init/play addresses and file size.",
    "Circumstantial evidence the name is accurate, now strengthened by a full census: all 8 files (not just the first 2 checked) show unusually large data sizes for single-subtune C64 SIDs — 49,501 to 63,285 bytes (Oxygene 49,501; Watch Out 50,144; Fire 58,492; Dusty Vinyl 57,855; Cubic 62,463; Slice Me Nice 61,074; Ride on Time 63,265; Moving Up 63,285), and the compo category three of them were entered in is literally named 'C64 Sample Music' (Cubic, Slice Me Nice, Ride on Time — per their CSDb release pages). Still not proof of the exact playback mechanism — that remains TODO pending disassembly.",
    "Every checked file reports play address $0000 in its SID header (Oxygene, Fire) while init/load addresses differ per file — consistent with a routine that installs its own interrupt handler at init time rather than being driven by an external play-call convention typical of tracker-style players. Not yet confirmed by disassembly.",
    "Author Bartosz Stobiecki (handle Reiter), Polish, CSDb scener id 4917 — coder/musician, founder of Apidya, also ex-member of Adobe/Alliance/Cobal: https://csdb.dk/scener/?id=4917"
  ],
  "sources": [
    "data/composers/reiter.json aggregation: 8 files, all player=\"Reiter_Digi\", single composer Reiter (Bartosz Stobiecki)",
    "data/sidid.json byTag.Reiter_Digi: {\"author\": \"Bartek Stobiecki (Reiter)\"} — no reference/comment fields present",
    "CSDb scener profile (identity, country, groups): https://csdb.dk/scener/?id=4917",
    "CSDb SID entry, Oxygene (load/init, release 7856): https://csdb.dk/sid/?id=43522",
    "CSDb SID entry, Fire (load/init, data size, release 7856): https://csdb.dk/sid/?id=43523",
    "CSDb SID entry, Cubic (load/init, release 7893, North Party V6.0 2000): https://csdb.dk/sid/?id=43528",
    "CSDb SID entry, Dusty Vinyl (load/init, release 7894, Satellite & Kindergarden 2000): https://csdb.dk/sid/?id=43524",
    "CSDb SID entry, Moving Up (load/init, release 7895, Mekka & Symposium 2001): https://csdb.dk/sid/?id=43525",
    "CSDb SID entry, Watch Out (load/init, release 7896, dated 2001 but event Symphony 2002): https://csdb.dk/sid/?id=43526",
    "CSDb SID entry, Slice Me Nice (load/init, release 7897, North Party V7.0 2002): https://csdb.dk/sid/?id=43527",
    "CSDb SID entry, Ride on Time (load/init, release 26168, North Party V8.0 2003): https://csdb.dk/sid/?id=43529",
    "CSDb webservice (type=sid, all 8 ids) queried directly via scripts/lib/csdb-client.js, 2026-07-31 — full census, not a sample",
    "Demozoo, 'Reiter's sample collection #1' by Apidya, Sept 1998: https://demozoo.org/productions/323245/",
    "WebSearch for 'Reiter Apidya digi routine' / Lemon64 — no distributed tool page or editor found, only the tunes and compo results (searched 2026-07-31)"
  ]
}
```

## Overview

Reiter_Digi is a **personal, single-composer playback routine**, not a
published scene tool. All 8 files carrying this tag were made by one person —
**Bartosz Stobiecki (Reiter)**, a Polish coder/musician and founder of the
group **Apidya**. A full census of all 8 CSDb SID entries (correcting an
earlier 2-file sample) shows they do **not** all belong to one release: only
2 (Oxygene, Fire) are from *Reiter's Sample Collection #1* (Apidya, September
1998); the other 6 are each a standalone C64 Music/C64 Sample Music
demoparty-competition entry spanning 2000-2003 (Cubic, Dusty Vinyl, Moving
Up, Watch Out, Slice Me Nice, Ride on Time — see `quirks` for the individual
release ids and events). DeepSID classifies all 8 as `player_type: "Normal
built-in"` — a routine compiled per-file, confirming native-C64, non-shared
playback code. There is no evidence of a distributed editor, a CSDb tool
page, or any other composer ever using this tag (checked CSDb, Lemon64, and
general web search — see `sources`). Per the batch's global rule 2, this is
exactly the "personal routine" case: real, but not a product.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: **100% concentration** on one
composer (data/composers/reiter.json), but **NOT one release** — a full
census of all 8 CSDb SID entries (correcting the card's earlier 2-file
sample) found 6 distinct releases, 1998-2003; the **"_Digi" name is a
coverage-script hint, not a confirmed mechanism** — CSDb's SID-entry pages
give no description of the actual sample/digi technique, only headers; but
the **unusually large file sizes** (49-63 KB across all 8 files, not just the
2 originally checked) and three files' compo category being literally named
"C64 Sample Music" are suggestive circumstantial evidence in the technique's
favor, short of proof; and the **play address is consistently $0000** across
the 2 files checked via CSDb's HTML pages (the XML webservice does not expose
PlayAddr at all, so the other 6 remain unchecked on this specific point),
which points at a self-installing interrupt handler rather than a
conventional externally-called play routine — worth checking first if this
is ever disassembled. `platform` is now confirmed native C64 via DeepSID's
own `player_type: "Normal built-in"` classification (Tier 1 data, not
previously used in this card).

## Disassembly notes

None done here. No public source or format documentation was found. If
pursued, start from a `.sid` in this set (e.g. Oxygene.sid, load $0CA3 / init
$0D92) and trace what init installs, since play=$0000 implies the loop isn't
driven by the standard init/play call convention.

## Verification

Not verified. No init/play routine was traced or reassembled; all Tier 3
(memory map, entry points beyond header addresses, data format, effects) is
`TODO`. `status: stub` — identity and provenance (author, platform, and the
corrected multi-release chronology) are sourced from a full census of
CSDb/SIDId/local aggregation, not disassembly.

## Sources

See the `sources` array — local composer-data aggregation (including
DeepSID's `player_type` field), SIDId's sidid.nfo entry, CSDb's scener
profile, all 8 CSDb SID-entry pages (queried both via the HTML pages for the
first 2 and the XML webservice for a full census of all 8), and Demozoo's
release page for the one musicdisk 2 of the 8 files belong to.
