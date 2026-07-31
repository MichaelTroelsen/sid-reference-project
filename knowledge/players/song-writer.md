# Song_Writer (Jeremy Thorne)

```json
{
  "id": "song-writer",
  "name": "Song_Writer (Jeremy Thorne)",
  "aliases": ["Song_Writer"],
  "authors": ["Jeremy Thorne"],
  "released": "TODO: year unconfirmed. CSDb's own webservice record for all 7 tagged SIDs (censused individually, ids 29304-29310) gives the same placeholder 'Released: 198? Jeremy Thorne' — CSDb's own marker for 'unknown year, 1980s' (csdb.dk/webservice/?type=sid&id=29304..29310). HVSC composer profile separately lists 'active: 1987' (data/composers/jeremy-thorne.json). A 1983 date exists for Thorne's biography (see quirks) but is for unrelated cartridge games, not these SIDs — do not promote it into this field.",
  "status": "stub",
  "platform": "TODO: unconfirmed, but native-C64/hand-coded is now better supported (see quirks): (1) all 7 tagged SIDs share an identical PSID LoadAddr $0808/InitAddr $0C10, i.e. one player instance, not a generic library; (2) Ice Team's JC64dis disassembler independently lists 'Song Writer' as its own distinct native PSID player construct used only by Thorne's tunes (https://iceteam.itch.io/jc64dis); (3) Thorne's own account of his C64 work describes writing 'cartridge games (in raw machine code)' as a 14-year-old for Mr Computer Products in 1983 (https://www.gamesthatwerent.com/gtw64/pubjumper-mario/) — a hand-coding hobbyist profile, consistent with a personal routine, though that account is about unrelated Mario cartridges, not the Song_Writer SIDs themselves. No distributed tool release, .d64, editor, or manual has been found.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
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
    "100% single-composer: all 7 files in this dataset tagged raw player tag 'Song_Writer' are authored by Jeremy Thorne himself (data/composers/jeremy-thorne.json — 'Song Writer - Follow Me/Games/Life/Lost/Mind Over Matter/REM10/Tell Me'). This is a stronger personal-routine signal than the project's usual concentration heuristic (cf. Rob Hubbard's 51-composer spread) — every single known use is the same person, consistent with a hand-coded in-house routine rather than a released/shared editor.",
    "SIDId's entry for this tag is minimal: author 'Jeremy Thorne' only — no released year, no CSDb reference, no comment (github.com/cadaver/sidid/blob/master/sidid.nfo, verified directly). No CSDb release page, .d64, or source has been found for a distributed 'Song Writer' tool by Thorne.",
    "NAME-COLLISION LANDMINE: this project's own data/players.json has an unrelated CURATED player entry titled 'Songwriter' (no underscore) — developer 'Samuel Wantman, Art Bardige', 1983-1984, distribution 'Commercial', csdb_id 166760. That CSDb release (https://csdb.dk/release/?id=166760) is a 2703 Group crack of a commercial product, and CSDb also lists a related 'Songwriter Demos' disk by Florasoft (https://csdb.dk/release/?id=84840, music credited to Paul Kleimeyer) — an educational song-composing program, not Jeremy Thorne's routine. SIDId's raw-tag author for 'Song_Writer' is Thorne alone, with no author overlap to Wantman/Bardige/Kleimeyer. No evidence connects the two; do NOT merge or edge them.",
    "Jeremy Thorne has no CSDb scener id in the local composer cache (csdb_id: 0, country unset, data/composers/jeremy-thorne.json) — his identity beyond the HVSC MUSICIANS/T/Thorne_Jeremy/ folder credit is otherwise unresearched.",
    "No STIL.txt comment exists for any of the 7 Song_Writer-tagged files (checked directly). HVSC's Musicians.txt DOES have a 'Thorne, Jeremy' entry (line 1692) but it is a bare handle line with no group or country attached — no additional biographical detail beyond confirming the name.",
    "CENSUS (all 7 of 7 tagged files, via CSDb webservice type=sid, ids 29304-29310): every file shares the identical PSID LoadAddr 2056 ($0808) and InitAddr 3088 ($0C10), and every file's own `Released` field reads the same uncertain placeholder '198? Jeremy Thorne' (CSDb's own 'unknown year in the 1980s' marker, not a confirmed date). Identical load/init across all 7 is consistent with one player instance reused by its single composer, not a shared library used by multiple people.",
    "Ice Team's JC64dis disassembler (a PSID reverse-engineering tool, https://github.com/ice00/jc64, described at https://iceteam.itch.io/jc64dis) independently lists 'Song Writer' as a distinct named native PSID player construct in its own example/player database, reverse-engineered from a Thorne SID ('Song Writer - REM10'). This is external corroboration that the tag denotes a real, distinct player routine (not a database artifact) — and a concrete future lead: JC64dis's repo may already contain a disassembled source for it, which would open a real Tier 3 pass. Not fetched/read here; flagged for a future disassembly-focused pass only.",
    "No CSDb scener page for 'Jeremy Thorne' was found by direct search (query returned unrelated 'Jeremy Stainton' / other sceners, no match) — consistent with the local cache's `csdb_id: 0`. Thorne's own account of writing C64 cartridge games (unrelated Mario titles, not the Song_Writer SIDs) 'in raw machine code' as a 14-year-old for Mr Computer Products in 1983 is documented at https://www.gamesthatwerent.com/gtw64/pubjumper-mario/ — biographical context only, not proof of the Song Writer routine's own date or authorship method."
  ],
  "sources": [
    "sidid.nfo entry (author only, no reference/comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: data/composers/jeremy-thorne.json (7 of 11 files tagged 'Song_Writer', all composed by Jeremy Thorne)",
    "Local aggregation: 7 files, single raw tag 'Song_Writer', no source flag",
    "CSDb search confirms only the 7 Jeremy Thorne SIDs match 'Song Writer', no separate tool release: https://csdb.dk/search/?seinsel=all&search=Song+Writer",
    "Unrelated commercial 'Songwriter' (name-collision check): https://csdb.dk/release/?id=166760 and https://csdb.dk/release/?id=84840",
    "CSDb webservice census of all 7 tagged SID entries (type=sid, ids 29304-29310, via scripts/lib/csdb-client.js): identical LoadAddr/InitAddr, identical uncertain 'Released: 198? Jeremy Thorne' field on every file — https://csdb.dk/webservice/?type=sid&id=29304 (and 29305-29310)",
    "JC64dis (Ice Team) disassembler player database independently names 'Song Writer' as a distinct player construct: https://iceteam.itch.io/jc64dis (source repo https://github.com/ice00/jc64, not fetched)",
    "Thorne's own account of writing C64 cartridge games in raw machine code (unrelated Mario titles, biographical context only): https://www.gamesthatwerent.com/gtw64/pubjumper-mario/",
    "CSDb scener search for 'Jeremy Thorne' returns no matching profile (consistent with csdb_id: 0 in local cache)"
  ]
}
```

