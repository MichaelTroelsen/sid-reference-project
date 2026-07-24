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
  "released": "V0 tunes date from 2019 (earliest tagged: 'Tillax' 2019 EXclusive ON / 'Aye Contact' 2019 Arise, CSDb sid #56957/#56960); V1 debuted publicly 10 May 2022 on '512 Rap' (CSDb release #217751, AKA 'JammicroV1 world premiere', code by Jammer); the V1_1 sub-variant tag first appears on 2022 tunes ('Higher Math', 2022 Arise, sid #61307). Exact tool-authoring dates are not publicly documented.",
  "status": "in-progress",
  "platform": "Native C64 replay routine, hand-coded (not a cross-platform editor export). Written by Jammer, credited as 'Code' on the tune that premiered it; described by the author himself in a CSDb compo-forum comment as 'my new routine' shortly before it was finished. All tagged tunes are single-tune PAL/8580, small (256-747 bytes of tune data), consistent with a size-conscious routine for 4K intros and tiny-SID compos.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies per tune (read from each tagged .sid's PSID header via CSDb sid-entry pages, NOT independently trace-verified): V0 tunes are hand-placed at assorted addresses ($29F0 Aye_Contact #56960, $3200 Tillax #56957, $1000 Chessboard_Peya #57813 / Malibu #60375); all V1 and V1_1 tunes sampled load at $1000 (Ambience #60379, Dark_Heart #62226, Higher_Math #61307, Mini_House #63566, Bullet_Train #65556, plus DeMOSic's 1_Byte_Under_512 #60422 and Shogoon's 512_Rap #60264). Data sizes are consistently small (256-747 bytes) — but that is tune-data size, NOT the player's own code size, which no source states.",
    "zero_page": "TODO: no public source or disassembly found",
    "layout": "TODO: no public source or disassembly found"
  },
  "entry": {
    "init": "Init = the file's load address on every sampled tune (init=$1000 for all V1/V1_1 tunes; init tracks each V0 tune's own load address, e.g. $29F0 Aye_Contact, $3200 Tillax). Source: CSDb-parsed PSID headers of the tagged files (csdb.dk/sid/?id=60379, 62226, 56960, 56957, ...) — NOT independently disassembled or trace-verified here.",
    "play": "Play = init+3 on every sampled tune across all three version tags (e.g. $1003 for $1000-loaded V1/V1_1 tunes; $29F3 for Aye_Contact's $29F0; $3203 for Tillax's $3200), i.e. a fixed 3-byte offset from init consistent with a small JMP-table or fixed entry stub. Source: the same CSDb-parsed PSID headers — not trace-verified. This is a genuine +3 value, distinct from the play=$0000 header artifact seen with some other players."
  },
  "speed": "TODO: no public source states the play-call rate / multispeed model, and none was traced here. All sampled tunes are single-tune PAL on the 8580 SID per their PSID headers (CSDb), but that says nothing about the speed model.",

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
    "SIDId's sidid.nfo entry for both JammicroV0 and JammicroV1 carries only name/author, no reference (CSDb release id) or comment field, unlike ~66 other SIDId tags that include a playback-technique note — so csdb_release is left null rather than guessed.",
    "Jammicro IS registered in the public, open-source SIDId / player-id signature database (cadaver/sidid and WilfredC64/player-id on GitHub) with two distinct fingerprints — JammicroV0: 'D4 EE ?? ?? A2 00 E0 ?? D0 05 A2 00 8E ?? ?? BD' and JammicroV1: '9D 00 D4 4C ?? ?? BD ?? ?? 85' — both authored 'Kamil Wolnikowski (Jammer)'. These are byte-pattern IDENTIFICATION fingerprints (the '9D 00 D4' in the V1 signature is a 'STA $D400,X' SID-register write), NOT a memory map or format spec: they confirm the player's identity and that V0 and V1 are genuinely different code, but do not document the routine's internals — every Tier 3 data-format/effect field therefore stays TODO.",
    "The 'JammicroV1_1' tag used by DeepSID (and this dataset's 6 V1_1 files) does NOT exist in the public SIDId config — only JammicroV0 and JammicroV1 do. 'V1_1' is a DeepSID-internal sub-version label, i.e. a DeepSID refinement within the same public V1 signature family, not a separately-fingerprinted public player. It shares the V1 tunes' $1000/init+3 PSID-header convention."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag['JammicroV0'] / byTag['JammicroV1'] (name + author only, no reference/comment) — deepsid_dl/sidid.nfo snapshot, parsedAt 2026-07-11",
    "Local dataset: knowledge/COVERAGE.md, family 'JammicroV' (rank #6 among uncarded families, 19 files, raw tags JammicroV0/JammicroV1/JammicroV1_1)",
    "Local dataset: data/composers/jammer.json, data/composers/demosic.json, data/composers/shogoon.json (folder[] records) — 19 files total, 17 by Jammer, 1 by DeMOSic, 1 by Shogoon",
    "CSDb release '512 Rap' (id 217751): https://csdb.dk/release/?id=217751 — AKA 'JammicroV1 world premiere', code by Jammer, music by Shogoon, released at Unofficial Tiny SID Compo 2022, 10 May 2022",
    "CSDb event 'Unofficial Tiny SID Compo 2022' (id 3157): https://csdb.dk/event/?id=3157 — byte-limited categories (256B/512B/1K/2K); Jammer's 2022-05-07 forum comment about his 'new routine' almost being done",
    "CSDb scener profile, Jammer (id 8105): https://csdb.dk/scener/?id=8105 — real identity Kamil Wolnikowski, Poland, groups 1mandivision/MultiStyle Labs/Protovision; no Jammicro tool/player release credited in the bio (only a GoatTracker V2.61 music credit)",
    "Public SIDId signature config (open source): cadaver/sidid sidid.cfg — https://github.com/cadaver/sidid/blob/master/sidid.cfg — carries JammicroV0 ('D4 EE ?? ?? A2 00 E0 ?? D0 05 A2 00 8E ?? ?? BD') and JammicroV1 ('9D 00 D4 4C ?? ?? BD ?? ?? 85') fingerprints + author; mirrored in WilfredC64/player-id config/sidid.cfg (https://github.com/WilfredC64/player-id). Fetched 2026-07-24. NO JammicroV1_1 entry exists — that tag is DeepSID-only.",
    "CSDb sid-entry pages (PSID header load/init/play, single-tune PAL/8580) for tagged tunes, all fetched 2026-07-24 (init=load, play=load+3 on every one): Aye_Contact #56960 ($29F0), Tillax #56957 ($3200), Chessboard_Peya #57813 ($1000), Malibu #60375 ($1000), Ambience #60379 ($1000, 256B), Dark_Heart #62226 ($1000), Higher_Math #61307 ($1000), Mini_House #63566 ($1000), Bullet_Train #65556 ($1000), 1_Byte_Under_512 #60422 ($1000, 511B), 512_Rap #60264 ($1000, 511B) — https://csdb.dk/sid/?id=<id>",
    "No public SOURCE code or format/spec documentation for the Jammicro *player itself* found (only the identification fingerprints above); Lemon64 forum search is login-gated and Forum64 returned HTTP 403 to WebFetch — neither surfaced a Jammicro thread via web search (2026-07-24)"
  ]
}
```

## Overview

Jammicro is a native C64 music-replay routine written by Kamil Wolnikowski
("Jammer"), a Polish scener and composer (1mandivision / MultiStyle Labs /
Protovision). It is identified in this project's dataset only via Player-ID
signature tags (`JammicroV0`, `JammicroV1`, `JammicroV1_1`) — there is no
DeepSID curated entry and no dedicated CSDb tool/release page for it. `V0`
and `V1` are genuine, separately-fingerprinted players in the public
open-source SIDId database (cadaver/sidid); `V1_1` is a DeepSID-internal
refinement of the V1 signature, not a distinct public fingerprint. The
routine's first tunes date to 2019 (V0: "Tillax", "Aye Contact"); the V1
rewrite debuted publicly 10 May 2022 as "512 Rap" (CSDb release id 217751,
AKA "JammicroV1 world premiere") at the byte-limited "Unofficial Tiny SID
Compo 2022" (CSDb event #3157), with Jammer's own forum comment the same week
describing "my new routine" nearing completion. Across every tagged tune's
PSID header, init sits at the load address and play at init+3 (a fixed +3
entry convention); V0 tunes are hand-placed at varying load addresses while
all V1/V1_1 tunes standardized on $1000. Composer concentration is heavily
skewed: 17 of 19 tagged files in this collection (89%) are Jammer's own
tunes, with only one file each from DeMOSic and Shogoon — this is a personal
routine that saw very limited outside pickup, not a widely published tool.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) composer concentration
(89% Jammer himself) marks this as a personal routine rather than a
published tool with a manual; (2) the name and debut context strongly suggest
a size-coding ("tiny"/"micro") origin, but no source confirms an actual byte
budget for the player itself — that inference is kept out of the JSON facts
and stated only as circumstantial here; (3) no CSDb tool page, format spec,
or source repository could be found for any version.

## Disassembly notes

None performed. No published source or format documentation exists for the
Jammicro *player itself* to seed a disassembly pass, and none was undertaken
here (Tier 2 provenance research only). The public SIDId signature config
gives only two short identification fingerprints (see quirks), which are not
enough to reconstruct memory map, data format, or effect encoding. The
`memory.load_address` / `entry.init` / `entry.play` values recorded are
CSDb-parsed PSID-header metadata of the tagged tunes, not the product of a
disassembly or trace here.

## Verification

**Not verified — `status: in-progress` (ceiling for this worker; verification
would require reassembling init/play and tracing it through the siddump /
mcp-c64 loop, not done here).** Identity/provenance facts are confirmed
(author, dataset usage, 2019 V0 origin, 2022 V1 debut, size-compo context,
public open-source SIDId fingerprints for V0/V1, V1_1 as a DeepSID-only tag),
each cited to a local dataset file, a GitHub signature repo, or a CSDb page.
The `entry.init`/`entry.play` and per-file `load_address` values are cited to
CSDb-parsed PSID headers across 11 tagged tunes (init=load, play=init+3
consistently) but are explicitly NOT trace-verified. Every remaining Tier 3
field (zero page, layout, speed model, data format, effect encoding) stays
honestly `TODO`: no public source, disassembly, or format spec fills them,
and none was guessed.

## Sources

See the `sources` array — `data/sidid.json`, `knowledge/COVERAGE.md`,
`data/composers/*.json`, the public open-source SIDId signature configs
(cadaver/sidid, WilfredC64/player-id), 11 CSDb sid-entry PSID-header pages,
CSDb release #217751, CSDb event #3157, and the CSDb scener profile for
Jammer (Kamil Wolnikowski).
