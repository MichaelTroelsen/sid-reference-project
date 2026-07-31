# Companion (Keith Bowden)

```json
{
  "id": "companion",
  "name": "Companion (Keith Bowden)",
  "aliases": ["Companion"],
  "authors": ["Keith Bowden"],
  "released": "1984 (Pan Books)",
  "status": "stub",
  "platform": "Native C64 driver, hand-embedded per file, published as a type-in assembly listing in a print book — no dedicated editor for the original driver itself (SIDId: \"Type-in without editor\"); Vic H. Berry later built two standalone C64 editors on top of it, SID Sequencer (1988) and Aleatory Composer (1989). Confirmed by a full 2026-07-31 CSDb header census of all 18 tagged files: every file's own `player_type` (DeepSID, data/composers/*.json) reads 'Normal built-in', and LoadAddr/InitAddr/PlayAddr vary by composer/batch rather than sitting at one fixed tool address (e.g. $C000/$C509/$C003 for Karl Hörnell's file vs $B000/$C500/$C535 for Music Clever's 'Back to the Future' vs an outlying $086D/$087C/$086D — deep in low/cassette-buffer memory — for Rob Hubbard's 'Commodore 64 Music Examples') — see quirks.",
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
    "COMPOSER BREAKDOWN in the local dataset (18 files, 4 composers): Vic Berry 12 (67%, via his own SID Sequencer/Aleatory Composer editors, including a file literally named 'SID_Sequencer.sid'), Music Clever 3, Rob Hubbard 2, Karl Hörnell 1. The Hubbard/Clever Music files match SIDId's comment exactly ('Rob Hubbard's two earliest SIDs and Clever Music's').",
    "Re-research pass, 2026-07-31: censused all 18 tagged files directly (not sampled) via `scripts/lib/csdb-client.js`'s `getSidRelease()` against each file's own CSDb SID-entry id (from data/composers/*.json). Every file's own PSID `Released` field was read (not a title-derived year): Rob Hubbard 'Up, up & Away!' (csdb.dk/sid/?id=14361) is dated **1984 Starcade** — the earliest date in the census, and it lines up exactly with the Pan Books 1984 publication window already recorded in `released`, directly corroborating (not just SIDId's comment) that Hubbard used the driver from the book's release year. Rob Hubbard's other file, 'Commodore 64 Music Examples' (id=14353), is 1985 Rob Hubbard, LoadAddr/InitAddr/PlayAddr $086D/$087C/$086D — an outlying low-memory/cassette-buffer-range load address unlike every other file in the census (all others load in the $B000-$C000 range). Music Clever's three files: 'Gyroscope' 1985 Melbourne House, 'Back to the Future' and 'Fairlight' both 1986 (Electric Dreams / The Edge respectively). Vic Berry's 12 files split into two batches, both **1989**, not 1988: 7 files credited 'Commodore Disk User' (LoadAddr $C002, InitAddr $C053, PlayAddr $C003 uniformly) and 5 files credited 'Vic H. Berry' directly (LoadAddr $C000, same InitAddr/PlayAddr) — consistent stable driver addresses across his whole output, distinct from Hubbard's and Music Clever's own instances.",
    "CORRECTION (2026-07-31 census): Karl Hörnell's single file 'Melonmania' (csdb.dk/sid/?id=14251) carries its own PSID `Released` field of **'1986 Interceptor'** — this resolves the ambiguity flagged in an earlier pass (DeepSID's composer profile gives his `active` year as 2018, decades after this driver's mid-1980s heyday). The file's own CSDb metadata confirms it is a genuine mid-1980s piece, not a 2018 retro homage/reconstruction; DeepSID's `active: 2018` field appears to reflect a later profile-update or unrelated resurfacing date, not the tune's actual origin. Composer breakdown and totals (18 files, 4 composers) are unchanged by this census.",
    "SEPARATE SIGNATURE, NOT AN ALIAS: `Companion/Jay_Derrett` (its own card, knowledge/players/companion-jay-derrett.md) is SIDId's own SEPARATE catalog entry, described there as a 'Rewrite of Clever Music's extension of Companion' used in CRL releases — i.e. a distinct rewritten codebase, not a copy of this driver under a different tag. Per this project's precedent for merging vs. splitting (knowledge/players/rockmonitor.md's RockMon3h case: merge only when SIDId does NOT independently catalog the sub-tag), this card stays separate from `companion-jay-derrett.md`, linked instead via a `derives_from` edge on that card (added when this card was created) rather than folded in as an alias here.",
    "CSDb release IDs for Vic Berry's two derived editors are given verbatim in SIDId's comment text (SID Sequencer: csdb.dk/release/?id=122332, Aleatory Composer: csdb.dk/release/?id=122331), and both surfaced in web search result titles ('[CSDb] - Aleatory Composer by V.H. Berry (1989)'), but neither ID could be independently confirmed live as of 2026-07-16: CSDb's own webservice (`?type=release&id=122331`/`122332`) returns the literal string `huh` (its documented response for an unrecognized ID), and a direct browser fetch of both URLs falls back to CSDb's generic homepage title instead of a release page. Recorded here as unconfirmed, not as fact — `csdb_release` on this card is left `null` rather than guessing which (if either) ID is still valid.",
    "CSDb_RELEASE re-checked 2026-07-31, still null/unconfirmed: re-queried the webservice directly (`type=release&id=122331` and `id=122332` via scripts/lib/csdb-client.js's `getRelease()`) — both still return the literal `huh`. Re-fetched both URLs live: id=122331 now resolves to CSDb's generic front page (same negative as 2026-07-16); id=122332 returned a raw `connect ECONNREFUSED` and, on retry, the front page again. Also checked whether any of the 18 census SID entries' own CSDb pages carry a distinct driver/tool release entry in their `UsedIn` block (depth=2 query) — none do; 'SID_Sequencer.sid' (Vic Berry, id=59692) in particular has no `UsedIn` at all. Searched CSDb via `site:csdb.dk \"Aleatory Composer\"` and `site:csdb.dk \"SID Sequencer\" Berry` — both surfaced only the same two stale-looking search-engine-cached titles pointing at the dead ids, no new/live id. `csdb_release` stays `null`.",
    "INDEPENDENT CORROBORATION that SID Sequencer and Aleatory Composer are distinguishable driver instances (not just SIDId's own comment): Lemon64 forum thread 'JC64dis (next generation disassembler) 1.7' (https://www.lemon64.com/forum/viewtopic.php?t=79067, checked directly 2026-07-31, not via AI summary) lists among its bundled disassembly examples 'Aleatory Composer's player (tune \"Sigma\" by V.H.Berry (c) 1989)' and 'SID Sequencer's player (tune \"Triad\" by V.H.Berry (c) 1988)' — a third party (the JC64dis author) independently treats these as two distinct named player routines. Note a minor date discrepancy: JC64dis's listing gives 'Triad' as '(c) 1988', while this pass's CSDb census (below) reads 'Triad''s own PSID `Released` field as '1989 Commodore Disk User' — likely an internal SID-file copyright string vs. a later magazine/disk publication date, not investigated further here.",
    "No CSDb scener profile could be confirmed for Vic H. Berry: searching CSDb for 'Vic'/'V.H. Berry' surfaces an unrelated Hungarian coder/cracker/graphician handled 'Vic' (scener id 18003, https://csdb.dk/scener/?id=18003) — not this composer. His identity here rests only on HVSC/DeepSID's composer folder data (full_name 'Vic H. Berry', local dataset), not on any CSDb cross-reference.",
    "No CSDb release id was found for the original Bowden driver itself (as distinct from Berry's two derived editors) — consistent with it being a book type-in rather than a distributed scene release. `csdb_release` is null, not a placeholder for an unfound number.",
    "Forum64 (forum64.de) checked this pass (2026-07-31) via web search for German-language discussion of Bowden's driver, Vic Berry, or the Companion tag ('forum64.de \"Companion\" Keith Bowden Commodore 64 Treiber') — no forum64.de hits at all, only unrelated book-listing results. Negative, recorded not omitted."
  ],
  "sources": [
    "sidid.nfo (SIDId project, via DeepSID offline bundle; local copy data/sidid.json byTag['Companion']) — https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Blackwell's — bibliographic listing for 'The Companion to the Commodore 64' by Keith Bowden (Pan Books, 1984): https://blackwells.co.uk/bookshop/product/The-Companion-to-the-Commodore-64-by-Keith-Bowden/9780330284790",
    "Centre for Computing History — catalog entry (publisher Pan Books, ISBN 0 330 28479 7, softback 208pp): https://www.computinghistory.org.uk/det/60534/The-Companion-to-the-Commodore-64/",
    "CSDb webservice checks (this research pass, 2026-07-16): https://csdb.dk/webservice/?type=release&id=122331 and id=122332 both return 'huh' (CSDb's documented response for an unrecognized ID); direct browser fetch of https://csdb.dk/release/?id=122331 and ?id=122332 both resolve to CSDb's generic front page rather than a release page — cited as evidence the IDs are unconfirmed, not as evidence the releases don't exist under some other ID",
    "CSDb — scener id 18003 'Vic' (Hungary, Coder/Cracker/Graphician) checked and ruled OUT as a match for composer Vic H. Berry: https://csdb.dk/scener/?id=18003",
    "Local dataset: 18 files tagged `Companion`, 4 composers (Vic Berry 12, Music Clever 3, Rob Hubbard 2, Karl Hörnell 1) — see knowledge/COVERAGE.md and data/composers/*.json",
    "knowledge/players/companion-jay-derrett.md — sibling card for the separately-catalogued `Companion/Jay_Derrett` rewrite; see its quirks for the full three-generation lineage claim this card's evidence supports the first two links of",
    "CSDb webservice, type=sid, full census of all 18 tagged files' own PSID Released/LoadAddr/InitAddr/PlayAddr fields (this pass, 2026-07-31), queried via scripts/lib/csdb-client.js getSidRelease() against csdb_id values from data/composers/*.json — e.g. https://csdb.dk/webservice/?type=sid&id=14361 (Rob Hubbard, 'Up, up & Away!', 1984 Starcade, earliest in census), https://csdb.dk/webservice/?type=sid&id=14251 (Karl Hörnell, 'Melonmania', 1986 Interceptor, resolves the DeepSID active:2018 ambiguity), https://csdb.dk/webservice/?type=sid&id=59692 (Vic Berry, 'SID Sequencer', 1989 Commodore Disk User) — full list of all 18 ids in data/composers/karl-hoernell.json, data/composers/*clever*, data/composers/rob-hubbard.json, data/composers/vic-berry.json",
    "CSDb webservice re-check, type=release, ids 122331/122332 (this pass, 2026-07-31): both still return 'huh'; live browser re-fetch of https://csdb.dk/release/?id=122331 (front page) and ?id=122332 (ECONNREFUSED, then front page on retry)",
    "Lemon64 forum — 'JC64dis (next generation disassembler) 1.7', independently naming Aleatory Composer's and SID Sequencer's player routines against V.H.Berry tunes 'Sigma' (1989) and 'Triad' (1988): https://www.lemon64.com/forum/viewtopic.php?t=79067 (checked directly this pass, 2026-07-31)",
    "Forum64 (forum64.de) checked this pass (2026-07-31) via web search for German-language Bowden/Companion/Vic Berry driver discussion — no results found (negative, recorded not omitted)"
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
editors. A 2026-07-31 census of all 18 tagged files' own CSDb SID-entry headers
confirms the earliest attested use directly — Rob Hubbard's 'Up, up & Away!',
1984 Starcade, matching the book's own publication year — and resolves an
earlier open question about Karl Hörnell's single file (its own `Released`
field reads 1986 Interceptor, not a 2018 retro homage as DeepSID's composer
`active` field alone might suggest). Every census file's `player_type` reads
'Normal built-in' with a load address that varies by composer/batch, the basis
for this pass's `platform` finding: a native C64 driver hand-embedded per file,
not a distributed tool with one fixed address.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **multi-author extension
history** straight from SIDId's own comment (Bowden -> Hubbard/Clever Music
extensions -> Berry's two derived editors, all under one signature); the
**deliberate non-merge with `Companion/Jay_Derrett`**, which is SIDId's own
separate catalog entry and therefore kept as a separate card linked by a
`derives_from` edge rather than folded in as an alias (per the RockMon3h
merge-vs-split precedent); the **unconfirmed CSDb release IDs** for Berry's two
editors — SIDId's comment quotes specific `csdb.dk/release/?id=` numbers, but
neither resolves to an actual release page as of this or the 2026-07-16 pass,
re-checked and still negative; and the **2026-07-31 full-file census**, which
corroborates the 1984 origin date directly from tune metadata, corrects the
earlier unresolved Karl Hörnell ambiguity, and fills `platform` from real
per-file header shape rather than leaving it hedged.

## Disassembly notes

None. No public source or disassembly was found for the original driver or
either of Vic Berry's derived editors; every memory/entry/format field is
`TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/lineage/platform facts are
recorded, sourced from SIDId's cached comment, independent bibliographic
confirmation of the source book, a direct 2026-07-31 census of every tagged
file's own CSDb SID-entry header, and the local dataset's composer
aggregation. No file tagged with this player has been traced or disassembled;
every memory/entry/format field remains `TODO`.

## Sources

See the `sources` array — SIDId (`sidid.nfo`), two independent booksellers/
library-catalog confirmations of Keith Bowden's book, this research pass's own
CSDb webservice/browser checks (both negative, recorded honestly), and the
local dataset's composer aggregation.