## Overview

`Song_Writer` is a Player-ID signature tag covering 7 SID files in this
dataset, and every single one of them
is a composition by **Jeremy Thorne** himself
(`data/composers/jeremy-thorne.json`). SIDId's index (`sidid.nfo`) credits
the tag's author as "Jeremy Thorne" with no release year, CSDb reference, or
technique comment — the thinnest kind of entry that database has. Combined
with the 100%-one-composer usage, a full census of all 7 tagged files (via
CSDb's webservice, `type=sid`) shows every one shares the identical PSID
load/init address pair and the identical uncertain `198?` release-year
placeholder — one player instance, never dated more precisely by CSDb
itself. Ice Team's JC64dis disassembler independently names "Song Writer"
as its own distinct native player construct, external corroboration that
this is a real, singular routine rather than a database artifact. The
working assumption remains that this is Thorne's own hand-coded, personal
player routine rather than a tool anyone else picked up — strengthened by
this pass, but still an inference from concentration and corroborating
signals, not a directly sourced fact, so `platform` stays `TODO`-qualified
rather than asserted as fact.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **name collision** with this
project's own curated `Songwriter` player entry (Samuel Wantman/Art Bardige,
a commercial 1983-84 product cracked by 2703 Group and demoed by Florasoft)
— confirmed unrelated by author mismatch, but an easy trap for a future pass
skimming `data/players.json` for a match. Otherwise: single-composer
concentration, and an almost total absence of documentation (no STIL, no
Musicians.txt entry, no CSDb release for the routine itself).

## Disassembly notes

None. No source or public disassembly exists; a future pass could take one
of the 7 `.sid`s (e.g. via its PSID header init/play addresses) and trace it
through `sidm2-siddump` — that is the only route to any Tier 3 fact here.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are confirmed
(SIDId author field, local file/composer aggregation, CSDb search
confirming no separate tool release exists). No Tier 3 runtime fact was
guessed; every memory/entry/format field is `TODO`.

## Sources

See the `sources` array — the SIDId `sidid.nfo` entry, the local composer
dataset, `knowledge/COVERAGE.md`, and a CSDb search confirming no distinct
tool release exists (plus the name-collision check against the unrelated
curated `Songwriter` entry).
