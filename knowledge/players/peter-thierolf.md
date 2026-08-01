# Peter_Thierolf

```json
{
  "id": "peter-thierolf",
  "name": "Peter_Thierolf",
  "aliases": ["Peter_Thierolf"],
  "authors": ["Peter Thierolf"],
  "released": "1986 (earliest attestation, not a player/tool release date) — both tagged tunes' own CSDb entries give 'Release Date: 1986 64'er/Markt & Technik' (No Rain Song, csdb.dk/sid/?id=28935; Quality, csdb.dk/sid/?id=1822), i.e. published as type-in listings in the German computer magazine 64'er. No separate tool/editor release exists to date.",
  "status": "stub",
  "platform": "Native C64 — reads as Peter Thierolf's own in-house routine (the tag is literally his name), consistent with a magazine type-in listing rather than a distributed editor. His CSDb scener profile (csdb.dk/scener/?id=12519) credits him only as coder/musician and notes he later 'programmed the editor for Chris' Amiga music player TFMX' — no C64 player/tool of his own is listed there. No SIDId entry, no CSDb tool/release page, no Lemon64 forum-search hit for 'Peter Thierolf'; Forum64 search returned HTTP 403 (could not check).",
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
    "2 files, 1 composer (100% Peter Thierolf, Germany) — a textbook personal routine; the tag is literally the composer's own name.",
    "No SIDId entry exists for 'Peter_Thierolf' (checked data/sidid.json directly).",
    "Both tagged tunes carry the same CSDb-recorded release channel — '1986 64'er/Markt & Technik', a German computer magazine — consistent with a personal magazine type-in routine rather than a scene-released tool.",
    "Per his CSDb scener profile, Thierolf later 'programmed the editor for Chris' Amiga music player TFMX' (Chris Hülsbeck's Amiga driver) — unrelated to this C64 tag, but the only tool-programming credit found for him anywhere."
  ],
  "sources": [
    "Local dataset: data/composers/peter-thierolf.json — 2 files (No Rain Song csdb_id 28935, Quality csdb_id 1822); knowledge/COVERAGE.md rank #85 (note: COVERAGE.md has since been regenerated and no longer lists this family individually — see knowledge/players/peter-thierolf.md history)",
    "data/sidid.json byTag — checked, no entry for 'Peter_Thierolf'",
    "https://csdb.dk/sid/?id=28935 — 'No Rain Song', Release Date '1986 64'er/Markt & Technik', no player/tool credited",
    "https://csdb.dk/sid/?id=1822 — 'Quality', Release Date '1986 64'er/Markt & Technik', no player/tool credited",
    "https://csdb.dk/scener/?id=12519 — Peter Thierolf's CSDb scener profile: coder/musician, ex-member of A.U.D.I.O.S. Entertainment, no C64 player/tool credited; TFMX editor trivia",
    "Lemon64 forum search for 'Peter Thierolf' (lemon64.com/forum/search.php) — no hits",
    "Forum64 search (forum64.de) — attempted, returned HTTP 403; not checked further"
  ]
}
```

## Overview

`Peter_Thierolf` is a raw Player-ID tag covering 2 files, both by German
composer **Peter Thierolf** himself — the tag is literally his own name,
consistent with a personal, uncatalogued in-house routine rather than a
published tool. No SIDId entry or CSDb tool page exists for it. Both tagged
tunes ("No Rain Song", "Quality") carry the same CSDb release channel — 1986,
via the German magazine 64'er (Markt & Technik) — which is the earliest and
only date attestation found; it documents a magazine listing, not a tool
release. Thierolf's CSDb scener profile credits him as coder/musician with
no C64 player/tool of his own, though it notes he later programmed the
editor for Chris Hülsbeck's Amiga TFMX driver.

## Quirks & gotchas

See the `quirks` array — a minimal, single-composer personal routine
published via a magazine type-in listing, with no dedicated tool page found
on CSDb, Lemon64, or Forum64 (the last returned HTTP 403 on search).

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only local composer/usage data is
confirmed. No SIDId entry exists. No runtime fact was guessed.

## Sources

See the `sources` array — local composer data, SIDId (no match), and CSDb
sid/scener pages for the 1986 magazine-release attestation and the absence
of any credited C64 tool. Lemon64 and Forum64 were searched; Forum64's
search page returned HTTP 403.
