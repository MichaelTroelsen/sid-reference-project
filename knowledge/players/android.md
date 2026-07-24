# Android (Andrew Craigie player routine)

```json
{
  "id": "android",
  "name": "Android (Andrew Craigie player routine)",
  "aliases": ["Android"],
  "authors": ["Andrew Craigie (Android)"],
  "released": "1986-1987 per CSDb release dates (Scream and March of the Robots 1986; Synco Sid, Android's Return, Blown Fuse, Boppy Tune, Cherry Pink, Doctor Who, The 64's 2nd Choice, All the Young Dudes 1987); Band Aid and The Android Collection Volume 1 undated on CSDb",
  "status": "in-progress",
  "platform": "Appears to be a composer's own hand-coded 6502 tune-playing routine, not a distributed editor/tool — Player-ID fingerprints his personal routine byte-pattern rather than a released product. No CSDb tool/editor release or public source found for it.",
  "csdb_release": null,

  "memory": {
    "load_address": "$0801 in every sampled PSID header (5 of 14 files: Blown_Fuse, Cherry_Pink, Scream, Golden_Brown, Mystery_of_Arkham_Manor) — a standard BASIC-loadable-program start, consistent with the same personal build template reused across tunes. Per-file, not disassembled; no zero-page/layout facts available.",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "$081C in every one of the 5 PSID headers sampled (csdb.dk/sid/?id=7179, 7181, 7186, 7184, 43072) — same address across independently-released tunes spanning 1986-1987, strong evidence of one reused init entry point rather than per-tune hand assembly from scratch",
    "play": "Varies: PSID play address $0000 (routine self-installs its own IRQ from init; no separate PSID play vector) in 4 of 5 sampled tunes (Blown_Fuse, Cherry_Pink, Scream, Golden_Brown), but $08F6 in Mystery_of_Arkham_Manor — not a single fixed constant across the family"
  },
  "speed": "TODO: not researched (PSID play=$0000 on most sampled files implies a self-installed IRQ rather than a fixed VBI/CIA call rate signalled via the PSID header — not confirmed by disassembly)",

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
    "Composer concentration is total: all 14 files tagged 'Android' in this dataset are by a single composer, Andrew Craigie, who used the handle 'Android' — no other composer in the dataset carries this tag (data/composers/android.json holds 15 records total: 14 tagged 'Android' plus 1, 'Band_Aid.sid', tagged 'Electrosound' instead; knowledge/COVERAGE.md ranks the family #21 uncarded, 14 files, single grouped raw tag 'Android'). This is the textbook 'personal routine, not a published tool' case flagged in the extraction template.",
    "SIDId's sidid.nfo entry for this tag has only an AUTHOR line ('Andrew Craigie (Android)') — no released/reference/comment fields (github.com/cadaver/sidid/blob/master/sidid.nfo, fetched 2026-07-17), consistent with no distributed release to cite.",
    "HVSC's Musicians.txt confirms identity and location: 'Android (Craigie, Andrew) - UNITED KINGDOM (SCOTLAND)' (data/hvsc/Musicians.txt line 121).",
    "HVSC's STIL.txt has biographical/production comments on two of his tunes but nothing about the player routine itself: Blown_Fuse.sid was used in the 'Willy the Worm 2' loader of Hades Nebula, and Mystery_of_Arkham_Manor.sid was written for an unreleased Melbourne House game ('Andrew was paid but then nothing of the game ever surfaced' - Frank Gasking) (data/hvsc/STIL.txt, MUSICIANS/A/Android section).",
    "No CSDb scener profile, tool/editor release, or public source repository was located for 'Android' as a player/routine during this research pass (web search + CSDb search, 2026-07-17) — could not confirm a release year, load address, or any runtime fact. Left as TODO rather than guessed.",
    "CSDb's own scener profile for Android (csdb.dk/scener/?id=12722, fetched 2026-07-23) confirms 13 credited releases 1986-1991 (music, one-file demos, one graphics credit 'Smurf', and a compilation 'The Android Collection Volume 1'), a Compunet ID ('DC4'), and production credits with groups The Level 99 Industries, Genesis, and The Digital Projects — still no tool/editor release or player-routine writeup among them, only tune releases.",
    "CSDb's per-tune SID technical-spec pages (csdb.dk/sid/?id=<n>) show a consistent PSID load address $0801 and init address $081C across every one of 5 independently-released tunes sampled (Blown_Fuse 1987, Cherry_Pink 1987, Scream 1986, Golden_Brown 1987, Mystery_of_Arkham_Manor undated) — spanning at least two release years, which is real (if indirect) evidence that Craigie reused one fixed player-routine build rather than hand-assembling a fresh routine per tune. PSID play address is $0000 (self-installed IRQ, no separate play vector) in 4 of the 5, but $08F6 in Mystery_of_Arkham_Manor, so play entry is not a single constant. This is public PSID-header metadata, not a disassembly — status raised to in-progress on that basis per the project's Tier 3 rule, but zero-page usage, data layout, and speed model remain unconfirmed."
  ],
  "sources": [
    "Local dataset: sidid.json byTag.Android (author only, no reference/comment) — data/sidid.json",
    "knowledge/COVERAGE.md — family rank #21, 14 files, single raw tag 'Android'",
    "data/composers/android.json — all 14 'player':'Android' file records, one composer",
    "SIDId source (matches local import): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "HVSC Musicians.txt (identity/country): data/hvsc/Musicians.txt, line 121 ('Android (Craigie, Andrew) - UNITED KINGDOM (SCOTLAND)')",
    "HVSC STIL.txt (production notes on two tunes, no player detail): data/hvsc/STIL.txt, MUSICIANS/A/Android section",
    "Web search confirming identity/era (no primary CSDb tool release found): https://www.youtube.com/watch?v=cRRJQSefZ_I (Cherry Pink, 1987), https://www.youtube.com/watch?v=9zjdmnkKVHs (March of Robots, 1987)",
    "CSDb scener profile (release list, groups, Compunet ID): https://csdb.dk/scener/?id=12722",
    "CSDb per-tune technical-spec pages (PSID load/init/play addresses): https://csdb.dk/sid/?id=7179 (Blown Fuse), https://csdb.dk/sid/?id=7181 (Cherry Pink), https://csdb.dk/sid/?id=7186 (Scream), https://csdb.dk/sid/?id=7184 (Golden Brown), https://csdb.dk/sid/?id=43072 (Mystery of Arkham Manor)"
  ]
}
```

