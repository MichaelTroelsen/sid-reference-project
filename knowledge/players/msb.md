# ?MSB (MSB's personal in-game player)

<!--
  id = kebab-case, matches the "id" field below and the filename.
-->

```json
{
  "id": "msb",
  "name": "?MSB (MSB's personal in-game player)",
  "aliases": ["?MSB"],
  "authors": ["MSB"],
  "released": "1986 (tunes released via Uncle Ben's Soft; composer active 1984-1986)",
  "status": "stub",
  "platform": "Native C64, not in-game: all 8 tagged files (and both untagged MSB files) are catalogued on CSDb as standalone 'C64 Music' releases (one file = one CSDb SID entry = one CSDb release), never as music embedded in a game or demo — https://csdb.dk/webservice/?type=sid confirms this for every entry (e.g. Chiquita id=44155, Mrs_Robinson id=44157). No dedicated editor/tool page or Codebase64 article was found for an 'MSB' player; the identical init/play addresses across all 8 tagged files (full census, see quirks) indicate one reused personal replay routine assembled directly into each release, not a generalised tracker product.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: engine memory map not disassembled. PSID-header load address is $0801 on most sampled files (one, Sound_of_Silence, shows $083B) — see entry.init/entry.play note",
    "zero_page": "TODO: not disassembled",
    "layout": "TODO: not disassembled"
  },
  "entry": {
    "init": "$083B — identical across every sampled file (Chiquita, Minuetto, Wizzy, Sound_of_Silence), read directly from each file's CSDb SID-entry page (PSID header metadata, not a disassembly)",
    "play": "$08F0 — identical across the same sampled files, same source"
  },
  "speed": "TODO: not disassembled (PSID header gives no speed/timing detail beyond entry points)",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The leading '?' in the raw tag '?MSB' is DeepSID's own low-confidence-match convention, not part of a filename or a formatting artifact. No entry for 'MSB' or '?MSB' exists in SIDId's sidid.nfo (checked both the local data/sidid.json snapshot and the live github.com/cadaver/sidid/master/sidid.nfo — zero matches either way), so this looks like DeepSID's own inference rather than a catalogued player/tool: it appears to be tagging a composer's own personal in-game routine with the composer's handle, the same pattern the project's build-html.js notes for tags like 'Rob_Hubbard' (see CLAUDE.md).",
    "Extreme composer concentration: exactly 1 composer (MSB) and 8 files carry this tag (data/composers/msb.json) — textbook 'personal routine', not a published multi-composer tool.",
    "The 8 tagged files are NOT all of MSB's HVSC output: 2 of the composer's 10 catalogued tunes ('Music_Dancer' csdb_id 435, 'Morning_Has_Broken' csdb_id 40724) carry no player tag at all. Checked their CSDb SID-entry pages directly: 'Morning_Has_Broken' has load $C000 / init $CA30 / play $0000 — completely different from the other files' shared $0801/$083B/$08F0 — confirming it genuinely uses a different (unidentified) setup rather than DeepSID simply missing an obvious match.",
    "FULL CENSUS (all 8 tagged files, not a sample): init $083B / play $08F0 confirmed identical via CSDb's XML webservice on every one — Chiquita (id 44155), Minuetto (44156), Mrs_Robinson (44157), Ragtime (44158), Sabre_Dance (44159), Sound_of_Silence (40723), Willy_Music (44160), Wizzy (44161). Load address is $0801 on 7 of 8; Sound_of_Silence alone loads at $083B (its data starts where the others' init routine would be — see memory.load_address). This is real evidence of one consistent, reused routine, not eight coincidentally-similar one-off hacks.",
    "7 of the 8 files' own 'Released' field reads '1986 Uncle Ben's Soft' verbatim (checked via CSDb webservice, not read off a title or a compilation's year). The 8th, Sound_of_Silence, instead carries the vaguer 'Released: 198? <?>' — CSDb itself doesn't pin it to 1986, only to the decade. The `released` field's '1986' therefore describes the dominant, not universal, attestation.",
    "All 8 tagged files (plus MSB's 2 untagged ones) are catalogued individually as CSDb 'C64 Music' type releases, never as music used inside a 'C64 Game' release. Six of the eight also appear packaged into the 1986 compilation 'Uncle Ben's Magic 2' (CSDb release id 93431, https://csdb.dk/release/?id=93431) alongside unrelated composers (Andrew Colin, Bogg, Ratt/Antony Crowther) — a music-disk compilation, not a player/tool release, so it does not supply a `csdb_release` value for this card.",
    "No CSDb release exists for 'MSB' as a player/tool (only for individual tunes and the Uncle Ben's Magic 2 compilation), so `csdb_release` is correctly left null rather than pointing at an unrelated compilation id. Targeted web searches for 'MSB'/'Uncle Ben's Soft' on lemon64.com and forum64.de (both searched explicitly, per project convention) surfaced no forum threads or player documentation.",
    "MSB's CSDb scener profile states plainly 'Nothing else is known about this guy' — no real name, no confirmed group membership beyond scattered music-only credits (The I.R.Q., Uncle Ben's Soft, The Wolverines, Sodan, Pier Soft, The Outsider) between 1984-1986. MSB's own 1984 credit trivia (quoted verbatim from inside 'Music Dancer') reads 'MANY THANKS TO THE I.R.Q. FOR HIS FRIENDLY HELP', suggesting personal assistance rather than a shared/published tool. No lineage claim to any known player family was found anywhere."
  ],
  "sources": [
    "Local dataset: data/composers/msb.json — 10 files by composer MSB, 8 tagged '?MSB'; knowledge/COVERAGE.md row 20 confirms 8 files / 1 composer for this family",
    "SIDId sidid.nfo checked for 'MSB' — no entry (data/sidid.json local snapshot, and https://github.com/cadaver/sidid/blob/master/sidid.nfo live)",
    "CSDb scener profile (MSB, csdb_id 21572): https://csdb.dk/scener/?id=21572 — 'Nothing else is known about this guy'; release/credit list",
    "CSDb SID entries via webservice (https://csdb.dk/webservice/?type=sid&id=<id>), full census of all 8 tagged files: id=44155 (Chiquita), 44156 (Minuetto), 44157 (Mrs_Robinson), 44158 (Ragtime), 44159 (Sabre_Dance), 40723 (Sound_of_Silence), 44160 (Willy_Music), 44161 (Wizzy) — all init $083B / play $08F0; https://csdb.dk/sid/?id=40724 (Morning_Has_Broken, untagged) — load $C000 / init $CA30 / play $0000, for contrast",
    "CSDb release id 93431 'Uncle Ben's Magic 2' (music-disk compilation, not a player release): https://csdb.dk/release/?id=93431 — queried via webservice for platform/lineage evidence, contains unrelated composers' credits, no player-tool information",
    "MSB's full CSDb scener profile (all releases/credits, depth=2): https://csdb.dk/webservice/?type=scener&id=21572 — 'Music Dancer' trivia quote, 1984-1986 credit list, 'Protex V1.0' tool co-credit",
    "Web searches (2026-07-31) for 'MSB'/'Uncle Ben's Soft' explicitly targeting lemon64.com and forum64.de — no forum threads or player documentation found on either site"
  ]
}
```

