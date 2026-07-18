# Audiomaster V1

<!--
  Player-ID / SIDId tag: "(Audiomaster_V1)" — a music editor by Ruben Spaans
  ("Scroll") of Megastyle, built by hacking Johannes Bjerregaard's MoN-era
  Stormlord player. Distinct from "Audiomaster_V2" (CSDb release 7072), a
  separate later release with its own new player, per SIDId and secondary
  sourcing below. Created as the target of mon-bjerregaard.md's
  `shares_routine_with` edge; see this card's `derives_from` for the
  directional counterpart.
-->

```json
{
  "id": "audiomaster-v1",
  "name": "Audiomaster V1",
  "aliases": ["(Audiomaster_V1)", "Audiomaster"],
  "authors": ["Ruben Spaans (Scroll)"],
  "released": "1989",
  "status": "stub",
  "platform": "Native C64 tool — a music editor (not a tracker/pattern-grid tool in its first version; see quirks). Built by directly hacking/patching the in-game Stormlord player binary with a machine-code monitor rather than an assembler, per secondary sourcing.",
  "csdb_release": 7071,

  "memory": {
    "load_address": "TODO: no disassembly performed",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO: no disassembly performed",
    "play": "TODO: no disassembly performed"
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
    "encoding": "TODO: not documented publicly",
    "commands": {}
  },

  "edges": {
    "derives_from": ["mon-bjerregaard"],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The load-bearing lineage fact, from SIDId's own data (data/sidid.json byTag['(Audiomaster_V1)'].comment): 'Editor that is based on the player of /MUSICIANS/B/Bjerregaard_Johannes/Stormlord.sid' — and Stormlord.sid is itself tagged 'MoN/Bjerregaard' in this dataset (see knowledge/players/mon-bjerregaard.md). Recorded here as a `derives_from` edge to mon-bjerregaard — the correct directional counterpart to that card's non-directional `shares_routine_with` (it could not host a directional edge to this then-uncarded id). This is a stated lineage claim from SIDId's curators, NOT a byte-verified derivation — no disassembly has confirmed shared code between the two players at the instruction level. Treat the edge's strength as 'documented claim,' not 'proven.'",
    "Independent secondary corroboration exists beyond SIDId, at the narrative level: a C64-scene memoir (rebelandroid.com/dmx, a personal retrospective by a former Megastyle-adjacent scener) states 'Scroll of Megastyle ... hacked Maniacs of Noise's Stormlord music player and made a custom editor for it, called Audiomaster,' coded 'in a monitor, not assembler' — i.e. Spaans patched/wrapped Bjerregaard's existing Stormlord player binary directly rather than writing a new play routine from scratch, and the editor's interface was 'very much inspired by Future Composer.' This is a secondary source (informal memoir, not a primary CSDb/author statement), used here only to corroborate SIDId's comment, not as an independent confirmation.",
    "Zero local usage: this collection's data/composers/*.json has NO files tagged '(Audiomaster_V1)' (nor the plain 'Audiomaster' tag it might export as) — it does not appear in knowledge/COVERAGE.md's uncarded-family table at all, which only lists 'Audiomaster_V2' at 2 files. If V1's own play routine is close enough to plain MoN/Bjerregaard's, SIDId may simply not have a distinguishing signature for many/most tunes made with it, or very few tunes made with this specific editor version survive in HVSC's MUSICIANS/ tree (this dataset excludes GAMES/). This card exists purely to host the identity + lineage edge that mon-bjerregaard.md already pointed at, not because of local file volume.",
    "A separate, later release exists: 'Audiomaster_V2' (data/sidid.json byTag, CSDb release id 7072, same author/group/year 1989) — per the same memoir, Scroll wrote an entirely new player for V2 ('He wrote his own player for it as well, and again all in a machine-code monitor'), addressing requests for tracker-style ('Soundmaster'-like) functionality. This implies V1 and V2 are NOT the same play routine — V1 wraps Bjerregaard's Stormlord player, V2 is a new one — so no edge is asserted between audiomaster-v1 and any future audiomaster-v2 card without further evidence; keep them separate.",
    "No public source code or format documentation was found for either Audiomaster version — the only CSDb downloads are the tool disk/instructions ('mzx tools.zip', 'Audio_Master+inst.d64'), not a source archive. A future pass to move this past `stub` would need to disassemble the editor/player binary from one of those disk images directly, and/or disassemble Stormlord.sid itself (already flagged as the concrete next step on mon-bjerregaard.md) to test the derivation claim at the byte level."
  ],
  "sources": [
    "data/sidid.json byTag['(Audiomaster_V1)'] — author Ruben Spaans (Scroll); released '1989 Megastyle'; reference https://csdb.dk/release/?id=7071; comment naming /MUSICIANS/B/Bjerregaard_Johannes/Stormlord.sid as the player this editor is based on",
    "data/sidid.json byTag['Audiomaster_V2'] — same author/group/year, separate CSDb release id 7072, no comment field (used here only to establish V1 and V2 are distinct releases)",
    "CSDb release, Audiomaster (Ruben Spaans/Scroll, Megastyle, 1989) — https://csdb.dk/release/?id=7071 (credits: Code — Scroll (Jolly Poppers, Megastyle); Music — Flashman; platform 'Commodore 64 Tool')",
    "knowledge/players/mon-bjerregaard.md — sibling card for the Johannes Bjerregaard MoN-era Stormlord player this editor is built on; originally asserted the non-directional `shares_routine_with` half of this same lineage claim before this card existed",
    "rebelandroid.com/dmx — personal C64-scene memoir/retrospective recounting Scroll's authorship of Audiomaster (hacked from Stormlord's player, coded via monitor not assembler, Future-Composer-inspired UI) and the later ground-up Audiomaster 2 player; used as secondary corroboration only, not a primary source: https://rebelandroid.com/dmx",
    "Local dataset check: no files in data/composers/*.json carry the '(Audiomaster_V1)' tag; knowledge/COVERAGE.md's uncarded-family table lists only 'Audiomaster_V2' (2 files) — V1 has zero measured local usage",
    "cadaver/sidid project (source of sidid.nfo / SIDId data): https://github.com/cadaver/sidid"
  ]
}
```

