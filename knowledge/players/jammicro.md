# Jammicro

<!--
  id = kebab-case, matches the "id" field below and the filename.
-->

```json
{
  "id": "jammicro",
  "name": "Jammicro",
  "aliases": ["JammicroV0", "JammicroV1", "JammicroV1_1"],
  "authors": ["Kamil Wolnikowski (Jammer)"],
  "released": "V1 first publicly played 10 May 2022 (CSDb release #217751, '512 Rap', AKA 'JammicroV1 world premiere'); V0 and V1_1 have no dedicated CSDb release found — exact dates TODO",
  "status": "stub",
  "platform": "Native C64 replay routine, hand-coded (not a cross-platform editor export). Written by Jammer, credited as 'Code' on the tune that premiered it; described by the author himself in a CSDb compo-forum comment as 'my new routine' shortly before it was finished.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no public source or disassembly found",
    "zero_page": "TODO: no public source or disassembly found",
    "layout": "TODO: no public source or disassembly found"
  },
  "entry": {
    "init": "TODO: not disassembled here; would need to be read from a JammicroV1-tagged .sid's PSID header per file",
    "play": "TODO: not disassembled here"
  },
  "speed": "TODO: not documented publicly",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public source or format spec found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Overwhelmingly a personal routine, not a published tool: of the 19 files in this project's dataset tagged JammicroV0/V1/V1_1, 17 (89%) are Jammer's own compositions; only 'Ambience'-era outlier '1 Byte Under 512' (composer DeMOSic) and '512 Rap' (composer Shogoon, code credited to Jammer) come from other musicians. No SIDId comment, CSDb tool page, manual, or format spec was found anywhere — this is the reason the card stays a stub with every Tier 3 field TODO.",
    "The name and its first public outing both point to a size-coding origin: JammicroV1 premiered on the tune '512 Rap' at the 'Unofficial Tiny SID Compo 2022' (CSDb event #3157), a compo with byte-limited categories (256B intro, 512B/1K/2K game — CSDb has no dedicated size-limited-music category, so the organiser reused the game-size categories as proxies for music entries). Jammer asked for a one-week deadline extension in the compo's forum thread on 2022-05-07 because 'my new routine is almost done' — that routine is JammicroV1. A second JammicroV1-tagged tune in the dataset, DeMOSic's '1 Byte Under 512', echoes the same size-limit theme in its title. None of this is proof the *player itself* fits in 512 bytes — only that its debut track was written for a byte-limited compo — so no size claim is recorded as fact here.",
    "SIDId's sidid.nfo entry for both JammicroV0 and JammicroV1 carries only name/author, no reference (CSDb release id) or comment field, unlike ~66 other SIDId tags that include a playback-technique note — so csdb_release is left null rather than guessed."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag['JammicroV0'] / byTag['JammicroV1'] (name + author only, no reference/comment) — deepsid_dl/sidid.nfo snapshot, parsedAt 2026-07-11",
    "Local dataset: knowledge/COVERAGE.md, family 'JammicroV' (rank #6 among uncarded families, 19 files, raw tags JammicroV0/JammicroV1/JammicroV1_1)",
    "Local dataset: data/composers/jammer.json, data/composers/demosic.json, data/composers/shogoon.json (folder[] records) — 19 files total, 17 by Jammer, 1 by DeMOSic, 1 by Shogoon",
    "CSDb release '512 Rap' (id 217751): https://csdb.dk/release/?id=217751 — AKA 'JammicroV1 world premiere', code by Jammer, music by Shogoon, released at Unofficial Tiny SID Compo 2022, 10 May 2022",
    "CSDb event 'Unofficial Tiny SID Compo 2022' (id 3157): https://csdb.dk/event/?id=3157 — byte-limited categories (256B/512B/1K/2K); Jammer's 2022-05-07 forum comment about his 'new routine' almost being done",
    "CSDb scener profile, Jammer (id 8105): https://csdb.dk/scener/?id=8105 — real identity Kamil Wolnikowski, Poland, groups 1mandivision/MultiStyle Labs/Protovision; no tool/player credited in the bio",
    "No public source repository or format documentation found for Jammicro (web search, 2026-07-17)"
  ]
}
```

## Overview

Jammicro is a native C64 music-replay routine written by Kamil Wolnikowski
("Jammer"), a Polish scener and composer (1mandivision / MultiStyle Labs /
Protovision). It is identified in this project's dataset only via Player-ID
signature tags (`JammicroV0`, `JammicroV1`, `JammicroV1_1`) — there is no
DeepSID curated entry and no dedicated CSDb tool/release page for it. Its
only public attestation is the CSDb release "512 Rap" (id 217751), whose
alternate title reads "JammicroV1 world premiere": it debuted 10 May 2022 at
the "Unofficial Tiny SID Compo 2022" (CSDb event #3157), a byte-limited
compo, with Jammer's own forum comment the same week describing "my new
routine" nearing completion. Composer concentration is heavily skewed: 17 of
19 tagged files in this collection (89%) are Jammer's own tunes, with only
one file each from DeMOSic and Shogoon — this is a personal routine that saw
very limited outside pickup, not a widely published tool.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) composer concentration
(89% Jammer himself) marks this as a personal routine rather than a
published tool with a manual; (2) the name and debut context strongly suggest
a size-coding ("tiny"/"micro") origin, but no source confirms an actual byte
budget for the player itself — that inference is kept out of the JSON facts
and stated only as circumstantial here; (3) no CSDb tool page, format spec,
or source repository could be found for any version.

## Disassembly notes

None performed. No public source or format documentation exists to seed a
disassembly pass, and none was undertaken here (Tier 2 provenance research
only, per this card's scope).

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
confirmed (author, dataset usage, first public appearance, size-compo
context), each cited to a local dataset file or a CSDb page. Every Tier 3
runtime field (memory map, entry points, speed, data format, effect
encoding) is honestly `TODO`: no public source, disassembly, or format spec
was found to fill them, and none was guessed.

## Sources

See the `sources` array — `data/sidid.json`, `knowledge/COVERAGE.md`,
`data/composers/*.json`, CSDb release #217751, CSDb event #3157, and the
CSDb scener profile for Jammer (Kamil Wolnikowski).
