# Companion (Keith Bowden)

```json
{
  "id": "companion",
  "name": "Companion (Keith Bowden)",
  "aliases": ["Companion"],
  "authors": ["Keith Bowden"],
  "released": "1984 (Pan Books)",
  "status": "stub",
  "platform": "TODO: native C64 driver, published as a type-in assembly listing in a print book — no dedicated editor for the original driver itself (SIDId: \"Type-in without editor\"); Vic H. Berry later built two standalone C64 editors on top of it, SID Sequencer (1988) and Aleatory Composer (1989) — see quirks",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: $xxxx (no disassembly)",
    "zero_page": "TODO: no disassembly",
    "layout": "TODO: no disassembly"
  },
  "entry": {
    "init": "TODO: $xxxx",
    "play": "TODO: $xxxx"
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
    "ORIGIN: Keith Bowden's 'The Companion to the Commodore 64', Pan Books, published April 1984 (208pp softback, ISBN 0-330-28479-7 per bookseller/library catalog listings) — a print book with a type-in music-driver assembly listing, not a distributed editor tool. SIDId's own comment confirms: 'Type-in without editor.'",
    "MULTI-AUTHOR EXTENSION HISTORY (from SIDId's comment, quoted verbatim): 'The book suggests to add features, which has been done on Rob Hubbard's two earliest SIDs and Clever Music's. In 1988 and in 1989, Vic H. Berry based two editors on this driver: SID Sequencer ... and Aleatory Composer ...'. This single raw tag `Companion` therefore covers at least four distinct hands: Bowden's original, Rob Hubbard's own early extension, Clever Music's (Graham Jarvis & Rob Hartshorne) extension, and Vic H. Berry's two derived standalone editors — SIDId did not split these into separate signatures the way it did for `Companion/Jay_Derrett` (see next quirk).",
    "COMPOSER BREAKDOWN in the local dataset (18 files, 4 composers): Vic Berry 12 (67%, via his own SID Sequencer/Aleatory Composer editors, including a file literally named 'SID_Sequencer.sid'), Music Clever 3, Rob Hubbard 2, Karl Hörnell 1. The Hubbard/Clever Music files match SIDId's comment exactly ('Rob Hubbard's two earliest SIDs and Clever Music's'). Karl Hörnell's single file ('Melonmania.sid') is an outlier worth flagging: DeepSID's composer profile gives his `active` year as 2018, decades after this driver's mid-1980s heyday — unverified whether this is a deliberate retro homage/reconstruction or a coincidental signature match; not asserted either way here.",
    "SEPARATE SIGNATURE, NOT AN ALIAS: `Companion/Jay_Derrett` (its own card, knowledge/players/companion-jay-derrett.md) is SIDId's own SEPARATE catalog entry, described there as a 'Rewrite of Clever Music's extension of Companion' used in CRL releases — i.e. a distinct rewritten codebase, not a copy of this driver under a different tag. Per this project's precedent for merging vs. splitting (knowledge/players/rockmonitor.md's RockMon3h case: merge only when SIDId does NOT independently catalog the sub-tag), this card stays separate from `companion-jay-derrett.md`, linked instead via a `derives_from` edge on that card (added when this card was created) rather than folded in as an alias here.",
    "CSDb release IDs for Vic Berry's two derived editors are given verbatim in SIDId's comment text (SID Sequencer: csdb.dk/release/?id=122332, Aleatory Composer: csdb.dk/release/?id=122331), and both surfaced in web search result titles ('[CSDb] - Aleatory Composer by V.H. Berry (1989)'), but neither ID could be independently confirmed live as of 2026-07-16: CSDb's own webservice (`?type=release&id=122331`/`122332`) returns the literal string `huh` (its documented response for an unrecognized ID), and a direct browser fetch of both URLs falls back to CSDb's generic homepage title instead of a release page. Recorded here as unconfirmed, not as fact — `csdb_release` on this card is left `null` rather than guessing which (if either) ID is still valid.",
    "No CSDb scener profile could be confirmed for Vic H. Berry: searching CSDb for 'Vic'/'V.H. Berry' surfaces an unrelated Hungarian coder/cracker/graphician handled 'Vic' (scener id 18003, https://csdb.dk/scener/?id=18003) — not this composer. His identity here rests only on HVSC/DeepSID's composer folder data (full_name 'Vic H. Berry', local dataset), not on any CSDb cross-reference.",
    "No CSDb release id was found for the original Bowden driver itself (as distinct from Berry's two derived editors) — consistent with it being a book type-in rather than a distributed scene release. `csdb_release` is null, not a placeholder for an unfound number."
  ],
  "sources": [
    "sidid.nfo (SIDId project, via DeepSID offline bundle; local copy data/sidid.json byTag['Companion']) — https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Blackwell's — bibliographic listing for 'The Companion to the Commodore 64' by Keith Bowden (Pan Books, 1984): https://blackwells.co.uk/bookshop/product/The-Companion-to-the-Commodore-64-by-Keith-Bowden/9780330284790",
    "Centre for Computing History — catalog entry (publisher Pan Books, ISBN 0 330 28479 7, softback 208pp): https://www.computinghistory.org.uk/det/60534/The-Companion-to-the-Commodore-64/",
    "CSDb webservice checks (this research pass, 2026-07-16): https://csdb.dk/webservice/?type=release&id=122331 and id=122332 both return 'huh' (CSDb's documented response for an unrecognized ID); direct browser fetch of https://csdb.dk/release/?id=122331 and ?id=122332 both resolve to CSDb's generic front page rather than a release page — cited as evidence the IDs are unconfirmed, not as evidence the releases don't exist under some other ID",
    "CSDb — scener id 18003 'Vic' (Hungary, Coder/Cracker/Graphician) checked and ruled OUT as a match for composer Vic H. Berry: https://csdb.dk/scener/?id=18003",
    "Local dataset: 18 files tagged `Companion`, 4 composers (Vic Berry 12, Music Clever 3, Rob Hubbard 2, Karl Hörnell 1) — see knowledge/COVERAGE.md and data/composers/*.json",
    "knowledge/players/companion-jay-derrett.md — sibling card for the separately-catalogued `Companion/Jay_Derrett` rewrite; see its quirks for the full three-generation lineage claim this card's evidence supports the first two links of"
  ]
}
```

