# EasyPlayer (Mr. Mouse)

```json
{
  "id": "mrmouse-easyplayer",
  "name": "EasyPlayer",
  "aliases": ["MrMouse/EasyPlayer"],
  "authors": ["Michael Zuurman (Mr. Mouse)"],
  "released": "2020 (Xentax) — not a confirmed tool-release date; the earliest/only attested use. All 6 of the tag's files (full census) carry an identical CSDb 'Released' field of '2020 Xentax' (SID ids 57753, 57754, 58311, 58313, 59885, 59886 — csdb.dk webservice type=sid), and all 6 are credited to the group Xentax, which CSDb's group page (csdb.dk/webservice/?type=release&id=194323) confirms is Mr. Mouse/Michael Zuurman's own C64 music group (founded 1988, base country Netherlands) — i.e. a self-published batch, not an independent tool-release date.",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this exact name — confirmed absent by searching CSDb, Lemon64, and Forum64 (all 6 tagged files are catalogued only as SID-music entries and one C64 Music Collection release, none as a standalone player/editor product). SIDId's own comment describes it as a fork of a different player, and the 6 files were made specifically for a one-off 2020 MSX-to-C64 OST conversion project (see quirks) — consistent with an adapted/derivative in-house C64 replay routine built for that project rather than a generally published tool.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId's entry for this tag has an AUTHOR line ('Michael Zuurman (Mr. Mouse)') and a COMMENT ('Fork of 4-Mat's AY Player') but no NAME or reference/CSDb link — consistent with an in-house/unreleased-as-a-titled-product routine rather than a formally published editor.",
    "UNRESOLVED LINEAGE CLAIM: SIDId's own comment states this is a 'Fork of 4-Mat's AY Player' — but no Player-ID tag or knowledge-base card for a '4-Mat AY Player' (or similar) exists in this project's local dataset (checked data/sidid.json for any AY-player tag and for any 4-Mat-authored tag — none found), and 4-Mat/Matt Simmonds's other carded routines here (4-mat-tiny-1.md, 4-mat-miniseq.md, 4-mat-1k-play.md) are separate, unrelated tags with no AY-chip association. Per this project's rule, an `edges` entry is only recorded when it points at a real, evidenced target in this KB — since no such target exists to point at, this is recorded here as a quirk only, not an edge. The 'AY' in the name likely refers to the AY-3-8912 sound chip (used on the ZX Spectrum 128/Amstrad CPC, not natively on the C64) — suggesting 4-Mat's original 'AY Player' may itself be a cross-platform or emulated-chip-tracker context, unconfirmed.",
    "All 6 locally-tagged files are by the same composer, 'Mouse Mr' (data/composers/*.json) — consistent with a personal/small-circle routine, matching the author identity from SIDId. Titles are game OST transcriptions (Metal Gear, Vampire Killer, Nemesis MSX OST, The Treasure of Usas MSX OST) — suggesting this was used specifically for MSX/console soundtrack covers/tributes on the C64.",
    "Full census (6/6 files) via CSDb webservice (type=sid): all 6 share an identical Released field, '2020 Xentax' — Nemesis_MSX_OST.sid (id 57753, 24 subtunes), Treasure_of_Usas_MSX_OST.sid (id 57754, 11), Metal_Gear_OST.sid (id 58311, 11), Metal_Gear_OST_Intro.sid (id 58313, 1), Vampire_Killer_OST.sid (id 59885, 15), Vampire_Killer_OST_Intro.sid (id 59886, 1). One release, 'Metal Gear MSX OST (PSG)' (csdb.dk/release/?id=194323), packages these as a C64 Music Collection; its full credits (depth=2) list only Mr. Mouse (Code) and Robert Ramsay (Graphics) — no other coder or musician credited.",
    "DISCARDED LEAD: a search-engine AI summary claimed '4-Mat of Ate Bit and Orb' was credited alongside Mr. Mouse on the Metal Gear MSX OST (PSG) release, which would have corroborated SIDId's 'fork of 4-Mat's AY Player' comment. Fetching the actual CSDb release credits (csdb.dk/webservice/?type=release&id=194323&depth=2) shows no such credit — only Graphics (Robert Ramsay) and Code (Mr. Mouse). Recorded here so a future pass doesn't re-chase it; the lineage claim remains sourced only to SIDId's own comment field, unconfirmed elsewhere.",
    "PSID header addresses (metadata only, not Tier 3 fact): 5 of the 6 files share identical load/init/play — load $0FE5 (4069), init $0FE5, play $1003 (4099) — while Metal_Gear_OST_Intro.sid alone uses load/init $0801 (2049), play $0804 (2052), the standard BASIC-program start address, suggesting that one file is a differently-wrapped intro-only stub rather than the same raw player binary."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['MrMouse/EasyPlayer'], author + 'Fork of 4-Mat's AY Player' comment)",
    "Local dataset: 6 files tagged MrMouse/EasyPlayer, 1 composer (Mouse Mr) — data/composers/*.json aggregation",
    "CSDb webservice, type=sid, ids 57753/57754/58311/58313/59885/59886 (csdb.dk/webservice/?type=sid&id=<id>&depth=2) — Released field and PSID header addresses for all 6 tagged files",
    "CSDb webservice, type=release, id=194323 (csdb.dk/release/?id=194323, 'Metal Gear MSX OST (PSG)' by Xentax, 2020) — release credits (Code: Mr. Mouse; Graphics: Robert Ramsay only) and the Xentax group trivia confirming it is Mr. Mouse/Michael Zuurman's own C64 music group, founded 1988"
  ]
}
```

