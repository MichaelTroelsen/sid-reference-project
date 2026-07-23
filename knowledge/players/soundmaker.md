# Sound-Maker

<!--
  id = kebab-case, matches the "id" field below and the filename.
-->

```json
{
  "id": "soundmaker",
  "name": "Sound-Maker",
  "aliases": ["SoundMaker_V3", "SoundMaker_V4", "SoundMaker"],
  "authors": ["Pleite Geier / United Artists"],
  "released": "1989 (Sound Maker II, United Artists); V3/V4 undated",
  "status": "stub",
  "platform": "Native C64 tool (DeepSID players.json lists platform \"Native / C64 emulator\" for the SoundMaker IV entry)",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no public source/disassembly found",
    "zero_page": "4 bytes, $F7-$FA (DeepSID players.json field `zero_pages` on the \"SoundMaker IV\" entry) — not independently verified by disassembly here",
    "layout": "TODO: no public source/disassembly found"
  },
  "entry": {
    "init": "TODO: no public source/disassembly found",
    "play": "TODO: no public source/disassembly found"
  },
  "speed": "TODO: no public source/disassembly found",

  "data_format": {
    "order_list": "TODO",
    "patterns": "DeepSID players.json `track_system` field on the SoundMaker IV entry reads \"FC; Track lists with one block shown\" — meaning unclear (possibly an editor-UI note comparing it to FutureComposer's track-list display); not enough to record as a real format fact",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public source/disassembly found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId's `released` field for all three tags (SoundMaker/SoundMaker_V3/SoundMaker_V4) holds the literal string \"United Artists\" — that is NOT a publisher name or a year, it is the German scene group Pleite Geier belonged to (confirmed via csdb.dk/scener/?id=25228, group membership \"United Artists\"). Do not read it as a release date.",
    "Conflicting authorship attribution: SIDId credits all versions to \"Pleite Geier\" (author of csdb.dk/release/?id=213749, \"Sound Maker II\", United Artists, 10-1989 — credited there for Code + Translation). DeepSID's own players.json entry for \"SoundMaker IV\" instead lists developer \"Arne\" (linked to Arne's DeepSID composer folder), with no source given. This card's dataset backs a link between Arne and V4 usage-wise: of 77 SoundMaker-family files across 8 composers, Arne alone accounts for 27/47 (57%) of the SoundMaker_V4 files, more than anyone else — but usage concentration is not proof of authorship, and neither attribution is independently confirmed. Left as an open discrepancy, not resolved here.",
    "data/players.json also carries a separate curated entry, \"5 Dimension Composer\" (developer Pleite Geier, 1990, csdb_id 122330), whose own description states: \"Rumor has it this editor may be related to SoundMaker 3.\" That is CSDb/DeepSID's own hedge (\"rumor\"), not a stated derivation — so no `derives_from`/`successor_of` edge is asserted here. \"5 Dimension Composer\" now has its own card, [[5-dimension-composer]] (40 files) — that is the candidate edge target if a future pass confirms the rumor.",
    "Small, concentrated usage: only 8 composers use the SoundMaker family across 77 files in this dataset (30 V3 + 47 V4) — A-Man, Arne, Goesta Feiweier, Higgie, Noise_of_Victory, Sid_United_Artists, Viper, Zax Imperial. Viper only used V3; Arne only used V4; several composers used both. This spread (few composers, one at 57% of V4) is signal of a small-scene/personal-circle tool rather than a widely-published one — consistent with no independent CSDb release page existing for \"Sound Maker III\" or \"Sound Maker IV\" specifically (only \"Sound Maker II\", 1989, was found catalogued).",
    "No public source code or disassembly was found for any SoundMaker version (searched GitHub, CSDb, Codebase64) — every Tier 3 runtime field is honestly TODO.",
    "\"Sound Maker\"/\"Soundmaker\" is a generic, reused name on CSDb: at least three OTHER, unrelated C64 tools carry a near-identical title — \"Sound Maker\" by Psychobird (csdb.dk/release/?id=227635, no date/credits found), \"Sound-Maker V1.0\" by SkyLine Technics (csdb.dk/release/?id=129439, 1990, no credits found), and \"Soundmaker V1.0\" coded by Tasco for RCS International 2002/The Silicon Masters (csdb.dk/release/?id=216504, 1987). None of these three mention Pleite Geier, United Artists, or version numbering matching V3/V4 — they are name collisions, not part of this family. Only SIDId's explicit author attribution ties SoundMaker/_V3/_V4 to Pleite Geier; do not assume any other CSDb \"Sound Maker\" hit belongs here.",
    "Re: the Arne-vs-Pleite-Geier authorship discrepancy (see above): Arne Puszelski's own CSDb scener page (csdb.dk/scener/?id=6512) lists him primarily as a musician (Alpha Flight, ex-Ability/Dance 2 Trance/Spirit) but DOES credit him as coder on other music tools — \"AFL - Noter V1.0\" (1994) and \"Soundeditor V1.0\" (1994, with Dance 2 Trance/Spirit). This makes DeepSID's \"developer: Arne\" attribution for SoundMaker IV at least plausible (he did code editors), but neither of those two credited tools is named SoundMaker/Sound-Maker, so this is corroborating context, not confirmation — the discrepancy with SIDId's Pleite Geier attribution remains unresolved."
  ],
  "sources": [
    "data/sidid.json byTag: SoundMaker / (SoundMaker_V3) / (SoundMaker_V4) — name \"Sound-Maker\"/\"Sound-Maker V3\"/\"Sound-Maker V4\", author \"Pleite Geier\", released \"United Artists\" (sourced from deepsid_dl/sidid.nfo, https://github.com/cadaver/sidid/blob/master/sidid.nfo)",
    "data/players.json entries \"SoundMaker IV\" (developer Arne, platform \"Native / C64 emulator\", zero_pages \"4 bytes ($F7-$FA)\", track_system \"FC; Track lists with one block shown\", csdb_id 0) and \"5 Dimension Composer\" (developer Pleite Geier, start_year 1990, csdb_id 122330, description quoting the SoundMaker-3 rumor) — from the DeepSID players export",
    "CSDb scener profile, Pleite Geier: https://csdb.dk/scener/?id=25228 (group memberships Tropic, United Artists; credited Code/Translation on \"Sound Maker II\", 10-1989; coding credit on \"5 Dimension Composer\", 1990) — country/nationality of the group is not stated on this page",
    "CSDb release, Sound Maker II: https://csdb.dk/release/?id=213749 (C64 Tool, group United Artists, 10-1989, credits: Code — Pleite Geier; Music — Johannes Bjerregaard; Translation — Newcomer and Pleite Geier)",
    "CSDb scener profile, Arne/Alpha Flight: https://csdb.dk/scener/?id=6512 (musician; group memberships Alpha Flight, ex-Ability/Dance 2 Trance/Spirit; coder credits on \"AFL - Noter V1.0\" and \"Soundeditor V1.0\", both 1994 — neither is a SoundMaker release)",
    "CSDb search/release checks confirming three unrelated same-name tools are NOT this family: https://csdb.dk/release/?id=227635 (Psychobird), https://csdb.dk/release/?id=129439 (SkyLine Technics, 1990), https://csdb.dk/release/?id=216504 (Tasco/RCS International 2002+The Silicon Masters, 1987)",
    "Local dataset: 77 files aggregated from data/composers/*.json (SoundMaker_V3: 30 files, SoundMaker_V4: 47 files) across 8 composers — re-verified directly: a-man 15, arne 27, goesta-feiweier 7, higgie 3, noise-of-victory 2, sid-united-artists 14, viper 8, zax-imperial 1"
  ]
}
```

