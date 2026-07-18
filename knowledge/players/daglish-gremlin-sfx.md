# Daglish/Gremlin_SFX

```json
{
  "id": "daglish-gremlin-sfx",
  "name": "Daglish/Gremlin_SFX",
  "aliases": ["Daglish/Gremlin_SFX"],
  "authors": ["Ben Daglish"],
  "released": "TODO: locally-associated file 'Skate Crazy' (Gremlin Graphics, 1988) — no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: possibly the Gremlin in-house driver referenced (but not itself named or dated) in the already-carded knowledge/players/ben-daglish.md card — see quirks; NOT independently confirmed to be the same code",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Not in SIDId (checked data/sidid.json byTag — absent). This is a DIFFERENT, separate Player-ID tag from the already-carded 'Ben_Daglish/Gremlin' (knowledge/players/ben-daglish.md, aliases ['Ben_Daglish/Gremlin', 'Ben_Daglish'], 54 files) — 'Daglish/Gremlin_SFX' is not among that card's aliases and was not folded in here without direct evidence.",
    "POSSIBLE BUT UNCONFIRMED RELATIONSHIP: the existing ben-daglish.md card's own quirks state that, per VGMPF, once Daglish 'joined Gremlin in-house, [he] used another driver' — a still-undocumented Gremlin-house routine distinct from the earlier Crowther/Music Master tooling. This tag's name ('Gremlin_SFX') is suggestive of being exactly that undocumented in-house Gremlin routine, but NO source directly states this identification — recorded here as an open lead only, and per this project's rule, no `edges` entry is asserted without direct evidence.",
    "Only 1 locally-tagged file: 'Skate Crazy' (Gremlin Graphics, credited to Ben Daglish; CSDb sid entry 10357) — too small a sample to say anything about composer concentration beyond noting it is Daglish's own credited tune."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry for 'Daglish/Gremlin_SFX': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Sibling card, same composer, different (already-carded) tag: knowledge/players/ben-daglish.md",
    "Local dataset: 1 file tagged Daglish/Gremlin_SFX ('Skate Crazy', csdb sid id 10357), composer Ben Daglish — data/composers/*.json aggregation"
  ]
}
```

## Overview

`Daglish/Gremlin_SFX` is a Player-ID-only tag (no SIDId entry) for a single
locally-tagged file, "Skate Crazy" (Gremlin Graphics), credited to **Ben
Daglish** — the same composer already carded under a DIFFERENT tag,
`Ben_Daglish/Gremlin` (`knowledge/players/ben-daglish.md`). That existing
card notes an unresolved, undocumented "Gremlin-house" driver Daglish used
once he joined Gremlin in-house, distinct from his earlier Crowther/Music
Master tooling — this tag's name is suggestive of being exactly that
routine, but no source confirms the identification, so no `edges` entry is
recorded.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) this is a genuinely separate
SIDId/Player-ID tag from the existing `ben-daglish.md` card, not folded in
without evidence; (2) a plausible but unconfirmed link to that card's own
"undocumented Gremlin-house driver" lead; (3) only 1 file, too small a
sample for composer-concentration signal.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. Comparing a disassembly of this tag's file against the
`ben-daglish.md` card's traced sample (720 Degrees) would be the natural
next step to test the "same Gremlin-house driver" lead.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check), `data/composers/*.json`,
and cross-reference against the sibling card. `status: stub`.

## Sources

See the `sources` array — SIDId absence check, the sibling `ben-daglish.md`
card, and the local composer aggregation.
