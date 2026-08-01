# Rule3_Digi_2

```json
{
  "id": "rule3-digi-2",
  "name": "Rule3_Digi_2",
  "aliases": ["Rule3_Digi_2"],
  "authors": ["Marcin Jędrusik (Helios)"],
  "released": "1996 Rule3",
  "status": "stub",
  "platform": "Native C64, in-house/embedded digi routine — not a distributed editor/tool. Both censused files carry DeepSID `player_type: \"Normal built-in\"` (built into the SID itself, not an external tracker), and no dedicated CSDb tool/release page for 'Rule3_Digi' exists under any name (checked CSDb scener #15843, group #746, and web search).",
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
    "SIDId's entry for this tag has only an AUTHOR line — no NAME, RELEASED, REFERENCE, or COMMENT (data/sidid.json byTag['Rule3_Digi_2']) — no playback-technique claim, so per this project's rule ('digi by name is not evidence') none is asserted here.",
    "'Rule3' in the tag name is a real Polish C64 group (CSDb group #746), not a version/revision number — the composer's own local profile id combines group+handle as 'rule3-helios' (data/composers/rule3-helios.json), matching SIDId's credited author Marcin Jędrusik (Helios) exactly. The '_2' suffix (vs. a presumed 'Rule3_Digi' tag not present in this batch/COVERAGE.md) most likely denotes a second routine/revision, but no source states this explicitly.",
    "100% single-composer concentration: both locally-tagged files ('5...4...Fasta!', 'Das Boot') belong to composer 'rule3-helios' (Marcin Jędrusik) alone (data/composers/rule3-helios.json) — direct match to SIDId's named author, unlike several other tags in this batch where the SIDId author and the local file composer diverge.",
    "Marcin Jędrusik (Helios) is a Polish scener/composer (data/composers/rule3-helios.json, country Poland, csdb_id 15843); no CSDb tool/release page for a standalone editor under this name was found.",
    "Both censused files (CSDb sid ids 42285, 42286) report the SAME `Released` field, '1996 Rule3', directly on the CSDb SID entry itself (not inferred from a UsedIn release or a tune title) — census of all 2 tagged files agrees. Both also carry identical PSID LoadAddr $1200(4608)/InitAddr $1310(4880), consistent with the same routine (header metadata only, not a disassembly fact).",
    "Both files are also listed as UsedIn CSDb release #47184, 'Voice Over' AKA 'Helios Sample Collection' (C64 Music Collection, released by Rule3, 1996-05-05). Per this project's csdb_id-namespace rule, that is the release the tunes were USED IN, not a release of the player/tool itself, so `csdb_release` stays null rather than being populated from it (same reasoning as knowledge/players/4-mat-tedplay.md).",
    "CSDb credits 'Voice Over' as CODED by CJ Warlock (Mr. Warlock) of Rule3, with Helios credited separately for Music/Graphics/Sampling — raising the unconfirmed possibility that the embedded digi-playback code was CJ Warlock's, not Helios's, even though SIDId's per-tag `author` field (and this card's `authors`) reflects the track author, not necessarily the routine's coder. No source states who wrote the routine itself."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no other fields): https://github.com/cadaver/sidid/blob/master/sidid.nfo — data/sidid.json byTag['Rule3_Digi_2']",
    "CSDb group #746, Rule3 (Poland): https://csdb.dk/group/?id=746",
    "Local dataset: 2 files tagged Rule3_Digi_2, both by composer 'rule3-helios' — data/composers/rule3-helios.json; see knowledge/COVERAGE.md rank 121",
    "CSDb scener profile, Marcin Jędrusik / Helios: data/composers/rule3-helios.json profile.csdb_id 15843, cross-checked live at https://csdb.dk/scener/?id=15843",
    "CSDb webservice, SID entry '5...4...Fasta!': https://csdb.dk/webservice/?type=sid&id=42286 (Released: '1996 Rule3', UsedIn release #47184)",
    "CSDb webservice, SID entry 'Das Boot': https://csdb.dk/webservice/?type=sid&id=42285 (Released: '1996 Rule3', UsedIn release #47184)",
    "CSDb release #47184, 'Voice Over' / 'Helios Sample Collection': https://csdb.dk/release/?id=47184 (C64 Music Collection, Rule3, 1996-05-05, coded by CJ Warlock)"
  ]
}
```

## Overview

Rule3_Digi_2 is a SIDId-fingerprinted digi routine attributed to **Marcin
Jędrusik**, handle **Helios**, a member of the Polish group **Rule3** (CSDb
group #746). Unlike several other tags in this batch, SIDId's named author
matches the local file composer exactly. Both locally-tagged files belong to
Helios alone, consistent with a personal, in-house routine, and both are
directly dated on CSDb ("Released: 1996 Rule3") and were used in Rule3's 1996
compilation "Voice Over" / "Helios Sample Collection" (CSDb release #47184),
coded by CJ Warlock. No dedicated CSDb tool/release entry for the routine
itself exists — it is a native, in-house digi routine, not a distributed
editor.

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId's record is author-only (no
technique claim); the direct author/composer match is stronger identity
evidence than most of this batch's other tags; the `_2` suffix's meaning is
unconfirmed; `released` (1996) comes from both censused files' own CSDb
`Released` field, not a title year or a UsedIn release; `csdb_release` is
deliberately left null even though a real CSDb release (#47184, "Voice
Over") was found and censused, because that release is what the tunes were
USED IN, not a release of the player/tool itself; the release's coder (CJ
Warlock, not Helios) is a live open question about who actually wrote the
routine.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local `data/composers/rule3-helios.json`, SIDId,
and CSDb. `status: stub`.

## Sources

See the `sources` array — SIDId, the local composer aggregation, and CSDb
(scener, group, both SID entries, and the "Voice Over" release, all
cross-checked live).