## Overview

Sound-Maker is an obscure, native C64 music-editor tool line first documented
on CSDb as **Sound Maker II** (October 1989, released by the group
**United Artists**), credited to **Pleite Geier** for code and translation
(csdb.dk/scener/?id=25228, csdb.dk/release/?id=213749). This dataset carries
two later, uncatalogued raw tags — `SoundMaker_V3` and `SoundMaker_V4` — which
SIDId attributes to the same author, so this card folds them into one family
per `knowledge/COVERAGE.md`'s own automatic grouping (also same-author
confirmed independently via the CSDb scener page, not just tag-string
similarity). Usage in the collection is small and concentrated: 77 files
across only 8 composers, more than half of the V4 files from one composer
(Arne) — signal of a small-scene tool rather than a widely-published editor.
DeepSID's own curated player entry for "SoundMaker IV" oddly credits developer
"Arne" rather than Pleite Geier, an unresolved discrepancy noted in `quirks`
rather than silently picked one way. No public source or disassembly exists,
so every runtime fact is `TODO`.

## Quirks & gotchas

See the `quirks` array — load-bearing points: (1) SIDId's `released` field
holds a scene-group name ("United Artists"), not a date — a parsing trap for
anything that assumes that field is always a year; (2) conflicting authorship
between SIDId (Pleite Geier) and DeepSID's players.json (Arne) for the V4
variant, left open — a follow-up check found Arne Puszelski does have coder
credits on two other 1994 music tools ("AFL - Noter V1.0", "Soundeditor
V1.0"), which makes the DeepSID attribution plausible but not confirmed,
since neither credited tool is named SoundMaker; (3) a "rumor" (DeepSID's own
word) links this family to the separately-tracked "5 Dimension Composer"
(also Pleite Geier, 1990) but that is not a stated derivation, so no `edges`
entry was asserted; (4) "Sound Maker"/"Soundmaker" is a generic name reused
by at least three unrelated CSDb tool releases (Psychobird; SkyLine
Technics 1990; Tasco/RCS International 2002+The Silicon Masters 1987) —
none connected to Pleite Geier or United Artists, confirmed as name
collisions, not part of this family.

## Disassembly notes

None. No public source, disassembly, or format-spec document was found for
any SoundMaker version. A future pass would need to start from a
representative `.sid`'s PSID header (init/play addresses) and disassemble
from there — the only route to real memory-map/format facts for this player.

## Verification

**Not verified — `status: stub`.** Identity (name, author, one confirmed
release date for "Sound Maker II"), platform, and usage/composer-concentration
facts come from SIDId, DeepSID's players.json, and this project's own
per-composer data; the CSDb scener/release pages independently corroborate
Pleite Geier's authorship claim for the 1989 "Sound Maker II" release. A
2026-07-23 follow-up pass re-verified the 77-file/8-composer breakdown
directly against `data/composers/*.json` (exact match), searched CSDb/
Codebase64/GitHub again for source or documentation (none found), ruled out
three unrelated same-named CSDb tools as not part of this family, and found
supporting (not conclusive) context for the Arne authorship attribution. No
runtime fact (memory map, entry points, data format, effects) is confirmed —
all left `TODO` rather than guessed. Remains a `stub`: no public source or
disassembly plainly documents a Tier 3 runtime fact, so promotion to
`in-progress` is not warranted.

## Sources

See the `sources` array — SIDId (`sidid.nfo`), DeepSID's `players.json`
export, and CSDb pages (Pleite Geier's scener profile, the "Sound Maker II"
release, Arne/Alpha Flight's scener profile, and three ruled-out same-named
tool releases) fetched directly to corroborate/complicate the SIDId
attribution and the DeepSID authorship discrepancy.