## Overview

`Companion` is the raw Player-ID signature for Keith Bowden's "The Companion to
the Commodore 64" (Pan Books, April 1984) — a print-book type-in music driver
with no dedicated editor of its own. SIDId's cached comment records that the
book "suggests to add features," and that this happened at least three times:
Rob Hubbard extended it for his two earliest SIDs, Clever Music (Graham Jarvis
& Rob Hartshorne) extended it independently, and Vic H. Berry built two
standalone C64 editors on top of it in 1988–89 (SID Sequencer, Aleatory
Composer). SIDId does not split these extensions into separate signatures —
they all share this one `Companion` tag — which is why this card treats them
as one family, in contrast to the sibling `Companion/Jay_Derrett` tag, which
SIDId *does* catalog separately (a "rewrite," i.e. a distinct codebase) and
which already has its own card. Only 18 files in the local dataset carry this
tag, across 4 composers, two-thirds of them Vic Berry using his own derived
editors.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **multi-author extension
history** straight from SIDId's own comment (Bowden -> Hubbard/Clever Music
extensions -> Berry's two derived editors, all under one signature); the
**deliberate non-merge with `Companion/Jay_Derrett`**, which is SIDId's own
separate catalog entry and therefore kept as a separate card linked by a
`derives_from` edge rather than folded in as an alias (per the RockMon3h
merge-vs-split precedent); and the **unconfirmed CSDb release IDs** for
Berry's two editors — SIDId's comment quotes specific `csdb.dk/release/?id=`
numbers, but neither resolves to an actual release page as of this research
pass, so they are recorded as unconfirmed rather than trusted.

## Disassembly notes

None. No public source or disassembly was found for the original driver or
either of Vic Berry's derived editors; every memory/entry/format field is
`TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/lineage facts are recorded,
sourced from SIDId's cached comment, independent bibliographic confirmation of
the source book, and the local dataset's composer aggregation. No file tagged
with this player has been traced or disassembled.

## Sources

See the `sources` array — SIDId (`sidid.nfo`), two independent booksellers/
library-catalog confirmations of Keith Bowden's book, this research pass's own
CSDb webservice/browser checks (both negative, recorded honestly), and the
local dataset's composer aggregation.
