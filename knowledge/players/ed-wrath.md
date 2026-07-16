# Ed/Wrath (player routine)

```json
{
  "id": "ed-wrath",
  "name": "Ed/Wrath (player routine)",
  "aliases": ["Ed/Wrath"],
  "authors": ["Eddie Svärd (Ed)"],
  "released": "TODO: no explicit release year found — Ed's active HVSC period runs from the late 1980s (handle 'Ed', 1989+) into 2012 per his DeepSID/CSDb profile",
  "status": "stub",
  "platform": "TODO: no CSDb tool release, source repo, or standalone download found — likely a composer-embedded in-tune routine rather than a distributed editor (see quirks), but not confirmed by a direct citation",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no disassembly performed",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO: no disassembly performed",
    "play": "TODO: no disassembly performed"
  },
  "speed": "TODO: no disassembly performed",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly performed",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "100% single-composer concentration: every one of the 69 files tagged 'Ed/Wrath' in this project's local dataset (data/composers/ed.json) belongs to the composer 'Ed' (Eddie Svärd) himself — no other composer's files use this tag. This is the strongest possible personal-routine signal (cf. Rob Hubbard's 51-composer spread as the opposite case).",
    "'Wrath' in the tag name is almost certainly Ed's demoscene group, Wrath Designs (Swedish; Eddie + his twin brother James, joined 2/2-2007 per CSDb), not a second author — CSDb credits Eddie with the 'Coder' function within the group, and an 8bittoday.com profile states plainly 'James is the visual artist and Eddie does both audio and programming', consistent with Ed writing his own in-house player rather than using someone else's named 'Wrath'.",
    "SIDId's sidid.nfo entry for both 'Ed/Wrath' and 'Ed/Wrath_Digi' carries only an AUTHOR line — no NAME, RELEASED, REFERENCE, or COMMENT field — confirmed by reading the raw deepsid_dl/sidid.nfo bundled in this project (lines 360-364), matching data/sidid.json's byTag entries exactly. This is the thinnest identity record short of no entry at all: the routine was fingerprinted by SIDId's byte-signature scanner but was never independently researched/documented by that project either.",
    "'Ed/Wrath_Digi' (1 file) and 'Ed/Wrath_Digi_2' (2 files) are SEPARATE SIDId/Player-ID signatures from 'Ed/Wrath' (distinct COVERAGE.md rows — 'Ed/Wrath' is rank #8, 69 files; 'Ed/Wrath_Digi' is rank #199, 3 files combined), NOT consolidated onto this card's aliases despite the shared name/author/composer-exclusive usage — no source confirms they share code with the main routine, only that Eddie Svärd made both. Presumably a sample/digi-playback variant, but that stays a hypothesis, not an asserted fact.",
    "No CSDb tool/release page, no public source repository, and no format documentation were found for this routine during this pass — it looks like an embedded, never-separately-released in-tune driver rather than a published tracker/editor, similar in kind (if not scale) to the classic hand-coded in-game drivers like Rob Hubbard's."
  ],
  "sources": [
    "Local dataset: data/composers/ed.json — 69 files tagged 'Ed/Wrath' + 3 files tagged 'Ed/Wrath_Digi'/'Ed/Wrath_Digi_2', all authored by Eddie Svärd (Ed); see knowledge/COVERAGE.md rows #8 (Ed/Wrath, 69 files) and #199 (Ed/Wrath_Digi, 3 files)",
    "data/sidid.json byTag['Ed/Wrath'] and byTag['Ed/Wrath_Digi']: author 'Eddie Svärd (Ed)', no other fields",
    "SIDId project source (raw sidid.nfo, upstream of the cached copy): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener profile (Eddie Svärd / Wrath Designs, id 17435): https://csdb.dk/scener/?id=17435 — handles incl. 'Ed' (1989-present); group Wrath Designs (2007-); functions Coder/Diskmag Editor/Graphician/Musician",
    "CSDb group-linked scener page (id 1671, matches data/composers/ed.json profile.csdb_id): https://csdb.dk/scener/?id=1671",
    "8bittoday.com profile ('The work of Ed and Joe'): https://www.8bittoday.com/articles/32/the-work-of-ed-and-joe/ — 'James is the visual artist and Eddie does both audio and programming'",
    "DeepSID composer profile embedded locally (data/composers/ed.json): full_name Eddie Svärd, country Sweden, active 2012, csdb_id 1671"
  ]
}
```

## Overview

"Ed/Wrath" is a SIDId-fingerprinted player tag, not a published tool: every
one of the 69 files carrying it in this project's dataset belongs to a single
composer, Eddie "Ed" Svärd, a Swedish demoscener active from the late 1980s
into at least 2012 and a core member (with his twin brother James) of the
group **Wrath Designs**. Public profiles describe Eddie as doing "both audio
and programming" for the group, which — combined with the 100% single-composer
concentration — points to this being Ed's own hand-coded, in-house music
routine (named `<handle>/<group>` in scene convention) rather than a
distributed editor used by other musicians. No CSDb tool release, source
repository, or format documentation was found for the routine itself.

## Quirks & gotchas

See the `quirks` array. The load-bearing facts: **100% of the tagged files
belong to one composer** (the strongest personal-routine signal available —
contrast with Rob Hubbard's 51-composer reuse spread), and **SIDId's own
record for this tag is minimal** (author only, no release/reference/comment),
meaning even the upstream identification project never researched it further.

## Disassembly notes

None performed. No public source or prior disassembly was located, so all
Tier 3 (memory map, entry points, speed model, data/effect formats) is left
`TODO` rather than guessed.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
here: authorship (Eddie Svärd), the exclusive single-composer usage pattern
(from this project's local `data/composers/ed.json`), the raw SIDId record
(author-only, cross-checked against the upstream `cadaver/sidid` repo), and
Eddie's group/role context from CSDb and an independent interview (8bittoday).
No runtime behaviour has been confirmed or reconstructed.

## Sources

See the `sources` array — the local composer dataset, the cached and upstream
SIDId records, Eddie Svärd's CSDb scener profiles, and the 8bittoday.com
profile article.