## Overview

"Android" is the Player-ID tag for tunes by Andrew Craigie (handle "Android"),
a Scottish C64 musician active c.1986-1991 per his CSDb scener profile
(csdb.dk/scener/?id=12722), with all 14 dataset-tagged tunes dated 1986-1987.
Unlike most carded families, this one shows **zero composer spread**: all 14
files tagged `Android` in this dataset (`data/composers/android.json`) are by
Craigie himself — the textbook signal (per the extraction template's
composer-concentration rule) that this is a personal, hand-coded tune-playing
routine rather than a published editor or tool other composers picked up. No
CSDb tool/editor release and no source repository were found; SIDId's own
entry for this tag carries only an author name, no reference or comment.
CSDb's per-tune technical-spec pages, however, do give real (if partial) Tier
3 signal: 5 independently-sampled tunes spanning 1986-1987 all share PSID
load address $0801 and init address $081C, indicating Craigie reused one
fixed player-routine build across tunes rather than reassembling a fresh one
each time — enough to move this card from identity-only `stub` to
`in-progress`, though zero-page usage, data layout, and speed model are still
unconfirmed and require an actual disassembly.

## Quirks & gotchas

See the `quirks` array — the load-bearing facts are the **total single-
composer concentration** (14/14 files, strong "personal routine" signal), the
**absence of any findable CSDb tool/editor release, source, or technical
writeup** for the routine itself (despite Craigie's tunes being documented in
HVSC's STIL.txt for production notes, not player internals), and the **repeated
$0801/$081C load/init pair** found across independently-sampled PSID headers on
CSDb, which is the one piece of real Tier 3 evidence this card has.

## Disassembly notes

No disassembly performed. The $0801 load / $081C init pair recorded above
comes from reading CSDb's public per-tune PSID technical-spec pages
(`csdb.dk/sid/?id=<n>`), not from opening the files or tracing them — it is
public source-adjacent metadata, not reverse engineering. Zero-page usage,
table layout, data formats, and the speed model all remain `TODO` and would
need an actual disassembly (and a `sidm2-siddump` trace) to fill in.

## Verification

**Not verified — `status: in-progress`.** Identity/usage facts are populated
from this repo's cached SIDId import, HVSC's Musicians.txt/STIL.txt, and a
CSDb research pass (scener profile + 5 sampled per-tune technical-spec pages)
that found a consistent load/init address pair but no tool release, source
repo, or technical writeup of the routine itself. Per the project's Tier 3
rule, a public source (CSDb's own PSID header display) plainly documents this
one runtime fact outright, which is why the status was raised from `stub`;
everything else (zero page, layout, data format, effects, speed model) is
still `TODO` pending real disassembly and a `sidm2-siddump` trace.

## Sources

See the `sources` array — the local SIDId cache, `knowledge/COVERAGE.md`,
`data/composers/android.json`, the upstream SIDId GitHub source, HVSC's
Musicians.txt and STIL.txt, CSDb's scener profile for Android
(csdb.dk/scener/?id=12722), CSDb's per-tune technical-spec pages for 5 sampled
files, and web search results used to confirm composer identity/era (no
primary player-tool source was located).