## Overview

`MrMouse/EasyPlayer` is SIDId's tag for a routine attributed to **Michael
Zuurman**, handle **Mr. Mouse**. SIDId's own comment field describes it as a
"Fork of 4-Mat's AY Player" — a lineage claim from the source itself — but no
tag or card for such a "4-Mat AY Player" exists anywhere in this project's
local dataset, so no `edges` relationship is recorded (there is no evidenced
target to point at). All 6 locally-tagged files (full census) are by Mr.
Mouse himself, titled as MSX/console game-soundtrack transcriptions (Metal
Gear, Vampire Killer, Nemesis, The Treasure of Usas), and all 6 carry an
identical CSDb "Released" date of "2020 Xentax" — Xentax being Mr. Mouse's
own C64 music group (founded 1988), confirming this was a self-contained,
self-published 2020 MSX-to-C64 OST conversion project rather than a
generally distributed editor/tool. No dedicated CSDb tool/release page for
"EasyPlayer" itself was found (checked CSDb, Lemon64, Forum64).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's own "fork of 4-Mat's AY
Player" comment is a real sourced claim but points at nothing this project
has carded or even tagged elsewhere — recorded as an open lineage lead, not
an edge; a search-engine AI summary's claim that 4-Mat was co-credited on the
"Metal Gear MSX OST (PSG)" release did not survive fetching the actual CSDb
credits (only Mr. Mouse/Code and Robert Ramsay/Graphics are listed) — that
lead is discarded; (2) the "AY" in the name likely references the AY-3-8912
chip (MSX/Spectrum-128/CPC), hinting at a cross-platform-tracker origin,
unconfirmed; (3) single-composer concentration (6/6 files, Mr. Mouse
himself), all OST covers, all dated identically to "2020 Xentax" by full
census; (4) 5 of 6 files share one PSID load/init/play address set, one
(`Metal_Gear_OST_Intro.sid`) loads at the standard BASIC start address
instead — header metadata only, not a Tier 3 fact.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. No public source repo, CSDb tool/release page, or format
spec was found under this name.

## Verification

Not verified. Seeded from `data/sidid.json`, `data/composers/*.json`, and a
full-census CSDb webservice lookup (Tier 2 provenance) on 2026-07-31.
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, the local composer aggregation,
and CSDb webservice lookups (`type=sid` for all 6 tagged files, `type=release`
for the packaging release and Xentax group identity).
