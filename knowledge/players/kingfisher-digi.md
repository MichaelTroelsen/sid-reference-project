# KingFisher_Digi

```json
{
  "id": "kingfisher-digi",
  "name": "KingFisher_Digi",
  "aliases": ["KingFisher_Digi"],
  "authors": ["King Fisher (Sweden, Triad; real name not disclosed on CSDb)"],
  "released": "TODO: no explicit tool-release date found; locally-tagged files span the 1988-era 'Ninja Music II' credit through later solo work",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 digi/sample routine embedded in King Fisher's own tracks, not a released standalone editor — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "No SIDId entry exists for this tag (checked data/sidid.json byTag — null). Everything here comes from this project's own composer aggregation plus CSDb's scener page for King Fisher.",
    "WEAK evidence only for the 'digi' label, deliberately flagged rather than asserted: King Fisher's CSDb credits include 'Ninja Music II' (1988) as 'Code, Graphics, Ripping' — 'Ripping' typically means extracting/reusing existing graphics or sample data from other software, not authoring an original digi-playback routine. No release credits King Fisher with an explicit 'Sampling' role. This is NOT confirmation of sample-playback technique — recorded honestly as unconfirmed (TODO), per this batch's core rule that a '_Digi' tag name is not itself evidence.",
    "4 files, 1 composer: Fisher King ('Keep This Frequency Clear', 'Red October', 'Red Storm', 'Utopia') — a personal routine by usage pattern, not a published tool.",
    "King Fisher (real name undisclosed on CSDb) is a Swedish scener, current group Triad (since 9-1990), former Byterapers/Mute 101/Rebels/Royalty/The Zaints; CSDb notes he later became a Linux kernel subsystem maintainer (top-10 committer in 2016) — trivia, not player-relevant."
  ],
  "sources": [
    "data/sidid.json byTag — confirmed no entry for \"KingFisher_Digi\"",
    "CSDb scener King Fisher/Triad (Sweden; 'Ninja Music II' 1988 credited Code/Graphics/Ripping): https://csdb.dk/scener/?id=659",
    "Local dataset: 4 files tagged KingFisher_Digi, 1 composer (Fisher King) — data/composers/fisher-king.json",
    "data/composers/fisher-king.json (profile country Sweden, csdb id 659)"
  ]
}
```

## Overview

KingFisher_Digi is the raw Player-ID tag for a routine attributed to
**King Fisher**, a Swedish scener (member of Triad since 1990, formerly
Byterapers/Mute 101/Rebels/Royalty/The Zaints). It appears in only **4
files, all by one composer** — Fisher King himself — consistent with a
personal, in-house routine rather than a published tool. No SIDId entry
exists for the tag, and CSDb's only remotely relevant credit ("Ninja Music
II", 1988, "Code, Graphics, Ripping") is weak, ambiguous evidence at best —
"Ripping" more commonly denotes reusing existing data than authoring
original sample playback, so this card does not claim the digi technique
is confirmed.

## Quirks & gotchas

See the `quirks` array. Load-bearing: unlike some sibling tags in this
batch, there is **no solid corroboration** that this routine actually does
sample/digi playback — the only CSDb credit found ("Ripping") is
ambiguous, and no SIDId comment or manual exists. Recorded honestly as
unconfirmed rather than inferred from the tag name.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb scener page
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId byTag (no entry), CSDb scener page for
King Fisher, and the local composer aggregation.