## Overview

`?MSB` is a raw Player-ID tag covering 8 files by a single composer, MSB, in
this project's dataset (`data/composers/msb.json`; confirmed by
`knowledge/COVERAGE.md`'s row for this family). No entry for "MSB" exists in
the SIDId player index (checked both the project's cached snapshot and the
live upstream `sidid.nfo`), and no CSDb release or Codebase64 article
describes a player/tool of this name. Combined with the composer
concentration — exactly one composer, and the tag literally reuses the
composer's own handle — this reads as DeepSID's own low-confidence
inference that these tunes share MSB's own personal, uncatalogued replay
routine, not a published or reused tool. All 8 tagged releases are native
C64, and are catalogued individually on CSDb as standalone "C64 Music"
entries (never as music embedded in a game or demo) — 6 of them were also
bundled, alongside unrelated composers, into the 1986 music-disk compilation
"Uncle Ben's Magic 2" (CSDb release id 93431), which is a packaging vehicle,
not a player/tool release, so no `csdb_release` value applies to this card.
MSB's CSDb scener profile is itself nearly blank ("Nothing else is known
about this guy"), with only scattered 1984-1986 music credits to scene
groups/tools (The I.R.Q., Uncle Ben's Soft, The Wolverines, Sodan, Pier
Soft, The Outsider) and one 1984 co-authored tool release ("Protex V1.0",
with Perry Rhodan) whose relationship to this player, if any, was not
established. Targeted searches of lemon64.com and forum64.de turned up no
further documentation.

## Quirks & gotchas

See the `quirks` array. The headline finding: all eight tagged files (a full
census, not a sample) report identical PSID-header init ($083B) and play
($08F0) addresses — real, citable evidence that this is one consistent
routine reused across MSB's tunes, not a coincidence. A ninth, untagged file
by the same composer ("Morning_Has_Broken") has completely different
addresses, which supports DeepSID's tag boundary being meaningful rather
than arbitrary. All eight (plus MSB's two untagged files) are catalogued on
CSDb as standalone "C64 Music" releases, never as music used inside a game —
so this is a personal replay routine assembled into standalone tune
releases, not an in-game player as such.

## Disassembly notes

None. No disassembly was performed for this card — only PSID-header metadata
(load/init/play addresses, as displayed on each file's CSDb SID-entry page)
was read, which is public metadata about the compiled binary, not a reverse
engineering of the play routine's behaviour. Memory map, zero page, data
format and effect encoding are all genuinely unknown and left `TODO`. A
representative file (e.g. `Chiquita.sid`, load $0801 / init $083B / play
$08F0) would be the starting point if this family is picked up for real RE.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts (composer,
file count, tag provenance) and the PSID-header entry points (init/play,
directly read off CSDb, not disassembled) are established. No source code,
manual, or format documentation was found anywhere for this tag. All
`memory`/`data_format`/`effects` fields remain `TODO` pending an actual
disassembly of one of the eight files.

## Sources

See the `sources` array — the local dataset (`data/composers/msb.json`,
`knowledge/COVERAGE.md`), the SIDId index (checked, no match), MSB's CSDb
scener profile, and four CSDb SID-entry pages used to confirm the shared
init/play addresses.
