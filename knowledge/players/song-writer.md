# Song_Writer (Jeremy Thorne)

```json
{
  "id": "song-writer",
  "name": "Song_Writer (Jeremy Thorne)",
  "aliases": ["Song_Writer"],
  "authors": ["Jeremy Thorne"],
  "released": "TODO: year unconfirmed (HVSC composer profile lists 'active: 1987')",
  "status": "stub",
  "platform": "TODO: unconfirmed. All 7 known uses are composer Jeremy Thorne's own tunes (see quirks) — likely a native C64, hand-coded/personal player routine rather than a distributed editor. No tool release, .d64, or source has been found.",
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
    "No STIL.txt comment exists for any of the 7 Song_Writer-tagged files (checked directly). HVSC's Musicians.txt DOES have a 'Thorne, Jeremy' entry (line 1692) but it is a bare handle line with no group or country attached — no additional biographical detail beyond confirming the name."
  ],
  "sources": [
    "sidid.nfo entry (author only, no reference/comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: data/composers/jeremy-thorne.json (7 of 11 files tagged 'Song_Writer', all composed by Jeremy Thorne)",
    "Local aggregation: 7 files, single raw tag 'Song_Writer', no source flag",
    "CSDb search confirms only the 7 Jeremy Thorne SIDs match 'Song Writer', no separate tool release: https://csdb.dk/search/?seinsel=all&search=Song+Writer",
    "Unrelated commercial 'Songwriter' (name-collision check): https://csdb.dk/release/?id=166760 and https://csdb.dk/release/?id=84840"
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
with the 100%-one-composer usage, the working assumption is that this is
Thorne's own hand-coded, personal player routine rather than a
tool anyone else picked up — but that is an inference from concentration,
not a sourced fact, so `platform` stays `TODO`-qualified rather than
asserted as fact.

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
