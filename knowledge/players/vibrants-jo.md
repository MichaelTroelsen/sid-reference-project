# Vibrants/JO

<!--
  id = vibrants-jo. Tier 1 (local dataset) + Tier 2 (CSDb/Demozoo provenance)
  only — no disassembly was performed for this card. All Tier 3 runtime
  facts are honest TODOs.
-->

```json
{
  "id": "vibrants-jo",
  "name": "Vibrants/JO",
  "aliases": ["Vibrants/JO"],
  "authors": ["Poul-Jesper Olsen (JO, aka Technic, Rock)"],
  "released": "TODO: exact year unknown. SIDId has no `released` field for this tag. JO was an active C64 composer from the AMOK era (~1988-1991) and joined Vibrants c. 1992 (per CSDb; Demozoo's JO scener page confirms Vibrants membership but gives no join date); files tagged with this player in the local dataset span JO's own catalogue through at least a 2017-dated HJE tune, so the routine's own first-write date cannot be pinned down from this evidence alone.",
  "status": "stub",
  "platform": "Native C64 player routine, hand-coded by the composer himself rather than released as a standalone tool/editor — CSDb's Vibrants group profile states \"JCH, JO and Laxity coded their own players and editors on the C64\" (three separate, independently-authored in-house routines, not one shared tool).",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: not disassembled",
    "zero_page": "TODO: not disassembled",
    "layout": "TODO: not disassembled"
  },
  "entry": {
    "init": "TODO: not disassembled",
    "play": "TODO: not disassembled"
  },
  "speed": "TODO: not disassembled",

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
    "Composer concentration is extreme: of 131 tagged files in the local dataset, 102 (77.9%) are by JO himself, 25 by HJE, 3 by DRAX, and 1 filed under a 'Worktunes' subfolder that is itself DRAX's own (data/composers/worktunes.json profile resolves to Thomas Mogensen / DRAX). JO and DRAX are both CSDb-confirmed Vibrants members; HJE's Vibrants affiliation is NOT confirmed — no CSDb or Demozoo group membership was found for HJE, and data/composers/hje.json's brand-image fields are empty (that file offers no evidence either way). This reads as a personal/in-house routine used almost exclusively by JO and his closest circle, not a widely published tool — consistent with the CSDb group note that JO 'coded his own' player rather than releasing an editor.",
    "HJE's usage is dated 2017 (data/composers/hje.json profile 'active': '2017') while JO's own composing activity is recorded as 'active': '1990' (data/composers/jo.json) — i.e. someone was still writing new tunes on this decades-old routine long after JO's own active period, most likely a tribute/cover using an original binary rather than a re-released editor (no public editor/source has been found).",
    "The SIDId entry for this exact tag is unusually sparse: only an `author` field (no `name`, `released`, `reference`, or `comment`) — contrast the sibling tag `Vibrants/Laxity`, which resolves to a full entry ('LAXITY editor', with a CSDb release reference). This asymmetry itself is evidence the JO routine was never packaged/released as a named product the way Laxity's editor was.",
    "Player-ID's raw tag name embeds the group ('Vibrants/JO') rather than a tool name — typical of the SIDId/Player-ID convention for hand-rolled composer-specific routines that were never given a product name."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag['Vibrants/JO'] = {\"author\": \"Poul-Jesper Olsen (JO)\"} (sourced from deepsid_dl/sidid.nfo, the SIDId project's player index)",
    "knowledge/COVERAGE.md: rank #4 uncarded family, 131 files, single raw tag 'Vibrants/JO'",
    "data/composers/jo.json (profile: full_name Poul-Jesper Olsen, handles Technic/Rock/JO, country Denmark, csdb_id 1926, active 1990) and its folder[] records (102 of 131 tagged files)",
    "data/composers/hje.json, data/composers/drax.json, data/composers/worktunes.json (remaining 29 tagged files' composer profiles, used for the composer-concentration quirk)",
    "CSDb scener profile, JO: https://csdb.dk/scener/?id=1926 (bio: 'unique knowledge about coding players ... also made his own players on C64 and for the AdLib sound card')",
    "CSDb group profile, Vibrants: https://csdb.dk/group/?id=328 (founded Aug 1989 by JCH and Link; 'JCH, JO and Laxity coded their own players and editors on the C64')",
    "Demozoo, JO / Vibrants: https://demozoo.org/sceners/6764/",
    "Demozoo, Vibrants (group): https://demozoo.org/groups/769/",
    "Player-ID project (the tool that produces the 'Vibrants/JO' signature tag): https://github.com/WilfredC64/player-id"
  ]
}
```

## Overview

"Vibrants/JO" is the Player-ID signature for a native C64 SID playback
routine hand-coded by Poul-Jesper Olsen (handle JO, formerly Technic/Rock), a
Danish composer active from the AMOK era (~1988) and a member of the Vibrants
demo/music group from c. 1992 (per CSDb; Demozoo confirms membership but
gives no join date). CSDb's Vibrants group profile
states plainly that "JCH, JO and Laxity coded their own players and editors
on the C64" — i.e. this is one of (at least) three separate, independently
hand-rolled in-house routines used within Vibrants, alongside
[JCH NewPlayer](jch-newplayer.md) and [Laxity NewPlayer](laxity-newplayer.md).
Local dataset evidence (131 files, 102 of them by JO himself) confirms this
was overwhelmingly a personal routine rather than a released, publicly
distributed tool: no CSDb release exists for it, and the SIDId database entry
for the tag holds only an author name, unlike the sibling "Vibrants/Laxity"
tag which resolves to a fully-documented editor release.

## Quirks & gotchas

See the `quirks` array — the load-bearing points: (1) extreme composer
concentration (77.9% JO's own tunes, remainder all Vibrants-affiliated
composers) marks this as a personal/in-house routine, not a published tool;
(2) a 2017-dated file by HJE using the tag long after JO's own active period
suggests reuse of an existing binary/tune rather than an ongoing released
editor; (3) the SIDId entry's sparseness (author only) is itself evidence
this was never packaged as a named product, unlike Laxity's editor.

## Disassembly notes

None. No disassembly was performed for this card — it is Tier 1 (local
dataset) + Tier 2 (CSDb/Demozoo provenance) only, per this card's research
scope. All memory map, entry point, speed, data format, and effect-encoding
fields are honest `TODO`s. A future pass could pick a representative file
(e.g. one of JO's own tunes in `data/composers/jo.json`) and disassemble its
init/play routines, then trace through `sidm2-siddump`, the way the
SIDM2-derived [drax-newplayer](drax-newplayer.md) and
[vibrants-2000ad](vibrants-2000ad.md) cards were built — but nothing in this
pass claims that work was done.

## Verification

Not verified — `status: stub`. Only identity/provenance facts (author,
group affiliation, composer-usage concentration) are confirmed, from the
local dataset (SIDId, DeepSID composer profiles) and CSDb/Demozoo. No source
or disassembly exists to verify runtime behaviour against; every Tier 3 field
stays `TODO` rather than guessed.

## Sources

See the `sources` array — `data/sidid.json`/`sidid.nfo`, `knowledge/COVERAGE.md`,
the local composer profiles for JO/HJE/DRAX/Worktunes, the CSDb scener and
group pages, and Demozoo.