## Overview

Audiomaster V1 is a 1989 C64 music editor by Norwegian coder **Ruben Spaans**,
known on the scene as **Scroll**, released through his group **Megastyle**
(CSDb release id 7071). Per SIDId's own database, it is directly built on
**Johannes Bjerregaard's MoN-era Stormlord player** — carded separately at
[`mon-bjerregaard.md`](mon-bjerregaard.md) — which SIDId's comment field
states outright: "Editor that is based on the player of
/MUSICIANS/B/Bjerregaard_Johannes/Stormlord.sid". A secondary source (an
informal scene memoir) corroborates this at the narrative level: Spaans
reportedly hacked the Stormlord player directly, coded via a machine-code
monitor rather than an assembler, with a Future-Composer-inspired UI grafted
on top. This card exists mainly to host that lineage edge as a `derives_from`
pointing at `mon-bjerregaard` — the directional counterpart mon-bjerregaard.md
could not host itself when it was written first. Locally, this tag has **zero
measured file usage** in this collection's `data/composers/*.json` — a
separate later release, Audiomaster V2 (CSDb id 7072, a ground-up new player
per the same memoir), has 2 files under its own tag, but V1 itself does not
appear at all, so this is an identity/lineage-only stub, not a usage-backed
card.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) the `derives_from`
edge to `mon-bjerregaard` is a **stated SIDId claim, corroborated only by an
informal memoir**, not a byte-verified derivation — no disassembly has been
done on either side to confirm shared code. (2) **Audiomaster V1 and V2 are
different play routines**, per the same memoir (V2 got an entirely new,
ground-up player) — do not conflate the two releases or assume any edge
between them without further evidence.

## Disassembly notes

None performed. No public source archive was found for Audiomaster V1 — CSDb
hosts only a tool disk and an instructions disk, not source code. The
concrete next step to move this card past `stub`, and to actually test the
`derives_from` claim, would be to disassemble the editor/player binary from
`Audio_Master+inst.d64` (or a Stormlord-derived .sid produced with it, if one
can be located) and compare its play routine against a disassembly of
Bjerregaard's Stormlord player itself.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
group, release year, CSDb release, and the SIDId-stated lineage to
`mon-bjerregaard`) are recorded, sourced from the cached SIDId entry, the
CSDb release page, and one secondary memoir source used for corroboration
only. Every runtime/memory/data-format field is honestly `TODO` — no
disassembly was performed, and none was available to draw on.

## Sources

See the `sources` array — SIDId's `(Audiomaster_V1)` and `Audiomaster_V2`
entries, the CSDb release page (`?id=7071`), the sibling `mon-bjerregaard.md`
card this one completes the lineage edge with, a secondary scene-memoir
source (rebelandroid.com/dmx) used for corroboration only, and this project's
own local `data/composers/*.json` / `knowledge/COVERAGE.md` check confirming
zero measured local usage of this specific tag.
