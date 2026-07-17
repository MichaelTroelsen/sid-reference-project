# Reiter_Digi

```json
{
  "id": "reiter-digi",
  "name": "Reiter_Digi",
  "aliases": ["Reiter_Digi"],
  "authors": ["Bartosz Stobiecki (Reiter)"],
  "released": "1998",
  "status": "stub",
  "platform": "TODO: appears to be a per-tune custom routine authored by the composer, not a distributed standalone tool — no separate CSDb tool/download release found (only the tunes themselves).",
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
    "All 8 files belong to 'Reiter's Sample Collection #1', a musicdisk released by the Polish group Apidya in September 1998 (Demozoo id 323245: https://demozoo.org/productions/323245/) — the tag exists to carry sample-based tunes for that one release, not general-purpose scene use.",
    "The '_Digi' suffix is a coverage-script naming hint only (bare filename regex in scripts/dev/coverage.js), NOT a confirmed technique. CSDb's SID-entry pages for these files (checked: Oxygene id 43522, Fire id 43523) do not describe the sample/digi mechanism, only load/init/play addresses and file size.",
    "Circumstantial evidence the name is accurate: unusually large data sizes for a single-subtune C64 SID (Oxygene 49,501 bytes; Fire 58,492 bytes) are consistent with embedded PCM sample data, and the release itself is explicitly titled a 'sample collection'. Still not proof of the actual playback mechanism — that remains TODO pending disassembly.",
    "Every checked file reports play address $0000 in its SID header (Oxygene, Fire) while init/load addresses differ per file — consistent with a routine that installs its own interrupt handler at init time rather than being driven by an external play-call convention typical of tracker-style players. Not yet confirmed by disassembly.",
    "Author Bartosz Stobiecki (handle Reiter), Polish, CSDb scener id 4917 — coder/musician, founder of Apidya, also ex-member of Adobe/Alliance/Cobal: https://csdb.dk/scener/?id=4917"
  ],
  "sources": [
    "data/composers/reiter.json aggregation: 8 files, all player=\"Reiter_Digi\", single composer Reiter (Bartosz Stobiecki)",
    "data/sidid.json byTag.Reiter_Digi: {\"author\": \"Bartek Stobiecki (Reiter)\"} — no reference/comment fields present",
    "CSDb scener profile (identity, country, groups): https://csdb.dk/scener/?id=4917",
    "CSDb SID entry, Oxygene (load/init/play, release context): https://csdb.dk/sid/?id=43522",
    "CSDb SID entry, Fire (load/init/play, data size): https://csdb.dk/sid/?id=43523",
    "Demozoo, 'Reiter's sample collection #1' by Apidya, Sept 1998: https://demozoo.org/productions/323245/"
  ]
}
```

## Overview

Reiter_Digi is a **personal, single-composer playback routine**, not a
published scene tool. All 8 files carrying this tag were made by one person —
**Bartosz Stobiecki (Reiter)**, a Polish coder/musician and founder of the
group **Apidya** — and all 8 belong to a single release, *Reiter's Sample
Collection #1* (Apidya, September 1998). There is no evidence of a
distributed editor, a CSDb tool page, or any other composer ever using this
tag. Per the batch's global rule 2, this is exactly the "personal routine"
case: real, but not a product.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: **100% concentration** on one
composer/one release (data/composers/reiter.json); the **"_Digi" name is a
coverage-script hint, not a confirmed mechanism** — CSDb's SID-entry pages
give no description of the actual sample/digi technique, only headers; but
the **unusually large file sizes** (49–58 KB for a single subtune) and the
release's own title ("sample collection") are suggestive circumstantial
evidence in the technique's favor, short of proof; and the **play address is
consistently $0000** across the files checked, which points at a
self-installing interrupt handler rather than a conventional externally-called
play routine — worth checking first if this is ever disassembled.

## Disassembly notes

None done here. No public source or format documentation was found. If
pursued, start from a `.sid` in this set (e.g. Oxygene.sid, load $0CA3 / init
$0D92) and trace what init installs, since play=$0000 implies the loop isn't
driven by the standard init/play call convention.

## Verification

Not verified. No init/play routine was traced or reassembled; all Tier 3
(memory map, entry points beyond header addresses, data format, effects) is
`TODO`. `status: stub` — identity (author, single-release provenance) is
sourced from CSDb/SIDId/local aggregation only.

## Sources

See the `sources` array — local composer-data aggregation, SIDId's sidid.nfo
entry, CSDb's scener profile and two SID-entry pages, and Demozoo's release
page for the one musicdisk this routine was made for.
