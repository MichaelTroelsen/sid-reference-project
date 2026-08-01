# Daglish/?Jeff_Calder

```json
{
  "id": "daglish-jeff-calder",
  "name": "Daglish/?Jeff_Calder",
  "aliases": ["Daglish/?Jeff_Calder"],
  "authors": ["Ben Daglish (credited composer)", "Jeff Calder (uncertain — SIDId's own '?'-flagged secondary attribution)"],
  "released": "1991 (Switchblade, Gremlin Graphics) — the tagged tune's own CSDb SID-entry page (csdb.dk/sid/?id=10362) states 'Released: 1991 Gremlin Graphics', confirming the earlier web corroboration",
  "status": "stub",
  "platform": "Native C64 in-game replay routine, built into the 1991 Gremlin Graphics game 'Switchblade' — DeepSID records the file's player_type as 'Normal built-in' (data/composers/ben-daglish.json), i.e. not a distributed/standalone editor or tool. SIDId's sidid.nfo has no entry for the exact tag 'Daglish/?Jeff_Calder' at all, and CSDb has no person/scener entry for 'Jeff Calder' (checked via csdb.dk search — 'unable to find anything'), consistent with a one-off, unpublished in-game driver rather than a catalogued, reusable player. This is a DISTINCT Player-ID signature from the already-carded 'Ben_Daglish/Gremlin' tag (knowledge/players/ben-daglish.md) — the leading '?' in SIDId's own tag naming flags the tool's own uncertainty about the secondary attribution; possibly a Switchblade-specific driver rather than Daglish's usual Gremlin-house routine.",
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
    "SIDId's sidid.nfo has NO entry for the exact tag 'Daglish/?Jeff_Calder' (checked) — the raw tag string itself, with its leading '?' before the secondary name, is Player-ID's own uncertainty marker; not corroborated by any SIDId comment.",
    "The single locally tagged file is 'Switchblade', by Ben Daglish (data/composers/ben-daglish.json). Switchblade (1991, Gremlin Graphics) is independently confirmed via web sources: Ben Daglish composed the music, and Jeff Calder programmed the game — Calder was the GAME's coder, not usually credited as a musician. This raises a plausible (but UNCONFIRMED) reading: the tag may denote a Switchblade-specific in-game driver, possibly written or adapted by Calder as the game's programmer, distinct from Daglish's usual Gremlin-house routine documented in [[ben-daglish]] (54 files, Ben_Daglish/Gremlin tag) — which does NOT include this file.",
    "NOT MERGED with knowledge/players/ben-daglish.md: different raw tag string, and the '?Jeff_Calder' qualifier is evidence of a genuinely distinct signature rather than a simple alias — no edge asserted absent a real disassembly comparing this file's driver against the Ben_Daglish/Gremlin routine.",
    "csdb_release is null and stays null: SIDId has no entry for this tag (no reference id to inherit), and CSDb has no person entry for 'Jeff Calder' and no standalone tool/player release for this tag — the file's own csdb_id (10362) is a SID-entry id in the sid namespace, not a release id, per the project's own csdbId landmine note in CLAUDE.md.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'Daglish/?Jeff_Calder': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/ben-daglish.json (folder[] entry for 'Switchblade', player tag 'Daglish/?Jeff_Calder', player_type 'Normal built-in', csdb_id 10362 — a SID-entry id, not a release id)",
    "CSDb SID entry directly checked: https://csdb.dk/sid/?id=10362 — 'Released: 1991 Gremlin Graphics', Author: Ben Daglish; confirms the released year and rules out a separate published-player CSDb release for this tag",
    "CSDb site search for a 'Jeff Calder' person/scener entry: https://csdb.dk/search/?seinsel=all&search=Jeff+Calder — no results ('unable to find anything for you')",
    "Web search corroboration: Switchblade (1991, Gremlin Graphics) — music by Ben Daglish, programming by Jeff Calder (multiple sources incl. YouTube upload credits and Wikipedia's Ben Daglish game-credit list): https://en.wikipedia.org/wiki/Ben_Daglish",
    "Sibling KB card, cross-checked for false-merge risk (kept separate; no code-sharing evidence found): knowledge/players/ben-daglish.md",
    "Local dataset: 1 file tagged Daglish/?Jeff_Calder — 'Switchblade', by Ben Daglish (census: only tagged file, fully checked)"
  ]
}
```

## Overview

Daglish/?Jeff_Calder is a Player-ID tag applied to a single locally tagged
file, "Switchblade" (1991, Gremlin Graphics — confirmed directly on the
tune's own CSDb SID-entry page, csdb.dk/sid/?id=10362), credited to composer
**Ben Daglish**. The tag's own leading `?` before "Jeff_Calder" —
Switchblade's real-world game programmer, not usually a credited musician —
is Player-ID's own uncertainty marker about a secondary attribution.
DeepSID classifies the file's `player_type` as "Normal built-in",
consistent with a one-off in-game replay routine rather than a distributed,
standalone editor/tool — CSDb has no separate release entry for this
signature and no person entry for "Jeff Calder" at all. This is a DISTINCT
signature from the much larger, already-carded
[Ben_Daglish/Gremlin](ben-daglish.md) tag (54 files); this file is not
among those 54, and no evidence merges the two absent a disassembly.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the tag's own `?` marks SIDId's
uncertainty, not a confirmed co-authorship; (2) Jeff Calder is confirmed as
Switchblade's real programmer, raising a plausible-but-unconfirmed reading
that this could be a game-specific driver distinct from Daglish's usual
Gremlin routine; (3) deliberately NOT merged with `ben-daglish.md` given
the different raw tag and lack of code-level evidence.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. A disassembly of the Switchblade `.sid` compared
against a Ben_Daglish/Gremlin file would resolve whether these are the same
driver.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/ben-daglish.json`, `data/sidid.json`) plus a direct fetch
of the tune's CSDb SID-entry page, a CSDb person-search for "Jeff Calder",
and prior web corroboration of Switchblade's real credits. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the local
composer data, the CSDb SID entry (csdb.dk/sid/?id=10362), a CSDb
person-search for "Jeff Calder" (no results), web corroboration of
Switchblade's credits, and the sibling ben-daglish.md card.
