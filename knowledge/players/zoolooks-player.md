# Zoolook's Player

```json
{
  "id": "zoolooks-player",
  "name": "Zoolook's Player",
  "aliases": ["Zoolook's player"],
  "authors": ["Unknown — attributed only by the tag name 'Zoolook'; not independently identified as a scener/musician (see quirks)"],
  "released": "TODO: the one locally-tagged file testing it is dated 1989 (Vibrants) — no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: unidentified — no CSDb tool/release page found under this name; possibly named after the 1986/1987 demo(s) titled 'Zoolook' (several unrelated C64 demos share that title, itself referencing Jean-Michel Jarre's 1984 album) rather than after a scener's own handle — unresolved",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Not in SIDId (checked data/sidid.json byTag — absent). The single locally-tagged file is 'Test (in Zoolook's Player)', composer Jens-Christian Huus (JCH — the already-heavily-carded author of jch-newplayer.md/jch-oldplayer.md/etc), 1989, group Vibrants, per its CSDb SID entry (id 49661).",
    "'ZOOLOOK' IDENTITY IS UNRESOLVED: no scener handled exactly 'Zoolook' was identified via CSDb/web search during this pass. Multiple UNRELATED C64 demo productions are titled 'Zoolook' (e.g. by Fairlight 1989, by Defiers 1987, by Blazon 2025) — the name is a common demoscene reference to Jean-Michel Jarre's 1984 album of the same title, not a unique handle. It is plausible 'Zoolook's Player' names a routine by whoever made ONE of these 'Zoolook'-titled productions, or plausible it's simply named after the demo the tune itself was tested for — neither is confirmed here (TODO).",
    "IMPORTANT SCOPE NOTE: this file's COMPOSER is JCH, but JCH is not the credited AUTHOR of this player — the filename/tag explicitly frames this as a test of somebody ELSE's ('Zoolook's') player. No `edges` relationship to JCH's own already-carded families (jch-newplayer.md, jch-oldplayer.md, jch-newplayer-v20.md, jch-protracker.md, jch-digiplayer.md) is asserted — this tag is not one of JCH's own aliases in any of those cards, and no source states a code relationship.",
    "Single-file tag (1 file) — per this batch's own working rule, a 1-file tag is presumptively a personal/one-off routine; here it's additionally ambiguous whose routine it even is."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb SID entry 49661, 'Test (in Zoolook's Player)' (Jens-Christian Huus/JCH, 1989, Vibrants): https://csdb.dk/sid/?id=49661",
    "Web search pass for a 'Zoolook' scener identity — inconclusive, multiple unrelated same-titled demo productions found (Fairlight 1989, Defiers 1987, Blazon 2025), no scener handle match",
    "Local dataset: 1 file tagged Zoolook's player, composer JCH — data/composers/*.json aggregation"
  ]
}
```

## Overview

`Zoolook's player` is a Player-ID-only tag (no SIDId entry) for a single
locally-tagged file, "Test (in Zoolook's Player)" — composed in 1989 by
**Jens-Christian Huus (JCH)**, of Vibrants, but explicitly testing a player
credited to someone or something called "Zoolook", not JCH's own work. No
scener handled "Zoolook" was identified; the name is more commonly a
demoscene reference to Jean-Michel Jarre's 1984 album, reused as a title by
several unrelated C64 demo productions. Whose routine this actually is
remains unresolved.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry, no CSDb tool page;
(2) "Zoolook" identity is genuinely unresolved — not a confirmed scener
handle; (3) despite the composer being JCH (already extensively carded
elsewhere in this KB), no `edges` relationship is asserted to any of his
own player families — this tag is explicitly testing someone else's code,
per its own filename.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check), one CSDb SID
entry, and a search pass for the "Zoolook" identity. `status: stub`.

## Sources

See the `sources` array — SIDId absence check, CSDb SID entry 49661, and
the local composer aggregation.
